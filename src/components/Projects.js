import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

const Projects = () => {
  const projects = [
    {
      name: "Mantle",
      description: "Mantle is intended to be a utility-based UI library built using React. It will expedite the creation of design systems.",
      website: "https://github.com/onesneakymofo/mantle",
    },
  ]
  return (
    <>
      <div className="mb-10">
        <div className="flex mt-10 justify-between items-center">
          <h3 className="text-xl md:text-2xl text-white font-bold">Current Projects</h3>
          <a
            href="https://www.github.com/onesneakymofo"
            target="_blank"
            rel="noreferrer"
            className="inline-block px-3 py-2 rounded antialiased tracking-wide border transform hover:scale-105 font-medium text-center bg-gray-300 border-gray-300 font-semibold text-gray-900 hover:bg-gray-200 hover:border-gray-200"
          >
            View Github
          </a>
        </div>
        {projects.map((project, index) => {
          return (
            <div className="mt-6" key={index}>
              <a href={project.website} target="_blank" rel="noreferrer">
                <div className="py-4 px-8 shadow-xl bg-indigo-800 text-white rounded-md w-100">
                  <div className="flex justify-between">
                    <div className="font-semibold mb-4">{project.name}</div>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                  <p>{project.description}</p>
                </div>
              </a>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Projects
