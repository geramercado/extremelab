import { Routes } from '@angular/router';

import { BodyComponent } from './mainPage/body/body.component';
import { FiltersComponent } from './filters/filters.component';


export const routes: Routes = [

    {
        path:'main-page',
        component: BodyComponent
    },

    {
        path:'filters',
        component: FiltersComponent
    }

];
    
    