import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleFormsComponent } from './example.forms.component';

describe('ExampleFormsComponent', () => {
  let component: ExampleFormsComponent;
  let fixture: ComponentFixture<ExampleFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleFormsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExampleFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
