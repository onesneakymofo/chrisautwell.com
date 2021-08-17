import * as React from "react"

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
    <div className="text-gray-800 p-2 my-6 rounded-lg">
      <div className="py-3 text-xl font-bold">Education</div>
      {degrees.map((degree, index) => {
        return (
          <div className="pb-3" key={index}>
            <div className="text-xs text-gray-500">{degree.years}</div>
            <p>
              <strong>{degree.degree}</strong>
            </p>
            <p className="text-sm">{degree.college}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Education
