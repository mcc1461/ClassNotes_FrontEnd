const Event = () => {

  const handleClick = () => {
    alert("Clicked!");


  };
  const handleDelete = (msg) => {
    alert("Deleted!");
    console.log(msg);
  };
  let message = "Hello World";
  function handleChange (e) {
    message = "FS15 is the best!";
    console.log(message);
  } 
  return (
    <>
      <button onClick={()=> handleClick()}>Click Me</button>
      <button onClick={() => handleDelete(message)}>Delete</button>
      <button onClick={() => handleChange(message)}>Change</button>
    </>
  );
}

export default Event;   