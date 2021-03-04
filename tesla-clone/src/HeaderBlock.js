import React from 'react';
import './HeaderBlock.css';
import Fade from 'react-reveal/Fade';

function HeaderBlock({model, img}) {
  return (
    <div className='headerBlock' style={{
      backgroundImage: `url(${img})`, 
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
      
    }}>
      <div className="headerBlock__info">
        <div className="headerBlock__infoText">
          <Fade top > 
            <h1>{model}</h1>
            <h4>
              Order Online for <span>Touchless Delivery</span>
            </h4>
          </Fade>
          
        </div>
        <div className="headerBlock__actions">
          <Fade left delay={300}>
            <button className='headerBlock__buttonPrimary'>Custom order</button>
          </Fade>
          
          <Fade right delay={300}>
            <button className='headerBlock__buttonSecondary'>Existing inventory</button>
          </Fade>
          
        </div>
      </div>
    </div>
  )
}

export default HeaderBlock
