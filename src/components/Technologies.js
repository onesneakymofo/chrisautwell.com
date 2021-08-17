import * as React from "react"

const Technologies = () => {
	const technologies = [
		{
			name: "Languages",
			items: ["Ruby", "JavaScript", "SQL (PostgreSQL)", "HTML", "CSS"],
		},
		{
			name: "Frameworks",
			items: ["Ruby on Rails", "React", "TailwindCSS", "Bootstrap"],
		},
		{
			name: "Tools",
			items: ["Git", "Redis", "Sublime Text", "Postico", "Postman"],
		},
		{
			name: "Services",
			items: ["Github", "Jira", "AWS", "Figma", "LucidChart"],
		},
	]

	return (
		<div className="text-gray-800 p-2 rounded-lg">
			<div className="py-3 text-xl font-bold">Technologies</div>
			<div className="grid grid-flow-col grid-cols-auto gap-5 text-gray-900">
				{technologies.map((technology, index) => {
					return (
						<div key={index}>
							<div className="text-md font-semibold mb-2">
								{technology.name}
							</div>
							<ul className="space-y-2">
								{technology.items.map((item, index) => {
									return <li key={index}>{item}</li>
								})}
							</ul>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Technologies
