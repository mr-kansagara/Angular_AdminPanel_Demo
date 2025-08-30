import { CommonModule } from "@angular/common";
import { importProvidersFrom } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";


export const GENERAL_IMPORTS = [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
]

export const GENERAL_EXPORTS = [
    importProvidersFrom(...GENERAL_IMPORTS)
];

