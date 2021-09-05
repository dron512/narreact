import { useState } from "react";
import { Link } from "react-router-dom";
import mydata from "../db/data.json";

export default function Main(){
    
    const [ban,setBan] = useState(mydata.class);

    return (
        <div>
            {
                ban.map(data=>(
                    <Link className="App-link" to="/ban/:ban" key={data.ban}>{data.ban} 반</Link>
                    ))
            }
        </div>
    )
}