
function add() {
    var form = document.getElementById('addtodo');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        var d = document.getElementById('do').value;
        if (d !== '') {
            var list = document.getElementById('list');
            var li = document.createElement('li');
            li.innerHTML = d;
            var btnx = document.createElement('button');
            btnx.innerText = 'x';
            li.appendChild(btnx);
            list.appendChild(li);
            document.getElementById('do').value = ''; 

            btnx.addEventListener('click', function() {
                li.remove(); 
            });

        } else {
            alert('Please write down your mission!');
        }
    });
}

add();


// function add(){
//     var btn=document.getElementById('add');
//     btn.addEventListener('submit',onclick);
//     if(d!=' '){
//         var d=document.getElementById('do').value;
//         var a=document.createElement('li');
//         a.innerHTML=d;
//         var btnx=document.createElement('button');
//         btnx.innerText='x';
//         a.append(x);
//         btnx.addEventListener('click',function () { 
//             a.remove();
//          });
//     }else{
//         alert('Please write down your mission!');
//     }
// }
// add();