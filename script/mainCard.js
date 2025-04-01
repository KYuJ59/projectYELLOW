
cardSectionSlide()


function cardSectionSlide(){

    const slide=document.querySelector('#main_promotionCard_list');
    const slideLi=slide.children[0];
    const LiWidth=slideLi.offsetWidth
    const moveX=LiWidth+20
    const maxIndex=11

    let newCard=null;

    const currentCountBox=document.querySelector('#main_promotionCard_currentNum')
    const lastCountBox=document.querySelector('#main_promotionCard_lastNum')

    const prevBtn=document.querySelector('#main_promotionCard_prevBtn')
    const nextBtn=document.querySelector('#main_promotionCard_nextBtn')
    const playBtn=document.querySelector('#main_promotionCard_playBtn')
    const playIcon=playBtn.children[0]

    
    const bar=document.querySelector('#main_promotionCard_slideBar>div')
    const barWidth=bar.parentElement.offsetWidth/maxIndex

    let currentIndex=1
    let currentCard=currentIndex-1
    let cardIndex=null;
    let currentX=slide.offsetLeft

    let timer=null;

    let itPlay=false;
    let itSlide=false;

    init()
    initEvent()
    playSlide()

    window.addEventListener('resize',reSize)

    function reSize(){
        if(window.offsetWidth>=1200){
            slide.style.left='50%';
        } 
    }

    function init(){

        slide.style.width=`${(moveX)*slide.children.length}px`;
        currentCountBox.innerHTML=currentIndex
        lastCountBox.innerHTML=maxIndex
        bar.style.width=`${barWidth*currentIndex}px`
    }

    function initEvent(){

        nextBtn.addEventListener('click',nextCard)
        prevBtn.addEventListener('click',prevCard)
        playBtn.addEventListener('click',playSlide)

    }

    function playSlide(){
        if(itPlay==true){
            itPlay=false
            playIcon.classList.add('fa-play')
            playIcon.classList.remove('fa-pause')
            clearInterval(timer)
        }else if(itPlay==false){
            itPlay=true
            playIcon.classList.add('fa-pause')
            playIcon.classList.remove('fa-play')
            timer=setInterval(nextCard,8000)
        }

    }

    function nextCard(){
        if(itSlide==false){
            itSlide=true;

            currentIndex++;
            if(currentIndex>maxIndex){
                currentIndex=1
            }
            currentCountBox.innerHTML=currentIndex
    
            nextSlide()
            slideBar()

        }

    }

    function nextSlide(){
        currentX=slide.offsetLeft;
        gsap.to(slide,{left:currentX-moveX,onComplete:()=>{
            slide.append(slide.firstElementChild)
            gsap.set(slide,{left:'50%'});
            itSlide=false
            currentCard=currentIndex-1
        }})


    }

    function prevCard(){
        if(itSlide==false){
            itSlide=true;

                        

            currentIndex--;
            if(currentIndex<=0){
                currentIndex=maxIndex
            }
            currentCountBox.innerHTML=currentIndex

            prevSlide()
            slideBar()
        }
    }
    function prevSlide(){
        currentX=slide.offsetLeft;
        gsap.to(slide,{left:currentX+moveX,onComplete:()=>{
            slide.prepend(slide.lastElementChild);
            gsap.set(slide,{left:'50%'})
            itSlide=false
            currentCard=currentIndex-1
        }})
    }



    function slideBar(){
        gsap.to(bar,{width:`${barWidth*currentIndex}px`})
    }

}


function moreBtnAct(){
    const moreBg=document.createElement('div')
    moreBg.id='cardBg'
    axios.get('./mainCard/cardList.html').then((res)=>{
        moreBg.innerHTML=res.data
    })
    document.body.prepend(moreBg)
}

function activateCloseBtn(){
    const moreBg=document.getElementById('cardBg')
    document.body.removeChild(moreBg)
}