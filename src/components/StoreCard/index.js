/*eslint-disable*/
import React from 'react';
import './style.scss';

const StoreCard = () => {
  return (
    <div className='store-cards'>
      <div className="background"></div>
      <div  className="card" style={{
        backgroundImage: `url(${ ("https://uhdwallpapers.xyz/media/images/800x/2021/04/12/superheroes-among-us-5k-wallpaper-6258761618192792.jpg")}}})`}}
         >
      {/* <img src="https://uhdwallpapers.xyz/media/images/800x/2021/04/12/superheroes-among-us-5k-wallpaper-6258761618192792.jpg" alt="Superheroes Among Us 5k Wallpaper"/> */}
        <div className="footer">
          <div className="connections">
            <div className="connection facebook">
              <div className="icon"></div>
            </div>
            <div className="connection twitter">
              <div className="icon"> </div>
            </div>
            <div className="connection behance">
              <div className="icon"></div>
            </div>
          </div>
          <div className="curve"></div>
          <div className="info">
            <div className="name">Filan Fisteku</div>
            <div className="job">Architect Manager</div>
          </div>
        </div>
        <div className="card-blur"></div>
      </div>
    </div>
  )
}

export default StoreCard;
