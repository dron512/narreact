import mydata from '../db/mydata.json'

function BoardList() {
    return (  <div>
        <table>
        {
            mydata.board.map((data)=>(
                <tr>
                    <td>{data.idx}</td>
                    <td>{data.name}</td>
                    <td>{data.title}</td>
                </tr>
            ))
        }
        </table>
    </div>
    );
}

export default BoardList;