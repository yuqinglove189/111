"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var bottlesSong = require("../lib/bottlesSong.js");


describe("bottles", function(){

    it("return when bottles 99", function(){
        let number = 99;
        let result = bottlesSong(number);
        let res = number+" bottles of beer on the wall," +number+" bottles of beer.\n" +
            "Take one down and pass it around, "+ (number-1) +" bottles of beer on the wall.\n";
        expect(result).to.equal(res);
    });

    it("return when bottles 2 ", function(){
        let number = 2;
        let result = bottlesSong(number);
        let res = number+" bottles of beer on the wall, "+number+" bottles of beer.\n" +
            "Take one down and pass it around, "+ (number-1) +" bottle of beer on the wall.\n";
        expect(result).to.equal(res);
    });

    it("return when bottles 1", function(){
        let number = 1;
        let result = bottlesSong(number);
        let res =number+" bottle of beer on the wall, "+number+" bottle of beer.\n" +
            "Take one down and pass it around, no more bottles of beer on the wall.\n" ;
        expect(result).to.equal(res);
    });
    it("return when bottles 0", function(){
        let number = 0;
        let result = bottlesSong(number);
        let res = "No more bottles of beer on the wall, no more bottles of beer.\n"+
            "Go to the store and buy some more, 99 bottles of beer on the wall.";
        expect(result).to.equal(res);
    });

});