import { useQuery } from "@tanstack/react-query"
import todoService from "shared/api/todo/todo.service"

function useGetListTags() {
    return useQuery({
        queryKey: ['tags'],
        queryFn: ({ signal }) => todoService.getListTags(signal),
        select(data) {
            return data
        },
    })
}

export default useGetListTags
