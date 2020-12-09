import React, {Fragment} from 'react';


interface IProps {
    lang: string
}

const IconQuote = ({lang = 'en'}: IProps) => {
    const getIconEN = () => {
        return (
            <svg width="50px" height="30px" viewBox="0 0 50 30">
                <g id="styleguide" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="material/case-study-1280" transform="translate(-507.000000, -309.000000)" fill="#EAB107"
                       fillRule="nonzero">
                        <g id="Group" transform="translate(20.000000, 267.000000)">
                            <g id="case-study" transform="translate(0.000000, 39.000000)">
                                <path
                                    d="M511.347656,32.6914062 L510.820312,31.4023438 C514.101579,23.9804316 519.316371,14.6250564 526.464844,3.3359375 L536.777344,3.3359375 L535.835934,5.55183213 C531.497377,15.8063802 527.924493,24.8528254 525.117188,32.6914062 L511.347656,32.6914062 Z M487.324219,32.6914062 L486.972656,31.4023438 L487.268765,30.7491406 C488.601776,27.8447571 490.583134,23.9804929 493.212891,19.15625 C496.044936,13.9609115 499.160139,8.68752676 502.558594,3.3359375 L512.871094,3.3359375 L511.929684,5.55183213 C507.591127,15.8063802 504.018243,24.8528254 501.210938,32.6914062 L487.324219,32.6914062 Z"
                                    id="quotes"/>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        )
    };
    const getIconZH = () => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="35" viewBox="0 0 40 35">
                <path fill="none" fillRule="evenodd" stroke="#EAB107" strokeWidth="12" d="M486.2 34L486.2 5 519.2 5"
                      transform="translate(-480 1)"/>
            </svg>
        )
    };
    return (
        <Fragment>
            {(lang === 'en') ? getIconEN() : getIconZH()}
        </Fragment>
    );
};
export default IconQuote;
