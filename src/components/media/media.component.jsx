import React from 'react';
import './media.component.css';

import facebook from '../../images/social-media/facebook.svg'
import twitter from '../../images/social-media/twitter.svg'
import instagram from '../../images/social-media/instagram.svg'
 
 
const SocialMediaComponent = ()=>{

    return <section className='social__media'>
        <article className="avatar-social animateScale"> 
            <img src={facebook} alt="facebook" />
        </article>

        <article className="avatar-social animateScale"> 
            <img src={twitter} alt="twitter" />
        </article>
        
        <article className="avatar-social animateScale"> 
            <img src={instagram} alt="instagram" />
        </article>
 
    </section>

}
export default SocialMediaComponent;
