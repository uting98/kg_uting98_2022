const stringArr = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
const stringsOutput = [];

let converter = (inputArr) => {
    inputArr.forEach(int => {
        if(/^\d+$/.test(int)){
            let tempString = '';
            for(let char of int){
                tempString += stringArr[char];
            }
            stringsOutput.push(tempString);
        } else{
            stringsOutput.push('Contain None Integer Character');
        }
        
    });
    console.log(String(stringsOutput));
    return stringsOutput;
};

const integersInput = process.argv.slice(2);
converter(integersInput);
