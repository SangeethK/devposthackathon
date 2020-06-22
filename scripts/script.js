/**
 * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
 */

//==============================================================================
// Welcome to scripting in Spark AR Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//
// For projects created with v87 onwards, JavaScript is always executed in strict mode.
//==============================================================================

// How to load in modules
import * as lib from './utils'
const Scene = require('Scene');
const FaceTracking = require('FaceTracking');
const Animation = require('Animation');
const TouchGestures = require('TouchGestures')
const NativeUI = require('NativeUI')
const Textures = require('Textures');
const Patches = require('Patches');
const Diagnostics = require('Diagnostics');

Promise.all([
    Textures.findFirst('icon_1'),
    Textures.findFirst('icon_2'),
    Textures.findFirst('icon_3'),

    Scene.root.findFirst('Heart'),
    Scene.root.findFirst('emitter0'),
    Scene.root.findFirst('BabylonShaderBall_Simple'),
    Scene.root.findFirst('emitter1'),
    Scene.root.findFirst('node-0'),
    Scene.root.findFirst('emitter2'),
]).then(onReady);

// Log a string message  
//Diagnostics.log('Loading');

function onReady(assets) {    
    const texture0 = assets[0];
    const texture1 = assets[1];
    const texture2 = assets[2];

    const heart = assets[3];
    const heartEmitter = assets[4]
    const shaderBall = assets[5];
    const shaderBallEmitter = assets[6]
    const picker = NativeUI.picker;
    const rose = assets[7];
    const emitter2 = assets[8];
    const index = 0;
    const selection = 1;

    const configuration = {

      selectedIndex: index,

      items: [
        {image_texture: texture0},
        {image_texture: texture1},
        {image_texture: texture2}
      ]
    };

    picker.configure(configuration);
    picker.visible = true;

    

    picker.selectedIndex.monitor().subscribe(function(index) {
        
        // Loading the cubes
        switch(index.newValue) {
            case 0: {
                shaderBall.hidden = false;
                shaderBallEmitter.hidden = false;
               heart.hidden = true;
               heartEmitter.hidden = true;
               break;
            }
            case 1: {
                heart.hidden = false;
                heartEmitter.hidden = false;
                shaderBall.hidden = true;
                shaderBallEmitter.hidden = true;
                rose.hidden = true;
               emitter2.hidden = true;
               break;
            }
            case 2: {
                shaderBall.hidden = true;
                shaderBallEmitter.hidden = true;
               rose.hidden = false;
               emitter2.hidden = false;
                heart.hidden = true;
                heartEmitter.hidden = true;
                break;
            }
          }
    });
}

Scene.root.findFirst('Heart', {recursive: true}).then(function(base){
    const baseDriverParameters = {
        durationMilliseconds: 400, 
        loopCount: Infinity, 
        mirror: true
    }
    
    const baseDriver = Animation.timeDriver(baseDriverParameters);
    baseDriver.start();

    const baseSampler = Animation.samplers.easeInQuint(5.0, 6.0)

    const baseAnimation = Animation.animate(baseDriver, baseSampler)

    const baseTransform = base.transform;

    baseTransform.scaleX = baseAnimation; 
    baseTransform.scaleY = baseAnimation;
    baseTransform.scaleZ = baseAnimation;
})

Scene.root.findFirst('emitter0', {recursive: true}).then(function(base){
    const baseDriverParameters = {
        durationMilliseconds: 400, 
        loopCount: Infinity, 
        mirror: true
    }
    
    const baseDriver = Animation.timeDriver(baseDriverParameters);
    baseDriver.start();

    const baseSampler = Animation.samplers.easeInQuint(0.9, 1)

    const baseAnimation = Animation.animate(baseDriver, baseSampler)

    const baseTransform = base.transform;

    baseTransform.scaleX = baseAnimation; 
    baseTransform.scaleY = baseAnimation;
    baseTransform.scaleZ = baseAnimation;
})

