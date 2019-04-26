import React from 'react';
import { Stuffs, StuffSchema } from '/imports/api/stuff/stuff';
import { Button, Header, Image, Modal } from 'semantic-ui-react';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import NumField from 'uniforms-semantic/NumField';
import SelectField from 'uniforms-semantic/SelectField';
import SubmitField from 'uniforms-semantic/SubmitField';
import HiddenField from 'uniforms-semantic/HiddenField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import { Bert } from 'meteor/themeteorchef:bert';
import { Meteor } from 'meteor/meteor';


class Review extends React.Component {

  constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
        this.insertCallback = this.insertCallback.bind(this);
        this.formRef = null;
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

    /** On submit, insert the data. */
    submit(data) {
        const { email, review, rating, createdAt, owner } = data;
        const owner = Meteor.user().username;
        Stuffs.insert({ name, quantity, condition, owner }, this.insertCallback);
    }

    render() {
        return (
        <Button color='red'>Write a Review</Button>
    );
  }
}
export default Review;