import { useState } from "react";
import Axios from "axios";
export default function ItemModal() {
  const [item, setItem] = useState({
    name: "item 1",
    // categoriesid: [],
    description: "",
    dueBy: Date.now() + 1000,
  });

  const update = (field) => {
    return (e) =>
      setItem({
        ...state,
        [field]: e.currentTarget.value,
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post(`https://treasure-hacks-server-production.up.railway.app/api/item`,item)
    .then((res) =>{
      console.log(res);
    })
    .catch((err) =>{
      console.log(err);
    })
  };

  return (
    <div>
      {/* The button to open modal */}
      <label
        htmlFor="my-modal-3"
        className="btn text-[#dbdbdb]
                hover:bg-[#565656] normal-case w-full h-1 m-1
                "
      >
        New Item
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Create a New Item</h3>
          <form className="py-4" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-y-4">
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                //   onChange={"name"}
              />
              <input
                type="text"
                placeholder="Description"
                className="input input-bordered"
                //   onChange={"description"}
              />
              <button className="btn mt-4">Create</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
