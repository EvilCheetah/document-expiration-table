export function TableHeader({ columns })
{
    return (
        <thead>
            <tr>
            {
                columns.map(
                    ({ label, accessor }) => 
                    { return <th key={accessor}>{label}</th>; }
                )
            }
            </tr>
        </thead>
    )
}