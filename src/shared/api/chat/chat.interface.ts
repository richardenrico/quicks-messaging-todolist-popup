import { ChatResponse, ListChatResponse } from 'shared/api/chat/chat'

export interface ChatApi {
    getListChat(signal?: AbortSignal): Promise<ListChatResponse>
    getChatById(id: number, signal?: AbortSignal): Promise<ChatResponse>
}
