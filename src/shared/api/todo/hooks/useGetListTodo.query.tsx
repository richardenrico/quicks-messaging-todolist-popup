import { useQuery } from '@tanstack/react-query'
import todoService from 'shared/api/todo/todo.service'

function useGetListTodo() {
    return useQuery({
        queryKey: ['todo'],
        queryFn: ({ signal }) => todoService.getListTodo(signal),
        select(data) {
            return data
        },
    })
}

export default useGetListTodo
