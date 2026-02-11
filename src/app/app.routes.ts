import { Routes } from '@angular/router';
import { UserTable } from './user-table/user-table';
import { Rooms } from './rooms/rooms';

export const routes: Routes = [
    { path:'', component: UserTable },
    { path:'rooms', component: Rooms }
];
