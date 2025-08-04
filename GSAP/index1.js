//gsap.to and from methods along with stagger,yoyo,repeat properties
gsap.from("#box",{
    x:1000,
    delay:1,
    duration:2,
    backgroundColor:"pink",
    rotate:360
})

gsap.to("#box",{
    x:1000,
    delay:1,
    duration:2,
    backgroundColor:"pink",
    rotate:360,
    repeat:-1,
    yoyo:"true"
})

gsap.from("p",{
    delay:1,
    opacity:0,
    duration:2,
//    color:"red",
   y:30,
   stagger:1
})


//Use of timeline in gsap
var time = gsap.timeline();
time.to("#box1",{
    delay:1,
    duration:2,
    x:900,
    
})
time.to("#box2",{
    delay:1,
    duration:2,
    x:900,
    rotate:360
    
})
time.to("#box3",{
    delay:1,
    duration:2,
    x:900,
    backgroundColor:"purple"
    
})