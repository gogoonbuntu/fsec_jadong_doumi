function jadongskip(){
//자주 쓰이는 엘리먼트 지정하기
contf = document.getElementById('contentFrm').contentWindow.document;

//잘 읽어왔는지 확인
console.log('contentFrm = ',document.getElementById('contentFrm'));
console.log('totime = ',contf.getElementById('totime'));

//몇초 뒤 버튼 누를지 시간 계산
mytime = contf.getElementById('totime').innerHTML
mymsec=(parseInt(mytime.substring(2,4))*60+parseInt(mytime.substring(5,)))*1000+1000;
passtime = contf.getElementById('cutime').innerHTML
console.log('passtime', passtime)
mypsec=(parseInt(passtime.substring(0,2))*60+parseInt(passtime.substring(3,)))*1000;
resultsec = mymsec-mypsec
console.log('msec, psec, result', mymsec, mypsec, resultsec)

//이 시간 뒤 다음을 클릭하고, 함수 재실행
setTimeout(()=>{contf.getElementById('nextBtn').click();setTimeout(()=>{jadongskip()},2000);},resultsec)
}

//출발!
jadongskip()
