import React from "react";
import { useDrag} from "react-dnd";

function Box(props) {
    const {name, id} = props;
    const [{isDragging},drag] = useDrag(() =>(
        {
            item: {id:id,name:name},                          
            type: "CARD",                                // địa chỉ gửi
            end: (item,monitor) => ({}),                 // kết thúc kéo
            collect: (monitor) => ({                     // trả về đối tg hoặc trạng thái
                isDragging: !!monitor.isDragging()
            }),
        }
    ));
    console.log(isDragging)
  return(
    <div
    className="box"
    ref={drag}
    style={{
        width: "150px",
        height: "100px"
    }}>
        <p>{id}{name}</p>
    </div>
  )
  
}

export default Box;