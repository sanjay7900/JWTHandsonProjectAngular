import { Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { HomeComponent } from './Pages/home/home.component';

export const routes: Routes = [
    {path:'login', component:LoginComponent},
    {path:'Home',component:HomeComponent}



];
