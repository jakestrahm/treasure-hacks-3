/*
name: "name!",
complete: false,
categories: ["test1", "test2"],
description: "description test",
dueBy: Date.now() + 10000,
*/

import { useState } from "react";

const Details = ({ item }) => {

    const [complete, setComplete] = useState(item.complete)


    const handleCheck = () => {
        if (complete === false) {
            setComplete(true)
        } else {
            setComplete(false)
        }

    }


    return (
        <div className="p-2 rounded border border-solid border-black">

            <div className="">
                {item.name}
            </div>

            <div className="">
                {complete === true ? <input onChange={handleCheck} type="checkbox" checked="checked" className="checkbox" /> : <input onChange={handleCheck} type="checkbox" checked="" className="checkbox" />}
            </div>

            <div>
                {item.description}
            </div>

        </div>
    )
}

export default Details;
