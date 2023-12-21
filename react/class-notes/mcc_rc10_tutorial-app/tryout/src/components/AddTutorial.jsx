import { useState } from "react";
// Remove the unused import of 'tw'
// import tw from "twin.macro";

const AddTutorial = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const handleSubmit = (e) => {}

  return (
    <div className="p-2 rounded-md bg-violet-200">
      <h1 className="text-2xl font-extrabold text-center text-red-900">Add Your Tutorial</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter your title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="desc"
            placeholder="Enter your Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="mb-4 btn btn-danger">
          Submit
        </button>
      </form>
    </div>
  )
}

export default AddTutorial
