var tl;
var tl2;
var container = myFT.$("#main_container");
var default_exit = myFT.$("#default_exit");

// var myVid=myFT.$("#video1");
var clickTag1_url="";
// var vid_time_triggered=false;

var startTime;

//
default_exit.on('click',function(){
  myFT.clickTag(1,clickTag1_url)
})
// wait for instantads to load before initializing creative animation
myFT.on('instantads',function(){

  clickTag1_url=myFT.instantAds.clickTag1_url;

})

init()
function animate() {
  tl.set(["#main_content"], { autoAlpha: 1, force3D: true });
  tl.set(["#cta"], { force3D: true, rotation: .001, autoAlpha:0 })
  tl.set(['#h2', '#h3'], {y:20})
  tl.set('#h1 span', {y: 20, autoAlpha:0});

  tl.addLabel('frame1', 0)
  .to('#h1 span', 0.5, { autoAlpha: 1, y: 0, ease: Power1.easeOut}, 'frame1+=0.5')
  .to('#h1', 0.3, { autoAlpha: 0, ease: Power1.easeOut }, "frame1+=4")
  .to('#bg2', 0.5, { autoAlpha: 1, x:0, ease: Power1.easeOut }, "frame1+=4")
  .addLabel('frame2', 'frame1+=4.5')
  .to('#h2', 0.5, { autoAlpha: 1, y: "0", ease: Power1.easeOut }, "frame2")

  .addLabel('frame_END', "frame2+=4")
  .to('#endframeBg', 0.5 ,{ x:0, ease: Power1.easeOut}, 'frame_END')
  .to('#h3', 0.5, { autoAlpha: 1, y: "0", ease: Power1.easeOut }, "frame_END+=0.5")
  .to('#cta',{autoAlpha:1, ease: "power1.inOut"}, 'frame_4+=0.2')
  .fromTo('#cta', 0.2, 
  { scale: 1, },
  { scale: 1.05, yoyo: true, repeat: 1 }, 'frame_4+=1')
}

function setRollover() {
  document.getElementById('default_exit').addEventListener('mouseover', defaultOver, false);
  document.getElementById('default_exit').addEventListener('mouseout', defaultOut, false);
}

function defaultOver() {
  TweenMax.to('#cta', 0.15, { scale: 1.1, ease: Power1.easeInOut })
}

function defaultOut() {
  TweenMax.to('#cta', 0.15, { scale: 1, ease: Power1.easeInOut })
}

function init() {
  startTime = new Date();
  tl = new TimelineMax({onComplete: logDuration});

  animate();
  setRollover();
		
}

function logDuration() {
  let endTime = new Date();
  console.log(
    "Animation duration: " + ((endTime - startTime) / 1000).toFixed(2) + " seconds"
  );
}

const d = new Date();
let year = d.getFullYear();
document.getElementById("year").innerHTML = year;