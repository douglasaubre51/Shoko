import { Component, OnChanges, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-user-table',
    imports: [],
    templateUrl: './user-table.html',
    styleUrl: './user-table.css',
})

export class UserTable implements OnInit {
    private shiemiBaseURL: string = "https://shiemiapi.onrender.com/api";
    private shiemiGetAllUsersURL: string = this.shiemiBaseURL + "/User/all";
    userList: any = [];

    // di
    constructor(private httpClient: HttpClient) { }

    ngOnInit(): void {
        console.log(`init data from SHIEMI...`);

        this.httpClient.get(this.shiemiGetAllUsersURL).subscribe(data => {
            this.userList = data;
            console.log(data);
        });
    }
}
