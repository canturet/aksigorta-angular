import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  teacherForm: FormGroup;
  listData: any;

  constructor(private fb: FormBuilder) {
    this.listData = [];
    this.teacherForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required],
      branch: ['', Validators.required],
    })
  }

  public addItem(): void {
    this.listData.push(this.teacherForm.value);
    this.teacherForm.reset();
  }

  reset() {
    this.teacherForm.reset();
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
