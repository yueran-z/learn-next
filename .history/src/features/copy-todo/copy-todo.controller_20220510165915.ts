import { Body, Controller, Post } from '@nestjs/common';
import { TodoService } from '../todo/todo.service';

@Controller('copy-todo')
export class CopyTodoController {
    constructor(
        private readonly todoService: TodoService
        ){}

    @Post()
    create(@Body() body: { id: number, title: string, description: string }){
        
    }
}
