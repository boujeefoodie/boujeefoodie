import React from 'react';
import { Feed, Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';


class Review extends React.Component {
    render() {
        const feedstyle = { margin: '20px' };
        return (
            <Grid verticalAlign='middle' columns={4} centered>
            <Feed.Event style={feedstyle}>
                <Grid.Column width={9}>
                    {this.props.review.user}
                    <br/>
                    {this.props.review.review}
                    {this.props.review.rating}
                </Grid.Column>
                <Grid.Column width={3}>
                    {this.props.review.createdAt.toLocaleDateString('en-US')}
                </Grid.Column>
            </Feed.Event>
            </Grid>
        );
    }
}

/** Require a document to be passed to this component. */
Review.propTypes = {
    review: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Review);
