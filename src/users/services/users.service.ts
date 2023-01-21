import { HttpException,Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../db/entities/user.entity';
import { CreateUserDto } from '../dtos/create-users.dtos';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,

  ) {}

  async register(body: CreateUserDto) {
    try {
    const { firstName, lastName, email, balance } = body;
    const existingUser = await this.userRepository.findOne({
      where: { email: email },
    });
    if (existingUser) {
      throw new HttpException('User already exists!', 409);
    }
    const newUser = User.create({
      firstName,
      lastName,
      email,
      balance,
    });
    const createdUser = this.userRepository.save(newUser);
    return { data:{createdUser},message: 'user created successfully' };
    } catch (error) {
      throw new HttpException(error.message, 500);
    }

  }

 async findUserById(id: number) {
  try {
    const singleUser = await this.userRepository.findOneBy({id: id})
    if (singleUser == null){ 
      return {message: "There is no user"}
    } else{
      return {data:{singleUser}, message:"single user fetched"};
    }  
  } catch (error) {
    throw new HttpException(error.message, 500);
  }

  
  }

}