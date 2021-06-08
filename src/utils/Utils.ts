export const isValueEmpty = (value: string | number): boolean => {
    return !value || isStringBlank(value.toString());
};
export const isStringBlank = (value: string): boolean => {
    return value.length === 0 || !value.trim();
};
const getParamsObject = (search: string) => {
    return search.split("&").reduce((prev: any, curr) => {
        let p = curr.split("=");
        prev[decodeURIComponent(p[0])] = decodeURIComponent(p[1]);
        return prev;
    }, {});
};
export const removeParam = (removeKey: string, searchParams: string) => {
    if (searchParams.length) {
        const paramStr = searchParams.split("?")[1];
        const urlParams = getParamsObject(paramStr);
        delete urlParams[removeKey];
        let filterSearch = "";
        const paramTotal = Object.keys(urlParams).length;
        Object.keys(urlParams).map((currentKey: string, index: number) => {
            filterSearch = `${filterSearch}${currentKey}=${
                urlParams[currentKey]
            }${index < paramTotal - 1 ? "&" : ""}`;
        });
        return filterSearch.length ? `?${filterSearch}` : filterSearch;
    } else {
        return "";
    }
};
