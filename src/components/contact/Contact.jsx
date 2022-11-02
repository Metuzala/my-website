import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_ID
      )
      .then(
        (result) => {
          toast.success("Message sent");
        },
        (error) => {
          toast.error(error.text);
        }
      );
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section_title">Get in touch</h2>
      <span className="section_subtitle">Contact Me</span>

      <div className="contact_container container grid">
        <div className="contact_content">
          <h3 className="contact_title">Talk to me</h3>

          <div className="contact_info">
            <div className="contact_card">
              <i className="bx bx-phone contact_card-icon"></i>

              <h3 className="contact_card-title">Phone</h3>
              <span className="contact_card-data">+372 53756336</span>
            </div>

            <div className="contact_card">
              <i className="bx bx-mail-send contact_card-icon"></i>

              <h3 className="contact_card-title">Email</h3>
              <span className="contact_card-data">
                kristofermetusala@gmail.com
              </span>

              <p className="contact_button">
                {" "}
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact_button-icon"></i>
              </p>
            </div>
          </div>
        </div>

        <div className="contact_content">
          <h3 className="contact_title">
            Intrested in working together? Let's have a talk
          </h3>

          <form ref={form} onSubmit={sendEmail} className="contact_form">
            <div className="contact_form-div">
              <label className="contact_form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="contact_form-input"
                placeholder="Your name"
                required
              />
            </div>

            <div className="contact_form-div">
              <label className="contact_form-tag">Email</label>
              <input
                type="email"
                name="email"
                className="contact_form-input"
                placeholder="Email"
                required
              />
            </div>

            <div className="contact_form-div contact_form-area">
              <label className="contact_form-tag">Message</label>
              <textarea
                name="message"
                cols="30"
                row="10"
                className="contact_form-input"
                placeholder="Write your message"
                required
              ></textarea>
            </div>
            <button type="submit" className="button button--flex">
              Send Message
            </button>
            <ToastContainer />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
