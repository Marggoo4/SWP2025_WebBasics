import { ActorFactory } from "../actors/ActorFactory.js";
const types = ["circle", "rectangle", "supercircle"];
// The client never calls "new Circle(...)" etc. - the factory decides.
for (const type of types) {
    const actor = ActorFactory.createActor(type, 100, 100);
    actor.update(0.016);
    console.log(`Requested "${type}" -> created ${actor.constructor.name}.`);
}
