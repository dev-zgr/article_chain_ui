import React from "react";
import {InfoPagePMetaComponent} from "../../meta-components/InfoPage/InfoPagePMetaComponent";
import {InfoPageH2MetaComponent} from "../../meta-components/InfoPage/InfoPageH2MetaComponent";
import {InfoPageWrapperComponent} from "../../components/Wrappers/InfoPageWrapperComponent";
import {InfoPageH1MetaComponent} from "../../meta-components/InfoPage/InfoPageH1MetaComponent";

export const AboutPage = () => {
    return (
        <InfoPageWrapperComponent>
            <InfoPageH1MetaComponent>
                About Article Chain
            </InfoPageH1MetaComponent>
            <InfoPageH2MetaComponent>
                1. Introduction:
            </InfoPageH2MetaComponent>
            <InfoPagePMetaComponent>
                <p>Article Chain is a revolutionary platform that leverages distributed blockchain technology to transform the landscape of academic publication. Built upon the principles of openness, collaboration, and decentralization, Article Chain aims to democratize access to scholarly research and enhance the integrity and transparency of the academic publishing process.</p>
            </InfoPagePMetaComponent>
            <InfoPageH2MetaComponent>
                2. Our Mission:
            </InfoPageH2MetaComponent>
            <InfoPagePMetaComponent>
                <p>Our mission at Article Chain is to empower researchers, academics, and institutions by providing a secure, transparent, and efficient platform for the dissemination and discovery of knowledge. We strive to remove barriers to access, promote interdisciplinary collaboration, and foster innovation in academic publishing.</p>
            </InfoPagePMetaComponent>
            <InfoPageH2MetaComponent>
                3. Our Vision:
            </InfoPageH2MetaComponent>
            <InfoPagePMetaComponent>
                <p>We envision a future where scholarly research is freely accessible to anyone, anywhere in the world. By harnessing the power of distributed blockchain technology, Article Chain seeks to create a global ecosystem where academic knowledge is shared openly, reviewed transparently, and preserved for future generations.</p>
            </InfoPagePMetaComponent>
            <InfoPageH2MetaComponent>
                4. Core Values:
            </InfoPageH2MetaComponent>
            <InfoPagePMetaComponent>
                <p>At Article Chain, we are guided by the following core values:</p>
                <ul>
                    <li>Openness: We believe in the free exchange of ideas and information, without barriers or restrictions.</li>
                    <li>Integrity: We are committed to upholding the highest standards of academic rigor, ethics, and transparency.</li>
                    <li>Decentralization: We advocate for a decentralized publishing model that empowers individuals and communities to participate in the scholarly communication process.</li>
                    <li>Innovation: We embrace technological innovation to continuously improve and evolve the academic publishing ecosystem.</li>
                    <li>Accessibility: We strive to make scholarly research accessible to all, regardless of geographical location, institutional affiliation, or financial resources.</li>
                </ul>
            </InfoPagePMetaComponent>
            <InfoPageH2MetaComponent>
                5. Our Team:
            </InfoPageH2MetaComponent>
            <InfoPagePMetaComponent>
                <p>Our team consists of passionate individuals with expertise in blockchain technology, academic publishing, software development, and community engagement. Together, we are committed to realizing the vision of a more open, transparent, and inclusive academic publishing system.</p>
            </InfoPagePMetaComponent>
            <InfoPageH2MetaComponent>
                6. Contact Us:
            </InfoPageH2MetaComponent>
            <InfoPagePMetaComponent>
                <p>If you have any questions or would like to learn more about Article Chain, please don't hesitate to contact us at <a href="mailto:contact@articlechain.com" className="text-sky-500">contact@articlechain.com</a>.</p>
            </InfoPagePMetaComponent>
        </InfoPageWrapperComponent>
    )
}
