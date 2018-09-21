// Code your solution in this file!
function logDriverNames(drivers){
  const logNames = function (driver){ return driver.name }
  return drivers.forEach(logNames)
}