import React from 'react';

interface Props {
    color?: string;
}

const IconMore = ({color}: Props) => {
    return (
        <svg width="38px" height="38px" viewBox="0 0 38 38" version="1.1">
            <title>9820A662-66F1-4305-B854-00CCA9E5DE25</title>
            <g id="blog" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round">
                <g id="blog-laptop" transform="translate(-649.000000, -2342.000000)" stroke={color} strokeWidth="2">
                    <g id="more-btn" transform="translate(602.000000, 2345.000000)">
                        <g id="icon/load-more" transform="translate(50.000000, 0.000000)">
                            <g id="load-more"
                               transform="translate(16.000000, 16.000000) rotate(-406.000000) translate(-16.000000, -16.000000) translate(5.000000, 5.000000)">
                                <path
                                    d="M11,19 C15.418278,19 19,15.418278 19,11 C19,6.581722 15.418278,3 11,3 C6.581722,3 3,6.581722 3,11"
                                    id="Oval"
                                    transform="translate(11.000000, 11.000000) rotate(-240.000000) translate(-11.000000, -11.000000) "/>
                                <polyline id="Path-2"
                                          transform="translate(14.859066, 3.986199) rotate(-139.000000) translate(-14.859066, -3.986199) "
                                          points="13.1195558 1 16.7181328 3.72714572 13 6.97239838"/>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
};

export default IconMore;
