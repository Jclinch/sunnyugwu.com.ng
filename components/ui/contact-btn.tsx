// path: official-website\components\contact-button.tsx

import "../styles/contact-btn.css";

interface ContactButtonProps {
  onClick: () => void;
}

const ContactButton = ({ onClick }: ContactButtonProps) => {
  return (
    <button className="animated-button" onClick={onClick}>
      <span>Get in touch</span>
      <span></span>
    </button>
  );
};

export default ContactButton;
