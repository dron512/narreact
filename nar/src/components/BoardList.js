import mydata from "../db/mydata.json";
import { AgGridColumn, AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const BoardList = () => {
  fetch("http://localhost:8080/list")
    .then(function (res) {
      // console.log(res);
      return res.json();
    })
    .then(function (list) {
      console.log("aaa");
      console.log(list);
      list.map((row) => console.log("asdf" + row.id));
    });
  const rowData = [
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxter", price: 72000 },
  ];

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
      <AgGridReact rowData={rowData}>
        <AgGridColumn field="make"></AgGridColumn>
        <AgGridColumn field="model"></AgGridColumn>
        <AgGridColumn field="price"></AgGridColumn>
      </AgGridReact>
      <AgGridReact rowData={mydata.board}>
        <AgGridColumn field="idx"></AgGridColumn>
        <AgGridColumn field="name"></AgGridColumn>
        <AgGridColumn field="title"></AgGridColumn>
      </AgGridReact>
      <AgGridReact rowData={mydata.detail_board}>
        <AgGridColumn field="idx"></AgGridColumn>
        <AgGridColumn field="name"></AgGridColumn>
      </AgGridReact>
    </div>
  );
};

export default BoardList;
