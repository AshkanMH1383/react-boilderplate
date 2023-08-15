import { createBrowserRouter } from 'react-router-dom';

import Home           from '@/pages/Home';
import NotFound       from '@/pages/NotFound';
import AboutUs        from '@/pages/AboutUs';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "AboutUs",
    element: <AboutUs />,
    // children: [
    //   {
    //     path: "team",
    //     element: <Team />,
    //   },
    // ],
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);


export default router;