import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UntypedFormBuilder } from '@angular/forms';
import { TokenStorageService } from '../../../../core/services/token-storage.service';
import { projectListModel, documentModel } from './profile.model';
import { document, projectList } from 'src/app/core/data';
import { PaginationService } from 'src/app/core/services/pagination.service';
import { NckhDataService } from 'src/app/core/services/nckh-data.service';
import { UserProfile } from 'src/app/core/models/nckh.model';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
    standalone: false
})

/**
 * Profile Component
 */
export class ProfileComponent implements OnInit {

  projectList!: projectListModel[];
  document!: documentModel[];
  userData: any = {};
  currentUser: UserProfile | null = null;
  allprojectList: any;
  deleteId: any;

  constructor(
    private formBuilder: UntypedFormBuilder, 
    private modalService: NgbModal, 
    private TokenStorageService: TokenStorageService, 
    public service: PaginationService,
    public nckhDataService: NckhDataService
  ) {}

  ngOnInit(): void {
    this.nckhDataService.currentUser$.subscribe(u => {
      if (u) {
        this.currentUser = u;
        this.userData = {
          first_name: u.fullName,
          last_name: '',
          role: u.roleTitle,
          city: 'Đồng Nai',
          country: 'Việt Nam',
          company_name: u.unit || 'Trường Đại học Công nghệ Đồng Nai',
          email: u.email,
          designation: u.academicTitle || u.roleTitle
        };
      }
    });

    if (!this.userData.first_name) {
      this.userData = this.TokenStorageService.getUser() || {
        first_name: 'ThS. Nguyễn Thị Hạnh',
        last_name: '',
        role: 'Giảng viên',
        city: 'Đồng Nai',
        country: 'Việt Nam',
        company_name: 'Khoa Công nghệ thông tin'
      };
    }

    this.fetchData();
  }

  /**
   * Fetches the data
   */
  private fetchData() {
    this.document = document;
    this.projectList = projectList;
    this.allprojectList = projectList;
  }

  /**
   * Swiper setting
   */
  config = {
    slidesPerView: 3,
    initialSlide: 0,
    spaceBetween: 25,
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      }
    }
  };

  // Pagination
  changePage() {
    this.projectList = this.service.changePage(this.allprojectList);
  }

  confirm(content: any, id: any) {
    this.deleteId = id;
    this.modalService.open(content, { centered: true });
  }

  deleteData(id: any) {
    this.document = this.document.filter((item: any) => item.id !== id);
  }
}
