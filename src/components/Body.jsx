import Sidebar from "./Sidebar"
import MainContainer from "./MainContainer"

const Body = () => {
  return (
    <>
    <div className="border flex min-h-screen">
    <Sidebar />
    <MainContainer />
    </div>
    </>
  )
}

export default Body