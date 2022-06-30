export function get_new_sorting_state(state)
{
    if ( !state )
        return 'ascending';
    
    if ( state === 'ascending')
        return 'descending'
    
    return null;
}