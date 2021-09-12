import React from "react";
import { Button, Table } from "antd";
import { Input, Space } from "antd";
import { AudioOutlined, SearchOutlined } from "@ant-design/icons";

const { Search } = Input;

export default function Films() {
//   const { arrFilmDefault } = useSelector((state) => state.QuanLyPhimReducer);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(layDanhSachPhimAction());
//   }, []);

//   const suffix = (
//     <AudioOutlined
//       style={{
//         fontSize: 16,
//         color: "#1890ff",
//       }}
//     />
//   );

//   const columns = [
//     {
//       title: "Mã phim",
//       dataIndex: "maPhim",
//       sorter: (a, b) => a.maPhim - b.maPhim,
//       sortDirections: ["descend", "ascend"],
//       width: "15%",

//       // sortOrder:'descend'
//     },
//     {
//       title: "Hình ảnh",
//       dataIndex: "hinhAnh",
//       render: (text, film, index) => {
//         return (
//           <Fragment>
//             <img
//               src={film.hinhAnh}
//               alt={film.tenPhim}
//               width={50}
//               height={50}
//               onError={(e) => {
//                 e.target.onError = null;
//                 e.target.src = `https://picsum.photos/id/${index}/50/50`;
//               }}
//             />
//           </Fragment>
//         );
//       },
//       width: "15%",
//     },
//     {
//       title: "Tên phim",
//       dataIndex: "tenPhim",
//       sorter: (a, b) => {
//         let tenPhimA = a.tenPhim.toLowerCase().trim();
//         let tenPhimB = b.tenPhim.toLowerCase().trim();
//         if (tenPhimA > tenPhimB) {
//           return 1;
//         }
//         return -1;
//       },
//       sortDirections: ["descend", "ascend"],
//       width: "25%",
//     },
//     {
//       title: "Mô tả",
//       dataIndex: "moTa",
//       render: (text, film) => {
//         return (
//           <Fragment>
//             {film.moTa.length > 50
//               ? film.moTa.substr(0, 50) + " ..."
//               : film.moTa}
//           </Fragment>
//         );
//       },
//       sortDirections: ["descend", "ascend"],
//       width: "25%",
//     },
//     {
//       title: "Hành động",
//       dataIndex: "maPhim",
//       render: (text, film) => {
//         return (
//           <Fragment>
//             <NavLink
//               key={1}
//               className=" mr-2  text-2xl"
//               to={`/admin/films/edit/${film.maPhim}`}
//             >
//               <EditOutlined style={{ color: "blue" }} />{" "}
//             </NavLink>
//             <span
//               style={{ cursor: "pointer" }}
//               key={2}
//               className="text-2xl"
//               onClick={() => {
                
//                 if (
//                   window.confirm("Bạn có chắc muốn xoá phim " + film.tenPhim)
//                 ) {
                  
//                   dispatch(xoaPhimAction(film.maPhim));
//                 }
//               }}
//             >
//               <DeleteOutlined style={{ color: "red" }} />{" "}
//             </span>

//             <NavLink
//               key={1}
//               className=" mr-2 text-2xl"
//               to={`/admin/films/showtime/${film.maPhim}/${film.tenPhim}`}
//               onClick={() => {
//                 localStorage.setItem("filmParams", JSON.stringify(film));
//               }}
//             >
//               <CalendarOutlined style={{ color: "green" }} />{" "}
//             </NavLink>
//           </Fragment>
//         );
//       },
//       sortDirections: ["descend", "ascend"],
//       width: "25%",
//     },
//   ];
//   const data = arrFilmDefault;

//   const onSearch = (value) => {
//     console.log(value);
//     //Gọi api layDanhSachPhim
//     dispatch(layDanhSachPhimAction(value));
//   };

//   function onChange(pagination, filters, sorter, extra) {
//     console.log("params", pagination, filters, sorter, extra);
//   }
  return (
    <div>
      <h3 className="text-4xl text-center py-4">Quản lý Phim</h3>
      {/* <Button className="mb-5">Thêm phim</Button>
      <Search
        className="mb-5"
        placeholder="input search text"
        enterButton={<SearchOutlined />}
        size="large"
        onSearch={onSearch}
      />
      <Table columns={columns} dataSource={data} onChange={onChange} /> */}
    </div>
  );
}
