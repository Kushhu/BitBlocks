import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitTabComponent } from './bit-tab.component';

describe('BitTabComponent', () => {
  let component: BitTabComponent;
  let fixture: ComponentFixture<BitTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BitTabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BitTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
