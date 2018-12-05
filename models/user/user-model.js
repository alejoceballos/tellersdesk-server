const Model = require('../base-model');

class User extends Model {
    static newInstance(values) {
        return new User(values);
    }
}

module.exports = User;