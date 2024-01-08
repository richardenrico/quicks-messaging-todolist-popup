import { listChatSchema } from "shared/api/chat/chat.schema";
import { z } from "zod";

export type ListChatResponse = z.infer<typeof listChatSchema>