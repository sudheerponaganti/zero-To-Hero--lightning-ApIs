/*
enable-auto-scroll for auto scroll setTime Interval triggering
add Custom width from parent to customize width
add show Full in parent to use of width 100%
add slide-timer from parent to  use customized timing
*/
import { LightningElement ,api} from 'lwc';
import ANIMATE from '@salesforce/resourceUrl/animateZip';
import {loadStyle } from 'lightning/platformResourceLoader'
const CARD_VISIBLE_CLASS = 'fade slds-show'
const CARD_HIDDEN_CLASS = 'fade slds-hide'

const DOT_VISIBLE_CLASS = 'dot active'
const DOT_HIDDEN_CLASS = 'dot'
const DEFAULT_SLIDE_TIMER = 3000
const DEFAULT_WIDTH = 700
export default class CustomCarousel extends LightningElement {
isLibLoaded = false;
 slides=[]
 slideIndex=1
 timer
@api slideTimer=DEFAULT_SLIDE_TIMER
@api enableAutoScroll =false
@api customWidth = DEFAULT_WIDTH
@api showFull = false;

get maxWidth(){
    return this.showFull ? `width:100%` : `width : ${Number(this.customWidth)}px` 
}

get slidesData(){
return this.slides
}
@api
 set slidesData(data){
this.slides = data.map((item,index)=>{
    return index ===0 ?
    {
...item,
slideIndex :  index+1,
slideClass : CARD_VISIBLE_CLASS,
dotClass   : DOT_VISIBLE_CLASS
    } : {
        ...item,
slideIndex :  index+1,
slideClass : CARD_HIDDEN_CLASS,
dotClass   : DOT_HIDDEN_CLASS
    }
})
 }

 renderedCallback() {
    if (this.isLibLoaded) return;
    Promise.all([
        loadStyle(this, ANIMATE + '/animate/animate.min.css')
    ]).then(() => {
    }).catch((error) => {
        console.error(error)
    })
    this.isLibLoaded = true;
}
 
connectedCallback(){
    if(this.enableAutoScroll){
        this.timer= window.setInterval(()=>{
            this.slideHandler(this.slideIndex+1)
                },Number(this.slideTimer))
    }
}
disconnectedCallback(){
    window.clearTimeout(this.timer)
}
 previousHandler(){
    this.slideIndex-=1;
    this.slideHandler(this.slideIndex)
 }
 nextHandler(){
    this.slideIndex+=1;
    this.slideHandler(this.slideIndex)
 }
 dotSlideHandler(event){
    this.slideIndex = Number(event.target.dataset.id)
    this.slideHandler(this.slideIndex)
 }

 slideHandler(id){
if(id > this.slides.length ){
 this.slideIndex = 1;
}else if(id < 1){
this.slideIndex = this.slides.length
}else{
this.slideIndex = id
}
this.slides = this.slides.map((item)=>{
    return this.slideIndex === item.slideIndex ?
    {
...item,
slideClass : CARD_VISIBLE_CLASS,
dotClass   : DOT_VISIBLE_CLASS
    } : {
        ...item,
slideClass : CARD_HIDDEN_CLASS,
dotClass   : DOT_HIDDEN_CLASS
    }
})

 }
   
}