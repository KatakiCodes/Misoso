import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Tasks } from './pages/tasks/tasks';
import { Task } from './pages/task/task';
import { authGuard } from './guards/auth-guard';
import { noAuthGuard } from './guards/no-auth-guard';


export const routes: Routes = [
    { path:'', pathMatch:'full', redirectTo:'home' },
    { path:'home', component: Home, canActivate: [authGuard] },
    { path:'login', component: Login , canActivate:[noAuthGuard]},
    { path:'register', component: Register },
    { path:'tasks', component: Tasks, canActivate: [authGuard] },
    { path:'task/:id', component: Task, canActivate: [authGuard] },
    { path:'**', redirectTo:'home' }
];
