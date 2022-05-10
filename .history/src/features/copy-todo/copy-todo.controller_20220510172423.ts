import { Body, Controller, Post } from '@nestjs/common';
import { TodoService } from '../todo/todo.service';

@Controller('copy-todo')
export class CopyTodoController {
    // 在CopyTodoController注入TodoService
    constructor(
        private readonly todoService: TodoService
    ) { }
    // 建一个方法来调用
}
