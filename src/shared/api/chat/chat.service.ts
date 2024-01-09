import { ChatResponse, ListChatResponse } from 'shared/api/chat/chat'
import { ChatApi } from 'shared/api/chat/chat.interface'
import { chatSchema, listChatSchema } from 'shared/api/chat/chat.schema'
import { http } from 'shared/config/http'

class ChatService implements ChatApi {
    async getChatById(
        id: number,
        signal?: AbortSignal | undefined
    ): Promise<ChatResponse> {
        const res = await http.get<ChatResponse>(`/chats/${id}`, {
            signal,
        })

        return chatSchema.parse(res.data)
    }
    async getListChat(
        signal?: AbortSignal | undefined
    ): Promise<ListChatResponse> {
        const res = await http.get<ListChatResponse>('/chat-list', {
            signal,
        })

        return listChatSchema.parse(res.data)
    }
}

export default new ChatService()
