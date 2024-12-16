function page1Animation(){
    var tl =gsap.timeline();
tl.from('nav h1,nav h4, nav button',{
        y:-30,
        opacity:0,
        // delay:0.5,
        duration:0.3,
        stagger:0.3
    
})
tl.from('.centre-part1 h1',{
    x:-500,
    opacity:0,
    duration:.1,
    stagger:0.3,
    delay:0.6,
},"-=0.3")
tl.from('.centre-part1 p',{
    x:-100,
    opacity:0,
    duration:0.4

})
tl.from('.centre-part1 button',{
    opacity:0,
    duration:0.4
})
tl.from(".centre-part2 img",{
    opacity:0,
    duration:1
},"-=0.5")

}
page1Animation()

function page2Animation()
{
    var tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".section2", 
          scroller: "body",     
          start: "top 85%",     
          end: "top 50%",        
          scrub: true   ,
          
        }
      });
      
      tl2.from(".services h3, .services p", { 
        y: 30,
        opacity: 0,
        duration:1,
      });
     
}
page2Animation()


function page3Animation(){
    var tl4 = gsap.timeline({
        scrollTrigger: {
          trigger: ".section1bottom", 
          scroller: "body",     
          start: "top 90%",     
          end: "top 20%",       
          scrub: true,  }        
      });
      
    tl4.from('.section1bottom img',{
        x:-200,
        opacity:0
    })
}
page3Animation()




function page4Animation(){
    var tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: ".section2", 
          scroller: "body",     
          start: "top 90%",     
          end: "top 10%",       
          scrub: true,  }        
      });
      
      // Animations
      tl3.from('.container #elem1', {
        x: -200,
        opacity: 0,
        duration: 1
      });
      
      tl3.from('.container #elem2', {
        x: 300,
        opacity: 0,
        duration: 1
      });
      
}
page4Animation()

