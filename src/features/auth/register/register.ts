import { Component, computed, signal } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MATERIAL_IMPORTS } from '../../../shared/imports/material.imports';
import { GENERAL_IMPORTS } from '../../../shared/imports/general.imports';
import { ENDPOINTS } from '../../../constants/Endpoint.constant';

@Component({
  selector: 'app-register',
  imports: [...MATERIAL_IMPORTS, ...GENERAL_IMPORTS],
  templateUrl: './register.html',
  styleUrls: ['./register.css'],
  standalone: true
})
export class Register {
  users: any[] = [];

  constructor(private router: Router) {
  }

  readonly form = signal(
    new FormBuilder().group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  );

  readonly nameInvalid = computed(() =>
    this.form().get('name')?.invalid && this.form().get('name')?.touched
  );
  readonly emailInvalid = computed(() =>
    this.form().get('email')?.invalid && this.form().get('email')?.touched
  );
  readonly passwordInvalid = computed(() =>
    this.form().get('password')?.invalid && this.form().get('password')?.touched
  );


  onSubmit(): void {
    if (this.form().valid) {
      console.log(this.form().value);
      this.users.push(this.form().value);
      localStorage.setItem('users', JSON.stringify(this.users));
      this.router.navigate([ENDPOINTS.AUTH.LOGIN]);

    } else {
      this.form().markAllAsTouched();
    }
  }
}
