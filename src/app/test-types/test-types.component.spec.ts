import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTypesComponent } from './test-types.component';

describe('TestTypesComponent', () => {
  let component: TestTypesComponent;
  let fixture: ComponentFixture<TestTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestTypesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
