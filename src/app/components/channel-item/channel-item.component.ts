import { Component, OnInit } from '@angular/core';
import { Channel } from '../../models/Channel'

@Component({
  selector: 'app-channel-item',
  templateUrl: './channel-item.component.html',
  styleUrls: ['./channel-item.component.css']
})
export class ChannelItemComponent implements OnInit {
  // @Input() channelList: Channel;

  constructor() { }

  ngOnInit() {
  }

}
