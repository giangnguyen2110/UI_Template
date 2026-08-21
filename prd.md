---
title: "Hệ thống quản lý hoạt động NCKH — Module 1: Quản lý thực hiện đề tài NCKH cấp trường"
status: draft
created: 2026-08-18
updated: 2026-08-19T18:55+07:00
---

# PRD: Hệ thống quản lý hoạt động NCKH — Module 1: Quản lý thực hiện đề tài NCKH cấp trường

_Trường Đại học Công nghệ Đồng Nai — Phòng Khoa học Công nghệ (P.KHCN)_

## 0. Mục đích tài liệu

**PRD này là NGUỒN CHÂN LÝ DUY NHẤT cho nghiệp vụ Module 1.** Mọi quyết định downstream (UX, architecture, epics/stories) lấy từ đây. PRD chốt **năng lực và quy tắc nghiệp vụ**; không chốt công nghệ, mô hình dữ liệu vật lý hay giải pháp kỹ thuật — những nội dung đó thuộc architecture.

Cấu trúc: vocabulary được neo trong §3 Glossary (mọi FR/UJ/SM dùng đúng thuật ngữ đó); tính năng nhóm theo §4 với FR đánh số toàn cục `FR-1..FR-N` để downstream tham chiếu ổn định; NFR cắt ngang ở §8; mọi quyết định nghiệp vụ — kèm phương án bị loại và lý do — nằm ở §14 Decision Log, và các đoạn đã chốt trong thân tài liệu mang nhãn **Đã chốt** trỏ về mã `DEC-*` tương ứng.

**Phụ thuộc vĩnh viễn:**

- **15 biểu mẫu gốc BM01–BM15** (`.doc/.docx`) tại `docs/bieu-mau-goc/`. Đây là nguồn đối chiếu cuối cùng cho data dictionary (§4.9, FR-66). Lưu đồ quy trình chính thức tại `docs/luu-do-quy-trinh/P.KHCN_Quy trình thực hiện đề tài NCKH cấp trường.pptx`.

**Lai lịch (provenance lịch sử) — không còn là tham chiếu có hiệu lực:**

- `_bmad-output/planning-artifacts/briefs/brief-NCKH-prj-base-2026-08-17/brief.md` + `addendum.md` — brief và chi tiết nghiệp vụ.
- `brainstorm-liet-ke-day-du-use-case-chi-tiet-nckh-2026-07-18/danh-muc-use-case-chi-tiet.md` — danh mục 60+ use case chi tiết (mã `UC-*`), baseline nghiệp vụ. Bảng phủ UC→FR tại Phụ lục A.
- `brainstorming-nckh/docs/` — lưu đồ quy trình và biểu mẫu gốc (đã copy sang `docs/`).

Downstream không cần mở các tài liệu trên; toàn bộ nội dung cần thiết đã hấp thu vào PRD này.

**Quy tắc giải quyết xung đột nguồn (đã hoàn tất):** brief 2026-08-17 mới hơn danh mục use case 2026-07-21, nên khi hai tài liệu mâu thuẫn thì brief thắng. Ba điểm mâu thuẫn đã được xử lý và ghi tại §14 Decision Log (DEC-OQ1, DEC-OQ2, DEC-OQ3).

## 1. Tầm nhìn

Toàn bộ vòng đời một đề tài NCKH cấp trường của ĐH Công nghệ Đồng Nai hiện nằm rải rác trong Word, Excel, email và 15 biểu mẫu giấy ký tay luân chuyển thủ công giữa Người đăng ký, Khoa, ba Hội đồng khác nhau và P.KHCN. Không ai — kể cả P.KHCN — có một chỗ duy nhất để trả lời câu hỏi đơn giản nhất: _đề tài này đang ở đâu, ai đang giữ nó, và còn thiếu gì?_

Hệ thống này là một web app quản lý đúng 9 bước quy trình chính thức của P.KHCN cho cả đề tài giảng viên và đề tài sinh viên. Chủ nhiệm đề tài mở lên là biết ngay đề tài đang ở giai đoạn nào qua một **Trạng thái tổng quan đề tài** duy nhất. P.KHCN quản lý đợt đăng ký, ba Hội đồng, Cuộc họp Hội đồng, phiếu đánh giá, biên bản hai chữ ký và các Quyết định trong một luồng có kiểm soát trạng thái, thay vì đối chiếu file Excel bằng mắt. Thành viên Hội đồng — kể cả người ngoài trường — nhận thông báo, đọc hồ sơ và nộp phiếu đánh giá đúng thời gian Cuộc họp.

Nguyên tắc trung tâm, quyết định toàn bộ phạm vi: **hệ thống quản lý hồ sơ, biểu mẫu, vai trò, trạng thái và bằng chứng đã ký; hệ thống không thay thế thảo luận chuyên môn, ký quyết định, ký hợp đồng hay thanh toán.** Chữ ký vẫn diễn ra trên giấy/PDF bên ngoài; hệ thống là nơi lưu bằng chứng và kiểm soát ai được làm gì, khi nào. Đây là module đầu tiên trong 5 module của quy trình P.KHCN; nếu chạy ổn định, cùng kiến trúc sẽ mở rộng cho 4 module còn lại.

## 2. Đối tượng sử dụng

### 2.1 Việc cần hoàn thành (Jobs To Be Done)

- **Chủ nhiệm đề tài (giảng viên hoặc sinh viên)** — "Tôi cần biết hồ sơ của tôi đang ở bước nào, ai đang xử lý, và tôi phải nộp/sửa gì tiếp, mà không phải đi hỏi Khoa hay P.KHCN." Kèm nhu cầu cảm xúc: không bị bất ngờ vì quá hạn hay vì hồ sơ bị trả mà không ai nói.
- **Trưởng Khoa/Trưởng đơn vị** — "Tôi cần duyệt nhanh hồ sơ giảng viên của đơn vị mình, thấy rõ hồ sơ nào đang chờ tôi, và trả lại kèm lý do khi thiếu."
- **P.KHCN** — "Tôi cần vận hành cả đợt đăng ký và ba Hội đồng cho nhiều đề tài song song mà không mất dấu: ai đã nộp phiếu, biên bản nào đang chờ tôi ký, đề tài nào đang tắc." Kèm nhu cầu nghề nghiệp: mọi quyết định hành chính đều có dấu vết để giải trình.
- **Thành viên Hội đồng** (có thể ngoài trường) — "Tôi cần đọc được hồ sơ/thuyết minh cần đánh giá và nộp phiếu của tôi trong thời gian họp, không phải cài đặt gì phức tạp."
- **Thư ký Hội đồng** — "Tôi cần lập biên bản ngay khi phiếu đã đủ 100%, không phải tự đi đếm phiếu hay chờ ai xác nhận bằng miệng."
- **Quản trị viên** — "Tôi cần duyệt tài khoản, khóa/mở khóa, và cấu hình mốc thời gian cho cả quy trình, mà không bị lôi vào nghiệp vụ xét duyệt NCKH."
- **Nhóm thực hiện đồ án** — "Tôi cần một đặc tả đủ chặt để triển khai trong 3 tháng và bảo vệ được trước hội đồng đồ án."

### 2.2 Người không dùng hệ thống (v1)

- **Thành viên nhóm nghiên cứu ngoài Chủ nhiệm** — chỉ là dữ liệu trong hồ sơ, không đăng nhập, không xem/sửa/ký/nộp.
- **Hiệu trưởng / Đại diện Nhà trường** — ký Quyết định và hợp đồng bên ngoài hệ thống.
- **Phòng Tài chính - Kế toán** — toàn bộ nghiệp vụ tài chính nằm ngoài phạm vi.
- **Giảng viên hướng dẫn như một tài khoản riêng** — đây là _vai trò_ của tài khoản Giảng viên trên đề tài sinh viên được gán, không phải actor độc lập.
- Tổ chức phối hợp, thư ký khoa học của đề tài, thư viện.

### 2.3 Hành trình người dùng chính (Key User Journeys)

- **UJ-1. Cô Hạnh nộp hồ sơ đề tài giảng viên và biết chính xác khi nào Khoa trả lại.**
  Cô Hạnh, giảng viên khoa CNTT, có ý tưởng đề tài và mở hệ thống trong đợt đăng ký đang mở. Đã đăng nhập bằng email `@dntu.edu.vn`, vai trò Giảng viên đã được Quản trị viên duyệt từ trước. Cô tạo hồ sơ ở trạng thái nháp — **nháp thì thoải mái, hệ thống không đếm nháp vào giới hạn** — khai thông tin đề tài và nhóm nghiên cứu, lưu đi lưu lại nhiều lần. Cô bấm Xem trước BM01A, xuất PDF, **ký số bằng công cụ ký số của mình bên ngoài hệ thống**, tải PDF đã ký lên, rồi bấm **Nộp**. Đúng lúc bấm **Nộp** hệ thống mới tính giới hạn và cho biết cô đang có 1/2 đề tài đang đợi xử lý. Form khóa lại, Trạng thái tổng quan chuyển `Đang đợi khoa duyệt` — với hồ sơ sinh viên, trạng thái tương ứng là `Đang đợi giảng viên duyệt` — và chuông của Trưởng Khoa sáng. Hai ngày sau cô nhận thông báo hồ sơ bị trả kèm lý do "thiếu mô tả sản phẩm dự kiến"; trạng thái là `Trả chỉnh sửa`. Cô sửa, và hệ thống nói rõ: BM01 cũ đã mất hiệu lực, phải xuất PDF mới và **ký số lại** bản mới. Cô nộp lại trước hạn đợt, trạng thái `Chờ duyệt lại`. **Edge case:** nếu cô sửa xong sau khi đợt đã hết hạn, hệ thống không cho nộp lại và hồ sơ chuyển `Quá hạn` — suất đăng ký được giải phóng khỏi giới hạn của cô, và một hồ sơ nháp bất kỳ của cô lại nộp được ở đợt sau.
  Xem DEC-QUOTA (§14).
  Xem DEC-NOSIG (§14).

- **UJ-2. Chị Thu (P.KHCN) mở Cuộc họp Hội đồng xét duyệt hồ sơ cho cả đợt tuyển chọn cùng lúc.**
  Chị Thu, chuyên viên P.KHCN, đợi đợt đăng ký tuyển chọn đóng theo mốc thời gian đã đặt; tới lúc đó chị đã có đủ hồ sơ được Khoa và Giảng viên hướng dẫn duyệt chuyển sang. Chị tạo Hội đồng xét duyệt hồ sơ ở trạng thái `Nháp`, thêm 5 người: chính chị với vai trò **Chủ tịch**, 3 Thành viên đánh giá, 1 Thư ký. Một Thành viên là PGS ngoài trường, email `@gmail.com` — chị thêm email vào Hội đồng, người đó thành Thành viên ngay và hệ thống gửi email mời tạo tài khoản. Vì đây là đợt **tuyển chọn**, chị không phải chọn từng đề tài: **hệ thống đưa toàn bộ hồ sơ đủ điều kiện của đợt vào lượt xét duyệt này**, chị chỉ xác nhận danh sách 12 hồ sơ. (Với **đề tài giao trực tiếp** thì ngược lại — mốc thời gian do chính chị đặt và mỗi đề tài đi theo nhịp riêng, nên chị **tự chọn từng đề tài** để đưa vào Cuộc họp, xem UJ-3 và UJ-6.) Khi mọi thành viên đã có tài khoản hoạt động, chị bấm **Mở Cuộc họp** — hệ thống khóa cấu trúc Hội đồng và mở quyền nộp phiếu BM02. **Climax:** dashboard của chị hiện `2/4 phiếu`, và chị thấy rõ hai người còn thiếu là ai. **Resolution:** Cuộc họp đang diễn ra, chị không sửa được thành viên nữa; nếu phát hiện danh sách hồ sơ sai, đường duy nhất là hủy Cuộc họp kèm lý do và tạo Cuộc họp thay thế có liên kết lịch sử.
  Xem DEC-ASSIGN (§14).

- **UJ-3. Anh Khoa (Thư ký) lập Biên bản họp Hội đồng nghiệm thu cho từng đề tài, ngay khi phiếu vừa đủ 100%.**
  Anh Khoa là Thư ký Hội đồng nghiệm thu, không phải người đánh giá nên không nộp phiếu. Cuộc họp nghiệm thu hôm nay bàn 3 đề tài giao trực tiếp mà chị Thu đã chọn khi tạo Cuộc họp. Trong thời gian Cuộc họp, anh chỉ thấy tiến độ nộp phiếu, không xem được nội dung phiếu nháp của người khác. Đúng lúc thành viên cuối cùng nộp BM11 cho đề tài thứ nhất, hệ thống khóa nhận phiếu của **đề tài đó** và mở **bước lập "Biên bản họp Hội đồng nghiệm thu đề tài nghiên cứu khoa học cấp trường" (BM12)** cho anh, kèm thông báo chuông. **Biên bản nghiệm thu chỉ đứng tên một đề tài**, nên anh lập ba biên bản riêng cho ba đề tài trong cùng Cuộc họp này. Anh nhập biên bản dựa trên kết luận Hội đồng đã bàn bên ngoài, xuất PDF, ký số, tải lên, nộp cho P.KHCN. **Climax:** P.KHCN kiểm tra, trả lại kèm lý do "sai ngày họp"; PDF và chữ ký của anh mất hiệu lực, anh sửa form, xuất và ký lại bản mới, nộp lại — vẫn trong thời gian Cuộc họp. Lần này P.KHCN tải xuống, ký thêm chữ ký Chủ tịch bên ngoài, tải bản đủ hai chữ ký lên và xác nhận hoàn tất. **Resolution:** Cuộc họp được kết thúc khi cả ba biên bản đã đủ hai chữ ký; kết quả ở `Chờ công bố` — chưa ai ngoài P.KHCN/Chủ tịch/Thư ký thấy kết quả tổng hợp cho đến khi chị Thu bấm Công bố.
  **Phạm vi Cuộc họp theo hình thức đề tài:** đề tài `Tuyển chọn` — một Cuộc họp cho **toàn bộ** đề tài của đợt; đề tài `Giao trực tiếp` — P.KHCN chọn đề tài khi tạo Cuộc họp, có thể một Cuộc họp một đề tài.
  Xem DEC-BIENBAN (§14).

- **UJ-4. Bạn Minh (sinh viên) đọc Quyết định công nhận kết quả như đọc một bài blog.**
  Minh, sinh viên năm 3, chủ nhiệm đề tài sinh viên vừa nghiệm thu đạt. Đang ở màn hình chi tiết đề tài, Minh thấy chuông sáng: "P.KHCN đã đăng Quyết định công nhận kết quả đề tài (BM15)". Minh nhấp vào và mở ra một trang đọc nội dung Quyết định trình bày như bài viết, kèm tệp Quyết định đã ký để tải về. Trạng thái tổng quan đề tài của Minh chuyển sang bước cuối; sau đó P.KHCN/Khoa cập nhật trạng thái cuối là `Lưu hồ sơ` hoặc `Triển khai ứng dụng`. **Edge case:** trước khi Quyết định được đăng, Minh không thấy gì ngoài trạng thái `Đã nghiệm thu` — không có kênh nào để đọc kết quả sớm hơn.

- **UJ-5. Thầy Nam (ngoài trường) tạo tài khoản từ email mời và vào đúng Hội đồng.**
  Thầy Nam nhận email mời tham gia Hội đồng xét duyệt thuyết minh với vai trò Thành viên. Thầy nhấp link, xác minh email (miền ngoài trường được phép), đặt mật khẩu, cập nhật Hồ sơ cá nhân. Không có bước "chấp nhận lời mời họp" — thầy **đã là** Thành viên từ lúc P.KHCN thêm email vào Hội đồng; việc tạo tài khoản chỉ là để đăng nhập được. Đăng nhập xong, thầy thấy đúng một Hội đồng, đúng các đề tài trong lượt, tải được BM04 thuyết minh để đọc. **Edge case:** nếu email của thầy đã có tài khoản trong hệ thống (do từng tham gia Hội đồng khác), hệ thống không tạo tài khoản trùng — chỉ gán thêm vai trò vào tài khoản cũ và thông báo cho thầy.

- **UJ-6. Chị Thu cấu hình sẵn toàn bộ lịch của đề tài giao trực tiếp; chủ nhiệm mở lên là thấy cả đường đi.**
  Đề tài **giao trực tiếp** vẫn là một danh mục có hạn đăng ký, nhưng khác đề tài tuyển chọn ở chỗ **mốc không bị Quản trị viên cấu hình sẵn**: chị Thu tự đặt — và đặt **sẵn một lượt cho cả quy trình** — hạn đăng ký của danh mục, hạn nộp thuyết minh, ngày tới buổi thuyết minh, hạn báo cáo giữa kỳ, hạn báo cáo tổng kết, ngày họp Hội đồng nghiệm thu. Nhờ vậy đề tài có đủ lịch ngay từ khi hình thành. Thầy Bình, chủ nhiệm đề tài đó, mở màn hình chi tiết đề tài và thấy **dòng thời gian 9 bước**: bước nào đã qua, bước nào đang mở, hạn của từng bước, việc nào đang chờ chính mình — không phải đi hỏi ai. Thầy bấm sang mục **Lịch**, xem dạng tháng như Google Calendar, thấy "23/9 — hạn nộp BM04" và "05/10 — họp Hội đồng xét duyệt thuyết minh" nằm đúng ngày; nhấp vào sự kiện là mở đúng biểu mẫu cần nộp. Với đề tài **tuyển chọn**, mốc thời gian gắn vào Đợt đăng ký và vẫn do Quản trị viên xác lập; khi Khoa xin gia hạn nộp báo cáo giữa kỳ của một đề tài tuyển chọn, chị Thu không tự sửa được — chị yêu cầu Quản trị viên đổi mốc thời hạn BM08, và việc đó **phải xong trước khi mốc cũ hết**: qua mốc là hệ thống tự khóa đề tài ở trạng thái `Quá hạn giữa quy trình` và không còn đường cứu (FR-83). Cả hai đường đều để lại dấu vết và **cập nhật ngay trên dòng thời gian và Lịch của người liên quan**: hệ thống áp mốc mới, người liên quan nhận thông báo thay đổi, và audit log ghi ai đổi cái gì lúc nào.
  Xem DEC-MOC (§14).
  Xem DEC-GAOTRUCTIEP (§14).
  Xem DEC-TIMELINE (§14).

## 3. Thuật ngữ (Glossary)

_Downstream (UX, architecture, epics/stories) và mọi FR/UJ/SM trong PRD này phải dùng chính xác các thuật ngữ dưới đây. Không dùng từ đồng nghĩa ở bất kỳ đâu trong tài liệu._

- **Đợt đăng ký** — Khoảng thời gian và tập cấu hình mà trong đó Hồ sơ đăng ký được nộp. Có trạng thái `Nháp` → `Đã công bố` → `Đã đóng`. Chứa 0..n **Đề tài giao trực tiếp** (nhánh `Giao trực tiếp`, mốc thời gian do P.KHCN tự đặt) song song với nhánh `Tuyển chọn` (mốc do Quản trị viên đặt). Đóng **tự động khi hết hạn** của cả hai nhánh; không có thao tác đóng thủ công trước hạn.
- **Đề tài giao trực tiếp** — Một đề tài do P.KHCN định trước trong danh mục của Đợt đăng ký, có đúng **1 suất**, thuộc về Hồ sơ đăng ký được Trưởng Khoa/Trưởng đơn vị duyệt sớm nhất. Khác nhánh `Tuyển chọn` ở chỗ **mốc thời gian của nó do P.KHCN tự đặt**, không do Quản trị viên cấu hình sẵn (xem Mốc thời gian, FR-72).
- **Hình thức đăng ký** — `Tuyển chọn` (người đăng ký tự đề xuất đề tài) hoặc `Giao trực tiếp` (chọn từ danh mục Đề tài giao trực tiếp của Đợt đăng ký).
- **Giới hạn đề tài đăng ký** — Tối đa **2 đề tài đang đợi xử lý / người**, đếm từ mốc **Nộp** (hồ sơ nháp không tính, không giới hạn số nháp), tính chung cả hai Hình thức đăng ký, áp cho Chủ nhiệm đề tài và mọi thành viên nhóm nghiên cứu; **không** áp cho Giảng viên hướng dẫn. Suất được nhả khi đề tài rời khỏi trạng thái "đang đợi xử lý" — bao gồm cả trường hợp kết thúc âm (trượt Hội đồng, quá hạn giữa quy trình) tại mốc công bố kết quả hoặc mốc chuyển trạng thái kết thúc. Chi tiết tại FR-13.
- **Hồ sơ đăng ký** — Đơn vị dữ liệu do Chủ nhiệm đề tài tạo trong một Đợt đăng ký, gồm thông tin đề tài, nhóm nghiên cứu và BM01. Có lịch sử phiên bản qua các vòng trả sửa. Khi qua Xét duyệt hồ sơ, trở thành đầu vào của **Đề tài NCKH**.
- **Đề tài NCKH** — Thực thể vòng đời kéo dài qua 9 bước quy trình, hình thành từ Hồ sơ đăng ký đã qua Xét duyệt hồ sơ. Mang **Trạng thái tổng quan đề tài** và liên kết tới các Biểu mẫu, Hội đồng, Hợp đồng, Quyết định của nó.
- **Trạng thái tổng quan đề tài** — Một trạng thái duy nhất hiển thị trên UI, **dẫn xuất** từ trạng thái chi tiết của Hồ sơ đăng ký / Đề tài NCKH / Hội đồng / Biểu mẫu. Tập giá trị chốt tại §4.10.
- **Quá hạn giữa quy trình** — Trạng thái tổng quan đề tài cho trường hợp đề tài đã qua bước 01 nhưng bỏ mốc bắt buộc của bước 03–07 (BM04, BM08, BM09, BM13). **Hệ thống tự chuyển** trạng thái này ngay khi mốc hết và **khóa đề tài**; không có gia hạn, không hoàn tác. Đây là trạng thái **kết thúc âm** — nhả suất Giới hạn đề tài đăng ký. Xem FR-83.
- **Nhóm nghiên cứu** — Danh sách người tham gia đề tài ngoài Chủ nhiệm đề tài. Là **dữ liệu hồ sơ**, không phải người dùng hệ thống; vẫn bị tính vào Giới hạn đề tài đăng ký.
- **Chủ nhiệm đề tài** — Vai trò của người đứng đầu một Đề tài NCKH; cụ thể là Giảng viên hoặc Sinh viên. Là người duy nhất trong Nhóm nghiên cứu có quyền thao tác trên hệ thống.
- **Giảng viên hướng dẫn** — **Vai trò** của tài khoản Giảng viên trên một Đề tài NCKH của Sinh viên được gán. Không phải Tài khoản hay actor riêng. Chỉ Đề tài NCKH của Sinh viên có vai trò này.
- **Trưởng Khoa/Trưởng đơn vị** — Actor thực hiện **Xét duyệt hồ sơ** đối với Hồ sơ đăng ký của Giảng viên thuộc đơn vị mình; dùng **Tài khoản riêng**, không dùng tài khoản Giảng viên.
- **P.KHCN** — Actor quản trị hành chính (Đợt đăng ký, Hội đồng, Cuộc họp Hội đồng, Biên bản Hội đồng, Quyết định, Hợp đồng). **Đồng thời giữ vai trò Chủ tịch Hội đồng** ở cả ba Hội đồng.
- **Quản trị viên** — Actor kỹ thuật, tách biệt với P.KHCN. Quản lý vòng đời Tài khoản và **cấu hình mốc thời gian** cho quy trình. Không thực hiện nghiệp vụ xét duyệt NCKH trừ khi được cấp thêm Vai trò.
- **Xét duyệt hồ sơ** — Bước duyệt Hồ sơ đăng ký ở **bước 01**, trước khi hồ sơ vào tập đủ điều kiện lập Hội đồng: Trưởng Khoa/Trưởng đơn vị duyệt hồ sơ Giảng viên; Giảng viên hướng dẫn duyệt hồ sơ Sinh viên. Kết quả chỉ có **duyệt** hoặc **trả chỉnh sửa** (bắt buộc lý do) — **không có từ chối dứt điểm**; hồ sơ chỉ dừng hẳn khi hết hạn đăng ký hoặc khi được chấp thuận hủy. **Không lẫn với Hội đồng xét duyệt hồ sơ (bước 02)** — khi nói về bước 02, tài liệu luôn viết đủ chữ **Hội đồng**.
- **Hội đồng** — Tập hợp người được P.KHCN lập cho **một lượt** ở một trong ba giai đoạn: **Hội đồng xét duyệt hồ sơ** (bước 02), **Hội đồng xét duyệt thuyết minh** (bước 04), **Hội đồng nghiệm thu** (bước 07). Mỗi Hội đồng có đúng **1 Chủ tịch (= P.KHCN)** và **1 Thư ký Hội đồng**. Lập mới hoàn toàn cho mỗi lượt; không sao chép Hội đồng cũ.
- **Chủ tịch Hội đồng** — Vai trò trong Hội đồng do P.KHCN giữ. **Là người đánh giá**: phải nộp Phiếu đánh giá và được tính vào mẫu số 100%. Là người ký chữ ký thứ hai trên Biên bản Hội đồng.
- **Thành viên Hội đồng** — Vai trò người đánh giá trong Hội đồng (bao gồm Chủ tịch Hội đồng, **không** bao gồm Thư ký Hội đồng). Nộp Phiếu đánh giá.
- **Thư ký Hội đồng** — Vai trò thuộc cơ cấu Hội đồng nhưng **không đánh giá**: không nộp Phiếu đánh giá, không tính vào mẫu số 100%. Lập, ký và nộp Biên bản Hội đồng.
- **Cuộc họp Hội đồng** — Thực thể riêng thuộc một Hội đồng, quản lý thời gian và trạng thái `Nháp` → `Đang diễn ra` → `Đã kết thúc` / `Đã hủy`. Hệ thống **không** tổ chức họp trực tuyến, ghi âm, ghi hình hay quản lý nội dung thảo luận. Mở Cuộc họp Hội đồng là **mốc khóa cấu trúc Hội đồng**.
- **Phiếu đánh giá** — Biểu mẫu đánh giá cá nhân của một Thành viên Hội đồng cho **một đề tài**: BM02 (xét duyệt hồ sơ), BM06 (xét duyệt thuyết minh), BM11 (nghiệm thu). Lượt có n đề tài thì mỗi Thành viên nộp n phiếu. Chỉ nộp được trong thời gian Cuộc họp Hội đồng; đã nộp thì **không sửa, không rút lại**.
- **Mốc chốt phiếu** — Dấu mốc **bất biến** hệ thống tự tạo khi đủ **100% Phiếu đánh giá hợp lệ** trong phạm vi của nó. Xem FR-36.
- **Đủ 100% phiếu** — `số Phiếu đánh giá hợp lệ đã nộp = số Phiếu đánh giá phải có trong phạm vi chốt`. Mẫu số **gồm** Chủ tịch Hội đồng, **không gồm** Thư ký Hội đồng. Xem FR-36.
- **Biên bản Hội đồng** — Biểu mẫu kết luận của Hội đồng: BM03, BM07, BM12. Chỉ mở sau Mốc chốt phiếu; đi theo **Luồng hai chữ ký**. **Đơn vị lập:** BM03 và BM07 là **1 biên bản / 1 lượt**, ghi nhiều đề tài; BM12 là **1 biên bản / 1 đề tài**. Xem FR-38.
- **Luồng hai chữ ký** — Luồng hoàn tất Biên bản Hội đồng: Thư ký Hội đồng lập → xuất PDF → ký → nộp → P.KHCN kiểm tra → [trả sửa kèm lý do, lặp lại] hoặc tải xuống → Chủ tịch Hội đồng ký thêm bên ngoài → tải bản đủ hai chữ ký lên → xác nhận hoàn tất.
- **Pipeline form/PDF** — Luồng dùng chung cho mọi Biểu mẫu có form nhập: nhập/lưu form → xem trước → xuất PDF → **ký bên ngoài hệ thống** → tải PDF đã ký lên → bấm **Nộp** → khóa form. **Nộp** là mốc khóa duy nhất. Hệ thống **không** kiểm tra tính hợp lệ của chữ ký.
- **Biểu mẫu** — Một trong BM01–BM15. Phân ba loại: **BM có form nhập** (BM01, 02, 03, 06, 07, 08, 11, 12, 13), **BM tải tệp hoàn chỉnh** (BM04, BM09, BM14), **Quyết định** (BM05, BM10, BM15). Ma trận đầy đủ ở §4.9.
- **Quyết định** — BM05 (giao nhiệm vụ), BM10 (thành lập Hội đồng nghiệm thu), BM15 (công nhận kết quả). Được lập và ký **hoàn toàn bên ngoài**; P.KHCN đăng nội dung + tệp; người liên quan đọc dạng **trang bài đọc** qua thông báo chuông.
- **Hợp đồng** — Hợp đồng thực hiện đề tài và Thanh lý hợp đồng (BM14). Ký và xử lý hoàn toàn bên ngoài; hệ thống chỉ lưu tệp đã ký và cho xem/tải.
- **Tài khoản** — Định danh đăng nhập bằng **email + mật khẩu**. MVP **không** có đăng nhập bằng bên thứ ba (Google, SSO…). Một Tài khoản mang 1..n **Vai trò**. Trạng thái: `Chờ xác nhận vai trò` → `Hoạt động` / `Bị khóa`.
- **Con người** — Thực thể vật lý (cá nhân) dùng hệ thống; được định danh bằng **mã định danh duy nhất toàn hệ thống** (mã Giảng viên hoặc mã Sinh viên). Một Con người thường chỉ cần **một** Tài khoản, và Tài khoản đó mang được nhiều Vai trò cùng lúc (FR-7). Mọi quy tắc đếm/chặn theo cá nhân (Giới hạn đề tài đăng ký, lệnh cấm đăng ký) đối chiếu theo Con người, không theo Tài khoản.
- **Vai trò** — Đơn vị phân quyền **cấp hệ thống** (Giảng viên, Sinh viên, Trưởng Khoa/Trưởng đơn vị, P.KHCN, Thành viên Hội đồng, Thư ký Hội đồng, Quản trị viên). Vai trò Hội đồng được gán **theo từng Hội đồng**. Tập này đóng — hệ thống không cho tạo Vai trò mới (§5).
- **Vai trò ngữ cảnh** — Tư cách gắn với một đối tượng nghiệp vụ cụ thể, không phải đơn vị phân quyền cấp hệ thống. Ví dụ: _Chủ nhiệm đề tài_ (gắn một Đề tài NCKH), _Giảng viên hướng dẫn_ (gắn một Đề tài NCKH của Sinh viên), _Chủ tịch Hội đồng_ (gắn một Hội đồng cụ thể). Vai trò ngữ cảnh xác định quyền **trong phạm vi đối tượng đó**, không thay đổi tập 7 Vai trò hệ thống.
- **Quyền chức năng** — Đơn vị phân quyền mịn hơn Vai trò: từng hành vi cụ thể có thể được bật/tắt cho một Vai trò. Mô hình phân quyền của hệ thống là **permission-based**: một Vai trò mang **nhiều Quyền chức năng**, và mọi kiểm tra ở phía server đối chiếu Quyền chức năng, không đối chiếu tên Vai trò.
- **Kiểm tra phạm vi dữ liệu** — Lớp kiểm tra thứ hai chồng lên Quyền chức năng: có quyền không đủ để truy cập một đối tượng cụ thể, đối tượng đó còn phải **thuộc phạm vi** của người dùng (đề tài của mình, đơn vị của mình, Hội đồng của mình, lượt xét duyệt của mình). Ví dụ: Thư ký Hội đồng có quyền xem danh sách Biên bản Hội đồng, nhưng chỉ thấy biên bản của **Hội đồng mà chính mình làm Thư ký**. Xem FR-87.
- **Mốc thời gian** — Cấu hình thời hạn cho Đợt đăng ký, từng bước nghiệp vụ, và thời hạn nộp/sửa/nộp lại của từng Biểu mẫu/tài liệu. Quyền đặt chia theo phạm vi: **Quản trị viên** đặt mốc của nhánh `Tuyển chọn` và mốc mặc định; **P.KHCN** tự đặt mốc của nhánh `Giao trực tiếp`.
- **Dòng thời gian đề tài** — Cách trình bày 9 bước quy trình trên trang chi tiết đề tài. Chi tiết ở §4.13.
- **Lịch** — Màn hình xem các Mốc thời gian liên quan trên một **lịch tháng** (chỉ có chế độ xem tháng). **Chỉ đọc**. Chi tiết ở §4.13.
- **Thông báo** — Sự kiện được đẩy tới người nhận qua **hai kênh: chuông trong ứng dụng và email**. Danh sách sự kiện tại §4.11.
- **Audit log** — Bản ghi **bất biến** của các thao tác quan trọng: ai, làm gì, lúc nào, trên đối tượng nào, lý do (khi bắt buộc).

### 3.1 Chín bước quy trình

Quy trình chính thức quản lý thực hiện đề tài NCKH cấp trường của P.KHCN gồm 9 bước tuần tự. Bảng dưới đây là **ánh xạ có thẩm quyền duy nhất** giữa số bước và nội dung tương ứng trong hệ thống.

| Bước | Tên bước                            | Actor giữ việc chính                                                             | Biểu mẫu của bước                                 | Gate chuyển bước                                       | FR liên quan                             |
| ---- | ----------------------------------- | -------------------------------------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------------ | ---------------------------------------- |
| 01   | Đăng ký đề tài và Xét duyệt hồ sơ   | Chủ nhiệm đề tài → Trưởng Khoa/Trưởng đơn vị (GV) hoặc Giảng viên hướng dẫn (SV) | BM01A/B                                           | Hồ sơ được duyệt                                       | FR-16..FR-25, FR-79                      |
| 02   | Xét duyệt hồ sơ bởi Hội đồng        | P.KHCN, Thành viên HĐ xét duyệt hồ sơ, Thư ký HĐ                                 | BM02, BM03                                        | BM03 đủ hai chữ ký + công bố kết quả đạt               | FR-26..FR-46                             |
| 03   | Nộp thuyết minh và dự trù kinh phí  | Chủ nhiệm đề tài                                                                 | BM04A/B                                           | BM04 được tải lên trong hạn                            | FR-47                                    |
| 04   | Xét duyệt thuyết minh bởi Hội đồng  | P.KHCN, Thành viên HĐ xét duyệt thuyết minh, Thư ký HĐ                           | BM06, BM07                                        | BM07 đủ hai chữ ký + công bố kết quả "Thực hiện"       | FR-26..FR-46                             |
| 05   | Giao nhiệm vụ và Hợp đồng           | P.KHCN                                                                           | BM05, Hợp đồng (GV)                               | BM05 đã đăng (+ Hợp đồng đã lưu nếu đề tài GV)         | FR-54, FR-56                             |
| 06   | Thực hiện đề tài và báo cáo tiến độ | Chủ nhiệm đề tài → Trưởng Khoa/Trưởng đơn vị → P.KHCN                            | BM08                                              | BM08 đã qua luồng ký tuần tự + BM09 và sản phẩm đã nộp | FR-48, FR-49                             |
| 07   | Nghiệm thu và giải trình            | P.KHCN, Thành viên HĐ nghiệm thu, Thư ký HĐ, Chủ nhiệm đề tài                    | BM10, BM11, BM12, BM13 (nếu có), BM14 (nếu có HĐ) | P.KHCN xác nhận Hoàn tất Bước 07 (FR-52)               | FR-26..FR-46, FR-50..FR-52, FR-54, FR-58 |
| 08   | Công nhận kết quả                   | P.KHCN                                                                           | BM15                                              | BM15 đã đăng                                           | FR-54                                    |
| 09   | Cập nhật trạng thái cuối            | P.KHCN                                                                           | —                                                 | P.KHCN đặt `Triển khai ứng dụng` hoặc `Lưu hồ sơ`      | FR-59                                    |

**Ghi chú ánh xạ bước → §4:**

- Bước 01 → §4.3
- Bước 02 → §4.4, §4.5, §4.6
- Bước 03 → §4.7
- Bước 04 → §4.4, §4.5, §4.6, §4.7
- Bước 05 → §4.8
- Bước 06 → §4.7
- Bước 07 → §4.4, §4.5, §4.6, §4.7, §4.8
- Bước 08 → §4.8
- Bước 09 → §4.8

**Đã chốt (2026-08-19):** Lưu đồ gốc (.pptx) không đọc được trực tiếp bằng công cụ text, nên ánh xạ 9 bước ở bảng trên được suy từ ma trận BM01–BM15 (FR-65), bảng trạng thái (FR-68) và ngữ cảnh các FR. **Bảng này là ánh xạ chính thức của PRD** và là nguồn duy nhất cho mọi tham chiếu "bước 0x" ở downstream. Xem DEC-OQ35 (§14).

## 4. Tính năng

_FR đánh số toàn cục và **ổn định**: mã FR không đổi khi tài liệu được tổ chức lại, nên số FR trong một mục có thể không liên tục (FR-75 đến FR-82 được bổ sung sau vòng review, đặt vào mục phù hợp thay vì đánh số lại toàn bộ). Mỗi FR ghi mã `UC-*` truy vết về danh mục use case chi tiết gốc khi có._

**Chỉ mục FR → mục chứa:**

| FR                              | Mục   | FR                  | Mục   | FR                         | Mục   |
| ------------------------------- | ----- | ------------------- | ----- | -------------------------- | ----- |
| FR-1..FR-8, FR-75, FR-84, FR-87 | §4.1  | FR-9..FR-15         | §4.2  | FR-16..FR-25, FR-79, FR-86 | §4.3  |
| FR-26..FR-34, FR-77             | §4.4  | FR-35..FR-37, FR-78 | §4.5  | FR-38..FR-46               | §4.6  |
| FR-47..FR-53                    | §4.7  | FR-54..FR-59        | §4.8  | FR-60..FR-66               | §4.9  |
| FR-67..FR-68, FR-76, FR-83      | §4.10 | FR-69..FR-71        | §4.11 | FR-72..FR-74               | §4.12 |
| FR-80..FR-82                    | §4.13 | FR-85               | §4.14 |                            |       |

### 4.1 Tài khoản, Vai trò và Phân quyền

**Mô tả:** Hệ thống có hai đường vào tài khoản.

**Đường 1 — Giảng viên và Sinh viên.** Họ **tự đăng ký** bằng email miền trường: chọn Vai trò đăng ký (Giảng viên hoặc Sinh viên), khai mã giảng viên hoặc mã sinh viên, khai thông tin cá nhân tương ứng, rồi **chờ Quản trị viên duyệt**. Ai không muốn tự đăng ký thì **nhờ Quản trị viên cấp tài khoản** trực tiếp — tài khoản cấp theo đường này hoạt động ngay, không qua hàng chờ duyệt.

**Đường 2 — Thành viên Hội đồng và Thư ký Hội đồng.** Những người này **có thể ở ngoài trường, dùng email miền khác**, và **không tự đăng ký công khai**. P.KHCN thêm email vào Hội đồng: người đó **trở thành thành viên ngay tại thời điểm thêm**, và hệ thống gửi email mời tạo tài khoản để họ đăng nhập được. **Vai trò được gán theo đúng lời mời** — mời làm Thành viên Hội đồng thì có Vai trò Thành viên Hội đồng, mời làm Thư ký thì có Vai trò Thư ký Hội đồng. Việc tạo tài khoản **không phải** bước chấp nhận lời mời họp.

**Đăng nhập:** chỉ bằng **email và mật khẩu**. MVP **chưa** tích hợp đăng nhập bằng bên thứ ba (Google, SSO…).

**Phân quyền:** mô hình **permission-based** — một Vai trò mang nhiều Quyền chức năng, và server kiểm tra Quyền chức năng chứ không kiểm tra tên Vai trò. Chồng lên đó là lớp **kiểm tra phạm vi dữ liệu** sâu hơn: ví dụ Thư ký Hội đồng có quyền xem danh sách Biên bản Hội đồng, nhưng chỉ thấy biên bản của Hội đồng mà chính mình làm Thư ký, không thấy của người khác. Hiện thực UJ-5, UJ-6.

**Yêu cầu chức năng:**

#### FR-1: Đăng nhập bằng email và mật khẩu

Người có Tài khoản `Hoạt động` có thể đăng nhập bằng email và mật khẩu.
**Hệ quả (kiểm chứng được):**

- Đây là **cách đăng nhập duy nhất** trong MVP; hệ thống không có nút đăng nhập bằng Google hay bất kỳ nhà cung cấp danh tính bên thứ ba nào.
- Tài khoản ở trạng thái `Chờ xác nhận vai trò` đăng nhập được nhưng chỉ thấy trang Hồ sơ cá nhân và thông báo chờ duyệt; không truy cập được bất kỳ chức năng nghiệp vụ nào.
- Tài khoản `Bị khóa` không đăng nhập được và nhận thông báo lý do bị khóa.
- Email chưa có Tài khoản trong hệ thống không đăng nhập được; hệ thống báo email chưa được cấp quyền truy cập và chỉ dẫn đường đăng ký (FR-2) hoặc liên hệ Quản trị viên (FR-4).
  **Ngoài phạm vi:**
- Đăng nhập bằng Google, Microsoft, SSO của trường hoặc bất kỳ nhà cung cấp bên thứ ba nào (ứng viên v2 — xem §6.2).

#### FR-2: Tự đăng ký Tài khoản bằng email miền trường

Giảng viên và Sinh viên có thể tự đăng ký bằng email thuộc miền trường, xác minh email, **chọn Vai trò đăng ký** (Giảng viên / Sinh viên), nhập **mã giảng viên hoặc mã sinh viên** và khai thông tin cá nhân tương ứng, rồi chờ Quản trị viên duyệt. Truy vết UC-ACT-04.
**Hệ quả (kiểm chứng được):**

- Email không thuộc danh sách miền trường được cấu hình bị từ chối tại bước đăng ký với thông báo rõ lý do. Miền là **danh sách cấu hình được** do Quản trị viên quản lý, mặc định gồm `@dntu.edu.vn` cho Giảng viên và miền sinh viên của trường; PRD không hard-code giá trị (DEC-OQ4, §14).
- Vai trò đăng ký chỉ có hai giá trị: **Giảng viên** hoặc **Sinh viên**. Các Vai trò còn lại (Trưởng Khoa/Trưởng đơn vị, P.KHCN, Thành viên Hội đồng, Thư ký Hội đồng, Quản trị viên) **không** chọn được ở đây; chúng đi qua FR-4, FR-5 hoặc FR-84.
- Bộ thông tin phải khai khác nhau theo Vai trò đăng ký: hồ sơ Giảng viên khai đơn vị và học hàm/học vị; hồ sơ Sinh viên khai khóa/lớp/ngành. Bộ trường đầy đủ chốt trong data dictionary BM01 (FR-66) vì Hồ sơ cá nhân là nguồn điền tự động cho biểu mẫu (FR-75) — DEC-OQ4.
- Sau khi xác minh email thành công, Tài khoản ở trạng thái `Chờ xác nhận vai trò` và xuất hiện trong danh sách chờ duyệt của Quản trị viên.
- Mã định danh (mã Giảng viên/mã Sinh viên) là bắt buộc và duy nhất trên thực thể **Con người** — hai Tài khoản của cùng một Con người chia sẻ cùng mã định danh.
- Tự đăng ký **không phải** đường duy nhất: Giảng viên/Sinh viên có thể nhờ Quản trị viên cấp tài khoản trực tiếp (FR-4).

#### FR-3: Quản trị viên duyệt hoặc từ chối yêu cầu Vai trò

Quản trị viên có thể duyệt hoặc từ chối yêu cầu Vai trò của Tài khoản đang `Chờ xác nhận vai trò`. Truy vết UC-ACT-08.
**Hệ quả (kiểm chứng được):**

- Duyệt → Tài khoản chuyển `Hoạt động`, được gán Vai trò tương ứng, người dùng nhận Thông báo qua chuông + email.
- Từ chối → bắt buộc nhập lý do; Tài khoản không nhận Vai trò và người dùng nhận Thông báo kèm lý do.
- Quản trị viên không tự cấp cho mình các Vai trò nghiệp vụ NCKH thông qua chức năng này mà không để lại Audit log.

#### FR-4: Quản trị viên quản lý vòng đời Tài khoản

Quản trị viên có thể **cấp Tài khoản trực tiếp** cho Giảng viên, Sinh viên và P.KHCN khi được yêu cầu, đồng thời khóa, mở khóa và hỗ trợ đặt lại mật khẩu cho mọi Tài khoản. Truy vết UC-ACT-08.
**Hệ quả (kiểm chứng được):**

- Tài khoản do Quản trị viên cấp **không** đi qua trạng thái `Chờ xác nhận vai trò`: Quản trị viên nhập email, mã định danh và Vai trò, Tài khoản ở trạng thái `Hoạt động` ngay, và hệ thống gửi email kèm link đặt mật khẩu lần đầu.
- Cấp Tài khoản trực tiếp chịu **cùng các ràng buộc** như tự đăng ký: mã định danh bắt buộc và duy nhất theo **Con người** (FR-2). Không còn ràng buộc cấm một Tài khoản mang cả Vai trò Giảng viên và Trưởng Khoa/Trưởng đơn vị (FR-7, DEC-OQ5).
- Đường này áp dụng cho Vai trò Giảng viên, Sinh viên, P.KHCN; Vai trò Trưởng Khoa/Trưởng đơn vị đi qua FR-84 (bắt buộc gán đơn vị phụ trách); Thành viên/Thư ký Hội đồng đi qua FR-5.
- Khóa/mở khóa Tài khoản không xóa bất kỳ dữ liệu nghiệp vụ hay lịch sử nào của người đó.
- Khóa một Tài khoản đang là Thành viên Hội đồng của Cuộc họp Hội đồng `Đang diễn ra` không làm thay đổi mẫu số 100% phiếu; Cuộc họp bị tắc và đường xử lý duy nhất là hủy Cuộc họp kèm lý do (FR-33).
- Mọi thao tác cấp/khóa/mở khóa/đặt lại mật khẩu đều ghi Audit log kèm người thực hiện và thời điểm.
- Đặt lại mật khẩu dùng **link gửi qua email, hiệu lực 24 giờ, dùng một lần**; Quản trị viên chỉ kích hoạt việc gửi link, không bao giờ xem hay đặt mật khẩu thay người dùng (DEC-OQ4, §14).

#### FR-5: P.KHCN mời người ngoài trường vào Hội đồng qua email

P.KHCN có thể thêm một email bất kỳ (kể cả miền ngoài trường) vào một Hội đồng kèm **Vai trò được mời** (Thành viên Hội đồng hoặc Thư ký Hội đồng); hệ thống gửi email mời tạo Tài khoản. Hiện thực UJ-5. Truy vết UC-ACT-05.
**Hệ quả (kiểm chứng được):**

- Email được thêm trở thành Thành viên Hội đồng / Thư ký Hội đồng của Hội đồng đó **ngay tại thời điểm thêm**, không chờ người đó phản hồi.
- Vai trò được mời là Vai trò mà Tài khoản sẽ có khi đăng nhập (FR-6); P.KHCN chọn Vai trò này, người được mời không chọn.
- Nếu email đã có Tài khoản trong hệ thống, hệ thống **không** tạo Tài khoản trùng; chỉ gán thêm Vai trò cho Hội đồng đó và gửi Thông báo.
- Link mời có thời hạn hiệu lực **7 ngày**; gửi lại được không giới hạn số lần, và mỗi lần gửi lại **vô hiệu hóa link cũ** (DEC-OQ4, §14).

#### FR-6: Đăng ký Tài khoản từ link mời Hội đồng

Người được mời có thể tạo Tài khoản từ link mời, xác minh đúng email được mời, đặt mật khẩu và cập nhật Hồ sơ cá nhân. Hiện thực UJ-5. Truy vết UC-ACT-06.
**Hệ quả (kiểm chứng được):**

- Tài khoản tạo từ link mời **không** đi qua trạng thái `Chờ xác nhận vai trò`; sau khi hoàn tất, Tài khoản `Hoạt động` với đúng Vai trò và đúng Hội đồng đã được gán.
- **Vai trò được gán theo đúng lời mời:** mời làm Thành viên Hội đồng → Tài khoản có Vai trò Thành viên Hội đồng; mời làm Thư ký Hội đồng → Tài khoản có Vai trò Thư ký Hội đồng. Người được mời **không chọn** Vai trò và **không** đổi được Vai trò của mình.
- Vai trò này gắn **theo từng Hội đồng** (§3 Vai trò): cùng một người được mời làm Thành viên ở Hội đồng A và Thư ký ở Hội đồng B thì giữ đúng hai Vai trò đó trong đúng hai phạm vi.
- Không có bước "chấp nhận lời mời họp" ở bất kỳ đâu trong luồng này.
- Link mời chỉ dùng được cho đúng email được mời; dùng email khác thì bị từ chối.

#### FR-7: Một Tài khoản mang nhiều Vai trò

Một Tài khoản có thể mang nhiều Vai trò cấp hệ thống cùng lúc, kể cả nhiều Vai trò Hội đồng ở các Hội đồng/giai đoạn khác nhau; đồng thời có thể giữ nhiều Vai trò ngữ cảnh trên các đối tượng nghiệp vụ khác nhau. Truy vết UC-ACT-01, UC-ACT-02, UC-ACT-03.
**Hệ quả (kiểm chứng được):**

- Cùng một người tham gia hai Hội đồng khác nhau chỉ dùng **một** Tài khoản; hệ thống không cho tạo Tài khoản thứ hai cho cùng email.
- Tài khoản Giảng viên khi được gán làm Giảng viên hướng dẫn của một Đề tài NCKH sinh viên có quyền Xét duyệt hồ sơ **chỉ trên đúng hồ sơ đó**, không phải trên mọi hồ sơ sinh viên.
- **Một Tài khoản mang được đồng thời Vai trò Giảng viên và Vai trò Trưởng Khoa/Trưởng đơn vị** — người vừa là Giảng viên vừa là Trưởng Khoa chỉ cần **một** Tài khoản, không tạo Tài khoản thứ hai (DEC-OQ5, §14). Khi đó Tài khoản mang đủ Quyền chức năng của cả hai Vai trò và hệ thống phân biệt hành vi theo **Vai trò ngữ cảnh** trên từng đối tượng (FR-87).
- P.KHCN mang cả hai nhóm hành vi: quản trị hành chính và đánh giá/ký với vai trò Chủ tịch Hội đồng.

#### FR-8: Phân quyền theo mô hình permission-based

Hệ thống phân quyền theo **Quyền chức năng**: mỗi Vai trò mang một tập nhiều Quyền chức năng, và Quản trị viên bật/tắt được từng Quyền chức năng cho từng Vai trò.
**Hệ quả (kiểm chứng được):**

- Mọi hành vi nghiệp vụ trong PRD này đều ánh xạ tới ít nhất một Quyền chức năng kiểm tra được ở phía server.
- Kiểm tra ở phía server đối chiếu **Quyền chức năng**, không đối chiếu tên Vai trò; đổi tập quyền của một Vai trò làm đổi hành vi hệ thống mà không cần sửa code.
- Một Vai trò mang **nhiều** Quyền chức năng; một Quyền chức năng gán được cho **nhiều** Vai trò.
- Tắt một Quyền chức năng của một Vai trò làm ẩn cả điểm vào trên UI và chặn cả request phía server; không chỉ ẩn UI.
- Quyền chức năng là điều kiện **cần nhưng chưa đủ**: mọi truy cập tới một đối tượng cụ thể còn phải qua Kiểm tra phạm vi dữ liệu (FR-87).
- **Quyền chức năng không tắt được (bảo vệ bất biến SM-1):** các quyền sau gắn trực tiếp với quy tắc bất biến nghiệp vụ và hệ thống **chặn** việc tắt chúng: (a) Thành viên Hội đồng nộp Phiếu đánh giá (FR-35) — tắt sẽ phá bất biến 100% phiếu; (b) Thư ký Hội đồng lập Biên bản Hội đồng (FR-38) — tắt sẽ không bao giờ hoàn tất Cuộc họp; (c) P.KHCN xác nhận hoàn tất Biên bản (FR-42) — tắt sẽ chặn toàn bộ Luồng hai chữ ký. Danh sách này là đóng tại phiên bản PRD hiện tại; mở rộng phải đi qua cập nhật PRD.
- Thay đổi Quyền chức năng ghi Audit log.
  **Ngoài phạm vi:**
- Tự tạo Vai trò cấp hệ thống mới ngoài 7 Vai trò trong Glossary.
- Tự định nghĩa Quyền chức năng mới trên UI — tập Quyền chức năng do đặc tả hệ thống sinh ra, Quản trị viên chỉ bật/tắt.

#### FR-87: Kiểm tra phạm vi dữ liệu trên từng đối tượng

Ngoài Quyền chức năng (FR-8), hệ thống kiểm tra người dùng có **thuộc phạm vi** của đối tượng được truy cập hay không, cho mọi thao tác đọc và ghi.

**Hệ quả (kiểm chứng được):**

- Có Quyền chức năng nhưng ngoài phạm vi → request bị từ chối ở phía server kèm lý do, không trả về dữ liệu và không trả về danh sách rỗng gây hiểu sai.
- Danh sách bị **lọc theo phạm vi ngay ở truy vấn**, không lọc ở tầng hiển thị: người dùng không đếm được số lượng đối tượng ngoài phạm vi của mình.
- Bảng phạm vi (là hệ quả của các FR đã có, gom lại để kiểm chứng):

| Vai trò                   | Thấy/thao tác được                                                                                    | FR nguồn                 |
| ------------------------- | ----------------------------------------------------------------------------------------------------- | ------------------------ |
| Chủ nhiệm đề tài          | Chỉ đề tài, Biểu mẫu, tệp, Hợp đồng của **đề tài mình**                                               | FR-24, FR-53, FR-57      |
| Giảng viên hướng dẫn      | Chỉ hồ sơ/đề tài Sinh viên **được gán chính mình**                                                    | FR-7, FR-21              |
| Trưởng Khoa/Trưởng đơn vị | Chỉ hồ sơ/đề tài của **đơn vị mình phụ trách**                                                        | FR-20, FR-53, FR-84      |
| Thành viên Hội đồng       | Chỉ hồ sơ của **lượt xét duyệt mình tham gia**; Phiếu đánh giá **của chính mình**                     | FR-34, FR-43             |
| Thư ký Hội đồng           | Chỉ Biên bản Hội đồng của **Hội đồng mình làm Thư ký**; không thấy biên bản của Hội đồng khác         | FR-38, FR-40, FR-41      |
| P.KHCN                    | Mọi đề tài và Hội đồng **thuộc phạm vi quản lý của mình**                                             | FR-31, FR-73             |
| Quản trị viên             | Tài khoản, Vai trò, Quyền chức năng, Mốc thời gian, danh mục nền — **không** dữ liệu nghiệp vụ đề tài | FR-3, FR-4, FR-72, FR-85 |

- Phạm vi được đánh giá theo **Vai trò ngữ cảnh** trên đúng đối tượng (§3), không theo Vai trò cấp hệ thống: một Giảng viên là Giảng viên hướng dẫn của đề tài X không vì thế thấy được đề tài Y.
- Ràng buộc phạm vi được thực thi cả ở tầng truy cập tệp (FR-74) và ở Lịch/dòng thời gian (FR-81, FR-82).
- Ràng buộc thời hạn của Hội đồng (FR-34) là một phần của phạm vi: hết hoạt động thì ra khỏi phạm vi.

#### FR-75: Cập nhật Hồ sơ cá nhân

Mọi Actor có Tài khoản có thể xem và cập nhật Hồ sơ cá nhân của mình. Truy vết UC-ACT-07.
**Hệ quả (kiểm chứng được):**

- Hồ sơ cá nhân chứa các trường được Biểu mẫu BM01–BM15 dùng để điền tự động (họ tên, học hàm/học vị, đơn vị, mã định danh, điện thoại, email liên hệ).
- Sửa Hồ sơ cá nhân **không** làm thay đổi dữ liệu của Biểu mẫu đã nộp; Biểu mẫu đã nộp giữ nguyên giá trị tại thời điểm nộp.
- Mã định danh và email đăng nhập **không** tự sửa được; phải qua Quản trị viên.
- Sửa Hồ sơ cá nhân ghi Audit log.

#### FR-84: Quản trị viên tạo và gán Tài khoản Trưởng Khoa/Trưởng đơn vị

Quản trị viên có thể tạo Tài khoản với Vai trò Trưởng Khoa/Trưởng đơn vị và gán đơn vị phụ trách.

**Hệ quả (kiểm chứng được):**

- Trưởng Khoa/Trưởng đơn vị **không tự đăng ký công khai** (FR-2 chỉ cho Giảng viên/Sinh viên) và **không tạo được qua link mời Hội đồng** (FR-5 chỉ tạo Thành viên/Thư ký Hội đồng). Quản trị viên là đường tạo duy nhất.
- Khi tạo, Quản trị viên bắt buộc gán đúng **một đơn vị phụ trách** (Khoa/Bộ môn); Trưởng Khoa/Trưởng đơn vị chỉ duyệt được hồ sơ của đơn vị mình (FR-20).
- Đổi đơn vị phụ trách ghi Audit log và không ảnh hưởng hồ sơ đã duyệt trước đó.
- Quản trị viên cũng có thể **gán thêm Vai trò Trưởng Khoa/Trưởng đơn vị** cho một Tài khoản đã tồn tại, kể cả Tài khoản đang mang Vai trò Giảng viên (FR-7, DEC-OQ5). Tài khoản đó giữ cả hai Vai trò và vẫn phải được gán đúng một đơn vị phụ trách.
- Mọi Vai trò khác ngoài Trưởng Khoa/Trưởng đơn vị đã có đường tạo: Giảng viên/Sinh viên qua FR-2; P.KHCN qua FR-4; Thành viên/Thư ký Hội đồng qua FR-5/FR-6; Quản trị viên qua cấu hình hệ thống ban đầu.

### 4.2 Đợt đăng ký và Giới hạn đề tài đăng ký

**Mô tả:** P.KHCN vận hành từng Đợt đăng ký: cấu hình loại và thời gian, quản lý danh mục Đề tài giao trực tiếp, công bố, theo dõi. Đợt có **hai nhánh mốc thời gian độc lập**: nhánh `Tuyển chọn` theo mốc do Quản trị viên xác lập, nhánh `Giao trực tiếp` theo mốc do chính P.KHCN đặt cho từng đề tài. Đợt **chỉ đóng tự động khi hết hạn** — đây là quyết định nghiệp vụ chốt, không có nút đóng thủ công. Giới hạn đề tài đăng ký **2 đề tài đang đợi xử lý/người** được hệ thống kiểm soát tự động tại mốc Nộp, tính cả thành viên Nhóm nghiên cứu. Hiện thực UJ-1, UJ-6.

**Yêu cầu chức năng:**

#### FR-9: P.KHCN tạo và cấu hình Đợt đăng ký

P.KHCN có thể tạo Đợt đăng ký ở trạng thái `Nháp` và cấu hình loại đợt cùng khoảng thời gian áp dụng. Truy vết UC-DOT-01, UC-DOT-02.

**Hệ quả (kiểm chứng được):**

- Đợt đăng ký có đúng ba trạng thái: `Nháp`, `Đã công bố`, `Đã đóng`.
- Khi còn `Nháp`, mọi trường cấu hình đều sửa được và Đợt không hiển thị cho người dùng khác.
- Thời gian mở/đóng của **nhánh `Tuyển chọn`** trong Đợt là Mốc thời gian do Quản trị viên cấu hình (FR-72); P.KHCN đề xuất khoảng thời gian khi tạo Đợt, Quản trị viên xác lập mốc có hiệu lực (DEC-OQ6, §14 — P.KHCN xác nhận 2026-08-19).
- Thời gian của **nhánh `Giao trực tiếp`** (hạn đăng ký danh mục, ngày họp thuyết minh, ngày họp Hội đồng, hạn từng Biểu mẫu của đề tài đó) do **P.KHCN tự đặt** ngay trong Đợt, không cần Quản trị viên. Hai nhánh có bộ mốc độc lập nhau; đóng nhánh Tuyển chọn không đóng nhánh Giao trực tiếp và ngược lại.

#### FR-10: P.KHCN quản lý danh mục Đề tài giao trực tiếp của Đợt

P.KHCN có thể thêm, sửa, xóa Đề tài giao trực tiếp trong danh mục của Đợt đăng ký, kể cả sau khi Đợt `Đã công bố` với các đề tài chưa có hồ sơ tham chiếu, và tự đặt mốc thời gian cho từng đề tài. Truy vết UC-DOT-03.

**Hệ quả (kiểm chứng được):**

- Mỗi Đề tài giao trực tiếp có đúng 1 suất.
- Mỗi Đề tài giao trực tiếp có **bộ mốc thời gian riêng do P.KHCN đặt** (FR-72): hạn đăng ký, ngày họp thuyết minh, ngày họp Hội đồng, hạn từng Biểu mẫu. P.KHCN sửa được các mốc chưa tới hạn ngay cả khi Đợt `Đã công bố`; mỗi lần sửa ghi Audit log và gửi Thông báo cho người liên quan.
- Sau khi Đợt `Đã công bố`, không xóa được Đề tài giao trực tiếp đã có Hồ sơ đăng ký tham chiếu.
- P.KHCN thêm được Đề tài giao trực tiếp vào Đợt `Đã công bố` (vì nhánh này không bị ràng bởi mốc của nhánh Tuyển chọn); thêm mới không ảnh hưởng hồ sơ đã nộp.

#### FR-11: P.KHCN công bố Đợt đăng ký

P.KHCN có thể công bố Đợt đăng ký, chuyển trạng thái `Nháp` → `Đã công bố`. Truy vết UC-DOT-05.

**Hệ quả (kiểm chứng được):**

- Sau công bố, Đợt hiển thị cho Giảng viên và Sinh viên; họ tạo được Hồ sơ đăng ký trong khoảng thời gian của Đợt.
- Sau công bố, P.KHCN **chỉ** sửa được các nội dung không ảnh hưởng tính hợp lệ của Hồ sơ đăng ký đã nộp (ví dụ mô tả, thông tin liên hệ), **cộng thêm** danh mục và mốc thời gian của nhánh `Giao trực tiếp` theo FR-10; không sửa được thời gian của nhánh `Tuyển chọn`, Giới hạn đề tài đăng ký, hay Đề tài giao trực tiếp đang được hồ sơ tham chiếu. Truy vết UC-DOT-04.
- Công bố Đợt phát sinh Thông báo tới Giảng viên và Sinh viên (§4.11).

#### FR-12: Hệ thống tự đóng Đợt đăng ký khi hết hạn

Khi tới Mốc thời gian kết thúc, hệ thống tự chuyển Đợt đăng ký sang `Đã đóng`.

**Hệ quả (kiểm chứng được):**

- **Không tồn tại** chức năng đóng Đợt thủ công cho bất kỳ Vai trò nào, kể cả P.KHCN và Quản trị viên.
- Mốc kết thúc áp **theo nhánh**: nhánh `Tuyển chọn` đóng theo mốc do Quản trị viên đặt; mỗi Đề tài giao trực tiếp đóng nhận hồ sơ theo hạn đăng ký riêng do P.KHCN đặt (FR-10). Đợt chuyển `Đã đóng` khi cả hai nhánh đã hết hạn.
- Ngay khi Đợt `Đã đóng`: không nộp mới, không nộp lại được Hồ sơ đăng ký; Hồ sơ đăng ký còn ở trạng thái chờ xử lý của Chủ nhiệm đề tài chuyển `Quá hạn`.
- Hồ sơ đăng ký ở trạng thái `Nháp` **vẫn được lưu** sau khi Đợt đóng nhưng không nộp được.
- Hồ sơ đăng ký đang chờ Xét duyệt hồ sơ tại thời điểm Đợt đóng **không** bị chuyển `Quá hạn`; người xét duyệt vẫn xử lý được. **Đã chốt (2026-08-19):** Chỉ hồ sơ mà quả bóng đang ở chân Chủ nhiệm đề tài (nháp, bị trả) mới chuyển Quá hạn; hồ sơ đang ở chân người xét duyệt thì không bị phạt vì sự chậm của người khác. Xem DEC-OQ7 (§14).

#### FR-13: Hệ thống kiểm soát Giới hạn đề tài đăng ký

Hệ thống chặn việc **nộp** Hồ sơ đăng ký khi Chủ nhiệm đề tài hoặc bất kỳ thành viên Nhóm nghiên cứu nào đã có 2 đề tài **đang đợi xử lý**. Hiện thực UJ-1.

**Hệ quả (kiểm chứng được):**

- Giới hạn đề tài đăng ký là **2 đề tài đang đợi xử lý / người**, tính chung cả `Tuyển chọn` và `Giao trực tiếp`.
- Giới hạn đề tài đăng ký đếm **từ mốc Nộp**, không đếm hồ sơ nháp: một người tạo và lưu bao nhiêu hồ sơ nháp cũng được, hệ thống chỉ kiểm tra khi bấm **Nộp** (FR-19) và khi kiểm tra điều kiện nộp (FR-18).
- "Đang đợi xử lý" = hồ sơ/đề tài đã nộp và chưa rơi vào một trong các trường hợp nhả suất dưới đây.
- **Suất được nhả** khi: (a) yêu cầu hủy của Chủ nhiệm đề tài được P.KHCN chấp thuận → `Đã hủy` (FR-25); (b) hồ sơ không qua được Xét duyệt hồ sơ cho tới khi hết hạn đăng ký → `Quá hạn` (FR-12); (c) mất suất Đề tài giao trực tiếp → `Không được chọn` (FR-14); (d) **đề tài đã làm xong** — P.KHCN đặt trạng thái cuối `Lưu hồ sơ` hoặc `Triển khai ứng dụng` ở bước 09 (FR-59); (e) **đề tài kết thúc với kết quả âm** — `Không đạt xét duyệt Hội đồng`, `Thuyết minh không đạt`, `Không đạt nghiệm thu`, hoặc `Quá hạn giữa quy trình` — suất được nhả tại mốc **công bố kết quả** (FR-44) hoặc tại thời điểm hệ thống tự chuyển `Quá hạn giữa quy trình` (FR-83).
- **Suất không được nhả** khi đề tài vẫn đang tiến triển trong quy trình — đang chờ Hội đồng, đang thực hiện, hay đang nghiệm thu đều vẫn tính là "đang đợi xử lý".
- Giảng viên hướng dẫn **không** bị tính vào Giới hạn đề tài đăng ký của đề tài mình hướng dẫn.
- Người dùng thấy số đề tài đang đợi xử lý của mình (`x/2`) trước khi bắt đầu tạo Hồ sơ đăng ký, và thấy lý do bị chặn khi bấm Nộp.
- Giới hạn đề tài đăng ký được đếm theo **Con người** (thực thể cá nhân, xác định qua mã định danh), **không** theo Tài khoản. Một người dù mang nhiều Vai trò trên một Tài khoản (FR-7) hay có nhiều Tài khoản vẫn chỉ có 2 suất.
- Không có trường hợp nhả suất nào khác ngoài năm nhóm trên. Đặc biệt: hồ sơ bị Khoa/Giảng viên hướng dẫn trả chỉnh sửa **vẫn giữ suất** cho tới khi hết hạn đăng ký, vì Xét duyệt hồ sơ không có hành vi từ chối dứt điểm (FR-22).

#### FR-14: Hệ thống xử lý tranh chấp suất Đề tài giao trực tiếp

Khi nhiều Hồ sơ đăng ký cùng nhắm một Đề tài giao trực tiếp, hệ thống trao suất cho hồ sơ được Trưởng Khoa/Trưởng đơn vị **duyệt sớm nhất**.

**Hệ quả (kiểm chứng được):**

- Tiêu chí là **thời điểm Xét duyệt hồ sơ**, không phải thời điểm tạo hay nộp hồ sơ.
- Ngay khi có hồ sơ thắng suất, mọi Hồ sơ đăng ký khác cùng Đề tài giao trực tiếp tự chuyển `Không được chọn` và chủ nhiệm của chúng nhận Thông báo.
- Suất **không mở lại** kể cả khi hồ sơ thắng suất sau đó bị hủy.

#### FR-15: Xem danh sách và tình trạng Đợt đăng ký

Người dùng có liên quan xem được danh sách Đợt đăng ký và tình trạng hiện tại; P.KHCN theo dõi được tình trạng vận hành của Đợt. Truy vết UC-DOT-06, UC-DOT-08.

**Hệ quả (kiểm chứng được):**

- P.KHCN thấy được số Hồ sơ đăng ký theo từng trạng thái trong Đợt.
- Giảng viên/Sinh viên chỉ thấy Đợt `Đã công bố` và `Đã đóng`, không thấy Đợt `Nháp`.

### 4.3 Đăng ký đề tài và Xét duyệt hồ sơ (Bước 01)

**Mô tả:** Chủ nhiệm đề tài soạn Hồ sơ đăng ký ở trạng thái nháp, khai Nhóm nghiên cứu, lập BM01 theo Pipeline form/PDF và nộp cho đúng luồng: hồ sơ Giảng viên → Trưởng Khoa/Trưởng đơn vị; hồ sơ Sinh viên → Giảng viên hướng dẫn. Người xét duyệt chỉ có hai lựa chọn: duyệt, hoặc trả chỉnh sửa kèm lý do bắt buộc. Sau khi duyệt, hồ sơ **tự** vào tập đủ điều kiện lập Hội đồng — P.KHCN không có bước tiếp nhận riêng, và **không có danh sách tổng hợp** do Khoa hay Giảng viên lập. Hiện thực UJ-1.

**Yêu cầu chức năng:**

#### FR-16: Tạo và cập nhật Hồ sơ đăng ký ở trạng thái nháp

Giảng viên và Sinh viên có thể tạo Hồ sơ đăng ký trong một Đợt đăng ký `Đã công bố` và cập nhật khi còn nháp. Truy vết UC-DK-01, UC-DK-02, UC-DK-03.

**Hệ quả (kiểm chứng được):**

- Giảng viên tạo hồ sơ dùng BM01A; Sinh viên dùng BM01B.
- Hồ sơ đăng ký của Sinh viên **bắt buộc** gán một Giảng viên hướng dẫn (Tài khoản Giảng viên `Hoạt động`); hồ sơ của Giảng viên **không có** trường này.
- Người dùng chọn Hình thức đăng ký `Tuyển chọn` hoặc `Giao trực tiếp`; chọn `Giao trực tiếp` thì bắt buộc chọn một Đề tài giao trực tiếp từ danh mục của Đợt, và hồ sơ đó chịu bộ mốc thời gian riêng của đề tài đã chọn (FR-10).
- Hồ sơ nháp **không giới hạn số lượng** và không bị tính vào Giới hạn đề tài đăng ký (FR-13).
- Hồ sơ nháp lưu được sau khi hết hạn đăng ký áp dụng nhưng không nộp được (FR-12).

#### FR-17: Quản lý thông tin Nhóm nghiên cứu trong Hồ sơ đăng ký

Chủ nhiệm đề tài có thể khai và sửa danh sách Nhóm nghiên cứu khi Hồ sơ đăng ký còn nháp. Truy vết UC-DK-04.

**Hệ quả (kiểm chứng được):**

- Thành viên Nhóm nghiên cứu là **dữ liệu hồ sơ**: không được cấp Tài khoản, không nhận Thông báo, không xem/sửa/ký/nộp gì.
- Mỗi thành viên Nhóm nghiên cứu được định danh đủ để hệ thống đối chiếu Giới hạn đề tài đăng ký (FR-13). **Đã chốt (2026-08-19):** Định danh bằng mã Giảng viên/mã Sinh viên, là trường bắt buộc; đây là điều kiện cần để Giới hạn đề tài đăng ký "áp cho mọi người tham gia gồm thành viên nhóm" thực thi được — bộ trường đầy đủ chốt trong data dictionary BM01, xem FR-66. Xem §14.
- Dữ liệu Nhóm nghiên cứu được mô hình thành các dòng có cấu trúc, không phải một ô văn bản tự do.

#### FR-18: Kiểm tra điều kiện nộp Hồ sơ đăng ký

Chủ nhiệm đề tài có thể kiểm tra hồ sơ đã đủ điều kiện nộp hay chưa trước khi nộp. Truy vết UC-DK-05.

**Hệ quả (kiểm chứng được):**

- Hệ thống liệt kê cụ thể từng điều kiện chưa đạt (trường bắt buộc còn trống, chưa tải PDF đã ký, đã có 2 đề tài đang đợi xử lý, đang trong thời hạn cấm đăng ký (FR-86), ngoài thời gian đăng ký áp dụng) chứ không chỉ báo "hồ sơ chưa hợp lệ".
- Kiểm tra này không làm thay đổi trạng thái hồ sơ.

#### FR-19: Nộp Hồ sơ đăng ký kèm BM01 đã ký

Chủ nhiệm đề tài có thể nộp Hồ sơ đăng ký sau khi đã tải lên BM01 có chữ ký của chính mình. Hiện thực UJ-1. Truy vết UC-DK-06, UC-DK-07.

**Hệ quả (kiểm chứng được):**

- Nộp mà chưa có PDF BM01 đã ký hợp lệ theo chính sách tệp (FR-63) bị chặn.
- Đây là mốc hệ thống kiểm tra Giới hạn đề tài đăng ký (FR-13); nộp khi đã có 2 đề tài đang đợi xử lý bị chặn kèm lý do.
- Bấm **Nộp** khóa form BM01; hồ sơ chuyển vào đúng luồng xét duyệt và Trạng thái tổng quan đề tài thành `Đang đợi khoa duyệt` (hồ sơ Giảng viên → Trưởng Khoa/Trưởng đơn vị) hoặc `Đang đợi giảng viên duyệt` (hồ sơ Sinh viên → Giảng viên hướng dẫn).
- Sau khi nộp hợp lệ, Chủ nhiệm đề tài **không tự rút hoặc sửa** hồ sơ trước khi cấp xét duyệt xử lý.
- Người xét duyệt tương ứng nhận Thông báo qua chuông + email.

#### FR-20: Xét duyệt hồ sơ Giảng viên

Trưởng Khoa/Trưởng đơn vị có thể duyệt Hồ sơ đăng ký của Giảng viên thuộc đơn vị mình. Truy vết UC-DK-11.

**Hệ quả (kiểm chứng được):**

- Trưởng Khoa/Trưởng đơn vị chỉ thấy và chỉ duyệt được hồ sơ của đơn vị mình.
- Duyệt → hồ sơ **tự** vào tập đủ điều kiện lập Hội đồng, Trạng thái tổng quan đề tài thành `Chờ Hội đồng xét duyệt hồ sơ`. Không có bước P.KHCN tiếp nhận/xác nhận riêng.
- Hệ thống **không** yêu cầu và **không** sinh danh sách tổng hợp hồ sơ của Khoa.
- Thời điểm duyệt được ghi lại và dùng làm tiêu chí tranh chấp suất Đề tài giao trực tiếp (FR-14).

#### FR-21: Xét duyệt hồ sơ Sinh viên

Giảng viên trong vai trò Giảng viên hướng dẫn có thể duyệt Hồ sơ đăng ký của Sinh viên được gán cho mình. Truy vết UC-DK-09, UC-ACT-02.

**Hệ quả (kiểm chứng được):**

- Giảng viên chỉ duyệt được hồ sơ Sinh viên có gán chính mình làm Giảng viên hướng dẫn.
- Duyệt → hồ sơ tự vào tập đủ điều kiện lập Hội đồng; Giảng viên chuyển trực tiếp tới P.KHCN, không lập danh sách tổng hợp.

#### FR-22: Trả Hồ sơ đăng ký để chỉnh sửa

Trưởng Khoa/Trưởng đơn vị (hồ sơ Giảng viên) hoặc Giảng viên hướng dẫn (hồ sơ Sinh viên) có thể trả Hồ sơ đăng ký kèm lý do. Hiện thực UJ-1. Truy vết UC-DK-10, UC-DK-12.

**Hệ quả (kiểm chứng được):**

- **Lý do trả là bắt buộc**; **không có** chức năng từ chối dứt điểm ở bước này, cho bất kỳ Vai trò nào. Khoa/Giảng viên hướng dẫn chỉ có hai lựa chọn: duyệt, hoặc trả chỉnh sửa. Hồ sơ chỉ dừng hẳn khi hết hạn đăng ký (`Quá hạn`, FR-12) hoặc khi Chủ nhiệm đề tài xin hủy và được chấp thuận (FR-25). Đây là quyết định nghiệp vụ chốt (P.KHCN xác nhận 2026-08-19), không phải khoảng trống.
- Trạng thái tổng quan đề tài thành `Trả chỉnh sửa`; Chủ nhiệm đề tài nhận Thông báo kèm lý do qua chuông + email.

#### FR-23: Sửa và nộp lại Hồ sơ đăng ký bị trả

Chủ nhiệm đề tài có thể sửa hồ sơ bị trả và nộp lại trong thời gian Đợt đăng ký còn mở. Hiện thực UJ-1. Truy vết UC-DK-13.

**Hệ quả (kiểm chứng được):**

- Khi sửa nội dung, BM01 cũ **mất hiệu lực**; phải xuất PDF mới, ký lại và tải lên trước khi nộp lại.
- Mỗi vòng nộp lại tạo một phiên bản mới; toàn bộ phiên bản cũ được giữ.
- Nộp lại thành công → Trạng thái tổng quan đề tài thành `Chờ duyệt lại`.
- Không nộp lại được sau khi Đợt `Đã đóng`; hồ sơ chuyển `Quá hạn` (FR-12).
- Số vòng trả sửa không bị giới hạn cứng, chỉ bị chặn bởi thời gian Đợt (DEC-OQ9, §14 — P.KHCN xác nhận 2026-08-19).

#### FR-24: Quyền xem phiên bản Hồ sơ đăng ký

Hệ thống giới hạn quyền xem phiên bản cũ của Hồ sơ đăng ký theo Vai trò.

**Hệ quả (kiểm chứng được):**

- Chủ nhiệm đề tài xem được **toàn bộ** phiên bản của hồ sơ mình.
- Giảng viên hướng dẫn, Trưởng Khoa/Trưởng đơn vị và P.KHCN chỉ xem được phiên bản liên quan lượt xử lý của họ và phiên bản mới nhất.
- Thành viên Hội đồng và Thư ký Hội đồng chỉ xem được **bản chính thức** được chuyển sang xét duyệt, không thấy lịch sử trả sửa ở bước Xét duyệt hồ sơ.

#### FR-25: Gửi và xử lý yêu cầu hủy đăng ký

Chủ nhiệm đề tài có thể gửi yêu cầu hủy sau khi hồ sơ đã qua Xét duyệt hồ sơ và chuyển P.KHCN; P.KHCN xử lý yêu cầu. Truy vết UC-DK-14, UC-DK-15.

**Hệ quả (kiểm chứng được):**

- **Mốc chặn:** yêu cầu hủy chỉ gửi được **trước khi Cuộc họp Hội đồng nghiệm thu của đề tài bắt đầu** (trước khi Cuộc họp chuyển `Đang diễn ra`, FR-29). Từ thời điểm Cuộc họp nghiệm thu mở trở đi, hệ thống chặn gửi yêu cầu hủy và nêu rõ lý do. Quyết định này ghi đè cả brief 2026-08-17 và quyết định cũ — xem DEC-OQ1 (§14).
- Lý do hủy là bắt buộc.
- P.KHCN chấp thuận → Trạng thái tổng quan đề tài thành `Đã hủy`; P.KHCN có thể đặt thời gian cấm đăng ký cho người vi phạm (FR-86).
- P.KHCN từ chối → bắt buộc nhập lý do; đề tài giữ nguyên trạng thái trước đó.
- Hồ sơ `Đã hủy` **không bị xóa**; toàn bộ lịch sử và tệp được giữ.
- Vì mốc chặn nằm trước khi Cuộc họp nghiệm thu mở, **không** có tình huống yêu cầu hủy làm đổi mẫu số 100% phiếu của một Cuộc họp `Đang diễn ra`. Yêu cầu hủy đã gửi mà P.KHCN chưa xử lý **không** chặn việc mở Cuộc họp nghiệm thu; P.KHCN xử lý yêu cầu sau khi Cuộc họp kết thúc.

**Ghi chú:**

- `[NOTE FOR PM]` Điều kiện nộp chi tiết ở mức trường (bắt buộc/điều kiện/validation) được chốt trong data dictionary BM01 (FR-66), không nằm trong PRD.

#### FR-79: Người vừa là Chủ nhiệm đề tài vừa là cấp xét duyệt thì **tự duyệt**

Khi người thực hiện Xét duyệt hồ sơ chính là Chủ nhiệm đề tài (hoặc thành viên Nhóm nghiên cứu) của hồ sơ đó, hệ thống **cho phép người đó tự duyệt**; không có cơ chế chặn và không có người xét duyệt thay thế.

**Hệ quả (kiểm chứng được):**

- Trường hợp cụ thể: một Tài khoản mang cả Vai trò Giảng viên và Vai trò Trưởng Khoa/Trưởng đơn vị (FR-7) nộp hồ sơ với tư cách Chủ nhiệm đề tài, rồi tự thực hiện thao tác duyệt với tư cách Trưởng Khoa/Trưởng đơn vị của đơn vị mình. Hệ thống không chặn, không cảnh báo chặn luồng.
- Hồ sơ **không** được chuyển cho P.KHCN hay bất kỳ ai khác để duyệt thay; luồng xét duyệt giữ nguyên theo FR-20 / FR-21.
- Thao tác tự duyệt ghi **Audit log** và được đánh dấu rõ là tự duyệt (cùng một Con người ở hai đầu), để P.KHCN giải trình được về sau. Đây là biện pháp duy nhất — hệ thống dựa vào minh bạch, không dựa vào chặn.
- Quy tắc này nhất quán với FR-77: hệ thống không thực thi quy tắc xung đột lợi ích ở bất kỳ đâu.
  **Ngoài phạm vi:**
- Chặn tự duyệt, luân chuyển hồ sơ sang người duyệt thay, hoặc yêu cầu phê duyệt kép.

#### FR-86: P.KHCN đặt và gỡ lệnh cấm đăng ký

P.KHCN có thể đặt lệnh cấm đăng ký có thời hạn cho một Con người khi chấp thuận hủy đề tài vi phạm; và gỡ cấm trước hạn khi có lý do.

**Hệ quả (kiểm chứng được):**

- Lệnh cấm gắn với **Con người** (qua mã định danh), không theo Tài khoản; mọi Tài khoản của cùng Con người đều bị chặn.
- Đặt cấm bắt buộc nhập **thời hạn** (ngày kết thúc) và **lý do**; ghi Audit log.
- Gỡ cấm trước hạn bắt buộc nhập lý do; ghi Audit log.
- **FR-19 kiểm tra:** tại mốc Nộp, hệ thống chặn nếu Chủ nhiệm đề tài hoặc bất kỳ thành viên Nhóm nghiên cứu nào đang trong thời hạn cấm; thông báo rõ lý do (ai bị cấm, đến khi nào).
- Sau khi hết thời hạn cấm, hệ thống tự gỡ — không cần P.KHCN thao tác.
- Người bị cấm vẫn đăng nhập và xem được hồ sơ cũ; chỉ bị chặn tạo/nộp hồ sơ mới.
- **Đã chốt (2026-08-19):** Lệnh cấm chỉ chặn đăng ký mới, không ảnh hưởng đề tài đang trong quy trình của người đó. Xem DEC-OQ39 (§14).

### 4.4 Hội đồng và Cuộc họp Hội đồng

**Mô tả:** Ba Hội đồng độc lập — xét duyệt hồ sơ (bước 02), xét duyệt thuyết minh (bước 04), nghiệm thu (bước 07) — dùng **chung một cơ chế vận hành**, khác nhau ở biểu mẫu và điều kiện đầu vào. P.KHCN lập Hội đồng ở trạng thái `Nháp`, thêm người (thành viên/Thư ký trở thành thành viên ngay, không có bước chấp nhận lời mời), gán hồ sơ xét duyệt, rồi mở Cuộc họp Hội đồng. **Mở Cuộc họp là mốc khóa cấu trúc Hội đồng** — sau đó mọi sai sót chỉ xử lý được bằng hủy Cuộc họp kèm lý do và tạo Cuộc họp thay thế. Hệ thống quản lý thời gian và trạng thái Cuộc họp nhưng không tổ chức thảo luận chuyên môn. Hiện thực UJ-2.

**Yêu cầu chức năng:**

#### FR-26: P.KHCN lập Hội đồng cho một giai đoạn

P.KHCN có thể lập Hội đồng xét duyệt hồ sơ, Hội đồng xét duyệt thuyết minh hoặc Hội đồng nghiệm thu ở trạng thái `Nháp`. Hiện thực UJ-2. Truy vết UC-HD-01, UC-HD-02, UC-HD-03.

**Hệ quả (kiểm chứng được):**

- Mỗi Hội đồng thuộc đúng **một** giai đoạn và lập **mới hoàn toàn** cho mỗi lượt; không có chức năng sao chép danh sách Hội đồng cũ. **Ngoại lệ duy nhất:** Cuộc họp thay thế sau khi hủy (FR-33) mở lại cấu trúc Hội đồng **hiện có** về `Nháp` để sửa — đây không phải sao chép; đây là tiếp tục với cùng Hội đồng nhưng cho phép điều chỉnh trước khi mở Cuộc họp mới.
- Mỗi Hội đồng có đúng **1 Chủ tịch Hội đồng** (bắt buộc là P.KHCN) và đúng **1 Thư ký Hội đồng**.
- Hội đồng nghiệm thu chỉ lập được cho Đề tài NCKH đã có BM09 và sản phẩm chính thức được nộp (FR-49).

#### FR-27: P.KHCN quản lý thành viên và Vai trò của Hội đồng khi còn `Nháp`

Khi Hội đồng còn `Nháp`, P.KHCN có thể thêm/xóa/thay người, đổi Vai trò, sửa thông tin hành chính và gán hồ sơ xét duyệt. Hiện thực UJ-2. Truy vết UC-HD-04.

**Hệ quả (kiểm chứng được):**

- Thêm một người vào Hội đồng khiến người đó là Thành viên Hội đồng hoặc Thư ký Hội đồng **ngay lập tức**; không có trạng thái "chờ chấp nhận".
- Người chưa có Tài khoản vẫn được ghi nhận là thành viên; hệ thống gửi email mời tạo Tài khoản (FR-5).
- Hồ sơ xét duyệt được gán là tập Hồ sơ đăng ký (Hội đồng xét duyệt hồ sơ), Đề tài NCKH kèm BM04 (Hội đồng xét duyệt thuyết minh), hoặc Đề tài NCKH kèm BM09 + sản phẩm (Hội đồng nghiệm thu). Một Cuộc họp Hội đồng xử lý được nhiều hồ sơ/đề tài trong cùng một lượt.
- **Cách gán khác nhau theo Hình thức đăng ký:** với nhánh `Tuyển chọn`, hệ thống **tự đưa toàn bộ** hồ sơ/đề tài đủ điều kiện của Đợt vào lượt xét duyệt và P.KHCN chỉ xác nhận danh sách (loại bỏ phải kèm lý do và ghi Audit log); với nhánh `Giao trực tiếp`, P.KHCN **chọn thủ công** từng đề tài đưa vào Cuộc họp, có thể một Cuộc họp một đề tài.
- P.KHCN thấy rõ hồ sơ nào đủ điều kiện mà chưa được đưa vào lượt nào, để không bỏ sót đề tài.

#### FR-28: P.KHCN tạo Cuộc họp Hội đồng

P.KHCN có thể tạo Cuộc họp Hội đồng thuộc một Hội đồng, với thời gian dự kiến diễn ra. Hiện thực UJ-2.

**Hệ quả (kiểm chứng được):**

- Cuộc họp Hội đồng có các trạng thái `Nháp`, `Đang diễn ra`, `Đã kết thúc`, `Đã hủy`.
- Khi tạo Cuộc họp, P.KHCN chọn các đề tài sẽ bàn: nhánh `Tuyển chọn` mặc định là toàn bộ đề tài của lượt; nhánh `Giao trực tiếp` là tập đề tài P.KHCN chọn (FR-27).
- **Cuộc họp không có giờ kết thúc:** hệ thống **không** cấu hình được thời điểm kết thúc cho Cuộc họp, dù ở bước tạo hay sau khi tạo. Cuộc họp chỉ hết khi **P.KHCN chủ động kết thúc** (FR-32) hoặc khi P.KHCN hủy (FR-33). Không có mốc thời gian nào tự đóng Cuộc họp, không có cơ chế gia hạn Cuộc họp (vì không có gì để gia hạn) — xem DEC-OQ12 (§14).
- `Ngày họp` vẫn là một Mốc thời gian (FR-72, FR-80) nhưng chỉ mang nghĩa **thời gian dự kiến diễn ra** để hiển thị trên dòng thời gian và Lịch; nó **không** chặn thao tác và **không** đóng Cuộc họp.
- Hệ thống ghi nhận thời điểm mở và thời điểm kết thúc **thực tế**.
- Hệ thống không cung cấp họp trực tuyến, ghi âm, ghi hình hay nơi trao đổi nội dung thảo luận chuyên môn.

#### FR-29: Điều kiện mở Cuộc họp Hội đồng

P.KHCN chỉ mở được Cuộc họp Hội đồng khi mọi điều kiện tiền đề đã đủ. Hiện thực UJ-2. Truy vết UC-HD-06.

**Hệ quả (kiểm chứng được):**

- **Điều kiện duy nhất liên quan tới người:** mọi người trong Hội đồng đã có Tài khoản `Hoạt động`. **Không** có bước "chấp nhận lời mời họp" ở bất kỳ đâu trong hệ thống, và không có điều kiện nào khác về phía người được mời (DEC-OQ2, §14).
- Ngoài ra, hệ thống chặn mở Cuộc họp và nêu rõ điều còn thiếu nếu **cấu trúc Hội đồng chưa hợp lệ** — thiếu Chủ tịch Hội đồng hoặc Thư ký Hội đồng (FR-26), hoặc chưa gán hồ sơ xét duyệt (FR-27). Đây là ràng buộc toàn vẹn dữ liệu của chính Hội đồng, không phải điều kiện về người: thiếu Thư ký thì không ai lập được Biên bản, thiếu hồ sơ thì không có gì để đánh giá.
- Mở Cuộc họp → trạng thái `Đang diễn ra`, quyền nộp Phiếu đánh giá mở cho đúng Thành viên Hội đồng, và toàn bộ Hội đồng nhận Thông báo.

#### FR-30: Khóa cấu trúc Hội đồng khi Cuộc họp mở

Khi Cuộc họp Hội đồng ở trạng thái `Đang diễn ra`, hệ thống khóa cấu trúc Hội đồng. Hiện thực UJ-2.

**Hệ quả (kiểm chứng được):**

- Không thêm, không xóa, không thay Thành viên Hội đồng hoặc Thư ký Hội đồng.
- Không đổi Vai trò của bất kỳ ai trong Hội đồng.
- Không thêm/bớt/thay hồ sơ xét duyệt đã gán.
- Mọi request thực hiện các thao tác trên bị từ chối ở phía server, không chỉ ẩn trên UI.
- Thông tin hành chính không ảnh hưởng cấu trúc (ví dụ địa điểm, ghi chú) vẫn sửa được và mọi thay đổi được ghi Audit log + Thông báo cho người liên quan. Truy vết UC-TB-02.

#### FR-31: P.KHCN theo dõi tiến độ nộp Phiếu đánh giá

P.KHCN theo dõi được số Phiếu đánh giá đã nộp so với tổng số Thành viên Hội đồng trong Cuộc họp. Hiện thực UJ-2. Truy vết UC-HD-05.

**Hệ quả (kiểm chứng được):**

- Hiển thị dạng `x/y phiếu` cùng danh sách ai đã nộp / chưa nộp.
- P.KHCN **không** xem được nội dung Phiếu đánh giá của người khác trước Mốc chốt phiếu; chỉ thấy trạng thái đã/chưa nộp.
- Thư ký Hội đồng cũng chỉ thấy tiến độ, không thấy nội dung phiếu nháp của người khác.

#### FR-32: P.KHCN kết thúc Cuộc họp Hội đồng

P.KHCN có thể kết thúc Cuộc họp Hội đồng sau khi đã đủ điều kiện. Truy vết UC-HD-07.

**Hệ quả (kiểm chứng được):**

- Hệ thống chặn kết thúc nếu chưa đạt **Đủ 100% phiếu** hoặc còn Biên bản Hội đồng chưa hoàn tất Luồng hai chữ ký (FR-42). Ở Cuộc họp nghiệm thu nhiều đề tài, điều kiện là **mọi** BM12 của **mọi** đề tài trong Cuộc họp đều đã đủ hai chữ ký.
- Kết thúc → trạng thái `Đã kết thúc`, thời điểm kết thúc được ghi, kết quả Hội đồng chuyển `Chờ công bố` và **không tự động công bố**.
- **Đây là cách duy nhất Cuộc họp hết** (ngoài hủy, FR-33): không có mốc thời gian nào tự đóng Cuộc họp (FR-28). Cuộc họp `Đang diễn ra` bao lâu cũng được.
- Kết thúc Cuộc họp là mốc **khóa mọi vòng trả sửa Biên bản** (FR-40) và khóa mọi thao tác của Hội đồng trên lượt đó.

#### FR-33: P.KHCN hủy Cuộc họp Hội đồng và tạo Cuộc họp thay thế

P.KHCN có thể hủy Cuộc họp Hội đồng kèm lý do bắt buộc và tạo Cuộc họp thay thế có liên kết lịch sử. Hiện thực UJ-2. Truy vết UC-HD-08.

**Hệ quả (kiểm chứng được):**

- Lý do hủy là bắt buộc.
- Hủy **không xóa** dữ liệu: Phiếu đánh giá đã nộp, Biên bản Hội đồng dở dang và toàn bộ Audit log của Cuộc họp bị hủy đều được giữ và xem lại được.
- Cuộc họp thay thế tham chiếu tới Cuộc họp bị hủy; ở Cuộc họp thay thế, cấu trúc Hội đồng mở lại để sửa (trở về `Nháp`) và **Phiếu đánh giá phải nộp lại từ đầu**. **Đã chốt (2026-08-19):** Phiếu của Cuộc họp bị hủy không được kế thừa sang Cuộc họp thay thế, vì Mốc chốt phiếu gắn với một Cuộc họp cụ thể và mẫu số có thể đã thay đổi. Xem DEC-OQ10 (§14).
- Toàn bộ Hội đồng nhận Thông báo về việc hủy kèm lý do.

#### FR-34: Thành viên Hội đồng xem hồ sơ phục vụ đánh giá

Thành viên Hội đồng (gồm Chủ tịch Hội đồng) và Thư ký Hội đồng xem/tải được tài liệu của các hồ sơ trong lượt xét duyệt của mình. Hiện thực UJ-5. Truy vết UC-PH-01, UC-PH-03, UC-PH-05.

**Hệ quả (kiểm chứng được):**

- Hội đồng xét duyệt hồ sơ xem được BM01 bản chính thức; Hội đồng xét duyệt thuyết minh xem/tải được BM04; Hội đồng nghiệm thu xem/tải được BM09 và mô tả sản phẩm.
- Quyền xem/tải **chỉ có hiệu lực khi Hội đồng còn hoạt động**. Sau khi Cuộc họp `Đã kết thúc` hoặc Hội đồng giải tán, Thành viên Hội đồng và Thư ký Hội đồng chỉ xem được lịch sử/chi tiết, **không tải được** BM04/BM06/BM07/BM11/BM12.
- Hệ thống không trích xuất, không cấu trúc hóa nội dung BM04 — Hội đồng tự đọc tệp.

#### FR-77: Không thực thi quy tắc xung đột lợi ích trong Hội đồng

Hệ thống **không** coi việc một người vừa đánh giá vừa liên quan tới đề tài được đánh giá là xung đột cần chặn.

**Hệ quả (kiểm chứng được):**

- P.KHCN thêm được bất kỳ người nào vào Hội đồng, kể cả người là Chủ nhiệm đề tài, thành viên Nhóm nghiên cứu hoặc Giảng viên hướng dẫn của một hồ sơ/Đề tài NCKH trong lượt xét duyệt đã gán. Hệ thống không chặn và không cảnh báo chặn luồng.
- Chiều ngược lại cũng không bị chặn: gán thêm vào lượt xét duyệt một hồ sơ mà người trong Hội đồng có liên quan là hợp lệ.
- P.KHCN vẫn là Chủ tịch Hội đồng của cả ba Hội đồng ngay cả khi chính P.KHCN đứng tên đề tài trong đợt; **không** có cơ chế ủy quyền Chủ tịch Hội đồng vì không có tình huống nào buộc phải ủy quyền.
- Thành phần Hội đồng và quan hệ của từng thành viên với từng đề tài trong lượt đều **hiển thị được và ghi Audit log** (FR-73), để P.KHCN giải trình khi cần. Minh bạch là biện pháp duy nhất.
- Quy tắc này nhất quán với FR-79 (tự duyệt hồ sơ được phép).
  **Ngoài phạm vi:**
- Chặn hoặc cảnh báo xung đột lợi ích, ủy quyền Chủ tịch Hội đồng, quy tắc hồi tị (recusal) tự động.

### 4.5 Phiếu đánh giá và Mốc chốt phiếu

**Mô tả:** Mỗi Thành viên Hội đồng — **bao gồm Chủ tịch Hội đồng tức P.KHCN, không bao gồm Thư ký Hội đồng** — nộp Phiếu đánh giá cá nhân theo Pipeline form/PDF trong thời gian Cuộc họp Hội đồng. Ngưỡng là **100%**, không phải quá bán, và Thư ký không nằm trong mẫu số. Khi phiếu cuối cùng của một phạm vi chốt vào, hệ thống tự tạo Mốc chốt phiếu bất biến cho phạm vi đó và mở Biên bản Hội đồng tương ứng — chốt theo cả Cuộc họp ở hai giai đoạn xét duyệt, chốt theo từng đề tài ở nghiệm thu. Hiện thực UJ-3.

**Yêu cầu chức năng:**

#### FR-35: Lập và nộp Phiếu đánh giá trong Cuộc họp Hội đồng

Thành viên Hội đồng có thể lập và nộp Phiếu đánh giá (BM02 / BM06 / BM11) theo Pipeline form/PDF trong thời gian Cuộc họp Hội đồng `Đang diễn ra`. Hiện thực UJ-3. Truy vết UC-PH-02, UC-PH-04, UC-PH-06.

**Hệ quả (kiểm chứng được):**

- Chủ tịch Hội đồng (P.KHCN) **phải** nộp Phiếu đánh giá như một Thành viên Hội đồng.
- Phiếu là **của một người cho một đề tài**: lượt có n đề tài thì mỗi Thành viên Hội đồng có n phiếu phải nộp, mỗi phiếu đi qua Pipeline form/PDF riêng.
- Thư ký Hội đồng **không có** chức năng nộp Phiếu đánh giá.
- Không nộp được Phiếu đánh giá khi Cuộc họp ở trạng thái `Nháp`, `Đã kết thúc` hoặc `Đã hủy`.
- Phiếu đã nộp **không sửa, không rút lại** trong mọi trường hợp.
- Thành viên Hội đồng không xem và không sửa Phiếu đánh giá nháp của người khác.

#### FR-36: Hệ thống tự tạo Mốc chốt phiếu khi đủ 100%

Ngay khi số Phiếu đánh giá hợp lệ đạt 100% trong phạm vi chốt, hệ thống tự tạo Mốc chốt phiếu cho phạm vi đó. Hiện thực UJ-3. Truy vết UC-CHOT-02.

**Hệ quả (kiểm chứng được):**

- **Phạm vi chốt theo giai đoạn:** Hội đồng xét duyệt hồ sơ và Hội đồng xét duyệt thuyết minh chốt **theo cả Cuộc họp** — mẫu số = tổng số Thành viên Hội đồng × số đề tài trong lượt, chốt một lần cho cả lượt và mở **một** BM03/BM07. Hội đồng nghiệm thu chốt **theo từng đề tài** — mẫu số = tổng số Thành viên Hội đồng, mỗi đề tài có Mốc chốt phiếu riêng và mở **một BM12 riêng**.
- Mẫu số **gồm** Chủ tịch Hội đồng và **không gồm** Thư ký Hội đồng. Hội đồng có 1 Chủ tịch + 3 Thành viên + 1 Thư ký → mẫu số là 4 (theo đề tài, ở nghiệm thu) hoặc 4 × số đề tài (theo lượt, ở hai giai đoạn còn lại).
- Mốc chốt phiếu là **bất biến**: hệ thống ghi lại thời điểm chốt, phạm vi chốt (Cuộc họp hay đề tài nào), số phiếu hợp lệ và mẫu số tại thời điểm đó. Truy vết UC-TB-03.
- Hậu quả tức thì: khóa nhận Phiếu đánh giá **trong phạm vi đã chốt**, mở form Biên bản Hội đồng tương ứng cho Thư ký Hội đồng, gửi Thông báo cho Thư ký Hội đồng và P.KHCN.
- Ở Hội đồng nghiệm thu, khóa phiếu của một đề tài **không** ảnh hưởng việc nộp phiếu cho các đề tài khác trong cùng Cuộc họp.
- **Phiếu đánh giá là phiếu của một người cho một đề tài** — BM02, BM06 và BM11 đều tính theo từng đề tài. Trong một lượt có n đề tài, mỗi Thành viên Hội đồng nộp n phiếu.
- Không tồn tại chức năng mở lại quyền nộp phiếu sau Mốc chốt phiếu, cho bất kỳ Vai trò nào.
- Không có ngưỡng thay thế nào (quá bán, 2/3, v.v.) trong hệ thống.

#### FR-37: Chặn lập Biên bản và kết thúc Cuộc họp khi chưa đủ 100% phiếu

Khi chưa đạt Đủ 100% phiếu, hệ thống chặn cả việc mở Biên bản Hội đồng và việc kết thúc Cuộc họp Hội đồng. Truy vết UC-CHOT-01.

**Hệ quả (kiểm chứng được):**

- Thư ký Hội đồng không thấy điểm vào form Biên bản Hội đồng của một phạm vi trước Mốc chốt phiếu của chính phạm vi đó; ở nghiệm thu, đề tài chưa đủ phiếu thì chưa có BM12 của đề tài đó.
- P.KHCN thấy rõ lý do không kết thúc được Cuộc họp: còn thiếu phiếu của những ai, cho đề tài nào.
- Không có cơ chế ngoại lệ, ghi đè hay bỏ qua điều kiện này cho bất kỳ Vai trò nào — kể cả Quản trị viên.

**NFR riêng của tính năng:**

- Phép kiểm tra Đủ 100% phiếu phải chống được đua tranh (race condition) khi hai Thành viên Hội đồng nộp phiếu gần đồng thời: Mốc chốt phiếu được tạo **đúng một lần**.

#### FR-78: Phòng ngừa bế tắc do thiếu Phiếu đánh giá

Hệ thống chủ động giảm khả năng Cuộc họp Hội đồng bị treo vì không đạt Đủ 100% phiếu.

**Hệ quả (kiểm chứng được):**

- **Trước** khi mở Cuộc họp Hội đồng, P.KHCN thấy danh sách xác nhận từng người trong Hội đồng: đã có Tài khoản `Hoạt động` chưa, lần gần nhất đăng nhập, và quan hệ của người đó với các đề tài trong lượt (chỉ để P.KHCN biết, không chặn — FR-77).
- **Trong** Cuộc họp, hệ thống nhắc người chưa nộp Phiếu đánh giá qua chuông + email theo Mốc thời gian được cấu hình.
- Khi Cuộc họp đang treo vì thiếu phiếu, UI của P.KHCN nêu rõ: còn thiếu phiếu của ai, và đường xử lý duy nhất là hủy Cuộc họp kèm lý do + tạo Cuộc họp thay thế (FR-33). Không để P.KHCN tưởng hệ thống lỗi.
- Hệ thống **không** cung cấp bất kỳ cách nào bỏ qua điều kiện 100% — kể cả khi Cuộc họp treo lâu.
- **Đã chốt (2026-08-19):** Nguồn không mô tả cơ chế phòng ngừa nào; đây là bổ sung do reviewer phát hiện rủi ro R-1 không có biện pháp giảm nhẹ nhẹ hơn ngoài hủy Cuộc họp. Xem DEC-OQ23 (§14).

### 4.6 Biên bản Hội đồng và Công bố kết quả

**Mô tả:** Biên bản Hội đồng (BM03/BM07/BM12) chỉ mở sau Mốc chốt phiếu và đi theo Luồng hai chữ ký: Thư ký Hội đồng ký trước, Chủ tịch Hội đồng (P.KHCN) ký sau. **BM03/BM07 là một biên bản cho cả lượt; BM12 là một biên bản cho một đề tài**, nên một Cuộc họp nghiệm thu nhiều đề tài sinh nhiều BM12 song song. P.KHCN chỉ được **trả sửa kèm lý do**, không được từ chối vĩnh viễn; mỗi vòng trả sửa làm PDF và chữ ký cũ mất hiệu lực. Sau khi đủ hai chữ ký và Cuộc họp kết thúc, kết quả nằm ở `Chờ công bố` cho tới khi P.KHCN chủ động công bố. Hiện thực UJ-3.

**Yêu cầu chức năng:**

#### FR-38: Thư ký Hội đồng lập và nộp Biên bản Hội đồng

Thư ký Hội đồng có thể lập, ký và nộp Biên bản Hội đồng cho P.KHCN trong thời gian Cuộc họp Hội đồng, sau Mốc chốt phiếu. Hiện thực UJ-3. Truy vết UC-BB-01, UC-BB-02, UC-BB-03.

**Hệ quả (kiểm chứng được):**

- Form Biên bản Hội đồng chỉ mở sau Mốc chốt phiếu của phạm vi tương ứng (FR-36).
- **Đơn vị lập:** BM03 và BM07 là **1 biên bản cho cả lượt**, ghi kết luận của từng đề tài trong cùng một biên bản. BM12 là **1 biên bản cho 1 đề tài** — Cuộc họp nghiệm thu bàn n đề tài thì Thư ký lập n biên bản BM12 độc lập, mỗi biên bản đi một Luồng hai chữ ký riêng.
- Biên bản Hội đồng phải lưu ngày, giờ, địa điểm họp và **toàn bộ** thông tin có trong biểu mẫu gốc (đối chiếu data dictionary, FR-66).
- Biên bản Hội đồng ghi kết luận theo tập giá trị của từng giai đoạn: BM03 → `Đạt`/`Không đạt`; BM07 → `Thực hiện`/`Không thực hiện`; BM12 → `Đạt`/`Đạt có yêu cầu chỉnh sửa hoặc giải trình`/`Không đạt`.
- BM07 **chỉ có một luồng form**: hệ thống sinh tệp; không nhận bản BM07 soạn bên ngoài.
- Nộp Biên bản khóa form; Thư ký chỉ mở lại được khi P.KHCN trả sửa (FR-40).
- Không nộp được Biên bản khi Cuộc họp Hội đồng không ở trạng thái `Đang diễn ra` (tức khi `Nháp`, `Đã kết thúc` hoặc `Đã hủy`).

#### FR-39: P.KHCN kiểm tra Biên bản Hội đồng do Thư ký nộp

P.KHCN với vai trò Chủ tịch Hội đồng có thể kiểm tra Biên bản Hội đồng đã nộp và quyết định ký tiếp hoặc trả sửa. Truy vết UC-BB-04.

**Hệ quả (kiểm chứng được):**

- P.KHCN xem được cả dữ liệu form và PDF đã ký của Thư ký Hội đồng.
- Hệ thống **không** tự đối soát nội dung form với PDF đã ký; trách nhiệm kiểm tra thuộc P.KHCN.

#### FR-40: P.KHCN trả Biên bản Hội đồng để sửa

P.KHCN có thể trả Biên bản Hội đồng kèm lý do bắt buộc. Hiện thực UJ-3. Truy vết UC-BB-05.

**Hệ quả (kiểm chứng được):**

- Lý do là bắt buộc; **không có** chức năng từ chối vĩnh viễn Biên bản Hội đồng.
- Thư ký Hội đồng nhận Thông báo kèm lý do.
- **Chỉ trả sửa được khi Cuộc họp còn `Đang diễn ra`.** Sau khi Cuộc họp `Đã kết thúc`, Biên bản Hội đồng **không** trả sửa được nữa dưới bất kỳ hình thức nào, cho bất kỳ Vai trò nào; muốn sửa nội dung đã công bố thì đi qua phiên bản điều chỉnh (FR-45). Xem DEC-OQ12 (§14).
- Số vòng trả sửa không giới hạn cứng; giới hạn duy nhất là Cuộc họp chưa bị P.KHCN kết thúc. Vì FR-32 chặn kết thúc Cuộc họp khi còn Biên bản chưa đủ hai chữ ký, tình huống "biên bản đang bị trả sửa mà Cuộc họp đã đóng" **không tồn tại được** trong hệ thống.

#### FR-41: Thư ký sửa, ký lại và nộp lại Biên bản bị trả

Thư ký Hội đồng có thể sửa Biên bản bị trả, xuất PDF mới, ký lại và nộp lại khi Cuộc họp Hội đồng còn `Đang diễn ra`. Hiện thực UJ-3. Truy vết UC-BB-06, UC-FORM-08.

**Hệ quả (kiểm chứng được):**

- Khi Biên bản bị trả và được sửa, PDF và chữ ký cũ **mất hiệu lực** ngay; hệ thống không cho nộp lại bằng PDF cũ.
- Mỗi vòng nộp lại được lưu thành phiên bản với dấu thời gian.

#### FR-42: Hoàn tất Biên bản bằng chữ ký thứ hai của Chủ tịch Hội đồng

P.KHCN với vai trò Chủ tịch Hội đồng có thể tải bản có chữ ký Thư ký xuống, ký thêm bên ngoài, tải bản đủ hai chữ ký lên và xác nhận hoàn tất. Hiện thực UJ-3. Truy vết UC-BB-07, UC-FORM-09.

**Hệ quả (kiểm chứng được):**

- Chỉ tải lên được bản đủ hai chữ ký sau khi Biên bản đã có chữ ký Thư ký Hội đồng hợp lệ.
- Xác nhận hoàn tất khóa Biên bản Hội đồng vĩnh viễn; sau mốc này không có vòng trả sửa nào nữa.
- Bản đủ hai chữ ký là bằng chứng chính thức của kết luận Hội đồng.

#### FR-43: Kết quả Hội đồng ở trạng thái `Chờ công bố`

Sau khi Biên bản Hội đồng đủ hai chữ ký và Cuộc họp Hội đồng `Đã kết thúc`, kết quả ở trạng thái `Chờ công bố` và không tự động công bố. Hiện thực UJ-3.

**Hệ quả (kiểm chứng được):**

- Trước công bố, **chỉ** P.KHCN (bao gồm vai trò Chủ tịch Hội đồng) và Thư ký Hội đồng xem được kết quả tổng hợp.
- Trước công bố, Thành viên Hội đồng chỉ xem được **Phiếu đánh giá của chính mình**.
- Trước công bố, Chủ nhiệm đề tài, Giảng viên hướng dẫn và Trưởng Khoa/Trưởng đơn vị **không** thấy kết quả; chỉ thấy Trạng thái tổng quan đề tài ở mức giai đoạn.

#### FR-44: P.KHCN công bố kết quả Hội đồng

P.KHCN có thể chủ động công bố kết quả Hội đồng cho các bên liên quan. Hiện thực UJ-3, UJ-4. Truy vết UC-BB-08.

**Hệ quả (kiểm chứng được):**

- Người nhận công bố: Chủ nhiệm đề tài, Giảng viên hướng dẫn (nếu có), Trưởng Khoa/Trưởng đơn vị, toàn bộ Thành viên Hội đồng, Thư ký Hội đồng, Chủ tịch Hội đồng và P.KHCN.
- Công bố đồng thời gửi Thông báo (chuông + email) và mở quyền xem theo Vai trò.
- Công bố ánh xạ kết luận Biên bản sang Trạng thái tổng quan đề tài theo bảng §4.10. **Đã chốt (2026-08-19):** Việc ánh xạ xảy ra tại mốc công bố, không tại mốc hoàn tất Biên bản, để Chủ nhiệm đề tài không suy ra kết quả sớm từ thay đổi trạng thái. Xem DEC-OQ11 (§14).

#### FR-45: Điều chỉnh kết quả đã công bố bằng phiên bản mới

Khi phát hiện sai sót sau công bố, P.KHCN có thể tạo phiên bản điều chỉnh của kết quả kèm lý do.

**Hệ quả (kiểm chứng được):**

- Kết quả đã công bố **không sửa trực tiếp** dưới bất kỳ hình thức nào.
- Phiên bản điều chỉnh bắt buộc có lý do và liên kết tới phiên bản trước; cả hai đều xem lại được.
- Người liên quan nhận Thông báo về việc điều chỉnh.

#### FR-46: Truy vết Mốc chốt phiếu và thay đổi Cuộc họp

Hệ thống lưu bằng chứng về Mốc chốt phiếu và mọi thay đổi thông tin Cuộc họp Hội đồng. Truy vết UC-TB-02, UC-TB-03.

**Hệ quả (kiểm chứng được):**

- Bản ghi Mốc chốt phiếu nêu thời điểm chốt, số phiếu hợp lệ, tổng số Thành viên Hội đồng và danh sách người đã nộp.
- Thay đổi thời gian hoặc thông tin Cuộc họp được ghi Audit log và gửi Thông báo cho người liên quan.

**Ghi chú:**

- Trường hợp "Biên bản bị trả sửa nhưng thời gian Cuộc họp Hội đồng đã hết" đã được P.KHCN chốt là **không thể xảy ra**: Cuộc họp Hội đồng không có giờ kết thúc cấu hình trước (FR-28), chỉ hết khi P.KHCN kết thúc (FR-32), và FR-32 chặn kết thúc khi còn Biên bản chưa đủ hai chữ ký. Sau khi Cuộc họp `Đã kết thúc` thì không còn vòng trả sửa nào (FR-40). Xem DEC-OQ12 (§14).

### 4.7 Thuyết minh, báo cáo tiến độ, nghiệm thu và giải trình (Bước 03, 06, 07)

**Mô tả:** Sau khi qua Hội đồng xét duyệt hồ sơ, Chủ nhiệm đề tài tải BM04 thuyết minh + dự trù kinh phí (tệp hoàn chỉnh soạn ngoài, không có form nhập) làm đầu vào cho Hội đồng xét duyệt thuyết minh. Trong quá trình thực hiện, BM08 báo cáo tiến độ giữa kỳ đi theo **luồng ký tuần tự** Chủ nhiệm đề tài → Trưởng Khoa/Trưởng đơn vị → P.KHCN. Tới mốc nghiệm thu, BM09 + sản phẩm là điều kiện mở Cuộc họp Hội đồng nghiệm thu. BM13 giải trình **chỉ phát sinh khi BM12 yêu cầu**; không có yêu cầu thì việc thiếu BM13 không chặn hoàn tất.

**Yêu cầu chức năng:**

#### FR-47: Tải BM04 thuyết minh và dự trù kinh phí

Chủ nhiệm đề tài có thể tải tệp BM04 hoàn chỉnh lên Đề tài NCKH sau khi đạt xét duyệt của Hội đồng. Truy vết UC-TM-01.

**Hệ quả (kiểm chứng được):**

- BM04 **không có form nhập**: hệ thống chỉ nhận tệp hoàn chỉnh do Chủ nhiệm đề tài soạn và ký bên ngoài (BM04A cho Giảng viên, BM04B cho Sinh viên).
- Hệ thống **không** trích xuất hay cấu trúc hóa nội dung BM04.
- Tệp lưu theo phiên bản; tải bản mới không xóa bản cũ.
- Chỉ tải lên được trong Mốc thời gian cho phép của bước 03; ngoài mốc thì bị chặn.
- Nộp BM04 → Trạng thái tổng quan đề tài chuyển từ `Chờ nộp thuyết minh` sang trạng thái chờ Hội đồng xét duyệt thuyết minh.

#### FR-48: Lập, ký tuần tự và nộp BM08 báo cáo tiến độ

Chủ nhiệm đề tài có thể lập BM08 theo Pipeline form/PDF và gửi theo luồng ký tuần tự. Truy vết UC-BC-01.

**Hệ quả (kiểm chứng được):**

- Luồng bắt buộc theo đúng thứ tự: Chủ nhiệm đề tài ký và gửi → Trưởng Khoa/Trưởng đơn vị ký/xác nhận → P.KHCN nhận. Không bỏ qua khâu nào.
- Mỗi khâu ký diễn ra **bên ngoài hệ thống** trên PDF; hệ thống quản lý phiên bản, người ký, thời điểm và trạng thái chuyển bước.
- Trưởng Khoa/Trưởng đơn vị có thể trả BM08 để sửa kèm lý do bắt buộc; PDF/chữ ký cũ mất hiệu lực và Chủ nhiệm đề tài phải xuất/ký/nộp lại bản mới. **Đã chốt (2026-08-19):** Vòng trả sửa của BM08 áp dụng cùng quy tắc mất hiệu lực như BM01 và Biên bản Hội đồng, để giữ một quy tắc thống nhất trong hệ thống. Xem DEC-OQ13 (§14).
- Nộp BM08 không tạo giai đoạn vòng đời mới; Trạng thái tổng quan đề tài thành `Đang thực hiện — đã nộp báo cáo giữa kỳ`.

#### FR-49: Tải BM09 báo cáo tổng kết và sản phẩm

Chủ nhiệm đề tài có thể tải BM09 và mô tả/tệp sản phẩm lên Đề tài NCKH tại mốc nghiệm thu. Truy vết UC-BC-02.

**Hệ quả (kiểm chứng được):**

- BM09 **không có form nhập**: chỉ nhận tệp hoàn chỉnh.
- BM09 và sản phẩm chính thức là **điều kiện tiền đề** để P.KHCN mở Cuộc họp Hội đồng nghiệm thu (FR-29).
- Tệp lưu theo phiên bản.
- Nộp đủ BM09 + sản phẩm → Trạng thái tổng quan đề tài thành `Chờ nghiệm thu`.

#### FR-50: Lập và nộp BM13 giải trình khi được yêu cầu

Chủ nhiệm đề tài có thể lập BM13 theo Pipeline form/PDF **khi và chỉ khi** BM12 kết luận có yêu cầu chỉnh sửa/giải trình. Truy vết UC-BC-03.

**Hệ quả (kiểm chứng được):**

- Nếu BM12 không yêu cầu chỉnh sửa/giải trình, hệ thống **không tạo** BM13 và việc thiếu BM13 **không chặn** hoàn tất Bước 07.
- Nếu BM12 có yêu cầu, BM13 phải phản hồi theo **từng yêu cầu** cụ thể trong BM12.
- Nộp BM13 → Trạng thái tổng quan đề tài thành `Chờ xác nhận giải trình`.

#### FR-51: P.KHCN kiểm tra và xác nhận BM13

P.KHCN có thể trả BM13 kèm lý do hoặc xác nhận hoàn tất giải trình, **không họp lại Hội đồng**.

**Hệ quả (kiểm chứng được):**

- Hệ thống không yêu cầu và không cho phép lập Hội đồng mới chỉ để xử lý BM13.
- Trả BM13 → lý do bắt buộc; Chủ nhiệm đề tài nhận Thông báo và nộp lại theo cùng quy tắc mất hiệu lực PDF cũ.

#### FR-52: P.KHCN xác nhận Hoàn tất Bước 07

P.KHCN có thể xác nhận `Hoàn tất Bước 07` khi đủ điều kiện.

**Hệ quả (kiểm chứng được):**

- Điều kiện đủ: BM12 kết luận nghiệm thu đạt; **và** BM13 đã được xác nhận nếu BM12 có yêu cầu; **và** BM14 hoàn chỉnh đã được lưu **đối với đề tài có hợp đồng phải thanh lý**.
- Đề tài **không có hợp đồng** không bị chặn vì thiếu BM14.
- Hệ thống hiển thị rõ điều kiện nào còn thiếu khi chặn.

#### FR-53: Xem và tải tài liệu đã nộp theo quyền

Actor có liên quan xem/tải được BM04, BM08, BM09, BM13 và sản phẩm trong phạm vi quyền của mình. Truy vết UC-BC-04.

**Hệ quả (kiểm chứng được):**

- Chủ nhiệm đề tài xem/tải được toàn bộ tài liệu của đề tài mình, mọi phiên bản.
- Trưởng Khoa/Trưởng đơn vị xem được tài liệu của đề tài thuộc đơn vị mình.
- Thành viên Hội đồng/Thư ký Hội đồng chịu ràng buộc thời hạn của FR-34: hết hoạt động thì không tải được nữa.
- Mọi lượt tải tệp được ghi Audit log.

### 4.8 Quyết định, Hợp đồng và trạng thái cuối (Bước 05, 07, 08, 09)

**Mô tả:** Ba Quyết định (BM05 giao nhiệm vụ, BM10 Hội đồng nghiệm thu, BM15 công nhận kết quả) được lập và ký hoàn toàn bên ngoài; P.KHCN đăng nội dung + tệp, và người liên quan đọc dưới dạng **trang bài đọc** mở từ Thông báo chuông. Hợp đồng và BM14 thanh lý cũng chỉ được lưu dưới dạng tệp đã hoàn tất bên ngoài. Bước 09 chỉ là cập nhật trạng thái cuối. Hiện thực UJ-4.

**Yêu cầu chức năng:**

#### FR-54: P.KHCN đăng Quyết định dạng bài đọc

P.KHCN có thể đăng Quyết định (BM05, BM10, BM15) gồm nội dung trình bày dạng bài đọc và tệp Quyết định đã ký. Hiện thực UJ-4. Truy vết UC-TL-05, UC-TL-07, UC-TL-09.

**Hệ quả (kiểm chứng được):**

- Hệ thống **không soạn, không phê duyệt** Quyết định; không có form nhập biểu mẫu Quyết định.
- Đăng Quyết định gửi Thông báo (chuông + email) tới người liên quan; nhấp vào Thông báo mở một trang đọc nội dung Quyết định như một bài viết, kèm liên kết tải tệp.
- BM05 đăng kèm thông tin về Hợp đồng đối với đề tài Giảng viên; đề tài Sinh viên không có Hợp đồng.
- Sửa Quyết định đã đăng tạo phiên bản mới kèm lý do; không sửa trực tiếp.

#### FR-55: Xem và tải Quyết định theo quyền

Actor có quyền xem/tải được Quyết định đã đăng. Hiện thực UJ-4. Truy vết UC-TL-06, UC-TL-08, UC-TL-10.

**Hệ quả (kiểm chứng được):**

- Trước khi P.KHCN đăng, Chủ nhiệm đề tài không có bất kỳ kênh nào thấy nội dung Quyết định.
- Người nhận Quyết định gồm Chủ nhiệm đề tài, Giảng viên hướng dẫn (nếu có), Trưởng Khoa/Trưởng đơn vị và Hội đồng liên quan. **Đã chốt (2026-08-19):** Tập người nhận suy ra tương ứng với tập người nhận công bố kết quả Hội đồng ở FR-44. Xem DEC-OQ11 (§14).

#### FR-56: P.KHCN lưu Hợp đồng đã ký

P.KHCN có thể tải và lưu tệp Hợp đồng đã ký của Đề tài NCKH. Truy vết UC-TL-01.

**Hệ quả (kiểm chứng được):**

- Hệ thống không tham gia soạn, thương lượng hay ký Hợp đồng; không xử lý tạm ứng, thanh toán, quyết toán.
- Chỉ đề tài Giảng viên có Hợp đồng; đề tài Sinh viên không có.
- Ngoài tệp, hệ thống lưu bộ metadata tối thiểu của Hợp đồng: số hợp đồng, ngày ký, giá trị, trạng thái hiệu lực. **Đã chốt (2026-08-19):** Nguồn use case ghi rõ metadata này "chưa phải quyết định chốt"; PRD chốt là CÓ lưu với 4 trường trên, vì nếu không có metadata thì không thể xác định "đề tài có hợp đồng phải thanh lý" ở FR-52 một cách tự động. Đây là quyết định P.KHCN đã xác nhận. Xem DEC-OQ14 (§14).

#### FR-57: Chủ nhiệm đề tài xem và tải Hợp đồng của đề tài mình

Chủ nhiệm đề tài xem/tải được Hợp đồng đã ký của đúng Đề tài NCKH của mình. Truy vết UC-TL-02.

**Hệ quả (kiểm chứng được):**

- Chủ nhiệm đề tài không truy cập được Hợp đồng của đề tài khác.

#### FR-58: P.KHCN lưu bản BM14 hoàn chỉnh

P.KHCN có thể tải bản BM14 thanh lý hợp đồng hoàn chỉnh lên để lưu. Truy vết UC-TL-03, UC-TL-04.

**Hệ quả (kiểm chứng được):**

- Toàn bộ việc lập, xử lý và ký BM14 diễn ra **bên ngoài hệ thống**; hệ thống không có form BM14 và không có luồng phê duyệt BM14.
- Chủ nhiệm đề tài xem được BM14 đã lưu của đề tài mình.
- BM14 đã lưu là một trong các điều kiện xác nhận `Hoàn tất Bước 07` với đề tài có Hợp đồng (FR-52).

#### FR-59: Cập nhật trạng thái cuối của Đề tài NCKH (Bước 09)

P.KHCN có thể cập nhật trạng thái cuối của Đề tài NCKH sau khi Quyết định công nhận kết quả (BM15) đã được đăng.

**Hệ quả (kiểm chứng được):**

- Hai giá trị trạng thái cuối: `Triển khai ứng dụng` hoặc `Lưu hồ sơ`.
- Bước 09 **không có gate nghiệp vụ** nào khác ngoài điều kiện BM15 đã đăng; đây là một thao tác đặt trạng thái. **Đã chốt (2026-08-19):** Tài liệu nguồn không nói bước 09 có hay không có gate; PRD suy ra là không, vì brief mô tả bước 09 là "cập nhật trạng thái cuối". Xem DEC-OQ15 (§14).
- Đặt trạng thái cuối ghi Audit log và gửi Thông báo tới Chủ nhiệm đề tài, Giảng viên hướng dẫn (nếu có) và Trưởng Khoa/Trưởng đơn vị.
- **Đã chốt (2026-08-19):** Brief nêu bước 09 có trách nhiệm của "CNĐT, Khoa, P.KHCN" nhưng không nói ai bấm; PRD chốt P.KHCN là người đặt trạng thái cuối vì đây là hành vi hành chính sau Quyết định. Xem DEC-OQ15 (§14).

### 4.9 Pipeline form/PDF, ma trận BM01–BM15 và cổng data dictionary

**Mô tả:** Đây là năng lực nền được mọi Biểu mẫu có form nhập tái sử dụng, và là quyết định kiến trúc nghiệp vụ quan trọng nhất của hệ thống: hệ thống **không thực hiện việc ký và không kiểm tra chữ ký**; nó sinh PDF để người dùng ký bên ngoài — bằng chữ ký số của chính họ, hoặc in ra ký tay rồi scan — sau đó nhận lại PDF đã ký làm bằng chứng chính thức. Mốc khóa duy nhất là thao tác **Nộp**. Hệ thống không tích hợp dịch vụ ký số hay MISA — lý do là thủ tục đăng ký/cấp quyền vượt phạm vi và thời gian đồ án, không phải hạn chế kỹ thuật. Hiện thực UJ-1, UJ-3.

**Yêu cầu chức năng:**

#### FR-60: Nhập, lưu và xem trước Biểu mẫu

Người lập Biểu mẫu có thể nhập, lưu nháp và xem trước bản trình bày của mọi Biểu mẫu có form nhập. Truy vết UC-FORM-01, UC-FORM-02.

**Hệ quả (kiểm chứng được):**

- Form chứa **đầy đủ mọi thông tin** của biểu mẫu gốc; không lược bỏ trường.
- Dữ liệu lặp (danh sách thành viên, hạng mục kinh phí, tiêu chí đánh giá) được mô hình thành các dòng có cấu trúc, không phải ô văn bản tự do.
- Xem trước hiển thị đúng bố cục sẽ xuất ra PDF.

#### FR-61: Xuất PDF và tiếp tục sửa form trước khi nộp

Người lập Biểu mẫu có thể xuất PDF nhiều lần và vẫn tiếp tục sửa form cho tới khi bấm **Nộp**. Truy vết UC-FORM-03, UC-FORM-04.

**Hệ quả (kiểm chứng được):**

- Xuất PDF **không** khóa form.
- Người dùng xuất được nhiều PDF; PDF cũ không tự mất hiệu lực chỉ vì form thay đổi.

#### FR-62: Tải PDF đã ký lên và nộp để khóa form

Người lập Biểu mẫu có thể tải PDF đã ký lên bản nháp, rồi bấm **Nộp** để biến bản đó thành bản chính thức. Truy vết UC-FORM-05, UC-FORM-07.

**Hệ quả (kiểm chứng được):**

- Tải PDF đã ký lên **không** khóa form; chỉ thao tác **Nộp** khóa form.
- Không nộp được khi chưa có PDF đã ký hợp lệ theo chính sách tệp (FR-63).
- Sau khi nộp, form là bản chính thức và **không sửa được**; muốn thay đổi phải đi qua vòng trả sửa của luồng nghiệp vụ tương ứng.
- Mọi thao tác xuất PDF, tải lên và nộp đều ghi Audit log.

#### FR-63: Chính sách tệp tải lên

Hệ thống kiểm tra tệp tải lên theo chính sách tệp thống nhất cho mọi Biểu mẫu và tài liệu.

**Hệ quả (kiểm chứng được):**

- PDF đã ký chỉ nhận định dạng PDF; tệp hoàn chỉnh (BM04, BM09, BM14, Quyết định) nhận PDF và định dạng Word.
- Vượt giới hạn kích thước hoặc sai định dạng bị từ chối kèm thông báo rõ lý do.
- Giới hạn kích thước và danh sách định dạng cho phép là **giá trị cấu hình** do Quản trị viên đặt, không phải hằng số trong code. Giá trị mặc định khi triển khai: **20 MB** cho Biểu mẫu và tài liệu, **100 MB** cho tệp sản phẩm nghiệm thu; định dạng PDF, DOC, DOCX cho tài liệu, thêm ZIP cho sản phẩm. Architecture dùng ngay các giá trị mặc định này; P.KHCN đổi được sau mà không cần sửa code (DEC-OQ16, §14).

#### FR-64: Hệ thống không tự đối soát form với PDF đã ký

Hệ thống lưu cả dữ liệu form và PDF đã ký nhưng không so sánh nội dung giữa hai bên, và không kiểm tra tính hợp lệ của chữ ký.

**Hệ quả (kiểm chứng được):**

- PDF đã ký là **bằng chứng chính thức** của lần nộp.
- Hệ thống nhận PDF đã ký bất kể người dùng ký số hay ký tay rồi scan; **không** xác thực chứng thư số, không kiểm tra chuỗi tin cậy, không kiểm tra tính toàn vẹn của chữ ký số.
- Trách nhiệm phát hiện sai lệch và chữ ký không hợp lệ thuộc người duyệt; đường xử lý là trả sửa kèm lý do.
- Hệ thống không chặn nộp vì lý do "nội dung PDF khác form" hay "chữ ký số không hợp lệ".

#### FR-65: Hệ thống áp đúng cách xử lý của từng Biểu mẫu BM01–BM15

Hệ thống áp đúng loại xử lý cho từng Biểu mẫu theo ma trận dưới đây.

| BM      | Tên                                     | Form nhập   | Upload         | Cách xử lý                                                                                   | FR liên quan |
| ------- | --------------------------------------- | ----------- | -------------- | -------------------------------------------------------------------------------------------- | ------------ |
| BM01A/B | Phiếu đăng ký đề tài (GV/SV)            | Có          | PDF đã ký      | Pipeline form/PDF                                                                            | FR-19        |
| BM02    | Phiếu đánh giá xét duyệt hồ sơ          | Có          | PDF đã ký      | Phiếu đánh giá, nộp trong Cuộc họp; đủ 100% mới mở BM03                                      | FR-35, FR-36 |
| BM03    | Biên bản Hội đồng xét duyệt hồ sơ       | Có (Thư ký) | Bản 2 chữ ký   | Luồng hai chữ ký, chỉ mở sau Mốc chốt phiếu; **1 biên bản / 1 lượt**                         | FR-38–FR-42  |
| BM04A/B | Thuyết minh + dự trù kinh phí           | **Không**   | Tệp hoàn chỉnh | Soạn ngoài, tải lên để Hội đồng đọc                                                          | FR-47        |
| BM05    | Quyết định giao nhiệm vụ                | **Không**   | Tệp Quyết định | P.KHCN đăng dạng bài đọc                                                                     | FR-54        |
| BM06    | Phiếu đánh giá thuyết minh              | Có          | PDF đã ký      | Như BM02, Hội đồng xét duyệt thuyết minh                                                     | FR-35, FR-36 |
| BM07    | Biên bản Hội đồng xét duyệt thuyết minh | Có (Thư ký) | Bản 2 chữ ký   | Luồng hai chữ ký; **1 biên bản / 1 lượt**; **chỉ một luồng form**, không nhận bản soạn ngoài | FR-38–FR-42  |
| BM08    | Báo cáo tiến độ giữa kỳ                 | Có          | PDF ký tuần tự | Chủ nhiệm → Trưởng Khoa/đơn vị → P.KHCN                                                      | FR-48        |
| BM09    | Báo cáo tổng kết                        | **Không**   | Tệp hoàn chỉnh | Điều kiện mở Cuộc họp nghiệm thu                                                             | FR-49        |
| BM10    | Quyết định Hội đồng nghiệm thu          | **Không**   | Tệp Quyết định | Như BM05                                                                                     | FR-54        |
| BM11    | Phiếu đánh giá nghiệm thu               | Có          | PDF đã ký      | Như BM02, Hội đồng nghiệm thu                                                                | FR-35, FR-36 |
| BM12    | Biên bản Hội đồng nghiệm thu            | Có (Thư ký) | Bản 2 chữ ký   | Luồng hai chữ ký; **1 biên bản / 1 đề tài**; kết luận quyết định có phát sinh BM13 hay không | FR-38–FR-42  |
| BM13    | Giải trình sau nghiệm thu               | Có          | PDF đã ký      | Chỉ phát sinh khi BM12 yêu cầu                                                               | FR-50, FR-51 |
| BM14    | Thanh lý hợp đồng                       | **Không**   | Tệp hoàn chỉnh | Xử lý/ký hoàn toàn ngoài hệ thống                                                            | FR-58        |
| BM15    | Quyết định công nhận kết quả            | **Không**   | Tệp Quyết định | Như BM05                                                                                     | FR-54        |

**Hệ quả (kiểm chứng được):**

- Biểu mẫu thuộc nhóm "không có form nhập" **không có** điểm vào nhập liệu trên UI ở bất kỳ Vai trò nào.
- "Upload" ở Biểu mẫu có form nhập là bước tải lại PDF do hệ thống xuất và đã ký ngoài, **không** phải phương thức soạn biểu mẫu thay thế.

#### FR-66: Cổng data dictionary trước khi phát triển form

Mỗi Biểu mẫu có form nhập phải có data dictionary được duyệt trước khi story phát triển form đó được thực hiện.

**Hệ quả (kiểm chứng được):**

- Data dictionary đối chiếu trực tiếp với **biểu mẫu gốc** trong `docs/bieu-mau-goc/`; biểu mẫu gốc là nguồn đối chiếu cuối cùng khi tài liệu phân tích thiếu hoặc khác nội dung.
- Mỗi trường xác định: tên trường, kiểu dữ liệu, tính bắt buộc, điều kiện hiển thị, quy tắc validation, nguồn dữ liệu (người dùng nhập / dẫn xuất từ hồ sơ / hệ thống sinh).
- Trường thông thường là bắt buộc; trường có điều kiện bắt buộc khi nhánh tương ứng phát sinh.
- Không lược bỏ trường của biểu mẫu gốc.
- Data dictionary là **artifact riêng**, không nằm trong PRD; được P.KHCN hoặc người có thẩm quyền nghiệp vụ duyệt.
- Phạm vi áp dụng: BM01A, BM01B, BM02, BM03, BM06, BM07, BM08, BM11, BM12, BM13.

### 4.10 Trạng thái tổng quan đề tài

**Mô tả:** Hệ thống vẫn giữ trạng thái riêng cho Hồ sơ đăng ký, Đề tài NCKH, Hội đồng và Biểu mẫu để các phép chuyển trạng thái không bị trộn lẫn. Nhưng trên UI, người dùng chỉ cần thấy **một** Trạng thái tổng quan đề tài dẫn xuất từ chúng — vào hệ thống là biết ngay đề tài đang ở đâu. Hiện thực UJ-1, UJ-4.

**Yêu cầu chức năng:**

#### FR-67: Hiển thị một Trạng thái tổng quan đề tài duy nhất

Mọi Actor có quyền xem một Đề tài NCKH đều thấy một Trạng thái tổng quan đề tài duy nhất trên UI. Hiện thực UJ-1.

**Hệ quả (kiểm chứng được):**

- Trạng thái tổng quan đề tài là **dẫn xuất**, không phải trường do người dùng đặt tay (ngoại lệ duy nhất là trạng thái cuối ở FR-59).
- Trạng thái chi tiết của Hồ sơ đăng ký / Đề tài NCKH / Hội đồng / Biểu mẫu vẫn tồn tại và vẫn kiểm soát quy tắc chuyển trạng thái.
- Trạng thái tổng quan đề tài không tiết lộ kết quả Hội đồng trước khi P.KHCN công bố (FR-43, FR-44).

#### FR-68: Ánh xạ trạng thái chi tiết sang Trạng thái tổng quan đề tài

Hệ thống ánh xạ theo đúng bảng dưới đây.

| Trạng thái chi tiết / sự kiện nguồn                                      | Trạng thái tổng quan đề tài                                      |
| ------------------------------------------------------------------------ | ---------------------------------------------------------------- |
| Hồ sơ đăng ký đang soạn                                                  | `Nháp`                                                           |
| Đã nộp cho Giảng viên hướng dẫn                                          | `Đang đợi giảng viên duyệt`                                      |
| Đã nộp cho Trưởng Khoa/Trưởng đơn vị                                     | `Đang đợi khoa duyệt`                                            |
| Hồ sơ bị trả                                                             | `Trả chỉnh sửa`                                                  |
| Hồ sơ đã nộp lại                                                         | `Chờ duyệt lại`                                                  |
| Đã qua Xét duyệt hồ sơ, Cuộc họp xét duyệt hồ sơ chưa mở                 | `Chờ Hội đồng xét duyệt hồ sơ`                                   |
| Cuộc họp xét duyệt hồ sơ đang diễn ra                                    | `Đang xét duyệt tại Hội đồng`                                    |
| BM03 kết luận đạt / không đạt (sau công bố)                              | `Đạt xét duyệt Hội đồng` / `Không đạt xét duyệt Hội đồng`        |
| Hồ sơ đạt nhưng chưa nộp BM04                                            | `Chờ nộp thuyết minh`                                            |
| Đã nộp BM04, Cuộc họp xét duyệt thuyết minh chưa mở                      | `Chờ Hội đồng xét duyệt thuyết minh`                             |
| Hội đồng xét duyệt thuyết minh đang xử lý                                | `Đang xét duyệt thuyết minh`                                     |
| BM07 kết luận không thực hiện / thực hiện (sau công bố)                  | `Thuyết minh không đạt` / `Đang thực hiện`                       |
| Đã nộp BM08                                                              | `Đang thực hiện — đã nộp báo cáo giữa kỳ`                        |
| Đã nộp BM09 và sản phẩm                                                  | `Chờ nghiệm thu`                                                 |
| Cuộc họp nghiệm thu đang diễn ra                                         | `Đang nghiệm thu`                                                |
| BM12 kết luận đạt, không yêu cầu xử lý tiếp                              | `Đã nghiệm thu`                                                  |
| BM12 yêu cầu chỉnh sửa/giải trình                                        | `Chờ giải trình sau nghiệm thu`                                  |
| Chủ nhiệm đề tài đã nộp BM13                                             | `Chờ xác nhận giải trình`                                        |
| Điều kiện Bước 07 đã được P.KHCN xác nhận                                | `Hoàn tất Bước 07`                                               |
| BM12 kết luận không đạt                                                  | `Không đạt nghiệm thu`                                           |
| Yêu cầu hủy đã gửi, P.KHCN chưa xử lý                                    | Giữ nguyên trạng thái đang có, kèm cờ `Có yêu cầu hủy chờ xử lý` |
| Yêu cầu hủy được chấp thuận                                              | `Đã hủy`                                                         |
| Hồ sơ hết hạn                                                            | `Quá hạn`                                                        |
| Đề tài quá hạn mốc BM04/BM08/BM09/BM13 (hệ thống tự chuyển, khóa đề tài) | `Quá hạn giữa quy trình`                                         |
| Đề tài giao trực tiếp đã có người khác được chọn                         | `Không được chọn`                                                |
| P.KHCN đặt trạng thái cuối (Bước 09)                                     | `Triển khai ứng dụng` / `Lưu hồ sơ`                              |

**Hệ quả (kiểm chứng được):**

- Các mốc `Đã tải PDF ký` và `Đã nộp` thuộc trạng thái Biểu mẫu hoặc lịch sử sự kiện, **không** là Trạng thái tổng quan đề tài.
- Báo cáo giữa kỳ là thông tin bổ sung của `Đang thực hiện`, không tạo giai đoạn vòng đời độc lập.

#### FR-83: Hệ thống tự khóa đề tài quá hạn giữa quy trình (bước 03–07)

Khi Đề tài NCKH đã qua bước 01 nhưng bỏ Mốc thời gian bắt buộc của bước 03–07 (BM04, BM08, BM09, BM13), **hệ thống tự chuyển đề tài sang `Quá hạn giữa quy trình` và khóa đề tài**. Không có cơ chế gia hạn hay đường xử lý nào khác.

**Hệ quả (kiểm chứng được):**

- **Tự động, không cần thao tác của ai:** ngay khi Mốc thời gian `Đã chốt` của BM04/BM08/BM09/BM13 hết mà tài liệu/biểu mẫu chưa được nộp, hệ thống chuyển Trạng thái tổng quan đề tài sang `Quá hạn giữa quy trình`, ghi lại **bước bị quá hạn** và mốc gốc, rồi gửi Thông báo cho P.KHCN, Chủ nhiệm đề tài, Trưởng Khoa/Trưởng đơn vị và Giảng viên hướng dẫn (nếu có). Audit log ghi hệ thống là chủ thể thực hiện.
- **Đề tài bị khóa:** ở trạng thái này, mọi thao tác nghiệp vụ trên đề tài đều bị chặn ở phía server — không nộp/sửa/nộp lại Biểu mẫu, không lập Hội đồng cho đề tài, không tải tệp mới. Chỉ còn quyền **xem** lịch sử và tệp cũ theo phạm vi của từng Vai trò (FR-87).
- **Không có cơ chế gia hạn, không có cơ chế mở lại:** sau khi đề tài đã `Quá hạn giữa quy trình`, P.KHCN **không** gia hạn Mốc thời gian để cứu đề tài, **không** chuyển đề tài về trạng thái khác; Quản trị viên cũng không. Đây là trạng thái **kết thúc, không hoàn tác**. Muốn tiếp tục thì đăng ký lại ở Đợt đăng ký tiếp theo.
- Đây là **trạng thái kết thúc âm** → nhả suất Giới hạn đề tài đăng ký (FR-13 case e) ngay tại thời điểm hệ thống chuyển trạng thái.
- Phòng ngừa nằm ở phía trước mốc, không phải sau: hệ thống nhắc Chủ nhiệm đề tài trước hạn (FR-71) và người có quyền đặt mốc sửa được mốc **trước khi mốc hết** (FR-72, ghi Audit log kèm lý do). Sau khi mốc đã hết thì không còn đường nào.
- Mốc quá hạn **không ảnh hưởng** Cuộc họp Hội đồng đang `Đang diễn ra` hoặc kết quả Hội đồng đã công bố; FR-83 chỉ áp dụng cho các bước mà **Chủ nhiệm đề tài** là người có nghĩa vụ nộp tài liệu.
- Hiển thị trên dòng thời gian (FR-81): bước bị quá hạn đánh dấu `Quá hạn` kèm ngày hết hạn gốc; các bước sau đó hiển thị là không còn khả thi.
- Đây là **ngoại lệ có chủ ý** của nguyên tắc SM-C1 ("hệ thống không tự quyết định thay con người"): quá hạn là sự kiện thời gian khách quan, không phải phán xét chuyên môn, nên hệ thống chuyển trạng thái tự động (DEC-OQ36, §14).

#### FR-76: Theo dõi trạng thái xử lý Hồ sơ đăng ký và Biểu mẫu

Actor có liên quan theo dõi được trạng thái chi tiết của Hồ sơ đăng ký và của từng Biểu mẫu thuộc phạm vi quyền của mình. Truy vết UC-DK-08, UC-TB-04.

**Hệ quả (kiểm chứng được):**

- Ngoài Trạng thái tổng quan đề tài (FR-67), Chủ nhiệm đề tài xem được trạng thái từng Biểu mẫu: `Nháp` / `Đã xuất PDF` / `Đã tải PDF ký` / `Đã nộp` / `Bị trả` / `Đã hoàn tất`.
- Mỗi hồ sơ có dòng thời gian xử lý: ai xử lý, lúc nào, kết quả, lý do (nếu là trả sửa) — đọc được bởi Chủ nhiệm đề tài mà không cần quyền xem Audit log đầy đủ.
- Chủ nhiệm đề tài luôn thấy **việc gì đang chờ mình** và **hạn của việc đó** theo Mốc thời gian đang áp dụng.
- Trạng thái chi tiết không tiết lộ kết quả Hội đồng trước khi P.KHCN công bố (FR-43).

### 4.11 Thông báo

**Mô tả:** Thông báo đi đồng thời qua **hai kênh: chuông trong ứng dụng và email**. Với Quyết định, chuông là điểm vào của trang bài đọc. Hiện thực UJ-4.

**Yêu cầu chức năng:**

#### FR-69: Nhận Thông báo qua chuông trong ứng dụng

Mọi Actor có Tài khoản nhận được Thông báo qua biểu tượng chuông với số lượng chưa đọc. Hiện thực UJ-4.

**Hệ quả (kiểm chứng được):**

- Nhấp vào Thông báo mở đúng đối tượng liên quan (hồ sơ, Cuộc họp Hội đồng, Biểu mẫu) hoặc trang bài đọc Quyết định.
- Thông báo có trạng thái đã đọc/chưa đọc và lịch sử xem lại được.

#### FR-70: Nhận Thông báo qua email

Mọi sự kiện Thông báo được gửi kèm qua email tới địa chỉ của Tài khoản.

**Hệ quả (kiểm chứng được):**

- Email chứa nội dung tóm tắt sự kiện và liên kết mở đúng đối tượng trong hệ thống.
- Gửi email thất bại được ghi log và thử lại; thất bại của email **không** làm sai lệch trạng thái nghiệp vụ. **Đã chốt (2026-08-19):** Thử lại tối đa 3 lần với giãn cách tăng dần; sau đó P.KHCN thấy dấu hiệu gửi thất bại trên UI. Xem DEC-OQ17 (§14).
- Chuông và email dùng cùng một danh sách sự kiện; không có sự kiện chỉ gửi một kênh.

#### FR-71: Danh sách sự kiện Thông báo

Hệ thống phát Thông báo cho các sự kiện dưới đây, tới các người nhận tương ứng.

| Sự kiện                                                          | Người nhận                                                                     | FR nguồn     |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------------ | ------------ |
| Đợt đăng ký được công bố                                         | Giảng viên, Sinh viên                                                          | FR-11        |
| Hồ sơ đăng ký được nộp / nộp lại                                 | Người xét duyệt hồ sơ tương ứng                                                | FR-19, FR-23 |
| Hồ sơ đăng ký bị trả kèm lý do                                   | Chủ nhiệm đề tài                                                               | FR-22        |
| Hồ sơ đăng ký được duyệt (Xét duyệt hồ sơ)                       | Chủ nhiệm đề tài, P.KHCN                                                       | FR-20, FR-21 |
| Hồ sơ chuyển `Không được chọn` (mất suất giao trực tiếp)         | Chủ nhiệm đề tài                                                               | FR-14        |
| Hồ sơ chuyển `Quá hạn`                                           | Chủ nhiệm đề tài                                                               | FR-12        |
| Yêu cầu hủy được gửi / được xử lý                                | P.KHCN / Chủ nhiệm đề tài                                                      | FR-25        |
| Được thêm vào Hội đồng (kèm email mời tạo Tài khoản nếu chưa có) | Thành viên Hội đồng, Thư ký Hội đồng                                           | FR-5, FR-27  |
| Cuộc họp Hội đồng được mở                                        | Toàn bộ Hội đồng                                                               | FR-29        |
| Thông tin Cuộc họp Hội đồng thay đổi                             | Toàn bộ Hội đồng                                                               | FR-30        |
| Cuộc họp Hội đồng bị hủy kèm lý do                               | Toàn bộ Hội đồng                                                               | FR-33        |
| Nhắc Thành viên Hội đồng chưa nộp Phiếu đánh giá                 | Thành viên Hội đồng chưa nộp                                                   | FR-78        |
| Cuộc họp Hội đồng đang treo vì thiếu phiếu                       | P.KHCN, Thư ký Hội đồng                                                        | FR-78        |
| Mốc chốt phiếu được tạo (đủ 100% phiếu)                          | Thư ký Hội đồng, P.KHCN                                                        | FR-36        |
| Biên bản Hội đồng được nộp                                       | P.KHCN                                                                         | FR-38        |
| Biên bản Hội đồng bị trả kèm lý do                               | Thư ký Hội đồng                                                                | FR-40        |
| Kết quả Hội đồng được công bố                                    | Chủ nhiệm đề tài, Giảng viên hướng dẫn, Trưởng Khoa/đơn vị, toàn bộ Hội đồng   | FR-44        |
| Kết quả đã công bố được điều chỉnh                               | Người nhận như trên                                                            | FR-45        |
| Quyết định (BM05/BM10/BM15) được đăng                            | Chủ nhiệm đề tài, Giảng viên hướng dẫn, Trưởng Khoa/đơn vị, Hội đồng liên quan | FR-54        |
| BM08 chờ ký/xác nhận ở khâu tiếp theo                            | Trưởng Khoa/đơn vị, P.KHCN                                                     | FR-48        |
| BM13 được yêu cầu / được nộp / được xác nhận                     | Chủ nhiệm đề tài, P.KHCN                                                       | FR-50, FR-51 |
| Yêu cầu Vai trò được duyệt / từ chối                             | Người đăng ký Tài khoản                                                        | FR-3         |
| Tài khoản bị khóa / mở khóa                                      | Chủ Tài khoản                                                                  | FR-4         |
| Mốc thời gian của bước/Biểu mẫu thay đổi                         | Người có nghĩa vụ trong mốc đó                                                 | FR-72        |
| Sắp đến hạn của Mốc thời gian đang chờ hành động của mình        | Người có nghĩa vụ                                                              | FR-72        |
| Đề tài bị hệ thống khóa vì quá hạn giữa quy trình                | P.KHCN, Chủ nhiệm đề tài, Trưởng Khoa/đơn vị, Giảng viên hướng dẫn (nếu có)    | FR-83        |

**Hệ quả (kiểm chứng được):**

- Mỗi sự kiện trong bảng gửi đúng tập người nhận, không gửi tràn cho người không liên quan.
- **Đã chốt (2026-08-19):** Mẫu nội dung (subject/body) của từng sự kiện và quy tắc nhắc trước hạn (mặc định nhắc 1 lần, 24 giờ trước hạn) do UX/đặc tả chốt, không nằm trong PRD. Xem DEC-OQ17 (§14).

**Ngoài phạm vi:**

- Thông báo qua SMS.
- Người dùng tự cấu hình bật/tắt từng loại Thông báo.

### 4.12 Mốc thời gian và Audit log

**Mô tả:** Mốc thời gian được cấu hình theo hai phạm vi: Quản trị viên cho nhánh `Tuyển chọn` và mốc mặc định, P.KHCN cho từng Đề tài giao trực tiếp; hệ thống dùng các mốc đó để kiểm soát quyền thao tác. Song song, mọi thao tác quan trọng đều để lại Audit log bất biến để P.KHCN giải trình được. Hiện thực UJ-6.

**Yêu cầu chức năng:**

#### FR-72: Cấu hình Mốc thời gian cho quy trình

Quản trị viên cấu hình Mốc thời gian của nhánh `Tuyển chọn` và mốc mặc định toàn hệ thống; P.KHCN tự cấu hình Mốc thời gian của nhánh `Giao trực tiếp`. Hiện thực UJ-6.

**Hệ quả (kiểm chứng được):**

- **Phạm vi của Quản trị viên:** Đợt đăng ký (nhánh Tuyển chọn); bước 01–09; thời hạn nộp/sửa/nộp lại của BM01, BM04, BM08, BM09, BM13 và các tài liệu bước 05–07 cho đề tài tuyển chọn; giá trị mặc định áp cho đề tài mới.
- **Phạm vi của P.KHCN:** với **từng** Đề tài giao trực tiếp — hạn đăng ký của đề tài trong danh mục, ngày tới buổi thuyết minh, ngày họp Hội đồng của từng giai đoạn, và thời hạn nộp/sửa/nộp lại của từng Biểu mẫu thuộc đề tài đó. P.KHCN đặt được các mốc này bất cứ lúc nào, không cần Quản trị viên và không phụ thuộc mốc của nhánh Tuyển chọn.
- P.KHCN **không** sửa được Mốc thời gian của đề tài tuyển chọn; muốn gia hạn thì yêu cầu Quản trị viên.
- Quản trị viên **không** cần can thiệp vào mốc của đề tài giao trực tiếp; nhưng vẫn đặt được giá trị mặc định mà P.KHCN thấy khi tạo đề tài mới.
- Hệ thống áp Mốc thời gian để chặn thao tác ngoài hạn và để chuyển trạng thái tự động (ví dụ `Quá hạn`).
- Mốc được **cấu hình sẵn cho cả quy trình** ngay từ đầu, không đặt lẻ khi tới bước (FR-80), và được **hiển thị cho người liên quan** qua dòng thời gian đề tài (FR-81) và Lịch (FR-82).
- Mọi thay đổi Mốc thời gian — do Vai trò nào — đều ghi Audit log và gửi Thông báo tới người có nghĩa vụ trong mốc đó.
- Mốc thời gian là **hạn cứng, không có thời gian ân hạn**: ngay khi qua mốc, hệ thống chặn thao tác tương ứng, không có cửa sổ nộp muộn cho bất kỳ Vai trò nào. Muốn nộp muộn thì người có quyền đặt mốc phải đổi mốc, và việc đổi mốc để lại Audit log.
- **Mốc của Phiếu đánh giá và Biên bản Hội đồng:** cấu hình được (Mốc chốt phiếu dự kiến, hạn nộp Biên bản), nhưng **luôn bị bao trong** khoảng Cuộc họp Hội đồng ở trạng thái `Đang diễn ra` (DEC-OQ3, §14). Vì Cuộc họp **không có giờ kết thúc** (FR-28), "bị bao trong" được thực thi như sau: mốc chỉ có hiệu lực từ lúc Cuộc họp mở; khi P.KHCN kết thúc hoặc hủy Cuộc họp, mọi mốc thuộc Cuộc họp đó **hết hiệu lực ngay**, kể cả khi thời điểm ghi trong mốc còn ở tương lai. Không đặt được mốc cho một Cuộc họp `Nháp` sao cho mốc đó hết trước khi Cuộc họp mở.
- **Cuộc họp Hội đồng tự nó không có mốc kết thúc** — không cấu hình được ở bất kỳ đâu trong FR-72 (FR-28).

#### FR-73: Audit log bất biến cho thao tác quan trọng

Hệ thống ghi Audit log bất biến cho mọi thao tác quan trọng.

**Hệ quả (kiểm chứng được):**

- Mỗi bản ghi có: ai, Vai trò nào, làm gì, lúc nào, trên đối tượng nào, lý do (khi lý do là bắt buộc).
- Audit log **không sửa, không xóa** bởi bất kỳ Vai trò nào, kể cả Quản trị viên.
- Phạm vi tối thiểu: nộp/trả/duyệt hồ sơ, mở/kết thúc/hủy Cuộc họp Hội đồng, nộp Phiếu đánh giá, Mốc chốt phiếu, các mốc của Luồng hai chữ ký, công bố và điều chỉnh kết quả, đăng Quyết định, lưu Hợp đồng/BM14, thay đổi Tài khoản/Vai trò/Quyền chức năng, thay đổi Mốc thời gian, tải tệp lên và tải tệp xuống.
- P.KHCN xem được Audit log của các đối tượng thuộc phạm vi quản lý của mình.

#### FR-74: Kiểm soát quyền truy cập tệp

Mọi tệp (PDF đã ký, tệp hoàn chỉnh, Quyết định, Hợp đồng, sản phẩm) chỉ truy cập được qua kiểm tra quyền theo Vai trò và ngữ cảnh đối tượng.

**Hệ quả (kiểm chứng được):**

- Không có URL tệp nào truy cập được mà không qua kiểm tra quyền, kể cả khi biết chính xác đường dẫn.
- Ràng buộc thời hạn của Hội đồng ở FR-34 được thực thi ở tầng truy cập tệp, không chỉ ở UI.

### 4.13 Lịch trình đề tài và Lịch (Calendar)

**Mô tả:** Mốc thời gian không chỉ để chặn thao tác — nó là thông tin người dùng cần thấy. Vì mốc được **cấu hình sẵn cho cả quy trình** (Quản trị viên cho nhánh Tuyển chọn, P.KHCN cho từng Đề tài giao trực tiếp — FR-72), mỗi Đề tài NCKH có một lịch trình đầy đủ ngay khi hình thành. Hệ thống trình bày lịch trình đó theo hai cách bổ trợ nhau: **dòng thời gian 9 bước** trên trang chi tiết đề tài (đề tài này đi tới đâu, còn gì phía trước), và **Lịch** tháng kiểu Google Calendar (tháng này tôi phải làm gì). Cả hai đều **dẫn xuất** từ Mốc thời gian, không phải dữ liệu nhập riêng. Hiện thực UJ-1, UJ-6.

**Yêu cầu chức năng:**

#### FR-80: Cấu hình sẵn toàn bộ Mốc thời gian của một đề tài

Người có quyền đặt mốc (FR-72) cấu hình sẵn mốc của **tất cả** bước 01–09 cho một đề tài, thay vì đặt lẻ từng bước khi tới lúc. Hiện thực UJ-6.

**Hệ quả (kiểm chứng được):**

- Khi P.KHCN tạo một Đề tài giao trực tiếp, hệ thống mở một biểu cấu hình đủ các mốc của cả quy trình: hạn đăng ký, hạn nộp BM04, ngày họp Hội đồng xét duyệt thuyết minh, hạn BM08, hạn BM09 + sản phẩm, ngày họp Hội đồng nghiệm thu, hạn BM13, và hạn các tài liệu bước 05–07.
- Đề tài nhánh `Tuyển chọn` nhận mốc từ cấu hình của Quản trị viên cho Đợt (FR-72); không phải nhập lại từng đề tài.
- Mỗi mốc lưu: bước/Biểu mẫu liên quan, loại mốc (`Hạn nộp` / `Ngày họp` / `Mở–đóng đăng ký`), thời điểm, tính chất (`Dự kiến` / `Đã chốt`), và Vai trò có nghĩa vụ.
- Mốc `Dự kiến` **không** dùng để chặn thao tác; chỉ mốc `Đã chốt` mới có hiệu lực chặn (FR-72). Hệ thống phân biệt rõ hai loại trên mọi màn hình hiển thị.
- Thiếu mốc của một bước chưa tới **không** chặn các bước trước đó; đề tài vẫn chạy được và hệ thống nhắc người có quyền đặt mốc bổ sung trước khi tới bước đó.
- Sửa mốc ghi Audit log, gửi Thông báo (FR-71) và cập nhật ngay dòng thời gian (FR-81) cùng Lịch (FR-82) của mọi người liên quan.

#### FR-81: Dòng thời gian 9 bước trên trang chi tiết đề tài

Trang chi tiết Đề tài NCKH hiển thị toàn bộ 9 bước quy trình kèm mốc thời gian và trạng thái từng bước. Hiện thực UJ-1, UJ-6.

**Hệ quả (kiểm chứng được):**

- Mỗi bước hiển thị: tên bước, mốc thời gian áp dụng, trạng thái (`Đã xong` / `Đang mở` / `Chưa tới` / `Quá hạn`), Biểu mẫu của bước, và **đang chờ ai**.
- Chủ nhiệm đề tài nhìn một lần là biết **việc đang chờ mình** và **hạn của việc đó**, khớp FR-76; đây là nơi hiện thực yêu cầu đó bằng giao diện.
- Bước đang mở được làm nổi bật; điểm vào thao tác của bước đó (nộp biểu mẫu, tải tệp) đặt ngay trên dòng thời gian nếu người xem có quyền.
- Dòng thời gian **không tiết lộ kết quả Hội đồng trước khi công bố** (FR-43, FR-67): trước công bố chỉ hiện bước đã diễn ra và trạng thái giai đoạn, không hiện kết luận.
- Quyền xem: Chủ nhiệm đề tài, Giảng viên hướng dẫn, Trưởng Khoa/Trưởng đơn vị của đơn vị đó và P.KHCN thấy toàn bộ dòng thời gian; Thành viên Hội đồng và Thư ký Hội đồng chỉ thấy mốc của lượt xét duyệt mình tham gia.
- Mốc `Dự kiến` hiển thị khác mốc `Đã chốt` để người dùng không lên kế hoạch sai (FR-80).

#### FR-82: Lịch tháng

Mọi Actor có Tài khoản có một mục **Lịch** hiển thị các Mốc thời gian liên quan tới mình trên một **lịch tháng**, để trả lời đúng một câu hỏi: tháng này tôi có việc gì. Hiện thực UJ-6.

**Hệ quả (kiểm chứng được):**

- **Chỉ có chế độ xem tháng.** Không có chế độ tuần, không có chế độ ngày, không có xem theo giờ.
- Điều hướng tháng trước / tháng sau và nhảy về tháng hiện tại; ngày hôm nay được đánh dấu.
- Sự kiện trên Lịch gồm: hạn nộp/sửa/nộp lại từng Biểu mẫu, ngày họp Hội đồng của từng giai đoạn, mốc mở–đóng đăng ký, và hạn xử lý của người xét duyệt.
- Mỗi ô ngày hiện sự kiện của ngày đó ở dạng ngắn (loại việc + tên đề tài); ngày có nhiều sự kiện hơn chỗ hiển thị thì có chỉ dấu "+N" mở ra danh sách đầy đủ của ngày đó.
- Nhấp một sự kiện mở đúng đối tượng liên quan (đề tài, Biểu mẫu, Cuộc họp Hội đồng) — cùng đích đến với Thông báo tương ứng (FR-69).
- **Lịch chỉ đọc:** không tạo, sửa, xóa sự kiện trực tiếp trên Lịch. Sự kiện là dẫn xuất của Mốc thời gian; muốn đổi thì đổi mốc qua FR-72, và Lịch cập nhật theo.
- Phạm vi dữ liệu theo Vai trò: Chủ nhiệm đề tài thấy sự kiện của đề tài mình; Giảng viên hướng dẫn và Trưởng Khoa/Trưởng đơn vị thấy sự kiện của đề tài thuộc phạm vi mình; Thành viên/Thư ký Hội đồng thấy ngày họp và hạn phiếu/biên bản của lượt mình; P.KHCN thấy sự kiện của mọi đề tài đang quản lý.
- Lọc được theo đề tài và theo loại sự kiện; sự kiện quá hạn mà chưa hoàn thành được đánh dấu khác biệt.
- Mốc `Dự kiến` hiển thị khác mốc `Đã chốt` (FR-80), để người dùng không lên kế hoạch theo ngày chưa chốt.
- Lịch và dòng thời gian (FR-81) luôn khớp nhau vì cùng đọc một nguồn Mốc thời gian; không có đường nào tạo sự kiện chỉ tồn tại ở một trong hai chỗ.
- **Đã chốt (2026-08-19):** MVP không xuất tệp .ics và không đồng bộ hai chiều với Google Calendar/Outlook — chỉ là lịch trong ứng dụng. Đồng bộ ra lịch ngoài là ứng viên v2. Xem DEC-OQ33 (§14).

**Ngoài phạm vi:**

- **Chế độ xem tuần, xem ngày, xem theo giờ** — người dùng chỉ cần biết trong tháng có việc gì.
- Người dùng tự tạo sự kiện cá nhân trên Lịch.
- Đặt phòng họp, kiểm tra trùng lịch của Thành viên Hội đồng, gợi ý thời gian họp.
- Đồng bộ với lịch ngoài (Google Calendar, Outlook), xuất `.ics`.

**Ghi chú:**

- `[NOTE FOR PM]` Dòng thời gian (FR-81) là **cốt lõi** — nó là cách hiện thực lời hứa "vào là biết đề tài ở đâu" của §1. Lịch tháng (FR-82) là lớp tiện ích trên cùng dữ liệu đó; nếu tiến độ 3 tháng căng, cắt FR-82 xuống chỉ còn danh sách "việc sắp tới hạn" theo §9 mà **không** cắt FR-81.

### 4.14 Dữ liệu danh mục nền

**Mô tả:** Nhiều FR phụ thuộc dữ liệu tham chiếu nền: danh sách Khoa/đơn vị (FR-20, FR-84), bảng học hàm-học vị (FR-75, FR-60), danh sách lĩnh vực đề tài (FR-16). Dữ liệu này cần được quản lý tập trung và kiểm soát ảnh hưởng khi sửa đổi.

**Yêu cầu chức năng:**

#### FR-85: Quản trị viên quản lý dữ liệu danh mục nền

Quản trị viên có thể tạo, sửa và ẩn (không xóa cứng) các mục trong danh mục nền: Khoa/đơn vị, học hàm-học vị, lĩnh vực đề tài.

**Hệ quả (kiểm chứng được):**

- **Khoa/đơn vị:** dùng làm đơn vị phụ trách của Trưởng Khoa/Trưởng đơn vị (FR-84) và để giới hạn phạm vi duyệt (FR-20). Sửa tên đơn vị **không** làm thay đổi dữ liệu của hồ sơ đã nộp; hồ sơ giữ giá trị tại thời điểm nộp.
- **Học hàm-học vị:** dùng trong Hồ sơ cá nhân (FR-75) và điền tự động vào Biểu mẫu (FR-60). Danh sách khớp bộ giá trị trong biểu mẫu gốc.
- **Lĩnh vực đề tài:** dùng khi khai hồ sơ đăng ký (FR-16). Danh sách do Quản trị viên cấu hình.
- Ẩn một mục đã có hồ sơ tham chiếu: mục đó không xuất hiện trong danh sách chọn của form mới, nhưng hồ sơ cũ vẫn hiển thị đúng giá trị. Không có xóa cứng.
- Mọi thao tác tạo/sửa/ẩn ghi Audit log.
- **Đã chốt (2026-08-19):** Quản trị viên quản lý danh mục nền vì đây là cấu hình hệ thống, không phải nghiệp vụ NCKH. Nếu P.KHCN cần tự quản thì sửa quyền trên Quyền chức năng (FR-8). Xem DEC-OQ38 (§14).

## 5. Ngoài phạm vi (Non-Goals)

Hệ thống này **không** trở thành và **không** làm những việc sau. Danh sách này ngăn hiện tượng "làm thêm cái gần gần" ở mọi cấp (epic, story, code).

- **Không phải hệ thống ký số.** Không tích hợp dịch vụ chữ ký số, không tích hợp MISA hay hệ thống nào khác của trường, và **không kiểm tra tính hợp lệ của chữ ký số** trên tệp tải lên. Người dùng ký ngoài hệ thống theo cách của họ (ký số bằng chứng thư riêng, hoặc in–ký tay–scan) rồi tải PDF đã ký lên. Lý do là thủ tục đăng ký/cấp quyền vượt phạm vi và thời gian đồ án, **không** phải hạn chế kỹ thuật.
- **Không đăng nhập bằng bên thứ ba.** MVP chỉ có email + mật khẩu (FR-1); không Google, không Microsoft, không SSO của trường. Lý do như trên: thủ tục cấp quyền OAuth/SSO của trường vượt thời gian đồ án.
- **Không phải nơi họp.** Không họp trực tuyến, không ghi âm, không ghi hình, không có kênh chat/thảo luận chuyên môn của Hội đồng.
- **Không can thiệp nội dung đánh giá chuyên môn.** Hệ thống không tính điểm tổng, không xếp loại, không suy ra kết luận thay Hội đồng; kết luận nằm trong Biên bản Hội đồng do Thư ký Hội đồng lập.
- **Không phải hệ thống tài chính.** Không tạm ứng, thanh toán, quyết toán, hoàn trả, không phê duyệt chứng từ kế toán, không tích hợp tài chính.
- **Không phải hệ thống ký/duyệt Quyết định và Hợp đồng.** Quyết định và Hợp đồng được lập, thương lượng và ký hoàn toàn bên ngoài; hệ thống chỉ lưu và cung cấp bản đã hoàn tất.
- **Không nới ngưỡng đủ phiếu.** Không có ngưỡng quá bán, 2/3 hay bất kỳ ngưỡng nào ngoài 100%; không có quyền ghi đè cho bất kỳ Vai trò nào.
- **Không mở lại Phiếu đánh giá sau Mốc chốt phiếu**, và **không thay đổi cấu trúc Hội đồng sau khi Cuộc họp Hội đồng mở**.
- **Không mở rộng tập actor.** Thành viên Nhóm nghiên cứu ngoài Chủ nhiệm đề tài, Hiệu trưởng/Đại diện Nhà trường, Phòng Tài chính - Kế toán, tổ chức phối hợp, thư viện đều không có Tài khoản và không thao tác.
- **Không trích xuất nội dung BM04.** Hội đồng tự đọc tệp thuyết minh.
- **Không sao chép Hội đồng cũ** sang Hội đồng mới.
- **Không đóng Đợt đăng ký thủ công** trước hạn, cho bất kỳ Vai trò nào.
- **Không phải app mobile native.** MVP là web responsive; không có luồng nào bắt buộc dùng trên điện thoại.
- **Không có "Quản lý nhật ký"** như một tính năng nghiệp vụ (khác Audit log kỹ thuật ở FR-73) — đã hoãn.
- **Không phải 4 module còn lại** của P.KHCN (Hội nghị/Hội thảo, đề tài cấp Nhà nước/Tỉnh-Bộ-ngành, nghiệm thu sản phẩm NCKH, chuyển giao công nghệ và dịch vụ).

## 6. Phạm vi MVP

### 6.1 Trong phạm vi

Toàn bộ **9 bước** quy trình chính thức (§3.1), áp dụng cho **cả đề tài Giảng viên và đề tài Sinh viên**. Nội dung chi tiết nằm ở các mục tương ứng, không diễn giải lại ở đây:

- §4.1 Tài khoản, Vai trò và Phân quyền
- §4.2 Đợt đăng ký và Giới hạn đề tài đăng ký
- §4.3 Đăng ký đề tài và Xét duyệt hồ sơ
- §4.4 Hội đồng và Cuộc họp Hội đồng
- §4.5 Phiếu đánh giá và Mốc chốt phiếu
- §4.6 Biên bản Hội đồng và Công bố kết quả
- §4.7 Thuyết minh, báo cáo tiến độ, nghiệm thu và giải trình
- §4.8 Quyết định, Hợp đồng và trạng thái cuối
- §4.9 Pipeline form/PDF, toàn bộ 15 Biểu mẫu BM01–BM15 theo ma trận FR-65, cổng data dictionary
- §4.10 Trạng thái tổng quan đề tài
- §4.11 Thông báo qua chuông + email
- §4.12 Mốc thời gian hai phạm vi, Audit log bất biến, kiểm soát quyền truy cập tệp
- §4.13 Dòng thời gian 9 bước và Lịch tháng
- §4.14 Dữ liệu danh mục nền

### 6.2 Ngoài phạm vi MVP

- **4 module còn lại** của P.KHCN — mỗi module là một quy trình riêng; ưu tiên chứng minh module 1 chạy được trước.
- **Tích hợp ký số / MISA / hệ thống khác của trường** — thủ tục cấp quyền vượt thời gian đồ án.
- **Đăng nhập bằng bên thứ ba (Google / Microsoft / SSO trường)** — MVP chỉ email + mật khẩu (FR-1); đây là ứng viên v2 vì mô hình Tài khoản đã tách khỏi phương thức xác thực nên thêm sau không phá dữ liệu.
- **Họp trực tuyến, ghi âm/ghi hình, kênh thảo luận chuyên môn** — nằm ngoài nguyên tắc trung tâm.
- **Mọi nghiệp vụ tài chính** và quy trình ký Quyết định/Hợp đồng.
- **Trích xuất/cấu trúc hóa nội dung BM04.**
- **Sao chép danh sách Hội đồng cũ** — `[NOTE FOR PM]` đây là tiện ích nhỏ nhưng tiết kiệm nhiều thao tác cho P.KHCN khi họ lập nhiều Hội đồng; nếu tiến độ cho phép, đáng xem lại ở v2.
- **Thông báo SMS.**
- **Tài khoản/quyền thao tác** cho thành viên Nhóm nghiên cứu, Hiệu trưởng, Phòng Tài chính - Kế toán.
- **Quản lý nhật ký** (tính năng nghiệp vụ) — đã hoãn theo quyết định của người dùng.
- **App mobile native** — web responsive đủ cho mọi luồng.
- **Báo cáo/thống kê nâng cao** (biểu đồ, xuất Excel tổng hợp toàn trường) — `[NOTE FOR PM]` P.KHCN hiện đang dùng Excel để thống kê; nhu cầu báo cáo rất có thể xuất hiện ngay khi hệ thống có dữ liệu. MVP chỉ có danh sách + bộ lọc + Trạng thái tổng quan đề tài; báo cáo tổng hợp là ứng viên v2 hàng đầu (DEC-OQ18, §14).
- **Đồng bộ Lịch với Google Calendar/Outlook và xuất `.ics`** — MVP chỉ có Lịch trong ứng dụng (FR-82).
- **Tự tạo Vai trò cấp hệ thống mới** ngoài 7 Vai trò trong Glossary.

## 7. Thước đo thành công

_Đồ án 3 tháng cho một khách hàng thật. Thước đo phải phân biệt được "code chạy" và "nghiệp vụ đúng"._

**Chính**

- **SM-1: Độ phủ quy tắc nghiệp vụ bất biến.** 100% các quy tắc bất biến sau được kiểm chứng bằng test tự động: Đủ 100% phiếu (mẫu số gồm Chủ tịch, loại Thư ký), Mốc chốt phiếu không mở lại được, khóa cấu trúc Hội đồng khi Cuộc họp mở, khóa form tại mốc **Nộp**, mất hiệu lực PDF cũ khi trả sửa, kết quả không tự động công bố, Đợt đăng ký chỉ đóng tự động, Giới hạn đề tài đăng ký 2 đề tài đang đợi xử lý/người (đếm tại mốc Nộp, nháp không tính) và các trường hợp nhả suất (bao gồm nhả cho trạng thái kết thúc âm tại mốc công bố), suất Đề tài giao trực tiếp theo thời điểm duyệt sớm nhất, BM12 một biên bản một đề tài, đề tài tự bị khóa khi quá hạn giữa quy trình và không mở lại được, Cuộc họp không tự đóng theo thời gian và Biên bản không trả sửa được sau khi Cuộc họp kết thúc. Kiểm chứng FR-12, FR-13, FR-14, FR-28, FR-30, FR-32, FR-36, FR-37, FR-38, FR-40, FR-41, FR-43, FR-62, FR-83.
  Hai quy tắc **không** thuộc nhóm bất biến (đã bỏ theo DEC-OQ21/DEC-OQ22): hệ thống **không** chặn xung đột lợi ích trong Hội đồng (FR-77) và **không** chặn tự xét duyệt hồ sơ của chính mình (FR-79). Test tự động ở hai chỗ này kiểm chứng **chiều ngược lại**: thao tác được cho phép và được ghi Audit log đúng dạng.
- **SM-2: Đi hết vòng đời 9 bước không cần can thiệp ngoài hệ thống.** Ít nhất **1 đề tài Giảng viên và 1 đề tài Sinh viên** đi trọn từ đăng ký tới trạng thái cuối trên môi trường demo, mọi chuyển bước thực hiện đúng bằng Vai trò tương ứng, không sửa dữ liệu trực tiếp trong database. Kiểm chứng FR-19 → FR-59.
- **SM-3: P.KHCN nghiệm thu đúng nghiệp vụ.** P.KHCN (khách hàng) xác nhận trong buổi demo rằng luồng của cả ba Hội đồng và cơ chế biểu mẫu khớp với cách họ đang làm; số phát hiện "sai nghiệp vụ" ở mức chặn (không thể vận hành thật) là **0**. Kiểm chứng §4.4, §4.5, §4.6, §4.9.

**Phụ**

- **SM-4: Không mất trường so với biểu mẫu gốc.** 100% Biểu mẫu có form nhập có data dictionary được duyệt và số trường khớp biểu mẫu gốc; sai lệch = 0 trường bị lược bỏ. Kiểm chứng FR-60, FR-66.
- **SM-5: Truy vết được.** Với một đề tài bất kỳ đã hoàn tất, dựng lại được toàn bộ dòng thời gian (ai làm gì, lúc nào, lý do) chỉ từ Audit log, không cần hỏi người. Kiểm chứng FR-73.
- **SM-6: Thời gian tra cứu trạng thái và lịch.** Chủ nhiệm đề tài xác định được đề tài đang ở giai đoạn nào, việc nào đang chờ mình và hạn của việc đó trong **≤ 2 lần nhấp** kể từ khi đăng nhập. Kiểm chứng FR-67, FR-76, FR-81, FR-82.

**Thước đo đối trọng (không tối ưu)**

- **SM-C1: Số bước tự động hóa thêm.** _Không_ tối ưu. Đối trọng của SM-2. Tự động hóa thêm các mốc mà quy trình thật đòi hỏi con người quyết định (tự công bố kết quả, tự đóng Cuộc họp, tự suy kết luận từ phiếu) là **làm sai**, không phải làm tốt. Mỗi lần định tự động hóa một quyết định của người, phải đối chiếu lại nguyên tắc trung tâm. **Hai ngoại lệ đã chốt**, cả hai đều là sự kiện thời gian khách quan chứ không phải phán xét: Đợt đăng ký tự đóng khi hết hạn (FR-12) và đề tài tự chuyển `Quá hạn giữa quy trình` khi bỏ mốc bắt buộc (FR-83, DEC-OQ36).
- **SM-C2: Độ mượt của luồng nộp biểu mẫu.** _Không_ tối ưu bằng cách bỏ bước. Đối trọng của SM-6. Ví dụ sai: cho nộp mà chưa có PDF đã ký, cho sửa form sau khi Nộp, tự đối soát form với PDF rồi tự duyệt. Ma sát trong Pipeline form/PDF là **có chủ đích** — nó tồn tại vì chữ ký là bằng chứng pháp lý ngoài hệ thống.
- **SM-C3: Số lượng Vai trò và Quyền chức năng.** _Không_ tăng để "linh hoạt hơn". Đối trọng của FR-8. Thêm Vai trò cấp hệ thống ngoài 7 Vai trò trong Glossary làm mô hình phân quyền khó kiểm chứng, trong khi nghiệp vụ thật không cần.

## 8. NFR cắt ngang

**Bảo mật và phân quyền**

- Mọi kiểm tra quyền (Quyền chức năng + phạm vi dữ liệu theo Vai trò ngữ cảnh — FR-8, FR-87) thực hiện ở **phía server**; ẩn UI không được coi là biện pháp kiểm soát.
- Tệp chỉ truy cập qua kiểm tra quyền (FR-74); không có đường dẫn tệp truy cập trực tiếp được.
- Mật khẩu lưu dạng băm với thuật toán băm mật khẩu chuyên dụng; không bao giờ lưu hoặc log dạng rõ.
- Xác thực **chỉ bằng email + mật khẩu** (FR-1); không tích hợp nhà cung cấp danh tính bên thứ ba nào ở MVP. Kèm theo đó: khóa tài khoản tạm thời hoặc giới hạn tần suất khi đăng nhập sai nhiều lần, và link đặt lại mật khẩu dùng một lần (FR-4). **Đã chốt (2026-08-19):** Khóa tạm 15 phút sau 5 lần sai liên tiếp. Xem DEC-OQ16 (§14).
- Session hết hiệu lực sau thời gian không hoạt động. **Đã chốt (2026-08-19):** 8 giờ, phù hợp một ngày làm việc. Xem DEC-OQ16 (§14).

**Toàn vẹn dữ liệu**

- Audit log và Mốc chốt phiếu là **bất biến** ở tầng nghiệp vụ: không có API sửa/xóa cho bất kỳ Vai trò nào.
- Không mất dữ liệu khi nhiều người truy cập đồng thời cùng một Đợt đăng ký hoặc cùng một Cuộc họp Hội đồng; các phép kiểm tra Giới hạn đề tài đăng ký, suất Đề tài giao trực tiếp và Đủ 100% phiếu phải đúng dưới tình huống đua tranh.
- Mọi thao tác xóa ở mức nghiệp vụ là xóa mềm; hồ sơ `Đã hủy`, Cuộc họp `Đã hủy` và mọi phiên bản Biểu mẫu đều được giữ.
- Sao lưu định kỳ và có quy trình khôi phục đã được thử nghiệm ít nhất một lần trước khi bàn giao. **Đã chốt (2026-08-19):** Sao lưu hằng ngày, giữ 30 ngày; RPO 24 giờ, RTO 4 giờ — mức phù hợp hệ thống hành chính nội bộ, P.KHCN đã xác nhận. Xem DEC-OQ16 (§14).

**Platform và khả dụng**

- Web responsive, dùng được trên máy tính và điện thoại với các trình duyệt hiện hành; **trọng tâm desktop**. Không có luồng nào bắt buộc dùng trên điện thoại.
- Giao diện và toàn bộ nội dung hệ thống bằng **tiếng Việt**.
- Đáp ứng WCAG 2.1 AA ở mức cơ bản: điều hướng bằng bàn phím, nhãn cho mọi ô nhập, độ tương phản đủ, thông báo lỗi đọc được bằng trình đọc màn hình.

**Hiệu năng**

- Danh sách và trang chi tiết phản hồi trong vòng 2 giây với dữ liệu ở quy mô thực tế của trường. **Đã chốt (2026-08-19):** Quy mô một đợt là **100–200 Hồ sơ đăng ký**, tổng cộng vài nghìn Đề tài NCKH sau nhiều năm. Đây là con số architecture dùng để quyết định có cần phân trang/đánh chỉ mục đặc biệt hay không. Xem DEC-OQ19 (§14).
- Xuất PDF một Biểu mẫu hoàn tất trong vòng 10 giây. **Đã chốt (2026-08-19):** Con số do PRD đặt, không có căn cứ trong tài liệu nguồn; mốc này chỉ để architecture biết đây là tác vụ đồng bộ chấp nhận được, không phải yêu cầu hợp đồng. Xem DEC-OQ19 (§14).
- Gửi email là tác vụ nền: chậm hoặc lỗi ở kênh email không chặn thao tác nghiệp vụ của người dùng.

**Khả năng mở rộng sang 4 module còn lại**

- Các năng lực nền — Pipeline form/PDF, Hội đồng/Cuộc họp, Thông báo, Tài khoản/Vai trò/Quyền chức năng, Audit log, Mốc thời gian — phải dùng lại được cho module khác mà không cần viết lại. Đây là yêu cầu **định hướng cho architecture**, không phải yêu cầu triển khai module khác trong MVP.

## 9. Ràng buộc và rào chắn

**Ràng buộc dự án**

- **Thời gian: 3 tháng** cho module 1, là đề tài NCKH sinh viên. **Thứ tự cắt khi không đủ thời gian** (cắt từ trên xuống, không cắt tùy hứng):
  1. Tiện ích và tối ưu UX (bộ lọc nâng cao, dashboard đẹp, nhắc hạn tự động ở FR-78). Trong đó **Lịch tháng (FR-82)** cắt được xuống chỉ còn danh sách "việc sắp tới hạn"; **dòng thời gian 9 bước (FR-81) không cắt** vì nó là cách hiện thực lời hứa ở §1.
  2. Kênh email của Thông báo — giữ chuông trong ứng dụng, email làm sau (§4.11).
  3. **Giao diện quản trị bật/tắt Quyền chức năng (FR-8)** — tạm gán cứng tập Quyền chức năng cho từng Vai trò khi cài đặt. **Không cắt** bản thân việc kiểm tra Quyền chức năng và Kiểm tra phạm vi dữ liệu (FR-87) ở phía server — đó là bảo mật, không phải tiện ích.
  4. Bước 08–09 — hai bước này chỉ là đăng Quyết định và đặt trạng thái, cắt được mà không phá vòng đời (quay lại phạm vi bước 01–07).
  5. BM13 và luồng giải trình sau nghiệm thu (§4.7) — chỉ phát sinh có điều kiện.
     **Không bao giờ cắt:** các quy tắc bất biến ở SM-1, Pipeline form/PDF, ba Hội đồng và Cuộc họp, Trạng thái tổng quan đề tài, dòng thời gian 9 bước (FR-81), Audit log.
- **Codebase đã tồn tại**: `BE/` (.NET, xem `BE/DU_AN_OVERVIEW.md`) và `FE/` (Angular). Lựa chọn công nghệ thuộc architecture, không thuộc PRD.
- **Baseline nghiệp vụ đến từ tài liệu, không từ phỏng vấn mới.** Mọi điểm PRD suy luận đã được P.KHCN xác nhận và chuyển thành quyết định ở §14 (ba vòng chốt: 2026-08-18, 2026-08-19 đợt 2, đợt 3 và đợt 4). Điểm suy luận mới phát sinh sau này phải được P.KHCN xác nhận trước khi code phần liên quan.

**Quyền riêng tư**

- Hệ thống lưu dữ liệu cá nhân của Giảng viên, Sinh viên và Thành viên Hội đồng ngoài trường (họ tên, email, mã định danh, đơn vị). Chỉ thu thập những trường mà biểu mẫu gốc yêu cầu; không thu thập thêm.
- Dữ liệu Nhóm nghiên cứu là dữ liệu về người **không** dùng hệ thống; chỉ hiển thị cho những Vai trò có quyền trên hồ sơ đó.
- Nội dung Phiếu đánh giá cá nhân là dữ liệu nhạy cảm: không hiển thị cho người khác trước Mốc chốt phiếu và chỉ mở theo đúng quy tắc công bố ở FR-43, FR-44.

**An toàn vận hành**

- Mọi thao tác không thể hoàn tác (mở Cuộc họp Hội đồng, nộp Phiếu đánh giá, xác nhận hoàn tất Biên bản, công bố kết quả) phải có bước xác nhận nêu rõ hậu quả trước khi thực hiện.
- Các thao tác bắt buộc lý do (trả hồ sơ, trả Biên bản, hủy Cuộc họp, hủy đăng ký, từ chối Vai trò) không được có đường đi tắt bỏ qua lý do.

**Chi phí**

- Không phát sinh chi phí dịch vụ bên thứ ba bắt buộc ngoài hạ tầng chạy ứng dụng và một kênh gửi email. **Đã chốt (2026-08-19):** Dùng SMTP của trường nếu được cấp; nếu không thì một dịch vụ email có bậc miễn phí. Xem DEC-OQ17 (§14).

## 10. Rủi ro và giảm thiểu

| #   | Rủi ro                                                                                                                                                                                                       | Ảnh hưởng                                                                          | Giảm thiểu                                                                                                                                                                                                                                                                                                                                                              |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| R-1 | **Đủ 100% phiếu làm quy trình tắc trong thực tế** — một Thành viên Hội đồng không nộp phiếu là cả Cuộc họp không kết thúc được.                                                                              | Cao. Đây là điểm chết duy nhất của toàn hệ thống.                                  | Đường thoát duy nhất đã có: P.KHCN hủy Cuộc họp kèm lý do và tạo Cuộc họp thay thế (FR-33). Chỉ dẫn rõ trên UI khi Cuộc họp bị treo (FR-78). P.KHCN đã xác nhận đây là cách xử lý họ chấp nhận, kể cả việc thành viên phải ký và nộp lại phiếu ở Cuộc họp thay thế (DEC-OQ10, DEC-OQ23).                                                                                |
| R-2 | **Cổng data dictionary cho 10 form là khối lượng lớn** trong 3 tháng, đặc biệt BM02/BM06/BM11 (bảng tiêu chí) và BM04 (dự trù kinh phí).                                                                     | Cao đối với tiến độ.                                                               | Ưu tiên theo thứ tự nghiệp vụ (BM01 → BM02/BM03 → BM06/BM07 → BM08 → BM11/BM12 → BM13); duyệt data dictionary theo từng biểu mẫu, không chờ duyệt cả bộ.                                                                                                                                                                                                                |
| R-3 | **Không có ký số** khiến hệ thống phụ thuộc kỷ luật con người: PDF ký có thể không khớp form mà hệ thống không phát hiện (FR-64).                                                                            | Trung bình.                                                                        | Đây là quyết định có chủ đích. Giảm thiểu bằng vòng trả sửa kèm lý do ở mọi luồng và bằng Audit log đủ để truy trách nhiệm.                                                                                                                                                                                                                                             |
| R-4 | **Xung đột quyền cấu hình thời gian** giữa Quản trị viên và P.KHCN gây phụ thuộc vận hành.                                                                                                                   | Trung bình → đã chốt.                                                              | P.KHCN tự chủ toàn bộ mốc của nhánh Giao trực tiếp (FR-72, FR-80). Nhánh Tuyển chọn giữ mô hình "P.KHCN đề xuất — Quản trị viên xác lập" (DEC-OQ6): P.KHCN vẫn phải nhờ Quản trị viên đổi hạn, và đây là lựa chọn có chủ ý để giữ một điểm kiểm soát mốc chung.                                                                                                         |
| R-5 | **Người ngoài trường không tạo được Tài khoản** làm không mở được Cuộc họp (FR-29).                                                                                                                          | Trung bình.                                                                        | P.KHCN thấy rõ ai chưa có Tài khoản trước khi mở Cuộc họp; gửi lại link mời không giới hạn (FR-5).                                                                                                                                                                                                                                                                      |
| R-6 | **Nghiệp vụ thay đổi trong lúc phát triển** (quy trình P.KHCN được điều chỉnh).                                                                                                                              | Trung bình.                                                                        | Definition of Done neo theo phiên bản nghiệp vụ mới nhất; thay đổi đi qua `bmad-correct-course` để cập nhật PRD trước khi sửa code.                                                                                                                                                                                                                                     |
| R-7 | **Không có rào chắn xung đột lợi ích** (DEC-OQ21, DEC-OQ22): người liên quan tới đề tài được ngồi Hội đồng chấm đề tài đó, và người vừa là Chủ nhiệm đề tài vừa là Trưởng Khoa được tự duyệt hồ sơ của mình. | Trung bình. Rủi ro về **tính chính trực của kết quả**, không phải rủi ro kỹ thuật. | Chấp nhận có chủ ý theo quyết định của P.KHCN — hệ thống phản ánh thẩm quyền thật, không tự đặt thêm luật. Giảm thiểu bằng **minh bạch**: quan hệ giữa thành viên Hội đồng và từng đề tài trong lượt hiển thị được (FR-77, FR-78), thao tác tự duyệt được đánh dấu rõ và ghi Audit log (FR-79, FR-73). Nếu về sau trường ban hành quy định hồi tị, đây là chỗ phải sửa. |
| R-8 | **Hệ thống tự khóa đề tài quá hạn, không có đường cứu** (DEC-OQ36): một mốc bị đặt sai hoặc một sự cố bất khả kháng có thể làm mất trắng một đề tài.                                                         | Trung bình–Cao với người dùng bị ảnh hưởng.                                        | Toàn bộ biện pháp nằm **trước** mốc: mốc hiển thị công khai trên dòng thời gian và Lịch (FR-81, FR-82), nhắc trước hạn (FR-71), và người có quyền sửa được mốc bất cứ lúc nào **trước khi mốc hết** (FR-72). Cần P.KHCN hiểu rõ rằng sau mốc thì không còn cách nào — đây là điểm cần nhấn trong tài liệu hướng dẫn vận hành.                                           |
| R-7 | **Mở rộng phạm vi ngầm** — MVP đã tăng từ bước 1–2 lên 1–7 rồi lên 1–9 qua các phiên làm việc.                                                                                                               | Cao đối với tiến độ.                                                               | §5 Ngoài phạm vi và §6.2 là ranh giới cứng; mọi đề xuất thêm phải đi qua sprint change.                                                                                                                                                                                                                                                                                 |

## 11. Bên liên quan và phê duyệt

| Vai trò                     | Người/đơn vị                           | Duyệt gì                                                                                                      | Thời điểm                                              |
| --------------------------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| Khách hàng nghiệp vụ        | **P.KHCN**                             | Toàn bộ quy tắc nghiệp vụ trong PRD; các quyết định ở §14 Decision Log; data dictionary từng Biểu mẫu (FR-66) | Đã chốt 2026-08-19; data dictionary theo từng Biểu mẫu |
| Chủ nhiệm đồ án             | Nhóm thực hiện (Yuryi)                 | Phạm vi MVP, tiến độ, quyết định cắt giảm                                                                     | Liên tục                                               |
| Giảng viên hướng dẫn đồ án  | —                                      | PRD, architecture, kết quả bảo vệ                                                                             | Theo mốc của trường                                    |
| Người duyệt data dictionary | P.KHCN hoặc người được P.KHCN chỉ định | Từng data dictionary trước khi story form được thực hiện                                                      | Theo từng Biểu mẫu                                     |

**Đã chốt (2026-08-19):** **P.KHCN** là người có thẩm quyền chốt nghiệp vụ và duyệt data dictionary. Xem DEC-OQ20 (§14).
