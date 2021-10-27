import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  users = [
    {
      id: 0,
      name: "marla",
      password: "marlinha",
      email: 'marla@gmail.com'
    },
    {
      id: 1,
      name: "lucas",
      password: "luquinhas",
      email: 'lucas@gmail.com'
    }
  ]

  create(createUserDto: CreateUserDto) {
    return this.users.push(createUserDto);
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users[id];
  }

  update(id: number, createUserDto: CreateUserDto) {
    for (var i = 0; i < this.users.length; i++) {
      if (this.users[i].id === id) {
        this.users.splice(i, 1);
      }
    }
    this.users.push(createUserDto);

  }

  remove(id: number) {
    for (var i = 0; i < this.users.length; i++) {
      if (this.users[i].id === id) {
        this.users.splice(i, 1);
      }
    };
  }
}

