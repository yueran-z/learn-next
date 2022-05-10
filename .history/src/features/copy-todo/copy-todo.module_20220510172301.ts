import { Module } from '@nestjs/common';
import { CopyTodoController } from './copy-todo.controller';

// 在CopyTodoModule导入TodoModule实现共享
@Module({
  controllers: [CopyTodoController],
  imports: [TodoModule]
})
export class CopyTodoModule {}
