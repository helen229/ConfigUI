import { Component, OnInit } from '@angular/core';
import { Channel } from '../../models/Channel'

@Component({
  selector: 'app-config-dps-service',
  templateUrl: './config-dps-service.component.html',
  styleUrls: ['./config-dps-service.component.css']
})

export class ConfigDpsServiceComponent implements OnInit {

  channelLists: Channel[] = [
    {
      channelName: "Omni",
      appCode:"UE90",
      org:"UE90",
      spName:"UE90",
      headerValue:"UE90"
    },
    {
      channelName: "Omni",
      appCode:"UE90",
      org:"UE90",
      spName:"UE90",
      headerValue:"UE90"
    },
    {
      channelName: "Omni",
      appCode:"UE90",
      org:"UE90",
      spName:"UE90",
      headerValue:"UE90"
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
