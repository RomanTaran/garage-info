import {Outlet} from 'react-router-dom'
import MenuBar from "../MenuBar";

const InnerContent = () => {
  return (
    <>
      <MenuBar />
      <Outlet />
    </>
  )
}

export default InnerContent;
