import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    // {path: 'admin', loadChildren: './modules/admin/admin.module#AdminModule'},
    // {path: '', redirectTo: '/admin', pathMatch: 'full'},
    // {path: '**', redirectTo: '/admin'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
