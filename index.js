let in1 = document.getElementById('in1');
let in2 = document.getElementById('in2');
let h1 = document.getElementById('h1');
let s = document.getElementById('s');
let d = document.getElementById('d');
let a = document.getElementById('a');
let t = document.getElementById('t');





let ans;

s.onclick = function(){
  in1 = Number(in1.value);
  in2 = Number(in2.value);


  h1.textContent = in1-in2
  in1 = document.getElementById('in1');
  in2 = document.getElementById('in2');

}
a.onclick = function(){
  in1 = Number(in1.value);
  in2 = Number(in2.value);


  h1.textContent = in1+in2
  in1 = document.getElementById('in1');
  in2 = document.getElementById('in2');

}
d.onclick = function(){
  in1 = Number(in1.value);
  in2 = Number(in2.value);


  h1.textContent = in1/in2
  in1 = document.getElementById('in1');
  in2 = document.getElementById('in2');

}
t.onclick = function(){
  in1 = Number(in1.value);
  in2 = Number(in2.value);


  h1.textContent = in1*in2
  in1 = document.getElementById('in1');
  in2 = document.getElementById('in2');

}





