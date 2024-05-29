import { Component } from '@angular/core';
import { ProductService } from '../service/ProductService';
import { Product } from '../model/Product';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  products: Product[] = [];

  constructor(private productDB: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productDB.findallpizzatype().subscribe((products: Product[]) => {
      this.products = products;
    });
  }

  updateProduct(product: Product) {
    this.productDB.updatePizzatype(product).subscribe(updatedProduct => {
      alert('Product updated successfully');
    });
  }

  deleteProduct(id: number) {
    console.log(id);
    this.productDB.deletePizzatype(id).subscribe(() => {
      this.products = this.products.filter(product => product.pizzaid !== id);
      alert('Product deleted successfully');
    });
  }
}



