export enum TokenType {
  EOS, // end of stream
  EOL, // end of line
  NUMBER,
  STRING,
  INTEGER,
  CHAR,
  PACKAGE,
  PUBLIC,
  PRIVATE,
  PROTECTED,
  STATIC,
  CLASS,
  INTERFACE,
  EXTENDS,
  IMPLEMENTS,
  ENUM,
  NEW,
  THIS,
  SUPER,
  IF,
  ELSE,
  SWITCH,
  CASE,
  DEFAULT,
  WHILE,
  FOR,
  IN,
  DO,
  BREAK,
  CONTINUE,
  YIELD,
  WITH,
  TRY,
  CATCH,
  FINALLY,
  THROW,
  DEBUGGER,
  CONSTRUCTOR,
  FUNCTION,
  RETURN,
  INSTANCEOF,
  TYPEOF,
  DELETE,
  EXPORT,
  IMPORT,
  VAR,
  LET,
  CONST,
  VOID,

  SEMI,
  COLON,
  COMMA,
  LPAREN,
  RPAREN,
  LBRACE,
  RBRACE,
  DOT,
  ASSIGN, // '='
  EQUAL,  // '=='
  GT,     // '>' greater than
  GE,     // '>=' greater equal
  LT,     // '<' less than
  LE,     // '<=' less equal
  AND,    // '&&'
  OR,     // '||'
  PLUS,
  MINUS,
  TIMES,
  DIVIDE,
  MOD,
}

export class Token {
  text: string
  tokenType: TokenType

  constructor(text: string, tokenType: TokenType){
    this.text = text
    this.tokenType = tokenType
  }
}

export class TokenInteger extends Token {
  num: number

  constructor(num: number){
    super(num.toString(), TokenType.INTEGER)
    this.num = num
  }
}
