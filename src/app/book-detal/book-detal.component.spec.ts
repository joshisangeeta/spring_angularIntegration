import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetalComponent } from './book-detal.component';

describe('BookDetalComponent', () => {
  let component: BookDetalComponent;
  let fixture: ComponentFixture<BookDetalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookDetalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
