import { AutofocusDirective } from './autofocus.directive';
import { DebugElement, ElementRef } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  standalone: true,
  template: `<input appAutofocus>`,
  imports: [AutofocusDirective],
})
class TestComponent {}

describe('AutofocusDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let inputEl: HTMLInputElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestComponent, AutofocusDirective],
    });

    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges(); // Wywołaj detekcję zmian, aby Angular zastosował dyrektywę
    inputEl = fixture.nativeElement.querySelector('input');
  });

  it('should focus the element after view init', async () => {
    const inputDebugEl: DebugElement = 
          fixture.debugElement.query(By.css('input'));
    spyOn(inputDebugEl.nativeElement, 'focus');
    await fixture.whenStable();
    expect(inputDebugEl.nativeElement.focus).toHaveBeenCalled();
  });
});