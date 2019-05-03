import React from "react";
import { Grid, Rating, List, Container } from "semantic-ui-react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";


class Review extends React.Component {
    render() {
        return (
            <div style={{ paddingTop: 20 }, {paddingBottom: 20}} >
                <Container>
                    <Grid verticalAlign='middle' divided='vertically'>
                        <Grid.Row>
                            <Grid.Column width={3}>
                                <List.Content>
                                    <List.Header>{this.props.review.user}</List.Header>
                                    <List.Item><Rating icon='star' maxRating={5}
                                                       defaultRating={this.props.review.rating}
                                                       size="huge"/></List.Item>
                                </List.Content>
                            </Grid.Column>
                            <Grid.Column width={10}>
                                {this.props.review.review}
                            </Grid.Column>
                            <Grid.Column width={3} textAlign='right'>
                                {this.props.review.createdAt.toLocaleDateString("en-US")}
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row/>
                    </Grid>
                </Container>
            </div>
        );
    }
}

/** Require a document to be passed to this component. */
Review.propTypes = {
    review: PropTypes.object.isRequired
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Review);
