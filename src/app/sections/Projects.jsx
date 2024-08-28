"use client";

import Card from "../components/Card";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { projects } from "../../../resume.json";

const Projects = () => {
  return (
    <Card styles="projects flex flex-col gap-4 group">
      <h3 className="text-3xl font-semibold uppercase">Mis Proyectos</h3>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="w-full h-full"
      >
        {projects.map(({ name, description, image, technologies }, idx) => (
          <SwiperSlide key={idx}>
            <section className="absolute bottom-0 bg-neutral-900/80 h-1/5 hover:h-2/3 transition-all duration-200 ease-linear py-4 px-14 rounded">
              <header>
                <h1 className="text-white text-3xl font-bold">{name}</h1>
                <ul className="mt-1 inline-flex gap-4">
                  {technologies.map((tech, idx) => (
                    <li className="py-1 px-2 rounded border-2 border-white" key={idx}>
                      {tech}
                    </li>
                  ))}
                </ul>
              </header>
              <p className="mt-8 w-3/4">{description}</p>
            </section>
            <img
              src={image}
              className="h-full w-full rounded bg-center bg-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Card>
  );
};

export default Projects;
