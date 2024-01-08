import { useMutation, useQueryClient } from '@tanstack/react-query'
import todoService from 'shared/api/todo/todo.service'

function useDeleteTodoById() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: todoService.deleteTodoById,
        onSuccess() {
            queryClient.invalidateQueries({ queryKey: ['todo'] })
        },
    })
}

export default useDeleteTodoById
