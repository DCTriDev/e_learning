import React from "react";
import bigSmall  from "../../Assets/Images/logo_big.png";
import "./footer.css";
export default function Footer() {
  return (
    <div className="footer__wrapper  bg-gray-800 text-white p-12 flex flex-col space-y-9">
      <div className=" ">
        <div className="footer__logo">
          <img
            src={bigSmall}
            width={300}
            height={100}
            alt="Cybersoft logo"
          />
          <p>
            E-Learning - Hệ thống đào tạo lập trình chuyên sâu theo dự án
            thực tế
          </p>
        </div>
      </div>
      <div className=" grid lg:grid-cols-3 grid-cols-1 lg:space-x-6 space-y-3 ">
        <div className="footer__advertising ">
          <h2 className="text-white">NHẬN TIN SỰ KIỆN VÀ KHUYẾN MÃI</h2>
          <p>
            CyberSoft sẽ gửi các bạn khóa học trực tuyến và các chương trình
            CyberLive hoàn toàn MIỄN PHÍ và các chương trình KHUYẾN MÃI hấp dẫn
            đến các bạn
          </p>
          <form className="form-inline flex items-center ">
            <div className="form-group ">
              <input
                type="text"
                className="form-control w-110 mr-3 h-9 border-none rounded-md"
                placeholder="youremail@email.com"
                aria-describedby="helpId"
              />
            </div>
            <button
              type="button"
              className="button_advertising py-15 px-5 h-9  rounded-md"
            >
              ĐĂNG KÝ
            </button>
          </form>
        </div>
        <div className="form-group flex flex-col">
          <h2 className="text-white text-2xl">ĐĂNG KÝ TƯ VẤN</h2>
          <input
            type="text"
            className="form-control h-9 border-none rounded-md mt-3"
            aria-describedby="helpId"
            placeholder="Họ và tên *"
          />
          <input
            type="text"
            className="form-control h-9 border-none rounded-md mt-3"
            aria-describedby="helpId"
            placeholder="Email liên hệ *"
          />
          <input
            type="text"
            className="form-control h-9 border-none rounded-md mt-3"
            aria-describedby="helpId"
            placeholder="Điện thoại liên hệ *"
          />
          <button className="form-control h-9 border-none rounded-md button_consult_register mt-3 w-50">
            ĐĂNG KÝ TƯ VẤN
          </button>
        </div>
        <div className=" flex justify-center w-full iframe-footer min-h-[300px]">
          <iframe
            className="h-full w-full lg:w-fit "
            title="Facebook Cybersoft"
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Flophocviet&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameBorder={0}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          />
        </div>
      </div>
      <div className="footer__address">
        <p>
          <i className="fas fa-map-marker-alt mr-2"></i>
          <span> Cơ sở 1: 376 Võ Văn Tần - Quận 3</span>
        </p>
        <p>
          <i className="fas fa-map-marker-alt mr-2"></i>
          <span> Cơ sở 2: 459 Sư Vạn Hạnh - Quận 10</span>
        </p>
        <p>
          <i className="fas fa-map-marker-alt mr-2"></i>
          <span>Cơ sở 3: 82 Ung Văn Khiêm - Bình Thạnh</span>
        </p>
        <p>
          <i className="fas fa-map-marker-alt mr-2"></i>
          <span> Cơ sở 4: Quận Hải Châu - Đà Nẵng</span>
        </p>
        <p>
          <i className="fas fa-phone mr-2"></i>
          <span> 098.105.1014 - 098.407.5035</span>
        </p>
      </div>
      <div className=" ">
        <div className="footer_seo_word space-x-6">
          <span>Anh ngữ giao tiếp</span>
          <span>Khởi động Anh ngữ giao tiếp</span>
          <span>Lấy đà Anh ngữ giao tiếp</span>
          <span>Bật nhảy Anh ngữ giao tiếp</span>
          <span>Tiếp đất</span>
        </div>
        <div className="footer_seo_word">
          <span className="mr-5">Lập trình Front End </span>
          <span className="mr-5">Lập trình React JS</span>
          <span className="mr-5">Lập trình Angular</span>
          <span className="mr-5">Lập trình tư duy</span>
          <span className="mr-5">Lập trình NodeJS</span>
          <span className="mr-5">Lập trình Back End</span>
          <span className="mr-5">Lập trình Java Web</span>
          <span className="mr-5">Lập trình Java Spring - Java Boot</span>
          <span className="mr-5">Tôi đi code dạo</span>
          <span className="mr-5">Học SEO Hà Nội ở Vietmoz</span>
          <span>Học lập trình trực tuyến</span>
        </div>
      </div>
    </div>
  );
}
