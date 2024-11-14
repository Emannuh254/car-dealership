import React from "react";
import {
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";

//make sure u have downloaded the fa icons from react using npminstall react-icons //

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-description">
        We'd love to hear from you! Reach out with any questions or feedback.
      </p>

      <div className="contact-info">
        <div className="contact-item">
          <FaWhatsapp className="contact-icon" />
          <p>
            WhatsApp:{" "}
            <a
              href="https://wa.me/254746100508"
              target="_blank"
              rel="noopener noreferrer"
            >
              +254 746 100 508
            </a>
          </p>
        </div>

        <div className="contact-item">
          <FaPhone className="contact-icon" />
          <p>
            Phone: <a href="tel:+254746100508">+254 746 100 508</a>
          </p>
        </div>

        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <p>
            Email: <a href="mailto:smontana@gmail.com">smontana@gmail.com</a>
          </p>
        </div>

        <div className="contact-item">
          <FaInstagram className="contact-icon" />
          <p>
            Instagram:{" "}
            <a
              href="https://instagram.com/just_khamic"
              target="_blank"
              rel="noopener noreferrer"
            >
              @just_khamic
            </a>
          </p>
        </div>

        <div className="contact-item">
          <FaTiktok className="contact-icon" />
          <p>
            TikTok:{" "}
            <a
              href="https://tiktok.com/@khamic"
              target="_blank"
              rel="noopener noreferrer"
            >
              khamic
            </a>
          </p>
        </div>

        <div className="contact-item">
          <FaTwitter className="contact-icon" />
          <p>
            Twitter:{" "}
            <a
              href="https://twitter.com/khamic"
              target="_blank"
              rel="noopener noreferrer"
            >
              Khamic
            </a>
          </p>
        </div>
      </div>

      <p className="contact-footer">
        Connect with us on social media or send us a message for a quick
        response!
      </p>
    </div>
  );
};

export default Contact;
