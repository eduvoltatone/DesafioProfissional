import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './schema/products.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {
    constructor(@InjectModel(Product.name) private productModel: Model<Product>) { }

    create(CreateProductDto: CreateProductDto) {
        const createdProduct = this.productModel.create(CreateProductDto);
        return createdProduct;
    }

    findAll() {
        return this.productModel.find();
    }

    findById(id: string) {
        return this.productModel.findById(id);
    }

    remove(id: string) {
        return this.productModel.findByIdAndDelete(id);
    }
}
