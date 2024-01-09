import { ListTagsResponse, ListTodoResponse } from 'shared/api/todo/todo'
import { IEditTodoDataParams, TodoApi } from 'shared/api/todo/todo.interface'
import { listTagsSchema } from 'shared/api/todo/todo.schema'
import { http } from 'shared/config/http'

class TodoService implements TodoApi {
    async getListTags(
        signal?: AbortSignal | undefined
    ): Promise<ListTagsResponse> {
        const res = await http.get<ListTagsResponse>('tags', { signal })

        return listTagsSchema.parse(res.data)
    }
    deleteTodoById(id: number): Promise<any> {
        return http.delete(`todo/${id}`)
    }
    editTodoDataById(data: IEditTodoDataParams): Promise<any> {
        return http.put(`todo/${data.id}`, data)
    }
    async getListTodo(
        signal?: AbortSignal | undefined
    ): Promise<ListTodoResponse> {
        const res = await http.get<ListTodoResponse>('todo', { signal })

        // return listTodoSchema.parse(res.data)
        return res.data
    }
}

export default new TodoService()
