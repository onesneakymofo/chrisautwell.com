import * as React from "react"
import {Header} from "./ui/Header"
import {Section} from "./ui/Section"

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
			items: ["Github", "Jira", "AWS", "Figma", "LucidChart", "Asana"],
		},
	]

	return (
		<Section>
			<Header size="sm" className="mb-3">Technologies</Header>
			<div className="grid grid-cols-2 md:grid-cols-4 gap-5 text-gray-900">
				{technologies.map((technology, 	index) => (
						<div key={index}>
							<Header size="xs" className="mb-2">
								{technology.name}
							</Header>
							<ul className="space-y-2">
								{technology.items.map((item, index) => (
									<li key={index}>{item}</li>
								))}
							</ul>
						</div>
					)
				)}
			</div>
		</Section>
	)
}

export default Technologies
