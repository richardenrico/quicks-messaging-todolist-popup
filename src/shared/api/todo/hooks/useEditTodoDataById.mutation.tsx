import { useMutation, useQueryClient } from '@tanstack/react-query'
import todoService from 'shared/api/todo/todo.service'

function useEditTodoDataById() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: todoService.editTodoDataById,
        onSuccess() {
            queryClient.invalidateQueries({ queryKey: ['todo'] })
        },
    })
}

export default useEditTodoDataById
