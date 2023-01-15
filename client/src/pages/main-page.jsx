const SAMPLE_ITEMS = [
  {
    userId: 0,
    id: "uid1",
    importance: 1,
    name: "Go To The Gym",
    complete: false,
    categories: [
      {
        name: "Gym",
        id: 0,
      },
      {
        name: "Self Care",
        id: 1,
      },
    ],
    description:
      "Do cardio, lift weights, stretch, take a post-workout selfie, and reward yourself with a protein shake (because you deserve it after all that hard work...of standing in front of the mirror flexing).",
    dueBy: Date.now() + 1000,
  },

  {
    userId: 1,
    id: "uid2",
    importance: 2,
    name: "Cook Dinner",
    complete: false,
    categories: [
      {
        name: "cat 1",
        id: 0,
      },
      {
        name: "cat 2",
        id: 1,
      },
    ],
    description:
      "Gather ingredients and make sure you have everything you need, like wine because let's be real, that's the most important ingredient. Then, preheat the oven or set a pot on the stove to boil, but not too hot or you'll end up with soup instead of a meal.",
    dueBy: Date.now() + 2000,
  },

  {
    userId: 2,
    id: "uid3",
    importance: 3,
    name: "item 3",
    complete: false,
    categories: [
      {
        name: "cat 2",
        id: 1,
      },
      {
        name: "cat 3",
        id: 2,
      },
    ],
    description: "descrip 3",
    dueBy: Date.now() + 3000,
  },

  {
    userId: 3,
    id: "uid4",
    importance: 4,
    name: "item 4",
    complete: false,
    categories: [
      {
        name: "cat 3",
        id: 2,
      },
      {
        name: "cat 4",
        id: 3,
      },
    ],
    description: "descrip 4",
    dueBy: Date.now() + 4000,
  },

  {
    userId: 4,
    id: "uid5",
    importance: 5,
    name: "item 5",
    complete: false,
    categories: [
      {
        name: "cat 4",
        id: 3,
      },
      {
        name: "cat 5",
        id: 4,
      },
    ],
    description: "descrip 5",
    dueBy: Date.now() + 5000,
  },

  {
    userId: 5,
    id: "uid6",
    importance: 6,
    name: "item 6",
    complete: false,
    categories: [
      {
        name: "cat 5",
        id: 4,
      },
      {
        name: "cat 6",
        id: 5,
      },
    ],
    description: "descrip 6",
    dueBy: Date.now() + 6000,
  },

  {
    userId: 6,
    id: "uid7",
    importance: 7,
    name: "item 7",
    complete: false,
    categories: [
      {
        name: "cat 6",
        id: 5,
      },
      {
        name: "cat 7",
        id: 6,
      },
    ],
    description: "descrip 7",
    dueBy: Date.now() + 7000,
  },

  {
    userId: 7,
    id: "uid8",
    importance: 8,
    name: "item 8",
    complete: false,
    categories: [
      {
        name: "cat 7",
        id: 6,
      },
      {
        name: "cat 8",
        id: 7,
      },
    ],
    description: "descrip 8",
    dueBy: Date.now() + 8000,
  },

  {
    userId: 8,
    id: "uid9",
    importance: 9,
    name: "item 9",
    complete: false,
    categories: [
      {
        name: "cat 8",
        id: 7,
      },
      {
        name: "cat 9",
        id: 8,
      },
    ],
    description: "descrip 9",
    dueBy: Date.now() + 9000,
  },

  {
    userId: 9,
    id: "uid10",
    importance: 10,
    name: "item 10",
    complete: false,
    categories: [
      {
        name: "cat 9",
        id: 8,
      },
      {
        name: "cat 10",
        id: 9,
      },
    ],
    description: "descrip 10",
    dueBy: Date.now() + 10000,
  },

  {
    userId: 10,
    id: "uid11",
    importance: 11,
    name: "item 11",
    complete: false,
    categories: [
      {
        name: "cat 10",
        id: 9,
      },
      {
        name: "cat 11",
        id: 10,
      },
    ],
    description: "descrip 11",
    dueBy: Date.now() + 11000,
  },
];

import ItemList from "../components/ItemList";
import Details from "../components/Details";
import { useSelector, useDispatch } from "react-redux";
import { changeFocus, selectItem } from "../features/item/itemSlice";
import { useState } from "react";
import NavBar from "../components/NavBar/NavBar";
// import ItemModal from "../components/ItemForm/ItemModal";

export default function MainPage() {
  const item = useSelector(selectItem);
  const [timeList, setTimeList] = useState([]);
  // const dispatch = useDispatch()

  //TODO get call for id that is focusedId in redux store

  const timeHandler = (time) => {
    let dateTime = new Date(time);
    console.log(dateTime);
    setTimeList((prevTime) => {
      return [...prevTime, dateTime];
    });
  };
  return (
    <div className="w-fit h-fit">
      <NavBar />
      <div className="flex flex-row justify-center gap-10 mt-10">
        <div className="w-2/12">
          {/* <ItemModal /> */}
          <ItemList items={SAMPLE_ITEMS} />
        </div>
        <div className="w-2/4 h- -sticky top-1000">
          <Details item={SAMPLE_ITEMS[0]} />
        </div>
      </div>
    </div>
  );
}
