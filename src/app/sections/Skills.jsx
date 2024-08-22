import { IoLogoCss3, IoLogoHtml5, IoLogoJavascript, IoLogoNodejs, IoLogoPython, IoLogoReact, IoLogoVue } from "react-icons/io5"
import Card from "../components/Card"
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri"
import { SiDjango, SiLaravel, SiMysql, SiPhp } from "react-icons/si"
import { FaGitAlt } from "react-icons/fa"

const Skills = () => {
    return (
        <Card styles="skills">
            <h3 className="text-3xl font-semibold mb-6 uppercase">Hard Skills</h3>
            <ul className="flex flex-wrap gap-4">
                <IoLogoJavascript className="w-10 h-auto drop-shadow" />
                <IoLogoHtml5 className="w-10 h-auto drop-shadow" />
                <IoLogoCss3 className="w-10 h-auto drop-shadow" />
                <IoLogoReact className="w-10 h-auto drop-shadow" />
                <IoLogoVue className="w-10 h-auto drop-shadow" />
                <RiNextjsFill className="w-10 h-auto drop-shadow" />
                <IoLogoNodejs className="w-10 h-auto drop-shadow" />
                <RiTailwindCssFill className="w-10 h-auto drop-shadow" />
                <IoLogoPython className="w-10 h-auto drop-shadow" />
                <SiDjango className="w-10 h-auto drop-shadow" />
                <SiPhp className="w-10 h-auto drop-shadow" />
                <SiLaravel className="w-10 h-auto drop-shadow" />
                <SiMysql className="w-10 h-auto drop-shadow" />
                <FaGitAlt className="w-10 h-auto drop-shadow" />
            </ul>
        </Card>
    )
}

export default Skills