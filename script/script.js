categoryNaming()

function categoryNaming(){
    const category=document.querySelectorAll('.categoryTitle_sub')

    category.forEach((item,index)=>{
        let subTitle=item.parentElement.parentElement.parentElement.parentElement.previousElementSibling.innerHTML
        let title=item.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.previousElementSibling.innerHTML

        item.innerHTML=`[${title}] ${subTitle}`
    })
}

