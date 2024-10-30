import PolicyContent from "@/components/paragraph/policyContent";
import { termsContent } from "@/content/termsContent";
import { useLocale } from "next-intl";
import * as React from "react";

export interface ICancelationPolicySectionProps {}

export default function CancelationPolicySection(
  props: ICancelationPolicySectionProps
) {
  const localActive = useLocale();
  const content = localActive === "ar" ? termsContent.en : termsContent.en;
  return (
    <section className="text-[#777777]  space-y-4 mt-10 pb-10">
      <PolicyContent
        title={content.cancellationPolicy.title}
        description={content.cancellationPolicy.description}
        lists={content.cancellationPolicy.lists}
      />
      {content.cancellationPolicy?.conclution?.map((content, index) => (
        <p key={index} className="mt-[-10px]">
          {content}
        </p>
      ))}
    </section>
  );
}
