import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user';
import { isMajorValidator } from './isMajorValidator';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.scss']
})
export class AddModalComponent implements OnInit {
  userForm!: FormGroup;

  @Output() addedUser =  new EventEmitter<User>();
  addModalVisible = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      nickname: ['',Validators.required],
      age: ['', [Validators.required, isMajorValidator]],
      job: ['',Validators.required],
      gender: ['',Validators.required]
    });
  }

  showModal(): void {
    this.addModalVisible = true;
  }

  handleAddModalSubmit(): void {
    console.log('Button ok clicked!');
    this.addModalVisible = false;
    if (this.userForm.valid) {
      console.log('Form submitted!');
      console.log('Form values:', this.userForm.value);
      this.addedUser.emit(this.userForm.value);
    }
  }

  handleAddModalCancel(): void {
    console.log('Button cancel clicked!');
    this.addModalVisible = false;
  }

  submitForm() {
    if (this.userForm.valid) {
      console.log('Form submitted!');
      console.log('Form values:', this.userForm.value);
      this.addedUser.emit(this.userForm.value);
    }
  }
}
