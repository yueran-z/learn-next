import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
// 自动注入service和controller到module，
// 每个module都是单例，也就是说各模组共享同一个实例，导出TodoService实现模组间 
@Module({
  controllers: [TodoController],
  providers: [TodoService],
  exports: [TodoService]
  
})
export class TodoModule {}
