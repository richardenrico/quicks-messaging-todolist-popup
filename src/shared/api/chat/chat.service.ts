import { ListChatResponse } from 'shared/api/chat/chat'
import { ChatApi } from 'shared/api/chat/chat.interface'
import { listChatSchema } from 'shared/api/chat/chat.schema'
import { http } from 'shared/config/http'

class ChatService implements ChatApi {
    async getListChat(
        signal?: AbortSignal | undefined
    ): Promise<ListChatResponse> {
        const res = await http.get<ListChatResponse>('/chat-list', {
            signal,
        })

        // return listChatSchema.parse(res.data)
        return res.data
    }
}

export default new ChatService()
