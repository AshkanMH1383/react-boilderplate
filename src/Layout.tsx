import { RouterProvider } from 'react-router-dom';

import router           from '@/router/index';
import Header           from '@/components/Header';
import Footer           from '@/components/Footer';



export default function Layout(): JSX.Element {
    return (
        <>
            <Header />
            <RouterProvider router={router} />
            <Footer />
        </>
    )
}