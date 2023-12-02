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
};

const StaffDataTable = (props: Props) => {
  const actionColumn: GridColDef = {
    field: "approve",
    headerName: "Actions",
    width: 120,
    renderCell: (params) => {
      return (
        <button onClick={() => props.openModal(params.row.id)}>
          Click Me
        </button>
      );
    },
  }

  return (
    <div className="dataTable">
      <DataGrid
        
        className="dataGrid"
        rows={props.rows}
        columns={[...props.columns, actionColumn]}
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

export default StaffDataTable;
