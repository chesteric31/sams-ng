import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CategoryComponent} from './category/category.component';
import {HomeComponent} from './home/home.component';
import {StrengthComponent} from './strength/strength.component';
import {ArmorComponent} from './armor/armor.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'categories', component: CategoryComponent },
  { path: 'strengths', component: StrengthComponent },
  { path: 'armors', component: ArmorComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
