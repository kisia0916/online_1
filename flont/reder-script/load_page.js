
function sleep(waitMsec) {
    var startMsec = new Date();
   
    // 指定ミリ秒間だけループさせる（CPUは常にビジー状態）
    while (new Date() - startMsec < waitMsec);
  }
const move_mist = ()=>{
    let mist = document.getElementById("move_mist")
    // let rgb_a = 1
    // mist.style.backgroundColor = `rgba(199, 226, 225, ${rgb_a})`
    // // mist.style.backgroundColor = `red`

    // while (rgb_a >=0){
    //     rgb_a -= 0.1
    //     console.log(rgb_a)
    //     mist.style.backgroundColor = `rgba(199, 226, 225,${rgb_a})`
    //     sleep(100)
    // }
    mist.remove()
}

