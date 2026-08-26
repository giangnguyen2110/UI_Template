import { Component, OnInit, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { NgbModal, NgbDropdownModule, NgbNavModule, NgbModalModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NckhDataService } from '../../../core/services/nckh-data.service';
import { TopicProposal, TopicStatus, UserProfile } from '../../../core/models/nckh.model';

@Component({
  selector: 'app-proposal-detail',
  templateUrl: './proposal-detail.component.html',
  styleUrls: ['./proposal-detail.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbDropdownModule,
    NgbNavModule,
    NgbModalModule,
    NgbTooltipModule
  ]
})
export class ProposalDetailComponent implements OnInit {
  proposalId!: string;
  proposal?: TopicProposal;
  currentUser!: UserProfile;

  activeMemberTab = 'summary'; // 'summary' | 'chutich' | 'phanbien1' | 'phanbien2' | 'uyvien' | 'thuky'
  alertMessage = '';
  alertType = 'success';

  // Dữ liệu đánh giá của toàn bộ thành viên Hội đồng
  councilEvaluationData = {
    councilName: 'Hội đồng Khoa học & Công nghệ Đánh giá Đề tài NCKH',
    decisionNumber: '118/QĐ-ĐHNT-KHCN',
    meetingDate: '25/08/2026',
    meetingLocation: 'Phòng Hội thảo A204 - Tòa nhà Trung tâm DNTU',
    
    // BIÊN BẢN TỔNG HỢP HỘI ĐỒNG (THƯ KÝ SỬA CÁC TRƯỜNG, CHỦ TỊCH KÝ DUYỆT)
    summary: {
      attendees: 'Đủ 05/05 thành viên theo Quyết định thành lập Hội đồng số 118/QĐ-ĐHNT-KHCN.',
      votingResult: '05/05 Phiếu ĐỒNG Ý THÔNG QUA (Tỷ lệ: 100%).',
      averageScore: 93.6,
      conclusion: 'Nhất trí thông qua kết quả nghiên cứu của đề tài. Đề nghị Chủ nhiệm phối hợp Phòng KHCN hoàn tất các thủ tục công nhận kết quả.',
      recommendation: 'Khen thưởng Đề tài đạt loại Xuất sắc theo Quy chế Khoa học & Công nghệ Nhà trường.',
      secretarySigned: true,
      secretarySignedAt: '25/08/2026 10:35',
      chairmanSigned: true,
      chairmanSignedAt: '25/08/2026 10:45'
    },

    // 1. CHỦ TỊCH HỘI ĐỒNG
    chutich: {
      name: 'PGS.TS. Trần Văn Hùng',
      role: 'Chủ tịch Hội đồng',
      title: 'Phó Giáo sư, Tiến sĩ',
      unit: 'Hội đồng Khoa học & Đào tạo',
      score: 95,
      result: 'ĐẠT (XUẤT SẮC)',
      comment: 'Đề tài có tính cấp thiết cao, phương pháp nghiên cứu tiên tiến, sản phẩm đáp ứng vượt mức kỳ vọng.',
      criteriaScores: [19, 24, 24, 14, 14],
      isSigned: true,
      signedAt: '25/08/2026 09:30'
    },

    // 2. PHẢN BIỆN 1
    phanbien1: {
      name: 'TS. Lê Hoàng Nam',
      role: 'Ủy viên Phản biện 1',
      title: 'Tiến sĩ Khoa học Máy tính',
      unit: 'Khoa Công nghệ thông tin',
      score: 93,
      result: 'ĐẠT (XUẤT SẮC)',
      comment: 'Nội dung và thuật toán được thiết kế chặt chẽ. Đã thử nghiệm thực nghiệm có độ tin cậy cao.',
      criteriaScores: [18, 23, 24, 14, 14],
      isSigned: true,
      signedAt: '25/08/2026 09:45'
    },

    // 3. PHẢN BIỆN 2
    phanbien2: {
      name: 'TS. Vũ Minh Tuấn',
      role: 'Ủy viên Phản biện 2',
      title: 'Tiến sĩ Kỹ thuật Phần mềm',
      unit: 'ĐH Bách Khoa (Chuyên gia thỉnh giảng)',
      score: 92,
      result: 'ĐẠT (XUẤT SẮC)',
      comment: 'Sản phẩm phần mềm và mô hình AI hoạt động trơn tru. Đề nghị nhóm tiếp tục phát triển bài báo quốc tế.',
      criteriaScores: [18, 23, 23, 14, 14],
      isSigned: true,
      signedAt: '25/08/2026 10:00'
    },

    // 4. ỦY VIÊN HỘI ĐỒNG
    uyvien: {
      name: 'TS. Nguyễn Văn Bình',
      role: 'Ủy viên Hội đồng',
      title: 'Tiến sĩ Kỹ thuật',
      unit: 'Khoa Cơ khí - Động lực',
      score: 94,
      result: 'ĐẠT (XUẤT SẮC)',
      comment: 'Dự toán kinh phí hợp lý, hồ sơ đầy đủ minh chứng thực nghiệm.',
      criteriaScores: [19, 24, 23, 14, 14],
      isSigned: true,
      signedAt: '25/08/2026 10:15'
    },

    // 5. THƯ KÝ HỘI ĐỒNG
    thuky: {
      name: 'ThS. Đỗ Anh Khoa',
      role: 'Thư ký Hội đồng',
      title: 'Thạc sĩ Khoa học',
      unit: 'Khoa Công nghệ thông tin',
      score: 94,
      result: 'ĐẠT (XUẤT SẮC)',
      comment: 'Tổng hợp 5/5 phiếu đánh giá hợp lệ. 100% thành viên Hội đồng nhất trí thông qua nghiệm thu.',
      criteriaScores: [19, 23, 24, 14, 14],
      isSigned: true,
      signedAt: '25/08/2026 10:30'
    }
  };

  // Mock dữ liệu biểu mẫu
  previewBmCode = 'BM02';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    public nckhDataService: NckhDataService
  ) {}

  ngOnInit(): void {
    this.nckhDataService.currentUser$.subscribe(u => {
      if (u) {
        this.currentUser = u;
      }
    });

    this.route.params.subscribe(params => {
      this.proposalId = params['id'];
      this.loadProposal();
    });

    this.nckhDataService.proposals$.subscribe(() => {
      this.loadProposal();
    });
  }

  loadProposal() {
    this.proposal = this.nckhDataService.getProposalById(this.proposalId);
    if (this.proposal) {
      this.previewBmCode = this.getFormCodeForProposal(this.proposal)?.code || 'BM01A';
    }
  }


  get isStudentOrLecturer(): boolean {
    return !!this.currentUser && (this.currentUser.role === 'GIANG_VIEN' || this.currentUser.role === 'SINH_VIEN');
  }

  // --- PHÂN QUYỀN TRÊN PHIẾU ĐÁNH GIÁ HỘI ĐỒNG ---

  get isCouncilRole(): boolean {
    return !!this.currentUser && (
      this.currentUser.role === 'CHU_TICH_HD' || 
      this.currentUser.role === 'HOI_DONG_MEMBER' || 
      this.currentUser.role === 'THU_KY_HD'
    );
  }

  get isChairman(): boolean {
    return !!this.currentUser && this.currentUser.role === 'CHU_TICH_HD';
  }

  get isSecretary(): boolean {
    return !!this.currentUser && this.currentUser.role === 'THU_KY_HD';
  }

  get isMember(): boolean {
    return !!this.currentUser && this.currentUser.role === 'HOI_DONG_MEMBER';
  }

  get isPkhcnOrAdmin(): boolean {
    return !!this.currentUser && (this.currentUser.role === 'P_KHCN' || this.currentUser.role === 'ADMIN');
  }

  // Quyền chỉnh sửa các trường của Biên bản / Phiếu tổng hợp Hội đồng (Chỉ Thư ký, hoặc Admin/P.KHCN)
  get canEditSummaryFields(): boolean {
    return this.isSecretary || this.isPkhcnOrAdmin;
  }

  // Quyền ký chức danh Thư ký
  get canSignAsSecretary(): boolean {
    return this.isSecretary || this.isPkhcnOrAdmin;
  }

  // Quyền ký chức danh Chủ tịch
  get canSignAsChairman(): boolean {
    return this.isChairman || this.isPkhcnOrAdmin;
  }

  // Quyền chỉnh sửa phiếu cá nhân theo Tab
  canEditPersonalTab(tabKey: string): boolean {
    if (this.isPkhcnOrAdmin) return true;
    if (this.isChairman && tabKey === 'chutich') return true;
    if (this.isSecretary && tabKey === 'thuky') return true;
    if (this.isMember && (tabKey === 'phanbien1' || tabKey === 'phanbien2' || tabKey === 'uyvien')) return true;
    return false;
  }

  updateTotalScore(memberKey: 'chutich' | 'phanbien1' | 'phanbien2' | 'uyvien' | 'thuky') {
    const member = this.councilEvaluationData[memberKey];
    const total = member.criteriaScores.reduce((sum, val) => sum + (Number(val) || 0), 0);
    member.score = total;
    member.result = total >= 90 ? 'ĐẠT (XUẤT SẮC)' : (total >= 70 ? 'ĐẠT' : 'KHÔNG ĐẠT');
    
    // Tính lại điểm trung bình
    const d = this.councilEvaluationData;
    const avg = (d.chutich.score + d.phanbien1.score + d.phanbien2.score + d.uyvien.score + d.thuky.score) / 5;
    d.summary.averageScore = Math.round(avg * 10) / 10;
  }

  signSecretary() {
    this.councilEvaluationData.summary.secretarySigned = true;
    this.councilEvaluationData.summary.secretarySignedAt = new Date().toLocaleString('vi-VN');
    this.alertType = 'success';
    this.alertMessage = 'Thư ký Hội đồng đã ký số xác thực Biên bản tổng hợp thành công!';
    setTimeout(() => { this.alertMessage = ''; }, 4000);
  }

  signChairman() {
    this.councilEvaluationData.summary.chairmanSigned = true;
    this.councilEvaluationData.summary.chairmanSignedAt = new Date().toLocaleString('vi-VN');
    this.alertType = 'success';
    this.alertMessage = 'Chủ tịch Hội đồng đã ký số phê duyệt kết quả đánh giá thành công!';
    setTimeout(() => { this.alertMessage = ''; }, 4000);
  }

  signPersonalSheet(memberKey: 'chutich' | 'phanbien1' | 'phanbien2' | 'uyvien' | 'thuky') {
    const m = this.councilEvaluationData[memberKey];
    m.isSigned = true;
    m.signedAt = new Date().toLocaleString('vi-VN');
    this.alertType = 'success';
    this.alertMessage = `${m.name} (${m.role}) đã ký số xác thực phiếu đánh giá cá nhân thành công!`;
    setTimeout(() => { this.alertMessage = ''; }, 4000);
  }

  openCouncilEvaluationModal(content: TemplateRef<any>) {
    // Tự động chuyển đến tab phù hợp với vai trò của người đang đăng nhập
    if (this.isChairman) {
      this.activeMemberTab = 'chutich';
    } else if (this.isSecretary) {
      this.activeMemberTab = 'summary';
    } else if (this.isMember) {
      this.activeMemberTab = 'phanbien1';
    } else {
      this.activeMemberTab = 'summary';
    }
    this.modalService.open(content, { size: 'xl', centered: true, scrollable: true });
  }

  openBmModal(content: TemplateRef<any>) {
    if (this.proposal) {
      this.previewBmCode = this.getFormCodeForProposal(this.proposal)?.code || 'BM01A';
    }
    this.modalService.open(content, { size: 'xl', centered: true, scrollable: true });
  }

  openCouncilEvaluationFromBm(content: TemplateRef<any>) {
    this.modalService.dismissAll();
    this.openCouncilEvaluationModal(content);
  }

  saveEvaluation() {
    this.alertType = 'success';
    this.alertMessage = 'Đã lưu và cập nhật Phiếu đánh giá của Hội đồng Khoa học thành công!';
    this.modalService.dismissAll();
    setTimeout(() => { this.alertMessage = ''; }, 5000);
  }

  getFormCodeForProposal(p: TopicProposal): { code: string; label: string; icon: string; btnClass: string } | null {
    const s = p.status;
    if (['CHO_HOI_DONG_XET_DUYET_HO_SO', 'DANG_XET_DUYET_HO_SO', 'DAT_XET_DUYET_HO_SO'].includes(s)) {
      return { code: 'BM02', label: 'Xem BM02 (Sơ duyệt)', icon: 'ri-file-list-3-line', btnClass: 'btn-soft-primary' };
    }
    if (['CHO_NOP_THUYET_MINH', 'DANG_XET_DUYET_THUYET_MINH'].includes(s)) {
      return { code: 'BM06', label: 'Xem BM06 (Thuyết minh)', icon: 'ri-file-shield-line', btnClass: 'btn-soft-info' };
    }
    if (s === 'DANG_THUC_HIEN') {
      const isAuthor = this.currentUser && (this.currentUser.role === 'GIANG_VIEN' || this.currentUser.role === 'SINH_VIEN');
      if (this.currentUser?.role === 'TRUONG_KHOA' || this.isPkhcnOrAdmin || isAuthor) {
        return { code: 'BM08', label: 'Xem BM08 (Tiến độ)', icon: 'ri-file-chart-line', btnClass: 'btn-soft-warning' };
      }
      return null;
    }
    if (['CHO_NGHIEM_THU', 'DANG_NGHIEM_THU', 'DA_NGHIEM_THU', 'HOAN_TAT_BUOC_07'].includes(s)) {
      return { code: 'BM11', label: 'Xem BM11 (Nghiệm thu)', icon: 'ri-medal-line', btnClass: 'btn-soft-danger' };
    }
    if (s === 'YEU_CAU_CHINH_SUA_NGHIEM_THU') {
      return { code: 'BM13', label: 'Xem BM13 (Giải trình)', icon: 'ri-file-edit-line', btnClass: 'btn-soft-warning' };
    }
    if (['DA_CONG_NHAN_KET_QUA', 'LUU_HO_SO', 'TRIEN_KHAI_UNG_DUNG'].includes(s)) {
      return { code: 'BM15', label: 'Xem BM15 (Công nhận)', icon: 'ri-award-line', btnClass: 'btn-soft-success' };
    }
    const defaultCode = p.target === 'SINH_VIEN' ? 'BM01B' : 'BM01A';
    return { code: defaultCode, label: `Xem ${defaultCode}`, icon: 'ri-file-text-line', btnClass: 'btn-soft-primary' };
  }

  getStatusBadge(status?: TopicStatus): string {
    switch (status) {
      case 'NHAP': return 'badge bg-secondary-subtle text-secondary';
      case 'CHO_KHOA_DUYET': return 'badge bg-warning-subtle text-warning';
      case 'CHO_GVHD_DUYET': return 'badge bg-warning-subtle text-warning';
      case 'TRA_CHINH_SUA': return 'badge bg-danger-subtle text-danger';
      case 'CHO_DUYET_LAI': return 'badge bg-info-subtle text-info';
      case 'CHO_HOI_DONG_XET_DUYET_HO_SO': return 'badge bg-primary-subtle text-primary border border-primary';
      case 'DANG_XET_DUYET_HO_SO': return 'badge bg-primary text-white';
      case 'DAT_XET_DUYET_HO_SO': return 'badge bg-success-subtle text-success';
      case 'CHO_NOP_THUYET_MINH': return 'badge bg-info text-white';
      case 'DANG_XET_DUYET_THUYET_MINH': return 'badge bg-info-subtle text-info border border-info';
      case 'DANG_THUC_HIEN': return 'badge bg-primary text-white';
      case 'CHO_NGHIEM_THU': return 'badge bg-danger-subtle text-danger border border-danger';
      case 'DANG_NGHIEM_THU': return 'badge bg-danger text-white';
      case 'YEU_CAU_CHINH_SUA_NGHIEM_THU': return 'badge bg-warning text-dark';
      case 'DA_NGHIEM_THU': return 'badge bg-success text-white';
      case 'DA_CONG_NHAN_KET_QUA': return 'badge bg-success text-white';
      case 'YEU_CAU_HUY': return 'badge bg-danger-subtle text-danger border border-danger';
      case 'DA_HUY': return 'badge bg-dark text-white';
      default: return 'badge bg-light text-dark';
    }
  }

  getCurrentStepNumber(): number {
    if (!this.proposal) return 1;
    switch (this.proposal.status) {
      case 'NHAP':
      case 'CHO_KHOA_DUYET':
      case 'CHO_GVHD_DUYET':
      case 'TRA_CHINH_SUA':
      case 'CHO_DUYET_LAI':
        return 1;
      case 'CHO_HOI_DONG_XET_DUYET_HO_SO':
      case 'DANG_XET_DUYET_HO_SO':
      case 'DAT_XET_DUYET_HO_SO':
      case 'KHONG_DAT_XET_DUYET_HO_SO':
        return 2;
      case 'CHO_NOP_THUYET_MINH':
        return 3;
      case 'DANG_XET_DUYET_THUYET_MINH':
        return 4;
      case 'DANG_THUC_HIEN':
        return 6;
      case 'CHO_NGHIEM_THU':
      case 'DANG_NGHIEM_THU':
      case 'DA_NGHIEM_THU':
      case 'HOAN_TAT_BUOC_07':
        return 7;
      case 'DA_CONG_NHAN_KET_QUA':
        return 8;
      case 'LUU_HO_SO':
      case 'TRIEN_KHAI_UNG_DUNG':
        return 9;
      default:
        return 1;
    }
  }
}
