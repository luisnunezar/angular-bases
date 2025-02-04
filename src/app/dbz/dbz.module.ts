import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageDBZ } from './pages/main-page.component';
import { ListDBZComponent } from './components/list/list-dbz.component';
import { AddCharacterComponent } from './components/formulario/add-character/add-character.component';



@NgModule({
  declarations: [
    MainPageDBZ,
    ListDBZComponent,
    AddCharacterComponent
  ],
  exports: [
    MainPageDBZ
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
