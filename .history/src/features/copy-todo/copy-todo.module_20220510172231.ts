import { Module } from '@nestjs/common';
import { CopyTodoController } from './copy-todo.controller';

// 在
@Module({
  controllers: [CopyTodoController]
})
export class CopyTodoModule {}
