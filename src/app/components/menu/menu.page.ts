import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss']
})
export class MenuPage implements OnInit {
  pages = [
    {
      title: 'Chat',
      url: '/app/menu/main',
      icon: 'chatbubbles-outline'
    },
    {
      title: 'Settings',
      url: '/app/menu/settings',
      icon: 'cog-outline'
    },
    {
      title: 'Animation',
      url: '/app/menu/animation',
      icon: 'balloon-outline'
    },
    {
      title: 'Notification',
      url: '/app/menu/notification',
      icon: 'albums-outline'
    },
    {
      title: 'Topics',
      url: '/app/menu/topics',
      icon: 'library-outline'
    },
    {
      title: 'Logout',
      url: '/login',
      icon: 'exit-outline'
    }
  ];

  selectedPath = '';

  constructor(private router: Router, private chatService: ChatService) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event.url === '/login') {
        document.body.classList.remove('dark');
        chatService.signOut().then(() => {
          this.router.navigateByUrl('/', {replaceUrl: true}).then();
        });
      } else {
        this.selectedPath = event.url;
      }
    });
  }

  ngOnInit(): void {
  }

}
