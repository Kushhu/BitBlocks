import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitMultiDropdownComponent } from './bit-multi-dropdown.component';

describe('BitMultiDropdownComponent', () => {
  let component: BitMultiDropdownComponent;
  let fixture: ComponentFixture<BitMultiDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BitMultiDropdownComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BitMultiDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
