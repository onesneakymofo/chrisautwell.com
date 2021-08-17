import * as React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faGithub,
  faInstagram,
  faSpotify,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

const Hero = () => {
  function dateConversion(date) {
    const today = new Date()
    let dateLength = today.getFullYear() - date.getFullYear()
    var month = today.getMonth() - date.getMonth()
    if (month < 0 || (month === 0 && today.getDate() < date.getDate()))
      dateLength--
    return dateLength
  }

  function birthDate() {
    const birthDate = new Date("Febaruy 09 1987")
    return dateConversion(birthDate)
  }

  function careerLength() {
    const startDate = new Date("May 2012")
    return dateConversion(startDate)
  }

  return (
    <>
      <div className="text-5xl font-large text-white text-center font-bold">
        Hey, hey, I'm Chris.
      </div>
      <p className="text-indigo-300 text-center text-2xl my-5 leading-10">
        I'm a {birthDate()}-year old software engineer from
        <strong className="text-indigo-200"> Birmingham, Alabama.</strong>&nbsp;
        I have been programming professionally over
        <strong className="text-indigo-200"> {careerLength()} years</strong>. I
        have two sweet daughters and an awesome girlfriend. My hobbies include
        <strong className="text-indigo-200">
          {" "}
          video games, board games,
        </strong>{" "}
        and <strong>reading</strong>. I'm always down to chat so feel free to
        reach out!
      </p>
      <p className="grid grid-flow-col grid-cols-auto gap-x-5 text-center mx-auto text-indigo-500 text-3xl my-10">
        <a
          className="hover:text-white"
          href="https://www.linkedin.com/in/chris-autwell/"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          className="hover:text-white"
          href="https://www.twitter.com/onesneakymofo"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          className="hover:text-white"
          href="https://www.github.com/onesneakymofo"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          className="hover:text-white"
          href="https://www.instagram.com/onesneakymofo"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          className="hover:text-white"
          href="https://open.spotify.com/user/1216246547"
        >
          <FontAwesomeIcon icon={faSpotify} />
        </a>
      </p>
    </>
  )
}

export default Hero
