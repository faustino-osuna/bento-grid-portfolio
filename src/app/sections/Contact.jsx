"use client";

import { useForm } from "react-hook-form";
import { FaAt } from "react-icons/fa";
import Card from "../components/Card";
import { Toaster, toast } from "sonner";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    fetch('/api/send', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => toast.success('Se envio el correo con exito'))
    .catch(err => toast.error('Ocurrio un error'))
  })

  return (
    <Card styles="contact relative flex flex-col justify-center gap-6">
      <FaAt className="absolute w-[200px] md:w-[260px] h-auto opacity-25 -z-20" />
      <h3 className="text-3xl font-semibold uppercase text-center">
        ¿Tienes algun proyecto?, ¡Hablemos!
      </h3>
      <form className="flex flex-col gap-4" onSubmit={onSubmit}>
        <div className="flex flex-col gap-2">
          <label htmlFor="nombre" className="text-lg">
            Nombre:
          </label>
          <input
            id="nombre"
            type="text"
            placeholder="Tu Nombre"
            className="p-2 rounded shadow-lg text-slate-700 outline-none focus:ring-4 focus:ring-cyan-800"
            {...register("nombre", {
              required: {
                value: true,
                message: 'Nombre es requerido'
              },
              minLength: {
                value: 3,
                message: 'El nombre debe de tener al menos 3 caracteres'
              },
            })}
          />
          {errors.nombre && (
            <span className="text-red-500">{errors.nombre.message}</span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="correo" className="text-lg">
            Email:
          </label>
          <input
            id="correo"
            type="email"
            placeholder="Correo electrónico"
            className="p-2 rounded shadow-lg text-slate-700 outline-none focus:ring-4 focus:ring-cyan-800"
            {...register("email", {
              required: {
                value: true,
                message: "Correo es requerido"
              },
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: 'Correo no valido'
              }
            })}
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="mesaje" className="text-lg">
            Mensaje:
          </label>
          <textarea
            id="mesaje"
            placeholder="Mensaje..."
            rows={6}
            className="p-2 rounded shadow-lg text-slate-700 outline-none focus:ring-4 focus:ring-cyan-800"
            {...register("mensaje", {
              required: {
                value: true,
                message: "Mensaje es requerido"
              },
            })}
          />
          {errors.mensaje && (
            <span className="text-red-500">{errors.mensaje.message}</span>
          )}
        </div>
        <button
        className="mt-4 px-4 py-2 rounded bg-slate-950 shadow-lg transition ease-linear duration-150 hover:bg-white hover:text-black w-full">
          Enviar Correo
        </button>
      </form>
      
    </Card>
  );
};

export default Contact;
