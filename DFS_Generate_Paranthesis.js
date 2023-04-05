n=3
stack = []
function paranthesis(open, close){
    if ((close == n) && (open==n)){
        console.log(stack)
        return}
    if (open > close) {
        stack.push(')')
        paranthesis(open,close+1)
        stack.pop()
    }
    if (open < n){
        stack.push('(')
        paranthesis(open+1,close)
        stack.pop()
    }
}
paranthesis(0,0)
