import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
// 自动注入service和controller到module，
// 每个module都是单例，也就是说各模组共享同一个实例，
// 导出TodoService实现模组间共享

@Module({
  controllers: [TodoController],
  providers: [TodoService],
  exports: [TodoService]
  
})
export class TodoModule {}

import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}


