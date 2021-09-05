import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import mydata from "../db/data.json";

export default function Main() {
    const {ban} = useParams();
    const [students, setStudents] = useState(mydata.student);
    return (
        <div>
            <p>{ban}</p>
            {
                students.map(data => (
                    <Link className="App-link" to="/borrow" key={data.bannum}>{data.name}</Link>
                ))
            }
        </div>
    )
}