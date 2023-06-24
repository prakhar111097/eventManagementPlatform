const { EventModel } = require('../db/models/event');

const getEventById = async (req, res) => {
    try {
        if (req.params.id) {
            let event = await EventModel.findOne({ id: req.params.id },{_id:0,__v:0});
            if (!event || event === {})
                return res.status(404).send("Event not Found");
            res.status(200).send(event);
        } else {
            res.status(400).send("ID not provided")
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

const getEvents = async (req, res) => {
    try {
        let event = await EventModel.find({},{_id:0,__v:0});
        res.status(200).send(event);
    } catch (error) {
        res.status(500).send(error);
    }
}

const addEvent = async (req, res) => {
    try {
        if ((!req.body.id) || (!req.body.eventName) || (!req.body.eventDate) || (!req.body.organizer) || (!req.body.email) || (!req.body.phone)) {
            res.status(400).send("Provide all the mandatory information");
        } else {
            let date = new Date(req.body.eventDate)
            let event = {
                id: req.body.id,
                eventName: req.body.eventName,
                eventDate: date,
                organizer: req.body.organizer,
                email: req.body.email,
                phone: req.body.phone,
                location: {
                    street: req.body.location.street,
                    city: req.body.location.city,
                    state: req.body.location.state,
                    zip: req.body.location.zip,
                },
                createdAt: Date.now(),
                updatedAt: Date.now()
            }
            let result = await EventModel.create(event);
            res.status(200).send(result);
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

const updateEvent = async (req, res) => {
    try {
        if (req.params.id) {
            let updates = Object.keys(req.body);
            let event = await EventModel.findOne({ id: req.params.id },{_id:0,__v:0});
            if (!event || event === {})
                return res.status(404).send("Event not Found");
            else {
                updates.forEach((update) => {
                    event[update] = req.body[update];
                });
                event.updatedAt = Date.now();
                let result = await EventModel.findOneAndUpdate({ id: req.params.id }, event);
                res.status(200).send(result);
            }
        } else {
            res.status(400).send("ID not provided")
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

const deleteEvent = async (req, res) => {
    try {
        if (req.params.id) {
            let result = await EventModel.deleteOne({ id: req.params.id });
            res.status(200).send(result);
        } else {
            res.status(400).send("ID not provided")
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    getEventById,
    getEvents,
    addEvent,
    updateEvent,
    deleteEvent
}