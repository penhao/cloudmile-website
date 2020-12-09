export type MaxWidth = {
    xs?: number | string,
    sm?: number | string,
    md?: number | string
};
export interface StyleProps {
    maxWidth?: MaxWidth | null;
    centerX?: boolean;
    paddingX?: boolean;
    fullHeight?: boolean;
}