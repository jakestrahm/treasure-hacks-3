import {useState} from 'react'

export default function ItemModal() {
    const [item, setItem] = useState({
        userId: 1,
        id: "uid1",
        name: "item 1",
        complete: false,
        categoriesid: [],
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

    const updateCategories = (e) => {

    }

    const handleSubmit = (e) => {
        // e.preventDefault();
        // const newUser = Object.assign({}, state)
        //props.login(newUser).then(() => props.history.push('/'))
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
                  <form className="py-4">
                      <div className="flex flex-col">
                          <input
                              type="text"
                              placeholder="Name"
                              className="input input-bordered"
                              onChange={"name"}
                          />
                          <input
                              type="text"
                              placeholder="Description"
                              className="input input-bordered"
                              onChange={"description"}
                          />
                          {/* create an array of strings of id's  */}
                          <select className="select w-full max-w-xs">
                              <option disabled selected>
                                  categories
                              </option>
                              <option></option>
                              <option></option>
                              <option></option>
                              <option></option>
                              <option></option>
                          </select>
                          <input
                              type="text"
                              placeholder=""
                              className="input input-bordered"
                              onChange={""}
                          />
                          <button className="btn btn-primary mt-4">
                              Create
                          </button>
                      </div>
                  </form>
              </div>
          </div>
      </div>
  );
}
