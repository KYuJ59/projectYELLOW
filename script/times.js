times()

function times(){

    raos()
    setInterval(raos,1000)

    function raos(){
        const stamp=document.querySelector('.timeCounter')
        timeCalculator(2025,2,31,23,59,0,stamp)
    }


    function timeCalculator(ye,mo,da,ti,mi,se,stamp){
        const startDate=new Date()
        const endDate=new Date(ye,mo,da,ti,mi,se);
        const differenceTime=endDate-startDate

        // 밀리초를 월, 일, 시간, 분, 초로 변환
        //1000 밀리초 , 60 초 , 60 분 , 24 시간 , 30.44는 월평균일
        
        const days = Math.floor((differenceTime % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24))
        //differenceTime을 월단위로 나눈 나머지를 일단위로 나눈것
        const hour = Math.floor((differenceTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minute = Math.floor((differenceTime % (1000 * 60 * 60)) / (1000 * 60))
        const second = Math.floor((differenceTime % (1000 * 60)) / 1000)

        console.log(endDate)

        stamp.innerHTML=`${days}일 ${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')} 남음`
        //toString().padStart(n,n)의 의미
        //padStart(표시할문자길이,길이를 충족하지 못했을시 채워줄 문자)
        //padStart는 문자열이어야 실행이 가능하므로 toString()을 사용해 문자열로 변환
    }




}

