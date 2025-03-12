// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
  const hqLocation = 42;
  return Math.abs(pickupLocation - hqLocation);
}

function distanceFromHqInFeet(pickupLocation) {
  const feetPerBlock = 264;
  return distanceFromHqInBlocks(pickupLocation) *feetPerBlock;
}

function distanceTravelledInFeet(start,destination) {
  const feetPerBlock = 264;
  return Math.abs(destination - start) * feetPerBlock;
}


function calculatesFarePrice(start, destination) {
  const distanceTravelledInFeet = Math.abs(destination - start) * 264; // Convert miles to feet

  // 1) Free for the first 400 feet
  if (distanceTravelledInFeet <= 400) {
    return 0;
  }

  // 2) Charges 2 cents per foot for distance between 400 and 2000 feet
  if (distanceTravelledInFeet > 400 && distanceTravelledInFeet <= 2000) {
    return (distanceTravelledInFeet - 400) * 0.02;
  }

  // 3) Charges $25 for distance over 2000 feet but under 2500 feet
  if (distanceTravelledInFeet > 2000 && distanceTravelledInFeet <= 2500) {
    return 25;
  }

  // 4) Does not allow rides over 2500 feet
  return 'cannot travel that far';
}
