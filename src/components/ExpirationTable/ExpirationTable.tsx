import './ExpirationTable.css';
import { TableHeader } from "./TableHeader";
import { TableBody } from './TableBody';
import { useState } from 'react';
import { INIT_SORT_STATE } from '../constant/sort-state.constant';


export function ExpirationTable({ vehicles, setVehicles })
{
    const [sorting_values, setSortingValues] = useState(INIT_SORT_STATE)

    const table_header = [
        { label: 'Unit',                    accessor: 'unit',                sorting_state: sorting_values.unit },
        { label: 'Driver\'s Name',          accessor: 'driver_name',         sorting_state: sorting_values.driver_name },
        { label: 'Driver\'s License',       accessor: 'driver_license',      sorting_state: sorting_values.driver_license },
        { label: 'Authorization Documents', accessor: 'authorization',       sorting_state: sorting_values.authorization },
        { label: 'Registration',            accessor: 'registration',        sorting_state: sorting_values.registration },
        { label: 'Annual Inspection',       accessor: 'annual_inspection',   sorting_state: sorting_values.annual_inspection },
        { label: 'Insurance: General',      accessor: 'insurance_general',   sorting_state: sorting_values.insurance_general },
        { label: 'Insurance: Cargo',        accessor: 'insurance_cargo',     sorting_state: sorting_values.insurance_cargo },
        { label: 'Insurance: Liability',    accessor: 'insurance_liability', sorting_state: sorting_values.insurance_liability },
        { label: 'Insurance: Auto',         accessor: 'insurance_auto',      sorting_state: sorting_values.insurance_auto }
    ];

    return (
        <table className='table-fill'>
            <caption className='table-title'>Document Expiration Table</caption>
            <TableHeader columns={table_header} setVehicles={setVehicles} setSortingValues={setSortingValues}/>
            <TableBody   vehicles={vehicles} />
        </table>
    );
}