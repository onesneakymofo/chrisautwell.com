import * as React from "react"

import Logo from '../components/Logo';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Technologies from '../components/Technologies';

const IndexPage = () => (
  <>
    <div className="w-100 bg-gradient-to-br from-indigo-700 to-indigo-800 pt-10 pb-5 px-5 bg-indigo-600">
      <div className="max-w-2xl mx-auto">
        <Logo />
        <Hero />
        <Projects />
      </div>
    </div>
    <div className="w-100 bg-white px-5">
      <div className="grid grid-flow-col grid-cols-2 gap-4 max-w-2xl mx-auto">
        <Experience />
        <Education />
      </div>
      <div className="max-w-2xl mx-auto">
        <Technologies />
      </div>
    </div>
  </>
)

export default IndexPage
