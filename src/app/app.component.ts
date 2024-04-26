import { Component } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe, JsonPipe } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatFormFieldModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    JsonPipe,
    DatePipe
  ],
  providers: [provideNativeDateAdapter(), DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  constructor(private datePipe: DatePipe) {
    this.range.valueChanges.subscribe(value => {
      console.log("Date range changed = ", value);
      console.log("Start Date = " + this.datePipe.transform(value.start, 'yyyy-MM-ddTHH:mm:ssZ'));
      console.log("End Date = " + this.datePipe.transform(value.end, 'yyyy-MM-ddTHH:mm:ssZ'));
    });
  }

}
