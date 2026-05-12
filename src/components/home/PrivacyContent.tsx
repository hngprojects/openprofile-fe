import React from "react";

const tableOfContent = [
  {
    heading: "1. Introduction",
    content:
      " At Open Profile, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and protect information when you use our platform, website, and related services (“Open Profile” or the “Services”).Open Profile is designed to help freelancers, creators, and indie builders create a structured, searchable, and shareable public identity online. By using our Services, you agree to the collection and use of information in accordance with this Privacy Policy.",
  },
  {
    heading: "2. About Open Profile",
    content:
      " Open Profile is a public profile and link-sharing platform that allows users to: \nCreate public digital identity pages \n Share links and social profiles \nDiscover other public profiles \nSearch for users without requiring authentication \nInteract with publicly available creator and personal content \nBecause Open Profile is designed around discoverability, certain profile information may be publicly accessible and indexed by search engines.",
  },
  {
    heading: "3. Information We Collect",
    content:
      "We may collect the following information when you use our Service: Information You Provide \nName \nUsername \nEmail address \nProfile photo \nBiography and public profile details\nSocial media links\nMessages or support requests\nAutomatically Collected Information\nIP address\nDevice and browser information\nUsage activity\nCookies and analytics data\nApproximate location information\nPublic Profile Information\nInformation you publish on your profile may be publicly visible and searchable.",
  },
  {
    heading: "4. How We Use Your Information",
    content:
      "We use your information to:\nCreate and manage accounts\nDisplay public profiles\nImprove platform performance\nPersonalize user experience\nCommunicate updates and support messages\nPrevent fraud, abuse, and unauthorized access",
  },
  {
    heading: "5. Public Profiles And Search Visibility",
    content:
      "Open Profile is designed to create public profiles that are discoverable by search engines. Information you include in your profile may be indexed and visible to the public. You can control the visibility of certain profile elements, but some information may still be accessible through search engines.",
  },
  {
    heading: "6. Cookies And Tracking Technologies",
    content:
      "We use cookies and similar tracking technologies to enhance your experience, analyze usage, and improve our Services. You can manage your cookie preferences through your browser settings.",
  },
  {
    heading: "7. Sharing And Disclosure of Information",
    content:
      "We do not sell your personal information. We may share information with third-party service providers who help us operate our platform, but they are obligated to keep your information confidential. We may also disclose information if required by law or to protect our rights.",
  },
  {
    heading: "8. Data Protection And User Rights",
    content:
      "We implement security measures to protect your information from unauthorized access. You have the right to access, correct, or delete your personal information. You can also opt-out of certain communications and manage your profile visibility settings.",
  },

  {
    heading: "9. Children’s Privacy",
    content:
      "Open Profile is not intended for children under the age required by applicable law.We do not knowingly collect personal information from children without proper authorization or consent where required. If we discover that a child has provided personal data unlawfully, we may remove such information.",
  },
  {
    heading: "10. Changes To This Privacy Policy And Contact Information",
    content:
      "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. If you have any questions about this Privacy Policy, please contact us at ",
  },
];

const PrivacyContent = () => {
  return (
    <div>
      {tableOfContent.map((item, index) => (
        <div className="mt-6" key={index}>
          <h4 className="font-bold text-3xl">{item.heading}</h4>
          {item.content && item.content.includes("\n") ? (
            <ul className="list-disc pl-5">
              {item.content
                .split("\n")
                .map((line) => line.trim())
                .filter(Boolean)
                .map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
            </ul>
          ) : (
            <p>{item.content}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default PrivacyContent;
