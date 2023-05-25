import React, { useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import Box from "./Box";

function DropZone(props) {
    const {addItemToSection,listDrop} = props;
    const [{isOver, canDrop},drop] = useDrop(() => ({
        accept: "CARD",                                //địa chỉ div
        drop: (item) => addItemToSection(item),    // vật thẻ rơi đúng mục tiêu thì function đc chạy
        collect: (monitor) => ({                        
            isOver: monitor.isOver(),     //trả về fasle nếu vật thể nằm ngoài vùng thả và true thì ngược lại
            canDrop: monitor.canDrop()   //true nếu đang trong qt kéo hoặc kéo vào đúng vùng thả , và fasle nếu chưa tác động hoặc kết thúc sự thả mà không trúng mục tiêu.
        })
    }
    ))

    return(
        <div className="dustbin" ref={drop}> 
               {listDrop &&
                !!listDrop.length &&
                listDrop.map((item) => {             
                  return (
                    <Box key={item.id} name={item.name}/>
                  );
                })}
        </div>
      )
      
}

export default DropZone;
