import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { AddModalComponent } from './add-modal/add-modal.component';
import { EditModalComponent } from './edit-modal/edit-modal.component';
import { TableRoutingModule } from './table-routing.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';

@NgModule({
  providers: [
    UserService
  ],
  declarations: [TableComponent, AddModalComponent, EditModalComponent],
  imports: [
    CommonModule,
    TableRoutingModule,
    NzButtonModule,
    NzTableModule,
    NzTableModule,
    NzPaginationModule,
    NzModalModule,
    NzFormModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NzSelectModule
  ],
})
export class TableModule {}
