function bottlesSong(number){
    let result="";
    if(number > 2 && number < 100){
        result=number+" bottles of beer on the wall,"+number+" bottles of beer.\n" +
            "Take one down and pass it around, "+ (number-1) +" bottles of beer on the wall.\n";
        return result;
    }
    if(number === 2 ){
        result= number+" bottles of beer on the wall, "+number+" bottles of beer.\n" +
            "Take one down and pass it around, "+ (number-1) +" bottle of beer on the wall.\n";
        return result;
    }
    if( number === 1){
        result = number+" bottle of beer on the wall, "+number+" bottle of beer.\n" +
            "Take one down and pass it around, no more bottles of beer on the wall.\n";
        return result;
    }
    if( number === 0){
        result="No more bottles of beer on the wall, no more bottles of beer.\n"+
            "Go to the store and buy some more, 99 bottles of beer on the wall.";
        return result;
    }
}
module.exports = bottlesSong;
