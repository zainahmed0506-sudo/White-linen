import type { Metadata } from "next";
import { ContactPage } from "../../components/contact-page";

export const metadata: Metadata = {
  title: "Contact | White Linen",
  description: "Contact White Linen Interiors about your next project.",
};

export default function Contact() {
  return <ContactPage />;
}
