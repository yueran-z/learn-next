import { Module } from '@nestjs/common';
import { CopyTodoController } from './copy-todo.controller';

// 在CopyTodoModule导入
@Module({
  controllers: [CopyTodoController]
})
export class CopyTodoModule {}
