import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Restaurants } from '../../api/restaurant/restaurant.js';

/** Initialize the database with a default data document. */
function addData(data) {
  console.log(`  Adding: ${data.name}`);
  Restaurants.insert(data);
}

/** Initialize the collection if empty. */
if (Restaurants.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.map(data => addData(data));
  }
}

/** This subscription publishes only the documents associated with the logged in user */
Meteor.publish('Restaurant', function publish() {
    return Restaurants.find();
});

/** This subscription publishes all documents regardless of user, but only if the logged in user is the Admin. */
Meteor.publish('RestaurantAdmin', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Restaurants.find();
  }
  return this.ready();
});
