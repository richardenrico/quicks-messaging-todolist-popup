import { chatSchema, listChatSchema } from "shared/api/chat/chat.schema";
import { z } from "zod";

export type ListChatResponse = z.infer<typeof listChatSchema>
export type ChatResponse = z.infer<typeof chatSchema>