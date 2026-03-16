import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-channels',
  imports: [RouterLink, CommonModule],
  templateUrl: './channels.html',
  styleUrl: './channels.css',
})

export class Channels {
  private ShiemiGetChannels = "https://shiemiapi.onrender.com/api/Channel/all";

  ChannelList!: Observable<ChannelDto[]>;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.ChannelList = this.httpClient.get<ChannelDto[]>(this.ShiemiGetChannels)
  }
}

type ChannelDto = {
  id: number,
  projectId: number,
  userId: number,
  title: string,
  userProfile: string,
  username: string
}