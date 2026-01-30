import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateToDoDto } from './dto/create-to-do.dto';
import { UpdateToDoDto } from './dto/update-to-do.dto';
import { ToDoResponseDto } from './dto/to-do-response.dto';

@Injectable()
export class ToDoService {
  constructor(private prisma: PrismaService) {}

  async create(createToDoDto: CreateToDoDto): Promise<ToDoResponseDto> {
    const todo = await this.prisma.todo.create({
      data: createToDoDto,
    });
    return ToDoResponseDto.fromPrisma(todo);
  }

  async findAll(): Promise<ToDoResponseDto[]> {
    const todos = await this.prisma.todo.findMany();
    return ToDoResponseDto.fromPrismaArray(todos);
  }

  async findOne(id: number): Promise<ToDoResponseDto> {
    const todo = await this.prisma.todo.findUnique({
      where: { id },
    });
    return ToDoResponseDto.fromPrisma(todo);
  }

  async update(id: number, updateToDoDto: UpdateToDoDto): Promise<ToDoResponseDto> {
    const todo = await this.prisma.todo.update({
      where: { id },
      data: updateToDoDto,
    });
    return ToDoResponseDto.fromPrisma(todo);
  }

  async remove(id: number): Promise<ToDoResponseDto> {
    const todo = await this.prisma.todo.delete({
      where: { id },
    });
    return ToDoResponseDto.fromPrisma(todo);
  }
}
