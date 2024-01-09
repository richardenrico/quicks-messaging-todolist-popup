import { z } from 'zod'

export const listTodoSchema = z
    .object({
        id: z.number(),
        title: z.string(),
        deadline: z.number(),
        description: z.string(),
        completed: z.boolean(),
    })
    .array()

export const listTagsSchema = z.object({
    id: z.number(),
    name: z.string(),
    color: z.string(),
}).array()
