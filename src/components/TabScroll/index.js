/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { CarouselNewEStoreAds } from '../Carousel';
import "./style.scss";

let data = [
  {
    name: 'Tab001',
    // text: <CarouselNewEStoreAds />,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nihil, nisi, voluptate ad quis ea omnis quidem minima fugit adipisci, porro ut velit officiis natus eligendi autem inventore dolor fuga unde nesciunt expedita, beatae officia nostrum labore. Reiciendis, commodi adipisci eius est recusandae ipsa incidunt repellat explicabo nobis corporis debitis non ullam, eos itaque, quia, iste repudiandae. Iusto numquam consectetur quo, et, quis deleniti ipsam eaque perferendis. Repellat ad, molestiae id deserunt praesentium distinctio similique nesciunt itaque. Repellat error enim blanditiis esse, odio commodi exercitationem nostrum perferendis veniam quod, recusandae provident aspernatur aliquam placeat odit cumque fugit ducimus, voluptatibus ad?'
  },
  {
    name: 'Tab002',
    // text: <CarouselNewEStoreAds />,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores perspiciatis repellat soluta dolorum, quam quos possimus atque rerum porro voluptate beatae dolor incidunt! Corporis, tempore quasi fugit est. Ex, quae!Aliquam nulla explicabo facilis, consequuntur tenetur! Rem architecto veritatis quo corporis sapiente nesciunt culpa at enim similique officiis adipisci in commodi suscipit, natus facilis, repellat laboriosam eaque obcaecati quaerat vero!'
  },
  {
    name: 'Tab003',
    // text: <CarouselNewEStoreAds />,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem minus similique architecto sequi delectus non, nobis consequuntur officia, laboriosam reiciendis ea! Natus iste quas perspiciatis magnam repellat, voluptate excepturi esse.'
  },
  {
    name: 'Tab004',
    // text: <CarouselNewEStoreAds />,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nihil, nisi, voluptate ad quis ea omnis quidem minima fugit adipisci, porro ut velit officiis natus eligendi autem inventore dolor fuga unde nesciunt expedita, beatae officia nostrum labore. Reiciendis, commodi adipisci eius est recusandae ipsa incidunt repellat explicabo nobis corporis debitis non ullam, eos itaque, quia, iste repudiandae. Iusto numquam consectetur quo, et, quis deleniti ipsam eaque perferendis. Repellat ad, molestiae id deserunt praesentium distinctio similique nesciunt itaque. Repellat error enim blanditiis esse, odio commodi exercitationem nostrum perferendis veniam quod, recusandae provident aspernatur aliquam placeat odit cumque fugit ducimus, voluptatibus ad?'
  },
  {
    name: 'Tab005',
    text: <CarouselNewEStoreAds />,
    // text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores perspiciatis repellat soluta dolorum, quam quos possimus atque rerum porro voluptate beatae dolor incidunt! Corporis, tempore quasi fugit est. Ex, quae!Aliquam nulla explicabo facilis, consequuntur tenetur! Rem architecto veritatis quo corporis sapiente nesciunt culpa at enim similique officiis adipisci in commodi suscipit, natus facilis, repellat laboriosam eaque obcaecati quaerat vero!'
  },
  {
    name: 'Tab006',
    text: <CarouselNewEStoreAds />,
    // text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem minus similique architecto sequi delectus non, nobis consequuntur officia, laboriosam reiciendis ea! Natus iste quas perspiciatis magnam repellat, voluptate excepturi esse.'
  }, {
    name: 'Tab007',
    text: <CarouselNewEStoreAds />,
    // text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nihil, nisi, voluptate ad quis ea omnis quidem minima fugit adipisci, porro ut velit officiis natus eligendi autem inventore dolor fuga unde nesciunt expedita, beatae officia nostrum labore. Reiciendis, commodi adipisci eius est recusandae ipsa incidunt repellat explicabo nobis corporis debitis non ullam, eos itaque, quia, iste repudiandae. Iusto numquam consectetur quo, et, quis deleniti ipsam eaque perferendis. Repellat ad, molestiae id deserunt praesentium distinctio similique nesciunt itaque. Repellat error enim blanditiis esse, odio commodi exercitationem nostrum perferendis veniam quod, recusandae provident aspernatur aliquam placeat odit cumque fugit ducimus, voluptatibus ad?'
  },
  // {
  //   name: 'Tab002',
  //   text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores perspiciatis repellat soluta dolorum, quam quos possimus atque rerum porro voluptate beatae dolor incidunt! Corporis, tempore quasi fugit est. Ex, quae!Aliquam nulla explicabo facilis, consequuntur tenetur! Rem architecto veritatis quo corporis sapiente nesciunt culpa at enim similique officiis adipisci in commodi suscipit, natus facilis, repellat laboriosam eaque obcaecati quaerat vero!'
  // },
  // {
  //   name: 'Tab003',
  //   text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem minus similique architecto sequi delectus non, nobis consequuntur officia, laboriosam reiciendis ea! Natus iste quas perspiciatis magnam repellat, voluptate excepturi esse.'
  // },
  // {
  //   name: 'Tab001',
  //   text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nihil, nisi, voluptate ad quis ea omnis quidem minima fugit adipisci, porro ut velit officiis natus eligendi autem inventore dolor fuga unde nesciunt expedita, beatae officia nostrum labore. Reiciendis, commodi adipisci eius est recusandae ipsa incidunt repellat explicabo nobis corporis debitis non ullam, eos itaque, quia, iste repudiandae. Iusto numquam consectetur quo, et, quis deleniti ipsam eaque perferendis. Repellat ad, molestiae id deserunt praesentium distinctio similique nesciunt itaque. Repellat error enim blanditiis esse, odio commodi exercitationem nostrum perferendis veniam quod, recusandae provident aspernatur aliquam placeat odit cumque fugit ducimus, voluptatibus ad?'
  // },
  // {
  //   name: 'Tab002',
  //   text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores perspiciatis repellat soluta dolorum, quam quos possimus atque rerum porro voluptate beatae dolor incidunt! Corporis, tempore quasi fugit est. Ex, quae!Aliquam nulla explicabo facilis, consequuntur tenetur! Rem architecto veritatis quo corporis sapiente nesciunt culpa at enim similique officiis adipisci in commodi suscipit, natus facilis, repellat laboriosam eaque obcaecati quaerat vero!'
  // },
  // {
  //   name: 'Tab003',
  //   text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem minus similique architecto sequi delectus non, nobis consequuntur officia, laboriosam reiciendis ea! Natus iste quas perspiciatis magnam repellat, voluptate excepturi esse.'
  // }
];

// let abc = [<CarouselNewEStoreAds />, <CarouselNewEStoreAds />, <CarouselNewEStoreAds />]


export const Tabs = () => {


  // this.state = {
  //   activeTab: 0,
  //   data: data,
  //   abc: abc
  // }

  // this.changeTabOnClick = this.changeTabOnClick.bind(this);

  const [activeTab, setCompany] = useState(0);
  // const [data, setFirstName] = useState(data);
  // const [abc, setLastName] = useState(abc);

  const changeTabOnClick = (index) => {
    setCompany(index);
  }

  return (
    <div className="tabs-body">
      <TabHeader
        data={data}
        click={changeTabOnClick}
        activeId={activeTab} />
      <TabContent
        data={data}
        activeId={activeTab} />
    </div>
  )
}

const TabHeader = ({ activeId, click, data }) => {

  const doClick = (index) => {
    click(index);
  }

  let activeClass = activeId;

  let tabs = data.map((item, index) => {
    return <li className={(activeClass === index ? 'active' : '')}>
      <a onClick={() => doClick(index)} ><span>{item.name}</span></a>
    </li>
  });

  return (
    <ul className="tabs-header">{tabs}</ul>
  )
}

const TabContent = ({ activeId, data }) => {

  let activeClass = activeId;

  let content = data.map((item, index) => {
    return <div className={'tabs-textItem ' + (activeClass === index ? 'show' : '')} >{item.text}</div>
  });

  return (
    <div className="tabs-content">{content}</div>
  );
}
