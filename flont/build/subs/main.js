function _0x4f83(){const _0x15b946=['4556376XoRddR','visibility','11755919baqJMx','first_fade_out','remove','style','.white_user_name','pageX','click','black','mousemove','4097240LFbSoQ','removeProperty','classList','requestAnimationFrame','tres','top','pageY','.first_name_warpp','22RcKaeO','test','height','addEventListener','add','querySelector','426027hyqvqz','textContent','6DLAzrz','811495rZNRfM','floor','width','.black_user_name','34258500YgpBvh','log','717545XbgWeF','win_ani'];_0x4f83=function(){return _0x15b946;};return _0x4f83();}(function(_0x298f96,_0x509d20){const _0x546a01=_0x2571,_0x206c5f=_0x298f96();while(!![]){try{const _0x3864d3=parseInt(_0x546a01(0xf2))/0x1+-parseInt(_0x546a01(0xe9))/0x2*(parseInt(_0x546a01(0xef))/0x3)+-parseInt(_0x546a01(0xfa))/0x4+-parseInt(_0x546a01(0xf8))/0x5*(-parseInt(_0x546a01(0xf1))/0x6)+-parseInt(_0x546a01(0xfc))/0x7+parseInt(_0x546a01(0x105))/0x8+parseInt(_0x546a01(0xf6))/0x9;if(_0x3864d3===_0x509d20)break;else _0x206c5f['push'](_0x206c5f['shift']());}catch(_0xa98d91){_0x206c5f['push'](_0x206c5f['shift']());}}}(_0x4f83,0xda079));let canvas,ctx,stage={'map':[]},stage_space,stage_height,stage_width,mxStage,myStage,my,mx,my_turn,now_turn,turn={'n':0x1},my_color,pass_counter,black_name='',white_name='',turn_time=0x0,game_end_Co=0x0;const game_start=()=>{const _0x44c88c=_0x2571;game_end_Co=0x0,canvas=document['querySelector']('.canvas'),ctx=canvas['getContext']('2d');let _0x45dc4e=document['querySelector'](_0x44c88c(0xf5)),_0x4f1843=document[_0x44c88c(0xee)](_0x44c88c(0x100));_0x45dc4e[_0x44c88c(0xf0)]=black_name,_0x4f1843['textContent']=white_name,stage_width=0x8,stage_height=0x8,stage_space=0x258/0x8,mxStage={'p':0x0},myStage={'p':0x0},mx={'p':0x0},my={'p':0x0},canvas[_0x44c88c(0xec)](_0x44c88c(0x104),_0x31d171=>{const _0x2bfc33=_0x44c88c,_0x2f5bf0=canvas['getBoundingClientRect']();mxStage['p']=(_0x31d171[_0x2bfc33(0x101)]-_0x2f5bf0['left'])*(canvas[_0x2bfc33(0xf4)]/_0x2f5bf0[_0x2bfc33(0xf4)]),myStage['p']=(_0x31d171[_0x2bfc33(0xe7)]-_0x2f5bf0[_0x2bfc33(0xe6)])*(canvas[_0x2bfc33(0xeb)]/_0x2f5bf0[_0x2bfc33(0xeb)]),mx['p']=Math['floor'](mxStage['p']/0x4b),my['p']=Math[_0x2bfc33(0xf3)](myStage['p']/0x4b);}),window[_0x44c88c(0xec)](_0x44c88c(0x102),()=>{const _0x1b8203=_0x44c88c;console['log'](_0x1b8203(0xe5)),setPiece();}),my_color==_0x44c88c(0x103)&&checkPutSpace(),console[_0x44c88c(0xf7)](_0x44c88c(0xea));};function sleep(_0x112932){let _0x3c497e=new Date();while(new Date()-_0x3c497e<_0x112932);}function _0x2571(_0x41efc7,_0x5c4e87){const _0x4f8305=_0x4f83();return _0x2571=function(_0x257133,_0xfdb0a8){_0x257133=_0x257133-0xe2;let _0x4e31ae=_0x4f8305[_0x257133];return _0x4e31ae;},_0x2571(_0x41efc7,_0x5c4e87);}const win_write_12=(_0x5f5cbb,_0x26510e)=>{const _0xdb3b9e=_0x2571;sleep(1.5);let _0x479d19=document['querySelector']('.first_name_warpp');_0x479d19['style']['visibility']='visible',_0x479d19[_0xdb3b9e(0xe3)][_0xdb3b9e(0xfe)](_0xdb3b9e(0xfd)),_0x479d19['innerHTML']=game_dom_win_text(_0x5f5cbb,_0x26510e),_0x479d19[_0xdb3b9e(0xe3)][_0xdb3b9e(0xed)]('win_ani'),_0x479d19[_0xdb3b9e(0xff)][_0xdb3b9e(0xe2)]('visibility');},lose_write_12=(_0x21cef6,_0x26c9f2)=>{const _0x23fb3d=_0x2571;sleep(1.5);let _0x231e78=document[_0x23fb3d(0xee)](_0x23fb3d(0xe8));_0x231e78['style']['visibility']='visible',_0x231e78[_0x23fb3d(0xe3)][_0x23fb3d(0xfe)](_0x23fb3d(0xfd)),_0x231e78['innerHTML']=game_dom_lose_text(_0x21cef6,_0x26c9f2),_0x231e78[_0x23fb3d(0xe3)][_0x23fb3d(0xed)](_0x23fb3d(0xf9)),_0x231e78[_0x23fb3d(0xff)][_0x23fb3d(0xe2)](_0x23fb3d(0xfb));},main_loop=()=>{const _0x26ce6d=_0x2571;ctx['clearRect'](0x0,0x0,0x258,0x258),write_stage(),writePiece(),game_end_Co==0x0&&window[_0x26ce6d(0xe4)](main_loop);},init_game=()=>{stage={'map':[]},stage_space,my_turn,now_turn,turn={'n':0x1},my_color,pass_counter,black_name='',white_name='',turn_time=0x0,game_end_Co=0x0;};