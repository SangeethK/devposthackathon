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
const Scene = require('Scene');
const FaceTracking = require('FaceTracking');
const Animation = require('Animation');
const TouchGestures = require('TouchGestures')
const NativeUI = require('NativeUI')

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

Scene.root.findFirst('2dText0', {recursive: true}).then(function(base){
    TouchGestures.onTap(base).subscribe(function() {
        NativeUI.enterTextEditMode(base);
    });      
})


