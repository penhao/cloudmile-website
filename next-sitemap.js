module.exports = {
    siteUrl: "https://www.mile.cloud",
    changefreq: "daily",
    priority: 0.7,
    generateRobotsTxt: true,
    exclude: ["/404", "/health-check", "/thanks"],
    alternateRefs: [
        {
            href: "https://example.com/zh",
            hreflang: "zh",
        },
    ],
    // Default transformation function
    transform: async (config, path) => {
        return {
            loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
            changefreq: config.changefreq,
            priority: config.priority,
            lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
            alternateRefs: config.alternateRefs ?? [],
        };
    },
    robotsTxtOptions: {
        policies: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/404", "/health-check", "/thanks"],
            },
        ],
        additionalSitemaps: [],
    },
};
