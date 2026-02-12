import { Routes } from '@angular/router';
import { UserTable } from './user-table/user-table';
import { Rooms } from './rooms/rooms';

export const routes: Routes = [
    { path:'rooms', component: Rooms },
    { path:'', component: UserTable }
];
