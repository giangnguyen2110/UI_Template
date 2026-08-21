# Danh mục use case chi tiết hệ thống quản lý hoạt động NCKH cấp trường

## 1. Mục đích và nguyên tắc trung tâm

Tài liệu này là baseline danh mục use case để chuyển sang bước đặc tả. Nội dung chỉ tổng hợp các quyết định đã chốt trong memlog; chỗ nguồn chưa đủ dữ liệu được ghi **Cần xác minh**.

**Nguyên tắc trung tâm:** hệ thống quản lý hồ sơ, biểu mẫu, vai trò, trạng thái, bằng chứng đã ký, Hội đồng và vòng đời Cuộc họp Hội đồng; hệ thống không thay thế việc thảo luận chuyên môn, ký quyết định, ký hợp đồng hoặc thanh toán diễn ra bên ngoài.

Ranh giới trách nhiệm chính:

- Hệ thống quản lý đợt đăng ký, hồ sơ, Hội đồng, Cuộc họp Hội đồng, phiếu đánh giá, điều kiện đủ 100% phiếu, biên bản, biểu mẫu, tệp hoàn chỉnh, hợp đồng đã ký, trạng thái, thông báo và dấu vết xử lý.
- Hệ thống tạo Cuộc họp Hội đồng, ghi nhận thời gian diễn ra và quản lý mở/đóng Cuộc họp; Hội đồng vẫn tự bàn bạc và tổ chức trao đổi chuyên môn bên ngoài hệ thống.
- Chữ ký trên PDF, quyết định, hợp đồng và BM14 được thực hiện bên ngoài hệ thống; hệ thống chỉ lưu bằng chứng/tệp hoàn chỉnh theo luồng đã chốt.
- Hệ thống không xử lý tạm ứng, thanh toán, quyết toán, hoàn trả hoặc phê duyệt chứng từ kế toán.

## 2. Chuẩn hóa actor, vai trò và tài khoản

### 2.1. Quy ước mô hình

- **Actor** trong tài liệu là vai trò nghiệp vụ trực tiếp tương tác với hệ thống, không đồng nhất với một cá nhân hay một tài khoản.
- **Vai trò** quyết định quyền và use case tại từng giai đoạn nghiệp vụ.
- **Tài khoản** là định danh đăng nhập. Một tài khoản có thể mang nhiều vai trò, kể cả nhiều vai trò Hội đồng ở các giai đoạn khác nhau; không vì vậy mà gộp các actor nghiệp vụ.
- Thành viên nhóm nghiên cứu ngoài Chủ nhiệm chỉ là dữ liệu hồ sơ, không phải actor vì không đăng nhập, xem, sửa, ký hoặc nộp hồ sơ.

### 2.2. Danh sách actor cuối cùng

| Mã | Actor nghiệp vụ | Làm rõ |
|---|---|---|
| ACT-01 | Chủ nhiệm đề tài | Khái niệm vai trò bao quát người đăng ký/chủ nhiệm; trường hợp cụ thể là Giảng viên hoặc Sinh viên. |
| ACT-02 | Giảng viên | Tạo hồ sơ đề tài giảng viên; đồng thời có thể xét duyệt hồ sơ sinh viên khi được gán vai trò Giảng viên hướng dẫn cho đề tài đó. |
| ACT-03 | Sinh viên | Tạo và xử lý hồ sơ đề tài sinh viên. |
| ACT-04 | Trưởng Khoa/Trưởng đơn vị | Một actor thống nhất, dùng tài khoản riêng, không dùng tài khoản Giảng viên; xét duyệt tuyến đầu hồ sơ giảng viên. |
| ACT-05 | Cán bộ/Phòng KHCN (P.KHCN) | Quản trị hành chính: đợt, Hội đồng, Cuộc họp, biên bản, tài liệu/hợp đồng. Khi giữ vai trò Chủ tịch Hội đồng, actor này cũng phải nộp phiếu đánh giá tương ứng và được tính trong điều kiện đủ 100% phiếu. |
| ACT-06 | Thành viên Hội đồng xét duyệt hồ sơ | Nộp BM02. Bao gồm Chủ tịch và các thành viên có trách nhiệm đánh giá; không bao gồm Thư ký. |
| ACT-07 | Thư ký Hội đồng xét duyệt hồ sơ | Thuộc cơ cấu Hội đồng, không nộp BM02; lập, ký và gửi BM03 sau khi hệ thống tự chốt đủ phiếu. |
| ACT-08 | Thành viên Hội đồng xét duyệt thuyết minh | Nộp BM06. Bao gồm Chủ tịch và các thành viên có trách nhiệm đánh giá; không bao gồm Thư ký. |
| ACT-09 | Thư ký Hội đồng xét duyệt thuyết minh | Thuộc cơ cấu Hội đồng, không nộp BM06; lập, ký và gửi BM07 sau khi hệ thống tự chốt đủ phiếu. |
| ACT-10 | Thành viên Hội đồng nghiệm thu | Nộp BM11. Bao gồm Chủ tịch và các thành viên có trách nhiệm đánh giá; không bao gồm Thư ký. |
| ACT-11 | Thư ký Hội đồng nghiệm thu | Thuộc cơ cấu Hội đồng, không nộp BM11; lập, ký và gửi BM12 sau khi hệ thống tự chốt đủ phiếu. |
| ACT-12 | Quản trị viên | Quản lý Tài khoản; tạo Tài khoản ban đầu cho P.KHCN; khóa, mở khóa và hỗ trợ đặt lại mật khẩu. Không thực hiện nghiệp vụ xét duyệt NCKH nếu không được cấp thêm Vai trò tương ứng. |

Hệ thống không phải actor của chính nó. Các hành vi tự động như đóng đợt, kiểm tra điều kiện, khóa form/phiếu và gửi thông báo được mô tả như quy tắc, bước hoặc hậu điều kiện của use case do actor nghiệp vụ khởi tạo.

Các quan hệ vai trò/tài khoản đã chốt:

- Giảng viên hướng dẫn không có actor hoặc tài khoản riêng; dùng tài khoản Giảng viên và chỉ có quyền xét duyệt hồ sơ sinh viên được gán.
- Chỉ đề tài sinh viên có Giảng viên hướng dẫn; đề tài giảng viên không có vai trò này.
- Mỗi Hội đồng ở mỗi giai đoạn là một Hội đồng khác nhau.
- Nếu cùng một người tham gia nhiều loại Hội đồng, người đó dùng một tài khoản có nhiều vai trò, không tạo nhiều tài khoản.
- Thư ký thuộc cơ cấu Hội đồng nhưng không phải người đánh giá, không nộp phiếu và không nằm trong mẫu số 100%; Thư ký chỉ phụ trách Biên bản đúng Hội đồng mình tham gia.
- P.KHCN với vai trò Chủ tịch thuộc Hội đồng, phải nộp phiếu cá nhân và được tính trong tổng số thành viên.
- Giảng viên và Sinh viên dùng chung miền email Trường. Khi tự đăng ký, người dùng xác minh email, chọn loại người dùng, nhập mã Giảng viên/mã Sinh viên và cập nhật Hồ sơ cá nhân; Tài khoản chuyển sang `Chờ xác nhận vai trò` cho đến khi Quản trị viên duyệt.
- Thành viên Hội đồng hoặc Thư ký Hội đồng ngoài Trường không tự đăng ký công khai. P.KHCN thêm email vào Hội đồng; hệ thống gửi lời mời; người được mời xác minh email, đăng ký và cập nhật Hồ sơ cá nhân; sau đó hệ thống gán Vai trò đúng Hội đồng theo lời mời.
- Vai trò Thành viên Hội đồng và Thư ký Hội đồng được gán theo từng Hội đồng, không tạo Tài khoản dùng chung theo tên vai trò.
- Quản trị viên tạo Tài khoản ban đầu cho P.KHCN và quản lý vòng đời Tài khoản; P.KHCN quản lý lời mời và phân công Vai trò trong Hội đồng.

### 2.3. Đối tượng không phải actor trong phạm vi

- Giảng viên hướng dẫn như một tài khoản/actor độc lập.
- Thành viên nhóm nghiên cứu ngoài Chủ nhiệm đề tài.
- Hiệu trưởng/Đại diện Nhà trường.
- Phòng Tài chính - Kế toán.
- Tổ chức phối hợp và thư ký khoa học của đề tài, trừ khi sau này có quyết định mới cho phép họ đăng nhập và thao tác trực tiếp.
- Thư viện, dịch vụ ký số và dịch vụ thông báo ngoài hệ thống: **Cần xác minh** nếu phạm vi sau này yêu cầu actor tích hợp/vận hành riêng.

### 2.4. Trạng thái tổng quan đề tài

Hệ thống vẫn duy trì trạng thái riêng cho Hồ sơ đăng ký, Đề tài NCKH, Hội đồng và Biểu mẫu để các phép chuyển trạng thái không bị trộn lẫn. Trên giao diện, người dùng được xem một **Trạng thái tổng quan đề tài** dẫn xuất từ các trạng thái chi tiết để chỉ cần vào hệ thống là biết đề tài đang ở giai đoạn nào.

Ánh xạ Trạng thái tổng quan đề tài:

| Trạng thái chi tiết hoặc sự kiện nguồn | Trạng thái tổng quan đề tài |
|---|---|
| Hồ sơ đăng ký đang soạn | `Nháp` |
| Đã nộp cho Giảng viên hướng dẫn hoặc Trưởng Khoa/Trưởng đơn vị | `Chờ duyệt cấp đầu` |
| Hồ sơ bị trả | `Trả chỉnh sửa` |
| Hồ sơ đã nộp lại | `Chờ duyệt lại` |
| Đã qua tuyến đầu, Cuộc họp xét duyệt hồ sơ chưa mở | `Chờ Hội đồng xét duyệt hồ sơ` |
| Cuộc họp xét duyệt hồ sơ đang diễn ra | `Đang xét duyệt hồ sơ` |
| BM03 kết luận đạt/không đạt | `Đạt xét duyệt hồ sơ` / `Không đạt xét duyệt hồ sơ` |
| Hồ sơ đạt nhưng chưa nộp thuyết minh | `Chờ nộp thuyết minh` |
| Hội đồng xét duyệt thuyết minh đang xử lý | `Đang xét duyệt thuyết minh` |
| BM07 kết luận không thực hiện/thực hiện | `Thuyết minh không đạt` / `Đang thực hiện` |
| Đã nộp báo cáo giữa kỳ | `Đang thực hiện — đã nộp báo cáo giữa kỳ` |
| Đã nộp báo cáo tổng kết và sản phẩm | `Chờ nghiệm thu` |
| Cuộc họp nghiệm thu đang diễn ra | `Đang nghiệm thu` |
| BM12 kết luận đạt và không yêu cầu xử lý tiếp | `Đã nghiệm thu` |
| BM12 yêu cầu chỉnh sửa/giải trình | `Chờ giải trình sau nghiệm thu` |
| Chủ nhiệm đã nộp BM13 | `Chờ xác nhận giải trình` |
| Các điều kiện hoàn tất Bước 07 đã được xác nhận | `Hoàn tất Bước 07` |
| BM12 kết luận không đạt | `Không đạt nghiệm thu` |
| Yêu cầu hủy được chấp thuận | `Đã hủy` |
| Hồ sơ hết hạn | `Quá hạn` |
| Đề tài giao trực tiếp đã có người khác được chọn | `Không được chọn` |

Các mốc `Đã tải PDF ký` và `Đã nộp` thuộc Biểu mẫu hoặc lịch sử sự kiện. Báo cáo giữa kỳ là thông tin bổ sung của `Đang thực hiện`, không tạo một giai đoạn vòng đời độc lập. BM13 chỉ phát sinh khi BM12 yêu cầu sửa/giải trình; P.KHCN xác nhận giải trình và xác nhận hoàn tất Bước 07 theo điều kiện đã chốt.

## 3. Danh mục use case chi tiết

Quy ước mã ổn định: `UC-<cụm>-<số thứ tự>`. Mã biểu mẫu trong cột BM chỉ thể hiện truy vết; một use case không liên quan biểu mẫu ghi `—`.

### Cụm A — Actor, phân quyền và truy cập

| Mã | Tên use case theo mục tiêu nghiệp vụ | Actor chính | Actor phụ | Kết quả nghiệp vụ | BM |
|---|---|---|---|---|---|
| UC-ACT-01 | Sử dụng quyền theo vai trò nghiệp vụ được cấp | Actor có tài khoản | — | Người dùng chỉ thực hiện được các hành vi của vai trò hiện hành; một tài khoản có thể mang nhiều vai trò. | — |
| UC-ACT-02 | Sử dụng vai trò Giảng viên hướng dẫn trên đề tài sinh viên được gán | Giảng viên | Sinh viên | Giảng viên dùng tài khoản hiện có để xét duyệt đúng hồ sơ sinh viên được gán. | BM01 |
| UC-ACT-03 | Sử dụng nhiều vai trò Hội đồng trên cùng tài khoản | Thành viên/Thư ký/P.KHCN | — | Một cá nhân truy cập đúng quyền theo từng Hội đồng và từng giai đoạn mà không cần tài khoản trùng lặp. | BM02, BM03, BM06, BM07, BM11, BM12 |
| UC-ACT-04 | Tự đăng ký Tài khoản bằng email Trường | Giảng viên hoặc Sinh viên | Quản trị viên | Người dùng xác minh email dùng chung, chọn loại người dùng, nhập mã định danh, hoàn thiện Hồ sơ cá nhân và chờ Quản trị viên xác nhận Vai trò. | — |
| UC-ACT-05 | Mời người ngoài Trường tham gia Hội đồng | P.KHCN | Thành viên/Thư ký được mời | Email người ngoài được gắn với một Hội đồng và một Vai trò dự kiến; hệ thống gửi lời mời đăng ký. | — |
| UC-ACT-06 | Đăng ký Tài khoản từ lời mời Hội đồng | Thành viên/Thư ký được mời | P.KHCN | Người được mời xác minh đúng email, tạo Tài khoản, cập nhật Hồ sơ cá nhân và nhận Vai trò đúng Hội đồng. | — |
| UC-ACT-07 | Cập nhật Hồ sơ cá nhân | Actor có tài khoản | — | Người dùng duy trì thông tin cá nhân cần cho hồ sơ và biểu mẫu theo quyền. | BM01–BM15 |
| UC-ACT-08 | Quản lý vòng đời Tài khoản | Quản trị viên | P.KHCN | Tài khoản ban đầu của P.KHCN được tạo; yêu cầu Vai trò Giảng viên/Sinh viên được duyệt hoặc từ chối; Tài khoản có thể bị khóa, mở khóa hoặc đặt lại mật khẩu mà không xóa lịch sử nghiệp vụ. | — |

> Cần xác minh khi triển khai: giá trị miền email dùng chung được chấp nhận, thời hạn hiệu lực của lời mời, xử lý email đã có Tài khoản và quy trình đặt lại mật khẩu tối thiểu của MVP.

### Cụm B — Quản lý đợt đăng ký

| Mã | Tên use case theo mục tiêu nghiệp vụ | Actor chính | Actor phụ | Kết quả nghiệp vụ | BM |
|---|---|---|---|---|---|
| UC-DOT-01 | Tạo đợt đăng ký NCKH | P.KHCN | — | Một đợt đăng ký mới được hình thành để cấu hình và công bố. | — |
| UC-DOT-02 | Cấu hình loại và thời gian của đợt | P.KHCN | — | Đợt có loại và khoảng thời gian áp dụng. | — |
| UC-DOT-03 | Quản lý danh mục đề tài giao trực tiếp của đợt | P.KHCN | — | Danh mục đề tài giao trực tiếp gắn với đợt được duy trì. | — |
| UC-DOT-04 | Cập nhật đợt trước khi khóa | P.KHCN | — | Thông tin đợt được điều chỉnh trong khoảng được phép. | — |
| UC-DOT-05 | Công bố đợt đăng ký | P.KHCN | — | Đợt sẵn sàng để người dùng xem và đăng ký. | — |
| UC-DOT-06 | Xem danh sách và tình trạng các đợt | Người dùng có liên quan | P.KHCN | Người dùng biết các đợt và tình trạng hiện tại. | — |
| UC-DOT-08 | Theo dõi tình trạng đợt | P.KHCN | — | P.KHCN nắm được tình trạng vận hành của đợt. | — |

Quy tắc tự động: hệ thống đóng đợt khi hết hạn. Đây không phải use case của P.KHCN và không có thao tác đóng thủ công trước hạn.

> Cần xác minh: các trạng thái cụ thể của đợt, trường cấu hình chi tiết, quy tắc sửa sau công bố và nội dung danh mục đề tài giao trực tiếp chưa được memlog xác định.

### Cụm C — Đăng ký và xét duyệt tuyến đầu

| Mã | Tên use case theo mục tiêu nghiệp vụ | Actor chính | Actor phụ | Kết quả nghiệp vụ | BM |
|---|---|---|---|---|---|
| UC-DK-01 | Tạo hồ sơ đăng ký đề tài giảng viên ở trạng thái nháp | Giảng viên | — | Hồ sơ giảng viên được tạo để tiếp tục hoàn thiện. | BM01 |
| UC-DK-02 | Tạo hồ sơ đăng ký đề tài sinh viên ở trạng thái nháp | Sinh viên | — | Hồ sơ sinh viên được tạo để tiếp tục hoàn thiện. | BM01 |
| UC-DK-03 | Cập nhật hồ sơ đăng ký trước khi nộp | Giảng viên hoặc Sinh viên | — | Nội dung nháp được hoàn thiện. | BM01 |
| UC-DK-04 | Quản lý thông tin nhóm nghiên cứu trong hồ sơ | Giảng viên hoặc Sinh viên | — | Danh sách/thông tin nhóm được ghi nhận như dữ liệu hồ sơ; các thành viên này không trở thành actor. | BM01 |
| UC-DK-05 | Kiểm tra điều kiện nộp hồ sơ đăng ký | Giảng viên hoặc Sinh viên | — | Người đăng ký biết hồ sơ có đáp ứng điều kiện nộp hay không. | BM01 |
| UC-DK-06 | Lập BM01 từ dữ liệu đăng ký | Giảng viên hoặc Sinh viên | — | BM01 đầy đủ thông tin được chuẩn bị theo pipeline form/PDF. | BM01 |
| UC-DK-07 | Nộp hồ sơ đăng ký kèm BM01 đã ký | Giảng viên hoặc Sinh viên | — | Hồ sơ được chuyển vào tuyến xét duyệt tương ứng và form BM01 bị khóa. | BM01 |
| UC-DK-08 | Xem trạng thái xử lý hồ sơ đăng ký | Giảng viên hoặc Sinh viên | Giảng viên hướng dẫn/Trưởng Khoa/Trưởng đơn vị | Người đăng ký biết hồ sơ đang ở bước nào và kết quả xử lý. | BM01 |
| UC-DK-09 | Xét duyệt hồ sơ sinh viên được hướng dẫn | Giảng viên trong vai trò hướng dẫn | Sinh viên | Hồ sơ hợp lệ được duyệt và tự chuyển vào tập hồ sơ đủ điều kiện lập Hội đồng. | BM01 |
| UC-DK-10 | Trả hồ sơ sinh viên để sửa | Giảng viên trong vai trò hướng dẫn | Sinh viên | Hồ sơ quay lại cho Sinh viên kèm yêu cầu sửa. | BM01 |
| UC-DK-11 | Xét duyệt hồ sơ giảng viên của đơn vị | Trưởng Khoa/Trưởng đơn vị | Giảng viên | Hồ sơ hợp lệ được duyệt và tự chuyển vào tập hồ sơ đủ điều kiện lập Hội đồng. | BM01 |
| UC-DK-12 | Trả hồ sơ giảng viên để sửa | Trưởng Khoa/Trưởng đơn vị | Giảng viên | Hồ sơ quay lại cho Giảng viên kèm yêu cầu sửa. | BM01 |
| UC-DK-13 | Sửa và nộp lại hồ sơ bị trả | Giảng viên hoặc Sinh viên | Actor xét duyệt tuyến đầu tương ứng | Hồ sơ sửa đổi được đưa lại vào tuyến xét duyệt. | BM01 |
| UC-DK-14 | Gửi yêu cầu hủy hồ sơ | Giảng viên hoặc Sinh viên | P.KHCN | Yêu cầu hủy được ghi nhận để xử lý. | — |
| UC-DK-15 | Xử lý yêu cầu hủy hồ sơ | P.KHCN | Giảng viên hoặc Sinh viên | Yêu cầu hủy có kết quả xử lý và hồ sơ có trạng thái tương ứng. | — |

Quy tắc tuyến đầu: sau khi Giảng viên hướng dẫn hoặc Trưởng Khoa/Trưởng đơn vị duyệt, hồ sơ tự chuyển vào tập hồ sơ đủ điều kiện lập Hội đồng; P.KHCN không có bước tiếp nhận/xác nhận riêng.

> Cần xác minh: điều kiện nộp cụ thể, dữ liệu nhóm, trạng thái hủy, quyền hủy theo từng trạng thái, lý do trả bắt buộc hay không và chi tiết vòng sửa/nộp lại chưa được chốt.

### Cụm D — Thiết lập Hội đồng và Cuộc họp theo ba giai đoạn

| Mã | Tên use case theo mục tiêu nghiệp vụ | Actor chính | Actor phụ | Kết quả nghiệp vụ | BM |
|---|---|---|---|---|---|
| UC-HD-01 | Tạo Hội đồng xét duyệt hồ sơ và Cuộc họp | P.KHCN | ACT-06, ACT-07 | Hội đồng và Cuộc họp xét duyệt hồ sơ được tạo với danh sách thành viên để nhận BM02 và lập BM03. | BM02, BM03 |
| UC-HD-02 | Tạo Hội đồng xét duyệt thuyết minh và Cuộc họp | P.KHCN | ACT-08, ACT-09 | Hội đồng và Cuộc họp xét duyệt thuyết minh được tạo với danh sách thành viên để nhận BM06 và lập BM07. | BM06, BM07 |
| UC-HD-03 | Tạo Hội đồng nghiệm thu và Cuộc họp | P.KHCN | ACT-10, ACT-11 | Hội đồng và Cuộc họp nghiệm thu được tạo với danh sách thành viên để nhận BM11 và lập BM12. | BM11, BM12 |
| UC-HD-04 | Quản lý thông tin Hội đồng và Cuộc họp trước khi bắt đầu | P.KHCN | Thành viên/Thư ký tương ứng | Thông tin hành chính và thành viên được duy trì trong giới hạn cho phép trước khi Cuộc họp được mở. | BM02, BM03, BM06, BM07, BM11, BM12 |
| UC-HD-05 | Theo dõi tiến độ nộp phiếu trong Cuộc họp | P.KHCN | Thành viên/Thư ký tương ứng | P.KHCN theo dõi được số phiếu đã nộp và điều kiện đủ 100% mà không can thiệp nội dung đánh giá chuyên môn. | BM02, BM06, BM11 |
| UC-HD-06 | Mở Cuộc họp Hội đồng | P.KHCN | Thành viên/Thư ký tương ứng | Cuộc họp chuyển sang trạng thái đang diễn ra; quyền nộp phiếu đánh giá được mở cho đúng thành viên. | BM02, BM06, BM11 |
| UC-HD-07 | Kết thúc Cuộc họp Hội đồng | P.KHCN | Thư ký tương ứng | Cuộc họp chỉ được kết thúc sau khi đủ 100% phiếu và Biên bản Hội đồng đã hoàn tất theo luồng. | BM03, BM07, BM12 |
| UC-HD-08 | Hủy và tạo Cuộc họp thay thế | P.KHCN | Thành viên/Thư ký tương ứng | Cuộc họp sai cấu hình hoặc không thể tiếp tục được hủy kèm lý do; lịch sử được giữ và Cuộc họp thay thế được liên kết với Cuộc họp cũ. | BM02, BM03, BM06, BM07, BM11, BM12 |

Giới hạn bắt buộc:

- P.KHCN mở Cuộc họp thủ công; hệ thống ghi thời điểm mở nhưng không cấu hình trước giờ kết thúc. Thời điểm kết thúc được ghi khi P.KHCN chủ động kết thúc Cuộc họp sau khi đủ điều kiện.
- Hệ thống quản lý trạng thái mở/đóng Cuộc họp nhưng không tổ chức họp trực tuyến, ghi âm, ghi hình hoặc quản lý nội dung thảo luận.
- Không cấu hình deadline riêng cho phiếu đánh giá hoặc Biên bản Hội đồng; cả hai phải được nộp trong thời gian Cuộc họp.
- Khi Hội đồng còn `Nháp`, P.KHCN được sửa thông tin, hồ sơ xét duyệt, thành viên, Vai trò và lời mời.
- Chỉ được mở Cuộc họp khi mọi Thành viên có Tài khoản hoạt động, người ngoài đã chấp nhận lời mời, đã gán đủ Vai trò và hồ sơ xét duyệt.
- Khi Cuộc họp được mở, cấu trúc Hội đồng bị khóa; P.KHCN không được thêm, xóa, thay thành viên, đổi Vai trò hoặc thay hồ sơ xét duyệt.
- Nếu cấu hình sai hoặc Thành viên không thể tiếp tục, P.KHCN hủy Cuộc họp kèm lý do và tạo Cuộc họp thay thế; không sửa cấu trúc Cuộc họp đã mở.

> Cần xác minh khi đặc tả: bộ trường hành chính của Hội đồng không ảnh hưởng cấu trúc và có thể chỉnh sửa khi còn `Nháp`.

### Cụm E — Phiếu đánh giá cá nhân của ba Hội đồng

| Mã | Tên use case theo mục tiêu nghiệp vụ | Actor chính | Actor phụ | Kết quả nghiệp vụ | BM |
|---|---|---|---|---|---|
| UC-PH-01 | Xem hồ sơ phục vụ đánh giá xét duyệt hồ sơ | Thành viên/P.KHCN với vai trò Chủ tịch HĐ xét duyệt hồ sơ | Chủ nhiệm đề tài | Người đánh giá có căn cứ lập phiếu. | BM01, BM02 |
| UC-PH-02 | Lập và nộp phiếu xét duyệt hồ sơ trong Cuộc họp | Thành viên/P.KHCN với vai trò Chủ tịch HĐ xét duyệt hồ sơ | — | BM02 đã ký được nộp và khóa trong thời gian Cuộc họp. | BM02 |
| UC-PH-03 | Xem hồ sơ phục vụ đánh giá thuyết minh | Thành viên/P.KHCN với vai trò Chủ tịch HĐ xét duyệt thuyết minh | Chủ nhiệm đề tài | Người đánh giá có căn cứ lập phiếu. | BM04, BM05, BM06 |
| UC-PH-04 | Lập và nộp phiếu xét duyệt thuyết minh trong Cuộc họp | Thành viên/P.KHCN với vai trò Chủ tịch HĐ xét duyệt thuyết minh | — | BM06 đã ký được nộp và khóa trong thời gian Cuộc họp. | BM06 |
| UC-PH-05 | Xem hồ sơ phục vụ đánh giá nghiệm thu | Thành viên/P.KHCN với vai trò Chủ tịch HĐ nghiệm thu | Chủ nhiệm đề tài | Người đánh giá có căn cứ lập phiếu. | BM09, BM10, BM11 |
| UC-PH-06 | Lập và nộp phiếu nghiệm thu trong Cuộc họp | Thành viên/P.KHCN với vai trò Chủ tịch HĐ nghiệm thu | — | BM11 đã ký được nộp và khóa trong thời gian Cuộc họp. | BM11 |

Mọi actor giữ vai trò đánh giá, bao gồm Chủ tịch/P.KHCN nhưng không bao gồm Thư ký, đều thực hiện pipeline form/PDF cho phiếu tương ứng. Phiếu chỉ được nộp trong thời gian Cuộc họp. Khi toàn bộ người có trách nhiệm đánh giá đã nộp phiếu hợp lệ, hệ thống tự chốt Tập phiếu và mở Biên bản cho Thư ký.

### Cụm F — Chốt đủ 100% phiếu và mở biên bản

| Mã | Tên use case theo mục tiêu nghiệp vụ | Actor chính | Actor phụ | Kết quả nghiệp vụ | BM |
|---|---|---|---|---|---|
| UC-CHOT-01 | Kiểm tra điều kiện đủ 100% phiếu của Hội đồng | P.KHCN/Thư ký Hội đồng tương ứng | — | Biết số phiếu hợp lệ đã bằng tổng số người có trách nhiệm đánh giá hay chưa; nếu chưa đủ 100%, hệ thống không cho lập biên bản hoặc kết thúc Cuộc họp. | BM02/BM06/BM11 |
| UC-CHOT-02 | Tự động chốt đủ phiếu để bắt đầu lập biên bản | Hệ thống | Thư ký Hội đồng tương ứng | Khi đủ 100%, hệ thống tạo mốc chốt bất biến, khóa quyền nộp phiếu và mở form biên bản cho Thư ký trong Cuộc họp. | BM02→BM03; BM06→BM07; BM11→BM12 |

Quy tắc đủ phiếu:

- Điều kiện là `số phiếu hợp lệ = 100% tổng số thành viên trong danh sách Hội đồng`.
- Hội đồng 5 người phải có đủ 5 phiếu hợp lệ.
- Tổng số bao gồm Chủ tịch và toàn bộ Thành viên Hội đồng có trách nhiệm đánh giá; không bao gồm Thư ký.
- Phiếu và Biên bản Hội đồng đều phải được nộp trong thời gian Cuộc họp; không có deadline riêng ngoài thời gian Cuộc họp.
- Nếu chưa đủ 100%, hệ thống không mở form biên bản cho Thư ký và P.KHCN không được kết thúc Cuộc họp.
- Sau khi chốt, P.KHCN không được mở lại quyền nộp phiếu.

### Cụm G — Biên bản Hội đồng theo tuyến hai chữ ký

| Mã | Tên use case theo mục tiêu nghiệp vụ | Actor chính | Actor phụ | Kết quả nghiệp vụ | BM |
|---|---|---|---|---|---|
| UC-BB-01 | Lập và nộp biên bản xét duyệt hồ sơ trong Cuộc họp | Thư ký HĐ xét duyệt hồ sơ | — | Sau khi đủ 100% BM02, BM03 đầy đủ dữ liệu và chữ ký Thư ký được nộp cho P.KHCN trong thời gian Cuộc họp; form bị khóa. | BM03 |
| UC-BB-02 | Lập và nộp biên bản xét duyệt thuyết minh trong Cuộc họp | Thư ký HĐ xét duyệt thuyết minh | — | Sau khi đủ 100% BM06, BM07 đầy đủ dữ liệu và chữ ký Thư ký được nộp cho P.KHCN trong thời gian Cuộc họp; form bị khóa. | BM07 |
| UC-BB-03 | Lập và nộp biên bản nghiệm thu trong Cuộc họp | Thư ký HĐ nghiệm thu | — | Sau khi đủ 100% BM11, BM12 đầy đủ dữ liệu và chữ ký Thư ký được nộp cho P.KHCN trong thời gian Cuộc họp; form bị khóa. | BM12 |
| UC-BB-04 | Kiểm tra biên bản do Thư ký nộp | P.KHCN với vai trò Chủ tịch | Thư ký tương ứng | BM03/BM07/BM12 được xác định hợp lệ để ký tiếp hoặc cần trả sửa. | BM03, BM07, BM12 |
| UC-BB-05 | Trả biên bản để Thư ký sửa | P.KHCN với vai trò Chủ tịch | Thư ký tương ứng | Biên bản được trả kèm lý do để sửa và nộp lại; không có từ chối vĩnh viễn. | BM03, BM07, BM12 |
| UC-BB-06 | Sửa, ký lại và nộp lại biên bản bị trả | Thư ký tương ứng | P.KHCN với vai trò Chủ tịch | PDF/chữ ký cũ mất hiệu lực; bản mới có chữ ký Thư ký được nộp lại khi Cuộc họp còn mở. | BM03, BM07, BM12 |
| UC-BB-07 | Hoàn tất biên bản bằng chữ ký thứ hai của Chủ tịch | P.KHCN với vai trò Chủ tịch | Thư ký tương ứng | P.KHCN tải bản có chữ ký Thư ký, ký thêm bên ngoài, tải bản đủ hai chữ ký lên và xác nhận hoàn tất. | BM03, BM07, BM12 |
| UC-BB-08 | Công bố kết quả Hội đồng | P.KHCN | Chủ nhiệm, Giảng viên hướng dẫn, Trưởng Khoa/Trưởng đơn vị, Hội đồng | Sau khi Biên bản đủ hai chữ ký và Cuộc họp kết thúc, P.KHCN kiểm tra rồi chủ động công bố; người liên quan được thông báo và mở quyền xem. | BM03, BM07, BM12 |

Quy tắc/hậu điều kiện: Biên bản chỉ được mở sau khi đủ 100% phiếu và phải được nộp trong thời gian Cuộc họp. Khi bản đủ hai chữ ký được xác nhận, P.KHCN mới được kết thúc Cuộc họp; kết quả chuyển sang `Chờ công bố` và không tự động công bố.

Quyền xem và công bố:

- Trước công bố, chỉ P.KHCN, Chủ tịch và Thư ký được xem kết quả tổng hợp; Thành viên Hội đồng chỉ xem phiếu của mình và tài liệu được phân quyền.
- Sau khi P.KHCN công bố, Chủ nhiệm đề tài, Giảng viên hướng dẫn nếu có, Trưởng Khoa/Trưởng đơn vị, toàn bộ Thành viên Hội đồng, Thư ký, Chủ tịch và P.KHCN được xem kết quả theo quyền.
- Kết quả đã công bố không được sửa trực tiếp; sai sót phải tạo phiên bản điều chỉnh có lý do và lịch sử liên kết.

Yêu cầu dữ liệu: BM03, BM07 và BM12 phải lưu ngày, giờ, địa điểm họp và toàn bộ thông tin khác có trong biểu mẫu gốc. BM07 chỉ có một luồng form: hệ thống sinh tệp; không tải bản BM07 được soạn bên ngoài.

> Cần xác minh: ai được xem kết quả, thời điểm/cơ chế công bố và quy tắc ánh xạ kết luận sang Trạng thái tổng quan đề tài.

### Cụm H — Thuyết minh, tiến độ, báo cáo tổng kết và giải trình

| Mã | Tên use case theo mục tiêu nghiệp vụ | Actor chính | Actor phụ | Kết quả nghiệp vụ | BM |
|---|---|---|---|---|---|
| UC-TM-01 | Tải thuyết minh hoàn chỉnh lên hồ sơ đề tài | Chủ nhiệm đề tài | — | Tệp BM04 được soạn ngoài hệ thống và lưu hoàn chỉnh cùng hồ sơ để Hội đồng xem, đánh giá. | BM04 |
| UC-BC-01 | Lập, ký tuần tự và nộp báo cáo tiến độ | Chủ nhiệm đề tài | Trưởng Khoa/Trưởng đơn vị, P.KHCN | BM08 đi theo tuyến Chủ nhiệm ký → Trưởng đơn vị ký/xác nhận → P.KHCN nhận; phiên bản và vòng trả sửa được lưu. | BM08 |
| UC-BC-02 | Tải báo cáo tổng kết và sản phẩm để nghiệm thu | Chủ nhiệm đề tài | P.KHCN | Tệp BM09 và sản phẩm được lưu theo phiên bản; đến mốc nghiệm thu, P.KHCN tạo Hội đồng và Cuộc họp xử lý BM11/BM12 như flow xét duyệt thuyết minh. | BM09–BM12 |
| UC-BC-03 | Lập và nộp giải trình khi được yêu cầu | Chủ nhiệm đề tài | — | BM13 chỉ phát sinh nếu BM12 yêu cầu sửa/giải trình; nếu không có yêu cầu thì hệ thống bỏ qua BM13. | BM13 |
| UC-BC-04 | Xem/tải báo cáo tiến độ, tổng kết và giải trình theo quyền | Actor có liên quan | Chủ nhiệm đề tài | Tài liệu đã nộp được khai thác trong phạm vi quyền. | BM08, BM09, BM13 |

> Đã chốt BM08 đi theo tuyến Chủ nhiệm → Trưởng Khoa/Trưởng đơn vị → P.KHCN; BM09/sản phẩm là đầu vào để P.KHCN tạo Hội đồng nghiệm thu vào mốc tương ứng; BM13 chỉ phát sinh khi BM12 yêu cầu sửa/giải trình và do P.KHCN kiểm tra/xác nhận mà không họp lại Hội đồng.

### Cụm I — Hợp đồng và tài liệu hoàn tất bên ngoài hệ thống

| Mã | Tên use case theo mục tiêu nghiệp vụ | Actor chính | Actor phụ | Kết quả nghiệp vụ | BM |
|---|---|---|---|---|---|
| UC-TL-01 | Lưu hợp đồng đã ký của đề tài | P.KHCN | Chủ nhiệm đề tài | Tệp hợp đồng đã ký được lưu và cung cấp; hệ thống không ký hoặc xử lý thanh toán. | — |
| UC-TL-02 | Xem và tải hợp đồng đã ký của đề tài | Chủ nhiệm đề tài | P.KHCN | Chủ nhiệm truy cập được hợp đồng của đúng đề tài. | — |
| UC-TL-03 | Lưu bản BM14 hoàn chỉnh sau xử lý bên ngoài | P.KHCN | Chủ nhiệm đề tài | Tệp BM14 hoàn chỉnh được lưu trong hệ thống sau khi toàn bộ việc lập, xử lý và ký đã diễn ra bên ngoài. | BM14 |
| UC-TL-04 | Xem bản BM14 hoàn chỉnh | Chủ nhiệm đề tài | P.KHCN | Chủ nhiệm xem được BM14 đã lưu của đề tài. | BM14 |
| UC-TL-05 | Đăng và lưu quyết định Hội đồng xét duyệt thuyết minh | P.KHCN | Chủ nhiệm, Hội đồng liên quan | BM05 đã được lập/ký bên ngoài được lưu và công bố theo quyền; hệ thống không soạn hoặc phê duyệt quyết định. | BM05 |
| UC-TL-06 | Xem/tải quyết định Hội đồng xét duyệt thuyết minh | Actor có quyền | P.KHCN | Người dùng truy cập được BM05 đã công bố trong phạm vi quyền. | BM05 |
| UC-TL-07 | Đăng và lưu quyết định Hội đồng nghiệm thu | P.KHCN | Chủ nhiệm, Hội đồng liên quan | BM10 đã được lập/ký bên ngoài được lưu và công bố theo quyền; hệ thống không soạn hoặc phê duyệt quyết định. | BM10 |
| UC-TL-08 | Xem/tải quyết định Hội đồng nghiệm thu | Actor có quyền | P.KHCN | Người dùng truy cập được BM10 đã công bố trong phạm vi quyền. | BM10 |
| UC-TL-09 | Đăng và lưu quyết định công nhận kết quả | P.KHCN | Chủ nhiệm đề tài | BM15 đã được lập/ký bên ngoài được lưu và công bố theo quyền; hệ thống không soạn hoặc phê duyệt quyết định. | BM15 |
| UC-TL-10 | Xem/tải quyết định công nhận kết quả | Actor có quyền | P.KHCN | Người dùng truy cập được BM15 đã công bố trong phạm vi quyền. | BM15 |

> Cần xác minh: metadata hợp đồng tối thiểu (số, ngày, giá trị, trạng thái hiệu lực) mới là đề xuất trong memlog, chưa phải quyết định chốt. Không đưa các trường này thành yêu cầu bắt buộc.

### Cụm J — Thông báo và truy vết

| Mã | Tên use case theo mục tiêu nghiệp vụ | Actor chính | Actor phụ | Kết quả nghiệp vụ | BM |
|---|---|---|---|---|---|
| UC-TB-01 | Nhận thông báo mời tham gia Hội đồng và Cuộc họp | Thành viên/Thư ký Hội đồng tương ứng | P.KHCN | Người được mời biết Hội đồng, Vai trò và trạng thái Cuộc họp mình phải tham gia. | BM02, BM03, BM06, BM07, BM11, BM12 |
| UC-TB-02 | Truy vết thay đổi thông tin Cuộc họp | P.KHCN | Thành viên/Thư ký Hội đồng tương ứng | Thay đổi thời gian hoặc thông tin Cuộc họp được lưu và thông báo cho người liên quan. | BM02, BM03, BM06, BM07, BM11, BM12 |
| UC-TB-03 | Truy vết việc chốt tập phiếu đánh giá | P.KHCN/Thư ký Hội đồng tương ứng | — | Có bằng chứng về mốc hệ thống tự chốt bất biến, số phiếu hợp lệ và tổng số người có trách nhiệm đánh giá tại thời điểm chốt. | BM02/BM03, BM06/BM07, BM11/BM12 |
| UC-TB-04 | Theo dõi trạng thái hồ sơ và biểu mẫu | Actor có liên quan | — | Actor biết trạng thái xử lý của đối tượng mình có quyền. | BM01–BM15 |

> Cần xác minh: memlog chưa chốt đầy đủ kênh thông báo, mẫu nội dung, người nhận và các sự kiện thông báo ngoài những sự kiện đã xác nhận.

## 4. Năng lực dùng chung của pipeline form/PDF

Các use case dưới đây là năng lực nền được tái sử dụng; chúng không thay thế các use case nghiệp vụ theo từng BM.

| Mã | Năng lực dùng chung | Actor chính | Kết quả |
|---|---|---|---|
| UC-FORM-01 | Nhập đầy đủ và lưu dữ liệu biểu mẫu | Người lập BM | Mọi thông tin của biểu mẫu gốc được nhập đầy đủ; không lược bỏ trường. |
| UC-FORM-02 | Xem trước biểu mẫu | Người lập BM | Người dùng kiểm tra bản trình bày trước khi xuất. |
| UC-FORM-03 | Xuất PDF để ký bên ngoài | Người lập BM | PDF được sinh từ dữ liệu form để ký ngoài hệ thống. |
| UC-FORM-04 | Tiếp tục sửa form và xuất lại PDF trước khi nộp | Người lập BM | Form vẫn sửa được; PDF cũ không tự mất hiệu lực chỉ vì form thay đổi. |
| UC-FORM-05 | Tải PDF đã ký lên bản nháp | Người lập BM | PDF đã ký được gắn tạm thời nhưng form chưa bị khóa. |
| UC-FORM-07 | Nộp biểu mẫu có PDF đã ký và khóa form | Người lập BM | Hệ thống kiểm tra PDF đã ký; khi bấm **Nộp**, form trở thành bản chính thức và không được sửa. |
| UC-FORM-08 | Vô hiệu hóa bản PDF/chữ ký cũ khi biên bản bị trả và sửa | Thư ký Hội đồng tương ứng | Với BM03/BM07/BM12, bản cũ không còn hiệu lực; phải xuất, ký và nộp bản mới. |
| UC-FORM-09 | Bổ sung chữ ký thứ hai cho biên bản | P.KHCN với vai trò Chủ tịch | Bản có chữ ký Thư ký được tải xuống, ký thêm bên ngoài, tải lại và xác nhận là bản đủ hai chữ ký. |

Pipeline chuẩn cho BM nhập form:

`Nhập/lưu form → Xem trước → Xuất PDF → Ký ngoài hệ thống → Tải PDF đã ký lên → Bấm Nộp → Khóa form`

Pipeline hai chữ ký cho BM03/BM07/BM12:

`Thư ký lập form → xuất PDF → ký → tải lên và nộp → P.KHCN kiểm tra → [trả sửa, lặp lại] hoặc tải xuống → Chủ tịch ký thêm → tải bản đủ hai chữ ký lên → xác nhận hoàn tất`

Quy tắc nguồn chính thức:

- Trước khi bấm Nộp, form còn sửa được và người dùng có thể xuất nhiều PDF.
- Việc xuất PDF hoặc tải PDF ký lên tạm thời không khóa form.
- Mốc khóa là thao tác **Nộp** sau khi đã tải PDF ký lên.
- Hệ thống không tự động đối soát form và PDF đã ký. PDF đã ký là bằng chứng chính thức của lần nộp; người duyệt chịu trách nhiệm kiểm tra và trả sửa nếu phát hiện sai lệch.

Cổng đặc tả form trước phát triển:

- Mỗi form phải có data dictionary đối chiếu trực tiếp với biểu mẫu gốc.
- Không được tự ý lược bỏ trường; trường thông thường bắt buộc, trường có điều kiện bắt buộc khi nhánh tương ứng phát sinh.
- Dữ liệu lặp phải được mô hình thành các dòng có cấu trúc.
- Mỗi trường phải xác định tên, kiểu dữ liệu, tính bắt buộc, điều kiện hiển thị, validation và nguồn dữ liệu.
- Biểu mẫu gốc là nguồn đối chiếu cuối cùng khi tài liệu phân tích thiếu hoặc khác nội dung.
- Data dictionary phải được duyệt trước khi story phát triển form sẵn sàng thực hiện.

## 5. Ma trận BM01–BM15: form và upload

| BM | Nhập form trên hệ thống | Upload PDF/tệp hoàn chỉnh | Cách xử lý đã chốt | Use case truy vết |
|---|---:|---:|---|---|
| BM01 | Có | Có, PDF đã ký trước khi nộp | Theo pipeline form/PDF dùng chung. | UC-DK-06, UC-DK-07 |
| BM02 | Có | Có, PDF đã ký trước khi nộp | Thành viên và Chủ tịch/P.KHCN nộp trong thời gian Cuộc họp; Thư ký không nộp; phải đủ 100% người đánh giá mới mở BM03. | UC-PH-02, UC-CHOT-01 |
| BM03 | Có | Có, bản chữ ký Thư ký rồi bản đủ hai chữ ký | Chỉ mở sau khi đủ 100% BM02 và phải hoàn tất trong thời gian Cuộc họp. | UC-BB-01, UC-BB-04–UC-BB-07 |
| BM04 | Không | Có, tệp hoàn chỉnh | Chủ nhiệm soạn ngoài hệ thống và tải tệp hoàn chỉnh lên để Hội đồng xem/đánh giá. | UC-TM-01, UC-PH-03 |
| BM05 | Không | Có, tệp quyết định hoàn chỉnh | Quyết định được lập/ký bên ngoài; P.KHCN đăng và lưu tệp, hệ thống không soạn/phê duyệt. | UC-TL-05, UC-TL-06 |
| BM06 | Có | Có, PDF đã ký trước khi nộp | Thành viên và Chủ tịch/P.KHCN nộp trong thời gian Cuộc họp; Thư ký không nộp; phải đủ 100% người đánh giá mới mở BM07. | UC-PH-04, UC-CHOT-01 |
| BM07 | Có | Có, bản chữ ký Thư ký rồi bản đủ hai chữ ký | Chỉ mở sau khi đủ 100% BM06; không upload bản soạn ngoài; phải hoàn tất trong thời gian Cuộc họp. | UC-BB-02, UC-BB-04–UC-BB-07 |
| BM08 | Có | Có, PDF được ký tuần tự | Chủ nhiệm lập/ký và gửi Trưởng Khoa/Trưởng đơn vị ký/xác nhận, sau đó chuyển P.KHCN trong cùng workflow. | UC-BC-01 |
| BM09 | Không | Có, tệp hoàn chỉnh | Chủ nhiệm tải báo cáo tổng kết hoàn chỉnh. | UC-BC-02 |
| BM10 | Không | Có, tệp quyết định hoàn chỉnh | Quyết định được lập/ký bên ngoài; P.KHCN đăng và lưu tệp, hệ thống không soạn/phê duyệt. | UC-TL-07, UC-TL-08 |
| BM11 | Có | Có, PDF đã ký trước khi nộp | Thành viên và Chủ tịch/P.KHCN nộp trong thời gian Cuộc họp; Thư ký không nộp; phải đủ 100% người đánh giá mới mở BM12. | UC-PH-06, UC-CHOT-01 |
| BM12 | Có | Có, bản chữ ký Thư ký rồi bản đủ hai chữ ký | Chỉ mở sau khi đủ 100% BM11 và phải hoàn tất trong thời gian Cuộc họp. | UC-BB-03, UC-BB-04–UC-BB-07 |
| BM13 | Có | Có, PDF đã ký trước khi nộp | Chỉ tạo khi BM12 yêu cầu sửa/giải trình; Chủ nhiệm nhập giải trình theo từng yêu cầu. | UC-BC-03 |
| BM14 | Không | Có, tệp hoàn chỉnh | Toàn bộ lập/xử lý/ký bên ngoài; P.KHCN tải bản hoàn chỉnh để lưu và cho Chủ nhiệm xem. | UC-TL-03, UC-TL-04 |
| BM15 | Không | Có, tệp quyết định hoàn chỉnh | Quyết định được lập/ký bên ngoài; P.KHCN đăng và lưu tệp, hệ thống không soạn/phê duyệt. | UC-TL-09, UC-TL-10 |

Lưu ý: “Upload PDF/tệp hoàn chỉnh” ở BM nhập form là bước tải lại PDF do hệ thống xuất và đã ký bên ngoài, không phải một phương thức soạn biểu mẫu thay thế.

## 6. Quy tắc nghiệp vụ đã chốt

### 6.1. Đợt và tuyến đầu

1. Đợt chỉ đóng tự động khi hết hạn; P.KHCN không được đóng thủ công trước thời hạn.
2. Hồ sơ sinh viên do Giảng viên được gán làm hướng dẫn xét duyệt; hồ sơ giảng viên do Trưởng Khoa/Trưởng đơn vị xét duyệt.
3. Sau khi được duyệt tuyến đầu, hồ sơ tự vào tập đủ điều kiện lập Hội đồng; không có bước P.KHCN tiếp nhận/xác nhận riêng.
4. Chủ nhiệm đề tài được gửi yêu cầu hủy trước khi Đề tài NCKH bước vào `Chờ nghiệm thu`; P.KHCN chấp thuận hoặc từ chối. Hồ sơ đã hủy không bị xóa và toàn bộ lịch sử được giữ lại.

### 6.2. Hội đồng và phiếu đánh giá

1. Hệ thống tạo và quản lý Hội đồng cùng Cuộc họp ở ba giai đoạn; hệ thống quản lý thời gian và trạng thái Cuộc họp nhưng không tổ chức thảo luận chuyên môn.
2. Mỗi giai đoạn có một Hội đồng riêng và các vai trò thành viên/Thư ký riêng.
3. P.KHCN mở Cuộc họp thủ công; hệ thống không cấu hình trước giờ kết thúc và không cấu hình deadline riêng cho phiếu hoặc Biên bản Hội đồng.
4. Chủ tịch/P.KHCN và các Thành viên Hội đồng có trách nhiệm đánh giá phải nộp BM02/BM06/BM11 tương ứng trong thời gian Cuộc họp; Thư ký không nộp phiếu.
5. Điều kiện mở Biên bản Hội đồng là đủ **100% phiếu hợp lệ** của toàn bộ người có trách nhiệm đánh giá, gồm Chủ tịch nhưng không gồm Thư ký.
6. Khi đủ 100%, hệ thống tự tạo Mốc chốt phiếu; tập phiếu trở thành bất biến, nhận phiếu bị khóa và form Biên bản Hội đồng được mở cho Thư ký.
7. Biên bản Hội đồng phải được lập, ký và nộp trong thời gian Cuộc họp, sau khi tập phiếu đã chốt.
8. Nếu chưa đủ 100% phiếu hoặc Biên bản chưa hoàn tất, P.KHCN không được kết thúc Cuộc họp.
9. Cấu trúc Hội đồng bị khóa khi Cuộc họp được mở; sai sót được xử lý bằng hủy có lý do và tạo Cuộc họp thay thế, không thay thành viên để thay đổi mẫu số.

### 6.3. Form, PDF và biên bản

1. Mọi BM nhập form phải chứa đầy đủ tất cả thông tin của biểu mẫu gốc.
2. Tất cả BM nhập form đều hỗ trợ xem trước, xuất PDF, ký bên ngoài, tải PDF đã ký lên và nộp.
3. Form vẫn sửa được sau khi xuất PDF hoặc tải PDF ký lên tạm thời; chỉ bị khóa khi người dùng bấm Nộp.
4. Hệ thống không tự động đối soát nội dung form với PDF đã ký. PDF đã ký là bằng chứng chính thức của lần nộp; người duyệt chịu trách nhiệm kiểm tra và trả sửa khi phát hiện sai lệch.
5. BM03/BM07/BM12 đi theo tuyến hai chữ ký: Thư ký ký trước, P.KHCN với vai trò Chủ tịch ký sau.
6. P.KHCN chỉ được trả biên bản kèm lý do để sửa, không được từ chối vĩnh viễn.
7. Nếu biên bản bị trả và sửa, PDF/chữ ký cũ mất hiệu lực; Thư ký phải xuất, ký và nộp bản mới.
8. Cách xử lý việc trả sửa khi Cuộc họp đã hết thời gian là điểm cần xác minh trước khi đặc tả đầy đủ.

### 6.4. Tài liệu ngoài hệ thống

1. Mọi BM là quyết định được lập và ký bên ngoài hệ thống; hệ thống không xử lý quy trình ký quyết định.
2. BM14 được lập, xử lý và ký hoàn toàn bên ngoài; P.KHCN chỉ tải bản hoàn chỉnh lên để lưu và cho Chủ nhiệm xem.
3. Hệ thống chỉ lưu/cung cấp hợp đồng đã ký; không tham gia ký hợp đồng hay nghiệp vụ tài chính.

## 7. Quyết định cũ đã bị thay thế và không được dùng

| Quyết định/giả định cũ | Quyết định hiện hành thay thế |
|---|---|
| Chỉ tạo và quản lý Hội đồng; không quản lý Cuộc họp. | Hệ thống tạo và quản lý thời gian/trạng thái Cuộc họp; thảo luận chuyên môn vẫn diễn ra bên ngoài hệ thống. |
| Chỉ cần số phiếu hợp lệ lớn hơn 50% tổng số thành viên. | Phải đủ 100% BM02/BM06/BM11 hợp lệ mới mở Biên bản và mới có thể kết thúc Cuộc họp. |
| Thư ký thuộc Hội đồng, phải nộp phiếu tương ứng và được tính vào tổng số. | Thư ký không phải người đánh giá, không nộp phiếu, không được tính vào mẫu số và chỉ lập biên bản. |
| Chủ tịch chỉ ký/xác nhận biên bản. | P.KHCN với vai trò Chủ tịch cũng phải nộp phiếu đánh giá và được tính trong điều kiện đủ 100% phiếu. |
| P.KHCN có thể mở lại quyền nộp phiếu sau chốt. | Không được mở lại; mốc chốt do Thư ký xác nhận là bất biến. |
| Phiếu phải nộp trước Cuộc họp hoặc trước mốc Thư ký tự chốt. | Phiếu chỉ được nộp trong thời gian Cuộc họp; đủ 100% phiếu mới được mở Biên bản. |
| Phiếu và Biên bản có deadline riêng, có thể gia hạn độc lập. | Không đặt deadline riêng; phiếu và Biên bản đều phải hoàn tất trong thời gian Cuộc họp. |
| Thư ký đứng ngoài cơ cấu Hội đồng. | Thư ký thuộc cơ cấu Hội đồng với vai trò riêng, chỉ lập biên bản và không phải Thành viên đánh giá. |
| Chủ tịch Hội đồng là actor độc lập. | P.KHCN thực hiện vai trò Chủ tịch; không tạo actor/tài khoản Chủ tịch riêng. |
| Giảng viên hướng dẫn là actor/tài khoản riêng. | Đây là vai trò của tài khoản Giảng viên trên đề tài sinh viên được gán. |
| BM07 có thể vừa nhập form vừa tải bản soạn bên ngoài như hai phương thức. | BM07 chỉ nhập form; hệ thống sinh PDF để ký và tải lại. |
| Form tiếp tục sửa sau khi đã nộp PDF ký. | Form bị khóa ở mốc người dùng bấm Nộp; chỉ xuất/tải tạm thời thì chưa khóa. |

## 8. Danh sách loại khỏi phạm vi

- Tổ chức họp trực tuyến, ghi âm, ghi hình hoặc thay thế hoạt động thảo luận chuyên môn của Hội đồng.
- Can thiệp nội dung đánh giá chuyên môn của Thành viên Hội đồng.
- Mở lại phiếu đánh giá sau khi hệ thống đã tạo Mốc chốt phiếu.
- Thay/loại thành viên hoặc đổi hồ sơ xét duyệt sau khi Cuộc họp đã được mở.
- Quy trình ký quyết định và chữ ký Hiệu trưởng trên biểu mẫu trong phạm vi hệ thống.
- Toàn bộ việc lập, xử lý và ký BM14.
- Quy trình soạn, thương lượng hoặc ký hợp đồng.
- Tạm ứng, thanh toán, quyết toán, hoàn trả, phê duyệt chứng từ kế toán hoặc tích hợp tài chính.
- Quyền đăng nhập/thao tác của thành viên nhóm nghiên cứu ngoài Chủ nhiệm.
- Actor Hiệu trưởng/Đại diện Nhà trường và Phòng Tài chính - Kế toán.
- Nộp BM02/BM06/BM11 bổ sung sau khi hệ thống đã tạo Mốc chốt phiếu.

## 9. Các điểm cần xác minh trước khi đặc tả đầy đủ

1. Thời hạn xử lý cụ thể cho BM13 và các tài liệu Bước 05–07 được P.KHCN cấu hình theo từng đợt/kế hoạch triển khai.
2. Điều kiện nộp hồ sơ, cấu trúc dữ liệu nhóm và vòng trả sửa tuyến đầu.
3. Kênh, nội dung và danh sách sự kiện thông báo ngoài lời mời Hội đồng, thay đổi thông tin Cuộc họp và công bố kết quả.
4. Giá trị miền email dùng chung, thời hạn lời mời và cơ chế đặt lại mật khẩu MVP.

## 10. Kiểm tra nhất quán baseline

- [x] Hệ thống quản lý thời gian và trạng thái Cuộc họp nhưng không tổ chức thảo luận chuyên môn.
- [x] Điều kiện mở Biên bản và kết thúc Cuộc họp là đủ `100%` phiếu hợp lệ.
- [x] Chủ tịch nộp phiếu đánh giá; Thư ký không nộp phiếu và không được tính vào tổng số người đánh giá.
- [x] Thư ký chỉ lập Biên bản sau khi hệ thống tự chốt đủ 100% phiếu.
- [x] P.KHCN có hai nhóm hành vi: quản trị hành chính và đánh giá/ký với vai trò Chủ tịch.
- [x] Phiếu chỉ được nộp trong thời gian Cuộc họp; đủ 100% thì hệ thống tự chốt tập phiếu và không thể mở lại.
- [x] BM03/BM07/BM12 dùng tuyến hai chữ ký và vòng trả sửa làm mất hiệu lực bản cũ.
- [x] Pipeline form/PDF được tách thành năng lực dùng chung nhưng từng BM vẫn có use case nghiệp vụ riêng.
- [x] Ma trận BM01–BM15 phân biệt rõ BM nhập form, BM do Chủ nhiệm tải tệp hoàn chỉnh và quyết định do P.KHCN đăng sau khi lập/ký bên ngoài.
- [x] BM14 và hợp đồng chỉ được lưu dưới dạng tệp đã hoàn tất bên ngoài; nghiệp vụ ký/thanh toán bị loại khỏi phạm vi.
- [x] Không đưa Hiệu trưởng, Phòng Tài chính, thành viên nhóm ngoài Chủ nhiệm hoặc Giảng viên hướng dẫn độc lập vào actor baseline.
- [x] Giảng viên/Sinh viên tự đăng ký bằng email Trường; người ngoài đăng ký qua lời mời gắn với Hội đồng và Vai trò cụ thể.
- [x] Quản trị viên là actor quản lý Tài khoản; không dùng Tài khoản chung cho Thành viên hoặc Thư ký Hội đồng.
- [x] Giao diện có một Trạng thái tổng quan đề tài dẫn xuất từ các trạng thái nghiệp vụ chi tiết.
- [x] Cấu trúc Hội đồng khóa tại mốc mở Cuộc họp; sai cấu hình được xử lý bằng hủy có lý do và tạo Cuộc họp thay thế.
- [x] Kết quả chuyển sang `Chờ công bố` sau khi Cuộc họp kết thúc; P.KHCN chủ động công bố và mọi điều chỉnh sau công bố có phiên bản/lý do.

## 11. Xác nhận bổ sung ngày 2026-07-20

- Phạm vi MVP bao phủ Bước 01–07 áp dụng cho **cả đề tài giảng viên và đề tài sinh viên**; Bước 08–09 nằm ngoài MVP.
- Mọi biểu mẫu trong phạm vi có form trên hệ thống đều theo một quy tắc thống nhất: **nhập/lưu → xuất PDF → ký ngoài hệ thống → tải PDF đã ký lên → nộp → khóa form**. Hệ thống không tích hợp hay thực hiện ký điện tử.
- Giảng viên và Sinh viên tự đăng ký bằng email Trường; Thành viên/Thư ký ngoài Trường đăng ký qua lời mời của P.KHCN và được gán Vai trò đúng Hội đồng sau khi xác minh email, cập nhật Hồ sơ cá nhân.
- Bổ sung actor Quản trị viên để quản lý Tài khoản và tạo Tài khoản ban đầu cho P.KHCN.
- Giao diện dùng một Trạng thái tổng quan đề tài để người dùng biết đề tài đang ở giai đoạn nào; trạng thái nội bộ của Hồ sơ đăng ký, Đề tài NCKH, Hội đồng và Biểu mẫu vẫn được tách để bảo toàn quy tắc chuyển trạng thái.
- Hệ thống tạo và quản lý thời gian/trạng thái Cuộc họp Hội đồng nhưng không tổ chức thảo luận chuyên môn.
- BM02/BM06/BM11 chỉ do Chủ tịch và các Thành viên có trách nhiệm đánh giá nộp trong thời gian Cuộc họp; Thư ký không nộp và không nằm trong mẫu số. Phải đủ 100% phiếu hợp lệ thì hệ thống mới tự mở BM03/BM07/BM12 cho Thư ký.
- Biên bản phải được lập và nộp trong thời gian Cuộc họp sau khi đủ 100% phiếu; P.KHCN không được kết thúc Cuộc họp nếu chưa đủ phiếu hoặc Biên bản chưa hoàn tất.
- Không cấu hình deadline riêng cho phiếu hoặc Biên bản ngoài thời gian Cuộc họp.
- Cuộc họp không có giờ kết thúc được cấu hình trước; P.KHCN mở thủ công và chỉ được kết thúc sau khi đủ 100% phiếu cùng Biên bản hoàn tất.
- Giảng viên và Sinh viên dùng chung miền email Trường; người tự đăng ký khai loại người dùng và mã định danh, sau đó chờ Quản trị viên xác nhận Vai trò trước khi có quyền nghiệp vụ.
- Chốt bảng ánh xạ Trạng thái tổng quan đề tài; báo cáo giữa kỳ hiển thị như thông tin bổ sung của trạng thái `Đang thực hiện`, không là một giai đoạn độc lập.
- Chi tiết trường BM01A/B, BM02 và BM03 được chuyển khỏi blocker PRD thành cổng đặc tả bắt buộc: data dictionary đầy đủ, đối chiếu biểu mẫu gốc và được duyệt trước phát triển form.
- Chốt mốc khóa cấu trúc Hội đồng khi P.KHCN mở Cuộc họp; sau mốc này không thêm/xóa/thay thành viên, đổi Vai trò hoặc hồ sơ xét duyệt. Sai sót được xử lý bằng hủy có lý do và tạo Cuộc họp thay thế.
- Kết quả Hội đồng không tự động công bố. Sau khi Biên bản đủ hai chữ ký và Cuộc họp kết thúc, kết quả ở `Chờ công bố`; P.KHCN kiểm tra và chủ động công bố cho toàn bộ actor liên quan. Sai sót sau công bố dùng phiên bản điều chỉnh có lý do.

## 12. Xác nhận bổ sung ngày 2026-07-21

- Thư ký Hội đồng chỉ lập Biên bản BM03/BM07/BM12; không nộp BM02/BM06/BM11 và không nằm trong mẫu số 100% phiếu.
- Khi đủ 100% phiếu của Chủ tịch và các Thành viên có trách nhiệm đánh giá, hệ thống tự tạo Mốc chốt phiếu bất biến và mở Biên bản cho Thư ký.
- Phạm vi MVP được mở rộng từ Bước 01–02 thành toàn bộ Bước 01–07, gồm thuyết minh, thực hiện/báo cáo tiến độ, nghiệm thu, giải trình và lưu tài liệu hoàn tất; Bước 08–09 nằm ngoài MVP.
- P.KHCN kiểm tra BM13, có thể trả kèm lý do hoặc xác nhận hoàn tất giải trình mà không họp lại Hội đồng.
- BM08 được ký theo tuyến trong hệ thống giống một tài liệu nhiều chữ ký: Chủ nhiệm ký và gửi, Trưởng Khoa/Trưởng đơn vị ký/xác nhận rồi chuyển P.KHCN; chữ ký thực hiện trên PDF bên ngoài hệ thống, hệ thống quản lý phiên bản và trạng thái chuyển bước.
- Đến mốc nghiệm thu, P.KHCN tạo Hội đồng/Cuộc họp và vận hành BM11/BM12 theo cùng nguyên tắc với Hội đồng xét duyệt thuyết minh; BM09 và sản phẩm chính thức là điều kiện mở Cuộc họp.
- BM13 chỉ phát sinh nếu BM12 yêu cầu sửa hoặc giải trình; nếu không có yêu cầu, việc thiếu BM13 không chặn hoàn tất.
- P.KHCN xác nhận `Hoàn tất Bước 07` khi BM12 kết luận nghiệm thu đạt, BM13 đã được xác nhận nếu có yêu cầu, và BM14 hoàn chỉnh đã được lưu đối với đề tài có hợp đồng phải thanh lý; đề tài không có hợp đồng không bị chặn vì thiếu BM14.
- Người dùng duyệt bộ trạng thái tối thiểu của Đợt đăng ký: `Nháp`, `Đã công bố`, `Đã đóng`; sau công bố chỉ được sửa nội dung không ảnh hưởng tính hợp lệ của hồ sơ đã nộp.
- Hồ sơ nháp vẫn được lưu sau hạn nhưng không thể nộp; nộp chính thức bắt buộc có PDF đã ký hợp lệ theo chính sách tệp.
- Lý do trả hồ sơ là bắt buộc; mỗi Hội đồng có đúng một Chủ tịch và một Thư ký; Thành viên không xem/sửa Phiếu đánh giá nháp của người khác.
- MVP được chốt là ứng dụng web responsive dùng trên máy tính và thiết bị di động; không phát triển ứng dụng mobile native.
