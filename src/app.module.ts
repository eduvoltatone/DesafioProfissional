import { Module } from '@nestjs/common';
import { ProductModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://0.0.0.0/books-nest'),
    ProductModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
