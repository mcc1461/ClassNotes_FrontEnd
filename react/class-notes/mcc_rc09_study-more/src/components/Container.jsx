import React from 'react'

function Container(props) {
  return (
    <div className="container bg-primary text-light"
    style={{ margin: "10px", padding:"5px", width: "400px", height: "400px", border: "3px solid blue" }}>
      <p className="fs-1 fw-bolder text-">{props.title}</p>
      <p>{props.number}</p>
      <pre>
        Merhaba ekip,
        ne haber?
      </pre>
    </div>
  );
}

export default Container