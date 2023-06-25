import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionelsComponent } from './professionels.component';

describe('ProfessionelsComponent', () => {
  let component: ProfessionelsComponent;
  let fixture: ComponentFixture<ProfessionelsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfessionelsComponent]
    });
    fixture = TestBed.createComponent(ProfessionelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
