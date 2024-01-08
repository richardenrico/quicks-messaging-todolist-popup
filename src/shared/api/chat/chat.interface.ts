import { ListChatResponse } from "shared/api/chat/chat";

export interface ChatApi {
    getListChat(signal?: AbortSignal): Promise<ListChatResponse>
}