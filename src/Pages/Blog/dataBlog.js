class data {
  constructor(_img, _title, _subTitle, _desc) {
    this.img = _img;
    this.title = _title;
    this.subTitle = _subTitle;
    this.desc = _desc;
  }
}
class subTitle {
  constructor(_like, _cmt, _view, _author) {
    this.like = _like;
    this.cmt = _cmt;
    this.view = _view;
    this.author = _author;
  }
}
export const dataContent = [
  new data(
    "https://thietkegame.com/wp-content/uploads/2020/06/dong-luc-lam-viec.jpg",
    "thời gian và động lực",
    new subTitle(300, 500, 200, "Jonny Đặng"),
    " Có lẽ rất lâu rồi tôi chưa đụng đến thứ gọi là timetable . Hay dân dã hơn người ta gọi đó là lịch thường nhật ..."
  ),
  new data(
    "https://images.viblo.asia/a7b4a81f-999c-478a-9f44-da71d9446fa8.jpg",
    "tailwind và cách cài đặt cơ bản",
    new subTitle(400, 300, 400, "Duc Cuong"),
    " Chúng ta hầu hết đều làm việc với các framework CSS như Bootstrap, Foundation, vv từ những ngày đầu tiên ..."
  ),
  new data(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqRkk4FXgyVEviRP61mokxmIBlpZYaY0tcNQ&usqp=CAU",
    "cấu trúc cơ bản trong html",
    new subTitle(500, 400, 6000, "Devera Academy"),
    " HTML (Hypertext Markup Language) là một ngôn ngữ đánh dấu siêu văn bản được sử dụng để tổ chức cấu trúc và nội  ..."
  ),
  new data(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS80FHbFovDpS2xqa-RP7GWPjY27QFGO_J_4WozmU5bTNWJY651lvB0q8dSuhdLp8l1pPE&usqp=CAU",
    "Material UI custom theme với typeScript",
    new subTitle(100, 200, 200, "SonNT"),
    " Material-UI cũng cấp cho bạn khá đầy đủ các component để có thể tạo ra một trang web một cách nhanh chóng hơn,   ..."
  ),
  new data(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4d14xJYrvxClwWKNIMx5N8-iEFPiqDPVCUQ&usqp=CAU",
    "Cách tạo component nhanh chóng chỉ với 3 ký tự ",
    new subTitle(200, 140, 200, "Me"),
    "Tạo component nhiều lúc cũng tốn nhiều thời gian nên mình xin giới thiệu extention này cho mọi người   ..."
  ),
  new data(
    "https://co-well.vn/wp-content/uploads/2021/09/dong-bo-va-bat-dong-bo-javascript-7.jpg",
    "Xử lý bất đồng bộ trong Javascript",
    new subTitle(700, 540, 900, "MIÊNG TQ"),
    "Trong quá trình triển khai Javascript, đồng bộ và bất đồng bộ luôn là những trường hợp hoàn toàn có thể xảy ra  ..."
  ),
  new data(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRqsK-d0wXv_qm4KsBLIn_SKIzN3ab3GIMkA&usqp=CAU",
    "Typerscript vì sao nên dùng TyperScript",
    new subTitle(100, 410, 500, "Bizfly"),
    "Vậy cụ thể, Typescript là gì? Ưu nhược điểm của nó và lý do vì sao nên sử dụng typescript? Bizfly sẽ giải đáp mọi ..."
  ),
  new data(
    "https://co-well.vn/wp-content/uploads/2021/09/dong-bo-va-bat-dong-bo-javascript-7.jpg",
    "Xử lý bất đồng bộ trong Javascript phần 2",
    new subTitle(700, 540, 900, "MIÊNG TQ"),
    "Promise chaining. Nếu xử lý các câu lệnh bất đồng bộ liên tiếp nhau với callback rất dễ dẫn đến tình trạng callb  ..."
  ),
];
