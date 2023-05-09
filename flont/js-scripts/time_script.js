

const start_timer = id => {
	let timer_text = document.querySelector(".turn_timer_text")

	// let timer_warpp = document.querySelector(".turn_timer")
	let minute;
	let second;
	timer_stop_flg = false

	id = setInterval(() => {

		now_timer -=1
        // console.log(now_timer)
		minute = Math.floor(now_timer/60)
		second = Math.floor(now_timer%60)

		if(second.toString().length == 1){
			second = "0"+second
		}

		if(!timer_stop_flg){
			timer_text.textContent = minute+":"+second
		}
		if(second == 0 && minute == 0){
			timer_stop_flg = true
		}
	}, 1000);
};

const stop_timer = id => {
	clearInterval(start_timer)
	timer_stop_flg = true
}

// start_timer('id');
// stop('id');