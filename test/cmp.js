var cmp = require('../');
var semver = require('semver');
var test = require('tape');

var versions = [
    '1.2.3',
    '4.11.6',
    '4.2.0',
    '1.5.19',
    '1.5.5',
    '4.1.3',
    '2.3.1',
    '10.5.5',
    '11.3.0'
];

test('cmp', function (t) {
    t.plan(1);
    t.deepEqual(versions.sort(cmp),
                versions.sort(semver.compare));

});

test('cmp pre-release', function(t) {
    t.plan(2);
    t.deepEqual(versionsPre1.sort(cmp),
                versionsPre1.sort(semver.compare));
    t.deepEqual(versionsPre2.sort(cmp),
                versionsPre2.sort(semver.compare));
});

var versionsPre1 = [
    '1.2.3',
    '1.2.3-alpha',
    '1.0.0-x.7.z.92',
    '1.0.0-alpha.1',
    '1.0.0-alpha',
    '4.11.6',
    '4.2.0',
    '1.5.19',
    '1.5.5',
    '4.1.3',
    '2.3.1',
    '10.5.5',
    '11.3.0',
    '1.0.0',
    '1.0.0-rc.1',
    '1.0.0-beta.11',
    '1.0.0-beta',
    '1.0.0-beta.2',
    '1.0.0-alpha.beta',
    '1.0.0-alpha.1',
    '1.0.0-alpha',
];

var versionsPre2 = [
  '1.2.3',
  '1.2.3-alpha',
  '1.0.0-x.7.z.92',
  '1.0.0-alpha.1',
  '1.0.0-alpha',
  '4.11.6',
  '11.3.0',
  '1.0.0',
  '1.0.0-rc.1',
  '1.0.0-beta.11',
  '1.0.0-beta',
  '1.0.0-beta.2',
  '1.0.0-alpha.beta',
  '1.0.0-alpha.1',
  '1.0.0-alpha',
];
