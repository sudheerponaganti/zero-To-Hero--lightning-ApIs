export function exportCsvFile(headers,data,fileTitle){
    if(!data || !data.length){
        return null;
    }

    const result = convertToCsv(data,headers)
    if(!result){
        return null;
    }

const blob = new Blob([result])
const exportedFileName = fileTitle ? fileTitle+'.csv' : 'export.csv'
if(navigator.msSaveBlob){
    navigator.msSaveBlob(blob,exportedFileName)
}else if(navigator.userAgent.match(/iphone|ipad|ipod/i)){
    const link = window.document.createElement('a')
    link.href='data:text/csv;charset=utf-8,'+ encodeURI(result)
    link.target = '_blank'
    link.download = exportedFileName
    link.click()
}else{
const link = window.document.createElement('a')
if (link.download !== undefined) { // feature detection
    // Browsers that support HTML5 download attribute
    var url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", exportedFileName);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
}
}

function convertToCsv(dataArr,headers){
    const columnDelimiter = ','
    const lineDelimiter = '\r\n'
    const actualHeaders = Object.keys(headers);
    const headersToshow = Object.values(headers);
let str = ''
str+=headersToshow.join(columnDelimiter)
str+=lineDelimiter
dataArr.forEach((eachObj)=>{
    let line =''
    actualHeaders.forEach((headerKey)=>{
        if(line!=''){
       line+=columnDelimiter
        }
        let strItem = eachObj[headerKey]? eachObj[headerKey] +'' : ''
        line += strItem.replace(/,/g,'') 
    })
    str+=line+lineDelimiter
})

return str;
}