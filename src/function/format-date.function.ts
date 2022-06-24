export function _format_date(date: string, name: string = "Exists")
{
    return new Date(date).toLocaleDateString(
        'en-us',
        {month: 'short', year: 'numeric', day: 'numeric'}
    );
}