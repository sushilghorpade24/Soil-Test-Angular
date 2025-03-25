import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SitesComponent } from './sites/sites.component';
import { TestTypesComponent } from './test-types/test-types.component';
import { TestComponent } from './test/test.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'layout',
        component:LayoutComponent,
        children:[
           {
            path:'dashboard',
            component:DashboardComponent
           },
           {
            path:'users',
            component:UserComponent
           },
           {
            path:'sites',
            component:SitesComponent
           },
           {
            path:'test-types',
            component:TestTypesComponent
           },
           {
            path:'test',
            component:TestComponent
           }
        ]
    }
];
