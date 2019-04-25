import React from 'react';
import { Grid, Header, Rating, Image, Segment, List } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Kamitoku extends React.Component {

    // state = {}
    // handleRate = (e, { rating, maxRating }) => this.setState({ rating, maxRating })

    /** Render the page once subscriptions have been received. */
    render() {
        return (
            <Grid divided='vertically'>
                <Grid.Row centered columns={3}>
                    <Grid.Column centered>
                        <Header as="h2">Kamitoku Ramen Truck</Header>
                        {/* <Rating icon = 'star' maxRating={5} size="huge" onRate={this.handleRate} /> */}
                        <List>
                            <i className="dollar sign icon"></i>
                            <i className="dollar sign icon"></i>
                            <i className="dollar sign icon"></i>
                        </List>
                        <List horizontal>
                            <List.Item>Asian
                            </List.Item>
                            <List.Item>Ramen
                            </List.Item>
                            <List.Item>Japanese
                            </List.Item>
                        </List>
                        <Image rounded size="large"
                               src='/images/kamitoku.jpg'/>
                    </Grid.Column>
                    <Grid.Column centered textAlign="right">
                        <List>
                            <List.Item><Header>Location</Header></List.Item>
                            <List.Item>M W F - Center for Korean Studies</List.Item>
                            <List.Item>T TR - Holmes Hall</List.Item>
                        </List>
                        <List>
                            <List.Item><Header>Operating Hours</Header></List.Item>
                            <List.Item>Monday - Friday</List.Item>
                            <List.Item>10:00 am - 2:00 pm</List.Item>
                        </List>
                        <Header>Description</Header>
                        <p>Kamitoku Ramen specializes in a Tottori-style beef bone ramen</p>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid verticalAlign='middle' columns={4} centered>
                        <Segment>
                            <Header as="h2" textAlign="center">
                                Reviews
                            </Header>
                        </Segment>
                        <Grid.Column width={2}>
                            <List.Item>
                                <Image avatar src='/images/ryan_li.jpg' />
                                <List.Content>
                                    <List.Header>Ryan Li</List.Header>
                                    Top Foodie
                                </List.Content>
                            </List.Item>
                        </Grid.Column>
                        <Grid.Column width={9}>
                            <Rating icon = 'star' maxRating={5} defaultRating={5} size="huge"/>
                            <div>This place has the best ramen on the campus. No other place can beat it!</div>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <p>4/24/19</p>
                        </Grid.Column>
                    </Grid>
                </Grid.Row>
            </Grid>

        );
    }
}

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default Kamitoku;
