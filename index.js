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

function driversByRevenue(drivers){
  const callback = function(driver1, driver2){
    
  }
  return drivers.sort(callback);
}
