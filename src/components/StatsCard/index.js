/*eslint-disable*/
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const StatsCard = ({ bigIcon, statsText, statsValue, className, priText, secText }) => (
  <div className="card card-stats">
    <div className="content">
      <div className={`row ${className}`}>
        <div className="col-xs-5 thrift-card">
          <div className="icon-big icon-center icon-warning">
            {bigIcon}
          </div>
        </div>
        <div className="col-xs-7 thrift-card">
          <div className="numbers">
            <p>{priText}</p>
            {/* <p>{secText}</p> */}
            {secText && <p>{secText}<span className="categories-count" ><FontAwesomeIcon icon={faPlusCircle} /></span></p>}
            {statsText && <p>{statsText}<span className="info-icon" ><FontAwesomeIcon icon={faInfoCircle} /></span></p>}
            {statsValue}
          </div>
        </div>
      </div>
    </div>
    {/* <div className="footer">
          <hr />
          <div className="stats">
            {this.props.statsIcon} {this.props.statsIconText}
          </div>
        </div> */}
  </div>
);

export default StatsCard;
