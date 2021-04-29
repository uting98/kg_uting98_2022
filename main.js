const stringArr = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
const integersOutput = [];

let converter = (inputArr) => {
    inputArr.forEach(int => {
        let tempString = '';
        for(let i = 0; i < int.length; i++){
            tempString += stringArr[int[i]];
        }
        integersOutput.push(tempString);
    });
    console.log(String(integersOutput))
    return integersOutput;
};


const integersInput = process.argv.slice(2);
converter(integersInput);