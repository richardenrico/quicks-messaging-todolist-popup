import { listTagsSchema, listTodoSchema } from 'shared/api/todo/todo.schema'
import { z } from 'zod'

export type ListTodoResponse = z.infer<typeof listTodoSchema>
export type ListTagsResponse = z.infer<typeof listTagsSchema>
