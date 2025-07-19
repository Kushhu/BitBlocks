import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitblocksComponent } from './bitblocks.component';

describe('BitblocksComponent', () => {
  let component: BitblocksComponent;
  let fixture: ComponentFixture<BitblocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BitblocksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BitblocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
