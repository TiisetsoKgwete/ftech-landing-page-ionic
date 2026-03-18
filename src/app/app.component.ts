
import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonMenuToggle, IonItem, IonIcon, IonRouterOutlet, IonRouterLink, MenuController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { homeOutline, homeSharp, informationCircleOutline, informationCircleSharp, briefcaseOutline, briefcaseSharp, mailOutline, mailSharp, starOutline, starSharp, helpCircleOutline, helpCircleSharp, moonOutline, sunnyOutline, menuOutline, closeOutline, chevronBackOutline, chevronForwardOutline } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [RouterLink, RouterLinkActive, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonMenuToggle, IonItem, IonIcon, IonRouterLink, IonRouterOutlet],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'About', url: '/about', icon: 'information-circle' },
    { title: 'Services', url: '/services', icon: 'briefcase' },
    { title: 'Testimonials', url: '/testimonials', icon: 'star' },
    { title: 'FAQ', url: '/faq', icon: 'help-circle' },
    { title: 'Contact Us', url: '/contact', icon: 'mail' },
  ];

  isDark = true;
  isRouteTransitioning = false;
  isMenuOpen = false;
  isSidebarCollapsed = false;

  get sidebarWhen(): string | boolean {
    return this.isSidebarCollapsed ? false : '(min-width: 768px)';
  }

  constructor(private router: Router, public menuCtrl: MenuController) {
    addIcons({ homeOutline, homeSharp, informationCircleOutline, informationCircleSharp, briefcaseOutline, briefcaseSharp, mailOutline, mailSharp, starOutline, starSharp, helpCircleOutline, helpCircleSharp, moonOutline, sunnyOutline, menuOutline, closeOutline, chevronBackOutline, chevronForwardOutline });
    const saved = localStorage.getItem('ftech-theme');
    this.isDark = saved !== 'light';
    this.isSidebarCollapsed = localStorage.getItem('ftech-sidebar') === 'collapsed';
    this.applyTheme();

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.isRouteTransitioning = true;
      }

      if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        window.setTimeout(() => {
          this.isRouteTransitioning = false;
        }, 420);
      }
    });
  }

  openMenu() {
    this.menuCtrl.toggle();
  }

  onMenuOpen() {
    this.isMenuOpen = true;
  }

  onMenuClose() {
    this.isMenuOpen = false;
  }

  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
    localStorage.setItem('ftech-sidebar', this.isSidebarCollapsed ? 'collapsed' : 'expanded');
  }

  toggleTheme() {
    this.isDark = !this.isDark;
    localStorage.setItem('ftech-theme', this.isDark ? 'dark' : 'light');
    this.applyTheme();
  }

  private applyTheme() {
    if (this.isDark) {
      document.documentElement.classList.add('ion-palette-dark');
      document.body.classList.remove('light-mode');
    } else {
      document.documentElement.classList.remove('ion-palette-dark');
      document.body.classList.add('light-mode');
    }
  }
}
