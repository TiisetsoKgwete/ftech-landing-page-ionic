import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FAQPage } from './faq.page';

describe('FAQPage', () => {
  let component: FAQPage;
  let fixture: ComponentFixture<FAQPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FAQPage],
    }).compileComponents();

    fixture = TestBed.createComponent(FAQPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});