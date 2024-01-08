import { useQuery } from '@tanstack/react-query'
import chatService from 'shared/api/chat/chat.service'

function useGetListChatData() {
    return useQuery({
        queryKey: ['chat'],
        queryFn: ({signal}) => chatService.getListChat(signal),
        // select(data) {
        //     console.log(data);
        //     return data
        // },
    })
}

export default useGetListChatData
