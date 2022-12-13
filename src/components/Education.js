import * as React from "react"
import {Header} from "./ui/Header"
import {Section} from "./ui/Section"

const Education = () => {
  const degrees = [
    {
      college: "Jacksonville State University",
      years: "2010-2012",
      degree: "M.S., Computer Science",
    },
    {
      college: "Jacksonville State University",
      years: "2005-2010",
      degree: "B.S., Computer Science",
    },
  ]

  return (
    <Section>
      <Header size="sm" className="mb-3">Education</Header>
      {
        degrees.map((degree, index) => (
          <div className="pb-3" key={index}>
            <div className="text-xs text-gray-500">{degree.years}</div>
            <Header size="xs">
              <strong>{degree.degree}</strong>
            </Header>
            <p className="text-sm">{degree.college}</p>
          </div>
        )
      )}
    </Section>
  )
}

export default Education
