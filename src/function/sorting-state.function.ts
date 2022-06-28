export function get_new_sorting_state(state)
{
    if ( !state )
        return 'asc';
    
    if ( state === 'asc')
        return 'dec'
    
    return null;
}