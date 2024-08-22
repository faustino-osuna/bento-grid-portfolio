import Card from "../components/Card";
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Hero = () => {
    return (
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
                        <a href="https://github.com/faustino-osuna" target="_blank"><FaGithub className="w-8 h-auto transition ease-linear duration-150 hover:scale-110" /></a>
                        <a href="https://linkedin.com/in/luis-faustino-osuna-rivera-791606240" target="_blank"><FaLinkedin className="w-8 h-auto transition ease-linear duration-150 hover:scale-110" /></a>
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
    )
}

export default Hero