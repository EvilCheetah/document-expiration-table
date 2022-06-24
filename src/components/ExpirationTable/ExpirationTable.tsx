import './ExpirationTable.css';
import { TableHeader } from "./TableHeader";
import { TableBody } from './TableBody';


export function ExpirationTable({ vehicles })
{
    const table_header = [
        { label: 'Unit',                      accessor: 'unit',                 },
        { label: 'Driver\'s Name',            accessor: 'driver_name',          },
        { label: 'Driver\'s License',         accessor: 'unit',                 },
        { label: 'Authorization Documents',   accessor: 'authorization',        },
        { label: 'Registration',              accessor: 'registration',         },
        { label: 'Annual Inspection',         accessor: 'annual_inspection',    },
        { label: 'Insurance: General',        accessor: 'insurance_general',    },
        { label: 'Insurance: Cargo',          accessor: 'insurance_cargo',      },
        { label: 'Insurance: Liability',      accessor: 'insurance_liability',  },
        { label: 'Insurance: Auto',           accessor: 'insurance_auto'        }
    ];

    return (
        <table>
            <caption>Document Expiration Table</caption>
            <TableHeader columns={table_header} />
            <TableBody   vehicles={vehicles} />
        </table>
    );
}