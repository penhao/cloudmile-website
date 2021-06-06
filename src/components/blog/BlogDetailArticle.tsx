import React, { Fragment } from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Theme } from "@material-ui/core";
import DetailSlider from "../sections/resources/detail/DetailSlider";
import DetailExpansion from "../sections/resources/DetailExpansion";
import DetailCTA from "../sections/resources/DetailCTA";
import DetailQuote from "../sections/resources/DetailQuote";
import SectionContainer from "../containers/SectionContainer";
import HtmlEditor from "../sections/resources/HtmlEditor";

interface Props {
    contents: any[];
    scrollHandler: React.MouseEventHandler
}

const useStyles = makeStyles((theme: Theme) => ({
    wrapper: {
        marginBottom: '60px',
        [theme.breakpoints.up('sm')]: {
            marginBottom: '80px'
        }
    }
}));

const BlogDetailArticle = ({ contents, scrollHandler }: Props) => {
    const classes = useStyles();
    const getContent = (item: any) => {
        switch (item.type) {
            case '1':
                return <HtmlEditor content={item.html_body} />;
            case '2':
                return <DetailSlider imageList={item.album} />;
            case '3':
                return <DetailQuote desc={item.intro_body} author={item.intro_source} />;
            case '4':
                return <DetailExpansion title={item.add_title} desc={item.html_body} />;
            case '5':
                return <DetailCTA imageUrl={item.banner_image}
                    title={item.title}
                    desc={item.banner_body}
                    buttonText={item.btn_text}
                    launchUrl={item.btn_click_url}
                    clickHandler={scrollHandler} />;
            case '6':
                return <DetailCTA buttonText={item.btn_text}
                    launchUrl={item.btn_click_url}
                    onlyButton={true}
                    clickHandler={scrollHandler} />;
            default:
                return null;
        }
    };
    return (
        <SectionContainer margin={false} className={classes.wrapper}>
            {
                (contents && contents.length)
                    ?
                    contents.map((item: any, index: number) => {
                        return (
                            <Fragment key={index}>
                                {
                                    getContent(item)
                                }
                            </Fragment>
                        )
                    })
                    :
                    null
            }
        </SectionContainer>
    );
};
export default BlogDetailArticle;
