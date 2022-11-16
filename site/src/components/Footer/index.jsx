import { React } from 'react';
import Title from '@/assets/storybook/Title';

import './index.scss'

const Footer = (props) => {
  if (props.data != null) console.log("footer", props.data);
  return (
    <>

      <footer>
        <Title title={"合作伙伴 >"} />
        <div className="partner">

          {props.data === null ? "" : props.data.bottom.partner.map((item, index) => {
            return (
              <div className=' flex flex-col w-1/2' key={index}>
                <div className="partner-item rounded-3xl" >
                  <div className=' transition duration-700 transform scale-100  hover:scale-105 '>
                    <a href={item[1]} ><img className='' src={item[2]} alt={item[0]} /></a>

                  </div>
                </div>
                <p className=' mt-7'>{item[0]}</p>
              </div>
            )
          })}
        </div>
        <div className="footer">
          <div className="f-lt">
            <Title title={"EN"} />

          </div>
          <div className="f-rt">
            {props.data === null ? "" : props.data.bottom.list.map((item, index) => {
              return (
                <li key={index}>{item}</li>
              )
            })
            }
            <li >{props.data === null ? "" : props.data.bottom.address}</li>

          </div>
        </div>

      </footer>
    </>
  )
}

export default Footer;