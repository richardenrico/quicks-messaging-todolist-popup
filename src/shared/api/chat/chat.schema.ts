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

export const chatSchema = z.object({
    id: z.number(),
    data: z.object({
        groupName: z.string(),
        totalParticipants: z.number(),
        isSupport: z.boolean().optional(),
        chats: z
            .object({
                time: z.number(),
                chats: z
                    .object({
                        mode: z.string(),
                        receiverMode: z.number(),
                        sender: z.string(),
                        message: z.string(),
                        timestamp: z.number(),
                        isRead: z.boolean(),
                    })
                    .array(),
            })
            .array(),
    }),
})
