import {
  DataGrid,
  GridColDef,
  GridToolbar,
} from "@mui/x-data-grid";
import "./dataTable.scss";
import { Link } from "react-router-dom";
import { transportStatusMap } from "../../data/customerData";

type Props = {
  columns: GridColDef[];
  rows: object[];
  slug: string;
  openModal: (id: string) => void;
};

const CustomerOrderTable = (props: Props) => {
  const viewReceipt: GridColDef = {
    field: "viewReceipt",
    headerName: "Xem biên lai",
    width: 150,
    renderCell: (params) => {
      return (
        <button onClick={() => props.openModal(params.row.id)}>
          Xem biên lai
        </button>
      );
    },
  }

  const viewStatus: GridColDef = {
    field: "viewStatus",
    headerName: "Trạng thái chuyển phát",
    width: 150,
    renderCell: (params) => {
      const lastActivityText = transportStatusMap[params.row.id].activities[0]?.text || '';

      return (
        <Link to={`/myOrder/${params.row.id}`} style={{ color: 'blue' }}>
          {lastActivityText}
        </Link>
      );
    },
  }

  return (
    <div className="dataTable">
      <DataGrid
        
        className="dataGrid"
        rows={props.rows}
        columns={[...props.columns, viewReceipt, viewStatus]}
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

export default CustomerOrderTable;
