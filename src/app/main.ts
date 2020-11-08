import {
    Game,
    Scene,
    GameObjects,
    Physics,
    Types,
    AUTO
} from 'phaser';
import { GameScene } from './types/gameScene';
import { SceneConfiguration } from './types/sceneConfiguration';
import { mainScene } from './scenes/mainScene';

const gameConfig: Types.Core.GameConfig = {
    title: 'Sample',
    type: AUTO,
    scale: {
        width: window.innerWidth,
        height: window.innerHeight,
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
        },
    },
    parent: 'game',
    backgroundColor: '#ffffff',
    scene: mainScene
};

export const game = new Game(gameConfig);