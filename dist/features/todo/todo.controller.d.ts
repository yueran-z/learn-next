import { TodoService } from './todo.service';
export declare class TodoController {
    private readonly todoService;
    constructor(todoService: TodoService);
    getAll(): {
        id: number;
        title: string;
        description: string;
    }[];
}
