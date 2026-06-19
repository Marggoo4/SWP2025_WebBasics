import { SmartHomeController } from "./SmartHomeController.js";
import { EcoModeStrategy } from "./EcoModeStrategy.js";
import { ComfortModeStrategy } from "./ComfortModeStrategy.js";
import { AwayModeStrategy } from "./AwayModeStrategy.js";
import { ScheduleBasedStrategy } from "./ScheduleBasedStrategy.js";
const controller = new SmartHomeController(new EcoModeStrategy());
controller.controlHeating(16);
// Switching modes at runtime needs no change to SmartHomeController.
controller.setStrategy(new ComfortModeStrategy());
controller.controlHeating(20);
controller.setStrategy(new AwayModeStrategy());
controller.controlHeating(10);
controller.setStrategy(new ScheduleBasedStrategy(8));
controller.controlHeating(18);
