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
    return products[index];
  }

  update(id: number, updateUserDto: UpdateProductDto) {
    const index = products.findIndex((user) => {
      return user.id === id;
    });
    if (index < 0) {
      throw new NotFoundException();
    }
    //console.log('user ' + JSON.stringify(users[index]));
    //console.log('update ' + JSON.stringify(updateUserDto));
    const updateProduct: Product = {
      ...products[index],
      ...updateUserDto,
    };
    products[index] = updateProduct;
    return updateProduct;
  }

  remove(id: number) {
    const index = products.findIndex((product) => {
      return product.id === id;
    });
    if (index < 0) {
      throw new NotFoundException();
    }
    const deletedProduct = products[index];
    products.splice(index, 1);
    return deletedProduct;
  }
}
