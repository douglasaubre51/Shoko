import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rooms',
  imports: [],
  templateUrl: './rooms.html',
  styleUrl: './rooms.css',
})


export class Rooms implements OnInit {
  private shiemiBaseURL: string = "http://localhost:5017/api";
  private getAllRoomsURL: string = this.shiemiBaseURL + "/Room/all";
  private room: Room|any = null;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get<Room>(this.getAllRoomsURL).subscribe(data => {
      this.room = data;
    })

    console.log(this.room);
  }
}

type Room = {
  id: number,
  ownerName: string,
  tenantName: string,
  roomType: number
};
