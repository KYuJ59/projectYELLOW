categoryNaming()

function categoryNaming(){
    const category=document.querySelectorAll('.categoryTitle_sub')

    category.forEach((item,index)=>{

        let subTitle=item.closest('.category').previousElementSibling.innerHTML
        let title=item.closest('.subMenu').previousElementSibling.innerHTML

        item.innerHTML=`[${title}] ${subTitle}`
    })
}

