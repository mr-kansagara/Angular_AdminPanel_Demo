import { Component, inject, signal } from '@angular/core';
import { Product } from '../product-service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GENERAL_IMPORTS } from '../../../shared/imports/general.imports';
import { MATERIAL_IMPORTS } from '../../../shared/imports/material.imports';

@Component({
  selector: 'app-product-add-edit-dialog',
  imports: [ReactiveFormsModule, ...GENERAL_IMPORTS, ...MATERIAL_IMPORTS],
  templateUrl: './product-add-edit-dialog.html',
  styleUrls: ['./product-add-edit-dialog.css']
})
export class ProductAddEditDialog {

  private readonly dialogRef = inject(MatDialogRef<ProductAddEditDialog>);
  private readonly data = inject(MAT_DIALOG_DATA, { optional: true }) as Product | null;

  readonly isEdit = signal(!!this.data);

  readonly form = signal(
    new FormBuilder().group({
      id: [this.data?.id ?? ''],
      name: [this.data?.name ?? '', Validators.required],
      price: [this.data?.price ?? '', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
      description: [this.data?.description ?? '']
    })
  );

  onSubmit(): void {
    if (this.form().valid) {
      this.dialogRef.close(this.form().value as Product);
    } else {
      this.form().markAllAsTouched();
    }
  }

  close(): void {
    this.dialogRef.close();
  }

}
