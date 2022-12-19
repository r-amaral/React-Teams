import { Constants } from "./index.constants";

export const certificatesCertificatesUser = (certificates: string) => ({
    type: Constants.CERTIFICATES_CERTIFICATES,
    payload: certificates
})

export const certificatesTeamName = (teamName: string) => ({
    type: Constants.CERTIFICATES_TEAM_NAME,
    payload: teamName
})

export const certificatesInstitution = (institution: string) => ({
    type: Constants.CERTIFICATES_INSTITUTION,
    payload: institution
})

export const certificatesIGraduation = (graduation: string) => ({
    type: Constants.CERTIFICATES_GRADUATION,
    payload: graduation
})