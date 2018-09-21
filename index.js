// Code your solution in this file!
function logDriverNames(drivers){
  const logNames = function (driver){ console.log(driver.name) }
  let array = drivers.forEach(logNames)
}

function logDriversByHometown(drivers){
  const callback = function(driver){console.log(driver.hometown)}
  drivers.forEach(callback)
}
