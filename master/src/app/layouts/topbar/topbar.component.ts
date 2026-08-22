import { Component, OnInit, EventEmitter, Output, Inject, ViewChild, TemplateRef, DOCUMENT } from '@angular/core';
import { EventService } from '../../core/services/event.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LanguageService } from '../../core/services/language.service';
import { TranslateService } from '@ngx-translate/core';
import { allNotification, messages } from './data';
import { CartModel } from './topbar.model';
import { cartData } from './data';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NckhDataService, DEMO_USERS } from '../../core/services/nckh-data.service';
import { UserProfile, UserRole } from '../../core/models/nckh.model';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
  standalone: false
})
export class TopbarComponent implements OnInit {
  messages: any;
  element: any;
  mode: string | undefined;
  @Output() mobileMenuButtonClicked = new EventEmitter();
  allnotifications: any;
  flagvalue: any;
  valueset: any;
  countryName: any;
  cookieValue: any;
  
  currentUserProfile!: UserProfile;
  demoUsers = DEMO_USERS;
  
  cartData!: CartModel[];
  total = 0;
  cart_length: any = 0;
  totalNotify: number = 0;
  newNotify: number = 0;
  readNotify: number = 0;
  isDropdownOpen = false;
  @ViewChild('removenotification') removenotification!: TemplateRef<any>;
  notifyId: any;

  constructor(
    @Inject(DOCUMENT) private document: any, 
    private eventService: EventService, 
    public languageService: LanguageService, 
    private modalService: NgbModal,
    public _cookiesService: CookieService, 
    public translate: TranslateService,
    private router: Router,
    public nckhDataService: NckhDataService
  ) { }

  ngOnInit(): void {
    this.nckhDataService.currentUser$.subscribe(u => {
      if (u) {
        this.currentUserProfile = u;
      }
    });

    this.element = document.documentElement;

    this.cookieValue = this._cookiesService.get('lang');
    const val = this.listLang.filter(x => x.lang === this.cookieValue);
    this.countryName = val.map(element => element.text);
    if (val.length === 0) {
      if (this.flagvalue === undefined) { this.valueset = 'assets/images/flags/us.svg'; }
    } else {
      this.flagvalue = val.map(element => element.flag);
    }

    this.allnotifications = allNotification;
    this.messages = messages;
    this.cartData = cartData;
    this.cart_length = this.cartData.length;
    this.cartData.forEach((item) => {
      var item_price = item.quantity * item.price;
      this.total += item_price;
    });
  }

  // Chuyển role nhanh
  switchRole(role: UserRole) {
    this.nckhDataService.switchRole(role);
    this.router.navigate(['/nckh/dashboard']);
  }

  getRoleBadgeClass(role: UserRole): string {
    switch (role) {
      case 'GIANG_VIEN': return 'bg-primary-subtle text-primary';
      case 'SINH_VIEN': return 'bg-info-subtle text-info';
      case 'TRUONG_KHOA': return 'bg-success-subtle text-success';
      case 'GIANG_VIEN_HD': return 'bg-warning-subtle text-warning';
      case 'P_KHCN': return 'bg-danger-subtle text-danger';
      case 'CHU_TICH_HD': return 'bg-purple-subtle text-purple';
      case 'HOI_DONG_MEMBER': return 'bg-secondary-subtle text-secondary';
      case 'THU_KY_HD': return 'bg-dark-subtle text-dark';
      case 'ADMIN': return 'bg-dark text-white';
      default: return 'bg-primary text-white';
    }
  }

  toggleMobileMenu(event: any) {
    document.querySelector('.hamburger-icon')?.classList.toggle('open');
    event.preventDefault();
    this.mobileMenuButtonClicked.emit();
  }

  fullscreen() {
    document.body.classList.toggle('fullscreen-enable');
    if (
      !document.fullscreenElement && !this.element.mozFullScreenElement &&
      !this.element.webkitFullscreenElement) {
      if (this.element.requestFullscreen) {
        this.element.requestFullscreen();
      } else if (this.element.mozRequestFullScreen) {
        this.element.mozRequestFullScreen();
      } else if (this.element.webkitRequestFullscreen) {
        this.element.webkitRequestFullscreen();
      } else if (this.element.msRequestFullscreen) {
        this.element.msRequestFullscreen();
      }
    } else {
      if (this.document.exitFullscreen) {
        this.document.exitFullscreen();
      } else if (this.document.mozCancelFullScreen) {
        this.document.mozCancelFullScreen();
      } else if (this.document.webkitExitFullscreen) {
        this.document.webkitExitFullscreen();
      } else if (this.document.msExitFullscreen) {
        this.document.msExitFullscreen();
      }
    }
  }

  openModal(content: any) {
    this.modalService.open(content, { centered: true });
  }

  changeMode(mode: string) {
    this.mode = mode;
    this.eventService.broadcast('changeMode', mode);

    switch (mode) {
      case 'light':
        document.documentElement.setAttribute('data-bs-theme', "light");
        break;
      case 'dark':
        document.documentElement.setAttribute('data-bs-theme', "dark");
        break;
      default:
        document.documentElement.setAttribute('data-bs-theme', "light");
        break;
    }
  }

  listLang = [
    { text: 'English', flag: 'assets/images/flags/us.svg', lang: 'en' },
    { text: 'Española', flag: 'assets/images/flags/spain.svg', lang: 'es' },
    { text: 'Deutsche', flag: 'assets/images/flags/germany.svg', lang: 'de' },
    { text: 'Italiana', flag: 'assets/images/flags/italy.svg', lang: 'it' },
    { text: 'русский', flag: 'assets/images/flags/russia.svg', lang: 'ru' },
    { text: '中国人', flag: 'assets/images/flags/china.svg', lang: 'ch' },
    { text: 'français', flag: 'assets/images/flags/french.svg', lang: 'fr' },
    { text: 'Arabic', flag: 'assets/images/flags/ar.svg', lang: 'ar' },
  ];

  setLanguage(text: string, lang: string, flag: string) {
    this.countryName = text;
    this.flagvalue = flag;
    this.cookieValue = lang;
    this.languageService.setLanguage(lang);
  }

  logout() {
    this.nckhDataService.logout();
    this.router.navigate(['/auth/login']);
  }

  windowScroll() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      (document.getElementById("back-to-top") as HTMLElement).style.display = "block";
      document.getElementById('page-topbar')?.classList.add('topbar-shadow');
    } else {
      (document.getElementById("back-to-top") as HTMLElement).style.display = "none";
      document.getElementById('page-topbar')?.classList.remove('topbar-shadow');
    }
  }

  deleteItem(event: any, id: any) {
    var price = event.target.closest('.dropdown-item').querySelector('.item_price').innerHTML;
    var Total_price = this.total - price;
    this.total = Total_price;
    this.cart_length = this.cart_length - 1;
    this.total > 1 ? (document.getElementById("empty-cart") as HTMLElement).style.display = "none" : (document.getElementById("empty-cart") as HTMLElement).style.display = "block";
    document.getElementById('item_' + id)?.remove();
  }

  toggleDropdown(event: Event) {
    event.stopPropagation();
    if (this.isDropdownOpen) {
      this.isDropdownOpen = false;
    } else {
      this.isDropdownOpen = true;
    }
  }

  Search() {
    var searchOptions = document.getElementById("search-close-options") as HTMLAreaElement;
    var dropdown = document.getElementById("search-dropdown") as HTMLAreaElement;
    var input: any, filter: any;
    input = document.getElementById("search-options") as HTMLAreaElement;
    filter = input.value.toUpperCase();
    var inputLength = filter.length;

    if (inputLength > 0) {
      dropdown.classList.add("show");
      searchOptions.classList.remove("d-none");
      var inputVal = input.value.toUpperCase();
      var notifyItem = document.getElementsByClassName("notify-item");

      Array.from(notifyItem).forEach(function (element: any) {
        var notifiTxt = '';
        if (element.querySelector("h6")) {
          var spantext = element.getElementsByTagName("span")[0].innerText.toLowerCase();
          var name = element.querySelector("h6").innerText.toLowerCase();
          if (name.includes(inputVal)) {
            notifiTxt = name;
          } else {
            notifiTxt = spantext;
          }
        } else if (element.getElementsByTagName("span")) {
          notifiTxt = element.getElementsByTagName("span")[0].innerText.toLowerCase();
        }
        if (notifiTxt)
          element.style.display = notifiTxt.includes(inputVal) ? "block" : "none";
      });
    } else {
      dropdown.classList.remove("show");
      searchOptions.classList.add("d-none");
    }
  }

  closeBtn() {
    var searchOptions = document.getElementById("search-close-options") as HTMLAreaElement;
    var dropdown = document.getElementById("search-dropdown") as HTMLAreaElement;
    var searchInputReponsive = document.getElementById("search-options") as HTMLInputElement;
    dropdown.classList.remove("show");
    searchOptions.classList.add("d-none");
    searchInputReponsive.value = "";
  }

  checkedValGet: any[] = [];
  onCheckboxChange(event: any, id: any) {
    this.notifyId = id;
    var result;
    if (id == '1') {
      var checkedVal: any[] = [];
      for (var i = 0; i < this.allnotifications.length; i++) {
        if (this.allnotifications[i].state == true) {
          result = this.allnotifications[i].id;
          checkedVal.push(result);
        }
      }
      this.checkedValGet = checkedVal;
    } else {
      var checkedVal: any[] = [];
      for (var i = 0; i < this.messages.length; i++) {
        if (this.messages[i].state == true) {
          result = this.messages[i].id;
          checkedVal.push(result);
        }
      }
      this.checkedValGet = checkedVal;
    }
    checkedVal.length > 0 ? (document.getElementById("notification-actions") as HTMLElement).style.display = 'block' : (document.getElementById("notification-actions") as HTMLElement).style.display = 'none';
  }

  notificationDelete() {
    if (this.notifyId == '1') {
      for (var i = 0; i < this.checkedValGet.length; i++) {
        for (var j = 0; j < this.allnotifications.length; j++) {
          if (this.allnotifications[j].id == this.checkedValGet[i]) {
            this.allnotifications.splice(j, 1);
          }
        }
      }
    } else {
      for (var i = 0; i < this.checkedValGet.length; i++) {
        for (var j = 0; j < this.messages.length; j++) {
          if (this.messages[j].id == this.checkedValGet[i]) {
            this.messages.splice(j, 1);
          }
        }
      }
    }
    this.calculatenotification();
    this.modalService.dismissAll();
  }

  calculatenotification() {
    this.totalNotify = 0;
    this.checkedValGet = [];

    this.checkedValGet.length > 0 ? (document.getElementById("notification-actions") as HTMLElement).style.display = 'block' : (document.getElementById("notification-actions") as HTMLElement).style.display = 'none';
    if (this.totalNotify == 0) {
      document.querySelector('.empty-notification-elem')?.classList.remove('d-none');
    }
  }
}
