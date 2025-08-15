import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitDropdownComponent } from './bit-dropdown.component';

describe('BitDropdownComponent', () => {
  let component: BitDropdownComponent;
  let fixture: ComponentFixture<BitDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BitDropdownComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BitDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
