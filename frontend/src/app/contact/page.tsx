import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support | MetaPin",
  description: "This is Contact Page for MetaPin",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Support"
        description="In case you have any issues or inquiries about the application please use the form below to reach out to us."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
