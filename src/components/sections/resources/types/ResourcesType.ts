export interface InsightListItem {
    date: Date;
    title: string;
    desc: string;
    imgUrl: {
        desktop: string,
        mobile: string
    };
}