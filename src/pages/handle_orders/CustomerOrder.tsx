import { useState } from "react";
import "./Products.scss";
import CustomerOrderTable from "../../components/dataTable/CustomerOrderTable";
import ReceiptForm from "./ReceiptForm";
import { GridColDef } from "@mui/x-data-grid";
import { customerOrder } from "../../data/customerData";


const columns: GridColDef[] = [
  { field: "id", headerName: "Mã đơn hàng", width: 120 },
  { field: "customer_id", headerName: "Mã khách hàng", width: 120 },

  {
    field: "date",
    type: "string",
    headerName: "Ngày gửi",
    width: 120,
  },
  {
    field: "destination",
    type: "string",
    headerName: "Gửi đến",
    width: 200,
  },
];

const CustomerOrder = () => {
  const [open, setOpen] = useState(false);
  const [selectedRowId, setSelectedRowId] = useState(null);

  const openModal = (id: any) => {
    setOpen(true);
    setSelectedRowId(id);
  };


  return (
    <div className="products">
      <div className="info">
        <div className="leader-banner-1">
         <h1>Đơn hàng của tôi</h1>
         </div>
      </div>
      <CustomerOrderTable slug="products" columns={columns} rows={customerOrder} openModal={openModal} />
      {open && <ReceiptForm rowId={selectedRowId} setOpen={setOpen}/>}

    </div>
  );
};

export default CustomerOrder;
