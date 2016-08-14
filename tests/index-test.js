var chai = require("chai");
var expect = chai.expect;

var ListMovies = require("../index.js");

describe( 'listsMovies' , function(){
  it('it returns a object with actionable functions exposed' , function(){
    var listMovies = new ListMovies();
    expect(listMovies).to.equal(undefined);
  })
});
