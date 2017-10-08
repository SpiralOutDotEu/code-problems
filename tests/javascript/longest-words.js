var expect = require('chai').expect;
var longestWords = require('../../solutions/javascript/longest-words');

describe('it tests longest words function', function(){
  var singleLongWord = "You are just an old antidisestablishmentarian";
  var sameSizeLongWords = "I gave a present to my parents";
  var ignoreCaseWords = "Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo";

  it("identifies the longest word ", function(){
    str = longestWords(singleLongWord);
    expect(str).deep.equal(['antidisestablishmentarian']);
  });

  it("identifies the same size longest word ", function(){
    str = longestWords(sameSizeLongWords);
    expect(str).deep.equal(['present', 'parents']);
  });

  it("identifies the longest word ignoring the case", function(){
    str = longestWords(ignoreCaseWords);
    expect([ 'buffalo', 'Buffalo' ]).to.include.members(str);
    expect(str).length.to.be(1);
  });

});
