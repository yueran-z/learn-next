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
    // 新增一个

}