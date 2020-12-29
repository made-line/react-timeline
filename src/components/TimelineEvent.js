import React from 'react';
import PropTypes from 'prop-types';
import './TimelineEvent.css';
import Timestamp from './Timestamp';


const TimelineEvent = (props) => {
  return(
    <div className="TimelineEvent">
    <ul>
    <li>person: {props.person}</li>
    <li>status: {props.status}</li>
    <li>timestamp: <Timestamp time={props.timeStamp} /></li>
    </ul>

    </div>
  );
};

TimelineEvent.propTypes = {
  person: PropTypes.string,
  status: PropTypes.string,
  timeStamp: PropTypes.string,
}

export default TimelineEvent;