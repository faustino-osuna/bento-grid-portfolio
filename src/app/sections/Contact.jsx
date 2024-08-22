import { FaAt } from "react-icons/fa"
import Card from "../components/Card"

const Contact = () => {
    return (
        <Card styles="contact relative flex flex-col justify-center gap-6">
            <FaAt className="absolute w-[200px] md:w-[260px] h-auto opacity-25 -z-20" />
            <h3 className="text-3xl font-semibold uppercase text-center">¿Tienes algun proyecto?, ¡Hablemos!</h3>
            <form className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="nombre" className="text-lg focus:ring-2 focus:ring-slate-950">Nombre:</label>
                    <input id="nombre" type="text" placeholder="Tu Nombre" className="p-2 rounded shadow-lg text-slate-700" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="correo" className="text-lg">Email:</label>
                    <input id="correo" type="email" placeholder="Correo electrónico" className="p-2 rounded shadow-lg text-slate-700" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="mesaje" className="text-lg">Mensaje:</label>
                    <textarea id="mesaje" placeholder="Mensaje..." rows={6} className="p-2 rounded shadow-lg text-slate-700" />
                </div>
                <button className="mt-4 px-4 py-2 rounded bg-slate-950 shadow-lg transition ease-linear duration-150 hover:bg-white hover:text-black w-full">Enviar Correo</button>
            </form>
        </Card>
    )
}

export default Contact