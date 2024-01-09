import { ListTagsResponse, ListTodoResponse } from 'shared/api/todo/todo'

export interface IEditTodoDataParams {
    id: number
    title: string
    deadline: number
    description: string
    completed: boolean
}

export interface TodoApi {
    getListTodo(signal?: AbortSignal): Promise<ListTodoResponse>
    editTodoDataById(data: IEditTodoDataParams): Promise<any>
    deleteTodoById(id: number): Promise<any>

    getListTags(signal?: AbortSignal): Promise<ListTagsResponse>
}
