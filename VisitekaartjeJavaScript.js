const flightPath = {
    curviness: 1.25,
    autoRotate: false,
    values: [
        { x: -400, y: 20 }
    ]
};

const flightPath2 = {
    curviness: 1.25,
    autoRotate: false,
    values: [
        { x: -300, y: -115}
    ]
};

const flightPath3 = {
    curviness: 1.25,
    autoRotate: false,
    values: [
        { x: -500, y: -125 }
    ]
};


const tijdlijn =  new TimelineLite();

tijdlijn.add(
    TweenLite.to('#midas-icoon', 1, {
        bezier: flightPath,
        ease: Power1.easeInOut

    })
);

tijdlijn.add(
    TweenLite.to('#laptop-icoon', 1, {
        bezier: flightPath2,
        ease: Power1.easeInOut

    })
);


tijdlijn.add(
    TweenLite.to('#boek-icoon', 1, {
        bezier: flightPath3,
        ease: Power1.easeInOut

    })
);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: ".animation",
    duration: 3000,
    triggerHook: 0
})

/*var timeline = new TimelineLite();
var tween = TweenLite.from("#laptop-icoon", 1, {opacity: 1, left:0});
var tween2 = TweenLite.to("#midas-icoon", 1, {opacity:1, left:0, delay:0.4});
*/

.setTween(tijdlijn)
.addIndicators()
.setPin('.animation')
.addTo(controller)






