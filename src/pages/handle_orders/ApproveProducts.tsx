import { useState } from "react";
import "./Products.scss";
import StaffDataTable from "../../components/dataTable/StaffDataTable";
import ReceiptForm from "../../pages/handle_orders/ReceiptForm";
import { GridColDef } from "@mui/x-data-grid";
import { waitingOrder } from "../../data/staffData";


const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
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
];

const ApproveProducts = () => {
  const [open, setOpen] = useState(false);
  const [selectedRowId, setSelectedRowId] = useState(null);

  const openModal = (id: any) => {
    setOpen(true);
    setSelectedRowId(id);
  };


  return (
    <div className="products">
      <div className="info">
        <h1>Các đơn hàng chờ xác nhận</h1>
      </div>
      <StaffDataTable slug="products" columns={columns} rows={waitingOrder} openModal={openModal} />
      {open && <ReceiptForm rowId={selectedRowId} setOpen={setOpen}/>}
    </div>
  );
};

export default ApproveProducts;
