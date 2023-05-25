import "./App.css";
import React, { useCallback, useState } from "react";
import DropZone from "./DropZone";
import Box from "./Box";
import * as _ from "lodash";

const arr = [
  { id: 1, name: "box1" },
  { id: 2, name: "box2" },
  { id: 3, name: "box3" },
];

function App() {
  const [listBox, setListBox] = useState(arr);
  const [listDrop, setListDrop] = useState([]);
  console.log(listBox, listDrop);

  const addItemToSection = (item) => {
    console.log(item);
    setListDrop((o) => [...o, item]);
    let obj = [...listBox];
    let find = _.remove(obj, (o) => o.id === item.id);
    setListBox(obj);
  };

  return (
    <div className="App">
      <div className="w-100 h-50 p-5">
        <DropZone addItemToSection={addItemToSection} listDrop={listDrop} />
      </div>
      <div className="d-flex justify-content-center align-items-center m-2">
        {listBox &&
          !!listBox.length &&
          listBox.map((item) => {
            return <Box id={item.id} name={item.name} />;
          })}
      </div>
    </div>
  );
}

export default App;
