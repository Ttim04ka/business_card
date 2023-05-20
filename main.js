  //выплывающий текст
  let me_text=document.querySelector('.me')
  document.addEventListener("DOMContentLoaded",()=>{
    me_text.setAttribute('style', 'padding-top: 0vh;')
  })

  function onEntry(entry) {
      entry.forEach(change => {
        if (change.isIntersecting) {
        change.target.classList.add('appear');
        }
      });
  }
  //появление элементов при скролле
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements=[]
  let more = document.querySelector('.about_more');
  let experience = document.querySelector('.experience');
  elements.push(more,experience)
  for (let elm of elements) {
    observer.observe(elm);
  }

  //перемещение элементов при скролле
  const controller = new ScrollMagic.Controller();
  const sections = [...document.querySelectorAll(".section")];
  const smap = new Map();
  let resultWidth=1400;


  sections.forEach((section) => {
    smap.set(section, section.querySelector(".move"));
    const scene = new ScrollMagic.Scene({
      triggerElement: section,
      duration: () => section.offsetHeight
    })
      .addTo(controller);
  
    scene.on("progress", update);
    scene.progress(0);
  });
  
  window.addEventListener('resize', function(event) {
    resultWidth=this.window.innerWidth
  }, true);

  
  function update(e) {
    const t = -(e.progress ) * 500;
    const section = e.target.triggerElement();
    let obj= smap.get(section);
    if(obj.classList.contains("picture")){
      obj.style.transform = `translateY(${t*1}px)`;
    }else{
      obj.style.transform = `translateX(0px)`;
    
    }
    if(resultWidth>999){
      if(obj.classList.contains("skills_title")){
        const t = -(e.progress ) * 400;
        obj.style.transform = `translateX(${t/1.5}px)`;
      }else if(obj.classList.contains("works_title")){
        const t = -(e.progress ) * 400;
        obj.style.transform = `translateX(${-(t/1)}px)`;
      }else if(obj.classList.contains("collab_title")){
        const t = -(e.progress ) * 400;
        obj.style.transform = `translateX(${(t/1.1)}px)`;
      }
    }
    
    
   
      
    

  }


  // появление картинов работ
  let works=document.querySelectorAll('.recent');
  works.forEach(item=>{
    item.addEventListener('mouseover',()=>{
      item.childNodes[0].style.left=((item.childNodes[1].getBoundingClientRect().width-200)/2)+'px';
      item.childNodes[0].removeAttribute("hidden")
    })
    item.addEventListener("mouseout",()=>{
      item.childNodes[0].setAttribute("hidden",true)
    })
  })

  /* let navigateLinks=document.querySelectorAll(".n_links")
  let burger=document.querySelector('.checkbox')
  navigateLinks.forEach(item=>{
    item.addEventListener('click',()=>{
      burger.setAttribute(':checked')
    })
  }) */





  