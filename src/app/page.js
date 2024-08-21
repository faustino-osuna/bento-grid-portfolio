import Card from "./components/Card";
import { FaGithub, FaLinkedin, FaRegFileAlt, } from 'react-icons/fa'
import { FaAt } from "react-icons/fa6";
import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3, IoLogoReact, IoLogoNodejs, IoLogoVue, IoLogoPython  } from "react-icons/io5";
import { RiTailwindCssFill, RiNextjsFill, RiDownloadLine, RiArrowLeftWideFill, RiArrowRightWideFill } from "react-icons/ri";
import { SiDjango, SiPhp, SiLaravel, SiMysql } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import './styles/layout.css'

const App = () => {
  return (
    <div className="layout container mx-auto w-full h-full gap-6 text-white">
      <Card styles="developer flex flex-col gap-8">
        <article className="flex flex-col md:flex-row items-center gap-8">
          <img
            src="https://avatars.githubusercontent.com/u/144746003?v=4"
            className="w-[120px] md:w-[160px] h-auto rounded drop-shadow"
          />
          <div className="h-full flex flex-col justify-center flex-1 text-center md:text-start">
            <h2 className="text-4xl font-bold mb-2">Faustino Osuna</h2>
            <h1 className="text-3xl mb-4">Desarrollador Web</h1>
            <ul className="inline-flex gap-4 items-center justify-center md:justify-start">
              <a href="https://github.com/faustino-osuna" target="_blank"><FaGithub className="w-8 h-auto transition ease-linear duration-150 hover:scale-110"/></a>
              <a href="https://linkedin.com/in/luis-faustino-osuna-rivera-791606240" target="_blank"><FaLinkedin className="w-8 h-auto transition ease-linear duration-150 hover:scale-110"/></a>
            </ul>
          </div>
        </article>
        <article>
          <p className="text-lg text-center md:text-start">
            Ingeniero en Desarrollo de Software con experiencia laboral como
            programador, especializado en programación web, disfruto resolver
            problemas y enfrentar nuevos desafíos.
          </p>
        </article>
      </Card>
      <Card styles="cv flex flex-col justify-center relative">
        <h3 className="text-3xl font-semibold uppercase mb-4">Descarga <br/>mi CV</h3>
        <a href="/archivos/cv.pdf" target="_blank" className="inline-flex gap-2 items-center text-center px-4 py-2 rounded bg-slate-950 shadow-lg transition ease-linear duration-150 hover:bg-white hover:text-black w-1/2">
          <RiDownloadLine className="w-5 h-auto"/>
          <span>Descargar</span>
        </a>
        <FaRegFileAlt className="absolute right-4 md:-left-6 w-[150px] md:w-[350px] h-auto -z-20 opacity-25"/>
      </Card>
      <Card styles="contact relative flex flex-col justify-center gap-6">
        <FaAt className="absolute w-[200px] md:w-[300px] h-auto opacity-25 -z-20"/>
        <h3 className="text-3xl font-semibold uppercase text-center">¿Tienes algun proyecto?, ¡Hablemos!</h3>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="nombre" className="text-lg focus:ring-2 focus:ring-slate-950">Nombre:</label>
            <input id="nombre" type="text" placeholder="Tu Nombre" className="p-2 rounded shadow-lg text-slate-700"/>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="correo" className="text-lg">Email:</label>
            <input id="correo" type="email" placeholder="Correo electrónico" className="p-2 rounded shadow-lg text-slate-700"/>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="mesaje" className="text-lg">Mensaje:</label>
            <textarea id="mesaje" placeholder="Mensaje..." rows={6} className="p-2 rounded shadow-lg text-slate-700"/>
          </div>
          <button className="mt-4 px-4 py-2 rounded bg-slate-950 shadow-lg transition ease-linear duration-150 hover:bg-white hover:text-black w-full">Enviar Correo</button>
        </form>
      </Card>
      <Card styles="skills">
        <h3 className="text-3xl font-semibold mb-6 uppercase">Hard Skills</h3>
        <ul className="flex flex-wrap gap-4">
          <IoLogoJavascript className="w-10 h-auto drop-shadow"/>
          <IoLogoHtml5 className="w-10 h-auto drop-shadow"/>
          <IoLogoCss3 className="w-10 h-auto drop-shadow"/>
          <IoLogoReact className="w-10 h-auto drop-shadow"/>
          <IoLogoVue className="w-10 h-auto drop-shadow"/>
          <RiNextjsFill className="w-10 h-auto drop-shadow"/>
          <IoLogoNodejs className="w-10 h-auto drop-shadow"/>
          <RiTailwindCssFill className="w-10 h-auto drop-shadow"/>
          <IoLogoPython className="w-10 h-auto drop-shadow"/>
          <SiDjango className="w-10 h-auto drop-shadow"/>
          <SiPhp className="w-10 h-auto drop-shadow"/>
          <SiLaravel className="w-10 h-auto drop-shadow"/>
          <SiMysql className="w-10 h-auto drop-shadow"/>
          <FaGitAlt className="w-10 h-auto drop-shadow"/>
        </ul>
      </Card>
      <Card styles="projects overflow-hidden relative">
        <div className="flex items-center h-full gap-4">
          <img src="/images/punto-de-venta.png" alt="punto de venta" className="rounded aspect-video opacity-80 shadow"/>
          <img src="/images/alarmas.png" alt="sistema de alarmas" className="rounded aspect-video"/>
        </div>
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button className="p-1 rounded-full shadow bg-white/80 hover:bg-white transition ease-linear duration-150">
            <RiArrowLeftWideFill className="w-10 h-auto drop-shadow text-slate-950"/>
          </button>
          <button className="p-1 rounded-full shadow bg-white/80 hover:bg-white transition ease-linear duration-150">
            <RiArrowRightWideFill className="w-10 h-auto drop-shadow text-slate-950"/>
          </button>
        </div>
      </Card>
    </div>
  );
};

export default App;
