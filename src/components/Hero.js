import * as React from "react"
import {GithubIcon, InstagramIcon,LinkedInIcon, SpotifyIcon, TwitterIcon, ResumeIcon } from '../components/ui/Icon';

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
      <div className="text-2xl md:text-4xl font-large text-white text-center font-bold">
        Hey, hey, I'm Chris.
      </div>
      <p className="text-indigo-300 text-center text-2xl my-5 leading-10">
        I'm a {birthDate()}-year old software engineer from
        <strong className="text-indigo-200"> Birmingham, Alabama.</strong>&nbsp;
        I have been programming professionally over
        <strong className="text-indigo-200"> {careerLength()} years</strong>. I
        have two sweet daughters with my awesome girlfriend. My hobbies include
        <strong className="text-indigo-200">
          {" "}
          video games, board games, music,
        </strong>{" "}
        and <strong>reading</strong>. I'm always down to chat so feel free to
        reach out!
      </p>
      <p className="flex flex-row gap-x-5 text-center items-center justify-between mx-auto text-indigo-500 text-3xl my-10">
        <a
          className="hover:text-white"
          href="https://www.linkedin.com/in/chris-autwell/"
        >
          <LinkedInIcon />
        </a>
        <a
          className="hover:text-white"
          href="https://www.twitter.com/onesneakymofo"
        >
          <TwitterIcon />
        </a>
        <a
          className="hover:text-white"
          href="https://www.github.com/onesneakymofo"
        >
          <GithubIcon />
        </a>
        <a
          className="hover:text-white"
          href="https://www.instagram.com/onesneakymofo"
        >
          <InstagramIcon />
        </a>
        <a
          className="hover:text-white"
          href="https://open.spotify.com/user/1216246547"
        >
          <SpotifyIcon />
        </a>
        <a
          className="hover:text-white"
          href="/Chris_Autwell_Senior_Software_Engineer_Resume.pdf"
        >
          <ResumeIcon />
        </a>
      </p>
    </>
  )
}

export default Hero
