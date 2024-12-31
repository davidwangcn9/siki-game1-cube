import { _decorator, Component, EventTouch, input, Input, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('CameraController')
export class CameraController extends Component {
    start() {
        this.openTouchEvents();
    }

    openTouchEvents() {

        input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
        input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
        input.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);

    }

    onTouchStart(event: EventTouch) {
        // console.log("Touch start: ", event.getLocation());
        // console.log("Touch start: UI location ", event.getUILocation());
    }

    onTouchMove(event: EventTouch) {
        // console.log("Touch move: UI location ",event.getUILocation());
        // console.log("Touch move: UI location ",event.getDelta());
        const moveScale = 0.05;
        const curP = this.node.getPosition();
        this.node.setPosition(curP.add3f(event.getDeltaX()*moveScale, event.getDeltaY()*moveScale, 0));
    }

    onTouchEnd(event: EventTouch) {
        // console.log("Touch end: UI location ", event.getUILocation());
    }

    update(deltaTime: number) {

    }
}

