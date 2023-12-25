import React, { useState} from "react";

const Merhaba = () => {

  const [count, setCount] = useState(0);

  return (
      
<div className="m-5 rounded bg-blue bg-warning w-25 d-flex justify-content-between text-dark">
      <button className="btn btn-success" onClick={()=> setCount(count+1)}>inc</button>
      <h1> {count}  </h1>
      <button className="btn btn-danger" onClick={()=> count > 0 && setCount(count-1)}>dec</button>
    </div>

  )
}

export default Merhaba;