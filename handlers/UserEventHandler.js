const {
  knex,
  Validators
} = require('../helpers');

class UserEventHandler {

  static fetchUserEventById (id) {

    return knex('user_events')
      .select('*')
      .where('id', Validators.parseInteger(id, -1))
      .first();

  }

  static deleteUserEventByEventId (eventId) {

    return knex('user_events')
      .where('event_id', Validators.parseInteger(eventId, -1))
      .del();

  }

  static fetchUserEventByEventId (eventId) {

    return knex('user_events')
      .select('*')
      .where('event_id', Validators.parseInteger(eventId, -1));

  }

  static getUserEvent (userId, eventId) {

    return knex('user_events')
      .where({
        user_id: Validators.parseInteger(userId, -1),
        event_id: Validators.parseInteger(eventId, -1)
      }).first();

  }

}

module.exports = UserEventHandler;
