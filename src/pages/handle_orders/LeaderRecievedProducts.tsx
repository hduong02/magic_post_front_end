import { useState } from "react";
import "./Products.scss";
import DataTable from "../../components/dataTable/LeaderDataTable";
import Add from "../../components/add/Add";
import { GridColDef } from "@mui/x-data-grid";
import { products } from "../../data/leaderData";

const columns: GridColDef[] = [
  { field: "id", headerName: "Mã đơn hàng", width: 120 },
  { field: "customer_id", headerName: "Mã khách hàng", width: 120 },
  { field: "product_type", headerName: "Loại hàng", width: 120 },
  {
    field: "source",
    type: "string",
    headerName: "Gửi từ nguồn",
    width: 120,
  },
  {
    field: "source_name",
    type: "string",
    headerName: "Tên điểm nguồn",
    width: 200,
  },
  {
    field: "cost",
    type: "string",
    headerName: "Tổng thu (vnd)",
    width: 200,
  },
];

const Products = () => {
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
        <div className="leader-banner-1">
          <h1>Hàng đã nhận</h1> 
        </div>
        {/* <button onClick={() => setOpen(true)}>Add New Products</button> */}
      </div>
      <DataTable slug="products" columns={columns} rows={products} />
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

export default Products;
