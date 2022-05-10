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
// 建一个gettodos方法回传
    getTodos(): { id: number, title: string, description: string }[] {
        return this.todos;
    }

}