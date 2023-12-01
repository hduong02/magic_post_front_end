import { useState } from "react";
import "./Products.scss";
import DataTable from "../../components/dataTable/DataTable";
import Add from "../../components/add/Add";
import { GridColDef } from "@mui/x-data-grid";
import { waitingOrder } from "../../data/staffData";

const handleButtonClick = () => {
}

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  // {
  //   field: "img",
  //   headerName: "Image",
  //   width: 100,
  //   renderCell: (params) => {
  //     return <img src={params.row.img || "/noavatar.png"} alt="" />;
  //   },
  // },
  {
    field: "sender",
    type: "string",
    headerName: "Người gửi",
    width: 200,
  },
  {
    field: "sender_number",
    type: "string",
    headerName: "SĐT người gửi",
    width: 200,
  },
  {
    field: "approve",
    headerName: "Actions",
    width: 120,
    renderCell: () => {
      return (
        <button onClick={() => handleButtonClick()}>
          Click Me
        </button>
      );
    },
  },
  // {
  //   field: "producer",
  //   headerName: "SĐT người nhận",
  //   type: "string",
  //   width: 200,
  // },
  // {
  //   field: "createdAt",
  //   headerName: "Địa chỉ người nhận",
  //   width: 200,
  //   type: "string",
  // },
  // {
  //   field: "inStock",
  //   headerName: "Tổng thu",
  //   width: 150,
  //   type: "string",
  // },
];

const ApproveProducts = () => {
  const [open, setOpen] = useState(false);

  // TEST THE API

  // const { isLoading, data } = useQuery({
  //   queryKey: ["allproducts"],
  //   queryFn: () =>
  //     fetch("http://localhost:8800/api/products").then(
  //       (res) => res.json()
  //     ),
  // });

  return (
    <div className="products">
      <div className="info">
        <h1>Các đơn hàng chờ xác nhận</h1>
        {/* <button onClick={() => setOpen(true)}>Add New Products</button> */}
      </div>
      <DataTable slug="products" columns={columns} rows={waitingOrder} />
      {/* TEST THE API */}

      {/* {isLoading ? (
        "Loading..."
      ) : (
        <DataTable slug="products" columns={columns} rows={data} />
      )} */}
      {open && <Add slug="product" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default ApproveProducts;
