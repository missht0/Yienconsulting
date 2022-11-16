import { Dropdown, Menu, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { React } from 'react';
import './index.scss'
import { ThemeSelector } from '../ThemeSelector';
const Header = (props) => {
  if (props.data != null) console.log("header", props.data);

  return (
    <header>

      <Menu
        theme="dark"
        className='header'
        mode="horizontal"
        items={props.data === null ? "" : props.data.navigation.map((item, index) => {
          const key = index + 1;
          return {
            key,
            label: item,
          }
        })}
      />
      <div className="lan relative flex basis-0 justify-end gap-6 sm:gap-8 md:flex-grow">
        <ThemeSelector className="relative z-10 "/>
      </div>
    </header>
  )
}

export default Header;