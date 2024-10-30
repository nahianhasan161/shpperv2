import PrimaryFooter from "@/components/footer/primaryFooter";
import GeneralTermsSection from "@/app/[locale]/terms-conditions/sections/generalTermsSection";

import ContactUsSection from "@/app/[locale]/terms-conditions/sections/contactUsSection";

import PolicyContent from "@/components/paragraph/policyContent";
import { cookieContent } from "@/content/cookieContent";

import SecondaryNavbar from "@/components/Navbar/secondaryNavbar";
import ContactSection from "@/app/sections/contactSection";
import { useLocale, useTranslations } from "next-intl";

export const runtime = "edge";

export default function CookiePolicyPagePage() {
  const localActive = useLocale();
  const t = useTranslations("cookie_policy_content");

  const content = localActive === "ar" ? cookieContent.ar : cookieContent.en;

  return (
    <main className="overflow-hidden">
      {/* <PrimaryNavbar title="Cookie Policy" page1="HOME" page2="Cookie Policy" /> */}
      {/* {localActive} */}
      <SecondaryNavbar title={content.title} />
      <div
        className="p-5 md:p-12 max-w-[1350px] mx-auto  leading-7 tracking-wide"
        dir={localActive === "ar" ? "rtl" : "ltr"}
      >
        {/* <h1>{content.title}</h1> */}
        <GeneralTermsSection terms={content.Introduction} />
        <GeneralTermsSection terms={content.cookie} />
        <PolicyContent
          title={content.keyTerms.title}
          description={content.keyTerms.description}
          lists={content.keyTerms.lists}
        />

        {/* <PolicyContent
          title={content.cookieUse.title}
          description={content.cookieUse.description}
          lists={content.cookieUse.lists}
        /> */}
        <GeneralTermsSection terms={content.cookieType} />
        <GeneralTermsSection terms={content.cookieEssential} />
        <GeneralTermsSection terms={content.cookiePerformace} />
        <GeneralTermsSection terms={content.cookieMarketing} />

        <ContactUsSection
          title={content.contactUs.title}
          description={content.contactUs.description}
          conclution={content.contactUs.conclution}
        />
      </div>
      <ContactSection />

      <PrimaryFooter />
    </main>
  );
}
