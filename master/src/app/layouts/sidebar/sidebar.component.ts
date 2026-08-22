import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem } from './menu.model';
import { environment } from 'src/environments/environment';
import { NckhDataService } from '../../core/services/nckh-data.service';
import { getMenuForRole } from './nckh-menu';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  standalone: false
})
export class SidebarComponent implements OnInit, AfterViewInit {

  menu: any;
  toggle: any = true;
  menuItems: MenuItem[] = [];
  currentUser: any;
  @ViewChild('sideMenu') sideMenu!: ElementRef;
  @Output() mobileMenuButtonClicked = new EventEmitter();

  constructor(
    private router: Router, 
    public translate: TranslateService,
    private nckhDataService: NckhDataService
  ) {
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    // Dynamic Role-based Menu Items
    this.nckhDataService.currentUser$.subscribe(user => {
      if (user) {
        this.currentUser = user;
        this.menuItems = getMenuForRole(user.role);
        setTimeout(() => {
          this.initActiveMenu();
        }, 50);
      }
    });

    this.router.events.subscribe((event) => {
      if (document.documentElement.getAttribute('data-layout') != "twocolumn") {
        if (event instanceof NavigationEnd) {
          this.initActiveMenu();
        }
      }
    });
  }

  /***
   * Activate dropdown set
   */
  ngAfterViewInit() {
    setTimeout(() => {
      this.initActiveMenu();
    }, 0);
  }

  removeActivation(items: any) {
    items.forEach((item: any) => {
      item.classList.remove("active");
    });
  }

  toggleItem(item: any) {
    if (!item) return;
    this.menuItems.forEach((menuItem: any) => {
      if (menuItem == item) {
        menuItem.isCollapsed = !menuItem.isCollapsed;
      } else {
        menuItem.isCollapsed = true;
      }
      if (menuItem.subItems) {
        menuItem.subItems.forEach((subItem: any) => {
          if (subItem == item) {
            menuItem.isCollapsed = !menuItem.isCollapsed;
            subItem.isCollapsed = !subItem.isCollapsed;
          } else {
            subItem.isCollapsed = true;
          }
        });
      }
    });
  }

  activateParentDropdown(item: any) {
    if (!item) return false;
    item.classList.add("active");
    let parentCollapseDiv = item.closest(".collapse.menu-dropdown");

    if (parentCollapseDiv) {
      parentCollapseDiv.parentElement.children[0].classList.add("active");
      if (parentCollapseDiv.parentElement.closest(".collapse.menu-dropdown")) {
        if (parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling)
          parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling.classList.add("active");
        if (parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling.closest(".collapse")) {
          parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling.closest(".collapse").previousElementSibling.classList.add("active");
        }
      }
      return false;
    }
    return false;
  }

  updateActive(event: any) {
    const ul = document.getElementById("navbar-nav");
    if (ul) {
      const items = Array.from(ul.querySelectorAll("a.nav-link"));
      this.removeActivation(items);
    }
    this.activateParentDropdown(event.target);
  }

  initActiveMenu() {
    let pathName = window.location.pathname;
    if (environment.production) {
      pathName = pathName.replace('/velzon/angular/master', '');
    }

    const active = this.findMenuItem(pathName, this.menuItems);
    this.toggleItem(active);
    const ul = document.getElementById("navbar-nav");
    if (ul) {
      const items = Array.from(ul.querySelectorAll("a.nav-link"));
      let activeItems = items.filter((x: any) => x.classList.contains("active"));
      this.removeActivation(activeItems);

      let matchingMenuItem = items.find((x: any) => {
        if (environment.production) {
          let path = x.pathname;
          path = path.replace('/velzon/angular/master', '');
          return path === pathName;
        } else {
          return x.pathname === pathName;
        }
      });
      if (matchingMenuItem) {
        this.activateParentDropdown(matchingMenuItem);
      }
    }
  }

  private findMenuItem(pathname: string, menuItems: any[]): any {
    if (!menuItems) return null;
    for (const menuItem of menuItems) {
      if (menuItem.link && menuItem.link === pathname) {
        return menuItem;
      }

      if (menuItem.subItems) {
        const foundItem = this.findMenuItem(pathname, menuItem.subItems);
        if (foundItem) {
          return foundItem;
        }
      }
    }

    return null;
  }

  hasItems(item: MenuItem) {
    return item.subItems !== undefined ? item.subItems.length > 0 : false;
  }

  toggleMobileMenu(event: any) {
    var sidebarsize = document.documentElement.getAttribute("data-sidebar-size");
    if (sidebarsize == 'sm-hover-active') {
      document.documentElement.setAttribute("data-sidebar-size", 'sm-hover');
    } else {
      document.documentElement.setAttribute("data-sidebar-size", 'sm-hover-active');
    }
  }

  SidebarHide() {
    document.body.classList.remove('vertical-sidebar-enable');
  }
}
