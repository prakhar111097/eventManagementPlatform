const mongoose = require('mongoose');

const EventSchema = mongoose.Schema({
    id: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    eventName: {
        type: String,
        required: true,
        trim: true
    },
    eventDate: {
        type: Date,
        required: true
    },
    organizer: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    location: {
        street: {
            type: String,
            trim: true
        },
        city: {
            type: String,
            trim: true
        },
        state: {
            type: String,
            trim: true
        },
        zip: {
            type: String,
            trim: true
        },
    },
    createdAt: {
        type: Date
    },
    updatedAt: {
        type: Date
    }

})

const EventModel = mongoose.model('event', EventSchema);

module.exports = {
    EventSchema,
    EventModel
};