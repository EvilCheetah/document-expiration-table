import { DriverInformation } from "./driver-information.interface";
import { InsuranceInformation } from "./insurance-information.interface";


export interface VehicleProps
{
    unit_number:       string;
    drivers:           DriverInformation[],
    registration:      string;
    annual_inspection: string;
    insurance:         InsuranceInformation;
}