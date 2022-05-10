import { Module } from '@nestjs/common';
import { CopyTodoController } from './copy-todo.controller';

// 在CopyTodoModule
@Module({
  controllers: [CopyTodoController]
})
export class CopyTodoModule {}
