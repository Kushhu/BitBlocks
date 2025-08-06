import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitTableCardComponent } from './bit-table-card.component';

describe('BitTableCardComponent', () => {
  let component: BitTableCardComponent;
  let fixture: ComponentFixture<BitTableCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BitTableCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BitTableCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
