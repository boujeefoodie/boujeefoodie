import React from 'react';
import { Grid, Input, Icon } from 'semantic-ui-react';
import { Bert } from 'meteor/themeteorchef:bert';
import { Menu } from 'semantic-ui-react/dist/commonjs/collections/Menu';

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
    const divStyle = { paddingTop: '15px', background: '#009443', color: 'white' };
    return (
        <div style={divStyle}>
          <Grid columns={3} container centered>
            <Grid.Column>
              <h1>BOUJEE FOODIE</h1>
            </Grid.Column>
            <Grid.Column>
              <a href='https://www.facebook.com' style={{color: 'white'}}><Icon size='big' name='facebook'/></a>
              <a href='https://www.twitter.com' style={{color: 'white'}}><Icon size='big' name='twitter' link/></a>
              <a href='https://www.instagram.com' style={{color: 'white'}}><Icon size='big' name='instagram' link/></a>
            </Grid.Column>
            <Grid.Column>
              <Input action={{ content: 'Join Newsletter', onClick: this.handleClick }}
                     placeholder='Enter Email Address'/>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}

export default Footer;
