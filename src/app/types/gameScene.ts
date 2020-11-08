import { Game, GameObjects, Physics, Scene, Types } from "phaser";
import { SceneConfiguration } from "./sceneConfiguration";

export abstract class GameScene extends Scene {

    constructor(config: SceneConfiguration) {
        super(config.settingsConfiguration);
    }

}