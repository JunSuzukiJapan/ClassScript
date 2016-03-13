var chai = require("chai");
chai.should();

var StringInputStream = require('../dist/InputStream').StringInputStream;
var Lexer = require('../dist/Lexer').default;
var Parser = require('../dist/Parser').default;
var TokenModule = require('../dist/Token');
var TokenType = TokenModule.TokenType;
var NodeModule = require('../dist/Node');
var NodeInteger = NodeModule.NodeInteger;
var NodeBinExpr = NodeModule.NodeBinExpr;

describe('Parser', function(){
  describe('#parse "2"', function(){
    beforeEach(function(){
      input = new StringInputStream('2');
      lexer = new Lexer(input);
      parser = new Parser(lexer);
    });

    it('should return TokenType.INTEGER and value = 2', function(){
      node = parser.parse();
      (node instanceof NodeInteger).should.true;
      node.num.should.equal(2);
    });
  });

  describe('#parse "3 + 4"', function(){
    beforeEach(function(){
      input = new StringInputStream('3 + 4');
      lexer = new Lexer(input);
      parser = new Parser(lexer);
      node = parser.parse();
    });

    it('should return NodeBinExpr', function(){
      (node instanceof NodeBinExpr).should.true;
    });
    it('left expr should be NodeInteger "3"', function(){
      left = node.nodeLeft;
      (left instanceof NodeInteger).should.true;
      left.num.should.equal(3);
    });
    it('right expr shoud be NodeInteger "4"', function(){
      right = node.nodeRight;
      (right instanceof NodeInteger).should.true;
      right.num.should.equal(4)
    });
  });
});
