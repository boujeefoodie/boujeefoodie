import React from 'react';
import { Feed, Grid, Header, Segment } from "semantic-ui-react";
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import AddReview from "./AddReview";
import { List } from "semantic-ui-react/dist/commonjs/elements/List/List";

class Review extends React.Component {
    render() {
        const feedstyle = { margin: '20px' };
        return (
            <Grid.Column width={9}>
                {this.props.review.review}
                {this.props.review.rating}
                {this.props.review.user}
            </Grid.Column>
            <Grid.Column width={3}>
            <p>{this.props.review.createdAt.toLocaleDateString('en-US')}</p>
    </Grid.Column>
        <Grid.Row>
            <Grid verticalAlign='middle' columns={4} centered>
                <Segment>
                    <Header as="h2" textAlign="center">
                        Reviews
                    </Header>
                </Segment>
                <Grid.Column width={9}>
                    <AddReview restaurant={this.props.doc}/>
                </Grid.Column>
                <div >
                </div>
                <Grid.Column width={4}>
                    <List.Item>
                        <List.Content>
                        </List.Content>
                    </List.Item>
                </Grid.Column>
                <Grid.Column width={9}>
                </Grid.Column>
                <Grid.Column width={3}>
                    {this.props.reviews.map((review, index) => <Review key={index} review={review}/>)}
                </Grid.Column>
            </Grid>
        </Grid.Row>
        );
    }
}

/** Require a document to be passed to this component. */
Review.propTypes = {
    review: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Review);
