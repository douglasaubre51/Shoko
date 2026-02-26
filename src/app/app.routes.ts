import { Routes } from '@angular/router';
import { UserTable } from './user-table/user-table';
import { Rooms } from './rooms/rooms';
import { Dashboard } from './dashboard/dashboard';
import { Channels } from './channels/channels';
import { ChannelUsers } from './channel-users/channel-users';

export const routes: Routes = [
    { path: 'channels/:channelId/channel-users', component: ChannelUsers },
    { path: 'channels', component: Channels },
    { path: 'dashboard', component: Dashboard },
    { path: 'rooms', component: Rooms },
    { path: '', component: UserTable }
];
