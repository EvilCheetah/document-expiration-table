import { AscendingSort } from "../components/Icons/Ascending-Sort";
import { DescendingSort } from "../components/Icons/Descending-Sort";
import { UnsortedSort } from "../components/Icons/Unsorted-Sort";

export function get_sorting_icon(state)
{
    if (!state)
        return <UnsortedSort />;

    if (state === 'asc')
        return <AscendingSort />;

    return <DescendingSort />
}