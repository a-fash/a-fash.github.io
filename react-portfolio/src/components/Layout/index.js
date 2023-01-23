import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar'
import './index.scss';

 const Layout = () => {
   return (
      <div className='App'>
         <div className='app-container'>
            <div className='sidebar'>
               <Sidebar className={'sidebar'} />
            </div>
            <div className='page'>
               <span className='tags top-tag-html'>
                  &nbsp;&nbsp;&lt;html&gt;
                  <br />
                  <span className='top-tags'>&nbsp;&nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
               </span>
               <Outlet />
               <span className='tags bottom-tags'>
                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;/body&gt;
                  <br />
                  <span className="bottom-tag-html">&nbsp;&nbsp;&lt;/html&gt;</span>
               </span>
            </div>
         </div>
      </div>
   )
 }

 export default Layout