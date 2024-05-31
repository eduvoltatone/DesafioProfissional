import { Module } from '@nestjs/common';
import { ProductService } from './products.service';
import { ProductController } from './products.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, productSchema } from './schema/products.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Product.name, schema: productSchema }]),
    ],
    controllers: [ProductController],
    providers: [ProductService],
})
export class ProductModule { }
