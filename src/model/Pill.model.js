import { Scheduler } from "./Scheduler.model";
import { PortionEnum } from "./PortionEnum.ts";

export class Pill {
    constructor(name = 'Aspirin', portion = PortionEnum.FULL, scheduler = new Scheduler()) {
        this.name = name;
        this.portion = portion;
        this.scheduler = scheduler;
    }
}
