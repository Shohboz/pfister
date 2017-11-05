import acceptLanguage from "accept-language";

acceptLanguage.languages(["ru", "en"]);

export const detectLocale = req => {
  const cookieLocale = req.cookies.locale;
  return acceptLanguage.get(cookieLocale || req.headers['accept-language']) || 'en';
}
