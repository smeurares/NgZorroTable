import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit{
  listOfData!: User[];

  constructor(private readonly userService: UserService){}

  ngOnInit(): void {
      this.renderUsers()
  }

  renderUsers(){
    this.userService.fetchUsers();
    this.userService.users.subscribe(users => this.listOfData = users)
  }

  listOfCurrentPageData: readonly User[] = [];




  onCurrentPageDataChange(listOfCurrentPageData: readonly User[]): void {
    this.listOfCurrentPageData = listOfCurrentPageData;
  }

  addUser(user: User){
    this.userService.addUser(user).subscribe(() => this.renderUsers())
  }

  editUser(user: User){
    console.log(user.id)
    this.userService.editUser(user, user.id).subscribe(() => this.renderUsers())
  }
}
