import Card from "../components/Card";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { basics } from "../../../resume.json";

const { name, label, summary, profiles, image } = basics;

const SOCIAL_ICONS = {
  "Github": FaGithub,
  "Linkedin": FaLinkedin,
};

const Hero = () => {
  return (
    <Card styles="developer flex flex-col gap-8">
      <article className="flex flex-col md:flex-row items-center gap-8">
        <img
          src={image}
          className="w-[120px] md:w-[160px] h-auto rounded drop-shadow"
        />
        <div className="h-full flex flex-col justify-center flex-1 text-center md:text-start">
          <h2 className="text-4xl font-bold mb-2">{name}</h2>
          <h1 className="text-3xl mb-4">{label}</h1>
          <ul className="inline-flex gap-4 items-center justify-center md:justify-start">
            {profiles.map(({ network, url }, idx) => {
              const Icon = SOCIAL_ICONS[network];

              return (
                <a
                  href={url}
                  title={`Visitar el perfil de ${name} en ${network}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={idx}
                >
                  <Icon className="w-8 h-auto transition ease-linear duration-150 hover:scale-110"/>
                </a>
              );
            })}
          </ul>
        </div>
      </article>
      <article>
        <p className="text-lg text-center md:text-start">{summary}</p>
      </article>
    </Card>
  );
};

export default Hero;
