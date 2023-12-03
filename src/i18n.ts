import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => ({
  messages: (locale === "en"
    ? // When using Turbopack, this will enable HMR for `en`
      await import("../messages/en.json")
    : await import(`../messages/${locale}.json`)
  ).default,
}));
