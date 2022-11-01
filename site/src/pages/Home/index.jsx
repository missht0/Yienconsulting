import { getdata } from '@/api/api'
import { useEffect, useState } from 'react';
import Img02 from '@/assets/storybook/Img/Img02';
import './index.scss'
import { Carousel } from 'antd';


const Home = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        getdata().then(res => {
            setData(res.homePage)
            console.log(res.homePage);
        })
    }, [])

    return (
        <div className="home">
            <div className="m-bk">

                {data?.project.map((item, index) => {
                    return (
                        <div className="item" key={index}>
                            <img src={require("@/assets/images/"+item.title+".jpg")} alt="" />
                            <div className="cnt">
                                <h3>{item.title}</h3>
                                <p>{item.cnt.title}</p>
                                {item.cnt.content.map((item, index) => {
                                    return <li key={index}>{item}</li>
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="Carousel">
                <Carousel afterChange={(currentSlide) => { console.log(currentSlide); }} dotPosition="top" autoplay>
                    {data?.project.map((item, index) => {
                        return (
                            <Img02 title={item.title} list={item.item} key={index} />
                        )
                    })}


                </Carousel>
            </div>
        </div>
    );
}
export default Home

