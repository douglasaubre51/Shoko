import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-channel-users',
  imports: [],
  templateUrl: './channel-users.html',
  styleUrl: './channel-users.css',
})
export class ChannelUsers {

  channelId: number = 0;
  private activatedRoute = inject(ActivatedRoute);

  constructor() {
    this.activatedRoute.params.subscribe((params) => {

      this.channelId = params['channelId'];
      console.log(this.channelId);
    })
  }

  ngOnInit() {

  }
}
