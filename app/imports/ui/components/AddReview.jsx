import React from 'react';
import { Segment, Rating } from 'semantic-ui-react';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import SubmitField from 'uniforms-semantic/SubmitField';
import HiddenField from 'uniforms-semantic/HiddenField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import PropTypes from 'prop-types';
import { Bert } from 'meteor/themeteorchef:bert';
import { Meteor } from 'meteor/meteor';
import { Reviews, ReviewSchema } from '../../api/reviews/review';

class AddReview extends React.Component {

  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.insertCallback = this.insertCallback.bind(this);
    this.formRef = null;
    this.rating = 0;
  }

  /** Notify the user of the results of the submit. If successful, clear the form. */
  insertCallback(error) {
    if (error) {
      Bert.alert({ type: 'danger', message: `Add failed: ${error.message}` });
    } else {
      Bert.alert({ type: 'success', message: 'Add succeeded' });
      this.formRef.reset();
    }
  }

  handleRate = (e, { rating }) => {
    this.rating = rating;
  }

  /** On submit, insert the data. */
  submit(data) {
    const { review, createdAt, restaurantName } = data;
    const user = Meteor.user().username;
    const rating = this.rating;
    Reviews.insert({ restaurantName, user, review, rating, createdAt }, this.insertCallback);
  }

  render() {
    return (
        <AutoForm ref={(ref) => {
          this.formRef = ref;
        }} schema={ReviewSchema} onSubmit={this.submit}>
          <Segment>
            <h1>Add a Review</h1>
            <Rating icon='star' maxRating={5} onRate={this.handleRate}/>
            <TextField name='review'/>
            <SubmitField value='Submit'/>
            <ErrorsField/>
            <HiddenField name='createdAt' value={Date().toLocaleString()}/>
            <HiddenField name='restaurantName' value={this.props.restaurant.name}/>
            <HiddenField name='user' value={Meteor.user().username}/>
          </Segment>
        </AutoForm>
    );
  }
}

AddReview.propTypes = {
  restaurant: PropTypes.object.isRequired,
};
export default AddReview;
