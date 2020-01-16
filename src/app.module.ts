import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { CryptoapiModule } from './cryptoapi/cryptoapi.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [DatabaseModule, 
    CryptoapiModule,
  MongooseModule.forRoot('mongodb+srv://santhoshsvkmm:p%40ssw0rd%279%27%21@cluster0-hfb2t.mongodb.net/test?retryWrites=true&w=majority')
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
