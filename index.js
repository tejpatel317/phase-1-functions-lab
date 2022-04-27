function distanceFromHqInBlocks(pickupLocation) {
    return Math.abs(42-pickupLocation);
}

function distanceFromHqInFeet(Location) {
    return distanceFromHqInBlocks(Location)*264;
}

function distanceTravelledInFeet(startBlock, finishBlock) {
    return Math.abs(finishBlock-startBlock)*264;
}

function calculatesFarePrice(startBlock, finishBlock) {
    const totalDistance = distanceTravelledInFeet(startBlock, finishBlock);
    if (totalDistance <= 400) {
        return 0;
    }
    else if (totalDistance>400 && totalDistance<=2000) {
        return (totalDistance-400)*0.02
    }
    else if (totalDistance>2000 && totalDistance<=2500) {
        return 25
    }
    else {
        return 'cannot travel that far'
    }

}