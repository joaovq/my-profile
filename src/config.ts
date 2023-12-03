import { Pathnames } from "next-intl/navigation";

export const locales = ["en", "pt-BR"] as const;
export const localePrefix = "always"; // Default

export const pathnames = {
  "/": "/",
  "/about": {
    en: "/about",
    "pt-BR": "/sobre",
  },
  "/projects/[id]": {
    en: "/projects/[id]",
    "pt-BR": "/projetos/[id]",
  },
} satisfies Pathnames<typeof locales>;

export type AppPathnames = keyof typeof pathnames;