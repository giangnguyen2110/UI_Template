export type UserRole = 
  | 'GIANG_VIEN' 
  | 'SINH_VIEN' 
  | 'TRUONG_KHOA' 
  | 'GIANG_VIEN_HD' 
  | 'P_KHCN' 
  | 'CHU_TICH_HD'
  | 'HOI_DONG_MEMBER' 
  | 'THU_KY_HD' 
  | 'ADMIN';

export interface UserProfile {
  id: string;
  email: string;
  fullName: string;
  role: UserRole;
  roleTitle: string;
  identifierCode: string; // Mã GV hoặc Mã SV
  unit: string; // Khoa / Phòng ban
  academicTitle?: string; // PGS.TS, TS, ThS, CN...
  phone?: string;
  avatar?: string;
  assignedAdvisorId?: string; // Nếu là sinh viên
  isFacultyLeader?: boolean;
}

export type TopicType = 'TUYEN_CHON' | 'GIAO_TRUC_TIEP';

export type TopicTarget = 'GIANG_VIEN' | 'SINH_VIEN';

export type TopicStatus = 
  | 'NHAP'                             // Đang soạn thảo
  | 'CHO_KHOA_DUYET'                  // Đang đợi khoa duyệt (BM01A)
  | 'CHO_GVHD_DUYET'                  // Đang đợi GVHD duyệt (BM01B)
  | 'TRA_CHINH_SUA'                   // Khoa / GVHD trả yêu cầu sửa
  | 'CHO_DUYET_LAI'                   // Đã sửa và nộp lại
  | 'CHO_HOI_DONG_XET_DUYET_HO_SO'    // Đã duyệt bước 1, chờ Hội đồng Bước 2
  | 'DANG_XET_DUYET_HO_SO'            // Cuộc họp HĐ Bước 2 đang diễn ra
  | 'DAT_XET_DUYET_HO_SO'             // Đạt xét duyệt hồ sơ
  | 'KHONG_DAT_XET_DUYET_HO_SO'       // Không đạt HĐ Bước 2
  | 'CHO_NOP_THUYET_MINH'             // Chờ nộp BM04
  | 'DANG_XET_DUYET_THUYET_MINH'      // HĐ xét duyệt BM06/BM07
  | 'DANG_THUC_HIEN'                  // Bước 06: Đang thực hiện đề tài
  | 'CHO_NGHIEM_THU'                  // Bước 07: Chờ nghiệm thu
  | 'DANG_NGHIEM_THU'                 // Bước 07: Cuộc họp nghiệm thu
  | 'YEU_CAU_CHINH_SUA_NGHIEM_THU'    // Bước 07: HĐ yêu cầu chỉnh sửa (nộp BM13)
  | 'DA_NGHIEM_THU'                   // Đạt nghiệm thu
  | 'HOAN_TAT_BUOC_07'                // Hoàn tất Bước 7
  | 'KHONG_DAT_NGHIEM_THU'            // Không đạt nghiệm thu
  | 'DA_CONG_NHAN_KET_QUA'            // Bước 08: BM15
  | 'LUU_HO_SO'                       // Bước 09: Trạng thái cuối
  | 'TRIEN_KHAI_UNG_DUNG'             // Bước 09: Trạng thái cuối
  | 'QUA_HAN'                         // Quá hạn đăng ký / quá hạn giữa quy trình
  | 'KHONG_DUOC_CHON'                 // Mất suất đề tài giao trực tiếp
  | 'DA_HUY';                         // Đã chấp thuận hủy

export interface ResearchMember {
  id: string;
  fullName: string;
  identifierCode: string; // Mã GV hoặc Mã SV
  unit: string;
  roleInProject: 'Thư ký khoa học' | 'Thành viên nghiên cứu chính' | 'Thành viên phối hợp';
  academicTitle?: string;
}

export interface DirectAssignmentTopic {
  id: string;
  code: string;
  name: string;
  field: string;
  description: string;
  expectedOutcome: string;
  assignedFaculty: string;
  budgetEst: number;
  isTaken?: boolean;
  takenByProposalId?: string;
  submissionDeadline: string;
}

export interface RegistrationRound {
  id: string;
  name: string;
  code: string;
  academicYear: string;
  target: TopicTarget;
  type: TopicType;
  status: 'NHAP' | 'DA_CONG_BO' | 'DA_DONG';
  startDate: string;
  endDate: string;
  description: string;
  directTopics?: DirectAssignmentTopic[];
  totalProposals?: number;
  approvedProposals?: number;
  pendingProposals?: number;
}

export interface AuditHistoryLog {
  id: string;
  action: string;
  actorName: string;
  actorRole: string;
  timestamp: string;
  comment?: string;
  oldStatus?: TopicStatus;
  newStatus?: TopicStatus;
}

export interface TopicProposal {
  id: string;
  code: string;
  title: string;
  roundId: string;
  roundName: string;
  type: TopicType;
  target: TopicTarget;
  field: string;
  faculty: string;
  durationMonths: number;
  startDateExpected: string;
  endDateExpected: string;

  // Chủ nhiệm đề tài
  authorId: string;
  authorName: string;
  authorEmail: string;
  authorIdentifierCode: string;
  authorPhone: string;
  authorAcademicTitle?: string;
  authorClass?: string; // Nếu là sinh viên

  // Giảng viên hướng dẫn (nếu là Sinh viên)
  advisorId?: string;
  advisorName?: string;
  advisorEmail?: string;
  advisorTitle?: string;

  // Đề tài giao trực tiếp (nếu type == 'GIAO_TRUC_TIEP')
  directTopicId?: string;

  // Nội dung nghiên cứu (BM01A/BM01B)
  necessity: string;           // Tính cấp thiết
  objectives: string;          // Mục tiêu
  mainContents: string;        // Nội dung nghiên cứu chính
  methods: string;             // Phương pháp nghiên cứu
  expectedProducts: string;    // Sản phẩm dự kiến (bài báo, phần mềm, giải pháp, giáo trình...)
  applicability: string;       // Khả năng ứng dụng và chuyển giao

  // Nhóm nghiên cứu & Kinh phí
  members: ResearchMember[];
  budgetTotal: number;         // Tổng kinh phí đề xuất (VNĐ)
  budgetSelfFunded?: number;   // Vốn tự có
  budgetSchoolFunded: number;  // Kinh phí đề nghị trường cấp

  // Pipeline Form / PDF / Ký số
  signedPdfFile?: {
    fileName: string;
    fileSize: string;
    uploadedAt: string;
    signatureStatus: 'DA_KY' | 'CHUA_KY';
    signedBy: string;
    fileUrl?: string;
  };

  // Trạng thái & Vòng đời
  status: TopicStatus;
  statusText: string;
  version: number;
  rejectionReason?: string; // Lý do trả chỉnh sửa
  submittedAt?: string;
  reviewedAt?: string;
  reviewerName?: string;
  auditLogs: AuditHistoryLog[];
}

export type CouncilType = 'XET_DUYET_HO_SO' | 'XET_DUYET_THUYET_MINH' | 'NGHIEM_THU';
export type CouncilRole = 'CHU_TICH' | 'PHO_CHU_TICH' | 'UY_VIEN_PHAN_BIEN_1' | 'UY_VIEN_PHAN_BIEN_2' | 'UY_VIEN' | 'THU_KY';
export type CouncilStatus = 'DANG_THANH_LAP' | 'DA_BAN_HANH' | 'DANG_HOP' | 'DA_HOAN_THANH';

export interface CouncilMember {
  id: string;
  fullName: string;
  academicTitle?: string;
  roleInCouncil: CouncilRole;
  workUnit: string;
  email?: string;
  phone?: string;
}

export interface ScientificCouncil {
  id: string;
  code: string;
  name: string;
  councilType: CouncilType;
  roundId?: string;
  roundName?: string;
  faculty: string;
  decisionNumber: string;
  decisionDate: string;
  meetingDate?: string;
  meetingLocation?: string;
  status: CouncilStatus;
  members: CouncilMember[];
  assignedProposalIds: string[];
  notes?: string;
}
