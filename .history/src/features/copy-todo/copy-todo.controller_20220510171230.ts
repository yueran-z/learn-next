import { Controller } from '@nestjs/common';
import { TodoService } from '../todo/todo.service';
@Controller('copy-todo')
export class CopyTodoController {
// 在CopyTodoController 
    constructor(
        private readonly todoService: TodoService
    ) { }
}
