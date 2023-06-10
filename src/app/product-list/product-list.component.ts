import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  filteredProducts: any[] = [];


  constructor(private http: HttpClient) {
    this.products = [];
    this.filteredProducts = [];
  }

  ngOnInit(): void {
    this.http.get<any[]>('https://fakestoreapi.com/products').subscribe(data => {
      this.products = data;
      this.filteredProducts = data;
    });
  }

  filterProductsByCategory(category: string) {
    this.filteredProducts = this.products.filter(product => product.category === category);
  }

  sortByPriceAscending() {
    this.filteredProducts.sort((a, b) => a.price - b.price);
  }

  sortByPriceDescending() {
    this.filteredProducts.sort((a, b) => b.price - a.price);
  }

  showAllProducts() {
    this.filteredProducts = this.products;
  }
}
