import { IoLocationOutline } from "react-icons/io5";
import { MdOutlinePhoneEnabled } from "react-icons/md";
import { TbClockHour10 } from "react-icons/tb";
import { FiMail, FiPhone, FiMapPin, FiClock } from "react-icons/fi";

export const CONTACT_INFO = {
  title: "Get in Touch",
  subtitle: "Contact Information",
  description: "Fill up the form and our team will get back to you within 24 hours.",
  details: [
    {
      icon: FiMail,
      title: "Email",
      info: "contact@cosmomedia.com",
      link: "mailto:contact@cosmomedia.com"
    },
    {
      icon: FiPhone,
      title: "Phone",
      info: "+212 631 003 454",
      link: "tel:+212631003454"
    },
    {
      icon: FiMapPin,
      title: "Location",
      info: "Maarif, Casablanca",
      link: "https://maps.app.goo.gl/oYcXVM92vBLxuSVD7"
    },
    {
      icon: FiClock,
      title: "Working Hours",
      info: "Mon - Fri: 9:00 - 18:00",
      link: null
    }
  ]
};

export const FORM_OPTIONS = {
  title: "Send us a Message",
  subtitle: "How can we help?",
  subjects: [
    { value: "", label: "Select a subject" },
    { value: "general", label: "General Inquiry" },
    { value: "support", label: "Technical Support" },
    { value: "billing", label: "Billing Question" },
    { value: "other", label: "Other" }
  ]
};
