import React from 'react';
import { Grid, Card, Header, Container, Rating, Image, Segment, List, Loader, Button, Modal } from 'semantic-ui-react';
import { Restaurants } from '/imports/api/restaurant/restaurant';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import TextField from 'uniforms-semantic/TextField';
import NumField from 'uniforms-semantic/NumField';
import SelectField from 'uniforms-semantic/SelectField';
import SubmitField from 'uniforms-semantic/SubmitField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import HiddenField from 'uniforms-semantic/HiddenField';
import AutoForm from 'uniforms-semantic/AutoForm';
import { ReviewSchema } from '../../api/reviews/review';
import { Bert } from "meteor/themeteorchef:bert";


/** A simple static component to render some text for the landing page. */
class RestaurantPage extends React.Component {

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

    // state = {}
    // handleRate = (e, { rating, maxRating }) => this.setState({ rating, maxRating })
    render() {
        return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
    }

    /** Render the page once subscriptions have been received. */
    renderPage() {
        return (
            <Grid divided='vertically'>
                <Grid.Row centered columns={3}>
                    <Grid.Column centered>
                        <Header as="h2">{this.props.restaurants.name}</Header>
                        {/* <Rating icon = 'star' maxRating={5} size="huge" onRate={this.handleRate} /> */}
                        <List>
                        <i className="dollar sign icon"></i>
                        </List>
                        <Image rounded size="large"
                               src={this.props.restaurants.image}/>
                    </Grid.Column>
                    <Grid.Column centered textAlign="right">
                        <List>
                            <List.Item><Header>Location</Header></List.Item>
                            <List.Item>{this.props.restaurants.address}</List.Item>
                        </List>
                        <List>
                            <List.Item><Header>Operating Hours</Header></List.Item>
                            <List.Item>Monday - Friday</List.Item>
                            <List.Item>10:00 am - 2:00 pm</List.Item>
                        </List>
                        <Header>Description</Header>
                        <p>{this.props.restaurants.description}</p>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid verticalAlign='middle' columns={4} centered>
                        <Segment>
                            <Header as="h2" textAlign="center">
                                Reviews
                            </Header>
                        </Segment>
                        <div >
                        </div>
                            <Grid.Column width={4}>
                                <Modal trigger={<Button color = "red">Write Review</Button>}>
                                    <Modal.Header>Write a Review</Modal.Header>
                                    <AutoForm ref={(ref) => { this.formRef = ref; }} schema={ReviewSchema} onSubmit={this.submit}>
                                        <Segment>
                                            <TextField name='email'/>
                                            <NumField name='quantity' decimal={false}/>
                                            <SubmitField value='Submit'/>
                                            <ErrorsField/>
                                            <HiddenField name='owner' value='fakeuser@foo.com'/>
                                        </Segment>
                                    </AutoForm>
                                </Modal>
                                <Rating icon = 'star' maxRating={5} size="huge" onRate={this.handleRate} />
                        </Grid.Column>
                        <Grid.Column width={9}>
                            <div>Hello</div>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Rating icon = 'star' maxRating={5} size="huge" onRate={this.handleRate} />
                        </Grid.Column>
                    </Grid>
                </Grid.Row>
            </Grid>

        );
    }
}

/** Require a document to be passed to this component. */
/** Require an array of Stuff documents in the props. */
RestaurantPage.propTypes = {
    restaurants: PropTypes.array.isRequired,
    ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe('Restaurant');
    return {
        restaurants: Restaurants.find({}).fetch(),
        ready: subscription.ready(),
    };
})(RestaurantPage);
