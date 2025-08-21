import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitTabGroupComponent } from './bit-tab-group.component';

describe('BitTabGroupComponent', () => {
  let component: BitTabGroupComponent;
  let fixture: ComponentFixture<BitTabGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BitTabGroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BitTabGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
