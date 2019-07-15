import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigDpsServiceComponent } from './config-dps-service.component';

describe('ConfigDpsServiceComponent', () => {
  let component: ConfigDpsServiceComponent;
  let fixture: ComponentFixture<ConfigDpsServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigDpsServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigDpsServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
