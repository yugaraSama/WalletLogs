import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { TagModule } from './modules/tag/tag.module';
import { TransactionModule } from './modules/transaction/transaction.module';

@Module({
  imports: [UserModule, TagModule, TransactionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
