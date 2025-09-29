import { fetchNotes } from "@/lib/api";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query"


const Notes = async () => {
    const queryClient = new QueryClient();

    const searchWord = "";
    const page = 1;

    await queryClient.prefetchQuery({
        queryKey: ["notes", searchWord, page],
        queryFn: () => fetchNotes(searchWord, page),
    })

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            
        </HydrationBoundary>
    )
}

export default Notes;