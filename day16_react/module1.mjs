import a ,{b,c,d} from './module2.mjs'

// 'a' is default export , you can write any name insteed of 'a'
// named import such as 'b','c','d' must be same as export name
console.log(a);
console.log(b);
console.log(c);
console.log(d);

// to run this type 'node .\module1.mjs' in terminal from current dir