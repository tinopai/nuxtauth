const monk = require('monk')(
    `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_URL}/${process.env.MONGO_DB}?retryWrites=true&w=majority`
)

module.exports = {
    db: monk,
    users: monk.get('users'),
}
