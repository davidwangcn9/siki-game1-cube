import { _decorator, Component, EventTouch, input, Input, instantiate, Node, Prefab, RigidBody, UITransform, v2, v3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('AttackerController')
export class AttackerController extends Component {

    @property(Prefab) bullet: Prefab;
    @property(Node) bulletsRoot: Node;

    @property
    maxNumberOfAttack: number = 20;
    uiTransform: UITransform;
    isFiring: boolean = false;
    fireSpeed: number = 0.1;
    fireTime: number = 0;

    start() {
        input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
        input.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
        this.uiTransform = this.node.getComponent(UITransform);
    }

    onTouchStart(event: EventTouch) {
        this.isFiring = true;


    }

    onTouchEnd() {
        this.isFiring = false;
    }

    fireBullet() {
        const bullet = instantiate(this.bullet);
        const rigid = bullet.getComponent(RigidBody);
        this.bulletsRoot.addChild(bullet);
        // console.log('event location:', event.getLocation());
        // console.log('event UI location:', event.getUILocation());
        // const nodePos = this.node.getPosition();
        // const bulletPos = v2(nodePos.x,nodePos.y);
        // const mousePos = event.getLocation();
        // const newPos =  this.uiTransform.convertToNodeSpaceAR(v3(mousePos.x,mousePos.y,nodePos.z))
        // console.log('new Pos :', newPos);
        bullet.setPosition(this.node.getPosition().add3f(0,0,-5));
        console.log('Camera position is ', this.node.getPosition());
        rigid.setLinearVelocity(v3(0, 0, -40));
    }

    update(deltaTime: number) {
        if (this.isFiring) {
            this.fireTime += deltaTime;
            if (this.fireTime > this.fireSpeed) {
                this.fireBullet();
                this.fireTime = 0;
            }
        }
    }
}

