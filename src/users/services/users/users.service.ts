import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { SerializedUser, User } from 'src/users/types';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      username: 'akash.dohare',
      password: 'assadfd',
    },
    {
      id: 2,
      username: 'raj.kundra',
      password: 'afmksdjf',
    },
  ];

  getUsers() {
    return this.users.map((user) => plainToClass(SerializedUser, user));
  }

  getUsersByUsername(username: string) {
    return this.users.find((user) => user.username == username);
  }
  getUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }
}
