const parent = document.createElement('p');
document.body.appendChild(parent);
while(true){
    parent.append("hello");
    sleep(100);
}