// Angular tools
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './views/layout.component';
import { NavegationModule } from 'src/app/shared/module/navegation/navegation.module';

const components = [HeaderComponent]
const view = [LayoutComponent]
const moduls = [NavegationModule]

@NgModule({
  declarations: [...components, ...view],
  imports: [CommonModule, ...moduls],
  exports: [...components, ...view]
})
export class VisitorsModule { }
