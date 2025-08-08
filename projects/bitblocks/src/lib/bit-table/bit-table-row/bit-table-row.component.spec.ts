import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitTableRowComponent } from './bit-table-row.component';

describe('BitTableRowComponent', () => {
  let component: BitTableRowComponent;
  let fixture: ComponentFixture<BitTableRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BitTableRowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BitTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
