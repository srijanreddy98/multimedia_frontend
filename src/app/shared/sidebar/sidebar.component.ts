import { Component, OnInit } from '@angular/core';
import { NbThemeService, NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private themeService: NbThemeService, private sideBarService: NbSidebarService ) { }

  ngOnInit() {
  }
  toggleTheme(e) {
    if (e)  {
      this.themeService.changeTheme('dark');
      return;
    }
    this.themeService.changeTheme('default');
  }
  collapseSidebar() {
    this.sideBarService.collapse();
  }
}
