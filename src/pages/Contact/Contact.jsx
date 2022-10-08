import React from "react";
import Layout from "../../components/Layout";
import Address from "./Address";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <Layout>
      <div className="grid grid-cols-2 px-32 gap-20 mt-32 sm:grid-cols-1 sm:p-5 ">
        <Address />
        <ContactForm />
      </div>
      <div className="flex justify-center mt-32 text-center border-b-2 border-bg-secondary mx-10">
        <div className=" border-2 p-5 border-b-2 border-bg-secondary ">
          <h1 className="text-primary-focus text-2xl">
            Designed and Developed By
          </h1>
          <h1 className="text-accent-focus text-2xl uppercase">Dev scorpion</h1>
          <span className="text-primary-focus text-2xl">
            All Rights Reserved ©{`${new Date().getFullYear()}`}
          </span>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
