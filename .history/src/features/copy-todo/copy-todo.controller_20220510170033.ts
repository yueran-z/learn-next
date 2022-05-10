import { Body, Controller, Post } from '@nestjs/common';
import { TodoService } from '../todo/todo.service';

@Controller('copy-todo')
export class CopyTodoController {
    // 在controll注入TodoService，并建一个方法来
    constructor(
        private readonly todoService: TodoService
        ){}

    @Post()
    create(@Body() body: { id: number, title: string, description: string }){
        this.todoService.createTodo(body);
        return body;
    }
}
