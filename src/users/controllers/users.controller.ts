
import {
    Body,
    Controller,
    Get,
    HttpStatus,
    Param,
    ParseIntPipe,
    Post,
    HttpCode,
    } from '@nestjs/common';
import {
        ApiOkResponse,
        ApiOperation,
      } from '@nestjs/swagger';
import { CreateUserDto } from '../dtos/create-users.dtos';
import { UsersService } from '../services/users.service';
    
    @Controller()
    export class UsersController {
      usersService: any;
      constructor(private readonly userService: UsersService) {}
      
      //get a single user
      @ApiOkResponse({ status: HttpStatus.OK })
      @HttpCode(HttpStatus.OK)
      @Get('/:id')
      findUserById(@Param('id') id: number) {
        return this.userService.findUserById(id);
      }

      //register a user
      @Post('/sign-up')
      @HttpCode(201)
      @ApiOkResponse({ status: HttpStatus.CREATED })
      @ApiOperation({ summary: 'register a user' })
      async register(@Body() body: CreateUserDto) {
      return await this.userService.register(body);
  }
    }
