import React, {useState, useEffect} from "react";
import {useTranslation} from "next-translate";

export interface IListItem {
    imgUrl: string;
    desc: string;
}

const useRemoteList = () => {
    const {t, lang} = useTranslation();
    const [communicateList, setCommunicateList] = useState<IListItem[]>([]);
    const [toolList, setToolList] = useState<IListItem[]>([]);
    const [storeList, setStoreList] = useState<IListItem[]>([]);

    useEffect(() => {
        setCommunicateList([
            {
                imgUrl: "/images/md/google-workspace/remote/gmail.svg",
                desc: t("google-workspace:Gmail")
            },
            {
                imgUrl: "/images/md/google-workspace/remote/calendar.svg",
                desc: t("google-workspace:Calendar")
            },
            {
                imgUrl: "/images/md/google-workspace/remote/chat-product-icon.svg",
                desc: t("google-workspace:Chat")
            },
            {
                imgUrl: "/images/md/google-workspace/remote/meet.svg",
                desc: t("google-workspace:Meet")
            },
            {
                imgUrl: "/images/md/google-workspace/remote/group.svg",
                desc: t("google-workspace:Voice")
            },
            {
                imgUrl: "/images/md/google-workspace/remote/currents-logo.svg",
                desc: t("google-workspace:Currents")
            }
        ]);
        setToolList([
            {
                imgUrl: "/images/md/google-workspace/remote/docs.svg",
                desc: t("google-workspace:Docs")
            },
            {
                imgUrl: "/images/md/google-workspace/remote/sheets-product-icon.svg",
                desc: t("google-workspace:Sheets")
            },
            {
                imgUrl: "/images/md/google-workspace/remote/slides-product-icon.svg",
                desc: t("google-workspace:Slides")
            },
            {
                imgUrl: "/images/md/google-workspace/remote/forms-product-icon.svg",
                desc: t("google-workspace:Forms")
            },
            {
                imgUrl: "/images/md/google-workspace/remote/sites-product-icon.svg",
                desc: t("google-workspace:Sites")
            },
            {
                imgUrl: "/images/md/google-workspace/remote/keep-product-icon.svg",
                desc: t("google-workspace:Keep")
            },
            {
                imgUrl: "/images/md/google-workspace/remote/jamboard@2x.webp",
                desc: t("google-workspace:Jamboard")
            },
            {
                imgUrl: "/images/md/google-workspace/remote/appscript@2x.webp",
                desc: t("google-workspace:App Script")
            }
        ]);
        setStoreList([
            {
                imgUrl: "/images/md/google-workspace/remote/drive.svg",
                desc: t("google-workspace:Drive")
            },
            {
                imgUrl: "/images/md/google-workspace/remote/cloud-search@2x.webp",
                desc: t("google-workspace:Cloud Search")
            },
            {
                imgUrl: "/images/md/google-workspace/remote/admin-product-icon.svg",
                desc: t("google-workspace:Admin")
            },
            {
                imgUrl: "/images/md/google-workspace/remote/endpoint@2x.webp",
                desc: t("google-workspace:Endpoint")
            },
            {
                imgUrl: "/images/md/google-workspace/remote/vault@2x.webp",
                desc: t("google-workspace:Vault")
            },
            {
                imgUrl: "/images/md/google-workspace/remote/workinsights@2x.webp",
                desc: t("google-workspace:Work Insights")
            }
        ])

    }, [lang]);

    return [communicateList, toolList, storeList]
};
export default useRemoteList;