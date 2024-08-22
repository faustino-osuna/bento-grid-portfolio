import { RiArrowLeftWideFill, RiArrowRightWideFill } from "react-icons/ri"
import Card from "../components/Card"

const Projects = () => {
  return(
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
  )
}

export default Projects