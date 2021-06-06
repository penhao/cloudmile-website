import React from "react";
import clsx from "clsx";
import Link from "next/link";

interface ILinkComposed {
    launch: boolean;
    href: string;
    className?: string;
    children?: React.ReactNode;
}
const LinkComposed = React.forwardRef((props: ILinkComposed, ref: any) => {
    const { href, launch, ...other } = props;
    return (
        <React.Fragment>
            {launch ? (
                <a href={href} target="_blank" ref={ref} {...other}>
                    {props.children}
                </a>
            ) : (
                <Link href={href} prefetch>
                    <a ref={ref} {...other} />
                </Link>
            )}
        </React.Fragment>
    );
});

interface ILink {
    launch: boolean;
    href: string;
    innerRef: any;
    className?: string;
    onClick: () => void;
}
const RouteLink = ({
    innerRef,
}) => {
    return (
        <></>
    );
};
export default React.forwardRef((props, ref) => (
    <RouteLink innerRef={ref} />
));
