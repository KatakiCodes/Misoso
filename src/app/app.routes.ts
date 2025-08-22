import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Tasks } from './pages/tasks/tasks';
import { Task } from './pages/task/task';


export const routes: Routes = [
    { path:'', component: Home },
    { path:'login', component: Login },
    { path:'register', component: Register },
    { path:'tasks', component: Tasks },
    { path:'task/:id', component: Task },
];
