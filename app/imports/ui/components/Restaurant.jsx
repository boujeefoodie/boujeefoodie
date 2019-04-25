import React from 'react';
import { Card, Image, Label } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Restaurants } from '/imports/api/restaurant/restaurant'

/** Renders a single row in the List Stuff (Admin) table. See pages/ListStuffAdmin.jsx. */
class Restaurant extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const result = window.confirm('Do you really want to delete?');
    if (result) {
      Restaurant.remove(this.props.vendor._id, this.deleteCallback);
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
          <Image src={this.props.restaurant.image} />
          <Card.Content>
            <Card.Header>{this.props.restaurant.name}</Card.Header>
            <Card.Meta>{this.props.restaurant.address}</Card.Meta>
            <Card.Description>{this.props.restaurant.description}</Card.Description>
          </Card.Content>
          <Card.Content extra>{this.props.restaurant.price}</Card.Content>
          <Card.Content extra>
            {this.props.restaurant.tags}
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
Restaurant.propTypes = {
  restaurant: PropTypes.object.isRequired,
};

export default withRouter(Restaurant);
