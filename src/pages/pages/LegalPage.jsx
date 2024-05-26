import React from "react";
import {InfoPagePMetaComponent} from "../../meta-components/InfoPage/InfoPagePMetaComponent";
import {InfoPageWrapperComponent} from "../../components/Wrappers/InfoPageWrapperComponent";
import {InfoPageH1MetaComponent} from "../../meta-components/InfoPage/InfoPageH1MetaComponent";
export const LegalPage = () => {
    return (
        <InfoPageWrapperComponent>
            <InfoPageH1MetaComponent>
                Article Chain - Legal Disclaimer
            </InfoPageH1MetaComponent>
            <InfoPagePMetaComponent>
                Last Updated: [Date]
            </InfoPagePMetaComponent>
            <InfoPagePMetaComponent>
                The information provided by Article Chain ("we," "us," or "our") on the Article Chain platform (the "Service") is for general informational purposes only. All information on the Service is provided in good faith; however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Service.
            </InfoPagePMetaComponent>
            <InfoPagePMetaComponent>
                <strong>Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the Service or reliance on any information provided on the Service. Your use of the Service and your reliance on any information on the Service is solely at your own risk.</strong>
            </InfoPagePMetaComponent>
            <InfoPagePMetaComponent>
                The Service may contain (or you may be sent through the Service) links to other websites or content belonging to or originating from third parties or links to websites and features. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.
            </InfoPagePMetaComponent>
            <InfoPagePMetaComponent>
                <strong>We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the Service or any website or feature linked in any banner or other advertising. We will not be a party to or in any way be responsible for monitoring any transaction between you and third-party providers of products or services.</strong>
            </InfoPagePMetaComponent>
            <InfoPagePMetaComponent>
                As with the purchase of a product or service through any medium or in any environment, you should use your best judgment and exercise caution where appropriate.
            </InfoPagePMetaComponent>
            <InfoPagePMetaComponent>
                <strong>No advice or information, whether oral or written, obtained by you from us or through the Service shall create any warranty not expressly stated in this disclaimer.</strong>
            </InfoPagePMetaComponent>
        </InfoPageWrapperComponent>
    );
}
