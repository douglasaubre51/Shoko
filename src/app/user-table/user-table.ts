import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-user-table',
    imports: [],
    templateUrl: './user-table.html',
    styleUrl: './user-table.css',
})


export class UserTable implements OnInit {
    private shiemiBaseURL: string = "http://localhost:5017/api";
    private shiemiGetAllUsersURL: string = this.shiemiBaseURL + "/User/all";
    userList: any = null;

    // di
    constructor(private httpClient: HttpClient) {}

    ngOnInit(): void {
        console.log(`fetching data from SHIEMI...`);

        this.httpClient.get(this.shiemiGetAllUsersURL).subscribe(data =>{
            this.userList = data;
        });
    }
}
