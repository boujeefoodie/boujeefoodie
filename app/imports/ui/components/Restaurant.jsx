import React from 'react';
import { Card, Image, Button, Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { Restaurants } from '/imports/api/restaurant/restaurant';
import { Roles } from 'meteor/alanning:roles';
import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';

/** Renders a single row in the List Stuff (Admin) table. See pages/ListStuffAdmin.jsx. */
class Restaurant extends React.Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    // eslint-disable-next-line
    const result = window.confirm('Do you really want to delete?');
    if (result) {
      Restaurants.remove(this.props.restaurant._id, this.deleteCallback);
    }
    return false;
  }

  deleteCallback(error) {
    if (error) {
      Bert.alert({ type: 'danger', message: `Delete failed: ${error.message}` });
    } else {
      Bert.alert({ type: 'success', message: 'Delete succeeded' });
    }
  }

  render() {
    return (
        <Card>
          <Image src={this.props.restaurant.image}/>
          <Card.Content>
            <Card.Header>{this.props.restaurant.name}</Card.Header>
            <Card.Meta>{this.props.restaurant.address}</Card.Meta>
            <Card.Meta>{this.props.restaurant.price}</Card.Meta>
            <Card.Description>{this.props.restaurant.description}</Card.Description>
          </Card.Content>
          <Card.Content extra textAlign='center'>
            <Link to={`/restaurantpage/${this.props.restaurant._id}`}>
              <Button color={'red'}> View Restaurant</Button>
            </Link>
          </Card.Content>
          {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
              <Card.Content extra>
                <Grid columns={2}>
                  <Grid.Column textAlign='left'>
                    <Button basic>
                      <Link to={`/edit/${this.props.restaurant._id}`}>Edit</Link>
                    </Button>
                  </Grid.Column>
                  <Grid.Column textAlign='right'>
                    <Button basic onClick={this.onClick}>Delete</Button>
                  </Grid.Column>
                </Grid>
              </Card.Content>
          ) : ''}
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
Restaurant.propTypes = {
  restaurant: PropTypes.object.isRequired,
};

export default withRouter(Restaurant);
