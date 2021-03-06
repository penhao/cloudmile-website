export interface IOffice {
    office: string;
    address: string;
    addressLink: string;
    tel: string;
    serviceEmail: string;
    hrEmail: string;
}
const Offices = <IOffice[]>[
    {
        office: "Singapore Office",
        address: "Suite 1167, 5 Shenton Way, UIC Building, #10-01, Singapore",
        addressLink: "https://goo.gl/maps/oHsfXkr99wweYJzZA",
        tel: "+65-6932-2820",
        serviceEmail: "service@mile.cloud",
        hrEmail: "hr@mile.cloud",
    },
    {
        office: "Hong Kong Office",
        address:
            "Suite 402, Level 4, Lee Garden Three,1 Sunning Road, Causeway Bay, Hong Kong",
        addressLink: "https://goo.gl/maps/PeJau98wYihdbpx6A",
        tel: "+852-3481-0068",
        serviceEmail: "service@mile.cloud",
        hrEmail: "hr@mile.cloud",
    },
    {
        office: "Taipei Office",
        address: "Taiwan Address",
        addressLink: "https://goo.gl/maps/6x9FqXwzcR6dL43n9",
        tel: "+886-2-2757-6077",
        serviceEmail: "service@mile.cloud",
        hrEmail: "hr@mile.cloud",
    },
];
export default Offices;
