import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MATERIAL_IMPORTS } from '../../../shared/imports/material.imports';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
// import { MatDialogContainer } from "../../../../node_modules/@angular/material/dialog.d";


export interface NodeDetail {
  id: string;
  type: string;
  data: any;
  position: { x: number; y: number };
} ;


@Component({
  selector: 'app-node-details-dialog',
  imports: [MatDialogContent],
  standalone: true,
  changeDetection : ChangeDetectionStrategy.OnPush,
  templateUrl: './node-details-dialog.component.html',
  styleUrl: './node-details-dialog.component.css'
})
export class NodeDetailsDialogComponent {


  public data : NodeDetail = inject(MAT_DIALOG_DATA);

  constructor( public dialog: MatDialog ) {
    

   }

}
