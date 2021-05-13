import React, {useState, useEffect} from "react";
import {useTranslation} from "next-translate";

export interface IStepList {
    title: string;
    detailList: IDetailItem[]
}

export interface IDetailItem {
    iconUrl: string;
    desc: string;
}

const useAdoptStepList = () => {
    const {t, lang} = useTranslation();
    const [list, setList] = useState<IStepList[]>([]);

    useEffect(() => {
        setList([
            {
                title: t('google-workspace:Pre-Deployment'),
                detailList: [
                    {
                        iconUrl: "/images/icons/product/explore-data.svg",
                        desc: t('google-workspace:Plan technical deployment'),
                    },
                    {
                        iconUrl: "/images/icons/product/domain-setting.svg",
                        desc: t('google-workspace:Verify domain'),
                    },
                    {
                        iconUrl: "/images/icons/product/action-planning.svg",
                        desc: t('google-workspace:Verify domain'),
                    }
                ]
            },
            {
                title: t('google-workspace:Phase 1 Core IT'),
                detailList: [
                    {
                        iconUrl: "/images/icons/product/provision-users.svg",
                        desc: t('google-workspace:Provision users'),
                    },
                    {
                        iconUrl: "/images/icons/product/vm-migration.svg",
                        desc: t('google-workspace:Data migration'),
                    },
                    {
                        iconUrl: "/images/icons/product/database-migration.svg",
                        desc: t('google-workspace:Others Service migration'),
                    }
                ]
            },
            {
                title: t('google-workspace:Phase 2 Early Adopter'),
                detailList: [
                    {
                        iconUrl: "/images/icons/product/user-account-setting.svg",
                        desc: t('google-workspace:Core users trail'),
                    },
                    {
                        iconUrl: "/images/icons/product/training.svg",
                        desc: t('google-workspace:Admin training'),
                    }
                ]
            },
            {
                title: t('google-workspace:Phase 3 Go-Live'),
                detailList: [
                    {
                        iconUrl: "/images/icons/product/training.svg",
                        desc: t('google-workspace:End User training'),
                    },
                    {
                        iconUrl: "/images/icons/product/managing.svg",
                        desc: t('google-workspace:Configure end user access'),
                    }
                ]
            }
        ])
    }, [lang]);

    return list;
};
export default useAdoptStepList;