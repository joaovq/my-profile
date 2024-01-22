import { FormEvent, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { userContactEmailFormData } from "./contact.schema";

export const useSendEmailContact = (handleSuccess: () => void) => {
  const [loading, setLoading] = useState(false);

  useEffect(
    () =>
      emailjs.init(
        process.env.NEXT_PUBLIC_API_KEY_EMAIL_JS == null
          ? ""
          : process.env.NEXT_PUBLIC_API_KEY_EMAIL_JS
      ),
    []
  );

  async function handleSendEmail(data: userContactEmailFormData) {
    const serviceId =
      process.env.NEXT_PUBLIC_SERVICEID_EMAIL_JS == null
        ? ""
        : process.env.NEXT_PUBLIC_SERVICEID_EMAIL_JS;
    const templateId =
      process.env.NEXT_PUBLIC_TEMPLATEID_EMAIL_JS == null
        ? ""
        : process.env.NEXT_PUBLIC_TEMPLATEID_EMAIL_JS;
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        to_name: "João Vítor",
        from_name: data.name,
        name: data.name,
        recipient: data.email,
        message: data.message,
        description: data.description,
      });
      handleSuccess();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return { loading, handleSendEmail };
};
