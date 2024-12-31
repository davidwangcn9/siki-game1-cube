import { _decorator, Component, instantiate, Node, Prefab, resources, UITransform } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GameRoot')
export class GameRoot extends Component {
    @property(Node) firstNode: Node;
    @property(Prefab) prefab: Prefab;

    wallSize= {
        width: 20,
        hight: 15
    } 

    start() {
        // this.initCubes();
        // this.openTouchEvents();
    }
    initCubes() {
        const firstPos= this.firstNode.getPosition()
        for(let i=0; i<this.wallSize.width;i++)
        {
            for(let j=0;j<this.wallSize.hight;j++){
                const cube = instantiate(this.prefab);
                const x = firstPos.x+ i*1;
                const y = firstPos.y + j*1;
                const z = firstPos.z;
                cube.setPosition(x,y,z);
                this.node.addChild(cube);
            }
        }
    }

    update(deltaTime: number) {

    }
}


