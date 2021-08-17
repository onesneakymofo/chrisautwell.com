import * as React from "react"

const Experience = () => {
  const careers = [
    {
      title: "Sr. Software Engineer",
      company: "@ProctorU",
      website: "https://www.proctoru.com",
      location: "Birmingham, Alabama",
      years: "Current",
    },
    {
      title: "Software Engineer",
      company: "@ProctorU",
      website: "https://www.proctoru.com",
      location: "Birmingham, Alabama",
      years: "2016-2018",
    },
    {
      title: "Sr. Software Engineer",
      company: "@ProctorU",
      website: "https://www.proctoru.com",
      location: "Birmingham, Alabama",
      years: "2012-2016",
    },
  ]

  return (
    <div className="text-gray-800 p-2 my-6 rounded-lg">
      <div className="py-3 text-xl font-bold">Work</div>
      {careers.map((career, index) => {
        return (
          <div className="pb-3" key={index}>
            <div className="text-xs text-gray-500">{career.years}</div>
            <p className="flex justify-between">
              <strong>{career.title}</strong>
              <span className="text-gray-500 text-right">
                <a target="_blank" href="{career.website}" rel="noreferrer">
                  {career.company}
                </a>
              </span>
            </p>
            <p className="text-sm">{career.location}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Experience
