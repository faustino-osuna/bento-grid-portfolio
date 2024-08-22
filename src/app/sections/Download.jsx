import { RiDownloadLine } from "react-icons/ri"
import Card from "../components/Card"
import { FaRegFileAlt } from "react-icons/fa"

const Download = () => {
    return (
        <Card styles="cv flex flex-col justify-center relative">
            <h3 className="text-3xl font-semibold uppercase mb-4">Descarga <br />mi CV</h3>
            <a href="/archivos/cv.pdf" target="_blank" className="inline-flex gap-2 items-center text-center px-4 py-2 rounded bg-slate-950 shadow-lg transition ease-linear duration-150 hover:bg-white hover:text-black w-1/2">
                <RiDownloadLine className="w-5 h-auto" />
                <span>Descargar</span>
            </a>
            <FaRegFileAlt className="absolute right-4 md:-left-6 w-[150px] md:w-[300px] h-auto -z-20 opacity-25" />
        </Card>
    )
}

export default Download