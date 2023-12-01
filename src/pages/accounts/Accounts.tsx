import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable";
import "./accounts.scss";
import { useState } from "react";
import Add from "../../components/add/Add";
import { userRows } from "../../data/data";
// import { useQuery } from "@tanstack/react-query";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  // {
  //   field: "img",
  //   headerName: "Avatar",
  //   width: 100,
  //   renderCell: (params) => {
  //     return <img src={params.row.img || "/noavatar.png"} alt="" />;
  //   },
  // },
  {
    field: "firstName",
    type: "string",
    headerName: "Họ tên",
    width: 200,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Số điện thoại",
    width: 200,
  },
  {
    field: "email",
    type: "string",
    headerName: "Tên đăng nhập",
    width: 200,
  },
  {
    field: "password",
    headerName: "Mật khẩu",
    width: 200,
    type: "string",
  },
  // {
  //   field: "verified",
  //   headerName: "Verified",
  //   width: 150,
  //   type: "boolean",
  // },
];

const Users = () => {
  const [open, setOpen] = useState(false);

  // TEST THE API

  // const { isLoading, data } = useQuery({
  //   queryKey: ["allusers"],
  //   queryFn: () =>
  //     fetch("http://localhost:8800/api/users").then(
  //       (res) => res.json()
  //     ),
  // });

  return (
    <div className="accounts">
      <div className="info">
        <h1>Tài khoản</h1>
        <button onClick={() => setOpen(true)}>Thêm tài khoản</button>
      </div>
      <DataTable slug="users" columns={columns} rows={userRows} />
      {/* TEST THE API */}

      {/* {isLoading ? (
        "Loading..."
      ) : (
        <DataTable slug="users" columns={columns} rows={data} />
      )} */}
      {open && <Add slug="user" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Users;
