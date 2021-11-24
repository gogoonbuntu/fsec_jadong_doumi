function jadongskip(){

	//자주 쓰이는 엘리먼트 지정하기
	_contf = document.getElementById('contentFrm') 
		|| document.getElementById('lectureFrame').contentWindow.document.getElementById('contentFrm');

	contf = _contf.contentWindow.document;

	//잘 읽어왔는지 확인
	console.log('contentFrm = ',document.getElementById('contentFrm'));
	console.log('totime = ',contf.getElementById('totime'));

	//몇초 뒤 버튼 누를지 시간 계산
	videoEndTime = contf.getElementById('totime').innerHTML
	millisec=(parseInt(videoEndTime.substring(2,4))*60+parseInt(videoEndTime.substring(5,)))*1000+1000;
	currenttime = contf.getElementById('cutime').innerHTML
	console.log('currenttime', currenttime)
	currentmillisec=(parseInt(currenttime.substring(0,2))*60+parseInt(currenttime.substring(3,)))*1000;
	resultsec = millisec-currentmillisec
	console.log('msec, psec, result', millisec, cur3rentmillisec, resultsec)

	//이 시간 뒤 다음을 클릭하고, 함수 재실행
	setTimeout(
	()=>{
		// 경고창 스킵을 위한 스페이스바 누르기
		var e11 = new KeyboardEvent('keydown',{'keyCode':32,'which':32});
		setTimeout(()=>{var e22 = new KeyboardEvent('keydown',{'keyCode':32,'which':32});},500);

 		contf.getElementById('nextBtn').click();
		setTimeout(()=>{jadongskip()},2000);},resultsec)
}

//출발!
jadongskip()
