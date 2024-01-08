import { z } from 'zod'

export const listChatSchema = z
    .object({
        id: z.number(),
        chat: z.string(),
        groupSender: z.string(),
        isGroup: z.boolean(),
        newMessage: z.boolean(),
        time: z.number(),
        title: z.string(),
    })
    .array()
