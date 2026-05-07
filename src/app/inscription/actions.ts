"use server";

import { z } from "zod";
import prisma from "@/lib/prisma";
import { resend } from "@/lib/resend";

const inscriptionSchema = z.object({
    nom: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
    prenoms: z.string().min(2, "Les prénoms doivent contenir au moins 2 caractères"),
    age: z.number().int().min(7, "Âge minimum : 7 ans").max(17, "Âge maximum : 17 ans"),
    provenance: z.string().min(2, "Indiquez votre provenance"),
    telephone: z.string().min(8, "Numéro invalide (minimum 8 chiffres)"),
    filieres: z.array(z.string()).min(1, "Choisissez au moins une filière"),
    site: z.string().min(1, "Choisissez un site de formation"),
});

export type InscriptionInput = z.infer<typeof inscriptionSchema>;

export async function createInscription(data: unknown): Promise<{ success: boolean; error?: string }> {
    const parsed = inscriptionSchema.safeParse(data);
    if (!parsed.success) {
        return { success: false, error: parsed.error.issues[0].message };
    }

    const { nom, prenoms, age, provenance, telephone, filieres, site } = parsed.data;

    try {
        await prisma.inscription.create({
            data: { nom, prenoms, age, provenance, telephone, filieres, site },
        });

        await resend.emails.send({
            from: "Programme FUTUR <onboarding@resend.dev>",
            to: process.env.ADMIN_EMAIL ?? "hermannrichy15@gmail.com",
            subject: `Nouvelle inscription — ${prenoms} ${nom}`,
            html: `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /></head>
<body style="margin:0;padding:0;background:#f4f6f9;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f9;padding:32px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:#1a2740;padding:28px 32px;text-align:center;">
              <p style="color:#65b3d9;font-size:11px;letter-spacing:3px;text-transform:uppercase;margin:0 0 6px;">Programme FUTUR</p>
              <h1 style="color:#ffffff;font-size:22px;margin:0;">Nouvelle Inscription</h1>
            </td>
          </tr>

          <!-- Badge -->
          <tr>
            <td style="padding:24px 32px 0;text-align:center;">
              <span style="display:inline-block;background:#65b3d9;color:#fff;font-size:12px;font-weight:600;padding:6px 18px;border-radius:20px;letter-spacing:1px;">
                Reçue le ${new Date().toLocaleDateString("fr-FR", { day: "2-digit", month: "long", year: "numeric" })}
              </span>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:24px 32px 32px;">

              <!-- Informations personnelles -->
              <h2 style="font-size:13px;font-weight:700;color:#1a2740;text-transform:uppercase;letter-spacing:1px;margin:0 0 14px;padding-bottom:8px;border-bottom:2px solid #65b3d9;">
                Informations personnelles
              </h2>
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                ${[
                    ["Nom", nom],
                    ["Prénoms", prenoms],
                    ["Âge", `${age} ans`],
                    ["Provenance", provenance],
                    ["Téléphone", `<a href="tel:${telephone}" style="color:#65b3d9;text-decoration:none;">${telephone}</a>`],
                ].map(([label, value]) => `
                <tr>
                  <td style="padding:8px 0;border-bottom:1px solid #f0f0f0;color:#555;font-size:14px;width:140px;">${label}</td>
                  <td style="padding:8px 0;border-bottom:1px solid #f0f0f0;color:#1a2740;font-size:14px;font-weight:600;">${value}</td>
                </tr>`).join("")}
              </table>

              <!-- Filières -->
              <h2 style="font-size:13px;font-weight:700;color:#1a2740;text-transform:uppercase;letter-spacing:1px;margin:0 0 14px;padding-bottom:8px;border-bottom:2px solid #65b3d9;">
                Filières choisies
              </h2>
              <div style="margin-bottom:24px;">
                ${filieres.map(f => `
                <span style="display:inline-block;background:#f0f7fc;color:#1a2740;font-size:13px;font-weight:600;padding:5px 14px;border-radius:20px;margin:4px 4px 4px 0;border:1px solid #65b3d9;">
                  ${f}
                </span>`).join("")}
              </div>

              <!-- Site -->
              <h2 style="font-size:13px;font-weight:700;color:#1a2740;text-transform:uppercase;letter-spacing:1px;margin:0 0 14px;padding-bottom:8px;border-bottom:2px solid #65b3d9;">
                Site de formation
              </h2>
              <p style="font-size:15px;color:#1a2740;font-weight:700;margin:0 0 24px;background:#f0f7fc;padding:12px 16px;border-radius:8px;border-left:4px solid #65b3d9;">
                📍 ${site}
              </p>

              <!-- CTA -->
              <div style="text-align:center;margin-top:8px;">
                <a href="${process.env.NEXT_PUBLIC_APP_URL ?? "https://programme-futur.vercel.app"}/dashboard"
                   style="display:inline-block;background:#1a2740;color:#ffffff;font-size:14px;font-weight:600;padding:12px 28px;border-radius:8px;text-decoration:none;">
                  Voir dans le dashboard →
                </a>
              </div>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f4f6f9;padding:16px 32px;text-align:center;border-top:1px solid #e8edf2;">
              <p style="font-size:12px;color:#999;margin:0;">
                © ${new Date().getFullYear()} Programme FUTUR — Bénin, Afrique de l'Ouest
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
        });

        return { success: true };
    } catch {
        return { success: false, error: "Une erreur est survenue. Veuillez réessayer." };
    }
}
