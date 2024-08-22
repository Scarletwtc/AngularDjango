import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcosystemListComponent } from './ecosystem-list.component';

describe('EcosystemListComponent', () => {
  let component: EcosystemListComponent;
  let fixture: ComponentFixture<EcosystemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcosystemListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcosystemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
