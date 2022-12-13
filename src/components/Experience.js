import * as React from "react"
import {Header} from "./ui/Header"
import {Section} from "./ui/Section"

const Experience = () => {
  const careers = [
    {
      title: "Sr. Software Engineer",
      company: "@Landing",
      website: "https://www.hellolanding.com",
      location: "Remote",
      years: "2021-2022",
    },
    {
      title: "Sr. Software Engineer",
      company: "@ProctorU",
      website: "https://www.proctoru.com",
      location: "Remote",
      years: "2018-2021",
    },
    {
      title: "Software Engineer",
      company: "@ProctorU",
      website: "https://www.proctoru.com",
      location: "Birmingham, Alabama",
      years: "2016-2018",
    },
    {
      title: "Jr. Software Engineer",
      company: "@ProctorU",
      website: "https://www.proctoru.com",
      location: "Birmingham, Alabama",
      years: "2012-2016",
    },
  ]

  return (
    <Section>
      <Header size="sm" className="mb-3">Work</Header>
      {
        careers.map((career, index) => (
          <div className="pb-3" key={index}>
            <div className="text-xs text-gray-500">{career.years}</div>
            <p className="flex justify-between">
              <strong>{career.title}</strong>
              <span className="text-gray-500 text-right">
                <a target="_blank" href={career.website} rel="noreferrer">
                  {career.company}
                </a>
              </span>
            </p>
            <p className="text-sm">{career.location}</p>
          </div>
        )
      )}
    </Section>
  )
}

export default Experience
