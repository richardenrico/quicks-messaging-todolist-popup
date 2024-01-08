import { ListTodoResponse } from 'shared/api/todo/todo'
import { IEditTodoDataParams, TodoApi } from 'shared/api/todo/todo.interface'
import { listTodoSchema } from 'shared/api/todo/todo.schema'
import { http } from 'shared/config/http'

class TodoService implements TodoApi {
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
