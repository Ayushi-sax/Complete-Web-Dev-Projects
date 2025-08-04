let box1 = document.getElementById("box1");
gsap.to("#bada-dabba #box2",{
duration:3,
y:-288,
scale:1,
// opacity: 0.5,
scrollTrigger:{
    scroller:"body",
    markers:true,
    trigger:"#box2",
    start:"top 40%",
    end:"top 100%",
    scrub:4
}

})

gsap.to("#box1", {
    opacity: 0.3,
    scale:0.9,
    // duration:3,
    scrollTrigger: {
    trigger: "#box2",
    start: "top 40%",
    end: "top 100%",
    scrub: 4
    }
    });
    
gsap.to("#bada-dabba #box3",{
    duration:3,
    scale:1,
    // opacity: 0.5,
    y:-574,
    scrollTrigger:{
        scroller:"body",
        markers:true,
        trigger:"#box3",
        start:"top 64%",
        end:"top 100%",
        scrub:4
    }
    })
   
gsap.to("#box2", {
    opacity: 0.3,
    scale:0.9,
    scrollTrigger: {
    trigger: "#box3",
    start: "top 64%",
    end: "top 100%",
    scrub: 4
    }
    });
    