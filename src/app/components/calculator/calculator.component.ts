import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  result: string = '';
  calculation: string = '';

  clearScreen() {
    this.result = '';
    this.calculation = '';
  }

  calc(num: string) {
    this.calculation += num;
    this.result = this.calculation;
  }

  calculate() {
    try {
      this.result = eval(this.calculation);
      this.calculation = this.result.toString();
    } catch (error) {
      this.result = 'Error';
    }
  }
}
