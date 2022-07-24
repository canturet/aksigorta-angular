import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  studentForm: FormGroup;
  listData: any;

  constructor(private fb: FormBuilder) {
    this.listData = [];
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required],
      number: ['', Validators.required],
    })
  }

  public getStudents(): void {
    return this.listData;
  }

  public addItem(): void {
    this.listData.push(this.studentForm.value);
    this.studentForm.reset();
  }

  reset() {
    this.studentForm.reset();
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
