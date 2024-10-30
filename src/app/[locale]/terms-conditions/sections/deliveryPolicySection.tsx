import PolicyContent from "@/components/paragraph/policyContent";
import { termsContent } from "@/content/termsContent";
import { useLocale } from "next-intl";
import * as React from "react";

export interface IDeliveryPolicySectionProps {}

export default function DeliveryPolicySection(
  props: IDeliveryPolicySectionProps
) {
  const localActive = useLocale();
  const content = localActive === "ar" ? termsContent.en : termsContent.en;
  return (
    <section className="text-[#777777]   space-y-4 pb-10">
      <PolicyContent
        title={content.deliveryPolicy.title}
        description={content.deliveryPolicy.description}
        lists={content.deliveryPolicy.lists}
      />
      {content.deliveryPolicy.conclution.map((content, index) => (
        <p key={index} className="">
          {content}
        </p>
      ))}
    </section>
  );
}
