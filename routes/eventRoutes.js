const express = require('express');
const eventService = require('../services/eventServices');
const router = new express.Router();

router.post('/event',eventService.addEvent);
router.get('/event/:id',eventService.getEvent);
router.get('/event/list',eventService.getEvent);
router.patch('/event/:id',eventService.updateEvent);
router.delete('/event/:id',eventService.deleteEvent);

module.exports = router;