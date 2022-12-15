! function(utils) {
    var PIXI = utils.pixiInstance,
        lib = utils.AnimationsCache.LoadingScreen = {},
        MovieClip = PIXI.animate.MovieClip,
        Container = (PIXI.animate.Ease, PIXI.Container),
        Sprite = PIXI.Sprite,
        fromFrame = utils.fromFrame;
    lib.logoInner = Container.extend(function() {
        Container.call(this);
        var instance2 = new Sprite(fromFrame("logoPlate")).setTransform(-220, -100),
            instance1 = new Sprite(fromFrame("logoTxt")).setTransform(-188, -45);
        this.addChild(instance2, instance1)
    }), lib.splashLogo = Container.extend(function() {
        Container.call(this);
        var instance1 = new lib.logoInner;
        this.addChild(instance1)
    }), lib.blink = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("superWinBlink2")).setTransform(-84.5, -87.5);
        this.addChild(instance1)
    }), lib.blink_1 = Container.extend(function() {
        Container.call(this);
        var instance2 = (new lib.blink).setTransform(0, 0, 1.035, 1.035, -.785),
            instance1 = (new lib.blink).setTransform(-5.65, -1.25, 1.035, 1.035, -1.571);
        this.addChild(instance2, instance1)
    }), lib.whiteGlow = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("whiteGlow")).setTransform(-84.5, -84.5);
        this.addChild(instance1)
    }), lib.shine = Container.extend(function() {
        Container.call(this);
        var instance3 = new Sprite(fromFrame("thunderSplashPadLight1")).setTransform(-646.65, -8.1, .7, .7),
            instance2 = new Sprite(fromFrame("thunderSplashPadLight11")).setTransform(-646.85, -8.1, .7, .7, .001),
            instance1 = (new lib.whiteGlow).setTransform(35.9, 1, 7.23, .036, 0, 0, .001);
        this.addChild(instance3, instance2, instance1)
    }), lib.text = Container.extend(function() {
        Container.call(this);
        var instance3 = new Sprite(fromFrame("paytable1Txt")).setTransform(-547.5, -85),
            instance2 = (new lib.shine).setTransform(.1, 98.25, .877, .877),
            instance1 = (new lib.blink_1).setTransform(4.4, 92.5);
        this.addChild(instance3, instance2, instance1)
    }), lib.lightningBall1 = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("thunderSplashMagic7")).setTransform(-43.5, -41.5);
        this.addChild(instance1)
    }), lib.thunderRing6 = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("thunderSplashMagic3")).setTransform(-50.5, -17.5);
        this.addChild(instance1)
    }), lib.thunderRing5 = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("thunderSplashMagic2")).setTransform(-36.5, -34.5);
        this.addChild(instance1)
    }), lib.thunderRing4 = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("thunderSplashMagic8")).setTransform(-85.5, -71.5);
        this.addChild(instance1)
    }), lib.thunderRing3 = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("thunderSplashMagic4")).setTransform(-43.5, -43.5);
        this.addChild(instance1)
    }), lib.thunderRing1 = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("thunderSplashRing")).setTransform(-176.5, -175);
        this.addChild(instance1)
    }), lib.lightningBall2 = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("thunderSplashGlow")).setTransform(-144, -141);
        this.addChild(instance1)
    }), lib.lightningBall3 = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("thunderSplashMagic9")).setTransform(-158, -157.5);
        this.addChild(instance1)
    }), lib.lightBall1 = MovieClip.extend(function() {
        MovieClip.call(this, {
            duration: 10
        });
        var instance11 = (new lib.lightningBall3).setTransform(132, 293.75),
            instance10 = new lib.lightningBall2,
            instance9 = new lib.thunderRing1,
            instance8 = new lib.thunderRing3,
            instance7 = new lib.thunderRing3,
            instance6 = new lib.thunderRing4,
            instance5 = new lib.thunderRing4,
            instance4 = new lib.thunderRing5,
            instance3 = new lib.thunderRing6,
            instance2 = new lib.thunderRing6,
            instance1 = new lib.lightningBall1;
        this.addTimedChild(instance11).addTimedChild(instance10, 0, 10, {
            0: {
                x: 101.3,
                y: 304.15,
                sx: 1,
                sy: 1
            },
            1: {
                x: 101.343,
                y: 304.186,
                sx: 1.023,
                sy: 1.023
            },
            2: {
                x: 101.335,
                y: 304.167,
                sx: 1.046,
                sy: 1.046
            },
            3: {
                x: 101.328,
                y: 304.152,
                sx: 1.069,
                sy: 1.069
            },
            4: {
                x: 101.32,
                y: 304.184,
                sx: 1.092,
                sy: 1.092
            },
            5: {
                x: 101.3,
                y: 304.15,
                sx: 1.116,
                sy: 1.116
            },
            6: {
                x: 101.324,
                y: 304.215,
                sx: 1.087,
                sy: 1.087
            },
            7: {
                x: 101.349,
                y: 304.185,
                sx: 1.058,
                sy: 1.058
            },
            8: {
                x: 101.325,
                y: 304.204,
                sx: 1.029,
                sy: 1.029
            },
            9: {
                x: 101.3,
                y: 304.15,
                sx: 1,
                sy: 1
            }
        }).addTimedChild(instance9, 0, 10, {
            0: {
                x: 113.5,
                y: 260.15,
                sx: 1,
                sy: 1
            },
            1: {
                x: 113.504,
                y: 260.184,
                sx: .984,
                sy: .984
            },
            2: {
                x: 113.506,
                y: 260.163,
                sx: .968,
                sy: .968
            },
            3: {
                x: 113.51,
                y: 260.197,
                sx: .953,
                sy: .953
            },
            4: {
                x: 113.513,
                y: 260.176,
                sx: .937,
                sy: .937
            },
            5: {
                x: 113.5,
                y: 260.15,
                sx: .921,
                sy: .921
            },
            6: {
                x: 113.537,
                y: 260.185,
                sx: .941,
                sy: .941
            },
            7: {
                x: 113.527,
                y: 260.178,
                sx: .96,
                sy: .96
            },
            8: {
                x: 113.514,
                y: 260.164,
                sx: .98,
                sy: .98
            },
            9: {
                x: 113.5,
                y: 260.15,
                sx: 1,
                sy: 1
            }
        }).addTimedChild(instance8, 0, 10, {
            0: {
                x: 112.95,
                y: 292.6,
                sx: 1,
                sy: 1,
                a: 1
            },
            1: {
                x: 112.955,
                sx: 1.011,
                sy: 1.011,
                a: .89
            },
            2: {
                x: 112.959,
                y: 292.601,
                sx: 1.022,
                sy: 1.022,
                a: .78
            },
            3: {
                x: 112.964,
                sx: 1.033,
                sy: 1.033,
                a: .67
            },
            4: {
                x: 112.969,
                sx: 1.044,
                sy: 1.044,
                a: .55
            },
            5: {
                x: 113.023,
                y: 292.652,
                sx: 1.056,
                sy: 1.056,
                a: .45
            },
            6: {
                x: 113.028,
                sx: 1.067,
                sy: 1.067,
                a: .33
            },
            7: {
                x: 113.033,
                sx: 1.078,
                sy: 1.078,
                a: .22
            },
            8: {
                x: 113.038,
                y: 292.653,
                sx: 1.089,
                sy: 1.089,
                a: .11
            },
            9: {
                x: 112.9,
                y: 292.6,
                sx: 1.1,
                sy: 1.1,
                a: 0
            }
        }).addTimedChild(instance7, 0, 10, {
            0: {
                x: 112.95,
                y: 292.6,
                sx: .908,
                sy: .908,
                a: 0
            },
            1: {
                x: 112.97,
                y: 292.591,
                sx: .918,
                sy: .918,
                a: .11
            },
            2: {
                x: 112.99,
                y: 292.631,
                sx: .928,
                sy: .928,
                a: .22
            },
            3: {
                x: 112.962,
                y: 292.626,
                sx: .939,
                sy: .939,
                a: .33
            },
            4: {
                x: 112.981,
                y: 292.612,
                sx: .949,
                sy: .949,
                a: .45
            },
            5: {
                x: 112.903,
                y: 292.557,
                sx: .959,
                sy: .959,
                a: .55
            },
            6: {
                x: 112.923,
                y: 292.547,
                sx: .969,
                sy: .969,
                a: .67
            },
            7: {
                x: 112.895,
                y: 292.542,
                sx: .98,
                sy: .98,
                a: .78
            },
            8: {
                x: 112.915,
                y: 292.533,
                sx: .99,
                sy: .99,
                a: .89
            },
            9: {
                x: 112.95,
                y: 292.6,
                sx: 1,
                sy: 1,
                a: 1
            }
        }).addTimedChild(instance6, 0, 10, {
            0: {
                x: 112.7,
                y: 275.85,
                sx: 1,
                sy: 1,
                a: 1
            },
            1: {
                x: 112.725,
                y: 275.878,
                sx: 1.014,
                sy: 1.014,
                a: .89
            },
            2: {
                x: 112.702,
                y: 275.859,
                sx: 1.029,
                sy: 1.029,
                a: .78
            },
            3: {
                x: 112.727,
                y: 275.887,
                sx: 1.043,
                sy: 1.043,
                a: .67
            },
            4: {
                x: 112.702,
                y: 275.865,
                sx: 1.058,
                sy: 1.058,
                a: .55
            },
            5: {
                x: 112.729,
                y: 275.897,
                sx: 1.072,
                sy: 1.072,
                a: .45
            },
            6: {
                x: 112.704,
                y: 275.874,
                sx: 1.087,
                sy: 1.087,
                a: .33
            },
            7: {
                x: 112.729,
                y: 275.852,
                sx: 1.101,
                sy: 1.101,
                a: .22
            },
            8: {
                x: 112.706,
                y: 275.884,
                sx: 1.115,
                sy: 1.115,
                a: .11
            },
            9: {
                x: 112.7,
                y: 275.85,
                sx: 1.13,
                sy: 1.13,
                a: 0
            }
        }).addTimedChild(instance5, 0, 10, {
            0: {
                x: 112.7,
                y: 275.85,
                sx: .884,
                sy: .884,
                a: 0
            },
            1: {
                x: 112.742,
                y: 275.87,
                sx: .897,
                sy: .897,
                a: .11
            },
            2: {
                x: 112.738,
                y: 275.848,
                sx: .91,
                sy: .91,
                a: .22
            },
            3: {
                x: 112.732,
                y: 275.872,
                sx: .923,
                sy: .923,
                a: .33
            },
            4: {
                x: 112.726,
                y: 275.846,
                sx: .935,
                sy: .935,
                a: .45
            },
            5: {
                x: 112.722,
                y: 275.824,
                sx: .948,
                sy: .948,
                a: .55
            },
            6: {
                x: 112.716,
                y: 275.798,
                sx: .961,
                sy: .961,
                a: .67
            },
            7: {
                x: 112.71,
                y: 275.822,
                sx: .974,
                sy: .974,
                a: .78
            },
            8: {
                x: 112.707,
                y: 275.804,
                sx: .987,
                sy: .987,
                a: .89
            },
            9: {
                x: 112.7,
                y: 275.85,
                sx: 1,
                sy: 1,
                a: 1
            }
        }).addTimedChild(instance4, 0, 10, {
            0: {
                x: 113.8,
                y: 293.7,
                kx: 0,
                ky: 0,
                r: 0
            },
            1: {
                x: 113.839,
                y: 293.733,
                r: -.157
            },
            2: {
                x: 113.834,
                y: 293.708,
                r: -.314
            },
            3: {
                x: 113.872,
                y: 293.819,
                r: -.471
            },
            4: {
                x: 113.886,
                y: 293.764,
                r: -.628
            },
            5: {
                x: 113.8,
                y: 293.7,
                r: -.785
            },
            6: {
                x: 113.883,
                y: 293.766,
                r: -1.374
            },
            7: {
                x: 113.784,
                y: 293.752,
                r: -1.963
            },
            8: {
                x: 113.797,
                y: 293.639,
                r: -2.553
            },
            9: {
                x: 113.8,
                y: 293.7,
                kx: 3.142,
                ky: 3.142,
                r: 0
            }
        }).addTimedChild(instance3, 0, 10, {
            0: {
                x: 112.7,
                y: 293.35,
                sx: 1,
                sy: 1,
                r: 0,
                a: 1
            },
            1: {
                x: 112.702,
                y: 293.358,
                r: -.157
            },
            2: {
                x: 112.73,
                y: 293.366,
                r: -.314
            },
            3: {
                x: 112.738,
                y: 293.454,
                r: -.471
            },
            4: {
                x: 112.745,
                y: 293.426,
                r: -.628
            },
            5: {
                x: 112.65,
                y: 293.35,
                r: -.785
            },
            6: {
                x: 112.648,
                y: 293.433,
                sx: 1.057,
                sy: 1.057,
                r: -.851,
                a: .75
            },
            7: {
                x: 112.748,
                y: 293.521,
                sx: 1.114,
                sy: 1.114,
                r: -.916,
                a: .5
            },
            8: {
                x: 112.737,
                y: 293.508,
                sx: 1.171,
                sy: 1.171,
                r: -.982,
                a: .25
            },
            9: {
                x: 112.6,
                y: 293.4,
                sx: 1.228,
                sy: 1.228,
                r: -1.047,
                a: 0
            }
        }).addTimedChild(instance2, 0, 10, {
            0: {
                x: 112.75,
                y: 293.4,
                sx: .729,
                sy: .729,
                r: 1.571
            },
            1: {
                x: 112.817,
                y: 293.415,
                sx: .783,
                sy: .783,
                r: 1.414
            },
            2: {
                x: 112.828,
                y: 293.434,
                sx: .837,
                sy: .837,
                r: 1.257
            },
            3: {
                x: 112.78,
                y: 293.364,
                sx: .891,
                sy: .891,
                r: 1.1
            },
            4: {
                x: 112.793,
                y: 293.372,
                sx: .946,
                sy: .946,
                r: .942
            },
            5: {
                x: 112.75,
                y: 293.35,
                sx: 1,
                sy: 1,
                r: .785
            },
            6: {
                x: 112.752,
                y: 293.407,
                r: .589
            },
            7: {
                x: 112.718,
                y: 293.319,
                r: .393
            },
            8: {
                x: 112.714,
                r: .196
            },
            9: {
                x: 112.7,
                y: 293.35,
                r: 0
            }
        }).addTimedChild(instance1, 0, 10, {
            0: {
                x: 115.45,
                y: 294.6,
                sx: 1,
                sy: 1
            },
            1: {
                x: 115.454,
                y: 294.644,
                sx: 1.01,
                sy: 1.01
            },
            2: {
                x: 115.458,
                y: 294.639,
                sx: 1.02,
                sy: 1.02
            },
            3: {
                x: 115.463,
                y: 294.638,
                sx: 1.03,
                sy: 1.03
            },
            4: {
                x: 115.467,
                y: 294.632,
                sx: 1.04,
                sy: 1.04
            },
            5: {
                x: 115.45,
                y: 294.55,
                sx: 1.05,
                sy: 1.05
            },
            6: {
                x: 115.472,
                y: 294.585,
                sx: 1.037,
                sy: 1.037
            },
            7: {
                x: 115.498,
                y: 294.58,
                sx: 1.025,
                sy: 1.025
            },
            8: {
                x: 115.474,
                y: 294.574,
                sx: 1.012,
                sy: 1.012
            },
            9: {
                x: 115.45,
                y: 294.6,
                sx: 1,
                sy: 1
            }
        }), this.labels.forEach((label, index) => {
            var labelEndPosition = this.labels[index + 1] ? this.labels[index + 1].position - 1 : this._totalFrames - 1;
            this.addAction(() => this.emit("label_end", this.currentLabel), labelEndPosition)
        })
    }), lib.thunderRing2 = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("thunderSplashOrb")).setTransform(-103, -88.5);
        this.addChild(instance1)
    }), lib.characterHighlight4 = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("thunderLightBody2")).setTransform(-32.5, -110.5);
        this.addChild(instance1)
    }), lib.characterHighlight3 = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("thunderLightArmRight1")).setTransform(-50.5, -142.5);
        this.addChild(instance1)
    }), lib.characterHighlight2 = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("thunderLightArmRight2")).setTransform(-153.75, -109.6, 1, 1, -.703);
        this.addChild(instance1)
    }), lib.characterArm1 = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("thunderSplashCharacter2")).setTransform(-216.6, -197.2, 1, 1, .113);
        this.addChild(instance1)
    }), lib.characterHightlight5 = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("thunderLightFace")).setTransform(-185.5, -157.5);
        this.addChild(instance1)
    }), lib.character = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("thunderSplashCharacter1")).setTransform(-295, -468);
        this.addChild(instance1)
    }), lib.characterHighlight1 = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("thunderLightArmLeft")).setTransform(-207, -61.5);
        this.addChild(instance1)
    }), lib.characterArm2 = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("thunderSplashCharacter3")).setTransform(-217.8, 39.75, 1, 1, -.524);
        this.addChild(instance1)
    }), lib.heroLightning = Container.extend(function() {
        Container.call(this);
        var instance10 = (new lib.characterArm2).setTransform(300.45, 50.65, 1, 1, -.087),
            instance9 = (new lib.characterHighlight1).setTransform(295, 46, 1, 1, -.564).setAlpha(0),
            instance8 = (new lib.character).setTransform(-79.45, 19.35),
            instance7 = (new lib.characterHightlight5).setTransform(-43, -269).setAlpha(0),
            instance6 = (new lib.characterArm1).setTransform(-292.7, -41.75, 1, 1, .056),
            instance5 = (new lib.characterHighlight2).setTransform(-375, -92, 1, 1, .062).setAlpha(0),
            instance4 = (new lib.characterHighlight3).setTransform(-162, -55, 1, 1, .565).setAlpha(0),
            instance3 = (new lib.characterHighlight4).setTransform(-75, 195, 1, 1, .676).setAlpha(0),
            instance2 = (new lib.thunderRing2).setTransform(401.15, -53.25),
            instance1 = (new lib.lightBall1).setTransform(-530.35, -561.95);
        this.addChild(instance10, instance9, instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1)
    }), lib.light = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("bigLogoLightBack")).setTransform(-771.5, -190.5);
        this.addChild(instance1)
    }), lib.laser2 = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("beamSplashLaser2")).setTransform(-223.5, 143.6, 1, 1, -.881);
        this.addChild(instance1)
    }), lib.laser1 = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("beamSplashLaser3")).setTransform(-305.9, 178.85, 1, 1, -.771);
        this.addChild(instance1)
    }), lib.faceGlow = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("beamSplashLaser1")).setTransform(-95.5, -117);
        this.addChild(instance1)
    }), lib.faceGlowAdd = Container.extend(function() {
        Container.call(this);
        var instance1 = (new lib.faceGlow).setBlendMode(PIXI.BLEND_MODES.ADD);
        this.addChild(instance1)
    }), lib.heroLaserCape1 = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("beamSplashCape1")).setTransform(-364.25, -5.4, 1, 1, -.179);
        this.addChild(instance1)
    }), lib.heroLaserTorso = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("beamSplashCharacter")).setTransform(-514, -577.5);
        this.addChild(instance1)
    }), lib.heroLaserCape2 = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("beamSplashCape2")).setTransform(-183.5, -327.5);
        this.addChild(instance1)
    }), lib.heroLaserLoop = Container.extend(function() {
        Container.call(this);
        var instance9 = (new lib.heroLaserCape2).setTransform(-148.7, 59.7, 1, 1, -.086),
            instance8 = (new lib.heroLaserTorso).setTransform(130.25),
            instance7 = (new lib.heroLaserCape1).setTransform(-140, -244.75),
            instance6 = (new lib.faceGlow).setTransform(-12.9, -433.15),
            instance5 = (new lib.faceGlowAdd).setTransform(-12.9, -433.15).setAlpha(0),
            instance4 = (new lib.laser1).setTransform(-338.3, -247.35),
            instance3 = (new lib.laser2).setTransform(-102.9, -225.5),
            instance2 = (new lib.light).setTransform(-21.1, -415.55, .853, .155).setAlpha(0),
            instance1 = (new lib.light).setTransform(-21.4, -415.75, .109, .095).setAlpha(.6);
        this.addChild(instance9, instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1)
    }), lib.heroGhost = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("shiftSplashMotion1")).setTransform(-663, -437);
        this.addChild(instance1)
    }), lib.heroSwosh = Container.extend(function() {
        Container.call(this);
        var instance3 = (new lib.heroGhost).setTransform(21.55, -27.05, .924, .825, .03).setAlpha(0),
            instance2 = (new lib.heroGhost).setTransform(-26.5, -28.55, .997, .825, .03),
            instance1 = new Sprite(fromFrame("shiftSplashCharacter")).setTransform(-626, -400.5);
        this.addChild(instance3, instance2, instance1)
    }), lib.quakeHero = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("quakeSplashCharacter")).setTransform(-435.5, -471.5);
        this.addChild(instance1)
    }), lib.heroQuake = Container.extend(function() {
        Container.call(this);
        var instance1 = new lib.quakeHero;
        this.addChild(instance1)
    }), lib.padLight7 = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("thunderSplashPadLight6")).setTransform(-10, -575);
        this.addChild(instance1)
    }), lib.padLight6 = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("thunderSplashPadLight5")).setTransform(-654.5, -65.5);
        this.addChild(instance1)
    }), lib.padLight1 = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("thunderSplashPadLight1")).setTransform(-904, -11.5);
        this.addChild(instance1)
    }), lib.topBlueBackground = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("paytable1LogoGlow")).setTransform(-251, -153);
        this.addChild(instance1)
    }), lib.backgroundblue = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("paytable1Glow")).setTransform(-616.5, -554);
        this.addChild(instance1)
    }), lib.padUpper = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("thunderSplashPadUpper"));
        this.addChild(instance1)
    }), lib.padLower = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("thunderSplashPadLower"));
        this.addChild(instance1)
    }), lib.paytableElements = Container.extend(function() {
        Container.call(this);
        var instance25 = (new lib.padLower).setTransform(293.95, 583.7, .604, .604, -.432),
            instance24 = (new lib.padUpper).setTransform(114.85, 160.75, .604, .604, .17),
            instance23 = (new lib.backgroundblue).setTransform(531.6, 508.1),
            instance22 = (new lib.topBlueBackground).setTransform(519.45, 84.85),
            instance21 = (new lib.padLight1).setTransform(521, 224.55, .604, .604, .141),
            instance20 = (new lib.padLight1).setTransform(520.95, 224.4, .604, .333, .141).setAlpha(0),
            instance19 = (new lib.padLight6).setTransform(601.5, 742.55, .604, .604, -.492),
            instance18 = (new lib.padLight6).setTransform(603.05, 742.4, .604, .77, -.466).setAlpha(0),
            instance17 = (new lib.padLight6).setTransform(672.2, 767.65, .31, .31, -.492),
            instance16 = (new lib.padLight6).setTransform(673, 767.6, .31, .395, -.466).setAlpha(0),
            instance15 = (new lib.padLight7).setTransform(894.75, 675.25, .434, .434, .983),
            instance14 = new Sprite(fromFrame("thunderSplashPadLight1")).setTransform(-35.15, 129.4, .604, .604, .161),
            instance13 = new Sprite(fromFrame("thunderSplashPadLight2")).setTransform(838.7, 352, .604, .604, .383),
            instance12 = new Sprite(fromFrame("thunderSplashPadLight6")).setTransform(884.35, 738.5, .604, .604, 1.501),
            instance11 = new Sprite(fromFrame("thunderSplashPadLight7")).setTransform(131.35, 202.85, .604, .604, -.409),
            instance10 = new Sprite(fromFrame("thunderSplashPadLight8")).setTransform(113.6, 788.45, .604, .604, -.069),
            instance9 = new Sprite(fromFrame("thunderSplashPadLight10")).setTransform(49.85, -11.85, .604, .604, 1.165),
            instance8 = new Sprite(fromFrame("thunderSplashPadLight11")).setTransform(-35.4, 129.4, .604, .604, .162),
            instance7 = (new lib.whiteGlow).setTransform(534.9, 227.15, 6.233, .031, .148),
            instance6 = (new lib.whiteGlow).setTransform(557.5, 767.45, 2.283, .031, 0, .068, -.07),
            instance5 = (new lib.heroQuake).setTransform(762.2, 458.55, .545, .545, -.001),
            instance4 = (new lib.heroSwosh).setTransform(720.35, 503.1, .467, .467, .205),
            instance3 = (new lib.heroLaserLoop).setTransform(519.1, 497.55, .527, .527, 0, 0, 3.142),
            instance2 = (new lib.heroLightning).setTransform(268.75, 437.85, .52, .52),
            instance1 = (new lib.text).setTransform(507.5, 716);
        this.addChild(instance25, instance24, instance23, instance22, instance21, instance20, instance19, instance18, instance17, instance16, instance15, instance14, instance13, instance12, instance11, instance10, instance9, instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1)
    }), lib.bg = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("sceneSlotSpecialBg")).setTransform(-867, -767);
        this.addChild(instance1)
    }), lib.loadingScreen = MovieClip.extend(function() {
        MovieClip.call(this, {
            duration: 55,
            labels: {
                init: 0,
                show: 10
            }
        });
        var instance3 = new lib.bg,
            instance2 = new lib.paytableElements,
            instance1 = (new lib.splashLogo).setTransform(511, 83);
        this.addTimedChild(instance3).addTimedChild(instance2).addTimedChild(instance1), this.labels.forEach((label, index) => {
            var labelEndPosition = this.labels[index + 1] ? this.labels[index + 1].position - 1 : this._totalFrames - 1;
            this.addAction(() => this.emit("label_end", this.currentLabel), labelEndPosition)
        })
    }), lib.LoadingScreen = MovieClip.extend(function() {
        MovieClip.call(this, {
            duration: 1,
            framerate: 60,
            loop: !1
        });
        var instance1 = new lib.loadingScreen;
        this[instance1.name = "container"] = instance1, this.addChild(instance1)
    }), lib.LoadingScreen.assets = {
        logoTxt: "../../images/en/loader/logoTxt.png",
        logoPlate: "../../images/en/loader/logoPlate.png",
        superWinBlink2: "../../images/en/loader/superWinBlink2.png",
        whiteGlow: "../../images/en/loader/whiteGlow.png",
        thunderSplashPadLight11: "../../images/en/loader/thunderSplashPadLight11.png",
        thunderSplashPadLight1: "../../images/en/loader/thunderSplashPadLight1.png",
        paytable1Txt: "../../images/en/loader/paytable1Txt.png",
        thunderSplashMagic7: "../../images/en/loader/thunderSplashMagic7.png",
        thunderSplashMagic3: "../../images/en/loader/thunderSplashMagic3.png",
        thunderSplashMagic2: "../../images/en/loader/thunderSplashMagic2.png",
        thunderSplashMagic8: "../../images/en/loader/thunderSplashMagic8.png",
        thunderSplashMagic4: "../../images/en/loader/thunderSplashMagic4.png",
        thunderSplashRing: "../../images/en/loader/thunderSplashRing.png",
        thunderSplashGlow: "../../images/en/loader/thunderSplashGlow.png",
        thunderSplashMagic9: "../../images/en/loader/thunderSplashMagic9.png",
        thunderSplashOrb: "../../images/en/loader/thunderSplashOrb.png",
        thunderLightBody2: "../../images/en/loader/thunderLightBody2.png",
        thunderLightArmRight1: "../../images/en/loader/thunderLightArmRight1.png",
        thunderLightArmRight2: "../../images/en/loader/thunderLightArmRight2.png",
        thunderSplashCharacter2: "../../images/en/loader/thunderSplashCharacter2.png",
        thunderLightFace: "../../images/en/loader/thunderLightFace.png",
        thunderSplashCharacter1: "../../images/en/loader/thunderSplashCharacter1.png",
        thunderLightArmLeft: "../../images/en/loader/thunderLightArmLeft.png",
        thunderSplashCharacter3: "../../images/en/loader/thunderSplashCharacter3.png",
        bigLogoLightBack: "../../images/en/loader/bigLogoLightBack.png",
        beamSplashLaser2: "../../images/en/loader/beamSplashLaser2.png",
        beamSplashLaser3: "../../images/en/loader/beamSplashLaser3.png",
        beamSplashLaser1: "../../images/en/loader/beamSplashLaser1.png",
        beamSplashCape1: "../../images/en/loader/beamSplashCape1.png",
        beamSplashCharacter: "../../images/en/loader/beamSplashCharacter.png",
        beamSplashCape2: "../../images/en/loader/beamSplashCape2.png",
        shiftSplashCharacter: "../../images/en/loader/shiftSplashCharacter.png",
        shiftSplashMotion1: "../../images/en/loader/shiftSplashMotion1.png",
        quakeSplashCharacter: "../../images/en/loader/quakeSplashCharacter.png",
        thunderSplashPadLight10: "../../images/en/loader/thunderSplashPadLight10.png",
        thunderSplashPadLight8: "../../images/en/loader/thunderSplashPadLight8.png",
        thunderSplashPadLight7: "../../images/en/loader/thunderSplashPadLight7.png",
        thunderSplashPadLight6: "../../images/en/loader/thunderSplashPadLight6.png",
        thunderSplashPadLight2: "../../images/en/loader/thunderSplashPadLight2.png",
        thunderSplashPadLight5: "../../images/en/loader/thunderSplashPadLight5.png",
        paytable1LogoGlow: "../../images/en/loader/paytable1LogoGlow.png",
        paytable1Glow: "../../images/en/loader/paytable1Glow.png",
        thunderSplashPadUpper: "../../images/en/loader/thunderSplashPadUpper.png",
        thunderSplashPadLower: "../../images/en/loader/thunderSplashPadLower.png",
        sceneSlotSpecialBg: "../../images/en/loader/sceneSlotSpecialBg.jpg"
    }
}(com.casino.game.utils || {});