var minRemoveToMakeValid = function(s) {

    let str = s.split("");
    let stack = [];

    for(let i =0; i < str.length; i++){
        let char = str[i];
        if(char === '(') stack.push(i)
        else if(char === ')' && stack.length){
            stack.pop()
        }
        else if(char === ')'){
            str[i] = ""
        }
    }

    while(stack.length){
        let index = stack.pop();
        str[index] = "";
    }

    return str.join("")
};





var minRemoveToMakeValid = function(s) {

    let stack = [];
    //lee(t(c)o)de)
    for(let i = 0; i < s.length; i++){
        let char = s[i];
        if(char == '(') stack.push(i);
        else if(char == ')'){
            if(stack.length == 0){
                s = s.slice(0, i) + " " + s.slice(i + 1)
               
            }
            else {
                stack.pop()
            }
        }
    }
    if(stack.length > 0){
        for(let i of stack){
            let index = i;
            s = s.slice(0, index) + " " + s.slice(index + 1);
        }
    }
    s = s.replaceAll(" ", "")
    return s
};