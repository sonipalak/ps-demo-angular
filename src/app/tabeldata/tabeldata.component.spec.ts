import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabeldataComponent } from './tabeldata.component';

describe('TabeldataComponent', () => {
  let component: TabeldataComponent;
  let fixture: ComponentFixture<TabeldataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabeldataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabeldataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
