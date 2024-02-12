import Datatable from "../Components/Datatable"
import Navbar from "../Components/Navbar"
import Sidebar from "../Components/Sidebar"


const List = () => {
  return (
    <div className="list flex ">
      <div className="listContainer flex-6">
        <Datatable/>
      </div>
    </div>
  )
}

export default List