//1
const arrayNum = [11, 11, 22, 22, 3, 3, 9, 5, 5]
const nums = [];
for (let i = 0; i <arrayNum.length; i++){
    if (nums.indexOf(arrayNum[i]) === -1) {
        nums.push(arrayNum[i]);
    }
}
console.log(nums)
//2
const books = [
    'Harry Potter',
    'Lord of the Rings',
    'The Great Gatsby',
    'Fight Club',
    'To Kill a Mockingbird',
    'The Hobbit',
    'Brave New World'
];
function filterAndMapBooks(bookArray) {
    const withY = bookArray.filter(book => book.toLowerCase().includes('y'));
    const withoutY = bookArray.filter(book => !book.toLowerCase().includes('y'));
    const mapWithY = withY.map(book => `${book} `);
    console.log('Книги с буквой "у":');
    mapWithY.forEach(book => console.log(book));
    console.log('Остальные книги:');
    withoutY.forEach(book => console.log(book));
}
filterAndMapBooks(books);

3
const users =[
    {name: 'Eva', age:19},
    {name: 'Adam', age:30},
    {name: 'John', age:19},
    {name: 'Aaron', age:20},
    {name: 'Askar', age:21},
    {name: 'Malika', age:24},
    {name: 'Tomas', age:23},
    {name: 'Alex', age:13},
]

const youngestUser = users.sort((a, b) => a.age - b.age)[0];
const oldestUser = users.sort((a, b) => b.age - a.age)[0];
const difference = oldestUser.age - youngestUser.age;
console.log(`Пользователь ${oldestUser.name} старше ${youngestUser.name} на ${difference} лет.`);

