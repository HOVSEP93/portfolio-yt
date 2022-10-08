import React, { useRef } from "react";
// toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// emailjs
import emailjs from "@emailjs/browser";

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xrv2qnh",
        "template_mt3m3cc",
        form.current,
        process.env.REACT_APP_API_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("message sent successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
          toast.error("please fill form fields", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      );

    e.target.reset();
  };
  return (
    <div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col space-y-10"
      >
        <h1 className="text-4xl font-semibold text-primary mb-5">
          Send a Message
        </h1>

        <div className="flex space-x-10 sm:flex-col sm:space-y-10 sm:space-x-0">
          <input
            type="text"
            placeholder="First name"
            name="firstName"
            className=" py-3 px-5 bg-secondary-content focus:outline-none rounded-lg text-primary-focus w-full"
            required
          />

          <input
            type="text"
            placeholder="Last name"
            name="lastName"
            className=" py-3 px-5 bg-secondary-content focus:outline-none rounded-lg text-primary-focus w-full"
            required
          />
        </div>

        <div className="flex space-x-10 sm:flex-col sm:space-y-10 sm:space-x-0">
          <input
            type="email"
            placeholder="Email"
            name="email"
            className=" py-3 px-5 bg-secondary-content focus:outline-none rounded-lg text-primary-focus w-full"
            required
          />

          <input
            type="text"
            placeholder="Phone Number"
            name="phone"
            className=" py-3 px-5 bg-secondary-content focus:outline-none rounded-lg text-gray- w-full"
            required
          />
        </div>

        <div className="flex space-x-10">
          <textarea
            type="text"
            rows={5}
            placeholder="Message"
            name="message"
            className=" py-3 px-5 bg-secondary-content focus:outline-none rounded-lg text-primary-focus w-full"
            required
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="text-gray-200 bg-primary font-bold text-xl px-5 py-3 rounded max-w-max hover:bg-secondary-content hover:text-primary-focus ease-in duration-300 "
          >
            Send A Message
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default ContactForm;
