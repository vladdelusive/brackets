module.exports = function check(str, bracketsConfig) {
//  111115611111111222288888822225577877778775555666677777777776622222  [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']]
    let strBracket = [];
        for (let i = 0; i < str.length; i++) {
            for (let j = 0; j < bracketsConfig.length; j++) {
                if(strBracket[strBracket.length - 1] == bracketsConfig[j][0] && str[i] == bracketsConfig[j][1]){
                    strBracket.pop();
                } else if(str[i] == bracketsConfig[j][0]){
                    strBracket.push(bracketsConfig[j][0]);
                }
            }
        }
        if (str.length % 2 != 0 || strBracket.length != 0) {
            return false;
        } else {
            return true;
        }
       
}

