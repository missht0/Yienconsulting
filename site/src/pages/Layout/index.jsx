import { Header, Footer } from '@/components'
import { Outlet } from 'react-router-dom';
import { getdata } from '@/api/api'
import { useEffect, useState } from 'react';

import './index.scss'




const Layout = () => {
    const [data, setData] = useState(null)
    useEffect(() => {
        getdata().then(res => {
            if(sessionStorage.getItem('lang')=="JP"){
                setData(res.homePage2)
            }
            else{
                setData(res.homePage)

            }
            
        })
    }, [])
    return (
        <>
            <Header data={data}/>
            <Outlet data={data}/>
            <Footer data={data}/>
        </>
    );
}
export default Layout

