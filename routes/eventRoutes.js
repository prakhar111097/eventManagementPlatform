const express = require('express');
const eventService = require('../services/eventServices');
const router = new express.Router();

router.post('/event', eventService.addEvent);
router.get('/event/list/:id', eventService.getEventById);
router.get('/event/list', eventService.getEvents);
router.patch('/event/:id', eventService.updateEvent);
router.delete('/event/:id', eventService.deleteEvent);

module.exports = router;