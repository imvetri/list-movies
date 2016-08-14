var chai = require("chai");

var expect = chai.expect;
var assert = chai.assert;

var ListMovies = require("../index.js");

describe( 'listsMovies' , () => {
  it('it returns a object' , done => {
    var listMovies = new ListMovies();
    assert.typeOf(listMovies , 'object');
    done();
  })
});
