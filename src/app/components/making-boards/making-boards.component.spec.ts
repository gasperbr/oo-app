import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakingBoardsComponent } from './making-boards.component';

describe('MakingBoardsComponent', () => {
  let component: MakingBoardsComponent;
  let fixture: ComponentFixture<MakingBoardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakingBoardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakingBoardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
