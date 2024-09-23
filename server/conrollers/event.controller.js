const db = require('../db');

class EventController {
    async createEvent(req, res) {
        const {title, description, location} = req.body;
        const newEvent = await db.query(`INSERT INTO event (title, location, description) values ($1, $2, $3) RETURNING *`, [title, location, description]);
        res.json(newEvent.rows)
    }

    async getEvents(req, res) {
        const events = await db.query(`select * from event`);
        res.json(events.rows);
    }
}

module.exports = new EventController();