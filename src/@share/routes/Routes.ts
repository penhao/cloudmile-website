export interface IRoute {
    path: string;
    link?: { en: string; zh: string };
    breadcrumbName: string;
    disabled?: boolean;
    breadcrumbDisabled?: boolean;
    routes?: IRoute[];
}
export const getBreadcrumb = (pathname: string) => {
    let pathSplit = pathname.split("/").slice(1);
    pathSplit = pathSplit.map((_elem, index) =>
        pathSplit.slice(0, index + 1).reduce((a, b) => {
            return a + "/" + b;
        })
    );
    let breadcrumb: IRoute[] = [getRoute("/")];
    pathSplit.map((path: string) => {
        const route = getRoute("/" + path);
        if (!route.breadcrumbDisabled) breadcrumb.push(route);
    });
    return breadcrumb;
};
export const getRoute = (
    pathname: string,
    currentRoute = [],
    routes: IRoute[] = Routes
) => {
    routes.forEach((o) => {
        if (o.routes) getRoute(pathname, currentRoute, o.routes);
        if (o.path === pathname) currentRoute.push(o);
    });
    return currentRoute[0];
};
const Routes = <IRoute[]>[
    {
        path: "/",
        breadcrumbName: "Home",
        disabled: true,
        breadcrumbDisabled: true,
    },
    {
        path: "/cloud",
        disabled: false,
        breadcrumbName: "Cloud",
        breadcrumbDisabled: true,
        routes: [
            {
                path: "/cloud/solutions",
                breadcrumbName: "Solutions",
                disabled: false,
                breadcrumbDisabled: true,
                routes: [
                    {
                        path: "/cloud/solutions/digital-transformation",
                        breadcrumbName: "Digital Transformation",
                        disabled: false,
                        breadcrumbDisabled: false,
                    },
                    {
                        breadcrumbName: "IT Modernization",
                        path: "/cloud/solutions/it-modernization",
                        disabled: false,
                        breadcrumbDisabled: false,
                    },
                    {
                        breadcrumbName: "Cloud Migration",
                        path: "/cloud/solutions/cloud-migration",
                        disabled: false,
                        breadcrumbDisabled: false,
                    },
                    {
                        breadcrumbName: "Data Driven Business",
                        path: "/cloud/solutions/data-driven-business",
                        disabled: false,
                        breadcrumbDisabled: false,
                    },
                    {
                        breadcrumbName: "Cloud Management Platform",
                        path: "/cloud/solutions/cloud-management-platform",
                        disabled: false,
                        breadcrumbDisabled: false,
                    },
                    {
                        breadcrumbName: "Business Productivity",
                        path: "/cloud/solutions/google-workspace",
                        disabled: false,
                        breadcrumbDisabled: false,
                    },
                ],
            },
            {
                path: "/cloud/services",
                breadcrumbName: "Services",
                disabled: false,
                breadcrumbDisabled: true,
                routes: [
                    {
                        breadcrumbName: "All Cloud Services",
                        path: "/cloud/services/all-cloud-services",
                        disabled: false,
                        breadcrumbDisabled: false,
                    },
                    {
                        breadcrumbName: "Managed Service",
                        link: {
                            en: "https://www.mile.cloud/cloud/services/managed-service/",
                            zh: "https://www.mile.cloud/zh-hant/cloud/services/managed-service/",
                        },
                        disabled: false,
                        breadcrumbDisabled: true,
                    },
                ],
            },
        ],
    },
    {
        path: "/ai",
        breadcrumbName: "AI",
        disabled: false,
        breadcrumbDisabled: true,
        routes: [
            {
                path: "/ai/solutions",
                breadcrumbName: "Solutions",
                disabled: false,
                breadcrumbDisabled: true,
                routes: [
                    {
                        path: "/ai/adsvantage",
                        breadcrumbName: "ADsvantage",
                        disabled: false,
                        breadcrumbDisabled: false,
                    },
                ],
            },
            {
                path: "/ai/services",
                breadcrumbName: "Services",
                disabled: false,
                breadcrumbDisabled: true,
                routes: [
                    {
                        path: "/ai/artificial-intelligence-services",
                        breadcrumbName: "AI Services",
                        disabled: false,
                        breadcrumbDisabled: false,
                    },
                ],
            },
        ],
    },
    {
        path: "/resources",
        breadcrumbName: "Resources",
        disabled: false,
        breadcrumbDisabled: true,
        routes: [
            {
                path: "/resources/blog",
                breadcrumbName: "Blog",
                disabled: false,
                breadcrumbDisabled: false,
            },
            {
                path: "/resources/media-center",
                breadcrumbName: "Media Center",
                disabled: false,
                breadcrumbDisabled: false,
            },
            {
                path: "/resources/case-study",
                breadcrumbName: "Case Study",
                disabled: false,
                breadcrumbDisabled: false,
            },
            {
                path: "/resources/event",
                breadcrumbName: "Event",
                disabled: false,
                breadcrumbDisabled: false,
            },
            {
                path: "/resources/video",
                breadcrumbName: "Video",
                disabled: false,
                breadcrumbDisabled: false,
            },
        ],
    },
    {
        path: "/company",
        breadcrumbName: "Company",
        disabled: false,
        breadcrumbDisabled: true,
        routes: [
            {
                breadcrumbName: "Team",
                path: "/company/team",
                disabled: false,
                breadcrumbDisabled: false,
            },
            {
                breadcrumbName: "Partner",
                path: "/company/partner",
                disabled: false,
                breadcrumbDisabled: false,
            },
            {
                breadcrumbName: "Career",
                path: "/company/career",
                disabled: false,
                breadcrumbDisabled: false,
            },
        ],
    },
    {
        path: "/contact",
        breadcrumbName: "Contact Us",
        disabled: true,
        breadcrumbDisabled: false,
    },
    {
        path: "/privacy",
        breadcrumbName: "Privacy",
        disabled: true,
        breadcrumbDisabled: false,
    },
];

export default Routes;
