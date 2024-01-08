import { useQuery } from "@tanstack/react-query"
import chatService from "shared/api/chat/chat.service"

function useGetChatById(id: number) {
    return useQuery({
        queryKey: ['chat', id],
        queryFn: ({signal}) => chatService.getChatById(id, signal),
        select(data) {
            return data
        },
    })
}

export default useGetChatById
