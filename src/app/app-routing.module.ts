import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DogComponent } from './dog/dog.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DogDetailComponent } from './dog/dog-detail/dog-detail.component';

const appRoutes: Routes = [
    {path: '', redirectTo: 'dogbook', pathMatch: 'full'},
    {path: 'dogbook', component: DogComponent, children: [
        {path: ':id', component: DogDetailComponent}
    ]},
    {path: 'shopping-list', component: ShoppingListComponent},
    {path: '**', component: PageNotFoundComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
