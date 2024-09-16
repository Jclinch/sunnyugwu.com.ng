// //path: official-website\components\contact-form.tsx
// "use client";

// import "./styles/contact-form.css";
// import { FC } from "react";
// import { useForm, SubmitHandler } from "react-hook-form";
// import { sendEmail } from "@/utils/send-email";

// // Define the form data structure
// export type FormData = {
//   name: string;
//   email: string;
//   message: string;
// };

// const ContactForm: FC = () => {
//   // Use react-hook-form for handling form data and validation
//   const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

//   // Handle form submission
//   const onSubmit: SubmitHandler<FormData> = (data) => {
//     sendEmail(data); // Send form data to backend
//   };

//   return (
//     <div className="form-container">
//       {/* Form submission with react-hook-form */}
//       <form onSubmit={handleSubmit(onSubmit)} className="form">
        
//         {/* Name field with validation */}
//         <div className="form-group">
//           <label htmlFor="name">Name</label>
//           <input 
//             id="name"
//             type="text"
//             {...register("name", { required: "Name is required" })} 
//           />
//           {errors.name && <span className="error-message">{errors.name.message}</span>}
//         </div>

//         {/* Email field with validation */}
//         <div className="form-group">
//           <label htmlFor="email">Email</label>
//           <input 
//             id="email"
//             type="email"
//             {...register("email", { 
//               required: "Email is required",
//               pattern: {
//                 value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//                 message: "Enter a valid email address"
//               }
//             })} 
//           />
//           {errors.email && <span className="error-message">{errors.email.message}</span>}
//         </div>

//         {/* Message textarea with validation */}
//         <div className="form-group">
//           <label htmlFor="message">How May I Be Of Service To You?</label>
//           <textarea
//             id="message"
//             rows={10}
//             cols={40}
//             {...register("message", { required: "Message is required" })}
//           ></textarea>
//           {errors.message && <span className="error-message">{errors.message.message}</span>}
//         </div>

//         {/* Submit button */}
//         <button type="submit" className="form-submit-btn">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;





// path: official-website/components/contact-form.tsx
// path: official-website/components/contact-form.tsx
// path: official-website/components/contact-form.tsx
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/utils/send-email";
import "./styles/contact-form.css";

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
