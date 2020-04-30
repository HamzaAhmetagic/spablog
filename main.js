let blogHolder = document.querySelector("#blog-holder");
let xml = new XMLHttpRequest();
xml.open("get",'blog.php');
xml.onreadystatechange = function(){
    if (xml.readyState == 4 && xml.status == 200){
        displayData(xml.responseText)
    }
}
xml.send();
function displayData(data){
    let blogs = JSON.parse(data);
    let text = ``;
    for (var i = 0; i < blogs.length; i++) {
        const blog = blogs[i];
        text+=`<h1>${blog.title}</h1>
        <p>${blog.text}</p>
        <p>${blog.author}</p>
        <p>${blog.created_at}</p>
        `
    }
    blogHolder.innerHTML = text;
}