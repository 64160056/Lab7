import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

const users: User[] = [
  { id: 1, login: 'admin', name: 'Administrator', password: 'Pass@1234' },
  { id: 2, login: 'user1', name: 'User1', password: 'Pass@1234' },
  { id: 3, login: 'c', name: 'User2', password: 'Pass@1234' },
];
let lastUserId = 4;
@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    const newUser: User = {
      id: lastUserId++,
      ...createUserDto,
    };
    users.push(newUser);
    return newUser;
  }

  findAll() {
    return users;
  }

  findOne(id: number) {
    const index = users.findIndex((user) => {
      return user.id === id;
    });
    if (index < 0) {
      throw new NotFoundException();
    }
    return users[index];
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
