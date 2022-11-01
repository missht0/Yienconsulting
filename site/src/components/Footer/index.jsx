import { React } from 'react';
import Title from '@/assets/storybook/Title';

import './index.scss'

const Footer = (props) => {
  if (props.data != null) console.log("footer", props.data);
  return (
    <>

      <footer>
        <div className="footer">
          <div className="f-lt">
            <Title title={props.data === null ? "" : props.data.bottom.title} />
            <div className="partner">
              {props.data === null ? "" : props.data.bottom.partner.map((item, index) => {
                console.log("item", item);
                return (
                  <div key={index}>
                    <a href={item[1]} ><img src={item[2]} alt={item[0]} /></a>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="f-rt">
            {props.data === null ? "" : props.data.bottom.list.map((item, index) => {
              return (
                <li key={index}>{item}</li>
              )
            })
            }
            <li >{props.data === null ? "" :props.data.bottom.address}</li>

          </div>
        </div>

      </footer>
    </>
  )
}

export default Footer;