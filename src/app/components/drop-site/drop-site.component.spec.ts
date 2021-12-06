import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropSiteComponent } from './drop-site.component';

describe('DropSiteComponent', () => {
  let component: DropSiteComponent;
  let fixture: ComponentFixture<DropSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropSiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
