import React, {Fragment, useEffect, useState} from 'react';
import JobAccordion from "./JobAccordion";
import useTranslation from "next-translate/useTranslation";
import {fetchJobList} from "../../../services/ApiServices";

const Jobs = () => {
    const [jobList, setJobJobList] = useState([]);
    const {lang} = useTranslation();
    useEffect(() => {
        const fetchData = async () => {
            return fetchJobList(lang);
        };
        fetchData().then((response: any) => {
            if (response.status) {
                setJobJobList(response.data);
                console.log(response);
            }
        });
    }, []);
    return (
        <Fragment>
            {
                (jobList && Object.keys(jobList).length) ?
                    Object.keys(jobList).map((key: any, index: number) => {
                        console.log(jobList[key]);
                        return (
                            <div key={index}>
                                {
                                    ([...jobList[key]].length)
                                        ? <JobAccordion data={jobList[key]} title={key}/>
                                        : null
                                }
                            </div>
                        );
                    }) : null
            }
        </Fragment>
    );
};
export default Jobs;
