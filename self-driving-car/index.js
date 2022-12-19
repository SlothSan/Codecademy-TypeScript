"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const computer_vision_1 = require("./computer-vision");
class Car {
    constructor(props) {
        this.isRunning = props.isRunning;
        this.steeringControl = props.steeringControl;
    }
    respond(events) {
        if (!this.isRunning) {
            return console.log('Car is off!');
        }
        Object.keys(events).forEach(eventKey => {
            if (events[eventKey] === false) {
                return;
            }
            if (eventKey === 'ObstacleLeft') {
                this.steeringControl.turn('right');
            }
            else {
                this.steeringControl.turn('left');
            }
        });
    }
}
class SteeringControl {
    execute(command) {
        console.log(`Executing: ${command}`);
    }
    turn(direction) {
        this.execute(`turn ${direction}`);
    }
}
let steering = new SteeringControl;
let autonomousCar = new Car({ isRunning: true, steeringControl: steering });
console.log(autonomousCar.respond((0, computer_vision_1.getObstacleEvents)()));
