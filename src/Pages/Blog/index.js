import { CommentOutlined, EyeOutlined, LikeOutlined } from "@ant-design/icons";
import React from "react";
import Layout from "../../Layouts/index";
import { dataContent } from "./dataBlog";
import styled from "./style.module.css";
function Blog() {
  const renderBlogItem = () => {
    return dataContent.map((item, index) => {
      return (
        <div
          key={index}
          className={`${styled.blog__content_item} overflow-hidden w-full h-[50vh] bg-gray-100 p-3 rounded-lg shadow-lg flex flex-col justify-between`}
        >
          <img
            className="blog_item-img w-full object-fill h-1/2 rounded-t-lg"
            src={item.img}
            alt=""
          />
          <h3 className="blog_item-title uppercase font-semibold ">
            {item.title}
          </h3>
          <div className="blog_item-sub--title flex justify-between">
            <div className=" space-x-2">
              <i className=" space-x-1">
                <LikeOutlined className=" text-green-600" />
                <span>{item.subTitle.like}</span>
              </i>
              <i className=" space-x-1">
                <CommentOutlined className=" text-green-600" />
                <span>{item.subTitle.cmt}</span>
              </i>
              <i className=" space-x-1">
                <EyeOutlined className=" text-green-600" />
                <span>{item.subTitle.view}</span>
              </i>
            </div>
            <p>
              <span>Đăng bởi : </span>
              <span className=" text-pink-500">{item.subTitle.author}</span>
            </p>
          </div>
          <p className="blog_item-desc">{item.desc}</p>
          <button
            className={`button-blog bg-yellow-400 border-none text-white uppercase pt-1   ${styled.button_blog} w-full lg:w-fit`}
          >
            Xem thêm
          </button>
        </div>
      );
    });
  };
  return (
    <div className=" blog mt-20 ">
      <div
        className={`blog__header bg-yellow-400 text-white uppercase p-6 ${styled.blog__header}`}
      >
        <h1 className={`header_title text-white m-0 ${styled.header_sub}`}>
          blog
        </h1>
        <p className={`header_sub m-0 ${styled.header_title}`}>
          Thông tin công nghệ số
        </p>
      </div>
      <div className="blog__container flex flex-col   lg:grid lg:grid-cols-7 overflow-hidden bg-white ">
        <div className="blog__content col-span-5 grid grid-cols-2 p-4  gap-4 ">
          {renderBlogItem()}
        </div>
        <div className="blog__advance col-span-2 bg-white space-y-10 pt-4">
          <ul className="p-0 advance__topic list-none border-2 border-solid border-gray-200 border-t-4 border-t-green-600 space-y-6">
            <li className=" border-solid border-b-2 border-0 w-full border-gray-200 uppercase text-center text-xl">
              Các chủ đề được đề xuất
            </li>
            <li className=" cursor-pointer pl-4 text-gray-400">
              Front-end/Mobile App
            </li>
            <li className=" cursor-pointer pl-4 text-gray-400">UI/UX/Design</li>
            <li className=" cursor-pointer pl-4 text-gray-400">Back end</li>
            <li className=" cursor-pointer pl-4 text-gray-400">Thư viện</li>
            <li className=" cursor-pointer pl-4 text-gray-400">
              Chia sẻ người trong nghề
            </li>
            <li className=" cursor-pointer pl-4 text-gray-400">Châm ngôn IT</li>
            <li className=" cursor-pointer pl-4 text-gray-400">Chủ đề khác</li>
          </ul>
          <div className=" advace__post border-2  border-solid border-gray-200 border-t-4 border-t-green-600 space-y-6">
            <h2 className=" border-solid border-b-2 border-0 w-full border-gray-200 uppercase text-center text-xl ">
              Bài đăng được đề xuất
            </h2>
            <div className="advace__post_item cursor-pointer  pl-4 ">
              <h2 className="m-0">Routing trong reacjs</h2>
              <p className=" text-gray-400 m-0">
                Chúng ta sẽ cùng nhau tìm hiểu cách routing trong reactjs...
              </p>
              <div>
                <img
                  className="w-11 h-11 object-cover rounded-full"
                  src="https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg "
                  alt=""
                />
                <span> Nguyễn Văn </span>
              </div>
            </div>
            <div className="advace__post_item cursor-pointer  pl-4">
              <h2 className=" m-0">Lập trình hướng đối tượng oop</h2>
              <p className=" text-gray-400 m-0">
                Chúng ta sẽ cùng nhau tìm hiểu ướng đối tượng oop trong
                reactjs...
              </p>
              <div>
                <img
                  className=" w-11 h-11  object-cover rounded-full"
                  src="https://www.kindpng.com/picc/m/780-7804962_cartoon-avatar-png-image-transparent-avatar-user-image.png"
                  alt=""
                />
                <span> Lê Quang Kiệt </span>
              </div>
            </div>
            <div className="advace__post_item cursor-pointer  pl-4 pb-4">
              <h2 className="m-0">Xây dựng bất đồng bộ trong javascript</h2>
              <p className=" text-gray-400 m-0">
                Chắc chắn khi làm việc sẽ có các công việc căn thời g ian delay
                (gọi API , lấy dữ liệu từ database,...) vi vậy...
              </p>
              <div>
                <img
                  className=" w-11 h-11  object-cover rounded-full"
                  src="https://thumbs.dreamstime.com/b/female-avatar-icon-flat-style-female-user-icon-cartoon-woman-avatar-pink-hair-vector-stock-91462795.jpg"
                  alt=""
                />
                <span>Hồng Ngọc</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Layout(Blog);
