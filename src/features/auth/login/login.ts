import { Component, computed, signal } from '@angular/core';
import { MATERIAL_IMPORTS } from '../../../shared/imports/material.imports';
import { GENERAL_IMPORTS } from '../../../shared/imports/general.imports';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [...MATERIAL_IMPORTS, ...GENERAL_IMPORTS],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
  standalone: true
})
export class Login {


  isLoggedIn : boolean = false;

  constructor(
    private router: Router
  ) {}

  private readonly fb = signal(FormBuilder.prototype);
  readonly form = signal(
    new FormBuilder().group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
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
      this.router.navigate(['/dashboard']);
      this.isLoggedIn = true;

    } else {
      this.form().markAllAsTouched();
    }
  }

}
