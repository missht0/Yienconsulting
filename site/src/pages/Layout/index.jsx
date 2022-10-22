
import { Header, Footer ,Home} from '@/components'
import { Outlet } from 'react-router-dom';

import './index.scss'
const data_h = {
    title: 'Personal Website',
    line: 1
};
const data_f = [
    "©2019 Red Bull Air Race Chiba."
];


const Layout = (props) => {
    return (
        <>
            <Header data={data_h} />
            <Outlet />
            <Footer data={data_f} />
        </>
    );
}
export default Layout

