import React from 'react';
import PropTypes from 'prop-types'
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {

  const timelineComponents = props.events.map((event) => {
    return (
      <TimelineEvent
        person={event.person}
        status={event.status}
        timeStamp={event.timestamp}
        key={event.person}
      />
    );
  });

  return (
    <ul className="Timeline">
      {timelineComponents}
    </ul>
  );
};

// Timeline.propTypes = {

// }

export default Timeline;