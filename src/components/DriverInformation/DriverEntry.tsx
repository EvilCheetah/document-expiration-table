import { _format_date } from "../../function/format-date.function";
import { _format_driver_name } from "../../function/format-driver-name.function";
import { _get_document_status } from "../../function/document-status.function";
import { isEmpty, isNotEmptyObject } from "class-validator";


function _get_driver_authorization_documents(driver: any)
{
    return (
        ( driver.work_authorization.document_type === 'Citizenship' && 'Citizenship' ) ||
        _format_date(driver.work_authorization.expiration_date, driver.name)
    );
}


export function DriverEntry({ driver })
{
    if ( isEmpty(driver) && !isNotEmptyObject(driver) )
        return (
            <>
                <td>—</td>
                <td>—</td>
                <td>—</td>
            </>
        );

    const { first, middle, last } = driver.name;

    return (
        <>
            <td>
                {(driver.name && _format_driver_name(first, middle, last)) || '—'}
            </td>
            <td className={_get_document_status(driver.driver_license.expiration)}>
                {(driver.driver_license && _format_date(driver.driver_license.expiration)) || '—'}
            </td>
            <td className={
                driver.work_authorization.document_type === 'Citizenship' ? 
                'active' :
                _get_document_status(driver.work_authorization.expiration_date)
            }>
                {(driver.work_authorization && _get_driver_authorization_documents(driver)) || '—'}
            </td>
        </>
    );
}