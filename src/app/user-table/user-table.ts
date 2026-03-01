import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-user-table',
    imports: [CommonModule],
    templateUrl: './user-table.html',
    styleUrl: './user-table.css',
})


export class UserTable implements OnInit {
    private shiemiBaseURL: string = "https://shiemiapi.onrender.com/api";
    private shiemiGetAllUsersURL: string = this.shiemiBaseURL + "/User/all";
    userList!: Observable<User[]>;

    ngOnInit(): void {
        this.userList = this.httpClient.get<User[]>(this.shiemiGetAllUsersURL);
    }
    constructor(private httpClient: HttpClient) {
    }
}

export type User = {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    profilePhotoURL: string,
    isDeveloper: boolean
}
