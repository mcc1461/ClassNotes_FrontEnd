import Card from "./components/Card"
import Footer from "./components/Footer"
import Header from "./components/Header"

// import "./scss/app.scss"
import data from "./data.js"
// export const divStyle = {
//   color: "red",
//   backgroundColor: "green",
//   fontSize: "20px",
//   padding: "10px",
//   margin: "10px",
// }




function App() {
  return (
    console.log(data),
    <>
    
      <Header />
      <Card  />
      <Footer />
    </>
  )
}

export default App
