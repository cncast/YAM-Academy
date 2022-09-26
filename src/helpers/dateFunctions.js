export const sapToReadableDate = (sapDate) =>{
    var readableDate = sapDate;
    if(readableDate){
        readableDate = [
            readableDate.substr(0, 4),
            readableDate.substr(4, 2),
            readableDate.substr(6, 2),
        ].reverse().join('/');
    }
    return readableDate;
}

export const dateToSap = (date) =>{
    var sapDate = date;
    if(sapDate && sapDate instanceof Date){
        sapDate = date.toISOString().split('T')[0].split('-').join('');
    }
    return sapDate;
}