import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitOptionComponent } from './bit-option.component';

describe('BitOptionComponent', () => {
  let component: BitOptionComponent;
  let fixture: ComponentFixture<BitOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BitOptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BitOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
