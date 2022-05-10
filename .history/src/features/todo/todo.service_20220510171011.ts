import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoService {

    private todos: { id: number, title: string, description: string }[] = [
        {
            id: 1,
            title: 'Title 1',
            description: ''
        }
    ];

    getTodos(): { id: number, title: string, description: string }[] {
        return this.todos;
    }
// 在TodoService新增一个
    createTodo(item: { id: number, title: string, description: string }) {
        this.todos.push(item);
    }

}