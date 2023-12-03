import React, { useState } from 'react';
import {
  DataGrid,
  GridColDef,
  GridToolbar,
} from "@mui/x-data-grid";
import "./dataTable.scss";
import AddOrderModal from "../add/AddOrderModal";
import { Link } from "react-router-dom";

type Props = {
  columns: GridColDef[];
  rows: object[];
  slug: string;
  openModal: (id: number) => void;
};

const StaffCreateOrderTable = (props: Props) => {
  const [selectedRows, setSelectedRows] = useState<any[]>([]);
  const [isAddOrderModalOpen, setIsAddOrderModalOpen] = useState(false);


  
  const viewReceipt: GridColDef = {
    field: "view",
    headerName: "Xem biên lai",
    width: 150,
    renderCell: (params) => {
      return (
        <button onClick={() => props.openModal(params.row.id)}>
          Xem đơn hàng
        </button>
      );
    },
  }

  const createOrderButton = (
    <button onClick={() => handleCreateOrder()}>
      Tạo đơn chuyển hàng
    </button>
  );

  const handleSelectionChange = (selection: any[]) => {
    setSelectedRows(selection);
  };

  const handleCreateOrder = () => {
    // Thực hiện logic khi nút "Tạo đơn hàng" được nhấn với các hàng đã chọn
    console.log("Tạo đơn hàng cho các hàng đã chọn:", selectedRows);
    setIsAddOrderModalOpen(true);
  };

  return (
    <div className="dataTable">
      {selectedRows.length > 0 && createOrderButton}
      <DataGrid
        className="dataGrid"
        rows={props.rows}
        columns={[...props.columns, viewReceipt]}
        onRowSelectionModelChange={handleSelectionChange}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
      {isAddOrderModalOpen && <AddOrderModal onClose={() => setIsAddOrderModalOpen(false)} />}
    </div>
  );
};

export default StaffCreateOrderTable;
