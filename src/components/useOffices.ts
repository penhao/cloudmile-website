import { useState, useEffect } from "react";

export interface IOfficeProps {
    office: string;
    address: string;
    addressLink: string;
    tel: string;
    serviceEmail: string;
    hrEmail: string;
}
const useOffices = () => {
    const [offices, setOffices] = useState<IOfficeProps[] | null>(null);
    useEffect(() => {
        fetch("/offices.json", {
            headers: {
                "content-type": "application/json",
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json() as Promise<IOfficeProps[]>;
            })
            .then((data) => {
                setOffices(data);
            });
    }, []);
    return offices;
};
export default useOffices;
