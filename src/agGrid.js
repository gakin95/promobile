import React from "react";
import { AgGridReact } from 'ag-grid-react';
import { AllModules } from "ag-grid-enterprise";
import 'ag-grid-community/dist/styles/ag-grid.css';
import "ag-grid-community/dist/styles/ag-theme-balham-dark.css";

function AgGrid() {
  const data = [
    // { name: "gbenga", age: 20 },
    // { name: "ada", age: 25 },
    // { name: "haruna", age: 17 },
    // { name: "Samuel", age: 19 },
  ];
  const columns = [
    {
      headerName: "Id",
      field: "id",
      checkboxSelection: true,
    },
    {
      headerName: "Name",
      field: "name",
    },
    {
      headerName: "Email",
      field: "email",
    },
    {
      headerName: "Body",
      field: "body",
    },
  ];
  const defaultColumnDef = {
    sortable: true,
    editable: true,
    filter: true,
    floatingFilter: true,
    flex: 1,
  };
  let gridApi;
  const onGridReady = params => {
    //gridApi = params.api;
    console.log('grid is ready');
    fetch('https://jsonplaceholder.typicode.com/comments').then(res => res.json())
    .then(res => params.api.applyTransaction({add:res}))
  };
  const onExportClick = () => {
    gridApi.exportDataAsCsv()
  }
  return (
    <div>
      {/* <button onClick={() => onExportClick()}>download</button> */}
    <div  className="ag-theme-balham-dark" style={{ height: 400, width: '100%' }}>
      <AgGridReact
        // rowData={data}
        columnDefs={columns}
        defaultColDef={defaultColumnDef}
        onGridReady={onGridReady}
      />
    </div>
    </div>
  );
}

export default AgGrid;
