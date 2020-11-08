import { GameObjects, Physics } from "phaser";
import { GameScene } from "../types/gameScene";
import { SceneConfiguration } from "../types/sceneConfiguration";


export class MainScene extends GameScene {
    constructor(config: SceneConfiguration) {
        super(config);
    }
    preload() {

    }
    create() {

    }
    update() {

    }
}

const sceneConfiguration: SceneConfiguration = {
    settingsConfiguration: {
        active: true,
        visible: true,
        key: 'Main',
    }
}

export const mainScene = new MainScene(sceneConfiguration);