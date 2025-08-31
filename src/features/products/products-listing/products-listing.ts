import { Component, computed, inject } from '@angular/core';
import { GENERAL_IMPORTS } from '../../../shared/imports/general.imports';
import { MATERIAL_IMPORTS } from '../../../shared/imports/material.imports';
import { Product, ProductService } from '../product-service';
import { MatDialog } from '@angular/material/dialog';
import { ProductAddEditDialog } from '../product-add-edit-dialog/product-add-edit-dialog';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-products-listing',
  imports: [...GENERAL_IMPORTS, ...MATERIAL_IMPORTS, MatTableModule],
  templateUrl: './products-listing.html',
  styleUrls: ['./products-listing.css']
})
export class ProductsListing {

  private readonly productService = inject(ProductService);
  private readonly dialog = inject(MatDialog);

  readonly products = computed(() => this.productService.products());
  readonly columns = ['name', 'price', 'description', 'actions'];

  openDialog(product?: Product): void {
    const ref = this.dialog.open(ProductAddEditDialog, {
      data: product ? { ...product } : null,
      width: '400px',
      disableClose: true,
    });
    ref.afterClosed().subscribe((result: Product | undefined) => {
      if (result) {
        if (product) {
          this.productService.update(result);
        } else {
          this.productService.add({ ...result, id: crypto.randomUUID() });
        }
      }
    });
  }

  delete(id: string): void {
    this.productService.delete(id);
  }

}
