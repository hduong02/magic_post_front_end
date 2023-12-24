import { useState } from "react";
import "./Products.scss";
import StaffCreateOrderTable from "../../components/dataTable/StaffCreateOrderTable";
import ReceiptForm from "./ReceiptForm";
import { GridColDef } from "@mui/x-data-grid";
import { confirmedOrder } from "../../data/staffData";


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

const CreateOrder = () => {
  const [open, setOpen] = useState(false);
  const [selectedRowId, setSelectedRowId] = useState(null);

  const openModal = (id: any) => {
    setOpen(true);
    setSelectedRowId(id);
  };


  return (
    <div className="products">
      <div className="info">
        <div className="staff-banner-1">
          <h1>Tạo đơn hàng</h1>
        </div>
      </div>
      <StaffCreateOrderTable slug="products" columns={columns} rows={confirmedOrder} openModal={openModal} />
      {open && <ReceiptForm rowId={selectedRowId} setOpen={setOpen}/>}

    </div>
  );
};

export default CreateOrder;
