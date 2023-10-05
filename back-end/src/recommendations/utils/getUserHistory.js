/* 
Get user history
Get top 5 viewed topics
Create embedding for each topic
Run each topic through getFiveSimilar
Remove duplicates from list
Get 5 videos from youtube api for remaining topics
Put video ids into array
create recommendation in table
*/

const service = require('./utilities.service')

async function getUserHistory (user_id) {
    const history = await service.listUserHistory(user_id)
    console.log(history)
}

getUserHistory(1)