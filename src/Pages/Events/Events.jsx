import React from "react";
import "./Events.css";
import Layouts from "../../Layouts";

function Events() {
    return (
        <div className='mt-16'>
            <section>
                <div className="eventDetail">
                    <div className="flex flex-wrap ">
                        <div className="md:w-1/2 pr-4 pl-4 imgEvent">
                            <img
                                className="animate"
                                src={require("../../Assets/Images/Events/it.png")}
                                alt=""
                            />
                        </div>
                        <div className="md:w-1/2 pr-4 pl-4 infoEvent">
                            <h5>Sự kiện công nghệ dành cho startup</h5>
                            <h6>Nơi gặp gỡ của những tư tưởng lớn</h6>
                            <p className="colorCardTitle">
                                Innovatube Frontier Summit (IFS) là sự kiện đầu
                                tiên tại Việt Nam tập trung vào cả bốn mảng tiêu
                                biểu của công nghệ tiên phong, bao gồm
                                Artificial Intelligence (trí tuệ nhân tạo),
                                Internet of Things (Internet vạn vật),
                                Blockchain (Chuỗi khối) và Augmented
                                reality/Virtual Reality (Thực tế tăng cường/Thực
                                tế ảo)
                            </p>
                            <button className="mr-4 btnJoin">Tham gia</button>
                            <button className="btnDetail">Tìm hiểu thêm</button>
                        </div>
                    </div>
                </div>
                <div className="speecher mt-4">
                    <h6>Các nhà đồng sáng tạo</h6>
                    <div className="grid grid-cols-4 gap-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 speechDetail ">

                        <div className="cardSpeecher">
                            <img
                                src={require("../../Assets/Images/Events/instrutor5.jpg")}
                                alt=""
                            />
                            <h6>Nguyễn Nhật</h6>
                            <p>Ceo TechViet Production</p>
                        </div>

                        <div className="cardSpeecher">
                            <img
                                src={require("../../Assets/Images/Events/instrutor6.jpg")}
                                alt=""
                            />
                            <h6>Nguyễn Nhật Nam</h6>
                            <p>Ceo TechViet Production</p>
                        </div>

                        <div className="cardSpeecher">
                            <img
                                src={require("../../Assets/Images/Events/instrutor7.jpg")}
                                alt=""
                            />
                            <h6>Nguyễn Nam</h6>
                            <p>Ceo TechViet Production</p>
                        </div>

                        <div className="cardSpeecher">
                            <img
                                src={require("../../Assets/Images/Events/instrutor8.jpg")}
                                alt=""
                            />
                            <h6>Jhonny Đặng</h6>
                            <p>Ceo TechViet Production</p>
                        </div>

                        <div className="cardSpeecher">
                            <img
                                src={require("../../Assets/Images/Events/instrutor9.jpg")}
                                alt=""
                            />
                            <h6>Ngô Henry</h6>
                            <p>Ceo TechViet Production</p>
                        </div>
                        {/* </div> */}
                        {/* <div className="xl:w-1/4 pr-4 pl-4 lg:w-1/3  md:w-1/2 "> */}
                        <div className="cardSpeecher">
                            <img
                                src={require("../../Assets/Images/Events/instrutor10.jpg")}
                                alt=""
                            />
                            <h6>Vương Phạm Vn</h6>
                            <p>Ceo TechViet Production</p>
                        </div>

                        <div className="cardSpeecher">
                            <img
                                src={require("../../Assets/Images/Events/instrutor11.jpg")}
                                alt=""
                            />
                            <h6>Rober Imacu</h6>
                            <p>Ceo TechViet Production</p>
                        </div>

                        <div className="cardSpeecher">
                            <img
                                src={require("../../Assets/Images/Events/instrutor12.jpg")}
                                alt=""
                            />
                            <h6>Khoa Pug</h6>
                            <p>Ceo TechViet Production</p>
                        </div>

                    </div>
                </div>
                <div className="donors">
                    <h6>Nhà tài trợ chương trình</h6>
                    <div className="flex flex-wrap ">
                        <div className="xl:w-1/4 pr-4 pl-4 lg:w-1/3  md:w-1/2 ">
                            <div className="itemDonors">
                                <img
                                    src={require("../../Assets/Images/Events/meta.jpg")}
                                    alt=""
                                />
                                <p>Facebook</p>
                            </div>
                        </div>
                        <div className="xl:w-1/4 pr-4 pl-4 lg:w-1/3  md:w-1/2 ">
                            <div className="itemDonors">
                                <img
                                    src={require("../../Assets/Images/Events/microsoft.jpg")}
                                    alt=""
                                />
                                <p>Microsoft</p>
                            </div>
                        </div>
                        <div className="xl:w-1/4 pr-4 pl-4 lg:w-1/3  md:w-1/2 ">
                            <div className="itemDonors">
                                <img
                                    src={require("../../Assets/Images/Events/Google-logo.jpg")}
                                    alt=""
                                />
                                <p>Google</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Layouts(Events);