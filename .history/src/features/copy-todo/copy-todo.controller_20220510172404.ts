import { Body, Controller, Post } from '@nestjs/common';

@Controller('copy-todo')
export class CopyTodoController {
    // 在CopyTodoController注入TodoService
    constructor(
        private readonly todoService: TodoService
    ) { }
}
