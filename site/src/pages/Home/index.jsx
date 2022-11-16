import { getdata } from '@/api/api'
import { useEffect, useState } from 'react';
import Img02 from '@/assets/storybook/Img/Img02';
import Img03 from '@/assets/storybook/Img/Img03';
import Title from '@/assets/storybook/Title';
import './index.scss'
import { Carousel } from 'antd';
import { Tab } from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const Home = () => {
    const [data, setData] = useState(null);
    const [categories, setcategories] = useState(null);

    useEffect(() => {
        getdata().then(res => {
            if(sessionStorage.getItem('lang')=="JP"){
                setData(res.homePage2)
                setcategories(res.homePage2.categories)
                console.log(res.homePage2);
            }
            else{

                setData(res.homePage)
                setcategories(res.homePage.categories)
                console.log(res.homePage);
            }

        })
    }, [])



    return (
        <div className="home">
            <div className="m-bk">

                {data?.project.map((item, index) => {
                    return (
                        <div className="item" key={index}>
                            <img src={require("@/assets/images/" + item.title + ".jpg")} alt="" />
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

            <div className="process pb-48">
                <Title title={"体检流程 >"} line={true} />

                <div className="w-full max-w-screen-xl px-2 py-16 m-auto sm:px-0">
                    {categories === null ? null :
                        <Tab.Group>
                            <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                                {Object.keys(categories).map((category) => (
                                    <Tab
                                        key={category}
                                        className={({ selected }) =>
                                            classNames(
                                                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                                                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                                selected
                                                    ? 'bg-white shadow'
                                                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                            )
                                        }
                                    >
                                        {category}
                                    </Tab>
                                ))}
                            </Tab.List>
                            <Tab.Panels className="mt-2">
                                {Object.values(categories).map((posts, idx) => (
                                    <Tab.Panel
                                        key={idx}
                                        className={classNames(
                                            'rounded-xl bg-white p-3',
                                            'ring-white ring-opacity-60 ring-offset-2  focus:outline-none focus:ring-2'
                                        )}
                                    >
                                        <Img03 list={posts.list} />
                                    </Tab.Panel>
                                ))}
                            </Tab.Panels>
                        </Tab.Group>
                    }

                </div>
            </div>
        </div>
    );
}
export default Home

