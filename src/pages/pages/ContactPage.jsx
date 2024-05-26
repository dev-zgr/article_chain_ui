import React from "react";
import {InfoPagePMetaComponent} from "../../meta-components/InfoPage/InfoPagePMetaComponent";
import {InfoPageWrapperComponent} from "../../components/Wrappers/InfoPageWrapperComponent";
import {InfoPageH1MetaComponent} from "../../meta-components/InfoPage/InfoPageH1MetaComponent";
export const ContactPage = () => {
    return (
        <InfoPageWrapperComponent>
            <InfoPageH1MetaComponent>
                Contact Us
            </InfoPageH1MetaComponent>
            <InfoPagePMetaComponent>
                Thank you for using Article Chain! We value your feedback and are here to assist you. Please feel free to reach out to us using the contact information provided below.
            </InfoPagePMetaComponent>
            <div className="content-wrapper__contact">
                <InfoPagePMetaComponent>
                    <strong>Customer Support:</strong>
                </InfoPagePMetaComponent>
                <InfoPagePMetaComponent>
                    <ul>
                        <li><strong>Email:</strong> <a href="mailto:support@articlechain.com" target="_new">support@articlechain.com</a></li>
                        <li><strong>Phone:</strong> [+1 (555) 123-4567]</li>
                    </ul>
                </InfoPagePMetaComponent>
                <InfoPagePMetaComponent>
                    <strong>Business Inquiries:</strong>
                </InfoPagePMetaComponent>
                <InfoPagePMetaComponent>
                    <ul>
                        <li><strong>Email:</strong> <a href="mailto:info@articlechain.com" target="_new">info@articlechain.com</a></li>
                        <li><strong>Phone:</strong> +1 (555) 987-6543</li>
                    </ul>
                </InfoPagePMetaComponent>
                <InfoPagePMetaComponent>
                    <strong>Address:</strong>
                    Article Chain Headquarters
                    123 Blockchain Street
                    Ankara, Turkey
                    Postal Code: 06500
                </InfoPagePMetaComponent>
                <InfoPagePMetaComponent>
                    For any general inquiries, feedback, or support requests, please use the form below. We strive to respond to all inquiries within 24 hours. We appreciate your interest in Article Chain and look forward to hearing from you!
                </InfoPagePMetaComponent>
            </div>
        </InfoPageWrapperComponent>
    );
}
