import { getObstacleEvents } from './computer-vision';

interface AutonomousCar {
  isRunning?: boolean
  respond: (events : Events) => void;
}

interface Events {
  [i: string]: boolean;
}

interface AutonomousCarProps{
  isRunning?: boolean;
  steeringControl: Steering;
}
class Car implements AutonomousCar{
    isRunning;
    steeringControl;
  constructor(props : AutonomousCarProps){
    this.isRunning = props.isRunning
    this.steeringControl = props.steeringControl
  }
  respond(events: Events){
    if(!this.isRunning){
      console.log("The car is off")
    }
    let eventsKeys = Object.keys(events)
    eventsKeys.forEach((eventKey)=>{
      if(events[eventKey] === false) return
      if(eventKey === "ObstacleLeft") this.steeringControl.turn("right")
      if(eventKey === "ObstacleRight") this.steeringControl.turn("left")
    })
  }
}

interface Control {
  execute: (command: string) => void;
}

interface Steering extends Control {
  turn: (direction: string) => void;
}

class SteeringControl implements Steering {
  execute(command: string){
    console.log(`Executing: ${command}`)
  }

  turn(direction: string){
    this.execute(`turn ${direction}`)
  }
}
let steering = new SteeringControl()
let autonomousCar = new Car({isRunning: true, steeringControl: steering})

autonomousCar.respond(getObstacleEvents())