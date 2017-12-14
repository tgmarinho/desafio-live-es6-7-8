// Rest

const arr = [
  { id: 1, user: 'Diego' },
  { id: 2, user: 'Robson' },
  { id: 3, user: 'Cleiton' },
  { id: 4, user: 'Thiago' },
  { id: 5, user: 'Mateus' },
];

// ES<=8
// const a = arr[0];
// const b = arr[1];
// const c = [arr[2], arr[3], arr[4]];

// ES>=6
const [a = { id, user }, b = { id, user }, ...c ] = arr;

// console.log({id, user} = a);
// console.log({id, user} = b);

//  console.log(a);
//  console.log(b);
//  console.log(c);


// const [firstElement, ...onlyRest] = arr;
// console.log(onlyRest);