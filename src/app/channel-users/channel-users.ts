import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-channel-users',
  imports: [CommonModule],
  templateUrl: './channel-users.html',
  styleUrl: './channel-users.css',
})
export class ChannelUsers {

  channelId: number = 0;
  channelUserUrl: string = "https://shiemiapi.onrender.com/api/Channel";
  ChannelUserList!: Observable<User[]>;
  private activatedRoute = inject(ActivatedRoute);

  constructor(private httpClient: HttpClient) {

    this.activatedRoute.params.subscribe((params) => {
      this.channelId = params['channelId'];
      console.log(this.channelId);
    })
  }

  ngOnInit() {
    this.ChannelUserList = this.httpClient.get<User[]>(`${this.channelUserUrl}/${this.channelId}/user/all`)
  }
}

type User = {
  userId: string,
  username: string,
  profile: string
}
