const db = require('../db');

class EventController {
    async createEvent(req, res) {
        const { title, description, location, start, finish } = req.body;
        const newEvent = await db.query(`
            INSERT INTO event (title, location, description, start, finish, favourite, click, want)
            values ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
            [title, location, description, start, finish, 0, 0, 0]);
        res.json(newEvent.rows)
    }

    async getEvents(req, res) {
        const events = await db.query(`select * from event`);
        res.json(events.rows);
    }
}

module.exports = new EventController();