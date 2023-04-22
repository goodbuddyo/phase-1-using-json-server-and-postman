//console.log('one')
//console.log('two')
//function foo(e) {
//  //e.preventDefault()
//  console.log('three')
//}
//foo()
//document.querySelector('button').addEventListener('click',foo)


// async demo
//console.log('before')
//setTimeout(() => console.log('during'),3000)
//console.log('after')
// returns
// before // after // during (waits 3 sec)

// fetch request using json-server
// automatically a GET request
fetch('http://localhost:3000/articles').then(res => console.log(res))

// retunrs in terminal this response
// GET /articles 200 35.277 ms - 274
