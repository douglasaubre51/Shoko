import { Routes } from '@angular/router';
import { UserTable } from './user-table/user-table';
import { Rooms } from './rooms/rooms';
import { Dashboard  } from './dashboard/dashboard';
import {Channels} from './channels/channels';

export const routes: Routes = [
    { path: 'channels', component:Channels},
    { path:'dashboard',component:Dashboard },
    { path:'rooms', component: Rooms },
    { path:'', component: UserTable }
];
