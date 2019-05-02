import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Reviews } from '../../api/reviews/review.js';
import { Restaurants } from "../../api/restaurant/restaurant";

/* eslint-disable no-console */
   /** This subscription publishes only the documents associated with the logged in user */
/** Initialize the database with a default data document. */
function addData(data) {
    console.log(`  Adding review for ${data.restaurantName} by ${data.owner}`);
    Reviews.insert(data);
}

/** Initialize the collection if empty. */
if (Reviews.find().count() === 0) {
    if (Meteor.settings.defaultReviews) {
        console.log('Creating default reviews.');
        Meteor.settings.defaultReviews.map(data => addData(data));
    }
}

/** This subscription publishes only the documents associated with the logged in user */
Meteor.publish('Reviews', function publish() {
    if (this.userId) {
        const username = Meteor.users.findOne(this.userId).username;
        return Reviews.find();
    }
    return this.ready();
});
Meteor.publish('RestaurantAdmin', function publish() {
    if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
        return Restaurants.find();
    }
    return this.ready();
});
