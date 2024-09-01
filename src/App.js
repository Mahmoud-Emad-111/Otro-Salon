
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Contact_US from './Component/Contact_US/Contact_US';
import Survey from './Component/Survey/Survey';
import Appointment from './Component/Appointment/Appointment';


let routers=createBrowserRouter([
  {
    // path:"",
    // element:<MainLayouts/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:"/",
        element:<Home/>
      },
    
      {
        path:"/About",
        element:<About/>
      },
      {
        path:"/ContactUS",
        element:<Contact_US/>
      },
      {
        path:"/Survey",
        element:<Survey/>
      },
      {
        path:"/Appointment",
        element:<Appointment/>
      },
      Appointment
      
      
    
    ]
    }
  ])

function App() {
  return (
    <div className="App">
       <RouterProvider router={routers}/>

    </div>
  );
}

export default App;
