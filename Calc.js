let closest_value = [0]
let value = 0
let value2 = 0
let task = 'nothing'
let sec_num = 0
let result = 0
let zapyataya1 = 0;
let zapyataya2 = 0;

function shistpop() {
  closest_value.shift()
  closest_value.push(value)
} 

function shistpop2() {
  closest_value.shift()
  closest_value.push(value2)
} 

document.getElementById("b7").onclick = function b7(){
 switch(sec_num){
  
  case 0:
    document.getElementById("box").value = ``
    if (value) {
      shistpop()
      value = value + `7`
      document.getElementById("box").value = value
      break;
    }
    else
      shistpop()
      value = 7
      document.getElementById("box").value = value
  break;

  case 1:
    if (value2) {
      shistpop2()
      value2 = value2 + `7`
      document.getElementById("box").value = value2
      break;
    }
    else
      shistpop2()
      value2 = 7
      document.getElementById("box").value = value2
  break;
}

console.log(value)
}

document.getElementById("b8").onclick = function b8(){
  switch(sec_num){
  
  case 0:
    document.getElementById("box").value = ``
    if (value) {
      shistpop()
      value = value + `8`
      document.getElementById("box").value = value
      break;
    }
    else
      shistpop()
      value = 8
      document.getElementById("box").value = value
  break;

  case 1:
    if (value2) {
      shistpop2()
      value2 = value2 + `8`
      document.getElementById("box").value = value2
      break;
    }
    else
      shistpop2()
      value2 = 8
      document.getElementById("box").value = value2
  break;
}

console.log(value)
  
}

document.getElementById("b9").onclick = function b9(){
  switch(sec_num){
  
  case 0:
    document.getElementById("box").value = ``
    if (value) {
      shistpop()
      value = value + `9`
      document.getElementById("box").value = value
      break;
    }
    else
      shistpop()
      value = 9
      document.getElementById("box").value = value
  break;

  case 1:
    if (value2) {
      shistpop2()
      value2 = value2 + `9`
      document.getElementById("box").value = value2
      break;
    }
    else
      shistpop2()
      value2 = 9
      document.getElementById("box").value = value2
  break;
}

console.log(value)

}

document.getElementById("b4").onclick = function b4(){
  switch(sec_num){
  
  case 0:
    document.getElementById("box").value = ``
    if (value) {
      shistpop()
      value = value + `4`
      document.getElementById("box").value = value
      break;
    }
    else
      shistpop()
      value = 4
      document.getElementById("box").value = value
  break;

  case 1:
    if (value2) {
      shistpop2()
      value2 = value2 + `4`
      document.getElementById("box").value = value2
      break;
    }
    else
      shistpop2()
      value2 = 4
      document.getElementById("box").value = value2
  break;
}

console.log(value)

}

document.getElementById("b5").onclick = function b5(){
  switch(sec_num){
  
  case 0:
    document.getElementById("box").value = ``
    if (value) {
      shistpop()
      value = value + `5`
      document.getElementById("box").value = value
      break;
    }
    else
      shistpop()
      value = 5
      document.getElementById("box").value = value
  break;

  case 1:
    if (value2) {
      shistpop2()
      value2 = value2 + `5`
      document.getElementById("box").value = value2
      break;
    }
    else
      shistpop2()
      value2 = 5
      document.getElementById("box").value = value2
  break;
}

console.log(value)

}

document.getElementById("b6").onclick = function b6(){
  switch(sec_num){
  
  case 0:
    document.getElementById("box").value = ``
    if (value) {
      shistpop()
      value = value + `6`
      document.getElementById("box").value = value
      break;
    }
    else
      shistpop()
      value = 6
      document.getElementById("box").value = value
  break;

  case 1:
    if (value2) {
      shistpop2()
      value2 = value2 + `6`
      document.getElementById("box").value = value2
      break;
    }
    else
      shistpop2()
      value2 = 6
      document.getElementById("box").value = value2
  break;
}

console.log(value)

}

document.getElementById("b1").onclick = function b1(){
  switch(sec_num){
  
  case 0:
    shistpop()
    document.getElementById("box").value = ``
    if (value) {
      value = value + `1`
      document.getElementById("box").value = value
      break;
    }
    else
      shistpop()
      value = 1
      document.getElementById("box").value = value
  break;

  case 1:
    if (value2) {
      shistpop2()
      value2 = value2 + `1`
      document.getElementById("box").value = value2
      break;
    }
    else
      shistpop2()
      value2 = 1
      document.getElementById("box").value = value2
  break;
}

console.log(value)
}

document.getElementById("b2").onclick = function b2(){
  switch(sec_num){
  
  case 0:
    document.getElementById("box").value = ``
    if (value) {
      shistpop()
      value = value + `2`
      document.getElementById("box").value = value
      break;
    }
    else
      shistpop2()
      value = 2
      document.getElementById("box").value = value
  break;

  case 1:
    if (value2) {
      shistpop2()
      value2 = value2 + `2`
      document.getElementById("box").value = value2
      break;
    }
    else
      shistpop2()
      value2 = 2
      document.getElementById("box").value = value2
  break;
}

console.log(value)
}

document.getElementById("b3").onclick = function b3(){
  switch(sec_num){
  
  case 0:

    document.getElementById("box").value = ``
    if (value) {
      shistpop()
      value = value + `3`
      document.getElementById("box").value = value
      break;
    }
    else
      shistpop()
      value = 3
      document.getElementById("box").value = value
  break;

  case 1:
    if (value2) {
      shistpop2()
      value2 = value2 + `3`
      document.getElementById("box").value = value2
      break;
    }
    else
      shistpop2()
      value2 = 3
      document.getElementById("box").value = value2
  break;
}

console.log(value)

}

document.getElementById("zap").onclick = function zap(){
  switch(sec_num){
  
  case 0:
    if (!zapyataya1) {
      document.getElementById("box").value = ``
      if (value) {
        shistpop()
        value = value + `.`
        document.getElementById("box").value = value
        zapyataya1 = 1
        break;
      }
      else
        value = `0.`
        document.getElementById("box").value = value
        zapyataya1 = 1
      break;
    }
    else 
      break
  case 1:
    if (!zapyataya2) {
      if (value2) {
        shistpop2()
        value2 = value2 + `.`
        document.getElementById("box").value = value2
        zapyataya2 = 1
        break;
      }
      else
        value2 = value2 + `0.`
        document.getElementById("box").value = value2
        zapyataya1 = 1
      break;
    }
    else
      break
}

console.log(value)

}

document.getElementById("clear").onclick = function clear(){
  if(sec_num==0){
    value = closest_value
    document.getElementById("box").value = ``
  }
  if(sec_num){
    value2 = closest_value
    document.getElementById("box").value = ``
  }
}
document.getElementById("b0").onclick = function b0(){
  switch(sec_num){
  
  case 0:
    document.getElementById("box").value = ``
    if (value) {
      shistpop()
      value = value + `0`
      document.getElementById("box").value = value
      break;
    }
  case 1:
    if (value2) {
      shistpop2()
      value2 = value2 + `0`
      document.getElementById("box").value = value2
      break;
    }
}

console.log(value)
}

document.getElementById("result").onclick = function b7(){
  switch (task){

    case `plus`:
    result = Number(value) + Number(value2)
    break;

    case `minus`:
    result = Number(value) - Number(value2)
    break;

    case `times`:
    result = Number(value) * Number(value2)
    break;

    case `divide`:
    if (value2) {
      result = Number(value) / Number(value2)
      break;
    }
    else
      result = `ERROR`
    break;
  }
 document.getElementById("box").value = result
 sec_num = 0
 value = result
 value2 = 0
 if (Number.isInteger(value)) {
  zapyataya1 = 0
 }
 zapyataya2 = 0
}

document.getElementById("plus").onclick = function plus(){
 task = 'plus';
 if(sec_num==0){
  sec_num = 1;
 }
}

document.getElementById("minus").onclick = function minus(){
 task = 'minus';
 if(sec_num==0){
  sec_num = 1;
 }
}

document.getElementById("times").onclick = function times(){
 task = 'times';
 if(sec_num==0){
  sec_num = 1;
 }
}

document.getElementById("divide").onclick = function divide(){
 task = 'divide';
 if(sec_num==0){
  sec_num = 1;
 }
}