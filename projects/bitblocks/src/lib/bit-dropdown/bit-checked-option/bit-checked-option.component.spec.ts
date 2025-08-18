import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitCheckedOptionComponent } from './bit-checked-option.component';

describe('BitCheckedOptionComponent', () => {
  let component: BitCheckedOptionComponent;
  let fixture: ComponentFixture<BitCheckedOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BitCheckedOptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BitCheckedOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
