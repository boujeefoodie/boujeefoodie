import React from 'react';
import MiddleMenu from '../components/MiddleMenu';
import Description from '../components/Description';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div>
          <MiddleMenu/>
          <Description/>
        </div>
    );
  }
}

export default Landing;
