import * as React from "react"
import {Header} from "./ui/Header"
import {RightArrowIcon} from "./ui/Icon"

const Projects = () => {
  const projects = [
    {
      name: "Reddio",
      description: "Reddio is a music player curated by the users of Reddit built in Ruby on Rails and React.",
      website: "https://github.com/onesneakymofo/reddio",
    },
    {
      name: "Takeoff",
      description: "Takeoff is a reusable, portable headless component library built in React. It can be installed one component at a time or several.",
      website: "https://github.com/onesneakymofo/takeoff",
    },
    {
      name: "Mantle (Deprecated)",
      description: "Mantle is intended to be a utility-based UI library built using React. It will expedite the creation of design systems.",
      website: "hhttps://github.com/onesneakymofo/mantle-deprecated",
    },
  ]
  return (
    <>
      <div className="mb-10">
        <div className="flex mt-10 justify-between items-center">
          <Header size="md" className="text-white">Current Projects</Header>
          <a
            href="https://www.github.com/onesneakymofo"
            target="_blank"
            rel="noreferrer"
            className="inline-block px-3 py-2 rounded antialiased tracking-wide border transform hover:scale-105 font-medium text-center bg-gray-300 border-gray-300 font-semibold text-gray-900 hover:bg-gray-200 hover:border-gray-200 text-sm md:text-lg"
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
                    <Header size="xs">{project.name}</Header>
                    <RightArrowIcon />
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
