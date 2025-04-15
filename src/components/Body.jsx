import Sidebar from "./Sidebar"
import MainContainer from "./MainContainer"

const Body = () => {
  return (
    <>
    <div className="border mt-5 flex ">
    <Sidebar />
    <MainContainer />
    </div>
    </>
  )
}

export default Body