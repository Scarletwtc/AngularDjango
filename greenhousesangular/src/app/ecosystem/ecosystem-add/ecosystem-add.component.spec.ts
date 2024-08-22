import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcosystemAddComponent } from './ecosystem-add.component';

describe('EcosystemAddComponent', () => {
  let component: EcosystemAddComponent;
  let fixture: ComponentFixture<EcosystemAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcosystemAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcosystemAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
