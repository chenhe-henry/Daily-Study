# node.js is perfect for building fast and scalable data-intensive apps.

## In termial `node index.js` will print the variable's console.log

## To write an asynchronous code, with the callback function

```
fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
    fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
        console.log(data2);

        fs.writeFile('./txt/final.txt', `${data2}`, 'utf-8', err => {
            console.log('Your file has been written!')
        })
    })
});
```
