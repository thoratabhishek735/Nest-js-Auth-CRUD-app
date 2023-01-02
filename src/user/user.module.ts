import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ProfileController } from './profile.controller';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { RegisterController } from './register.controller';
@Module({
  imports: [DatabaseModule],
  providers: [UserService],
  exports: [UserService],
  controllers: [ProfileController, UserController, RegisterController],
})
export class UserModule {}
