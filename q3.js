fetch('https://jsonplaceholder.typicode.com/todos')
.then (response=>response.json())
.then (data=>console.log(data))

let obj ={
    userId:2456,
    title:"i am a student of MCA ",
    completed:'true',
}


fetch('https://jsonplaceholder.typicode.com/todos',
{
    method:'POST',
    body: JSON.stringify(obj)
        
    })
.then (response=>response.json())
.then (data=>console.log(data))



async function fetchApi(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();


    console.log(data);

}


fetchApi();