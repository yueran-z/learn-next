import { Module } from '@nestjs/common';
import { TodoModule } from '../todo/todo.module';
import { CopyTodoController } from './copy-todo.controller';
// 在CopyTodoModule 导入公共的TodoModule
@Module({
  controllers: [CopyTodoController],
  imports: [TodoModule]
})
export class CopyTodoModule {}
