import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rooms',
  imports: [CommonModule],
  templateUrl: './rooms.html',
  styleUrl: './rooms.css',
})

export class Rooms implements OnInit {
  private shiemiBaseURL: string = "https://localhost:7268/api";
  private getAllRoomsURL: string = this.shiemiBaseURL + "/Room/all/with-user";
  roomList!: Observable<Room[]>;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.roomList = this.httpClient.get<Room[]>(this.getAllRoomsURL)
  }
}

type Room = {
  roomId: number,
  ownerName: string,
  ownerProfileURL: string,
  ownerId: number,
  tenantName: string,
  tenantProfileURL: string,
  tenantId: number,
  roomType: number
};
