const { locales, defaultLocale } = require("./i18n.json");
module.exports = {
    i18n: {
        locales,
        defaultLocale,
    },
    env: {
        PORT: 80,
        DOMAIN_PATH: "https://uat.mile.cloud",
        API_BASE_PATH: "https://uat-backend.mile.cloud",
        RECAPTCHAKEY: "6LdLAv8ZAAAAAOna-skW7yAI9CRfGgKwpWEUUWyC",
    },
};
