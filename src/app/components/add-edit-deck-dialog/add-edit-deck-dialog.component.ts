import {
  ChangeDetectionStrategy,
  Component,
  inject,
  model,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { addEditDeckData, dialogTypeEnum } from '../../shared/domain';

@Component({
  selector: 'app-add-edit-deck-dialog',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
  templateUrl: './add-edit-deck-dialog.component.html',
  styleUrl: './add-edit-deck-dialog.component.css',
})


export class AddEditDeckDialogComponent {
  readonly dialogRef = inject(MatDialogRef<AddEditDeckDialogComponent>);
  readonly data = inject<addEditDeckData>(MAT_DIALOG_DATA);
  readonly deck = model(this.data.deck);
  readonly dialogTitle = this.data.dialogType == dialogTypeEnum.add ? 'Add New' : 'Edit ' + this.deck.name 

  onNoClick(): void {
    this.dialogRef.close();
  }
}
