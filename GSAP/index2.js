// gsap.from("#page1 #box",{
//     duration:2,
//     rotate:360,
//     delay:1,
//     scale:0
// })
// gsap.from("#page2 #box",{
//     duration:2,
//     rotate:360,
//     // delay:1,
//     scale:0,
//     scrollTrigger:{
//         trigger:"#page2",
//         scroller:"body",
//         markers:true,
//         start:"top 60%",
//         end:"top 30%",
//         scrub:2,
//         pin:true
//     }
// })

gsap.from("#page2 h2",{
   transform:"translate(-100%)",
   duration:2,
   scrollTrigger:{
    trigger:"#page2",
    scroller:"body",
    markers:true,
    start:"top 0%",
    end:"top -100%",
    scrub:true,
    pin:true
   }
})