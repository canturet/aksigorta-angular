import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { StudentComponent } from '../student/student.component';

@Component({
  selector: 'app-bootcamp',
  templateUrl: './bootcamp.component.html',
  styleUrls: ['./bootcamp.component.css']
})
export class BootcampComponent implements OnInit {

  bootcampForm: FormGroup;
  listData: any;
  studentDatas: any;

  constructor(private fb: FormBuilder) {
    this.listData = [];
    this.bootcampForm = this.fb.group({
      name: ['', Validators.required],
      detail: ['', Validators.required],
      students: ['', Validators.required],
      teachers: ['', Validators.required],
    })
  }

  public addItem(): void {
    this.listData.push(this.bootcampForm.value);
    this.bootcampForm.reset();
  }

  reset() {
    this.bootcampForm.reset();
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
