import React, { useEffect, useState } from 'react';
import { useTranslation } from "next-translate";
import Layout from "../components/Layout";
import { Theme, makeStyles } from "@material-ui/core";
import SectionContainer from "../components/containers/SectionContainer";
import Typography from "@material-ui/core/Typography";
import { useRouter } from 'next/router';
import Container from '../components/containers/Container';
import { getMetadada } from '../@share/routes/Metadata';
import { getBreadcrumb } from '../@share/routes/Routes';
import Breadcrumbs from "../components/Breadcrumb";

const useStyles = makeStyles((theme: Theme) => ({
    article: {
        // paddingTop: '20px',
        '& > h6': {
            marginBottom: '20px'
        },
        '& > p': {
            marginBottom: '40px'
        },
        '& ol, ul': {

            listStylePosition: 'outside',
            margin: 0,
            paddingLeft: '20px',

            '& > li': {
                listStyleType: 'upper-roman',
                fontSize: theme.typography.pxToRem(18),
                lineHeight: 1.5,
                marginBottom: '40px',
                [theme.breakpoints.up('md')]: {
                    fontSize: theme.typography.pxToRem(20)
                },
                '& p': {
                    fontSize: theme.typography.pxToRem(14),
                    lineHeight: 1.63,
                    marginBottom: '20px',
                    [theme.breakpoints.up('md')]: {
                        fontSize: theme.typography.pxToRem(16)
                    }
                },
                '& ol': {
                    marginBottom: '20px',
                    '& > li': {
                        listStyleType: 'decimal',
                        fontSize: theme.typography.pxToRem(14),
                        lineHeight: 1.63,
                        marginBottom: '10px',
                        [theme.breakpoints.up('md')]: {
                            fontSize: theme.typography.pxToRem(16)
                        }
                    }
                },
                '& ul': {
                    marginBottom: '20px',
                    '& > li': {
                        listStyleType: 'disc',
                        fontSize: theme.typography.pxToRem(14),
                        lineHeight: 1.63,
                        marginBottom: '10px',
                        [theme.breakpoints.up('md')]: {
                            fontSize: theme.typography.pxToRem(16)
                        }
                    }
                },
                '& div': {
                    marginTop: '20px'
                },
                '& a': {
                    fontSize: theme.typography.pxToRem(14),
                    lineHeight: 1.63,
                    color: theme.palette.secondary.main,
                    textDecoration: 'underline',
                    [theme.breakpoints.up('md')]: {
                        fontSize: theme.typography.pxToRem(16)
                    }
                }
            }

        }
    },
    title: {
        display: "inline-block",
        position: "relative",
        fontSize: "2.75rem",
        fontWeight: 700,
        lineHeight: 0.8,
        margin: '20px 0 40px 0',
        left: "50%",
        transform: "translateX(-50%)",
        [theme.breakpoints.up('sm')]: {
            margin: '20px 0 60px 0',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: theme.typography.pxToRem(90),
            margin: '50px 0 90px 0',
        },
        '& span': {
            display: "block",
            position: "relative",
            marginTop: "10px",
            fontWeight: "normal",
            [theme.breakpoints.up('sm')]: {
                marginTop: "20px",
            }
        }
    }
}));
const TermsPage = () => {
    const router = useRouter();
    const classes = useStyles();
    const { t, lang } = useTranslation();
    const metadata = getMetadada(router.asPath);
    const [breadcrumbData, setBreadcrumbData] = useState([]);
    useEffect(() => {
        //
        let breadcrumbs = getBreadcrumb(router.asPath);
        breadcrumbs = breadcrumbs.map((breadcrumb) => {
            return {
                ...breadcrumb,
                breadcrumbName: t(`common:${breadcrumb.breadcrumbName}`),
            };
        })
        setBreadcrumbData(breadcrumbs)
    }, [lang]);
    return (
        <Layout metadata={{
            href: metadata.href,
            title: metadata[lang].title,
            desc: metadata[lang].desc,
        }}>
            <Container>
                <Breadcrumbs breadcrumbData={breadcrumbData} />
            </Container>
            <SectionContainer>
                <Container maxWidth={{ sm: 920, md: 920 }} className={classes.article}>
                    <Typography variant={"h1"} className={classes.title}>
                        資訊安全政策
                        <br />
                        <Typography variant={"body1"} component={"span"}>版號資訊：v1.0  發佈日期：2021/05/31</Typography>
                    </Typography>
                    <ol>
                        <li>
                            目的
                            <div>
                                <Typography variant={"body1"}>
                                    鑑於資訊安全乃維繫各項服務安全運作之基礎,為確保英屬開曼群島商萬里雲互聯股份有限公司(CLOUD MILE INC.)(以下簡稱本公司)人員、資料、資訊系統、設備及網路之安全,特訂定資訊安全政策(以下簡稱本文件),作為本公司資訊安全管理系統(以下簡稱 ISMS)的最高指導原則。本政策適用之範圍為:本公司之分公司及持有之子公司,包括但不限於:英屬開曼群島商萬里雲互聯股份有限公司台灣分公司(Cloud Mile Inc.,TaiwanBranch)及萬里雲互聯網路有限公司(Cloud Mile Ltd)。
                                </Typography>
                            </div>

                        </li>
                        <li>
                            目標
                            <div>
                                <Typography variant={"body1"}>
                                    本公司資訊安全目標為:確保重要資訊及服務之機密性(Confidentiality)、完整性(Integrity)、可用性(Availability)與遵循性(Compliance)。並依各階層與職能定義及量測資訊安全績效之量化指標,以確認 ISMS 實施狀況及是否達成資訊安全目標。
                                </Typography>
                            </div>

                        </li>
                        <li>
                            適用範圍
                            <div>
                                <Typography variant={"body1"}>
                                    本 ISMS 考量本公司內部及外部議題、關注方之需要及期望,以及本公司活動與其他組織活動間之介面及相依性,適用範圍為:MSP(Managed Service Provider)服務之規劃、建置、營運、託管、MileLync 軟體開發及作業環境。
                                </Typography>
                            </div>

                        </li>
                        <li>
                            涵蓋內容
                            <div>
                                <Typography variant={"body1"}>
                                    ISMS 包括內容如下,有關單位及人員就下列事項,應訂定對應之管理規範或實施計畫,並據以實施及定期評估實施成效:
                                </Typography>
                                <ul>
                                    <li>
                                        <Typography variant={"body1"}>
                                            資安組織及管理審查程序
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography variant={"body1"}>
                                            文件與記錄管理
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography variant={"body1"}>
                                            資安目標與績效評量
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography variant={"body1"}>
                                            風險管理
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography variant={"body1"}>
                                            資訊安全內部稽核
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography variant={"body1"}>
                                            持續改善
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography variant={"body1"}>
                                            人力資源安全管理
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography variant={"body1"}>
                                            資產管理
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography variant={"body1"}>
                                            存取控制管理
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography variant={"body1"}>
                                            實體與環境安全管理
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography variant={"body1"}>
                                            運作安全與密碼學
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography variant={"body1"}>
                                            通訊安全管理
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography variant={"body1"}>
                                            系統獲取、發展與維護管理
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography variant={"body1"}>
                                            供應商關係管理
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography variant={"body1"}>
                                            資訊安全事故管理
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography variant={"body1"}>
                                            營運持續管理
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography variant={"body1"}>
                                            遵循性管理
                                        </Typography>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            組織與權責
                            <div>
                                <Typography variant={"body1"}>
                                    為確保 ISMS 能有效運作,應明定資訊安全組織及權責,以推動及維持各類管理、執行與查核等工作之進行。
                                </Typography>
                            </div>
                        </li>
                        <li>
                            實施原則
                            <div>
                                <Typography variant={"body1"}>
                                    ISMS 之實施應依據規劃(Plan)、執行(Do)、查核(Check)及改善(Act)流程模式,以週而復始、循序漸進的精神,確保 ISMS 運作之有效性及持續改善。
                                </Typography>
                            </div>
                        </li>

                        <li>
                            審查與評估
                            <div>
                                <Typography variant={"body1"}>
                                    ISMS 之實施應依據規劃(Plan)、執行(Do)、查核(Check)及改善(Act)流程模式,以週而復始、循序漸進的精神,確保 ISMS 運作之有效性及持續改善。
                                </Typography>
                                <ol>
                                    <li>本文件應於重大變更或至少每年評估審查一次,以反映相關法令法規、技術、業務及相關部門等最新發展現況,確保資訊安全實務作業之有效性。</li>
                                    <li>本文件應依據審查結果進行修訂,並經本公司負責人簽核發佈後始生效。</li>
                                    <li>本文件訂定或修訂後應以書面、電子郵件、文件管理系統或其他方式告知關注方,如:客戶、合作夥伴、所屬員工、供應商等。</li>
                                </ol>
                            </div>
                        </li>
                    </ol>
                </Container>
            </SectionContainer>
        </Layout>
    );
}
export default TermsPage;