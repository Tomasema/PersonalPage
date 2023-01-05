// Angular tools.
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
// Module's
import { NavegationRoutingModule } from './navegation-routing.module'
// Component's.
import { NavbarComponent } from '../../components/navbar/navbar.component'

const components: any[] = [NavbarComponent]

const modules: any[] = [NavegationRoutingModule, CommonModule, FormsModule, ReactiveFormsModule]

const exports: any[] = []

@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [...exports]
})
export class NavegationModule { }
