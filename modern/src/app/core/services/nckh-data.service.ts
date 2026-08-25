import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { 
  UserProfile, 
  UserRole, 
  RegistrationRound, 
  TopicProposal, 
  TopicStatus, 
  DirectAssignmentTopic, 
  ResearchMember,
  AuditHistoryLog,
  ScientificCouncil,
  CouncilMember,
  CouncilType,
  CouncilRole,
  CouncilStatus
} from '../models/nckh.model';

export const DEMO_USERS: (UserProfile & { password: string })[] = [
  {
    id: 'u-gv-01',
    email: 'giangvien@gmail.com',
    password: 'giangvien12345',
    fullName: 'ThS. Nguyễn Thị Hạnh',
    role: 'GIANG_VIEN',
    roleTitle: 'Giảng viên',
    identifierCode: 'GV0128',
    unit: 'Khoa Công nghệ thông tin',
    academicTitle: 'Thạc sĩ',
    phone: '0912 345 678',
    avatar: 'assets/images/users/avatar-3.jpg'
  },
  {
    id: 'u-sv-01',
    email: 'sinhvien@gmail.com',
    password: 'sinhvien12345',
    fullName: 'Trần Văn Minh',
    role: 'SINH_VIEN',
    roleTitle: 'Sinh viên (Trưởng nhóm)',
    identifierCode: 'SV210045',
    unit: 'Khoa Công nghệ thông tin',
    academicTitle: 'Sinh viên K21',
    phone: '0987 654 321',
    avatar: 'assets/images/users/avatar-2.jpg',
    assignedAdvisorId: 'u-gvhd-01'
  },
  {
    id: 'u-tk-01',
    email: 'truongkhoa@gmail.com',
    password: 'truongkhoa12345',
    fullName: 'TS. Lê Hoàng Nam',
    role: 'TRUONG_KHOA',
    roleTitle: 'Trưởng Khoa CNTT',
    identifierCode: 'GV0042',
    unit: 'Khoa Công nghệ thông tin',
    academicTitle: 'Tiến sĩ',
    phone: '0903 111 222',
    avatar: 'assets/images/users/avatar-1.jpg',
    isFacultyLeader: true
  },
  {
    id: 'u-gvhd-01',
    email: 'gvhd@gmail.com',
    password: 'gvhd12345',
    fullName: 'ThS. Phạm Hải Đăng',
    role: 'GIANG_VIEN_HD',
    roleTitle: 'Giảng viên hướng dẫn',
    identifierCode: 'GV0089',
    unit: 'Khoa Công nghệ thông tin',
    academicTitle: 'Thạc sĩ',
    phone: '0908 777 888',
    avatar: 'assets/images/users/avatar-4.jpg'
  },
  {
    id: 'u-pkhcn-01',
    email: 'pkhcn@gmail.com',
    password: 'pkhcn12345',
    fullName: 'Nguyễn Thị Thu',
    role: 'P_KHCN',
    roleTitle: 'Chuyên viên P.KHCN',
    identifierCode: 'CB0015',
    unit: 'Phòng Khoa học & Công nghệ',
    academicTitle: 'Thạc sĩ Quản lý KHCN',
    phone: '0909 888 999',
    avatar: 'assets/images/users/avatar-5.jpg'
  },
  {
    id: 'u-cthd-01',
    email: 'chutichhd@gmail.com',
    password: 'chutichhd12345',
    fullName: 'PGS.TS. Trần Văn Hùng',
    role: 'CHU_TICH_HD',
    roleTitle: 'Chủ tịch Hội đồng',
    identifierCode: 'CT0001',
    unit: 'Hội đồng Khoa học & Đào tạo',
    academicTitle: 'Phó Giáo sư, Tiến sĩ',
    phone: '0918 222 333',
    avatar: 'assets/images/users/avatar-7.jpg'
  },
  {
    id: 'u-hd-01',
    email: 'hoidong@gmail.com',
    password: 'hoidong12345',
    fullName: 'TS. Vũ Minh Tuấn',
    role: 'HOI_DONG_MEMBER',
    roleTitle: 'Thành viên Hội đồng',
    identifierCode: 'HD0002',
    unit: 'Đại học Bách Khoa',
    academicTitle: 'Tiến sĩ',
    phone: '0919 444 555',
    avatar: 'assets/images/users/avatar-9.jpg'
  },
  {
    id: 'u-thuky-01',
    email: 'thuky@gmail.com',
    password: 'thuky12345',
    fullName: 'ThS. Đỗ Anh Khoa',
    role: 'THU_KY_HD',
    roleTitle: 'Thư ký Hội đồng',
    identifierCode: 'GV0105',
    unit: 'Khoa Công nghệ thông tin',
    academicTitle: 'Thạc sĩ',
    phone: '0933 444 555',
    avatar: 'assets/images/users/avatar-8.jpg'
  },
  {
    id: 'u-admin-01',
    email: 'admin@gmail.com',
    password: 'admin12345',
    fullName: 'Quản trị viên Hệ thống',
    role: 'ADMIN',
    roleTitle: 'Quản trị viên (Admin)',
    identifierCode: 'AD0001',
    unit: 'Trung tâm CNTT & Thư viện',
    academicTitle: 'Kỹ sư CNTT',
    phone: '0901 000 001',
    avatar: 'assets/images/users/avatar-6.jpg'
  }
];

const INITIAL_ROUNDS: RegistrationRound[] = [
  {
    id: 'round-2026-01',
    code: 'DOT-2026-01',
    name: 'Đợt 1: Đăng ký đề tài NCKH Cấp Trường năm 2026 (Giảng viên)',
    academicYear: '2026-2027',
    target: 'GIANG_VIEN',
    type: 'TUYEN_CHON',
    status: 'DA_CONG_BO',
    startDate: '2026-08-01',
    endDate: '2026-09-30',
    description: 'Đợt đăng ký tuyển chọn và giao trực tiếp đề tài NCKH cấp trường dành cho Giảng viên, Nghiên cứu viên năm 2026 theo quy chế P.KHCN.',
    directTopics: [
      {
        id: 'dir-01',
        code: 'DTGTT-CNTT-01',
        name: 'Xây dựng nền tảng trợ lý ảo AI phục vụ sinh viên DNTU tra cứu học tập và quy chế đào tạo',
        field: 'Khoa học máy tính & Trí tuệ nhân tạo',
        description: 'Phát triển mô hình RAG dựa trên LLM để trả lời tự động câu hỏi của sinh viên về quy chế đào tạo, chuẩn đầu ra và học bổng.',
        expectedOutcome: 'Hệ thống Web App tích hợp API và bài báo khoa học đăng trên tạp chí uy tín.',
        assignedFaculty: 'Khoa Công nghệ thông tin',
        budgetEst: 45000000,
        isTaken: false,
        submissionDeadline: '2026-09-25'
      },
      {
        id: 'dir-02',
        code: 'DTGTT-DTVT-02',
        name: 'Hệ thống giám sát và cảnh báo thông minh chất lượng không khí trong khuôn viên trường',
        field: 'Kỹ thuật Điện tử & IoT',
        description: 'Mạng cảm biến IoT đo nồng độ CO2, bụi mịn PM2.5 hiển thị thời gian thực qua dashboard trung tâm.',
        expectedOutcome: 'Thiết bị phần cứng mẫu và phần mềm giám sát.',
        assignedFaculty: 'Khoa Kỹ thuật Điện tử',
        budgetEst: 38000000,
        isTaken: false,
        submissionDeadline: '2026-09-25'
      }
    ]
  },
  {
    id: 'round-2026-sv',
    code: 'DOT-2026-SV',
    name: 'Đợt Đăng ký đề tài NCKH Sinh viên năm học 2026-2027',
    academicYear: '2026-2027',
    target: 'SINH_VIEN',
    type: 'TUYEN_CHON',
    status: 'DA_CONG_BO',
    startDate: '2026-08-10',
    endDate: '2026-10-15',
    description: 'Khuyến khích sinh viên tham gia nghiên cứu khoa học dưới sự hướng dẫn của Giảng viên khoa chuyên môn.'
  }
];

const INITIAL_PROPOSALS: TopicProposal[] = [
  // ==========================================
  // ===== GIẢNG VIÊN (ThS. Nguyễn Thị Hạnh) =====
  // ==========================================

  // 1. GIAI ĐOẠN 1: NỘP HỒ SƠ (BƯỚC 01 - BM01A)
  {
    id: 'prop-gv-01',
    code: 'DT-GV-2026-001',
    title: 'Nghiên cứu ứng dụng Deep Learning trong chẩn đoán và phân loại tổn thương qua ảnh y tế',
    roundId: 'round-2026-01',
    roundName: 'Đợt 1: Đăng ký đề tài NCKH Cấp Trường năm 2026 (Giảng viên)',
    type: 'TUYEN_CHON',
    target: 'GIANG_VIEN',
    field: 'Công nghệ thông tin & Trí tuệ nhân tạo',
    faculty: 'Khoa Công nghệ thông tin',
    durationMonths: 12,
    startDateExpected: '2026-10-01',
    endDateExpected: '2027-09-30',
    authorId: 'u-gv-01',
    authorName: 'ThS. Nguyễn Thị Hạnh',
    authorEmail: 'giangvien@gmail.com',
    authorIdentifierCode: 'GV0128',
    authorPhone: '0912 345 678',
    authorAcademicTitle: 'Thạc sĩ',
    necessity: 'Chẩn đoán sớm bệnh lý qua ảnh y tế đóng vai trò then chốt trong hỗ trợ bác sĩ ra quyết định chính xác và giảm tải cho bệnh viện tuyến trên.',
    objectives: 'Xây dựng mô hình học sâu (CNN & Transformer) đạt độ chính xác trên 92% trong phân loại 3 loại tổn thương phổ biến; phát triển module web demo.',
    mainContents: '1. Thu thập và tiền xử lý bộ dữ liệu ảnh y tế chuẩn hóa.\n2. Thiết kế và huấn luyện mô hình phân loại dựa trên Vision Transformer.\n3. Đánh giá thử nghiệm và tối ưu hóa tốc độ suy luận.\n4. Đóng gói REST API và triển khai ứng dụng thử nghiệm.',
    methods: 'Phương pháp học sâu có giám sát (Supervised Deep Learning), kỹ thuật Transfer Learning và Data Augmentation nâng cao.',
    expectedProducts: '- 01 bài báo khoa học đăng trên Tạp chí chuyên ngành uy tín (Scopus/ACI).\n- 01 Phần mềm Web demo phân loại ảnh y tế kèm mã nguồn.\n- Báo cáo tổng kết đề tài và hướng dẫn sử dụng.',
    applicability: 'Có thể chuyển giao ứng dụng hỗ trợ thử nghiệm tại phòng khám và cơ sở đào tạo y khoa.',
    members: [
      {
        id: 'm-1',
        fullName: 'TS. Lê Hoàng Nam',
        identifierCode: 'GV0042',
        unit: 'Khoa Công nghệ thông tin',
        roleInProject: 'Thành viên nghiên cứu chính',
        academicTitle: 'Tiến sĩ'
      },
      {
        id: 'm-2',
        fullName: 'ThS. Đỗ Anh Khoa',
        identifierCode: 'GV0105',
        unit: 'Khoa Công nghệ thông tin',
        roleInProject: 'Thư ký khoa học',
        academicTitle: 'Thạc sĩ'
      }
    ],
    budgetTotal: 35000000,
    budgetSchoolFunded: 35000000,
    signedPdfFile: {
      fileName: 'BM01A_DeTai_NguyenThiHanh_Signed.pdf',
      fileSize: '1.8 MB',
      uploadedAt: '2026-08-19 14:20',
      signatureStatus: 'DA_KY',
      signedBy: 'ThS. Nguyễn Thị Hạnh (Chữ ký số hợp lệ)'
    },
    status: 'TRA_CHINH_SUA',
    statusText: 'Cần chỉnh sửa hồ sơ (Bước 01)',
    version: 1,
    rejectionReason: 'Cần bổ sung làm rõ chi tiết phương pháp thu thập dữ liệu ảnh y tế chuẩn hóa và chi tiết dự toán kinh phí.',
    reviewedAt: '2026-08-19 16:45',
    reviewerName: 'TS. Lê Hoàng Nam (Trưởng Khoa)',
    submittedAt: '2026-08-19 14:22',
    auditLogs: [
      {
        id: 'log-gv1-1',
        action: 'Tạo hồ sơ nháp BM01A',
        actorName: 'ThS. Nguyễn Thị Hạnh',
        actorRole: 'Giảng viên',
        timestamp: '2026-08-18 09:30',
        newStatus: 'NHAP'
      },
      {
        id: 'log-gv1-2',
        action: 'Nộp hồ sơ BM01A cho Trưởng Khoa',
        actorName: 'ThS. Nguyễn Thị Hạnh',
        actorRole: 'Giảng viên',
        timestamp: '2026-08-19 14:22',
        oldStatus: 'NHAP',
        newStatus: 'CHO_KHOA_DUYET'
      },
      {
        id: 'log-gv1-3',
        action: 'Trưởng Khoa trả hồ sơ yêu cầu chỉnh sửa',
        actorName: 'TS. Lê Hoàng Nam',
        actorRole: 'Trưởng Khoa',
        timestamp: '2026-08-19 16:45',
        oldStatus: 'CHO_KHOA_DUYET',
        newStatus: 'TRA_CHINH_SUA',
        comment: 'Cần bổ sung làm rõ chi tiết phương pháp thu thập dữ liệu ảnh y tế chuẩn hóa và chi tiết dự toán kinh phí.'
      }
    ]
  },

  // 2. GIAI ĐOẠN 2: VIẾT THUYẾT MINH (BƯỚC 03 - BM04A)
  {
    id: 'prop-gv-02',
    code: 'DT-GV-2026-002',
    title: 'Xây dựng hệ thống giám sát và cảnh báo sớm chất lượng không khí sử dụng mạng cảm biến IoT và AI',
    roundId: 'round-2026-01',
    roundName: 'Đợt 1: Đăng ký đề tài NCKH Cấp Trường năm 2026 (Giảng viên)',
    type: 'TUYEN_CHON',
    target: 'GIANG_VIEN',
    field: 'Khoa học Máy tính & Kỹ thuật Môi trường',
    faculty: 'Khoa Công nghệ thông tin',
    durationMonths: 12,
    startDateExpected: '2026-10-01',
    endDateExpected: '2027-09-30',
    authorId: 'u-gv-01',
    authorName: 'ThS. Nguyễn Thị Hạnh',
    authorEmail: 'giangvien@gmail.com',
    authorIdentifierCode: 'GV0128',
    authorPhone: '0912 345 678',
    authorAcademicTitle: 'Thạc sĩ',
    necessity: 'Giám sát chỉ số AQI và nồng độ bụi mịn PM2.5 theo thời gian thực giúp đưa ra cảnh báo kịp thời cho cán bộ, giảng viên và sinh viên tại trường học và khu dân cư lân cận.',
    objectives: 'Thiết kế trạm đo IoT tự động và xây dựng mô hình dự báo chất lượng không khí trong 24h tiếp theo với độ chính xác R2 > 0.88.',
    mainContents: '1. Thiết kế phần cứng trạm quan trắc IoT.\n2. Phát triển mô hình dự báo chuỗi thời gian LSTM.\n3. Xây dựng dashboard hiển thị bản đồ nhiệt nồng độ ô nhiễm.',
    methods: 'Phương pháp tích hợp nhúng vi điều khiển ESP32, truyền thông MQTT và mạng nơ-ron hồi quy LSTM.',
    expectedProducts: '- 02 Trạm cảm biến IoT hoàn chỉnh.\n- 01 Bài báo Scopus Q3/ACI.\n- Dashboard Web theo dõi trực tuyến.',
    applicability: 'Lắp đặt tại khuôn viên trường DNTU và các nút giao thông lân cận.',
    members: [
      {
        id: 'm-3',
        fullName: 'ThS. Đỗ Anh Khoa',
        identifierCode: 'GV0105',
        unit: 'Khoa Công nghệ thông tin',
        roleInProject: 'Thành viên nghiên cứu chính',
        academicTitle: 'Thạc sĩ'
      }
    ],
    budgetTotal: 42000000,
    budgetSchoolFunded: 42000000,
    signedPdfFile: {
      fileName: 'BM01A_GiamSatKhongKhi_Signed.pdf',
      fileSize: '2.1 MB',
      uploadedAt: '2026-08-15 08:30',
      signatureStatus: 'DA_KY',
      signedBy: 'ThS. Nguyễn Thị Hạnh (Chữ ký số hợp lệ)'
    },
    status: 'CHO_NOP_THUYET_MINH',
    statusText: 'Chờ nộp Thuyết minh BM04A (Bước 03)',
    version: 1,
    submittedAt: '2026-08-15 09:00',
    auditLogs: [
      {
        id: 'log-gv2-1',
        action: 'Trưởng Khoa phê duyệt hồ sơ BM01A',
        actorName: 'TS. Lê Hoàng Nam',
        actorRole: 'Trưởng Khoa',
        timestamp: '2026-08-16 10:00',
        oldStatus: 'CHO_KHOA_DUYET',
        newStatus: 'CHO_HOI_DONG_XET_DUYET_HO_SO'
      },
      {
        id: 'log-gv2-2',
        action: 'Hội đồng xét duyệt hồ sơ đạt 88/100 điểm (BM02/BM03)',
        actorName: 'PGS.TS. Trần Văn Hùng',
        actorRole: 'Chủ tịch HĐ',
        timestamp: '2026-08-22 15:30',
        oldStatus: 'CHO_HOI_DONG_XET_DUYET_HO_SO',
        newStatus: 'CHO_NOP_THUYET_MINH',
        comment: 'Hồ sơ đạt yêu cầu, thông qua để tác giả tiếp tục hoàn thiện thuyết minh chi tiết BM04A.'
      }
    ]
  },

  // 3. GIAI ĐOẠN 3: VIẾT BÁO CÁO GIỮA KỲ (BƯỚC 06 - BM08)
  {
    id: 'prop-gv-03',
    code: 'DT-GV-2026-003',
    title: 'Nghiên cứu giải pháp bảo mật dữ liệu IoT trên nền tảng Blockchain Hyperledger Fabric',
    roundId: 'round-2026-01',
    roundName: 'Đợt 1: Đăng ký đề tài NCKH Cấp Trường năm 2026 (Giảng viên)',
    type: 'TUYEN_CHON',
    target: 'GIANG_VIEN',
    field: 'An toàn thông tin & Mạng máy tính',
    faculty: 'Khoa Công nghệ thông tin',
    durationMonths: 10,
    startDateExpected: '2026-10-01',
    endDateExpected: '2027-07-31',
    authorId: 'u-gv-01',
    authorName: 'ThS. Nguyễn Thị Hạnh',
    authorEmail: 'giangvien@gmail.com',
    authorIdentifierCode: 'GV0128',
    authorPhone: '0912 345 678',
    authorAcademicTitle: 'Thạc sĩ',
    necessity: 'Các thiết bị IoT có nguy cơ bị tấn công dữ liệu cao do tài nguyên hạn chế. Công nghệ Blockchain cung cấp cơ chế bất biến và phân tán giúp bảo vệ toàn vẹn dữ liệu.',
    objectives: 'Xây dựng kiến trúc bảo mật dữ liệu cảm biến IoT tích hợp Hyperledger Fabric và smart contract kiểm soát truy cập.',
    mainContents: '1. Khảo sát các lỗ hổng bảo mật phổ biến của hệ thống IoT.\n2. Thiết kế smart contract quản lý xác thực và phân quyền thiết bị.\n3. Thử nghiệm trên mô hình mạng IoT thực tế và đo lường throughput.',
    methods: 'Phương pháp thực nghiệm mạng mô phỏng và phân tích hiệu năng.',
    expectedProducts: '- Bài báo khoa học trên tạp chí chuyên ngành.\n- Bản mã nguồn smart contract và kiến trúc mạng thử nghiệm.',
    applicability: 'Áp dụng cho các hệ thống giám sát môi trường và smart campus.',
    members: [],
    budgetTotal: 25000000,
    budgetSchoolFunded: 25000000,
    status: 'DANG_THUC_HIEN',
    statusText: 'Đang thực hiện & Viết BC tiến độ BM08 (Bước 06)',
    version: 1,
    signedPdfFile: {
      fileName: 'BM01A_Blockchain_IoT_Signed.pdf',
      fileSize: '1.9 MB',
      uploadedAt: '2026-08-01 10:00',
      signatureStatus: 'DA_KY',
      signedBy: 'ThS. Nguyễn Thị Hạnh (Chữ ký số hợp lệ)'
    },
    submittedAt: '2026-08-01 10:30',
    auditLogs: [
      {
        id: 'log-gv3-1',
        action: 'Hội đồng xét duyệt Thuyết minh BM06/BM07 thông qua',
        actorName: 'PGS.TS. Trần Văn Hùng',
        actorRole: 'Chủ tịch HĐ',
        timestamp: '2026-08-10 14:00',
        newStatus: 'DANG_XET_DUYET_THUYET_MINH'
      },
      {
        id: 'log-gv3-2',
        action: 'P.KHCN ban hành Quyết định giao nhiệm vụ (BM05) và ký Hợp đồng',
        actorName: 'ThS. Hoàng Thị Mai',
        actorRole: 'Phòng KHCN',
        timestamp: '2026-08-15 09:30',
        newStatus: 'DANG_THUC_HIEN',
        comment: 'Đã hoàn tất hợp đồng số HD-NCKH-2026-042, chuyển sang giai đoạn thực hiện đề tài.'
      }
    ]
  },

  // 4. GIAI ĐOẠN 4: BÁO CÁO NGHIỆM THU (BƯỚC 07 - BM09/BM11/BM12/BM13)
  {
    id: 'prop-gv-04',
    code: 'DT-GV-2026-004',
    title: 'Phát triển mô hình tối ưu hóa năng lượng tái tạo cho hệ thống Microgrid tại trường đại học',
    roundId: 'round-2026-01',
    roundName: 'Đợt 1: Đăng ký đề tài NCKH Cấp Trường năm 2026 (Giảng viên)',
    type: 'TUYEN_CHON',
    target: 'GIANG_VIEN',
    field: 'Năng lượng tái tạo & Tự động hóa',
    faculty: 'Khoa Công nghệ thông tin',
    durationMonths: 12,
    startDateExpected: '2025-09-01',
    endDateExpected: '2026-08-31',
    authorId: 'u-gv-01',
    authorName: 'ThS. Nguyễn Thị Hạnh',
    authorEmail: 'giangvien@gmail.com',
    authorIdentifierCode: 'GV0128',
    authorPhone: '0912 345 678',
    authorAcademicTitle: 'Thạc sĩ',
    necessity: 'Tối ưu hóa phân phối điện mặt trời mái nhà giúp giảm chi phí tiền điện và phát thải CO2 cho toàn bộ khuôn viên trường.',
    objectives: 'Thuật toán điều phối lưu trữ pin và phát điện mặt trời đạt hiệu suất tiết kiệm 18.5% chi phí vận hành điện.',
    mainContents: '1. Đo đạc phụ tải điện 5 tòa nhà học tại DNTU.\n2. Xây dựng thuật toán tối ưu hóa PSO.\n3. Thử nghiệm trên mô hình thực tế.',
    methods: 'Thuật toán tối ưu bầy đàn (Particle Swarm Optimization) và mô phỏng MATLAB/Simulink.',
    expectedProducts: '- 01 Bài báo ISI/Scopus.\n- Phần mềm thuật toán tối ưu hóa nguồn điện.\n- Báo cáo tổng kết đề tài BM09.',
    applicability: 'Triển khai cho hệ thống năng lượng mặt trời tại các tòa nhà Trung tâm DNTU.',
    members: [],
    budgetTotal: 50000000,
    budgetSchoolFunded: 50000000,
    status: 'CHO_NGHIEM_THU',
    statusText: 'Chờ nghiệm thu & Nộp BM09/BM13 (Bước 07)',
    version: 1,
    signedPdfFile: {
      fileName: 'BM01A_NangLuongTaiTao_Signed.pdf',
      fileSize: '2.5 MB',
      uploadedAt: '2025-08-20 09:00',
      signatureStatus: 'DA_KY',
      signedBy: 'ThS. Nguyễn Thị Hạnh (Chữ ký số hợp lệ)'
    },
    submittedAt: '2025-08-20 09:30',
    auditLogs: [
      {
        id: 'log-gv4-1',
        action: 'Nộp Báo cáo tổng kết đề tài và danh mục sản phẩm (BM09)',
        actorName: 'ThS. Nguyễn Thị Hạnh',
        actorRole: 'Giảng viên',
        timestamp: '2026-08-10 10:00',
        newStatus: 'CHO_NGHIEM_THU'
      },
      {
        id: 'log-gv4-2',
        action: 'P.KHCN ban hành Quyết định thành lập Hội đồng nghiệm thu (BM10)',
        actorName: 'ThS. Hoàng Thị Mai',
        actorRole: 'Phòng KHCN',
        timestamp: '2026-08-18 14:30',
        comment: 'Quyết định số 215/QĐ-DNTU-HĐNT, phiên họp nghiệm thu dự kiến trong tuần.'
      }
    ]
  },

  // ==========================================
  // ===== SINH VIÊN (Trần Văn Minh - u-sv-01) =====
  // ==========================================

  // 5. GIAI ĐOẠN 1: NỘP HỒ SƠ (BƯỚC 01 - BM01B)
  {
    id: 'prop-sv-01',
    code: 'DT-SV-2026-001',
    title: 'Phát triển ứng dụng di động nhận diện và điểm danh thông minh qua khuôn mặt',
    roundId: 'round-2026-sv',
    roundName: 'Đợt Đăng ký đề tài NCKH Sinh viên năm học 2026-2027',
    type: 'TUYEN_CHON',
    target: 'SINH_VIEN',
    field: 'Công nghệ phần mềm & Mobile App',
    faculty: 'Khoa Công nghệ thông tin',
    durationMonths: 6,
    startDateExpected: '2026-10-15',
    endDateExpected: '2027-04-15',
    authorId: 'u-sv-01',
    authorName: 'Trần Văn Minh',
    authorEmail: 'sinhvien@gmail.com',
    authorIdentifierCode: 'SV210045',
    authorPhone: '0987 654 321',
    authorClass: '21DTH1',
    advisorId: 'u-gvhd-01',
    advisorName: 'ThS. Phạm Hải Đăng',
    advisorEmail: 'gvhd@gmail.com',
    advisorTitle: 'Thạc sĩ',
    necessity: 'Điểm danh thủ công tốn thời gian và dễ nhầm lẫn. Ứng dụng di động nhận diện khuôn mặt giúp tự động hóa và nâng cao tính minh bạch trong lớp học.',
    objectives: 'Xây dựng ứng dụng Flutter nhận diện gương mặt qua camera điện thoại, độ trễ dưới 1s, độ chính xác nhận diện trên 95% trong điều kiện ánh sáng lớp học.',
    mainContents: '1. Khảo sát nghiệp vụ điểm danh sinh viên tại DNTU.\n2. Tích hợp mô hình MobileFaceNet nhận diện khuôn mặt trên thiết bị di động.\n3. Xây dựng backend quản lý danh sách lớp và xuất báo cáo điểm danh.',
    methods: 'Phương pháp phát triển ứng dụng di động Agile/Scrum, tích hợp Edge AI và Cloud API.',
    expectedProducts: '- Ứng dụng di động Android/iOS hoàn chỉnh.\n- Báo cáo kết quả nghiên cứu khoa học sinh viên.\n- Tham gia báo cáo tại Hội nghị Sinh viên NCKH cấp Trường.',
    applicability: 'Triển khai thử nghiệm cho các lớp thực hành tại Khoa CNTT.',
    members: [
      {
        id: 'm-sv-1',
        fullName: 'Lê Văn An',
        identifierCode: 'SV210088',
        unit: 'Khoa Công nghệ thông tin',
        roleInProject: 'Thành viên nghiên cứu chính'
      }
    ],
    budgetTotal: 8000000,
    budgetSchoolFunded: 8000000,
    signedPdfFile: {
      fileName: 'BM01B_DiemDanhKhuonMat_Signed.pdf',
      fileSize: '1.2 MB',
      uploadedAt: '2026-08-20 10:15',
      signatureStatus: 'DA_KY',
      signedBy: 'Trần Văn Minh (Trưởng nhóm sinh viên)'
    },
    status: 'CHO_GVHD_DUYET',
    statusText: 'Chờ GVHD duyệt hồ sơ BM01B (Bước 01)',
    version: 1,
    submittedAt: '2026-08-20 10:18',
    auditLogs: [
      {
        id: 'log-sv1-1',
        action: 'Tạo hồ sơ đề tài sinh viên BM01B',
        actorName: 'Trần Văn Minh',
        actorRole: 'Sinh viên',
        timestamp: '2026-08-20 08:30',
        newStatus: 'NHAP'
      },
      {
        id: 'log-sv1-2',
        action: 'Nộp hồ sơ cho Giảng viên hướng dẫn',
        actorName: 'Trần Văn Minh',
        actorRole: 'Sinh viên',
        timestamp: '2026-08-20 10:18',
        oldStatus: 'NHAP',
        newStatus: 'CHO_GVHD_DUYET'
      }
    ]
  },

  // 6. GIAI ĐOẠN 2: VIẾT THUYẾT MINH (BƯỚC 03 - BM04B)
  {
    id: 'prop-sv-02',
    code: 'DT-SV-2026-002',
    title: 'Nghiên cứu và xây dựng website thương mại điện tử tích hợp trợ lý ảo AI tư vấn mua sắm',
    roundId: 'round-2026-sv',
    roundName: 'Đợt Đăng ký đề tài NCKH Sinh viên năm học 2026-2027',
    type: 'TUYEN_CHON',
    target: 'SINH_VIEN',
    field: 'Thương mại điện tử & Trí tuệ nhân tạo',
    faculty: 'Khoa Công nghệ thông tin',
    durationMonths: 6,
    startDateExpected: '2026-10-15',
    endDateExpected: '2027-04-15',
    authorId: 'u-sv-01',
    authorName: 'Trần Văn Minh',
    authorEmail: 'sinhvien@gmail.com',
    authorIdentifierCode: 'SV210045',
    authorPhone: '0987 654 321',
    authorClass: '21DTH1',
    advisorId: 'u-gvhd-01',
    advisorName: 'ThS. Phạm Hải Đăng',
    advisorEmail: 'gvhd@gmail.com',
    advisorTitle: 'Thạc sĩ',
    necessity: 'Trợ lý ảo AI giúp gợi ý sản phẩm cá nhân hóa và giải đáp thắc mắc khách hàng 24/7, tăng tỷ lệ chuyển đổi đơn hàng.',
    objectives: 'Xây dựng website thương mại điện tử hoàn chỉnh với Chatbot AI sử dụng mô hình RAG và LLM mã nguồn mở.',
    mainContents: '1. Thiết kế cơ sở dữ liệu và kiến trúc web full-stack.\n2. Tích hợp Chatbot AI hỗ trợ tư vấn.\n3. Thử nghiệm người dùng và đánh giá độ hài lòng.',
    methods: 'Phát triển web hiện đại (Angular + Spring Boot), kỹ thuật RAG với Vector Database.',
    expectedProducts: '- Website thương mại điện tử đầy đủ tính năng.\n- Báo cáo nghiên cứu khoa học sinh viên.',
    applicability: 'Ứng dụng thử nghiệm cho các gian hàng khởi nghiệp của sinh viên DNTU.',
    members: [],
    budgetTotal: 10000000,
    budgetSchoolFunded: 10000000,
    signedPdfFile: {
      fileName: 'BM01B_Ecommerce_AI_Signed.pdf',
      fileSize: '1.5 MB',
      uploadedAt: '2026-08-12 09:00',
      signatureStatus: 'DA_KY',
      signedBy: 'Trần Văn Minh (Chữ ký số sinh viên)'
    },
    status: 'CHO_NOP_THUYET_MINH',
    statusText: 'Chờ nộp Thuyết minh BM04B (Bước 03)',
    version: 1,
    submittedAt: '2026-08-12 09:30',
    auditLogs: [
      {
        id: 'log-sv2-1',
        action: 'GVHD phê duyệt hồ sơ BM01B',
        actorName: 'ThS. Phạm Hải Đăng',
        actorRole: 'Giảng viên hướng dẫn',
        timestamp: '2026-08-14 11:00',
        oldStatus: 'CHO_GVHD_DUYET',
        newStatus: 'CHO_HOI_DONG_XET_DUYET_HO_SO'
      },
      {
        id: 'log-sv2-2',
        action: 'Hội đồng xét duyệt hồ sơ đạt 85/100 điểm (BM02/BM03)',
        actorName: 'PGS.TS. Trần Văn Hùng',
        actorRole: 'Chủ tịch HĐ',
        timestamp: '2026-08-20 16:00',
        oldStatus: 'CHO_HOI_DONG_XET_DUYET_HO_SO',
        newStatus: 'CHO_NOP_THUYET_MINH',
        comment: 'Đề tài có tính ứng dụng cao, đồng ý thông qua để nhóm sinh viên nộp Thuyết minh BM04B.'
      }
    ]
  },

  // 7. GIAI ĐOẠN 3: VIẾT BÁO CÁO GIỮA KỲ (BƯỚC 06 - BM08)
  {
    id: 'prop-sv-03',
    code: 'DT-SV-2026-003',
    title: 'Thiết kế và chế tạo Robot tự hành vận chuyển tài liệu trong thư viện trường học',
    roundId: 'round-2026-sv',
    roundName: 'Đợt Đăng ký đề tài NCKH Sinh viên năm học 2026-2027',
    type: 'TUYEN_CHON',
    target: 'SINH_VIEN',
    field: 'Robot & Tự động hóa',
    faculty: 'Khoa Công nghệ thông tin',
    durationMonths: 8,
    startDateExpected: '2026-09-01',
    endDateExpected: '2027-04-30',
    authorId: 'u-sv-01',
    authorName: 'Trần Văn Minh',
    authorEmail: 'sinhvien@gmail.com',
    authorIdentifierCode: 'SV210045',
    authorPhone: '0987 654 321',
    authorClass: '21DTH1',
    advisorId: 'u-gvhd-01',
    advisorName: 'ThS. Phạm Hải Đăng',
    advisorEmail: 'gvhd@gmail.com',
    advisorTitle: 'Thạc sĩ',
    necessity: 'Hỗ trợ thủ thư vận chuyển sách báo tự động giữa các kệ sách, giảm sức lao động chân tay.',
    objectives: 'Chế tạo robot AGV tải trọng 15kg, định vị chính xác sai số dưới 5cm bằng công nghệ LiDAR SLAM.',
    mainContents: '1. Thiết kế cơ khí khung robot và mạch công suất.\n2. Cài đặt hệ điều hành ROS2 và thuật toán dẫn đường Nav2.\n3. Thử nghiệm vận hành thực tế tại Thư viện DNTU.',
    methods: 'Phương pháp tích hợp cơ điện tử, điều khiển vòng kín PID và thuật toán SLAM.',
    expectedProducts: '- 01 Mẫu robot tự hành hoạt động tốt.\n- Báo cáo tiến độ BM08 và mã nguồn điều khiển.',
    applicability: 'Thử nghiệm phục vụ tại Thư viện trường Đại học Công nghệ Đồng Nai.',
    members: [],
    budgetTotal: 12000000,
    budgetSchoolFunded: 12000000,
    status: 'DANG_THUC_HIEN',
    statusText: 'Đang thực hiện & Nộp BC tiến độ BM08 (Bước 06)',
    version: 1,
    signedPdfFile: {
      fileName: 'BM01B_RobotThuVien_Signed.pdf',
      fileSize: '1.7 MB',
      uploadedAt: '2026-08-01 08:30',
      signatureStatus: 'DA_KY',
      signedBy: 'Trần Văn Minh (Chữ ký số sinh viên)'
    },
    submittedAt: '2026-08-01 09:00',
    auditLogs: [
      {
        id: 'log-sv3-1',
        action: 'Hội đồng duyệt thuyết minh BM06/BM07 đạt yêu cầu',
        actorName: 'PGS.TS. Trần Văn Hùng',
        actorRole: 'Chủ tịch HĐ',
        timestamp: '2026-08-12 14:00',
        newStatus: 'DANG_XET_DUYET_THUYET_MINH'
      },
      {
        id: 'log-sv3-2',
        action: 'P.KHCN ban hành Quyết định giao nhiệm vụ và ký Hợp đồng NCKH Sinh viên',
        actorName: 'ThS. Hoàng Thị Mai',
        actorRole: 'Phòng KHCN',
        timestamp: '2026-08-18 10:00',
        newStatus: 'DANG_THUC_HIEN',
        comment: 'Đã hoàn tất hợp đồng SV-NCKH, nhóm sinh viên bắt đầu chế tạo robot và định kỳ nộp BM08.'
      }
    ]
  },

  // 8. GIAI ĐOẠN 4: BÁO CÁO NGHIỆM THU (BƯỚC 07 - BM09/BM11/BM12/BM13)
  {
    id: 'prop-sv-04',
    code: 'DT-SV-2026-004',
    title: 'Xây dựng hệ sinh thái ứng dụng di động hỗ trợ sinh viên tìm trọ và việc làm thêm thông minh',
    roundId: 'round-2026-sv',
    roundName: 'Đợt Đăng ký đề tài NCKH Sinh viên năm học 2026-2027',
    type: 'TUYEN_CHON',
    target: 'SINH_VIEN',
    field: 'Công nghệ phần mềm & Dịch vụ số',
    faculty: 'Khoa Công nghệ thông tin',
    durationMonths: 6,
    startDateExpected: '2025-10-01',
    endDateExpected: '2026-04-30',
    authorId: 'u-sv-01',
    authorName: 'Trần Văn Minh',
    authorEmail: 'sinhvien@gmail.com',
    authorIdentifierCode: 'SV210045',
    authorPhone: '0987 654 321',
    authorClass: '21DTH1',
    advisorId: 'u-gvhd-01',
    advisorName: 'ThS. Phạm Hải Đăng',
    advisorEmail: 'gvhd@gmail.com',
    advisorTitle: 'Thạc sĩ',
    necessity: 'Giúp tân sinh viên dễ dàng tìm phòng trọ an toàn, giá hợp lý và tiếp cận việc làm thêm uy tín gần trường.',
    objectives: 'Xây dựng ứng dụng di động và hệ thống định vị GPS tích hợp đánh giá uy tín chủ trọ.',
    mainContents: '1. Khảo sát nhu cầu nhà trọ quanh khu vực Biên Hòa.\n2. Phát triển app Flutter kết hợp Google Maps API.\n3. Triển khai thử nghiệm cho 200 sinh viên.',
    methods: 'Phương pháp phát triển phần mềm di động, khảo sát thực tế và phân tích thống kê.',
    expectedProducts: '- Ứng dụng di động tìm trọ DNTU House.\n- Báo cáo tổng kết đề tài BM09.',
    applicability: 'Chuyển giao cho Đoàn Thanh niên - Hội Sinh viên trường quản lý vận hành.',
    members: [],
    budgetTotal: 9500000,
    budgetSchoolFunded: 9500000,
    status: 'CHO_NGHIEM_THU',
    statusText: 'Chờ nghiệm thu & Nộp BM09/BM13 (Bước 07)',
    version: 1,
    signedPdfFile: {
      fileName: 'BM01B_TimTroSinhVien_Signed.pdf',
      fileSize: '1.4 MB',
      uploadedAt: '2025-09-25 14:00',
      signatureStatus: 'DA_KY',
      signedBy: 'Trần Văn Minh (Chữ ký số sinh viên)'
    },
    submittedAt: '2025-09-25 14:30',
    auditLogs: [
      {
        id: 'log-sv4-1',
        action: 'Nộp Báo cáo tổng kết đề tài và ứng dụng hoàn chỉnh (BM09)',
        actorName: 'Trần Văn Minh',
        actorRole: 'Sinh viên',
        timestamp: '2026-08-15 15:00',
        newStatus: 'CHO_NGHIEM_THU'
      },
      {
        id: 'log-sv4-2',
        action: 'P.KHCN thành lập Hội đồng nghiệm thu đề tài sinh viên (BM10)',
        actorName: 'ThS. Hoàng Thị Mai',
        actorRole: 'Phòng KHCN',
        timestamp: '2026-08-20 09:30',
        comment: 'Hội đồng nghiệm thu đã sẵn sàng chấm điểm phiếu BM11 và lập biên bản BM12.'
      }
    ]
  },

  // 5. GIAI ĐOẠN 5: CHỈNH SỬA SAU NGHIỆM THU (BƯỚC 07 - BM13)
  {
    id: 'prop-gv-05',
    code: 'DT-GV-2026-005',
    title: 'Nghiên cứu tổng hợp vật liệu Aerogel carbon xử lý nước thải dệt nhuộm công nghiệp',
    roundId: 'round-2026-01',
    roundName: 'Đợt 1: Đăng ký đề tài NCKH Cấp Trường năm 2026 (Giảng viên)',
    type: 'TUYEN_CHON',
    target: 'GIANG_VIEN',
    field: 'Công nghệ Hóa học & Môi trường',
    faculty: 'Khoa Công nghệ thông tin',
    durationMonths: 12,
    startDateExpected: '2025-08-01',
    endDateExpected: '2026-07-31',
    authorId: 'u-gv-01',
    authorName: 'ThS. Nguyễn Thị Hạnh',
    authorEmail: 'giangvien@gmail.com',
    authorIdentifierCode: 'GV0128',
    authorPhone: '0912 345 678',
    authorAcademicTitle: 'Thạc sĩ',
    necessity: 'Nước thải dệt nhuộm chứa chất màu hữu cơ độc hại khó phân hủy sinh học, cần vật liệu hấp phụ hiệu năng cao.',
    objectives: 'Chế tạo vật liệu Aerogel carbon có dung lượng hấp phụ phẩm màu dệt nhuộm trên 350 mg/g.',
    mainContents: '1. Điều chế tiền chất gel hữu cơ.\n2. Sấy thăng hoa và nhiệt phân tạo carbon aerogel.\n3. Thử nghiệm hấp phụ trên mẫu nước thải dệt nhuộm.',
    methods: 'Phương pháp tổng hợp sol-gel, sấy thăng hoa và quang phổ UV-Vis.',
    expectedProducts: '- Mẫu Aerogel carbon.\n- 01 Bài báo trên Tạp chí Khoa học & Công nghệ.\n- Báo cáo giải trình BM13.',
    applicability: 'Xử lý nước thải tại các cụm công nghiệp dệt may Đồng Nai.',
    members: [],
    budgetTotal: 38000000,
    budgetSchoolFunded: 38000000,
    status: 'YEU_CAU_CHINH_SUA_NGHIEM_THU',
    statusText: 'HĐ yêu cầu chỉnh sửa sau NT (Nộp BM13)',
    version: 1,
    signedPdfFile: {
      fileName: 'BM01A_Aerogel_Signed.pdf',
      fileSize: '1.9 MB',
      uploadedAt: '2025-07-20 10:00',
      signatureStatus: 'DA_KY',
      signedBy: 'ThS. Nguyễn Thị Hạnh (Chữ ký số hợp lệ)'
    },
    submittedAt: '2025-07-20 10:30',
    auditLogs: [
      {
        id: 'log-gv5-1',
        action: 'Hội đồng nghiệm thu họp BM11/BM12 và kết luận: Thông qua nhưng cần chỉnh sửa',
        actorName: 'PGS.TS. Trần Văn Hùng',
        actorRole: 'Chủ tịch HĐ',
        timestamp: '2026-08-16 15:00',
        oldStatus: 'DANG_NGHIEM_THU',
        newStatus: 'YEU_CAU_CHINH_SUA_NGHIEM_THU',
        comment: 'Yêu cầu Chủ nhiệm bổ sung phân tích chu kỳ tái sinh vật liệu 5 lần và giải trình theo BM13.'
      }
    ]
  },

  // ==========================================
  // ===== SINH VIÊN (Trần Văn Minh - u-sv-01) =====
  // ==========================================

  // 6. GIAI ĐOẠN 1: NỘP HỒ SƠ (BƯỚC 01 - BM01B)
  {
    id: 'prop-sv-01',
    code: 'DT-SV-2026-001',
    title: 'Phát triển ứng dụng di động nhận diện và điểm danh thông minh qua khuôn mặt',
    roundId: 'round-2026-sv',
    roundName: 'Đợt Đăng ký đề tài NCKH Sinh viên năm học 2026-2027',
    type: 'TUYEN_CHON',
    target: 'SINH_VIEN',
    field: 'Công nghệ phần mềm & Mobile App',
    faculty: 'Khoa Công nghệ thông tin',
    durationMonths: 6,
    startDateExpected: '2026-10-15',
    endDateExpected: '2027-04-15',
    authorId: 'u-sv-01',
    authorName: 'Trần Văn Minh',
    authorEmail: 'sinhvien@gmail.com',
    authorIdentifierCode: 'SV210045',
    authorPhone: '0987 654 321',
    authorClass: '21DTH1',
    advisorId: 'u-gvhd-01',
    advisorName: 'ThS. Phạm Hải Đăng',
    advisorEmail: 'gvhd@gmail.com',
    advisorTitle: 'Thạc sĩ',
    necessity: 'Điểm danh thủ công tốn thời gian và dễ nhầm lẫn. Ứng dụng di động nhận diện khuôn mặt giúp tự động hóa và nâng cao tính minh bạch trong lớp học.',
    objectives: 'Xây dựng ứng dụng Flutter nhận diện gương mặt qua camera điện thoại, độ trễ dưới 1s, độ chính xác nhận diện trên 95% trong điều kiện ánh sáng lớp học.',
    mainContents: '1. Khảo sát nghiệp vụ điểm danh sinh viên tại DNTU.\n2. Tích hợp mô hình MobileFaceNet nhận diện khuôn mặt trên thiết bị di động.\n3. Xây dựng backend quản lý danh sách lớp và xuất báo cáo điểm danh.',
    methods: 'Phương pháp phát triển ứng dụng di động Agile/Scrum, tích hợp Edge AI và Cloud API.',
    expectedProducts: '- Ứng dụng di động Android/iOS hoàn chỉnh.\n- Báo cáo kết quả nghiên cứu khoa học sinh viên.\n- Tham gia báo cáo tại Hội nghị Sinh viên NCKH cấp Trường.',
    applicability: 'Triển khai thử nghiệm cho các lớp thực hành tại Khoa CNTT.',
    members: [
      {
        id: 'm-sv-1',
        fullName: 'Lê Văn An',
        identifierCode: 'SV210088',
        unit: 'Khoa Công nghệ thông tin',
        roleInProject: 'Thành viên nghiên cứu chính'
      }
    ],
    budgetTotal: 8000000,
    budgetSchoolFunded: 8000000,
    signedPdfFile: {
      fileName: 'BM01B_DiemDanhKhuonMat_Signed.pdf',
      fileSize: '1.2 MB',
      uploadedAt: '2026-08-20 10:15',
      signatureStatus: 'DA_KY',
      signedBy: 'Trần Văn Minh (Trưởng nhóm sinh viên)'
    },
    status: 'CHO_GVHD_DUYET',
    statusText: 'Chờ GVHD duyệt hồ sơ BM01B (Bước 01)',
    version: 1,
    submittedAt: '2026-08-20 10:18',
    auditLogs: [
      {
        id: 'log-sv1-1',
        action: 'Tạo hồ sơ đề tài sinh viên BM01B',
        actorName: 'Trần Văn Minh',
        actorRole: 'Sinh viên',
        timestamp: '2026-08-20 08:30',
        newStatus: 'NHAP'
      },
      {
        id: 'log-sv1-2',
        action: 'Nộp hồ sơ cho Giảng viên hướng dẫn',
        actorName: 'Trần Văn Minh',
        actorRole: 'Sinh viên',
        timestamp: '2026-08-20 10:18',
        oldStatus: 'NHAP',
        newStatus: 'CHO_GVHD_DUYET'
      }
    ]
  },

  // 7. GIAI ĐOẠN 2: VIẾT THUYẾT MINH (BƯỚC 03 - BM04B)
  {
    id: 'prop-sv-02',
    code: 'DT-SV-2026-002',
    title: 'Nghiên cứu và xây dựng website thương mại điện tử tích hợp trợ lý ảo AI tư vấn mua sắm',
    roundId: 'round-2026-sv',
    roundName: 'Đợt Đăng ký đề tài NCKH Sinh viên năm học 2026-2027',
    type: 'TUYEN_CHON',
    target: 'SINH_VIEN',
    field: 'Thương mại điện tử & Trí tuệ nhân tạo',
    faculty: 'Khoa Công nghệ thông tin',
    durationMonths: 6,
    startDateExpected: '2026-10-15',
    endDateExpected: '2027-04-15',
    authorId: 'u-sv-01',
    authorName: 'Trần Văn Minh',
    authorEmail: 'sinhvien@gmail.com',
    authorIdentifierCode: 'SV210045',
    authorPhone: '0987 654 321',
    authorClass: '21DTH1',
    advisorId: 'u-gvhd-01',
    advisorName: 'ThS. Phạm Hải Đăng',
    advisorEmail: 'gvhd@gmail.com',
    advisorTitle: 'Thạc sĩ',
    necessity: 'Trợ lý ảo AI giúp gợi ý sản phẩm cá nhân hóa và giải đáp thắc mắc khách hàng 24/7, tăng tỷ lệ chuyển đổi đơn hàng.',
    objectives: 'Xây dựng website thương mại điện tử hoàn chỉnh với Chatbot AI sử dụng mô hình RAG và LLM mã nguồn mở.',
    mainContents: '1. Thiết kế cơ sở dữ liệu và kiến trúc web full-stack.\n2. Tích hợp Chatbot AI hỗ trợ tư vấn.\n3. Thử nghiệm người dùng và đánh giá độ hài lòng.',
    methods: 'Phát triển web hiện đại (Angular + Spring Boot), kỹ thuật RAG với Vector Database.',
    expectedProducts: '- Website thương mại điện tử đầy đủ tính năng.\n- Báo cáo nghiên cứu khoa học sinh viên.',
    applicability: 'Ứng dụng thử nghiệm cho các gian hàng khởi nghiệp của sinh viên DNTU.',
    members: [],
    budgetTotal: 10000000,
    budgetSchoolFunded: 10000000,
    signedPdfFile: {
      fileName: 'BM01B_Ecommerce_AI_Signed.pdf',
      fileSize: '1.5 MB',
      uploadedAt: '2026-08-12 09:00',
      signatureStatus: 'DA_KY',
      signedBy: 'Trần Văn Minh (Chữ ký số sinh viên)'
    },
    status: 'CHO_NOP_THUYET_MINH',
    statusText: 'Chờ nộp Thuyết minh BM04B (Bước 03)',
    version: 1,
    submittedAt: '2026-08-12 09:30',
    auditLogs: [
      {
        id: 'log-sv2-1',
        action: 'GVHD phê duyệt hồ sơ BM01B',
        actorName: 'ThS. Phạm Hải Đăng',
        actorRole: 'Giảng viên hướng dẫn',
        timestamp: '2026-08-14 11:00',
        oldStatus: 'CHO_GVHD_DUYET',
        newStatus: 'CHO_HOI_DONG_XET_DUYET_HO_SO'
      },
      {
        id: 'log-sv2-2',
        action: 'Hội đồng xét duyệt hồ sơ đạt 85/100 điểm (BM02/BM03)',
        actorName: 'PGS.TS. Trần Văn Hùng',
        actorRole: 'Chủ tịch HĐ',
        timestamp: '2026-08-20 16:00',
        oldStatus: 'CHO_HOI_DONG_XET_DUYET_HO_SO',
        newStatus: 'CHO_NOP_THUYET_MINH',
        comment: 'Đề tài có tính ứng dụng cao, đồng ý thông qua để nhóm sinh viên nộp Thuyết minh BM04B.'
      }
    ]
  },

  // 8. GIAI ĐOẠN 3: VIẾT BÁO CÁO GIỮA KỲ (BƯỚC 06 - BM08)
  {
    id: 'prop-sv-03',
    code: 'DT-SV-2026-003',
    title: 'Thiết kế và chế tạo Robot tự hành vận chuyển tài liệu trong thư viện trường học',
    roundId: 'round-2026-sv',
    roundName: 'Đợt Đăng ký đề tài NCKH Sinh viên năm học 2026-2027',
    type: 'TUYEN_CHON',
    target: 'SINH_VIEN',
    field: 'Robot & Tự động hóa',
    faculty: 'Khoa Công nghệ thông tin',
    durationMonths: 8,
    startDateExpected: '2026-09-01',
    endDateExpected: '2027-04-30',
    authorId: 'u-sv-01',
    authorName: 'Trần Văn Minh',
    authorEmail: 'sinhvien@gmail.com',
    authorIdentifierCode: 'SV210045',
    authorPhone: '0987 654 321',
    authorClass: '21DTH1',
    advisorId: 'u-gvhd-01',
    advisorName: 'ThS. Phạm Hải Đăng',
    advisorEmail: 'gvhd@gmail.com',
    advisorTitle: 'Thạc sĩ',
    necessity: 'Hỗ trợ thủ thư vận chuyển sách báo tự động giữa các kệ sách, giảm sức lao động chân tay.',
    objectives: 'Chế tạo robot AGV tải trọng 15kg, định vị chính xác sai số dưới 5cm bằng công nghệ LiDAR SLAM.',
    mainContents: '1. Thiết kế cơ khí khung robot và mạch công suất.\n2. Cài đặt hệ điều hành ROS2 và thuật toán dẫn đường Nav2.\n3. Thử nghiệm vận hành thực tế tại Thư viện DNTU.',
    methods: 'Phương pháp tích hợp cơ điện tử, điều khiển vòng kín PID và thuật toán SLAM.',
    expectedProducts: '- 01 Mẫu robot tự hành hoạt động tốt.\n- Báo cáo tiến độ BM08 và mã nguồn điều khiển.',
    applicability: 'Thử nghiệm phục vụ tại Thư viện trường Đại học Công nghệ Đồng Nai.',
    members: [],
    budgetTotal: 12000000,
    budgetSchoolFunded: 12000000,
    status: 'DANG_THUC_HIEN',
    statusText: 'Đang thực hiện & Nộp BC tiến độ BM08 (Bước 06)',
    version: 1,
    signedPdfFile: {
      fileName: 'BM01B_RobotThuVien_Signed.pdf',
      fileSize: '1.7 MB',
      uploadedAt: '2026-08-01 08:30',
      signatureStatus: 'DA_KY',
      signedBy: 'Trần Văn Minh (Chữ ký số sinh viên)'
    },
    submittedAt: '2026-08-01 09:00',
    auditLogs: [
      {
        id: 'log-sv3-1',
        action: 'Hội đồng duyệt thuyết minh BM06/BM07 đạt yêu cầu',
        actorName: 'PGS.TS. Trần Văn Hùng',
        actorRole: 'Chủ tịch HĐ',
        timestamp: '2026-08-12 14:00',
        newStatus: 'DANG_XET_DUYET_THUYET_MINH'
      },
      {
        id: 'log-sv3-2',
        action: 'P.KHCN ban hành Quyết định giao nhiệm vụ và ký Hợp đồng NCKH Sinh viên',
        actorName: 'ThS. Hoàng Thị Mai',
        actorRole: 'Phòng KHCN',
        timestamp: '2026-08-18 10:00',
        newStatus: 'DANG_THUC_HIEN',
        comment: 'Đã hoàn tất hợp đồng SV-NCKH, nhóm sinh viên bắt đầu chế tạo robot và định kỳ nộp BM08.'
      }
    ]
  },

  // 9. GIAI ĐOẠN 4: BÁO CÁO NGHIỆM THU (BƯỚC 07 - BM09/BM11/BM12/BM13)
  {
    id: 'prop-sv-04',
    code: 'DT-SV-2026-004',
    title: 'Xây dựng hệ sinh thái ứng dụng di động hỗ trợ sinh viên tìm trọ và việc làm thêm thông minh',
    roundId: 'round-2026-sv',
    roundName: 'Đợt Đăng ký đề tài NCKH Sinh viên năm học 2026-2027',
    type: 'TUYEN_CHON',
    target: 'SINH_VIEN',
    field: 'Công nghệ phần mềm & Dịch vụ số',
    faculty: 'Khoa Công nghệ thông tin',
    durationMonths: 6,
    startDateExpected: '2025-10-01',
    endDateExpected: '2026-04-30',
    authorId: 'u-sv-01',
    authorName: 'Trần Văn Minh',
    authorEmail: 'sinhvien@gmail.com',
    authorIdentifierCode: 'SV210045',
    authorPhone: '0987 654 321',
    authorClass: '21DTH1',
    advisorId: 'u-gvhd-01',
    advisorName: 'ThS. Phạm Hải Đăng',
    advisorEmail: 'gvhd@gmail.com',
    advisorTitle: 'Thạc sĩ',
    necessity: 'Giúp tân sinh viên dễ dàng tìm phòng trọ an toàn, giá hợp lý và tiếp cận việc làm thêm uy tín gần trường.',
    objectives: 'Xây dựng ứng dụng di động và hệ thống định vị GPS tích hợp đánh giá uy tín chủ trọ.',
    mainContents: '1. Khảo sát nhu cầu nhà trọ quanh khu vực Biên Hòa.\n2. Phát triển app Flutter kết hợp Google Maps API.\n3. Triển khai thử nghiệm cho 200 sinh viên.',
    methods: 'Phương pháp phát triển phần mềm di động, khảo sát thực tế và phân tích thống kê.',
    expectedProducts: '- Ứng dụng di động tìm trọ DNTU House.\n- Báo cáo tổng kết đề tài BM09.',
    applicability: 'Chuyển giao cho Đoàn Thanh niên - Hội Sinh viên trường quản lý vận hành.',
    members: [],
    budgetTotal: 9500000,
    budgetSchoolFunded: 9500000,
    status: 'CHO_NGHIEM_THU',
    statusText: 'Chờ nghiệm thu & Nộp BM09/BM13 (Bước 07)',
    version: 1,
    signedPdfFile: {
      fileName: 'BM01B_TimTroSinhVien_Signed.pdf',
      fileSize: '1.4 MB',
      uploadedAt: '2025-09-25 14:00',
      signatureStatus: 'DA_KY',
      signedBy: 'Trần Văn Minh (Chữ ký số sinh viên)'
    },
    submittedAt: '2025-09-25 14:30',
    auditLogs: [
      {
        id: 'log-sv4-1',
        action: 'Nộp Báo cáo tổng kết đề tài và ứng dụng hoàn chỉnh (BM09)',
        actorName: 'Trần Văn Minh',
        actorRole: 'Sinh viên',
        timestamp: '2026-08-15 15:00',
        newStatus: 'CHO_NGHIEM_THU'
      },
      {
        id: 'log-sv4-2',
        action: 'P.KHCN thành lập Hội đồng nghiệm thu đề tài sinh viên (BM10)',
        actorName: 'ThS. Hoàng Thị Mai',
        actorRole: 'Phòng KHCN',
        timestamp: '2026-08-20 09:30',
        comment: 'Hội đồng nghiệm thu đã sẵn sàng chấm điểm phiếu BM11 và lập biên bản BM12.'
      }
    ]
  },

  // 10. GIAI ĐOẠN 5: CHỈNH SỬA SAU NGHIỆM THU (BƯỚC 07 - BM13)
  {
    id: 'prop-sv-05',
    code: 'DT-SV-2026-005',
    title: 'Phát triển thiết bị IoT cảnh báo rò rỉ khí gas và cháy nổ thông minh cho phòng trọ sinh viên',
    roundId: 'round-2026-sv',
    roundName: 'Đợt Đăng ký đề tài NCKH Sinh viên năm học 2026-2027',
    type: 'TUYEN_CHON',
    target: 'SINH_VIEN',
    field: 'IoT & Phần cứng nhúng',
    faculty: 'Khoa Công nghệ thông tin',
    durationMonths: 6,
    startDateExpected: '2025-09-01',
    endDateExpected: '2026-03-31',
    authorId: 'u-sv-01',
    authorName: 'Trần Văn Minh',
    authorEmail: 'sinhvien@gmail.com',
    authorIdentifierCode: 'SV210045',
    authorPhone: '0987 654 321',
    authorClass: '21DTH1',
    advisorId: 'u-gvhd-01',
    advisorName: 'ThS. Phạm Hải Đăng',
    advisorEmail: 'gvhd@gmail.com',
    advisorTitle: 'Thạc sĩ',
    necessity: 'Phòng trọ sinh viên thường tiềm ẩn rủi ro chập cháy và rò rỉ gas do không gian khép kín.',
    objectives: 'Chế tạo thiết bị báo động nhỏ gọn, gửi tin nhắn SMS/Telegram cảnh báo khẩn cấp trong vòng 3 giây.',
    mainContents: '1. Thiết kế mạch tích hợp module SIM và cảm biến khí MQ2.\n2. Lập trình vi điều khiển ESP32.\n3. Thử nghiệm thực tế tại 10 phòng trọ.',
    methods: 'Phương pháp chế tạo mạch nhúng và thực nghiệm an toàn cháy nổ.',
    expectedProducts: '- Thiết bị phần cứng hoàn chỉnh kèm hộp bảo vệ.\n- Báo cáo giải trình BM13.',
    applicability: 'Triển khai cho khu ký túc xá và phòng trọ sinh viên khu vực Đại học Công nghệ Đồng Nai.',
    members: [],
    budgetTotal: 7500000,
    budgetSchoolFunded: 7500000,
    status: 'YEU_CAU_CHINH_SUA_NGHIEM_THU',
    statusText: 'HĐ yêu cầu chỉnh sửa sau NT (Nộp BM13)',
    version: 1,
    signedPdfFile: {
      fileName: 'BM01B_BaoChayGas_Signed.pdf',
      fileSize: '1.3 MB',
      uploadedAt: '2025-08-20 10:00',
      signatureStatus: 'DA_KY',
      signedBy: 'Trần Văn Minh (Chữ ký số sinh viên)'
    },
    submittedAt: '2025-08-20 10:30',
    auditLogs: [
      {
        id: 'log-sv5-1',
        action: 'Hội đồng nghiệm thu đề tài sinh viên họp và yêu cầu bổ sung',
        actorName: 'PGS.TS. Trần Văn Hùng',
        actorRole: 'Chủ tịch HĐ',
        timestamp: '2026-08-18 16:30',
        oldStatus: 'DANG_NGHIEM_THU',
        newStatus: 'YEU_CAU_CHINH_SUA_NGHIEM_THU',
        comment: 'Hội đồng đánh giá cao ý tưởng, yêu cầu bổ sung sơ đồ nguyên lý mạch vào phụ lục và nộp Báo cáo giải trình BM13.'
      }
    ]
  },

  // 11. ĐỀ TÀI CỦA GIẢNG VIÊN KHÁC (TS. Trần Mai Lan - Khoa MT)
  {
    id: 'prop-gv-06',
    code: 'DT-GV-2026-006',
    title: 'Nghiên cứu chế tạo màng lọc nano composite ứng dụng xử lý ion kim loại nặng trong nước thải công nghiệp',
    roundId: 'round-2026-01',
    roundName: 'Đợt 1: Đăng ký đề tài NCKH Cấp Trường năm 2026 (Giảng viên)',
    type: 'TUYEN_CHON',
    target: 'GIANG_VIEN',
    field: 'Công nghệ Hóa học & Môi trường',
    faculty: 'Khoa Công nghệ Môi trường',
    durationMonths: 12,
    startDateExpected: '2026-10-01',
    endDateExpected: '2027-09-30',
    authorId: 'u-gv-02',
    authorName: 'TS. Trần Mai Lan',
    authorEmail: 'lan.tm@gmail.com',
    authorIdentifierCode: 'GV0067',
    authorPhone: '0913 888 777',
    authorAcademicTitle: 'Tiến sĩ',
    necessity: 'Nhu cầu xử lý nước thải công nghiệp chứa kim loại nặng ngày càng cấp bách theo quy chuẩn môi trường mới.',
    objectives: 'Chế tạo thành công màng lọc nano composite có hiệu suất hấp phụ chì và cadmi trên 90%.',
    mainContents: '1. Tổng hợp hạt nano graphene oxide.\n2. Phối trộn chế tạo màng composite.\n3. Thử nghiệm hấp phụ và tái sinh màng lọc.',
    methods: 'Phương pháp hóa học tổng hợp vật liệu và quang phổ hấp thụ nguyên tử (AAS).',
    expectedProducts: '- Mẫu vật liệu màng nano composite.\n- 01 bài báo quốc tế thuộc danh mục SCIE.\n- Quy trình chế tạo vật liệu.',
    applicability: 'Chuyển giao cho các trạm xử lý nước thải khu công nghiệp Đồng Nai.',
    members: [],
    budgetTotal: 48000000,
    budgetSchoolFunded: 48000000,
    status: 'CHO_HOI_DONG_XET_DUYET_HO_SO',
    statusText: 'Chờ Hội đồng xét duyệt hồ sơ (Bước 02)',
    version: 1,
    reviewedAt: '2026-08-19 11:30',
    reviewerName: 'Trưởng Khoa CN Môi trường',
    auditLogs: [
      {
        id: 'log-6-1',
        action: 'Trưởng Khoa duyệt hồ sơ BM01A',
        actorName: 'TS. Nguyễn Văn Bình',
        actorRole: 'Trưởng Khoa',
        timestamp: '2026-08-19 11:30',
        oldStatus: 'CHO_KHOA_DUYET',
        newStatus: 'CHO_HOI_DONG_XET_DUYET_HO_SO',
        comment: 'Hồ sơ đạt yêu cầu chuyên môn, chuyển tập xét duyệt Hội đồng Bước 02.'
      }
    ]
  }
];

export const INITIAL_COUNCILS: ScientificCouncil[] = [
  {
    id: 'council-01',
    code: 'HĐ-2026-B02-CNTT',
    name: 'Hội đồng Xét duyệt Sơ bộ Hồ sơ Đăng ký Đề tài - Lĩnh vực CNTT & AI (Bước 02)',
    councilType: 'XET_DUYET_HO_SO',
    roundId: 'round-01',
    roundName: 'Đợt 1: Đăng ký đề tài NCKH Cấp Trường năm 2026 (Giảng viên)',
    faculty: 'Khoa Công nghệ thông tin',
    decisionNumber: '118/QĐ-ĐHNT-KHCN',
    decisionDate: '2026-08-20',
    meetingDate: '2026-09-05 08:30',
    meetingLocation: 'Phòng Hội thảo A204 - Tòa nhà Trung tâm',
    status: 'DA_BAN_HANH',
    notes: 'Đánh giá tính mới, tính khả thi và điều kiện triển khai của các hồ sơ đăng ký BM01A/BM01B.',
    members: [
      {
        id: 'cm-1',
        fullName: 'PGS.TS. Trần Văn Hùng',
        academicTitle: 'Phó Giáo sư, Tiến sĩ',
        roleInCouncil: 'CHU_TICH',
        workUnit: 'Hội đồng Khoa học & Đào tạo',
        email: 'chutichhd@gmail.com',
        phone: '0918 222 333'
      },
      {
        id: 'cm-2',
        fullName: 'TS. Lê Hoàng Nam',
        academicTitle: 'Tiến sĩ',
        roleInCouncil: 'PHO_CHU_TICH',
        workUnit: 'Khoa Công nghệ thông tin',
        email: 'truongkhoa@gmail.com',
        phone: '0903 111 222'
      },
      {
        id: 'cm-3',
        fullName: 'TS. Vũ Minh Tuấn',
        academicTitle: 'Tiến sĩ',
        roleInCouncil: 'UY_VIEN_PHAN_BIEN_1',
        workUnit: 'Viện Nghiên cứu & Ứng dụng',
        email: 'hoidong@gmail.com',
        phone: '0912 666 777'
      },
      {
        id: 'cm-4',
        fullName: 'ThS. Nguyễn Thị Thu',
        academicTitle: 'Thạc sĩ Quản lý KHCN',
        roleInCouncil: 'THU_KY',
        workUnit: 'Phòng Khoa học & Công nghệ',
        email: 'pkhcn@gmail.com',
        phone: '0909 888 999'
      },
      {
        id: 'cm-5',
        fullName: 'ThS. Phạm Hải Đăng',
        academicTitle: 'Thạc sĩ',
        roleInCouncil: 'UY_VIEN',
        workUnit: 'Khoa Công nghệ thông tin',
        email: 'gvhd@gmail.com',
        phone: '0908 777 888'
      }
    ],
    assignedProposalIds: ['prop-gv-01', 'prop-sv-01', 'prop-gv-02']
  },
  {
    id: 'council-02',
    code: 'HĐ-2026-B04-DIEN',
    name: 'Hội đồng Thẩm định & Xét duyệt Thuyết minh Đề tài - Kỹ thuật & Tự động hóa (Bước 04)',
    councilType: 'XET_DUYET_THUYET_MINH',
    roundId: 'round-01',
    roundName: 'Đợt 1: Đăng ký đề tài NCKH Cấp Trường năm 2026 (Giảng viên)',
    faculty: 'Khoa Điện - Điện tử',
    decisionNumber: '142/QĐ-ĐHNT-KHCN',
    decisionDate: '2026-08-22',
    meetingDate: '2026-09-12 14:00',
    meetingLocation: 'Phòng Họp Ban Giám hiệu B102',
    status: 'DA_BAN_HANH',
    notes: 'Thẩm định chi tiết thuyết minh đề cương BM04, thuyết minh dự toán kinh phí và kế hoạch chi tiết.',
    members: [
      {
        id: 'cm-6',
        fullName: 'PGS.TS. Trần Văn Hùng',
        academicTitle: 'Phó Giáo sư, Tiến sĩ',
        roleInCouncil: 'CHU_TICH',
        workUnit: 'Hội đồng Khoa học & Đào tạo',
        email: 'chutichhd@gmail.com',
        phone: '0918 222 333'
      },
      {
        id: 'cm-7',
        fullName: 'TS. Vũ Minh Tuấn',
        academicTitle: 'Tiến sĩ',
        roleInCouncil: 'UY_VIEN_PHAN_BIEN_1',
        workUnit: 'Viện Nghiên cứu & Ứng dụng',
        email: 'hoidong@gmail.com',
        phone: '0912 666 777'
      },
      {
        id: 'cm-8',
        fullName: 'ThS. Nguyễn Thị Thu',
        academicTitle: 'Thạc sĩ Quản lý KHCN',
        roleInCouncil: 'THU_KY',
        workUnit: 'Phòng Khoa học & Công nghệ',
        email: 'pkhcn@gmail.com',
        phone: '0909 888 999'
      }
    ],
    assignedProposalIds: ['prop-gv-02']
  },
  {
    id: 'council-03',
    code: 'HĐ-2026-B07-HOAHOC',
    name: 'Hội đồng Đánh giá & Nghiệm thu Kết quả Đề tài NCKH - Công nghệ Hóa & Môi trường (Bước 07)',
    councilType: 'NGHIEM_THU',
    roundId: 'round-01',
    roundName: 'Đợt 1: Đăng ký đề tài NCKH Cấp Trường năm 2026 (Giảng viên)',
    faculty: 'Khoa Công nghệ Hóa học & Thực phẩm',
    decisionNumber: '168/QĐ-ĐHNT-KHCN',
    decisionDate: '2026-08-24',
    meetingDate: '2026-09-20 09:00',
    meetingLocation: 'Hội trường C301 & Trực tuyến MS Teams',
    status: 'DANG_HOP',
    notes: 'Đánh giá nghiệm thu sản phẩm, bài báo khoa học và báo cáo tổng kết đề tài BM07/BM08.',
    members: [
      {
        id: 'cm-9',
        fullName: 'PGS.TS. Trần Văn Hùng',
        academicTitle: 'Phó Giáo sư, Tiến sĩ',
        roleInCouncil: 'CHU_TICH',
        workUnit: 'Hội đồng Khoa học & Đào tạo',
        email: 'chutichhd@gmail.com',
        phone: '0918 222 333'
      },
      {
        id: 'cm-10',
        fullName: 'TS. Lê Hoàng Nam',
        academicTitle: 'Tiến sĩ',
        roleInCouncil: 'UY_VIEN_PHAN_BIEN_1',
        workUnit: 'Khoa Công nghệ thông tin',
        email: 'truongkhoa@gmail.com',
        phone: '0903 111 222'
      },
      {
        id: 'cm-11',
        fullName: 'TS. Vũ Minh Tuấn',
        academicTitle: 'Tiến sĩ',
        roleInCouncil: 'UY_VIEN_PHAN_BIEN_2',
        workUnit: 'Viện Nghiên cứu & Ứng dụng',
        email: 'hoidong@gmail.com',
        phone: '0912 666 777'
      },
      {
        id: 'cm-12',
        fullName: 'ThS. Nguyễn Thị Thu',
        academicTitle: 'Thạc sĩ Quản lý KHCN',
        roleInCouncil: 'THU_KY',
        workUnit: 'Phòng Khoa học & Công nghệ',
        email: 'pkhcn@gmail.com',
        phone: '0909 888 999'
      }
    ],
    assignedProposalIds: ['prop-gv-04', 'prop-gv-05']
  }
];

@Injectable({
  providedIn: 'root'
})
export class NckhDataService {
  private currentUserSubject: BehaviorSubject<UserProfile | null>;
  public currentUser$: Observable<UserProfile | null>;

  private roundsSubject: BehaviorSubject<RegistrationRound[]>;
  public rounds$: Observable<RegistrationRound[]>;

  private proposalsSubject: BehaviorSubject<TopicProposal[]>;
  public proposals$: Observable<TopicProposal[]>;

  private councilsSubject: BehaviorSubject<ScientificCouncil[]>;
  public councils$: Observable<ScientificCouncil[]>;

  constructor() {
    // Load currentUser
    const savedUser = sessionStorage.getItem('currentUserProfile');
    const initialUser: UserProfile | null = savedUser ? JSON.parse(savedUser) : null;
    this.currentUserSubject = new BehaviorSubject<UserProfile | null>(initialUser);
    this.currentUser$ = this.currentUserSubject.asObservable();

    // Load Rounds
    const savedRounds = localStorage.getItem('nckh_rounds');
    const initialRounds: RegistrationRound[] = savedRounds ? JSON.parse(savedRounds) : INITIAL_ROUNDS;
    this.roundsSubject = new BehaviorSubject<RegistrationRound[]>(initialRounds);
    this.rounds$ = this.roundsSubject.asObservable();

    // Load Councils
    const savedCouncils = localStorage.getItem('nckh_councils');
    const initialCouncils: ScientificCouncil[] = savedCouncils ? JSON.parse(savedCouncils) : INITIAL_COUNCILS;
    this.councilsSubject = new BehaviorSubject<ScientificCouncil[]>(initialCouncils);
    this.councils$ = this.councilsSubject.asObservable();

    // Load Proposals (Luôn đồng bộ với bộ 5 giai đoạn mới nhất)
    const savedProposals = localStorage.getItem('nckh_proposals');
    let initialProposals: TopicProposal[] = INITIAL_PROPOSALS;
    if (savedProposals) {
      try {
        const parsed = JSON.parse(savedProposals);
        if (Array.isArray(parsed) && parsed.some((p: any) => p.id === 'prop-gv-05')) {
          initialProposals = parsed;
        } else {
          localStorage.setItem('nckh_proposals', JSON.stringify(INITIAL_PROPOSALS));
        }
      } catch (e) {
        initialProposals = INITIAL_PROPOSALS;
      }
    }
    this.proposalsSubject = new BehaviorSubject<TopicProposal[]>(initialProposals);
    this.proposals$ = this.proposalsSubject.asObservable();
  }

  // --- AUTH & ROLE SWITCH ---
  public get currentUserValue(): UserProfile {
    return this.currentUserSubject.value || DEMO_USERS[0];
  }

  public setCurrentUser(user: UserProfile) {
    sessionStorage.setItem('currentUserProfile', JSON.stringify(user));
    sessionStorage.setItem('currentUser', JSON.stringify({
      id: user.id,
      email: user.email,
      username: user.fullName,
      role: user.role,
      token: 'fake-jwt-token-nckh'
    }));
    this.currentUserSubject.next(user);
  }

  public loginByEmail(email: string, password?: string): UserProfile | null {
    const user = DEMO_USERS.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (user) {
      if (password && user.password !== password) {
        return null;
      }
      this.setCurrentUser(user);
      return user;
    }
    return null;
  }

  public logout() {
    sessionStorage.removeItem('currentUserProfile');
    sessionStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  public switchRole(role: UserRole): UserProfile {
    const user = DEMO_USERS.find(u => u.role === role) || DEMO_USERS[0];
    this.setCurrentUser(user);
    return user;
  }

  public getDemoUsers() {
    return DEMO_USERS;
  }

  // --- ROUNDS API (P.KHCN) ---
  public getRounds(): RegistrationRound[] {
    return this.roundsSubject.value;
  }

  public getRoundById(id: string): RegistrationRound | undefined {
    return this.roundsSubject.value.find(r => r.id === id);
  }

  private saveRounds(rounds: RegistrationRound[]) {
    localStorage.setItem('nckh_rounds', JSON.stringify(rounds));
    this.roundsSubject.next(rounds);
  }

  public createRound(data: Partial<RegistrationRound>): RegistrationRound {
    const rounds = [...this.roundsSubject.value];
    const newId = `round-${Date.now()}`;
    const newCode = data.code || `DOT-${new Date().getFullYear()}-${String(rounds.length + 1).padStart(2, '0')}`;
    
    const newRound: RegistrationRound = {
      id: newId,
      code: newCode,
      name: data.name || 'Đợt đăng ký đề tài NCKH mới',
      academicYear: data.academicYear || '2026-2027',
      target: data.target || 'GIANG_VIEN',
      type: data.type || 'TUYEN_CHON',
      status: data.status || 'DA_CONG_BO',
      startDate: data.startDate || new Date().toISOString().split('T')[0],
      endDate: data.endDate || new Date(Date.now() + 30 * 86400000).toISOString().split('T')[0],
      description: data.description || '',
      directTopics: data.directTopics || []
    };

    rounds.unshift(newRound);
    this.saveRounds(rounds);
    return newRound;
  }

  public updateRound(id: string, data: Partial<RegistrationRound>): RegistrationRound | null {
    const rounds = [...this.roundsSubject.value];
    const index = rounds.findIndex(r => r.id === id);
    if (index === -1) return null;

    rounds[index] = {
      ...rounds[index],
      ...data
    };
    this.saveRounds(rounds);
    return rounds[index];
  }

  public deleteRound(id: string): boolean {
    let rounds = [...this.roundsSubject.value];
    const index = rounds.findIndex(r => r.id === id);
    if (index === -1) return false;
    rounds.splice(index, 1);
    this.saveRounds(rounds);
    return true;
  }

  // --- PROPOSALS API ---
  public getProposals(): TopicProposal[] {
    return this.proposalsSubject.value;
  }

  public getProposalById(id: string): TopicProposal | undefined {
    return this.proposalsSubject.value.find(p => p.id === id);
  }

  private saveProposals(proposals: TopicProposal[]) {
    localStorage.setItem('nckh_proposals', JSON.stringify(proposals));
    this.proposalsSubject.next(proposals);
  }

  // Lấy đề tài của người dùng hiện tại (Giảng viên / Sinh viên)
  public getMyProposals(): TopicProposal[] {
    const user = this.currentUserValue;
    return this.proposalsSubject.value.filter(p => 
      p.authorId === user.id || p.authorEmail.toLowerCase() === user.email.toLowerCase()
    );
  }

  // Đếm số đề tài đang đợi xử lý của người dùng (Giới hạn tối đa 2 đề tài)
  public getActivePendingCount(userId?: string): number {
    const uid = userId || this.currentUserValue.id;
    return this.proposalsSubject.value.filter(p => {
      if (p.authorId !== uid) return false;
      // Các trạng thái đang đợi xử lý (giữ suất)
      const pendingStatuses: TopicStatus[] = [
        'CHO_KHOA_DUYET',
        'CHO_GVHD_DUYET',
        'TRA_CHINH_SUA',
        'CHO_DUYET_LAI',
        'CHO_HOI_DONG_XET_DUYET_HO_SO',
        'DANG_XET_DUYET_HO_SO',
        'CHO_NOP_THUYET_MINH',
        'DANG_XET_DUYET_THUYET_MINH',
        'DANG_THUC_HIEN',
        'CHO_NGHIEM_THU',
        'DANG_NGHIEM_THU'
      ];
      return pendingStatuses.includes(p.status);
    }).length;
  }

  // Lấy đề tài chờ Trưởng Khoa duyệt
  public getProposalsForFaculty(facultyName?: string): TopicProposal[] {
    const faculty = facultyName || this.currentUserValue.unit;
    return this.proposalsSubject.value.filter(p => 
      p.target === 'GIANG_VIEN' && 
      p.faculty === faculty && 
      (p.status === 'CHO_KHOA_DUYET' || p.status === 'CHO_DUYET_LAI' || p.status === 'TRA_CHINH_SUA' || p.status === 'CHO_HOI_DONG_XET_DUYET_HO_SO')
    );
  }

  // Lấy đề tài sinh viên chờ GVHD duyệt
  public getProposalsForAdvisor(advisorId?: string): TopicProposal[] {
    const advId = advisorId || this.currentUserValue.id;
    return this.proposalsSubject.value.filter(p => 
      p.target === 'SINH_VIEN' && 
      (p.advisorId === advId || p.advisorEmail === this.currentUserValue.email)
    );
  }

  // Tạo mới hồ sơ đề tài
  public createProposal(data: Partial<TopicProposal>): TopicProposal {
    const current = this.proposalsSubject.value;
    const user = this.currentUserValue;
    const isGV = user.role === 'GIANG_VIEN' || data.target === 'GIANG_VIEN';
    const prefix = isGV ? 'DT-GV-2026' : 'DT-SV-2026';
    const code = `${prefix}-${String(current.length + 1).padStart(3, '0')}`;
    const id = `prop-${Date.now()}`;

    const newProp: TopicProposal = {
      id,
      code,
      title: data.title || '',
      roundId: data.roundId || 'round-2026-01',
      roundName: data.roundName || 'Đợt 1: Đăng ký đề tài NCKH Cấp Trường năm 2026',
      type: data.type || 'TUYEN_CHON',
      target: data.target || (isGV ? 'GIANG_VIEN' : 'SINH_VIEN'),
      field: data.field || 'Công nghệ thông tin',
      faculty: data.faculty || user.unit,
      durationMonths: data.durationMonths || 12,
      startDateExpected: data.startDateExpected || '2026-10-01',
      endDateExpected: data.endDateExpected || '2027-09-30',
      authorId: user.id,
      authorName: user.fullName,
      authorEmail: user.email,
      authorIdentifierCode: user.identifierCode,
      authorPhone: user.phone || '0900 000 000',
      authorAcademicTitle: user.academicTitle,
      authorClass: user.role === 'SINH_VIEN' ? '21DTH1' : undefined,
      advisorId: data.advisorId,
      advisorName: data.advisorName,
      advisorEmail: data.advisorEmail,
      advisorTitle: data.advisorTitle,
      directTopicId: data.directTopicId,
      necessity: data.necessity || '',
      objectives: data.objectives || '',
      mainContents: data.mainContents || '',
      methods: data.methods || '',
      expectedProducts: data.expectedProducts || '',
      applicability: data.applicability || '',
      members: data.members || [],
      budgetTotal: data.budgetTotal || 0,
      budgetSchoolFunded: data.budgetSchoolFunded || data.budgetTotal || 0,
      signedPdfFile: data.signedPdfFile,
      status: 'NHAP',
      statusText: 'Nháp',
      version: 1,
      auditLogs: [
        {
          id: `log-${Date.now()}`,
          action: 'Tạo mới hồ sơ đăng ký đề tài',
          actorName: user.fullName,
          actorRole: user.roleTitle,
          timestamp: new Date().toLocaleString('vi-VN'),
          newStatus: 'NHAP'
        }
      ]
    };

    const updated = [newProp, ...current];
    this.saveProposals(updated);
    return newProp;
  }

  // Cập nhật hồ sơ
  public updateProposal(id: string, data: Partial<TopicProposal>): TopicProposal {
    const current = this.proposalsSubject.value;
    const index = current.findIndex(p => p.id === id);
    if (index === -1) throw new Error('Không tìm thấy đề tài');

    const old = current[index];
    const updatedProp: TopicProposal = {
      ...old,
      ...data,
      version: old.status === 'TRA_CHINH_SUA' ? old.version + 1 : old.version
    };

    current[index] = updatedProp;
    this.saveProposals([...current]);
    return updatedProp;
  }

  // Nộp hồ sơ (BM01)
  public submitProposal(id: string): { success: boolean; message: string } {
    const current = this.proposalsSubject.value;
    const index = current.findIndex(p => p.id === id);
    if (index === -1) return { success: false, message: 'Không tìm thấy hồ sơ đề tài.' };

    const prop = current[index];
    const user = this.currentUserValue;

    // Kiểm tra giới hạn 2 đề tài
    const activeCount = this.getActivePendingCount(prop.authorId);
    if (prop.status === 'NHAP' && activeCount >= 2) {
      return { 
        success: false, 
        message: `Bạn đã đạt giới hạn tối đa 2 đề tài đang đợi xử lý (${activeCount}/2). Không thể nộp thêm hồ sơ mới.` 
      };
    }

    // Kiểm tra file PDF đã ký
    if (!prop.signedPdfFile || prop.signedPdfFile.signatureStatus !== 'DA_KY') {
      return { 
        success: false, 
        message: 'Bạn phải tải lên file PDF BM01 đã ký số trước khi nộp hồ sơ.' 
      };
    }

    const nextStatus: TopicStatus = prop.target === 'GIANG_VIEN' ? 'CHO_KHOA_DUYET' : 'CHO_GVHD_DUYET';
    const nextStatusText = prop.target === 'GIANG_VIEN' ? 'Đang đợi khoa duyệt' : 'Đang đợi giảng viên duyệt';

    prop.status = prop.status === 'TRA_CHINH_SUA' ? 'CHO_DUYET_LAI' : nextStatus;
    prop.statusText = prop.status === 'CHO_DUYET_LAI' ? 'Chờ duyệt lại' : nextStatusText;
    prop.submittedAt = new Date().toLocaleString('vi-VN');

    prop.auditLogs.unshift({
      id: `log-${Date.now()}`,
      action: prop.version > 1 ? `Nộp lại hồ sơ đề tài (Phiên bản ${prop.version})` : 'Nộp hồ sơ đề tài chính thức',
      actorName: user.fullName,
      actorRole: user.roleTitle,
      timestamp: new Date().toLocaleString('vi-VN'),
      newStatus: prop.status,
      comment: `Nộp hồ sơ thành công kèm bản ký PDF ${prop.signedPdfFile.fileName}`
    });

    current[index] = { ...prop };
    this.saveProposals([...current]);
    return { success: true, message: 'Nộp hồ sơ đề tài thành công!' };
  }

  // Duyệt hồ sơ (Trưởng Khoa hoặc GVHD)
  public approveProposal(id: string, note?: string): boolean {
    const current = this.proposalsSubject.value;
    const index = current.findIndex(p => p.id === id);
    if (index === -1) return false;

    const prop = current[index];
    const user = this.currentUserValue;

    prop.status = 'CHO_HOI_DONG_XET_DUYET_HO_SO';
    prop.statusText = 'Chờ Hội đồng xét duyệt hồ sơ';
    prop.reviewedAt = new Date().toLocaleString('vi-VN');
    prop.reviewerName = `${user.fullName} (${user.roleTitle})`;

    // Xử lý đề tài giao trực tiếp (nếu có tranh chấp)
    if (prop.type === 'GIAO_TRUC_TIEP' && prop.directTopicId) {
      // Đánh dấu đề tài giao trực tiếp đã có chủ nhiệm
      const rounds = this.roundsSubject.value;
      rounds.forEach(r => {
        if (r.directTopics) {
          r.directTopics.forEach(dt => {
            if (dt.id === prop.directTopicId) {
              dt.isTaken = true;
              dt.takenByProposalId = prop.id;
            }
          });
        }
      });
      localStorage.setItem('nckh_rounds', JSON.stringify(rounds));
      this.roundsSubject.next(rounds);

      // Chuyển các hồ sơ khác cùng đề tài này sang KHONG_DUOC_CHON
      current.forEach((other, oIdx) => {
        if (other.id !== prop.id && other.directTopicId === prop.directTopicId && other.status === 'CHO_KHOA_DUYET') {
          other.status = 'KHONG_DUOC_CHON';
          other.statusText = 'Không được chọn';
          other.auditLogs.unshift({
            id: `log-${Date.now()}-${oIdx}`,
            action: 'Tự động kết thúc do đề tài giao trực tiếp đã được chọn bởi hồ sơ khác',
            actorName: 'Hệ thống',
            actorRole: 'Hệ thống tự động',
            timestamp: new Date().toLocaleString('vi-VN'),
            newStatus: 'KHONG_DUOC_CHON',
            comment: `Đề tài đã thuộc về hồ sơ ${prop.code} được Trưởng Khoa duyệt trước.`
          });
        }
      });
    }

    prop.auditLogs.unshift({
      id: `log-${Date.now()}`,
      action: `${user.roleTitle} duyệt hồ sơ BM01`,
      actorName: user.fullName,
      actorRole: user.roleTitle,
      timestamp: new Date().toLocaleString('vi-VN'),
      oldStatus: 'CHO_KHOA_DUYET',
      newStatus: 'CHO_HOI_DONG_XET_DUYET_HO_SO',
      comment: note || 'Hồ sơ đạt yêu cầu chuyên môn, tự động chuyển vào tập xét duyệt Hội đồng Bước 02.'
    });

    current[index] = { ...prop };
    this.saveProposals([...current]);
    return true;
  }

  // Trả hồ sơ để chỉnh sửa (Trưởng Khoa hoặc GVHD)
  public returnProposal(id: string, reason: string): boolean {
    if (!reason || reason.trim() === '') return false;
    const current = this.proposalsSubject.value;
    const index = current.findIndex(p => p.id === id);
    if (index === -1) return false;

    const prop = current[index];
    const user = this.currentUserValue;

    prop.status = 'TRA_CHINH_SUA';
    prop.statusText = 'Trả chỉnh sửa';
    prop.rejectionReason = reason;
    prop.reviewedAt = new Date().toLocaleString('vi-VN');
    prop.reviewerName = `${user.fullName} (${user.roleTitle})`;

    // File ký cũ mất hiệu lực khi bị trả sửa
    if (prop.signedPdfFile) {
      prop.signedPdfFile.signatureStatus = 'CHUA_KY';
    }

    prop.auditLogs.unshift({
      id: `log-${Date.now()}`,
      action: `${user.roleTitle} trả hồ sơ yêu cầu chỉnh sửa`,
      actorName: user.fullName,
      actorRole: user.roleTitle,
      timestamp: new Date().toLocaleString('vi-VN'),
      newStatus: 'TRA_CHINH_SUA',
      comment: reason
    });

    current[index] = { ...prop };
    this.saveProposals([...current]);
    return true;
  }

  // Xóa hồ sơ (chỉ khi còn Nháp)
  public deleteProposal(id: string): boolean {
    const current = this.proposalsSubject.value;
    const target = current.find(p => p.id === id);
    if (!target || target.status !== 'NHAP') return false;

    const updated = current.filter(p => p.id !== id);
    this.saveProposals(updated);
    return true;
  }

  // --- SCIENTIFIC COUNCIL CRUD ---
  public getCouncils(): ScientificCouncil[] {
    return this.councilsSubject.value;
  }

  public getCouncilById(id: string): ScientificCouncil | undefined {
    return this.councilsSubject.value.find(c => c.id === id);
  }

  public saveCouncils(councils: ScientificCouncil[]) {
    localStorage.setItem('nckh_councils', JSON.stringify(councils));
    this.councilsSubject.next(councils);
  }

  public createCouncil(data: Partial<ScientificCouncil>): ScientificCouncil {
    const current = this.councilsSubject.value;
    const newCouncil: ScientificCouncil = {
      id: `council-${Date.now()}`,
      code: data.code || `HĐ-${new Date().getFullYear()}-${current.length + 1}`,
      name: data.name || 'Hội đồng Khoa học Đánh giá Đề tài NCKH',
      councilType: data.councilType || 'XET_DUYET_HO_SO',
      roundId: data.roundId,
      roundName: data.roundName,
      faculty: data.faculty || 'Khoa Công nghệ thông tin',
      decisionNumber: data.decisionNumber || `${Math.floor(100 + Math.random() * 900)}/QĐ-ĐHNT-KHCN`,
      decisionDate: data.decisionDate || new Date().toISOString().split('T')[0],
      meetingDate: data.meetingDate || new Date(Date.now() + 7 * 86400000).toISOString().split('T')[0] + ' 08:30',
      meetingLocation: data.meetingLocation || 'Phòng Hội thảo A204',
      status: data.status || 'DA_BAN_HANH',
      members: data.members || [],
      assignedProposalIds: data.assignedProposalIds || [],
      notes: data.notes || ''
    };

    const updated = [newCouncil, ...current];
    this.saveCouncils(updated);
    return newCouncil;
  }

  public updateCouncil(id: string, data: Partial<ScientificCouncil>): boolean {
    const current = this.councilsSubject.value;
    const idx = current.findIndex(c => c.id === id);
    if (idx === -1) return false;

    current[idx] = { ...current[idx], ...data };
    this.saveCouncils([...current]);
    return true;
  }

  public deleteCouncil(id: string): boolean {
    const current = this.councilsSubject.value;
    const updated = current.filter(c => c.id !== id);
    this.saveCouncils(updated);
    return true;
  }

  public assignProposalsToCouncil(councilId: string, proposalIds: string[]): boolean {
    const current = this.councilsSubject.value;
    const idx = current.findIndex(c => c.id === councilId);
    if (idx === -1) return false;

    const council = current[idx];
    const uniqueIds = Array.from(new Set([...(council.assignedProposalIds || []), ...proposalIds]));
    council.assignedProposalIds = uniqueIds;
    current[idx] = { ...council };
    this.saveCouncils([...current]);
    return true;
  }

  // Reset dữ liệu demo về ban đầu
  public resetToDefaultData() {
    localStorage.removeItem('nckh_rounds');
    localStorage.removeItem('nckh_proposals');
    localStorage.removeItem('nckh_councils');
    this.roundsSubject.next(INITIAL_ROUNDS);
    this.proposalsSubject.next(INITIAL_PROPOSALS);
    this.councilsSubject.next(INITIAL_COUNCILS);
  }
}
