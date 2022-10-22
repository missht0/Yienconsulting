import {React} from 'react';
import './index.scss'
const Header = ({data})=>{
  return(
    <header>
      <h1>{data.title}</h1>
    </header>
  )
}

export default Header;