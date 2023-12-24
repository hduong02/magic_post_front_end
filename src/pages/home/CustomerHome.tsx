import React from 'react';
import { useState, useEffect } from 'react';

import './CustomerHome.scss';

interface SlideshowProps {
  imgs: string[];
}

const Slideshow: React.FC<SlideshowProps> = ({ imgs }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, []);

  const next = () => {
    if (index === imgs.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index === 0) {
      setIndex(imgs.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <div className="slideshow">
      <img alt="" className="mainImg" src={imgs[index]} />
      <div className="actions">
        <button onClick={prev}>&lt;</button>
        <button onClick={next}>&gt;</button>
      </div>
    </div>
  );
};

const CustomerHome = () => {
    return <>
        <div className="home-container">
          <h1>Magic Post - Giao hàng tận tay</h1>
            <Slideshow
                imgs={[
                  'https://www.lalamove.com/hubfs/shutterstock_713439202_retouch.jpg',
                  'https://www.ikea.com/ext/ingkadam/m/745c4372531a9860/original/PH186233-crop001.jpg?f=xxxl',
                  'https://fptshop.com.vn/Uploads/Originals/2023/11/3/638346181356369639_shipper.jpg',
                  'https://img.freepik.com/premium-vector/post-office-courier-flat-vector-illustration-delivery-man-checking-address-isolated-cartoon-character-white-background-moving-house-relocation-service-worker-standing-near-truck-van_106317-11083.jpg',
                'https://images.unsplash.com/photo-1584691267914-91c0bee55964?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500',
                'https://images.unsplash.com/photo-1585084335487-f653d0859c14?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500',
                'https://images.unsplash.com/photo-1583217874534-581393fd5325?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500',
                ]}
            />
        </div>
    </>
}

export default CustomerHome