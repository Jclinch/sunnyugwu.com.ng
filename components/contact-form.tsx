// path: official-website/components/contact-form.tsx
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/utils/send-email";
import "./styles/contact-form.scss";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  async function onSubmit(data: FormData) {
    setLoading(true);
    setStatusMessage(null);
    try {
      await sendEmail(data);
      setStatusMessage("Message sent successfully!"); // Success message
      reset();
    } catch (error) {
      setStatusMessage("Failed to send the message. Please try again."); // Error message
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            {...register("name", { required: true })}
            required
            name="name"
            id="name"
            type="text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            {...register("email", { required: true })}
            required
            name="email"
            id="email"
            type="email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">How May I Be Of Service To You?</label>
          <textarea
            {...register("message", { required: true })}
            required
            cols={40}
            rows={10}
            id="message"
            name="message"
          ></textarea>
        </div>

        <div className="submit-section">
          <button type="submit" className="form-submit-btn">
            Submit
          </button>
          {loading && (
            <div className="loading">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}
          {statusMessage && <p className="status-message">{statusMessage}</p>}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
