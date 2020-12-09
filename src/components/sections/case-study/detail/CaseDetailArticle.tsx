import React, {Fragment} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import DetailSlider from "../../resources/detail/DetailSlider";
import DetailExpansion from "../../resources/DetailExpansion";
import DetailQuote from "../../resources/DetailQuote";
import SectionContainer from "../../../containers/SectionContainer";
import HtmlEditor from "../../resources/HtmlEditor";
import CaseDetailClientInfo from "./CaseDetailClientInfo";
import DetailCTA from "../../resources/DetailCTA";


interface Props {
    contents: any;
    clientLogo: string;
    clientName: string;
    clientIntro: string;
    scrollHandler: React.MouseEventHandler;
}

const useStyles = makeStyles((theme: Theme) => ({
    wrapper: {
        marginBottom: '80px',
        [theme.breakpoints.up('sm')]: {
            marginBottom: '100px'
        }
    },
    clientName: {
        marginBottom: '5px'
    },
    client: {
        padding: '40px',
        marginTop: '40px',
        backgroundColor: theme.palette.grey["100"],
        '& .MuiGrid-container': {
            '& .MuiGrid-item': {
                '&:nth-child(1)': {
                    [theme.breakpoints.up('sm')]: {
                        flex: '0 0 160px'
                    }
                },
                '&:nth-child(2)': {
                    [theme.breakpoints.up('sm')]: {
                        flex: '1 1 calc(100% - 160px)'
                    }
                }
            }
        }
    },
    tmp: {
        width: '100%',
        height: '300px',
        backgroundColor: theme.palette.grey["400"]
    }
}));

const CaseDetailArticle = ({contents, scrollHandler, clientLogo, clientName, clientIntro}: Props) => {

    const classes = useStyles();
    const getContent = (item: any) => {
        switch (item.type) {
            case '1':
                return <HtmlEditor content={item.html_body}/>;
            case '2':
                return <DetailSlider imageList={item.album}/>;
            case '3':
                return <DetailQuote desc={item.intro_body} author={item.intro_source}/>;
            case '4':
                return <DetailExpansion title={item.add_title} desc={item.html_body}/>;
            case '5':
                return <DetailCTA imageUrl={item.banner_image}
                                  title={item.title}
                                  desc={item.banner_body}
                                  buttonText={item.btn_text}
                                  launchUrl={item.btn_click_url}
                                  clickHandler={scrollHandler}/>;
            case '6':
                return <DetailCTA buttonText={item.btn_text}
                                  launchUrl={item.btn_click_url}
                                  onlyButton={true}
                                  clickHandler={scrollHandler}/>;
            default:
                return null;
        }
    };

    return (
        <SectionContainer margin={false} className={classes.wrapper}>
            {
                (contents && contents.length)
                    ?
                    contents.map((content: any, index: number) => {
                        return (
                            <Fragment key={index}>
                                {
                                    getContent(content)
                                }
                            </Fragment>
                        )
                    })
                    : null
            }
            {
                /* Client Info*/
                <CaseDetailClientInfo logoUrl={clientLogo} title={clientName} intro={clientIntro}/>
            }
        </SectionContainer>
    );
};
export default CaseDetailArticle;
