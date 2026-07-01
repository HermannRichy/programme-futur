'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { CheckCircle2, Loader2 } from 'lucide-react';
import {
    IconUser,
    IconCalendar,
    IconMapPin,
    IconPhone,
    IconSchool,
    IconBuildingCommunity,
} from '@tabler/icons-react';

import { createInscription } from '@/app/inscription/actions';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';

const FILIERES = [
    'Intelligence artificielle',
    'Pilotage drone',
    'Cybersécurité',
    "Initiation à l'informatique",
    'Développement web',
    'Photographie',
    'Initiation à la robotique',
] as const;

const SITES = [
    'Cotonou / Akpakpa',
    'Cotonou / Haie-Vive',
    'Godomey PK14',
    'Porto-Novo',
    'Dassa-Zoumè',
    'Parakou / U-ESAE',
] as const;

const schema = z.object({
    nom: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
    prenoms: z
        .string()
        .min(2, 'Les prénoms doivent contenir au moins 2 caractères'),
    age: z
        .number()
        .int()
        .min(7, 'Âge minimum : 7 ans')
        .max(17, 'Âge maximum : 17 ans'),
    provenance: z.string().min(2, 'Indiquez votre provenance'),
    telephone: z.string().min(8, 'Numéro invalide (minimum 8 chiffres)'),
    filieres: z.array(z.string()).min(1, 'Choisissez au moins une filière'),
    site: z.string().min(1, 'Choisissez un site de formation'),
});

type FormValues = z.infer<typeof schema>;

export default function InscriptionForm() {
    const [success, setSuccess] = useState(false);
    const [serverError, setServerError] = useState<string | null>(null);

    const form = useForm<FormValues>({
        resolver: zodResolver(schema),
        defaultValues: {
            nom: '',
            prenoms: '',
            age: undefined as unknown as number,
            provenance: '',
            telephone: '',
            filieres: [],
            site: '',
        },
    });

    const { isSubmitting } = form.formState;

    async function onSubmit(values: FormValues) {
        setServerError(null);
        const result = await createInscription(values);
        if (result.success) {
            setSuccess(true);
            form.reset();
        } else {
            setServerError(result.error ?? 'Une erreur est survenue.');
        }
    }

    if (success) {
        return (
            <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-xl font-bold text-[#24324d]">
                    Inscription enregistrée !
                </h2>
                <p className="text-gray-500 max-w-sm text-sm">
                    Votre inscription a bien été prise en compte. Nous vous
                    contacterons prochainement.
                </p>
                <Button
                    variant="outline"
                    className="mt-2"
                    onClick={() => setSuccess(false)}
                >
                    Nouvelle inscription
                </Button>
            </div>
        );
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Informations personnelles */}
                <div>
                    <div className="flex items-center gap-2 mb-5">
                        <div className="w-7 h-7 rounded-full bg-[#65b3d9] flex items-center justify-center shrink-0">
                            <IconUser className="w-4 h-4 text-white" />
                        </div>
                        <h3 className="font-semibold text-[#24324d] text-base">
                            Informations personnelles
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <FormField
                            control={form.control}
                            name="nom"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Nom{' '}
                                        <span className="text-red-500">*</span>
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Ex: JOHN"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="prenoms"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Prénoms{' '}
                                        <span className="text-red-500">*</span>
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Ex: Doe"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="age"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Âge{' '}
                                        <span className="text-red-500">*</span>
                                    </FormLabel>
                                    <FormControl>
                                        <div className="relative">
                                            <IconCalendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                            <Input
                                                type="number"
                                                min={7}
                                                max={17}
                                                placeholder="Ex: 14"
                                                className="pl-9"
                                                value={field.value ?? ''}
                                                onChange={(e) =>
                                                    field.onChange(
                                                        e.target.value === ''
                                                            ? undefined
                                                            : e.target
                                                                  .valueAsNumber
                                                    )
                                                }
                                            />
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="provenance"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Provenance{' '}
                                        <span className="text-red-500">*</span>
                                    </FormLabel>
                                    <FormControl>
                                        <div className="relative">
                                            <IconMapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                            <Input
                                                placeholder="Ex: Cotonou, CEG1"
                                                className="pl-9"
                                                {...field}
                                            />
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="telephone"
                            render={({ field }) => (
                                <FormItem className="sm:col-span-2">
                                    <FormLabel>
                                        Numéro à contacter{' '}
                                        <span className="text-red-500">*</span>
                                    </FormLabel>
                                    <p className="text-xs text-muted-foreground -mt-1 mb-1">
                                        Numéro du parent ou de l&apos;enfant
                                    </p>
                                    <FormControl>
                                        <div className="relative">
                                            <IconPhone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                            <Input
                                                type="tel"
                                                placeholder="Ex: +229 97 00 00 00"
                                                className="pl-9"
                                                {...field}
                                            />
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </div>

                <div className="border-t border-gray-100" />

                {/* Filières */}
                <FormField
                    control={form.control}
                    name="filieres"
                    render={() => (
                        <FormItem>
                            <div className="flex items-center gap-2 mb-5">
                                <div className="w-7 h-7 rounded-full bg-[#65b3d9] flex items-center justify-center shrink-0">
                                    <IconSchool className="w-4 h-4 text-white" />
                                </div>
                                <div>
                                    <FormLabel className="font-semibold text-[#24324d] text-base">
                                        Filière / Spécialité{' '}
                                        <span className="text-red-500">*</span>
                                    </FormLabel>
                                    <p className="text-xs text-muted-foreground">
                                        Choix multiple possible
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {FILIERES.map((filiere) => (
                                    <FormField
                                        key={filiere}
                                        control={form.control}
                                        name="filieres"
                                        render={({ field }) => {
                                            const checked =
                                                field.value?.includes(filiere);
                                            return (
                                                <FormItem className="flex items-center space-x-0 space-y-0">
                                                    <FormControl>
                                                        <label
                                                            className={cn(
                                                                'flex items-center gap-3 w-full cursor-pointer rounded-lg border px-4 py-3 text-sm transition-colors',
                                                                checked
                                                                    ? 'border-[#65b3d9] bg-[#65b3d9]/5 text-[#24324d] font-medium'
                                                                    : 'border-gray-200 text-gray-600 hover:border-[#65b3d9]/50 hover:bg-gray-50'
                                                            )}
                                                        >
                                                            <Checkbox
                                                                checked={
                                                                    checked
                                                                }
                                                                onCheckedChange={(
                                                                    ch
                                                                ) => {
                                                                    const val =
                                                                        field.value ??
                                                                        [];
                                                                    field.onChange(
                                                                        ch
                                                                            ? [
                                                                                  ...val,
                                                                                  filiere,
                                                                              ]
                                                                            : val.filter(
                                                                                  (
                                                                                      v
                                                                                  ) =>
                                                                                      v !==
                                                                                      filiere
                                                                              )
                                                                    );
                                                                }}
                                                                className="data-[state=checked]:bg-[#65b3d9] data-[state=checked]:border-[#65b3d9]"
                                                            />
                                                            {filiere}
                                                        </label>
                                                    </FormControl>
                                                </FormItem>
                                            );
                                        }}
                                    />
                                ))}
                            </div>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="border-t border-gray-100" />

                {/* Site */}
                <FormField
                    control={form.control}
                    name="site"
                    render={({ field }) => (
                        <FormItem>
                            <div className="flex items-center gap-2 mb-5">
                                <div className="w-7 h-7 rounded-full bg-[#65b3d9] flex items-center justify-center shrink-0">
                                    <IconBuildingCommunity className="w-4 h-4 text-white" />
                                </div>
                                <FormLabel className="font-semibold text-[#24324d] text-base">
                                    Site de formation{' '}
                                    <span className="text-red-500">*</span>
                                </FormLabel>
                            </div>
                            <Select
                                onValueChange={field.onChange}
                                value={field.value}
                            >
                                <FormControl>
                                    <SelectTrigger className="h-10">
                                        <SelectValue placeholder="Sélectionnez votre site…" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent className="bg-blue-950 text-white">
                                    {SITES.map((site) => (
                                        <SelectItem key={site} value={site}>
                                            {site}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {serverError && (
                    <p className="text-sm text-red-500 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                        {serverError}
                    </p>
                )}

                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-11 bg-[#24324d] hover:bg-[#1a2740] text-white font-semibold rounded-xl text-sm"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Envoi en cours…
                        </>
                    ) : (
                        'Soumettre mon inscription'
                    )}
                </Button>
            </form>
        </Form>
    );
}
