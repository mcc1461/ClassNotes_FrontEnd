import Card from "./components/Card"

function App() {
  return (
    <div>
      <Card
        name="Ahmet"
        src="https://cdn.pixabay.com/photo/2015/06/22/08/40/child-817373_640.jpg"
        tel="+49 555 5678"
      />
      <Card
        name="Jenny"
        src="https://cdn.pixabay.com/photo/2017/06/24/02/56/art-2436545_640.jpg"
        tel="+1 4445 5678"
      />
      <Card
        name="Hazel"
        src="https://cdn.pixabay.com/photo/2016/11/29/03/36/woman-1867093_640.jpg"
        tel="+1 55665 577"
      />
    </div>
  )
}

export default App
