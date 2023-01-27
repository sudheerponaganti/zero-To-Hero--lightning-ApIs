import { LightningElement } from 'lwc';
import 	carouselDataZip from '@salesforce/resourceUrl/carouselDataZip';
export default class CustomCarouselWrapper extends LightningElement {
    slides= [
        {
            image : carouselDataZip+'/carouselData/catBokhe.jpg',
            heading: 'Staring Cat',
            description : 'Cats are like fluid,they can mould their body the way they want'
        },
        {
            image :  carouselDataZip+'/carouselData/spiderMan.jpg',
            heading : 'The Spider Man',
            description : 'The Red Spider Man character name is Peter Parker'
        },
        {
            image : carouselDataZip+'/carouselData/upFilm.jpg',
            heading : 'UP Movie',
            description : 'Up movie won Oscar for the animations'
        }
    ]
}