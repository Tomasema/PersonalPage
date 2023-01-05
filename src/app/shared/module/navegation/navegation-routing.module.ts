import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { NavbarComponent } from '@shared/components'


const routes: Routes = [
    {
        path: '',
        component: NavbarComponent,
        pathMatch: 'full'
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class NavegationRoutingModule { }
