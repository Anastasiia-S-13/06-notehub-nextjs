import fetchNotes from "@/lib/api";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query"
import NoteDetailsClient from "./[id]/NoteDetails.client";


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
            <NoteDetailsClient/>
        </HydrationBoundary>
    )
}

export default Notes;