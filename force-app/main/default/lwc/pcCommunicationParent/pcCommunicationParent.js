import { LightningElement } from 'lwc';

export default class PcCommunicationParent extends LightningElement {
    progressValue= 10;
    carouselData = [
        {
            src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
            header :"First Card",
            description :"First card description.",
            alternativeText : "First card accessible description"
        },
        {
            src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg",
            header :"Second Card",
            description :"Second card description.",
            alternativeText : "Second card accessible description"
        },
        {
            src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-03.jpg",
            header :"Third Card",
            description :"Third card description.",
            alternativeText : "Third card accessible description"
        }
    ];

    progressBarHandler(){
        this.template.querySelector('c-pc-communication-child').handleProgressValue();
    }

    progressChangeHandler(event){
    this.progressValue = event.target.value
    }
}