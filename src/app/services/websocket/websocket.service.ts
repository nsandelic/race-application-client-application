import { Injectable } from '@angular/core';
import { Client, Stomp, StompSubscription } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  private stompClientCommand: Client | null = null;
  public  stompClientQuery: any;
  private raceTopic: string = '/topic/race-events';
  private applicationTopic: string = '/topic/application-events';
  private commandServiceUrl = 'http://localhost:8081/ws'; // URL for sending events (Command Service)
  private queryServiceUrl = 'http://localhost:8080/ws';   // URL for fetching events (Query Service)

  constructor() {}

  connectQuery() {
    var socket = new SockJS(this.queryServiceUrl);
    this.stompClientQuery = Stomp.over(socket);
    this.stompClientQuery.connect({}, function (frame: string) {
      console.log('Connected: ' + frame);
    }, function (err: any) {
      console.log('err', err);
    });
  }

  connectCommand(): void {
    const socket = new SockJS(this.commandServiceUrl);
    this.stompClientCommand = new Client({
      webSocketFactory: () => socket,
      connectHeaders: {},
      debug: (str) => {
        console.log(str);
      },
      onConnect: () => {
        console.log('Connected to WebSocket server at', this.commandServiceUrl);
        this.subscribeToAppliactions();
        this.subscribeToRaces();
      },
      onDisconnect: () => {
        console.log('Disconnected from WebSocket server');
      },
    });
    this.stompClientCommand.activate();
  }

  subscribeToRaces(): StompSubscription | undefined {
    if (!this.stompClientCommand) return;
    return this.stompClientCommand.subscribe(this.raceTopic, (message) => {
      if (message.body) {
        const raceUpdate = JSON.parse(message.body);
        console.log('Race update received: ', raceUpdate);
        this.stompClientQuery.send("/app/races" , {}, message.body);
      }
    });
  }

  subscribeToAppliactions(): StompSubscription | undefined {
    if (!this.stompClientCommand) return;
    return this.stompClientCommand.subscribe(this.applicationTopic, (message) => {
      if (message.body) {
        const applicationUpdate = JSON.parse(message.body);
        console.log('Application update received: ', applicationUpdate);
        this.stompClientQuery.send("/app/applications" , {}, message.body);
      }
    });
  }

  disconnectQuery(): void {
    if (this.stompClientQuery) {
      this.stompClientQuery.deactivate();
      this.stompClientQuery = null;
      console.log('Disconnected from Query WebSocket');
    }
  }

  disconnectCommand(): void {
    if (this.stompClientCommand) {
      this.stompClientCommand.deactivate();
      this.stompClientCommand = null;
      console.log('Disconnected from Command WebSocket');
    }
  }
}
