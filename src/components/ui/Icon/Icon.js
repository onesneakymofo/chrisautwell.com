import * as React from "react"
import {GithubIconSvg} from "./GithubIconSvg";
import {InstagramIconSvg} from "./InstagramIconSvg";
import {LinkedInIconSvg} from "./LinkedInIconSvg";
import {SpotifyIconSvg} from "./SpotifyIconSvg";
import {TwitterIconSvg} from "./TwitterIconSvg";
import {RightArrowSvg} from "./RightArrowSvg";
import {ResumeIconSvg} from "./ResumeIconSvg";

const GithubIcon = () => (
  <Icon className="h-7 w-7 md:h-10 md:w-10 m-2 hover:text-white text-sm">
    <GithubIconSvg className="fill-current" />
  </Icon>
)
const InstagramIcon = () => (
  <Icon className="h-7 w-7 md:h-10 md:w-10 m-2 hover:text-white text-sm">
    <InstagramIconSvg className="fill-current" />
  </Icon>
)
const LinkedInIcon = () => (
  <Icon className="h-7 w-7 md:h-10 md:w-10 m-2 hover:text-white text-sm">
    <LinkedInIconSvg class="fill-current" />
  </Icon>
)
const SpotifyIcon = () => (
  <Icon className="h-7 w-7 md:h-10 md:w-10 m-2 hover:text-white text-sm">
    <SpotifyIconSvg class="fill-current" />
  </Icon>
)
const TwitterIcon = () => (
  <Icon className="h-7 w-7 md:h-10 md:w-10 m-2 hover:text-white text-sm">
    <TwitterIconSvg class="fill-current" />
  </Icon>
)
const RightArrowIcon = () => (
  <Icon>
    <RightArrowSvg class="fill-current" />
  </Icon>
)
const ResumeIcon = () => (
  <Icon className="h-7 w-7 md:h-10 md:w-10 m-2 hover:text-white text-sm">
    <ResumeIconSvg class="fill-current" />
  </Icon>
)

const Icon = ({className, children}) => (
    <div className={className}>{children}</div>
)

export {GithubIcon, InstagramIcon, LinkedInIcon, SpotifyIcon, TwitterIcon, RightArrowIcon, ResumeIcon};
