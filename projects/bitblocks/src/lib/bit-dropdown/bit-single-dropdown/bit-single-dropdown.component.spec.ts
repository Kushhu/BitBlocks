import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitSingleDropdownComponent } from './bit-single-dropdown.component';

describe('BitDropdownComponent', () => {
  let component: BitSingleDropdownComponent;
  let fixture: ComponentFixture<BitSingleDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BitSingleDropdownComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BitSingleDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
