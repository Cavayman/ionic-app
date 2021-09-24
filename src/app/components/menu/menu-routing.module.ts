import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      {
        path: 'main',
        loadChildren: () => import('../../pages/main/main.module').then(m => m.MainPageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../../pages/settings/settings.module').then(m => m.SettingsPageModule)
      },
      {
        path: 'animation',
        loadChildren: () => import('../../pages/animation/animation.module').then(m => m.AnimationPageModule)
      },
      {
        path: 'notification',
        loadChildren: () => import('../../pages/notification/notification.module').then(m => m.NotificationModule)
      },
      {
        path: 'topics',
        loadChildren: () => import('../../pages/topics/topics.module').then(m => m.TopicsPageModule)
      }
    ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/menu/main'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuRoutingModule {}
