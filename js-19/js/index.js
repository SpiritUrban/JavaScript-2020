// window.addEventListener('keydown', (e) => {
//     alert(e.key)
// })


window.timeStamp = 0

function start(){
  console.log('start')
  
  window.addEventListener('keydown', (e) => {
    let old = window.timeStamp
    
    console.log(window.timeStamp)
    window.timeStamp = e.timeStamp
    console.log(window.timeStamp)
    console.log('***', window.timeStamp - old)
  })
}






// window.addEventListener('keydown', (e) => {
//   //console.log(e)
//   console.log(
//       e.key,
//       e.altKey,
//       e.code,
//       e.ctrlKey,
//       e.shiftKey,
//       e.repeat,
//       e.timeStamp,
//       new Date(e.timeStamp).toString(), /// no!!! it from start of programm
//       e.keyCode
//     )
// })