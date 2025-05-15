import { Routes } from '@angular/router';

import { BodyComponent } from './mainPage/body/body.component';
import { InputsComponent } from './filters/inputs/inputs.component';
import { LoginComponent } from './register/login/login.component';


export const routes: Routes = [

    {
        path:'main-page',
        component: BodyComponent
    },

    {
        path:'filters',
        component: InputsComponent
    },

    {
        path:'login',
        component: LoginComponent
    },

    {
        path:'',
        redirectTo:'main-page',
        pathMatch:'full'
    }

];
    
    