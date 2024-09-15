import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddDeckDialogComponent } from './add-edit-deck-dialog.component';

describe('AddDeckDialogComponent', () => {
  let component: AddDeckDialogComponent;
  let fixture: ComponentFixture<AddDeckDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddDeckDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddDeckDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
