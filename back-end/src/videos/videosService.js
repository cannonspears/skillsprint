const knex = require('../db/connection')

/*
    My SQL is not currently good enough to both select and return stuff from inside a JSON
    column, so this service should fetch the entire skills table and let the controller
    locate and return the desired video
*/
function read(video_id) {
    return knex('skills').select('*')
}

module.exports = { read }
