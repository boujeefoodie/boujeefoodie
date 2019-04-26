import { Meteor } from 'meteor/meteor';
import { Reviews } from '../../api/reviews/review.js';

/* eslint-disable no-console */
   /** This subscription publishes only the documents associated with the logged in user */
   Meteor.publish('Reviews', function publish() {
       if (this.userId) {
           const username = Meteor.users.findOne(this.userId).username;
           return Reviews.find({ owner: username });
       }
       return this.ready();
   });
