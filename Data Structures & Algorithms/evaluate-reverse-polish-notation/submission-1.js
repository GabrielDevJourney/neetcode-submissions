class Solution {
    evalRPN(tokens) {
        const stack = [];

        for (const token of tokens) {
            if (token === "+" || token === "-" || token === "*" || token === "/") {
                const n1 = stack.pop();
                const n2 = stack.pop();

                switch (token) {
                    case "+":
                        stack.push(n2 + n1);
                        break;
                    case "-":
                        stack.push(n2 - n1);
                        break;
                    case "*":
                        stack.push(n2 * n1);
                        break;
                    case "/":
                        stack.push(Math.trunc(n2 / n1));
                        break;
                }
            } else {
                stack.push(Number(token));
            }
        }

        return stack.pop();
    }
}