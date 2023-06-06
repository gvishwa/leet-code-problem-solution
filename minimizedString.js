/*
Minimize String Length
Input: s = "dddaaa"
Output: 2 (two unique characters)
*/

function minimizedStringLength(s: string): number {
let a = new Set();
let l = s.length;
for (let i =0; i< l;i++ ){
    if(a.has(s[i])){
        continue;
    }
    a.add(s[i]);
}
return a.size;
};
