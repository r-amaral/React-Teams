import { Constants } from "./index.constants"

export const socialLinkedin = (linkedin: string) => ({
    type: Constants.SOCIAL_LINKEDIN,
    payload: linkedin
})

export const socialGithub = (github: string) => ({
    type: Constants.SOCIAL_GITHUB,
    payload: github
})


