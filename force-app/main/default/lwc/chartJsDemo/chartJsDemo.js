import { LightningElement,api} from 'lwc';
import CHART_LIB from '@salesforce/resourceUrl/chartLib'
import { loadScript } from 'lightning/platformResourceLoader'
export default class ChartJsDemo extends LightningElement {
isLibLoaded=false;
chart;
@api type;
@api pieLabels;
@api pieData;
renderedCallback(){
    if(this.isLibLoaded) return ;

    loadScript(this,CHART_LIB+'/chart/Chart.js').then(()=>{
        // console.log('lib loaded successfully');
  this.loadCharts();


    }).catch((error)=>{
console.error(error)
    })
    this.isLibLoaded=true;
}

loadCharts(){
    window.Chart.platform.disableCSSInjection = true;
const ctx = this.template.querySelector('.chart').getContext('2d');
    
 this.chart =  new Chart(ctx,{
       type: this.type,
       data: {
        labels: this.pieLabels ? this.pieLabels : [],
         datasets: [{
           label: 'Chart Demo',
           data: this.pieData ? this.pieData :[],
           backgroundColor: [
            'rgba(231, 64, 100, 0.2)',
            'rgba(144, 70, 63, 1)',
            'rgba(181, 122, 241, 1)',
            'rgba(134, 215, 215, 1)',
            'rgba(239, 176, 86, 1)',
            'rgba(174, 231,135, 1)',
            'rgba(255, 138,128, 1)',
            'rgba(0, 145,234, 1)',
            'rgba(168, 218,181, 1)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(95, 99, 104)',
            'rgb(255, 205, 210)',
            'rgb(239, 83, 80)'
          ],
           borderWidth: 1
         }]
       },
       options: {
         responsive :true,
        legend:{
          position:'right',
        },
         scales: {
          y: {
            beginAtZero: true
          }
        }
        
       }
     })
  }
}