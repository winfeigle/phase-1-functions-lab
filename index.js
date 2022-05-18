// Code your solution in this file!
function distanceFromHqInBlocks(val) {
    return Math.abs(42 - val);
}

const distanceFromHqInFeet = function(val){
    return 264 * distanceFromHqInBlocks(val);
}

const distanceTravelledInFeet = (start, destination) => {
    return 264 * (Math.abs(start - destination));
}

const calculatesFarePrice = (start, destination) => {
    if(distanceTravelledInFeet(start, destination) < 400){
        return 0;
    } else if(distanceTravelledInFeet(start, destination) >= 400 && distanceTravelledInFeet(start, destination) < 2000){
        return (distanceTravelledInFeet(start, destination) - 400) * 0.02;
    } else if(distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) < 2500){
        return 25;
    } else return 'cannot travel that far';
}