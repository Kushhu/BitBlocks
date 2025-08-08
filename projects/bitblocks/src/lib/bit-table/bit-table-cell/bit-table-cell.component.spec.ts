import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitTableCellComponent } from './bit-table-cell.component';

describe('BitTableCellComponent', () => {
  let component: BitTableCellComponent;
  let fixture: ComponentFixture<BitTableCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BitTableCellComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BitTableCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
