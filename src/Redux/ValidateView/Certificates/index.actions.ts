import { IActionCertificate } from "../../../Interfaces/IActionCertificate";
import { Constants } from "./index.constants";

export const certificatesCertificatesUser = (certificates: IActionCertificate) => ({
    type: Constants.CERTIFICATES_CERTIFICATES,
    payload: certificates
})

export const certificatesValue = (certificatesValues: IActionCertificate) => ({
    type: Constants.CERTIFICATES_VALUES,
    payload: certificatesValues,
})

export const certificatesFavorite = (certificatesFavorite: IActionCertificate) => ({
    type: Constants.CERTIFICATES_FAVORITE,
    payload: certificatesFavorite,
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