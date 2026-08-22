import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NckhDataService, DEMO_USERS } from '../../core/services/nckh-data.service';
import { UserRole } from '../../core/models/nckh.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: false
})
export class LoginComponent implements OnInit {
  loginForm!: UntypedFormGroup;
  submitted = false;
  fieldTextType = false;
  error = '';
  year: number = new Date().getFullYear();

  demoUsers = DEMO_USERS;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private router: Router,
    private nckhDataService: NckhDataService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['giangvien@gmail.com', [Validators.required, Validators.email]],
      password: ['giangvien12345', [Validators.required]],
    });
  }

  get f() { return this.loginForm.controls; }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  // Chọn nhanh tài khoản demo
  selectDemoUser(user: typeof DEMO_USERS[0]) {
    this.loginForm.patchValue({
      email: user.email,
      password: user.password
    });
    this.executeLogin(user.email, user.password);
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.executeLogin(this.f['email'].value, this.f['password'].value);
  }

  private executeLogin(email: string, password?: string) {
    const user = this.nckhDataService.loginByEmail(email, password);
    if (user) {
      this.error = '';
      sessionStorage.setItem('toast', 'true');
      this.router.navigate(['/']);
    } else {
      this.error = 'Email hoặc mật khẩu không chính xác. Vui lòng chọn tài khoản demo trong bảng bên dưới!';
    }
  }

  getRoleBadgeClass(role: UserRole): string {
    switch (role) {
      case 'GIANG_VIEN': return 'badge bg-primary-subtle text-primary';
      case 'SINH_VIEN': return 'badge bg-info-subtle text-info';
      case 'TRUONG_KHOA': return 'badge bg-success-subtle text-success';
      case 'GIANG_VIEN_HD': return 'badge bg-warning-subtle text-warning';
      case 'P_KHCN': return 'badge bg-danger-subtle text-danger';
      case 'CHU_TICH_HD': return 'badge bg-purple-subtle text-purple';
      case 'HOI_DONG_MEMBER': return 'badge bg-secondary-subtle text-secondary';
      case 'THU_KY_HD': return 'badge bg-dark-subtle text-dark';
      case 'ADMIN': return 'badge bg-dark text-white';
      default: return 'badge bg-primary';
    }
  }

  getRoleIcon(role: UserRole): string {
    switch (role) {
      case 'GIANG_VIEN': return 'ri-user-star-line text-primary';
      case 'SINH_VIEN': return 'ri-graduation-cap-line text-info';
      case 'TRUONG_KHOA': return 'ri-award-line text-success';
      case 'GIANG_VIEN_HD': return 'ri-user-follow-line text-warning';
      case 'P_KHCN': return 'ri-building-line text-danger';
      case 'CHU_TICH_HD': return 'ri-vip-crown-line text-purple';
      case 'HOI_DONG_MEMBER': return 'ri-shield-user-line text-secondary';
      case 'THU_KY_HD': return 'ri-file-edit-line text-dark';
      case 'ADMIN': return 'ri-settings-4-line text-dark';
      default: return 'ri-user-3-line text-primary';
    }
  }
}
