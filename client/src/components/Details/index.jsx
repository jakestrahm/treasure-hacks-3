//TODO make editable

/*
categories: ["test1", "test2"],
*/

import { useState } from "react";
import Categories from "../Categories";

const Details = ({ item }) => {
  //TODO replace wtih redux

  const [editingName, setEditingName] = useState(false);
  const [editingDescription, setEditingDescription] = useState(false);
  const [complete, setComplete] = useState(item.complete);
  const handleCheck = () => {
    if (complete === false) {
      setComplete(true);
    } else {
      setComplete(false);
    }
  };

  const handleNameClick = (event) => {
    console.log(event.detail);
    switch (event.detail) {
      case 1: {
        //change details's item
        console.log("click");
        break;
      }
      case 2: {
        //change details's item
        console.log("double click");
        setEditingName(true);
        break;
      }
      default: {
        break;
      }
    }
  };

  const handleDescriptionClick = (event) => {
    console.log(event.detail);
    switch (event.detail) {
      case 1: {
        //change details's item
        console.log("click");
        break;
      }
      case 2: {
        //change details's item
        console.log("double click");
        setEditingDescription(true);
        break;
      }
      default: {
        break;
      }
    }
  };

  const handleFocusLoss = () => {
    setEditingDescription(false);
    setEditingName(false);
  };

  return (
    <div className=" flex justify-center p-4 rounded border border-solid border-black">
      <div>
        <div className="bg-red-300">
          {editingName === false ? (
            <button onClick={handleNameClick} className="">
              {item.name}
            </button>
          ) : (
            <input
              autoFocus
              type="text"
              placeholder={item.name}
              className=""
              onBlur={handleFocusLoss}
              defaultValue={item.name}
            />
          )}
        </div>

        {editingDescription === false ? (
          <button onClick={handleDescriptionClick} className="">
            {item.description}
          </button>
        ) : (
          <input
            autoFocus
            type="text"
            placeholder={item.description}
            className=""
            onBlur={handleFocusLoss}
            defaultValue={item.description}
          />
        )}

        <Categories categories={item.categories} />

        <div className="">
          {complete === true ? (
            <input
              onChange={handleCheck}
              type="checkbox"
              checked="checked"
              className="checkbox"
            />
          ) : (
            <input
              onChange={handleCheck}
              type="checkbox"
              checked=""
              className="checkbox"
            />
          )}
        </div>

        <div>{item.dueBy}</div>
        {/* TODO default value of dueBy?
            set it here too?
            */}
        <input type="datetime-local" />
      </div>
    </div>
  );
};

export default Details;
