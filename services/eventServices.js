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
    let inputError =0;
    try {   
            console.log("Inside addEvent");
            let event = [];
            let request = [];
        if(!(Array.isArray(req.body))){
            request.push(req.body);
        }else{
            request = req.body;
        }
            for(let i =0;i<req.body.length;i++){
                if ((!req.body[i].id) || (!req.body[i].eventName) || (!req.body[i].eventDate) || (!req.body[i].organizer) || (!req.body[i].email) || (!req.body[i].phone)) {
                    inputError = i+1;
                    throw (`Please provide the required information at ${inputError} object `);
                } else {
                    let date = new Date(req.body[i].eventDate)
                    let eve = {
                        id: req.body[i].id,
                        eventName: req.body[i].eventName,
                        eventDate: date,
                        organizer: req.body[i].organizer,
                        email: req.body[i].email,
                        phone: req.body[i].phone,
                        location: {
                            street: req.body[i].location.street,
                            city: req.body[i].location.city,
                            state: req.body[i].location.state,
                            zip: req.body[i].location.zip,
                        },
                        createdAt: Date.now(),
                        updatedAt: Date.now()
                    }
                    event.push(eve);
                }
            }
        let result= await EventModel.insertMany(event);
        console.log(result);
        res.status(200).send(result);
    } catch (error) {
        if(inputError>0){
            res.status(400).send(error);
        }
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