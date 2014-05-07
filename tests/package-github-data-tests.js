var should = require('should'),
    util = require('util'),
    fs = require('fs');

describe("updating the package.json with sha and last commit date", function(){

    var packagejson = JSON.parse(fs.readFileSync('package.json'));

    it ("should populate lastCommitTimestamp with a valid date", function(){
        packagejson.should.have.property("lastCommitTimestamp");
        var isDate = util.isDate(new Date(packagejson.lastCommitTimestamp));
        isDate.should.be.true;
    });

    it ("should populate the lastCommitSha property", function(){
        packagejson.should.have.property("lastCommitSha");
    });
});