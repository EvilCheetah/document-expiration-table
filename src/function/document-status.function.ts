export function _get_document_status(date: string)
{
    const document_date  = new Date(date);

    const today          = new Date();
    today.setHours(0, 0, 0, 0);

    const month_ahead    = new Date();
    month_ahead.setMonth(today.getMonth() + 1);

    if ( document_date < today )
        return 'expired';

    if ( document_date < month_ahead )
        return 'about-to-expire';
    
    return 'active';
}