var semver = require('semver');

module.exports = function cmp (a, b) {
    return semver.gt(a, b) ? 1 : semver.eq(a, b) ? 0 : -1;
};
