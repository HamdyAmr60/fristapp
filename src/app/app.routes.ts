import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { MenuComponent } from './Components/menu/menu.component';
import { BlogComponent } from './Components/blog/blog.component';
import { ContactComponent } from './Components/contact/contact.component';
import { OrderComponent } from './Components/order/order.component';

export const routes: Routes = [
    {path:"home",component:HomeComponent },
    {path:"menu",component:MenuComponent },
    {path:"blog",component:BlogComponent },
    {path:"contact",component:ContactComponent },
    {path:"order",component:OrderComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }, 
    { path: '**', redirectTo: 'home' }
];
