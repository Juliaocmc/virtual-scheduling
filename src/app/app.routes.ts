import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { NewContactComponent } from './components/new-contact/new-contact.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "home", component: HomeComponent},
    {path: "contact", component: ContactComponent},
    {path: "new-contact", component: NewContactComponent},
];
