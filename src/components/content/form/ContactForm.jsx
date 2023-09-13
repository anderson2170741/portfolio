/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaPaperPlane } from "react-icons/fa";

const ContactForm = () => {
  const form = useRef();
  const [nombre, setNombre] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    // Validar que los campos obligatorios estén completos
    if (!nombre || !email || !mensaje) {
      setError('Por favor, complete todos los campos obligatorios.');
      return;
    }

    emailjs
      .sendForm('service_ysqgq7v', 'template_a80f74w', form.current, '5S8CHTOYPs9sMECih')
      .then(
        (result) => {
          console.log(result.text);
          // Después de enviar el mensaje, restablece los campos a sus valores iniciales y borra el mensaje de error
          setNombre('');
          setEmpresa('');
          setEmail('');
          setMensaje('');
          setError('');
        },
        (error) => {
          console.log(error.text);
          setError('Hubo un error al enviar el formulario. Por favor, inténtelo de nuevo.');
        }
      );
  };

  return (
    <div className="flex items-center justify-center">
      <form ref={form} onSubmit={sendEmail} className="w-full sm:w-5/6 sm:px-8">
        <input type="text" placeholder="Nombre" name="user_name" value={nombre} onChange={(e) => setNombre(e.target.value)} className="w-full rounded-xl border-2 py-2 px-3 mb-8 bg-black text-grey" required />
        <input type="text" placeholder="Empresa" name="company_name" value={empresa} onChange={(e) => setEmpresa(e.target.value)} className="w-full rounded-xl border-2 py-2 px-3 mb-8 bg-black text-grey" />
        <input type="email" placeholder="Email" name="user_email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-xl border-2 py-2 px-3 mb-8 bg-black text-grey" required />
        <textarea name="message" placeholder="Mensaje" value={mensaje} onChange={(e) => setMensaje(e.target.value)} className="w-full h-44 rounded-xl border-2 py-2 px-3 mb-8 bg-black text-grey" required></textarea>
        {error && <p className="text-red-500">{error}</p>}
        <button className=" hover:scale-110 duration-300 w-52 h-10 sm:w-60 sm:h-12 xl:w-64 xl:h-14 bg-yellow shadow-lg shadow-yellow/50 text-black font-extrabold md:text-lg xl:text-xl rounded-2xl flex justify-center items-center " type="submit">
          <FaPaperPlane className='mr-2'/>Enviar      
        </button>
      </form>
    </div>
  );
};

export default ContactForm;


