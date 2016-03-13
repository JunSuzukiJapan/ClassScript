var chai = require("chai");
chai.should();

var StringInputStream = require('../dist/InputStream').StringInputStream;
var Lexer = require('../dist/Lexer').default;
var TokenType = require('../dist/Token').TokenType;

describe('Lexer', function(){
  describe('#lexDigit', function(){
    beforeEach(function(){
      input = new StringInputStream('123');
      lexer = new Lexer(input);
      token = lexer.token();
    });

    describe('#lexDigit', function(){
      it('should return TokenType.INTEGER', function(){
        token.tokenType.should.equal(TokenType.INTEGER);
      });
    });
    describe('#lexDigit', function(){
      it('should return "123"', function(){
        token.text.should.equal('123');
      });
    });
    describe('#lexDigit', function(){
      it('should return 123', function(){
        token.num.should.equal(123);
      });
    });
  });

  describe('#lex "+"', function(){
    beforeEach(function(){
      input = new StringInputStream('+');
      lexer = new Lexer(input);
      token = lexer.token();
    });

    describe('#token "+"', function(){
      it('should return TokenType.PLUS', function(){
        token.tokenType.should.equal(TokenType.PLUS);
      });
    });
  });

});
