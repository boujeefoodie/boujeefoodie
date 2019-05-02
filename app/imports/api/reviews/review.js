import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Create a Meteor collection. */
const Reviews = new Mongo.Collection('Reviews');

/** Create a schema to constrain the structure of documents associated with this collection. */
const ReviewSchema = new SimpleSchema({
    restaurantName: String,
    user: String,
    review: String,
    rating: {
        type: Number,
        allowedValues: ['1', '2', '3', '4', '5'],
        defaultValue: '3',
    },
    createdAt: Date,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Reviews.attachSchema(ReviewSchema);

/** Make the collection and schema available to other code. */
export { Reviews, ReviewSchema };
