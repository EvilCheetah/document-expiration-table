import { get_sorting_icon } from "../../function/sorting-icon.function";
import { get_new_sorting_state } from "../../function/sorting-state.function";


export function TableHeader({ columns, setSortingValues })
{
    function update_sort_state(accessor, state)
    {
        console.log( accessor, state )
        console.log( get_new_sorting_state(state) )

        setSortingValues( 
            prev_state => 
            {
                const new_state = new Object();
                new_state[accessor] = get_new_sorting_state(state);

                return {
                    ...prev_state,
                    ...new_state
                }
            }
        )
    }

    return (
        <thead>
            <tr>
            {
                columns.map(
                    ({ label, accessor, sorting_state }) => 
                    { 
                        return (
                            <th key={accessor} onClick={() => update_sort_state(accessor, sorting_state)}>
                                <div className="container">
                                    <span className="header-name">{label}</span>
                                    <span className="sorting-state">{get_sorting_icon(sorting_state)}</span>
                                </div>
                            </th>
                        );
                    }
                )
            }
            </tr>
        </thead>
    )
}
