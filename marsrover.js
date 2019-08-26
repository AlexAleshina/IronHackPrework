// Rover Object Goes Here
// ======================
const north = "N";
const west = "W";
const east = "E";
const south = "S";

let marsRover = {
  direction: north,
  x: 0,
  y: 0,
  travelLog:[],
};


// ======================
function turnLeft(rover) {
    switch(rover.direction) {
      case north:
        rover.direction = west;
        break;
      case west:
        rover.direction = south;
        break;
      case south:
        rover.direction = east;
        break;
      case east:
        rover.direction = north;
        break;
    }
    console.log(`Rover is now facing ${rover.direction}`);
  }


function turnRight(rover){
  switch(rover.direction) {
    case north:
      rover.direction = east;
      break;
    case east:
      rover.direction = south;
      break;
    case south:
      rover.direction = west;
      break;
    case west:
      rover.direction = north;
      break;
  }
  console.log(`Rover is now facing ${rover.direction}`);
}

function moveForward(rover){
  let coordinates = [rover.x, rover.y];
  rover.travelLog.push(coordinates);
  if(rover.direction == north){
    rover.y--;
  } else if(rover.direction == south){
    rover.y++;
  } else if(rover.direction == east){
    rover.x++;
  } else if(rover.direction == west){
    rover.x--;
  } 
  if(rover.x < 0 || rover.x > 9 || rover.y < 0 || rover.y > 9 ){
    rover.x = coordinates[0];
    rover.y = coordinates[1];
    console.log("stop moving");
  }
 console.log(`x = ${rover.x} and y = ${rover.y}`);

}

const forward = "f";
const right = "r";
const left = "l";


function executeCommands(commands, rover){
  for(let i=0; i < commands.length; i++){
    if(commands[i] == left){
      turnLeft(rover);
    } else if(commands[i] == right){
      turnRight(rover);
    } else if(commands[i] == forward){
      moveForward(rover);
    }
  }
  
  for(let i = 0; i < rover.travelLog.length; i++ ){
    console.log(`${rover.travelLog[i]}`)
  }
}
  
executeCommands('rffrfflfrfffffffffffffffffff', marsRover);