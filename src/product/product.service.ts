import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

const products: Product[] = [
  { id: 1, name: 'product1', price: 500 },
  { id: 2, name: 'product2', price: 1500 },
  { id: 3, name: 'product3', price: 1000 },
];
let lastProductId = 4;
@Injectable()
export class ProductService {
  create(createProductDto: CreateProductDto) {
    const newProduct: Product = {
      id: lastProductId++,
      ...createProductDto, //login, name, password
    };
    products.push(newProduct);
    return newProduct;
  }

  findAll() {
    return products;
  }

  findOne(id: number) {
    const index = products.findIndex((product) => {
      return product.id === id;
    });
    if (index < 0) {
      throw new NotFoundException();
    }
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
