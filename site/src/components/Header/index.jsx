import { Dropdown, Menu, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { React } from 'react';
import './index.scss'
const Header = (props) => {
  if (props.data != null) console.log("header", props.data);

  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
              中文
            </a>
          ),
        },
        {
          key: '2',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
              ENGLISH
            </a>
          ),
        },
        {
          key: '3',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
              日本語
            </a>
          ),
        },

      ]}
    />
  );
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
            <div className="lan">
        <Dropdown overlay={menu} className="clan">
          <a onClick={e => e.preventDefault()}>

            <Space>
              LANGUAGE
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </div>
    </header>
  )
}

export default Header;