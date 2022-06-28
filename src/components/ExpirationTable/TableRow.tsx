import { _format_date } from "../../function/format-date.function";
import { _get_document_status } from "../../function/document-status.function";
import { DriverEntry } from "../DriverInformation/DriverEntry";
import { ArrayNotEmpty, isArray, isNotEmptyObject } from "class-validator";


export function TableRow({ vehicle })
{
    /// Used for rowspan
    const number_of_drivers = vehicle.drivers.length
    const driver_entries    = (number_of_drivers < 2 ) ? 1 : vehicle.drivers.length;

    let [first_driver, ...other_drivers] = vehicle.drivers

    return (
        <>
            <tr>
                <td rowSpan={driver_entries}>{vehicle.unit_number}</td>
                <DriverEntry driver={first_driver} />
                <td 
                    rowSpan={driver_entries}
                    className={ _get_document_status(vehicle.registration) }
                >
                    { _format_date(vehicle.registration) }
                </td>
                <td 
                    rowSpan={number_of_drivers}
                    className={ _get_document_status(vehicle.annual_inspection) }
                >
                    { _format_date(vehicle.annual_inspection) }
                </td>
                <td 
                    rowSpan={number_of_drivers}
                    className={ _get_document_status(vehicle.insurance.general) }
                >
                    { _format_date(vehicle.insurance.general) }
                </td>
                <td 
                    rowSpan={number_of_drivers}
                    className={ _get_document_status(vehicle.insurance.cargo) }
                >
                    { _format_date(vehicle.insurance.cargo) }
                </td>
                <td 
                    rowSpan={number_of_drivers}
                    className={ _get_document_status(vehicle.insurance.liability) }
                >
                    { _format_date(vehicle.insurance.liability) }
                </td>
                <td 
                    rowSpan={number_of_drivers}
                    className={ _get_document_status(vehicle.insurance.auto) }
                >
                    { _format_date(vehicle.insurance.auto) }
                </td>
            </tr>
            {
                isArray(other_drivers) &&
                ArrayNotEmpty(other_drivers) && 
                other_drivers.map( (driver) => (<tr key={driver.id}><DriverEntry driver={driver}/></tr> ))
            }
        </>
    );

}