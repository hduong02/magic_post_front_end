import {
  DataGrid,
  GridColDef,
  GridToolbar,
} from "@mui/x-data-grid";
import "./dataTable.scss";
import { Link } from "react-router-dom";

type Props = {
  columns: GridColDef[];
  rows: object[];
  slug: string;
  openModal: (id: number) => void;
  openConfirmModal: (id: number) => void;
};

const StaffConfirmTable = (props: Props) => {
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

  const confirmColumn: GridColDef = {
    field: "confirm",
    headerName: "Xác nhận đơn hàng",
    width: 120,
    renderCell: (params) => {
      return (
        <button onClick={() => props.openConfirmModal(params.row.id)}>
          Xác nhận
        </button>
      );
    },
  }

  return (
    <div className="dataTable">
      <DataGrid
        
        className="dataGrid"
        rows={props.rows}
        columns={[...props.columns, viewReceipt, confirmColumn]}
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
        // checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
};

export default StaffConfirmTable;
