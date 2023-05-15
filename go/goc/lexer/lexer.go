package lexer

type Lexer struct {
	input        string
	position     int
	readPosition int
	ch           byte
}

func New(input string) *Lexer {
	l := &Lexer{input: input}
	l.readChar()
	return l
}

func (l *Lexer) readChar() {
	if l.readPosition >= len(l.input) {
		l.ch = 0 // ASCII code for NUL char saying we EOF or we havnt read input
	} else {
		l.ch = l.input[l.readPosition] // set byte to input[pos]
	}
	l.position = l.readPosition // curr position in input
	l.readPosition += 1 // inc read pos of input 
}
