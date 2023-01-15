//TODO make editable

/*
categories: ["test1", "test2"],
*/

import { useState, useEffect } from "react";
import Axios from "axios";
import Categories from "../Categories";

const Details = ({ item, time }) => {
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
  const timeHandler = (event) => {
    time(event.target.value);
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
    <div className="bg-slate-400 flex justify-center p-10 rounded border border-solid">
      <div className="space-y-10">
        <div>
          {editingName === false ? (
            <div className="flex justify-center">
              <button onClick={handleNameClick} className="text-4xl">
                {item.name}
              </button>
            </div>
          ) : (
            <div className="flex justify-center">
              <input
                autoFocus
                type="text"
                placeholder={item.name}
                className=""
                onBlur={handleFocusLoss}
                defaultValue={item.name}
              />
            </div>
          )}
        </div>

        {editingDescription === false ? (
          <div className="bg-white rounded text-xl">
            <button onClick={handleDescriptionClick} className="">
              {item.description}
            </button>
          </div>
        ) : (
          <input
            autoFocus
            type="text"
            placeholder={item.description}
            className="w-96"
            onBlur={handleFocusLoss}
            defaultValue={item.description}
          />
        )}

        <div className="flex justify-evenly">
          <div className="text-2xl">Due Date: January 23 2023</div>
          <input type="datetime-local" onChange={timeHandler} />
          <div className="text-2xl flex item-center gap-1 items-center">
            Completed:
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
        </div>
      </div>
    </div>
  );
};

export default Details;
