module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {

  let enhancement = item.enhancement

  if(enhancement >= 20){
    return {...item}
  } else {
    enhancement = enhancement+1
    return {...item, enhancement}
  }
}

function fail(item) {

  let enhancement = item.enhancement;
  let durability = item.durability;

  if(enhancement < 15){

    durability = durability - 5;

    return {...item, durability}
  } else if(enhancement > 15) {
    durability = durability - 10;
    enhancement = enhancement -1;
    return {...item, durability, enhancement}
  }
  
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  let enhancement = item.enhancement;

  if(enhancement === 0){
    return item.name
  } else if( enhancement > 0){
    return `[+${enhancement}] ${item.name}`
  }
  
}
