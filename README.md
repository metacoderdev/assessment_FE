# :: Bài tập trước khóa học Metacoders Assessment
## Tổng quan nhanh

```
npm install

npm start
```

\*\* Cần môi trường cơ bản có thể chạy React.

## Hướng dẫn tiến hành

- fork và phát triển kho lưu trữ-Repository ở trên và gửi thông qua trang hỗ trợ Frontend Wanted Pre Onboarding.
- Tạo tên fork repository dưới dạng metacoders-assesment-fe.
- Đánh giá cơ bản thực hiện dựa trên số lượng bài tập hoàn thành.
- Đánh giá chi tiết được thực hiện dựa trên tính nhất quán của code, độ hiển thị, phân tách hàm và chất lượng code.
- Hãy phát triển bằng các hàm vào component)( React Hooks)

\*Nếu có thắc mắc hãy tạo issue trong Repository bài tập trước đó.

# :: Hướng dẫn bài tập

---

## Assignment 1 - `Login`

- Phát triển component login. (Tối thiểu - input 2 cái, button 1 cái)
- Hãy cân nhắc tối ưu hóa rendering một chút. (Gợi ý:sử dụng Ref)
- Khi login(Click button sau khi đăng nhập ID,PW)
  - Lưu thông tin đăng nhập cá nhân vào Local Storage (trường hợp đã đăng nhập thì thông tin phải được lưu giữ.)
  - Khởi chạy vào trang chính.(Nếu login được hoàn tất)
  - Không cần phải áp dụng CSS đáp ứng responsive. Trang hiện tại không đánh giá CSS đáp ứng.

## Assignment2 - `GNB`

- Hãy triển khai GNB của trang chính di chuyển sau khi login.
- Triển khai `sticky` GNB được cố định ở đầu màn hình độc lập với scroll khi thực hiện.
- Đối với kích thước mobile, cửa sổ input ở giữa sẽ biến mất và phải được căn chỉnh (space-between).
- Thay đổi icon ngoài cùng bên phải thành Log out.
- Các chức năng khác không được đánh giá.
  - (Chỉ tạo thanh tìm kiếm ở input làm yếu tố đầu vào. Chức năng: X)
  - (Có thể sử dụng thoải mái các icon. Cài thư viện icon: O)

## Assignment3 - `Validation`

- Xác thực email và mật khẩu.
  - Bao gồm các điều kiện - @ , .  của email
  - Điều kiện của mật khẩu - Chữ in hoa, số, 8 ký tự trở lên bao gồm các ký tự đặc biệt
  - Kiểm tra xem email và mật khẩu có khớp với mật khẩu đã đăng ký khi đăng nhập hay không
- Thể hiện trạng thái Validation bằng CSS.
  - Email Input
    Hiển thị ở trường hợp nếu không phải ở định dạng Email thông qua Email Input Validation Check.(Ví dụ: boder thay đổi thành màu đỏ)
  - Password Input
    Hiển thị ở trường hợp không đúng Password thông qua Password Input Validation Check.(Ví dụ: boder thay đổi thành màu đỏ)
  - Login Button
    Chỉ thay đổi màu của button đậm hơn khi tất cả các Login Button Validation Check đã được thông qua. (Nên được phân biệt với trường hợp không được thông qua)
- Hãy thực hiện hai phương pháp dưới đây để xác thực.
  - Sử dụng biểu thức chính quy
  - Tách hàm Validation

## Assignment4 - `Routing`

- Thực hiện để trang chuyển qua với routing logic khi login và logout. (Local Storage)
- Sau khi login, bạn sẽ được đưa đến Trang chính trên router. (sử dụng history push X)
- Khi logout (nếu Local Storage bị xóa) sẽ được chuyển đến Trang Login Page.(sử dụng history push X)

## Assignment5 - `Feeds`

- Phát triển feed component
- Chỉ cần thực hiện layout đồng nhất với Instagram. (Không nhất thiết phải đúng với đơn vị pixel, nhưng hãy phát triển để nhìn trông tự nhiên hơn.)
- Thông tin của mỗi Feed cấp dữ liệu phải được cấu hình ở dạng json trong directory public / data và yêu cầu dữ liệu bằng cách sử dụng fetch, axios, v.v.
- Thực hiện tối thiểu 3 feed để rendering được.
- Phát triển để các bình luận có thể thêm vào mỗi Feed. (để tính năng đăng bài bằng Enter key và Click vào)
- Feed phải được căn giữa trên màn hình và phải đáp ứng trên mobile.
- Input phải được khởi tạo sau khi publishing.
- Hình ảnh của Feed có thể được sử dụng tự do nhưng mỗi kích thước phải khác nhau. (eVí dụ: hình vuông, dài theo chiều dọc, dài theo chiều ngang,..)
- Có thể thoải mái sử dụng Feed Image nhưng nếu cần hãy sử dụng url bên dưới.(Có thể thay đổi kích thước. Kích thước tương tự X)

- Thực hiện Loading để component được tải sau khi Image Feed được load. (Không cần loading bar. Gợi ý: image.onload)
  - (Sử dụng tự do các icon. Cài đặt thư viện icon O)
  - Đánh giá xem CSS đáp ứng có được áp dụng cho toàn bộ trang chính không. (Dùng Media Query)

## Tham khảo image

[Tham khảo image Link](https://metacoders.notion.site/16693d033b094ec8ac3e6a821be70717)
