let timerid = undefined

const start_timer = () => {
		stop_timer()
		console.log(now_turn,turn.n)
		if(now_turn == turn.n+1){
			console.log("fgggggggggggggggggggg")
		}
		let timer_text = document.querySelector(".turn_timer_text")

		// let timer_warpp = document.querySelector(".turn_timer")
		let minute;
		let second;
		timer_stop_flg = false
		let now_co = ""
		timerid = setInterval(() => {
				if(now_timer >= 0){
					
					if(turn.n == 1){
						now_co = "black"
					}else if(turn.n == 2){
						now_co = "white"
					}
					if(now_co == my_color){
						send_p2pTimer()
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
					}
					if(now_timer == 0){
						send_p2pTimer()
						Socket.emit("end_game",{room:roomId})
						discon_p2p()
						stop_timer()
						let end_stage = check_win()
						let mess = ""
						game_con_Co = 1
						lose_write_12(end_stage[0],end_stage[1])
	
					}

				}

		}, 1000);
	
};


const stop_timer = id => {
	clearInterval(timerid)
}
const timer_update = (time)=>{
	let timer_text = document.querySelector(".turn_timer_text")
	let minute;
	let second;
	// alert(time)
	minute = Math.floor(time/60)
	second = Math.floor(time%60)
	if(second.toString().length == 1){
		second = "0"+second
	}

	if(!timer_stop_flg && time <= turn_time){
		timer_text.textContent = minute+":"+second
		if(my_color == "black"){
			timer_text.style.color = "rgb(221, 238, 224)"
		}else{
			timer_text.style.color = "rgb(56, 56, 56)"

		}
	}
	if(time == 0){
		discon_p2p()
		stop_timer()
		let end_stage = check_win()
		let mess = ""
		game_con_Co = 1
		win_write_12(end_stage[0],end_stage[1])

	}
}
// start_timer('id');
// stop('id');