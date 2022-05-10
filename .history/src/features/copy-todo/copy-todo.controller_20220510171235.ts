import { Controller } from '@nestjs/common';
import { TodoService } from '../todo/todo.service';
@Controller('copy-todo')
export class CopyTodoController {
// 在CopyTodoController注入service
    constructor(
        private readonly todoService: TodoService
    ) { }
}
