import mydata from "../db/mydata.json";
import React, { useEffect, useState } from "react";

const BoardList = () => {
  const [rowData, setRowData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/rest/list")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setRowData(data);
      });
  }, []);

  return (
    <div>
      {rowData.map((element) => {
        console.log("test");
        return (
          <div key={element.id}>
            <div>{element.name}</div>
            <div>{element.content}</div>
          </div>
        );
      })}
    </div>
  );
};

export default BoardList;
