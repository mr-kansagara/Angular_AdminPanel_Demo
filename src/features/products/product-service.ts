import { Injectable, signal } from '@angular/core';

export type Product = {
  id: string;
  name: string;
  price: number;
  description?: string;
};


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  
  private readonly storageKey = 'products';

  readonly products = signal<Product[]>(this.load());

  private load(): Product[] {
    const raw = localStorage.getItem(this.storageKey);
    try {
      return raw ? JSON.parse(raw) as Product[] : [];
    } catch {
      return [];
    }
  }

  private persist(products: Product[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(products));
  }

  add(product: Product): void {
    const updated = [...this.products(), product];
    this.products.set(updated);
    this.persist(updated);
  }

  update(product: Product): void {
    const updated = this.products().map(p => p.id === product.id ? product : p);
    this.products.set(updated);
    this.persist(updated);
  }

  delete(id: string): void {
    const updated = this.products().filter(p => p.id !== id);
    this.products.set(updated);
    this.persist(updated);
  }
}
