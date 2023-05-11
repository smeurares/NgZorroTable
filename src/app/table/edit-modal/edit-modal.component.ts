import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss'],
})
export class EditModalComponent implements OnInit {
  @Input() user!: User;
  userForm!: FormGroup;

  @Output() editedUser =  new EventEmitter<User>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: [''],
      nickname: '',
      age: [''],
      job: '',
      gender: ''
    });
    this.userForm.setValue({
      name: this.user.name,
      nickname: this.user.nickname,
      gender: this.user.gender,
      age: this.user.age,
      job: this.user.job
    })
  }

  isEditModalVisible = false;

  showEditModal(data: User): void {
    data.isEditModalVisible = true;
  }

  handleEditModalCancel(data: User): void {
    data.isEditModalVisible = false;
  }

  handleEditModalSubmit(data: User): void {
    data.isEditModalVisible = false;
    console.log(this.userForm.value)
    this.editedUser.emit({...this.userForm.value, id: data.id})
  }
}
