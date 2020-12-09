//map is just a data structure like onbject, uses key-value pair
// but with some differences.
//BENEFITS OF USING MAP:
// 1. maps allows us to use any premetive value as key
// 2. maps are iterable
// 3. maps are easy to use becasue it gives us many methods 
//to use on it like has(), size, get(), set(), delete(),
// entries().

// how to initiate map:
const map  = new Map();
//enter values
map.set('Q:', 'What is HTML');
map.set(1, 'Programming Language');
map.set(2, 'markup Language');

map.forEach((element,key) => {
    console.log(key + element);    
});


for (const [key, value] of map) {
    console.log(key);
}


console.log(map.size);

console.log(map.get());

// map.delete('Q:');
console.log(map);
console.log(map.entries());

const ans = parseInt(prompt(`${map.get('Q:')}`));

if(map.has(ans)){
    alert('right');
}





