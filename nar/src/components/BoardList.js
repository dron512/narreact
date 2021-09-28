import mydata from "../db/mydata.json";
import React, { useEffect, useState } from "react";

const BoardList = () => {
  const [rowData, setRowData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/greeting")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setRowData(data);
      });
  }, []);

  return (
    <div>
      id = {rowData.id}
      <br />
      content = {rowData.content}
    </div>
  );
};

export default BoardList;
