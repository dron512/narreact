import { useState } from 'react';

export default function MainItem(props){
    const [chk,setchk] = useState(props.cls)
    return(
        <div className={chk} 
            onClick={()=>{
                if(chk === 'main-item')
                    setchk('main-item-chk')
                else
                    setchk('main-item')
            }}>
            <span>{props.name}</span>
        </div>
    )
}