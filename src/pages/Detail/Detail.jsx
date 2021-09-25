import React, { useEffect } from "react";
import "./Detail.css";
import { Tabs, Radio, Space, Rate } from "antd";
import { useSelector, useDispatch } from "react-redux";

import { layThongTinChiTietPhim } from "redux/actions/MovieListAction";
import moment from "moment";

const { TabPane } = Tabs;

export default function Detail(props) {
  const {filmDetail} = useSelector(state => state.MovieListReducer);

  console.log( 'filmDetail',filmDetail );

  const dispatch = useDispatch();

  useEffect(() => {
    //Lấy thông tin param từ url
    let { id } = props.match.params;

    dispatch(layThongTinChiTietPhim(id));
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${filmDetail.hinhAnh})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        zIndex: "-1",
        paddingBottom:'5rem'
      }}
    >
      <div className="container" style={{ zIndex: "10", paddingTop: 50 }}>
        <div className="row justify-content-md-center m-4">
          <div className="col-12 col-md-5 col-lg-3">
            <img
              className="float-right"
              style={{ objectFit: "cover" }}
              src={filmDetail.hinhAnh}
              style={{ width: "100%", height: 300 }}
              alt=""
            />
          </div>

          <div className="col-12 col-md-7 col-lg-6">
            <div style={{ marginTop: "20%" }}>
              <p className="text-light">
                Ngày chiếu:{" "}
                {moment(filmDetail.ngayKhoiChieu).format("DD.MM.YYYY")}
              </p>
              <h2 className="text-light">{filmDetail.tenPhim}</h2>
              <p className="text-light">{filmDetail.moTa}</p>
            </div>
          </div>

          <div className="col-12 col-lg-3 mt-5 ml-5 ml-md-0">
            <div
              className={`c100 p${filmDetail.danhGia * 10} green`}
              style={{ marginLeft: "10%" }}
            >
              <span>{filmDetail.danhGia}</span>
              <div className="slice">
                <div className="bar"></div>
                <div className="fill"></div>
              </div>
            </div>

            <h1 className=" d-sm--inline-block">
              <Rate
                className="mt-5 mt-lg-0"
                allowHalf
                value={filmDetail.danhGia / 2}
                style={{ color: "#78ed78", fontSize: 30 }}
              />
            </h1>
          </div>
        </div>
      </div>
      
      <div className="container bg-white px-5 py-5 mt-5">
        <Tabs defaultActiveKey="1" centered>
          <TabPane tab="Lịch chiếu" key="1" style={{ minHeight: 300 }}>
            <div>
              <Tabs tabPosition={"left"}>
                {filmDetail.heThongRapChieu?.map((htr, index) => {
                  return (
                    <TabPane
                      tab={
                        <div className="d-flex flex-column">
                          <img
                            src={htr.logo}
                            style={{ width: 50 }}
                            alt="..."
                          />
                          <div className="text-center ml-2">
                            {htr.tenHeThongRap}
                          </div>
                        </div>
                      }
                      key={index}
                    >
                      {htr.cumRapChieu?.map((cumRap, index) => {
                        return (
                          <div className="mt-2 mb-4" key={index}>
                            <div className="d-flex flex-row">
                              <img
                                style={{ width: 60, height: 60, borderRadius: 2 }}
                                src={cumRap.hinhAnh}
                                alt="..."
                              />
                              <div className="ml-3">
                                <p
                                  style={{
                                    fontSize: 20,
                                    fontWeight: "bold",
                                    lineHeight: 1,
                                  }}
                                >
                                  {cumRap.tenCumRap}
                                </p>
                                <p
                                  className="text-secondary"
                                  style={{ marginTop: 0 }}
                                >
                                  {cumRap.diaChi}
                                </p>
                              </div>
                            </div>

                            <div className="thong-tin-lich-chieu row">
                              {cumRap.lichChieuPhim
                                ?.slice(0, 12)
                                .map((lichChieu, index) => {
                                  return (
                                    <p
                                      style={{color:'#07AD07'}}
                                      to={`/checkout/${lichChieu.maLichChieu}`}
                                      key={index}
                                      className="col-6 col-md-4 col-lg-3 text-success font-bold"
                                    >
                                      {moment(
                                        lichChieu.ngayChieuGioChieu
                                      ).format("hh:mm A")}
                                    </p>
                                  );
                                })}
                            </div>

                          </div>
                        );
                      })}
                    </TabPane>
                  );
                })}
              </Tabs>
            </div>
          </TabPane>
          <TabPane tab="Thông tin" key="2" style={{ minHeight: 300 }}>
            Thông tin
          </TabPane>
          <TabPane tab="Đánh giá" key="3" style={{ minHeight: 300 }}>
            Đánh giá
          </TabPane>
        </Tabs>
      </div>

    </div>
  );
}
