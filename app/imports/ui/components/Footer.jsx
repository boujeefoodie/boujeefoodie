import React from 'react';
import { Grid, Input, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Bert } from 'meteor/themeteorchef:bert';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {

  /** On onClick, join newsletter */
  handleClick() {
    /* eslint-disable-next-line */
    if (confirm('Do you really want to join the newsletter?')) {
      Bert.alert({ type: 'success', message: 'Add Successful!' });
    }
  }

  render() {
    const divStyle = { paddingTop: '5px', paddingBottom: '20px', color: 'white' };
    const background = { background: '#292929' };
    return (
        <footer style={background}>
          <div style={divStyle} className="ui center aligned container">
            <hr/>
            <div style={background}>
              <Grid>
                <Grid.Row centered>
                  BOUJEE FOODIE
                </Grid.Row>
                <Grid.Row centered>
                  <Icon size='large' name='facebook'/>
                  <Icon size='large' name='twitter'/>
                  <Icon size='large' name='instagram'/>
                </Grid.Row>
                <Grid.Row centered>
                  <Input action={{ content: 'Join Newsletter', onClick: this.handleClick }} placeholder='Enter Email Address'/>
                </Grid.Row>
              </Grid>
            </div>
          </div>
        </footer>
    );
  }
}

export default Footer;
