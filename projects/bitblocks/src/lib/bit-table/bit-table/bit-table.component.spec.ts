import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitTableComponent } from './bit-table.component';

describe('BitTableComponent', () => {
  let component: BitTableComponent;
  let fixture: ComponentFixture<BitTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BitTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BitTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
