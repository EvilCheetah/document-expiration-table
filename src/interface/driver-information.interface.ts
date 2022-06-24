import { AuthorizationDocument } from "./authorization-document.interface";
import { DriverLicense } from "./driver-license.interface";
import { PersonName } from "./person-name.interface";


export interface DriverInformation
{
    name:               PersonName;
    date_of_birth:      string;
    driver_license:     DriverLicense,
    work_authorization: AuthorizationDocument
}