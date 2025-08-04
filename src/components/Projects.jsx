import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <>
      <div className="pb-4">
        <h2 className="my-20 text-center text-4xl">Projects</h2>
        <div>
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="mb-8 flex flex-wrap lg:justify-center"
            >
              <div className="w-full lg:w-1/4">
                <img
                  src={project.image}
                  alt={project.title}
                  width={250}
                  height={250}
                  className="rounded mb-6"
                />
              </div>
              <div className="w-full max-w-xl lg:w-3/4">
                <h3 className="mb-2 text-2xl font-semibold">
                  {project.title}
                </h3>
                <p className="mb-4 text-stone-400">{project.description}</p>

                {/* ✅ Flex-wrap container for technology badges */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((technology, techIndex) => (
                    <span
                      key={techIndex}
                      className="rounded bg-stone-900 p-2 text-sm font-medium text-stone-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
