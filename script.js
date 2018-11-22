// To start a timeline
let anime = new TimelineMax();
anime
	.from('.left', 1, {height: 0})
	.from('.right', 1, {y: "800px"})
	.from('.leftsm', 1, {height: 0})
	.from('.texte', 1, {y: "100%", autoAlpha:0})

// Scroll magic
const controller = new ScrollMagic.Controller();

// Cards
const cardAnimation = new TimelineMax();
	cardAnimation
	.from('#card1', 0.3, {ease: Power0.easeInOut, x:"-100%", opacity:0}, "-=0.1")
	.from('#card2', 0.3, {ease: Power0.easeInOut, x:"-100%", opacity:0}, "-=0.1")
	.from('#card3', 0.3, {ease: Power0.easeInOut, x:"-100%", opacity:0},"-=0.1");

const miniCard = document.querySelector('.card')

const card = new ScrollMagic.Scene({
	triggerElement: miniCard, 
	reverse:true
})
	.addTo(controller)
	.addIndicators({
	  colorStart: 'grey',
	  colorTrigger: 'black'
	 })
	.setTween(cardAnimation)

// Unicorns
const unicornAnimation = new TimelineLite();
	unicornAnimation
	.from(".boldTitle", 1,{opacity:0,y:150})
	.from(".text", 1.5, {ease:Power0.easeInOut, x:"-50%", opacity:0}, "-=0.1")
	.from(".licorne", 1.5,{opacity:0, delay:-0.5, transformOrigin: "50% 50%", scaleX:0.2, scaleY:0.2})
	.from(".inner-img", 0.5,{height:0, delay:-0.5,x:-150});

const zoom = new ScrollMagic.Scene({
	triggerElement: ".titleContent",
	reverse:true
})
	.addTo(controller)
	.addIndicators({
	  colorStart: 'grey',
	  colorTrigger: 'black'
	 })
	.setTween(unicornAnimation)

// Logo
const squareAnimation = new TimelineMax();
	squareAnimation
	.staggerFrom(".square", 0.5, { ease: Power2.easeOut, y: "400%", opacity:0 }, 0.1)
	.staggerFrom(".logo-img", 0.5, { ease: Power2.easeOut, y: "400%", opacity:0 }, 0.1);

const show = new ScrollMagic.Scene({
	triggerElement: ".show",
	reverse:true
})
	.addTo(controller)
	.addIndicators({
	  colorStart: 'grey',
	  colorTrigger: 'black'
	 })
	.setTween(squareAnimation)


// livre
const flip = new ScrollMagic.Scene({
  triggerElement: '.flyers',
  reverse:true
})

.setClassToggle('.cover', 'fall')
.addTo(controller)
.addIndicators({
  colorStart: 'blue',
  colorTrigger: 'red'
 })
