import { useState } from "react";
import "./Products.scss";
import StaffConfirmTable from "../../components/dataTable/StaffConfirmTable";
import ReceiptForm from "../../pages/handle_orders/ReceiptForm";
import { GridColDef } from "@mui/x-data-grid";
import { waitingOrder } from "../../data/staffData";


const columns: GridColDef[] = [
  { field: "id", headerName: "Mã đơn hàng", width: 120 },
  { field: "customer_id", headerName: "Mã khách hàng", width: 120 },

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
      <StaffConfirmTable slug="products" columns={columns} rows={waitingOrder} openModal={openModal} />
      {open && <ReceiptForm rowId={selectedRowId} setOpen={setOpen}/>}
    </div>
  );
};

export default ApproveProducts;
