/* eslint-disable no-unused-vars */
import React from "react";
import ContactForm from "./form/ContactForm"

const Contact = () => {
  return (
    <div className="pt-12 sm:pt-16 px-2 sm:px-8">
      <h1 className="mb-8 sm:mb-16 font-bold text-3xl sm:text-4xl xl:text-5xl text-center mx-auto xl:text-left text-orange">Contacto</h1>
      <ContactForm />
    </div>
  );
};

export default Contact;
