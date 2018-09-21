// Code your solution in this file!
function logDriverNames(drivers){
  const logNames = function (driver){ console.log(driver.name) }
  let array = drivers.forEach(logNames);
}

function logDriversByHometown(drivers, hometown){
  const callback = function(driver){
    if (driver.hometown == hometown) {
      console.log(driver.name);
    }
  }
  drivers.forEach(callback);
}

// function driversByRevenue(drivers){
//   const callback = function(driver1, driver2){
//     return driver1.revenue - driver2.revenue;
//   }
//   return drivers.sort(callback);
// }

function driversByName(drivers){
  const callback = function(driver1, driver2){
    driver1.localeCompare(driver2)
  }
  return drivers.sort(callback);
}
