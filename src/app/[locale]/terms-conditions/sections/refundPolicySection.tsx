import PolicyContent from "@/components/paragraph/policyContent";
import { termsContent } from "@/content/termsContent";
import { useLocale } from "next-intl";
import * as React from "react";

export interface IRefundPolicySectionProps {}

export default function RefundPolicySection(props: IRefundPolicySectionProps) {
  const localActive = useLocale();
  const content = localActive === "ar" ? termsContent.en : termsContent.en;
  return (
    <section className="text-[#777777]  space-y-4 mt-10 pb-10">
      <PolicyContent
        title={content.refundPolicy.title}
        description={content.refundPolicy.description}
        lists={content.refundPolicy.lists}
      />
      {content.refundPolicy?.conclution?.map((content, index) => (
        <p key={index}>{content}</p>
      ))}
    </section>
  );
}
