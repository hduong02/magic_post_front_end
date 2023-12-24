import { useState } from "react";
import "./Products.scss";
import StaffConfirmTable from "../../components/dataTable/StaffConfirmTable";
import ReceiptForm from "./ReceiptForm";
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
  const [confirmOpen, setConfirmOpen] = useState(false);

  const [selectedRowId, setSelectedRowId] = useState(null);

  const openModal = (id: any) => {
    setOpen(true);
    setSelectedRowId(id);
  };

  const openConfirmModal = (id: any) => {
    setConfirmOpen(true);
    setSelectedRowId(id);
  };

  const confirmOrder = () => {
    // Thực hiện xác nhận đơn hàng và chuyển dữ liệu từ waitingOrder sang confirmedOrder
    // ...

    // Sau khi xác nhận, đóng ô xác nhận và modal
    setConfirmOpen(false);
    setOpen(false);
  };

  return (
    <div className="products">
      <div className="info">
        <div className="staff-banner-2">
          <h1>Xác nhận đơn hàng</h1>
        </div>
      </div>
      <StaffConfirmTable slug="products" columns={columns} rows={waitingOrder} openModal={openModal} openConfirmModal={openConfirmModal} />
      {open && <ReceiptForm rowId={selectedRowId} setOpen={setOpen}/>}

      {confirmOpen && (
        <div className="confirm-modal">
          <p>Bạn có chắc muốn xác nhận đơn hàng {selectedRowId} không?</p>
          <button onClick={confirmOrder}>Đồng ý</button>
          <button onClick={() => setConfirmOpen(false)}>Hủy</button>
        </div>
      )}
    
    </div>
  );
};

export default ApproveProducts;
