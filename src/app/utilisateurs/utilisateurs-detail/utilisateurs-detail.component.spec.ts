import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateursDetailComponent } from './utilisateurs-detail.component';

describe('UtilisateursDetailComponent', () => {
  let component: UtilisateursDetailComponent;
  let fixture: ComponentFixture<UtilisateursDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilisateursDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilisateursDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
