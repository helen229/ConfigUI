import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigDrsServiceComponent } from './config-drs-service.component';

describe('ConfigDrsServiceComponent', () => {
  let component: ConfigDrsServiceComponent;
  let fixture: ComponentFixture<ConfigDrsServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigDrsServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigDrsServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
