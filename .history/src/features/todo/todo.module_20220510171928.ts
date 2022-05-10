import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
// 自动注入service和controller到module，

@Module({
  controllers: [TodoController],
  providers: [TodoService],
  
})
export class TodoModule {}
