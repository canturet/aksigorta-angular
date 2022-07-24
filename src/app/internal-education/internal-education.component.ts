import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-internal-education',
  templateUrl: './internal-education.component.html',
  styleUrls: ['./internal-education.component.css']
})
export class InternalEducationComponent implements OnInit {

  internalEducationForm: FormGroup;
  listData: any;

  constructor(private fb: FormBuilder) {
    this.listData = [];
    this.internalEducationForm = this.fb.group({
      name: ['', Validators.required],
      detail: ['', Validators.required],
      students: ['', Validators.required],
      teachers: ['', Validators.required],
    })
  }

  public addItem(): void {
    this.listData.push(this.internalEducationForm.value);
    this.internalEducationForm.reset();
  }

  reset() {
    this.internalEducationForm.reset();
  }

  removeItem(element: any) {
    this.listData.forEach((value: any, index: any) => {
      if (value == element)
        this.listData.splice(index, 1);
    });
  }

  ngOnInit(): void {
  }

}
