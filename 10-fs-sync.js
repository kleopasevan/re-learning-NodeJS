const {readFileSync, writeFileSync}= require('fs')
console.log('start')
const first = readFileSync ('./content/first.txt','utf8')
const second = readFileSync ('./content/second.txt','utf8')
console.log(first,second);

writeFileSync('./content/res-sync.txt',
`Write Result: ${first}, ${second}`,
{flag : 'a'},
);

const res = readFileSync ('./content/res-sync.txt','utf8');
console.log(res)
console.log('done with this task');
console.log('starting the next task');
