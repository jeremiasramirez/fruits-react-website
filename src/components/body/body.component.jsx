import React from 'react';
import './body.component.css';
import logo from '../../images/orange-fruit.svg';

const DescriptionBody = ()=>{
    return <>
        <p className="description">
            Orange is not just a fruit, its more. Get to
            know the multiple health benefits of adding oranges
            in your daily diet.
        </p>
        <p className="read">Read more...</p>
    </>
}



const InfoComponent = ()=>{
    return <article className="item animate">
        <h1 className="info__title"> Eat Fresh </h1>
        <h2 className="info__subtitle"> Stay Healthy! </h2>
        {
            DescriptionBody()
        }
    </article>
}



const ImageComponent = ()=>{
    return <article className="animate imageBody">
          <img src={logo} alt="image" ></img>
    </article>
}




const BodyComponent = ()=>{
    return <section className="body__container">

        {
            InfoComponent()
        }

        {
            ImageComponent()
        }
        


    </section>
}

export default BodyComponent;




