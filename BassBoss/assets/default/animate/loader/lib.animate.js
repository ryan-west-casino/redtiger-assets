! function(utils) {
    var PIXI = utils.pixiInstance,
        lib = utils.AnimationsCache.LoadingScreen = {},
        MovieClip = PIXI.animate.MovieClip,
        Container = (PIXI.animate.Ease, PIXI.Container),
        Sprite = PIXI.Sprite,
        fromFrame = utils.fromFrame;
    lib.bubbles = Container.extend(function() {
        Container.call(this);
        var instance24 = new Sprite(fromFrame("sceneSlotDividerSingle")).setTransform(110, -16),
            instance23 = new Sprite(fromFrame("sceneSlotDividerSingle")).setTransform(150, 32, 1.19, 1.19),
            instance22 = new Sprite(fromFrame("sceneSlotDividerSingle")).setTransform(144, -41, .682, .682),
            instance21 = new Sprite(fromFrame("sceneSlotDividerSingle")).setTransform(82, -51, .682, .682),
            instance20 = new Sprite(fromFrame("sceneSlotDividerSingle")).setTransform(106, 1, 1.544, 1.544),
            instance19 = new Sprite(fromFrame("sceneSlotDividerSingle")).setTransform(101, 80, .836, .836),
            instance18 = new Sprite(fromFrame("sceneSlotDividerSingle")).setTransform(73, 106, .697, .697),
            instance17 = new Sprite(fromFrame("sceneSlotDividerSingle")).setTransform(55, 28, .697, .697),
            instance16 = new Sprite(fromFrame("sceneSlotDividerSingle")).setTransform(48, 112, .697, .697),
            instance15 = new Sprite(fromFrame("sceneSlotDividerSingle")).setTransform(45, 154, .697, .697),
            instance14 = new Sprite(fromFrame("sceneSlotDividerSingle")).setTransform(19, 136, .927, .927),
            instance13 = new Sprite(fromFrame("sceneSlotDividerSingle")).setTransform(-43, 51, 1.063, 1.063),
            instance12 = new Sprite(fromFrame("sceneSlotDividerSingle")).setTransform(-11, 72, 1.476, 1.476),
            instance11 = new Sprite(fromFrame("sceneSlotDividerSingle")).setTransform(99, 120, .836, .836),
            instance10 = new Sprite(fromFrame("sceneSlotDividerSingle")).setTransform(108, 129, 1.344, 1.344),
            instance9 = new Sprite(fromFrame("sceneSlotDividerSingle")).setTransform(160, 126, 1.094, 1.094),
            instance8 = new Sprite(fromFrame("sceneSlotDividerSingle")).setTransform(102, -43, .836, .836),
            instance7 = new Sprite(fromFrame("sceneSlotDividerSingle")).setTransform(61, 60, 1.038, 1.038),
            instance6 = new Sprite(fromFrame("sceneSlotDividerSingle")).setTransform(-17, 141, .697, .697),
            instance5 = new Sprite(fromFrame("sceneSlotDividerSingle")).setTransform(3, 104, 1.076, 1.076),
            instance4 = new Sprite(fromFrame("sceneSlotDividerSingle")).setTransform(139, -112, .682, .682),
            instance3 = new Sprite(fromFrame("sceneSlotDividerSingle")).setTransform(116, -84, 1.022, 1.022),
            instance2 = new Sprite(fromFrame("sceneSlotDividerSingle")).setTransform(22, 0, .682, .682),
            instance1 = new Sprite(fromFrame("sceneSlotDividerSingle")).setTransform(3, 176, .682, .682);
        this.addChild(instance24, instance23, instance22, instance21, instance20, instance19, instance18, instance17, instance16, instance15, instance14, instance13, instance12, instance11, instance10, instance9, instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1)
    }), lib.paytable1Text = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("paytable1Text"));
        this.addChild(instance1)
    }), lib.tile14Fish = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile14Fish"));
        this.addChild(instance1)
    }), lib.tile14Fish_copy = Container.extend(function() {
        Container.call(this);
        var instance1 = (new lib.tile14Fish).setTransform(0, 24, .91, .91, -.07);
        this.addChild(instance1)
    }), lib.tile16Fish = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile16Fish"));
        this.addChild(instance1)
    }), lib.tile16Fish_copy = Container.extend(function() {
        Container.call(this);
        var instance1 = (new lib.tile16Fish).setTransform(0, 0, .6, .6);
        this.addChild(instance1)
    }), lib.tile10Fish = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile10Fish"));
        this.addChild(instance1)
    }), lib.tile10Fish_copy = Container.extend(function() {
        Container.call(this);
        var instance1 = new lib.tile10Fish;
        this.addChild(instance1)
    }), lib.tile12Fish = Container.extend(function() {
        Container.call(this);
        var instance2 = new Sprite(fromFrame("tile12Fish")),
            instance1 = new Sprite(fromFrame("tile12FishFin")).setTransform(62.2, 72.95);
        this.addChild(instance2, instance1)
    }), lib.paytable1Water = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("paytable1Water"));
        this.addChild(instance1)
    }), lib.paytable1Boat = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("paytable1BoatFront"));
        this.addChild(instance1)
    }), lib.paytable1Boat_copy = Container.extend(function() {
        Container.call(this);
        var instance1 = new lib.paytable1Boat;
        this.addChild(instance1)
    }), lib.megaWinChFingersR = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("megaWinChFingersR"));
        this.addChild(instance1)
    }), lib.megaWinCupBlink = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("megaWinCupBlink"));
        this.addChild(instance1)
    }), lib.megaWinCup1 = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("megaWinCup1"));
        this.addChild(instance1)
    }), lib.megaWinCup2 = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("megaWinCup2"));
        this.addChild(instance1)
    }), lib.megaWinChBrowR = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("megaWinChBrowR"));
        this.addChild(instance1)
    }), lib.megaWinChBrowL = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("megaWinChBrowL"));
        this.addChild(instance1)
    }), lib.megaWinChMustacheL = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("megaWinChMustacheL"));
        this.addChild(instance1)
    }), lib.megaWinChMustacheR = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("megaWinChMustacheR"));
        this.addChild(instance1)
    }), lib.megaWinChFace = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("megaWinChFace"));
        this.addChild(instance1)
    }), lib.megaWinChIrisL = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("megaWinChIrisL"));
        this.addChild(instance1)
    }), lib.megaWinChIrisR = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("megaWinChIrisR"));
        this.addChild(instance1)
    }), lib.megaWinChHandR = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("megaWinChHandR"));
        this.addChild(instance1)
    }), lib.megaWinChEyeR = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("megaWinChEyeR"));
        this.addChild(instance1)
    }), lib.megaWinChEyeL = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("megaWinChEyeL"));
        this.addChild(instance1)
    }), lib.megaWinChHat = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("paytable1ChHatFront"));
        this.addChild(instance1)
    }), lib.paytable1ChHatBack = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("paytable1ChHatBack"));
        this.addChild(instance1)
    }), lib.megaWinChArmR = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("megaWinChArmR"));
        this.addChild(instance1)
    }), lib.megaWinChTorso = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("paytable1ChTorso"));
        this.addChild(instance1)
    }), lib.megaWinChSleeveR = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("megaWinChSleeveR"));
        this.addChild(instance1)
    }), lib.megaWinCharacter = MovieClip.extend(function() {
        MovieClip.call(this, {
            duration: 48
        });
        var instance20 = new lib.megaWinChSleeveR,
            instance19 = new lib.megaWinChSleeveR,
            instance18 = new lib.megaWinChTorso,
            instance17 = new lib.megaWinChArmR,
            instance16 = new lib.megaWinChArmR,
            instance15 = new lib.paytable1ChHatBack,
            instance14 = new lib.megaWinChHat,
            instance13 = new lib.megaWinChHandR,
            instance12 = new lib.megaWinChEyeL,
            instance11 = new lib.megaWinChEyeR,
            instance10 = new lib.megaWinChHandR,
            instance9 = new lib.megaWinChIrisR,
            instance8 = new lib.megaWinChIrisL,
            instance7 = new lib.megaWinChFace,
            instance6 = new lib.megaWinChMustacheR,
            instance5 = new lib.megaWinChMustacheL,
            instance4 = new lib.megaWinChBrowL,
            instance3 = new lib.megaWinChBrowR,
            instance22 = new lib.megaWinCup2,
            instance21 = new lib.megaWinCup1,
            instance23 = new lib.megaWinCupBlink,
            instance2 = new lib.megaWinChFingersR,
            instance1 = new lib.megaWinChFingersR;
        this.addTimedChild(instance20, 0, 48, {
            0: {
                x: 974.15,
                y: 364.5,
                kx: 0,
                ky: 3.142
            },
            1: {
                x: 974.199,
                y: 367.765,
                kx: -.01,
                ky: -3.131
            },
            2: {
                x: 974.135,
                y: 370.921,
                kx: -.02,
                ky: -3.121
            },
            3: {
                x: 974.044,
                y: 373.913,
                kx: -.03,
                ky: -3.112
            },
            4: {
                x: 973.965,
                y: 376.772,
                kx: -.039,
                ky: -3.103
            },
            5: {
                x: 973.849,
                y: 379.447,
                kx: -.047,
                ky: -3.094
            },
            6: {
                x: 973.706,
                y: 382.011,
                kx: -.055,
                ky: -3.086
            },
            7: {
                x: 973.569,
                y: 384.455,
                kx: -.063,
                ky: -3.079
            },
            8: {
                x: 973.406,
                y: 386.74,
                kx: -.07,
                ky: -3.071
            },
            9: {
                x: 973.244,
                y: 388.822,
                kx: -.077,
                ky: -3.065
            },
            10: {
                x: 973.09,
                y: 390.788,
                kx: -.083,
                ky: -3.059
            },
            11: {
                x: 972.967,
                y: 392.614,
                kx: -.089,
                ky: -3.053
            },
            12: {
                x: 972.762,
                y: 394.294,
                kx: -.094,
                ky: -3.047
            },
            13: {
                x: 972.643,
                y: 395.819,
                kx: -.099,
                ky: -3.043
            },
            14: {
                x: 972.472,
                y: 397.209,
                kx: -.103,
                ky: -3.038
            },
            15: {
                x: 972.346,
                y: 398.414,
                kx: -.107,
                ky: -3.034
            },
            16: {
                x: 972.218,
                y: 399.484,
                kx: -.111,
                ky: -3.031
            },
            17: {
                x: 972.106,
                y: 400.46,
                kx: -.114,
                ky: -3.028
            },
            18: {
                x: 972.051,
                y: 401.272,
                kx: -.116,
                ky: -3.025
            },
            19: {
                x: 971.962,
                y: 401.89,
                kx: -.118,
                ky: -3.023
            },
            20: {
                x: 971.9,
                y: 402.384,
                kx: -.12,
                ky: -3.022
            },
            21: {
                x: 971.834,
                y: 402.793,
                kx: -.121,
                ky: -3.02
            },
            22: {
                x: 971.809,
                y: 402.984,
                kx: -.122
            },
            23: {
                x: 971.65,
                y: 403,
                ky: -3.019
            },
            24: {
                x: 971.868,
                y: 401.501,
                kx: -.117,
                ky: -3.025
            },
            25: {
                x: 972.086,
                y: 399.901,
                kx: -.112,
                ky: -3.03
            },
            26: {
                x: 972.266,
                y: 398.268,
                kx: -.107,
                ky: -3.035
            },
            27: {
                x: 972.431,
                y: 396.68,
                kx: -.102,
                ky: -3.04
            },
            28: {
                x: 972.575,
                y: 395.099,
                kx: -.097,
                ky: -3.045
            },
            29: {
                x: 972.745,
                y: 393.492,
                kx: -.092,
                ky: -3.05
            },
            30: {
                x: 972.865,
                y: 391.881,
                kx: -.087,
                ky: -3.055
            },
            31: {
                x: 973.035,
                y: 390.27,
                kx: -.081,
                ky: -3.06
            },
            32: {
                x: 973.175,
                y: 388.697,
                kx: -.076,
                ky: -3.065
            },
            33: {
                x: 973.277,
                y: 387.091,
                kx: -.071,
                ky: -3.07
            },
            34: {
                x: 973.408,
                y: 385.493,
                kx: -.066,
                ky: -3.075
            },
            35: {
                x: 973.538,
                y: 383.895,
                kx: -.061,
                ky: -3.08
            },
            36: {
                x: 973.575,
                y: 382.229,
                kx: -.056,
                ky: -3.086
            },
            37: {
                x: 973.631,
                y: 380.6,
                kx: -.051,
                ky: -3.091
            },
            38: {
                x: 973.717,
                y: 379.03,
                kx: -.046,
                ky: -3.096
            },
            39: {
                x: 973.815,
                y: 377.377,
                kx: -.041,
                ky: -3.101
            },
            40: {
                x: 973.847,
                y: 375.768,
                kx: -.036,
                ky: -3.106
            },
            41: {
                x: 973.944,
                y: 374.161,
                kx: -.031,
                ky: -3.111
            },
            42: {
                x: 973.976,
                y: 372.598,
                kx: -.025,
                ky: -3.116
            },
            43: {
                x: 974.028,
                y: 370.973,
                kx: -.02,
                ky: -3.121
            },
            44: {
                x: 974.051,
                y: 369.385,
                kx: -.015,
                ky: -3.126
            },
            45: {
                x: 974.053,
                y: 367.757,
                kx: -.01,
                ky: -3.131
            },
            46: {
                x: 974.081,
                y: 366.151,
                kx: -.005,
                ky: -3.136
            },
            47: {
                x: 974.15,
                y: 364.5,
                kx: 0,
                ky: 3.142
            }
        }).addTimedChild(instance19, 0, 48, {
            0: {
                x: 106,
                y: 366,
                r: 0
            },
            1: {
                x: 106.077,
                y: 370.251,
                r: -.013
            },
            2: {
                x: 106.174,
                y: 374.303,
                r: -.026
            },
            3: {
                x: 106.283,
                y: 378.118,
                r: -.038
            },
            4: {
                x: 106.463,
                y: 381.808,
                r: -.05
            },
            5: {
                x: 106.663,
                y: 385.272,
                r: -.061
            },
            6: {
                x: 106.888,
                y: 388.52,
                r: -.071
            },
            7: {
                x: 107.176,
                y: 391.708,
                r: -.081
            },
            8: {
                x: 107.45,
                y: 394.601,
                r: -.09
            },
            9: {
                x: 107.701,
                y: 397.34,
                r: -.099
            },
            10: {
                x: 107.985,
                y: 399.843,
                r: -.107
            },
            11: {
                x: 108.246,
                y: 402.165,
                r: -.114
            },
            12: {
                x: 108.496,
                y: 404.3,
                r: -.121
            },
            13: {
                x: 108.725,
                y: 406.26,
                r: -.127
            },
            14: {
                x: 108.997,
                y: 408.048,
                r: -.133
            },
            15: {
                x: 109.208,
                y: 409.622,
                r: -.138
            },
            16: {
                x: 109.405,
                y: 411.026,
                r: -.143
            },
            17: {
                x: 109.593,
                y: 412.22,
                r: -.146
            },
            18: {
                x: 109.725,
                y: 413.249,
                r: -.15
            },
            19: {
                x: 109.85,
                y: 414.073,
                r: -.152
            },
            20: {
                x: 109.97,
                y: 414.738,
                r: -.154
            },
            21: {
                x: 110.031,
                y: 415.199,
                r: -.156
            },
            22: {
                x: 110.085,
                y: 415.456,
                r: -.157
            },
            23: {
                x: 110,
                y: 415.45
            },
            24: {
                x: 109.788,
                y: 413.448,
                r: -.151
            },
            25: {
                x: 109.462,
                y: 411.392,
                r: -.144
            },
            26: {
                x: 109.181,
                y: 409.368,
                r: -.137
            },
            27: {
                x: 108.894,
                y: 407.325,
                r: -.131
            },
            28: {
                x: 108.653,
                y: 405.262,
                r: -.124
            },
            29: {
                x: 108.364,
                y: 403.186,
                r: -.118
            },
            30: {
                x: 108.108,
                y: 401.143,
                r: -.111
            },
            31: {
                x: 107.908,
                y: 399.072,
                r: -.105
            },
            32: {
                x: 107.706,
                y: 397.045,
                r: -.098
            },
            33: {
                x: 107.5,
                y: 394.998,
                r: -.092
            },
            34: {
                x: 107.286,
                y: 392.927,
                r: -.085
            },
            35: {
                x: 107.063,
                y: 390.794,
                r: -.079
            },
            36: {
                x: 106.899,
                y: 388.695,
                r: -.072
            },
            37: {
                x: 106.778,
                y: 386.621,
                r: -.065
            },
            38: {
                x: 106.653,
                y: 384.578,
                r: -.059
            },
            39: {
                x: 106.517,
                y: 382.523,
                r: -.052
            },
            40: {
                x: 106.389,
                y: 380.447,
                r: -.046
            },
            41: {
                x: 106.305,
                y: 378.395,
                r: -.039
            },
            42: {
                x: 106.223,
                y: 376.329,
                r: -.033
            },
            43: {
                x: 106.182,
                y: 374.251,
                r: -.026
            },
            44: {
                x: 106.092,
                y: 372.153,
                r: -.02
            },
            45: {
                x: 106.098,
                y: 370.086,
                r: -.013
            },
            46: {
                x: 106.052,
                y: 368.042,
                r: -.007
            },
            47: {
                x: 106,
                y: 366,
                r: 0
            }
        }).addTimedChild(instance18, 0, 48, {
            0: {
                x: 259,
                y: 271,
                r: 0
            },
            1: {
                x: 259.298,
                y: 271.03,
                r: .001
            },
            2: {
                x: 259.551,
                y: 271.015,
                r: .002
            },
            3: {
                x: 259.853,
                y: 271.05,
                r: .003
            },
            4: {
                x: 260.055,
                y: 271.034,
                r: .004
            },
            5: {
                x: 260.357,
                y: 271.069,
                r: .005
            },
            6: {
                x: 260.606,
                y: 271.049,
                r: .007
            },
            7: {
                x: 260.908,
                y: 271.034,
                r: .008
            },
            8: {
                x: 261.156,
                y: 271.064,
                r: .009
            },
            9: {
                x: 261.45,
                y: 271.048,
                r: .01
            },
            10: {
                x: 261.703,
                y: 271.083,
                r: .011
            },
            11: {
                x: 262.001,
                y: 271.063,
                r: .012
            },
            12: {
                x: 262.203,
                y: 271.048,
                r: .013
            },
            13: {
                x: 262.502,
                y: 271.028,
                r: .014
            },
            14: {
                x: 262.75,
                y: 271.059,
                r: .015
            },
            15: {
                x: 263.048,
                y: 271.039,
                r: .016
            },
            16: {
                x: 263.343,
                y: 271.065,
                r: .018
            },
            17: {
                x: 263.591,
                y: 271.096,
                r: .019
            },
            18: {
                x: 263.889,
                y: 271.076,
                r: .02
            },
            19: {
                x: 264.18,
                y: 271.106,
                r: .021
            },
            20: {
                x: 264.378,
                y: 271.087,
                r: .022
            },
            21: {
                x: 264.672,
                y: 271.113,
                r: .023
            },
            22: {
                x: 264.967,
                y: 271.139,
                r: .024
            },
            23: {
                x: 265.15,
                y: 271.05,
                r: .025
            },
            24: {
                x: 264.881,
                y: 271.075,
                r: .024
            },
            25: {
                x: 264.621,
                y: 271.092,
                r: .023
            },
            26: {
                x: 264.352,
                y: 271.058,
                r: .022
            },
            27: {
                x: 264.137,
                y: 271.029,
                r: .021
            },
            28: {
                x: 263.873,
                y: 271.05,
                r: .02
            },
            29: {
                x: 263.612,
                y: 271.067,
                r: .019
            },
            30: {
                x: 263.344,
                y: 271.034,
                r: .018
            },
            31: {
                x: 263.075,
                y: 271,
                r: .017
            },
            32: {
                x: 262.81,
                y: 271.071,
                r: .016
            },
            33: {
                x: 262.542,
                y: 271.038,
                r: .015
            },
            34: {
                x: 262.273,
                y: 271.004,
                r: .014
            },
            35: {
                x: 262.054,
                y: 271.021,
                r: .013
            },
            36: {
                x: 261.786,
                y: 271.038,
                r: .012
            },
            37: {
                x: 261.517,
                y: 271.005,
                r: .011
            },
            38: {
                x: 261.253,
                y: 270.967,
                r: .009
            },
            39: {
                x: 260.98,
                y: 271.03,
                r: .008
            },
            40: {
                x: 260.715,
                y: 271.001,
                r: .007
            },
            41: {
                x: 260.442,
                y: 270.963,
                r: .006
            },
            42: {
                x: 260.224,
                y: 271.03,
                r: .005
            },
            43: {
                x: 260.001,
                y: 270.992,
                r: .004
            },
            44: {
                x: 259.732,
                y: 270.959,
                r: .003
            },
            45: {
                x: 259.46,
                y: 270.972,
                r: .002
            },
            46: {
                x: 259.183,
                y: 270.988,
                r: .001
            },
            47: {
                x: 259,
                y: 271,
                r: 0
            }
        }).addTimedChild(instance17, 0, 48, {
            0: {
                x: 106,
                y: 427
            },
            1: {
                x: 108.3,
                y: 429.6
            },
            2: {
                x: 110.5,
                y: 432.05
            },
            3: {
                x: 112.6,
                y: 434.4
            },
            4: {
                x: 114.55,
                y: 436.65
            },
            5: {
                x: 116.45,
                y: 438.8
            },
            6: {
                x: 118.25,
                y: 440.8
            },
            7: {
                x: 119.95,
                y: 442.7
            },
            8: {
                x: 121.5,
                y: 444.45
            },
            9: {
                x: 123,
                y: 446.15
            },
            10: {
                x: 124.35,
                y: 447.7
            },
            11: {
                x: 125.65,
                y: 449.15
            },
            12: {
                x: 126.8,
                y: 450.45
            },
            13: {
                x: 127.9,
                y: 451.65
            },
            14: {
                x: 128.85,
                y: 452.75
            },
            15: {
                x: 129.75,
                y: 453.7
            },
            16: {
                x: 130.5,
                y: 454.6
            },
            17: {
                x: 131.15,
                y: 455.35
            },
            18: {
                x: 131.7,
                y: 455.95
            },
            19: {
                x: 132.2,
                y: 456.5
            },
            20: {
                x: 132.55,
                y: 456.9
            },
            21: {
                x: 132.8,
                y: 457.15
            },
            22: {
                x: 132.95,
                y: 457.35
            },
            23: {
                x: 133,
                y: 457.4
            },
            24: {
                x: 131.9,
                y: 456.15
            },
            25: {
                x: 130.75,
                y: 454.85
            },
            26: {
                x: 129.65,
                y: 453.6
            },
            27: {
                x: 128.5,
                y: 452.35
            },
            28: {
                x: 127.4,
                y: 451.05
            },
            29: {
                x: 126.25,
                y: 449.8
            },
            30: {
                x: 125.15,
                y: 448.55
            },
            31: {
                x: 124,
                y: 447.25
            },
            32: {
                x: 122.9,
                y: 446
            },
            33: {
                x: 121.75,
                y: 444.75
            },
            34: {
                x: 120.65,
                y: 443.45
            },
            35: {
                x: 119.5,
                y: 442.2
            },
            36: {
                x: 118.4,
                y: 440.95
            },
            37: {
                x: 117.25,
                y: 439.65
            },
            38: {
                x: 116.15,
                y: 438.4
            },
            39: {
                x: 115,
                y: 437.15
            },
            40: {
                x: 113.9,
                y: 435.85
            },
            41: {
                x: 112.75,
                y: 434.6
            },
            42: {
                x: 111.65,
                y: 433.35
            },
            43: {
                x: 110.5,
                y: 432.05
            },
            44: {
                x: 109.4,
                y: 430.8
            },
            45: {
                x: 108.25,
                y: 429.55
            },
            46: {
                x: 107.15,
                y: 428.25
            },
            47: {
                x: 106,
                y: 427
            }
        }).addTimedChild(instance16, 0, 48, {
            0: {
                x: 975,
                y: 426,
                kx: 0,
                ky: 3.142
            },
            1: {
                x: 972.353,
                y: 427.266,
                kx: .007,
                ky: 3.134
            },
            2: {
                x: 969.769,
                y: 428.39,
                kx: .014,
                ky: 3.127
            },
            3: {
                x: 967.36,
                y: 429.442,
                kx: .021,
                ky: 3.121
            },
            4: {
                x: 965.072,
                y: 430.523,
                kx: .027,
                ky: 3.114
            },
            5: {
                x: 962.868,
                y: 431.554,
                kx: .033,
                ky: 3.108
            },
            6: {
                x: 960.747,
                y: 432.484,
                kx: .039,
                ky: 3.102
            },
            7: {
                x: 958.84,
                y: 433.376,
                kx: .045,
                ky: 3.097
            },
            8: {
                x: 957.018,
                y: 434.204,
                kx: .05,
                ky: 3.092
            },
            9: {
                x: 955.237,
                y: 434.967,
                kx: .054,
                ky: 3.087
            },
            10: {
                x: 953.671,
                y: 435.728,
                kx: .059,
                ky: 3.083
            },
            11: {
                x: 952.16,
                y: 436.331,
                kx: .063,
                ky: 3.079
            },
            12: {
                x: 950.771,
                y: 436.967,
                kx: .067,
                ky: 3.075
            },
            13: {
                x: 949.539,
                y: 437.53,
                kx: .07,
                ky: 3.071
            },
            14: {
                x: 948.4,
                y: 438.069,
                kx: .073,
                ky: 3.068
            },
            15: {
                x: 947.425,
                y: 438.521,
                kx: .076,
                ky: 3.066
            },
            16: {
                x: 946.486,
                y: 438.912,
                kx: .078,
                ky: 3.063
            },
            17: {
                x: 945.776,
                y: 439.223,
                kx: .081,
                ky: 3.061
            },
            18: {
                x: 945.088,
                y: 439.517,
                kx: .082,
                ky: 3.059
            },
            19: {
                x: 944.543,
                y: 439.787,
                kx: .084,
                ky: 3.058
            },
            20: {
                x: 944.141,
                y: 439.982,
                kx: .085,
                ky: 3.057
            },
            21: {
                x: 943.868,
                y: 440.146,
                kx: .086,
                ky: 3.056
            },
            22: {
                x: 943.681,
                y: 440.201,
                ky: 3.055
            },
            23: {
                x: 943.6,
                y: 440.2
            },
            24: {
                x: 944.9,
                y: 439.641,
                kx: .083,
                ky: 3.059
            },
            25: {
                x: 946.251,
                y: 439.033,
                kx: .079,
                ky: 3.062
            },
            26: {
                x: 947.566,
                y: 438.475,
                kx: .076,
                ky: 3.066
            },
            27: {
                x: 948.844,
                y: 437.888,
                kx: .072,
                ky: 3.07
            },
            28: {
                x: 950.145,
                y: 437.274,
                kx: .068,
                ky: 3.073
            },
            29: {
                x: 951.502,
                y: 436.695,
                kx: .065,
                ky: 3.077
            },
            30: {
                x: 952.794,
                y: 436.109,
                kx: .061,
                ky: 3.08
            },
            31: {
                x: 954.059,
                y: 435.51,
                kx: .058,
                ky: 3.084
            },
            32: {
                x: 955.373,
                y: 434.911,
                kx: .054,
                ky: 3.088
            },
            33: {
                x: 956.701,
                y: 434.363,
                kx: .05,
                ky: 3.091
            },
            34: {
                x: 958.001,
                y: 433.757,
                kx: .047,
                ky: 3.095
            },
            35: {
                x: 959.314,
                y: 433.167,
                kx: .043,
                ky: 3.098
            },
            36: {
                x: 960.635,
                y: 432.498,
                kx: .04,
                ky: 3.102
            },
            37: {
                x: 961.891,
                y: 431.922,
                kx: .036,
                ky: 3.106
            },
            38: {
                x: 963.275,
                y: 431.318,
                kx: .032,
                ky: 3.109
            },
            39: {
                x: 964.546,
                y: 430.743,
                kx: .029,
                ky: 3.113
            },
            40: {
                x: 965.86,
                y: 430.147,
                kx: .025,
                ky: 3.116
            },
            41: {
                x: 967.215,
                y: 429.58,
                kx: .022,
                ky: 3.12
            },
            42: {
                x: 968.5,
                y: 428.97,
                kx: .018,
                ky: 3.124
            },
            43: {
                x: 969.791,
                y: 428.396,
                kx: .014,
                ky: 3.127
            },
            44: {
                x: 971.061,
                y: 427.78,
                kx: .011,
                ky: 3.131
            },
            45: {
                x: 972.409,
                y: 427.186,
                kx: .007,
                ky: 3.134
            },
            46: {
                x: 973.707,
                y: 426.592,
                kx: .004,
                ky: 3.138
            },
            47: {
                x: 975,
                y: 426,
                kx: 0,
                ky: 3.142
            }
        }).addTimedChild(instance15, 0, 48, {
            0: {
                x: 291,
                y: 79,
                r: 0
            },
            1: {
                x: 291.733,
                y: 78.548,
                r: .002
            },
            2: {
                x: 292.42,
                y: 78.098,
                r: .004
            },
            3: {
                x: 293.102,
                y: 77.6,
                r: .006
            },
            4: {
                x: 293.785,
                y: 77.099,
                r: .008
            },
            5: {
                x: 294.516,
                y: 76.601,
                r: .01
            },
            6: {
                x: 295.195,
                y: 76.198,
                r: .012
            },
            7: {
                x: 295.877,
                y: 75.697,
                r: .014
            },
            8: {
                x: 296.605,
                y: 75.198,
                r: .017
            },
            9: {
                x: 297.278,
                y: 74.694,
                r: .019
            },
            10: {
                x: 298.006,
                y: 74.245,
                r: .021
            },
            11: {
                x: 298.68,
                y: 73.791,
                r: .023
            },
            12: {
                x: 299.449,
                y: 73.286,
                r: .025
            },
            13: {
                x: 300.122,
                y: 72.786,
                r: .027
            },
            14: {
                x: 300.841,
                y: 72.381,
                r: .029
            },
            15: {
                x: 301.561,
                y: 71.875,
                r: .031
            },
            16: {
                x: 302.229,
                y: 71.374,
                r: .033
            },
            17: {
                x: 302.944,
                y: 70.918,
                r: .035
            },
            18: {
                x: 303.659,
                y: 70.461,
                r: .037
            },
            19: {
                x: 304.373,
                y: 69.959,
                r: .039
            },
            20: {
                x: 305.088,
                y: 69.502,
                r: .041
            },
            21: {
                x: 305.799,
                y: 68.995,
                r: .043
            },
            22: {
                x: 306.508,
                y: 68.591,
                r: .045
            },
            23: {
                x: 307.15,
                y: 68.05,
                r: .048
            },
            24: {
                x: 306.48,
                y: 68.54,
                r: .046
            },
            25: {
                x: 305.86,
                y: 68.934,
                r: .044
            },
            26: {
                x: 305.145,
                y: 69.425,
                r: .042
            },
            27: {
                x: 304.475,
                y: 69.914,
                r: .04
            },
            28: {
                x: 303.804,
                y: 70.359,
                r: .038
            },
            29: {
                x: 303.08,
                y: 70.797,
                r: .036
            },
            30: {
                x: 302.455,
                y: 71.236,
                r: .034
            },
            31: {
                x: 301.735,
                y: 71.731,
                r: .032
            },
            32: {
                x: 301.06,
                y: 72.119,
                r: .03
            },
            33: {
                x: 300.431,
                y: 72.607,
                r: .028
            },
            34: {
                x: 299.707,
                y: 73.095,
                r: .026
            },
            35: {
                x: 299.072,
                y: 73.537,
                r: .024
            },
            36: {
                x: 298.393,
                y: 73.974,
                r: .022
            },
            37: {
                x: 297.664,
                y: 74.412,
                r: .02
            },
            38: {
                x: 297.03,
                y: 74.898,
                r: .018
            },
            39: {
                x: 296.345,
                y: 75.34,
                r: .016
            },
            40: {
                x: 295.661,
                y: 75.776,
                r: .014
            },
            41: {
                x: 295.023,
                y: 76.262,
                r: .012
            },
            42: {
                x: 294.335,
                y: 76.697,
                r: .01
            },
            43: {
                x: 293.695,
                y: 77.188,
                r: .008
            },
            44: {
                x: 293.007,
                y: 77.623,
                r: .006
            },
            45: {
                x: 292.318,
                y: 78.109,
                r: .004
            },
            46: {
                x: 291.675,
                y: 78.543,
                r: .002
            },
            47: {
                x: 291,
                y: 79,
                r: 0
            }
        }).addTimedChild(instance14, 0, 48, {
            0: {
                x: 290,
                y: 17,
                r: 0
            },
            1: {
                x: 290.811,
                y: 16.547,
                r: .002
            },
            2: {
                x: 291.676,
                y: 16.095,
                r: .004
            },
            3: {
                x: 292.486,
                y: 15.596,
                r: .006
            },
            4: {
                x: 293.296,
                y: 15.093,
                r: .008
            },
            5: {
                x: 294.157,
                y: 14.645,
                r: .01
            },
            6: {
                x: 294.963,
                y: 14.142,
                r: .012
            },
            7: {
                x: 295.773,
                y: 13.639,
                r: .014
            },
            8: {
                x: 296.629,
                y: 13.19,
                r: .017
            },
            9: {
                x: 297.481,
                y: 12.687,
                r: .019
            },
            10: {
                x: 298.287,
                y: 12.188,
                r: .021
            },
            11: {
                x: 299.139,
                y: 11.784,
                r: .023
            },
            12: {
                x: 299.936,
                y: 11.281,
                r: .025
            },
            13: {
                x: 300.837,
                y: 10.832,
                r: .027
            },
            14: {
                x: 301.635,
                y: 10.328,
                r: .029
            },
            15: {
                x: 302.432,
                y: 9.875,
                r: .031
            },
            16: {
                x: 303.329,
                y: 9.425,
                r: .033
            },
            17: {
                x: 304.122,
                y: 8.921,
                r: .035
            },
            18: {
                x: 304.965,
                y: 8.467,
                r: .037
            },
            19: {
                x: 305.857,
                y: 8.018,
                r: .039
            },
            20: {
                x: 306.65,
                y: 7.514,
                r: .041
            },
            21: {
                x: 307.488,
                y: 7.06,
                r: .043
            },
            22: {
                x: 308.377,
                y: 6.61,
                r: .045
            },
            23: {
                x: 309.1,
                y: 6.1,
                r: .048
            },
            24: {
                x: 308.307,
                y: 6.587,
                r: .046
            },
            25: {
                x: 307.515,
                y: 6.978,
                r: .044
            },
            26: {
                x: 306.727,
                y: 7.465,
                r: .042
            },
            27: {
                x: 305.934,
                y: 7.902,
                r: .04
            },
            28: {
                x: 305.141,
                y: 8.343,
                r: .038
            },
            29: {
                x: 304.294,
                y: 8.78,
                r: .036
            },
            30: {
                x: 303.447,
                y: 9.217,
                r: .034
            },
            31: {
                x: 302.654,
                y: 9.658,
                r: .032
            },
            32: {
                x: 301.857,
                y: 10.145,
                r: .03
            },
            33: {
                x: 301.055,
                y: 10.581,
                r: .028
            },
            34: {
                x: 300.257,
                y: 11.018,
                r: .026
            },
            35: {
                x: 299.501,
                y: 11.509,
                r: .024
            },
            36: {
                x: 298.698,
                y: 11.946,
                r: .022
            },
            37: {
                x: 297.896,
                y: 12.382,
                r: .02
            },
            38: {
                x: 297.09,
                y: 12.819,
                r: .018
            },
            39: {
                x: 296.333,
                y: 13.31,
                r: .016
            },
            40: {
                x: 295.526,
                y: 13.797,
                r: .014
            },
            41: {
                x: 294.715,
                y: 14.183,
                r: .012
            },
            42: {
                x: 293.903,
                y: 14.669,
                r: .01
            },
            43: {
                x: 293.091,
                y: 15.16,
                r: .008
            },
            44: {
                x: 292.33,
                y: 15.597,
                r: .006
            },
            45: {
                x: 291.519,
                y: 16.083,
                r: .004
            },
            46: {
                x: 290.752,
                y: 16.52,
                r: .002
            },
            47: {
                x: 290,
                y: 17,
                r: 0
            }
        }).addTimedChild(instance13, 0, 48, {
            0: {
                x: 913,
                y: 492,
                kx: 0,
                ky: 3.142
            },
            1: {
                x: 910.891,
                y: 493.67,
                kx: .007,
                ky: 3.134
            },
            2: {
                x: 908.824,
                y: 495.224,
                kx: .014,
                ky: 3.127
            },
            3: {
                x: 906.866,
                y: 496.684,
                kx: .021,
                ky: 3.121
            },
            4: {
                x: 905.057,
                y: 498.1,
                kx: .027,
                ky: 3.114
            },
            5: {
                x: 903.263,
                y: 499.443,
                kx: .033,
                ky: 3.108
            },
            6: {
                x: 901.583,
                y: 500.714,
                kx: .039,
                ky: 3.102
            },
            7: {
                x: 899.996,
                y: 501.977,
                kx: .045,
                ky: 3.097
            },
            8: {
                x: 898.522,
                y: 503.103,
                kx: .05,
                ky: 3.092
            },
            9: {
                x: 897.12,
                y: 504.143,
                kx: .054,
                ky: 3.087
            },
            10: {
                x: 895.809,
                y: 505.161,
                kx: .059,
                ky: 3.083
            },
            11: {
                x: 894.534,
                y: 506.099,
                kx: .063,
                ky: 3.079
            },
            12: {
                x: 893.458,
                y: 506.902,
                kx: .067,
                ky: 3.075
            },
            13: {
                x: 892.467,
                y: 507.711,
                kx: .07,
                ky: 3.071
            },
            14: {
                x: 891.496,
                y: 508.428,
                kx: .073,
                ky: 3.068
            },
            15: {
                x: 890.717,
                y: 509.038,
                kx: .076,
                ky: 3.066
            },
            16: {
                x: 889.951,
                y: 509.569,
                kx: .078,
                ky: 3.063
            },
            17: {
                x: 889.341,
                y: 510.05,
                kx: .081,
                ky: 3.061
            },
            18: {
                x: 888.78,
                y: 510.495,
                kx: .082,
                ky: 3.059
            },
            19: {
                x: 888.39,
                y: 510.847,
                kx: .084,
                ky: 3.058
            },
            20: {
                x: 888.019,
                y: 511.057,
                kx: .085,
                ky: 3.057
            },
            21: {
                x: 887.805,
                y: 511.267,
                kx: .086,
                ky: 3.056
            },
            22: {
                x: 887.653,
                y: 511.399,
                ky: 3.055
            },
            23: {
                x: 887.5,
                y: 511.3
            },
            24: {
                x: 888.595,
                y: 510.538,
                kx: .083,
                ky: 3.059
            },
            25: {
                x: 889.69,
                y: 509.676,
                kx: .079,
                ky: 3.062
            },
            26: {
                x: 890.751,
                y: 508.912,
                kx: .076,
                ky: 3.066
            },
            27: {
                x: 891.827,
                y: 508.071,
                kx: .072,
                ky: 3.07
            },
            28: {
                x: 892.874,
                y: 507.25,
                kx: .068,
                ky: 3.073
            },
            29: {
                x: 893.978,
                y: 506.414,
                kx: .065,
                ky: 3.077
            },
            30: {
                x: 895.019,
                y: 505.621,
                kx: .061,
                ky: 3.08
            },
            31: {
                x: 896.133,
                y: 504.813,
                kx: .058,
                ky: 3.084
            },
            32: {
                x: 897.197,
                y: 504.004,
                kx: .054,
                ky: 3.088
            },
            33: {
                x: 898.276,
                y: 503.193,
                kx: .05,
                ky: 3.091
            },
            34: {
                x: 899.277,
                y: 502.377,
                kx: .047,
                ky: 3.095
            },
            35: {
                x: 900.394,
                y: 501.573,
                kx: .043,
                ky: 3.098
            },
            36: {
                x: 901.418,
                y: 500.791,
                kx: .04,
                ky: 3.102
            },
            37: {
                x: 902.477,
                y: 499.951,
                kx: .036,
                ky: 3.106
            },
            38: {
                x: 903.518,
                y: 499.133,
                kx: .032,
                ky: 3.109
            },
            39: {
                x: 904.593,
                y: 498.341,
                kx: .029,
                ky: 3.113
            },
            40: {
                x: 905.662,
                y: 497.577,
                kx: .025,
                ky: 3.116
            },
            41: {
                x: 906.675,
                y: 496.743,
                kx: .022,
                ky: 3.12
            },
            42: {
                x: 907.768,
                y: 495.964,
                kx: .018,
                ky: 3.124
            },
            43: {
                x: 908.818,
                y: 495.121,
                kx: .014,
                ky: 3.127
            },
            44: {
                x: 909.896,
                y: 494.335,
                kx: .011,
                ky: 3.131
            },
            45: {
                x: 910.905,
                y: 493.569,
                kx: .007,
                ky: 3.134
            },
            46: {
                x: 911.965,
                y: 492.753,
                kx: .004,
                ky: 3.138
            },
            47: {
                x: 913,
                y: 492,
                kx: 0,
                ky: 3.142
            }
        }).addTimedChild(instance12, 0, 48, {
            0: {
                x: 543,
                y: 189,
                r: 0
            },
            1: {
                x: 543.502,
                y: 189.066,
                r: .002
            },
            2: {
                x: 543.963,
                y: 189.084,
                r: .004
            },
            3: {
                x: 544.412,
                y: 189.108,
                r: .006
            },
            4: {
                x: 544.865,
                y: 189.174,
                r: .008
            },
            5: {
                x: 545.314,
                y: 189.198,
                r: .01
            },
            6: {
                x: 545.809,
                y: 189.261,
                r: .012
            },
            7: {
                x: 546.261,
                y: 189.326,
                r: .014
            },
            8: {
                x: 546.702,
                y: 189.347,
                r: .017
            },
            9: {
                x: 547.188,
                y: 189.407,
                r: .019
            },
            10: {
                x: 547.679,
                y: 189.428,
                r: .021
            },
            11: {
                x: 548.115,
                y: 189.438,
                r: .023
            },
            12: {
                x: 548.543,
                y: 189.495,
                r: .025
            },
            13: {
                x: 549.025,
                y: 189.513,
                r: .027
            },
            14: {
                x: 549.503,
                y: 189.57,
                r: .029
            },
            15: {
                x: 549.98,
                y: 189.577,
                r: .031
            },
            16: {
                x: 550.455,
                y: 189.643,
                r: .033
            },
            17: {
                x: 550.924,
                y: 189.697,
                r: .035
            },
            18: {
                x: 551.394,
                y: 189.751,
                r: .037
            },
            19: {
                x: 551.86,
                y: 189.813,
                r: .039
            },
            20: {
                x: 552.279,
                y: 189.817,
                r: .041
            },
            21: {
                x: 552.74,
                y: 189.869,
                r: .043
            },
            22: {
                x: 553.198,
                y: 189.928,
                r: .045
            },
            23: {
                x: 553.65,
                y: 189.9,
                r: .048
            },
            24: {
                x: 553.218,
                y: 189.899,
                r: .046
            },
            25: {
                x: 552.784,
                y: 189.856,
                r: .044
            },
            26: {
                x: 552.31,
                y: 189.808,
                r: .042
            },
            27: {
                x: 551.879,
                y: 189.757,
                r: .04
            },
            28: {
                x: 551.444,
                y: 189.714,
                r: .038
            },
            29: {
                x: 551.004,
                y: 189.71,
                r: .036
            },
            30: {
                x: 550.563,
                y: 189.656,
                r: .034
            },
            31: {
                x: 550.129,
                y: 189.613,
                r: .032
            },
            32: {
                x: 549.639,
                y: 189.559,
                r: .03
            },
            33: {
                x: 549.24,
                y: 189.552,
                r: .028
            },
            34: {
                x: 548.8,
                y: 189.498,
                r: .026
            },
            35: {
                x: 548.34,
                y: 189.447,
                r: .024
            },
            36: {
                x: 547.891,
                y: 189.44,
                r: .022
            },
            37: {
                x: 547.443,
                y: 189.383,
                r: .02
            },
            38: {
                x: 546.985,
                y: 189.373,
                r: .018
            },
            39: {
                x: 546.525,
                y: 189.322,
                r: .016
            },
            40: {
                x: 546.118,
                y: 189.262,
                r: .014
            },
            41: {
                x: 545.653,
                y: 189.249,
                r: .012
            },
            42: {
                x: 545.237,
                y: 189.187,
                r: .01
            },
            43: {
                x: 544.769,
                y: 189.182,
                r: .008
            },
            44: {
                x: 544.353,
                y: 189.119,
                r: .006
            },
            45: {
                x: 543.888,
                y: 189.107,
                r: .004
            },
            46: {
                x: 543.464,
                y: 189.041,
                r: .002
            },
            47: {
                x: 543,
                y: 189,
                r: 0
            }
        }).addTimedChild(instance11, 0, 48, {
            0: {
                x: 447,
                y: 190,
                r: 0
            },
            1: {
                x: 447.502,
                y: 189.868,
                r: .002
            },
            2: {
                x: 447.96,
                y: 189.689,
                r: .004
            },
            3: {
                x: 448.409,
                y: 189.563,
                r: .006
            },
            4: {
                x: 448.911,
                y: 189.381,
                r: .008
            },
            5: {
                x: 449.36,
                y: 189.256,
                r: .01
            },
            6: {
                x: 449.805,
                y: 189.071,
                r: .012
            },
            7: {
                x: 450.307,
                y: 188.889,
                r: .014
            },
            8: {
                x: 450.749,
                y: 188.711,
                r: .017
            },
            9: {
                x: 451.237,
                y: 188.623,
                r: .019
            },
            10: {
                x: 451.679,
                y: 188.445,
                r: .021
            },
            11: {
                x: 452.167,
                y: 188.307,
                r: .023
            },
            12: {
                x: 452.599,
                y: 188.116,
                r: .025
            },
            13: {
                x: 453.034,
                y: 187.935,
                r: .027
            },
            14: {
                x: 453.515,
                y: 187.794,
                r: .029
            },
            15: {
                x: 453.996,
                y: 187.653,
                r: .031
            },
            16: {
                x: 454.475,
                y: 187.519,
                r: .033
            },
            17: {
                x: 454.899,
                y: 187.326,
                r: .035
            },
            18: {
                x: 455.374,
                y: 187.182,
                r: .037
            },
            19: {
                x: 455.845,
                y: 186.995,
                r: .039
            },
            20: {
                x: 456.32,
                y: 186.851,
                r: .041
            },
            21: {
                x: 456.788,
                y: 186.705,
                r: .043
            },
            22: {
                x: 457.252,
                y: 186.565,
                r: .045
            },
            23: {
                x: 457.7,
                y: 186.35,
                r: .048
            },
            24: {
                x: 457.263,
                y: 186.539,
                r: .046
            },
            25: {
                x: 456.822,
                y: 186.735,
                r: .044
            },
            26: {
                x: 456.342,
                y: 186.828,
                r: .042
            },
            27: {
                x: 455.955,
                y: 187.017,
                r: .04
            },
            28: {
                x: 455.465,
                y: 187.163,
                r: .038
            },
            29: {
                x: 455.02,
                y: 187.299,
                r: .036
            },
            30: {
                x: 454.576,
                y: 187.436,
                r: .034
            },
            31: {
                x: 454.136,
                y: 187.582,
                r: .032
            },
            32: {
                x: 453.692,
                y: 187.768,
                r: .03
            },
            33: {
                x: 453.24,
                y: 187.902,
                r: .028
            },
            34: {
                x: 452.796,
                y: 188.038,
                r: .026
            },
            35: {
                x: 452.385,
                y: 188.226,
                r: .024
            },
            36: {
                x: 451.883,
                y: 188.36,
                r: .022
            },
            37: {
                x: 451.432,
                y: 188.543,
                r: .02
            },
            38: {
                x: 451.024,
                y: 188.624,
                r: .018
            },
            39: {
                x: 450.563,
                y: 188.812,
                r: .016
            },
            40: {
                x: 450.104,
                y: 188.992,
                r: .014
            },
            41: {
                x: 449.689,
                y: 189.12,
                r: .012
            },
            42: {
                x: 449.224,
                y: 189.248,
                r: .01
            },
            43: {
                x: 448.806,
                y: 189.433,
                r: .008
            },
            44: {
                x: 448.341,
                y: 189.561,
                r: .006
            },
            45: {
                x: 447.875,
                y: 189.739,
                r: .004
            },
            46: {
                x: 447.453,
                y: 189.864,
                r: .002
            },
            47: {
                x: 447,
                y: 190,
                r: 0
            }
        }).addTimedChild(instance10, 0, 48, {
            0: {
                x: 186,
                y: 494,
                r: 0
            },
            1: {
                x: 190.362,
                y: 496.66,
                r: .022
            },
            2: {
                x: 194.623,
                y: 499.219,
                r: .044
            },
            3: {
                x: 198.662,
                y: 501.753,
                r: .064
            },
            4: {
                x: 202.542,
                y: 504.131,
                r: .083
            },
            5: {
                x: 206.322,
                y: 506.444,
                r: .101
            },
            6: {
                x: 209.865,
                y: 508.653,
                r: .119
            },
            7: {
                x: 213.274,
                y: 510.792,
                r: .135
            },
            8: {
                x: 216.468,
                y: 512.788,
                r: .15
            },
            9: {
                x: 219.448,
                y: 514.666,
                r: .165
            },
            10: {
                x: 222.325,
                y: 516.482,
                r: .178
            },
            11: {
                x: 224.947,
                y: 518.229,
                r: .19
            },
            12: {
                x: 227.415,
                y: 519.706,
                r: .202
            },
            13: {
                x: 229.647,
                y: 521.19,
                r: .212
            },
            14: {
                x: 231.635,
                y: 522.454,
                r: .222
            },
            15: {
                x: 233.485,
                y: 523.693,
                r: .23
            },
            16: {
                x: 235.102,
                y: 524.742,
                r: .238
            },
            17: {
                x: 236.475,
                y: 525.644,
                r: .244
            },
            18: {
                x: 237.72,
                y: 526.42,
                r: .249
            },
            19: {
                x: 238.637,
                y: 527.07,
                r: .254
            },
            20: {
                x: 239.467,
                y: 527.565,
                r: .257
            },
            21: {
                x: 239.964,
                y: 527.894,
                r: .26
            },
            22: {
                x: 240.285,
                y: 528.122,
                r: .261
            },
            23: {
                x: 240.4,
                y: 528.15,
                r: .262
            },
            24: {
                x: 238.04,
                y: 526.579,
                r: .251
            },
            25: {
                x: 235.654,
                y: 525.071,
                r: .24
            },
            26: {
                x: 233.293,
                y: 523.537,
                r: .229
            },
            27: {
                x: 230.956,
                y: 521.997,
                r: .218
            },
            28: {
                x: 228.573,
                y: 520.499,
                r: .207
            },
            29: {
                x: 226.223,
                y: 518.992,
                r: .196
            },
            30: {
                x: 223.879,
                y: 517.457,
                r: .185
            },
            31: {
                x: 221.554,
                y: 516.028,
                r: .175
            },
            32: {
                x: 219.292,
                y: 514.538,
                r: .164
            },
            33: {
                x: 216.958,
                y: 513.08,
                r: .153
            },
            34: {
                x: 214.683,
                y: 511.673,
                r: .142
            },
            35: {
                x: 212.416,
                y: 510.247,
                r: .131
            },
            36: {
                x: 210.171,
                y: 508.806,
                r: .12
            },
            37: {
                x: 207.887,
                y: 507.425,
                r: .109
            },
            38: {
                x: 205.662,
                y: 506.024,
                r: .098
            },
            39: {
                x: 203.437,
                y: 504.628,
                r: .087
            },
            40: {
                x: 201.191,
                y: 503.264,
                r: .076
            },
            41: {
                x: 199,
                y: 501.893,
                r: .065
            },
            42: {
                x: 196.816,
                y: 500.573,
                r: .055
            },
            43: {
                x: 194.646,
                y: 499.242,
                r: .044
            },
            44: {
                x: 192.475,
                y: 497.916,
                r: .033
            },
            45: {
                x: 190.325,
                y: 496.575,
                r: .022
            },
            46: {
                x: 188.18,
                y: 495.327,
                r: .011
            },
            47: {
                x: 186,
                y: 494,
                r: 0
            }
        }).addTimedChild(instance9, 0, 48, {
            0: {
                x: 469,
                y: 201,
                r: 0
            },
            1: {
                x: 469.629,
                y: 201.063,
                r: .002
            },
            2: {
                x: 470.265,
                y: 201.029,
                r: .004
            },
            3: {
                x: 470.84,
                y: 201.049,
                r: .006
            },
            4: {
                x: 471.469,
                y: 201.062,
                r: .008
            },
            5: {
                x: 472.095,
                y: 201.083,
                r: .01
            },
            6: {
                x: 472.717,
                y: 201.043,
                r: .012
            },
            7: {
                x: 473.295,
                y: 201.106,
                r: .014
            },
            8: {
                x: 473.914,
                y: 201.123,
                r: .017
            },
            9: {
                x: 474.529,
                y: 201.13,
                r: .019
            },
            10: {
                x: 475.147,
                y: 201.097,
                r: .021
            },
            11: {
                x: 475.762,
                y: 201.104,
                r: .023
            },
            12: {
                x: 476.369,
                y: 201.158,
                r: .025
            },
            13: {
                x: 477.03,
                y: 201.172,
                r: .027
            },
            14: {
                x: 477.588,
                y: 201.125,
                r: .029
            },
            15: {
                x: 478.245,
                y: 201.179,
                r: .031
            },
            16: {
                x: 478.849,
                y: 201.19,
                r: .033
            },
            17: {
                x: 479.449,
                y: 201.191,
                r: .035
            },
            18: {
                x: 480.1,
                y: 201.192,
                r: .037
            },
            19: {
                x: 480.647,
                y: 201.2,
                r: .039
            },
            20: {
                x: 481.297,
                y: 201.251,
                r: .041
            },
            21: {
                x: 481.89,
                y: 201.248,
                r: .043
            },
            22: {
                x: 482.53,
                y: 201.253,
                r: .045
            },
            23: {
                x: 483.1,
                y: 201.25,
                r: .048
            },
            24: {
                x: 482.492,
                y: 201.239,
                r: .046
            },
            25: {
                x: 481.931,
                y: 201.285,
                r: .044
            },
            26: {
                x: 481.33,
                y: 201.276,
                r: .042
            },
            27: {
                x: 480.722,
                y: 201.215,
                r: .04
            },
            28: {
                x: 480.16,
                y: 201.211,
                r: .038
            },
            29: {
                x: 479.545,
                y: 201.247,
                r: .036
            },
            30: {
                x: 478.979,
                y: 201.232,
                r: .034
            },
            31: {
                x: 478.368,
                y: 201.178,
                r: .032
            },
            32: {
                x: 477.803,
                y: 201.214,
                r: .03
            },
            33: {
                x: 477.18,
                y: 201.196,
                r: .028
            },
            34: {
                x: 476.614,
                y: 201.182,
                r: .026
            },
            35: {
                x: 476.081,
                y: 201.118,
                r: .024
            },
            36: {
                x: 475.458,
                y: 201.151,
                r: .022
            },
            37: {
                x: 474.885,
                y: 201.133,
                r: .02
            },
            38: {
                x: 474.305,
                y: 201.113,
                r: .018
            },
            39: {
                x: 473.721,
                y: 201.15,
                r: .016
            },
            40: {
                x: 473.091,
                y: 201.129,
                r: .014
            },
            41: {
                x: 472.503,
                y: 201.105,
                r: .012
            },
            42: {
                x: 471.916,
                y: 201.132,
                r: .01
            },
            43: {
                x: 471.325,
                y: 201.116,
                r: .008
            },
            44: {
                x: 470.737,
                y: 201.092,
                r: .006
            },
            45: {
                x: 470.15,
                y: 201.068,
                r: .004
            },
            46: {
                x: 469.555,
                y: 201.092,
                r: .002
            },
            47: {
                x: 469,
                y: 201,
                r: 0
            }
        }).addTimedChild(instance8, 0, 48, {
            0: {
                x: 561,
                y: 202,
                r: 0
            },
            1: {
                x: 561.575,
                y: 202.153,
                r: .002
            },
            2: {
                x: 562.109,
                y: 202.308,
                r: .004
            },
            3: {
                x: 562.682,
                y: 202.419,
                r: .006
            },
            4: {
                x: 563.257,
                y: 202.572,
                r: .008
            },
            5: {
                x: 563.779,
                y: 202.733,
                r: .01
            },
            6: {
                x: 564.296,
                y: 202.832,
                r: .012
            },
            7: {
                x: 564.921,
                y: 202.985,
                r: .014
            },
            8: {
                x: 565.435,
                y: 203.143,
                r: .017
            },
            9: {
                x: 565.993,
                y: 203.289,
                r: .019
            },
            10: {
                x: 566.507,
                y: 203.397,
                r: .021
            },
            11: {
                x: 567.065,
                y: 203.544,
                r: .023
            },
            12: {
                x: 567.665,
                y: 203.687,
                r: .025
            },
            13: {
                x: 568.17,
                y: 203.842,
                r: .027
            },
            14: {
                x: 568.719,
                y: 203.985,
                r: .029
            },
            15: {
                x: 569.269,
                y: 204.079,
                r: .031
            },
            16: {
                x: 569.816,
                y: 204.28,
                r: .033
            },
            17: {
                x: 570.407,
                y: 204.371,
                r: .035
            },
            18: {
                x: 570.948,
                y: 204.511,
                r: .037
            },
            19: {
                x: 571.486,
                y: 204.71,
                r: .039
            },
            20: {
                x: 572.027,
                y: 204.8,
                r: .041
            },
            21: {
                x: 572.609,
                y: 204.937,
                r: .043
            },
            22: {
                x: 573.139,
                y: 205.133,
                r: .045
            },
            23: {
                x: 573.65,
                y: 205.2,
                r: .048
            },
            24: {
                x: 573.098,
                y: 205.059,
                r: .046
            },
            25: {
                x: 572.543,
                y: 204.927,
                r: .044
            },
            26: {
                x: 572.051,
                y: 204.789,
                r: .042
            },
            27: {
                x: 571.549,
                y: 204.648,
                r: .04
            },
            28: {
                x: 570.994,
                y: 204.515,
                r: .038
            },
            29: {
                x: 570.434,
                y: 204.421,
                r: .036
            },
            30: {
                x: 569.923,
                y: 204.277,
                r: .034
            },
            31: {
                x: 569.418,
                y: 204.095,
                r: .032
            },
            32: {
                x: 568.908,
                y: 204.001,
                r: .03
            },
            33: {
                x: 568.339,
                y: 203.853,
                r: .028
            },
            34: {
                x: 567.828,
                y: 203.759,
                r: .026
            },
            35: {
                x: 567.297,
                y: 203.567,
                r: .024
            },
            36: {
                x: 566.778,
                y: 203.47,
                r: .022
            },
            37: {
                x: 566.259,
                y: 203.323,
                r: .02
            },
            38: {
                x: 565.731,
                y: 203.222,
                r: .018
            },
            39: {
                x: 565.149,
                y: 203.081,
                r: .016
            },
            40: {
                x: 564.671,
                y: 202.93,
                r: .014
            },
            41: {
                x: 564.135,
                y: 202.777,
                r: .012
            },
            42: {
                x: 563.598,
                y: 202.673,
                r: .01
            },
            43: {
                x: 563.058,
                y: 202.528,
                r: .008
            },
            44: {
                x: 562.521,
                y: 202.425,
                r: .006
            },
            45: {
                x: 562.035,
                y: 202.221,
                r: .004
            },
            46: {
                x: 561.489,
                y: 202.114,
                r: .002
            },
            47: {
                x: 561,
                y: 202,
                r: 0
            }
        }).addTimedChild(instance7, 0, 48, {
            0: {
                x: 343,
                y: 121,
                r: 0
            },
            1: {
                x: 343.645,
                y: 120.655,
                r: .002
            },
            2: {
                x: 344.246,
                y: 120.261,
                r: .004
            },
            3: {
                x: 344.84,
                y: 119.871,
                r: .006
            },
            4: {
                x: 345.435,
                y: 119.526,
                r: .008
            },
            5: {
                x: 346.079,
                y: 119.136,
                r: .01
            },
            6: {
                x: 346.669,
                y: 118.739,
                r: .012
            },
            7: {
                x: 347.265,
                y: 118.393,
                r: .014
            },
            8: {
                x: 347.903,
                y: 118.002,
                r: .017
            },
            9: {
                x: 348.488,
                y: 117.653,
                r: .019
            },
            10: {
                x: 349.127,
                y: 117.261,
                r: .021
            },
            11: {
                x: 349.762,
                y: 116.912,
                r: .023
            },
            12: {
                x: 350.342,
                y: 116.511,
                r: .025
            },
            13: {
                x: 350.975,
                y: 116.167,
                r: .027
            },
            14: {
                x: 351.555,
                y: 115.816,
                r: .029
            },
            15: {
                x: 352.185,
                y: 115.415,
                r: .031
            },
            16: {
                x: 352.812,
                y: 115.07,
                r: .033
            },
            17: {
                x: 353.387,
                y: 114.717,
                r: .035
            },
            18: {
                x: 354.062,
                y: 114.365,
                r: .037
            },
            19: {
                x: 354.684,
                y: 113.967,
                r: .039
            },
            20: {
                x: 355.309,
                y: 113.614,
                r: .041
            },
            21: {
                x: 355.878,
                y: 113.26,
                r: .043
            },
            22: {
                x: 356.496,
                y: 112.911,
                r: .045
            },
            23: {
                x: 357.1,
                y: 112.5,
                r: .048
            },
            24: {
                x: 356.468,
                y: 112.84,
                r: .046
            },
            25: {
                x: 355.884,
                y: 113.185,
                r: .044
            },
            26: {
                x: 355.307,
                y: 113.577,
                r: .042
            },
            27: {
                x: 354.725,
                y: 113.917,
                r: .04
            },
            28: {
                x: 354.091,
                y: 114.262,
                r: .038
            },
            29: {
                x: 353.503,
                y: 114.6,
                r: .036
            },
            30: {
                x: 352.915,
                y: 114.939,
                r: .034
            },
            31: {
                x: 352.331,
                y: 115.284,
                r: .032
            },
            32: {
                x: 351.743,
                y: 115.622,
                r: .03
            },
            33: {
                x: 351.15,
                y: 116.009,
                r: .028
            },
            34: {
                x: 350.562,
                y: 116.347,
                r: .026
            },
            35: {
                x: 350.012,
                y: 116.687,
                r: .024
            },
            36: {
                x: 349.419,
                y: 117.024,
                r: .022
            },
            37: {
                x: 348.826,
                y: 117.36,
                r: .02
            },
            38: {
                x: 348.227,
                y: 117.745,
                r: .018
            },
            39: {
                x: 347.627,
                y: 118.085,
                r: .016
            },
            40: {
                x: 347.078,
                y: 118.42,
                r: .014
            },
            41: {
                x: 346.474,
                y: 118.803,
                r: .012
            },
            42: {
                x: 345.87,
                y: 119.186,
                r: .01
            },
            43: {
                x: 345.264,
                y: 119.525,
                r: .008
            },
            44: {
                x: 344.71,
                y: 119.908,
                r: .006
            },
            45: {
                x: 344.156,
                y: 120.241,
                r: .004
            },
            46: {
                x: 343.546,
                y: 120.622,
                r: .002
            },
            47: {
                x: 343,
                y: 121,
                r: 0
            }
        }).addTimedChild(instance6, 0, 48, {
            0: {
                x: 392,
                y: 238,
                r: 0
            },
            1: {
                x: 392.354,
                y: 237.754,
                r: .002
            },
            2: {
                x: 392.763,
                y: 237.461,
                r: .004
            },
            3: {
                x: 393.114,
                y: 237.221,
                r: .006
            },
            4: {
                x: 393.467,
                y: 236.925,
                r: .008
            },
            5: {
                x: 393.867,
                y: 236.635,
                r: .01
            },
            6: {
                x: 394.215,
                y: 236.335,
                r: .012
            },
            7: {
                x: 394.569,
                y: 236.089,
                r: .014
            },
            8: {
                x: 394.963,
                y: 235.845,
                r: .017
            },
            9: {
                x: 395.305,
                y: 235.542,
                r: .019
            },
            10: {
                x: 395.649,
                y: 235.298,
                r: .021
            },
            11: {
                x: 396.041,
                y: 234.995,
                r: .023
            },
            12: {
                x: 396.427,
                y: 234.738,
                r: .025
            },
            13: {
                x: 396.815,
                y: 234.44,
                r: .027
            },
            14: {
                x: 397.151,
                y: 234.183,
                r: .029
            },
            15: {
                x: 397.536,
                y: 233.876,
                r: .031
            },
            16: {
                x: 397.919,
                y: 233.625,
                r: .033
            },
            17: {
                x: 398.298,
                y: 233.414,
                r: .035
            },
            18: {
                x: 398.628,
                y: 233.104,
                r: .037
            },
            19: {
                x: 399.055,
                y: 232.849,
                r: .039
            },
            20: {
                x: 399.384,
                y: 232.538,
                r: .041
            },
            21: {
                x: 399.758,
                y: 232.274,
                r: .043
            },
            22: {
                x: 400.178,
                y: 231.966,
                r: .045
            },
            23: {
                x: 400.5,
                y: 231.7,
                r: .048
            },
            24: {
                x: 400.154,
                y: 231.952,
                r: .046
            },
            25: {
                x: 399.803,
                y: 232.21,
                r: .044
            },
            26: {
                x: 399.463,
                y: 232.466,
                r: .042
            },
            27: {
                x: 399.117,
                y: 232.768,
                r: .04
            },
            28: {
                x: 398.717,
                y: 232.976,
                r: .038
            },
            29: {
                x: 398.364,
                y: 233.274,
                r: .036
            },
            30: {
                x: 398.011,
                y: 233.523,
                r: .034
            },
            31: {
                x: 397.661,
                y: 233.831,
                r: .032
            },
            32: {
                x: 397.309,
                y: 234.029,
                r: .03
            },
            33: {
                x: 396.95,
                y: 234.324,
                r: .028
            },
            34: {
                x: 396.597,
                y: 234.573,
                r: .026
            },
            35: {
                x: 396.279,
                y: 234.87,
                r: .024
            },
            36: {
                x: 395.87,
                y: 235.115,
                r: .022
            },
            37: {
                x: 395.512,
                y: 235.36,
                r: .02
            },
            38: {
                x: 395.147,
                y: 235.652,
                r: .018
            },
            39: {
                x: 394.828,
                y: 235.849,
                r: .016
            },
            40: {
                x: 394.463,
                y: 236.141,
                r: .014
            },
            41: {
                x: 394.143,
                y: 236.378,
                r: .012
            },
            42: {
                x: 393.772,
                y: 236.666,
                r: .01
            },
            43: {
                x: 393.447,
                y: 236.91,
                r: .008
            },
            44: {
                x: 393.076,
                y: 237.198,
                r: .006
            },
            45: {
                x: 392.705,
                y: 237.436,
                r: .004
            },
            46: {
                x: 392.378,
                y: 237.77,
                r: .002
            },
            47: {
                x: 392,
                y: 238,
                r: 0
            }
        }).addTimedChild(instance5, 0, 48, {
            0: {
                x: 548,
                y: 259,
                r: 0
            },
            1: {
                x: 548.358,
                y: 259.075,
                r: .002
            },
            2: {
                x: 548.675,
                y: 259.154,
                r: .004
            },
            3: {
                x: 548.979,
                y: 259.187,
                r: .006
            },
            4: {
                x: 549.287,
                y: 259.162,
                r: .008
            },
            5: {
                x: 549.641,
                y: 259.245,
                r: .01
            },
            6: {
                x: 549.941,
                y: 259.316,
                r: .012
            },
            7: {
                x: 550.249,
                y: 259.341,
                r: .014
            },
            8: {
                x: 550.595,
                y: 259.42,
                r: .017
            },
            9: {
                x: 550.886,
                y: 259.437,
                r: .019
            },
            10: {
                x: 551.232,
                y: 259.517,
                r: .021
            },
            11: {
                x: 551.573,
                y: 259.584,
                r: .023
            },
            12: {
                x: 551.856,
                y: 259.547,
                r: .025
            },
            13: {
                x: 552.194,
                y: 259.622,
                r: .027
            },
            14: {
                x: 552.527,
                y: 259.685,
                r: .029
            },
            15: {
                x: 552.81,
                y: 259.748,
                r: .031
            },
            16: {
                x: 553.139,
                y: 259.769,
                r: .033
            },
            17: {
                x: 553.414,
                y: 259.828,
                r: .035
            },
            18: {
                x: 553.788,
                y: 259.888,
                r: .037
            },
            19: {
                x: 554.109,
                y: 259.955,
                r: .039
            },
            20: {
                x: 554.384,
                y: 259.964,
                r: .041
            },
            21: {
                x: 554.75,
                y: 260.019,
                r: .043
            },
            22: {
                x: 555.012,
                y: 260.083,
                r: .045
            },
            23: {
                x: 555.3,
                y: 260.05,
                r: .048
            },
            24: {
                x: 555.007,
                y: 260.045,
                r: .046
            },
            25: {
                x: 554.661,
                y: 259.997,
                r: .044
            },
            26: {
                x: 554.377,
                y: 259.946,
                r: .042
            },
            27: {
                x: 554.034,
                y: 259.94,
                r: .04
            },
            28: {
                x: 553.787,
                y: 259.893,
                r: .038
            },
            29: {
                x: 553.486,
                y: 259.834,
                r: .036
            },
            30: {
                x: 553.135,
                y: 259.775,
                r: .034
            },
            31: {
                x: 552.839,
                y: 259.728,
                r: .032
            },
            32: {
                x: 552.538,
                y: 259.668,
                r: .03
            },
            33: {
                x: 552.228,
                y: 259.655,
                r: .028
            },
            34: {
                x: 551.927,
                y: 259.595,
                r: .026
            },
            35: {
                x: 551.605,
                y: 259.536,
                r: .024
            },
            36: {
                x: 551.345,
                y: 259.473,
                r: .022
            },
            37: {
                x: 550.986,
                y: 259.459,
                r: .02
            },
            38: {
                x: 550.718,
                y: 259.392,
                r: .018
            },
            39: {
                x: 550.396,
                y: 259.383,
                r: .016
            },
            40: {
                x: 550.078,
                y: 259.316,
                r: .014
            },
            41: {
                x: 549.801,
                y: 259.294,
                r: .012
            },
            42: {
                x: 549.474,
                y: 259.223,
                r: .01
            },
            43: {
                x: 549.194,
                y: 259.16,
                r: .008
            },
            44: {
                x: 548.867,
                y: 259.089,
                r: .006
            },
            45: {
                x: 548.591,
                y: 259.117,
                r: .004
            },
            46: {
                x: 548.256,
                y: 259.042,
                r: .002
            },
            47: {
                x: 548,
                y: 259,
                r: 0
            }
        }).addTimedChild(instance4, 0, 48, {
            0: {
                x: 545,
                y: 160,
                r: 0
            },
            1: {
                x: 545.372,
                y: 160.461,
                r: -.005
            },
            2: {
                x: 545.735,
                y: 160.92,
                r: -.009
            },
            3: {
                x: 546.132,
                y: 161.323,
                r: -.014
            },
            4: {
                x: 546.52,
                y: 161.875,
                r: -.018
            },
            5: {
                x: 546.892,
                y: 162.321,
                r: -.023
            },
            6: {
                x: 547.214,
                y: 162.768,
                r: -.027
            },
            7: {
                x: 547.619,
                y: 163.259,
                r: -.032
            },
            8: {
                x: 547.968,
                y: 163.69,
                r: -.037
            },
            9: {
                x: 548.348,
                y: 164.124,
                r: -.041
            },
            10: {
                x: 548.72,
                y: 164.556,
                r: -.046
            },
            11: {
                x: 549.084,
                y: 165.035,
                r: -.05
            },
            12: {
                x: 549.472,
                y: 165.507,
                r: -.055
            },
            13: {
                x: 549.808,
                y: 165.937,
                r: -.059
            },
            14: {
                x: 550.189,
                y: 166.407,
                r: -.064
            },
            15: {
                x: 550.602,
                y: 166.822,
                r: -.068
            },
            16: {
                x: 551.005,
                y: 167.292,
                r: -.073
            },
            17: {
                x: 551.344,
                y: 167.75,
                r: -.078
            },
            18: {
                x: 551.722,
                y: 168.213,
                r: -.082
            },
            19: {
                x: 552.094,
                y: 168.665,
                r: -.087
            },
            20: {
                x: 552.489,
                y: 169.119,
                r: -.091
            },
            21: {
                x: 552.883,
                y: 169.572,
                r: -.096
            },
            22: {
                x: 553.27,
                y: 170.023,
                r: -.1
            },
            23: {
                x: 553.45,
                y: 170.3,
                r: -.105
            },
            24: {
                x: 553.327,
                y: 169.053,
                r: -.089
            },
            25: {
                x: 553.158,
                y: 167.87,
                r: -.073
            },
            26: {
                x: 552.955,
                y: 166.596,
                r: -.057
            },
            27: {
                x: 552.854,
                y: 165.358,
                r: -.04
            },
            28: {
                x: 552.77,
                y: 164.17,
                r: -.024
            },
            29: {
                x: 552.638,
                y: 162.927,
                r: -.008
            },
            30: {
                x: 552.567,
                y: 161.672,
                r: .008
            },
            31: {
                x: 552.504,
                y: 160.515,
                r: .024
            },
            32: {
                x: 552.4,
                y: 159.3,
                r: .04
            },
            33: {
                x: 551.925,
                y: 159.425,
                r: .038
            },
            34: {
                x: 551.453,
                y: 159.491,
                r: .035
            },
            35: {
                x: 550.964,
                y: 159.503,
                r: .032
            },
            36: {
                x: 550.434,
                y: 159.567,
                r: .03
            },
            37: {
                x: 549.894,
                y: 159.579,
                r: .027
            },
            38: {
                x: 549.447,
                y: 159.638,
                r: .024
            },
            39: {
                x: 548.95,
                y: 159.697,
                r: .021
            },
            40: {
                x: 548.452,
                y: 159.706,
                r: .019
            },
            41: {
                x: 547.896,
                y: 159.763,
                r: .016
            },
            42: {
                x: 547.44,
                y: 159.82,
                r: .013
            },
            43: {
                x: 546.926,
                y: 159.824,
                r: .011
            },
            44: {
                x: 546.414,
                y: 159.82,
                r: .008
            },
            45: {
                x: 545.9,
                y: 159.875,
                r: .005
            },
            46: {
                x: 545.419,
                y: 159.924,
                r: .003
            },
            47: {
                x: 545,
                y: 160,
                r: 0
            }
        }).addTimedChild(instance3, 0, 48, {
            0: {
                x: 428,
                y: 155,
                r: 0
            },
            1: {
                x: 428.63,
                y: 154.894,
                r: .005
            },
            2: {
                x: 429.292,
                y: 154.797,
                r: .011
            },
            3: {
                x: 429.939,
                y: 154.679,
                r: .016
            },
            4: {
                x: 430.534,
                y: 154.518,
                r: .021
            },
            5: {
                x: 431.116,
                y: 154.452,
                r: .026
            },
            6: {
                x: 431.787,
                y: 154.275,
                r: .032
            },
            7: {
                x: 432.393,
                y: 154.15,
                r: .037
            },
            8: {
                x: 432.985,
                y: 154.07,
                r: .042
            },
            9: {
                x: 433.565,
                y: 153.885,
                r: .047
            },
            10: {
                x: 434.24,
                y: 153.792,
                r: .053
            },
            11: {
                x: 434.85,
                y: 153.7,
                r: .058
            },
            12: {
                x: 435.449,
                y: 153.547,
                r: .063
            },
            13: {
                x: 436.033,
                y: 153.445,
                r: .068
            },
            14: {
                x: 436.713,
                y: 153.335,
                r: .074
            },
            15: {
                x: 437.266,
                y: 153.166,
                r: .079
            },
            16: {
                x: 437.87,
                y: 153.096,
                r: .084
            },
            17: {
                x: 438.513,
                y: 152.965,
                r: .089
            },
            18: {
                x: 439.14,
                y: 152.836,
                r: .095
            },
            19: {
                x: 439.763,
                y: 152.748,
                r: .1
            },
            20: {
                x: 440.371,
                y: 152.612,
                r: .105
            },
            21: {
                x: 440.955,
                y: 152.46,
                r: .111
            },
            22: {
                x: 441.589,
                y: 152.357,
                r: .116
            },
            23: {
                x: 442.1,
                y: 152.1,
                r: .121
            },
            24: {
                x: 441.392,
                y: 152.278,
                r: .109
            },
            25: {
                x: 440.625,
                y: 152.378,
                r: .098
            },
            26: {
                x: 439.845,
                y: 152.464,
                r: .086
            },
            27: {
                x: 439.068,
                y: 152.584,
                r: .074
            },
            28: {
                x: 438.32,
                y: 152.671,
                r: .063
            },
            29: {
                x: 437.508,
                y: 152.794,
                r: .051
            },
            30: {
                x: 436.744,
                y: 152.915,
                r: .039
            },
            31: {
                x: 436.015,
                y: 153.056,
                r: .028
            },
            32: {
                x: 435.15,
                y: 153.1,
                r: .016
            },
            33: {
                x: 434.698,
                y: 153.237,
                r: .015
            },
            34: {
                x: 434.263,
                y: 153.388,
                r: .014
            },
            35: {
                x: 433.779,
                y: 153.517,
                r: .013
            },
            36: {
                x: 433.29,
                y: 153.658,
                r: .012
            },
            37: {
                x: 432.797,
                y: 153.741,
                r: .011
            },
            38: {
                x: 432.315,
                y: 153.835,
                r: .01
            },
            39: {
                x: 431.87,
                y: 154.025,
                r: .008
            },
            40: {
                x: 431.383,
                y: 154.11,
                r: .007
            },
            41: {
                x: 430.888,
                y: 154.25,
                r: .006
            },
            42: {
                x: 430.408,
                y: 154.337,
                r: .005
            },
            43: {
                x: 429.913,
                y: 154.477,
                r: .004
            },
            44: {
                x: 429.467,
                y: 154.616,
                r: .003
            },
            45: {
                x: 428.972,
                y: 154.706,
                r: .002
            },
            46: {
                x: 428.435,
                y: 154.791,
                r: .001
            },
            47: {
                x: 428,
                y: 155,
                r: 0
            }
        }).addTimedChild(instance22, 10, 38, {
            10: {
                x: 597.6,
                y: -49,
                r: -.175,
                a: 0
            },
            11: {
                x: 598.155,
                y: -2.996,
                r: -.164,
                a: .15
            },
            12: {
                x: 598.632,
                y: 39.369,
                r: -.155,
                a: .29
            },
            13: {
                x: 599.034,
                y: 78.003,
                r: -.146,
                a: .41
            },
            14: {
                x: 599.459,
                y: 112.998,
                r: -.139,
                a: .52
            },
            15: {
                x: 599.835,
                y: 144.311,
                r: -.132,
                a: .62
            },
            16: {
                x: 600.171,
                y: 171.981,
                r: -.126,
                a: .71
            },
            17: {
                x: 600.507,
                y: 195.968,
                r: -.12,
                a: .79
            },
            18: {
                x: 600.781,
                y: 216.202,
                r: -.116,
                a: .85
            },
            19: {
                x: 600.983,
                y: 232.81,
                r: -.112,
                a: .91
            },
            20: {
                x: 601.154,
                y: 245.725,
                r: -.109,
                a: .95
            },
            21: {
                x: 601.282,
                y: 254.903,
                r: -.107,
                a: .98
            },
            22: {
                x: 601.336,
                y: 260.528,
                r: -.106,
                a: .99
            },
            23: {
                x: 601.25,
                y: 262.3,
                a: 1
            },
            24: {
                x: 600.693,
                y: 259.621,
                r: -.108
            },
            25: {
                x: 600.137,
                y: 256.992,
                r: -.111
            },
            26: {
                x: 599.63,
                y: 254.314,
                r: -.114
            },
            27: {
                x: 599.064,
                y: 251.631,
                r: -.117
            },
            28: {
                x: 598.493,
                y: 248.935,
                r: -.12
            },
            29: {
                x: 597.968,
                y: 246.348,
                r: -.123
            },
            30: {
                x: 597.443,
                y: 243.661,
                r: -.126
            },
            31: {
                x: 596.862,
                y: 240.961,
                r: -.128
            },
            32: {
                x: 596.328,
                y: 238.321,
                r: -.131
            },
            33: {
                x: 595.835,
                y: 235.676,
                r: -.134
            },
            34: {
                x: 595.277,
                y: 233.014,
                r: -.137
            },
            35: {
                x: 594.72,
                y: 230.374,
                r: -.14
            },
            36: {
                x: 594.222,
                y: 227.716,
                r: -.143
            },
            37: {
                x: 593.66,
                y: 225.113,
                r: -.146
            },
            38: {
                x: 593.1,
                y: 222.4,
                r: -.149
            },
            39: {
                x: 592.538,
                y: 221.549,
                r: -.151
            },
            40: {
                x: 591.97,
                y: 220.735,
                r: -.154
            },
            41: {
                x: 591.399,
                y: 219.88,
                r: -.157
            },
            42: {
                x: 590.823,
                y: 219.063,
                r: -.16
            },
            43: {
                x: 590.246,
                y: 218.245,
                r: -.163
            },
            44: {
                x: 589.66,
                y: 217.425,
                r: -.166
            },
            45: {
                x: 589.112,
                y: 216.61,
                r: -.169
            },
            46: {
                x: 588.517,
                y: 215.786,
                r: -.172
            },
            47: {
                x: 588,
                y: 215,
                r: -.175
            }
        }).addTimedChild(instance21, 10, 38, {
            10: {
                x: 70.6,
                y: 252,
                sx: .85,
                sy: .85,
                r: -.873,
                a: 0
            },
            11: {
                x: 69.252,
                y: 301.041,
                a: .15
            },
            12: {
                x: 67.902,
                y: 346.191,
                a: .29
            },
            13: {
                x: 66.752,
                y: 387.391,
                a: .41
            },
            14: {
                x: 65.652,
                y: 424.641,
                a: .52
            },
            15: {
                x: 64.702,
                y: 457.991,
                a: .62
            },
            16: {
                x: 63.852,
                y: 487.441,
                a: .71
            },
            17: {
                x: 63.102,
                y: 512.941,
                a: .79
            },
            18: {
                x: 62.452,
                y: 534.541,
                a: .85
            },
            19: {
                x: 61.952,
                y: 552.191,
                a: .91
            },
            20: {
                x: 61.552,
                y: 565.941,
                a: .95
            },
            21: {
                x: 61.302,
                y: 575.741,
                a: .98
            },
            22: {
                x: 61.102,
                y: 581.641,
                a: .99
            },
            23: {
                x: 61,
                y: 583.6,
                a: 1
            },
            24: {
                x: 61.057,
                y: 580.881
            },
            25: {
                y: 578.031
            },
            26: {
                y: 575.231
            },
            27: {
                y: 572.431
            },
            28: {
                y: 569.581
            },
            29: {
                y: 566.781
            },
            30: {
                y: 563.981
            },
            31: {
                y: 561.131
            },
            32: {
                y: 558.331
            },
            33: {
                y: 555.531
            },
            34: {
                y: 552.681
            },
            35: {
                y: 549.881
            },
            36: {
                y: 547.081
            },
            37: {
                y: 544.231
            },
            38: {
                y: 541.431
            },
            39: {
                y: 538.631
            },
            40: {
                y: 535.781
            },
            41: {
                y: 532.981
            },
            42: {
                y: 530.181
            },
            43: {
                y: 527.331
            },
            44: {
                y: 524.531
            },
            45: {
                y: 521.731
            },
            46: {
                y: 518.881
            },
            47: {
                x: 61,
                y: 516
            }
        }).addTimedChild(instance23, 22, 26, {
            22: {
                x: 139.45,
                y: 389.25,
                sx: .8,
                sy: .8,
                r: 0,
                a: 0
            },
            23: {
                x: 141.344,
                y: 382.927,
                sx: .809,
                sy: .809,
                r: .033,
                a: .08
            },
            24: {
                x: 143.392,
                y: 376.625,
                sx: .818,
                sy: .818,
                r: .066,
                a: .15
            },
            25: {
                x: 145.554,
                y: 370.363,
                sx: .828,
                sy: .828,
                r: .099,
                a: .23
            },
            26: {
                x: 147.947,
                y: 364.142,
                sx: .837,
                sy: .837,
                r: .133,
                a: .31
            },
            27: {
                x: 150.537,
                y: 357.902,
                sx: .846,
                sy: .846,
                r: .166,
                a: .38
            },
            28: {
                x: 153.28,
                y: 351.748,
                sx: .855,
                sy: .855,
                r: .199,
                a: .46
            },
            29: {
                x: 156.24,
                y: 345.662,
                sx: .864,
                sy: .864,
                r: .232,
                a: .54
            },
            30: {
                x: 159.331,
                y: 339.624,
                sx: .874,
                sy: .874,
                r: .265,
                a: .62
            },
            31: {
                x: 162.617,
                y: 333.718,
                sx: .883,
                sy: .883,
                r: .298,
                a: .69
            },
            32: {
                x: 166.068,
                y: 327.879,
                sx: .892,
                sy: .892,
                r: .331,
                a: .77
            },
            33: {
                x: 169.697,
                y: 322.131,
                sx: .901,
                sy: .901,
                r: .364,
                a: .85
            },
            34: {
                x: 173.518,
                y: 316.464,
                sx: .911,
                sy: .911,
                r: .398,
                a: .92
            },
            35: {
                x: 177.4,
                y: 310.9,
                sx: .92,
                sy: .92,
                r: .431,
                a: 1
            },
            36: {
                x: 182.188,
                y: 304.082,
                sx: .931,
                sy: .931,
                r: .469,
                a: .92
            },
            37: {
                x: 187.196,
                y: 297.444,
                sx: .941,
                sy: .941,
                r: .508,
                a: .83
            },
            38: {
                x: 192.432,
                y: 290.9,
                sx: .952,
                sy: .952,
                r: .546,
                a: .75
            },
            39: {
                x: 197.861,
                y: 284.566,
                sx: .963,
                sy: .963,
                r: .584,
                a: .67
            },
            40: {
                x: 203.545,
                y: 278.448,
                sx: .973,
                sy: .973,
                r: .623,
                a: .58
            },
            41: {
                x: 209.397,
                y: 272.544,
                sx: .984,
                sy: .984,
                r: .661,
                a: .5
            },
            42: {
                x: 215.38,
                y: 266.791,
                sx: .995,
                sy: .995,
                r: .7,
                a: .42
            },
            43: {
                x: 221.556,
                y: 261.307,
                sx: 1.005,
                sy: 1.005,
                r: .738,
                a: .33
            },
            44: {
                x: 227.953,
                y: 256.026,
                sx: 1.016,
                sy: 1.016,
                r: .777,
                a: .25
            },
            45: {
                x: 234.435,
                y: 251.076,
                sx: 1.027,
                sy: 1.027,
                r: .815,
                a: .17
            },
            46: {
                x: 241.113,
                y: 246.234,
                sx: 1.038,
                sy: 1.038,
                r: .854,
                a: .08
            },
            47: {
                x: 247.95,
                y: 241.75,
                sx: 1.048,
                sy: 1.048,
                r: .892,
                a: 0
            }
        }).addTimedChild(instance2, 0, 48, {
            0: {
                x: 259,
                y: 565,
                r: 0
            },
            1: {
                x: 262.763,
                y: 571.574,
                r: .032
            },
            2: {
                x: 266.32,
                y: 577.81,
                r: .061
            },
            3: {
                x: 269.73,
                y: 583.667,
                r: .089
            },
            4: {
                x: 272.945,
                y: 589.236,
                r: .115
            },
            5: {
                x: 275.946,
                y: 594.356,
                r: .138
            },
            6: {
                x: 278.72,
                y: 599.155,
                r: .16
            },
            7: {
                x: 281.254,
                y: 603.47,
                r: .179
            },
            8: {
                x: 283.569,
                y: 607.365,
                r: .196
            },
            9: {
                x: 285.571,
                y: 610.849,
                r: .212
            },
            10: {
                x: 287.396,
                y: 613.878,
                r: .225
            },
            11: {
                x: 288.892,
                y: 616.518,
                r: .236
            },
            12: {
                x: 290.13,
                y: 618.638,
                r: .245
            },
            13: {
                x: 291.099,
                y: 620.286,
                r: .253
            },
            14: {
                x: 291.824,
                y: 621.493,
                r: .258
            },
            15: {
                x: 292.237,
                y: 622.215,
                r: .261
            },
            16: {
                x: 292.35,
                y: 622.4,
                r: .262
            },
            17: {
                x: 292.341,
                y: 624.831
            },
            18: {
                x: 292.241,
                y: 627.231
            },
            19: {
                x: 292.191,
                y: 629.681
            },
            20: {
                x: 292.091,
                y: 632.081
            },
            21: {
                x: 292.041,
                y: 634.531
            },
            22: {
                x: 291.941,
                y: 636.931
            },
            23: {
                x: 291.85,
                y: 639.4
            },
            24: {
                x: 291.991,
                y: 636.031
            },
            25: {
                x: 292.091,
                y: 632.63
            },
            26: {
                x: 292.191,
                y: 629.23
            },
            27: {
                x: 292.291,
                y: 625.831
            },
            28: {
                x: 292.391,
                y: 622.43
            },
            29: {
                x: 292.491,
                y: 619.031
            },
            30: {
                x: 292.55,
                y: 615.6
            },
            31: {
                x: 290.438,
                y: 612.461,
                r: .246
            },
            32: {
                x: 288.308,
                y: 609.282,
                r: .231
            },
            33: {
                x: 286.267,
                y: 606.171,
                r: .216
            },
            34: {
                x: 284.18,
                y: 603.009,
                r: .2
            },
            35: {
                x: 282.127,
                y: 599.956,
                r: .185
            },
            36: {
                x: 280.088,
                y: 596.871,
                r: .169
            },
            37: {
                x: 278.118,
                y: 593.891,
                r: .154
            },
            38: {
                x: 276.112,
                y: 590.828,
                r: .139
            },
            39: {
                x: 274.125,
                y: 587.87,
                r: .123
            },
            40: {
                x: 272.144,
                y: 584.934,
                r: .108
            },
            41: {
                x: 270.276,
                y: 582.016,
                r: .092
            },
            42: {
                x: 268.314,
                y: 579.098,
                r: .077
            },
            43: {
                x: 266.411,
                y: 576.261,
                r: .062
            },
            44: {
                x: 264.499,
                y: 573.365,
                r: .046
            },
            45: {
                x: 262.702,
                y: 570.564,
                r: .031
            },
            46: {
                x: 260.845,
                y: 567.754,
                r: .015
            },
            47: {
                x: 259,
                y: 565,
                r: 0
            }
        }).addTimedChild(instance1, 0, 48, {
            0: {
                x: 843,
                y: 563,
                kx: 0,
                ky: 3.142
            },
            1: {
                x: 840.742,
                y: 566.891,
                kx: .01,
                ky: 3.131
            },
            2: {
                x: 838.578,
                y: 570.448,
                kx: .02,
                ky: 3.121
            },
            3: {
                x: 836.514,
                y: 573.789,
                kx: .029,
                ky: 3.112
            },
            4: {
                x: 834.692,
                y: 576.958,
                kx: .038,
                ky: 3.104
            },
            5: {
                x: 832.936,
                y: 579.794,
                kx: .046,
                ky: 3.096
            },
            6: {
                x: 831.347,
                y: 582.423,
                kx: .053,
                ky: 3.089
            },
            7: {
                x: 829.947,
                y: 584.814,
                kx: .059,
                ky: 3.082
            },
            8: {
                x: 828.66,
                y: 586.935,
                kx: .065,
                ky: 3.077
            },
            9: {
                x: 827.516,
                y: 588.816,
                kx: .07,
                ky: 3.072
            },
            10: {
                x: 826.524,
                y: 590.453,
                kx: .074,
                ky: 3.067
            },
            11: {
                x: 825.667,
                y: 591.864,
                kx: .078,
                ky: 3.064
            },
            12: {
                x: 825.012,
                y: 592.98,
                kx: .081,
                ky: 3.061
            },
            13: {
                x: 824.427,
                y: 593.824,
                kx: .083,
                ky: 3.058
            },
            14: {
                x: 824.056,
                y: 594.482,
                kx: .085,
                ky: 3.056
            },
            15: {
                x: 823.846,
                y: 594.881,
                kx: .086,
                ky: 3.055
            },
            16: {
                x: 823.7,
                y: 594.9
            },
            17: {
                x: 823.637,
                y: 597.341
            },
            18: {
                x: 823.537,
                y: 599.741
            },
            19: {
                x: 823.487,
                y: 602.191
            },
            20: {
                x: 823.387,
                y: 604.591
            },
            21: {
                x: 823.337,
                y: 607.041
            },
            22: {
                x: 823.237,
                y: 609.441
            },
            23: {
                x: 823.2,
                y: 611.9
            },
            24: {
                x: 823.337,
                y: 608.541
            },
            25: {
                x: 823.437,
                y: 605.141
            },
            26: {
                x: 823.537,
                y: 601.741
            },
            27: {
                x: 823.637,
                y: 598.341
            },
            28: {
                x: 823.737,
                y: 594.941
            },
            29: {
                x: 823.837,
                y: 591.541
            },
            30: {
                x: 823.9,
                y: 588.1
            },
            31: {
                x: 825.04,
                y: 586.64,
                kx: .081,
                ky: 3.06
            },
            32: {
                x: 826.164,
                y: 585.099,
                kx: .076,
                ky: 3.065
            },
            33: {
                x: 827.304,
                y: 583.654,
                kx: .071,
                ky: 3.07
            },
            34: {
                x: 828.4,
                y: 582.124,
                kx: .066,
                ky: 3.075
            },
            35: {
                x: 829.552,
                y: 580.651,
                kx: .061,
                ky: 3.081
            },
            36: {
                x: 830.7,
                y: 579.106,
                kx: .056,
                ky: 3.086
            },
            37: {
                x: 831.827,
                y: 577.665,
                kx: .051,
                ky: 3.091
            },
            38: {
                x: 832.926,
                y: 576.135,
                kx: .046,
                ky: 3.096
            },
            39: {
                x: 834.049,
                y: 574.687,
                kx: .041,
                ky: 3.101
            },
            40: {
                x: 835.16,
                y: 573.18,
                kx: .036,
                ky: 3.106
            },
            41: {
                x: 836.304,
                y: 571.742,
                kx: .031,
                ky: 3.111
            },
            42: {
                x: 837.405,
                y: 570.262,
                kx: .025,
                ky: 3.116
            },
            43: {
                x: 838.525,
                y: 568.806,
                kx: .02,
                ky: 3.121
            },
            44: {
                x: 839.647,
                y: 567.286,
                kx: .015,
                ky: 3.126
            },
            45: {
                x: 840.745,
                y: 565.848,
                kx: .01,
                ky: 3.131
            },
            46: {
                x: 841.839,
                y: 564.388,
                kx: .005,
                ky: 3.137
            },
            47: {
                x: 843,
                y: 563,
                kx: 0,
                ky: 3.142
            }
        }), this.labels.forEach((label, index) => {
            var labelEndPosition = this.labels[index + 1] ? this.labels[index + 1].position - 1 : this._totalFrames - 1;
            this.addAction(() => this.emit("label_end", this.currentLabel), labelEndPosition)
        })
    }), lib.paytable1BoatBack = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("paytable1BoatBack"));
        this.addChild(instance1)
    }), lib.paytable1BoatBack_copy = Container.extend(function() {
        Container.call(this);
        var instance1 = new lib.paytable1BoatBack;
        this.addChild(instance1)
    }), lib.logoInner = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("logo"));
        this.addChild(instance1)
    }), lib.paytable1TextBlink = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("paytable1TextBlink"));
        this.addChild(instance1), this.children[0].blendMode = 1
    }), lib.whiteShine = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("whiteShine1"));
        this.addChild(instance1)
    }), lib.logoPlate = MovieClip.extend(function() {
        MovieClip.call(this, {
            duration: 120
        });
        var instance2 = new Sprite(fromFrame("bigLogoPlate")).setTransform(0, 0, .61, .61),
            instance1 = new lib.whiteShine,
            instance3 = new lib.paytable1TextBlink;
        this.addTimedChild(instance2).addTimedChild(instance1, 0, 120, {
            0: {
                x: 36,
                y: 77,
                sx: 1,
                sy: 1.592,
                r: -.122,
                a: 0
            },
            1: {
                x: 41.542,
                y: 76.367,
                sy: 1.576,
                r: -.121,
                a: .02
            },
            2: {
                x: 46.987,
                y: 75.786,
                sy: 1.56,
                r: -.119,
                a: .05
            },
            3: {
                x: 52.534,
                y: 75.206,
                sy: 1.545,
                r: -.118,
                a: .07
            },
            4: {
                x: 57.982,
                y: 74.625,
                sy: 1.529,
                r: -.116,
                a: .09
            },
            5: {
                x: 63.483,
                y: 74.041,
                sy: 1.514,
                r: -.115,
                a: .11
            },
            6: {
                x: 68.987,
                y: 73.509,
                sy: 1.498,
                r: -.113,
                a: .14
            },
            7: {
                x: 74.492,
                y: 72.925,
                sy: 1.483,
                r: -.112,
                a: .16
            },
            8: {
                x: 80,
                y: 72.342,
                sy: 1.467,
                r: -.11,
                a: .18
            },
            9: {
                x: 85.461,
                y: 71.809,
                sy: 1.452,
                r: -.109,
                a: .2
            },
            10: {
                x: 91.023,
                y: 71.224,
                sy: 1.436,
                r: -.108,
                a: .23
            },
            11: {
                x: 96.487,
                y: 70.639,
                sy: 1.421,
                r: -.106,
                a: .25
            },
            12: {
                x: 102.003,
                y: 70.004,
                sy: 1.405,
                r: -.105,
                a: .27
            },
            13: {
                x: 107.423,
                y: 69.418,
                sy: 1.39,
                r: -.103,
                a: .3
            },
            14: {
                x: 112.943,
                y: 68.832,
                sy: 1.374,
                r: -.102,
                a: .32
            },
            15: {
                x: 118.467,
                y: 68.249,
                sy: 1.358,
                r: -.1,
                a: .34
            },
            16: {
                x: 123.943,
                y: 67.662,
                sy: 1.343,
                r: -.099,
                a: .36
            },
            17: {
                x: 129.47,
                y: 67.123,
                sy: 1.327,
                r: -.097,
                a: .39
            },
            18: {
                x: 134.901,
                y: 66.536,
                sy: 1.312,
                r: -.096,
                a: .41
            },
            19: {
                x: 140.432,
                y: 65.949,
                sy: 1.296,
                r: -.094,
                a: .43
            },
            20: {
                x: 145.967,
                y: 65.361,
                sy: 1.281,
                r: -.093,
                a: .45
            },
            21: {
                x: 151.404,
                y: 64.773,
                sy: 1.265,
                r: -.091,
                a: .48
            },
            22: {
                x: 156.943,
                y: 64.184,
                sy: 1.25,
                r: -.09,
                a: .5
            },
            23: {
                x: 162.384,
                y: 63.594,
                sy: 1.234,
                r: -.089,
                a: .52
            },
            24: {
                x: 167.928,
                y: 63.055,
                sy: 1.219,
                r: -.087,
                a: .55
            },
            25: {
                x: 173.373,
                y: 62.466,
                sy: 1.203,
                r: -.086,
                a: .57
            },
            26: {
                x: 178.871,
                y: 61.875,
                sy: 1.188,
                r: -.084,
                a: .59
            },
            27: {
                x: 184.421,
                y: 61.287,
                sy: 1.172,
                r: -.083,
                a: .61
            },
            28: {
                x: 189.874,
                y: 60.746,
                sy: 1.157,
                r: -.081,
                a: .64
            },
            29: {
                x: 195.378,
                y: 60.154,
                sy: 1.141,
                r: -.08,
                a: .66
            },
            30: {
                x: 200.834,
                y: 59.562,
                sy: 1.125,
                r: -.078,
                a: .68
            },
            31: {
                x: 206.344,
                y: 58.971,
                sy: 1.11,
                r: -.077,
                a: .7
            },
            32: {
                x: 211.805,
                y: 58.38,
                sy: 1.094,
                r: -.075,
                a: .73
            },
            33: {
                x: 217.25,
                y: 57.75,
                sy: 1.079,
                r: -.074,
                a: .75
            },
            34: {
                x: 222.929,
                y: 57.473,
                sy: 1.063,
                r: -.072
            },
            35: {
                x: 228.666,
                y: 57.104,
                sy: 1.046,
                r: -.071
            },
            36: {
                x: 234.35,
                y: 56.784,
                sy: 1.03,
                r: -.069
            },
            37: {
                x: 240.141,
                y: 56.413,
                sy: 1.014,
                r: -.068
            },
            38: {
                x: 245.838,
                y: 56.091,
                sy: .998,
                r: -.066
            },
            39: {
                x: 251.58,
                y: 55.72,
                sy: .982,
                r: -.065
            },
            40: {
                x: 257.282,
                y: 55.346,
                sy: .966,
                r: -.063
            },
            41: {
                x: 262.984,
                y: 55.024,
                sy: .949,
                r: -.062
            },
            42: {
                x: 268.687,
                y: 54.653,
                sy: .933,
                r: -.06
            },
            43: {
                x: 274.393,
                y: 54.331,
                sy: .917,
                r: -.059
            },
            44: {
                x: 280.106,
                y: 53.952,
                sy: .901,
                r: -.057
            },
            45: {
                x: 285.817,
                y: 53.68,
                sy: .885,
                r: -.056
            },
            46: {
                x: 291.633,
                y: 53.253,
                sy: .868,
                r: -.054
            },
            47: {
                x: 297.35,
                y: 52.881,
                sy: .852,
                r: -.052
            },
            48: {
                x: 303.07,
                y: 52.608,
                sy: .836,
                r: -.051
            },
            49: {
                x: 308.745,
                y: 52.232,
                sy: .82,
                r: -.049
            },
            50: {
                x: 314.474,
                y: 51.907,
                sy: .804,
                r: -.048
            },
            51: {
                x: 320.205,
                y: 51.531,
                sy: .787,
                r: -.046
            },
            52: {
                x: 325.892,
                y: 51.203,
                sy: .771,
                r: -.045
            },
            53: {
                x: 331.575,
                y: 50.826,
                sy: .755,
                r: -.043
            },
            54: {
                x: 337.363,
                y: 50.452,
                sy: .739,
                r: -.042
            },
            55: {
                x: 343.055,
                y: 50.174,
                sy: .723,
                r: -.04
            },
            56: {
                x: 348.749,
                y: 49.799,
                sy: .707,
                r: -.039
            },
            57: {
                x: 354.499,
                y: 49.42,
                sy: .69,
                r: -.037
            },
            58: {
                x: 360.2,
                y: 49.05,
                sy: .674,
                r: -.036
            },
            59: {
                x: 366.372,
                y: 48.972,
                sx: .998,
                sy: .66,
                r: -.034
            },
            60: {
                x: 372.4,
                y: 48.85,
                sx: .996,
                sy: .646,
                r: -.033
            },
            61: {
                x: 378.533,
                y: 48.722,
                sx: .994,
                sy: .632,
                r: -.032
            },
            62: {
                x: 384.61,
                y: 48.545,
                sx: .992,
                sy: .618,
                r: -.031
            },
            63: {
                x: 390.702,
                y: 48.467,
                sx: .991,
                sy: .604,
                r: -.03
            },
            64: {
                x: 396.786,
                y: 48.389,
                sx: .989,
                sy: .59,
                r: -.028
            },
            65: {
                x: 402.922,
                y: 48.249,
                sx: .987,
                sy: .576,
                r: -.027
            },
            66: {
                x: 409.021,
                y: 48.065,
                sx: .985,
                sy: .562,
                r: -.026
            },
            67: {
                x: 415.067,
                y: 47.932,
                sx: .983,
                sy: .548,
                r: -.025
            },
            68: {
                x: 421.161,
                y: 47.842,
                sx: .981,
                sy: .534,
                r: -.023
            },
            69: {
                x: 427.213,
                y: 47.702,
                sx: .979,
                sy: .52,
                r: -.022
            },
            70: {
                x: 433.317,
                y: 47.562,
                sx: .977,
                sy: .506,
                r: -.021
            },
            71: {
                x: 439.417,
                y: 47.412,
                sx: .976,
                sy: .492,
                r: -.02
            },
            72: {
                x: 445.532,
                y: 47.371,
                sx: .974,
                sy: .478,
                r: -.019
            },
            73: {
                x: 451.599,
                y: 47.226,
                sx: .972,
                sy: .464,
                r: -.017
            },
            74: {
                x: 457.658,
                y: 47.12,
                sx: .97,
                sy: .45,
                r: -.016
            },
            75: {
                x: 463.819,
                y: 46.924,
                sx: .968,
                sy: .436,
                r: -.015
            },
            76: {
                x: 469.893,
                y: 46.823,
                sx: .966,
                sy: .422,
                r: -.014
            },
            77: {
                x: 475.909,
                y: 46.716,
                sx: .964,
                sy: .408,
                r: -.012
            },
            78: {
                x: 481.983,
                y: 46.609,
                sx: .963,
                sy: .394,
                r: -.011
            },
            79: {
                x: 488.165,
                y: 46.452,
                sx: .961,
                sy: .38,
                r: -.01
            },
            80: {
                x: 494.245,
                y: 46.289,
                sx: .959,
                sy: .365,
                r: -.009
            },
            81: {
                x: 500.326,
                y: 46.182,
                sx: .957,
                sy: .351,
                r: -.007
            },
            82: {
                x: 506.41,
                y: 46.119,
                sx: .955,
                sy: .337,
                r: -.006
            },
            83: {
                x: 512.447,
                y: 45.951,
                sx: .953,
                sy: .323,
                r: -.005
            },
            84: {
                x: 518.585,
                y: 45.838,
                sx: .951,
                sy: .309,
                r: -.004
            },
            85: {
                x: 524.683,
                y: 45.721,
                sx: .949,
                sy: .295,
                r: -.003
            },
            86: {
                x: 530.65,
                y: 45.5,
                sx: .948,
                sy: .281,
                r: -.001
            },
            87: {
                x: 536.826,
                y: 45.59,
                sx: .946,
                sy: .286,
                r: 0,
                a: .73
            },
            88: {
                x: 542.85,
                y: 45.652,
                sx: .944,
                sy: .291,
                r: .001,
                a: .7
            },
            89: {
                x: 548.938,
                y: 45.644,
                sx: .942,
                sy: .296,
                r: .002,
                a: .68
            },
            90: {
                x: 554.964,
                y: 45.673,
                sx: .94,
                sy: .3,
                r: .004,
                a: .66
            },
            91: {
                x: 561.048,
                y: 45.749,
                sx: .938,
                sy: .305,
                r: .005,
                a: .64
            },
            92: {
                x: 567.114,
                y: 45.776,
                sx: .936,
                sy: .31,
                r: .006,
                a: .61
            },
            93: {
                x: 573.201,
                y: 45.802,
                sx: .934,
                sy: .315,
                r: .007,
                a: .59
            },
            94: {
                x: 579.264,
                y: 45.868,
                sx: .932,
                sy: .319,
                r: .009,
                a: .57
            },
            95: {
                x: 585.333,
                y: 45.888,
                sx: .931,
                sy: .324,
                r: .01,
                a: .55
            },
            96: {
                x: 591.44,
                y: 45.948,
                sx: .929,
                sy: .329,
                r: .011,
                a: .52
            },
            97: {
                x: 597.455,
                y: 45.967,
                sx: .927,
                sy: .334,
                r: .012,
                a: .5
            },
            98: {
                x: 603.575,
                y: 46.017,
                sx: .925,
                sy: .339,
                r: .013,
                a: .48
            },
            99: {
                x: 609.619,
                y: 46.084,
                sx: .923,
                sy: .343,
                r: .015,
                a: .45
            },
            100: {
                x: 615.678,
                y: 46.079,
                sx: .921,
                sy: .348,
                r: .016,
                a: .43
            },
            101: {
                x: 621.777,
                y: 46.138,
                sx: .919,
                sy: .353,
                r: .017,
                a: .41
            },
            102: {
                x: 627.824,
                y: 46.181,
                sx: .917,
                sy: .358,
                r: .018,
                a: .39
            },
            103: {
                x: 633.918,
                y: 46.231,
                sx: .916,
                sy: .362,
                r: .02,
                a: .36
            },
            104: {
                x: 640.019,
                y: 46.275,
                sx: .914,
                sy: .367,
                r: .021,
                a: .34
            },
            105: {
                x: 646.101,
                y: 46.267,
                sx: .912,
                sy: .372,
                r: .022,
                a: .32
            },
            106: {
                x: 652.191,
                y: 46.354,
                sx: .91,
                sy: .377,
                r: .023,
                a: .3
            },
            107: {
                x: 658.17,
                y: 46.386,
                sx: .908,
                sy: .381,
                r: .025,
                a: .27
            },
            108: {
                x: 664.305,
                y: 46.412,
                sx: .906,
                sy: .386,
                r: .026,
                a: .25
            },
            109: {
                x: 670.331,
                y: 46.497,
                sx: .904,
                sy: .391,
                r: .027,
                a: .23
            },
            110: {
                x: 676.462,
                y: 46.521,
                sx: .902,
                sy: .396,
                r: .028,
                a: .2
            },
            111: {
                x: 682.541,
                y: 46.549,
                sx: .9,
                sy: .4,
                r: .03,
                a: .18
            },
            112: {
                x: 688.603,
                y: 46.614,
                sx: .899,
                sy: .405,
                r: .031,
                a: .16
            },
            113: {
                x: 694.679,
                y: 46.639,
                sx: .897,
                sy: .41,
                r: .032,
                a: .14
            },
            114: {
                x: 700.787,
                y: 46.699,
                sx: .895,
                sy: .415,
                r: .033,
                a: .11
            },
            115: {
                x: 706.808,
                y: 46.766,
                sx: .893,
                sy: .42,
                r: .034,
                a: .09
            },
            116: {
                x: 712.92,
                y: 46.776,
                sx: .891,
                sy: .424,
                r: .036,
                a: .07
            },
            117: {
                x: 718.98,
                y: 46.833,
                sx: .889,
                sy: .429,
                r: .037,
                a: .05
            },
            118: {
                x: 725.031,
                y: 46.885,
                sx: .887,
                sy: .434,
                r: .038,
                a: .02
            },
            119: {
                x: 731,
                y: 47,
                sx: .885,
                sy: .439,
                r: .039,
                a: 0
            }
        }).addTimedChild(instance3, 64, 52, {
            64: {
                x: 492.5,
                y: 23.95,
                sx: .65,
                sy: .65,
                r: 0,
                a: 0
            },
            65: {
                x: 492.518,
                y: 22.229,
                sx: .672,
                sy: .672,
                r: .031,
                a: .03
            },
            66: {
                x: 492.589,
                y: 20.321,
                sx: .694,
                sy: .694,
                r: .063,
                a: .05
            },
            67: {
                x: 492.71,
                y: 18.491,
                sx: .716,
                sy: .716,
                r: .094,
                a: .08
            },
            68: {
                x: 492.994,
                y: 16.622,
                sx: .738,
                sy: .738,
                r: .126,
                a: .11
            },
            69: {
                x: 493.305,
                y: 14.632,
                sx: .76,
                sy: .76,
                r: .157,
                a: .14
            },
            70: {
                x: 493.814,
                y: 12.754,
                sx: .782,
                sy: .782,
                r: .188,
                a: .17
            },
            71: {
                x: 494.297,
                y: 10.748,
                sx: .803,
                sy: .803,
                r: .22,
                a: .2
            },
            72: {
                x: 494.917,
                y: 8.846,
                sx: .825,
                sy: .825,
                r: .251,
                a: .22
            },
            73: {
                x: 495.696,
                y: 6.909,
                sx: .847,
                sy: .847,
                r: .283,
                a: .25
            },
            74: {
                x: 496.534,
                y: 4.948,
                sx: .869,
                sy: .869,
                r: .314,
                a: .28
            },
            75: {
                x: 497.436,
                y: 3.037,
                sx: .891,
                sy: .891,
                r: .346,
                a: .31
            },
            76: {
                x: 498.474,
                y: 1.138,
                sx: .913,
                sy: .913,
                r: .377,
                a: .34
            },
            77: {
                x: 499.563,
                y: -.796,
                sx: .935,
                sy: .935,
                r: .408,
                a: .36
            },
            78: {
                x: 500.859,
                y: -2.691,
                sx: .957,
                sy: .957,
                r: .44,
                a: .39
            },
            79: {
                x: 502.176,
                y: -4.508,
                sx: .979,
                sy: .979,
                r: .471,
                a: .42
            },
            80: {
                x: 503.646,
                y: -6.386,
                sx: 1.001,
                sy: 1.001,
                r: .503,
                a: .45
            },
            81: {
                x: 505.123,
                y: -8.164,
                sx: 1.023,
                sy: 1.023,
                r: .534,
                a: .48
            },
            82: {
                x: 506.745,
                y: -9.931,
                sx: 1.045,
                sy: 1.045,
                r: .565,
                a: .5
            },
            83: {
                x: 508.471,
                y: -11.664,
                sx: 1.067,
                sy: 1.067,
                r: .597,
                a: .53
            },
            84: {
                x: 510.336,
                y: -13.314,
                sx: 1.089,
                sy: 1.089,
                r: .628,
                a: .56
            },
            85: {
                x: 512.206,
                y: -14.981,
                sx: 1.11,
                sy: 1.11,
                r: .66,
                a: .59
            },
            86: {
                x: 514.245,
                y: -16.538,
                sx: 1.132,
                sy: 1.132,
                r: .691,
                a: .62
            },
            87: {
                x: 516.336,
                y: -17.995,
                sx: 1.154,
                sy: 1.154,
                r: .723,
                a: .64
            },
            88: {
                x: 518.514,
                y: -19.492,
                sx: 1.176,
                sy: 1.176,
                r: .754,
                a: .67
            },
            89: {
                x: 520.5,
                y: -21.05,
                sx: 1.198,
                sy: 1.198,
                r: .785,
                a: .7
            },
            90: {
                x: 522.715,
                y: -21.825,
                sx: 1.21,
                sy: 1.21,
                r: .816,
                a: .67
            },
            91: {
                x: 524.989,
                y: -22.445,
                sx: 1.221,
                sy: 1.221,
                r: .846,
                a: .64
            },
            92: {
                x: 527.216,
                y: -23.059,
                sx: 1.233,
                sy: 1.233,
                r: .876,
                a: .62
            },
            93: {
                x: 529.529,
                y: -23.647,
                sx: 1.245,
                sy: 1.245,
                r: .906,
                a: .59
            },
            94: {
                x: 531.893,
                y: -24.035,
                sx: 1.256,
                sy: 1.256,
                r: .936,
                a: .57
            },
            95: {
                x: 534.262,
                y: -24.446,
                sx: 1.268,
                sy: 1.268,
                r: .967,
                a: .54
            },
            96: {
                x: 536.706,
                y: -24.794,
                sx: 1.279,
                sy: 1.279,
                r: .997,
                a: .51
            },
            97: {
                x: 539.136,
                y: -24.98,
                sx: 1.291,
                sy: 1.291,
                r: 1.027,
                a: .48
            },
            98: {
                x: 541.609,
                y: -25.167,
                sx: 1.303,
                sy: 1.303,
                r: 1.057,
                a: .46
            },
            99: {
                x: 544.109,
                y: -25.222,
                sx: 1.314,
                sy: 1.314,
                r: 1.087,
                a: .43
            },
            100: {
                x: 546.627,
                y: -25.161,
                sx: 1.326,
                sy: 1.326,
                r: 1.118,
                a: .4
            },
            101: {
                x: 549.103,
                y: -25.08,
                sx: 1.337,
                sy: 1.337,
                r: 1.148,
                a: .38
            },
            102: {
                x: 551.63,
                y: -24.922,
                sx: 1.349,
                sy: 1.349,
                r: 1.178,
                a: .35
            },
            103: {
                x: 554.199,
                y: -24.635,
                sx: 1.361,
                sy: 1.361,
                r: 1.208,
                a: .32
            },
            104: {
                x: 556.75,
                y: -24.3,
                sx: 1.372,
                sy: 1.372,
                r: 1.238,
                a: .3
            },
            105: {
                x: 559.283,
                y: -23.792,
                sx: 1.384,
                sy: 1.384,
                r: 1.269,
                a: .27
            },
            106: {
                x: 561.847,
                y: -23.293,
                sx: 1.395,
                sy: 1.395,
                r: 1.299,
                a: .24
            },
            107: {
                x: 564.426,
                y: -22.668,
                sx: 1.407,
                sy: 1.407,
                r: 1.329,
                a: .21
            },
            108: {
                x: 567.01,
                y: -21.915,
                sx: 1.419,
                sy: 1.419,
                r: 1.359,
                a: .19
            },
            109: {
                x: 569.657,
                y: -21.126,
                sx: 1.43,
                sy: 1.43,
                r: 1.389,
                a: .16
            },
            110: {
                x: 572.158,
                y: -20.274,
                sx: 1.442,
                sy: 1.442,
                r: 1.42,
                a: .13
            },
            111: {
                x: 574.727,
                y: -19.192,
                sx: 1.453,
                sy: 1.453,
                r: 1.45,
                a: .11
            },
            112: {
                x: 577.24,
                y: -18.169,
                sx: 1.465,
                sy: 1.465,
                r: 1.48,
                a: .08
            },
            113: {
                x: 579.771,
                y: -17.032,
                sx: 1.477,
                sy: 1.477,
                r: 1.51,
                a: .05
            },
            114: {
                x: 582.186,
                y: -15.693,
                sx: 1.488,
                sy: 1.488,
                r: 1.541,
                a: .03
            },
            115: {
                x: 584.5,
                y: -14.05,
                sx: 1.5,
                sy: 1.5,
                r: 1.571,
                a: 0
            }
        }).addAction(function() {
            if (!this._destroyed) {
                this.stop();
                var timeout = 4 + utils.getRandomFloat(2, 4);
                utils.delay(timeout).then(() => {
                    this._destroyed || this.gotoAndPlay(0)
                })
            }
        }, 119), this.labels.forEach((label, index) => {
            var labelEndPosition = this.labels[index + 1] ? this.labels[index + 1].position - 1 : this._totalFrames - 1;
            this.addAction(() => this.emit("label_end", this.currentLabel), labelEndPosition)
        })
    }), lib.paytable1TitlePlate = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("paytable1TitlePlate"));
        this.addChild(instance1)
    }), lib.paytable1TitlePlateLoop = MovieClip.extend(function() {
        MovieClip.call(this, {
            duration: 150
        });
        var instance2 = new lib.paytable1TitlePlate,
            instance1 = new lib.paytable1TitlePlate;
        this.addTimedChild(instance2, 0, 150, {
            0: {
                x: 294.5,
                y: -23.95,
                sx: .55,
                sy: .73,
                a: 0
            },
            1: {
                x: 291.832,
                y: -24.592,
                sx: .554,
                sy: .731,
                a: .01
            },
            2: {
                x: 289.118,
                y: -25.383,
                sx: .557,
                sy: .733,
                a: .03
            },
            3: {
                x: 286.404,
                y: -26.075,
                sx: .561,
                sy: .734,
                a: .04
            },
            4: {
                x: 283.69,
                y: -26.817,
                sx: .565,
                sy: .735,
                a: .05
            },
            5: {
                x: 280.977,
                y: -27.509,
                sx: .569,
                sy: .736,
                a: .07
            },
            6: {
                x: 278.258,
                y: -28.3,
                sx: .572,
                sy: .738,
                a: .08
            },
            7: {
                x: 275.586,
                y: -28.992,
                sx: .576,
                sy: .739,
                a: .09
            },
            8: {
                x: 272.872,
                y: -29.734,
                sx: .58,
                sy: .74,
                a: .11
            },
            9: {
                x: 270.158,
                y: -30.426,
                sx: .583,
                sy: .741,
                a: .12
            },
            10: {
                x: 267.444,
                y: -31.168,
                sx: .587,
                sy: .743,
                a: .14
            },
            11: {
                x: 264.73,
                y: -31.91,
                sx: .591,
                sy: .744,
                a: .15
            },
            12: {
                x: 262.017,
                y: -32.651,
                sx: .594,
                sy: .745,
                a: .16
            },
            13: {
                x: 259.298,
                y: -33.343,
                sx: .598,
                sy: .747,
                a: .18
            },
            14: {
                x: 256.635,
                y: -34.085,
                sx: .602,
                sy: .748,
                a: .19
            },
            15: {
                x: 253.921,
                y: -34.827,
                sx: .606,
                sy: .749,
                a: .2
            },
            16: {
                x: 251.207,
                y: -35.568,
                sx: .609,
                sy: .75,
                a: .21
            },
            17: {
                x: 248.493,
                y: -36.26,
                sx: .613,
                sy: .752,
                a: .23
            },
            18: {
                x: 245.771,
                y: -37.002,
                sx: .617,
                sy: .753,
                a: .24
            },
            19: {
                x: 243.061,
                y: -37.694,
                sx: .62,
                sy: .754,
                a: .26
            },
            20: {
                x: 240.438,
                y: -38.436,
                sx: .624,
                sy: .755,
                a: .27
            },
            21: {
                x: 237.725,
                y: -39.178,
                sx: .628,
                sy: .757,
                a: .29
            },
            22: {
                x: 235.011,
                y: -39.869,
                sx: .632,
                sy: .758,
                a: .3
            },
            23: {
                x: 232.297,
                y: -40.611,
                sx: .635,
                sy: .759,
                a: .31
            },
            24: {
                x: 229.583,
                y: -41.303,
                sx: .639,
                sy: .761,
                a: .32
            },
            25: {
                x: 226.87,
                y: -42.095,
                sx: .643,
                sy: .762,
                a: .34
            },
            26: {
                x: 224.156,
                y: -42.786,
                sx: .646,
                sy: .763,
                a: .35
            },
            27: {
                x: 221.438,
                y: -43.529,
                sx: .65,
                sy: .764,
                a: .36
            },
            28: {
                x: 218.774,
                y: -44.22,
                sx: .654,
                sy: .766,
                a: .38
            },
            29: {
                x: 216.06,
                y: -45.012,
                sx: .657,
                sy: .767,
                a: .39
            },
            30: {
                x: 213.346,
                y: -45.704,
                sx: .661,
                sy: .768,
                a: .41
            },
            31: {
                x: 210.623,
                y: -46.446,
                sx: .665,
                sy: .769,
                a: .42
            },
            32: {
                x: 207.91,
                y: -47.137,
                sx: .669,
                sy: .771,
                a: .43
            },
            33: {
                x: 205.246,
                y: -47.88,
                sx: .672,
                sy: .772,
                a: .45
            },
            34: {
                x: 202.528,
                y: -48.621,
                sx: .676,
                sy: .773,
                a: .46
            },
            35: {
                x: 199.814,
                y: -49.363,
                sx: .68,
                sy: .775,
                a: .47
            },
            36: {
                x: 197.1,
                y: -50.055,
                sx: .683,
                sy: .776,
                a: .49
            },
            37: {
                x: 194.386,
                y: -50.747,
                sx: .687,
                sy: .777,
                a: .5
            },
            38: {
                x: 191.672,
                y: -51.539,
                sx: .691,
                sy: .778,
                a: .51
            },
            39: {
                x: 188.959,
                y: -52.23,
                sx: .695,
                sy: .78,
                a: .53
            },
            40: {
                x: 186.24,
                y: -52.972,
                sx: .698,
                sy: .781,
                a: .54
            },
            41: {
                x: 183.527,
                y: -53.664,
                sx: .702,
                sy: .782,
                a: .55
            },
            42: {
                x: 180.863,
                y: -54.456,
                sx: .706,
                sy: .783,
                a: .57
            },
            43: {
                x: 178.149,
                y: -55.147,
                sx: .709,
                sy: .785,
                a: .58
            },
            44: {
                x: 175.426,
                y: -55.89,
                sx: .713,
                sy: .786,
                a: .59
            },
            45: {
                x: 172.713,
                y: -56.581,
                sx: .717,
                sy: .787,
                a: .61
            },
            46: {
                x: 169.999,
                y: -57.323,
                sx: .72,
                sy: .789,
                a: .62
            },
            47: {
                x: 167.281,
                y: -58.065,
                sx: .724,
                sy: .79,
                a: .64
            },
            48: {
                x: 164.617,
                y: -58.807,
                sx: .728,
                sy: .791,
                a: .65
            },
            49: {
                x: 161.903,
                y: -59.498,
                sx: .732,
                sy: .792,
                a: .66
            },
            50: {
                x: 159.189,
                y: -60.24,
                sx: .735,
                sy: .794,
                a: .68
            },
            51: {
                x: 156.475,
                y: -60.932,
                sx: .739,
                sy: .795,
                a: .69
            },
            52: {
                x: 153.762,
                y: -61.724,
                sx: .743,
                sy: .796,
                a: .7
            },
            53: {
                x: 151.048,
                y: -62.415,
                sx: .746,
                sy: .797,
                a: .71
            },
            54: {
                x: 148.33,
                y: -63.157,
                sx: .75,
                sy: .799,
                a: .73
            },
            55: {
                x: 145.657,
                y: -63.849,
                sx: .754,
                sy: .8,
                a: .74
            },
            56: {
                x: 142.952,
                y: -64.591,
                sx: .758,
                sy: .801,
                a: .76
            },
            57: {
                x: 140.279,
                y: -65.333,
                sx: .761,
                sy: .803,
                a: .77
            },
            58: {
                x: 137.565,
                y: -66.025,
                sx: .765,
                sy: .804,
                a: .79
            },
            59: {
                x: 134.852,
                y: -66.766,
                sx: .769,
                sy: .805,
                a: .8
            },
            60: {
                x: 132.138,
                y: -67.458,
                sx: .772,
                sy: .806,
                a: .81
            },
            61: {
                x: 129.42,
                y: -68.25,
                sx: .776,
                sy: .808,
                a: .82
            },
            62: {
                x: 126.756,
                y: -68.942,
                sx: .78,
                sy: .809,
                a: .84
            },
            63: {
                x: 124.042,
                y: -69.683,
                sx: .783,
                sy: .81,
                a: .85
            },
            64: {
                x: 121.328,
                y: -70.375,
                sx: .787,
                sy: .812,
                a: .86
            },
            65: {
                x: 118.615,
                y: -71.167,
                sx: .791,
                sy: .813,
                a: .88
            },
            66: {
                x: 115.901,
                y: -71.859,
                sx: .795,
                sy: .814,
                a: .89
            },
            67: {
                x: 113.182,
                y: -72.601,
                sx: .798,
                sy: .815,
                a: .91
            },
            68: {
                x: 110.51,
                y: -73.293,
                sx: .802,
                sy: .817,
                a: .92
            },
            69: {
                x: 107.796,
                y: -74.034,
                sx: .806,
                sy: .818,
                a: .93
            },
            70: {
                x: 105.082,
                y: -74.777,
                sx: .809,
                sy: .819,
                a: .95
            },
            71: {
                x: 102.368,
                y: -75.518,
                sx: .813,
                sy: .82,
                a: .96
            },
            72: {
                x: 99.655,
                y: -76.21,
                sx: .817,
                sy: .822,
                a: .97
            },
            73: {
                x: 96.941,
                y: -76.951,
                sx: .821,
                sy: .823,
                a: .99
            },
            74: {
                x: 94.2,
                y: -77.75,
                sx: .824,
                sy: .824,
                a: 1
            },
            75: {
                x: 92.042,
                y: -79.132,
                sx: .827,
                sy: .827,
                a: .99
            },
            76: {
                x: 89.837,
                y: -80.567,
                sx: .83,
                sy: .83,
                a: .97
            },
            77: {
                x: 87.631,
                y: -81.951,
                sx: .833,
                sy: .833,
                a: .96
            },
            78: {
                x: 85.424,
                y: -83.334,
                sx: .836,
                sy: .836,
                a: .95
            },
            79: {
                x: 83.268,
                y: -84.718,
                sx: .839,
                sy: .839,
                a: .93
            },
            80: {
                x: 81.061,
                y: -86.101,
                sx: .842,
                sy: .842,
                a: .92
            },
            81: {
                x: 78.858,
                y: -87.537,
                sx: .845,
                sy: .845,
                a: .91
            },
            82: {
                x: 76.651,
                y: -88.921,
                sx: .848,
                sy: .848,
                a: .89
            },
            83: {
                x: 74.445,
                y: -90.304,
                sx: .851,
                sy: .851,
                a: .88
            },
            84: {
                x: 72.238,
                y: -91.688,
                sx: .854,
                sy: .854,
                a: .87
            },
            85: {
                x: 70.033,
                y: -93.123,
                sx: .857,
                sy: .857,
                a: .85
            },
            86: {
                x: 67.877,
                y: -94.506,
                sx: .86,
                sy: .86,
                a: .84
            },
            87: {
                x: 65.67,
                y: -95.89,
                sx: .863,
                sy: .863,
                a: .83
            },
            88: {
                x: 63.464,
                y: -97.323,
                sx: .866,
                sy: .866,
                a: .81
            },
            89: {
                x: 61.259,
                y: -98.708,
                sx: .869,
                sy: .869,
                a: .8
            },
            90: {
                x: 59.052,
                y: -100.091,
                sx: .872,
                sy: .872,
                a: .79
            },
            91: {
                x: 56.846,
                y: -101.525,
                sx: .875,
                sy: .875,
                a: .77
            },
            92: {
                x: 54.689,
                y: -102.909,
                sx: .878,
                sy: .878,
                a: .76
            },
            93: {
                x: 52.483,
                y: -104.292,
                sx: .881,
                sy: .881,
                a: .75
            },
            94: {
                x: 50.278,
                y: -105.727,
                sx: .884,
                sy: .884,
                a: .73
            },
            95: {
                x: 48.121,
                y: -107.11,
                sx: .887,
                sy: .887,
                a: .72
            },
            96: {
                x: 45.915,
                y: -108.494,
                sx: .89,
                sy: .89,
                a: .71
            },
            97: {
                x: 43.71,
                y: -109.929,
                sx: .893,
                sy: .893,
                a: .69
            },
            98: {
                x: 41.503,
                y: -111.312,
                sx: .896,
                sy: .896,
                a: .68
            },
            99: {
                x: 39.347,
                y: -112.696,
                sx: .899,
                sy: .899,
                a: .67
            },
            100: {
                x: 37.14,
                y: -114.129,
                sx: .902,
                sy: .902,
                a: .65
            },
            101: {
                x: 34.934,
                y: -115.513,
                sx: .906,
                sy: .906,
                a: .64
            },
            102: {
                x: 32.73,
                y: -116.899,
                sx: .909,
                sy: .909,
                a: .63
            },
            103: {
                x: 30.524,
                y: -118.332,
                sx: .912,
                sy: .912,
                a: .61
            },
            104: {
                x: 28.317,
                y: -119.716,
                sx: .915,
                sy: .915,
                a: .6
            },
            105: {
                x: 26.161,
                y: -121.099,
                sx: .918,
                sy: .918,
                a: .59
            },
            106: {
                x: 23.906,
                y: -122.534,
                sx: .921,
                sy: .921,
                a: .57
            },
            107: {
                x: 21.75,
                y: -123.918,
                sx: .924,
                sy: .924,
                a: .56
            },
            108: {
                x: 19.543,
                y: -125.301,
                sx: .927,
                sy: .927,
                a: .55
            },
            109: {
                x: 17.337,
                y: -126.735,
                sx: .93,
                sy: .93,
                a: .54
            },
            110: {
                x: 15.132,
                y: -128.119,
                sx: .933,
                sy: .933,
                a: .52
            },
            111: {
                x: 12.925,
                y: -129.503,
                sx: .936,
                sy: .936,
                a: .51
            },
            112: {
                x: 10.719,
                y: -130.936,
                sx: .939,
                sy: .939,
                a: .49
            },
            113: {
                x: 8.562,
                y: -132.32,
                sx: .942,
                sy: .942,
                a: .48
            },
            114: {
                x: 6.357,
                y: -133.705,
                sx: .945,
                sy: .945,
                a: .46
            },
            115: {
                x: 4.151,
                y: -135.138,
                sx: .948,
                sy: .948,
                a: .45
            },
            116: {
                x: 1.944,
                y: -136.522,
                sx: .951,
                sy: .951,
                a: .44
            },
            117: {
                x: -.262,
                y: -137.905,
                sx: .954,
                sy: .954,
                a: .43
            },
            118: {
                x: -2.467,
                y: -139.34,
                sx: .957,
                sy: .957,
                a: .41
            },
            119: {
                x: -4.674,
                y: -140.724,
                sx: .96,
                sy: .96,
                a: .4
            },
            120: {
                x: -6.83,
                y: -142.107,
                sx: .963,
                sy: .963,
                a: .39
            },
            121: {
                x: -9.037,
                y: -143.541,
                sx: .966,
                sy: .966,
                a: .38
            },
            122: {
                x: -11.24,
                y: -144.927,
                sx: .969,
                sy: .969,
                a: .36
            },
            123: {
                x: -13.447,
                y: -146.31,
                sx: .972,
                sy: .972,
                a: .35
            },
            124: {
                x: -15.653,
                y: -147.744,
                sx: .975,
                sy: .975,
                a: .33
            },
            125: {
                x: -17.86,
                y: -149.127,
                sx: .978,
                sy: .978,
                a: .32
            },
            126: {
                x: -20.016,
                y: -150.511,
                sx: .981,
                sy: .981,
                a: .31
            },
            127: {
                x: -22.221,
                y: -151.946,
                sx: .984,
                sy: .984,
                a: .29
            },
            128: {
                x: -24.428,
                y: -153.329,
                sx: .987,
                sy: .987,
                a: .28
            },
            129: {
                x: -26.634,
                y: -154.713,
                sx: .99,
                sy: .99,
                a: .27
            },
            130: {
                x: -28.839,
                y: -156.147,
                sx: .993,
                sy: .993,
                a: .25
            },
            131: {
                x: -30.996,
                y: -157.531,
                sx: .996,
                sy: .996,
                a: .24
            },
            132: {
                x: -33.202,
                y: -158.914,
                sx: .999,
                sy: .999,
                a: .23
            },
            133: {
                x: -35.359,
                y: -160.348,
                sx: 1.002,
                sy: 1.002,
                a: .21
            },
            134: {
                x: -37.565,
                y: -161.732,
                sx: 1.005,
                sy: 1.005,
                a: .2
            },
            135: {
                x: -39.77,
                y: -163.116,
                sx: 1.008,
                sy: 1.008,
                a: .19
            },
            136: {
                x: -41.977,
                y: -164.55,
                sx: 1.011,
                sy: 1.011,
                a: .17
            },
            137: {
                x: -44.183,
                y: -165.933,
                sx: 1.014,
                sy: 1.014,
                a: .16
            },
            138: {
                x: -46.389,
                y: -167.317,
                sx: 1.017,
                sy: 1.017,
                a: .15
            },
            139: {
                x: -48.593,
                y: -168.753,
                sx: 1.02,
                sy: 1.02,
                a: .13
            },
            140: {
                x: -50.799,
                y: -170.136,
                sx: 1.023,
                sy: 1.023,
                a: .12
            },
            141: {
                x: -52.956,
                y: -171.52,
                sx: 1.026,
                sy: 1.026,
                a: .11
            },
            142: {
                x: -55.162,
                y: -172.953,
                sx: 1.029,
                sy: 1.029,
                a: .09
            },
            143: {
                x: -57.367,
                y: -174.338,
                sx: 1.032,
                sy: 1.032,
                a: .08
            },
            144: {
                x: -59.574,
                y: -175.722,
                sx: 1.035,
                sy: 1.035,
                a: .07
            },
            145: {
                x: -61.78,
                y: -177.155,
                sx: 1.038,
                sy: 1.038,
                a: .05
            },
            146: {
                x: -63.987,
                y: -178.539,
                sx: 1.041,
                sy: 1.041,
                a: .04
            },
            147: {
                x: -66.143,
                y: -179.922,
                sx: 1.044,
                sy: 1.044,
                a: .03
            },
            148: {
                x: -68.348,
                y: -181.357,
                sx: 1.047,
                sy: 1.047,
                a: .01
            },
            149: {
                x: -70.45,
                y: -182.8,
                sx: 1.05,
                sy: 1.05,
                a: 0
            }
        }).addTimedChild(instance1, 0, 150, {
            0: {
                x: 1308.75,
                y: -78.6,
                sx: .826,
                sy: .826,
                ky: 3.142,
                a: .99
            },
            1: {
                x: 1310.973,
                y: -79.987,
                sx: .829,
                sy: .829,
                a: .98
            },
            2: {
                x: 1313.166,
                y: -81.424,
                sx: .832,
                sy: .832,
                a: .96
            },
            3: {
                x: 1315.378,
                y: -82.814,
                sx: .835,
                sy: .835,
                a: .95
            },
            4: {
                x: 1317.601,
                y: -84.25,
                sx: .838,
                sy: .838,
                a: .93
            },
            5: {
                x: 1319.794,
                y: -85.638,
                sx: .841,
                sy: .841,
                a: .92
            },
            6: {
                x: 1322.037,
                y: -87.026,
                sx: .844,
                sy: .844,
                a: .91
            },
            7: {
                x: 1324.209,
                y: -88.462,
                sx: .847,
                sy: .847,
                a: .89
            },
            8: {
                x: 1326.452,
                y: -89.85,
                sx: .85,
                sy: .85,
                a: .88
            },
            9: {
                x: 1328.665,
                y: -91.289,
                sx: .853,
                sy: .853,
                a: .87
            },
            10: {
                x: 1330.838,
                y: -92.676,
                sx: .856,
                sy: .856,
                a: .86
            },
            11: {
                x: 1333.081,
                y: -94.064,
                sx: .859,
                sy: .859,
                a: .84
            },
            12: {
                x: 1335.274,
                y: -95.502,
                sx: .863,
                sy: .863,
                a: .83
            },
            13: {
                x: 1337.446,
                y: -96.888,
                sx: .866,
                sy: .866,
                a: .82
            },
            14: {
                x: 1339.689,
                y: -98.276,
                sx: .869,
                sy: .869,
                a: .8
            },
            15: {
                x: 1341.882,
                y: -99.714,
                sx: .872,
                sy: .872,
                a: .79
            },
            16: {
                x: 1344.125,
                y: -101.102,
                sx: .875,
                sy: .875,
                a: .77
            },
            17: {
                x: 1346.318,
                y: -102.54,
                sx: .878,
                sy: .878,
                a: .76
            },
            18: {
                x: 1348.51,
                y: -103.928,
                sx: .881,
                sy: .881,
                a: .75
            },
            19: {
                x: 1350.733,
                y: -105.314,
                sx: .884,
                sy: .884,
                a: .73
            },
            20: {
                x: 1352.876,
                y: -106.752,
                sx: .887,
                sy: .887,
                a: .72
            },
            21: {
                x: 1355.119,
                y: -108.14,
                sx: .89,
                sy: .89,
                a: .71
            },
            22: {
                x: 1357.311,
                y: -109.578,
                sx: .893,
                sy: .893,
                a: .7
            },
            23: {
                x: 1359.504,
                y: -110.966,
                sx: .896,
                sy: .896,
                a: .68
            },
            24: {
                x: 1361.747,
                y: -112.353,
                sx: .899,
                sy: .899,
                a: .67
            },
            25: {
                x: 1363.92,
                y: -113.79,
                sx: .902,
                sy: .902,
                a: .66
            },
            26: {
                x: 1366.163,
                y: -115.178,
                sx: .905,
                sy: .905,
                a: .64
            },
            27: {
                x: 1368.355,
                y: -116.616,
                sx: .908,
                sy: .908,
                a: .63
            },
            28: {
                x: 1370.528,
                y: -117.952,
                sx: .911,
                sy: .911,
                a: .61
            },
            29: {
                x: 1372.791,
                y: -119.391,
                sx: .914,
                sy: .914,
                a: .6
            },
            30: {
                x: 1374.984,
                y: -120.829,
                sx: .917,
                sy: .917,
                a: .59
            },
            31: {
                x: 1377.156,
                y: -122.216,
                sx: .92,
                sy: .92,
                a: .57
            },
            32: {
                x: 1379.399,
                y: -123.604,
                sx: .923,
                sy: .923,
                a: .56
            },
            33: {
                x: 1381.592,
                y: -124.992,
                sx: .926,
                sy: .926,
                a: .55
            },
            34: {
                x: 1383.815,
                y: -126.378,
                sx: .929,
                sy: .929,
                a: .54
            },
            35: {
                x: 1386.028,
                y: -127.817,
                sx: .932,
                sy: .932,
                a: .52
            },
            36: {
                x: 1388.22,
                y: -129.205,
                sx: .935,
                sy: .935,
                a: .51
            },
            37: {
                x: 1390.443,
                y: -130.592,
                sx: .938,
                sy: .938,
                a: .5
            },
            38: {
                x: 1392.636,
                y: -132.03,
                sx: .941,
                sy: .941,
                a: .48
            },
            39: {
                x: 1394.879,
                y: -133.417,
                sx: .944,
                sy: .944,
                a: .47
            },
            40: {
                x: 1397.092,
                y: -134.856,
                sx: .947,
                sy: .947,
                a: .45
            },
            41: {
                x: 1399.264,
                y: -136.243,
                sx: .95,
                sy: .95,
                a: .44
            },
            42: {
                x: 1401.507,
                y: -137.631,
                sx: .953,
                sy: .953,
                a: .43
            },
            43: {
                x: 1403.7,
                y: -139.069,
                sx: .956,
                sy: .956,
                a: .41
            },
            44: {
                x: 1405.923,
                y: -140.455,
                sx: .959,
                sy: .959,
                a: .4
            },
            45: {
                x: 1408.116,
                y: -141.893,
                sx: .962,
                sy: .962,
                a: .39
            },
            46: {
                x: 1410.328,
                y: -143.282,
                sx: .965,
                sy: .965,
                a: .38
            },
            47: {
                x: 1412.551,
                y: -144.669,
                sx: .968,
                sy: .968,
                a: .36
            },
            48: {
                x: 1414.744,
                y: -146.107,
                sx: .971,
                sy: .971,
                a: .35
            },
            49: {
                x: 1416.987,
                y: -147.495,
                sx: .974,
                sy: .974,
                a: .33
            },
            50: {
                x: 1419.16,
                y: -148.931,
                sx: .977,
                sy: .977,
                a: .32
            },
            51: {
                x: 1421.352,
                y: -150.319,
                sx: .98,
                sy: .98,
                a: .31
            },
            52: {
                x: 1423.595,
                y: -151.707,
                sx: .983,
                sy: .983,
                a: .29
            },
            53: {
                x: 1425.788,
                y: -153.145,
                sx: .986,
                sy: .986,
                a: .28
            },
            54: {
                x: 1427.981,
                y: -154.533,
                sx: .99,
                sy: .99,
                a: .27
            },
            55: {
                x: 1430.224,
                y: -155.971,
                sx: .993,
                sy: .993,
                a: .25
            },
            56: {
                x: 1432.346,
                y: -157.357,
                sx: .996,
                sy: .996,
                a: .24
            },
            57: {
                x: 1434.589,
                y: -158.745,
                sx: .999,
                sy: .999,
                a: .23
            },
            58: {
                x: 1436.782,
                y: -160.183,
                sx: 1.002,
                sy: 1.002,
                a: .21
            },
            59: {
                x: 1438.975,
                y: -161.571,
                sx: 1.005,
                sy: 1.005,
                a: .2
            },
            60: {
                x: 1441.217,
                y: -163.009,
                sx: 1.008,
                sy: 1.008,
                a: .19
            },
            61: {
                x: 1443.41,
                y: -164.396,
                sx: 1.011,
                sy: 1.011,
                a: .17
            },
            62: {
                x: 1445.633,
                y: -165.783,
                sx: 1.014,
                sy: 1.014,
                a: .16
            },
            63: {
                x: 1447.826,
                y: -167.221,
                sx: 1.017,
                sy: 1.017,
                a: .15
            },
            64: {
                x: 1450.019,
                y: -168.609,
                sx: 1.02,
                sy: 1.02,
                a: .13
            },
            65: {
                x: 1452.241,
                y: -169.995,
                sx: 1.023,
                sy: 1.023,
                a: .12
            },
            66: {
                x: 1454.454,
                y: -171.434,
                sx: 1.026,
                sy: 1.026,
                a: .11
            },
            67: {
                x: 1456.697,
                y: -172.822,
                sx: 1.029,
                sy: 1.029,
                a: .09
            },
            68: {
                x: 1458.87,
                y: -174.259,
                sx: 1.032,
                sy: 1.032,
                a: .08
            },
            69: {
                x: 1461.063,
                y: -175.647,
                sx: 1.035,
                sy: 1.035,
                a: .07
            },
            70: {
                x: 1463.305,
                y: -177.035,
                sx: 1.038,
                sy: 1.038,
                a: .05
            },
            71: {
                x: 1465.478,
                y: -178.471,
                sx: 1.041,
                sy: 1.041,
                a: .04
            },
            72: {
                x: 1467.691,
                y: -179.86,
                sx: 1.044,
                sy: 1.044,
                a: .03
            },
            73: {
                x: 1469.934,
                y: -181.298,
                sx: 1.047,
                sy: 1.047,
                a: .01
            },
            74: {
                x: 1471.95,
                y: -182.8,
                sx: 1.05,
                sy: 1.05,
                a: 0
            },
            75: {
                x: 1107,
                y: -23.95,
                sx: .55,
                sy: .73
            },
            76: {
                x: 1109.699,
                y: -24.592,
                sx: .554,
                sy: .731,
                a: .01
            },
            77: {
                x: 1112.415,
                y: -25.383,
                sx: .557,
                sy: .733,
                a: .03
            },
            78: {
                x: 1115.131,
                y: -26.075,
                sx: .561,
                sy: .734,
                a: .04
            },
            79: {
                x: 1117.847,
                y: -26.817,
                sx: .565,
                sy: .735,
                a: .05
            },
            80: {
                x: 1120.563,
                y: -27.509,
                sx: .569,
                sy: .736,
                a: .07
            },
            81: {
                x: 1123.262,
                y: -28.3,
                sx: .572,
                sy: .738,
                a: .08
            },
            82: {
                x: 1125.945,
                y: -28.992,
                sx: .576,
                sy: .739,
                a: .09
            },
            83: {
                x: 1128.661,
                y: -29.734,
                sx: .58,
                sy: .74,
                a: .11
            },
            84: {
                x: 1131.377,
                y: -30.426,
                sx: .583,
                sy: .741,
                a: .12
            },
            85: {
                x: 1134.093,
                y: -31.168,
                sx: .587,
                sy: .743,
                a: .14
            },
            86: {
                x: 1136.809,
                y: -31.91,
                sx: .591,
                sy: .744,
                a: .15
            },
            87: {
                x: 1139.525,
                y: -32.651,
                sx: .594,
                sy: .745,
                a: .16
            },
            88: {
                x: 1142.224,
                y: -33.343,
                sx: .598,
                sy: .747,
                a: .18
            },
            89: {
                x: 1144.94,
                y: -34.085,
                sx: .602,
                sy: .748,
                a: .19
            },
            90: {
                x: 1147.656,
                y: -34.827,
                sx: .606,
                sy: .749,
                a: .2
            },
            91: {
                x: 1150.322,
                y: -35.568,
                sx: .609,
                sy: .75,
                a: .21
            },
            92: {
                x: 1153.038,
                y: -36.26,
                sx: .613,
                sy: .752,
                a: .23
            },
            93: {
                x: 1155.77,
                y: -37.002,
                sx: .617,
                sy: .753,
                a: .24
            },
            94: {
                x: 1158.453,
                y: -37.694,
                sx: .62,
                sy: .754,
                a: .26
            },
            95: {
                x: 1161.086,
                y: -38.436,
                sx: .624,
                sy: .755,
                a: .27
            },
            96: {
                x: 1163.802,
                y: -39.178,
                sx: .628,
                sy: .757,
                a: .29
            },
            97: {
                x: 1166.518,
                y: -39.869,
                sx: .632,
                sy: .758,
                a: .3
            },
            98: {
                x: 1169.234,
                y: -40.611,
                sx: .635,
                sy: .759,
                a: .31
            },
            99: {
                x: 1171.95,
                y: -41.303,
                sx: .639,
                sy: .761,
                a: .32
            },
            100: {
                x: 1174.666,
                y: -42.095,
                sx: .643,
                sy: .762,
                a: .34
            },
            101: {
                x: 1177.382,
                y: -42.786,
                sx: .646,
                sy: .763,
                a: .35
            },
            102: {
                x: 1180.081,
                y: -43.529,
                sx: .65,
                sy: .764,
                a: .36
            },
            103: {
                x: 1182.797,
                y: -44.22,
                sx: .654,
                sy: .766,
                a: .38
            },
            104: {
                x: 1185.513,
                y: -45.012,
                sx: .657,
                sy: .767,
                a: .39
            },
            105: {
                x: 1188.229,
                y: -45.704,
                sx: .661,
                sy: .768,
                a: .41
            },
            106: {
                x: 1190.911,
                y: -46.446,
                sx: .665,
                sy: .769,
                a: .42
            },
            107: {
                x: 1193.627,
                y: -47.137,
                sx: .669,
                sy: .771,
                a: .43
            },
            108: {
                x: 1196.343,
                y: -47.88,
                sx: .672,
                sy: .772,
                a: .45
            },
            109: {
                x: 1199.042,
                y: -48.621,
                sx: .676,
                sy: .773,
                a: .46
            },
            110: {
                x: 1201.759,
                y: -49.363,
                sx: .68,
                sy: .775,
                a: .47
            },
            111: {
                x: 1204.424,
                y: -50.055,
                sx: .683,
                sy: .776,
                a: .49
            },
            112: {
                x: 1207.141,
                y: -50.747,
                sx: .687,
                sy: .777,
                a: .5
            },
            113: {
                x: 1209.857,
                y: -51.539,
                sx: .691,
                sy: .778,
                a: .51
            },
            114: {
                x: 1212.573,
                y: -52.23,
                sx: .695,
                sy: .78,
                a: .53
            },
            115: {
                x: 1215.272,
                y: -52.972,
                sx: .698,
                sy: .781,
                a: .54
            },
            116: {
                x: 1217.988,
                y: -53.664,
                sx: .702,
                sy: .782,
                a: .55
            },
            117: {
                x: 1220.704,
                y: -54.456,
                sx: .706,
                sy: .783,
                a: .57
            },
            118: {
                x: 1223.42,
                y: -55.147,
                sx: .709,
                sy: .785,
                a: .58
            },
            119: {
                x: 1226.102,
                y: -55.89,
                sx: .713,
                sy: .786,
                a: .59
            },
            120: {
                x: 1228.818,
                y: -56.581,
                sx: .717,
                sy: .787,
                a: .61
            },
            121: {
                x: 1231.534,
                y: -57.323,
                sx: .72,
                sy: .789,
                a: .62
            },
            122: {
                x: 1234.233,
                y: -58.065,
                sx: .724,
                sy: .79,
                a: .64
            },
            123: {
                x: 1236.949,
                y: -58.807,
                sx: .728,
                sy: .791,
                a: .65
            },
            124: {
                x: 1239.665,
                y: -59.498,
                sx: .732,
                sy: .792,
                a: .66
            },
            125: {
                x: 1242.381,
                y: -60.24,
                sx: .735,
                sy: .794,
                a: .68
            },
            126: {
                x: 1245.047,
                y: -60.932,
                sx: .739,
                sy: .795,
                a: .69
            },
            127: {
                x: 1247.764,
                y: -61.724,
                sx: .743,
                sy: .796,
                a: .7
            },
            128: {
                x: 1250.48,
                y: -62.415,
                sx: .746,
                sy: .797,
                a: .71
            },
            129: {
                x: 1253.179,
                y: -63.157,
                sx: .75,
                sy: .799,
                a: .73
            },
            130: {
                x: 1255.911,
                y: -63.849,
                sx: .754,
                sy: .8,
                a: .74
            },
            131: {
                x: 1258.561,
                y: -64.591,
                sx: .758,
                sy: .801,
                a: .76
            },
            132: {
                x: 1261.243,
                y: -65.333,
                sx: .761,
                sy: .803,
                a: .77
            },
            133: {
                x: 1263.959,
                y: -66.025,
                sx: .765,
                sy: .804,
                a: .79
            },
            134: {
                x: 1266.675,
                y: -66.766,
                sx: .769,
                sy: .805,
                a: .8
            },
            135: {
                x: 1269.391,
                y: -67.458,
                sx: .772,
                sy: .806,
                a: .81
            },
            136: {
                x: 1272.09,
                y: -68.25,
                sx: .776,
                sy: .808,
                a: .82
            },
            137: {
                x: 1274.806,
                y: -68.942,
                sx: .78,
                sy: .809,
                a: .84
            },
            138: {
                x: 1277.522,
                y: -69.683,
                sx: .783,
                sy: .81,
                a: .85
            },
            139: {
                x: 1280.238,
                y: -70.375,
                sx: .787,
                sy: .812,
                a: .86
            },
            140: {
                x: 1282.954,
                y: -71.167,
                sx: .791,
                sy: .813,
                a: .88
            },
            141: {
                x: 1285.67,
                y: -71.859,
                sx: .795,
                sy: .814,
                a: .89
            },
            142: {
                x: 1288.32,
                y: -72.601,
                sx: .798,
                sy: .815,
                a: .91
            },
            143: {
                x: 1291.052,
                y: -73.293,
                sx: .802,
                sy: .817,
                a: .92
            },
            144: {
                x: 1293.768,
                y: -74.034,
                sx: .806,
                sy: .818,
                a: .93
            },
            145: {
                x: 1296.484,
                y: -74.777,
                sx: .809,
                sy: .819,
                a: .95
            },
            146: {
                x: 1299.2,
                y: -75.518,
                sx: .813,
                sy: .82,
                a: .96
            },
            147: {
                x: 1301.866,
                y: -76.21,
                sx: .817,
                sy: .822,
                a: .97
            },
            148: {
                x: 1304.582,
                y: -76.951,
                sx: .821,
                sy: .823,
                a: .99
            },
            149: {
                x: 1307.3,
                y: -77.75,
                sx: .824,
                sy: .824,
                a: 1
            }
        }), this.labels.forEach((label, index) => {
            var labelEndPosition = this.labels[index + 1] ? this.labels[index + 1].position - 1 : this._totalFrames - 1;
            this.addAction(() => this.emit("label_end", this.currentLabel), labelEndPosition)
        })
    }), lib.bigWinDropletsSmall = Container.extend(function() {
        Container.call(this);
        var instance2 = new Sprite(fromFrame("bigWinDropletsSmall")).setTransform(-9.35, 43.1, 1, 1, -.152),
            instance1 = new Sprite(fromFrame("bigWinDropletsSmall")).setTransform(234.05, 33.15, .767, .767, 0, -.384, -2.758);
        this.addChild(instance2, instance1)
    }), lib.winShine = Container.extend(function() {
        Container.call(this);
        var instance2 = new Sprite(fromFrame("tile9ActiveFxParticles")).setTransform(-2.45, 27.6, 1, 1, -.175),
            instance1 = new Sprite(fromFrame("tile9ActiveFxParticles")).setTransform(202.95, 554.7, 1, 1, -3.054);
        this.addChild(instance2, instance1)
    }), lib.winShineLoop = MovieClip.extend(function() {
        MovieClip.call(this, {
            duration: 120
        });
        var instance2 = new lib.winShine,
            instance1 = new lib.winShine;
        this.addTimedChild(instance2, 0, 120, {
            0: {
                x: 217.55,
                y: -53.75,
                sx: .9,
                sy: .9,
                ky: 3.142,
                a: 0
            },
            1: {
                x: 217.758,
                y: -54.151,
                sx: .902,
                sy: .902,
                a: .02
            },
            2: {
                x: 218.017,
                y: -54.602,
                sx: .903,
                sy: .903,
                a: .04
            },
            3: {
                x: 218.225,
                y: -55.103,
                sx: .905,
                sy: .905,
                a: .05
            },
            4: {
                x: 218.487,
                y: -55.554,
                sx: .907,
                sy: .907,
                a: .07
            },
            5: {
                x: 218.695,
                y: -56.005,
                sx: .908,
                sy: .908,
                a: .09
            },
            6: {
                x: 218.906,
                y: -56.457,
                sx: .91,
                sy: .91,
                a: .1
            },
            7: {
                x: 219.168,
                y: -56.909,
                sx: .912,
                sy: .912,
                a: .12
            },
            8: {
                x: 219.376,
                y: -57.409,
                sx: .914,
                sy: .914,
                a: .14
            },
            9: {
                x: 219.635,
                y: -57.86,
                sx: .915,
                sy: .915,
                a: .15
            },
            10: {
                x: 219.846,
                y: -58.312,
                sx: .917,
                sy: .917,
                a: .17
            },
            11: {
                x: 220.055,
                y: -58.763,
                sx: .919,
                sy: .919,
                a: .19
            },
            12: {
                x: 220.313,
                y: -59.214,
                sx: .92,
                sy: .92,
                a: .2
            },
            13: {
                x: 220.525,
                y: -59.716,
                sx: .922,
                sy: .922,
                a: .22
            },
            14: {
                x: 220.733,
                y: -60.166,
                sx: .924,
                sy: .924,
                a: .24
            },
            15: {
                x: 220.991,
                y: -60.617,
                sx: .925,
                sy: .925,
                a: .25
            },
            16: {
                x: 221.203,
                y: -61.069,
                sx: .927,
                sy: .927,
                a: .27
            },
            17: {
                x: 221.461,
                y: -61.52,
                sx: .929,
                sy: .929,
                a: .29
            },
            18: {
                x: 221.673,
                y: -62.022,
                sx: .93,
                sy: .93,
                a: .3
            },
            19: {
                x: 221.884,
                y: -62.473,
                sx: .932,
                sy: .932,
                a: .32
            },
            20: {
                x: 222.143,
                y: -62.924,
                sx: .934,
                sy: .934,
                a: .34
            },
            21: {
                x: 222.351,
                y: -63.375,
                sx: .936,
                sy: .936,
                a: .36
            },
            22: {
                x: 222.563,
                y: -63.827,
                sx: .937,
                sy: .937,
                a: .37
            },
            23: {
                x: 222.821,
                y: -64.328,
                sx: .939,
                sy: .939,
                a: .39
            },
            24: {
                x: 223.029,
                y: -64.778,
                sx: .941,
                sy: .941,
                a: .41
            },
            25: {
                x: 223.291,
                y: -65.23,
                sx: .942,
                sy: .942,
                a: .42
            },
            26: {
                x: 223.499,
                y: -65.681,
                sx: .944,
                sy: .944,
                a: .44
            },
            27: {
                x: 223.707,
                y: -66.132,
                sx: .946,
                sy: .946,
                a: .46
            },
            28: {
                x: 223.969,
                y: -66.584,
                sx: .947,
                sy: .947,
                a: .47
            },
            29: {
                x: 224.177,
                y: -67.085,
                sx: .949,
                sy: .949,
                a: .49
            },
            30: {
                x: 224.392,
                y: -67.537,
                sx: .951,
                sy: .951,
                a: .51
            },
            31: {
                x: 224.651,
                y: -67.988,
                sx: .953,
                sy: .953,
                a: .53
            },
            32: {
                x: 224.859,
                y: -68.439,
                sx: .954,
                sy: .954,
                a: .54
            },
            33: {
                x: 225.121,
                y: -68.891,
                sx: .956,
                sy: .956,
                a: .56
            },
            34: {
                x: 225.329,
                y: -69.391,
                sx: .958,
                sy: .958,
                a: .58
            },
            35: {
                x: 225.537,
                y: -69.842,
                sx: .959,
                sy: .959,
                a: .59
            },
            36: {
                x: 225.799,
                y: -70.294,
                sx: .961,
                sy: .961,
                a: .61
            },
            37: {
                x: 226.007,
                y: -70.745,
                sx: .963,
                sy: .963,
                a: .63
            },
            38: {
                x: 226.265,
                y: -71.196,
                sx: .964,
                sy: .964,
                a: .64
            },
            39: {
                x: 226.477,
                y: -71.697,
                sx: .966,
                sy: .966,
                a: .66
            },
            40: {
                x: 226.685,
                y: -72.148,
                sx: .968,
                sy: .968,
                a: .68
            },
            41: {
                x: 226.944,
                y: -72.599,
                sx: .969,
                sy: .969,
                a: .7
            },
            42: {
                x: 227.159,
                y: -73.052,
                sx: .971,
                sy: .971,
                a: .71
            },
            43: {
                x: 227.367,
                y: -73.503,
                sx: .973,
                sy: .973,
                a: .73
            },
            44: {
                x: 227.625,
                y: -74.003,
                sx: .975,
                sy: .975,
                a: .75
            },
            45: {
                x: 227.837,
                y: -74.455,
                sx: .976,
                sy: .976,
                a: .76
            },
            46: {
                x: 228.095,
                y: -74.906,
                sx: .978,
                sy: .978,
                a: .78
            },
            47: {
                x: 228.303,
                y: -75.357,
                sx: .98,
                sy: .98,
                a: .8
            },
            48: {
                x: 228.515,
                y: -75.809,
                sx: .981,
                sy: .981,
                a: .81
            },
            49: {
                x: 228.773,
                y: -76.31,
                sx: .983,
                sy: .983,
                a: .83
            },
            50: {
                x: 228.982,
                y: -76.76,
                sx: .985,
                sy: .985,
                a: .85
            },
            51: {
                x: 229.193,
                y: -77.212,
                sx: .986,
                sy: .986,
                a: .86
            },
            52: {
                x: 229.452,
                y: -77.663,
                sx: .988,
                sy: .988,
                a: .88
            },
            53: {
                x: 229.66,
                y: -78.114,
                sx: .99,
                sy: .99,
                a: .9
            },
            54: {
                x: 229.925,
                y: -78.616,
                sx: .992,
                sy: .992,
                a: .91
            },
            55: {
                x: 230.133,
                y: -79.067,
                sx: .993,
                sy: .993,
                a: .93
            },
            56: {
                x: 230.345,
                y: -79.519,
                sx: .995,
                sy: .995,
                a: .95
            },
            57: {
                x: 230.603,
                y: -79.97,
                sx: .997,
                sy: .997,
                a: .96
            },
            58: {
                x: 230.811,
                y: -80.421,
                sx: .998,
                sy: .998,
                a: .98
            },
            59: {
                x: 231.1,
                y: -81,
                sx: 1,
                sy: 1,
                a: 1
            },
            60: {
                x: 231.334,
                y: -81.435,
                sx: 1.002,
                sy: 1.002,
                a: .98
            },
            61: {
                x: 231.569,
                y: -81.869,
                sx: 1.003,
                sy: 1.003,
                a: .96
            },
            62: {
                x: 231.807,
                y: -82.355,
                sx: 1.005,
                sy: 1.005,
                a: .95
            },
            63: {
                x: 232.041,
                y: -82.79,
                sx: 1.007,
                sy: 1.007,
                a: .93
            },
            64: {
                x: 232.225,
                y: -83.225,
                sx: 1.008,
                sy: 1.008,
                a: .92
            },
            65: {
                x: 232.46,
                y: -83.71,
                sx: 1.01,
                sy: 1.01,
                a: .9
            },
            66: {
                x: 232.694,
                y: -84.144,
                sx: 1.012,
                sy: 1.012,
                a: .88
            },
            67: {
                x: 232.932,
                y: -84.58,
                sx: 1.013,
                sy: 1.013,
                a: .87
            },
            68: {
                x: 233.166,
                y: -85.065,
                sx: 1.015,
                sy: 1.015,
                a: .85
            },
            69: {
                x: 233.351,
                y: -85.5,
                sx: 1.017,
                sy: 1.017,
                a: .83
            },
            70: {
                x: 233.585,
                y: -85.984,
                sx: 1.018,
                sy: 1.018,
                a: .82
            },
            71: {
                x: 233.819,
                y: -86.419,
                sx: 1.02,
                sy: 1.02,
                a: .8
            },
            72: {
                x: 234.057,
                y: -86.855,
                sx: 1.022,
                sy: 1.022,
                a: .79
            },
            73: {
                x: 234.292,
                y: -87.34,
                sx: 1.023,
                sy: 1.023,
                a: .77
            },
            74: {
                x: 234.476,
                y: -87.775,
                sx: 1.025,
                sy: 1.025,
                a: .75
            },
            75: {
                x: 234.71,
                y: -88.209,
                sx: 1.027,
                sy: 1.027,
                a: .73
            },
            76: {
                x: 234.945,
                y: -88.694,
                sx: 1.028,
                sy: 1.028,
                a: .71
            },
            77: {
                x: 235.183,
                y: -89.13,
                sx: 1.03,
                sy: 1.03,
                a: .7
            },
            78: {
                x: 235.417,
                y: -89.565,
                sx: 1.032,
                sy: 1.032,
                a: .68
            },
            79: {
                x: 235.601,
                y: -90.049,
                sx: 1.033,
                sy: 1.033,
                a: .67
            },
            80: {
                x: 235.836,
                y: -90.484,
                sx: 1.035,
                sy: 1.035,
                a: .65
            },
            81: {
                x: 236.07,
                y: -90.969,
                sx: 1.037,
                sy: 1.037,
                a: .63
            },
            82: {
                x: 236.308,
                y: -91.405,
                sx: 1.038,
                sy: 1.038,
                a: .62
            },
            83: {
                x: 236.542,
                y: -91.839,
                sx: 1.04,
                sy: 1.04,
                a: .6
            },
            84: {
                x: 236.727,
                y: -92.324,
                sx: 1.042,
                sy: 1.042,
                a: .58
            },
            85: {
                x: 236.961,
                y: -92.759,
                sx: 1.043,
                sy: 1.043,
                a: .57
            },
            86: {
                x: 237.196,
                y: -93.194,
                sx: 1.045,
                sy: 1.045,
                a: .55
            },
            87: {
                x: 237.433,
                y: -93.68,
                sx: 1.047,
                sy: 1.047,
                a: .54
            },
            88: {
                x: 237.668,
                y: -94.114,
                sx: 1.048,
                sy: 1.048,
                a: .52
            },
            89: {
                x: 237.852,
                y: -94.549,
                sx: 1.05,
                sy: 1.05,
                a: .5
            },
            90: {
                x: 238.087,
                y: -95.034,
                sx: 1.052,
                sy: 1.052,
                a: .48
            },
            91: {
                x: 238.321,
                y: -95.468,
                sx: 1.053,
                sy: 1.053,
                a: .46
            },
            92: {
                x: 238.559,
                y: -95.954,
                sx: 1.055,
                sy: 1.055,
                a: .45
            },
            93: {
                x: 238.793,
                y: -96.389,
                sx: 1.057,
                sy: 1.057,
                a: .43
            },
            94: {
                x: 238.978,
                y: -96.824,
                sx: 1.058,
                sy: 1.058,
                a: .42
            },
            95: {
                x: 239.212,
                y: -97.309,
                sx: 1.06,
                sy: 1.06,
                a: .4
            },
            96: {
                x: 239.446,
                y: -97.743,
                sx: 1.062,
                sy: 1.062,
                a: .38
            },
            97: {
                x: 239.684,
                y: -98.179,
                sx: 1.063,
                sy: 1.063,
                a: .37
            },
            98: {
                x: 239.919,
                y: -98.664,
                sx: 1.065,
                sy: 1.065,
                a: .35
            },
            99: {
                x: 240.103,
                y: -99.099,
                sx: 1.067,
                sy: 1.067,
                a: .33
            },
            100: {
                x: 240.337,
                y: -99.533,
                sx: 1.068,
                sy: 1.068,
                a: .32
            },
            101: {
                x: 240.572,
                y: -100.018,
                sx: 1.07,
                sy: 1.07,
                a: .3
            },
            102: {
                x: 240.81,
                y: -100.454,
                sx: 1.072,
                sy: 1.072,
                a: .29
            },
            103: {
                x: 241.044,
                y: -100.939,
                sx: 1.073,
                sy: 1.073,
                a: .27
            },
            104: {
                x: 241.228,
                y: -101.374,
                sx: 1.075,
                sy: 1.075,
                a: .25
            },
            105: {
                x: 241.463,
                y: -101.808,
                sx: 1.077,
                sy: 1.077,
                a: .23
            },
            106: {
                x: 241.697,
                y: -102.293,
                sx: 1.078,
                sy: 1.078,
                a: .21
            },
            107: {
                x: 241.935,
                y: -102.729,
                sx: 1.08,
                sy: 1.08,
                a: .2
            },
            108: {
                x: 242.169,
                y: -103.164,
                sx: 1.082,
                sy: 1.082,
                a: .18
            },
            109: {
                x: 242.354,
                y: -103.648,
                sx: 1.083,
                sy: 1.083,
                a: .17
            },
            110: {
                x: 242.588,
                y: -104.083,
                sx: 1.085,
                sy: 1.085,
                a: .15
            },
            111: {
                x: 242.822,
                y: -104.518,
                sx: 1.087,
                sy: 1.087,
                a: .13
            },
            112: {
                x: 243.06,
                y: -105.004,
                sx: 1.088,
                sy: 1.088,
                a: .12
            },
            113: {
                x: 243.295,
                y: -105.438,
                sx: 1.09,
                sy: 1.09,
                a: .1
            },
            114: {
                x: 243.479,
                y: -105.923,
                sx: 1.092,
                sy: 1.092,
                a: .08
            },
            115: {
                x: 243.713,
                y: -106.358,
                sx: 1.093,
                sy: 1.093,
                a: .07
            },
            116: {
                x: 243.948,
                y: -106.793,
                sx: 1.095,
                sy: 1.095,
                a: .05
            },
            117: {
                x: 244.186,
                y: -107.279,
                sx: 1.097,
                sy: 1.097,
                a: .04
            },
            118: {
                x: 244.42,
                y: -107.713,
                sx: 1.098,
                sy: 1.098,
                a: .02
            },
            119: {
                x: 244.55,
                y: -108.15,
                sx: 1.1,
                sy: 1.1,
                a: 0
            }
        }).addTimedChild(instance1, 0, 120, {
            0: {
                x: -39,
                y: -81,
                sx: 1,
                sy: 1,
                a: 1
            },
            1: {
                x: -39.216,
                y: -81.437,
                sx: 1.002,
                sy: 1.002,
                a: .98
            },
            2: {
                x: -39.432,
                y: -81.874,
                sx: 1.003,
                sy: 1.003,
                a: .96
            },
            3: {
                x: -39.648,
                y: -82.362,
                sx: 1.005,
                sy: 1.005,
                a: .95
            },
            4: {
                x: -39.914,
                y: -82.799,
                sx: 1.007,
                sy: 1.007,
                a: .93
            },
            5: {
                x: -40.13,
                y: -83.286,
                sx: 1.008,
                sy: 1.008,
                a: .91
            },
            6: {
                x: -40.346,
                y: -83.723,
                sx: 1.01,
                sy: 1.01,
                a: .9
            },
            7: {
                x: -40.562,
                y: -84.21,
                sx: 1.012,
                sy: 1.012,
                a: .88
            },
            8: {
                x: -40.828,
                y: -84.648,
                sx: 1.014,
                sy: 1.014,
                a: .86
            },
            9: {
                x: -41.044,
                y: -85.135,
                sx: 1.015,
                sy: 1.015,
                a: .85
            },
            10: {
                x: -41.261,
                y: -85.573,
                sx: 1.017,
                sy: 1.017,
                a: .83
            },
            11: {
                x: -41.477,
                y: -86.06,
                sx: 1.019,
                sy: 1.019,
                a: .81
            },
            12: {
                x: -41.743,
                y: -86.498,
                sx: 1.02,
                sy: 1.02,
                a: .8
            },
            13: {
                x: -41.959,
                y: -86.985,
                sx: 1.022,
                sy: 1.022,
                a: .78
            },
            14: {
                x: -42.175,
                y: -87.422,
                sx: 1.024,
                sy: 1.024,
                a: .76
            },
            15: {
                x: -42.391,
                y: -87.909,
                sx: 1.025,
                sy: 1.025,
                a: .75
            },
            16: {
                x: -42.657,
                y: -88.346,
                sx: 1.027,
                sy: 1.027,
                a: .73
            },
            17: {
                x: -42.874,
                y: -88.833,
                sx: 1.029,
                sy: 1.029,
                a: .71
            },
            18: {
                x: -43.09,
                y: -89.271,
                sx: 1.031,
                sy: 1.031,
                a: .7
            },
            19: {
                x: -43.306,
                y: -89.708,
                sx: 1.032,
                sy: 1.032,
                a: .68
            },
            20: {
                x: -43.572,
                y: -90.195,
                sx: 1.034,
                sy: 1.034,
                a: .66
            },
            21: {
                x: -43.788,
                y: -90.632,
                sx: 1.036,
                sy: 1.036,
                a: .64
            },
            22: {
                x: -44.004,
                y: -91.119,
                sx: 1.037,
                sy: 1.037,
                a: .63
            },
            23: {
                x: -44.22,
                y: -91.557,
                sx: 1.039,
                sy: 1.039,
                a: .61
            },
            24: {
                x: -44.486,
                y: -92.044,
                sx: 1.041,
                sy: 1.041,
                a: .59
            },
            25: {
                x: -44.702,
                y: -92.481,
                sx: 1.042,
                sy: 1.042,
                a: .58
            },
            26: {
                x: -44.918,
                y: -92.968,
                sx: 1.044,
                sy: 1.044,
                a: .56
            },
            27: {
                x: -45.134,
                y: -93.405,
                sx: 1.046,
                sy: 1.046,
                a: .54
            },
            28: {
                x: -45.4,
                y: -93.893,
                sx: 1.047,
                sy: 1.047,
                a: .53
            },
            29: {
                x: -45.617,
                y: -94.331,
                sx: 1.049,
                sy: 1.049,
                a: .51
            },
            30: {
                x: -45.832,
                y: -94.817,
                sx: 1.051,
                sy: 1.051,
                a: .49
            },
            31: {
                x: -46.049,
                y: -95.255,
                sx: 1.053,
                sy: 1.053,
                a: .47
            },
            32: {
                x: -46.315,
                y: -95.743,
                sx: 1.054,
                sy: 1.054,
                a: .46
            },
            33: {
                x: -46.531,
                y: -96.18,
                sx: 1.056,
                sy: 1.056,
                a: .44
            },
            34: {
                x: -46.747,
                y: -96.667,
                sx: 1.058,
                sy: 1.058,
                a: .42
            },
            35: {
                x: -46.963,
                y: -97.104,
                sx: 1.059,
                sy: 1.059,
                a: .41
            },
            36: {
                x: -47.229,
                y: -97.591,
                sx: 1.061,
                sy: 1.061,
                a: .39
            },
            37: {
                x: -47.445,
                y: -98.029,
                sx: 1.063,
                sy: 1.063,
                a: .37
            },
            38: {
                x: -47.661,
                y: -98.466,
                sx: 1.064,
                sy: 1.064,
                a: .36
            },
            39: {
                x: -47.877,
                y: -98.953,
                sx: 1.066,
                sy: 1.066,
                a: .34
            },
            40: {
                x: -48.143,
                y: -99.39,
                sx: 1.068,
                sy: 1.068,
                a: .32
            },
            41: {
                x: -48.359,
                y: -99.877,
                sx: 1.069,
                sy: 1.069,
                a: .3
            },
            42: {
                x: -48.576,
                y: -100.315,
                sx: 1.071,
                sy: 1.071,
                a: .29
            },
            43: {
                x: -48.792,
                y: -100.802,
                sx: 1.073,
                sy: 1.073,
                a: .27
            },
            44: {
                x: -49.058,
                y: -101.239,
                sx: 1.075,
                sy: 1.075,
                a: .25
            },
            45: {
                x: -49.274,
                y: -101.726,
                sx: 1.076,
                sy: 1.076,
                a: .24
            },
            46: {
                x: -49.49,
                y: -102.163,
                sx: 1.078,
                sy: 1.078,
                a: .22
            },
            47: {
                x: -49.706,
                y: -102.65,
                sx: 1.08,
                sy: 1.08,
                a: .2
            },
            48: {
                x: -49.972,
                y: -103.088,
                sx: 1.081,
                sy: 1.081,
                a: .19
            },
            49: {
                x: -50.188,
                y: -103.575,
                sx: 1.083,
                sy: 1.083,
                a: .17
            },
            50: {
                x: -50.405,
                y: -104.013,
                sx: 1.085,
                sy: 1.085,
                a: .15
            },
            51: {
                x: -50.621,
                y: -104.5,
                sx: 1.086,
                sy: 1.086,
                a: .14
            },
            52: {
                x: -50.887,
                y: -104.938,
                sx: 1.088,
                sy: 1.088,
                a: .12
            },
            53: {
                x: -51.103,
                y: -105.425,
                sx: 1.09,
                sy: 1.09,
                a: .1
            },
            54: {
                x: -51.319,
                y: -105.862,
                sx: 1.092,
                sy: 1.092,
                a: .09
            },
            55: {
                x: -51.535,
                y: -106.349,
                sx: 1.093,
                sy: 1.093,
                a: .07
            },
            56: {
                x: -51.801,
                y: -106.786,
                sx: 1.095,
                sy: 1.095,
                a: .05
            },
            57: {
                x: -52.017,
                y: -107.224,
                sx: 1.097,
                sy: 1.097,
                a: .04
            },
            58: {
                x: -52.233,
                y: -107.711,
                sx: 1.098,
                sy: 1.098,
                a: .02
            },
            59: {
                x: -52.45,
                y: -108.15,
                sx: 1.1,
                sy: 1.1,
                a: 0
            },
            60: {
                x: -25.45,
                y: -53.75,
                sx: .9,
                sy: .9
            },
            61: {
                x: -25.648,
                y: -54.151,
                sx: .902,
                sy: .902,
                a: .02
            },
            62: {
                x: -25.846,
                y: -54.602,
                sx: .903,
                sy: .903,
                a: .04
            },
            63: {
                x: -26.093,
                y: -55.103,
                sx: .905,
                sy: .905,
                a: .05
            },
            64: {
                x: -26.341,
                y: -55.554,
                sx: .907,
                sy: .907,
                a: .07
            },
            65: {
                x: -26.539,
                y: -56.005,
                sx: .908,
                sy: .908,
                a: .09
            },
            66: {
                x: -26.787,
                y: -56.457,
                sx: .91,
                sy: .91,
                a: .1
            },
            67: {
                x: -27.036,
                y: -56.909,
                sx: .912,
                sy: .912,
                a: .12
            },
            68: {
                x: -27.233,
                y: -57.409,
                sx: .914,
                sy: .914,
                a: .14
            },
            69: {
                x: -27.481,
                y: -57.86,
                sx: .915,
                sy: .915,
                a: .15
            },
            70: {
                x: -27.679,
                y: -58.312,
                sx: .917,
                sy: .917,
                a: .17
            },
            71: {
                x: -27.927,
                y: -58.763,
                sx: .919,
                sy: .919,
                a: .19
            },
            72: {
                x: -28.175,
                y: -59.214,
                sx: .92,
                sy: .92,
                a: .2
            },
            73: {
                x: -28.373,
                y: -59.716,
                sx: .922,
                sy: .922,
                a: .22
            },
            74: {
                x: -28.621,
                y: -60.166,
                sx: .924,
                sy: .924,
                a: .24
            },
            75: {
                x: -28.818,
                y: -60.617,
                sx: .925,
                sy: .925,
                a: .25
            },
            76: {
                x: -29.067,
                y: -61.069,
                sx: .927,
                sy: .927,
                a: .27
            },
            77: {
                x: -29.314,
                y: -61.52,
                sx: .929,
                sy: .929,
                a: .29
            },
            78: {
                x: -29.512,
                y: -62.022,
                sx: .93,
                sy: .93,
                a: .3
            },
            79: {
                x: -29.761,
                y: -62.473,
                sx: .932,
                sy: .932,
                a: .32
            },
            80: {
                x: -30.008,
                y: -62.924,
                sx: .934,
                sy: .934,
                a: .34
            },
            81: {
                x: -30.206,
                y: -63.375,
                sx: .936,
                sy: .936,
                a: .36
            },
            82: {
                x: -30.454,
                y: -63.827,
                sx: .937,
                sy: .937,
                a: .37
            },
            83: {
                x: -30.652,
                y: -64.328,
                sx: .939,
                sy: .939,
                a: .39
            },
            84: {
                x: -30.9,
                y: -64.778,
                sx: .941,
                sy: .941,
                a: .41
            },
            85: {
                x: -31.148,
                y: -65.23,
                sx: .942,
                sy: .942,
                a: .42
            },
            86: {
                x: -31.346,
                y: -65.681,
                sx: .944,
                sy: .944,
                a: .44
            },
            87: {
                x: -31.594,
                y: -66.132,
                sx: .946,
                sy: .946,
                a: .46
            },
            88: {
                x: -31.792,
                y: -66.584,
                sx: .947,
                sy: .947,
                a: .47
            },
            89: {
                x: -32.039,
                y: -67.085,
                sx: .949,
                sy: .949,
                a: .49
            },
            90: {
                x: -32.288,
                y: -67.537,
                sx: .951,
                sy: .951,
                a: .51
            },
            91: {
                x: -32.486,
                y: -67.988,
                sx: .953,
                sy: .953,
                a: .53
            },
            92: {
                x: -32.734,
                y: -68.439,
                sx: .954,
                sy: .954,
                a: .54
            },
            93: {
                x: -32.982,
                y: -68.891,
                sx: .956,
                sy: .956,
                a: .56
            },
            94: {
                x: -33.179,
                y: -69.391,
                sx: .958,
                sy: .958,
                a: .58
            },
            95: {
                x: -33.427,
                y: -69.842,
                sx: .959,
                sy: .959,
                a: .59
            },
            96: {
                x: -33.625,
                y: -70.294,
                sx: .961,
                sy: .961,
                a: .61
            },
            97: {
                x: -33.873,
                y: -70.745,
                sx: .963,
                sy: .963,
                a: .63
            },
            98: {
                x: -34.121,
                y: -71.196,
                sx: .964,
                sy: .964,
                a: .64
            },
            99: {
                x: -34.319,
                y: -71.697,
                sx: .966,
                sy: .966,
                a: .66
            },
            100: {
                x: -34.567,
                y: -72.148,
                sx: .968,
                sy: .968,
                a: .68
            },
            101: {
                x: -34.765,
                y: -72.599,
                sx: .969,
                sy: .969,
                a: .7
            },
            102: {
                x: -35.013,
                y: -73.052,
                sx: .971,
                sy: .971,
                a: .71
            },
            103: {
                x: -35.261,
                y: -73.503,
                sx: .973,
                sy: .973,
                a: .73
            },
            104: {
                x: -35.459,
                y: -74.003,
                sx: .975,
                sy: .975,
                a: .75
            },
            105: {
                x: -35.707,
                y: -74.455,
                sx: .976,
                sy: .976,
                a: .76
            },
            106: {
                x: -35.955,
                y: -74.906,
                sx: .978,
                sy: .978,
                a: .78
            },
            107: {
                x: -36.152,
                y: -75.357,
                sx: .98,
                sy: .98,
                a: .8
            },
            108: {
                x: -36.401,
                y: -75.809,
                sx: .981,
                sy: .981,
                a: .81
            },
            109: {
                x: -36.598,
                y: -76.31,
                sx: .983,
                sy: .983,
                a: .83
            },
            110: {
                x: -36.846,
                y: -76.76,
                sx: .985,
                sy: .985,
                a: .85
            },
            111: {
                x: -37.094,
                y: -77.212,
                sx: .986,
                sy: .986,
                a: .86
            },
            112: {
                x: -37.292,
                y: -77.663,
                sx: .988,
                sy: .988,
                a: .88
            },
            113: {
                x: -37.54,
                y: -78.114,
                sx: .99,
                sy: .99,
                a: .9
            },
            114: {
                x: -37.738,
                y: -78.616,
                sx: .992,
                sy: .992,
                a: .91
            },
            115: {
                x: -37.986,
                y: -79.067,
                sx: .993,
                sy: .993,
                a: .93
            },
            116: {
                x: -38.234,
                y: -79.519,
                sx: .995,
                sy: .995,
                a: .95
            },
            117: {
                x: -38.432,
                y: -79.97,
                sx: .997,
                sy: .997,
                a: .96
            },
            118: {
                x: -38.68,
                y: -80.421,
                sx: .998,
                sy: .998,
                a: .98
            },
            119: {
                x: -39,
                y: -81,
                sx: 1,
                sy: 1,
                a: 1
            }
        }), this.labels.forEach((label, index) => {
            var labelEndPosition = this.labels[index + 1] ? this.labels[index + 1].position - 1 : this._totalFrames - 1;
            this.addAction(() => this.emit("label_end", this.currentLabel), labelEndPosition)
        })
    }), lib.superWinSplashUpRight = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("superWinSplashUpRight")).setTransform(0, -13.8);
        this.addChild(instance1)
    }), lib.superWinSplashUpRightLoop = MovieClip.extend(function() {
        MovieClip.call(this, {
            duration: 150
        });
        var instance3 = new lib.superWinSplashUpRight,
            instance2 = new lib.superWinSplashUpRight,
            instance1 = (new lib.winShineLoop).setTransform(298.95, -38.9, .664, .773, 1.518);
        this.addTimedChild(instance3, 0, 150, {
            0: {
                x: 0,
                y: 27.55,
                sx: 1,
                sy: .96,
                r: -.039,
                a: 0
            },
            1: {
                x: -.2,
                y: 27.126,
                sx: 1.001,
                sy: .961,
                a: .01
            },
            2: {
                x: -.45,
                y: 26.602,
                sx: 1.002,
                sy: .962,
                a: .03
            },
            3: {
                x: -.7,
                y: 26.078,
                sx: 1.003,
                sy: .963,
                a: .04
            },
            4: {
                x: -1,
                y: 25.554,
                sx: 1.004,
                sy: .964,
                a: .05
            },
            5: {
                x: -1.25,
                y: 25.08,
                sx: 1.005,
                a: .07
            },
            6: {
                x: -1.5,
                y: 24.556,
                sx: 1.006,
                sy: .965,
                a: .08
            },
            7: {
                x: -1.75,
                y: 24.032,
                sx: 1.007,
                sy: .966,
                a: .09
            },
            8: {
                x: -2,
                y: 23.508,
                sx: 1.008,
                sy: .967,
                a: .11
            },
            9: {
                x: -2.25,
                y: 22.984,
                sy: .968,
                a: .12
            },
            10: {
                x: -2.55,
                y: 22.51,
                sx: 1.009,
                sy: .969,
                a: .14
            },
            11: {
                x: -2.8,
                y: 21.986,
                sx: 1.01,
                sy: .97,
                a: .15
            },
            12: {
                x: -3.05,
                y: 21.462,
                sx: 1.011,
                sy: .971,
                a: .16
            },
            13: {
                x: -3.3,
                y: 20.988,
                sx: 1.012,
                sy: .972,
                a: .18
            },
            14: {
                x: -3.55,
                y: 20.464,
                sx: 1.013,
                sy: .973,
                a: .19
            },
            15: {
                x: -3.8,
                y: 19.94,
                sx: 1.014,
                sy: .974,
                a: .2
            },
            16: {
                x: -4.1,
                y: 19.416,
                sx: 1.015,
                a: .21
            },
            17: {
                x: -4.35,
                y: 18.941,
                sx: 1.016,
                sy: .975,
                a: .23
            },
            18: {
                x: -4.6,
                y: 18.418,
                sx: 1.017,
                sy: .976,
                a: .24
            },
            19: {
                x: -4.8,
                y: 17.844,
                sx: 1.018,
                sy: .977,
                a: .26
            },
            20: {
                x: -5.05,
                y: 17.32,
                sx: 1.019,
                sy: .978,
                a: .27
            },
            21: {
                x: -5.35,
                y: 16.896,
                sx: 1.02,
                sy: .979,
                a: .29
            },
            22: {
                x: -5.65,
                y: 16.372,
                sx: 1.021,
                sy: .98,
                a: .3
            },
            23: {
                x: -5.85,
                y: 15.848,
                sx: 1.022,
                sy: .981,
                a: .31
            },
            24: {
                x: -6.1,
                y: 15.274,
                sx: 1.023,
                sy: .982,
                a: .32
            },
            25: {
                x: -6.4,
                y: 14.8,
                sx: 1.024,
                sy: .983,
                a: .34
            },
            26: {
                x: -6.65,
                y: 14.326,
                a: .35
            },
            27: {
                x: -6.85,
                y: 13.802,
                sx: 1.025,
                sy: .984,
                a: .36
            },
            28: {
                x: -7.15,
                y: 13.278,
                sx: 1.026,
                sy: .985,
                a: .38
            },
            29: {
                x: -7.45,
                y: 12.754,
                sx: 1.027,
                sy: .986,
                a: .39
            },
            30: {
                x: -7.7,
                y: 12.23,
                sx: 1.028,
                sy: .987,
                a: .41
            },
            31: {
                x: -7.9,
                y: 11.705,
                sx: 1.029,
                sy: .988,
                a: .42
            },
            32: {
                x: -8.15,
                y: 11.232,
                sx: 1.03,
                sy: .989,
                a: .43
            },
            33: {
                x: -8.45,
                y: 10.708,
                sx: 1.031,
                sy: .99,
                a: .45
            },
            34: {
                x: -8.75,
                y: 10.184,
                sx: 1.032,
                sy: .991,
                a: .46
            },
            35: {
                x: -8.95,
                y: 9.66,
                sx: 1.033,
                sy: .992,
                a: .47
            },
            36: {
                x: -9.2,
                y: 9.186,
                sx: 1.034,
                sy: .993,
                a: .49
            },
            37: {
                x: -9.5,
                y: 8.662,
                sx: 1.035,
                a: .5
            },
            38: {
                x: -9.75,
                y: 8.137,
                sx: 1.036,
                sy: .994,
                a: .51
            },
            39: {
                x: -9.95,
                y: 7.664,
                sx: 1.037,
                sy: .995,
                a: .53
            },
            40: {
                x: -10.25,
                y: 7.14,
                sx: 1.038,
                sy: .996,
                a: .54
            },
            41: {
                x: -10.5,
                y: 6.566,
                sx: 1.039,
                sy: .997,
                a: .55
            },
            42: {
                x: -10.8,
                y: 6.091,
                sx: 1.04,
                sy: .998,
                a: .57
            },
            43: {
                x: -11,
                y: 5.618,
                sx: 1.041,
                sy: .999,
                a: .58
            },
            44: {
                x: -11.25,
                y: 5.094,
                sy: 1,
                a: .59
            },
            45: {
                x: -11.5,
                y: 4.569,
                sx: 1.042,
                sy: 1.001,
                a: .61
            },
            46: {
                x: -11.85,
                y: 3.996,
                sx: 1.043,
                sy: 1.002,
                a: .62
            },
            47: {
                x: -12.05,
                y: 3.522,
                sx: 1.044,
                sy: 1.003,
                a: .64
            },
            48: {
                x: -12.3,
                y: 3.048,
                sx: 1.045,
                a: .65
            },
            49: {
                x: -12.55,
                y: 2.524,
                sx: 1.046,
                sy: 1.004,
                a: .66
            },
            50: {
                x: -12.8,
                y: 2,
                sx: 1.047,
                sy: 1.005,
                a: .68
            },
            51: {
                x: -13.05,
                y: 1.476,
                sx: 1.048,
                sy: 1.006,
                a: .69
            },
            52: {
                x: -13.3,
                y: .952,
                sx: 1.049,
                sy: 1.007,
                a: .7
            },
            53: {
                x: -13.6,
                y: .478,
                sx: 1.05,
                sy: 1.008,
                a: .71
            },
            54: {
                x: -13.85,
                y: -.046,
                sx: 1.051,
                sy: 1.009,
                a: .73
            },
            55: {
                x: -14.1,
                y: -.57,
                sx: 1.052,
                sy: 1.01,
                a: .74
            },
            56: {
                x: -14.35,
                y: -1.095,
                sx: 1.053,
                sy: 1.011,
                a: .76
            },
            57: {
                x: -14.6,
                y: -1.618,
                sx: 1.054,
                sy: 1.012,
                a: .77
            },
            58: {
                x: -14.8,
                y: -2.043,
                sx: 1.055,
                a: .79
            },
            59: {
                x: -15.15,
                y: -2.616,
                sx: 1.056,
                sy: 1.013,
                a: .8
            },
            60: {
                x: -15.4,
                y: -3.14,
                sx: 1.057,
                sy: 1.014,
                a: .81
            },
            61: {
                x: -15.65,
                y: -3.665,
                sx: 1.058,
                sy: 1.015,
                a: .82
            },
            62: {
                x: -15.85,
                y: -4.138,
                sy: 1.016,
                a: .84
            },
            63: {
                x: -16.15,
                y: -4.663,
                sx: 1.059,
                sy: 1.017,
                a: .85
            },
            64: {
                x: -16.4,
                y: -5.187,
                sx: 1.06,
                sy: 1.018,
                a: .86
            },
            65: {
                x: -16.7,
                y: -5.66,
                sx: 1.061,
                sy: 1.019,
                a: .88
            },
            66: {
                x: -16.9,
                y: -6.185,
                sx: 1.062,
                sy: 1.02,
                a: .89
            },
            67: {
                x: -17.2,
                y: -6.708,
                sx: 1.063,
                sy: 1.021,
                a: .91
            },
            68: {
                x: -17.45,
                y: -7.282,
                sx: 1.064,
                sy: 1.022,
                a: .92
            },
            69: {
                x: -17.7,
                y: -7.706,
                sx: 1.065,
                a: .93
            },
            70: {
                x: -17.9,
                y: -8.23,
                sx: 1.066,
                sy: 1.023,
                a: .95
            },
            71: {
                x: -18.25,
                y: -8.754,
                sx: 1.067,
                sy: 1.024,
                a: .96
            },
            72: {
                x: -18.5,
                y: -9.328,
                sx: 1.068,
                sy: 1.025,
                a: .97
            },
            73: {
                x: -18.7,
                y: -9.802,
                sx: 1.069,
                sy: 1.026,
                a: .99
            },
            74: {
                x: -19,
                y: -10.3,
                sx: 1.07,
                sy: 1.027,
                a: 1
            },
            75: {
                x: 0,
                y: 27.55,
                sx: 1,
                sy: .96,
                a: 0
            },
            76: {
                x: -.2,
                y: 27.126,
                sx: 1.001,
                sy: .961,
                a: .01
            },
            77: {
                x: -.45,
                y: 26.602,
                sx: 1.002,
                sy: .962,
                a: .03
            },
            78: {
                x: -.7,
                y: 26.078,
                sx: 1.003,
                sy: .963,
                a: .04
            },
            79: {
                x: -1,
                y: 25.554,
                sx: 1.004,
                sy: .964,
                a: .05
            },
            80: {
                x: -1.25,
                y: 25.08,
                sx: 1.005,
                a: .07
            },
            81: {
                x: -1.5,
                y: 24.556,
                sx: 1.006,
                sy: .965,
                a: .08
            },
            82: {
                x: -1.75,
                y: 24.032,
                sx: 1.007,
                sy: .966,
                a: .09
            },
            83: {
                x: -2,
                y: 23.508,
                sx: 1.008,
                sy: .967,
                a: .11
            },
            84: {
                x: -2.25,
                y: 22.984,
                sy: .968,
                a: .12
            },
            85: {
                x: -2.55,
                y: 22.51,
                sx: 1.009,
                sy: .969,
                a: .14
            },
            86: {
                x: -2.8,
                y: 21.986,
                sx: 1.01,
                sy: .97,
                a: .15
            },
            87: {
                x: -3.05,
                y: 21.462,
                sx: 1.011,
                sy: .971,
                a: .16
            },
            88: {
                x: -3.3,
                y: 20.988,
                sx: 1.012,
                sy: .972,
                a: .18
            },
            89: {
                x: -3.55,
                y: 20.464,
                sx: 1.013,
                sy: .973,
                a: .19
            },
            90: {
                x: -3.8,
                y: 19.94,
                sx: 1.014,
                sy: .974,
                a: .2
            },
            91: {
                x: -4.1,
                y: 19.416,
                sx: 1.015,
                a: .21
            },
            92: {
                x: -4.35,
                y: 18.941,
                sx: 1.016,
                sy: .975,
                a: .23
            },
            93: {
                x: -4.6,
                y: 18.418,
                sx: 1.017,
                sy: .976,
                a: .24
            },
            94: {
                x: -4.8,
                y: 17.844,
                sx: 1.018,
                sy: .977,
                a: .26
            },
            95: {
                x: -5.05,
                y: 17.32,
                sx: 1.019,
                sy: .978,
                a: .27
            },
            96: {
                x: -5.35,
                y: 16.896,
                sx: 1.02,
                sy: .979,
                a: .29
            },
            97: {
                x: -5.65,
                y: 16.372,
                sx: 1.021,
                sy: .98,
                a: .3
            },
            98: {
                x: -5.85,
                y: 15.848,
                sx: 1.022,
                sy: .981,
                a: .31
            },
            99: {
                x: -6.1,
                y: 15.274,
                sx: 1.023,
                sy: .982,
                a: .32
            },
            100: {
                x: -6.4,
                y: 14.8,
                sx: 1.024,
                sy: .983,
                a: .34
            },
            101: {
                x: -6.65,
                y: 14.326,
                a: .35
            },
            102: {
                x: -6.85,
                y: 13.802,
                sx: 1.025,
                sy: .984,
                a: .36
            },
            103: {
                x: -7.15,
                y: 13.278,
                sx: 1.026,
                sy: .985,
                a: .38
            },
            104: {
                x: -7.45,
                y: 12.754,
                sx: 1.027,
                sy: .986,
                a: .39
            },
            105: {
                x: -7.7,
                y: 12.23,
                sx: 1.028,
                sy: .987,
                a: .41
            },
            106: {
                x: -7.9,
                y: 11.705,
                sx: 1.029,
                sy: .988,
                a: .42
            },
            107: {
                x: -8.15,
                y: 11.232,
                sx: 1.03,
                sy: .989,
                a: .43
            },
            108: {
                x: -8.45,
                y: 10.708,
                sx: 1.031,
                sy: .99,
                a: .45
            },
            109: {
                x: -8.75,
                y: 10.184,
                sx: 1.032,
                sy: .991,
                a: .46
            },
            110: {
                x: -8.95,
                y: 9.66,
                sx: 1.033,
                sy: .992,
                a: .47
            },
            111: {
                x: -9.2,
                y: 9.186,
                sx: 1.034,
                sy: .993,
                a: .49
            },
            112: {
                x: -9.5,
                y: 8.662,
                sx: 1.035,
                a: .5
            },
            113: {
                x: -9.75,
                y: 8.137,
                sx: 1.036,
                sy: .994,
                a: .51
            },
            114: {
                x: -9.95,
                y: 7.664,
                sx: 1.037,
                sy: .995,
                a: .53
            },
            115: {
                x: -10.25,
                y: 7.14,
                sx: 1.038,
                sy: .996,
                a: .54
            },
            116: {
                x: -10.5,
                y: 6.566,
                sx: 1.039,
                sy: .997,
                a: .55
            },
            117: {
                x: -10.8,
                y: 6.091,
                sx: 1.04,
                sy: .998,
                a: .57
            },
            118: {
                x: -11,
                y: 5.618,
                sx: 1.041,
                sy: .999,
                a: .58
            },
            119: {
                x: -11.25,
                y: 5.094,
                sy: 1,
                a: .59
            },
            120: {
                x: -11.5,
                y: 4.569,
                sx: 1.042,
                sy: 1.001,
                a: .61
            },
            121: {
                x: -11.85,
                y: 3.996,
                sx: 1.043,
                sy: 1.002,
                a: .62
            },
            122: {
                x: -12.05,
                y: 3.522,
                sx: 1.044,
                sy: 1.003,
                a: .64
            },
            123: {
                x: -12.3,
                y: 3.048,
                sx: 1.045,
                a: .65
            },
            124: {
                x: -12.55,
                y: 2.524,
                sx: 1.046,
                sy: 1.004,
                a: .66
            },
            125: {
                x: -12.8,
                y: 2,
                sx: 1.047,
                sy: 1.005,
                a: .68
            },
            126: {
                x: -13.05,
                y: 1.476,
                sx: 1.048,
                sy: 1.006,
                a: .69
            },
            127: {
                x: -13.3,
                y: .952,
                sx: 1.049,
                sy: 1.007,
                a: .7
            },
            128: {
                x: -13.6,
                y: .478,
                sx: 1.05,
                sy: 1.008,
                a: .71
            },
            129: {
                x: -13.85,
                y: -.046,
                sx: 1.051,
                sy: 1.009,
                a: .73
            },
            130: {
                x: -14.1,
                y: -.57,
                sx: 1.052,
                sy: 1.01,
                a: .74
            },
            131: {
                x: -14.35,
                y: -1.095,
                sx: 1.053,
                sy: 1.011,
                a: .76
            },
            132: {
                x: -14.6,
                y: -1.618,
                sx: 1.054,
                sy: 1.012,
                a: .77
            },
            133: {
                x: -14.8,
                y: -2.043,
                sx: 1.055,
                a: .79
            },
            134: {
                x: -15.15,
                y: -2.616,
                sx: 1.056,
                sy: 1.013,
                a: .8
            },
            135: {
                x: -15.4,
                y: -3.14,
                sx: 1.057,
                sy: 1.014,
                a: .81
            },
            136: {
                x: -15.65,
                y: -3.665,
                sx: 1.058,
                sy: 1.015,
                a: .82
            },
            137: {
                x: -15.85,
                y: -4.138,
                sy: 1.016,
                a: .84
            },
            138: {
                x: -16.15,
                y: -4.663,
                sx: 1.059,
                sy: 1.017,
                a: .85
            },
            139: {
                x: -16.4,
                y: -5.187,
                sx: 1.06,
                sy: 1.018,
                a: .86
            },
            140: {
                x: -16.7,
                y: -5.66,
                sx: 1.061,
                sy: 1.019,
                a: .88
            },
            141: {
                x: -16.9,
                y: -6.185,
                sx: 1.062,
                sy: 1.02,
                a: .89
            },
            142: {
                x: -17.2,
                y: -6.708,
                sx: 1.063,
                sy: 1.021,
                a: .91
            },
            143: {
                x: -17.45,
                y: -7.282,
                sx: 1.064,
                sy: 1.022,
                a: .92
            },
            144: {
                x: -17.7,
                y: -7.706,
                sx: 1.065,
                a: .93
            },
            145: {
                x: -17.9,
                y: -8.23,
                sx: 1.066,
                sy: 1.023,
                a: .95
            },
            146: {
                x: -18.25,
                y: -8.754,
                sx: 1.067,
                sy: 1.024,
                a: .96
            },
            147: {
                x: -18.5,
                y: -9.328,
                sx: 1.068,
                sy: 1.025,
                a: .97
            },
            148: {
                x: -18.7,
                y: -9.802,
                sx: 1.069,
                sy: 1.026,
                a: .99
            },
            149: {
                x: -19,
                y: -10.3,
                sx: 1.07,
                sy: 1.027,
                a: 1
            }
        }).addTimedChild(instance2, 0, 150, {
            0: {
                x: -19,
                y: -10.3,
                sx: 1.07,
                sy: 1.027,
                r: -.039,
                a: 1
            },
            1: {
                x: -19.166,
                y: -10.758,
                sx: 1.071,
                sy: 1.028,
                a: .99
            },
            2: {
                x: -19.433,
                y: -11.217,
                sx: 1.072,
                sy: 1.029,
                a: .97
            },
            3: {
                x: -19.699,
                y: -11.776,
                sx: 1.073,
                sy: 1.03,
                a: .96
            },
            4: {
                x: -19.966,
                y: -12.285,
                a: .95
            },
            5: {
                x: -20.182,
                y: -12.794,
                sx: 1.074,
                sy: 1.031,
                a: .93
            },
            6: {
                x: -20.398,
                y: -13.303,
                sx: 1.075,
                sy: 1.032,
                a: .92
            },
            7: {
                x: -20.714,
                y: -13.711,
                sx: 1.076,
                sy: 1.033,
                a: .91
            },
            8: {
                x: -20.93,
                y: -14.27,
                sx: 1.077,
                sy: 1.034,
                a: .89
            },
            9: {
                x: -21.197,
                y: -14.78,
                sx: 1.078,
                sy: 1.035,
                a: .88
            },
            10: {
                x: -21.413,
                y: -15.238,
                sx: 1.079,
                sy: 1.036,
                a: .86
            },
            11: {
                x: -21.679,
                y: -15.797,
                sx: 1.08,
                sy: 1.037,
                a: .85
            },
            12: {
                x: -21.946,
                y: -16.306,
                sx: 1.081,
                sy: 1.038,
                a: .84
            },
            13: {
                x: -22.162,
                y: -16.764,
                sx: 1.082,
                a: .82
            },
            14: {
                x: -22.428,
                y: -17.274,
                sx: 1.083,
                sy: 1.039,
                a: .81
            },
            15: {
                x: -22.694,
                y: -17.782,
                sx: 1.084,
                sy: 1.04,
                a: .8
            },
            16: {
                x: -22.911,
                y: -18.291,
                sy: 1.041,
                a: .79
            },
            17: {
                x: -23.227,
                y: -18.8,
                sx: 1.085,
                sy: 1.042,
                a: .77
            },
            18: {
                x: -23.444,
                y: -19.209,
                sx: 1.086,
                sy: 1.043,
                a: .76
            },
            19: {
                x: -23.66,
                y: -19.767,
                sx: 1.087,
                sy: 1.044,
                a: .74
            },
            20: {
                x: -23.976,
                y: -20.277,
                sx: 1.088,
                sy: 1.045,
                a: .73
            },
            21: {
                x: -24.192,
                y: -20.735,
                sx: 1.089,
                a: .71
            },
            22: {
                x: -24.459,
                y: -21.294,
                sx: 1.09,
                sy: 1.046,
                a: .7
            },
            23: {
                x: -24.725,
                y: -21.803,
                sx: 1.091,
                sy: 1.047,
                a: .69
            },
            24: {
                x: -24.941,
                y: -22.212,
                sx: 1.092,
                sy: 1.048,
                a: .68
            },
            25: {
                x: -25.158,
                y: -22.771,
                sx: 1.093,
                sy: 1.049,
                a: .66
            },
            26: {
                x: -25.424,
                y: -23.28,
                sx: 1.094,
                sy: 1.05,
                a: .65
            },
            27: {
                x: -25.74,
                y: -23.789,
                sx: 1.095,
                sy: 1.051,
                a: .64
            },
            28: {
                x: -25.957,
                y: -24.297,
                sy: 1.052,
                a: .62
            },
            29: {
                x: -26.173,
                y: -24.756,
                sx: 1.096,
                sy: 1.053,
                a: .61
            },
            30: {
                x: -26.439,
                y: -25.265,
                sx: 1.097,
                a: .59
            },
            31: {
                x: -26.656,
                y: -25.773,
                sx: 1.098,
                sy: 1.054,
                a: .58
            },
            32: {
                x: -26.972,
                y: -26.233,
                sx: 1.099,
                sy: 1.055,
                a: .57
            },
            33: {
                x: -27.238,
                y: -26.792,
                sx: 1.1,
                sy: 1.056,
                a: .55
            },
            34: {
                x: -27.454,
                y: -27.301,
                sx: 1.101,
                sy: 1.057,
                a: .54
            },
            35: {
                x: -27.671,
                y: -27.809,
                sx: 1.102,
                sy: 1.058,
                a: .53
            },
            36: {
                x: -27.937,
                y: -28.268,
                sx: 1.103,
                sy: 1.059,
                a: .51
            },
            37: {
                x: -28.203,
                y: -28.727,
                sx: 1.104,
                sy: 1.06,
                a: .5
            },
            38: {
                x: -28.47,
                y: -29.286,
                sx: 1.105,
                a: .49
            },
            39: {
                x: -28.736,
                y: -29.795,
                sx: 1.106,
                sy: 1.061,
                a: .47
            },
            40: {
                x: -28.952,
                y: -30.253,
                sy: 1.062,
                a: .46
            },
            41: {
                x: -29.218,
                y: -30.812,
                sx: 1.107,
                sy: 1.063,
                a: .45
            },
            42: {
                x: -29.434,
                y: -31.271,
                sx: 1.108,
                sy: 1.064,
                a: .43
            },
            43: {
                x: -29.751,
                y: -31.73,
                sx: 1.109,
                sy: 1.065,
                a: .42
            },
            44: {
                x: -29.967,
                y: -32.289,
                sx: 1.11,
                sy: 1.066,
                a: .41
            },
            45: {
                x: -30.183,
                y: -32.798,
                sx: 1.111,
                sy: 1.067,
                a: .39
            },
            46: {
                x: -30.5,
                y: -33.306,
                sx: 1.112,
                sy: 1.068,
                a: .38
            },
            47: {
                x: -30.716,
                y: -33.815,
                sx: 1.113,
                a: .36
            },
            48: {
                x: -30.932,
                y: -34.224,
                sx: 1.114,
                sy: 1.069,
                a: .35
            },
            49: {
                x: -31.249,
                y: -34.783,
                sx: 1.115,
                sy: 1.07,
                a: .34
            },
            50: {
                x: -31.465,
                y: -35.292,
                sx: 1.116,
                sy: 1.071,
                a: .32
            },
            51: {
                x: -31.732,
                y: -35.751,
                sx: 1.117,
                sy: 1.072,
                a: .31
            },
            52: {
                x: -31.998,
                y: -36.309,
                sx: 1.118,
                sy: 1.073,
                a: .3
            },
            53: {
                x: -32.214,
                y: -36.818,
                sy: 1.074,
                a: .29
            },
            54: {
                x: -32.43,
                y: -37.227,
                sx: 1.119,
                sy: 1.075,
                a: .27
            },
            55: {
                x: -32.697,
                y: -37.786,
                sx: 1.12,
                a: .26
            },
            56: {
                x: -33.013,
                y: -38.295,
                sx: 1.121,
                sy: 1.076,
                a: .24
            },
            57: {
                x: -33.229,
                y: -38.754,
                sx: 1.122,
                sy: 1.077,
                a: .23
            },
            58: {
                x: -33.446,
                y: -39.312,
                sx: 1.123,
                sy: 1.078,
                a: .21
            },
            59: {
                x: -33.712,
                y: -39.721,
                sx: 1.124,
                sy: 1.079,
                a: .2
            },
            60: {
                x: -33.978,
                y: -40.28,
                sx: 1.125,
                sy: 1.08,
                a: .19
            },
            61: {
                x: -34.244,
                y: -40.789,
                sx: 1.126,
                sy: 1.081,
                a: .18
            },
            62: {
                x: -34.511,
                y: -41.248,
                sx: 1.127,
                sy: 1.082,
                a: .16
            },
            63: {
                x: -34.727,
                y: -41.806,
                sx: 1.128,
                a: .15
            },
            64: {
                x: -34.943,
                y: -42.315,
                sx: 1.129,
                sy: 1.083,
                a: .14
            },
            65: {
                x: -35.21,
                y: -42.724,
                sy: 1.084,
                a: .12
            },
            66: {
                x: -35.526,
                y: -43.283,
                sx: 1.13,
                sy: 1.085,
                a: .11
            },
            67: {
                x: -35.742,
                y: -43.792,
                sx: 1.131,
                sy: 1.086,
                a: .09
            },
            68: {
                x: -36.008,
                y: -44.251,
                sx: 1.132,
                sy: 1.087,
                a: .08
            },
            69: {
                x: -36.225,
                y: -44.809,
                sx: 1.133,
                sy: 1.088,
                a: .07
            },
            70: {
                x: -36.441,
                y: -45.268,
                sx: 1.134,
                sy: 1.089,
                a: .05
            },
            71: {
                x: -36.707,
                y: -45.777,
                sx: 1.135,
                sy: 1.09,
                a: .04
            },
            72: {
                x: -37.024,
                y: -46.286,
                sx: 1.136,
                a: .03
            },
            73: {
                x: -37.24,
                y: -46.745,
                sx: 1.137,
                sy: 1.091,
                a: .01
            },
            74: {
                x: -37.6,
                y: -47.3,
                sx: 1.138,
                sy: 1.092,
                a: 0
            },
            75: {
                x: -19,
                y: -10.3,
                sx: 1.07,
                sy: 1.027,
                a: 1
            },
            76: {
                x: -19.166,
                y: -10.758,
                sx: 1.071,
                sy: 1.028,
                a: .99
            },
            77: {
                x: -19.433,
                y: -11.217,
                sx: 1.072,
                sy: 1.029,
                a: .97
            },
            78: {
                x: -19.699,
                y: -11.776,
                sx: 1.073,
                sy: 1.03,
                a: .96
            },
            79: {
                x: -19.966,
                y: -12.285,
                a: .95
            },
            80: {
                x: -20.182,
                y: -12.794,
                sx: 1.074,
                sy: 1.031,
                a: .93
            },
            81: {
                x: -20.398,
                y: -13.303,
                sx: 1.075,
                sy: 1.032,
                a: .92
            },
            82: {
                x: -20.714,
                y: -13.711,
                sx: 1.076,
                sy: 1.033,
                a: .91
            },
            83: {
                x: -20.93,
                y: -14.27,
                sx: 1.077,
                sy: 1.034,
                a: .89
            },
            84: {
                x: -21.197,
                y: -14.78,
                sx: 1.078,
                sy: 1.035,
                a: .88
            },
            85: {
                x: -21.413,
                y: -15.238,
                sx: 1.079,
                sy: 1.036,
                a: .86
            },
            86: {
                x: -21.679,
                y: -15.797,
                sx: 1.08,
                sy: 1.037,
                a: .85
            },
            87: {
                x: -21.946,
                y: -16.306,
                sx: 1.081,
                sy: 1.038,
                a: .84
            },
            88: {
                x: -22.162,
                y: -16.764,
                sx: 1.082,
                a: .82
            },
            89: {
                x: -22.428,
                y: -17.274,
                sx: 1.083,
                sy: 1.039,
                a: .81
            },
            90: {
                x: -22.694,
                y: -17.782,
                sx: 1.084,
                sy: 1.04,
                a: .8
            },
            91: {
                x: -22.911,
                y: -18.291,
                sy: 1.041,
                a: .79
            },
            92: {
                x: -23.227,
                y: -18.8,
                sx: 1.085,
                sy: 1.042,
                a: .77
            },
            93: {
                x: -23.444,
                y: -19.209,
                sx: 1.086,
                sy: 1.043,
                a: .76
            },
            94: {
                x: -23.66,
                y: -19.767,
                sx: 1.087,
                sy: 1.044,
                a: .74
            },
            95: {
                x: -23.976,
                y: -20.277,
                sx: 1.088,
                sy: 1.045,
                a: .73
            },
            96: {
                x: -24.192,
                y: -20.735,
                sx: 1.089,
                a: .71
            },
            97: {
                x: -24.459,
                y: -21.294,
                sx: 1.09,
                sy: 1.046,
                a: .7
            },
            98: {
                x: -24.725,
                y: -21.803,
                sx: 1.091,
                sy: 1.047,
                a: .69
            },
            99: {
                x: -24.941,
                y: -22.212,
                sx: 1.092,
                sy: 1.048,
                a: .68
            },
            100: {
                x: -25.158,
                y: -22.771,
                sx: 1.093,
                sy: 1.049,
                a: .66
            },
            101: {
                x: -25.424,
                y: -23.28,
                sx: 1.094,
                sy: 1.05,
                a: .65
            },
            102: {
                x: -25.74,
                y: -23.789,
                sx: 1.095,
                sy: 1.051,
                a: .64
            },
            103: {
                x: -25.957,
                y: -24.297,
                sy: 1.052,
                a: .62
            },
            104: {
                x: -26.173,
                y: -24.756,
                sx: 1.096,
                sy: 1.053,
                a: .61
            },
            105: {
                x: -26.439,
                y: -25.265,
                sx: 1.097,
                a: .59
            },
            106: {
                x: -26.656,
                y: -25.773,
                sx: 1.098,
                sy: 1.054,
                a: .58
            },
            107: {
                x: -26.972,
                y: -26.233,
                sx: 1.099,
                sy: 1.055,
                a: .57
            },
            108: {
                x: -27.238,
                y: -26.792,
                sx: 1.1,
                sy: 1.056,
                a: .55
            },
            109: {
                x: -27.454,
                y: -27.301,
                sx: 1.101,
                sy: 1.057,
                a: .54
            },
            110: {
                x: -27.671,
                y: -27.809,
                sx: 1.102,
                sy: 1.058,
                a: .53
            },
            111: {
                x: -27.937,
                y: -28.268,
                sx: 1.103,
                sy: 1.059,
                a: .51
            },
            112: {
                x: -28.203,
                y: -28.727,
                sx: 1.104,
                sy: 1.06,
                a: .5
            },
            113: {
                x: -28.47,
                y: -29.286,
                sx: 1.105,
                a: .49
            },
            114: {
                x: -28.736,
                y: -29.795,
                sx: 1.106,
                sy: 1.061,
                a: .47
            },
            115: {
                x: -28.952,
                y: -30.253,
                sy: 1.062,
                a: .46
            },
            116: {
                x: -29.218,
                y: -30.812,
                sx: 1.107,
                sy: 1.063,
                a: .45
            },
            117: {
                x: -29.434,
                y: -31.271,
                sx: 1.108,
                sy: 1.064,
                a: .43
            },
            118: {
                x: -29.751,
                y: -31.73,
                sx: 1.109,
                sy: 1.065,
                a: .42
            },
            119: {
                x: -29.967,
                y: -32.289,
                sx: 1.11,
                sy: 1.066,
                a: .41
            },
            120: {
                x: -30.183,
                y: -32.798,
                sx: 1.111,
                sy: 1.067,
                a: .39
            },
            121: {
                x: -30.5,
                y: -33.306,
                sx: 1.112,
                sy: 1.068,
                a: .38
            },
            122: {
                x: -30.716,
                y: -33.815,
                sx: 1.113,
                a: .36
            },
            123: {
                x: -30.932,
                y: -34.224,
                sx: 1.114,
                sy: 1.069,
                a: .35
            },
            124: {
                x: -31.249,
                y: -34.783,
                sx: 1.115,
                sy: 1.07,
                a: .34
            },
            125: {
                x: -31.465,
                y: -35.292,
                sx: 1.116,
                sy: 1.071,
                a: .32
            },
            126: {
                x: -31.732,
                y: -35.751,
                sx: 1.117,
                sy: 1.072,
                a: .31
            },
            127: {
                x: -31.998,
                y: -36.309,
                sx: 1.118,
                sy: 1.073,
                a: .3
            },
            128: {
                x: -32.214,
                y: -36.818,
                sy: 1.074,
                a: .29
            },
            129: {
                x: -32.43,
                y: -37.227,
                sx: 1.119,
                sy: 1.075,
                a: .27
            },
            130: {
                x: -32.697,
                y: -37.786,
                sx: 1.12,
                a: .26
            },
            131: {
                x: -33.013,
                y: -38.295,
                sx: 1.121,
                sy: 1.076,
                a: .24
            },
            132: {
                x: -33.229,
                y: -38.754,
                sx: 1.122,
                sy: 1.077,
                a: .23
            },
            133: {
                x: -33.446,
                y: -39.312,
                sx: 1.123,
                sy: 1.078,
                a: .21
            },
            134: {
                x: -33.712,
                y: -39.721,
                sx: 1.124,
                sy: 1.079,
                a: .2
            },
            135: {
                x: -33.978,
                y: -40.28,
                sx: 1.125,
                sy: 1.08,
                a: .19
            },
            136: {
                x: -34.244,
                y: -40.789,
                sx: 1.126,
                sy: 1.081,
                a: .18
            },
            137: {
                x: -34.511,
                y: -41.248,
                sx: 1.127,
                sy: 1.082,
                a: .16
            },
            138: {
                x: -34.727,
                y: -41.806,
                sx: 1.128,
                a: .15
            },
            139: {
                x: -34.943,
                y: -42.315,
                sx: 1.129,
                sy: 1.083,
                a: .14
            },
            140: {
                x: -35.21,
                y: -42.724,
                sy: 1.084,
                a: .12
            },
            141: {
                x: -35.526,
                y: -43.283,
                sx: 1.13,
                sy: 1.085,
                a: .11
            },
            142: {
                x: -35.742,
                y: -43.792,
                sx: 1.131,
                sy: 1.086,
                a: .09
            },
            143: {
                x: -36.008,
                y: -44.251,
                sx: 1.132,
                sy: 1.087,
                a: .08
            },
            144: {
                x: -36.225,
                y: -44.809,
                sx: 1.133,
                sy: 1.088,
                a: .07
            },
            145: {
                x: -36.441,
                y: -45.268,
                sx: 1.134,
                sy: 1.089,
                a: .05
            },
            146: {
                x: -36.707,
                y: -45.777,
                sx: 1.135,
                sy: 1.09,
                a: .04
            },
            147: {
                x: -37.024,
                y: -46.286,
                sx: 1.136,
                a: .03
            },
            148: {
                x: -37.24,
                y: -46.745,
                sx: 1.137,
                sy: 1.091,
                a: .01
            },
            149: {
                x: -37.6,
                y: -47.3,
                sx: 1.138,
                sy: 1.092,
                a: 0
            }
        }).addTimedChild(instance1), this.labels.forEach((label, index) => {
            var labelEndPosition = this.labels[index + 1] ? this.labels[index + 1].position - 1 : this._totalFrames - 1;
            this.addAction(() => this.emit("label_end", this.currentLabel), labelEndPosition)
        })
    }), lib.superWinSplashSmallMc = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("superWinSplashSmall"));
        this.addChild(instance1)
    }), lib.superWinSplashSmallLoop = MovieClip.extend(function() {
        MovieClip.call(this, {
            duration: 150
        });
        var instance3 = new lib.superWinSplashSmallMc,
            instance2 = new lib.superWinSplashSmallMc,
            instance1 = (new lib.winShineLoop).setTransform(296.05, -56.1, .682, .776, 1.518);
        this.addTimedChild(instance3, 0, 150, {
            0: {
                x: 0,
                y: 27.55,
                sx: 1,
                sy: .96,
                r: -.039,
                a: 0
            },
            1: {
                x: -.2,
                y: 27.126,
                sx: 1.001,
                sy: .961,
                a: .01
            },
            2: {
                x: -.45,
                y: 26.601,
                sx: 1.002,
                sy: .962,
                a: .03
            },
            3: {
                x: -.65,
                y: 26.077,
                sx: 1.003,
                sy: .963,
                a: .04
            },
            4: {
                x: -1,
                y: 25.553,
                sx: 1.004,
                sy: .964,
                a: .05
            },
            5: {
                x: -1.25,
                y: 25.128,
                sx: 1.005,
                a: .07
            },
            6: {
                x: -1.45,
                y: 24.603,
                sx: 1.006,
                sy: .965,
                a: .08
            },
            7: {
                x: -1.7,
                y: 24.08,
                sy: .966,
                a: .09
            },
            8: {
                x: -2,
                y: 23.605,
                sx: 1.007,
                sy: .967,
                a: .11
            },
            9: {
                x: -2.25,
                y: 23.031,
                sx: 1.008,
                sy: .968,
                a: .12
            },
            10: {
                x: -2.5,
                y: 22.556,
                sx: 1.009,
                sy: .969,
                a: .13
            },
            11: {
                x: -2.75,
                y: 22.082,
                sx: 1.01,
                sy: .97,
                a: .15
            },
            12: {
                x: -3.05,
                y: 21.558,
                sx: 1.011,
                sy: .971,
                a: .16
            },
            13: {
                x: -3.25,
                y: 21.033,
                sx: 1.012,
                sy: .972,
                a: .17
            },
            14: {
                x: -3.5,
                y: 20.559,
                sx: 1.013,
                a: .19
            },
            15: {
                x: -3.75,
                y: 20.035,
                sx: 1.014,
                sy: .973,
                a: .2
            },
            16: {
                x: -4,
                y: 19.51,
                sx: 1.015,
                sy: .974,
                a: .21
            },
            17: {
                x: -4.3,
                y: 19.036,
                sx: 1.016,
                sy: .975,
                a: .23
            },
            18: {
                x: -4.55,
                y: 18.511,
                sx: 1.017,
                sy: .976,
                a: .24
            },
            19: {
                x: -4.75,
                y: 17.987,
                sx: 1.018,
                sy: .977,
                a: .25
            },
            20: {
                x: -5,
                y: 17.512,
                sx: 1.019,
                sy: .978,
                a: .27
            },
            21: {
                x: -5.3,
                y: 17.038,
                sx: 1.02,
                sy: .979,
                a: .28
            },
            22: {
                x: -5.55,
                y: 16.514,
                sy: .98,
                a: .29
            },
            23: {
                x: -5.8,
                y: 15.99,
                sx: 1.021,
                a: .31
            },
            24: {
                x: -6.05,
                y: 15.466,
                sx: 1.022,
                sy: .981,
                a: .32
            },
            25: {
                x: -6.3,
                y: 14.941,
                sx: 1.023,
                sy: .982,
                a: .33
            },
            26: {
                x: -6.55,
                y: 14.467,
                sx: 1.024,
                sy: .983,
                a: .35
            },
            27: {
                x: -6.8,
                y: 13.992,
                sx: 1.025,
                sy: .984,
                a: .36
            },
            28: {
                x: -7,
                y: 13.468,
                sx: 1.026,
                sy: .985,
                a: .38
            },
            29: {
                x: -7.3,
                y: 12.994,
                sx: 1.027,
                sy: .986,
                a: .39
            },
            30: {
                x: -7.6,
                y: 12.419,
                sx: 1.028,
                sy: .987,
                a: .4
            },
            31: {
                x: -7.8,
                y: 11.895,
                sx: 1.029,
                sy: .988,
                a: .41
            },
            32: {
                x: -8.05,
                y: 11.471,
                sx: 1.03,
                sy: .989,
                a: .43
            },
            33: {
                x: -8.3,
                y: 10.946,
                sx: 1.031,
                a: .44
            },
            34: {
                x: -8.55,
                y: 10.422,
                sx: 1.032,
                sy: .99,
                a: .45
            },
            35: {
                x: -8.85,
                y: 9.948,
                sx: 1.033,
                sy: .991,
                a: .46
            },
            36: {
                x: -9.1,
                y: 9.423,
                sy: .992,
                a: .48
            },
            37: {
                x: -9.3,
                y: 8.899,
                sx: 1.034,
                sy: .993,
                a: .49
            },
            38: {
                x: -9.6,
                y: 8.424,
                sx: 1.035,
                sy: .994,
                a: .51
            },
            39: {
                x: -9.85,
                y: 7.9,
                sx: 1.036,
                sy: .995,
                a: .52
            },
            40: {
                x: -10.1,
                y: 7.376,
                sx: 1.037,
                sy: .996,
                a: .54
            },
            41: {
                x: -10.35,
                y: 6.901,
                sx: 1.038,
                sy: .997,
                a: .55
            },
            42: {
                x: -10.65,
                y: 6.377,
                sx: 1.039,
                a: .56
            },
            43: {
                x: -10.9,
                y: 5.903,
                sx: 1.04,
                sy: .998,
                a: .57
            },
            44: {
                x: -11.1,
                y: 5.378,
                sx: 1.041,
                sy: .999,
                a: .59
            },
            45: {
                x: -11.35,
                y: 4.854,
                sx: 1.042,
                sy: 1,
                a: .6
            },
            46: {
                x: -11.6,
                y: 4.33,
                sx: 1.043,
                sy: 1.001,
                a: .61
            },
            47: {
                x: -11.9,
                y: 3.856,
                sx: 1.044,
                sy: 1.002,
                a: .63
            },
            48: {
                x: -12.15,
                y: 3.381,
                sx: 1.045,
                sy: 1.003,
                a: .64
            },
            49: {
                x: -12.4,
                y: 2.857,
                sx: 1.046,
                sy: 1.004,
                a: .65
            },
            50: {
                x: -12.6,
                y: 2.383,
                sx: 1.047,
                sy: 1.005,
                a: .67
            },
            51: {
                x: -12.9,
                y: 1.808,
                sy: 1.006,
                a: .68
            },
            52: {
                x: -13.15,
                y: 1.284,
                sx: 1.048,
                a: .69
            },
            53: {
                x: -13.35,
                y: .809,
                sx: 1.049,
                sy: 1.007,
                a: .71
            },
            54: {
                x: -13.65,
                y: .335,
                sx: 1.05,
                sy: 1.008,
                a: .72
            },
            55: {
                x: -13.95,
                y: -.189,
                sx: 1.051,
                sy: 1.009,
                a: .73
            },
            56: {
                x: -14.15,
                y: -.664,
                sx: 1.052,
                sy: 1.01,
                a: .75
            },
            57: {
                x: -14.4,
                y: -1.238,
                sx: 1.053,
                sy: 1.011,
                a: .76
            },
            58: {
                x: -14.65,
                y: -1.763,
                sx: 1.054,
                sy: 1.012,
                a: .77
            },
            59: {
                x: -14.9,
                y: -2.187,
                sx: 1.055,
                sy: 1.013,
                a: .79
            },
            60: {
                x: -15.2,
                y: -2.711,
                sx: 1.056,
                sy: 1.014,
                a: .8
            },
            61: {
                x: -15.45,
                y: -3.236,
                sx: 1.057,
                a: .81
            },
            62: {
                x: -15.65,
                y: -3.71,
                sx: 1.058,
                sy: 1.015,
                a: .83
            },
            63: {
                x: -15.9,
                y: -4.234,
                sx: 1.059,
                sy: 1.016,
                a: .84
            },
            64: {
                x: -16.2,
                y: -4.758,
                sx: 1.06,
                sy: 1.017,
                a: .85
            },
            65: {
                x: -16.4,
                y: -5.233,
                sy: 1.018,
                a: .87
            },
            66: {
                x: -16.7,
                y: -5.758,
                sx: 1.061,
                sy: 1.019,
                a: .88
            },
            67: {
                x: -16.95,
                y: -6.282,
                sx: 1.062,
                sy: 1.02,
                a: .89
            },
            68: {
                x: -17.2,
                y: -6.756,
                sx: 1.063,
                sy: 1.021,
                a: .91
            },
            69: {
                x: -17.45,
                y: -7.28,
                sx: 1.064,
                sy: 1.022,
                a: .92
            },
            70: {
                x: -17.7,
                y: -7.755,
                sx: 1.065,
                sy: 1.023,
                a: .93
            },
            71: {
                x: -17.95,
                y: -8.279,
                sx: 1.066,
                a: .95
            },
            72: {
                x: -18.25,
                y: -8.803,
                sx: 1.067,
                sy: 1.024,
                a: .96
            },
            73: {
                x: -18.5,
                y: -9.328,
                sx: 1.068,
                sy: 1.025,
                a: .97
            },
            74: {
                x: -18.75,
                y: -9.802,
                sx: 1.069,
                sy: 1.026,
                a: .99
            },
            75: {
                x: -19,
                y: -10.3,
                sx: 1.07,
                sy: 1.027,
                a: 1
            },
            76: {
                x: 0,
                y: 27.55,
                sx: 1,
                sy: .96,
                a: 0
            },
            77: {
                x: -.2,
                y: 27.076,
                sx: 1.001,
                sy: .961,
                a: .02
            },
            78: {
                x: -.45,
                y: 26.553,
                sx: 1.002,
                sy: .962,
                a: .03
            },
            79: {
                x: -.7,
                y: 26.079,
                sx: 1.003,
                sy: .963,
                a: .04
            },
            80: {
                x: -1.05,
                y: 25.506,
                sx: 1.004,
                sy: .964,
                a: .05
            },
            81: {
                x: -1.25,
                y: 25.032,
                sx: 1.005,
                sy: .965,
                a: .07
            },
            82: {
                x: -1.5,
                y: 24.508,
                sx: 1.006,
                a: .08
            },
            83: {
                x: -1.75,
                y: 23.984,
                sx: 1.007,
                sy: .966,
                a: .1
            },
            84: {
                x: -2.05,
                y: 23.461,
                sx: 1.008,
                sy: .967,
                a: .11
            },
            85: {
                x: -2.3,
                y: 22.937,
                sx: 1.009,
                sy: .968,
                a: .13
            },
            86: {
                x: -2.55,
                y: 22.464,
                sx: 1.01,
                sy: .969,
                a: .14
            },
            87: {
                x: -2.8,
                y: 21.89,
                sy: .97,
                a: .15
            },
            88: {
                x: -3.1,
                y: 21.366,
                sx: 1.011,
                sy: .971,
                a: .16
            },
            89: {
                x: -3.35,
                y: 20.892,
                sx: 1.012,
                sy: .972,
                a: .18
            },
            90: {
                x: -3.6,
                y: 20.319,
                sx: 1.013,
                sy: .973,
                a: .19
            },
            91: {
                x: -3.8,
                y: 19.845,
                sx: 1.014,
                sy: .974,
                a: .21
            },
            92: {
                x: -4.15,
                y: 19.322,
                sx: 1.015,
                sy: .975,
                a: .22
            },
            93: {
                x: -4.4,
                y: 18.748,
                sx: 1.016,
                sy: .976,
                a: .23
            },
            94: {
                x: -4.65,
                y: 18.274,
                sx: 1.017,
                a: .25
            },
            95: {
                x: -4.9,
                y: 17.75,
                sx: 1.018,
                sy: .977,
                a: .26
            },
            96: {
                x: -5.2,
                y: 17.177,
                sx: 1.019,
                sy: .978,
                a: .27
            },
            97: {
                x: -5.4,
                y: 16.703,
                sx: 1.02,
                sy: .979,
                a: .29
            },
            98: {
                x: -5.7,
                y: 16.23,
                sx: 1.021,
                sy: .98,
                a: .3
            },
            99: {
                x: -5.95,
                y: 15.706,
                sx: 1.022,
                sy: .981,
                a: .32
            },
            100: {
                x: -6.25,
                y: 15.132,
                sx: 1.023,
                sy: .982,
                a: .33
            },
            101: {
                x: -6.5,
                y: 14.609,
                sx: 1.024,
                sy: .983,
                a: .34
            },
            102: {
                x: -6.7,
                y: 14.135,
                sx: 1.025,
                sy: .984,
                a: .36
            },
            103: {
                x: -6.95,
                y: 13.612,
                sx: 1.026,
                sy: .985,
                a: .37
            },
            104: {
                x: -7.25,
                y: 13.088,
                sx: 1.027,
                sy: .986,
                a: .38
            },
            105: {
                x: -7.55,
                y: 12.564,
                sx: 1.028,
                sy: .987,
                a: .4
            },
            106: {
                x: -7.8,
                y: 11.99,
                sx: 1.029,
                a: .41
            },
            107: {
                x: -8,
                y: 11.516,
                sx: 1.03,
                sy: .988,
                a: .43
            },
            108: {
                x: -8.25,
                y: 11.043,
                sx: 1.031,
                sy: .989,
                a: .44
            },
            109: {
                x: -8.55,
                y: 10.469,
                sx: 1.032,
                sy: .99,
                a: .45
            },
            110: {
                x: -8.85,
                y: 9.946,
                sy: .991,
                a: .46
            },
            111: {
                x: -9.1,
                y: 9.422,
                sx: 1.033,
                sy: .992,
                a: .48
            },
            112: {
                x: -9.3,
                y: 8.948,
                sx: 1.034,
                sy: .993,
                a: .49
            },
            113: {
                x: -9.6,
                y: 8.425,
                sx: 1.035,
                sy: .994,
                a: .51
            },
            114: {
                x: -9.85,
                y: 7.901,
                sx: 1.036,
                sy: .995,
                a: .52
            },
            115: {
                x: -10.1,
                y: 7.377,
                sx: 1.037,
                sy: .996,
                a: .54
            },
            116: {
                x: -10.4,
                y: 6.804,
                sx: 1.038,
                sy: .997,
                a: .55
            },
            117: {
                x: -10.65,
                y: 6.28,
                sx: 1.039,
                sy: .998,
                a: .56
            },
            118: {
                x: -10.9,
                y: 5.857,
                sx: 1.04,
                sy: .999,
                a: .57
            },
            119: {
                x: -11.15,
                y: 5.283,
                sx: 1.041,
                a: .59
            },
            120: {
                x: -11.4,
                y: 4.759,
                sx: 1.042,
                sy: 1,
                a: .6
            },
            121: {
                x: -11.7,
                y: 4.236,
                sx: 1.043,
                sy: 1.001,
                a: .62
            },
            122: {
                x: -12,
                y: 3.662,
                sx: 1.044,
                sy: 1.002,
                a: .63
            },
            123: {
                x: -12.2,
                y: 3.238,
                sx: 1.045,
                sy: 1.003,
                a: .64
            },
            124: {
                x: -12.45,
                y: 2.715,
                sx: 1.046,
                sy: 1.004,
                a: .66
            },
            125: {
                x: -12.75,
                y: 2.141,
                sx: 1.047,
                sy: 1.005,
                a: .67
            },
            126: {
                x: -13,
                y: 1.617,
                sx: 1.048,
                sy: 1.006,
                a: .68
            },
            127: {
                x: -13.25,
                y: 1.094,
                sx: 1.049,
                sy: 1.007,
                a: .7
            },
            128: {
                x: -13.5,
                y: .67,
                sx: 1.05,
                sy: 1.008,
                a: .71
            },
            129: {
                x: -13.75,
                y: .097,
                sx: 1.051,
                sy: 1.009,
                a: .73
            },
            130: {
                x: -14.05,
                y: -.427,
                sx: 1.052,
                sy: 1.01,
                a: .74
            },
            131: {
                x: -14.3,
                y: -.951,
                sx: 1.053,
                a: .75
            },
            132: {
                x: -14.55,
                y: -1.474,
                sx: 1.054,
                sy: 1.011,
                a: .77
            },
            133: {
                x: -14.75,
                y: -1.948,
                sy: 1.012,
                a: .78
            },
            134: {
                x: -15.1,
                y: -2.472,
                sx: 1.055,
                sy: 1.013,
                a: .79
            },
            135: {
                x: -15.35,
                y: -3.046,
                sx: 1.056,
                sy: 1.014,
                a: .81
            },
            136: {
                x: -15.6,
                y: -3.569,
                sx: 1.057,
                sy: 1.015,
                a: .82
            },
            137: {
                x: -15.85,
                y: -4.043,
                sx: 1.058,
                sy: 1.016,
                a: .84
            },
            138: {
                x: -16.1,
                y: -4.616,
                sx: 1.059,
                sy: 1.017,
                a: .85
            },
            139: {
                x: -16.35,
                y: -5.09,
                sx: 1.06,
                sy: 1.018,
                a: .86
            },
            140: {
                x: -16.6,
                y: -5.614,
                sx: 1.061,
                sy: 1.019,
                a: .88
            },
            141: {
                x: -16.9,
                y: -6.187,
                sx: 1.062,
                sy: 1.02,
                a: .89
            },
            142: {
                x: -17.2,
                y: -6.66,
                sx: 1.063,
                sy: 1.021,
                a: .9
            },
            143: {
                x: -17.4,
                y: -7.184,
                sx: 1.064,
                a: .92
            },
            144: {
                x: -17.65,
                y: -7.658,
                sx: 1.065,
                sy: 1.022,
                a: .93
            },
            145: {
                x: -17.9,
                y: -8.232,
                sx: 1.066,
                sy: 1.023,
                a: .95
            },
            146: {
                x: -18.2,
                y: -8.755,
                sx: 1.067,
                sy: 1.024,
                a: .96
            },
            147: {
                x: -18.5,
                y: -9.229,
                sx: 1.068,
                sy: 1.025,
                a: .97
            },
            148: {
                x: -18.7,
                y: -9.803,
                sx: 1.069,
                sy: 1.026,
                a: .98
            },
            149: {
                x: -19,
                y: -10.3,
                sx: 1.07,
                sy: 1.027,
                a: 1
            }
        }).addTimedChild(instance2, 0, 150, {
            0: {
                x: -19,
                y: -10.3,
                sx: 1.07,
                sy: 1.027,
                r: -.039,
                a: 1
            },
            1: {
                x: -19.166,
                y: -10.758,
                sx: 1.071,
                sy: 1.028,
                a: .99
            },
            2: {
                x: -19.433,
                y: -11.217,
                sx: 1.072,
                sy: 1.029,
                a: .97
            },
            3: {
                x: -19.699,
                y: -11.776,
                sy: 1.03,
                a: .96
            },
            4: {
                x: -19.915,
                y: -12.235,
                sx: 1.073,
                a: .95
            },
            5: {
                x: -20.181,
                y: -12.744,
                sx: 1.074,
                sy: 1.031,
                a: .93
            },
            6: {
                x: -20.397,
                y: -13.252,
                sx: 1.075,
                sy: 1.032,
                a: .92
            },
            7: {
                x: -20.663,
                y: -13.711,
                sx: 1.076,
                sy: 1.033,
                a: .91
            },
            8: {
                x: -20.879,
                y: -14.219,
                sx: 1.077,
                sy: 1.034,
                a: .89
            },
            9: {
                x: -21.195,
                y: -14.678,
                sx: 1.078,
                sy: 1.035,
                a: .88
            },
            10: {
                x: -21.411,
                y: -15.237,
                sx: 1.079,
                sy: 1.036,
                a: .87
            },
            11: {
                x: -21.627,
                y: -15.696,
                sx: 1.08,
                sy: 1.037,
                a: .85
            },
            12: {
                x: -21.893,
                y: -16.205,
                sx: 1.081,
                a: .84
            },
            13: {
                x: -22.159,
                y: -16.663,
                sx: 1.082,
                sy: 1.038,
                a: .83
            },
            14: {
                x: -22.375,
                y: -17.172,
                sy: 1.039,
                a: .81
            },
            15: {
                x: -22.641,
                y: -17.68,
                sx: 1.083,
                sy: 1.04,
                a: .8
            },
            16: {
                x: -22.857,
                y: -18.139,
                sx: 1.084,
                sy: 1.041,
                a: .79
            },
            17: {
                x: -23.173,
                y: -18.698,
                sx: 1.085,
                sy: 1.042,
                a: .77
            },
            18: {
                x: -23.39,
                y: -19.157,
                sx: 1.086,
                sy: 1.043,
                a: .76
            },
            19: {
                x: -23.606,
                y: -19.615,
                sx: 1.087,
                a: .75
            },
            20: {
                x: -23.822,
                y: -20.124,
                sx: 1.088,
                sy: 1.044,
                a: .73
            },
            21: {
                x: -24.138,
                y: -20.633,
                sx: 1.089,
                sy: 1.045,
                a: .72
            },
            22: {
                x: -24.404,
                y: -21.141,
                sx: 1.09,
                sy: 1.046,
                a: .71
            },
            23: {
                x: -24.62,
                y: -21.65,
                sx: 1.091,
                sy: 1.047,
                a: .69
            },
            24: {
                x: -24.836,
                y: -22.159,
                sy: 1.048,
                a: .68
            },
            25: {
                x: -25.102,
                y: -22.568,
                sx: 1.092,
                sy: 1.049,
                a: .67
            },
            26: {
                x: -25.318,
                y: -23.077,
                sx: 1.093,
                sy: 1.05,
                a: .65
            },
            27: {
                x: -25.634,
                y: -23.585,
                sx: 1.094,
                a: .64
            },
            28: {
                x: -25.901,
                y: -24.094,
                sx: 1.095,
                sy: 1.051,
                a: .63
            },
            29: {
                x: -26.116,
                y: -24.603,
                sx: 1.096,
                sy: 1.052,
                a: .61
            },
            30: {
                x: -26.333,
                y: -25.111,
                sx: 1.097,
                sy: 1.053,
                a: .6
            },
            31: {
                x: -26.549,
                y: -25.57,
                sx: 1.098,
                sy: 1.054,
                a: .59
            },
            32: {
                x: -26.815,
                y: -26.029,
                sx: 1.099,
                sy: 1.055,
                a: .57
            },
            33: {
                x: -27.131,
                y: -26.538,
                sx: 1.1,
                sy: 1.056,
                a: .56
            },
            34: {
                x: -27.347,
                y: -27.046,
                sx: 1.101,
                sy: 1.057,
                a: .55
            },
            35: {
                x: -27.563,
                y: -27.555,
                a: .54
            },
            36: {
                x: -27.779,
                y: -28.064,
                sx: 1.102,
                sy: 1.058,
                a: .52
            },
            37: {
                x: -28.095,
                y: -28.522,
                sx: 1.103,
                sy: 1.059,
                a: .51
            },
            38: {
                x: -28.361,
                y: -29.031,
                sx: 1.104,
                sy: 1.06,
                a: .49
            },
            39: {
                x: -28.577,
                y: -29.49,
                sx: 1.105,
                sy: 1.061,
                a: .48
            },
            40: {
                x: -28.843,
                y: -29.999,
                sx: 1.106,
                sy: 1.062,
                a: .46
            },
            41: {
                x: -29.06,
                y: -30.557,
                sx: 1.107,
                sy: 1.063,
                a: .45
            },
            42: {
                x: -29.326,
                y: -30.966,
                sx: 1.108,
                a: .44
            },
            43: {
                x: -29.542,
                y: -31.475,
                sx: 1.109,
                sy: 1.064,
                a: .43
            },
            44: {
                x: -29.858,
                y: -31.983,
                sx: 1.11,
                sy: 1.065,
                a: .41
            },
            45: {
                x: -30.074,
                y: -32.492,
                sx: 1.111,
                sy: 1.066,
                a: .4
            },
            46: {
                x: -30.29,
                y: -32.951,
                sy: 1.067,
                a: .39
            },
            47: {
                x: -30.556,
                y: -33.46,
                sx: 1.112,
                sy: 1.068,
                a: .38
            },
            48: {
                x: -30.822,
                y: -33.968,
                sx: 1.113,
                sy: 1.069,
                a: .36
            },
            49: {
                x: -31.038,
                y: -34.427,
                sx: 1.114,
                sy: 1.07,
                a: .35
            },
            50: {
                x: -31.304,
                y: -34.936,
                sx: 1.115,
                a: .33
            },
            51: {
                x: -31.52,
                y: -35.444,
                sx: 1.116,
                sy: 1.071,
                a: .32
            },
            52: {
                x: -31.837,
                y: -35.953,
                sx: 1.117,
                sy: 1.072,
                a: .31
            },
            53: {
                x: -32.053,
                y: -36.412,
                sx: 1.118,
                sy: 1.073,
                a: .29
            },
            54: {
                x: -32.269,
                y: -36.921,
                sx: 1.119,
                sy: 1.074,
                a: .28
            },
            55: {
                x: -32.485,
                y: -37.429,
                sx: 1.12,
                sy: 1.075,
                a: .27
            },
            56: {
                x: -32.801,
                y: -37.888,
                sy: 1.076,
                a: .25
            },
            57: {
                x: -33.067,
                y: -38.397,
                sx: 1.121,
                sy: 1.077,
                a: .24
            },
            58: {
                x: -33.283,
                y: -38.906,
                sx: 1.122,
                a: .23
            },
            59: {
                x: -33.499,
                y: -39.414,
                sx: 1.123,
                sy: 1.078,
                a: .21
            },
            60: {
                x: -33.765,
                y: -39.823,
                sx: 1.124,
                sy: 1.079,
                a: .2
            },
            61: {
                x: -34.031,
                y: -40.382,
                sx: 1.125,
                sy: 1.08,
                a: .19
            },
            62: {
                x: -34.297,
                y: -40.89,
                sx: 1.126,
                sy: 1.081,
                a: .17
            },
            63: {
                x: -34.513,
                y: -41.349,
                sx: 1.127,
                sy: 1.082,
                a: .16
            },
            64: {
                x: -34.779,
                y: -41.858,
                sx: 1.128,
                sy: 1.083,
                a: .15
            },
            65: {
                x: -34.996,
                y: -42.367,
                sx: 1.129,
                a: .13
            },
            66: {
                x: -35.212,
                y: -42.825,
                sx: 1.13,
                sy: 1.084,
                a: .12
            },
            67: {
                x: -35.528,
                y: -43.284,
                sy: 1.085,
                a: .11
            },
            68: {
                x: -35.794,
                y: -43.843,
                sx: 1.131,
                sy: 1.086,
                a: .09
            },
            69: {
                x: -36.01,
                y: -44.351,
                sx: 1.132,
                sy: 1.087,
                a: .08
            },
            70: {
                x: -36.226,
                y: -44.81,
                sx: 1.133,
                sy: 1.088,
                a: .07
            },
            71: {
                x: -36.442,
                y: -45.369,
                sx: 1.134,
                sy: 1.089,
                a: .05
            },
            72: {
                x: -36.758,
                y: -45.778,
                sx: 1.135,
                sy: 1.09,
                a: .04
            },
            73: {
                x: -37.024,
                y: -46.286,
                sx: 1.136,
                a: .03
            },
            74: {
                x: -37.24,
                y: -46.745,
                sx: 1.137,
                sy: 1.091,
                a: .01
            },
            75: {
                x: -37.6,
                y: -47.3,
                sx: 1.138,
                sy: 1.092,
                a: 0
            },
            76: {
                x: -19,
                y: -10.3,
                sx: 1.07,
                sy: 1.027,
                a: 1
            },
            77: {
                x: -19.167,
                y: -10.759,
                sx: 1.071,
                sy: 1.028,
                a: .98
            },
            78: {
                x: -19.433,
                y: -11.268,
                sx: 1.072,
                sy: 1.029,
                a: .97
            },
            79: {
                x: -19.75,
                y: -11.777,
                sx: 1.073,
                sy: 1.03,
                a: .96
            },
            80: {
                x: -19.966,
                y: -12.336,
                sx: 1.074,
                sy: 1.031,
                a: .95
            },
            81: {
                x: -20.183,
                y: -12.795,
                a: .93
            },
            82: {
                x: -20.45,
                y: -13.303,
                sx: 1.075,
                sy: 1.032,
                a: .92
            },
            83: {
                x: -20.716,
                y: -13.813,
                sx: 1.076,
                sy: 1.033,
                a: .9
            },
            84: {
                x: -20.932,
                y: -14.322,
                sx: 1.077,
                sy: 1.034,
                a: .89
            },
            85: {
                x: -21.249,
                y: -14.83,
                sx: 1.078,
                sy: 1.035,
                a: .88
            },
            86: {
                x: -21.466,
                y: -15.339,
                sx: 1.079,
                sy: 1.036,
                a: .86
            },
            87: {
                x: -21.682,
                y: -15.898,
                sx: 1.08,
                sy: 1.037,
                a: .85
            },
            88: {
                x: -21.999,
                y: -16.308,
                sx: 1.081,
                sy: 1.038,
                a: .84
            },
            89: {
                x: -22.215,
                y: -16.816,
                sx: 1.082,
                sy: 1.039,
                a: .82
            },
            90: {
                x: -22.532,
                y: -17.375,
                sx: 1.083,
                a: .81
            },
            91: {
                x: -22.748,
                y: -17.834,
                sx: 1.084,
                sy: 1.04,
                a: .79
            },
            92: {
                x: -22.965,
                y: -18.393,
                sx: 1.085,
                sy: 1.041,
                a: .78
            },
            93: {
                x: -23.281,
                y: -18.902,
                sx: 1.086,
                sy: 1.042,
                a: .77
            },
            94: {
                x: -23.498,
                y: -19.411,
                sx: 1.087,
                sy: 1.043,
                a: .75
            },
            95: {
                x: -23.714,
                y: -19.87,
                sy: 1.044,
                a: .74
            },
            96: {
                x: -24.031,
                y: -20.429,
                sx: 1.088,
                sy: 1.045,
                a: .73
            },
            97: {
                x: -24.247,
                y: -20.938,
                sx: 1.089,
                sy: 1.046,
                a: .71
            },
            98: {
                x: -24.564,
                y: -21.397,
                sx: 1.09,
                sy: 1.047,
                a: .7
            },
            99: {
                x: -24.78,
                y: -21.956,
                sx: 1.091,
                sy: 1.048,
                a: .68
            },
            100: {
                x: -24.996,
                y: -22.415,
                sx: 1.092,
                a: .67
            },
            101: {
                x: -25.263,
                y: -22.924,
                sx: 1.093,
                sy: 1.049,
                a: .66
            },
            102: {
                x: -25.529,
                y: -23.433,
                sx: 1.094,
                sy: 1.05,
                a: .64
            },
            103: {
                x: -25.796,
                y: -23.992,
                sx: 1.095,
                sy: 1.051,
                a: .63
            },
            104: {
                x: -26.063,
                y: -24.501,
                sx: 1.096,
                sy: 1.052,
                a: .62
            },
            105: {
                x: -26.279,
                y: -24.96,
                sx: 1.097,
                sy: 1.053,
                a: .6
            },
            106: {
                x: -26.496,
                y: -25.468,
                sx: 1.098,
                sy: 1.054,
                a: .59
            },
            107: {
                x: -26.862,
                y: -25.977,
                sx: 1.099,
                sy: 1.055,
                a: .57
            },
            108: {
                x: -27.079,
                y: -26.487,
                sx: 1.1,
                sy: 1.056,
                a: .56
            },
            109: {
                x: -27.345,
                y: -26.996,
                a: .55
            },
            110: {
                x: -27.562,
                y: -27.555,
                sx: 1.101,
                sy: 1.057,
                a: .54
            },
            111: {
                x: -27.778,
                y: -28.013,
                sx: 1.102,
                sy: 1.058,
                a: .52
            },
            112: {
                x: -28.095,
                y: -28.522,
                sx: 1.103,
                sy: 1.059,
                a: .51
            },
            113: {
                x: -28.361,
                y: -29.031,
                sx: 1.104,
                sy: 1.06,
                a: .49
            },
            114: {
                x: -28.578,
                y: -29.54,
                sx: 1.105,
                sy: 1.061,
                a: .48
            },
            115: {
                x: -28.844,
                y: -30.049,
                sx: 1.106,
                sy: 1.062,
                a: .46
            },
            116: {
                x: -29.061,
                y: -30.558,
                sx: 1.107,
                sy: 1.063,
                a: .45
            },
            117: {
                x: -29.378,
                y: -31.067,
                sx: 1.108,
                sy: 1.064,
                a: .44
            },
            118: {
                x: -29.644,
                y: -31.526,
                sx: 1.109,
                a: .43
            },
            119: {
                x: -29.861,
                y: -32.085,
                sx: 1.11,
                sy: 1.065,
                a: .41
            },
            120: {
                x: -30.127,
                y: -32.594,
                sx: 1.111,
                sy: 1.066,
                a: .4
            },
            121: {
                x: -30.344,
                y: -33.053,
                sx: 1.112,
                sy: 1.067,
                a: .38
            },
            122: {
                x: -30.61,
                y: -33.612,
                sx: 1.113,
                sy: 1.068,
                a: .37
            },
            123: {
                x: -30.877,
                y: -34.071,
                sy: 1.069,
                a: .36
            },
            124: {
                x: -31.143,
                y: -34.63,
                sx: 1.114,
                sy: 1.07,
                a: .34
            },
            125: {
                x: -31.41,
                y: -35.089,
                sx: 1.115,
                sy: 1.071,
                a: .33
            },
            126: {
                x: -31.626,
                y: -35.648,
                sx: 1.116,
                sy: 1.072,
                a: .32
            },
            127: {
                x: -31.893,
                y: -36.157,
                sx: 1.117,
                sy: 1.073,
                a: .3
            },
            128: {
                x: -32.16,
                y: -36.616,
                sx: 1.118,
                a: .29
            },
            129: {
                x: -32.376,
                y: -37.125,
                sx: 1.119,
                sy: 1.074,
                a: .27
            },
            130: {
                x: -32.643,
                y: -37.633,
                sx: 1.12,
                sy: 1.075,
                a: .26
            },
            131: {
                x: -32.959,
                y: -38.142,
                sx: 1.121,
                sy: 1.076,
                a: .25
            },
            132: {
                x: -33.175,
                y: -38.652,
                sx: 1.122,
                sy: 1.077,
                a: .23
            },
            133: {
                x: -33.392,
                y: -39.211,
                sx: 1.123,
                sy: 1.078,
                a: .22
            },
            134: {
                x: -33.658,
                y: -39.72,
                sx: 1.124,
                sy: 1.079,
                a: .21
            },
            135: {
                x: -33.925,
                y: -40.178,
                sx: 1.125,
                sy: 1.08,
                a: .19
            },
            136: {
                x: -34.242,
                y: -40.687,
                sx: 1.126,
                sy: 1.081,
                a: .18
            },
            137: {
                x: -34.458,
                y: -41.196,
                sx: 1.127,
                a: .16
            },
            138: {
                x: -34.675,
                y: -41.705,
                sy: 1.082,
                a: .15
            },
            139: {
                x: -34.941,
                y: -42.214,
                sx: 1.128,
                sy: 1.083,
                a: .14
            },
            140: {
                x: -35.158,
                y: -42.723,
                sx: 1.129,
                sy: 1.084,
                a: .13
            },
            141: {
                x: -35.474,
                y: -43.182,
                sx: 1.13,
                sy: 1.085,
                a: .11
            },
            142: {
                x: -35.741,
                y: -43.741,
                sx: 1.131,
                sy: 1.086,
                a: .1
            },
            143: {
                x: -35.957,
                y: -44.25,
                sx: 1.132,
                sy: 1.087,
                a: .08
            },
            144: {
                x: -36.224,
                y: -44.759,
                sx: 1.133,
                sy: 1.088,
                a: .07
            },
            145: {
                x: -36.44,
                y: -45.268,
                sx: 1.134,
                sy: 1.089,
                a: .05
            },
            146: {
                x: -36.707,
                y: -45.727,
                sx: 1.135,
                a: .04
            },
            147: {
                x: -37.023,
                y: -46.286,
                sx: 1.136,
                sy: 1.09,
                a: .03
            },
            148: {
                x: -37.24,
                y: -46.745,
                sx: 1.137,
                sy: 1.091,
                a: .02
            },
            149: {
                x: -37.6,
                y: -47.3,
                sx: 1.138,
                sy: 1.092,
                a: 0
            }
        }).addTimedChild(instance1), this.labels.forEach((label, index) => {
            var labelEndPosition = this.labels[index + 1] ? this.labels[index + 1].position - 1 : this._totalFrames - 1;
            this.addAction(() => this.emit("label_end", this.currentLabel), labelEndPosition)
        })
    }), lib.megaWinWave1 = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("superWinSplashLeft")).setTransform(0, 0, 1.25, 1.25);
        this.addChild(instance1)
    }), lib.slotParticles1 = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("slotParticles1new"));
        this.addChild(instance1)
    }), lib.superWinSplashRight = MovieClip.extend(function() {
        MovieClip.call(this, {
            duration: 150
        });
        var instance7 = new lib.slotParticles1,
            instance6 = new lib.slotParticles1,
            instance5 = new lib.slotParticles1,
            instance4 = new lib.slotParticles1,
            instance3 = new lib.megaWinWave1,
            instance2 = new lib.megaWinWave1,
            instance1 = (new lib.winShineLoop).setTransform(-19.15, -26.75, 1.026, 1.166, .227);
        this.addTimedChild(instance7, 0, 150, {
            0: {
                x: 53.55,
                y: 148.95,
                sx: .812,
                sy: .812,
                r: -.819,
                a: .5
            },
            1: {
                x: 51.329,
                y: 149.91,
                sx: .815,
                sy: .815,
                r: -.823,
                a: .49
            },
            2: {
                x: 49.016,
                y: 150.873,
                sx: .817,
                sy: .817,
                r: -.827,
                a: .47
            },
            3: {
                x: 46.755,
                y: 151.826,
                sx: .819,
                sy: .819,
                r: -.832,
                a: .46
            },
            4: {
                x: 44.399,
                y: 152.829,
                sx: .822,
                sy: .822,
                r: -.836,
                a: .45
            },
            5: {
                x: 42.148,
                y: 153.779,
                sx: .824,
                sy: .824,
                r: -.84,
                a: .43
            },
            6: {
                x: 39.897,
                y: 154.774,
                sx: .827,
                sy: .827,
                r: -.844,
                a: .42
            },
            7: {
                x: 37.596,
                y: 155.762,
                sx: .829,
                sy: .829,
                r: -.848,
                a: .41
            },
            8: {
                x: 35.299,
                y: 156.798,
                sx: .831,
                sy: .831,
                r: -.853,
                a: .39
            },
            9: {
                x: 33.055,
                y: 157.833,
                sx: .834,
                sy: .834,
                r: -.857,
                a: .38
            },
            10: {
                x: 30.766,
                y: 158.861,
                sx: .836,
                sy: .836,
                r: -.861,
                a: .37
            },
            11: {
                x: 28.527,
                y: 159.839,
                sx: .839,
                sy: .839,
                r: -.865,
                a: .36
            },
            12: {
                x: 26.242,
                y: 161.008,
                sx: .841,
                sy: .841,
                r: -.869,
                a: .34
            },
            13: {
                x: 24.01,
                y: 162.071,
                sx: .843,
                sy: .843,
                r: -.874,
                a: .33
            },
            14: {
                x: 21.728,
                y: 163.134,
                sx: .846,
                sy: .846,
                r: -.878,
                a: .32
            },
            15: {
                x: 19.5,
                y: 164.19,
                sx: .848,
                sy: .848,
                r: -.882,
                a: .3
            },
            16: {
                x: 17.222,
                y: 165.294,
                sx: .851,
                sy: .851,
                r: -.886,
                a: .29
            },
            17: {
                x: 15,
                y: 166.39,
                sx: .853,
                sy: .853,
                r: -.89,
                a: .28
            },
            18: {
                x: 12.775,
                y: 167.487,
                sx: .856,
                sy: .856,
                r: -.894,
                a: .26
            },
            19: {
                x: 10.509,
                y: 168.629,
                sx: .858,
                sy: .858,
                r: -.899,
                a: .25
            },
            20: {
                x: 8.244,
                y: 169.718,
                sx: .86,
                sy: .86,
                r: -.903,
                a: .24
            },
            21: {
                x: 5.98,
                y: 170.901,
                sx: .863,
                sy: .863,
                r: -.907,
                a: .22
            },
            22: {
                x: 3.768,
                y: 172.076,
                sx: .865,
                sy: .865,
                r: -.911,
                a: .21
            },
            23: {
                x: 1.56,
                y: 173.197,
                sx: .868,
                sy: .868,
                r: -.915,
                a: .2
            },
            24: {
                x: -.646,
                y: 174.367,
                sx: .87,
                sy: .87,
                r: -.92,
                a: .18
            },
            25: {
                x: -2.854,
                y: 175.532,
                sx: .872,
                sy: .872,
                r: -.924,
                a: .17
            },
            26: {
                x: -5.057,
                y: 176.738,
                sx: .875,
                sy: .875,
                r: -.928,
                a: .16
            },
            27: {
                x: -7.305,
                y: 177.995,
                sx: .877,
                sy: .877,
                r: -.932,
                a: .14
            },
            28: {
                x: -9.505,
                y: 179.198,
                sx: .88,
                sy: .88,
                r: -.936,
                a: .13
            },
            29: {
                x: -11.701,
                y: 180.396,
                sx: .882,
                sy: .882,
                r: -.941,
                a: .12
            },
            30: {
                x: -13.844,
                y: 181.588,
                sx: .884,
                sy: .884,
                r: -.945,
                a: .11
            },
            31: {
                x: -16.083,
                y: 182.927,
                sx: .887,
                sy: .887,
                r: -.949,
                a: .09
            },
            32: {
                x: -18.225,
                y: 184.106,
                sx: .889,
                sy: .889,
                r: -.953,
                a: .08
            },
            33: {
                x: -20.41,
                y: 185.385,
                sx: .892,
                sy: .892,
                r: -.957,
                a: .07
            },
            34: {
                x: -22.597,
                y: 186.66,
                sx: .894,
                sy: .894,
                r: -.962,
                a: .05
            },
            35: {
                x: -24.83,
                y: 187.93,
                sx: .896,
                sy: .896,
                r: -.966,
                a: .04
            },
            36: {
                x: -26.962,
                y: 189.245,
                sx: .899,
                sy: .899,
                r: -.97,
                a: .03
            },
            37: {
                x: -29.14,
                y: 190.507,
                sx: .901,
                sy: .901,
                r: -.974,
                a: .01
            },
            38: {
                x: -31,
                y: 191.8,
                sx: .904,
                sy: .904,
                r: -.978,
                a: 0
            },
            39: {
                x: 317.15,
                y: 80.25,
                sx: .543,
                sy: .543,
                r: .066
            },
            40: {
                x: 314.877,
                y: 79.731,
                sx: .545,
                sy: .545,
                r: .056,
                a: .02
            },
            41: {
                x: 312.589,
                y: 79.171,
                sx: .548,
                sy: .548,
                r: .046,
                a: .03
            },
            42: {
                x: 310.213,
                y: 78.627,
                sx: .55,
                sy: .55,
                r: .036,
                a: .04
            },
            43: {
                x: 307.87,
                y: 78.097,
                sx: .553,
                sy: .553,
                r: .026,
                a: .05
            },
            44: {
                x: 305.496,
                y: 77.678,
                sx: .555,
                sy: .555,
                r: .016,
                a: .07
            },
            45: {
                x: 303.139,
                y: 77.28,
                sx: .558,
                sy: .558,
                r: .006,
                a: .08
            },
            46: {
                x: 300.769,
                y: 76.799,
                sx: .56,
                sy: .56,
                r: -.004,
                a: .1
            },
            47: {
                x: 298.419,
                y: 76.473,
                sx: .563,
                sy: .563,
                r: -.014,
                a: .11
            },
            48: {
                x: 296.031,
                y: 76.063,
                sx: .565,
                sy: .565,
                r: -.024,
                a: .13
            },
            49: {
                x: 293.576,
                y: 75.772,
                sx: .567,
                sy: .567,
                r: -.034,
                a: .14
            },
            50: {
                x: 291.192,
                y: 75.453,
                sx: .57,
                sy: .57,
                r: -.044,
                a: .15
            },
            51: {
                x: 288.766,
                y: 75.193,
                sx: .572,
                sy: .572,
                r: -.054,
                a: .16
            },
            52: {
                x: 286.309,
                y: 74.994,
                sx: .575,
                sy: .575,
                r: -.064,
                a: .18
            },
            53: {
                x: 283.929,
                y: 74.763,
                sx: .577,
                sy: .577,
                r: -.074,
                a: .19
            },
            54: {
                x: 281.425,
                y: 74.606,
                sx: .58,
                sy: .58,
                r: -.084,
                a: .21
            },
            55: {
                x: 278.974,
                y: 74.461,
                sx: .582,
                sy: .582,
                r: -.094,
                a: .22
            },
            56: {
                x: 276.55,
                y: 74.385,
                sx: .585,
                sy: .585,
                r: -.104,
                a: .23
            },
            57: {
                x: 274.095,
                y: 74.269,
                sx: .587,
                sy: .587,
                r: -.114,
                a: .25
            },
            58: {
                x: 271.594,
                y: 74.232,
                sx: .59,
                sy: .59,
                r: -.124,
                a: .26
            },
            59: {
                x: 269.165,
                y: 74.262,
                sx: .592,
                sy: .592,
                r: -.134,
                a: .27
            },
            60: {
                x: 266.659,
                y: 74.255,
                sx: .595,
                sy: .595,
                r: -.144,
                a: .29
            },
            61: {
                x: 264.17,
                y: 74.318,
                sx: .597,
                sy: .597,
                r: -.154,
                a: .3
            },
            62: {
                x: 261.635,
                y: 74.359,
                sx: .6,
                sy: .6,
                r: -.164,
                a: .32
            },
            63: {
                x: 259.124,
                y: 74.508,
                sx: .602,
                sy: .602,
                r: -.174,
                a: .33
            },
            64: {
                x: 256.674,
                y: 74.632,
                sx: .604,
                sy: .604,
                r: -.184,
                a: .34
            },
            65: {
                x: 254.13,
                y: 74.823,
                sx: .607,
                sy: .607,
                r: -.194,
                a: .36
            },
            66: {
                x: 251.701,
                y: 75.041,
                sx: .609,
                sy: .609,
                r: -.204,
                a: .37
            },
            67: {
                x: 249.094,
                y: 75.276,
                sx: .612,
                sy: .612,
                r: -.214,
                a: .38
            },
            68: {
                x: 246.647,
                y: 75.585,
                sx: .614,
                sy: .614,
                r: -.224,
                a: .4
            },
            69: {
                x: 244.102,
                y: 75.861,
                sx: .617,
                sy: .617,
                r: -.234,
                a: .41
            },
            70: {
                x: 241.632,
                y: 76.215,
                sx: .619,
                sy: .619,
                r: -.244,
                a: .43
            },
            71: {
                x: 239.073,
                y: 76.54,
                sx: .622,
                sy: .622,
                r: -.254,
                a: .44
            },
            72: {
                x: 236.559,
                y: 76.984,
                sx: .624,
                sy: .624,
                r: -.264,
                a: .45
            },
            73: {
                x: 234.012,
                y: 77.45,
                sx: .627,
                sy: .627,
                r: -.274,
                a: .46
            },
            74: {
                x: 231.532,
                y: 77.902,
                sx: .629,
                sy: .629,
                r: -.284,
                a: .48
            },
            75: {
                x: 229.011,
                y: 78.413,
                sx: .632,
                sy: .632,
                r: -.294,
                a: .49
            },
            76: {
                x: 226.487,
                y: 78.961,
                sx: .634,
                sy: .634,
                r: -.303,
                a: .51
            },
            77: {
                x: 223.979,
                y: 79.529,
                sx: .637,
                sy: .637,
                r: -.313,
                a: .52
            },
            78: {
                x: 221.491,
                y: 80.125,
                sx: .639,
                sy: .639,
                r: -.323,
                a: .54
            },
            79: {
                x: 218.988,
                y: 80.793,
                sx: .641,
                sy: .641,
                r: -.333,
                a: .55
            },
            80: {
                x: 216.453,
                y: 81.493,
                sx: .644,
                sy: .644,
                r: -.343,
                a: .56
            },
            81: {
                x: 213.924,
                y: 82.162,
                sx: .646,
                sy: .646,
                r: -.353,
                a: .57
            },
            82: {
                x: 211.459,
                y: 82.916,
                sx: .649,
                sy: .649,
                r: -.363,
                a: .59
            },
            83: {
                x: 208.937,
                y: 83.646,
                sx: .651,
                sy: .651,
                r: -.373,
                a: .6
            },
            84: {
                x: 206.48,
                y: 84.501,
                sx: .654,
                sy: .654,
                r: -.383,
                a: .62
            },
            85: {
                x: 203.933,
                y: 85.336,
                sx: .656,
                sy: .656,
                r: -.393,
                a: .63
            },
            86: {
                x: 201.482,
                y: 86.207,
                sx: .659,
                sy: .659,
                r: -.403,
                a: .64
            },
            87: {
                x: 198.988,
                y: 87.146,
                sx: .661,
                sy: .661,
                r: -.413,
                a: .66
            },
            88: {
                x: 196.451,
                y: 88.07,
                sx: .664,
                sy: .664,
                r: -.423,
                a: .67
            },
            89: {
                x: 194.023,
                y: 89.073,
                sx: .666,
                sy: .666,
                r: -.433,
                a: .68
            },
            90: {
                x: 191.531,
                y: 90.065,
                sx: .669,
                sy: .669,
                r: -.443,
                a: .7
            },
            91: {
                x: 189.109,
                y: 91.134,
                sx: .671,
                sy: .671,
                r: -.453,
                a: .71
            },
            92: {
                x: 186.641,
                y: 92.231,
                sx: .674,
                sy: .674,
                r: -.463,
                a: .73
            },
            93: {
                x: 184.22,
                y: 93.314,
                sx: .676,
                sy: .676,
                r: -.473,
                a: .74
            },
            94: {
                x: 181.795,
                y: 94.484,
                sx: .678,
                sy: .678,
                r: -.483,
                a: .75
            },
            95: {
                x: 179.379,
                y: 95.633,
                sx: .681,
                sy: .681,
                r: -.493,
                a: .77
            },
            96: {
                x: 176.967,
                y: 96.865,
                sx: .683,
                sy: .683,
                r: -.503,
                a: .78
            },
            97: {
                x: 174.549,
                y: 98.089,
                sx: .686,
                sy: .686,
                r: -.513,
                a: .79
            },
            98: {
                x: 172.091,
                y: 99.442,
                sx: .688,
                sy: .688,
                r: -.523,
                a: .81
            },
            99: {
                x: 169.785,
                y: 100.778,
                sx: .691,
                sy: .691,
                r: -.533,
                a: .82
            },
            100: {
                x: 167.364,
                y: 102.107,
                sx: .693,
                sy: .693,
                r: -.543,
                a: .84
            },
            101: {
                x: 165.062,
                y: 103.468,
                sx: .696,
                sy: .696,
                r: -.553,
                a: .85
            },
            102: {
                x: 162.654,
                y: 104.876,
                sx: .698,
                sy: .698,
                r: -.563,
                a: .86
            },
            103: {
                x: 160.344,
                y: 106.365,
                sx: .701,
                sy: .701,
                r: -.573,
                a: .88
            },
            104: {
                x: 157.975,
                y: 107.844,
                sx: .703,
                sy: .703,
                r: -.583,
                a: .89
            },
            105: {
                x: 155.669,
                y: 109.304,
                sx: .706,
                sy: .706,
                r: -.593,
                a: .9
            },
            106: {
                x: 153.367,
                y: 110.863,
                sx: .708,
                sy: .708,
                r: -.603,
                a: .92
            },
            107: {
                x: 151.1,
                y: 112.465,
                sx: .711,
                sy: .711,
                r: -.613,
                a: .93
            },
            108: {
                x: 148.841,
                y: 114.051,
                sx: .713,
                sy: .713,
                r: -.623,
                a: .95
            },
            109: {
                x: 146.526,
                y: 115.734,
                sx: .715,
                sy: .715,
                r: -.633,
                a: .96
            },
            110: {
                x: 144.301,
                y: 117.411,
                sx: .718,
                sy: .718,
                r: -.643,
                a: .97
            },
            111: {
                x: 142.084,
                y: 119.168,
                sx: .72,
                sy: .72,
                r: -.653,
                a: .98
            },
            112: {
                x: 140.1,
                y: 120.8,
                sx: .723,
                sy: .723,
                r: -.663,
                a: 1
            },
            113: {
                x: 137.801,
                y: 121.41,
                sx: .725,
                sy: .725,
                r: -.667,
                a: .99
            },
            114: {
                x: 135.505,
                y: 122.015,
                sx: .728,
                sy: .728,
                r: -.671,
                a: .97
            },
            115: {
                x: 133.213,
                y: 122.62,
                sx: .73,
                sy: .73,
                r: -.675,
                a: .96
            },
            116: {
                x: 130.921,
                y: 123.171,
                sx: .732,
                sy: .732,
                r: -.68,
                a: .95
            },
            117: {
                x: 128.632,
                y: 123.756,
                sx: .735,
                sy: .735,
                r: -.684,
                a: .93
            },
            118: {
                x: 126.289,
                y: 124.391,
                sx: .737,
                sy: .737,
                r: -.688,
                a: .92
            },
            119: {
                x: 124.001,
                y: 125.024,
                sx: .739,
                sy: .739,
                r: -.692,
                a: .91
            },
            120: {
                x: 121.713,
                y: 125.648,
                sx: .742,
                sy: .742,
                r: -.696,
                a: .89
            },
            121: {
                x: 119.377,
                y: 126.313,
                sx: .744,
                sy: .744,
                r: -.7,
                a: .88
            },
            122: {
                x: 117.082,
                y: 126.974,
                sx: .746,
                sy: .746,
                r: -.704,
                a: .87
            },
            123: {
                x: 114.746,
                y: 127.579,
                sx: .749,
                sy: .749,
                r: -.708,
                a: .86
            },
            124: {
                x: 112.462,
                y: 128.327,
                sx: .751,
                sy: .751,
                r: -.713,
                a: .84
            },
            125: {
                x: 110.174,
                y: 128.972,
                sx: .754,
                sy: .754,
                r: -.717,
                a: .83
            },
            126: {
                x: 107.839,
                y: 129.658,
                sx: .756,
                sy: .756,
                r: -.721,
                a: .82
            },
            127: {
                x: 105.552,
                y: 130.343,
                sx: .758,
                sy: .758,
                r: -.725,
                a: .8
            },
            128: {
                x: 103.269,
                y: 131.069,
                sx: .761,
                sy: .761,
                r: -.729,
                a: .79
            },
            129: {
                x: 101.032,
                y: 131.786,
                sx: .763,
                sy: .763,
                r: -.733,
                a: .78
            },
            130: {
                x: 98.7,
                y: 132.502,
                sx: .765,
                sy: .765,
                r: -.737,
                a: .77
            },
            131: {
                x: 96.417,
                y: 133.31,
                sx: .768,
                sy: .768,
                r: -.741,
                a: .75
            },
            132: {
                x: 94.084,
                y: 134.011,
                sx: .77,
                sy: .77,
                r: -.745,
                a: .74
            },
            133: {
                x: 91.848,
                y: 134.805,
                sx: .772,
                sy: .772,
                r: -.75,
                a: .73
            },
            134: {
                x: 89.564,
                y: 135.598,
                sx: .775,
                sy: .775,
                r: -.754,
                a: .71
            },
            135: {
                x: 87.233,
                y: 136.382,
                sx: .777,
                sy: .777,
                r: -.758,
                a: .7
            },
            136: {
                x: 84.904,
                y: 137.11,
                sx: .78,
                sy: .78,
                r: -.762,
                a: .69
            },
            137: {
                x: 82.666,
                y: 137.93,
                sx: .782,
                sy: .782,
                r: -.766,
                a: .68
            },
            138: {
                x: 80.434,
                y: 138.695,
                sx: .784,
                sy: .784,
                r: -.77,
                a: .66
            },
            139: {
                x: 78.104,
                y: 139.507,
                sx: .787,
                sy: .787,
                r: -.774,
                a: .65
            },
            140: {
                x: 75.817,
                y: 140.355,
                sx: .789,
                sy: .789,
                r: -.778,
                a: .64
            },
            141: {
                x: 73.535,
                y: 141.205,
                sx: .791,
                sy: .791,
                r: -.783,
                a: .63
            },
            142: {
                x: 71.251,
                y: 142.046,
                sx: .794,
                sy: .794,
                r: -.787,
                a: .61
            },
            143: {
                x: 69.023,
                y: 142.884,
                sx: .796,
                sy: .796,
                r: -.791,
                a: .6
            },
            144: {
                x: 66.732,
                y: 143.811,
                sx: .798,
                sy: .798,
                r: -.795,
                a: .59
            },
            145: {
                x: 64.501,
                y: 144.685,
                sx: .801,
                sy: .801,
                r: -.799,
                a: .57
            },
            146: {
                x: 62.218,
                y: 145.553,
                sx: .803,
                sy: .803,
                r: -.803,
                a: .56
            },
            147: {
                x: 59.984,
                y: 146.413,
                sx: .806,
                sy: .806,
                r: -.807,
                a: .55
            },
            148: {
                x: 57.751,
                y: 147.367,
                sx: .808,
                sy: .808,
                r: -.811,
                a: .53
            },
            149: {
                x: 55.4,
                y: 148.2,
                sx: .81,
                sy: .81,
                r: -.816,
                a: .52
            }
        }).addTimedChild(instance6, 0, 150, {
            0: {
                x: 229.85,
                y: 78.2,
                sx: .631,
                sy: .631,
                r: -.29,
                a: .49
            },
            1: {
                x: 227.439,
                y: 78.734,
                sx: .633,
                sy: .633,
                r: -.3,
                a: .5
            },
            2: {
                x: 225.013,
                y: 79.296,
                sx: .636,
                sy: .636,
                r: -.31,
                a: .52
            },
            3: {
                x: 222.527,
                y: 79.878,
                sx: .638,
                sy: .638,
                r: -.32,
                a: .53
            },
            4: {
                x: 220.017,
                y: 80.487,
                sx: .64,
                sy: .64,
                r: -.33,
                a: .54
            },
            5: {
                x: 217.585,
                y: 81.172,
                sx: .643,
                sy: .643,
                r: -.339,
                a: .55
            },
            6: {
                x: 215.094,
                y: 81.884,
                sx: .645,
                sy: .645,
                r: -.349,
                a: .57
            },
            7: {
                x: 212.58,
                y: 82.573,
                sx: .648,
                sy: .648,
                r: -.359,
                a: .58
            },
            8: {
                x: 210.151,
                y: 83.288,
                sx: .65,
                sy: .65,
                r: -.369,
                a: .6
            },
            9: {
                x: 207.7,
                y: 84.075,
                sx: .653,
                sy: .653,
                r: -.379,
                a: .61
            },
            10: {
                x: 205.235,
                y: 84.896,
                sx: .655,
                sy: .655,
                r: -.388,
                a: .62
            },
            11: {
                x: 202.794,
                y: 85.738,
                sx: .657,
                sy: .657,
                r: -.398,
                a: .64
            },
            12: {
                x: 200.338,
                y: 86.606,
                sx: .66,
                sy: .66,
                r: -.408,
                a: .65
            },
            13: {
                x: 197.908,
                y: 87.504,
                sx: .662,
                sy: .662,
                r: -.418,
                a: .66
            },
            14: {
                x: 195.465,
                y: 88.431,
                sx: .665,
                sy: .665,
                r: -.428,
                a: .68
            },
            15: {
                x: 193.043,
                y: 89.48,
                sx: .667,
                sy: .667,
                r: -.437,
                a: .69
            },
            16: {
                x: 190.6,
                y: 90.459,
                sx: .67,
                sy: .67,
                r: -.447,
                a: .7
            },
            17: {
                x: 188.242,
                y: 91.514,
                sx: .672,
                sy: .672,
                r: -.457,
                a: .72
            },
            18: {
                x: 185.811,
                y: 92.607,
                sx: .674,
                sy: .674,
                r: -.467,
                a: .73
            },
            19: {
                x: 183.409,
                y: 93.665,
                sx: .677,
                sy: .677,
                r: -.477,
                a: .75
            },
            20: {
                x: 181.028,
                y: 94.81,
                sx: .679,
                sy: .679,
                r: -.487,
                a: .76
            },
            21: {
                x: 178.582,
                y: 95.976,
                sx: .682,
                sy: .682,
                r: -.496,
                a: .77
            },
            22: {
                x: 176.258,
                y: 97.175,
                sx: .684,
                sy: .684,
                r: -.506,
                a: .79
            },
            23: {
                x: 173.863,
                y: 98.401,
                sx: .687,
                sy: .687,
                r: -.516,
                a: .8
            },
            24: {
                x: 171.493,
                y: 99.76,
                sx: .689,
                sy: .689,
                r: -.526,
                a: .81
            },
            25: {
                x: 169.196,
                y: 101.045,
                sx: .691,
                sy: .691,
                r: -.536,
                a: .82
            },
            26: {
                x: 166.835,
                y: 102.363,
                sx: .694,
                sy: .694,
                r: -.545,
                a: .84
            },
            27: {
                x: 164.492,
                y: 103.713,
                sx: .696,
                sy: .696,
                r: -.555,
                a: .85
            },
            28: {
                x: 162.229,
                y: 105.14,
                sx: .699,
                sy: .699,
                r: -.565,
                a: .87
            },
            29: {
                x: 159.884,
                y: 106.544,
                sx: .701,
                sy: .701,
                r: -.575,
                a: .88
            },
            30: {
                x: 157.573,
                y: 107.978,
                sx: .703,
                sy: .703,
                r: -.585,
                a: .89
            },
            31: {
                x: 155.336,
                y: 109.494,
                sx: .706,
                sy: .706,
                r: -.594,
                a: .91
            },
            32: {
                x: 153.071,
                y: 111.002,
                sx: .708,
                sy: .708,
                r: -.604,
                a: .92
            },
            33: {
                x: 150.781,
                y: 112.581,
                sx: .711,
                sy: .711,
                r: -.614,
                a: .93
            },
            34: {
                x: 148.555,
                y: 114.186,
                sx: .713,
                sy: .713,
                r: -.624,
                a: .95
            },
            35: {
                x: 146.36,
                y: 115.831,
                sx: .716,
                sy: .716,
                r: -.634,
                a: .96
            },
            36: {
                x: 144.093,
                y: 117.51,
                sx: .718,
                sy: .718,
                r: -.643,
                a: .97
            },
            37: {
                x: 141.94,
                y: 119.216,
                sx: .72,
                sy: .72,
                r: -.653,
                a: .99
            },
            38: {
                x: 140.1,
                y: 120.8,
                sx: .723,
                sy: .723,
                r: -.663,
                a: 1
            },
            39: {
                x: 138.1,
                y: 121.15,
                sx: .725,
                sy: .725,
                r: -.667,
                a: .99
            },
            40: {
                x: 135.783,
                y: 121.769,
                sx: .727,
                sy: .727,
                r: -.671,
                a: .98
            },
            41: {
                x: 133.364,
                y: 122.373,
                sx: .73,
                sy: .73,
                r: -.675,
                a: .96
            },
            42: {
                x: 130.952,
                y: 122.982,
                sx: .732,
                sy: .732,
                r: -.679,
                a: .95
            },
            43: {
                x: 128.538,
                y: 123.576,
                sx: .735,
                sy: .735,
                r: -.684,
                a: .93
            },
            44: {
                x: 126.18,
                y: 124.218,
                sx: .737,
                sy: .737,
                r: -.688,
                a: .92
            },
            45: {
                x: 123.817,
                y: 124.853,
                sx: .74,
                sy: .74,
                r: -.692,
                a: .91
            },
            46: {
                x: 121.357,
                y: 125.583,
                sx: .742,
                sy: .742,
                r: -.696,
                a: .89
            },
            47: {
                x: 118.995,
                y: 126.254,
                sx: .744,
                sy: .744,
                r: -.701,
                a: .88
            },
            48: {
                x: 116.587,
                y: 126.92,
                sx: .747,
                sy: .747,
                r: -.705,
                a: .87
            },
            49: {
                x: 114.183,
                y: 127.532,
                sx: .749,
                sy: .749,
                r: -.709,
                a: .85
            },
            50: {
                x: 111.824,
                y: 128.236,
                sx: .752,
                sy: .752,
                r: -.714,
                a: .84
            },
            51: {
                x: 109.418,
                y: 128.983,
                sx: .754,
                sy: .754,
                r: -.718,
                a: .82
            },
            52: {
                x: 107.06,
                y: 129.673,
                sx: .757,
                sy: .757,
                r: -.722,
                a: .81
            },
            53: {
                x: 104.658,
                y: 130.407,
                sx: .759,
                sy: .759,
                r: -.726,
                a: .8
            },
            54: {
                x: 102.298,
                y: 131.138,
                sx: .762,
                sy: .762,
                r: -.731,
                a: .79
            },
            55: {
                x: 99.946,
                y: 131.958,
                sx: .764,
                sy: .764,
                r: -.735,
                a: .77
            },
            56: {
                x: 97.543,
                y: 132.676,
                sx: .767,
                sy: .767,
                r: -.739,
                a: .76
            },
            57: {
                x: 95.187,
                y: 133.435,
                sx: .769,
                sy: .769,
                r: -.743,
                a: .75
            },
            58: {
                x: 92.732,
                y: 134.188,
                sx: .771,
                sy: .771,
                r: -.748,
                a: .73
            },
            59: {
                x: 90.379,
                y: 134.98,
                sx: .774,
                sy: .774,
                r: -.752,
                a: .72
            },
            60: {
                x: 88.077,
                y: 135.826,
                sx: .776,
                sy: .776,
                r: -.756,
                a: .7
            },
            61: {
                x: 85.673,
                y: 136.607,
                sx: .779,
                sy: .779,
                r: -.761,
                a: .69
            },
            62: {
                x: 83.321,
                y: 137.436,
                sx: .781,
                sy: .781,
                r: -.765,
                a: .68
            },
            63: {
                x: 80.916,
                y: 138.254,
                sx: .784,
                sy: .784,
                r: -.769,
                a: .66
            },
            64: {
                x: 78.615,
                y: 139.069,
                sx: .786,
                sy: .786,
                r: -.773,
                a: .65
            },
            65: {
                x: 76.216,
                y: 139.981,
                sx: .789,
                sy: .789,
                r: -.778,
                a: .64
            },
            66: {
                x: 73.81,
                y: 140.83,
                sx: .791,
                sy: .791,
                r: -.782,
                a: .62
            },
            67: {
                x: 71.51,
                y: 141.677,
                sx: .793,
                sy: .793,
                r: -.786,
                a: .61
            },
            68: {
                x: 69.109,
                y: 142.566,
                sx: .796,
                sy: .796,
                r: -.79,
                a: .59
            },
            69: {
                x: 66.804,
                y: 143.497,
                sx: .798,
                sy: .798,
                r: -.795,
                a: .58
            },
            70: {
                x: 64.453,
                y: 144.373,
                sx: .801,
                sy: .801,
                r: -.799,
                a: .57
            },
            71: {
                x: 62.099,
                y: 145.294,
                sx: .803,
                sy: .803,
                r: -.803,
                a: .55
            },
            72: {
                x: 59.749,
                y: 146.207,
                sx: .806,
                sy: .806,
                r: -.808,
                a: .54
            },
            73: {
                x: 57.394,
                y: 147.113,
                sx: .808,
                sy: .808,
                r: -.812,
                a: .53
            },
            74: {
                x: 55.041,
                y: 148.112,
                sx: .811,
                sy: .811,
                r: -.816,
                a: .52
            },
            75: {
                x: 52.683,
                y: 149.057,
                sx: .813,
                sy: .813,
                r: -.82,
                a: .5
            },
            76: {
                x: 50.335,
                y: 149.996,
                sx: .816,
                sy: .816,
                r: -.825,
                a: .49
            },
            77: {
                x: 48.025,
                y: 150.974,
                sx: .818,
                sy: .818,
                r: -.829,
                a: .47
            },
            78: {
                x: 45.724,
                y: 151.999,
                sx: .82,
                sy: .82,
                r: -.833,
                a: .46
            },
            79: {
                x: 43.416,
                y: 153.01,
                sx: .823,
                sy: .823,
                r: -.837,
                a: .45
            },
            80: {
                x: 41.115,
                y: 153.978,
                sx: .825,
                sy: .825,
                r: -.842,
                a: .43
            },
            81: {
                x: 38.707,
                y: 154.982,
                sx: .828,
                sy: .828,
                r: -.846,
                a: .42
            },
            82: {
                x: 36.45,
                y: 155.979,
                sx: .83,
                sy: .83,
                r: -.85,
                a: .41
            },
            83: {
                x: 34.145,
                y: 157.071,
                sx: .833,
                sy: .833,
                r: -.855,
                a: .39
            },
            84: {
                x: 31.785,
                y: 158.151,
                sx: .835,
                sy: .835,
                r: -.859,
                a: .38
            },
            85: {
                x: 29.48,
                y: 159.185,
                sx: .838,
                sy: .838,
                r: -.863,
                a: .37
            },
            86: {
                x: 27.168,
                y: 160.255,
                sx: .84,
                sy: .84,
                r: -.867,
                a: .35
            },
            87: {
                x: 24.907,
                y: 161.369,
                sx: .842,
                sy: .842,
                r: -.872,
                a: .34
            },
            88: {
                x: 22.648,
                y: 162.431,
                sx: .845,
                sy: .845,
                r: -.876,
                a: .32
            },
            89: {
                x: 20.286,
                y: 163.53,
                sx: .847,
                sy: .847,
                r: -.88,
                a: .31
            },
            90: {
                x: 18.024,
                y: 164.578,
                sx: .85,
                sy: .85,
                r: -.884,
                a: .3
            },
            91: {
                x: 15.71,
                y: 165.717,
                sx: .852,
                sy: .852,
                r: -.889,
                a: .29
            },
            92: {
                x: 13.447,
                y: 166.899,
                sx: .855,
                sy: .855,
                r: -.893,
                a: .27
            },
            93: {
                x: 11.182,
                y: 168.026,
                sx: .857,
                sy: .857,
                r: -.897,
                a: .26
            },
            94: {
                x: 8.864,
                y: 169.197,
                sx: .86,
                sy: .86,
                r: -.902,
                a: .24
            },
            95: {
                x: 6.596,
                y: 170.36,
                sx: .862,
                sy: .862,
                r: -.906,
                a: .23
            },
            96: {
                x: 4.328,
                y: 171.515,
                sx: .864,
                sy: .864,
                r: -.91,
                a: .21
            },
            97: {
                x: 2.061,
                y: 172.714,
                sx: .867,
                sy: .867,
                r: -.914,
                a: .2
            },
            98: {
                x: -.163,
                y: 173.858,
                sx: .869,
                sy: .869,
                r: -.919,
                a: .19
            },
            99: {
                x: -2.482,
                y: 175.047,
                sx: .872,
                sy: .872,
                r: -.923,
                a: .18
            },
            100: {
                x: -4.659,
                y: 176.273,
                sx: .874,
                sy: .874,
                r: -.927,
                a: .16
            },
            101: {
                x: -6.929,
                y: 177.55,
                sx: .877,
                sy: .877,
                r: -.931,
                a: .15
            },
            102: {
                x: -9.158,
                y: 178.766,
                sx: .879,
                sy: .879,
                r: -.936,
                a: .14
            },
            103: {
                x: -11.384,
                y: 179.978,
                sx: .882,
                sy: .882,
                r: -.94,
                a: .12
            },
            104: {
                x: -13.658,
                y: 181.28,
                sx: .884,
                sy: .884,
                r: -.944,
                a: .11
            },
            105: {
                x: -15.842,
                y: 182.527,
                sx: .887,
                sy: .887,
                r: -.949,
                a: .09
            },
            106: {
                x: -18.171,
                y: 183.821,
                sx: .889,
                sy: .889,
                r: -.953,
                a: .08
            },
            107: {
                x: -20.356,
                y: 185.052,
                sx: .891,
                sy: .891,
                r: -.957,
                a: .07
            },
            108: {
                x: -22.539,
                y: 186.334,
                sx: .894,
                sy: .894,
                r: -.961,
                a: .05
            },
            109: {
                x: -24.778,
                y: 187.651,
                sx: .896,
                sy: .896,
                r: -.966,
                a: .04
            },
            110: {
                x: -26.962,
                y: 189.014,
                sx: .899,
                sy: .899,
                r: -.97,
                a: .03
            },
            111: {
                x: -29.153,
                y: 190.325,
                sx: .901,
                sy: .901,
                r: -.974,
                a: .01
            },
            112: {
                x: -31,
                y: 191.8,
                sx: .904,
                sy: .904,
                r: -.978,
                a: 0
            },
            113: {
                x: 317.15,
                y: 80.25,
                sx: .543,
                sy: .543,
                r: .066
            },
            114: {
                x: 314.908,
                y: 79.721,
                sx: .545,
                sy: .545,
                r: .056,
                a: .01
            },
            115: {
                x: 312.691,
                y: 79.2,
                sx: .548,
                sy: .548,
                r: .047,
                a: .03
            },
            116: {
                x: 310.41,
                y: 78.7,
                sx: .55,
                sy: .55,
                r: .037,
                a: .04
            },
            117: {
                x: 308.203,
                y: 78.162,
                sx: .552,
                sy: .552,
                r: .027,
                a: .05
            },
            118: {
                x: 305.912,
                y: 77.744,
                sx: .555,
                sy: .555,
                r: .018,
                a: .07
            },
            119: {
                x: 303.606,
                y: 77.287,
                sx: .557,
                sy: .557,
                r: .008,
                a: .08
            },
            120: {
                x: 301.314,
                y: 76.906,
                sx: .559,
                sy: .559,
                r: -.002,
                a: .09
            },
            121: {
                x: 299.006,
                y: 76.539,
                sx: .562,
                sy: .562,
                r: -.011,
                a: .11
            },
            122: {
                x: 296.72,
                y: 76.19,
                sx: .564,
                sy: .564,
                r: -.021,
                a: .12
            },
            123: {
                x: 294.354,
                y: 75.813,
                sx: .567,
                sy: .567,
                r: -.031,
                a: .13
            },
            124: {
                x: 292.014,
                y: 75.543,
                sx: .569,
                sy: .569,
                r: -.04,
                a: .15
            },
            125: {
                x: 289.691,
                y: 75.339,
                sx: .571,
                sy: .571,
                r: -.05,
                a: .16
            },
            126: {
                x: 287.338,
                y: 75.112,
                sx: .574,
                sy: .574,
                r: -.06,
                a: .17
            },
            127: {
                x: 284.973,
                y: 74.852,
                sx: .576,
                sy: .576,
                r: -.069,
                a: .19
            },
            128: {
                x: 282.609,
                y: 74.658,
                sx: .579,
                sy: .579,
                r: -.079,
                a: .2
            },
            129: {
                x: 280.223,
                y: 74.583,
                sx: .581,
                sy: .581,
                r: -.089,
                a: .21
            },
            130: {
                x: 277.912,
                y: 74.431,
                sx: .583,
                sy: .583,
                r: -.098,
                a: .23
            },
            131: {
                x: 275.464,
                y: 74.344,
                sx: .586,
                sy: .586,
                r: -.108,
                a: .24
            },
            132: {
                x: 273.082,
                y: 74.278,
                sx: .588,
                sy: .588,
                r: -.118,
                a: .25
            },
            133: {
                x: 270.731,
                y: 74.236,
                sx: .591,
                sy: .591,
                r: -.127,
                a: .27
            },
            134: {
                x: 268.283,
                y: 74.257,
                sx: .593,
                sy: .593,
                r: -.137,
                a: .28
            },
            135: {
                x: 265.91,
                y: 74.301,
                sx: .595,
                sy: .595,
                r: -.147,
                a: .29
            },
            136: {
                x: 263.508,
                y: 74.322,
                sx: .598,
                sy: .598,
                r: -.156,
                a: .31
            },
            137: {
                x: 261.014,
                y: 74.401,
                sx: .6,
                sy: .6,
                r: -.166,
                a: .32
            },
            138: {
                x: 258.648,
                y: 74.565,
                sx: .603,
                sy: .603,
                r: -.176,
                a: .33
            },
            139: {
                x: 256.2,
                y: 74.695,
                sx: .605,
                sy: .605,
                r: -.186,
                a: .35
            },
            140: {
                x: 253.803,
                y: 74.846,
                sx: .607,
                sy: .607,
                r: -.195,
                a: .36
            },
            141: {
                x: 251.38,
                y: 75.076,
                sx: .61,
                sy: .61,
                r: -.205,
                a: .38
            },
            142: {
                x: 248.926,
                y: 75.268,
                sx: .612,
                sy: .612,
                r: -.215,
                a: .39
            },
            143: {
                x: 246.524,
                y: 75.592,
                sx: .614,
                sy: .614,
                r: -.224,
                a: .4
            },
            144: {
                x: 244.09,
                y: 75.882,
                sx: .617,
                sy: .617,
                r: -.234,
                a: .41
            },
            145: {
                x: 241.625,
                y: 76.203,
                sx: .619,
                sy: .619,
                r: -.244,
                a: .43
            },
            146: {
                x: 239.175,
                y: 76.546,
                sx: .622,
                sy: .622,
                r: -.253,
                a: .44
            },
            147: {
                x: 236.735,
                y: 77.018,
                sx: .624,
                sy: .624,
                r: -.263,
                a: .45
            },
            148: {
                x: 234.35,
                y: 77.413,
                sx: .626,
                sy: .626,
                r: -.273,
                a: .47
            },
            149: {
                x: 231.8,
                y: 77.8,
                sx: .629,
                sy: .629,
                r: -.282,
                a: .48
            }
        }).addTimedChild(instance5, 0, 150, {
            0: {
                x: 111.35,
                y: 199.25,
                sx: .69,
                sy: .69,
                r: -.819,
                a: .5
            },
            1: {
                x: 109.409,
                y: 200.068,
                sx: .692,
                sy: .692,
                r: -.823,
                a: .49
            },
            2: {
                x: 107.534,
                y: 200.928,
                sx: .694,
                sy: .694,
                r: -.827,
                a: .47
            },
            3: {
                x: 105.558,
                y: 201.738,
                sx: .696,
                sy: .696,
                r: -.832,
                a: .46
            },
            4: {
                x: 103.582,
                y: 202.54,
                sx: .699,
                sy: .699,
                r: -.836,
                a: .45
            },
            5: {
                x: 101.659,
                y: 203.432,
                sx: .701,
                sy: .701,
                r: -.84,
                a: .43
            },
            6: {
                x: 99.74,
                y: 204.218,
                sx: .703,
                sy: .703,
                r: -.844,
                a: .42
            },
            7: {
                x: 97.779,
                y: 205.054,
                sx: .705,
                sy: .705,
                r: -.848,
                a: .41
            },
            8: {
                x: 95.815,
                y: 205.933,
                sx: .707,
                sy: .707,
                r: -.853,
                a: .39
            },
            9: {
                x: 93.906,
                y: 206.852,
                sx: .709,
                sy: .709,
                r: -.857,
                a: .38
            },
            10: {
                x: 91.949,
                y: 207.665,
                sx: .711,
                sy: .711,
                r: -.861,
                a: .37
            },
            11: {
                x: 90.042,
                y: 208.566,
                sx: .713,
                sy: .713,
                r: -.865,
                a: .36
            },
            12: {
                x: 88.144,
                y: 209.517,
                sx: .715,
                sy: .715,
                r: -.869,
                a: .34
            },
            13: {
                x: 86.195,
                y: 210.36,
                sx: .717,
                sy: .717,
                r: -.874,
                a: .33
            },
            14: {
                x: 84.247,
                y: 211.248,
                sx: .719,
                sy: .719,
                r: -.878,
                a: .32
            },
            15: {
                x: 82.352,
                y: 212.227,
                sx: .721,
                sy: .721,
                r: -.882,
                a: .3
            },
            16: {
                x: 80.462,
                y: 213.149,
                sx: .723,
                sy: .723,
                r: -.886,
                a: .29
            },
            17: {
                x: 78.522,
                y: 214.067,
                sx: .725,
                sy: .725,
                r: -.89,
                a: .28
            },
            18: {
                x: 76.633,
                y: 215.077,
                sx: .727,
                sy: .727,
                r: -.895,
                a: .26
            },
            19: {
                x: 74.702,
                y: 215.982,
                sx: .729,
                sy: .729,
                r: -.899,
                a: .25
            },
            20: {
                x: 72.818,
                y: 216.93,
                sx: .731,
                sy: .731,
                r: -.903,
                a: .24
            },
            21: {
                x: 70.94,
                y: 217.968,
                sx: .733,
                sy: .733,
                r: -.907,
                a: .22
            },
            22: {
                x: 69.015,
                y: 218.903,
                sx: .735,
                sy: .735,
                r: -.911,
                a: .21
            },
            23: {
                x: 67.138,
                y: 219.878,
                sx: .737,
                sy: .737,
                r: -.916,
                a: .2
            },
            24: {
                x: 65.267,
                y: 220.9,
                sx: .739,
                sy: .739,
                r: -.92,
                a: .18
            },
            25: {
                x: 63.394,
                y: 221.861,
                sx: .742,
                sy: .742,
                r: -.924,
                a: .17
            },
            26: {
                x: 61.48,
                y: 222.866,
                sx: .744,
                sy: .744,
                r: -.928,
                a: .16
            },
            27: {
                x: 59.608,
                y: 223.964,
                sx: .746,
                sy: .746,
                r: -.932,
                a: .14
            },
            28: {
                x: 57.745,
                y: 224.958,
                sx: .748,
                sy: .748,
                r: -.936,
                a: .13
            },
            29: {
                x: 55.833,
                y: 225.946,
                sx: .75,
                sy: .75,
                r: -.941,
                a: .12
            },
            30: {
                x: 54.021,
                y: 227.019,
                sx: .752,
                sy: .752,
                r: -.945,
                a: .11
            },
            31: {
                x: 52.116,
                y: 228.091,
                sx: .754,
                sy: .754,
                r: -.949,
                a: .09
            },
            32: {
                x: 50.26,
                y: 229.111,
                sx: .756,
                sy: .756,
                r: -.953,
                a: .08
            },
            33: {
                x: 48.409,
                y: 230.219,
                sx: .758,
                sy: .758,
                r: -.957,
                a: .07
            },
            34: {
                x: 46.55,
                y: 231.32,
                sx: .76,
                sy: .76,
                r: -.962,
                a: .05
            },
            35: {
                x: 44.702,
                y: 232.411,
                sx: .762,
                sy: .762,
                r: -.966,
                a: .04
            },
            36: {
                x: 42.852,
                y: 233.449,
                sx: .764,
                sy: .764,
                r: -.97,
                a: .03
            },
            37: {
                x: 41.056,
                y: 234.63,
                sx: .766,
                sy: .766,
                r: -.974,
                a: .01
            },
            38: {
                x: 39.45,
                y: 235.75,
                sx: .768,
                sy: .768,
                r: -.978,
                a: 0
            },
            39: {
                x: 335.55,
                y: 140.95,
                sx: .461,
                sy: .461,
                r: .066
            },
            40: {
                x: 333.621,
                y: 140.476,
                sx: .463,
                sy: .463,
                r: .056,
                a: .02
            },
            41: {
                x: 331.669,
                y: 139.993,
                sx: .466,
                sy: .466,
                r: .046,
                a: .03
            },
            42: {
                x: 329.693,
                y: 139.565,
                sx: .468,
                sy: .468,
                r: .036,
                a: .04
            },
            43: {
                x: 327.701,
                y: 139.155,
                sx: .47,
                sy: .47,
                r: .026,
                a: .05
            },
            44: {
                x: 325.683,
                y: 138.743,
                sx: .472,
                sy: .472,
                r: .016,
                a: .07
            },
            45: {
                x: 323.7,
                y: 138.344,
                sx: .474,
                sy: .474,
                r: .006,
                a: .08
            },
            46: {
                x: 321.674,
                y: 138.003,
                sx: .476,
                sy: .476,
                r: -.004,
                a: .1
            },
            47: {
                x: 319.595,
                y: 137.663,
                sx: .478,
                sy: .478,
                r: -.014,
                a: .11
            },
            48: {
                x: 317.578,
                y: 137.37,
                sx: .48,
                sy: .48,
                r: -.024,
                a: .13
            },
            49: {
                x: 315.546,
                y: 137.103,
                sx: .482,
                sy: .482,
                r: -.034,
                a: .14
            },
            50: {
                x: 313.477,
                y: 136.885,
                sx: .484,
                sy: .484,
                r: -.044,
                a: .15
            },
            51: {
                x: 311.434,
                y: 136.62,
                sx: .486,
                sy: .486,
                r: -.054,
                a: .16
            },
            52: {
                x: 309.357,
                y: 136.523,
                sx: .489,
                sy: .489,
                r: -.064,
                a: .18
            },
            53: {
                x: 307.311,
                y: 136.27,
                sx: .491,
                sy: .491,
                r: -.074,
                a: .19
            },
            54: {
                x: 305.236,
                y: 136.186,
                sx: .493,
                sy: .493,
                r: -.084,
                a: .21
            },
            55: {
                x: 303.121,
                y: 136.055,
                sx: .495,
                sy: .495,
                r: -.094,
                a: .22
            },
            56: {
                x: 301.035,
                y: 135.986,
                sx: .497,
                sy: .497,
                r: -.104,
                a: .23
            },
            57: {
                x: 298.962,
                y: 135.927,
                sx: .499,
                sy: .499,
                r: -.114,
                a: .25
            },
            58: {
                x: 296.869,
                y: 135.879,
                sx: .501,
                sy: .501,
                r: -.124,
                a: .26
            },
            59: {
                x: 294.733,
                y: 135.827,
                sx: .503,
                sy: .503,
                r: -.134,
                a: .27
            },
            60: {
                x: 292.62,
                y: 135.852,
                sx: .505,
                sy: .505,
                r: -.144,
                a: .29
            },
            61: {
                x: 290.471,
                y: 135.87,
                sx: .507,
                sy: .507,
                r: -.154,
                a: .3
            },
            62: {
                x: 288.353,
                y: 135.961,
                sx: .51,
                sy: .51,
                r: -.164,
                a: .32
            },
            63: {
                x: 286.23,
                y: 136.061,
                sx: .512,
                sy: .512,
                r: -.174,
                a: .33
            },
            64: {
                x: 284.132,
                y: 136.171,
                sx: .514,
                sy: .514,
                r: -.184,
                a: .34
            },
            65: {
                x: 281.996,
                y: 136.291,
                sx: .516,
                sy: .516,
                r: -.194,
                a: .36
            },
            66: {
                x: 279.878,
                y: 136.473,
                sx: .518,
                sy: .518,
                r: -.204,
                a: .37
            },
            67: {
                x: 277.72,
                y: 136.72,
                sx: .52,
                sy: .52,
                r: -.214,
                a: .38
            },
            68: {
                x: 275.583,
                y: 136.925,
                sx: .522,
                sy: .522,
                r: -.224,
                a: .4
            },
            69: {
                x: 273.45,
                y: 137.192,
                sx: .524,
                sy: .524,
                r: -.234,
                a: .41
            },
            70: {
                x: 271.326,
                y: 137.481,
                sx: .526,
                sy: .526,
                r: -.244,
                a: .43
            },
            71: {
                x: 269.173,
                y: 137.771,
                sx: .528,
                sy: .528,
                r: -.254,
                a: .44
            },
            72: {
                x: 267.022,
                y: 138.134,
                sx: .531,
                sy: .531,
                r: -.264,
                a: .45
            },
            73: {
                x: 264.895,
                y: 138.507,
                sx: .533,
                sy: .533,
                r: -.274,
                a: .46
            },
            74: {
                x: 262.767,
                y: 138.896,
                sx: .535,
                sy: .535,
                r: -.284,
                a: .48
            },
            75: {
                x: 260.611,
                y: 139.35,
                sx: .537,
                sy: .537,
                r: -.294,
                a: .49
            },
            76: {
                x: 258.446,
                y: 139.822,
                sx: .539,
                sy: .539,
                r: -.303,
                a: .51
            },
            77: {
                x: 256.308,
                y: 140.299,
                sx: .541,
                sy: .541,
                r: -.313,
                a: .52
            },
            78: {
                x: 254.156,
                y: 140.805,
                sx: .543,
                sy: .543,
                r: -.323,
                a: .54
            },
            79: {
                x: 252.034,
                y: 141.372,
                sx: .545,
                sy: .545,
                r: -.333,
                a: .55
            },
            80: {
                x: 249.908,
                y: 141.949,
                sx: .547,
                sy: .547,
                r: -.343,
                a: .56
            },
            81: {
                x: 247.74,
                y: 142.558,
                sx: .549,
                sy: .549,
                r: -.353,
                a: .57
            },
            82: {
                x: 245.63,
                y: 143.175,
                sx: .552,
                sy: .552,
                r: -.363,
                a: .59
            },
            83: {
                x: 243.516,
                y: 143.864,
                sx: .554,
                sy: .554,
                r: -.373,
                a: .6
            },
            84: {
                x: 241.417,
                y: 144.519,
                sx: .556,
                sy: .556,
                r: -.383,
                a: .62
            },
            85: {
                x: 239.321,
                y: 145.294,
                sx: .558,
                sy: .558,
                r: -.393,
                a: .63
            },
            86: {
                x: 237.124,
                y: 145.996,
                sx: .56,
                sy: .56,
                r: -.403,
                a: .64
            },
            87: {
                x: 235.088,
                y: 146.764,
                sx: .562,
                sy: .562,
                r: -.413,
                a: .66
            },
            88: {
                x: 232.956,
                y: 147.595,
                sx: .564,
                sy: .564,
                r: -.423,
                a: .67
            },
            89: {
                x: 230.864,
                y: 148.4,
                sx: .566,
                sy: .566,
                r: -.433,
                a: .68
            },
            90: {
                x: 228.748,
                y: 149.29,
                sx: .568,
                sy: .568,
                r: -.443,
                a: .7
            },
            91: {
                x: 226.607,
                y: 150.192,
                sx: .57,
                sy: .57,
                r: -.453,
                a: .71
            },
            92: {
                x: 224.541,
                y: 151.103,
                sx: .572,
                sy: .572,
                r: -.463,
                a: .73
            },
            93: {
                x: 222.462,
                y: 152.056,
                sx: .575,
                sy: .575,
                r: -.473,
                a: .74
            },
            94: {
                x: 220.384,
                y: 153.032,
                sx: .577,
                sy: .577,
                r: -.483,
                a: .75
            },
            95: {
                x: 218.312,
                y: 154.022,
                sx: .579,
                sy: .579,
                r: -.493,
                a: .77
            },
            96: {
                x: 216.286,
                y: 155.045,
                sx: .581,
                sy: .581,
                r: -.503,
                a: .78
            },
            97: {
                x: 214.208,
                y: 156.084,
                sx: .583,
                sy: .583,
                r: -.513,
                a: .79
            },
            98: {
                x: 212.173,
                y: 157.217,
                sx: .585,
                sy: .585,
                r: -.523,
                a: .81
            },
            99: {
                x: 210.142,
                y: 158.313,
                sx: .587,
                sy: .587,
                r: -.533,
                a: .82
            },
            100: {
                x: 208.12,
                y: 159.53,
                sx: .589,
                sy: .589,
                r: -.543,
                a: .84
            },
            101: {
                x: 206.132,
                y: 160.681,
                sx: .591,
                sy: .591,
                r: -.553,
                a: .85
            },
            102: {
                x: 204.141,
                y: 161.866,
                sx: .593,
                sy: .593,
                r: -.563,
                a: .86
            },
            103: {
                x: 202.163,
                y: 163.123,
                sx: .596,
                sy: .596,
                r: -.573,
                a: .88
            },
            104: {
                x: 200.163,
                y: 164.367,
                sx: .598,
                sy: .598,
                r: -.583,
                a: .89
            },
            105: {
                x: 198.179,
                y: 165.674,
                sx: .6,
                sy: .6,
                r: -.593,
                a: .9
            },
            106: {
                x: 196.214,
                y: 166.977,
                sx: .602,
                sy: .602,
                r: -.603,
                a: .92
            },
            107: {
                x: 194.271,
                y: 168.344,
                sx: .604,
                sy: .604,
                r: -.613,
                a: .93
            },
            108: {
                x: 192.304,
                y: 169.665,
                sx: .606,
                sy: .606,
                r: -.623,
                a: .95
            },
            109: {
                x: 190.392,
                y: 171.05,
                sx: .608,
                sy: .608,
                r: -.633,
                a: .96
            },
            110: {
                x: 188.475,
                y: 172.486,
                sx: .61,
                sy: .61,
                r: -.643,
                a: .97
            },
            111: {
                x: 186.587,
                y: 173.942,
                sx: .612,
                sy: .612,
                r: -.653,
                a: .98
            },
            112: {
                x: 184.9,
                y: 175.4,
                sx: .614,
                sy: .614,
                r: -.663,
                a: 1
            },
            113: {
                x: 182.971,
                y: 175.906,
                sx: .616,
                sy: .616,
                r: -.667,
                a: .99
            },
            114: {
                x: 181.05,
                y: 176.403,
                sx: .618,
                sy: .618,
                r: -.671,
                a: .97
            },
            115: {
                x: 179.081,
                y: 176.892,
                sx: .62,
                sy: .62,
                r: -.675,
                a: .96
            },
            116: {
                x: 177.109,
                y: 177.428,
                sx: .622,
                sy: .622,
                r: -.68,
                a: .95
            },
            117: {
                x: 175.146,
                y: 177.906,
                sx: .624,
                sy: .624,
                r: -.684,
                a: .93
            },
            118: {
                x: 173.229,
                y: 178.42,
                sx: .626,
                sy: .626,
                r: -.688,
                a: .92
            },
            119: {
                x: 171.218,
                y: 178.978,
                sx: .628,
                sy: .628,
                r: -.692,
                a: .91
            },
            120: {
                x: 169.304,
                y: 179.528,
                sx: .63,
                sy: .63,
                r: -.696,
                a: .89
            },
            121: {
                x: 167.292,
                y: 180.02,
                sx: .632,
                sy: .632,
                r: -.7,
                a: .88
            },
            122: {
                x: 165.378,
                y: 180.654,
                sx: .634,
                sy: .634,
                r: -.704,
                a: .87
            },
            123: {
                x: 163.427,
                y: 181.184,
                sx: .637,
                sy: .637,
                r: -.708,
                a: .86
            },
            124: {
                x: 161.464,
                y: 181.749,
                sx: .639,
                sy: .639,
                r: -.713,
                a: .84
            },
            125: {
                x: 159.507,
                y: 182.313,
                sx: .641,
                sy: .641,
                r: -.717,
                a: .83
            },
            126: {
                x: 157.556,
                y: 182.916,
                sx: .643,
                sy: .643,
                r: -.721,
                a: .82
            },
            127: {
                x: 155.595,
                y: 183.506,
                sx: .645,
                sy: .645,
                r: -.725,
                a: .8
            },
            128: {
                x: 153.646,
                y: 184.095,
                sx: .647,
                sy: .647,
                r: -.729,
                a: .79
            },
            129: {
                x: 151.694,
                y: 184.721,
                sx: .649,
                sy: .649,
                r: -.733,
                a: .78
            },
            130: {
                x: 149.741,
                y: 185.341,
                sx: .651,
                sy: .651,
                r: -.737,
                a: .77
            },
            131: {
                x: 147.738,
                y: 185.95,
                sx: .653,
                sy: .653,
                r: -.741,
                a: .75
            },
            132: {
                x: 145.838,
                y: 186.601,
                sx: .655,
                sy: .655,
                r: -.745,
                a: .74
            },
            133: {
                x: 143.935,
                y: 187.249,
                sx: .657,
                sy: .657,
                r: -.75,
                a: .73
            },
            134: {
                x: 141.99,
                y: 187.889,
                sx: .659,
                sy: .659,
                r: -.754,
                a: .71
            },
            135: {
                x: 139.988,
                y: 188.562,
                sx: .661,
                sy: .661,
                r: -.758,
                a: .7
            },
            136: {
                x: 138.046,
                y: 189.232,
                sx: .663,
                sy: .663,
                r: -.762,
                a: .69
            },
            137: {
                x: 136.147,
                y: 189.897,
                sx: .665,
                sy: .665,
                r: -.766,
                a: .68
            },
            138: {
                x: 134.195,
                y: 190.599,
                sx: .667,
                sy: .667,
                r: -.77,
                a: .66
            },
            139: {
                x: 132.202,
                y: 191.297,
                sx: .669,
                sy: .669,
                r: -.774,
                a: .65
            },
            140: {
                x: 130.305,
                y: 191.982,
                sx: .671,
                sy: .671,
                r: -.778,
                a: .64
            },
            141: {
                x: 128.411,
                y: 192.658,
                sx: .673,
                sy: .673,
                r: -.783,
                a: .63
            },
            142: {
                x: 126.462,
                y: 193.379,
                sx: .675,
                sy: .675,
                r: -.787,
                a: .61
            },
            143: {
                x: 124.52,
                y: 194.142,
                sx: .677,
                sy: .677,
                r: -.791,
                a: .6
            },
            144: {
                x: 122.623,
                y: 194.894,
                sx: .679,
                sy: .679,
                r: -.795,
                a: .59
            },
            145: {
                x: 120.68,
                y: 195.584,
                sx: .681,
                sy: .681,
                r: -.799,
                a: .57
            },
            146: {
                x: 118.783,
                y: 196.425,
                sx: .683,
                sy: .683,
                r: -.803,
                a: .56
            },
            147: {
                x: 116.84,
                y: 197.154,
                sx: .685,
                sy: .685,
                r: -.807,
                a: .55
            },
            148: {
                x: 114.889,
                y: 197.97,
                sx: .687,
                sy: .687,
                r: -.811,
                a: .53
            },
            149: {
                x: 112.9,
                y: 198.6,
                sx: .689,
                sy: .689,
                r: -.816,
                a: .52
            }
        }).addTimedChild(instance4, 0, 150, {
            0: {
                x: 261.15,
                y: 139.2,
                sx: .536,
                sy: .536,
                r: -.29,
                a: .49
            },
            1: {
                x: 259.108,
                y: 139.657,
                sx: .538,
                sy: .538,
                r: -.3,
                a: .5
            },
            2: {
                x: 257.003,
                y: 140.18,
                sx: .54,
                sy: .54,
                r: -.31,
                a: .52
            },
            3: {
                x: 254.881,
                y: 140.669,
                sx: .542,
                sy: .542,
                r: -.32,
                a: .53
            },
            4: {
                x: 252.743,
                y: 141.23,
                sx: .544,
                sy: .544,
                r: -.33,
                a: .54
            },
            5: {
                x: 250.698,
                y: 141.756,
                sx: .546,
                sy: .546,
                r: -.339,
                a: .55
            },
            6: {
                x: 248.576,
                y: 142.297,
                sx: .549,
                sy: .549,
                r: -.349,
                a: .57
            },
            7: {
                x: 246.488,
                y: 142.909,
                sx: .551,
                sy: .551,
                r: -.359,
                a: .58
            },
            8: {
                x: 244.385,
                y: 143.532,
                sx: .553,
                sy: .553,
                r: -.369,
                a: .6
            },
            9: {
                x: 242.315,
                y: 144.181,
                sx: .555,
                sy: .555,
                r: -.379,
                a: .61
            },
            10: {
                x: 240.177,
                y: 144.895,
                sx: .557,
                sy: .557,
                r: -.388,
                a: .62
            },
            11: {
                x: 238.12,
                y: 145.578,
                sx: .559,
                sy: .559,
                r: -.398,
                a: .64
            },
            12: {
                x: 236.038,
                y: 146.432,
                sx: .561,
                sy: .561,
                r: -.408,
                a: .65
            },
            13: {
                x: 233.944,
                y: 147.199,
                sx: .563,
                sy: .563,
                r: -.418,
                a: .66
            },
            14: {
                x: 231.929,
                y: 147.99,
                sx: .565,
                sy: .565,
                r: -.428,
                a: .68
            },
            15: {
                x: 229.888,
                y: 148.791,
                sx: .567,
                sy: .567,
                r: -.437,
                a: .69
            },
            16: {
                x: 227.732,
                y: 149.664,
                sx: .569,
                sy: .569,
                r: -.447,
                a: .7
            },
            17: {
                x: 225.705,
                y: 150.51,
                sx: .571,
                sy: .571,
                r: -.457,
                a: .72
            },
            18: {
                x: 223.702,
                y: 151.428,
                sx: .573,
                sy: .573,
                r: -.467,
                a: .73
            },
            19: {
                x: 221.636,
                y: 152.412,
                sx: .575,
                sy: .575,
                r: -.477,
                a: .75
            },
            20: {
                x: 219.64,
                y: 153.365,
                sx: .577,
                sy: .577,
                r: -.487,
                a: .76
            },
            21: {
                x: 217.571,
                y: 154.336,
                sx: .579,
                sy: .579,
                r: -.496,
                a: .77
            },
            22: {
                x: 215.582,
                y: 155.376,
                sx: .581,
                sy: .581,
                r: -.506,
                a: .79
            },
            23: {
                x: 213.514,
                y: 156.384,
                sx: .584,
                sy: .584,
                r: -.516,
                a: .8
            },
            24: {
                x: 211.519,
                y: 157.468,
                sx: .586,
                sy: .586,
                r: -.526,
                a: .81
            },
            25: {
                x: 209.558,
                y: 158.623,
                sx: .588,
                sy: .588,
                r: -.536,
                a: .82
            },
            26: {
                x: 207.571,
                y: 159.749,
                sx: .59,
                sy: .59,
                r: -.545,
                a: .84
            },
            27: {
                x: 205.601,
                y: 160.941,
                sx: .592,
                sy: .592,
                r: -.555,
                a: .85
            },
            28: {
                x: 203.668,
                y: 162.112,
                sx: .594,
                sy: .594,
                r: -.565,
                a: .87
            },
            29: {
                x: 201.647,
                y: 163.347,
                sx: .596,
                sy: .596,
                r: -.575,
                a: .88
            },
            30: {
                x: 199.708,
                y: 164.557,
                sx: .598,
                sy: .598,
                r: -.585,
                a: .89
            },
            31: {
                x: 197.734,
                y: 165.838,
                sx: .6,
                sy: .6,
                r: -.594,
                a: .91
            },
            32: {
                x: 195.888,
                y: 167.142,
                sx: .602,
                sy: .602,
                r: -.604,
                a: .92
            },
            33: {
                x: 193.963,
                y: 168.465,
                sx: .604,
                sy: .604,
                r: -.614,
                a: .93
            },
            34: {
                x: 192.064,
                y: 169.815,
                sx: .606,
                sy: .606,
                r: -.624,
                a: .95
            },
            35: {
                x: 190.13,
                y: 171.286,
                sx: .608,
                sy: .608,
                r: -.634,
                a: .96
            },
            36: {
                x: 188.224,
                y: 172.681,
                sx: .61,
                sy: .61,
                r: -.643,
                a: .97
            },
            37: {
                x: 186.434,
                y: 174.102,
                sx: .612,
                sy: .612,
                r: -.653,
                a: .99
            },
            38: {
                x: 184.9,
                y: 175.4,
                sx: .614,
                sy: .614,
                r: -.663,
                a: 1
            },
            39: {
                x: 183.25,
                y: 175.75,
                sx: .616,
                sy: .616,
                r: -.667,
                a: .99
            },
            40: {
                x: 181.266,
                y: 176.257,
                sx: .618,
                sy: .618,
                r: -.671,
                a: .98
            },
            41: {
                x: 179.237,
                y: 176.798,
                sx: .62,
                sy: .62,
                r: -.675,
                a: .96
            },
            42: {
                x: 177.206,
                y: 177.291,
                sx: .622,
                sy: .622,
                r: -.679,
                a: .95
            },
            43: {
                x: 175.19,
                y: 177.823,
                sx: .624,
                sy: .624,
                r: -.684,
                a: .93
            },
            44: {
                x: 173.114,
                y: 178.394,
                sx: .626,
                sy: .626,
                r: -.688,
                a: .92
            },
            45: {
                x: 171.095,
                y: 178.907,
                sx: .629,
                sy: .629,
                r: -.692,
                a: .91
            },
            46: {
                x: 169.077,
                y: 179.464,
                sx: .631,
                sy: .631,
                r: -.696,
                a: .89
            },
            47: {
                x: 167.055,
                y: 180.114,
                sx: .633,
                sy: .633,
                r: -.701,
                a: .88
            },
            48: {
                x: 164.989,
                y: 180.652,
                sx: .635,
                sy: .635,
                r: -.705,
                a: .87
            },
            49: {
                x: 162.928,
                y: 181.179,
                sx: .637,
                sy: .637,
                r: -.709,
                a: .85
            },
            50: {
                x: 160.909,
                y: 181.848,
                sx: .639,
                sy: .639,
                r: -.714,
                a: .84
            },
            51: {
                x: 158.85,
                y: 182.411,
                sx: .641,
                sy: .641,
                r: -.718,
                a: .82
            },
            52: {
                x: 156.836,
                y: 183.008,
                sx: .643,
                sy: .643,
                r: -.722,
                a: .81
            },
            53: {
                x: 154.827,
                y: 183.661,
                sx: .645,
                sy: .645,
                r: -.726,
                a: .8
            },
            54: {
                x: 152.815,
                y: 184.244,
                sx: .647,
                sy: .647,
                r: -.731,
                a: .79
            },
            55: {
                x: 150.809,
                y: 184.872,
                sx: .649,
                sy: .649,
                r: -.735,
                a: .77
            },
            56: {
                x: 148.747,
                y: 185.539,
                sx: .651,
                sy: .651,
                r: -.739,
                a: .76
            },
            57: {
                x: 146.748,
                y: 186.202,
                sx: .654,
                sy: .654,
                r: -.743,
                a: .75
            },
            58: {
                x: 144.733,
                y: 186.85,
                sx: .656,
                sy: .656,
                r: -.748,
                a: .73
            },
            59: {
                x: 142.731,
                y: 187.545,
                sx: .658,
                sy: .658,
                r: -.752,
                a: .72
            },
            60: {
                x: 140.724,
                y: 188.223,
                sx: .66,
                sy: .66,
                r: -.756,
                a: .7
            },
            61: {
                x: 138.627,
                y: 188.857,
                sx: .662,
                sy: .662,
                r: -.761,
                a: .69
            },
            62: {
                x: 136.672,
                y: 189.616,
                sx: .664,
                sy: .664,
                r: -.765,
                a: .68
            },
            63: {
                x: 134.716,
                y: 190.32,
                sx: .666,
                sy: .666,
                r: -.769,
                a: .66
            },
            64: {
                x: 132.664,
                y: 190.971,
                sx: .668,
                sy: .668,
                r: -.773,
                a: .65
            },
            65: {
                x: 130.617,
                y: 191.716,
                sx: .67,
                sy: .67,
                r: -.778,
                a: .64
            },
            66: {
                x: 128.611,
                y: 192.442,
                sx: .672,
                sy: .672,
                r: -.782,
                a: .62
            },
            67: {
                x: 126.613,
                y: 193.16,
                sx: .674,
                sy: .674,
                r: -.786,
                a: .61
            },
            68: {
                x: 124.609,
                y: 194.023,
                sx: .676,
                sy: .676,
                r: -.79,
                a: .59
            },
            69: {
                x: 122.614,
                y: 194.727,
                sx: .679,
                sy: .679,
                r: -.795,
                a: .58
            },
            70: {
                x: 120.616,
                y: 195.523,
                sx: .681,
                sy: .681,
                r: -.799,
                a: .57
            },
            71: {
                x: 118.612,
                y: 196.308,
                sx: .683,
                sy: .683,
                r: -.803,
                a: .55
            },
            72: {
                x: 116.621,
                y: 197.085,
                sx: .685,
                sy: .685,
                r: -.808,
                a: .54
            },
            73: {
                x: 114.667,
                y: 197.848,
                sx: .687,
                sy: .687,
                r: -.812,
                a: .53
            },
            74: {
                x: 112.618,
                y: 198.611,
                sx: .689,
                sy: .689,
                r: -.816,
                a: .52
            },
            75: {
                x: 110.668,
                y: 199.508,
                sx: .691,
                sy: .691,
                r: -.82,
                a: .5
            },
            76: {
                x: 108.622,
                y: 200.252,
                sx: .693,
                sy: .693,
                r: -.825,
                a: .49
            },
            77: {
                x: 106.622,
                y: 201.082,
                sx: .695,
                sy: .695,
                r: -.829,
                a: .47
            },
            78: {
                x: 104.672,
                y: 201.957,
                sx: .697,
                sy: .697,
                r: -.833,
                a: .46
            },
            79: {
                x: 102.717,
                y: 202.815,
                sx: .699,
                sy: .699,
                r: -.837,
                a: .45
            },
            80: {
                x: 100.722,
                y: 203.623,
                sx: .701,
                sy: .701,
                r: -.842,
                a: .43
            },
            81: {
                x: 98.771,
                y: 204.515,
                sx: .704,
                sy: .704,
                r: -.846,
                a: .42
            },
            82: {
                x: 96.768,
                y: 205.41,
                sx: .706,
                sy: .706,
                r: -.85,
                a: .41
            },
            83: {
                x: 94.82,
                y: 206.283,
                sx: .708,
                sy: .708,
                r: -.855,
                a: .39
            },
            84: {
                x: 92.919,
                y: 207.203,
                sx: .71,
                sy: .71,
                r: -.859,
                a: .38
            },
            85: {
                x: 90.918,
                y: 208.056,
                sx: .712,
                sy: .712,
                r: -.863,
                a: .37
            },
            86: {
                x: 88.964,
                y: 208.957,
                sx: .714,
                sy: .714,
                r: -.867,
                a: .35
            },
            87: {
                x: 86.96,
                y: 209.947,
                sx: .716,
                sy: .716,
                r: -.872,
                a: .34
            },
            88: {
                x: 84.961,
                y: 210.837,
                sx: .718,
                sy: .718,
                r: -.876,
                a: .32
            },
            89: {
                x: 83.056,
                y: 211.755,
                sx: .72,
                sy: .72,
                r: -.88,
                a: .31
            },
            90: {
                x: 81.093,
                y: 212.72,
                sx: .722,
                sy: .722,
                r: -.884,
                a: .3
            },
            91: {
                x: 79.141,
                y: 213.675,
                sx: .724,
                sy: .724,
                r: -.889,
                a: .29
            },
            92: {
                x: 77.183,
                y: 214.618,
                sx: .726,
                sy: .726,
                r: -.893,
                a: .27
            },
            93: {
                x: 75.277,
                y: 215.609,
                sx: .729,
                sy: .729,
                r: -.897,
                a: .26
            },
            94: {
                x: 73.366,
                y: 216.588,
                sx: .731,
                sy: .731,
                r: -.902,
                a: .24
            },
            95: {
                x: 71.455,
                y: 217.552,
                sx: .733,
                sy: .733,
                r: -.906,
                a: .23
            },
            96: {
                x: 69.499,
                y: 218.615,
                sx: .735,
                sy: .735,
                r: -.91,
                a: .21
            },
            97: {
                x: 67.587,
                y: 219.562,
                sx: .737,
                sy: .737,
                r: -.914,
                a: .2
            },
            98: {
                x: 65.667,
                y: 220.551,
                sx: .739,
                sy: .739,
                r: -.919,
                a: .19
            },
            99: {
                x: 63.761,
                y: 221.637,
                sx: .741,
                sy: .741,
                r: -.923,
                a: .18
            },
            100: {
                x: 61.835,
                y: 222.654,
                sx: .743,
                sy: .743,
                r: -.927,
                a: .16
            },
            101: {
                x: 59.875,
                y: 223.626,
                sx: .745,
                sy: .745,
                r: -.931,
                a: .15
            },
            102: {
                x: 58.004,
                y: 224.727,
                sx: .747,
                sy: .747,
                r: -.936,
                a: .14
            },
            103: {
                x: 56.086,
                y: 225.774,
                sx: .749,
                sy: .749,
                r: -.94,
                a: .12
            },
            104: {
                x: 54.165,
                y: 226.808,
                sx: .751,
                sy: .751,
                r: -.944,
                a: .11
            },
            105: {
                x: 52.343,
                y: 227.937,
                sx: .754,
                sy: .754,
                r: -.949,
                a: .09
            },
            106: {
                x: 50.411,
                y: 229.005,
                sx: .756,
                sy: .756,
                r: -.953,
                a: .08
            },
            107: {
                x: 48.489,
                y: 230.117,
                sx: .758,
                sy: .758,
                r: -.957,
                a: .07
            },
            108: {
                x: 46.609,
                y: 231.216,
                sx: .76,
                sy: .76,
                r: -.961,
                a: .05
            },
            109: {
                x: 44.734,
                y: 232.359,
                sx: .762,
                sy: .762,
                r: -.966,
                a: .04
            },
            110: {
                x: 42.898,
                y: 233.436,
                sx: .764,
                sy: .764,
                r: -.97,
                a: .03
            },
            111: {
                x: 41.009,
                y: 234.61,
                sx: .766,
                sy: .766,
                r: -.974,
                a: .01
            },
            112: {
                x: 39.45,
                y: 235.75,
                sx: .768,
                sy: .768,
                r: -.978,
                a: 0
            },
            113: {
                x: 335.55,
                y: 140.95,
                sx: .461,
                sy: .461,
                r: .066
            },
            114: {
                x: 333.717,
                y: 140.502,
                sx: .463,
                sy: .463,
                r: .056,
                a: .01
            },
            115: {
                x: 331.833,
                y: 140.062,
                sx: .465,
                sy: .465,
                r: .047,
                a: .03
            },
            116: {
                x: 329.923,
                y: 139.637,
                sx: .467,
                sy: .467,
                r: .037,
                a: .04
            },
            117: {
                x: 327.949,
                y: 139.22,
                sx: .469,
                sy: .469,
                r: .027,
                a: .05
            },
            118: {
                x: 325.993,
                y: 138.853,
                sx: .471,
                sy: .471,
                r: .018,
                a: .07
            },
            119: {
                x: 324.021,
                y: 138.399,
                sx: .474,
                sy: .474,
                r: .008,
                a: .08
            },
            120: {
                x: 322.123,
                y: 138.11,
                sx: .476,
                sy: .476,
                r: -.002,
                a: .09
            },
            121: {
                x: 320.151,
                y: 137.775,
                sx: .478,
                sy: .478,
                r: -.011,
                a: .11
            },
            122: {
                x: 318.204,
                y: 137.5,
                sx: .48,
                sy: .48,
                r: -.021,
                a: .12
            },
            123: {
                x: 316.193,
                y: 137.188,
                sx: .482,
                sy: .482,
                r: -.031,
                a: .13
            },
            124: {
                x: 314.203,
                y: 136.979,
                sx: .484,
                sy: .484,
                r: -.04,
                a: .15
            },
            125: {
                x: 312.184,
                y: 136.788,
                sx: .486,
                sy: .486,
                r: -.05,
                a: .16
            },
            126: {
                x: 310.242,
                y: 136.552,
                sx: .488,
                sy: .488,
                r: -.06,
                a: .17
            },
            127: {
                x: 308.22,
                y: 136.324,
                sx: .49,
                sy: .49,
                r: -.069,
                a: .19
            },
            128: {
                x: 306.221,
                y: 136.16,
                sx: .492,
                sy: .492,
                r: -.079,
                a: .2
            },
            129: {
                x: 304.197,
                y: 136.105,
                sx: .494,
                sy: .494,
                r: -.089,
                a: .21
            },
            130: {
                x: 302.142,
                y: 136.007,
                sx: .496,
                sy: .496,
                r: -.098,
                a: .23
            },
            131: {
                x: 300.073,
                y: 135.935,
                sx: .498,
                sy: .498,
                r: -.108,
                a: .24
            },
            132: {
                x: 298.109,
                y: 135.864,
                sx: .5,
                sy: .5,
                r: -.118,
                a: .25
            },
            133: {
                x: 296.073,
                y: 135.81,
                sx: .502,
                sy: .502,
                r: -.127,
                a: .27
            },
            134: {
                x: 294.046,
                y: 135.859,
                sx: .504,
                sy: .504,
                r: -.137,
                a: .28
            },
            135: {
                x: 291.947,
                y: 135.824,
                sx: .506,
                sy: .506,
                r: -.147,
                a: .29
            },
            136: {
                x: 289.921,
                y: 135.854,
                sx: .508,
                sy: .508,
                r: -.156,
                a: .31
            },
            137: {
                x: 287.907,
                y: 135.943,
                sx: .51,
                sy: .51,
                r: -.166,
                a: .32
            },
            138: {
                x: 285.861,
                y: 136.096,
                sx: .512,
                sy: .512,
                r: -.176,
                a: .33
            },
            139: {
                x: 283.748,
                y: 136.216,
                sx: .514,
                sy: .514,
                r: -.186,
                a: .35
            },
            140: {
                x: 281.678,
                y: 136.351,
                sx: .516,
                sy: .516,
                r: -.195,
                a: .36
            },
            141: {
                x: 279.638,
                y: 136.548,
                sx: .518,
                sy: .518,
                r: -.205,
                a: .38
            },
            142: {
                x: 277.608,
                y: 136.709,
                sx: .52,
                sy: .52,
                r: -.215,
                a: .39
            },
            143: {
                x: 275.541,
                y: 136.981,
                sx: .522,
                sy: .522,
                r: -.224,
                a: .4
            },
            144: {
                x: 273.442,
                y: 137.178,
                sx: .524,
                sy: .524,
                r: -.234,
                a: .41
            },
            145: {
                x: 271.361,
                y: 137.486,
                sx: .526,
                sy: .526,
                r: -.244,
                a: .43
            },
            146: {
                x: 269.255,
                y: 137.755,
                sx: .528,
                sy: .528,
                r: -.253,
                a: .44
            },
            147: {
                x: 267.195,
                y: 138.144,
                sx: .53,
                sy: .53,
                r: -.263,
                a: .45
            },
            148: {
                x: 265.157,
                y: 138.498,
                sx: .532,
                sy: .532,
                r: -.273,
                a: .47
            },
            149: {
                x: 262.9,
                y: 138.85,
                sx: .534,
                sy: .534,
                r: -.282,
                a: .48
            }
        }).addTimedChild(instance3, 0, 150, {
            0: {
                x: 93.7,
                y: -22.9,
                sy: .96,
                r: .122,
                a: 0
            },
            1: {
                x: 92.464,
                y: -22.572,
                r: .121,
                a: .03
            },
            2: {
                x: 91.178,
                y: -22.347,
                sy: .961,
                r: .119,
                a: .05
            },
            3: {
                x: 89.892,
                y: -22.069,
                sy: .962,
                r: .117,
                a: .08
            },
            4: {
                x: 88.655,
                y: -21.843,
                r: .116,
                a: .11
            },
            5: {
                x: 87.369,
                y: -21.566,
                sy: .963,
                r: .114,
                a: .13
            },
            6: {
                x: 86.081,
                y: -21.242,
                r: .112,
                a: .16
            },
            7: {
                x: 84.795,
                y: -21.012,
                sy: .964,
                r: .111,
                a: .18
            },
            8: {
                x: 83.507,
                y: -20.736,
                r: .109,
                a: .2
            },
            9: {
                x: 82.218,
                y: -20.458,
                sy: .965,
                r: .107,
                a: .23
            },
            10: {
                x: 80.929,
                y: -20.182,
                r: .106,
                a: .25
            },
            11: {
                x: 79.64,
                y: -19.956,
                sy: .966,
                r: .104,
                a: .27
            },
            12: {
                x: 78.401,
                y: -19.628,
                r: .102,
                a: .3
            },
            13: {
                x: 77.112,
                y: -19.351,
                sy: .967,
                r: .101,
                a: .32
            },
            14: {
                x: 75.822,
                y: -19.075,
                sy: .968,
                r: .099,
                a: .34
            },
            15: {
                x: 74.533,
                y: -18.797,
                r: .097,
                a: .36
            },
            16: {
                x: 73.242,
                y: -18.521,
                sy: .969,
                r: .096,
                a: .39
            },
            17: {
                x: 71.95,
                y: -18.242,
                r: .094,
                a: .41
            },
            18: {
                x: 70.661,
                y: -17.965,
                sy: .97,
                r: .092,
                a: .43
            },
            19: {
                x: 69.419,
                y: -17.687,
                r: .091,
                a: .45
            },
            20: {
                x: 68.178,
                y: -17.361,
                sy: .971,
                r: .089,
                a: .47
            },
            21: {
                x: 66.837,
                y: -17.132,
                r: .088,
                a: .49
            },
            22: {
                x: 65.594,
                y: -16.805,
                sy: .972,
                r: .086,
                a: .51
            },
            23: {
                x: 64.301,
                y: -16.527,
                r: .084,
                a: .52
            },
            24: {
                x: 63.008,
                y: -16.199,
                sy: .973,
                r: .083,
                a: .54
            },
            25: {
                x: 61.715,
                y: -15.871,
                r: .081,
                a: .56
            },
            26: {
                x: 60.472,
                y: -15.644,
                sy: .974,
                r: .079,
                a: .58
            },
            27: {
                x: 59.178,
                y: -15.315,
                sy: .975,
                r: .078,
                a: .6
            },
            28: {
                x: 57.883,
                y: -15.037,
                r: .076,
                a: .61
            },
            29: {
                x: 56.59,
                y: -14.709,
                sy: .976,
                r: .074,
                a: .63
            },
            30: {
                x: 55.294,
                y: -14.431,
                r: .073,
                a: .64
            },
            31: {
                x: 53.998,
                y: -14.102,
                sy: .977,
                r: .071,
                a: .66
            },
            32: {
                x: 52.703,
                y: -13.773,
                r: .069,
                a: .68
            },
            33: {
                x: 51.457,
                y: -13.495,
                sy: .978,
                r: .068,
                a: .69
            },
            34: {
                x: 50.212,
                y: -13.168,
                r: .066,
                a: .71
            },
            35: {
                x: 48.917,
                y: -12.839,
                sy: .979,
                r: .064,
                a: .72
            },
            36: {
                x: 47.619,
                y: -12.511,
                r: .063,
                a: .73
            },
            37: {
                x: 46.321,
                y: -12.232,
                sy: .98,
                r: .061,
                a: .75
            },
            38: {
                x: 45.025,
                y: -11.902,
                sy: .981,
                r: .059,
                a: .76
            },
            39: {
                x: 43.727,
                y: -11.572,
                r: .058,
                a: .78
            },
            40: {
                x: 42.479,
                y: -11.245,
                sy: .982,
                r: .056,
                a: .79
            },
            41: {
                x: 41.232,
                y: -10.915,
                r: .055,
                a: .8
            },
            42: {
                x: 39.932,
                y: -10.637,
                sy: .983,
                r: .053,
                a: .81
            },
            43: {
                x: 38.633,
                y: -10.257,
                r: .051,
                a: .82
            },
            44: {
                x: 37.335,
                y: -9.927,
                sy: .984,
                r: .05,
                a: .84
            },
            45: {
                x: 36.034,
                y: -9.648,
                r: .048,
                a: .85
            },
            46: {
                x: 34.784,
                y: -9.268,
                sy: .985,
                r: .046,
                a: .86
            },
            47: {
                x: 33.485,
                y: -8.939,
                r: .045,
                a: .87
            },
            48: {
                x: 32.184,
                y: -8.609,
                sy: .986,
                r: .043,
                a: .88
            },
            49: {
                x: 30.934,
                y: -8.28,
                r: .041,
                a: .89
            },
            50: {
                x: 29.633,
                y: -7.949,
                sy: .987,
                r: .04
            },
            51: {
                x: 28.381,
                y: -7.57,
                sy: .988,
                r: .038,
                a: .9
            },
            52: {
                x: 27.08,
                y: -7.24,
                r: .036,
                a: .91
            },
            53: {
                x: 25.777,
                y: -6.91,
                sy: .989,
                r: .035,
                a: .92
            },
            54: {
                x: 24.476,
                y: -6.581,
                r: .033,
                a: .93
            },
            55: {
                x: 23.223,
                y: -6.201,
                sy: .99,
                r: .031
            },
            56: {
                x: 21.969,
                y: -5.868,
                r: .03,
                a: .94
            },
            57: {
                x: 20.668,
                y: -5.54,
                sy: .991,
                r: .028,
                a: .95
            },
            58: {
                x: 19.413,
                y: -5.157,
                r: .027
            },
            59: {
                x: 18.11,
                y: -4.828,
                sy: .992,
                r: .025,
                a: .96
            },
            60: {
                x: 16.805,
                y: -4.447,
                r: .023
            },
            61: {
                x: 15.501,
                y: -4.117,
                sy: .993,
                r: .022,
                a: .97
            },
            62: {
                x: 14.247,
                y: -3.737,
                r: .02
            },
            63: {
                x: 12.991,
                y: -3.406,
                sy: .994,
                r: .018,
                a: .98
            },
            64: {
                x: 11.685,
                y: -3.024,
                sy: .995,
                r: .017
            },
            65: {
                x: 10.429,
                y: -2.644,
                r: .015
            },
            66: {
                x: 9.125,
                y: -2.312,
                sy: .996,
                r: .013,
                a: .99
            },
            67: {
                x: 7.817,
                y: -1.882,
                r: .012
            },
            68: {
                x: 6.56,
                y: -1.549,
                sy: .997,
                r: .01
            },
            69: {
                x: 5.254,
                y: -1.168,
                r: .008,
                a: 1
            },
            70: {
                x: 3.947,
                y: -.836,
                sy: .998,
                r: .007
            },
            71: {
                x: 2.739,
                y: -.455,
                r: .005
            },
            72: {
                x: 1.431,
                y: -.022,
                sy: .999,
                r: .003
            },
            73: {
                x: .172,
                y: .31,
                r: .002
            },
            74: {
                x: -1.1,
                y: .65,
                sy: 1,
                r: 0
            },
            75: {
                x: -2.249,
                y: 1.102,
                r: -.001
            },
            76: {
                x: -3.548,
                y: 1.454,
                sy: 1.001,
                r: -.003
            },
            77: {
                x: -4.797,
                y: 1.806,
                sy: 1.002,
                r: -.005
            },
            78: {
                x: -6.046,
                y: 2.259,
                r: -.006
            },
            79: {
                x: -7.345,
                y: 2.611,
                sy: 1.003,
                r: -.008
            },
            80: {
                x: -8.594,
                y: 3.013,
                r: -.01,
                a: .99
            },
            81: {
                x: -9.892,
                y: 3.415,
                sy: 1.004,
                r: -.011
            },
            82: {
                x: -11.091,
                y: 3.767,
                r: -.013
            },
            83: {
                x: -12.39,
                y: 4.169,
                sy: 1.005,
                r: -.015,
                a: .98
            },
            84: {
                x: -13.689,
                y: 4.521,
                r: -.016
            },
            85: {
                x: -14.938,
                y: 4.973,
                sy: 1.006,
                r: -.018
            },
            86: {
                x: -16.237,
                y: 5.376,
                r: -.019,
                a: .97
            },
            87: {
                x: -17.436,
                y: 5.728,
                sy: 1.007,
                r: -.021
            },
            88: {
                x: -18.735,
                y: 6.18,
                r: -.023,
                a: .96
            },
            89: {
                x: -19.984,
                y: 6.582,
                sy: 1.008,
                r: -.024
            },
            90: {
                x: -21.283,
                y: 6.984,
                r: -.026,
                a: .95
            },
            91: {
                x: -22.581,
                y: 7.336,
                sy: 1.009,
                r: -.028
            },
            92: {
                x: -23.78,
                y: 7.788,
                sy: 1.01,
                r: -.029,
                a: .94
            },
            93: {
                x: -25.029,
                y: 8.19,
                r: -.031
            },
            94: {
                x: -26.328,
                y: 8.592,
                sy: 1.011,
                r: -.032,
                a: .93
            },
            95: {
                x: -27.577,
                y: 8.995,
                r: -.034,
                a: .92
            },
            96: {
                x: -28.876,
                y: 9.447,
                sy: 1.012,
                r: -.036,
                a: .91
            },
            97: {
                x: -30.125,
                y: 9.849,
                r: -.037
            },
            98: {
                x: -31.373,
                y: 10.201,
                sy: 1.013,
                r: -.039,
                a: .9
            },
            99: {
                x: -32.672,
                y: 10.653,
                r: -.041,
                a: .89
            },
            100: {
                x: -33.921,
                y: 11.105,
                sy: 1.014,
                r: -.042,
                a: .88
            },
            101: {
                x: -35.22,
                y: 11.507,
                r: -.044,
                a: .87
            },
            102: {
                x: -36.419,
                y: 11.909,
                sy: 1.015,
                r: -.046,
                a: .86
            },
            103: {
                x: -37.718,
                y: 12.361,
                r: -.047,
                a: .85
            },
            104: {
                x: -38.966,
                y: 12.763,
                sy: 1.016,
                r: -.049,
                a: .84
            },
            105: {
                x: -40.265,
                y: 13.215,
                sy: 1.017,
                r: -.05,
                a: .83
            },
            106: {
                x: -41.514,
                y: 13.618,
                r: -.052,
                a: .82
            },
            107: {
                x: -42.763,
                y: 14.07,
                sy: 1.018,
                r: -.054,
                a: .8
            },
            108: {
                x: -44.012,
                y: 14.522,
                r: -.055,
                a: .79
            },
            109: {
                x: -45.31,
                y: 14.924,
                sy: 1.019,
                r: -.057,
                a: .78
            },
            110: {
                x: -46.559,
                y: 15.326,
                r: -.059,
                a: .77
            },
            111: {
                x: -47.858,
                y: 15.828,
                sy: 1.02,
                r: -.06,
                a: .76
            },
            112: {
                x: -49.057,
                y: 16.23,
                r: -.062,
                a: .74
            },
            113: {
                x: -50.356,
                y: 16.682,
                sy: 1.021,
                r: -.063,
                a: .73
            },
            114: {
                x: -51.604,
                y: 17.134,
                r: -.065,
                a: .71
            },
            115: {
                x: -52.903,
                y: 17.586,
                sy: 1.022,
                r: -.067,
                a: .7
            },
            116: {
                x: -54.152,
                y: 18.038,
                r: -.068,
                a: .69
            },
            117: {
                x: -55.351,
                y: 18.44,
                sy: 1.023,
                r: -.07,
                a: .67
            },
            118: {
                x: -56.649,
                y: 18.942,
                r: -.072,
                a: .66
            },
            119: {
                x: -57.898,
                y: 19.394,
                sy: 1.024,
                r: -.073,
                a: .64
            },
            120: {
                x: -59.197,
                y: 19.796,
                sy: 1.025,
                r: -.075,
                a: .63
            },
            121: {
                x: -60.446,
                y: 20.249,
                r: -.077,
                a: .61
            },
            122: {
                x: -61.695,
                y: 20.751,
                sy: 1.026,
                r: -.078,
                a: .59
            },
            123: {
                x: -62.943,
                y: 21.203,
                r: -.08,
                a: .57
            },
            124: {
                x: -64.242,
                y: 21.655,
                sy: 1.027,
                r: -.081,
                a: .55
            },
            125: {
                x: -65.491,
                y: 22.157,
                r: -.083,
                a: .54
            },
            126: {
                x: -66.739,
                y: 22.609,
                sy: 1.028,
                r: -.085,
                a: .52
            },
            127: {
                x: -67.988,
                y: 23.061,
                r: -.086,
                a: .5
            },
            128: {
                x: -69.237,
                y: 23.513,
                sy: 1.029,
                r: -.088,
                a: .48
            },
            129: {
                x: -70.536,
                y: 24.015,
                r: -.09,
                a: .46
            },
            130: {
                x: -71.784,
                y: 24.467,
                sy: 1.03,
                r: -.091,
                a: .44
            },
            131: {
                x: -73.033,
                y: 24.919,
                r: -.093,
                a: .42
            },
            132: {
                x: -74.282,
                y: 25.371,
                sy: 1.031,
                r: -.094,
                a: .4
            },
            133: {
                x: -75.531,
                y: 25.873,
                r: -.096,
                a: .38
            },
            134: {
                x: -76.829,
                y: 26.375,
                sy: 1.032,
                r: -.098,
                a: .36
            },
            135: {
                x: -78.078,
                y: 26.827,
                sy: 1.033,
                r: -.099,
                a: .34
            },
            136: {
                x: -79.377,
                y: 27.279,
                r: -.101,
                a: .32
            },
            137: {
                x: -80.575,
                y: 27.831,
                sy: 1.034,
                r: -.103,
                a: .29
            },
            138: {
                x: -81.824,
                y: 28.283,
                r: -.104,
                a: .27
            },
            139: {
                x: -83.123,
                y: 28.735,
                sy: 1.035,
                r: -.106,
                a: .25
            },
            140: {
                x: -84.371,
                y: 29.287,
                r: -.107,
                a: .23
            },
            141: {
                x: -85.62,
                y: 29.739,
                sy: 1.036,
                r: -.109,
                a: .2
            },
            142: {
                x: -86.869,
                y: 30.241,
                r: -.111,
                a: .18
            },
            143: {
                x: -88.117,
                y: 30.693,
                sy: 1.037,
                r: -.112,
                a: .15
            },
            144: {
                x: -89.366,
                y: 31.245,
                r: -.114,
                a: .13
            },
            145: {
                x: -90.665,
                y: 31.747,
                sy: 1.038,
                r: -.116,
                a: .11
            },
            146: {
                x: -91.913,
                y: 32.199,
                r: -.117,
                a: .08
            },
            147: {
                x: -93.112,
                y: 32.701,
                sy: 1.039,
                r: -.119,
                a: .05
            },
            148: {
                x: -94.411,
                y: 33.253,
                r: -.121,
                a: .03
            },
            149: {
                x: -95.75,
                y: 33.65,
                sy: 1.04,
                r: -.122,
                a: 0
            }
        }).addTimedChild(instance2, 0, 150, {
            0: {
                x: -2.15,
                y: 1.05,
                sy: 1,
                r: -.001,
                a: 1
            },
            1: {
                x: -3.398,
                y: 1.504,
                sy: 1.001,
                r: -.003
            },
            2: {
                x: -4.696,
                y: 1.858,
                r: -.005
            },
            3: {
                x: -5.945,
                y: 2.262,
                sy: 1.002,
                r: -.006
            },
            4: {
                x: -7.193,
                y: 2.666,
                r: -.008
            },
            5: {
                x: -8.491,
                y: 3.071,
                sy: 1.003,
                r: -.009
            },
            6: {
                x: -9.789,
                y: 3.475,
                sy: 1.004,
                r: -.011,
                a: .99
            },
            7: {
                x: -11.088,
                y: 3.829,
                r: -.013
            },
            8: {
                x: -12.386,
                y: 4.233,
                sy: 1.005,
                r: -.014
            },
            9: {
                x: -13.684,
                y: 4.637,
                r: -.016,
                a: .98
            },
            10: {
                x: -14.982,
                y: 4.991,
                sy: 1.006,
                r: -.018
            },
            11: {
                x: -16.23,
                y: 5.445,
                r: -.019
            },
            12: {
                x: -17.478,
                y: 5.849,
                sy: 1.007,
                r: -.021,
                a: .97
            },
            13: {
                x: -18.827,
                y: 6.253,
                r: -.023
            },
            14: {
                x: -20.075,
                y: 6.658,
                sy: 1.008,
                r: -.024,
                a: .96
            },
            15: {
                x: -21.373,
                y: 7.062,
                r: -.026
            },
            16: {
                x: -22.671,
                y: 7.466,
                sy: 1.009,
                r: -.028,
                a: .95
            },
            17: {
                x: -23.969,
                y: 7.87,
                sy: 1.01,
                r: -.029
            },
            18: {
                x: -25.267,
                y: 8.324,
                r: -.031,
                a: .94
            },
            19: {
                x: -26.515,
                y: 8.728,
                sy: 1.011,
                r: -.033,
                a: .93
            },
            20: {
                x: -27.814,
                y: 9.132,
                r: -.034
            },
            21: {
                x: -29.062,
                y: 9.536,
                sy: 1.012,
                r: -.036,
                a: .92
            },
            22: {
                x: -30.36,
                y: 9.94,
                r: -.038,
                a: .91
            },
            23: {
                x: -31.658,
                y: 10.344,
                sy: 1.013,
                r: -.039,
                a: .9
            },
            24: {
                x: -32.956,
                y: 10.798,
                r: -.041,
                a: .89
            },
            25: {
                x: -34.254,
                y: 11.252,
                sy: 1.014,
                r: -.043,
                a: .88
            },
            26: {
                x: -35.502,
                y: 11.706,
                r: -.044
            },
            27: {
                x: -36.8,
                y: 12.11,
                sy: 1.015,
                r: -.046,
                a: .86
            },
            28: {
                x: -38.098,
                y: 12.514,
                sy: 1.016,
                r: -.048,
                a: .85
            },
            29: {
                x: -39.346,
                y: 12.968,
                r: -.049,
                a: .84
            },
            30: {
                x: -40.644,
                y: 13.373,
                sy: 1.017,
                r: -.051,
                a: .83
            },
            31: {
                x: -41.942,
                y: 13.827,
                r: -.053,
                a: .82
            },
            32: {
                x: -43.24,
                y: 14.281,
                sy: 1.018,
                r: -.054,
                a: .81
            },
            33: {
                x: -44.488,
                y: 14.685,
                r: -.056,
                a: .8
            },
            34: {
                x: -45.786,
                y: 15.089,
                sy: 1.019,
                r: -.058,
                a: .78
            },
            35: {
                x: -47.084,
                y: 15.543,
                r: -.059,
                a: .77
            },
            36: {
                x: -48.332,
                y: 15.997,
                sy: 1.02,
                r: -.061,
                a: .76
            },
            37: {
                x: -49.63,
                y: 16.451,
                r: -.063,
                a: .74
            },
            38: {
                x: -50.928,
                y: 16.855,
                sy: 1.021,
                r: -.064,
                a: .73
            },
            39: {
                x: -52.226,
                y: 17.359,
                sy: 1.022,
                r: -.066,
                a: .71
            },
            40: {
                x: -53.524,
                y: 17.813,
                r: -.068,
                a: .7
            },
            41: {
                x: -54.722,
                y: 18.267,
                sy: 1.023,
                r: -.069,
                a: .68
            },
            42: {
                x: -56.02,
                y: 18.721,
                r: -.071,
                a: .67
            },
            43: {
                x: -57.318,
                y: 19.175,
                sy: 1.024,
                r: -.072,
                a: .65
            },
            44: {
                x: -58.616,
                y: 19.579,
                r: -.074,
                a: .64
            },
            45: {
                x: -59.864,
                y: 20.133,
                sy: 1.025,
                r: -.076,
                a: .62
            },
            46: {
                x: -61.162,
                y: 20.587,
                r: -.077,
                a: .6
            },
            47: {
                x: -62.46,
                y: 21.041,
                sy: 1.026,
                r: -.079,
                a: .59
            },
            48: {
                x: -63.708,
                y: 21.495,
                r: -.081,
                a: .57
            },
            49: {
                x: -65.005,
                y: 21.949,
                sy: 1.027,
                r: -.082,
                a: .55
            },
            50: {
                x: -66.253,
                y: 22.403,
                r: -.084,
                a: .53
            },
            51: {
                x: -67.551,
                y: 22.907,
                sy: 1.028,
                r: -.086,
                a: .51
            },
            52: {
                x: -68.849,
                y: 23.411,
                sy: 1.029,
                r: -.087,
                a: .49
            },
            53: {
                x: -70.147,
                y: 23.864,
                r: -.089,
                a: .47
            },
            54: {
                x: -71.445,
                y: 24.318,
                sy: 1.03,
                r: -.091,
                a: .45
            },
            55: {
                x: -72.643,
                y: 24.772,
                r: -.092,
                a: .43
            },
            56: {
                x: -73.94,
                y: 25.276,
                sy: 1.031,
                r: -.094,
                a: .41
            },
            57: {
                x: -75.238,
                y: 25.73,
                r: -.096,
                a: .39
            },
            58: {
                x: -76.536,
                y: 26.284,
                sy: 1.032,
                r: -.097,
                a: .37
            },
            59: {
                x: -77.784,
                y: 26.738,
                r: -.099,
                a: .35
            },
            60: {
                x: -79.082,
                y: 27.242,
                sy: 1.033,
                r: -.101,
                a: .32
            },
            61: {
                x: -80.38,
                y: 27.696,
                r: -.102,
                a: .3
            },
            62: {
                x: -81.677,
                y: 28.2,
                sy: 1.034,
                r: -.104,
                a: .28
            },
            63: {
                x: -82.875,
                y: 28.704,
                sy: 1.035,
                r: -.106,
                a: .25
            },
            64: {
                x: -84.173,
                y: 29.158,
                r: -.107,
                a: .23
            },
            65: {
                x: -85.471,
                y: 29.712,
                sy: 1.036,
                r: -.109,
                a: .21
            },
            66: {
                x: -86.718,
                y: 30.216,
                r: -.111,
                a: .18
            },
            67: {
                x: -88.016,
                y: 30.67,
                sy: 1.037,
                r: -.112,
                a: .16
            },
            68: {
                x: -89.314,
                y: 31.173,
                r: -.114,
                a: .13
            },
            69: {
                x: -90.562,
                y: 31.677,
                sy: 1.038,
                r: -.116,
                a: .11
            },
            70: {
                x: -91.809,
                y: 32.181,
                r: -.117,
                a: .08
            },
            71: {
                x: -93.107,
                y: 32.685,
                sy: 1.039,
                r: -.119,
                a: .05
            },
            72: {
                x: -94.405,
                y: 33.239,
                r: -.121,
                a: .03
            },
            73: {
                x: -95.75,
                y: 33.65,
                sy: 1.04,
                r: -.122,
                a: 0
            },
            74: {
                x: 93.7,
                y: -22.9,
                sy: .96,
                r: .122
            },
            75: {
                x: 92.465,
                y: -22.57,
                r: .121,
                a: .03
            },
            76: {
                x: 91.229,
                y: -22.292,
                sy: .961,
                r: .119,
                a: .05
            },
            77: {
                x: 89.993,
                y: -22.063,
                sy: .962,
                r: .117,
                a: .08
            },
            78: {
                x: 88.707,
                y: -21.833,
                r: .116,
                a: .11
            },
            79: {
                x: 87.421,
                y: -21.605,
                sy: .963,
                r: .114,
                a: .13
            },
            80: {
                x: 86.184,
                y: -21.326,
                r: .112,
                a: .15
            },
            81: {
                x: 84.898,
                y: -21.047,
                sy: .964,
                r: .111,
                a: .18
            },
            82: {
                x: 83.661,
                y: -20.767,
                r: .109,
                a: .2
            },
            83: {
                x: 82.423,
                y: -20.488,
                sy: .965,
                r: .108,
                a: .23
            },
            84: {
                x: 81.134,
                y: -20.209,
                r: .106,
                a: .25
            },
            85: {
                x: 79.847,
                y: -19.93,
                sy: .966,
                r: .104,
                a: .27
            },
            86: {
                x: 78.559,
                y: -19.7,
                r: .103,
                a: .29
            },
            87: {
                x: 77.368,
                y: -19.421,
                sy: .967,
                r: .101,
                a: .32
            },
            88: {
                x: 76.079,
                y: -19.191,
                r: .099,
                a: .34
            },
            89: {
                x: 74.792,
                y: -18.863,
                sy: .968,
                r: .098,
                a: .36
            },
            90: {
                x: 73.501,
                y: -18.584,
                r: .096,
                a: .38
            },
            91: {
                x: 72.26,
                y: -18.354,
                sy: .969,
                r: .094,
                a: .4
            },
            92: {
                x: 71.021,
                y: -18.024,
                sy: .97,
                r: .093,
                a: .42
            },
            93: {
                x: 69.73,
                y: -17.743,
                r: .091,
                a: .44
            },
            94: {
                x: 68.489,
                y: -17.463,
                sy: .971,
                r: .09,
                a: .46
            },
            95: {
                x: 67.197,
                y: -17.184,
                r: .088,
                a: .48
            },
            96: {
                x: 65.906,
                y: -16.853,
                sy: .972,
                r: .086,
                a: .5
            },
            97: {
                x: 64.714,
                y: -16.624,
                r: .085,
                a: .52
            },
            98: {
                x: 63.422,
                y: -16.294,
                sy: .973,
                r: .083,
                a: .54
            },
            99: {
                x: 62.129,
                y: -16.014,
                r: .081,
                a: .55
            },
            100: {
                x: 60.887,
                y: -15.734,
                sy: .974,
                r: .08,
                a: .57
            },
            101: {
                x: 59.593,
                y: -15.453,
                r: .078,
                a: .59
            },
            102: {
                x: 58.4,
                y: -15.124,
                sy: .975,
                r: .077,
                a: .61
            },
            103: {
                x: 57.106,
                y: -14.841,
                r: .075,
                a: .63
            },
            104: {
                x: 55.812,
                y: -14.511,
                sy: .976,
                r: .073,
                a: .64
            },
            105: {
                x: 54.568,
                y: -14.232,
                r: .072,
                a: .66
            },
            106: {
                x: 53.274,
                y: -13.951,
                sy: .977,
                r: .07,
                a: .67
            },
            107: {
                x: 52.028,
                y: -13.621,
                sy: .978,
                r: .068,
                a: .69
            },
            108: {
                x: 50.783,
                y: -13.289,
                r: .067,
                a: .7
            },
            109: {
                x: 49.487,
                y: -13.008,
                sy: .979,
                r: .065,
                a: .71
            },
            110: {
                x: 48.241,
                y: -12.677,
                r: .064,
                a: .73
            },
            111: {
                x: 46.945,
                y: -12.346,
                sy: .98,
                r: .062,
                a: .74
            },
            112: {
                x: 45.698,
                y: -12.065,
                r: .06,
                a: .76
            },
            113: {
                x: 44.452,
                y: -11.735,
                sy: .981,
                r: .059,
                a: .77
            },
            114: {
                x: 43.155,
                y: -11.403,
                r: .057,
                a: .78
            },
            115: {
                x: 41.908,
                y: -11.122,
                sy: .982,
                r: .055,
                a: .79
            },
            116: {
                x: 40.611,
                y: -10.791,
                r: .054,
                a: .8
            },
            117: {
                x: 39.362,
                y: -10.458,
                sy: .983,
                r: .052,
                a: .82
            },
            118: {
                x: 38.114,
                y: -10.179,
                r: .051,
                a: .83
            },
            119: {
                x: 36.814,
                y: -9.795,
                sy: .984,
                r: .049,
                a: .84
            },
            120: {
                x: 35.565,
                y: -9.515,
                r: .047,
                a: .85
            },
            121: {
                x: 34.266,
                y: -9.181,
                sy: .985,
                r: .046,
                a: .86
            },
            122: {
                x: 33.067,
                y: -8.851,
                sy: .986,
                r: .044,
                a: .87
            },
            123: {
                x: 31.768,
                y: -8.469,
                r: .042,
                a: .88
            },
            124: {
                x: 30.517,
                y: -8.187,
                sy: .987,
                r: .041,
                a: .89
            },
            125: {
                x: 29.216,
                y: -7.853,
                r: .039,
                a: .9
            },
            126: {
                x: 27.965,
                y: -7.472,
                sy: .988,
                r: .038,
                a: .91
            },
            127: {
                x: 26.715,
                y: -7.141,
                r: .036
            },
            128: {
                x: 25.464,
                y: -6.807,
                sy: .989,
                r: .034,
                a: .92
            },
            129: {
                x: 24.162,
                y: -6.526,
                r: .033,
                a: .93
            },
            130: {
                x: 22.91,
                y: -6.143,
                sy: .99,
                r: .031,
                a: .94
            },
            131: {
                x: 21.607,
                y: -5.761,
                r: .029
            },
            132: {
                x: 20.405,
                y: -5.478,
                sy: .991,
                r: .028,
                a: .95
            },
            133: {
                x: 19.101,
                y: -5.094,
                r: .026
            },
            134: {
                x: 17.849,
                y: -4.713,
                sy: .992,
                r: .025,
                a: .96
            },
            135: {
                x: 16.595,
                y: -4.429,
                r: .023
            },
            136: {
                x: 15.292,
                y: -4.047,
                sy: .993,
                r: .021,
                a: .97
            },
            137: {
                x: 14.037,
                y: -3.663,
                sy: .994,
                r: .02
            },
            138: {
                x: 12.783,
                y: -3.38,
                r: .018,
                a: .98
            },
            139: {
                x: 11.528,
                y: -2.997,
                sy: .995,
                r: .016
            },
            140: {
                x: 10.223,
                y: -2.613,
                r: .015
            },
            141: {
                x: 8.968,
                y: -2.28,
                sy: .996,
                r: .013,
                a: .99
            },
            142: {
                x: 7.712,
                y: -1.895,
                r: .012
            },
            143: {
                x: 6.456,
                y: -1.514,
                sy: .997,
                r: .01
            },
            144: {
                x: 5.2,
                y: -1.178,
                r: .008,
                a: 1
            },
            145: {
                x: 3.893,
                y: -.795,
                sy: .998,
                r: .007
            },
            146: {
                x: 2.637,
                y: -.412,
                r: .005
            },
            147: {
                x: 1.429,
                y: -.076,
                sy: .999,
                r: .003
            },
            148: {
                x: .122,
                y: .307,
                r: .002
            },
            149: {
                x: -1.1,
                y: .65,
                sy: 1,
                r: 0
            }
        }).addTimedChild(instance1), this.labels.forEach((label, index) => {
            var labelEndPosition = this.labels[index + 1] ? this.labels[index + 1].position - 1 : this._totalFrames - 1;
            this.addAction(() => this.emit("label_end", this.currentLabel), labelEndPosition)
        })
    }), lib.paytableGlow = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("paytableGlow"));
        this.addChild(instance1)
    }), lib.winBoxSmallBubbles = Container.extend(function() {
        Container.call(this);
        var instance16 = new Sprite(fromFrame("sceneSlotDividerSingle")).setTransform(93.7, 64.45),
            instance15 = new Sprite(fromFrame("sceneSlotDividerSingle")).setTransform(107, -14.15, .35, .35),
            instance14 = new Sprite(fromFrame("sceneSlotDividerSingle")).setTransform(101, 132.35, .5, .5),
            instance13 = new Sprite(fromFrame("sceneSlotDividerSingle")).setTransform(126.4, 113.95, .4, .4),
            instance12 = new Sprite(fromFrame("sceneSlotDividerSingle")).setTransform(49.95, 49.35, .75, .75),
            instance11 = new Sprite(fromFrame("sceneSlotDividerSingle")).setTransform(92.9, -41.25, .35, .35),
            instance10 = new Sprite(fromFrame("sceneSlotDividerSingle")).setTransform(56.7, 34.55, .35, .35),
            instance9 = new Sprite(fromFrame("sceneSlotDividerSingle")).setTransform(103, 95, .45, .45),
            instance8 = new Sprite(fromFrame("sceneSlotDividerSingle")).setTransform(116.1, 130.55, 1.428, 1.428, 0, 3.904, 2.379),
            instance7 = new Sprite(fromFrame("sceneSlotDividerSingle")).setTransform(93, 79.45, .5, .5, 0, 3.904, 2.379),
            instance6 = new Sprite(fromFrame("sceneSlotDividerSingle")).setTransform(134.75, 43.9, .714, .714, 0, 3.904, 2.379),
            instance5 = new Sprite(fromFrame("sceneSlotDividerSingle")).setTransform(154.85, 77.15, .571, .571, 0, 3.904, 2.379),
            instance4 = new Sprite(fromFrame("sceneSlotDividerSingle")).setTransform(126.3, 174.2, 1.071, 1.071, 0, 3.904, 2.379),
            instance3 = new Sprite(fromFrame("sceneSlotDividerSingle")).setTransform(125.75, 8.15, .864, .864, 0, 3.904, 2.379),
            instance2 = new Sprite(fromFrame("sceneSlotDividerSingle")).setTransform(100.5, 21, .5, .5, 0, 3.904, 2.379),
            instance1 = new Sprite(fromFrame("sceneSlotDividerSingle")).setTransform(84.3, 109.65, .642, .642, 0, 3.904, 2.379);
        this.addChild(instance16, instance15, instance14, instance13, instance12, instance11, instance10, instance9, instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1)
    }), lib.fish2 = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile14FishBlue"));
        this.addChild(instance1)
    }), lib.fish2Idle = MovieClip.extend(function() {
        MovieClip.call(this, {
            duration: 180
        });
        var instance2 = new lib.fish2,
            instance1 = new lib.winBoxSmallBubbles,
            instance3 = new lib.winBoxSmallBubbles;
        this.addTimedChild(instance2, 0, 180, {
            0: {
                x: -97,
                y: 500,
                sx: .5,
                sy: .5,
                a: 0
            },
            1: {
                x: -94.45,
                y: 500.25,
                sx: .499,
                a: .01
            },
            2: {
                x: -91.801,
                y: 500.5,
                sx: .497,
                a: .03
            },
            3: {
                x: -89.206,
                y: 500.75,
                sx: .496,
                a: .04
            },
            4: {
                x: -86.607,
                y: 501.05,
                sx: .495,
                a: .05
            },
            5: {
                x: -84.008,
                y: 501.3,
                sx: .494,
                a: .06
            },
            6: {
                x: -81.36,
                y: 501.55,
                sx: .492,
                a: .08
            },
            7: {
                x: -78.764,
                y: 501.8,
                sx: .491,
                a: .09
            },
            8: {
                x: -76.165,
                y: 502.05,
                sx: .49,
                a: .1
            },
            9: {
                x: -73.567,
                y: 502.3,
                sx: .488,
                a: .12
            },
            10: {
                x: -70.918,
                y: 502.6,
                sx: .487,
                a: .13
            },
            11: {
                x: -68.322,
                y: 502.85,
                sx: .486,
                a: .14
            },
            12: {
                x: -65.724,
                y: 503.1,
                sx: .485,
                a: .15
            },
            13: {
                x: -63.125,
                y: 503.35,
                sx: .483,
                a: .17
            },
            14: {
                x: -60.476,
                y: 503.6,
                sx: .482,
                a: .18
            },
            15: {
                x: -57.878,
                y: 503.85,
                sx: .481,
                a: .19
            },
            16: {
                x: -55.282,
                y: 504.1,
                sx: .48,
                a: .21
            },
            17: {
                x: -52.683,
                y: 504.4,
                sx: .478,
                a: .22
            },
            18: {
                x: -50.035,
                y: 504.65,
                sx: .477,
                a: .23
            },
            19: {
                x: -47.436,
                y: 504.9,
                sx: .476,
                a: .24
            },
            20: {
                x: -44.84,
                y: 505.185,
                sx: .474,
                a: .26
            },
            21: {
                x: -42.242,
                y: 505.435,
                sx: .473,
                a: .27
            },
            22: {
                x: -39.593,
                y: 505.685,
                sx: .472,
                a: .28
            },
            23: {
                x: -36.994,
                y: 505.985,
                sx: .471,
                a: .29
            },
            24: {
                x: -34.399,
                y: 506.235,
                sx: .469,
                a: .31
            },
            25: {
                x: -31.8,
                y: 506.485,
                sx: .468,
                a: .32
            },
            26: {
                x: -29.151,
                y: 506.735,
                sx: .467,
                a: .33
            },
            27: {
                x: -26.553,
                y: 506.985,
                sx: .465,
                a: .35
            },
            28: {
                x: -24.004,
                y: 507.235,
                sx: .464,
                a: .36
            },
            29: {
                x: -21.408,
                y: 507.485,
                sx: .463,
                a: .37
            },
            30: {
                x: -18.76,
                y: 507.785,
                sx: .462,
                a: .38
            },
            31: {
                x: -16.161,
                y: 508.035,
                sx: .46,
                a: .4
            },
            32: {
                x: -13.562,
                y: 508.285,
                sx: .459,
                a: .41
            },
            33: {
                x: -10.967,
                y: 508.535,
                sx: .458,
                a: .42
            },
            34: {
                x: -8.318,
                y: 508.785,
                sx: .457,
                a: .44
            },
            35: {
                x: -5.719,
                y: 509.035,
                sx: .455,
                a: .45
            },
            36: {
                x: -3.121,
                y: 509.335,
                sx: .454,
                a: .46
            },
            37: {
                x: -.525,
                y: 509.585,
                sx: .453,
                a: .47
            },
            38: {
                x: 2.124,
                y: 509.835,
                sx: .451,
                a: .49
            },
            39: {
                x: 4.7,
                y: 510,
                sx: .45,
                a: .5
            },
            40: {
                x: 7.06,
                y: 509.8,
                sx: .451
            },
            41: {
                x: 9.421,
                y: 509.6,
                sx: .452
            },
            42: {
                x: 11.781,
                y: 509.4,
                sx: .453
            },
            43: {
                x: 14.142,
                y: 509.2,
                sx: .454
            },
            44: {
                x: 16.452,
                y: 509,
                sx: .455
            },
            45: {
                x: 18.812,
                y: 508.8,
                sx: .456
            },
            46: {
                x: 21.173,
                y: 508.6,
                sx: .457
            },
            47: {
                x: 23.533,
                y: 508.4,
                sx: .458
            },
            48: {
                x: 25.844,
                y: 508.2,
                sx: .459
            },
            49: {
                x: 28.204,
                y: 508,
                sx: .46
            },
            50: {
                x: 30.515,
                y: 507.8,
                sx: .461
            },
            51: {
                x: 32.925,
                y: 507.6,
                sx: .462
            },
            52: {
                x: 35.235,
                y: 507.4,
                sx: .463
            },
            53: {
                x: 37.596,
                y: 507.2,
                sx: .464
            },
            54: {
                x: 39.906,
                y: 507,
                sx: .465
            },
            55: {
                x: 42.316,
                y: 506.8,
                sx: .466
            },
            56: {
                x: 44.627,
                y: 506.6,
                sx: .467
            },
            57: {
                x: 46.987,
                y: 506.4,
                sx: .468
            },
            58: {
                x: 49.298,
                y: 506.2,
                sx: .469
            },
            59: {
                x: 51.658,
                y: 506,
                sx: .47
            },
            60: {
                x: 54.019,
                y: 505.8,
                sx: .471
            },
            61: {
                x: 56.379,
                y: 505.6,
                sx: .472
            },
            62: {
                x: 58.689,
                y: 505.4,
                sx: .473
            },
            63: {
                x: 61.05,
                y: 505.2,
                sx: .474
            },
            64: {
                x: 63.41,
                y: 505,
                sx: .475
            },
            65: {
                x: 65.771,
                y: 504.8,
                sx: .476
            },
            66: {
                x: 68.081,
                y: 504.6,
                sx: .477
            },
            67: {
                x: 70.442,
                y: 504.4,
                sx: .478
            },
            68: {
                x: 72.752,
                y: 504.2,
                sx: .479
            },
            69: {
                x: 75.162,
                y: 504,
                sx: .48
            },
            70: {
                x: 77.473,
                y: 503.8,
                sx: .481
            },
            71: {
                x: 79.833,
                y: 503.6,
                sx: .482
            },
            72: {
                x: 82.143,
                y: 503.4,
                sx: .483
            },
            73: {
                x: 84.504,
                y: 503.2,
                sx: .484
            },
            74: {
                x: 86.864,
                y: 503,
                sx: .485
            },
            75: {
                x: 89.225,
                y: 502.8,
                sx: .486
            },
            76: {
                x: 91.535,
                y: 502.6,
                sx: .487
            },
            77: {
                x: 93.896,
                y: 502.4,
                sx: .488
            },
            78: {
                x: 96.256,
                y: 502.2,
                sx: .489
            },
            79: {
                x: 98.616,
                y: 502,
                sx: .49
            },
            80: {
                x: 100.927,
                y: 501.8,
                sx: .491
            },
            81: {
                x: 103.287,
                y: 501.6,
                sx: .492
            },
            82: {
                x: 105.598,
                y: 501.4,
                sx: .493
            },
            83: {
                x: 108.008,
                y: 501.2,
                sx: .494
            },
            84: {
                x: 110.368,
                y: 501,
                sx: .495
            },
            85: {
                x: 112.679,
                y: 500.8,
                sx: .496
            },
            86: {
                x: 115.039,
                y: 500.6,
                sx: .497
            },
            87: {
                x: 117.4,
                y: 500.4,
                sx: .498
            },
            88: {
                x: 119.76,
                y: 500.2,
                sx: .499
            },
            89: {
                x: 122,
                y: 500,
                sx: .5
            },
            90: {
                x: 124.593,
                y: 500.2,
                sx: .499
            },
            91: {
                x: 127.142,
                y: 500.45,
                sx: .498
            },
            92: {
                x: 129.688,
                y: 500.65,
                sx: .497
            },
            93: {
                x: 132.233,
                y: 500.9
            },
            94: {
                x: 134.682,
                y: 501.1,
                sx: .496
            },
            95: {
                x: 137.277,
                y: 501.35,
                sx: .495
            },
            96: {
                x: 139.776,
                y: 501.55,
                sx: .494
            },
            97: {
                x: 142.321,
                y: 501.8,
                sx: .493
            },
            98: {
                x: 144.866,
                y: 502,
                sx: .492
            },
            99: {
                x: 147.415,
                y: 502.25
            },
            100: {
                x: 149.961,
                y: 502.45,
                sx: .491
            },
            101: {
                x: 152.506,
                y: 502.7,
                sx: .49
            },
            102: {
                x: 155.055,
                y: 502.9,
                sx: .489
            },
            103: {
                x: 157.55,
                y: 503.15,
                sx: .488
            },
            104: {
                x: 160.095,
                y: 503.35,
                sx: .487
            },
            105: {
                x: 162.644,
                y: 503.6
            },
            106: {
                x: 165.189,
                y: 503.8,
                sx: .486
            },
            107: {
                x: 167.735,
                y: 504.05,
                sx: .485
            },
            108: {
                x: 170.284,
                y: 504.25,
                sx: .484
            },
            109: {
                x: 172.829,
                y: 504.5,
                sx: .483
            },
            110: {
                x: 175.374,
                y: 504.7,
                sx: .482
            },
            111: {
                x: 177.923,
                y: 504.95
            },
            112: {
                x: 180.418,
                y: 505.15,
                sx: .481
            },
            113: {
                x: 182.967,
                y: 505.4,
                sx: .48
            },
            114: {
                x: 185.512,
                y: 505.6,
                sx: .479
            },
            115: {
                x: 188.058,
                y: 505.85,
                sx: .478
            },
            116: {
                x: 190.607,
                y: 506.05,
                sx: .477
            },
            117: {
                x: 193.152,
                y: 506.3
            },
            118: {
                x: 195.697,
                y: 506.5,
                sx: .476
            },
            119: {
                x: 198.246,
                y: 506.75,
                sx: .475
            },
            120: {
                x: 200.791,
                y: 506.95,
                sx: .474
            },
            121: {
                x: 203.286,
                y: 507.2,
                sx: .473
            },
            122: {
                x: 205.835,
                y: 507.4,
                sx: .472
            },
            123: {
                x: 208.381,
                y: 507.65
            },
            124: {
                x: 210.926,
                y: 507.85,
                sx: .471
            },
            125: {
                x: 213.475,
                y: 508.1,
                sx: .47
            },
            126: {
                x: 216.02,
                y: 508.3,
                sx: .469
            },
            127: {
                x: 218.565,
                y: 508.55,
                sx: .468
            },
            128: {
                x: 221.114,
                y: 508.75,
                sx: .467
            },
            129: {
                x: 223.659,
                y: 509
            },
            130: {
                x: 226.158,
                y: 509.2,
                sx: .466
            },
            131: {
                x: 228.704,
                y: 509.45,
                sx: .465
            },
            132: {
                x: 231.249,
                y: 509.65,
                sx: .464
            },
            133: {
                x: 233.798,
                y: 509.9,
                sx: .463
            },
            134: {
                x: 236.3,
                y: 510,
                sx: .462
            },
            135: {
                x: 238.675,
                y: 509.75,
                sx: .463,
                a: .49
            },
            136: {
                x: 241.097,
                y: 509.55,
                sx: .464,
                a: .48
            },
            137: {
                x: 243.426,
                y: 509.3,
                sx: .465,
                a: .46
            },
            138: {
                x: 245.805,
                y: 509.1,
                sx: .466
            },
            139: {
                x: 248.227,
                y: 508.85,
                sx: .467,
                a: .45
            },
            140: {
                x: 250.553,
                y: 508.65,
                a: .43
            },
            141: {
                x: 252.925,
                y: 508.4,
                sx: .468,
                a: .42
            },
            142: {
                x: 255.304,
                y: 508.2,
                sx: .469,
                a: .41
            },
            143: {
                x: 257.683,
                y: 507.95,
                sx: .47,
                a: .4
            },
            144: {
                x: 260.005,
                y: 507.75,
                sx: .471,
                a: .39
            },
            145: {
                x: 262.434,
                y: 507.5,
                sx: .472,
                a: .38
            },
            146: {
                x: 264.763,
                y: 507.3,
                a: .37
            },
            147: {
                x: 267.131,
                y: 507.05,
                sx: .473,
                a: .36
            },
            148: {
                x: 269.56,
                y: 506.85,
                sx: .474,
                a: .34
            },
            149: {
                x: 271.889,
                y: 506.6,
                sx: .475,
                a: .33
            },
            150: {
                x: 274.261,
                y: 506.4,
                sx: .476,
                a: .32
            },
            151: {
                x: 276.64,
                y: 506.15,
                sx: .477,
                a: .31
            },
            152: {
                x: 279.019,
                y: 505.95,
                a: .3
            },
            153: {
                x: 281.341,
                y: 505.7,
                sx: .478,
                a: .29
            },
            154: {
                x: 283.77,
                y: 505.5,
                sx: .479,
                a: .28
            },
            155: {
                x: 286.099,
                y: 505.25,
                sx: .48,
                a: .27
            },
            156: {
                x: 288.467,
                y: 505.05,
                sx: .481,
                a: .25
            },
            157: {
                x: 290.897,
                y: 504.816,
                sx: .482
            },
            158: {
                x: 293.218,
                y: 504.616,
                a: .23
            },
            159: {
                x: 295.598,
                y: 504.366,
                sx: .483,
                a: .22
            },
            160: {
                x: 297.977,
                y: 504.166,
                sx: .484,
                a: .21
            },
            161: {
                x: 300.348,
                y: 503.916,
                sx: .485,
                a: .2
            },
            162: {
                x: 302.727,
                y: 503.716,
                sx: .486,
                a: .19
            },
            163: {
                x: 305.103,
                y: 503.466,
                sx: .487,
                a: .18
            },
            164: {
                x: 307.475,
                y: 503.266,
                a: .17
            },
            165: {
                x: 309.804,
                y: 503.016,
                sx: .488,
                a: .16
            },
            166: {
                x: 312.233,
                y: 502.816,
                sx: .489,
                a: .14
            },
            167: {
                x: 314.555,
                y: 502.566,
                sx: .49,
                a: .13
            },
            168: {
                x: 316.934,
                y: 502.366,
                sx: .491,
                a: .12
            },
            169: {
                x: 319.313,
                y: 502.116,
                sx: .492,
                a: .11
            },
            170: {
                x: 321.681,
                y: 501.916,
                a: .1
            },
            171: {
                x: 324.06,
                y: 501.666,
                sx: .493,
                a: .09
            },
            172: {
                x: 326.439,
                y: 501.466,
                sx: .494,
                a: .08
            },
            173: {
                x: 328.811,
                y: 501.216,
                sx: .495,
                a: .07
            },
            174: {
                x: 331.14,
                y: 501.016,
                sx: .496,
                a: .05
            },
            175: {
                x: 333.562,
                y: 500.766,
                sx: .497,
                a: .04
            },
            176: {
                x: 335.891,
                y: 500.566
            },
            177: {
                x: 338.27,
                y: 500.316,
                sx: .498,
                a: .02
            },
            178: {
                x: 340.689,
                y: 500.116,
                sx: .499,
                a: .01
            },
            179: {
                x: 343,
                y: 500,
                sx: .5,
                a: 0
            }
        }).addTimedChild(instance1, 0, 62, {
            0: {
                x: -324,
                y: 726.55,
                sx: 1.728,
                sy: 1.728,
                r: -1.571,
                a: 0
            },
            1: {
                x: -327.863,
                y: 726.298,
                sx: 1.724,
                sy: 1.724,
                a: .02
            },
            2: {
                x: -331.792,
                y: 726.08,
                sx: 1.72,
                sy: 1.72,
                a: .04
            },
            3: {
                x: -335.615,
                y: 725.8,
                sx: 1.716,
                sy: 1.716,
                a: .05
            },
            4: {
                x: -339.543,
                y: 725.531,
                sx: 1.712,
                sy: 1.712,
                a: .07
            },
            5: {
                x: -343.366,
                y: 725.302,
                sx: 1.709,
                sy: 1.709,
                a: .09
            },
            6: {
                x: -347.29,
                y: 725.022,
                sx: 1.705,
                sy: 1.705,
                a: .11
            },
            7: {
                x: -351.113,
                y: 724.742,
                sx: 1.701,
                sy: 1.701,
                a: .13
            },
            8: {
                x: -355.041,
                y: 724.524,
                sx: 1.697,
                sy: 1.697,
                a: .14
            },
            9: {
                x: -358.864,
                y: 724.244,
                sx: 1.693,
                sy: 1.693,
                a: .16
            },
            10: {
                x: -362.787,
                y: 723.964,
                sx: 1.689,
                sy: 1.689,
                a: .18
            },
            11: {
                x: -366.611,
                y: 723.685,
                sx: 1.685,
                sy: 1.685,
                a: .2
            },
            12: {
                x: -370.539,
                y: 723.416,
                sx: 1.682,
                sy: 1.682,
                a: .21
            },
            13: {
                x: -374.362,
                y: 723.186,
                sx: 1.678,
                sy: 1.678,
                a: .23
            },
            14: {
                x: -378.29,
                y: 722.918,
                sx: 1.674,
                sy: 1.674,
                a: .25
            },
            15: {
                x: -382.164,
                y: 722.638,
                sx: 1.67,
                sy: 1.67,
                a: .27
            },
            16: {
                x: -386.037,
                y: 722.408,
                sx: 1.666,
                sy: 1.666,
                a: .28
            },
            17: {
                x: -389.8,
                y: 722.35,
                sx: 1.662,
                sy: 1.662,
                a: .3
            },
            18: {
                x: -389.171,
                y: 721.691,
                sx: 1.652,
                sy: 1.652,
                a: .29
            },
            19: {
                x: -388.592,
                y: 721.032,
                sx: 1.642,
                sy: 1.642
            },
            20: {
                x: -387.968,
                y: 720.284,
                sx: 1.632,
                sy: 1.632,
                a: .28
            },
            21: {
                x: -387.339,
                y: 719.576,
                sx: 1.622,
                sy: 1.622,
                a: .27
            },
            22: {
                x: -386.716,
                y: 718.928,
                sx: 1.612,
                sy: 1.612
            },
            23: {
                x: -386.093,
                y: 718.23,
                sx: 1.601,
                sy: 1.601,
                a: .26
            },
            24: {
                x: -385.514,
                y: 717.521,
                sx: 1.591,
                sy: 1.591,
                a: .25
            },
            25: {
                x: -384.841,
                y: 716.823,
                sx: 1.581,
                sy: 1.581
            },
            26: {
                x: -384.261,
                y: 716.114,
                sx: 1.571,
                sy: 1.571,
                a: .24
            },
            27: {
                x: -383.638,
                y: 715.416,
                sx: 1.561,
                sy: 1.561,
                a: .23
            },
            28: {
                x: -383.015,
                y: 714.719,
                sx: 1.551,
                sy: 1.551
            },
            29: {
                x: -382.392,
                y: 714.071,
                sx: 1.541,
                sy: 1.541,
                a: .22
            },
            30: {
                x: -381.763,
                y: 713.312,
                sx: 1.53,
                sy: 1.53,
                a: .21
            },
            31: {
                x: -381.189,
                y: 712.614,
                sx: 1.52,
                sy: 1.52
            },
            32: {
                x: -380.56,
                y: 711.955,
                sx: 1.51,
                sy: 1.51,
                a: .2
            },
            33: {
                x: -379.937,
                y: 711.257,
                sx: 1.5,
                sy: 1.5,
                a: .19
            },
            34: {
                x: -379.308,
                y: 710.548,
                sx: 1.49,
                sy: 1.49,
                a: .18
            },
            35: {
                x: -378.685,
                y: 709.85,
                sx: 1.48,
                sy: 1.48
            },
            36: {
                x: -378.106,
                y: 709.142,
                sx: 1.47,
                sy: 1.47,
                a: .17
            },
            37: {
                x: -377.438,
                y: 708.455,
                sx: 1.46,
                sy: 1.46,
                a: .16
            },
            38: {
                x: -376.859,
                y: 707.796,
                sx: 1.449,
                sy: 1.449
            },
            39: {
                x: -376.236,
                y: 707.098,
                sx: 1.439,
                sy: 1.439,
                a: .15
            },
            40: {
                x: -375.557,
                y: 706.339,
                sx: 1.429,
                sy: 1.429,
                a: .14
            },
            41: {
                x: -374.984,
                y: 705.691,
                sx: 1.419,
                sy: 1.419
            },
            42: {
                x: -374.36,
                y: 704.993,
                sx: 1.409,
                sy: 1.409,
                a: .13
            },
            43: {
                x: -373.781,
                y: 704.285,
                sx: 1.399,
                sy: 1.399,
                a: .12
            },
            44: {
                x: -373.108,
                y: 703.587,
                sx: 1.389,
                sy: 1.389
            },
            45: {
                x: -372.479,
                y: 702.878,
                sx: 1.379,
                sy: 1.379,
                a: .11
            },
            46: {
                x: -371.906,
                y: 702.18,
                sx: 1.368,
                sy: 1.368,
                a: .1
            },
            47: {
                x: -371.277,
                y: 701.471,
                sx: 1.358,
                sy: 1.358,
                a: .09
            },
            48: {
                x: -370.653,
                y: 700.823,
                sx: 1.348,
                sy: 1.348
            },
            49: {
                x: -370.03,
                y: 700.075,
                sx: 1.338,
                sy: 1.338,
                a: .08
            },
            50: {
                x: -369.407,
                y: 699.378,
                sx: 1.328,
                sy: 1.328,
                a: .07
            },
            51: {
                x: -368.828,
                y: 698.719,
                sx: 1.318,
                sy: 1.318
            },
            52: {
                x: -368.155,
                y: 698.021,
                sx: 1.308,
                sy: 1.308,
                a: .06
            },
            53: {
                x: -367.575,
                y: 697.312,
                sx: 1.298,
                sy: 1.298,
                a: .05
            },
            54: {
                x: -366.952,
                y: 696.614,
                sx: 1.287,
                sy: 1.287
            },
            55: {
                x: -366.373,
                y: 695.905,
                sx: 1.277,
                sy: 1.277,
                a: .04
            },
            56: {
                x: -365.7,
                y: 695.207,
                sx: 1.267,
                sy: 1.267
            },
            57: {
                x: -365.077,
                y: 694.51,
                sx: 1.257,
                sy: 1.257,
                a: .03
            },
            58: {
                x: -364.498,
                y: 693.851,
                sx: 1.247,
                sy: 1.247,
                a: .02
            },
            59: {
                x: -363.874,
                y: 693.103,
                sx: 1.237,
                sy: 1.237
            },
            60: {
                x: -363.251,
                y: 692.405,
                sx: 1.227,
                sy: 1.227,
                a: .01
            },
            61: {
                x: -362.65,
                y: 691.65,
                sx: 1.216,
                sy: 1.216,
                a: 0
            }
        }).addTimedChild(instance3, 88, 92, {
            88: {
                x: -156,
                y: 692.45,
                sx: 1.44,
                sy: 1.44,
                r: -1.571,
                a: 0
            },
            89: {
                x: -156.657,
                y: 692.229,
                sx: 1.437,
                sy: 1.437,
                a: .01
            },
            90: {
                x: -157.417,
                y: 692.018,
                sx: 1.434,
                sy: 1.434,
                a: .02
            },
            91: {
                x: -158.126,
                y: 691.807,
                sx: 1.431,
                sy: 1.431,
                a: .04
            },
            92: {
                x: -158.836,
                y: 691.646,
                sx: 1.427,
                sy: 1.427,
                a: .05
            },
            93: {
                x: -159.598,
                y: 691.395,
                sx: 1.424,
                sy: 1.424,
                a: .06
            },
            94: {
                x: -160.308,
                y: 691.234,
                sx: 1.421,
                sy: 1.421,
                a: .07
            },
            95: {
                x: -161.017,
                y: 691.023,
                sx: 1.418,
                sy: 1.418,
                a: .08
            },
            96: {
                x: -161.727,
                y: 690.813,
                sx: 1.415,
                sy: 1.415,
                a: .09
            },
            97: {
                x: -162.436,
                y: 690.602,
                sx: 1.412,
                sy: 1.412,
                a: .11
            },
            98: {
                x: -163.146,
                y: 690.391,
                sx: 1.409,
                sy: 1.409,
                a: .12
            },
            99: {
                x: -163.858,
                y: 690.19,
                sx: 1.405,
                sy: 1.405,
                a: .13
            },
            100: {
                x: -164.618,
                y: 690.029,
                sx: 1.402,
                sy: 1.402,
                a: .14
            },
            101: {
                x: -165.33,
                y: 689.779,
                sx: 1.399,
                sy: 1.399,
                a: .15
            },
            102: {
                x: -166.037,
                y: 689.558,
                sx: 1.396,
                sy: 1.396,
                a: .16
            },
            103: {
                x: -166.796,
                y: 689.397,
                sx: 1.393,
                sy: 1.393,
                a: .17
            },
            104: {
                x: -167.508,
                y: 689.146,
                sx: 1.39,
                sy: 1.39,
                a: .18
            },
            105: {
                x: -168.168,
                y: 688.985,
                sx: 1.387,
                sy: 1.387,
                a: .2
            },
            106: {
                x: -168.928,
                y: 688.724,
                sx: 1.383,
                sy: 1.383,
                a: .21
            },
            107: {
                x: -169.64,
                y: 688.574,
                sx: 1.38,
                sy: 1.38,
                a: .22
            },
            108: {
                x: -170.349,
                y: 688.363,
                sx: 1.377,
                sy: 1.377,
                a: .23
            },
            109: {
                x: -171.057,
                y: 688.142,
                sx: 1.374,
                sy: 1.374,
                a: .24
            },
            110: {
                x: -171.818,
                y: 687.941,
                sx: 1.371,
                sy: 1.371,
                a: .25
            },
            111: {
                x: -172.528,
                y: 687.78,
                sx: 1.368,
                sy: 1.368,
                a: .27
            },
            112: {
                x: -173.238,
                y: 687.519,
                sx: 1.365,
                sy: 1.365,
                a: .28
            },
            113: {
                x: -174,
                y: 687.369,
                sx: 1.362,
                sy: 1.362,
                a: .29
            },
            114: {
                x: -174.75,
                y: 687.15,
                sx: 1.358,
                sy: 1.358,
                a: .3
            },
            115: {
                x: -175.201,
                y: 687.026,
                sx: 1.356,
                sy: 1.356
            },
            116: {
                x: -175.758,
                y: 686.872,
                sx: 1.354,
                sy: 1.354,
                a: .29
            },
            117: {
                x: -176.262,
                y: 686.708,
                sx: 1.351,
                sy: 1.351
            },
            118: {
                x: -176.816,
                y: 686.595,
                sx: 1.349,
                sy: 1.349,
                a: .28
            },
            119: {
                x: -177.37,
                y: 686.431,
                sx: 1.347,
                sy: 1.347
            },
            120: {
                x: -177.874,
                y: 686.267,
                sx: 1.345,
                sy: 1.345,
                a: .27
            },
            121: {
                x: -178.428,
                y: 686.153,
                sx: 1.342,
                sy: 1.342
            },
            122: {
                x: -178.932,
                y: 685.989,
                sx: 1.34,
                sy: 1.34
            },
            123: {
                x: -179.436,
                y: 685.825,
                sx: 1.338,
                sy: 1.338,
                a: .26
            },
            124: {
                x: -179.993,
                y: 685.722,
                sx: 1.335,
                sy: 1.335,
                a: .25
            },
            125: {
                x: -180.547,
                y: 685.558,
                sx: 1.333,
                sy: 1.333
            },
            126: {
                x: -181.048,
                y: 685.434,
                sx: 1.331,
                sy: 1.331
            },
            127: {
                x: -181.605,
                y: 685.281,
                sx: 1.329,
                sy: 1.329,
                a: .24
            },
            128: {
                x: -182.109,
                y: 685.067,
                sx: 1.326,
                sy: 1.326,
                a: .23
            },
            129: {
                x: -182.663,
                y: 684.953,
                sx: 1.324,
                sy: 1.324
            },
            130: {
                x: -183.167,
                y: 684.789,
                sx: 1.322,
                sy: 1.322
            },
            131: {
                x: -183.671,
                y: 684.675,
                sx: 1.319,
                sy: 1.319,
                a: .22
            },
            132: {
                x: -184.225,
                y: 684.511,
                sx: 1.317,
                sy: 1.317
            },
            133: {
                x: -184.782,
                y: 684.358,
                sx: 1.315,
                sy: 1.315,
                a: .21
            },
            134: {
                x: -185.333,
                y: 684.234,
                sx: 1.312,
                sy: 1.312
            },
            135: {
                x: -185.837,
                y: 684.07,
                sx: 1.31,
                sy: 1.31,
                a: .2
            },
            136: {
                x: -186.344,
                y: 683.916,
                sx: 1.308,
                sy: 1.308
            },
            137: {
                x: -186.898,
                y: 683.803,
                sx: 1.306,
                sy: 1.306
            },
            138: {
                x: -187.399,
                y: 683.628,
                sx: 1.303,
                sy: 1.303,
                a: .19
            },
            139: {
                x: -187.906,
                y: 683.525,
                sx: 1.301,
                sy: 1.301,
                a: .18
            },
            140: {
                x: -188.51,
                y: 683.361,
                sx: 1.299,
                sy: 1.299
            },
            141: {
                x: -189.014,
                y: 683.147,
                sx: 1.296,
                sy: 1.296
            },
            142: {
                x: -189.568,
                y: 683.033,
                sx: 1.294,
                sy: 1.294,
                a: .17
            },
            143: {
                x: -190.072,
                y: 682.87,
                sx: 1.292,
                sy: 1.292
            },
            144: {
                x: -190.579,
                y: 682.716,
                sx: 1.289,
                sy: 1.289,
                a: .16
            },
            145: {
                x: -191.133,
                y: 682.602,
                sx: 1.287,
                sy: 1.287
            },
            146: {
                x: -191.634,
                y: 682.428,
                sx: 1.285,
                sy: 1.285,
                a: .15
            },
            147: {
                x: -192.241,
                y: 682.325,
                sx: 1.283,
                sy: 1.283
            },
            148: {
                x: -192.745,
                y: 682.161,
                sx: 1.28,
                sy: 1.28,
                a: .14
            },
            149: {
                x: -193.249,
                y: 681.997,
                sx: 1.278,
                sy: 1.278
            },
            150: {
                x: -193.803,
                y: 681.883,
                sx: 1.276,
                sy: 1.276,
                a: .13
            },
            151: {
                x: -194.307,
                y: 681.719,
                sx: 1.273,
                sy: 1.273
            },
            152: {
                x: -194.811,
                y: 681.605,
                sx: 1.271,
                sy: 1.271
            },
            153: {
                x: -195.365,
                y: 681.392,
                sx: 1.269,
                sy: 1.269,
                a: .12
            },
            154: {
                x: -195.919,
                y: 681.228,
                sx: 1.266,
                sy: 1.266
            },
            155: {
                x: -196.476,
                y: 681.124,
                sx: 1.264,
                sy: 1.264,
                a: .11
            },
            156: {
                x: -196.98,
                y: 680.961,
                sx: 1.262,
                sy: 1.262
            },
            157: {
                x: -197.484,
                y: 680.847,
                sx: 1.26,
                sy: 1.26,
                a: .1
            },
            158: {
                x: -198.038,
                y: 680.683,
                sx: 1.257,
                sy: 1.257
            },
            159: {
                x: -198.542,
                y: 680.519,
                sx: 1.255,
                sy: 1.255,
                a: .09
            },
            160: {
                x: -199.046,
                y: 680.405,
                sx: 1.253,
                sy: 1.253
            },
            161: {
                x: -199.65,
                y: 680.241,
                sx: 1.25,
                sy: 1.25,
                a: .08
            },
            162: {
                x: -200.154,
                y: 680.077,
                sx: 1.248,
                sy: 1.248
            },
            163: {
                x: -200.708,
                y: 679.964,
                sx: 1.246,
                sy: 1.246,
                a: .07
            },
            164: {
                x: -201.214,
                y: 679.81,
                sx: 1.243,
                sy: 1.243
            },
            165: {
                x: -201.718,
                y: 679.696,
                sx: 1.241,
                sy: 1.241
            },
            166: {
                x: -202.27,
                y: 679.522,
                sx: 1.239,
                sy: 1.239,
                a: .06
            },
            167: {
                x: -202.776,
                y: 679.319,
                sx: 1.237,
                sy: 1.237,
                a: .05
            },
            168: {
                x: -203.33,
                y: 679.205,
                sx: 1.234,
                sy: 1.234
            },
            169: {
                x: -203.885,
                y: 679.041,
                sx: 1.232,
                sy: 1.232
            },
            170: {
                x: -204.389,
                y: 678.927,
                sx: 1.23,
                sy: 1.23,
                a: .04
            },
            171: {
                x: -204.943,
                y: 678.763,
                sx: 1.227,
                sy: 1.227
            },
            172: {
                x: -205.449,
                y: 678.61,
                sx: 1.225,
                sy: 1.225,
                a: .03
            },
            173: {
                x: -205.951,
                y: 678.486,
                sx: 1.223,
                sy: 1.223
            },
            174: {
                x: -206.505,
                y: 678.322,
                sx: 1.22,
                sy: 1.22,
                a: .02
            },
            175: {
                x: -207.011,
                y: 678.169,
                sx: 1.218,
                sy: 1.218
            },
            176: {
                x: -207.615,
                y: 678.055,
                sx: 1.216,
                sy: 1.216
            },
            177: {
                x: -208.119,
                y: 677.891,
                sx: 1.214,
                sy: 1.214,
                a: .01
            },
            178: {
                x: -208.623,
                y: 677.727,
                sx: 1.211,
                sy: 1.211,
                a: 0
            },
            179: {
                x: -209.15,
                y: 677.6,
                sx: 1.209,
                sy: 1.209
            }
        }).addAction(function() {
            if (!this._destroyed) {
                this.stop();
                var timeout = 4 + utils.getRandomFloat(2, 4);
                utils.delay(timeout).then(() => {
                    this._destroyed || this.gotoAndPlay(0)
                })
            }
        }, 179), this.labels.forEach((label, index) => {
            var labelEndPosition = this.labels[index + 1] ? this.labels[index + 1].position - 1 : this._totalFrames - 1;
            this.addAction(() => this.emit("label_end", this.currentLabel), labelEndPosition)
        })
    }), lib.fish3Idle = MovieClip.extend(function() {
        MovieClip.call(this, {
            duration: 350
        });
        var instance1 = new lib.fish2;
        this.addTimedChild(instance1, 0, 350, {
            0: {
                x: -97,
                y: 500,
                sx: .5,
                sy: .5,
                a: 0
            },
            1: {
                x: -92.595,
                y: 499.932,
                sx: .501,
                sy: .501,
                a: .01
            },
            2: {
                x: -88.137,
                y: 499.865
            },
            3: {
                x: -83.732,
                y: 499.813,
                sx: .502,
                sy: .502,
                a: .02
            },
            4: {
                x: -79.277,
                y: 499.745,
                sx: .503,
                sy: .503,
                a: .03
            },
            5: {
                x: -74.869,
                y: 499.677,
                sx: .504,
                sy: .504,
                a: .04
            },
            6: {
                x: -70.364,
                y: 499.56
            },
            7: {
                x: -65.959,
                y: 499.492,
                sx: .505,
                sy: .505,
                a: .05
            },
            8: {
                x: -61.502,
                y: 499.44,
                sx: .506,
                sy: .506
            },
            9: {
                x: -57.097,
                y: 499.372,
                sx: .507,
                sy: .507,
                a: .06
            },
            10: {
                x: -52.692,
                y: 499.305,
                a: .07
            },
            11: {
                x: -48.234,
                y: 499.187,
                sx: .508,
                sy: .508
            },
            12: {
                x: -43.779,
                y: 499.135,
                sx: .509,
                sy: .509,
                a: .08
            },
            13: {
                x: -39.324,
                y: 499.067,
                sx: .51,
                sy: .51,
                a: .09
            },
            14: {
                x: -34.916,
                y: 499
            },
            15: {
                x: -30.461,
                y: 498.932,
                sx: .511,
                sy: .511,
                a: .1
            },
            16: {
                x: -26.056,
                y: 498.815,
                sx: .512,
                sy: .512,
                a: .11
            },
            17: {
                x: -21.548,
                y: 498.762,
                sx: .513,
                sy: .513
            },
            18: {
                x: -17.143,
                y: 498.695,
                a: .12
            },
            19: {
                x: -12.688,
                y: 498.627,
                sx: .514,
                sy: .514,
                a: .13
            },
            20: {
                x: -8.28,
                y: 498.559,
                sx: .515,
                sy: .515,
                a: .14
            },
            21: {
                x: -3.875,
                y: 498.457,
                sx: .516
            },
            22: {
                x: .58,
                y: 498.39,
                sy: .516,
                a: .15
            },
            23: {
                x: 5.038,
                y: 498.322,
                sx: .517,
                sy: .517,
                a: .16
            },
            24: {
                x: 9.492,
                y: 498.254,
                sx: .518,
                sy: .518
            },
            25: {
                x: 13.897,
                y: 498.187,
                sx: .519,
                a: .17
            },
            26: {
                x: 18.355,
                y: 498.085,
                sy: .519,
                a: .18
            },
            27: {
                x: 22.76,
                y: 498.017,
                sx: .52,
                sy: .52
            },
            28: {
                x: 27.215,
                y: 497.949,
                sx: .521,
                sy: .521,
                a: .19
            },
            29: {
                x: 31.673,
                y: 497.882,
                sx: .522,
                a: .2
            },
            30: {
                x: 36.078,
                y: 497.779,
                sy: .522
            },
            31: {
                x: 40.533,
                y: 497.712,
                sx: .523,
                sy: .523,
                a: .21
            },
            32: {
                x: 44.941,
                y: 497.694,
                sx: .524,
                sy: .524
            },
            33: {
                x: 49.396,
                y: 497.627,
                a: .22
            },
            34: {
                x: 53.851,
                y: 497.559,
                sx: .525,
                sy: .525,
                a: .23
            },
            35: {
                x: 58.309,
                y: 497.457,
                sx: .526,
                sy: .526,
                a: .24
            },
            36: {
                x: 62.714,
                y: 497.389,
                sx: .527
            },
            37: {
                x: 67.119,
                y: 497.322,
                sy: .527,
                a: .25
            },
            38: {
                x: 71.577,
                y: 497.254,
                sx: .528,
                sy: .528,
                a: .26
            },
            39: {
                x: 76.032,
                y: 497.187,
                sx: .529,
                sy: .529
            },
            40: {
                x: 80.489,
                y: 497.084,
                sx: .53,
                a: .27
            },
            41: {
                x: 84.894,
                y: 497.017,
                sy: .53,
                a: .28
            },
            42: {
                x: 89.349,
                y: 496.949,
                sx: .531,
                sy: .531,
                a: .29
            },
            43: {
                x: 93.757,
                y: 496.881,
                sx: .532,
                sy: .532
            },
            44: {
                x: 98.212,
                y: 496.814,
                sx: .533,
                a: .3
            },
            45: {
                x: 102.667,
                y: 496.712,
                sy: .533
            },
            46: {
                x: 107.125,
                y: 496.644,
                sx: .534,
                sy: .534,
                a: .31
            },
            47: {
                x: 111.53,
                y: 496.576,
                sx: .535,
                sy: .535,
                a: .32
            },
            48: {
                x: 115.935,
                y: 496.509,
                sx: .536
            },
            49: {
                x: 120.393,
                y: 496.457,
                sy: .536,
                a: .33
            },
            50: {
                x: 124.848,
                y: 496.339,
                sx: .537,
                sy: .537,
                a: .34
            },
            51: {
                x: 129.303,
                y: 496.271,
                sx: .538,
                sy: .538
            },
            52: {
                x: 133.711,
                y: 496.204,
                sx: .539,
                a: .35
            },
            53: {
                x: 138.166,
                y: 496.136,
                sy: .539,
                a: .36
            },
            54: {
                x: 142.571,
                y: 496.084,
                sx: .54,
                sy: .54
            },
            55: {
                x: 147.028,
                y: 495.966,
                sx: .541,
                a: .37
            },
            56: {
                x: 151.483,
                y: 495.899,
                sx: .542,
                sy: .541,
                a: .38
            },
            57: {
                x: 155.888,
                y: 495.831,
                sy: .542,
                a: .39
            },
            58: {
                x: 160.346,
                y: 495.779,
                sx: .543,
                sy: .543
            },
            59: {
                x: 164.751,
                y: 495.711,
                sx: .544,
                a: .4
            },
            60: {
                x: 169.206,
                y: 495.594,
                sx: .545,
                sy: .544,
                a: .41
            },
            61: {
                x: 173.664,
                y: 495.526,
                sy: .545
            },
            62: {
                x: 178.119,
                y: 495.459,
                sx: .546,
                sy: .546,
                a: .42
            },
            63: {
                x: 182.524,
                y: 495.406,
                sx: .547,
                a: .43
            },
            64: {
                x: 186.982,
                y: 495.339,
                sy: .547
            },
            65: {
                x: 191.387,
                y: 495.221,
                sx: .548,
                sy: .548,
                a: .44
            },
            66: {
                x: 195.842,
                y: 495.153,
                sx: .549,
                sy: .549,
                a: .45
            },
            67: {
                x: 200.3,
                y: 495.101,
                sx: .55
            },
            68: {
                x: 204.705,
                y: 495.034,
                sy: .55,
                a: .46
            },
            69: {
                x: 209.16,
                y: 494.966,
                sx: .551,
                sy: .551
            },
            70: {
                x: 213.568,
                y: 494.898,
                sx: .552,
                a: .47
            },
            71: {
                x: 218.022,
                y: 494.781,
                sx: .553,
                sy: .552,
                a: .48
            },
            72: {
                x: 222.477,
                y: 494.729,
                sy: .553,
                a: .49
            },
            73: {
                x: 226.935,
                y: 494.661,
                sx: .554,
                sy: .554
            },
            74: {
                x: 231.15,
                y: 494.5,
                sx: .555,
                a: .5
            },
            75: {
                x: 235.846,
                y: 494.584,
                sx: .554
            },
            76: {
                x: 240.495,
                y: 494.676,
                sx: .553,
                sy: .553
            },
            77: {
                x: 245.14,
                y: 494.717,
                sx: .551
            },
            78: {
                x: 249.84,
                y: 494.809,
                sx: .55,
                sy: .552
            },
            79: {
                x: 254.485,
                y: 494.858,
                sx: .549,
                sy: .551
            },
            80: {
                x: 259.184,
                y: 494.9,
                sx: .548,
                a: .49
            },
            81: {
                x: 263.784,
                y: 494.991,
                sx: .546,
                sy: .55
            },
            82: {
                x: 268.429,
                y: 495.033,
                sx: .545,
                sy: .549
            },
            83: {
                x: 273.128,
                y: 495.125,
                sx: .544
            },
            84: {
                x: 277.777,
                y: 495.166,
                sx: .543,
                sy: .548
            },
            85: {
                x: 282.473,
                y: 495.208,
                sx: .542
            },
            86: {
                x: 287.122,
                y: 495.3,
                sx: .54,
                sy: .547,
                a: .48
            },
            87: {
                x: 291.771,
                y: 495.341,
                sx: .539,
                sy: .546
            },
            88: {
                x: 296.417,
                y: 495.433,
                sx: .538
            },
            89: {
                x: 301.066,
                y: 495.475,
                sx: .537,
                sy: .545
            },
            90: {
                x: 305.765,
                y: 495.566,
                sx: .536,
                sy: .544
            },
            91: {
                x: 310.411,
                y: 495.608,
                sx: .534
            },
            92: {
                x: 315.06,
                y: 495.649,
                sx: .533,
                sy: .543
            },
            93: {
                x: 319.706,
                y: 495.741,
                sx: .532
            },
            94: {
                x: 324.405,
                y: 495.783,
                sx: .531,
                sy: .542
            },
            95: {
                x: 329.054,
                y: 495.874,
                sx: .53,
                sy: .541
            },
            96: {
                x: 333.7,
                y: 495.916,
                sx: .528,
                a: .47
            },
            97: {
                x: 338.349,
                y: 496.008,
                sx: .527,
                sy: .54
            },
            98: {
                x: 342.998,
                y: 496.057,
                sx: .526,
                sy: .539
            },
            99: {
                x: 347.694,
                y: 496.098,
                sx: .525
            },
            100: {
                x: 352.343,
                y: 496.19,
                sx: .524,
                sy: .538
            },
            101: {
                x: 356.992,
                y: 496.232,
                sx: .522
            },
            102: {
                x: 361.638,
                y: 496.323,
                sx: .521,
                sy: .537
            },
            103: {
                x: 366.287,
                y: 496.365,
                sx: .52,
                sy: .536,
                a: .46
            },
            104: {
                x: 370.982,
                y: 496.457,
                sx: .519
            },
            105: {
                x: 375.632,
                y: 496.498,
                sx: .518,
                sy: .535
            },
            106: {
                x: 380.331,
                y: 496.54,
                sx: .516,
                sy: .534
            },
            107: {
                x: 384.926,
                y: 496.632,
                sx: .515
            },
            108: {
                x: 389.625,
                y: 496.673,
                sx: .514,
                sy: .533
            },
            109: {
                x: 394.275,
                y: 496.765,
                sx: .513
            },
            110: {
                x: 398.92,
                y: 496.806,
                sx: .512,
                sy: .532
            },
            111: {
                x: 403.619,
                y: 496.848,
                sx: .51,
                sy: .531
            },
            112: {
                x: 408.269,
                y: 496.94,
                sx: .509
            },
            113: {
                x: 412.914,
                y: 496.981,
                sx: .508,
                sy: .53,
                a: .45
            },
            114: {
                x: 417.563,
                y: 497.073,
                sx: .507,
                sy: .529
            },
            115: {
                x: 422.212,
                y: 497.115,
                sx: .506
            },
            116: {
                x: 426.908,
                y: 497.206,
                sx: .504,
                sy: .528
            },
            117: {
                x: 431.557,
                y: 497.255,
                sx: .503
            },
            118: {
                x: 436.203,
                y: 497.332,
                sx: .502,
                sy: .527
            },
            119: {
                x: 440.852,
                y: 497.324,
                sx: .501,
                sy: .526
            },
            120: {
                x: 445.551,
                y: 497.415,
                sx: .499
            },
            121: {
                x: 450.197,
                y: 497.457,
                sx: .498,
                sy: .525
            },
            122: {
                x: 454.846,
                y: 497.498,
                sx: .497,
                sy: .524
            },
            123: {
                x: 459.495,
                y: 497.59,
                sx: .496,
                a: .44
            },
            124: {
                x: 464.141,
                y: 497.632,
                sx: .495,
                sy: .523
            },
            125: {
                x: 468.84,
                y: 497.723,
                sx: .493
            },
            126: {
                x: 473.489,
                y: 497.765,
                sx: .492,
                sy: .522
            },
            127: {
                x: 478.135,
                y: 497.857,
                sx: .491,
                sy: .521
            },
            128: {
                x: 482.784,
                y: 497.898,
                sx: .49
            },
            129: {
                x: 487.43,
                y: 497.94,
                sx: .489,
                sy: .52
            },
            130: {
                x: 492.129,
                y: 498.032,
                sx: .487,
                sy: .519,
                a: .43
            },
            131: {
                x: 496.778,
                y: 498.073,
                sx: .486
            },
            132: {
                x: 501.473,
                y: 498.165,
                sx: .485,
                sy: .518
            },
            133: {
                x: 506.123,
                y: 498.214,
                sx: .484
            },
            134: {
                x: 510.772,
                y: 498.306,
                sx: .483,
                sy: .517
            },
            135: {
                x: 515.417,
                y: 498.347,
                sx: .481,
                sy: .516
            },
            136: {
                x: 520.067,
                y: 498.389,
                sx: .48
            },
            137: {
                x: 524.766,
                y: 498.481,
                sx: .479,
                sy: .515
            },
            138: {
                x: 529.411,
                y: 498.522,
                sx: .478,
                sy: .514
            },
            139: {
                x: 534.06,
                y: 498.614,
                sx: .477
            },
            140: {
                x: 538.71,
                y: 498.655,
                sx: .475,
                sy: .513,
                a: .42
            },
            141: {
                x: 543.355,
                y: 498.747,
                sx: .474
            },
            142: {
                x: 548.054,
                y: 498.789,
                sx: .473,
                sy: .512
            },
            143: {
                x: 552.7,
                y: 498.83,
                sx: .472,
                sy: .511
            },
            144: {
                x: 557.349,
                y: 498.922,
                sx: .471
            },
            145: {
                x: 561.998,
                y: 498.964,
                sx: .469,
                sy: .51
            },
            146: {
                x: 566.694,
                y: 499.055,
                sx: .468,
                sy: .509,
                a: .41
            },
            147: {
                x: 571.343,
                y: 499.097,
                sx: .467
            },
            148: {
                x: 575.992,
                y: 499.139,
                sx: .466,
                sy: .508
            },
            149: {
                x: 580.638,
                y: 499.23,
                sx: .465,
                sy: .507
            },
            150: {
                x: 585.287,
                y: 499.272,
                sx: .463
            },
            151: {
                x: 589.986,
                y: 499.363,
                sx: .462,
                sy: .506
            },
            152: {
                x: 594.632,
                y: 499.413,
                sx: .461
            },
            153: {
                x: 599.331,
                y: 499.504,
                sx: .46,
                sy: .505
            },
            154: {
                x: 603.98,
                y: 499.546,
                sx: .458,
                sy: .504
            },
            155: {
                x: 608.576,
                y: 499.588,
                sx: .457
            },
            156: {
                x: 613.275,
                y: 499.679,
                sx: .456,
                sy: .503,
                a: .4
            },
            157: {
                x: 617.921,
                y: 499.721,
                sx: .455,
                sy: .502
            },
            158: {
                x: 622.62,
                y: 499.812,
                sx: .454
            },
            159: {
                x: 627.269,
                y: 499.854,
                sx: .452,
                sy: .501
            },
            160: {
                x: 631.915,
                y: 499.946,
                sx: .451
            },
            161: {
                x: 636.6,
                y: 500,
                sx: .45,
                sy: .5
            },
            162: {
                x: 640.805,
                y: 499.928,
                sx: .453,
                sy: .501
            },
            163: {
                x: 645.09,
                y: 499.856,
                sx: .455,
                sy: .502
            },
            164: {
                x: 649.295,
                y: 499.785,
                sx: .458
            },
            165: {
                x: 653.56,
                y: 499.713,
                sx: .46,
                sy: .503
            },
            166: {
                x: 657.744,
                y: 499.641,
                sx: .463,
                sy: .504,
                a: .41
            },
            167: {
                x: 661.999,
                y: 499.569,
                sx: .465,
                sy: .505
            },
            168: {
                x: 666.234,
                y: 499.497,
                sx: .468
            },
            169: {
                x: 670.449,
                y: 499.376,
                sx: .47,
                sy: .506
            },
            170: {
                x: 674.704,
                y: 499.339,
                sx: .473,
                sy: .507
            },
            171: {
                x: 678.938,
                y: 499.217,
                sx: .475,
                sy: .508
            },
            172: {
                x: 683.203,
                y: 499.145,
                sx: .478,
                sy: .509
            },
            173: {
                x: 687.388,
                y: 499.073,
                sx: .48
            },
            174: {
                x: 691.593,
                y: 499.001,
                sx: .483,
                sy: .51
            },
            175: {
                x: 695.858,
                y: 498.93,
                sx: .485,
                sy: .511
            },
            176: {
                x: 700.092,
                y: 498.858,
                sx: .488,
                sy: .512,
                a: .42
            },
            177: {
                x: 704.347,
                y: 498.786,
                sx: .49
            },
            178: {
                x: 708.562,
                y: 498.714,
                sx: .493,
                sy: .513
            },
            179: {
                x: 712.797,
                y: 498.592,
                sx: .495,
                sy: .514
            },
            180: {
                x: 717.002,
                y: 498.521,
                sx: .498,
                sy: .515
            },
            181: {
                x: 721.236,
                y: 498.449,
                sx: .501,
                sy: .516
            },
            182: {
                x: 725.501,
                y: 498.377,
                sx: .503,
                a: .43
            },
            183: {
                x: 729.716,
                y: 498.305,
                sx: .506,
                sy: .517
            },
            184: {
                x: 733.941,
                y: 498.233,
                sx: .508,
                sy: .518
            },
            185: {
                x: 738.156,
                y: 498.161,
                sx: .511,
                sy: .519
            },
            186: {
                x: 742.39,
                y: 498.074,
                sx: .513
            },
            187: {
                x: 746.645,
                y: 498.003,
                sx: .516,
                sy: .52
            },
            188: {
                x: 750.86,
                y: 497.931,
                sx: .518,
                sy: .521
            },
            189: {
                x: 755.095,
                y: 497.809,
                sx: .521,
                sy: .522
            },
            190: {
                x: 759.3,
                y: 497.737,
                sx: .523,
                sy: .523
            },
            191: {
                x: 763.584,
                y: 497.665,
                sx: .526,
                a: .44
            },
            192: {
                x: 767.799,
                y: 497.594,
                sx: .528,
                sy: .524
            },
            193: {
                x: 772.014,
                y: 497.522,
                sx: .531,
                sy: .525
            },
            194: {
                x: 776.239,
                y: 497.45,
                sx: .533,
                sy: .526
            },
            195: {
                x: 780.454,
                y: 497.378,
                sx: .536
            },
            196: {
                x: 784.719,
                y: 497.256,
                sx: .538,
                sy: .527
            },
            197: {
                x: 788.943,
                y: 497.185,
                sx: .541,
                sy: .528,
                a: .45
            },
            198: {
                x: 793.158,
                y: 497.113,
                sx: .543,
                sy: .529
            },
            199: {
                x: 797.423,
                y: 497.041,
                sx: .546,
                sy: .53
            },
            200: {
                x: 801.608,
                y: 496.969,
                sx: .548
            },
            201: {
                x: 805.863,
                y: 496.897,
                sx: .551,
                sy: .531
            },
            202: {
                x: 810.097,
                y: 496.81,
                sx: .554,
                sy: .532
            },
            203: {
                x: 814.362,
                y: 496.739,
                sx: .556,
                sy: .533
            },
            204: {
                x: 818.537,
                y: 496.667,
                sx: .559
            },
            205: {
                x: 822.802,
                y: 496.595,
                sx: .561,
                sy: .534
            },
            206: {
                x: 827.017,
                y: 496.473,
                sx: .564,
                sy: .535
            },
            207: {
                x: 831.251,
                y: 496.401,
                sx: .566,
                sy: .536,
                a: .46
            },
            208: {
                x: 835.506,
                y: 496.33,
                sx: .569,
                sy: .537
            },
            209: {
                x: 839.721,
                y: 496.258,
                sx: .571
            },
            210: {
                x: 844.006,
                y: 496.186,
                sx: .574,
                sy: .538
            },
            211: {
                x: 848.211,
                y: 496.114,
                sx: .576,
                sy: .539
            },
            212: {
                x: 852.426,
                y: 496.042,
                sx: .579,
                sy: .54
            },
            213: {
                x: 856.66,
                y: 495.921,
                sx: .581
            },
            214: {
                x: 860.865,
                y: 495.849,
                sx: .584,
                sy: .541
            },
            215: {
                x: 865.15,
                y: 495.777,
                sx: .586,
                sy: .542
            },
            216: {
                x: 869.365,
                y: 495.705,
                sx: .589,
                sy: .543,
                a: .47
            },
            217: {
                x: 873.62,
                y: 495.633,
                sx: .591,
                sy: .544
            },
            218: {
                x: 877.804,
                y: 495.546,
                sx: .594
            },
            219: {
                x: 882.019,
                y: 495.474,
                sx: .596,
                sy: .545
            },
            220: {
                x: 886.304,
                y: 495.403,
                sx: .599,
                sy: .546
            },
            221: {
                x: 890.509,
                y: 495.331,
                sx: .601,
                sy: .547
            },
            222: {
                x: 894.774,
                y: 495.259,
                sx: .604,
                a: .48
            },
            223: {
                x: 898.958,
                y: 495.137,
                sx: .607,
                sy: .548
            },
            224: {
                x: 903.163,
                y: 495.065,
                sx: .609,
                sy: .549
            },
            225: {
                x: 907.448,
                y: 494.994,
                sx: .612,
                sy: .55
            },
            226: {
                x: 911.663,
                y: 494.922,
                sx: .614,
                sy: .551
            },
            227: {
                x: 915.918,
                y: 494.85,
                sx: .617
            },
            228: {
                x: 920.102,
                y: 494.778,
                sx: .619,
                sy: .552
            },
            229: {
                x: 924.367,
                y: 494.706,
                sx: .622,
                sy: .553
            },
            230: {
                x: 928.582,
                y: 494.585,
                sx: .624,
                sy: .554
            },
            231: {
                x: 932.807,
                y: 494.513,
                sx: .627
            },
            232: {
                x: 937.072,
                y: 494.441,
                sx: .629,
                sy: .555,
                a: .49
            },
            233: {
                x: 941.256,
                y: 494.369,
                sx: .632,
                sy: .556
            },
            234: {
                x: 945.511,
                y: 494.282,
                sx: .634,
                sy: .557
            },
            235: {
                x: 949.726,
                y: 494.21,
                sx: .637,
                sy: .558
            },
            236: {
                x: 953.961,
                y: 494.139,
                sx: .639
            },
            237: {
                x: 958.226,
                y: 494.067,
                sx: .642,
                sy: .559
            },
            238: {
                x: 962.4,
                y: 493.995,
                sx: .644,
                sy: .56,
                a: .5
            },
            239: {
                x: 966.665,
                y: 493.923,
                sx: .647,
                sy: .561
            },
            240: {
                x: 970.88,
                y: 493.801,
                sx: .649
            },
            241: {
                x: 975.155,
                y: 493.73,
                sx: .652,
                sy: .562
            },
            242: {
                x: 979.3,
                y: 493.65,
                sx: .654,
                sy: .563
            },
            243: {
                x: 984.018,
                y: 493.723,
                sx: .653,
                sy: .562
            },
            244: {
                x: 988.717,
                y: 493.811,
                sx: .652,
                a: .49
            },
            245: {
                x: 993.4,
                y: 493.841,
                sx: .65,
                sy: .561,
                a: .48
            },
            246: {
                x: 998.098,
                y: 493.936,
                sx: .649
            },
            247: {
                x: 1002.781,
                y: 493.959,
                sx: .647,
                sy: .56
            },
            248: {
                x: 1007.465,
                y: 494.054,
                sx: .646,
                sy: .559,
                a: .47
            },
            249: {
                x: 1012.113,
                y: 494.077,
                sx: .644
            },
            250: {
                x: 1016.796,
                y: 494.172,
                sx: .643,
                sy: .558,
                a: .46
            },
            251: {
                x: 1021.509,
                y: 494.202,
                sx: .641
            },
            252: {
                x: 1026.193,
                y: 494.275,
                sx: .64,
                sy: .557,
                a: .45
            },
            253: {
                x: 1030.911,
                y: 494.32,
                sx: .639,
                sy: .556
            },
            254: {
                x: 1035.574,
                y: 494.401,
                sx: .637
            },
            255: {
                x: 1040.257,
                y: 494.439,
                sx: .636,
                sy: .555,
                a: .44
            },
            256: {
                x: 1044.926,
                y: 494.519,
                sx: .634,
                a: .43
            },
            257: {
                x: 1049.639,
                y: 494.557,
                sx: .633,
                sy: .554
            },
            258: {
                x: 1054.322,
                y: 494.637,
                sx: .631
            },
            259: {
                x: 1059.02,
                y: 494.667,
                sx: .63,
                sy: .553,
                a: .42
            },
            260: {
                x: 1063.704,
                y: 494.755,
                sx: .628,
                sy: .552,
                a: .41
            },
            261: {
                x: 1068.387,
                y: 494.785,
                sx: .627
            },
            262: {
                x: 1073.035,
                y: 494.88,
                sx: .626,
                sy: .551
            },
            263: {
                x: 1077.768,
                y: 494.903,
                sx: .624,
                a: .4
            },
            264: {
                x: 1082.452,
                y: 494.999,
                sx: .623,
                sy: .55
            },
            265: {
                x: 1087.15,
                y: 495.029,
                sx: .621,
                sy: .549,
                a: .39
            },
            266: {
                x: 1091.833,
                y: 495.117,
                sx: .62
            },
            267: {
                x: 1096.481,
                y: 495.147,
                sx: .618,
                sy: .548,
                a: .38
            },
            268: {
                x: 1101.165,
                y: 495.22,
                sx: .617
            },
            269: {
                x: 1105.848,
                y: 495.265,
                sx: .615,
                sy: .547
            },
            270: {
                x: 1110.546,
                y: 495.345,
                sx: .614,
                sy: .546,
                a: .37
            },
            271: {
                x: 1115.229,
                y: 495.383,
                sx: .613,
                a: .36
            },
            272: {
                x: 1119.963,
                y: 495.463,
                sx: .611,
                sy: .545
            },
            273: {
                x: 1124.611,
                y: 495.501,
                sx: .61
            },
            274: {
                x: 1129.344,
                y: 495.581,
                sx: .608,
                sy: .544,
                a: .35
            },
            275: {
                x: 1134.007,
                y: 495.661,
                sx: .607
            },
            276: {
                x: 1138.691,
                y: 495.699,
                sx: .605,
                sy: .543,
                a: .34
            },
            277: {
                x: 1143.359,
                y: 495.78,
                sx: .604,
                sy: .542
            },
            278: {
                x: 1148.072,
                y: 495.825,
                sx: .602,
                a: .33
            },
            279: {
                x: 1152.755,
                y: 495.898,
                sx: .601,
                sy: .541
            },
            280: {
                x: 1157.404,
                y: 495.943,
                sx: .6,
                a: .32
            },
            281: {
                x: 1162.087,
                y: 496.023,
                sx: .598,
                sy: .54
            },
            282: {
                x: 1166.82,
                y: 496.061,
                sx: .597,
                sy: .539,
                a: .31
            },
            283: {
                x: 1171.468,
                y: 496.141,
                sx: .595
            },
            284: {
                x: 1176.202,
                y: 496.164,
                sx: .594,
                sy: .538,
                a: .3
            },
            285: {
                x: 1180.885,
                y: 496.259,
                sx: .592
            },
            286: {
                x: 1185.533,
                y: 496.29,
                sx: .591,
                sy: .537,
                a: .29
            },
            287: {
                x: 1190.216,
                y: 496.327,
                sx: .589,
                sy: .536
            },
            288: {
                x: 1194.915,
                y: 496.408,
                sx: .588
            },
            289: {
                x: 1199.598,
                y: 496.445,
                sx: .587,
                sy: .535,
                a: .28
            },
            290: {
                x: 1204.281,
                y: 496.526,
                sx: .585
            },
            291: {
                x: 1208.979,
                y: 496.571,
                sx: .584,
                sy: .534,
                a: .27
            },
            292: {
                x: 1213.663,
                y: 496.644,
                sx: .582
            },
            293: {
                x: 1218.376,
                y: 496.724,
                sx: .581,
                sy: .533,
                a: .26
            },
            294: {
                x: 1223.044,
                y: 496.769,
                sx: .579,
                sy: .532
            },
            295: {
                x: 1227.727,
                y: 496.842,
                sx: .578,
                a: .25
            },
            296: {
                x: 1232.44,
                y: 496.887,
                sx: .577,
                sy: .531
            },
            297: {
                x: 1237.124,
                y: 496.968,
                sx: .575,
                a: .24
            },
            298: {
                x: 1241.792,
                y: 497.005,
                sx: .574,
                sy: .53
            },
            299: {
                x: 1246.455,
                y: 497.086,
                sx: .572,
                sy: .529,
                a: .23
            },
            300: {
                x: 1251.139,
                y: 497.108,
                sx: .571
            },
            301: {
                x: 1255.837,
                y: 497.204,
                sx: .569,
                sy: .528,
                a: .22
            },
            302: {
                x: 1260.52,
                y: 497.234,
                sx: .568
            },
            303: {
                x: 1265.253,
                y: 497.322,
                sx: .566,
                sy: .527,
                a: .21
            },
            304: {
                x: 1269.902,
                y: 497.352,
                sx: .565,
                sy: .526
            },
            305: {
                x: 1274.635,
                y: 497.44,
                sx: .563
            },
            306: {
                x: 1279.283,
                y: 497.47,
                sx: .562,
                sy: .525,
                a: .2
            },
            307: {
                x: 1283.966,
                y: 497.565,
                sx: .561
            },
            308: {
                x: 1288.65,
                y: 497.588,
                sx: .559,
                sy: .524,
                a: .19
            },
            309: {
                x: 1293.348,
                y: 497.668,
                sx: .558
            },
            310: {
                x: 1298.031,
                y: 497.714,
                sx: .556,
                sy: .523,
                a: .18
            },
            311: {
                x: 1302.714,
                y: 497.786,
                sx: .555,
                sy: .522
            },
            312: {
                x: 1307.363,
                y: 497.832,
                sx: .553,
                a: .17
            },
            313: {
                x: 1312.096,
                y: 497.912,
                sx: .552,
                sy: .521
            },
            314: {
                x: 1316.759,
                y: 497.95,
                sx: .551,
                a: .16
            },
            315: {
                x: 1321.477,
                y: 498.03,
                sx: .549,
                sy: .52
            },
            316: {
                x: 1326.161,
                y: 498.068,
                sx: .548,
                sy: .519,
                a: .15
            },
            317: {
                x: 1330.824,
                y: 498.148,
                sx: .546
            },
            318: {
                x: 1335.492,
                y: 498.178,
                sx: .545,
                sy: .518,
                a: .14
            },
            319: {
                x: 1340.205,
                y: 498.266,
                sx: .543
            },
            320: {
                x: 1344.889,
                y: 498.296,
                sx: .542,
                sy: .517
            },
            321: {
                x: 1349.572,
                y: 498.384,
                sx: .54,
                sy: .516,
                a: .13
            },
            322: {
                x: 1354.27,
                y: 498.414,
                sx: .539
            },
            323: {
                x: 1358.953,
                y: 498.51,
                sx: .538,
                sy: .515,
                a: .12
            },
            324: {
                x: 1363.687,
                y: 498.532,
                sx: .536
            },
            325: {
                x: 1368.335,
                y: 498.613,
                sx: .535,
                sy: .514,
                a: .11
            },
            326: {
                x: 1373.018,
                y: 498.658,
                sx: .533
            },
            327: {
                x: 1377.716,
                y: 498.731,
                sx: .532,
                sy: .513,
                a: .1
            },
            328: {
                x: 1382.4,
                y: 498.776,
                sx: .53,
                sy: .512
            },
            329: {
                x: 1387.083,
                y: 498.856,
                sx: .529,
                a: .09
            },
            330: {
                x: 1391.731,
                y: 498.894,
                sx: .527,
                sy: .511
            },
            331: {
                x: 1396.414,
                y: 498.974,
                sx: .526
            },
            332: {
                x: 1401.148,
                y: 499.012,
                sx: .525,
                sy: .51,
                a: .08
            },
            333: {
                x: 1405.796,
                y: 499.092,
                sx: .523,
                sy: .509,
                a: .07
            },
            334: {
                x: 1410.529,
                y: 499.173,
                sx: .522
            },
            335: {
                x: 1415.192,
                y: 499.21,
                sx: .52,
                sy: .508
            },
            336: {
                x: 1419.911,
                y: 499.241,
                sx: .519,
                a: .06
            },
            337: {
                x: 1424.544,
                y: 499.328,
                sx: .517,
                sy: .507,
                a: .05
            },
            338: {
                x: 1429.257,
                y: 499.359,
                sx: .516,
                sy: .506
            },
            339: {
                x: 1433.925,
                y: 499.454,
                sx: .514
            },
            340: {
                x: 1438.609,
                y: 499.477,
                sx: .513,
                sy: .505,
                a: .04
            },
            341: {
                x: 1443.322,
                y: 499.557,
                sx: .512
            },
            342: {
                x: 1447.99,
                y: 499.602,
                sx: .51,
                sy: .504,
                a: .03
            },
            343: {
                x: 1452.653,
                y: 499.675,
                sx: .509
            },
            344: {
                x: 1457.387,
                y: 499.72,
                sx: .507,
                sy: .503,
                a: .02
            },
            345: {
                x: 1462.07,
                y: 499.801,
                sx: .506,
                sy: .502
            },
            346: {
                x: 1466.768,
                y: 499.838,
                sx: .504
            },
            347: {
                x: 1471.451,
                y: 499.919,
                sx: .503,
                sy: .501,
                a: .01
            },
            348: {
                x: 1476.15,
                y: 499.957,
                sx: .501,
                a: 0
            },
            349: {
                x: 1480.85,
                y: 500,
                sx: .5,
                sy: .5
            }
        }).addAction(function() {
            if (!this._destroyed) {
                this.stop();
                var timeout = 4 + utils.getRandomFloat(1, 5);
                utils.delay(timeout).then(() => {
                    this._destroyed || this.gotoAndPlay(0)
                })
            }
        }, 349), this.labels.forEach((label, index) => {
            var labelEndPosition = this.labels[index + 1] ? this.labels[index + 1].position - 1 : this._totalFrames - 1;
            this.addAction(() => this.emit("label_end", this.currentLabel), labelEndPosition)
        })
    }), lib.fish4 = Container.extend(function() {
        Container.call(this);
        var instance9 = new Sprite(fromFrame("tile14FishBlue")).setTransform(-233.05, 162.25, .127, .127),
            instance8 = new Sprite(fromFrame("tile14FishBlue")).setTransform(-287.1, 161.25, .085, .085),
            instance7 = new Sprite(fromFrame("tile14FishBlue")).setTransform(-160.1, 158.25, .183, .183),
            instance6 = new Sprite(fromFrame("tile14FishBlue")).setTransform(-290.35, 193.75, .112, .112),
            instance5 = new Sprite(fromFrame("tile14FishBlue")).setTransform(-211.4, 208.4, .112, .112),
            instance4 = new Sprite(fromFrame("tile14FishBlue")).setTransform(-342.55, 168.75, .078, .078),
            instance3 = new Sprite(fromFrame("tile14FishBlue")).setTransform(-335.3, 196.05, .052, .052),
            instance2 = new Sprite(fromFrame("tile14FishBlue")).setTransform(-387, 180.45, .063, .063),
            instance1 = new Sprite(fromFrame("tile12FishBlue")).setTransform(-206, 120.75, .172, .172);
        this.addChild(instance9, instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1)
    }), lib.fish4Idle = MovieClip.extend(function() {
        MovieClip.call(this, {
            duration: 350
        });
        var instance1 = new lib.fish4;
        this.addTimedChild(instance1, 0, 350, {
            0: {
                x: 626.45,
                y: 50.5,
                sx: 1.866,
                sy: 1.866,
                a: 0
            },
            1: {
                x: 630.003,
                y: 50.365,
                sx: 1.868,
                sy: 1.868,
                a: .01
            },
            2: {
                x: 633.535,
                y: 50.232,
                sx: 1.871,
                sy: 1.871
            },
            3: {
                x: 637.057,
                y: 50.098,
                sx: 1.873,
                sy: 1.873,
                a: .02
            },
            4: {
                x: 640.579,
                y: 49.914,
                sx: 1.876,
                sy: 1.876,
                a: .03
            },
            5: {
                x: 644.11,
                y: 49.781,
                sx: 1.878,
                sy: 1.878
            },
            6: {
                x: 647.632,
                y: 49.648,
                sx: 1.881,
                sy: 1.881,
                a: .04
            },
            7: {
                x: 651.104,
                y: 49.514,
                sx: 1.883,
                sy: 1.883,
                a: .05
            },
            8: {
                x: 654.626,
                y: 49.38,
                sx: 1.886,
                sy: 1.886
            },
            9: {
                x: 658.149,
                y: 49.246,
                sx: 1.888,
                sy: 1.888,
                a: .06
            },
            10: {
                x: 661.671,
                y: 49.113,
                sx: 1.89,
                sy: 1.891,
                a: .07
            },
            11: {
                x: 665.202,
                y: 48.93,
                sx: 1.893,
                sy: 1.893
            },
            12: {
                x: 668.724,
                y: 48.796,
                sx: 1.895,
                sy: 1.895,
                a: .08
            },
            13: {
                x: 672.296,
                y: 48.662,
                sx: 1.898,
                sy: 1.898,
                a: .09
            },
            14: {
                x: 675.828,
                y: 48.529,
                sx: 1.9,
                sy: 1.9
            },
            15: {
                x: 679.35,
                y: 48.346,
                sx: 1.903,
                sy: 1.903,
                a: .1
            },
            16: {
                x: 682.872,
                y: 48.212,
                sx: 1.905,
                sy: 1.905,
                a: .11
            },
            17: {
                x: 686.344,
                y: 48.078,
                sx: 1.908,
                sy: 1.908
            },
            18: {
                x: 689.876,
                y: 47.894,
                sx: 1.91,
                sy: 1.91,
                a: .12
            },
            19: {
                x: 693.398,
                y: 47.761,
                sx: 1.913,
                sy: 1.913,
                a: .13
            },
            20: {
                x: 696.92,
                y: 47.628,
                sx: 1.915,
                sy: 1.915
            },
            21: {
                x: 700.442,
                y: 47.494,
                sx: 1.917,
                sy: 1.918,
                a: .14
            },
            22: {
                x: 703.974,
                y: 47.31,
                sx: 1.92,
                sy: 1.92
            },
            23: {
                x: 707.496,
                y: 47.176,
                sx: 1.922,
                sy: 1.922,
                a: .15
            },
            24: {
                x: 711.018,
                y: 47.093,
                sx: 1.925,
                sy: 1.925,
                a: .16
            },
            25: {
                x: 714.54,
                y: 46.91,
                sx: 1.927,
                sy: 1.927
            },
            26: {
                x: 718.012,
                y: 46.776,
                sx: 1.93,
                sy: 1.93,
                a: .17
            },
            27: {
                x: 721.543,
                y: 46.642,
                sx: 1.932,
                sy: 1.932,
                a: .18
            },
            28: {
                x: 725.066,
                y: 46.509,
                sx: 1.935,
                sy: 1.935
            },
            29: {
                x: 728.588,
                y: 46.326,
                sx: 1.937,
                sy: 1.937,
                a: .19
            },
            30: {
                x: 732.11,
                y: 46.192,
                sx: 1.94,
                sy: 1.94,
                a: .2
            },
            31: {
                x: 735.641,
                y: 46.058,
                sx: 1.942,
                sy: 1.942
            },
            32: {
                x: 739.163,
                y: 45.874,
                sx: 1.944,
                sy: 1.945,
                a: .21
            },
            33: {
                x: 742.685,
                y: 45.741,
                sx: 1.947,
                sy: 1.947,
                a: .22
            },
            34: {
                x: 746.217,
                y: 45.608,
                sx: 1.949,
                sy: 1.949
            },
            35: {
                x: 749.689,
                y: 45.474,
                sx: 1.952,
                sy: 1.952,
                a: .23
            },
            36: {
                x: 753.211,
                y: 45.29,
                sx: 1.954,
                sy: 1.954,
                a: .24
            },
            37: {
                x: 756.783,
                y: 45.157,
                sx: 1.957,
                sy: 1.957
            },
            38: {
                x: 760.265,
                y: 45.024,
                sx: 1.959,
                sy: 1.959,
                a: .25
            },
            39: {
                x: 763.827,
                y: 44.89,
                sx: 1.962,
                sy: 1.962,
                a: .26
            },
            40: {
                x: 767.359,
                y: 44.756,
                sx: 1.964,
                sy: 1.964
            },
            41: {
                x: 770.881,
                y: 44.622,
                sx: 1.967,
                sy: 1.967,
                a: .27
            },
            42: {
                x: 774.403,
                y: 44.489,
                sx: 1.969,
                sy: 1.969,
                a: .28
            },
            43: {
                x: 777.935,
                y: 44.306,
                sx: 1.972,
                sy: 1.972
            },
            44: {
                x: 781.407,
                y: 44.172,
                sx: 1.974,
                sy: 1.974,
                a: .29
            },
            45: {
                x: 784.929,
                y: 44.038,
                sx: 1.976,
                sy: 1.976,
                a: .3
            },
            46: {
                x: 788.451,
                y: 43.855,
                sx: 1.979,
                sy: 1.979
            },
            47: {
                x: 791.983,
                y: 43.721,
                sx: 1.981,
                sy: 1.981,
                a: .31
            },
            48: {
                x: 795.505,
                y: 43.588,
                sx: 1.984,
                sy: 1.984,
                a: .32
            },
            49: {
                x: 799.027,
                y: 43.454,
                sx: 1.986,
                sy: 1.986
            },
            50: {
                x: 802.558,
                y: 43.27,
                sx: 1.989,
                sy: 1.989,
                a: .33
            },
            51: {
                x: 806.08,
                y: 43.137,
                sx: 1.991,
                sy: 1.991,
                a: .34
            },
            52: {
                x: 809.602,
                y: 43.004,
                sx: 1.994,
                sy: 1.994
            },
            53: {
                x: 813.075,
                y: 42.82,
                sx: 1.996,
                sy: 1.996,
                a: .35
            },
            54: {
                x: 816.597,
                y: 42.736,
                sx: 1.999,
                sy: 1.999,
                a: .36
            },
            55: {
                x: 820.119,
                y: 42.602,
                sx: 2.001,
                sy: 2.001
            },
            56: {
                x: 823.65,
                y: 42.469,
                sx: 2.003,
                sy: 2.003,
                a: .37
            },
            57: {
                x: 827.172,
                y: 42.286,
                sx: 2.006,
                sy: 2.006,
                a: .38
            },
            58: {
                x: 830.694,
                y: 42.152,
                sx: 2.008,
                sy: 2.008
            },
            59: {
                x: 834.226,
                y: 42.018,
                sx: 2.011,
                sy: 2.011,
                a: .39
            },
            60: {
                x: 837.748,
                y: 41.835,
                sx: 2.013,
                sy: 2.013
            },
            61: {
                x: 841.27,
                y: 41.702,
                sx: 2.016,
                sy: 2.016,
                a: .4
            },
            62: {
                x: 844.742,
                y: 41.568,
                sx: 2.018,
                sy: 2.018,
                a: .41
            },
            63: {
                x: 848.324,
                y: 41.434,
                sx: 2.021,
                sy: 2.021
            },
            64: {
                x: 851.846,
                y: 41.25,
                sx: 2.023,
                sy: 2.023,
                a: .42
            },
            65: {
                x: 855.368,
                y: 41.117,
                sx: 2.026,
                sy: 2.026,
                a: .43
            },
            66: {
                x: 858.89,
                y: 40.983,
                sx: 2.028,
                sy: 2.028
            },
            67: {
                x: 862.422,
                y: 40.8,
                sx: 2.03,
                sy: 2.03,
                a: .44
            },
            68: {
                x: 865.944,
                y: 40.666,
                sx: 2.033,
                sy: 2.033,
                a: .45
            },
            69: {
                x: 869.466,
                y: 40.583,
                sx: 2.035,
                sy: 2.035
            },
            70: {
                x: 872.988,
                y: 40.45,
                sx: 2.038,
                sy: 2.038,
                a: .46
            },
            71: {
                x: 876.51,
                y: 40.266,
                sx: 2.04,
                sy: 2.04,
                a: .47
            },
            72: {
                x: 879.991,
                y: 40.132,
                sx: 2.043,
                sy: 2.043
            },
            73: {
                x: 883.514,
                y: 39.998,
                sx: 2.045,
                sy: 2.045,
                a: .48
            },
            74: {
                x: 887.036,
                y: 39.815,
                sx: 2.048,
                sy: 2.048,
                a: .49
            },
            75: {
                x: 890.558,
                y: 39.681,
                sx: 2.05,
                sy: 2.05
            },
            76: {
                x: 894.15,
                y: 39.3,
                sx: 2.053,
                sy: 2.053,
                a: .5
            },
            77: {
                x: 898.054,
                y: 39.413,
                sx: 2.051,
                sy: 2.051
            },
            78: {
                x: 901.922,
                y: 39.526,
                sx: 2.049,
                sy: 2.049
            },
            79: {
                x: 905.803,
                y: 39.64,
                sx: 2.047,
                sy: 2.047
            },
            80: {
                x: 909.671,
                y: 39.754,
                sx: 2.045,
                sy: 2.045
            },
            81: {
                x: 913.539,
                y: 39.867,
                sx: 2.043,
                sy: 2.043
            },
            82: {
                x: 917.406,
                y: 39.981,
                sx: 2.041,
                sy: 2.041,
                a: .49
            },
            83: {
                x: 921.274,
                y: 40.094,
                sx: 2.039,
                sy: 2.039
            },
            84: {
                x: 925.156,
                y: 40.258,
                sx: 2.037,
                sy: 2.037
            },
            85: {
                x: 929.023,
                y: 40.321,
                sx: 2.035,
                sy: 2.035
            },
            86: {
                x: 932.891,
                y: 40.435,
                sx: 2.034,
                sy: 2.034
            },
            87: {
                x: 936.759,
                y: 40.548,
                sx: 2.032,
                sy: 2.032
            },
            88: {
                x: 940.627,
                y: 40.662,
                sx: 2.03,
                sy: 2.03
            },
            89: {
                x: 944.494,
                y: 40.825,
                sx: 2.028,
                sy: 2.028
            },
            90: {
                x: 948.376,
                y: 40.889,
                sx: 2.026,
                sy: 2.026,
                a: .48
            },
            91: {
                x: 952.243,
                y: 41.052,
                sx: 2.024,
                sy: 2.024
            },
            92: {
                x: 956.111,
                y: 41.116,
                sx: 2.022,
                sy: 2.022
            },
            93: {
                x: 959.979,
                y: 41.229,
                sx: 2.02,
                sy: 2.02
            },
            94: {
                x: 963.86,
                y: 41.343,
                sx: 2.018,
                sy: 2.018
            },
            95: {
                x: 967.728,
                y: 41.457,
                sx: 2.016,
                sy: 2.016
            },
            96: {
                x: 971.596,
                y: 41.62,
                sx: 2.014,
                sy: 2.014
            },
            97: {
                x: 975.463,
                y: 41.684,
                sx: 2.013,
                sy: 2.013
            },
            98: {
                x: 979.381,
                y: 41.847,
                sx: 2.011,
                sy: 2.011
            },
            99: {
                x: 983.249,
                y: 41.91,
                sx: 2.009,
                sy: 2.009
            },
            100: {
                x: 987.13,
                y: 42.074,
                sx: 2.007,
                sy: 2.007
            },
            101: {
                x: 990.998,
                y: 42.138,
                sx: 2.005,
                sy: 2.005,
                a: .47
            },
            102: {
                x: 994.866,
                y: 42.251,
                sx: 2.003,
                sy: 2.003
            },
            103: {
                x: 998.734,
                y: 42.415,
                sx: 2.001,
                sy: 2.001
            },
            104: {
                x: 1002.601,
                y: 42.478,
                sx: 1.999,
                sy: 1.999
            },
            105: {
                x: 1006.433,
                y: 42.642,
                sx: 1.997,
                sy: 1.997
            },
            106: {
                x: 1010.3,
                y: 42.706,
                sx: 1.995,
                sy: 1.995
            },
            107: {
                x: 1014.168,
                y: 42.869,
                sx: 1.994,
                sy: 1.994
            },
            108: {
                x: 1018.036,
                y: 42.982,
                sx: 1.992,
                sy: 1.992
            },
            109: {
                x: 1021.904,
                y: 43.046,
                sx: 1.99,
                sy: 1.99,
                a: .46
            },
            110: {
                x: 1025.785,
                y: 43.21,
                sx: 1.988,
                sy: 1.988
            },
            111: {
                x: 1029.703,
                y: 43.273,
                sx: 1.986,
                sy: 1.986
            },
            112: {
                x: 1033.57,
                y: 43.437,
                sx: 1.984,
                sy: 1.984
            },
            113: {
                x: 1037.438,
                y: 43.5,
                sx: 1.982,
                sy: 1.982
            },
            114: {
                x: 1041.306,
                y: 43.664,
                sx: 1.98,
                sy: 1.98
            },
            115: {
                x: 1045.174,
                y: 43.777,
                sx: 1.978,
                sy: 1.978
            },
            116: {
                x: 1049.055,
                y: 43.891,
                sx: 1.976,
                sy: 1.976
            },
            117: {
                x: 1052.923,
                y: 44.004,
                sx: 1.974,
                sy: 1.974
            },
            118: {
                x: 1056.791,
                y: 44.068,
                sx: 1.973,
                sy: 1.973
            },
            119: {
                x: 1060.658,
                y: 44.231,
                sx: 1.971,
                sy: 1.971
            },
            120: {
                x: 1064.54,
                y: 44.345,
                sx: 1.969,
                sy: 1.969,
                a: .45
            },
            121: {
                x: 1068.407,
                y: 44.459,
                sx: 1.967,
                sy: 1.967
            },
            122: {
                x: 1072.275,
                y: 44.572,
                sx: 1.965,
                sy: 1.965
            },
            123: {
                x: 1076.143,
                y: 44.686,
                sx: 1.963,
                sy: 1.963
            },
            124: {
                x: 1080.01,
                y: 44.799,
                sx: 1.961,
                sy: 1.961
            },
            125: {
                x: 1083.892,
                y: 44.863,
                sx: 1.959,
                sy: 1.959
            },
            126: {
                x: 1087.76,
                y: 45.026,
                sx: 1.957,
                sy: 1.957
            },
            127: {
                x: 1091.627,
                y: 45.14,
                sx: 1.955,
                sy: 1.955
            },
            128: {
                x: 1095.495,
                y: 45.253,
                sx: 1.954,
                sy: 1.954
            },
            129: {
                x: 1099.363,
                y: 45.367,
                sx: 1.952,
                sy: 1.952
            },
            130: {
                x: 1103.231,
                y: 45.48,
                sx: 1.95,
                sy: 1.95
            },
            131: {
                x: 1107.112,
                y: 45.594,
                sx: 1.948,
                sy: 1.948,
                a: .44
            },
            132: {
                x: 1110.98,
                y: 45.708,
                sx: 1.946,
                sy: 1.946
            },
            133: {
                x: 1114.847,
                y: 45.821,
                sx: 1.944,
                sy: 1.944
            },
            134: {
                x: 1118.715,
                y: 45.934,
                sx: 1.942,
                sy: 1.942
            },
            135: {
                x: 1122.597,
                y: 46.048,
                sx: 1.94,
                sy: 1.94
            },
            136: {
                x: 1126.464,
                y: 46.162,
                sx: 1.938,
                sy: 1.938
            },
            137: {
                x: 1130.332,
                y: 46.275,
                sx: 1.936,
                sy: 1.936
            },
            138: {
                x: 1134.2,
                y: 46.389,
                sx: 1.934,
                sy: 1.934
            },
            139: {
                x: 1138.068,
                y: 46.552,
                sx: 1.933,
                sy: 1.933,
                a: .43
            },
            140: {
                x: 1141.985,
                y: 46.615,
                sx: 1.931,
                sy: 1.931
            },
            141: {
                x: 1145.867,
                y: 46.73,
                sx: 1.929,
                sy: 1.929
            },
            142: {
                x: 1149.734,
                y: 46.843,
                sx: 1.927,
                sy: 1.927
            },
            143: {
                x: 1153.602,
                y: 46.956,
                sx: 1.925,
                sy: 1.925
            },
            144: {
                x: 1157.47,
                y: 47.07,
                sx: 1.923,
                sy: 1.923
            },
            145: {
                x: 1161.338,
                y: 47.183,
                sx: 1.921,
                sy: 1.921
            },
            146: {
                x: 1165.169,
                y: 47.347,
                sx: 1.919,
                sy: 1.919
            },
            147: {
                x: 1169.037,
                y: 47.411,
                sx: 1.917,
                sy: 1.917
            },
            148: {
                x: 1172.905,
                y: 47.574,
                sx: 1.915,
                sy: 1.915
            },
            149: {
                x: 1176.772,
                y: 47.637,
                sx: 1.914,
                sy: 1.914
            },
            150: {
                x: 1180.64,
                y: 47.751,
                sx: 1.912,
                sy: 1.912,
                a: .42
            },
            151: {
                x: 1184.521,
                y: 47.865,
                sx: 1.91,
                sy: 1.91
            },
            152: {
                x: 1188.389,
                y: 47.978,
                sx: 1.908,
                sy: 1.908
            },
            153: {
                x: 1192.307,
                y: 48.142,
                sx: 1.906,
                sy: 1.906
            },
            154: {
                x: 1196.175,
                y: 48.205,
                sx: 1.904,
                sy: 1.904
            },
            155: {
                x: 1200.042,
                y: 48.369,
                sx: 1.902,
                sy: 1.902
            },
            156: {
                x: 1203.91,
                y: 48.432,
                sx: 1.9,
                sy: 1.9
            },
            157: {
                x: 1207.791,
                y: 48.596,
                sx: 1.898,
                sy: 1.898
            },
            158: {
                x: 1211.659,
                y: 48.709,
                sx: 1.896,
                sy: 1.896,
                a: .41
            },
            159: {
                x: 1215.527,
                y: 48.773,
                sx: 1.894,
                sy: 1.894
            },
            160: {
                x: 1219.395,
                y: 48.936,
                sx: 1.893,
                sy: 1.893
            },
            161: {
                x: 1223.276,
                y: 49,
                sx: 1.891,
                sy: 1.891
            },
            162: {
                x: 1227.144,
                y: 49.164,
                sx: 1.889,
                sy: 1.889
            },
            163: {
                x: 1231.011,
                y: 49.227,
                sx: 1.887,
                sy: 1.887
            },
            164: {
                x: 1234.879,
                y: 49.391,
                sx: 1.885,
                sy: 1.885
            },
            165: {
                x: 1238.697,
                y: 49.504,
                sx: 1.883,
                sy: 1.883
            },
            166: {
                x: 1242.565,
                y: 49.567,
                sx: 1.881,
                sy: 1.881
            },
            167: {
                x: 1246.496,
                y: 49.731,
                sx: 1.879,
                sy: 1.879
            },
            168: {
                x: 1250.364,
                y: 49.795,
                sx: 1.877,
                sy: 1.877
            },
            169: {
                x: 1254.232,
                y: 49.958,
                sx: 1.875,
                sy: 1.875,
                a: .4
            },
            170: {
                x: 1258.099,
                y: 50.072,
                sx: 1.874,
                sy: 1.874
            },
            171: {
                x: 1261.967,
                y: 50.185,
                sx: 1.872,
                sy: 1.872
            },
            172: {
                x: 1265.848,
                y: 50.299,
                sx: 1.87,
                sy: 1.87
            },
            173: {
                x: 1269.716,
                y: 50.413,
                sx: 1.868,
                sy: 1.868
            },
            174: {
                x: 1273.25,
                y: 50.5,
                sx: 1.866,
                sy: 1.866
            },
            175: {
                x: 1277.168,
                y: 50.456,
                sx: 1.868,
                sy: 1.868
            },
            176: {
                x: 1281.095,
                y: 50.315,
                sx: 1.87,
                sy: 1.87
            },
            177: {
                x: 1285.002,
                y: 50.173,
                sx: 1.872,
                sy: 1.872
            },
            178: {
                x: 1288.909,
                y: 50.03,
                sx: 1.874,
                sy: 1.874
            },
            179: {
                x: 1292.836,
                y: 49.939,
                sx: 1.877,
                sy: 1.877
            },
            180: {
                x: 1296.743,
                y: 49.797,
                sx: 1.879,
                sy: 1.879,
                a: .41
            },
            181: {
                x: 1300.65,
                y: 49.705,
                sx: 1.881,
                sy: 1.881
            },
            182: {
                x: 1304.557,
                y: 49.512,
                sx: 1.883,
                sy: 1.883
            },
            183: {
                x: 1308.484,
                y: 49.421,
                sx: 1.885,
                sy: 1.885
            },
            184: {
                x: 1312.41,
                y: 49.279,
                sx: 1.887,
                sy: 1.887
            },
            185: {
                x: 1316.317,
                y: 49.187,
                sx: 1.89,
                sy: 1.89
            },
            186: {
                x: 1320.224,
                y: 49.045,
                sx: 1.892,
                sy: 1.892
            },
            187: {
                x: 1324.181,
                y: 48.903,
                sx: 1.894,
                sy: 1.894
            },
            188: {
                x: 1328.058,
                y: 48.761,
                sx: 1.896,
                sy: 1.896
            },
            189: {
                x: 1331.965,
                y: 48.669,
                sx: 1.898,
                sy: 1.898
            },
            190: {
                x: 1335.872,
                y: 48.527,
                sx: 1.9,
                sy: 1.9,
                a: .42
            },
            191: {
                x: 1339.779,
                y: 48.435,
                sx: 1.902,
                sy: 1.902
            },
            192: {
                x: 1343.756,
                y: 48.243,
                sx: 1.905,
                sy: 1.905
            },
            193: {
                x: 1347.613,
                y: 48.151,
                sx: 1.907,
                sy: 1.907
            },
            194: {
                x: 1351.54,
                y: 48.01,
                sx: 1.909,
                sy: 1.909
            },
            195: {
                x: 1355.447,
                y: 47.918,
                sx: 1.911,
                sy: 1.911
            },
            196: {
                x: 1359.404,
                y: 47.775,
                sx: 1.913,
                sy: 1.913,
                a: .43
            },
            197: {
                x: 1363.33,
                y: 47.684,
                sx: 1.915,
                sy: 1.915
            },
            198: {
                x: 1367.237,
                y: 47.492,
                sx: 1.917,
                sy: 1.917
            },
            199: {
                x: 1371.095,
                y: 47.399,
                sx: 1.92,
                sy: 1.92
            },
            200: {
                x: 1375.002,
                y: 47.257,
                sx: 1.922,
                sy: 1.922
            },
            201: {
                x: 1378.978,
                y: 47.166,
                sx: 1.924,
                sy: 1.924
            },
            202: {
                x: 1382.885,
                y: 47.024,
                sx: 1.926,
                sy: 1.926
            },
            203: {
                x: 1386.792,
                y: 46.881,
                sx: 1.928,
                sy: 1.928
            },
            204: {
                x: 1390.669,
                y: 46.74,
                sx: 1.93,
                sy: 1.93
            },
            205: {
                x: 1394.576,
                y: 46.648,
                sx: 1.932,
                sy: 1.932
            },
            206: {
                x: 1398.553,
                y: 46.506,
                sx: 1.935,
                sy: 1.935,
                a: .44
            },
            207: {
                x: 1402.46,
                y: 46.414,
                sx: 1.937,
                sy: 1.937
            },
            208: {
                x: 1406.367,
                y: 46.222,
                sx: 1.939,
                sy: 1.939
            },
            209: {
                x: 1410.274,
                y: 46.13,
                sx: 1.941,
                sy: 1.941
            },
            210: {
                x: 1414.151,
                y: 45.988,
                sx: 1.943,
                sy: 1.943
            },
            211: {
                x: 1418.108,
                y: 45.896,
                sx: 1.945,
                sy: 1.945
            },
            212: {
                x: 1422.015,
                y: 45.754,
                sx: 1.947,
                sy: 1.947
            },
            213: {
                x: 1425.922,
                y: 45.612,
                sx: 1.95,
                sy: 1.95,
                a: .45
            },
            214: {
                x: 1429.848,
                y: 45.47,
                sx: 1.952,
                sy: 1.952
            },
            215: {
                x: 1433.725,
                y: 45.379,
                sx: 1.954,
                sy: 1.954
            },
            216: {
                x: 1437.682,
                y: 45.237,
                sx: 1.956,
                sy: 1.956
            },
            217: {
                x: 1441.589,
                y: 45.144,
                sx: 1.958,
                sy: 1.958
            },
            218: {
                x: 1445.496,
                y: 44.952,
                sx: 1.96,
                sy: 1.96
            },
            219: {
                x: 1449.423,
                y: 44.861,
                sx: 1.962,
                sy: 1.962
            },
            220: {
                x: 1453.33,
                y: 44.718,
                sx: 1.965,
                sy: 1.965
            },
            221: {
                x: 1457.237,
                y: 44.626,
                sx: 1.967,
                sy: 1.967
            },
            222: {
                x: 1461.164,
                y: 44.485,
                sx: 1.969,
                sy: 1.969
            },
            223: {
                x: 1465.071,
                y: 44.343,
                sx: 1.971,
                sy: 1.971,
                a: .46
            },
            224: {
                x: 1468.978,
                y: 44.2,
                sx: 1.973,
                sy: 1.973
            },
            225: {
                x: 1472.935,
                y: 44.108,
                sx: 1.975,
                sy: 1.975
            },
            226: {
                x: 1476.812,
                y: 43.967,
                sx: 1.977,
                sy: 1.977
            },
            227: {
                x: 1480.719,
                y: 43.875,
                sx: 1.98,
                sy: 1.98
            },
            228: {
                x: 1484.645,
                y: 43.683,
                sx: 1.982,
                sy: 1.982
            },
            229: {
                x: 1488.552,
                y: 43.591,
                sx: 1.984,
                sy: 1.984
            },
            230: {
                x: 1492.51,
                y: 43.449,
                sx: 1.986,
                sy: 1.986
            },
            231: {
                x: 1496.417,
                y: 43.357,
                sx: 1.988,
                sy: 1.988
            },
            232: {
                x: 1500.293,
                y: 43.215,
                sx: 1.99,
                sy: 1.99
            },
            233: {
                x: 1504.2,
                y: 43.073,
                sx: 1.992,
                sy: 1.992,
                a: .47
            },
            234: {
                x: 1508.107,
                y: 42.931,
                sx: 1.995,
                sy: 1.995
            },
            235: {
                x: 1512.084,
                y: 42.839,
                sx: 1.997,
                sy: 1.997
            },
            236: {
                x: 1515.991,
                y: 42.697,
                sx: 1.999,
                sy: 1.999
            },
            237: {
                x: 1519.868,
                y: 42.606,
                sx: 2.001,
                sy: 2.001
            },
            238: {
                x: 1523.775,
                y: 42.463,
                sx: 2.003,
                sy: 2.003
            },
            239: {
                x: 1527.682,
                y: 42.321,
                sx: 2.005,
                sy: 2.005
            },
            240: {
                x: 1531.639,
                y: 42.179,
                sx: 2.007,
                sy: 2.007,
                a: .48
            },
            241: {
                x: 1535.566,
                y: 42.088,
                sx: 2.01,
                sy: 2.01
            },
            242: {
                x: 1539.423,
                y: 41.945,
                sx: 2.012,
                sy: 2.012
            },
            243: {
                x: 1543.33,
                y: 41.853,
                sx: 2.014,
                sy: 2.014
            },
            244: {
                x: 1547.256,
                y: 41.662,
                sx: 2.016,
                sy: 2.016
            },
            245: {
                x: 1551.213,
                y: 41.569,
                sx: 2.018,
                sy: 2.018
            },
            246: {
                x: 1555.121,
                y: 41.427,
                sx: 2.02,
                sy: 2.02
            },
            247: {
                x: 1559.028,
                y: 41.335,
                sx: 2.022,
                sy: 2.022
            },
            248: {
                x: 1562.904,
                y: 41.194,
                sx: 2.025,
                sy: 2.025
            },
            249: {
                x: 1566.861,
                y: 41.051,
                sx: 2.027,
                sy: 2.027
            },
            250: {
                x: 1570.788,
                y: 40.91,
                sx: 2.029,
                sy: 2.029,
                a: .49
            },
            251: {
                x: 1574.695,
                y: 40.818,
                sx: 2.031,
                sy: 2.031
            },
            252: {
                x: 1578.602,
                y: 40.676,
                sx: 2.033,
                sy: 2.033
            },
            253: {
                x: 1582.479,
                y: 40.584,
                sx: 2.035,
                sy: 2.035
            },
            254: {
                x: 1586.436,
                y: 40.392,
                sx: 2.037,
                sy: 2.037
            },
            255: {
                x: 1590.343,
                y: 40.3,
                sx: 2.04,
                sy: 2.04
            },
            256: {
                x: 1594.25,
                y: 40.157,
                sx: 2.042,
                sy: 2.042,
                a: .5
            },
            257: {
                x: 1598.177,
                y: 40.066,
                sx: 2.044,
                sy: 2.044
            },
            258: {
                x: 1602.084,
                y: 39.924,
                sx: 2.046,
                sy: 2.046
            },
            259: {
                x: 1606.01,
                y: 39.782,
                sx: 2.048,
                sy: 2.048
            },
            260: {
                x: 1609.917,
                y: 39.64,
                sx: 2.05,
                sy: 2.05
            },
            261: {
                x: 1613.95,
                y: 39.3,
                sx: 2.053,
                sy: 2.053
            },
            262: {
                x: 1615.825,
                y: 39.409,
                sx: 2.05,
                sy: 2.05
            },
            263: {
                x: 1617.601,
                y: 39.518,
                sx: 2.048,
                sy: 2.048,
                a: .49
            },
            264: {
                x: 1619.426,
                y: 39.678,
                sx: 2.046,
                sy: 2.046,
                a: .48
            },
            265: {
                x: 1621.276,
                y: 39.787,
                sx: 2.044,
                sy: 2.044
            },
            266: {
                x: 1623.101,
                y: 39.947,
                sx: 2.042,
                sy: 2.042,
                a: .47
            },
            267: {
                x: 1624.877,
                y: 40.057,
                sx: 2.04,
                sy: 2.04,
                a: .46
            },
            268: {
                x: 1626.702,
                y: 40.166,
                sx: 2.038,
                sy: 2.038
            },
            269: {
                x: 1628.552,
                y: 40.275,
                sx: 2.036,
                sy: 2.036,
                a: .45
            },
            270: {
                x: 1630.377,
                y: 40.434,
                sx: 2.033,
                sy: 2.033
            },
            271: {
                x: 1632.227,
                y: 40.544,
                sx: 2.031,
                sy: 2.031,
                a: .44
            },
            272: {
                x: 1634.003,
                y: 40.653,
                sx: 2.029,
                sy: 2.029
            },
            273: {
                x: 1635.828,
                y: 40.762,
                sx: 2.027,
                sy: 2.027,
                a: .43
            },
            274: {
                x: 1637.628,
                y: 40.872,
                sx: 2.025,
                sy: 2.025
            },
            275: {
                x: 1639.454,
                y: 40.982,
                sx: 2.023,
                sy: 2.023,
                a: .42
            },
            276: {
                x: 1641.329,
                y: 41.191,
                sx: 2.021,
                sy: 2.021,
                a: .41
            },
            277: {
                x: 1643.104,
                y: 41.3,
                sx: 2.019,
                sy: 2.019
            },
            278: {
                x: 1644.954,
                y: 41.41,
                sx: 2.017,
                sy: 2.017,
                a: .4
            },
            279: {
                x: 1646.73,
                y: 41.519,
                sx: 2.014,
                sy: 2.014
            },
            280: {
                x: 1648.555,
                y: 41.629,
                sx: 2.012,
                sy: 2.012,
                a: .39
            },
            281: {
                x: 1650.38,
                y: 41.738,
                sx: 2.01,
                sy: 2.01
            },
            282: {
                x: 1652.23,
                y: 41.897,
                sx: 2.008,
                sy: 2.008,
                a: .38
            },
            283: {
                x: 1654.056,
                y: 42.007,
                sx: 2.006,
                sy: 2.006
            },
            284: {
                x: 1655.831,
                y: 42.116,
                sx: 2.004,
                sy: 2.004,
                a: .37
            },
            285: {
                x: 1657.731,
                y: 42.226,
                sx: 2.002,
                sy: 2.002,
                a: .36
            },
            286: {
                x: 1659.507,
                y: 42.385,
                sx: 2,
                sy: 2
            },
            287: {
                x: 1661.332,
                y: 42.495,
                sx: 1.997,
                sy: 1.997,
                a: .35
            },
            288: {
                x: 1663.107,
                y: 42.654,
                sx: 1.995,
                sy: 1.995
            },
            289: {
                x: 1664.957,
                y: 42.764,
                sx: 1.993,
                sy: 1.993,
                a: .34
            },
            290: {
                x: 1666.783,
                y: 42.873,
                sx: 1.991,
                sy: 1.991
            },
            291: {
                x: 1668.608,
                y: 42.982,
                sx: 1.989,
                sy: 1.989,
                a: .33
            },
            292: {
                x: 1670.458,
                y: 43.092,
                sx: 1.987,
                sy: 1.987,
                a: .32
            },
            293: {
                x: 1672.233,
                y: 43.201,
                sx: 1.985,
                sy: 1.985
            },
            294: {
                x: 1674.083,
                y: 43.36,
                sx: 1.983,
                sy: 1.983,
                a: .31
            },
            295: {
                x: 1675.884,
                y: 43.47,
                sx: 1.98,
                sy: 1.98
            },
            296: {
                x: 1677.734,
                y: 43.629,
                sx: 1.978,
                sy: 1.978,
                a: .3
            },
            297: {
                x: 1679.51,
                y: 43.739,
                sx: 1.976,
                sy: 1.976
            },
            298: {
                x: 1681.359,
                y: 43.848,
                sx: 1.974,
                sy: 1.974,
                a: .29
            },
            299: {
                x: 1683.185,
                y: 44.007,
                sx: 1.972,
                sy: 1.972
            },
            300: {
                x: 1684.96,
                y: 44.117,
                sx: 1.97,
                sy: 1.97,
                a: .28
            },
            301: {
                x: 1686.86,
                y: 44.227,
                sx: 1.968,
                sy: 1.968,
                a: .27
            },
            302: {
                x: 1688.636,
                y: 44.336,
                sx: 1.966,
                sy: 1.966
            },
            303: {
                x: 1690.461,
                y: 44.445,
                sx: 1.963,
                sy: 1.964,
                a: .26
            },
            304: {
                x: 1692.236,
                y: 44.554,
                sx: 1.961,
                sy: 1.961,
                a: .25
            },
            305: {
                x: 1694.136,
                y: 44.714,
                sx: 1.959,
                sy: 1.959
            },
            306: {
                x: 1695.962,
                y: 44.873,
                sx: 1.957,
                sy: 1.957
            },
            307: {
                x: 1697.737,
                y: 44.983,
                sx: 1.955,
                sy: 1.955,
                a: .24
            },
            308: {
                x: 1699.587,
                y: 45.092,
                sx: 1.953,
                sy: 1.953,
                a: .23
            },
            309: {
                x: 1701.362,
                y: 45.202,
                sx: 1.951,
                sy: 1.951
            },
            310: {
                x: 1703.238,
                y: 45.311,
                sx: 1.949,
                sy: 1.949,
                a: .22
            },
            311: {
                x: 1705.013,
                y: 45.471,
                sx: 1.947,
                sy: 1.947,
                a: .21
            },
            312: {
                x: 1706.863,
                y: 45.58,
                sx: 1.944,
                sy: 1.944
            },
            313: {
                x: 1708.688,
                y: 45.689,
                sx: 1.942,
                sy: 1.942,
                a: .2
            },
            314: {
                x: 1710.464,
                y: 45.799,
                sx: 1.94,
                sy: 1.94
            },
            315: {
                x: 1712.314,
                y: 45.958,
                sx: 1.938,
                sy: 1.938,
                a: .19
            },
            316: {
                x: 1714.139,
                y: 46.067,
                sx: 1.936,
                sy: 1.936
            },
            317: {
                x: 1715.965,
                y: 46.227,
                sx: 1.934,
                sy: 1.934,
                a: .18
            },
            318: {
                x: 1717.765,
                y: 46.336,
                sx: 1.932,
                sy: 1.932
            },
            319: {
                x: 1719.59,
                y: 46.446,
                sx: 1.93,
                sy: 1.93,
                a: .17
            },
            320: {
                x: 1721.415,
                y: 46.555,
                sx: 1.927,
                sy: 1.927,
                a: .16
            },
            321: {
                x: 1723.265,
                y: 46.665,
                sx: 1.925,
                sy: 1.925
            },
            322: {
                x: 1725.091,
                y: 46.774,
                sx: 1.923,
                sy: 1.923,
                a: .15
            },
            323: {
                x: 1726.866,
                y: 46.934,
                sx: 1.921,
                sy: 1.921
            },
            324: {
                x: 1728.692,
                y: 47.043,
                sx: 1.919,
                sy: 1.919,
                a: .14
            },
            325: {
                x: 1730.542,
                y: 47.202,
                sx: 1.917,
                sy: 1.917
            },
            326: {
                x: 1732.367,
                y: 47.312,
                sx: 1.915,
                sy: 1.915,
                a: .13
            },
            327: {
                x: 1734.192,
                y: 47.421,
                sx: 1.913,
                sy: 1.913
            },
            328: {
                x: 1735.992,
                y: 47.53,
                sx: 1.91,
                sy: 1.911,
                a: .12
            },
            329: {
                x: 1737.818,
                y: 47.69,
                sx: 1.908,
                sy: 1.908,
                a: .11
            },
            330: {
                x: 1739.643,
                y: 47.8,
                sx: 1.906,
                sy: 1.906
            },
            331: {
                x: 1741.468,
                y: 47.909,
                sx: 1.904,
                sy: 1.904,
                a: .1
            },
            332: {
                x: 1743.268,
                y: 48.018,
                sx: 1.902,
                sy: 1.902
            },
            333: {
                x: 1745.094,
                y: 48.128,
                sx: 1.9,
                sy: 1.9,
                a: .09
            },
            334: {
                x: 1746.869,
                y: 48.237,
                sx: 1.898,
                sy: 1.898
            },
            335: {
                x: 1748.769,
                y: 48.447,
                sx: 1.896,
                sy: 1.896,
                a: .08
            },
            336: {
                x: 1750.594,
                y: 48.556,
                sx: 1.894,
                sy: 1.894,
                a: .07
            },
            337: {
                x: 1752.394,
                y: 48.665,
                sx: 1.891,
                sy: 1.891
            },
            338: {
                x: 1754.22,
                y: 48.775,
                sx: 1.889,
                sy: 1.889,
                a: .06
            },
            339: {
                x: 1756.045,
                y: 48.884,
                sx: 1.887,
                sy: 1.887
            },
            340: {
                x: 1757.821,
                y: 48.994,
                sx: 1.885,
                sy: 1.885,
                a: .05
            },
            341: {
                x: 1759.671,
                y: 49.153,
                sx: 1.883,
                sy: 1.883
            },
            342: {
                x: 1761.496,
                y: 49.262,
                sx: 1.881,
                sy: 1.881,
                a: .04
            },
            343: {
                x: 1763.321,
                y: 49.372,
                sx: 1.879,
                sy: 1.879
            },
            344: {
                x: 1765.121,
                y: 49.482,
                sx: 1.877,
                sy: 1.877,
                a: .03
            },
            345: {
                x: 1766.997,
                y: 49.641,
                sx: 1.874,
                sy: 1.875,
                a: .02
            },
            346: {
                x: 1768.772,
                y: 49.75,
                sx: 1.872,
                sy: 1.872
            },
            347: {
                x: 1770.597,
                y: 49.909,
                sx: 1.87,
                sy: 1.87,
                a: .01
            },
            348: {
                x: 1772.397,
                y: 50.019,
                sx: 1.868,
                sy: 1.868,
                a: 0
            },
            349: {
                x: 1774.1,
                y: 50.5,
                sx: 1.866,
                sy: 1.866
            }
        }).addAction(function() {
            if (!this._destroyed) {
                this.stop();
                var timeout = 4 + utils.getRandomFloat(1, 3);
                utils.delay(timeout).then(() => {
                    this._destroyed || this.gotoAndPlay(0)
                })
            }
        }, 349), this.labels.forEach((label, index) => {
            var labelEndPosition = this.labels[index + 1] ? this.labels[index + 1].position - 1 : this._totalFrames - 1;
            this.addAction(() => this.emit("label_end", this.currentLabel), labelEndPosition)
        })
    }), lib.fish1 = Container.extend(function() {
        Container.call(this);
        var instance6 = new Sprite(fromFrame("tile12FishBlue")),
            instance5 = new Sprite(fromFrame("tile12FishBlue")).setTransform(-170, 136, .68, .68),
            instance4 = new Sprite(fromFrame("tile12FishBlue")).setTransform(-206, 26, .5, .5),
            instance3 = new Sprite(fromFrame("tile12FishBlue")).setTransform(-328, 181, .31, .31),
            instance2 = new Sprite(fromFrame("tile12FishBlue")).setTransform(11, 201, .35, .35),
            instance1 = new Sprite(fromFrame("tile12FishBlue")).setTransform(-401, 98, .22, .22);
        this.addChild(instance6, instance5, instance4, instance3, instance2, instance1)
    }), lib.fish1Idle = MovieClip.extend(function() {
        MovieClip.call(this, {
            duration: 240
        });
        var instance1 = new lib.fish1;
        this.addTimedChild(instance1, 0, 240, {
            0: {
                x: -97,
                y: 500,
                sx: .5,
                sy: .5,
                a: 0
            },
            1: {
                x: -95.286,
                y: 499.961,
                sx: .501,
                sy: .501,
                a: .01
            },
            2: {
                x: -93.523,
                y: 499.923,
                sx: .502,
                sy: .502,
                a: .02
            },
            3: {
                x: -91.859,
                y: 499.834,
                sx: .503,
                sy: .503,
                a: .03
            },
            4: {
                x: -90.096,
                y: 499.795,
                sx: .504,
                sy: .504,
                a: .04
            },
            5: {
                x: -88.382,
                y: 499.757,
                sx: .505,
                sy: .505,
                a: .05
            },
            6: {
                x: -86.619,
                y: 499.668,
                sx: .506,
                sy: .506,
                a: .06
            },
            7: {
                x: -84.905,
                y: 499.629,
                sx: .507,
                sy: .507,
                a: .07
            },
            8: {
                x: -83.192,
                y: 499.54,
                sx: .508,
                sy: .508,
                a: .08
            },
            9: {
                x: -81.478,
                y: 499.502,
                sx: .509,
                sy: .509,
                a: .09
            },
            10: {
                x: -79.715,
                y: 499.463,
                sx: .51,
                sy: .51,
                a: .1
            },
            11: {
                x: -78.001,
                y: 499.424,
                sx: .511,
                sy: .511,
                a: .11
            },
            12: {
                x: -76.238,
                y: 499.336,
                sx: .512,
                sy: .512,
                a: .12
            },
            13: {
                x: -74.574,
                y: 499.247,
                a: .13
            },
            14: {
                x: -72.811,
                y: 499.208,
                sx: .513,
                sy: .513
            },
            15: {
                x: -71.097,
                y: 499.17,
                sx: .514,
                sy: .514,
                a: .14
            },
            16: {
                x: -69.334,
                y: 499.131,
                sx: .515,
                sy: .515,
                a: .15
            },
            17: {
                x: -67.62,
                y: 499.092,
                sx: .516,
                sy: .516,
                a: .16
            },
            18: {
                x: -65.857,
                y: 499.003,
                sx: .517,
                sy: .517,
                a: .17
            },
            19: {
                x: -64.143,
                y: 498.915,
                sx: .518,
                sy: .518,
                a: .18
            },
            20: {
                x: -62.43,
                y: 498.876,
                sx: .519,
                sy: .519,
                a: .19
            },
            21: {
                x: -60.666,
                y: 498.837,
                sx: .52,
                sy: .52,
                a: .2
            },
            22: {
                x: -58.953,
                y: 498.799,
                sx: .521,
                sy: .521,
                a: .21
            },
            23: {
                x: -57.189,
                y: 498.76,
                sx: .522,
                sy: .522,
                a: .22
            },
            24: {
                x: -55.526,
                y: 498.621,
                sx: .523,
                sy: .523,
                a: .23
            },
            25: {
                x: -53.762,
                y: 498.583,
                sx: .524,
                sy: .524,
                a: .24
            },
            26: {
                x: -52.052,
                y: 498.544,
                sx: .525,
                sy: .525,
                a: .25
            },
            27: {
                x: -50.288,
                y: 498.505,
                sx: .526,
                sy: .526,
                a: .26
            },
            28: {
                x: -48.575,
                y: 498.466,
                sx: .527,
                sy: .527,
                a: .27
            },
            29: {
                x: -46.861,
                y: 498.378,
                sx: .528,
                sy: .528,
                a: .28
            },
            30: {
                x: -45.148,
                y: 498.289,
                sx: .529,
                sy: .529,
                a: .29
            },
            31: {
                x: -43.384,
                y: 498.25,
                sx: .53,
                sy: .53,
                a: .3
            },
            32: {
                x: -41.671,
                y: 498.212,
                sx: .531,
                sy: .531,
                a: .31
            },
            33: {
                x: -39.907,
                y: 498.173,
                sx: .532,
                sy: .532,
                a: .32
            },
            34: {
                x: -38.244,
                y: 498.084,
                sx: .533,
                sy: .533,
                a: .33
            },
            35: {
                x: -36.48,
                y: 498.046,
                sx: .534,
                sy: .534,
                a: .34
            },
            36: {
                x: -34.717,
                y: 497.957,
                sx: .535,
                sy: .535,
                a: .35
            },
            37: {
                x: -33.003,
                y: 497.918,
                sx: .536,
                sy: .536,
                a: .36
            },
            38: {
                x: -31.24,
                y: 497.88,
                sx: .537,
                sy: .537,
                a: .37
            },
            39: {
                x: -29.526,
                y: 497.791,
                a: .38
            },
            40: {
                x: -27.813,
                y: 497.752,
                sx: .538,
                sy: .538
            },
            41: {
                x: -26.099,
                y: 497.713,
                sx: .539,
                sy: .539,
                a: .39
            },
            42: {
                x: -24.336,
                y: 497.625,
                sx: .54,
                sy: .54,
                a: .4
            },
            43: {
                x: -22.622,
                y: 497.586,
                sx: .541,
                sy: .541,
                a: .41
            },
            44: {
                x: -20.859,
                y: 497.547,
                sx: .542,
                sy: .542,
                a: .42
            },
            45: {
                x: -19.195,
                y: 497.459,
                sx: .543,
                sy: .543,
                a: .43
            },
            46: {
                x: -17.432,
                y: 497.42,
                sx: .544,
                sy: .544,
                a: .44
            },
            47: {
                x: -15.718,
                y: 497.381,
                sx: .545,
                sy: .545,
                a: .45
            },
            48: {
                x: -13.955,
                y: 497.293,
                sx: .546,
                sy: .546,
                a: .46
            },
            49: {
                x: -12.241,
                y: 497.254,
                sx: .547,
                sy: .547,
                a: .47
            },
            50: {
                x: -10.528,
                y: 497.165,
                sx: .548,
                sy: .548,
                a: .48
            },
            51: {
                x: -8.814,
                y: 497.126,
                sx: .549,
                sy: .549,
                a: .49
            },
            52: {
                x: -7,
                y: 497,
                sx: .55,
                sy: .55,
                a: .5
            },
            53: {
                x: -5.04,
                y: 497.067,
                sx: .549,
                sy: .549
            },
            54: {
                x: -3.131,
                y: 497.143,
                sx: .548,
                sy: .548
            },
            55: {
                x: -1.221,
                y: 497.168
            },
            56: {
                x: .688,
                y: 497.243,
                sx: .547,
                sy: .547,
                a: .49
            },
            57: {
                x: 2.648,
                y: 497.268,
                sx: .546,
                sy: .546
            },
            58: {
                x: 4.557,
                y: 497.258
            },
            59: {
                x: 6.516,
                y: 497.333,
                sx: .545,
                sy: .545
            },
            60: {
                x: 8.426,
                y: 497.358,
                sx: .544,
                sy: .544
            },
            61: {
                x: 10.336,
                y: 497.426,
                sx: .543,
                sy: .543
            },
            62: {
                x: 12.245,
                y: 497.451,
                a: .48
            },
            63: {
                x: 14.205,
                y: 497.476,
                sx: .542,
                sy: .542
            },
            64: {
                x: 16.164,
                y: 497.551,
                sx: .541,
                sy: .541
            },
            65: {
                x: 18.074,
                y: 497.626,
                sx: .54,
                sy: .54
            },
            66: {
                x: 19.983,
                y: 497.651
            },
            67: {
                x: 21.893,
                y: 497.726,
                sx: .539,
                sy: .539
            },
            68: {
                x: 23.852,
                y: 497.751,
                sx: .538,
                sy: .538
            },
            69: {
                x: 25.762,
                y: 497.826,
                sx: .537,
                sy: .537,
                a: .47
            },
            70: {
                x: 27.721,
                y: 497.809
            },
            71: {
                x: 29.631,
                y: 497.834,
                sx: .536,
                sy: .536
            },
            72: {
                x: 31.54,
                y: 497.909,
                sx: .535,
                sy: .535
            },
            73: {
                x: 33.45,
                y: 497.934,
                sx: .534,
                sy: .534
            },
            74: {
                x: 35.409,
                y: 498.009,
                a: .46
            },
            75: {
                x: 37.319,
                y: 498.034,
                sx: .533,
                sy: .533
            },
            76: {
                x: 39.278,
                y: 498.059,
                sx: .532,
                sy: .532
            },
            77: {
                x: 41.188,
                y: 498.134,
                sx: .531,
                sy: .531
            },
            78: {
                x: 43.097,
                y: 498.209
            },
            79: {
                x: 45.007,
                y: 498.284,
                sx: .53,
                sy: .53
            },
            80: {
                x: 46.966,
                y: 498.267,
                sx: .529,
                sy: .529
            },
            81: {
                x: 48.875,
                y: 498.292,
                sx: .528,
                sy: .528
            },
            82: {
                x: 50.835,
                y: 498.367,
                a: .45
            },
            83: {
                x: 52.694,
                y: 498.392,
                sx: .527,
                sy: .527
            },
            84: {
                x: 54.654,
                y: 498.417,
                sx: .526,
                sy: .526
            },
            85: {
                x: 56.563,
                y: 498.492,
                sx: .525,
                sy: .525
            },
            86: {
                x: 58.523,
                y: 498.517
            },
            87: {
                x: 60.433,
                y: 498.592,
                sx: .524,
                sy: .524
            },
            88: {
                x: 62.392,
                y: 498.617,
                sx: .523,
                sy: .523
            },
            89: {
                x: 64.252,
                y: 498.642,
                sx: .522,
                sy: .522
            },
            90: {
                x: 66.211,
                y: 498.76,
                a: .44
            },
            91: {
                x: 68.171,
                y: 498.785,
                sx: .521,
                sy: .521
            },
            92: {
                x: 70.08,
                y: 498.825,
                sx: .52,
                sy: .52
            },
            93: {
                x: 72.039,
                y: 498.85,
                sx: .519,
                sy: .519
            },
            94: {
                x: 73.899,
                y: 498.875
            },
            95: {
                x: 75.858,
                y: 498.95,
                sx: .518,
                sy: .518,
                a: .43
            },
            96: {
                x: 77.768,
                y: 498.975,
                sx: .517,
                sy: .517
            },
            97: {
                x: 79.727,
                y: 499,
                sx: .516,
                sy: .516
            },
            98: {
                x: 81.637,
                y: 499.068
            },
            99: {
                x: 83.597,
                y: 499.093,
                sx: .515,
                sy: .515
            },
            100: {
                x: 85.456,
                y: 499.168,
                sx: .514,
                sy: .514
            },
            101: {
                x: 87.416,
                y: 499.193,
                sx: .513,
                sy: .513
            },
            102: {
                x: 89.325,
                y: 499.233
            },
            103: {
                x: 91.284,
                y: 499.308,
                sx: .512,
                sy: .512,
                a: .42
            },
            104: {
                x: 93.194,
                y: 499.333,
                sx: .511,
                sy: .511
            },
            105: {
                x: 95.153,
                y: 499.408,
                sx: .51,
                sy: .51
            },
            106: {
                x: 97.013,
                y: 499.433
            },
            107: {
                x: 98.973,
                y: 499.451,
                sx: .509,
                sy: .509
            },
            108: {
                x: 100.882,
                y: 499.526,
                sx: .508,
                sy: .508,
                a: .41
            },
            109: {
                x: 102.842,
                y: 499.551,
                sx: .507,
                sy: .507
            },
            110: {
                x: 104.751,
                y: 499.626
            },
            111: {
                x: 106.661,
                y: 499.651,
                sx: .506,
                sy: .506
            },
            112: {
                x: 108.57,
                y: 499.676,
                sx: .505,
                sy: .505
            },
            113: {
                x: 110.53,
                y: 499.751,
                sx: .504,
                sy: .504
            },
            114: {
                x: 112.439,
                y: 499.792
            },
            115: {
                x: 114.398,
                y: 499.817,
                sx: .503,
                sy: .503
            },
            116: {
                x: 116.308,
                y: 499.884,
                sx: .502,
                sy: .502,
                a: .4
            },
            117: {
                x: 118.217,
                y: 499.909,
                sx: .501,
                sy: .501
            },
            118: {
                x: 120.177,
                y: 499.984
            },
            119: {
                x: 122,
                y: 500,
                sx: .5,
                sy: .5
            },
            120: {
                x: 123.805,
                y: 499.989,
                sx: .501,
                sy: .501
            },
            121: {
                x: 125.556,
                y: 499.913,
                sx: .502,
                sy: .502
            },
            122: {
                x: 127.311,
                y: 499.852
            },
            123: {
                x: 129.062,
                y: 499.826,
                sx: .503,
                sy: .503,
                a: .41
            },
            124: {
                x: 130.766,
                y: 499.816,
                sx: .504,
                sy: .504
            },
            125: {
                x: 132.521,
                y: 499.705,
                sx: .505,
                sy: .505
            },
            126: {
                x: 134.272,
                y: 499.679,
                sx: .506,
                sy: .506
            },
            127: {
                x: 136.027,
                y: 499.618,
                sx: .507,
                sy: .507
            },
            128: {
                x: 137.778,
                y: 499.542
            },
            129: {
                x: 139.533,
                y: 499.531,
                sx: .508,
                sy: .508
            },
            130: {
                x: 141.288,
                y: 499.471,
                sx: .509,
                sy: .509,
                a: .42
            },
            131: {
                x: 143.039,
                y: 499.395,
                sx: .51,
                sy: .51
            },
            132: {
                x: 144.793,
                y: 499.384,
                sx: .511,
                sy: .511
            },
            133: {
                x: 146.544,
                y: 499.358,
                sx: .512,
                sy: .512
            },
            134: {
                x: 148.299,
                y: 499.297,
                a: .43
            },
            135: {
                x: 150.004,
                y: 499.236,
                sx: .513,
                sy: .513
            },
            136: {
                x: 151.755,
                y: 499.16,
                sx: .514,
                sy: .514
            },
            137: {
                x: 153.51,
                y: 499.149,
                sx: .515,
                sy: .515
            },
            138: {
                x: 155.261,
                y: 499.073,
                sx: .516,
                sy: .516
            },
            139: {
                x: 157.016,
                y: 499.013,
                sx: .517,
                sy: .517
            },
            140: {
                x: 158.77,
                y: 499.002
            },
            141: {
                x: 160.522,
                y: 498.926,
                sx: .518,
                sy: .518,
                a: .44
            },
            142: {
                x: 162.276,
                y: 498.865,
                sx: .519,
                sy: .519
            },
            143: {
                x: 164.027,
                y: 498.839,
                sx: .52,
                sy: .52
            },
            144: {
                x: 165.782,
                y: 498.828,
                sx: .521,
                sy: .521
            },
            145: {
                x: 167.487,
                y: 498.717,
                sx: .522,
                sy: .522
            },
            146: {
                x: 169.238,
                y: 498.691,
                a: .45
            },
            147: {
                x: 170.993,
                y: 498.681,
                sx: .523,
                sy: .523
            },
            148: {
                x: 172.744,
                y: 498.555,
                sx: .524,
                sy: .524
            },
            149: {
                x: 174.499,
                y: 498.544,
                sx: .525,
                sy: .525
            },
            150: {
                x: 176.253,
                y: 498.483,
                sx: .526,
                sy: .526
            },
            151: {
                x: 178.004,
                y: 498.407,
                sx: .527,
                sy: .527
            },
            152: {
                x: 179.759,
                y: 498.396
            },
            153: {
                x: 181.51,
                y: 498.37,
                sx: .528,
                sy: .528,
                a: .46
            },
            154: {
                x: 183.215,
                y: 498.31,
                sx: .529,
                sy: .529
            },
            155: {
                x: 184.97,
                y: 498.249,
                sx: .53,
                sy: .53
            },
            156: {
                x: 186.771,
                y: 498.223,
                sx: .531,
                sy: .531
            },
            157: {
                x: 188.526,
                y: 498.162,
                sx: .532,
                sy: .532
            },
            158: {
                x: 190.277,
                y: 498.086
            },
            159: {
                x: 192.031,
                y: 498.025,
                sx: .533,
                sy: .533
            },
            160: {
                x: 193.786,
                y: 498.014,
                sx: .534,
                sy: .534,
                a: .47
            },
            161: {
                x: 195.537,
                y: 497.938,
                sx: .535,
                sy: .535
            },
            162: {
                x: 197.292,
                y: 497.878,
                sx: .536,
                sy: .536
            },
            163: {
                x: 199.043,
                y: 497.852,
                sx: .537,
                sy: .537
            },
            164: {
                x: 200.798,
                y: 497.841,
                a: .48
            },
            165: {
                x: 202.503,
                y: 497.73,
                sx: .538,
                sy: .538
            },
            166: {
                x: 204.254,
                y: 497.704,
                sx: .539,
                sy: .539
            },
            167: {
                x: 206.008,
                y: 497.693,
                sx: .54,
                sy: .54
            },
            168: {
                x: 207.759,
                y: 497.567,
                sx: .541,
                sy: .541
            },
            169: {
                x: 209.514,
                y: 497.556,
                sx: .542,
                sy: .542
            },
            170: {
                x: 211.269,
                y: 497.496
            },
            171: {
                x: 213.02,
                y: 497.42,
                sx: .543,
                sy: .543,
                a: .49
            },
            172: {
                x: 214.775,
                y: 497.409,
                sx: .544,
                sy: .544
            },
            173: {
                x: 216.526,
                y: 497.383,
                sx: .545,
                sy: .545
            },
            174: {
                x: 218.281,
                y: 497.322,
                sx: .546,
                sy: .546
            },
            175: {
                x: 219.985,
                y: 497.261,
                sx: .547,
                sy: .547
            },
            176: {
                x: 221.736,
                y: 497.235,
                a: .5
            },
            177: {
                x: 223.491,
                y: 497.175,
                sx: .548,
                sy: .548
            },
            178: {
                x: 225.242,
                y: 497.099,
                sx: .549,
                sy: .549
            },
            179: {
                x: 227,
                y: 497,
                sx: .55,
                sy: .55
            },
            180: {
                x: 228.95,
                y: 497.084,
                sx: .549,
                sy: .549,
                a: .49
            },
            181: {
                x: 230.911,
                y: 497.141,
                sx: .548,
                sy: .548,
                a: .48
            },
            182: {
                x: 232.814,
                y: 497.182,
                sx: .547,
                sy: .547
            },
            183: {
                x: 234.775,
                y: 497.239,
                a: .46
            },
            184: {
                x: 236.679,
                y: 497.231,
                sx: .546,
                sy: .546
            },
            185: {
                x: 238.632,
                y: 497.323,
                sx: .545,
                sy: .545,
                a: .45
            },
            186: {
                x: 240.543,
                y: 497.379,
                sx: .544,
                sy: .544,
                a: .44
            },
            187: {
                x: 242.496,
                y: 497.421,
                sx: .543,
                sy: .543,
                a: .43
            },
            188: {
                x: 244.457,
                y: 497.478,
                sx: .542,
                sy: .542
            },
            189: {
                x: 246.361,
                y: 497.519,
                a: .42
            },
            190: {
                x: 248.264,
                y: 497.569,
                sx: .541,
                sy: .541,
                a: .41
            },
            191: {
                x: 250.221,
                y: 497.61,
                sx: .54,
                sy: .54,
                a: .4
            },
            192: {
                x: 252.175,
                y: 497.652,
                sx: .539,
                sy: .539,
                a: .39
            },
            193: {
                x: 254.085,
                y: 497.709,
                sx: .538,
                sy: .538,
                a: .38
            },
            194: {
                x: 256.039,
                y: 497.75,
                sx: .537,
                sy: .537
            },
            195: {
                x: 257.943,
                y: 497.807,
                a: .37
            },
            196: {
                x: 259.903,
                y: 497.849,
                sx: .536,
                sy: .536,
                a: .36
            },
            197: {
                x: 261.857,
                y: 497.891,
                sx: .535,
                sy: .535,
                a: .35
            },
            198: {
                x: 263.767,
                y: 497.947,
                sx: .534,
                sy: .534,
                a: .34
            },
            199: {
                x: 265.671,
                y: 498.039,
                sx: .533,
                sy: .533,
                a: .33
            },
            200: {
                x: 267.625,
                y: 498.046,
                sx: .532,
                sy: .532,
                a: .32
            },
            201: {
                x: 269.585,
                y: 498.087
            },
            202: {
                x: 271.539,
                y: 498.137,
                sx: .531,
                sy: .531,
                a: .31
            },
            203: {
                x: 273.396,
                y: 498.178,
                sx: .53,
                sy: .53,
                a: .3
            },
            204: {
                x: 275.35,
                y: 498.22,
                sx: .529,
                sy: .529,
                a: .29
            },
            205: {
                x: 277.303,
                y: 498.277,
                sx: .528,
                sy: .528
            },
            206: {
                x: 279.264,
                y: 498.368,
                sx: .527,
                sy: .527,
                a: .27
            },
            207: {
                x: 281.167,
                y: 498.375
            },
            208: {
                x: 283.078,
                y: 498.417,
                sx: .526,
                sy: .526,
                a: .26
            },
            209: {
                x: 285.031,
                y: 498.474,
                sx: .525,
                sy: .525,
                a: .25
            },
            210: {
                x: 286.985,
                y: 498.565,
                sx: .524,
                sy: .524,
                a: .24
            },
            211: {
                x: 288.946,
                y: 498.557,
                sx: .523,
                sy: .523,
                a: .23
            },
            212: {
                x: 290.799,
                y: 498.614,
                sx: .522,
                sy: .522
            },
            213: {
                x: 292.76,
                y: 498.705,
                a: .21
            },
            214: {
                x: 294.714,
                y: 498.704,
                sx: .521,
                sy: .521
            },
            215: {
                x: 296.667,
                y: 498.746,
                sx: .52,
                sy: .52,
                a: .2
            },
            216: {
                x: 298.574,
                y: 498.788,
                sx: .519,
                sy: .519,
                a: .19
            },
            217: {
                x: 300.478,
                y: 498.895,
                sx: .518,
                sy: .518,
                a: .18
            },
            218: {
                x: 302.438,
                y: 498.936,
                sx: .517,
                sy: .517
            },
            219: {
                x: 304.392,
                y: 498.943,
                a: .17
            },
            220: {
                x: 306.296,
                y: 499.035,
                sx: .516,
                sy: .516,
                a: .16
            },
            221: {
                x: 308.206,
                y: 499.091,
                sx: .515,
                sy: .515,
                a: .15
            },
            222: {
                x: 310.16,
                y: 499.083,
                sx: .514,
                sy: .514,
                a: .14
            },
            223: {
                x: 312.12,
                y: 499.125,
                sx: .513,
                sy: .513,
                a: .13
            },
            224: {
                x: 314.074,
                y: 499.232,
                sx: .512,
                sy: .512
            },
            225: {
                x: 315.978,
                y: 499.273,
                a: .12
            },
            226: {
                x: 317.888,
                y: 499.272,
                sx: .511,
                sy: .511,
                a: .11
            },
            227: {
                x: 319.842,
                y: 499.364,
                sx: .51,
                sy: .51,
                a: .1
            },
            228: {
                x: 321.799,
                y: 499.406,
                sx: .509,
                sy: .509,
                a: .09
            },
            229: {
                x: 323.703,
                y: 499.462,
                sx: .508,
                sy: .508,
                a: .08
            },
            230: {
                x: 325.656,
                y: 499.454,
                sx: .507,
                sy: .507,
                a: .07
            },
            231: {
                x: 327.567,
                y: 499.561
            },
            232: {
                x: 329.52,
                y: 499.603,
                sx: .506,
                sy: .506,
                a: .06
            },
            233: {
                x: 331.431,
                y: 499.609,
                sx: .505,
                sy: .505,
                a: .05
            },
            234: {
                x: 333.384,
                y: 499.701,
                sx: .504,
                sy: .504,
                a: .04
            },
            235: {
                x: 335.338,
                y: 499.743,
                sx: .503,
                sy: .503
            },
            236: {
                x: 337.249,
                y: 499.8,
                sx: .502,
                sy: .502,
                a: .02
            },
            237: {
                x: 339.152,
                y: 499.841
            },
            238: {
                x: 341.113,
                y: 499.898,
                sx: .501,
                sy: .501,
                a: .01
            },
            239: {
                x: 343,
                y: 500,
                sx: .5,
                sy: .5,
                a: 0
            }
        }).addAction(function() {
            if (!this._destroyed) {
                this.stop();
                var timeout = 4 + utils.getRandomFloat(0, 4);
                utils.delay(timeout).then(() => {
                    this._destroyed || this.gotoAndPlay(0)
                })
            }
        }, 239), this.labels.forEach((label, index) => {
            var labelEndPosition = this.labels[index + 1] ? this.labels[index + 1].position - 1 : this._totalFrames - 1;
            this.addAction(() => this.emit("label_end", this.currentLabel), labelEndPosition)
        })
    }), lib.fish = Container.extend(function() {
        Container.call(this);
        var instance13 = new lib.fish1Idle,
            instance12 = (new lib.fish1Idle).setTransform(995.8, 1136.95, 1, 1, 0, 0, 3.142),
            instance11 = (new lib.fish1Idle).setTransform(321.2, 845.7, .753, .753),
            instance10 = (new lib.fish1Idle).setTransform(1793.25, 651.8, .327, .327, 0, 0, 3.142),
            instance9 = (new lib.fish1Idle).setTransform(-368.95, 669.4, .376, .376),
            instance8 = (new lib.fish4Idle).setTransform(1193.65, 951.8, .434, .434, 0, 0, 3.142).setAlpha(.5),
            instance7 = (new lib.fish2Idle).setTransform(-137.3, 1200.85, .5, .5),
            instance6 = (new lib.fish3Idle).setTransform(1367.5, 1219.2, .384, .384, 0, 0, 3.142),
            instance5 = (new lib.fish3Idle).setTransform(1751.9, 397.4, .384, .384, 0, 0, 3.142).setAlpha(.6),
            instance4 = (new lib.fish3Idle).setTransform(198.25, 1379.1, .384, .384).setAlpha(.9),
            instance3 = (new lib.fish2Idle).setTransform(1120.05, 243.15, .35, .35, 0, 0, 3.142).setAlpha(.5),
            instance2 = (new lib.fish2Idle).setTransform(-432.85, 501.1, .268, .268).setAlpha(.7),
            instance1 = (new lib.fish2Idle).setTransform(186.3, 811.65, .35, .35).setAlpha(.7);
        this.addChild(instance13, instance12, instance11, instance10, instance9, instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1)
    }), lib.sceneSpecialHook = Container.extend(function() {
        Container.call(this);
        var instance10 = new Sprite(fromFrame("sceneSpecialHook5")).setTransform(252, 20),
            instance9 = new Sprite(fromFrame("sceneSpecialHook6")).setTransform(311, 77),
            instance8 = new Sprite(fromFrame("sceneSpecialHook8")).setTransform(1914, 75),
            instance7 = new Sprite(fromFrame("sceneWaveParticles")).setTransform(1067, 351),
            instance6 = new Sprite(fromFrame("sceneSpecialHook9")).setTransform(2063, 47),
            instance5 = new Sprite(fromFrame("sceneSpecialHook1")).setTransform(2379.45, 113, 1, 1, 0, .524, 2.618),
            instance4 = new Sprite(fromFrame("sceneSpecialHook2")),
            instance3 = new Sprite(fromFrame("sceneSpecialHook3")).setTransform(107, 47),
            instance2 = new Sprite(fromFrame("sceneSpecialHook4")).setTransform(179, 23),
            instance1 = new Sprite(fromFrame("sceneSpecialHook7")).setTransform(1879, 109);
        this.addChild(instance10, instance9, instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1)
    }), lib.sceneSpecialFlags = Container.extend(function() {
        Container.call(this);
        var instance4 = new Sprite(fromFrame("sceneSpecialFlags5")).setTransform(399, 301, 1, 1, -.087),
            instance3 = new Sprite(fromFrame("sceneSpecialFlags2")).setTransform(2207, 193, 1, 1, .415),
            instance2 = new Sprite(fromFrame("sceneSpecialFlags3")).setTransform(604, 45.4, 1, 1, -.03),
            instance1 = new Sprite(fromFrame("sceneSpecialFlags1")).setTransform(0, 426.7, 1, 1, -.388);
        this.addChild(instance4, instance3, instance2, instance1)
    }), lib.sceneSpecialBoat4 = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("sceneSpecialBoat4"));
        this.addChild(instance1)
    }), lib.sceneSpecialBoat3 = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("sceneSpecialBoat3"));
        this.addChild(instance1)
    }), lib.sceneSpecialBoat2 = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("sceneSpecialBoat2"));
        this.addChild(instance1)
    }), lib.sceneSpecialBoats = MovieClip.extend(function() {
        MovieClip.call(this, {
            duration: 159
        });
        var instance3 = new lib.sceneSpecialBoat2,
            instance2 = new lib.sceneSpecialBoat3,
            instance1 = new lib.sceneSpecialBoat4;
        this.addTimedChild(instance3, 0, 159, {
            0: {
                x: 164,
                y: 1,
                r: 0
            },
            1: {
                x: 163.998,
                y: 1.045
            },
            2: {
                y: 1.03
            },
            3: {
                y: 1.102
            },
            4: {
                x: 163.948,
                y: 1.162,
                r: -.001
            },
            5: {
                x: 163.898,
                y: 1.215
            },
            6: {
                x: 163.849,
                y: 1.352
            },
            7: {
                x: 163.749,
                y: 1.432,
                r: -.002
            },
            8: {
                x: 163.7,
                y: 1.55
            },
            9: {
                x: 163.6,
                y: 1.705,
                r: -.003
            },
            10: {
                x: 163.501,
                y: 1.802
            },
            11: {
                x: 163.352,
                y: 2.034,
                r: -.004
            },
            12: {
                x: 163.252,
                y: 2.209,
                r: -.005
            },
            13: {
                x: 163.101,
                y: 2.372,
                r: -.006
            },
            14: {
                x: 162.952,
                y: 2.621,
                r: -.007
            },
            15: {
                x: 162.803,
                y: 2.914,
                r: -.008
            },
            16: {
                x: 162.601,
                y: 3.141,
                r: -.009
            },
            17: {
                x: 162.45,
                y: 3.361,
                r: -.01
            },
            18: {
                x: 162.251,
                y: 3.668,
                r: -.011
            },
            19: {
                x: 162.05,
                y: 3.965,
                r: -.012
            },
            20: {
                x: 161.848,
                y: 4.3,
                r: -.013
            },
            21: {
                x: 161.595,
                y: 4.625,
                r: -.015
            },
            22: {
                x: 161.394,
                y: 5.037,
                r: -.016
            },
            23: {
                x: 161.14,
                y: 5.389,
                r: -.018
            },
            24: {
                x: 160.887,
                y: 5.732,
                r: -.019
            },
            25: {
                x: 160.633,
                y: 6.161,
                r: -.021
            },
            26: {
                x: 160.33,
                y: 6.581,
                r: -.023
            },
            27: {
                x: 160.074,
                y: 7.038,
                r: -.024
            },
            28: {
                x: 159.769,
                y: 7.485,
                r: -.026
            },
            29: {
                x: 159.461,
                y: 7.973,
                r: -.028
            },
            30: {
                x: 159.155,
                y: 8.447,
                r: -.03
            },
            31: {
                x: 158.795,
                y: 8.962,
                r: -.032
            },
            32: {
                x: 158.487,
                y: 9.466,
                r: -.034
            },
            33: {
                x: 158.126,
                y: 10.008,
                r: -.037
            },
            34: {
                x: 157.764,
                y: 10.588,
                r: -.039
            },
            35: {
                x: 157.401,
                y: 11.16,
                r: -.041
            },
            36: {
                x: 157.038,
                y: 11.77,
                r: -.043
            },
            37: {
                x: 156.621,
                y: 12.367,
                r: -.046
            },
            38: {
                x: 156.256,
                y: 13.006,
                r: -.048
            },
            39: {
                x: 155.836,
                y: 13.681,
                r: -.051
            },
            40: {
                x: 155.466,
                y: 14.3,
                r: -.054
            },
            41: {
                x: 155.046,
                y: 14.977,
                r: -.056
            },
            42: {
                x: 154.673,
                y: 15.614,
                r: -.059
            },
            43: {
                x: 154.303,
                y: 16.213,
                r: -.061
            },
            44: {
                x: 153.931,
                y: 16.823,
                r: -.064
            },
            45: {
                x: 153.558,
                y: 17.395,
                r: -.066
            },
            46: {
                x: 153.235,
                y: 17.977,
                r: -.068
            },
            47: {
                x: 152.862,
                y: 18.569,
                r: -.07
            },
            48: {
                x: 152.539,
                y: 19.073,
                r: -.072
            },
            49: {
                x: 152.219,
                y: 19.588,
                r: -.075
            },
            50: {
                x: 151.946,
                y: 20.112,
                r: -.077
            },
            51: {
                x: 151.623,
                y: 20.552,
                r: -.078
            },
            52: {
                x: 151.352,
                y: 21.099,
                r: -.08
            },
            53: {
                x: 151.079,
                y: 21.509,
                r: -.082
            },
            54: {
                x: 150.808,
                y: 21.978,
                r: -.084
            },
            55: {
                x: 150.587,
                y: 22.41,
                r: -.085
            },
            56: {
                x: 150.316,
                y: 22.8,
                r: -.087
            },
            57: {
                x: 150.095,
                y: 23.154,
                r: -.088
            },
            58: {
                x: 149.877,
                y: 23.569,
                r: -.09
            },
            59: {
                x: 149.658,
                y: 23.944,
                r: -.091
            },
            60: {
                x: 149.489,
                y: 24.278,
                r: -.093
            },
            61: {
                x: 149.321,
                y: 24.576,
                r: -.094
            },
            62: {
                x: 149.104,
                y: 24.885,
                r: -.095
            },
            63: {
                x: 148.938,
                y: 25.155,
                r: -.096
            },
            64: {
                x: 148.821,
                y: 25.385,
                r: -.097
            },
            65: {
                x: 148.657,
                y: 25.675,
                r: -.098
            },
            66: {
                x: 148.493,
                y: 25.927,
                r: -.099
            },
            67: {
                x: 148.381,
                y: 26.089,
                r: -.1
            },
            68: {
                x: 148.27,
                y: 26.314,
                r: -.101
            },
            69: {
                x: 148.158,
                y: 26.549
            },
            70: {
                x: 148.048,
                y: 26.696,
                r: -.102
            },
            71: {
                x: 147.989,
                y: 26.801,
                r: -.103
            },
            72: {
                x: 147.932,
                y: 26.921
            },
            73: {
                x: 147.825,
                y: 27.048,
                r: -.104
            },
            74: {
                x: 147.768,
                y: 27.138
            },
            75: {
                x: 147.763,
                y: 27.238
            },
            76: {
                x: 147.708,
                y: 27.3
            },
            77: {
                x: 147.706,
                y: 27.373,
                r: -.105
            },
            78: {
                x: 147.656,
                y: 27.355
            },
            79: {
                x: 147.55,
                y: 27.35
            },
            80: {
                x: 147.597,
                y: 27.352
            },
            81: {
                x: 147.594,
                y: 27.368
            },
            82: {
                x: 147.64,
                y: 27.292,
                r: -.104
            },
            83: {
                x: 147.683,
                y: 27.228
            },
            84: {
                x: 147.725,
                y: 27.123
            },
            85: {
                x: 147.765,
                y: 27.027
            },
            86: {
                x: 147.853,
                y: 26.89,
                r: -.103
            },
            87: {
                x: 147.939,
                y: 26.815
            },
            88: {
                x: 148.024,
                y: 26.648,
                r: -.102
            },
            89: {
                x: 148.106,
                y: 26.495,
                r: -.101
            },
            90: {
                x: 148.187,
                y: 26.298
            },
            91: {
                x: 148.316,
                y: 26.111,
                r: -.1
            },
            92: {
                x: 148.441,
                y: 25.934,
                r: -.099
            },
            93: {
                x: 148.566,
                y: 25.67,
                r: -.098
            },
            94: {
                x: 148.737,
                y: 25.363,
                r: -.097
            },
            95: {
                x: 148.859,
                y: 25.114,
                r: -.096
            },
            96: {
                x: 149.026,
                y: 24.88,
                r: -.095
            },
            97: {
                x: 149.242,
                y: 24.551,
                r: -.094
            },
            98: {
                x: 149.408,
                y: 24.233,
                r: -.093
            },
            99: {
                x: 149.617,
                y: 23.928,
                r: -.091
            },
            100: {
                x: 149.827,
                y: 23.531,
                r: -.09
            },
            101: {
                x: 150.033,
                y: 23.141,
                r: -.088
            },
            102: {
                x: 150.29,
                y: 22.764,
                r: -.087
            },
            103: {
                x: 150.492,
                y: 22.395,
                r: -.085
            },
            104: {
                x: 150.743,
                y: 21.937,
                r: -.084
            },
            105: {
                x: 151.039,
                y: 21.49,
                r: -.082
            },
            106: {
                x: 151.286,
                y: 21.051,
                r: -.08
            },
            107: {
                x: 151.577,
                y: 20.571,
                r: -.078
            },
            108: {
                x: 151.868,
                y: 20.052,
                r: -.077
            },
            109: {
                x: 152.157,
                y: 19.593,
                r: -.075
            },
            110: {
                x: 152.487,
                y: 19.042,
                r: -.072
            },
            111: {
                x: 152.82,
                y: 18.554,
                r: -.07
            },
            112: {
                x: 153.15,
                y: 17.971,
                r: -.068
            },
            113: {
                x: 153.477,
                y: 17.402,
                r: -.066
            },
            114: {
                x: 153.85,
                y: 16.79,
                r: -.064
            },
            115: {
                x: 154.219,
                y: 16.19,
                r: -.061
            },
            116: {
                x: 154.586,
                y: 15.598,
                r: -.059
            },
            117: {
                x: 154.999,
                y: 14.966,
                r: -.056
            },
            118: {
                x: 155.411,
                y: 14.293,
                r: -.054
            },
            119: {
                x: 155.769,
                y: 13.676,
                r: -.051
            },
            120: {
                x: 156.178,
                y: 13.005,
                r: -.048
            },
            121: {
                x: 156.587,
                y: 12.32,
                r: -.046
            },
            122: {
                x: 156.949,
                y: 11.729,
                r: -.043
            },
            123: {
                x: 157.31,
                y: 11.124,
                r: -.041
            },
            124: {
                x: 157.676,
                y: 10.56,
                r: -.039
            },
            125: {
                x: 158.042,
                y: 9.989,
                r: -.037
            },
            126: {
                x: 158.41,
                y: 9.457,
                r: -.034
            },
            127: {
                x: 158.73,
                y: 8.961,
                r: -.032
            },
            128: {
                x: 159.054,
                y: 8.409,
                r: -.03
            },
            129: {
                x: 159.375,
                y: 7.947,
                r: -.028
            },
            130: {
                x: 159.703,
                y: 7.475,
                r: -.026
            },
            131: {
                x: 159.98,
                y: 7.041,
                r: -.024
            },
            132: {
                x: 160.261,
                y: 6.6,
                r: -.023
            },
            133: {
                x: 160.542,
                y: 6.146,
                r: -.021
            },
            134: {
                x: 160.827,
                y: 5.735,
                r: -.019
            },
            135: {
                x: 161.064,
                y: 5.364,
                r: -.018
            },
            136: {
                x: 161.305,
                y: 4.981,
                r: -.016
            },
            137: {
                x: 161.545,
                y: 4.589,
                r: -.015
            },
            138: {
                x: 161.789,
                y: 4.24,
                r: -.013
            },
            139: {
                x: 161.988,
                y: 3.976,
                r: -.012
            },
            140: {
                x: 162.186,
                y: 3.658,
                r: -.011
            },
            141: {
                x: 162.386,
                y: 3.378,
                r: -.01
            },
            142: {
                x: 162.541,
                y: 3.085,
                r: -.009
            },
            143: {
                x: 162.748,
                y: 2.887,
                r: -.008
            },
            144: {
                x: 162.858,
                y: 2.577,
                r: -.007
            },
            145: {
                x: 163.018,
                y: 2.357,
                r: -.006
            },
            146: {
                x: 163.186,
                y: 2.179,
                r: -.005
            },
            147: {
                x: 163.302,
                y: 1.989,
                r: -.004
            },
            148: {
                x: 163.424,
                y: 1.791,
                r: -.003
            },
            149: {
                x: 163.495,
                y: 1.681
            },
            150: {
                x: 163.62,
                y: 1.515,
                r: -.002
            },
            151: {
                x: 163.7,
                y: 1.438
            },
            152: {
                x: 163.781,
                y: 1.3,
                r: -.001
            },
            153: {
                x: 163.815,
                y: 1.203
            },
            154: {
                x: 163.852,
                y: 1.147
            },
            155: {
                x: 163.891,
                y: 1.08,
                r: 0
            },
            156: {
                x: 163.934,
                y: 1.004
            },
            157: {
                x: 163.932,
                y: 1.018
            },
            158: {
                x: 164,
                y: 1
            }
        }).addTimedChild(instance2, 0, 159, {
            0: {
                x: 476,
                y: 23,
                r: 0
            },
            1: {
                x: 476.042,
                y: 23.007
            },
            2: {
                x: 476.041,
                y: 23.036
            },
            3: {
                x: 476.038,
                y: 22.994
            },
            4: {
                x: 476.085,
                y: 22.967
            },
            5: {
                x: 476.13,
                y: 22.961,
                r: .001
            },
            6: {
                x: 476.175,
                y: 22.927
            },
            7: {
                x: 476.218,
                y: 22.915
            },
            8: {
                x: 476.26,
                y: 22.875
            },
            9: {
                x: 476.301,
                y: 22.857,
                r: .002
            },
            10: {
                x: 476.392,
                y: 22.81
            },
            11: {
                x: 476.481,
                y: 22.735,
                r: .003
            },
            12: {
                x: 476.569,
                y: 22.682
            },
            13: {
                x: 476.656,
                y: 22.644,
                r: .004
            },
            14: {
                x: 476.742,
                y: 22.534
            },
            15: {
                x: 476.877,
                y: 22.489,
                r: .005
            },
            16: {
                x: 476.954,
                y: 22.423,
                r: .006
            },
            17: {
                x: 477.087,
                y: 22.322
            },
            18: {
                x: 477.219,
                y: 22.249,
                r: .007
            },
            19: {
                x: 477.393,
                y: 22.191,
                r: .008
            },
            20: {
                x: 477.573,
                y: 22.055,
                r: .009
            },
            21: {
                x: 477.694,
                y: 21.991,
                r: .01
            },
            22: {
                x: 477.872,
                y: 21.898,
                r: .011
            },
            23: {
                x: 478.042,
                y: 21.777,
                r: .012
            },
            24: {
                x: 478.21,
                y: 21.678,
                r: .013
            },
            25: {
                x: 478.428,
                y: 21.551,
                r: .014
            },
            26: {
                x: 478.594,
                y: 21.445,
                r: .015
            },
            27: {
                x: 478.81,
                y: 21.304,
                r: .016
            },
            28: {
                x: 479.017,
                y: 21.192,
                r: .018
            },
            29: {
                x: 479.23,
                y: 21.051,
                r: .019
            },
            30: {
                x: 479.435,
                y: 20.925,
                r: .02
            },
            31: {
                x: 479.69,
                y: 20.771,
                r: .021
            },
            32: {
                x: 479.892,
                y: 20.596,
                r: .023
            },
            33: {
                x: 480.145,
                y: 20.485,
                r: .024
            },
            34: {
                x: 480.396,
                y: 20.296,
                r: .026
            },
            35: {
                x: 480.688,
                y: 20.179,
                r: .027
            },
            36: {
                x: 480.98,
                y: 19.99,
                r: .029
            },
            37: {
                x: 481.271,
                y: 19.816,
                r: .031
            },
            38: {
                x: 481.553,
                y: 19.657,
                r: .032
            },
            39: {
                x: 481.842,
                y: 19.476,
                r: .034
            },
            40: {
                x: 482.122,
                y: 19.36,
                r: .036
            },
            41: {
                x: 482.446,
                y: 19.179,
                r: .038
            },
            42: {
                x: 482.729,
                y: 19.027,
                r: .039
            },
            43: {
                x: 483.012,
                y: 18.852,
                r: .041
            },
            44: {
                x: 483.247,
                y: 18.706,
                r: .042
            },
            45: {
                x: 483.575,
                y: 18.538,
                r: .044
            },
            46: {
                x: 483.811,
                y: 18.399,
                r: .045
            },
            47: {
                x: 484.092,
                y: 18.237,
                r: .047
            },
            48: {
                x: 484.33,
                y: 18.111,
                r: .048
            },
            49: {
                x: 484.57,
                y: 17.956,
                r: .05
            },
            50: {
                x: 484.753,
                y: 17.829,
                r: .051
            },
            51: {
                x: 484.995,
                y: 17.738,
                r: .052
            },
            52: {
                x: 485.188,
                y: 17.567,
                r: .053
            },
            53: {
                x: 485.431,
                y: 17.482,
                r: .055
            },
            54: {
                x: 485.618,
                y: 17.375,
                r: .056
            },
            55: {
                x: 485.814,
                y: 17.24,
                r: .057
            },
            56: {
                x: 485.961,
                y: 17.139,
                r: .058
            },
            57: {
                x: 486.166,
                y: 17.068,
                r: .059
            },
            58: {
                x: 486.315,
                y: 16.974,
                r: .06
            },
            59: {
                x: 486.465,
                y: 16.858,
                r: .061
            },
            60: {
                x: 486.673,
                y: 16.771,
                r: .062
            },
            61: {
                x: 486.825,
                y: 16.712,
                r: .063
            },
            62: {
                x: 486.936,
                y: 16.631
            },
            63: {
                x: 487.096,
                y: 16.586,
                r: .064
            },
            64: {
                x: 487.209,
                y: 16.512,
                r: .065
            },
            65: {
                x: 487.322,
                y: 16.423
            },
            66: {
                x: 487.394,
                y: 16.356,
                r: .066
            },
            67: {
                x: 487.509,
                y: 16.324,
                r: .067
            },
            68: {
                x: 487.583,
                y: 16.262
            },
            69: {
                x: 487.658,
                y: 16.237,
                r: .068
            },
            70: {
                x: 487.733,
                y: 16.19
            },
            71: {
                x: 487.81,
                y: 16.17
            },
            72: {
                x: 487.895,
                y: 16.13,
                r: .069
            },
            73: {
                x: 487.931,
                y: 16.068
            },
            74: {
                x: 487.961,
                y: 16.083
            },
            75: {
                x: 487.999,
                y: 16.077
            },
            76: {
                x: 488.046,
                y: 16.05,
                r: .07
            },
            77: {
                x: 488.036
            },
            78: {
                x: 488.084,
                y: 16.037
            },
            79: {
                x: 488,
                y: 16
            },
            80: {
                x: 488.008,
                y: 16.043
            },
            81: {
                x: 488.001,
                y: 16.055
            },
            82: {
                x: 487.961,
                y: 16.053
            },
            83: {
                x: 487.956,
                y: 16.079,
                r: .069
            },
            84: {
                x: 487.909,
                y: 16.082
            },
            85: {
                x: 487.863,
                y: 16.113
            },
            86: {
                x: 487.825,
                y: 16.114
            },
            87: {
                x: 487.773,
                y: 16.15,
                r: .068
            },
            88: {
                x: 487.686,
                y: 16.214
            },
            89: {
                x: 487.593,
                y: 16.256
            },
            90: {
                x: 487.543,
                y: 16.275,
                r: .067
            },
            91: {
                x: 487.452,
                y: 16.329
            },
            92: {
                x: 487.368,
                y: 16.404,
                r: .066
            },
            93: {
                x: 487.27,
                y: 16.463,
                r: .065
            },
            94: {
                x: 487.131,
                y: 16.493
            },
            95: {
                x: 486.992,
                y: 16.608,
                r: .064
            },
            96: {
                x: 486.896,
                y: 16.65,
                r: .063
            },
            97: {
                x: 486.759,
                y: 16.713
            },
            98: {
                x: 486.622,
                y: 16.803,
                r: .062
            },
            99: {
                x: 486.428,
                y: 16.879,
                r: .061
            },
            100: {
                x: 486.243,
                y: 16.982,
                r: .06
            },
            101: {
                x: 486.101,
                y: 17.062,
                r: .059
            },
            102: {
                x: 485.91,
                y: 17.171,
                r: .058
            },
            103: {
                x: 485.719,
                y: 17.257,
                r: .057
            },
            104: {
                x: 485.529,
                y: 17.378,
                r: .056
            },
            105: {
                x: 485.347,
                y: 17.519,
                r: .055
            },
            106: {
                x: 485.151,
                y: 17.588,
                r: .054
            },
            107: {
                x: 484.914,
                y: 17.742,
                r: .052
            },
            108: {
                x: 484.719,
                y: 17.859,
                r: .051
            },
            109: {
                x: 484.483,
                y: 17.968,
                r: .05
            },
            110: {
                x: 484.232,
                y: 18.105,
                r: .048
            },
            111: {
                x: 483.99,
                y: 18.269,
                r: .047
            },
            112: {
                x: 483.748,
                y: 18.404,
                r: .045
            },
            113: {
                x: 483.507,
                y: 18.573,
                r: .044
            },
            114: {
                x: 483.21,
                y: 18.721,
                r: .042
            },
            115: {
                x: 482.913,
                y: 18.845,
                r: .041
            },
            116: {
                x: 482.667,
                y: 19.048,
                r: .039
            },
            117: {
                x: 482.364,
                y: 19.178,
                r: .038
            },
            118: {
                x: 482.069,
                y: 19.386,
                r: .036
            },
            119: {
                x: 481.767,
                y: 19.528,
                r: .034
            },
            120: {
                x: 481.458,
                y: 19.686,
                r: .032
            },
            121: {
                x: 481.212,
                y: 19.823,
                r: .031
            },
            122: {
                x: 480.901,
                y: 20.025,
                r: .029
            },
            123: {
                x: 480.646,
                y: 20.2,
                r: .027
            },
            124: {
                x: 480.341,
                y: 20.34,
                r: .026
            },
            125: {
                x: 480.078,
                y: 20.509,
                r: .024
            },
            126: {
                x: 479.864,
                y: 20.65,
                r: .023
            },
            127: {
                x: 479.607,
                y: 20.764,
                r: .022
            },
            128: {
                x: 479.399,
                y: 20.943,
                r: .02
            },
            129: {
                x: 479.14,
                y: 21.051,
                r: .019
            },
            130: {
                x: 478.923,
                y: 21.175,
                r: .018
            },
            131: {
                x: 478.713,
                y: 21.328,
                r: .016
            },
            132: {
                x: 478.552,
                y: 21.454,
                r: .015
            },
            133: {
                x: 478.333,
                y: 21.544,
                r: .014
            },
            134: {
                x: 478.171,
                y: 21.707,
                r: .013
            },
            135: {
                x: 477.966,
                y: 21.792,
                r: .012
            },
            136: {
                x: 477.802,
                y: 21.9,
                r: .011
            },
            137: {
                x: 477.638,
                y: 21.98,
                r: .01
            },
            138: {
                x: 477.472,
                y: 22.082,
                r: .009
            },
            139: {
                x: 477.307,
                y: 22.207,
                r: .008
            },
            140: {
                x: 477.155,
                y: 22.254,
                r: .007
            },
            141: {
                x: 477.037,
                y: 22.373,
                r: .006
            },
            142: {
                x: 476.927,
                y: 22.415
            },
            143: {
                x: 476.816,
                y: 22.522,
                r: .005
            },
            144: {
                x: 476.711,
                y: 22.559,
                r: .004
            },
            145: {
                x: 476.599,
                y: 22.66
            },
            146: {
                x: 476.485,
                y: 22.691,
                r: .003
            },
            147: {
                x: 476.428,
                y: 22.738
            },
            148: {
                x: 476.321,
                y: 22.806,
                r: .002
            },
            149: {
                x: 476.263,
                y: 22.847
            },
            150: {
                x: 476.204,
                y: 22.911,
                r: .001
            },
            151: {
                x: 476.145,
                y: 22.946
            },
            152: {
                x: 476.092,
                y: 22.955
            },
            153: {
                x: 476.038,
                y: 22.985
            },
            154: {
                x: 476.034,
                y: 22.996,
                r: 0
            },
            155: {
                x: 475.979,
                y: 23.021
            },
            156: {
                x: 475.981,
                y: 23.061
            },
            157: {
                x: 475.982,
                y: 23.032
            },
            158: {
                x: 476,
                y: 23
            }
        }).addTimedChild(instance1, 0, 159, {
            0: {
                x: 2325,
                y: 32,
                r: 0
            },
            1: {
                x: 2325.015,
                y: 32.014
            },
            2: {
                x: 2325.018,
                y: 32.051
            },
            3: {
                x: 2324.972,
                y: 32.132
            },
            4: {
                x: 2324.929,
                y: 32.121
            },
            5: {
                x: 2324.937,
                y: 32.203,
                r: -.001
            },
            6: {
                x: 2324.846,
                y: 32.244
            },
            7: {
                x: 2324.808,
                y: 32.342
            },
            8: {
                x: 2324.722,
                y: 32.449,
                r: -.002
            },
            9: {
                x: 2324.637,
                y: 32.549
            },
            10: {
                x: 2324.554,
                y: 32.707,
                r: -.003
            },
            11: {
                x: 2324.472,
                y: 32.859
            },
            12: {
                x: 2324.343,
                y: 33.019,
                r: -.004
            },
            13: {
                x: 2324.265,
                y: 33.187,
                r: -.005
            },
            14: {
                x: 2324.14,
                y: 33.363
            },
            15: {
                x: 2323.98,
                y: 33.533,
                r: -.006
            },
            16: {
                x: 2323.858,
                y: 33.76,
                r: -.007
            },
            17: {
                x: 2323.702,
                y: 33.981,
                r: -.008
            },
            18: {
                x: 2323.533,
                y: 34.211,
                r: -.009
            },
            19: {
                x: 2323.381,
                y: 34.498,
                r: -.01
            },
            20: {
                x: 2323.18,
                y: 34.743,
                r: -.011
            },
            21: {
                x: 2322.967,
                y: 35.032,
                r: -.012
            },
            22: {
                x: 2322.785,
                y: 35.379,
                r: -.014
            },
            23: {
                x: 2322.589,
                y: 35.619,
                r: -.015
            },
            24: {
                x: 2322.346,
                y: 35.968,
                r: -.016
            },
            25: {
                x: 2322.169,
                y: 36.274,
                r: -.017
            },
            26: {
                x: 2321.929,
                y: 36.674,
                r: -.019
            },
            27: {
                x: 2321.656,
                y: 37.046,
                r: -.02
            },
            28: {
                x: 2321.434,
                y: 37.398,
                r: -.022
            },
            29: {
                x: 2321.178,
                y: 37.821,
                r: -.024
            },
            30: {
                x: 2320.91,
                y: 38.239,
                r: -.025
            },
            31: {
                x: 2320.608,
                y: 38.664,
                r: -.027
            },
            32: {
                x: 2320.308,
                y: 39.083,
                r: -.029
            },
            33: {
                x: 2320.024,
                y: 39.559,
                r: -.03
            },
            34: {
                x: 2319.742,
                y: 39.993,
                r: -.032
            },
            35: {
                x: 2319.412,
                y: 40.471,
                r: -.034
            },
            36: {
                x: 2319.098,
                y: 40.957,
                r: -.036
            },
            37: {
                x: 2318.786,
                y: 41.451,
                r: -.038
            },
            38: {
                x: 2318.426,
                y: 41.988,
                r: -.04
            },
            39: {
                x: 2318.082,
                y: 42.533,
                r: -.043
            },
            40: {
                x: 2317.803,
                y: 43.206,
                r: -.045
            },
            41: {
                x: 2317.474,
                y: 43.75,
                r: -.047
            },
            42: {
                x: 2317.128,
                y: 44.287,
                r: -.049
            },
            43: {
                x: 2316.795,
                y: 44.78,
                r: -.051
            },
            44: {
                x: 2316.46,
                y: 45.265,
                r: -.053
            },
            45: {
                x: 2316.159,
                y: 45.742,
                r: -.055
            },
            46: {
                x: 2315.871,
                y: 46.224,
                r: -.057
            },
            47: {
                x: 2315.58,
                y: 46.649,
                r: -.059
            },
            48: {
                x: 2315.338,
                y: 47.116,
                r: -.06
            },
            49: {
                x: 2315.044,
                y: 47.539,
                r: -.062
            },
            50: {
                x: 2314.799,
                y: 48.004,
                r: -.064
            },
            51: {
                x: 2314.537,
                y: 48.412,
                r: -.065
            },
            52: {
                x: 2314.287,
                y: 48.761,
                r: -.067
            },
            53: {
                x: 2314.086,
                y: 49.166,
                r: -.068
            },
            54: {
                x: 2313.819,
                y: 49.528,
                r: -.07
            },
            55: {
                x: 2313.6,
                y: 49.868,
                r: -.071
            },
            56: {
                x: 2313.444,
                y: 50.214,
                r: -.072
            },
            57: {
                x: 2313.221,
                y: 50.502,
                r: -.074
            },
            58: {
                x: 2313.032,
                y: 50.847,
                r: -.075
            },
            59: {
                x: 2312.855,
                y: 51.133,
                r: -.076
            },
            60: {
                x: 2312.677,
                y: 51.411,
                r: -.077
            },
            61: {
                x: 2312.533,
                y: 51.696,
                r: -.078
            },
            62: {
                x: 2312.387,
                y: 51.923,
                r: -.079
            },
            63: {
                x: 2312.239,
                y: 52.192,
                r: -.08
            },
            64: {
                x: 2312.075,
                y: 52.368,
                r: -.081
            },
            65: {
                x: 2311.973,
                y: 52.585,
                r: -.082
            },
            66: {
                x: 2311.855,
                y: 52.745,
                r: -.083
            },
            67: {
                x: 2311.721,
                y: 52.912
            },
            68: {
                x: 2311.65,
                y: 53.07,
                r: -.084
            },
            69: {
                x: 2311.562,
                y: 53.27
            },
            70: {
                x: 2311.473,
                y: 53.377,
                r: -.085
            },
            71: {
                x: 2311.382,
                y: 53.476
            },
            72: {
                x: 2311.324,
                y: 53.617,
                r: -.086
            },
            73: {
                x: 2311.264,
                y: 53.714
            },
            74: {
                x: 2311.253,
                y: 53.754,
                r: -.087
            },
            75: {
                x: 2311.176,
                y: 53.836
            },
            76: {
                x: 2311.146,
                y: 53.874
            },
            77: {
                x: 2311.166,
                y: 53.954
            },
            78: {
                x: 2311.133,
                y: 53.941
            },
            79: {
                x: 2311,
                y: 54
            },
            80: {
                y: 54.05
            },
            81: {
                x: 2311.03,
                y: 54.012
            },
            82: {
                x: 2311.073,
                y: 53.93
            },
            83: {
                x: 2311.062,
                y: 53.938
            },
            84: {
                x: 2311.113,
                y: 53.887
            },
            85: {
                x: 2311.146,
                y: 53.792,
                r: -.086
            },
            86: {
                x: 2311.177,
                y: 53.688
            },
            87: {
                x: 2311.254,
                y: 53.591
            },
            88: {
                x: 2311.329,
                y: 53.484,
                r: -.085
            },
            89: {
                x: 2311.4,
                y: 53.318,
                r: -.084
            },
            90: {
                x: 2311.519,
                y: 53.158
            },
            91: {
                x: 2311.634,
                y: 52.989,
                r: -.083
            },
            92: {
                x: 2311.711,
                y: 52.81
            },
            93: {
                x: 2311.87,
                y: 52.673,
                r: -.082
            },
            94: {
                x: 2311.976,
                y: 52.442,
                r: -.081
            },
            95: {
                x: 2312.094,
                y: 52.201,
                r: -.08
            },
            96: {
                x: 2312.244,
                y: 51.967,
                r: -.079
            },
            97: {
                x: 2312.406,
                y: 51.723,
                r: -.078
            },
            98: {
                x: 2312.564,
                y: 51.456,
                r: -.077
            },
            99: {
                x: 2312.706,
                y: 51.209,
                r: -.076
            },
            100: {
                x: 2312.894,
                y: 50.854,
                r: -.075
            },
            101: {
                x: 2313.109,
                y: 50.553,
                r: -.074
            },
            102: {
                x: 2313.306,
                y: 50.279,
                r: -.073
            },
            103: {
                x: 2313.498,
                y: 49.946,
                r: -.071
            },
            104: {
                x: 2313.705,
                y: 49.583,
                r: -.07
            },
            105: {
                x: 2313.907,
                y: 49.196,
                r: -.068
            },
            106: {
                x: 2314.192,
                y: 48.83,
                r: -.067
            },
            107: {
                x: 2314.389,
                y: 48.44,
                r: -.065
            },
            108: {
                x: 2314.646,
                y: 48.04,
                r: -.064
            },
            109: {
                x: 2314.902,
                y: 47.596,
                r: -.062
            },
            110: {
                x: 2315.189,
                y: 47.144,
                r: -.06
            },
            111: {
                x: 2315.488,
                y: 46.697,
                r: -.059
            },
            112: {
                x: 2315.749,
                y: 46.24,
                r: -.057
            },
            113: {
                x: 2316.057,
                y: 45.774,
                r: -.055
            },
            114: {
                x: 2316.326,
                y: 45.348,
                r: -.053
            },
            115: {
                x: 2316.677,
                y: 44.829,
                r: -.051
            },
            116: {
                x: 2316.992,
                y: 44.315,
                r: -.049
            },
            117: {
                x: 2317.316,
                y: 43.776,
                r: -.047
            },
            118: {
                x: 2317.674,
                y: 43.244,
                r: -.045
            },
            119: {
                x: 2317.978,
                y: 42.653,
                r: -.043
            },
            120: {
                x: 2318.315,
                y: 42.12,
                r: -.04
            },
            121: {
                x: 2318.656,
                y: 41.595,
                r: -.038
            },
            122: {
                x: 2318.983,
                y: 41.115,
                r: -.036
            },
            123: {
                x: 2319.28,
                y: 40.594,
                r: -.034
            },
            124: {
                x: 2319.58,
                y: 40.096,
                r: -.032
            },
            125: {
                x: 2319.881,
                y: 39.627,
                r: -.03
            },
            126: {
                x: 2320.172,
                y: 39.169,
                r: -.029
            },
            127: {
                x: 2320.48,
                y: 38.768,
                r: -.027
            },
            128: {
                x: 2320.741,
                y: 38.312,
                r: -.025
            },
            129: {
                x: 2321.055,
                y: 37.915,
                r: -.024
            },
            130: {
                x: 2321.307,
                y: 37.562,
                r: -.022
            },
            131: {
                x: 2321.529,
                y: 37.147,
                r: -.02
            },
            132: {
                x: 2321.787,
                y: 36.763,
                r: -.019
            },
            133: {
                x: 2322.027,
                y: 36.421,
                r: -.017
            },
            134: {
                x: 2322.242,
                y: 36.09,
                r: -.016
            },
            135: {
                x: 2322.46,
                y: 35.732,
                r: -.015
            },
            136: {
                x: 2322.681,
                y: 35.469,
                r: -.014
            },
            137: {
                x: 2322.84,
                y: 35.151,
                r: -.012
            },
            138: {
                x: 2323.031,
                y: 34.84,
                r: -.011
            },
            139: {
                x: 2323.245,
                y: 34.624,
                r: -.01
            },
            140: {
                x: 2323.414,
                y: 34.283,
                r: -.009
            },
            141: {
                x: 2323.585,
                y: 34.086,
                r: -.008
            },
            142: {
                x: 2323.709,
                y: 33.847,
                r: -.007
            },
            143: {
                x: 2323.836,
                y: 33.653,
                r: -.006
            },
            144: {
                x: 2323.986,
                y: 33.47,
                r: -.005
            },
            145: {
                x: 2324.119,
                y: 33.329
            },
            146: {
                x: 2324.191,
                y: 33.112,
                r: -.004
            },
            147: {
                x: 2324.35,
                y: 32.941,
                r: -.003
            },
            148: {
                x: 2324.428,
                y: 32.777
            },
            149: {
                x: 2324.493,
                y: 32.659,
                r: -.002
            },
            150: {
                x: 2324.597,
                y: 32.551
            },
            151: {
                x: 2324.668,
                y: 32.486,
                r: -.001
            },
            152: {
                x: 2324.729,
                y: 32.395
            },
            153: {
                x: 2324.741,
                y: 32.334
            },
            154: {
                x: 2324.843,
                y: 32.247,
                r: 0
            },
            155: {
                x: 2324.847,
                y: 32.17
            },
            156: {
                x: 2324.855,
                y: 32.136
            },
            157: {
                x: 2324.9,
                y: 32.098
            },
            158: {
                x: 2325,
                y: 32
            }
        }), this.labels.forEach((label, index) => {
            var labelEndPosition = this.labels[index + 1] ? this.labels[index + 1].position - 1 : this._totalFrames - 1;
            this.addAction(() => this.emit("label_end", this.currentLabel), labelEndPosition)
        })
    }), lib.waterSpecial = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("sceneSlotSpecial2"));
        this.addChild(instance1)
    }), lib.freeSpins = Container.extend(function() {
        Container.call(this);
        var instance8 = (new lib.waterSpecial).setTransform(-675, 194);
        this[instance8.name = "waterSpecial"] = instance8;
        var instance7 = new Sprite(fromFrame("sceneSpecial1")).setTransform(-675, -912),
            instance6 = (new lib.sceneSpecialBoats).setTransform(-676),
            instance5 = (new lib.sceneSpecialFlags).setTransform(-700, -551),
            instance4 = new Sprite(fromFrame("sceneWaterSmall")).setTransform(-671, 77, 1.37, 1.37),
            instance3 = new Sprite(fromFrame("sceneSpecialSignText")).setTransform(388, -235),
            instance2 = (new lib.sceneSpecialHook).setTransform(-384, 161),
            instance1 = new lib.fish;
        this.addChild(instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1)
    }), lib.loadingScreen = MovieClip.extend(function() {
        MovieClip.call(this, {
            duration: 99,
            labels: {
                init: 0,
                show: 9
            }
        });
        var instance7 = new lib.freeSpins;
        this[instance7.name = "freeSpins"] = instance7;
        var instance34 = new lib.paytableGlow,
            instance33 = new lib.paytable1TitlePlate,
            instance24 = new lib.superWinSplashUpRightLoop,
            instance23 = new lib.superWinSplashRight,
            instance22 = new lib.superWinSplashRight,
            instance21 = new lib.superWinSplashSmallLoop,
            instance20 = new lib.superWinSplashUpRightLoop,
            instance19 = new lib.superWinSplashUpRightLoop,
            instance18 = new lib.paytable1TitlePlateLoop,
            instance42 = new lib.bigWinDropletsSmall,
            instance41 = new lib.bigWinDropletsSmall,
            instance40 = new lib.bigWinDropletsSmall,
            instance39 = new lib.bigWinDropletsSmall,
            instance44 = new lib.paytable1TitlePlateLoop,
            instance43 = new lib.paytable1TitlePlate,
            instance6 = new lib.logoPlate,
            instance5 = new lib.logoInner,
            instance38 = new lib.paytable1BoatBack_copy,
            instance37 = new lib.megaWinCharacter,
            instance36 = new lib.paytable1Boat_copy,
            instance35 = new lib.paytable1Water,
            instance32 = new lib.tile12Fish,
            instance28 = new lib.tile12Fish,
            instance31 = new lib.tile10Fish,
            instance27 = new lib.tile10Fish_copy,
            instance30 = new lib.tile16Fish,
            instance26 = new lib.tile16Fish_copy,
            instance29 = new lib.tile14Fish,
            instance25 = new lib.tile14Fish_copy,
            instance17 = new lib.paytable1Text,
            instance16 = new lib.bubbles,
            instance15 = new lib.bubbles,
            instance14 = new lib.bubbles,
            instance10 = new lib.bubbles,
            instance9 = new lib.bubbles,
            instance8 = new lib.bubbles,
            instance13 = new lib.bubbles,
            instance12 = new lib.bubbles,
            instance11 = new lib.bubbles,
            instance4 = new Sprite(fromFrame("sceneSlotFade")).setTransform(-682, -911, 1.02, 1.97),
            instance3 = new Sprite(fromFrame("sceneSlotFade")).setTransform(-680, -914, 1.02, 1.84, 0, 1.571, 1.571),
            instance2 = new Sprite(fromFrame("sceneSlotFade")).setTransform(2082.65, 2043.75, 1.02, 1.97, 0, 3.142, 3.142),
            instance1 = new Sprite(fromFrame("sceneSlotFade")).setTransform(2079.85, 2047, 1, 1.84, 0, -1.571, -1.571);
        this.addTimedChild(instance7).addTimedChild(instance34, 49, 50, {
            49: {
                x: -159,
                y: 130,
                a: 0
            },
            50: {
                a: .03
            },
            51: {
                a: .05
            },
            52: {
                a: .08
            },
            53: {
                a: .11
            },
            54: {
                a: .14
            },
            55: {
                a: .17
            },
            56: {
                a: .2
            },
            57: {
                a: .22
            },
            58: {
                a: .25
            },
            59: {
                a: .28
            },
            60: {
                a: .3
            },
            61: {
                a: .33
            },
            62: {
                a: .36
            },
            63: {
                a: .39
            },
            64: {
                a: .42
            },
            65: {
                a: .45
            },
            66: {
                a: .47
            },
            67: {
                a: .5
            },
            68: {
                a: .53
            },
            69: {
                a: .55
            },
            70: {
                a: .58
            },
            71: {
                a: .61
            },
            72: {
                a: .64
            },
            73: {
                a: .67
            },
            74: {
                a: .7
            },
            75: {
                a: .72
            },
            76: {
                a: .75
            }
        }).addTimedChild(instance33, 49, 50, {
            49: {
                x: 159.6,
                y: -18.75,
                sx: .75,
                sy: .75,
                a: 0
            },
            50: {
                x: 135.953,
                y: -25.205,
                sx: .782,
                sy: .782,
                a: .13
            },
            51: {
                x: 113.891,
                y: -31.256,
                sx: .812,
                sy: .812,
                a: .25
            },
            52: {
                x: 93.499,
                y: -36.8,
                sx: .84,
                sy: .84,
                a: .36
            },
            53: {
                x: 74.739,
                y: -41.939,
                sx: .866,
                sy: .866,
                a: .46
            },
            54: {
                x: 57.6,
                y: -46.622,
                sx: .889,
                sy: .889,
                a: .55
            },
            55: {
                x: 42.093,
                y: -50.899,
                sx: .91,
                sy: .91,
                a: .64
            },
            56: {
                x: 28.214,
                y: -54.672,
                sx: .929,
                sy: .929,
                a: .71
            },
            57: {
                x: 15.96,
                y: -58.038,
                sx: .946,
                sy: .946,
                a: .78
            },
            58: {
                x: 5.385,
                y: -60.95,
                sx: .96,
                sy: .96,
                a: .84
            },
            59: {
                x: -3.614,
                y: -63.405,
                sx: .972,
                sy: .972,
                a: .89
            },
            60: {
                x: -10.938,
                y: -65.405,
                sx: .982,
                sy: .982,
                a: .93
            },
            61: {
                x: -16.682,
                y: -66.95,
                sx: .99,
                sy: .99,
                a: .96
            },
            62: {
                x: -20.751,
                y: -68.088,
                sx: .996,
                sy: .996,
                a: .98
            },
            63: {
                x: -23.192,
                y: -68.772,
                sx: .999,
                sy: .999,
                a: 1
            },
            64: {
                x: -24.1,
                y: -68.9,
                sx: 1,
                sy: 1
            },
            65: {
                x: -26.221,
                y: -69.453,
                sx: 1.003,
                sy: 1.003,
                a: .97
            },
            66: {
                x: -28.392,
                y: -70.055,
                sx: 1.006,
                sy: 1.006,
                a: .94
            },
            67: {
                x: -30.513,
                y: -70.658,
                sx: 1.009,
                sy: 1.009,
                a: .91
            },
            68: {
                x: -32.634,
                y: -71.261,
                sx: 1.012,
                sy: 1.012,
                a: .88
            },
            69: {
                x: -34.804,
                y: -71.813,
                sx: 1.015,
                sy: 1.015,
                a: .85
            },
            70: {
                x: -36.975,
                y: -72.415,
                sx: 1.018,
                sy: 1.018,
                a: .82
            },
            71: {
                x: -39.146,
                y: -73.018,
                sx: 1.021,
                sy: 1.021,
                a: .79
            },
            72: {
                x: -41.267,
                y: -73.621,
                sx: 1.024,
                sy: 1.024,
                a: .77
            },
            73: {
                x: -43.388,
                y: -74.173,
                sx: 1.026,
                sy: 1.026,
                a: .73
            },
            74: {
                x: -45.559,
                y: -74.776,
                sx: 1.029,
                sy: 1.029,
                a: .71
            },
            75: {
                x: -47.73,
                y: -75.379,
                sx: 1.032,
                sy: 1.032,
                a: .68
            },
            76: {
                x: -49.9,
                y: -75.981,
                sx: 1.035,
                sy: 1.035,
                a: .65
            },
            77: {
                x: -51.971,
                y: -76.534,
                sx: 1.038,
                sy: 1.038,
                a: .62
            },
            78: {
                x: -54.142,
                y: -77.136,
                sx: 1.041,
                sy: 1.041,
                a: .59
            },
            79: {
                x: -56.313,
                y: -77.739,
                sx: 1.044,
                sy: 1.044,
                a: .56
            },
            80: {
                x: -58.484,
                y: -78.291,
                sx: 1.047,
                sy: 1.047,
                a: .53
            },
            81: {
                x: -60.605,
                y: -78.844,
                sx: 1.05,
                sy: 1.05,
                a: .5
            },
            82: {
                x: -62.726,
                y: -79.447,
                sx: 1.053,
                sy: 1.053,
                a: .47
            },
            83: {
                x: -64.896,
                y: -80.049,
                sx: 1.056,
                sy: 1.056,
                a: .44
            },
            84: {
                x: -67.067,
                y: -80.652,
                sx: 1.059,
                sy: 1.059,
                a: .41
            },
            85: {
                x: -69.238,
                y: -81.205,
                sx: 1.062,
                sy: 1.062,
                a: .38
            },
            86: {
                x: -71.359,
                y: -81.808,
                sx: 1.065,
                sy: 1.065,
                a: .35
            },
            87: {
                x: -73.48,
                y: -82.409,
                sx: 1.068,
                sy: 1.068,
                a: .32
            },
            88: {
                x: -75.651,
                y: -83.012,
                sx: 1.071,
                sy: 1.071,
                a: .29
            },
            89: {
                x: -77.822,
                y: -83.615,
                sx: 1.074,
                sy: 1.074,
                a: .27
            },
            90: {
                x: -79.992,
                y: -84.167,
                sx: 1.076,
                sy: 1.076,
                a: .23
            },
            91: {
                x: -82.063,
                y: -84.77,
                sx: 1.079,
                sy: 1.079,
                a: .21
            },
            92: {
                x: -84.234,
                y: -85.373,
                sx: 1.082,
                sy: 1.082,
                a: .18
            },
            93: {
                x: -86.405,
                y: -85.975,
                sx: 1.085,
                sy: 1.085,
                a: .15
            },
            94: {
                x: -88.576,
                y: -86.528,
                sx: 1.088,
                sy: 1.088,
                a: .12
            },
            95: {
                x: -90.747,
                y: -87.131,
                sx: 1.091,
                sy: 1.091,
                a: .09
            },
            96: {
                x: -92.818,
                y: -87.734,
                sx: 1.094,
                sy: 1.094,
                a: .06
            },
            97: {
                x: -94.988,
                y: -88.335,
                sx: 1.097,
                sy: 1.097,
                a: .03
            },
            98: {
                x: -97,
                y: -89,
                sx: 1.1,
                sy: 1.1,
                a: 0
            }
        }).addTimedChild(instance24, 39, 53, {
            39: {
                x: 706.6,
                y: 1004.3,
                sx: 1.003,
                sy: .349,
                kx: 2.853,
                ky: -3.076,
                a: 0
            },
            40: {
                x: 706.152,
                y: 1007.911,
                sx: 1.04,
                sy: .366,
                kx: 2.856,
                a: .02
            },
            41: {
                x: 705.667,
                y: 1011.505,
                sx: 1.078,
                sy: .382,
                kx: 2.861,
                a: .05
            },
            42: {
                x: 705.204,
                y: 1015.165,
                sx: 1.116,
                sy: .399,
                kx: 2.865,
                a: .07
            },
            43: {
                x: 704.845,
                y: 1018.784,
                sx: 1.154,
                sy: .416,
                kx: 2.869,
                a: .09
            },
            44: {
                x: 704.476,
                y: 1022.485,
                sx: 1.191,
                sy: .433,
                kx: 2.873,
                a: .12
            },
            45: {
                x: 704.181,
                y: 1026.19,
                sx: 1.229,
                sy: .449,
                kx: 2.877,
                a: .14
            },
            46: {
                x: 703.901,
                y: 1029.766,
                sx: 1.266,
                sy: .466,
                kx: 2.881,
                a: .17
            },
            47: {
                x: 703.643,
                y: 1033.374,
                sx: 1.303,
                sy: .482,
                kx: 2.884,
                a: .19
            },
            48: {
                x: 703.471,
                y: 1036.92,
                sx: 1.34,
                sy: .498,
                kx: 2.888,
                a: .21
            },
            49: {
                x: 703.292,
                y: 1040.418,
                sx: 1.375,
                sy: .514,
                kx: 2.892,
                a: .23
            },
            50: {
                x: 703.207,
                y: 1043.807,
                sx: 1.41,
                sy: .529,
                kx: 2.896,
                a: .26
            },
            51: {
                x: 703.116,
                y: 1047.188,
                sx: 1.444,
                sy: .544,
                kx: 2.899,
                a: .28
            },
            52: {
                x: 703.039,
                y: 1050.39,
                sx: 1.477,
                sy: .559,
                kx: 2.903,
                a: .3
            },
            53: {
                x: 702.925,
                y: 1053.587,
                sx: 1.509,
                sy: .573,
                kx: 2.906,
                a: .32
            },
            54: {
                x: 702.944,
                y: 1056.627,
                sx: 1.541,
                sy: .587,
                kx: 2.91,
                a: .34
            },
            55: {
                x: 702.97,
                y: 1059.633,
                sx: 1.571,
                sy: .6,
                kx: 2.913,
                a: .36
            },
            56: {
                x: 703.015,
                y: 1062.463,
                sx: 1.599,
                sy: .613,
                kx: 2.916,
                a: .38
            },
            57: {
                x: 703.124,
                y: 1065.231,
                sx: 1.627,
                sy: .625,
                kx: 2.919,
                a: .39
            },
            58: {
                x: 703.134,
                y: 1067.891,
                sx: 1.654,
                sy: .637,
                kx: 2.922,
                a: .41
            },
            59: {
                x: 703.268,
                y: 1070.374,
                sx: 1.679,
                sy: .648,
                kx: 2.924,
                a: .43
            },
            60: {
                x: 703.333,
                y: 1072.802,
                sx: 1.704,
                sy: .659,
                kx: 2.927,
                a: .45
            },
            61: {
                x: 703.457,
                y: 1075.125,
                sx: 1.727,
                sy: .669,
                kx: 2.93,
                a: .46
            },
            62: {
                x: 703.549,
                y: 1077.371,
                sx: 1.749,
                sy: .679,
                kx: 2.932,
                a: .47
            },
            63: {
                x: 703.622,
                y: 1079.447,
                sx: 1.771,
                sy: .689,
                kx: 2.934,
                a: .49
            },
            64: {
                x: 703.8,
                y: 1081.4,
                sx: 1.791,
                sy: .698,
                kx: 2.936,
                a: .5
            },
            65: {
                x: 704.022,
                y: 1083.6,
                sx: 1.812,
                sy: .707,
                kx: 2.939,
                a: .46
            },
            66: {
                x: 704.18,
                y: 1085.718,
                sx: 1.833,
                sy: .716,
                kx: 2.941,
                a: .43
            },
            67: {
                x: 704.348,
                y: 1087.549,
                sx: 1.852,
                sy: .725,
                kx: 2.943,
                a: .39
            },
            68: {
                x: 704.557,
                y: 1089.442,
                sx: 1.871,
                sy: .733,
                kx: 2.945,
                a: .36
            },
            69: {
                x: 704.692,
                y: 1091.209,
                sx: 1.888,
                sy: .741,
                kx: 2.947,
                a: .33
            },
            70: {
                x: 704.841,
                y: 1092.8,
                sx: 1.905,
                sy: .748,
                kx: 2.948,
                a: .3
            },
            71: {
                x: 705.019,
                y: 1094.38,
                sx: 1.92,
                sy: .755,
                kx: 2.95,
                a: .28
            },
            72: {
                x: 705.159,
                y: 1095.816,
                sx: 1.935,
                sy: .762,
                kx: 2.952,
                a: .25
            },
            73: {
                x: 705.318,
                y: 1097.203,
                sx: 1.949,
                sy: .768,
                kx: 2.953,
                a: .23
            },
            74: {
                x: 705.433,
                y: 1098.55,
                sx: 1.962,
                sy: .773,
                kx: 2.955,
                a: .21
            },
            75: {
                x: 705.57,
                y: 1099.732,
                sx: 1.974,
                sy: .779,
                kx: 2.956,
                a: .18
            },
            76: {
                x: 705.625,
                y: 1100.89,
                sx: 1.986,
                sy: .784,
                kx: 2.957,
                a: .16
            },
            77: {
                x: 705.834,
                y: 1101.983,
                sx: 1.996,
                sy: .789,
                kx: 2.958,
                a: .15
            },
            78: {
                x: 705.981,
                y: 1103.012,
                sx: 2.006,
                sy: .793,
                kx: 2.959,
                a: .13
            },
            79: {
                x: 706.055,
                y: 1103.892,
                sx: 2.016,
                sy: .797,
                kx: 2.96,
                a: .11
            },
            80: {
                x: 706.167,
                y: 1104.743,
                sx: 2.024,
                sy: .801,
                kx: 2.961,
                a: .1
            },
            81: {
                x: 706.276,
                y: 1105.554,
                sx: 2.032,
                sy: .805,
                kx: 2.962,
                a: .09
            },
            82: {
                x: 706.423,
                y: 1106.319,
                sx: 2.04,
                sy: .808,
                kx: 2.963,
                a: .07
            },
            83: {
                x: 706.495,
                y: 1106.938,
                sx: 2.047,
                sy: .811,
                kx: 2.964,
                a: .06
            },
            84: {
                x: 706.553,
                y: 1107.611,
                sx: 2.053,
                sy: .814,
                a: .05
            },
            85: {
                x: 706.609,
                y: 1108.183,
                sx: 2.058,
                sy: .816,
                kx: 2.965,
                a: .04
            },
            86: {
                x: 706.688,
                y: 1108.675,
                sx: 2.064,
                sy: .818,
                a: .03
            },
            87: {
                x: 706.748,
                y: 1109.143,
                sx: 2.068,
                sy: .82,
                kx: 2.966,
                a: .02
            },
            88: {
                x: 706.799,
                y: 1109.569,
                sx: 2.072,
                sy: .822
            },
            89: {
                x: 706.89,
                y: 1109.855,
                sx: 2.076,
                sy: .824,
                kx: 2.967,
                a: .01
            },
            90: {
                x: 706.899,
                y: 1110.189,
                sx: 2.079,
                sy: .825,
                a: 0
            },
            91: {
                x: 706.45,
                y: 1110.25,
                sx: 2.082,
                sy: .826
            }
        }).addTimedChild(instance23, 39, 60, {
            39: {
                x: 1353.3,
                y: 663.55,
                sx: .677,
                sy: .391,
                ky: 3.142,
                a: 0
            },
            40: {
                x: 1373.825,
                y: 658.786,
                sx: .701,
                sy: .407,
                a: .07
            },
            41: {
                x: 1393.647,
                y: 654.101,
                sx: .725,
                sy: .422,
                a: .13
            },
            42: {
                x: 1412.789,
                y: 649.666,
                sx: .747,
                sy: .436,
                a: .19
            },
            43: {
                x: 1431.249,
                y: 645.369,
                sx: .769,
                sy: .45,
                a: .25
            },
            44: {
                x: 1448.965,
                y: 641.211,
                sx: .791,
                sy: .464,
                a: .3
            },
            45: {
                x: 1466.051,
                y: 637.202,
                sx: .811,
                sy: .477,
                a: .36
            },
            46: {
                x: 1482.434,
                y: 633.372,
                sx: .83,
                sy: .489,
                a: .41
            },
            47: {
                x: 1498.045,
                y: 629.72,
                sx: .849,
                sy: .501,
                a: .46
            },
            48: {
                x: 1513.054,
                y: 626.198,
                sx: .867,
                sy: .513,
                a: .51
            },
            49: {
                x: 1527.281,
                y: 622.925,
                sx: .884,
                sy: .523,
                a: .55
            },
            50: {
                x: 1540.816,
                y: 619.741,
                sx: .9,
                sy: .534,
                a: .6
            },
            51: {
                x: 1553.719,
                y: 616.725,
                sx: .915,
                sy: .543,
                a: .64
            },
            52: {
                x: 1565.94,
                y: 613.859,
                sx: .93,
                sy: .553,
                a: .68
            },
            53: {
                x: 1577.418,
                y: 611.181,
                sx: .943,
                sy: .561,
                a: .71
            },
            54: {
                x: 1588.215,
                y: 608.673,
                sx: .956,
                sy: .57,
                a: .75
            },
            55: {
                x: 1598.31,
                y: 606.313,
                sx: .968,
                sy: .577,
                a: .78
            },
            56: {
                x: 1607.712,
                y: 604.102,
                sx: .979,
                sy: .584,
                a: .81
            },
            57: {
                x: 1616.382,
                y: 602.131,
                sx: .989,
                sy: .591,
                a: .84
            },
            58: {
                x: 1624.371,
                y: 600.228,
                sx: .999,
                sy: .597,
                a: .87
            },
            59: {
                x: 1631.688,
                y: 598.524,
                sx: 1.008,
                sy: .603,
                a: .89
            },
            60: {
                x: 1638.302,
                y: 596.929,
                sx: 1.016,
                sy: .608,
                a: .91
            },
            61: {
                x: 1644.215,
                y: 595.563,
                sx: 1.023,
                sy: .612,
                a: .93
            },
            62: {
                x: 1649.454,
                y: 594.366,
                sx: 1.029,
                sy: .616,
                a: .95
            },
            63: {
                x: 1653.984,
                y: 593.268,
                sx: 1.034,
                sy: .62,
                a: .96
            },
            64: {
                x: 1657.819,
                y: 592.429,
                sx: 1.039,
                sy: .622,
                a: .97
            },
            65: {
                x: 1660.924,
                y: 591.669,
                sx: 1.042,
                sy: .625,
                a: .98
            },
            66: {
                x: 1663.356,
                y: 591.147,
                sx: 1.045,
                sy: .627,
                a: .99
            },
            67: {
                x: 1665.086,
                y: 590.705,
                sx: 1.047,
                sy: .628,
                a: 1
            },
            68: {
                x: 1666.135,
                y: 590.442,
                sx: 1.049,
                sy: .629
            },
            69: {
                x: 1666.45,
                y: 590.3
            },
            70: {
                x: 1672.453,
                y: 590.264,
                sx: 1.056,
                a: .96
            },
            71: {
                x: 1678.481,
                y: 590.196,
                sx: 1.062,
                a: .93
            },
            72: {
                x: 1684.459,
                y: 590.119,
                sx: 1.069,
                a: .9
            },
            73: {
                x: 1690.487,
                y: 590.042,
                sx: 1.076,
                a: .86
            },
            74: {
                x: 1696.465,
                y: 590.024,
                sx: 1.082,
                a: .83
            },
            75: {
                x: 1702.418,
                y: 589.897,
                sx: 1.089,
                a: .79
            },
            76: {
                x: 1708.421,
                y: 589.87,
                sx: 1.096,
                a: .76
            },
            77: {
                x: 1714.424,
                y: 589.802,
                sx: 1.102,
                a: .72
            },
            78: {
                x: 1720.427,
                y: 589.725,
                sx: 1.109,
                a: .69
            },
            79: {
                x: 1726.43,
                y: 589.698,
                sx: 1.116,
                a: .66
            },
            80: {
                x: 1732.458,
                y: 589.58,
                sx: 1.122,
                a: .62
            },
            81: {
                x: 1738.411,
                y: 589.553,
                sx: 1.129,
                a: .59
            },
            82: {
                x: 1744.415,
                y: 589.476,
                sx: 1.136,
                a: .55
            },
            83: {
                x: 1750.417,
                y: 589.408,
                sx: 1.142,
                a: .52
            },
            84: {
                x: 1756.421,
                y: 589.331,
                sx: 1.149,
                a: .48
            },
            85: {
                x: 1762.449,
                y: 589.272,
                sx: 1.156,
                a: .45
            },
            86: {
                x: 1768.427,
                y: 589.186,
                sx: 1.162,
                a: .41
            },
            87: {
                x: 1774.405,
                y: 589.159,
                sx: 1.169,
                a: .38
            },
            88: {
                x: 1780.407,
                y: 589.1,
                sx: 1.176,
                a: .34
            },
            89: {
                x: 1786.361,
                y: 589.014,
                sx: 1.182,
                a: .31
            },
            90: {
                x: 1792.389,
                y: 588.987,
                sx: 1.189,
                a: .28
            },
            91: {
                x: 1798.367,
                y: 588.878,
                sx: 1.196,
                a: .24
            },
            92: {
                x: 1804.395,
                y: 588.841,
                sx: 1.202,
                sy: .628,
                a: .21
            },
            93: {
                x: 1810.373,
                y: 588.765,
                sx: 1.209,
                a: .17
            },
            94: {
                x: 1816.351,
                y: 588.706,
                sx: 1.216,
                a: .14
            },
            95: {
                x: 1822.379,
                y: 588.628,
                sx: 1.222,
                a: .1
            },
            96: {
                x: 1828.357,
                y: 588.592,
                sx: 1.229,
                a: .07
            },
            97: {
                x: 1834.411,
                y: 588.483,
                sx: 1.236,
                a: .04
            },
            98: {
                x: 1840.65,
                y: 588.35,
                sx: 1.242,
                a: 0
            }
        }).addTimedChild(instance22, 39, 60, {
            39: {
                x: 264.05,
                y: 653.75,
                sx: .567,
                sy: .429,
                a: 0
            },
            40: {
                x: 239.342,
                y: 649.345,
                sx: .594,
                sy: .444,
                a: .07
            },
            41: {
                x: 215.406,
                y: 645.083,
                sx: .62,
                sy: .458,
                a: .13
            },
            42: {
                x: 192.294,
                y: 640.972,
                sx: .646,
                sy: .471,
                a: .19
            },
            43: {
                x: 170.1,
                y: 636.972,
                sx: .67,
                sy: .484,
                a: .25
            },
            44: {
                x: 148.671,
                y: 633.155,
                sx: .694,
                sy: .497,
                a: .3
            },
            45: {
                x: 128.065,
                y: 629.49,
                sx: .716,
                sy: .509,
                a: .36
            },
            46: {
                x: 108.382,
                y: 626.036,
                sx: .738,
                sy: .521,
                a: .41
            },
            47: {
                x: 89.518,
                y: 622.655,
                sx: .759,
                sy: .532,
                a: .46
            },
            48: {
                x: 71.469,
                y: 619.385,
                sx: .779,
                sy: .542,
                a: .51
            },
            49: {
                x: 54.243,
                y: 616.357,
                sx: .798,
                sy: .553,
                a: .55
            },
            50: {
                x: 37.881,
                y: 613.451,
                sx: .816,
                sy: .562,
                a: .6
            },
            51: {
                x: 22.397,
                y: 610.676,
                sx: .833,
                sy: .571,
                a: .64
            },
            52: {
                x: 7.677,
                y: 608.034,
                sx: .849,
                sy: .58,
                a: .68
            },
            53: {
                x: -6.22,
                y: 605.593,
                sx: .864,
                sy: .588,
                a: .71
            },
            54: {
                x: -19.194,
                y: 603.265,
                sx: .878,
                sy: .596,
                a: .75
            },
            55: {
                x: -31.411,
                y: 601.118,
                sx: .892,
                sy: .603,
                a: .78
            },
            56: {
                x: -42.701,
                y: 599.083,
                sx: .904,
                sy: .61,
                a: .81
            },
            57: {
                x: -53.218,
                y: 597.199,
                sx: .916,
                sy: .616,
                a: .84
            },
            58: {
                x: -62.87,
                y: 595.498,
                sx: .926,
                sy: .621,
                a: .87
            },
            59: {
                x: -71.653,
                y: 593.899,
                sx: .936,
                sy: .627,
                a: .89
            },
            60: {
                x: -79.664,
                y: 592.491,
                sx: .945,
                sy: .631,
                a: .91
            },
            61: {
                x: -86.751,
                y: 591.185,
                sx: .953,
                sy: .635,
                a: .93
            },
            62: {
                x: -93.074,
                y: 590.081,
                sx: .96,
                sy: .639,
                a: .95
            },
            63: {
                x: -98.532,
                y: 589.119,
                sx: .966,
                sy: .642,
                a: .96
            },
            64: {
                x: -103.113,
                y: 588.299,
                sx: .971,
                sy: .645,
                a: .97
            },
            65: {
                x: -106.929,
                y: 587.651,
                sx: .975,
                sy: .647,
                a: .98
            },
            66: {
                x: -109.822,
                y: 587.074,
                sx: .978,
                sy: .649,
                a: .99
            },
            67: {
                x: -111.992,
                y: 586.71,
                sx: .98,
                sy: .65,
                a: 1
            },
            68: {
                x: -113.244,
                y: 586.497,
                sx: .982,
                sy: .651
            },
            69: {
                x: -113.6,
                y: 586.3
            },
            70: {
                x: -121.233,
                y: 586.525,
                sx: .991,
                a: .96
            },
            71: {
                x: -129.021,
                y: 586.669,
                sx: 1,
                sy: .65,
                a: .93
            },
            72: {
                x: -136.706,
                y: 586.853,
                sx: 1.009,
                sy: .649,
                a: .9
            },
            73: {
                x: -144.393,
                y: 586.946,
                sx: 1.018,
                sy: .648,
                a: .86
            },
            74: {
                x: -152.131,
                y: 587.139,
                sx: 1.027,
                sy: .647,
                a: .83
            },
            75: {
                x: -159.866,
                y: 587.324,
                sx: 1.036,
                a: .79
            },
            76: {
                x: -167.554,
                y: 587.458,
                sx: 1.045,
                sy: .646,
                a: .76
            },
            77: {
                x: -175.289,
                y: 587.642,
                sx: 1.054,
                sy: .645,
                a: .72
            },
            78: {
                x: -182.976,
                y: 587.827,
                sx: 1.063,
                sy: .644,
                a: .69
            },
            79: {
                x: -190.712,
                y: 587.961,
                sx: 1.072,
                sy: .643,
                a: .66
            },
            80: {
                x: -198.399,
                y: 588.163,
                sx: 1.081,
                a: .62
            },
            81: {
                x: -206.135,
                y: 588.297,
                sx: 1.09,
                sy: .642,
                a: .59
            },
            82: {
                x: -213.822,
                y: 588.482,
                sx: 1.099,
                sy: .641,
                a: .55
            },
            83: {
                x: -221.559,
                y: 588.675,
                sx: 1.108,
                sy: .64,
                a: .52
            },
            84: {
                x: -229.295,
                y: 588.809,
                sx: 1.117,
                sy: .639,
                a: .48
            },
            85: {
                x: -237.032,
                y: 588.994,
                sx: 1.126,
                a: .45
            },
            86: {
                x: -244.72,
                y: 589.178,
                sx: 1.135,
                sy: .638,
                a: .41
            },
            87: {
                x: -252.455,
                y: 589.312,
                sx: 1.144,
                sy: .637,
                a: .38
            },
            88: {
                x: -260.141,
                y: 589.464,
                sx: 1.153,
                sy: .636,
                a: .34
            },
            89: {
                x: -267.878,
                y: 589.599,
                sx: 1.161,
                sy: .635,
                a: .31
            },
            90: {
                x: -275.565,
                y: 589.783,
                sx: 1.17,
                a: .28
            },
            91: {
                x: -283.301,
                y: 589.967,
                sx: 1.179,
                sy: .634,
                a: .24
            },
            92: {
                x: -290.988,
                y: 590.111,
                sx: 1.188,
                sy: .633,
                a: .21
            },
            93: {
                x: -298.724,
                y: 590.295,
                sx: 1.197,
                sy: .632,
                a: .17
            },
            94: {
                x: -306.411,
                y: 590.479,
                sx: 1.206,
                a: .14
            },
            95: {
                x: -314.147,
                y: 590.631,
                sx: 1.215,
                sy: .631,
                a: .1
            },
            96: {
                x: -321.834,
                y: 590.816,
                sx: 1.224,
                sy: .63,
                a: .07
            },
            97: {
                x: -329.621,
                y: 590.95,
                sx: 1.233,
                sy: .629,
                a: .04
            },
            98: {
                x: -337.45,
                y: 591.1,
                sx: 1.242,
                sy: .628,
                a: 0
            }
        }).addTimedChild(instance21, 39, 53, {
            39: {
                x: 907.9,
                y: 958.7,
                sx: .458,
                sy: .521,
                kx: 3.796,
                ky: -.294,
                a: 0
            },
            40: {
                x: 909.115,
                y: 964.387,
                sx: .494,
                sy: .547,
                kx: 3.792,
                ky: -.29,
                a: .02
            },
            41: {
                x: 910.16,
                y: 970.093,
                sx: .529,
                sy: .572,
                kx: 3.787,
                ky: -.285,
                a: .05
            },
            42: {
                x: 911.156,
                y: 975.742,
                sx: .565,
                sy: .598,
                kx: 3.783,
                ky: -.281,
                a: .07
            },
            43: {
                x: 912.198,
                y: 981.463,
                sx: .601,
                sy: .624,
                kx: 3.778,
                ky: -.276,
                a: .09
            },
            44: {
                x: 913.025,
                y: 987.053,
                sx: .637,
                sy: .65,
                kx: 3.774,
                ky: -.272,
                a: .12
            },
            45: {
                x: 913.895,
                y: 992.615,
                sx: .673,
                sy: .676,
                kx: 3.769,
                ky: -.267,
                a: .14
            },
            46: {
                x: 914.612,
                y: 998.082,
                sx: .708,
                sy: .702,
                kx: 3.765,
                ky: -.263,
                a: .17
            },
            47: {
                x: 915.334,
                y: 1003.398,
                sx: .743,
                sy: .727,
                kx: 3.761,
                ky: -.259,
                a: .19
            },
            48: {
                x: 915.951,
                y: 1008.676,
                sx: .777,
                sy: .752,
                kx: 3.756,
                ky: -.254,
                a: .21
            },
            49: {
                x: 916.468,
                y: 1013.784,
                sx: .811,
                sy: .777,
                kx: 3.752,
                ky: -.25,
                a: .23
            },
            50: {
                x: 917.06,
                y: 1018.75,
                sx: .844,
                sy: .8,
                kx: 3.748,
                ky: -.246,
                a: .26
            },
            51: {
                x: 917.475,
                y: 1023.529,
                sx: .877,
                sy: .824,
                kx: 3.744,
                ky: -.242,
                a: .28
            },
            52: {
                x: 917.792,
                y: 1028.193,
                sx: .908,
                sy: .847,
                kx: 3.74,
                ky: -.238,
                a: .3
            },
            53: {
                x: 918.174,
                y: 1032.677,
                sx: .938,
                sy: .869,
                kx: 3.737,
                ky: -.235,
                a: .32
            },
            54: {
                x: 918.437,
                y: 1036.953,
                sx: .968,
                sy: .89,
                kx: 3.733,
                ky: -.231,
                a: .34
            },
            55: {
                x: 918.641,
                y: 1041.106,
                sx: .996,
                sy: .91,
                kx: 3.729,
                ky: -.227,
                a: .36
            },
            56: {
                x: 918.893,
                y: 1045.026,
                sx: 1.024,
                sy: .93,
                kx: 3.726,
                ky: -.224,
                a: .38
            },
            57: {
                x: 918.973,
                y: 1048.81,
                sx: 1.05,
                sy: .949,
                kx: 3.723,
                ky: -.221,
                a: .39
            },
            58: {
                x: 919.089,
                y: 1052.391,
                sx: 1.075,
                sy: .968,
                kx: 3.72,
                ky: -.218,
                a: .41
            },
            59: {
                x: 919.125,
                y: 1055.803,
                sx: 1.099,
                sy: .985,
                kx: 3.717,
                ky: -.215,
                a: .43
            },
            60: {
                x: 919.148,
                y: 1059.051,
                sx: 1.123,
                sy: 1.002,
                kx: 3.714,
                ky: -.212,
                a: .45
            },
            61: {
                x: 919.172,
                y: 1062.145,
                sx: 1.145,
                sy: 1.018,
                kx: 3.711,
                ky: -.209,
                a: .46
            },
            62: {
                x: 919.189,
                y: 1065.095,
                sx: 1.166,
                sy: 1.033,
                kx: 3.708,
                ky: -.206,
                a: .47
            },
            63: {
                x: 919.118,
                y: 1067.901,
                sx: 1.186,
                sy: 1.048,
                kx: 3.706,
                ky: -.204,
                a: .49
            },
            64: {
                x: 919,
                y: 1070.5,
                sx: 1.205,
                sy: 1.062,
                kx: 3.704,
                ky: -.202,
                a: .5
            },
            65: {
                x: 918.98,
                y: 1073.36,
                sx: 1.226,
                sy: 1.076,
                kx: 3.701,
                ky: -.199,
                a: .46
            },
            66: {
                x: 918.849,
                y: 1075.948,
                sx: 1.245,
                sy: 1.091,
                kx: 3.699,
                ky: -.197,
                a: .43
            },
            67: {
                x: 918.721,
                y: 1078.461,
                sx: 1.263,
                sy: 1.104,
                kx: 3.696,
                ky: -.194,
                a: .39
            },
            68: {
                x: 918.623,
                y: 1080.829,
                sx: 1.281,
                sy: 1.117,
                kx: 3.694,
                ky: -.192,
                a: .36
            },
            69: {
                x: 918.52,
                y: 1083.048,
                sx: 1.298,
                sy: 1.129,
                kx: 3.692,
                ky: -.19,
                a: .33
            },
            70: {
                x: 918.333,
                y: 1085.18,
                sx: 1.313,
                sy: 1.14,
                kx: 3.69,
                ky: -.188,
                a: .3
            },
            71: {
                x: 918.208,
                y: 1087.131,
                sx: 1.328,
                sy: 1.151,
                kx: 3.688,
                ky: -.186,
                a: .28
            },
            72: {
                x: 918.085,
                y: 1089.008,
                sx: 1.342,
                sy: 1.161,
                kx: 3.687,
                ky: -.185,
                a: .25
            },
            73: {
                x: 917.922,
                y: 1090.741,
                sx: 1.355,
                sy: 1.17,
                kx: 3.685,
                ky: -.183,
                a: .23
            },
            74: {
                x: 917.734,
                y: 1092.38,
                sx: 1.367,
                sy: 1.179,
                kx: 3.683,
                ky: -.181,
                a: .21
            },
            75: {
                x: 917.664,
                y: 1093.958,
                sx: 1.379,
                sy: 1.188,
                kx: 3.682,
                ky: -.18,
                a: .18
            },
            76: {
                x: 917.497,
                y: 1095.298,
                sx: 1.39,
                sy: 1.195,
                kx: 3.681,
                ky: -.179,
                a: .16
            },
            77: {
                x: 917.372,
                y: 1096.688,
                sx: 1.4,
                sy: 1.203,
                kx: 3.679,
                ky: -.177,
                a: .15
            },
            78: {
                x: 917.228,
                y: 1097.904,
                sx: 1.409,
                sy: 1.21,
                kx: 3.678,
                ky: -.176,
                a: .13
            },
            79: {
                x: 917.132,
                y: 1098.991,
                sx: 1.418,
                sy: 1.216,
                kx: 3.677,
                ky: -.175,
                a: .11
            },
            80: {
                x: 917.028,
                y: 1100.103,
                sx: 1.426,
                sy: 1.222,
                kx: 3.676,
                ky: -.174,
                a: .1
            },
            81: {
                x: 916.936,
                y: 1101.085,
                sx: 1.434,
                sy: 1.227,
                kx: 3.675,
                ky: -.173,
                a: .09
            },
            82: {
                x: 916.827,
                y: 1101.989,
                sx: 1.441,
                sy: 1.232,
                kx: 3.674,
                ky: -.172,
                a: .07
            },
            83: {
                x: 916.738,
                y: 1102.813,
                sx: 1.447,
                sy: 1.237,
                a: .06
            },
            84: {
                x: 916.595,
                y: 1103.578,
                sx: 1.453,
                sy: 1.241,
                kx: 3.673,
                ky: -.171,
                a: .05
            },
            85: {
                x: 916.52,
                y: 1104.26,
                sx: 1.459,
                sy: 1.245,
                kx: 3.672,
                ky: -.17,
                a: .04
            },
            86: {
                x: 916.481,
                y: 1104.86,
                sx: 1.464,
                sy: 1.249,
                a: .03
            },
            87: {
                x: 916.395,
                y: 1105.434,
                sx: 1.468,
                sy: 1.252,
                kx: 3.671,
                ky: -.169,
                a: .02
            },
            88: {
                x: 916.304,
                y: 1105.922,
                sx: 1.472,
                sy: 1.255
            },
            89: {
                x: 916.259,
                y: 1106.386,
                sx: 1.475,
                sy: 1.257,
                kx: 3.67,
                ky: -.168,
                a: .01
            },
            90: {
                x: 916.238,
                y: 1106.743,
                sx: 1.478,
                sy: 1.259,
                a: 0
            },
            91: {
                x: 916,
                y: 1107,
                sx: 1.481,
                sy: 1.261,
                kx: 3.669,
                ky: -.167
            }
        }).addTimedChild(instance20, 39, 60, {
            39: {
                x: 706.6,
                y: 1004.3,
                sx: 1.003,
                sy: .349,
                kx: 2.853,
                ky: -3.076,
                a: 0
            },
            40: {
                x: 708.202,
                y: 1007.632,
                sx: 1.05,
                sy: .372,
                kx: 2.862,
                a: .08
            },
            41: {
                x: 709.877,
                y: 1010.741,
                sx: 1.095,
                sy: .393,
                kx: 2.87,
                a: .15
            },
            42: {
                x: 711.544,
                y: 1013.782,
                sx: 1.138,
                sy: .414,
                kx: 2.878,
                a: .23
            },
            43: {
                x: 713.23,
                y: 1016.68,
                sx: 1.18,
                sy: .434,
                kx: 2.886,
                a: .29
            },
            44: {
                x: 714.902,
                y: 1019.494,
                sx: 1.219,
                sy: .452,
                kx: 2.894,
                a: .36
            },
            45: {
                x: 716.558,
                y: 1022.196,
                sx: 1.256,
                sy: .47,
                kx: 2.901,
                a: .42
            },
            46: {
                x: 718.233,
                y: 1024.684,
                sx: 1.292,
                sy: .487,
                kx: 2.908,
                a: .48
            },
            47: {
                x: 719.868,
                y: 1027.126,
                sx: 1.325,
                sy: .503,
                kx: 2.914,
                a: .54
            },
            48: {
                x: 721.486,
                y: 1029.369,
                sx: 1.357,
                sy: .519,
                kx: 2.92,
                a: .59
            },
            49: {
                x: 722.956,
                y: 1031.531,
                sx: 1.387,
                sy: .533,
                kx: 2.926,
                a: .64
            },
            50: {
                x: 724.426,
                y: 1033.529,
                sx: 1.415,
                sy: .546,
                kx: 2.931,
                a: .69
            },
            51: {
                x: 725.825,
                y: 1035.461,
                sx: 1.44,
                sy: .559,
                kx: 2.936,
                a: .73
            },
            52: {
                x: 727.172,
                y: 1037.181,
                sx: 1.464,
                sy: .57,
                kx: 2.941,
                a: .77
            },
            53: {
                x: 728.399,
                y: 1038.769,
                sx: 1.486,
                sy: .581,
                kx: 2.945,
                a: .8
            },
            54: {
                x: 729.561,
                y: 1040.253,
                sx: 1.507,
                sy: .59,
                kx: 2.949,
                a: .84
            },
            55: {
                x: 730.606,
                y: 1041.534,
                sx: 1.525,
                sy: .599,
                kx: 2.952,
                a: .87
            },
            56: {
                x: 731.595,
                y: 1042.756,
                sx: 1.541,
                sy: .607,
                kx: 2.956,
                a: .9
            },
            57: {
                x: 732.455,
                y: 1043.814,
                sx: 1.556,
                sy: .614,
                kx: 2.958,
                a: .92
            },
            58: {
                x: 733.257,
                y: 1044.723,
                sx: 1.568,
                sy: .62,
                kx: 2.961,
                a: .94
            },
            59: {
                x: 733.852,
                y: 1045.505,
                sx: 1.579,
                sy: .625,
                kx: 2.963,
                a: .96
            },
            60: {
                x: 734.408,
                y: 1046.159,
                sx: 1.587,
                sy: .629,
                kx: 2.964,
                a: .97
            },
            61: {
                x: 734.82,
                y: 1046.643,
                sx: 1.594,
                sy: .632,
                kx: 2.966,
                a: .98
            },
            62: {
                x: 735.147,
                y: 1046.988,
                sx: 1.599,
                sy: .634,
                kx: 2.967,
                a: .99
            },
            63: {
                x: 735.3,
                y: 1047.145,
                sx: 1.602,
                sy: .636,
                a: 1
            },
            64: {
                x: 735,
                y: 1047,
                sx: 1.603
            }
        }).addTimedChild(instance19, 39, 60, {
            39: {
                x: 811.4,
                y: 985.1,
                sx: 1.003,
                sy: .349,
                kx: 3.431,
                ky: -.065,
                a: 0
            },
            40: {
                x: 809.851,
                y: 988.392,
                sx: 1.05,
                sy: .372,
                kx: 3.422,
                a: .08
            },
            41: {
                x: 808.18,
                y: 991.588,
                sx: 1.095,
                sy: .393,
                kx: 3.413,
                a: .15
            },
            42: {
                x: 806.495,
                y: 994.618,
                sx: 1.138,
                sy: .414,
                kx: 3.405,
                a: .23
            },
            43: {
                x: 804.811,
                y: 997.535,
                sx: 1.18,
                sy: .434,
                kx: 3.397,
                a: .29
            },
            44: {
                x: 803.142,
                y: 1000.35,
                sx: 1.219,
                sy: .452,
                kx: 3.389,
                a: .36
            },
            45: {
                x: 801.499,
                y: 1002.961,
                sx: 1.256,
                sy: .47,
                kx: 3.382,
                a: .42
            },
            46: {
                x: 799.803,
                y: 1005.588,
                sx: 1.292,
                sy: .487,
                kx: 3.375,
                a: .48
            },
            47: {
                x: 798.182,
                y: 1007.976,
                sx: 1.325,
                sy: .503,
                kx: 3.369,
                a: .54
            },
            48: {
                x: 796.611,
                y: 1010.273,
                sx: 1.357,
                sy: .519,
                kx: 3.363,
                a: .59
            },
            49: {
                x: 795.142,
                y: 1012.45,
                sx: 1.387,
                sy: .533,
                kx: 3.357,
                a: .64
            },
            50: {
                x: 793.641,
                y: 1014.444,
                sx: 1.415,
                sy: .546,
                kx: 3.352,
                a: .69
            },
            51: {
                x: 792.21,
                y: 1016.383,
                sx: 1.44,
                sy: .559,
                kx: 3.347,
                a: .73
            },
            52: {
                x: 790.901,
                y: 1018.072,
                sx: 1.464,
                sy: .57,
                kx: 3.342,
                a: .77
            },
            53: {
                x: 789.674,
                y: 1019.686,
                sx: 1.486,
                sy: .581,
                kx: 3.338,
                a: .8
            },
            54: {
                x: 788.482,
                y: 1021.181,
                sx: 1.507,
                sy: .59,
                kx: 3.334,
                a: .84
            },
            55: {
                x: 787.425,
                y: 1022.509,
                sx: 1.525,
                sy: .599,
                kx: 3.331,
                a: .87
            },
            56: {
                x: 786.461,
                y: 1023.715,
                sx: 1.541,
                sy: .607,
                kx: 3.328,
                a: .9
            },
            57: {
                x: 785.571,
                y: 1024.742,
                sx: 1.555,
                sy: .614,
                kx: 3.325,
                a: .92
            },
            58: {
                x: 784.797,
                y: 1025.679,
                sx: 1.568,
                sy: .62,
                kx: 3.323,
                a: .94
            },
            59: {
                x: 784.186,
                y: 1026.401,
                sx: 1.579,
                sy: .625,
                kx: 3.32,
                a: .96
            },
            60: {
                x: 783.674,
                y: 1027.085,
                sx: 1.587,
                sy: .629,
                kx: 3.319,
                a: .97
            },
            61: {
                x: 783.223,
                y: 1027.603,
                sx: 1.594,
                sy: .632,
                kx: 3.318,
                a: .98
            },
            62: {
                x: 782.923,
                y: 1027.947,
                sx: 1.599,
                sy: .634,
                kx: 3.317,
                a: .99
            },
            63: {
                x: 782.753,
                y: 1028.087,
                sx: 1.602,
                sy: .636,
                kx: 3.316,
                a: 1
            },
            64: {
                x: 783,
                y: 1028,
                sx: 1.603
            }
        }).addTimedChild(instance18, 39, 60, {
            39: {
                x: 194,
                y: 697,
                sx: .831,
                sy: .774,
                a: 0
            },
            40: {
                x: 172.654,
                y: 694.489,
                sx: .857,
                sy: .797,
                a: .04
            },
            41: {
                x: 151.208,
                y: 691.96,
                sx: .883,
                sy: .82,
                a: .08
            },
            42: {
                x: 129.815,
                y: 689.46,
                sx: .909,
                sy: .843,
                a: .12
            },
            43: {
                x: 108.372,
                y: 686.93,
                sx: .935,
                sy: .866,
                a: .16
            },
            44: {
                x: 86.976,
                y: 684.43,
                sx: .961,
                sy: .889,
                a: .2
            },
            45: {
                x: 65.583,
                y: 681.89,
                sx: .987,
                sy: .912,
                a: .24
            },
            46: {
                x: 44.186,
                y: 679.361,
                sx: 1.013,
                sy: .935,
                a: .28
            },
            47: {
                x: 22.696,
                y: 676.861,
                sx: 1.04,
                sy: .958,
                a: .32
            },
            48: {
                x: 1.347,
                y: 674.332,
                sx: 1.066,
                sy: .981,
                a: .36
            },
            49: {
                x: -20.046,
                y: 671.831,
                sx: 1.092,
                sy: 1.004,
                a: .4
            },
            50: {
                x: -41.489,
                y: 669.292,
                sx: 1.118,
                sy: 1.027,
                a: .44
            },
            51: {
                x: -62.885,
                y: 666.752,
                sx: 1.144,
                sy: 1.05,
                a: .48
            },
            52: {
                x: -84.328,
                y: 664.262,
                sx: 1.17,
                sy: 1.073,
                a: .52
            },
            53: {
                x: -105.674,
                y: 661.712,
                sx: 1.196,
                sy: 1.097,
                a: .56
            },
            54: {
                x: -127.167,
                y: 659.183,
                sx: 1.223,
                sy: 1.12,
                a: .6
            },
            55: {
                x: -148.56,
                y: 656.682,
                sx: 1.249,
                sy: 1.143,
                a: .64
            },
            56: {
                x: -169.909,
                y: 654.153,
                sx: 1.275,
                sy: 1.166,
                a: .68
            },
            57: {
                x: -191.349,
                y: 651.653,
                sx: 1.301,
                sy: 1.189,
                a: .72
            },
            58: {
                x: -212.743,
                y: 649.113,
                sx: 1.327,
                sy: 1.212,
                a: .76
            },
            59: {
                x: -234.189,
                y: 646.584,
                sx: 1.353,
                sy: 1.235,
                a: .8
            },
            60: {
                x: -255.582,
                y: 644.083,
                sx: 1.379,
                sy: 1.258,
                a: .84
            },
            61: {
                x: -277.028,
                y: 641.554,
                sx: 1.406,
                sy: 1.281,
                a: .88
            },
            62: {
                x: -298.421,
                y: 639.054,
                sx: 1.432,
                sy: 1.304,
                a: .92
            },
            63: {
                x: -319.867,
                y: 636.514,
                sx: 1.458,
                sy: 1.327,
                a: .96
            },
            64: {
                x: -341,
                y: 634,
                sx: 1.484,
                sy: 1.35,
                a: 1
            }
        }).addTimedChild(instance42, 60, 20, {
            60: {
                x: -289.8,
                y: 608.35,
                sx: 1.047,
                sy: 1.047,
                r: -.557,
                a: 1
            },
            61: {
                x: -295.232,
                y: 607.579,
                sx: 1.082,
                sy: 1.082,
                r: -.568,
                a: .95
            },
            62: {
                x: -300.769,
                y: 606.874,
                sx: 1.117,
                sy: 1.117,
                r: -.578,
                a: .89
            },
            63: {
                x: -306.193,
                y: 606.33,
                sx: 1.151,
                sy: 1.152,
                r: -.589,
                a: .84
            },
            64: {
                x: -311.66,
                y: 605.805,
                sx: 1.186,
                sy: 1.186,
                r: -.6,
                a: .79
            },
            65: {
                x: -317.029,
                y: 605.431,
                sx: 1.221,
                sy: 1.221,
                r: -.611,
                a: .74
            },
            66: {
                x: -322.421,
                y: 605.126,
                sx: 1.256,
                sy: 1.256,
                r: -.622,
                a: .68
            },
            67: {
                x: -327.734,
                y: 604.95,
                sx: 1.291,
                sy: 1.291,
                r: -.633,
                a: .63
            },
            68: {
                x: -333.034,
                y: 604.793,
                sx: 1.325,
                sy: 1.325,
                r: -.644,
                a: .58
            },
            69: {
                x: -338.364,
                y: 604.837,
                sx: 1.36,
                sy: 1.36,
                r: -.655,
                a: .53
            },
            70: {
                x: -343.582,
                y: 604.949,
                sx: 1.395,
                sy: 1.395,
                r: -.666,
                a: .47
            },
            71: {
                x: -348.825,
                y: 605.143,
                sx: 1.429,
                sy: 1.43,
                r: -.677,
                a: .42
            },
            72: {
                x: -353.975,
                y: 605.451,
                sx: 1.464,
                sy: 1.464,
                r: -.687,
                a: .37
            },
            73: {
                x: -359.082,
                y: 605.815,
                sx: 1.499,
                sy: 1.499,
                r: -.698,
                a: .32
            },
            74: {
                x: -364.187,
                y: 606.296,
                sx: 1.534,
                sy: 1.534,
                r: -.709,
                a: .26
            },
            75: {
                x: -369.263,
                y: 606.869,
                sx: 1.568,
                sy: 1.569,
                r: -.72,
                a: .21
            },
            76: {
                x: -374.301,
                y: 607.518,
                sx: 1.603,
                sy: 1.603,
                r: -.731,
                a: .16
            },
            77: {
                x: -379.282,
                y: 608.267,
                sx: 1.638,
                sy: 1.638,
                r: -.742,
                a: .11
            },
            78: {
                x: -384.217,
                y: 609.116,
                sx: 1.673,
                sy: 1.673,
                r: -.753,
                a: .05
            },
            79: {
                x: -390.25,
                y: 609.35,
                sx: 1.708,
                sy: 1.708,
                r: -.764,
                a: 0
            }
        }).addTimedChild(instance41, 60, 20, {
            60: {
                x: 1593.45,
                y: 460.05,
                sx: 1.08,
                sy: 1.08,
                r: .767,
                a: 1
            },
            61: {
                x: 1594.486,
                y: 454.738,
                sx: 1.099,
                sy: 1.099,
                r: .758,
                a: .95
            },
            62: {
                x: 1595.486,
                y: 449.464,
                sx: 1.119,
                sy: 1.119,
                r: .749,
                a: .89
            },
            63: {
                x: 1596.412,
                y: 444.219,
                sx: 1.138,
                sy: 1.138,
                r: .74,
                a: .84
            },
            64: {
                x: 1597.333,
                y: 438.945,
                sx: 1.158,
                sy: 1.158,
                r: .731,
                a: .79
            },
            65: {
                x: 1598.112,
                y: 433.769,
                sx: 1.177,
                sy: 1.177,
                r: .722,
                a: .74
            },
            66: {
                x: 1598.954,
                y: 428.516,
                sx: 1.196,
                sy: 1.196,
                r: .713,
                a: .68
            },
            67: {
                x: 1599.791,
                y: 423.338,
                sx: 1.216,
                sy: 1.216,
                r: .704,
                a: .63
            },
            68: {
                x: 1600.544,
                y: 418.256,
                sx: 1.235,
                sy: 1.235,
                r: .695,
                a: .58
            },
            69: {
                x: 1601.187,
                y: 413.09,
                sx: 1.254,
                sy: 1.254,
                r: .687,
                a: .53
            },
            70: {
                x: 1601.881,
                y: 408.007,
                sx: 1.274,
                sy: 1.274,
                r: .678,
                a: .47
            },
            71: {
                x: 1602.496,
                y: 402.931,
                sx: 1.293,
                sy: 1.293,
                r: .669,
                a: .42
            },
            72: {
                x: 1603.109,
                y: 397.888,
                sx: 1.312,
                sy: 1.312,
                r: .66,
                a: .37
            },
            73: {
                x: 1603.698,
                y: 392.895,
                sx: 1.332,
                sy: 1.332,
                r: .651,
                a: .32
            },
            74: {
                x: 1604.203,
                y: 387.954,
                sx: 1.351,
                sy: 1.351,
                r: .642,
                a: .26
            },
            75: {
                x: 1604.636,
                y: 382.988,
                sx: 1.37,
                sy: 1.37,
                r: .633,
                a: .21
            },
            76: {
                x: 1605.053,
                y: 378.104,
                sx: 1.39,
                sy: 1.39,
                r: .624,
                a: .16
            },
            77: {
                x: 1605.553,
                y: 373.15,
                sx: 1.409,
                sy: 1.409,
                r: .615,
                a: .11
            },
            78: {
                x: 1605.939,
                y: 368.378,
                sx: 1.428,
                sy: 1.428,
                r: .606,
                a: .05
            },
            79: {
                x: 1606.55,
                y: 362.35,
                sx: 1.448,
                sy: 1.448,
                r: .597,
                a: 0
            }
        }).addTimedChild(instance40, 60, 20, {
            60: {
                x: 1533.4,
                y: 951.3,
                sx: 1.016,
                sy: 1.016,
                kx: 4.268,
                ky: 2.015,
                a: 1
            },
            61: {
                x: 1538.225,
                y: 949.176,
                sx: 1.05,
                sy: 1.05,
                kx: 4.279,
                ky: 2.004,
                a: .95
            },
            62: {
                x: 1543.081,
                y: 946.906,
                sx: 1.084,
                sy: 1.084,
                kx: 4.29,
                ky: 1.993,
                a: .89
            },
            63: {
                x: 1547.773,
                y: 944.503,
                sx: 1.117,
                sy: 1.117,
                kx: 4.301,
                ky: 1.982,
                a: .84
            },
            64: {
                x: 1552.488,
                y: 942.079,
                sx: 1.151,
                sy: 1.151,
                kx: 4.312,
                ky: 1.972,
                a: .79
            },
            65: {
                x: 1557.09,
                y: 939.487,
                sx: 1.185,
                sy: 1.185,
                kx: 4.323,
                ky: 1.961,
                a: .74
            },
            66: {
                x: 1561.679,
                y: 936.967,
                sx: 1.218,
                sy: 1.219,
                kx: 4.333,
                ky: 1.95,
                a: .68
            },
            67: {
                x: 1566.043,
                y: 934.277,
                sx: 1.252,
                sy: 1.252,
                kx: 4.344,
                ky: 1.939,
                a: .63
            },
            68: {
                x: 1570.499,
                y: 931.619,
                sx: 1.286,
                sy: 1.286,
                kx: 4.355,
                ky: 1.928,
                a: .58
            },
            69: {
                x: 1574.758,
                y: 928.832,
                sx: 1.32,
                sy: 1.32,
                kx: 4.366,
                ky: 1.917,
                a: .53
            },
            70: {
                x: 1579.046,
                y: 926.032,
                sx: 1.353,
                sy: 1.353,
                kx: 4.377,
                ky: 1.906,
                a: .47
            },
            71: {
                x: 1583.144,
                y: 923.177,
                sx: 1.387,
                sy: 1.387,
                kx: 4.388,
                ky: 1.895,
                a: .42
            },
            72: {
                x: 1587.238,
                y: 920.258,
                sx: 1.421,
                sy: 1.421,
                kx: 4.399,
                ky: 1.884,
                a: .37
            },
            73: {
                x: 1591.182,
                y: 917.213,
                sx: 1.455,
                sy: 1.455,
                kx: 4.41,
                ky: 1.874,
                a: .32
            },
            74: {
                x: 1595.134,
                y: 914.194,
                sx: 1.488,
                sy: 1.488,
                kx: 4.421,
                ky: 1.863,
                a: .26
            },
            75: {
                x: 1598.942,
                y: 911.006,
                sx: 1.522,
                sy: 1.522,
                kx: 4.431,
                ky: 1.852,
                a: .21
            },
            76: {
                x: 1602.697,
                y: 907.903,
                sx: 1.556,
                sy: 1.556,
                kx: 4.442,
                ky: 1.841,
                a: .16
            },
            77: {
                x: 1606.384,
                y: 904.708,
                sx: 1.589,
                sy: 1.589,
                kx: 4.453,
                ky: 1.83,
                a: .11
            },
            78: {
                x: 1609.96,
                y: 901.445,
                sx: 1.623,
                sy: 1.623,
                kx: 4.464,
                ky: 1.819,
                a: .05
            },
            79: {
                x: 1615,
                y: 897.95,
                sx: 1.657,
                sy: 1.657,
                kx: 4.475,
                ky: 1.808,
                a: 0
            }
        }).addTimedChild(instance39, 60, 20, {
            60: {
                x: 101.5,
                y: 1156.9,
                sx: .983,
                sy: .983,
                r: -2.026,
                a: 1
            },
            61: {
                x: 98.966,
                y: 1161.165,
                sx: 1.001,
                sy: 1.001,
                r: -2.035,
                a: .95
            },
            62: {
                x: 96.475,
                y: 1165.328,
                sx: 1.019,
                sy: 1.019,
                r: -2.044,
                a: .89
            },
            63: {
                x: 94.05,
                y: 1169.586,
                sx: 1.036,
                sy: 1.036,
                r: -2.053,
                a: .84
            },
            64: {
                x: 91.656,
                y: 1173.839,
                sx: 1.054,
                sy: 1.054,
                r: -2.062,
                a: .79
            },
            65: {
                x: 89.251,
                y: 1178.056,
                sx: 1.071,
                sy: 1.071,
                r: -2.071,
                a: .74
            },
            66: {
                x: 86.908,
                y: 1182.264,
                sx: 1.089,
                sy: 1.089,
                r: -2.08,
                a: .68
            },
            67: {
                x: 84.705,
                y: 1186.417,
                sx: 1.107,
                sy: 1.107,
                r: -2.089,
                a: .63
            },
            68: {
                x: 82.397,
                y: 1190.567,
                sx: 1.124,
                sy: 1.124,
                r: -2.097,
                a: .58
            },
            69: {
                x: 80.216,
                y: 1194.761,
                sx: 1.142,
                sy: 1.142,
                r: -2.106,
                a: .53
            },
            70: {
                x: 78.041,
                y: 1198.896,
                sx: 1.16,
                sy: 1.16,
                r: -2.115,
                a: .47
            },
            71: {
                x: 75.923,
                y: 1203.011,
                sx: 1.177,
                sy: 1.177,
                r: -2.124,
                a: .42
            },
            72: {
                x: 73.814,
                y: 1207.119,
                sx: 1.195,
                sy: 1.195,
                r: -2.133,
                a: .37
            },
            73: {
                x: 71.793,
                y: 1211.254,
                sx: 1.212,
                sy: 1.212,
                r: -2.142,
                a: .32
            },
            74: {
                x: 69.812,
                y: 1215.316,
                sx: 1.23,
                sy: 1.23,
                r: -2.151,
                a: .26
            },
            75: {
                x: 67.889,
                y: 1219.455,
                sx: 1.248,
                sy: 1.248,
                r: -2.16,
                a: .21
            },
            76: {
                x: 65.936,
                y: 1223.508,
                sx: 1.265,
                sy: 1.265,
                r: -2.169,
                a: .16
            },
            77: {
                x: 64.022,
                y: 1227.598,
                sx: 1.283,
                sy: 1.283,
                r: -2.178,
                a: .11
            },
            78: {
                x: 62.225,
                y: 1231.6,
                sx: 1.3,
                sy: 1.301,
                r: -2.187,
                a: .05
            },
            79: {
                x: 59.9,
                y: 1236.45,
                sx: 1.318,
                sy: 1.318,
                r: -2.196,
                a: 0
            }
        }).addTimedChild(instance44, 64, 35, {
            64: {
                a: 0
            },
            65: {
                a: .06
            },
            66: {
                a: .13
            },
            67: {
                a: .19
            },
            68: {
                a: .25
            },
            69: {
                a: .31
            },
            70: {
                a: .38
            },
            71: {
                a: .44
            },
            72: {
                a: .5
            },
            73: {
                a: .56
            },
            74: {
                a: .63
            },
            75: {
                a: .69
            },
            76: {
                a: .75
            },
            77: {
                a: .81
            },
            78: {
                a: .88
            },
            79: {
                a: .94
            },
            80: {
                a: 1
            }
        }).addTimedChild(instance43, 64, 35, {
            64: {
                x: 185,
                y: -70,
                sx: .7,
                sy: .8,
                a: 0
            },
            65: {
                x: 171.752,
                y: -71.243,
                sx: .718,
                sy: .814,
                a: .09
            },
            66: {
                x: 158.459,
                y: -72.485,
                sx: .736,
                sy: .827,
                a: .18
            },
            67: {
                x: 145.211,
                y: -73.779,
                sx: .755,
                sy: .841,
                a: .27
            },
            68: {
                x: 131.918,
                y: -75.072,
                sx: .773,
                sy: .854,
                a: .36
            },
            69: {
                x: 118.67,
                y: -76.314,
                sx: .791,
                sy: .868,
                a: .45
            },
            70: {
                x: 105.377,
                y: -77.559,
                sx: .809,
                sy: .882,
                a: .55
            },
            71: {
                x: 92.082,
                y: -78.801,
                sx: .827,
                sy: .895,
                a: .64
            },
            72: {
                x: 78.789,
                y: -80.095,
                sx: .845,
                sy: .909,
                a: .73
            },
            73: {
                x: 65.591,
                y: -81.388,
                sx: .864,
                sy: .923,
                a: .82
            },
            74: {
                x: 52.298,
                y: -82.631,
                sx: .882,
                sy: .936,
                a: .91
            },
            75: {
                x: 39,
                y: -84,
                sx: .9,
                sy: .95,
                a: 1
            },
            76: {
                x: 35.888,
                y: -85.091,
                sx: .904,
                sy: .952
            },
            77: {
                x: 32.676,
                y: -86.133,
                sx: .909,
                sy: .954
            },
            78: {
                x: 29.515,
                y: -87.226,
                sx: .913,
                sy: .956
            },
            79: {
                x: 26.303,
                y: -88.318,
                sx: .917,
                sy: .959
            },
            80: {
                x: 23.091,
                y: -89.41,
                sx: .922,
                sy: .961
            },
            81: {
                x: 19.93,
                y: -90.502,
                sx: .926,
                sy: .963
            },
            82: {
                x: 16.769,
                y: -91.545,
                sx: .93,
                sy: .965
            },
            83: {
                x: 13.557,
                y: -92.637,
                sx: .935,
                sy: .967
            },
            84: {
                x: 10.395,
                y: -93.729,
                sx: .939,
                sy: .97
            },
            85: {
                x: 7.234,
                y: -94.821,
                sx: .943,
                sy: .972
            },
            86: {
                x: 4.072,
                y: -95.914,
                sx: .948,
                sy: .974
            },
            87: {
                x: .811,
                y: -96.956,
                sx: .952,
                sy: .976
            },
            88: {
                x: -2.351,
                y: -98.048,
                sx: .956,
                sy: .978
            },
            89: {
                x: -5.513,
                y: -99.19,
                sx: .961,
                sy: .98
            },
            90: {
                x: -8.724,
                y: -100.233,
                sx: .965,
                sy: .983
            },
            91: {
                x: -11.886,
                y: -101.325,
                sx: .97,
                sy: .985
            },
            92: {
                x: -15.048,
                y: -102.367,
                sx: .974,
                sy: .987
            },
            93: {
                x: -18.209,
                y: -103.459,
                sx: .978,
                sy: .989
            },
            94: {
                x: -21.421,
                y: -104.602,
                sx: .983,
                sy: .991
            },
            95: {
                x: -24.632,
                y: -105.644,
                sx: .987,
                sy: .993
            },
            96: {
                x: -27.794,
                y: -106.736,
                sx: .991,
                sy: .996
            },
            97: {
                x: -31.005,
                y: -107.778,
                sx: .996,
                sy: .998
            },
            98: {
                x: -34,
                y: -109,
                sx: 1,
                sy: 1
            }
        }).addTimedChild(instance6, 0, 99, {
            0: {
                x: 241,
                y: 485,
                sx: 1,
                sy: 1
            },
            9: {
                x: 242
            },
            10: {
                x: 236.509,
                y: 482.531,
                sx: 1.013,
                sy: 1.013
            },
            11: {
                x: 231.315,
                y: 480.105,
                sx: 1.025,
                sy: 1.025
            },
            12: {
                x: 226.604,
                y: 477.893,
                sx: 1.036,
                sy: 1.036
            },
            13: {
                x: 222.224,
                y: 475.844,
                sx: 1.046,
                sy: 1.046
            },
            14: {
                x: 218.184,
                y: 474.023,
                sx: 1.055,
                sy: 1.055
            },
            15: {
                x: 214.576,
                y: 472.316,
                sx: 1.064,
                sy: 1.064
            },
            16: {
                x: 211.304,
                y: 470.779,
                sx: 1.071,
                sy: 1.071
            },
            17: {
                x: 208.467,
                y: 469.463,
                sx: 1.078,
                sy: 1.078
            },
            18: {
                x: 205.967,
                y: 468.318,
                sx: 1.084,
                sy: 1.084
            },
            19: {
                x: 203.848,
                y: 467.336,
                sx: 1.089,
                sy: 1.089
            },
            20: {
                x: 202.166,
                y: 466.525,
                sx: 1.093,
                sy: 1.093
            },
            21: {
                x: 200.869,
                y: 465.934,
                sx: 1.096,
                sy: 1.096
            },
            22: {
                x: 199.905,
                y: 465.507,
                sx: 1.098,
                sy: 1.098
            },
            23: {
                x: 199.33,
                y: 465.209,
                sx: 1.099,
                sy: 1.099
            },
            24: {
                x: 199,
                y: 465,
                sx: 1.1,
                sy: 1.1
            },
            25: {
                x: 199.12,
                y: 464.379
            },
            26: {
                x: 199.297,
                y: 462.159,
                sx: 1.099,
                sy: 1.099
            },
            27: {
                x: 199.622,
                y: 458.518
            },
            28: {
                x: 200.046,
                y: 453.406,
                sx: 1.098,
                sy: 1.098
            },
            29: {
                x: 200.624,
                y: 446.838,
                sx: 1.096,
                sy: 1.096
            },
            30: {
                x: 201.301,
                y: 438.85,
                sx: 1.095,
                sy: 1.095
            },
            31: {
                x: 202.079,
                y: 429.298,
                sx: 1.093,
                sy: 1.093
            },
            32: {
                x: 203.009,
                y: 418.382,
                sx: 1.091,
                sy: 1.091
            },
            33: {
                x: 204.084,
                y: 405.989,
                sx: 1.089,
                sy: 1.089
            },
            34: {
                x: 205.263,
                y: 392.089,
                sx: 1.086,
                sy: 1.086
            },
            35: {
                x: 206.544,
                y: 376.776,
                sx: 1.083,
                sy: 1.083
            },
            36: {
                x: 207.973,
                y: 359.992,
                sx: 1.08,
                sy: 1.08
            },
            37: {
                x: 209.501,
                y: 341.787,
                sx: 1.077,
                sy: 1.077
            },
            38: {
                x: 211.129,
                y: 322.069,
                sx: 1.073,
                sy: 1.073
            },
            39: {
                x: 212.913,
                y: 300.895,
                sx: 1.069,
                sy: 1.069
            },
            40: {
                x: 214.842,
                y: 278.292,
                sx: 1.065,
                sy: 1.065
            },
            41: {
                x: 216.875,
                y: 254.184,
                sx: 1.06,
                sy: 1.06
            },
            42: {
                x: 219.056,
                y: 228.654,
                sx: 1.055,
                sy: 1.055
            },
            43: {
                x: 221.336,
                y: 201.655,
                sx: 1.05,
                sy: 1.05
            },
            44: {
                x: 223.721,
                y: 173.198,
                sx: 1.045,
                sy: 1.045
            },
            45: {
                x: 226.3,
                y: 143.264,
                sx: 1.039,
                sy: 1.039
            },
            46: {
                x: 228.935,
                y: 111.874,
                sx: 1.033,
                sy: 1.033
            },
            47: {
                x: 231.67,
                y: 79.02,
                sx: 1.027,
                sy: 1.027
            },
            48: {
                x: 234.601,
                y: 44.738,
                sx: 1.021,
                sy: 1.021
            },
            49: {
                x: 237.587,
                y: 8.95,
                sx: 1.014,
                sy: 1.014
            },
            50: {
                x: 240.77,
                y: -28.259,
                sx: 1.007,
                sy: 1.007
            },
            51: {
                x: 244,
                y: -67,
                sx: 1,
                sy: 1
            }
        }).addTimedChild(instance5, 0, 99, {
            0: {
                x: 307,
                y: 560,
                sx: 1,
                sy: 1
            },
            10: {
                x: 302.194,
                y: 557.995,
                sx: 1.013,
                sy: 1.013
            },
            11: {
                x: 297.631,
                y: 556.111,
                sx: 1.025,
                sy: 1.025
            },
            12: {
                x: 293.391,
                y: 554.282,
                sx: 1.036,
                sy: 1.036
            },
            13: {
                x: 289.575,
                y: 552.707,
                sx: 1.046,
                sy: 1.046
            },
            14: {
                x: 285.992,
                y: 551.178,
                sx: 1.055,
                sy: 1.055
            },
            15: {
                x: 282.833,
                y: 549.862,
                sx: 1.064,
                sy: 1.064
            },
            16: {
                x: 279.951,
                y: 548.641,
                sx: 1.071,
                sy: 1.071
            },
            17: {
                x: 277.398,
                y: 547.567,
                sx: 1.078,
                sy: 1.078
            },
            18: {
                x: 275.224,
                y: 546.656,
                sx: 1.084,
                sy: 1.084
            },
            19: {
                x: 273.373,
                y: 545.84,
                sx: 1.089,
                sy: 1.089
            },
            20: {
                x: 271.85,
                y: 545.229,
                sx: 1.093,
                sy: 1.093
            },
            21: {
                x: 270.656,
                y: 544.722,
                sx: 1.096,
                sy: 1.096
            },
            22: {
                x: 269.835,
                y: 544.361,
                sx: 1.098,
                sy: 1.098
            },
            23: {
                x: 269.297,
                y: 544.163,
                sx: 1.099,
                sy: 1.099
            },
            24: {
                x: 269,
                y: 544,
                sx: 1.1,
                sy: 1.1
            },
            25: {
                x: 269.159,
                y: 543.317
            },
            26: {
                x: 269.31,
                y: 541.109,
                sx: 1.099,
                sy: 1.099
            },
            27: {
                x: 269.592,
                y: 537.427
            },
            28: {
                x: 269.954,
                y: 532.296,
                sx: 1.098,
                sy: 1.098
            },
            29: {
                x: 270.454,
                y: 525.69,
                sx: 1.096,
                sy: 1.096
            },
            30: {
                x: 271.035,
                y: 517.551,
                sx: 1.095,
                sy: 1.095
            },
            31: {
                x: 271.75,
                y: 508.013,
                sx: 1.093,
                sy: 1.093
            },
            32: {
                x: 272.499,
                y: 496.992,
                sx: 1.091,
                sy: 1.091
            },
            33: {
                x: 273.425,
                y: 484.488,
                sx: 1.089,
                sy: 1.089
            },
            34: {
                x: 274.438,
                y: 470.552,
                sx: 1.086,
                sy: 1.086
            },
            35: {
                x: 275.536,
                y: 455.082,
                sx: 1.083,
                sy: 1.083
            },
            36: {
                x: 276.815,
                y: 438.172,
                sx: 1.08,
                sy: 1.08
            },
            37: {
                x: 278.123,
                y: 419.77,
                sx: 1.077,
                sy: 1.077
            },
            38: {
                x: 279.566,
                y: 399.944,
                sx: 1.073,
                sy: 1.073
            },
            39: {
                x: 281.098,
                y: 378.627,
                sx: 1.069,
                sy: 1.069
            },
            40: {
                x: 282.755,
                y: 355.826,
                sx: 1.065,
                sy: 1.065
            },
            41: {
                x: 284.551,
                y: 331.535,
                sx: 1.06,
                sy: 1.06
            },
            42: {
                x: 286.377,
                y: 305.811,
                sx: 1.055,
                sy: 1.055
            },
            43: {
                x: 288.383,
                y: 278.604,
                sx: 1.05,
                sy: 1.05
            },
            44: {
                x: 290.478,
                y: 249.965,
                sx: 1.045,
                sy: 1.045
            },
            45: {
                x: 292.653,
                y: 219.776,
                sx: 1.039,
                sy: 1.039
            },
            46: {
                x: 294.962,
                y: 188.162,
                sx: 1.034,
                sy: 1.033
            },
            47: {
                x: 297.352,
                y: 155.057,
                sx: 1.027,
                sy: 1.027
            },
            48: {
                x: 299.875,
                y: 120.52,
                sx: 1.021,
                sy: 1.021
            },
            49: {
                x: 302.484,
                y: 84.5,
                sx: 1.014,
                sy: 1.014
            },
            50: {
                x: 305.168,
                y: 46.988,
                sx: 1.007,
                sy: 1.007
            },
            51: {
                x: 308,
                y: 8,
                sx: 1,
                sy: 1
            }
        }).addTimedChild(instance38, 51, 48, {
            51: {
                x: 450,
                y: 684,
                r: 0,
                a: 0
            },
            52: {
                x: 449.51,
                y: 683.505,
                r: -.002,
                a: .05
            },
            53: {
                x: 449.037,
                y: 683.013,
                r: -.003,
                a: .09
            },
            54: {
                x: 448.504,
                y: 682.479,
                r: -.005,
                a: .14
            },
            55: {
                x: 448.024,
                y: 681.977,
                r: -.007,
                a: .19
            },
            56: {
                x: 447.545,
                y: 681.475,
                r: -.008,
                a: .24
            },
            57: {
                x: 447.054,
                y: 680.979,
                r: -.01,
                a: .29
            },
            58: {
                x: 446.525,
                y: 680.427,
                r: -.011,
                a: .33
            },
            59: {
                x: 446.035,
                y: 679.932,
                r: -.013,
                a: .38
            },
            60: {
                x: 445.548,
                y: 679.42,
                r: -.015,
                a: .43
            },
            61: {
                x: 445.068,
                y: 678.968,
                r: -.016,
                a: .48
            },
            62: {
                x: 444.571,
                y: 678.412,
                r: -.018,
                a: .52
            },
            63: {
                x: 444.085,
                y: 677.9,
                r: -.02,
                a: .57
            },
            64: {
                x: 443.598,
                y: 677.387,
                r: -.021,
                a: .62
            },
            65: {
                x: 443.095,
                y: 676.921,
                r: -.023,
                a: .67
            },
            66: {
                x: 442.558,
                y: 676.359,
                r: -.025,
                a: .71
            },
            67: {
                x: 442.104,
                y: 675.843,
                r: -.026,
                a: .76
            },
            68: {
                x: 441.611,
                y: 675.37,
                r: -.028,
                a: .81
            },
            69: {
                x: 441.157,
                y: 674.854,
                r: -.03,
                a: .86
            },
            70: {
                x: 440.614,
                y: 674.331,
                r: -.031,
                a: .91
            },
            71: {
                x: 440.163,
                y: 673.848,
                r: -.033,
                a: .95
            },
            72: {
                x: 439.6,
                y: 673.25,
                r: -.034,
                a: 1
            },
            73: {
                x: 440.05,
                y: 672.873,
                r: -.033
            },
            74: {
                x: 440.446,
                y: 672.514,
                r: -.032
            },
            75: {
                x: 440.852,
                y: 672.147,
                r: -.03
            },
            76: {
                x: 441.218,
                y: 671.774,
                r: -.029
            },
            77: {
                x: 441.618,
                y: 671.447,
                r: -.028
            },
            78: {
                x: 442.017,
                y: 671.071,
                r: -.027
            },
            79: {
                x: 442.374,
                y: 670.704,
                r: -.025
            },
            80: {
                x: 442.773,
                y: 670.378,
                r: -.024
            },
            81: {
                x: 443.173,
                y: 670.001,
                r: -.023
            },
            82: {
                x: 443.572,
                y: 669.624,
                r: -.021
            },
            83: {
                x: 443.972,
                y: 669.297,
                r: -.02
            },
            84: {
                x: 444.365,
                y: 668.91,
                r: -.019
            },
            85: {
                x: 444.764,
                y: 668.534,
                r: -.017
            },
            86: {
                x: 445.167,
                y: 668.24,
                r: -.016
            },
            87: {
                x: 445.567,
                y: 667.863,
                r: -.015
            },
            88: {
                x: 446.01,
                y: 667.526,
                r: -.013
            },
            89: {
                x: 446.402,
                y: 667.139,
                r: -.012
            },
            90: {
                x: 446.795,
                y: 666.802,
                r: -.011
            },
            91: {
                x: 447.188,
                y: 666.465,
                r: -.009
            },
            92: {
                x: 447.574,
                y: 666.068,
                r: -.008
            },
            93: {
                x: 447.967,
                y: 665.681,
                r: -.007
            },
            94: {
                x: 448.36,
                y: 665.394,
                r: -.005
            },
            95: {
                x: 448.796,
                y: 664.997,
                r: -.004
            },
            96: {
                x: 449.182,
                y: 664.65,
                r: -.003
            },
            97: {
                x: 449.568,
                y: 664.303,
                r: -.001
            },
            98: {
                x: 450,
                y: 664,
                r: 0
            }
        }).addTimedChild(instance37, 51, 48, {
            51: {
                x: 258,
                y: 184,
                sx: .77,
                sy: .77,
                r: 0,
                a: 0
            },
            52: {
                x: 256.74,
                y: 183.927,
                r: -.002,
                a: .05
            },
            53: {
                x: 255.443,
                y: 183.702,
                r: -.003,
                a: .09
            },
            54: {
                x: 254.093,
                y: 183.531,
                r: -.005,
                a: .14
            },
            55: {
                x: 252.793,
                y: 183.303,
                r: -.007,
                a: .19
            },
            56: {
                x: 251.442,
                y: 183.175,
                r: -.008,
                a: .24
            },
            57: {
                x: 250.188,
                y: 182.951,
                r: -.01,
                a: .29
            },
            58: {
                x: 248.888,
                y: 182.773,
                r: -.011,
                a: .33
            },
            59: {
                x: 247.534,
                y: 182.599,
                r: -.013,
                a: .38
            },
            60: {
                x: 246.23,
                y: 182.418,
                r: -.015,
                a: .43
            },
            61: {
                x: 244.929,
                y: 182.24,
                r: -.016,
                a: .48
            },
            62: {
                x: 243.617,
                y: 182.06,
                r: -.018,
                a: .52
            },
            63: {
                x: 242.263,
                y: 181.879,
                r: -.02,
                a: .57
            },
            64: {
                x: 240.958,
                y: 181.699,
                r: -.021,
                a: .62
            },
            65: {
                x: 239.647,
                y: 181.519,
                r: -.023,
                a: .67
            },
            66: {
                x: 238.342,
                y: 181.388,
                r: -.025,
                a: .71
            },
            67: {
                x: 237.081,
                y: 181.159,
                r: -.026,
                a: .76
            },
            68: {
                x: 235.772,
                y: 181.025,
                r: -.028,
                a: .81
            },
            69: {
                x: 234.461,
                y: 180.795,
                r: -.03,
                a: .86
            },
            70: {
                x: 233.152,
                y: 180.662,
                r: -.031,
                a: .91
            },
            71: {
                x: 231.89,
                y: 180.475,
                r: -.033,
                a: .95
            },
            72: {
                x: 230.5,
                y: 180.2,
                r: -.034,
                a: 1
            },
            73: {
                x: 231.654,
                y: 179.6,
                r: -.033
            },
            74: {
                x: 232.665,
                y: 179.006,
                r: -.032
            },
            75: {
                x: 233.725,
                y: 178.362,
                r: -.031
            },
            76: {
                x: 234.789,
                y: 177.765,
                r: -.029
            },
            77: {
                x: 235.796,
                y: 177.068,
                r: -.028
            },
            78: {
                x: 236.903,
                y: 176.471,
                r: -.027
            },
            79: {
                x: 237.964,
                y: 175.827,
                r: -.025
            },
            80: {
                x: 238.971,
                y: 175.181,
                r: -.024
            },
            81: {
                x: 240.029,
                y: 174.584,
                r: -.023
            },
            82: {
                x: 241.136,
                y: 173.987,
                r: -.021
            },
            83: {
                x: 242.143,
                y: 173.34,
                r: -.02
            },
            84: {
                x: 243.197,
                y: 172.741,
                r: -.019
            },
            85: {
                x: 244.261,
                y: 172.05,
                r: -.017
            },
            86: {
                x: 245.268,
                y: 171.447,
                r: -.016
            },
            87: {
                x: 246.325,
                y: 170.85,
                r: -.015
            },
            88: {
                x: 247.379,
                y: 170.2,
                r: -.013
            },
            89: {
                x: 248.433,
                y: 169.601,
                r: -.012
            },
            90: {
                x: 249.536,
                y: 169.001,
                r: -.011
            },
            91: {
                x: 250.54,
                y: 168.352,
                r: -.009
            },
            92: {
                x: 251.64,
                y: 167.75,
                r: -.008
            },
            93: {
                x: 252.744,
                y: 167.15,
                r: -.007
            },
            94: {
                x: 253.748,
                y: 166.451,
                r: -.005
            },
            95: {
                x: 254.848,
                y: 165.848,
                r: -.004
            },
            96: {
                x: 255.898,
                y: 165.246,
                r: -.003
            },
            97: {
                x: 256.948,
                y: 164.644,
                r: -.001
            },
            98: {
                x: 258,
                y: 164,
                r: 0
            }
        }).addTimedChild(instance36, 51, 48, {
            51: {
                x: 424,
                y: 600,
                r: 0,
                a: 0
            },
            52: {
                x: 423.423,
                y: 599.549,
                r: -.002,
                a: .05
            },
            53: {
                x: 422.712,
                y: 599.05,
                r: -.003,
                a: .09
            },
            54: {
                x: 422.092,
                y: 598.608,
                r: -.005,
                a: .14
            },
            55: {
                x: 421.474,
                y: 598.15,
                r: -.007,
                a: .19
            },
            56: {
                x: 420.806,
                y: 597.692,
                r: -.008,
                a: .24
            },
            57: {
                x: 420.229,
                y: 597.24,
                r: -.01,
                a: .29
            },
            58: {
                x: 419.612,
                y: 596.733,
                r: -.011,
                a: .33
            },
            59: {
                x: 418.935,
                y: 596.281,
                r: -.013,
                a: .38
            },
            60: {
                x: 418.311,
                y: 595.814,
                r: -.015,
                a: .43
            },
            61: {
                x: 417.693,
                y: 595.306,
                r: -.016,
                a: .48
            },
            62: {
                x: 417.01,
                y: 594.896,
                r: -.018,
                a: .52
            },
            63: {
                x: 416.435,
                y: 594.429,
                r: -.02,
                a: .57
            },
            64: {
                x: 415.811,
                y: 593.962,
                r: -.021,
                a: .62
            },
            65: {
                x: 415.121,
                y: 593.492,
                r: -.023,
                a: .67
            },
            66: {
                x: 414.547,
                y: 593.025,
                r: -.025,
                a: .71
            },
            67: {
                x: 413.907,
                y: 592.555,
                r: -.026,
                a: .76
            },
            68: {
                x: 413.277,
                y: 592.079,
                r: -.028,
                a: .81
            },
            69: {
                x: 412.637,
                y: 591.659,
                r: -.03,
                a: .86
            },
            70: {
                x: 412.056,
                y: 591.183,
                r: -.031,
                a: .91
            },
            71: {
                x: 411.419,
                y: 590.748,
                r: -.033,
                a: .95
            },
            72: {
                x: 410.7,
                y: 590.2,
                r: -.034,
                a: 1
            },
            73: {
                x: 411.26,
                y: 589.786,
                r: -.033
            },
            74: {
                x: 411.718,
                y: 589.438,
                r: -.032
            },
            75: {
                x: 412.234,
                y: 588.983,
                r: -.03
            },
            76: {
                x: 412.71,
                y: 588.622,
                r: -.029
            },
            77: {
                x: 413.27,
                y: 588.208,
                r: -.028
            },
            78: {
                x: 413.78,
                y: 587.844,
                r: -.027
            },
            79: {
                x: 414.297,
                y: 587.439,
                r: -.025
            },
            80: {
                x: 414.757,
                y: 587.076,
                r: -.024
            },
            81: {
                x: 415.267,
                y: 586.662,
                r: -.023
            },
            82: {
                x: 415.777,
                y: 586.248,
                r: -.021
            },
            83: {
                x: 416.288,
                y: 585.834,
                r: -.02
            },
            84: {
                x: 416.792,
                y: 585.511,
                r: -.019
            },
            85: {
                x: 417.352,
                y: 585.048,
                r: -.017
            },
            86: {
                x: 417.865,
                y: 584.669,
                r: -.016
            },
            87: {
                x: 418.325,
                y: 584.305,
                r: -.015
            },
            88: {
                x: 418.829,
                y: 583.882,
                r: -.013
            },
            89: {
                x: 419.333,
                y: 583.509,
                r: -.012
            },
            90: {
                x: 419.887,
                y: 583.086,
                r: -.011
            },
            91: {
                x: 420.391,
                y: 582.714,
                r: -.009
            },
            92: {
                x: 420.889,
                y: 582.332,
                r: -.008
            },
            93: {
                x: 421.393,
                y: 581.959,
                r: -.007
            },
            94: {
                x: 421.947,
                y: 581.536,
                r: -.005
            },
            95: {
                x: 422.444,
                y: 581.154,
                r: -.004
            },
            96: {
                x: 422.942,
                y: 580.773,
                r: -.003
            },
            97: {
                x: 423.49,
                y: 580.391,
                r: -.001
            },
            98: {
                x: 424,
                y: 580,
                r: 0
            }
        }).addTimedChild(instance35, 51, 48, {
            51: {
                x: 357,
                y: 801,
                a: 0
            },
            52: {
                x: 356.75,
                y: 799.55,
                a: .05
            },
            53: {
                x: 356.5,
                y: 798.1,
                a: .09
            },
            54: {
                x: 356.25,
                y: 796.65,
                a: .14
            },
            55: {
                x: 355.95,
                y: 795.2,
                a: .19
            },
            56: {
                x: 355.7,
                y: 793.75,
                a: .24
            },
            57: {
                x: 355.45,
                y: 792.3,
                a: .29
            },
            58: {
                x: 355.2,
                y: 790.85,
                a: .33
            },
            59: {
                x: 354.95,
                y: 789.4,
                a: .38
            },
            60: {
                x: 354.7,
                y: 787.95,
                a: .43
            },
            61: {
                x: 354.45,
                y: 786.5,
                a: .48
            },
            62: {
                x: 354.195,
                y: 785.088,
                a: .52
            },
            63: {
                x: 353.945,
                y: 783.638,
                a: .57
            },
            64: {
                x: 353.695,
                y: 782.188,
                a: .62
            },
            65: {
                x: 353.445,
                y: 780.738,
                a: .67
            },
            66: {
                x: 353.195,
                y: 779.288,
                a: .71
            },
            67: {
                x: 352.945,
                y: 777.838,
                a: .76
            },
            68: {
                x: 352.695,
                y: 776.388,
                a: .81
            },
            69: {
                x: 352.395,
                y: 774.938,
                a: .86
            },
            70: {
                x: 352.145,
                y: 773.488,
                a: .91
            },
            71: {
                x: 351.895,
                y: 772.038,
                a: .95
            },
            72: {
                x: 351.5,
                y: 770.5,
                a: 1
            },
            73: {
                x: 351.75,
                y: 770.95
            },
            74: {
                x: 351.95,
                y: 771.35
            },
            75: {
                x: 352.15,
                y: 771.75
            },
            76: {
                x: 352.4,
                y: 772.15
            },
            77: {
                x: 352.6,
                y: 772.55
            },
            78: {
                x: 352.8,
                y: 772.95
            },
            79: {
                x: 353,
                y: 773.35
            },
            80: {
                x: 353.2,
                y: 773.75
            },
            81: {
                x: 353.4,
                y: 774.15
            },
            82: {
                x: 353.65,
                y: 774.55
            },
            83: {
                x: 353.85,
                y: 774.95
            },
            84: {
                x: 354.05,
                y: 775.35
            },
            85: {
                x: 354.205,
                y: 775.762
            },
            86: {
                x: 354.405,
                y: 776.162
            },
            87: {
                x: 354.605,
                y: 776.562
            },
            88: {
                x: 354.805,
                y: 776.962
            },
            89: {
                x: 355.055,
                y: 777.362
            },
            90: {
                x: 355.255,
                y: 777.762
            },
            91: {
                x: 355.455,
                y: 778.162
            },
            92: {
                x: 355.655,
                y: 778.562
            },
            93: {
                x: 355.855,
                y: 778.962
            },
            94: {
                x: 356.055,
                y: 779.362
            },
            95: {
                x: 356.305,
                y: 779.762
            },
            96: {
                x: 356.505,
                y: 780.162
            },
            97: {
                x: 356.705,
                y: 780.562
            },
            98: {
                x: 357,
                y: 781
            }
        }).addTimedChild(instance32, 45, 54, {
            45: {
                x: 128,
                y: 401,
                sx: .79,
                sy: .79,
                a: 0
            },
            46: {
                x: 130.498,
                y: 401.294,
                a: .04
            },
            47: {
                x: 132.948,
                y: 401.594,
                a: .08
            },
            48: {
                x: 135.398,
                y: 401.894,
                a: .13
            },
            49: {
                x: 137.848,
                y: 402.194,
                a: .17
            },
            50: {
                x: 140.298,
                y: 402.444,
                a: .21
            },
            51: {
                x: 142.748,
                y: 402.744,
                a: .25
            },
            52: {
                x: 145.198,
                y: 403.044,
                a: .29
            },
            53: {
                x: 147.648,
                y: 403.344,
                a: .33
            },
            54: {
                x: 150.098,
                y: 403.644,
                a: .38
            },
            55: {
                x: 152.548,
                y: 403.944,
                a: .42
            },
            56: {
                x: 154.998,
                y: 404.244,
                a: .46
            },
            57: {
                x: 157.498,
                y: 404.544,
                a: .5
            },
            58: {
                x: 159.946,
                y: 404.788,
                a: .54
            },
            59: {
                x: 162.396,
                y: 405.088,
                a: .58
            },
            60: {
                x: 164.846,
                y: 405.388,
                a: .63
            },
            61: {
                x: 167.296,
                y: 405.688,
                a: .67
            },
            62: {
                x: 169.746,
                y: 405.988,
                a: .71
            },
            63: {
                x: 172.196,
                y: 406.288,
                a: .75
            },
            64: {
                x: 174.646,
                y: 406.588,
                a: .79
            },
            65: {
                x: 177.096,
                y: 406.888,
                a: .83
            },
            66: {
                x: 179.546,
                y: 407.138,
                a: .88
            },
            67: {
                x: 181.996,
                y: 407.438,
                a: .92
            },
            68: {
                x: 184.446,
                y: 407.738,
                a: .96
            },
            69: {
                x: 186.8,
                y: 408,
                a: 1
            },
            70: {
                x: 189.797,
                y: 408.394
            },
            71: {
                x: 192.747,
                y: 408.744
            },
            72: {
                x: 195.647,
                y: 409.094
            },
            73: {
                x: 198.597,
                y: 409.444
            },
            74: {
                x: 201.547,
                y: 409.794
            },
            75: {
                x: 204.497,
                y: 410.144
            },
            76: {
                x: 207.45,
                y: 410.5
            },
            77: {
                x: 210.35,
                y: 410.9
            },
            78: {
                x: 213.3,
                y: 411.25
            },
            79: {
                x: 216.25,
                y: 411.6
            },
            80: {
                x: 219.2,
                y: 411.95
            },
            81: {
                x: 222.1,
                y: 412.3
            },
            82: {
                x: 225.05,
                y: 412.65
            },
            83: {
                x: 228,
                y: 413
            },
            84: {
                x: 228.047,
                y: 412.244
            },
            85: {
                y: 411.444
            },
            86: {
                y: 410.644
            },
            87: {
                y: 409.844
            },
            88: {
                y: 409.044
            },
            89: {
                y: 408.244
            },
            90: {
                y: 407.444
            },
            91: {
                y: 406.644
            },
            92: {
                y: 405.844
            },
            93: {
                y: 405.044
            },
            94: {
                y: 404.244
            },
            95: {
                y: 403.444
            },
            96: {
                y: 402.644
            },
            97: {
                y: 401.844
            },
            98: {
                x: 228,
                y: 401
            }
        }).addTimedChild(instance28, 42, 57, {
            42: {
                x: 1454,
                y: 646,
                sx: 1.04,
                sy: 1.04,
                ky: 3.142,
                a: 0
            },
            43: {
                x: 1451.628,
                y: 646.24,
                a: .04
            },
            44: {
                x: 1449.278,
                y: 646.44,
                a: .08
            },
            45: {
                x: 1446.928,
                y: 646.59,
                a: .12
            },
            46: {
                x: 1444.606,
                y: 646.79,
                a: .16
            },
            47: {
                x: 1442.256,
                y: 646.98,
                a: .2
            },
            48: {
                x: 1439.906,
                y: 647.18,
                a: .24
            },
            49: {
                x: 1437.556,
                y: 647.38,
                a: .28
            },
            50: {
                x: 1435.206,
                y: 647.53,
                a: .32
            },
            51: {
                x: 1432.856,
                y: 647.73,
                a: .36
            },
            52: {
                x: 1430.484,
                y: 647.93,
                a: .4
            },
            53: {
                x: 1428.133,
                y: 648.13,
                a: .44
            },
            54: {
                x: 1425.783,
                y: 648.33,
                a: .48
            },
            55: {
                x: 1423.383,
                y: 648.47,
                a: .52
            },
            56: {
                x: 1421.033,
                y: 648.67,
                a: .56
            },
            57: {
                x: 1418.683,
                y: 648.87,
                a: .6
            },
            58: {
                x: 1416.361,
                y: 649.07,
                a: .64
            },
            59: {
                x: 1414.011,
                y: 649.27,
                a: .68
            },
            60: {
                x: 1411.661,
                y: 649.42,
                a: .72
            },
            61: {
                x: 1409.311,
                y: 649.62,
                a: .76
            },
            62: {
                x: 1406.961,
                y: 649.82,
                a: .8
            },
            63: {
                x: 1404.611,
                y: 650.061,
                a: .84
            },
            64: {
                x: 1402.239,
                y: 650.261,
                a: .88
            },
            65: {
                x: 1399.889,
                y: 650.411,
                a: .92
            },
            66: {
                x: 1397.539,
                y: 650.611,
                a: .96
            },
            67: {
                x: 1395.15,
                y: 650.7,
                a: 1
            },
            68: {
                x: 1392.429,
                y: 650.94
            },
            69: {
                x: 1389.7,
                y: 651.19
            },
            70: {
                x: 1386.95,
                y: 651.4
            },
            71: {
                x: 1384.2,
                y: 651.6
            },
            72: {
                x: 1381.45,
                y: 651.85
            },
            73: {
                x: 1378.671,
                y: 652.05
            },
            74: {
                x: 1375.921,
                y: 652.25
            },
            75: {
                x: 1373.221,
                y: 652.46
            },
            76: {
                x: 1370.471,
                y: 652.66
            },
            77: {
                x: 1367.743,
                y: 652.86
            },
            78: {
                x: 1364.993,
                y: 653.11
            },
            79: {
                x: 1362.243,
                y: 653.31
            },
            80: {
                x: 1359.493,
                y: 653.52
            },
            81: {
                x: 1356.764,
                y: 653.77
            },
            82: {
                x: 1354,
                y: 654
            },
            83: {
                x: 1354.029,
                y: 653.54
            },
            84: {
                y: 653.04
            },
            85: {
                y: 652.54
            },
            86: {
                y: 652.04
            },
            87: {
                y: 651.54
            },
            88: {
                y: 651.04
            },
            89: {
                y: 650.54
            },
            90: {
                y: 650.04
            },
            91: {
                y: 649.54
            },
            92: {
                y: 649.04
            },
            93: {
                y: 648.54
            },
            94: {
                y: 648.04
            },
            95: {
                y: 647.54
            },
            96: {
                y: 647.04
            },
            97: {
                y: 646.54
            },
            98: {
                x: 1354,
                y: 646
            }
        }).addTimedChild(instance31, 45, 54, {
            45: {
                x: 1286,
                y: 407,
                sx: .8,
                sy: .8,
                ky: 3.142,
                a: 0
            },
            46: {
                x: 1283.58,
                y: 407.194,
                a: .04
            },
            47: {
                x: 1281.13,
                y: 407.394,
                a: .08
            },
            48: {
                x: 1278.68,
                y: 407.594,
                a: .13
            },
            49: {
                x: 1276.23,
                y: 407.794,
                a: .17
            },
            50: {
                x: 1273.78,
                y: 407.994,
                a: .21
            },
            51: {
                x: 1271.33,
                y: 408.144,
                a: .25
            },
            52: {
                x: 1268.88,
                y: 408.344,
                a: .29
            },
            53: {
                x: 1266.43,
                y: 408.544,
                a: .33
            },
            54: {
                x: 1263.98,
                y: 408.744,
                a: .38
            },
            55: {
                x: 1261.53,
                y: 408.944,
                a: .42
            },
            56: {
                x: 1259.08,
                y: 409.144,
                a: .46
            },
            57: {
                x: 1256.68,
                y: 409.344,
                a: .5
            },
            58: {
                x: 1254.211,
                y: 409.538,
                a: .54
            },
            59: {
                x: 1251.761,
                y: 409.738,
                a: .58
            },
            60: {
                x: 1249.311,
                y: 409.938,
                a: .63
            },
            61: {
                x: 1246.861,
                y: 410.138,
                a: .67
            },
            62: {
                x: 1244.411,
                y: 410.338,
                a: .71
            },
            63: {
                x: 1241.961,
                y: 410.538,
                a: .75
            },
            64: {
                x: 1239.511,
                y: 410.688,
                a: .79
            },
            65: {
                x: 1237.061,
                y: 410.888,
                a: .83
            },
            66: {
                x: 1234.611,
                y: 411.088,
                a: .88
            },
            67: {
                x: 1232.161,
                y: 411.288,
                a: .92
            },
            68: {
                x: 1229.711,
                y: 411.488,
                a: .96
            },
            69: {
                x: 1227.2,
                y: 411.65,
                a: 1
            },
            70: {
                x: 1224.281,
                y: 411.944
            },
            71: {
                x: 1221.331,
                y: 412.144
            },
            72: {
                x: 1218.381,
                y: 412.394
            },
            73: {
                x: 1215.431,
                y: 412.644
            },
            74: {
                x: 1212.481,
                y: 412.894
            },
            75: {
                x: 1209.531,
                y: 413.094
            },
            76: {
                x: 1206.6,
                y: 413.35
            },
            77: {
                x: 1203.65,
                y: 413.6
            },
            78: {
                x: 1200.7,
                y: 413.8
            },
            79: {
                x: 1197.75,
                y: 414.05
            },
            80: {
                x: 1194.8,
                y: 414.3
            },
            81: {
                x: 1191.85,
                y: 414.55
            },
            82: {
                x: 1188.9,
                y: 414.75
            },
            83: {
                x: 1186,
                y: 415
            },
            84: {
                x: 1186.032,
                y: 414.444
            },
            85: {
                y: 413.944
            },
            86: {
                y: 413.394
            },
            87: {
                y: 412.844
            },
            88: {
                y: 412.344
            },
            89: {
                y: 411.794
            },
            90: {
                y: 411.244
            },
            91: {
                y: 410.744
            },
            92: {
                y: 410.194
            },
            93: {
                y: 409.644
            },
            94: {
                y: 409.144
            },
            95: {
                y: 408.594
            },
            96: {
                y: 408.044
            },
            97: {
                y: 407.544
            },
            98: {
                x: 1186,
                y: 407
            }
        }).addTimedChild(instance27, 42, 57, {
            42: {
                x: -36,
                y: 678,
                a: 0
            },
            43: {
                x: -33.65,
                y: 677.75,
                a: .04
            },
            44: {
                x: -31.3,
                y: 677.55,
                a: .08
            },
            45: {
                x: -28.95,
                y: 677.3,
                a: .12
            },
            46: {
                x: -26.6,
                y: 677.05,
                a: .16
            },
            47: {
                x: -24.25,
                y: 676.8,
                a: .2
            },
            48: {
                x: -21.9,
                y: 676.6,
                a: .24
            },
            49: {
                x: -19.55,
                y: 676.35,
                a: .28
            },
            50: {
                x: -17.2,
                y: 676.1,
                a: .32
            },
            51: {
                x: -14.85,
                y: 675.9,
                a: .36
            },
            52: {
                x: -12.5,
                y: 675.65,
                a: .4
            },
            53: {
                x: -10.15,
                y: 675.4,
                a: .44
            },
            54: {
                x: -7.8,
                y: 675.15,
                a: .48
            },
            55: {
                x: -5.4,
                y: 674.95,
                a: .52
            },
            56: {
                x: -3.05,
                y: 674.7,
                a: .56
            },
            57: {
                x: -.7,
                y: 674.45,
                a: .6
            },
            58: {
                x: 1.65,
                y: 674.25,
                a: .64
            },
            59: {
                x: 4,
                y: 674,
                a: .68
            },
            60: {
                x: 6.35,
                y: 673.75,
                a: .72
            },
            61: {
                x: 8.7,
                y: 673.5,
                a: .76
            },
            62: {
                x: 11.05,
                y: 673.3,
                a: .8
            },
            63: {
                x: 13.4,
                y: 673.05,
                a: .84
            },
            64: {
                x: 15.75,
                y: 672.8,
                a: .88
            },
            65: {
                x: 18.1,
                y: 672.55,
                a: .92
            },
            66: {
                x: 20.45,
                y: 672.35,
                a: .96
            },
            67: {
                x: 22.8,
                y: 672.1,
                a: 1
            },
            68: {
                x: 25.55,
                y: 671.85
            },
            69: {
                x: 28.3,
                y: 671.55
            },
            70: {
                x: 31.05,
                y: 671.3
            },
            71: {
                x: 33.8,
                y: 671
            },
            72: {
                x: 36.55,
                y: 670.75
            },
            73: {
                x: 39.3,
                y: 670.45
            },
            74: {
                x: 42.05,
                y: 670.2
            },
            75: {
                x: 44.75,
                y: 669.9
            },
            76: {
                x: 47.5,
                y: 669.65
            },
            77: {
                x: 50.25,
                y: 669.35
            },
            78: {
                x: 53,
                y: 669.1
            },
            79: {
                x: 55.75,
                y: 668.8
            },
            80: {
                x: 58.5,
                y: 668.55
            },
            81: {
                x: 61.25,
                y: 668.25
            },
            82: {
                x: 64,
                y: 668
            },
            83: {
                y: 668.65
            },
            84: {
                y: 669.25
            },
            85: {
                y: 669.9
            },
            86: {
                y: 670.5
            },
            87: {
                y: 671.15
            },
            88: {
                y: 671.75
            },
            89: {
                y: 672.4
            },
            90: {
                y: 673
            },
            91: {
                y: 673.65
            },
            92: {
                y: 674.25
            },
            93: {
                y: 674.9
            },
            94: {
                y: 675.5
            },
            95: {
                y: 676.15
            },
            96: {
                y: 676.75
            },
            97: {
                y: 677.4
            },
            98: {
                y: 678
            }
        }).addTimedChild(instance30, 45, 54, {
            45: {
                x: 1509,
                y: 262,
                sx: .72,
                sy: .72,
                ky: 3.142,
                a: 0
            },
            46: {
                x: 1506.577,
                y: 262.246,
                a: .04
            },
            47: {
                x: 1504.127,
                y: 262.446,
                a: .08
            },
            48: {
                x: 1501.677,
                y: 262.646,
                a: .13
            },
            49: {
                x: 1499.227,
                y: 262.846,
                a: .17
            },
            50: {
                x: 1496.777,
                y: 263.046,
                a: .21
            },
            51: {
                x: 1494.327,
                y: 263.246,
                a: .25
            },
            52: {
                x: 1491.877,
                y: 263.446,
                a: .29
            },
            53: {
                x: 1489.427,
                y: 263.646,
                a: .33
            },
            54: {
                x: 1486.977,
                y: 263.846,
                a: .38
            },
            55: {
                x: 1484.527,
                y: 264.046,
                a: .42
            },
            56: {
                x: 1482.077,
                y: 264.246,
                a: .46
            },
            57: {
                x: 1479.627,
                y: 264.446,
                a: .5
            },
            58: {
                x: 1477.181,
                y: 264.588,
                a: .54
            },
            59: {
                x: 1474.731,
                y: 264.788,
                a: .58
            },
            60: {
                x: 1472.281,
                y: 264.988,
                a: .63
            },
            61: {
                x: 1469.831,
                y: 265.188,
                a: .67
            },
            62: {
                x: 1467.381,
                y: 265.388,
                a: .71
            },
            63: {
                x: 1464.931,
                y: 265.588,
                a: .75
            },
            64: {
                x: 1462.481,
                y: 265.788,
                a: .79
            },
            65: {
                x: 1460.031,
                y: 265.988,
                a: .83
            },
            66: {
                x: 1457.581,
                y: 266.188,
                a: .88
            },
            67: {
                x: 1455.131,
                y: 266.388,
                a: .92
            },
            68: {
                x: 1452.681,
                y: 266.588,
                a: .96
            },
            69: {
                x: 1450.2,
                y: 266.7,
                a: 1
            },
            70: {
                x: 1447.228,
                y: 266.946
            },
            71: {
                x: 1444.278,
                y: 267.146
            },
            72: {
                x: 1441.328,
                y: 267.396
            },
            73: {
                x: 1438.378,
                y: 267.646
            },
            74: {
                x: 1435.428,
                y: 267.846
            },
            75: {
                x: 1432.478,
                y: 268.096
            },
            76: {
                x: 1429.6,
                y: 268.3
            },
            77: {
                x: 1426.65,
                y: 268.55
            },
            78: {
                x: 1423.7,
                y: 268.8
            },
            79: {
                x: 1420.75,
                y: 269
            },
            80: {
                x: 1417.8,
                y: 269.25
            },
            81: {
                x: 1414.85,
                y: 269.5
            },
            82: {
                x: 1411.9,
                y: 269.7
            },
            83: {
                x: 1409,
                y: 270
            },
            84: {
                x: 1409.029,
                y: 269.446
            },
            85: {
                y: 268.946
            },
            86: {
                y: 268.396
            },
            87: {
                y: 267.846
            },
            88: {
                y: 267.346
            },
            89: {
                y: 266.796
            },
            90: {
                y: 266.246
            },
            91: {
                y: 265.746
            },
            92: {
                y: 265.196
            },
            93: {
                y: 264.646
            },
            94: {
                y: 264.146
            },
            95: {
                y: 263.596
            },
            96: {
                y: 263.046
            },
            97: {
                y: 262.546
            },
            98: {
                x: 1409,
                y: 262
            }
        }).addTimedChild(instance26, 42, 57, {
            42: {
                x: -175,
                y: 526,
                a: 0
            },
            43: {
                x: -172.65,
                y: 525.7,
                a: .04
            },
            44: {
                x: -170.3,
                y: 525.45,
                a: .08
            },
            45: {
                x: -167.95,
                y: 525.15,
                a: .12
            },
            46: {
                x: -165.6,
                y: 524.85,
                a: .16
            },
            47: {
                x: -163.25,
                y: 524.6,
                a: .2
            },
            48: {
                x: -160.9,
                y: 524.3,
                a: .24
            },
            49: {
                x: -158.55,
                y: 524.05,
                a: .28
            },
            50: {
                x: -156.2,
                y: 523.75,
                a: .32
            },
            51: {
                x: -153.85,
                y: 523.45,
                a: .36
            },
            52: {
                x: -151.5,
                y: 523.2,
                a: .4
            },
            53: {
                x: -149.15,
                y: 522.9,
                a: .44
            },
            54: {
                x: -146.8,
                y: 522.6,
                a: .48
            },
            55: {
                x: -144.4,
                y: 522.35,
                a: .52
            },
            56: {
                x: -142.05,
                y: 522.05,
                a: .56
            },
            57: {
                x: -139.7,
                y: 521.75,
                a: .6
            },
            58: {
                x: -137.35,
                y: 521.5,
                a: .64
            },
            59: {
                x: -135,
                y: 521.2,
                a: .68
            },
            60: {
                x: -132.65,
                y: 520.9,
                a: .72
            },
            61: {
                x: -130.3,
                y: 520.65,
                a: .76
            },
            62: {
                x: -127.95,
                y: 520.35,
                a: .8
            },
            63: {
                x: -125.6,
                y: 520.1,
                a: .84
            },
            64: {
                x: -123.25,
                y: 519.8,
                a: .88
            },
            65: {
                x: -120.9,
                y: 519.5,
                a: .92
            },
            66: {
                x: -118.55,
                y: 519.25,
                a: .96
            },
            67: {
                x: -116.2,
                y: 518.95,
                a: 1
            },
            68: {
                x: -113.45,
                y: 518.6
            },
            69: {
                x: -110.7,
                y: 518.3
            },
            70: {
                x: -107.95,
                y: 517.95
            },
            71: {
                x: -105.2,
                y: 517.65
            },
            72: {
                x: -102.45,
                y: 517.3
            },
            73: {
                x: -99.7,
                y: 516.95
            },
            74: {
                x: -96.95,
                y: 516.65
            },
            75: {
                x: -94.25,
                y: 516.3
            },
            76: {
                x: -91.5,
                y: 516
            },
            77: {
                x: -88.75,
                y: 515.65
            },
            78: {
                x: -86,
                y: 515.3
            },
            79: {
                x: -83.25,
                y: 515
            },
            80: {
                x: -80.5,
                y: 514.65
            },
            81: {
                x: -77.75,
                y: 514.35
            },
            82: {
                x: -75,
                y: 514
            },
            83: {
                y: 514.75
            },
            84: {
                y: 515.5
            },
            85: {
                y: 516.25
            },
            86: {
                y: 517
            },
            87: {
                y: 517.75
            },
            88: {
                y: 518.5
            },
            89: {
                y: 519.25
            },
            90: {
                y: 520
            },
            91: {
                y: 520.75
            },
            92: {
                y: 521.5
            },
            93: {
                y: 522.25
            },
            94: {
                y: 523
            },
            95: {
                y: 523.75
            },
            96: {
                y: 524.5
            },
            97: {
                y: 525.25
            },
            98: {
                y: 526
            }
        }).addTimedChild(instance29, 45, 54, {
            45: {
                x: 1602,
                y: 454,
                sx: 1.01,
                sy: 1.01,
                kx: .001,
                ky: 3.141,
                a: 0
            },
            46: {
                x: 1599.601,
                y: 454.536,
                a: .04
            },
            47: {
                x: 1597.151,
                y: 455.036,
                a: .08
            },
            48: {
                x: 1594.701,
                y: 455.536,
                a: .13
            },
            49: {
                x: 1592.227,
                y: 455.979,
                a: .17
            },
            50: {
                x: 1589.777,
                y: 456.479,
                a: .21
            },
            51: {
                x: 1587.327,
                y: 456.979,
                a: .25
            },
            52: {
                x: 1584.877,
                y: 457.479,
                a: .29
            },
            53: {
                x: 1582.427,
                y: 457.979,
                a: .33
            },
            54: {
                x: 1579.977,
                y: 458.479,
                a: .38
            },
            55: {
                x: 1577.502,
                y: 458.972,
                a: .42
            },
            56: {
                x: 1575.052,
                y: 459.472,
                a: .46
            },
            57: {
                x: 1572.652,
                y: 459.972,
                a: .5
            },
            58: {
                x: 1570.202,
                y: 460.472,
                a: .54
            },
            59: {
                x: 1567.752,
                y: 460.972,
                a: .58
            },
            60: {
                x: 1565.302,
                y: 461.472,
                a: .63
            },
            61: {
                x: 1562.878,
                y: 461.915,
                a: .67
            },
            62: {
                x: 1560.428,
                y: 462.415,
                a: .71
            },
            63: {
                x: 1557.978,
                y: 462.915,
                a: .75
            },
            64: {
                x: 1555.528,
                y: 463.415,
                a: .79
            },
            65: {
                x: 1553.078,
                y: 463.915,
                a: .83
            },
            66: {
                x: 1550.628,
                y: 464.415,
                a: .88
            },
            67: {
                x: 1548.153,
                y: 464.858,
                a: .92
            },
            68: {
                x: 1545.703,
                y: 465.358,
                a: .96
            },
            69: {
                x: 1543.25,
                y: 465.75,
                a: 1
            },
            70: {
                x: 1540.353,
                y: 466.436
            },
            71: {
                x: 1537.384,
                y: 466.919
            },
            72: {
                x: 1534.433,
                y: 467.519
            },
            73: {
                x: 1531.484,
                y: 468.119
            },
            74: {
                x: 1528.534,
                y: 468.719
            },
            75: {
                x: 1525.607,
                y: 469.276
            },
            76: {
                x: 1522.657,
                y: 469.876
            },
            77: {
                x: 1519.757,
                y: 470.476
            },
            78: {
                x: 1516.831,
                y: 471.034
            },
            79: {
                x: 1513.881,
                y: 471.634
            },
            80: {
                x: 1510.931,
                y: 472.234
            },
            81: {
                x: 1507.981,
                y: 472.834
            },
            82: {
                x: 1505.004,
                y: 473.391
            },
            83: {
                x: 1502,
                y: 474
            },
            84: {
                x: 1502.054,
                y: 472.686
            },
            85: {
                y: 471.386
            },
            86: {
                y: 470.036
            },
            87: {
                y: 468.686
            },
            88: {
                y: 467.386
            },
            89: {
                y: 466.036
            },
            90: {
                y: 464.686
            },
            91: {
                y: 463.386
            },
            92: {
                y: 462.036
            },
            93: {
                y: 460.686
            },
            94: {
                y: 459.386
            },
            95: {
                y: 458.036
            },
            96: {
                y: 456.686
            },
            97: {
                y: 455.386
            },
            98: {
                x: 1502,
                y: 454
            }
        }).addTimedChild(instance25, 42, 57, {
            42: {
                x: -48,
                y: 242,
                a: 0
            },
            43: {
                x: -45.65,
                y: 242.25,
                a: .04
            },
            44: {
                x: -43.3,
                y: 242.45,
                a: .08
            },
            45: {
                x: -40.95,
                y: 242.7,
                a: .12
            },
            46: {
                x: -38.6,
                y: 242.95,
                a: .16
            },
            47: {
                x: -36.25,
                y: 243.2,
                a: .2
            },
            48: {
                x: -33.9,
                y: 243.4,
                a: .24
            },
            49: {
                x: -31.55,
                y: 243.65,
                a: .28
            },
            50: {
                x: -29.2,
                y: 243.9,
                a: .32
            },
            51: {
                x: -26.85,
                y: 244.1,
                a: .36
            },
            52: {
                x: -24.5,
                y: 244.35,
                a: .4
            },
            53: {
                x: -22.15,
                y: 244.6,
                a: .44
            },
            54: {
                x: -19.8,
                y: 244.85,
                a: .48
            },
            55: {
                x: -17.4,
                y: 245.05,
                a: .52
            },
            56: {
                x: -15.05,
                y: 245.3,
                a: .56
            },
            57: {
                x: -12.7,
                y: 245.55,
                a: .6
            },
            58: {
                x: -10.35,
                y: 245.8,
                a: .64
            },
            59: {
                x: -8,
                y: 246,
                a: .68
            },
            60: {
                x: -5.65,
                y: 246.25,
                a: .72
            },
            61: {
                x: -3.3,
                y: 246.5,
                a: .76
            },
            62: {
                x: -.95,
                y: 246.7,
                a: .8
            },
            63: {
                x: 1.4,
                y: 246.95,
                a: .84
            },
            64: {
                x: 3.75,
                y: 247.2,
                a: .88
            },
            65: {
                x: 6.1,
                y: 247.45,
                a: .92
            },
            66: {
                x: 8.45,
                y: 247.65,
                a: .96
            },
            67: {
                x: 10.8,
                y: 247.9,
                a: 1
            },
            68: {
                x: 13.55,
                y: 248.15
            },
            69: {
                x: 16.3,
                y: 248.45
            },
            70: {
                x: 19.05,
                y: 248.7
            },
            71: {
                x: 21.8,
                y: 249
            },
            72: {
                x: 24.55,
                y: 249.25
            },
            73: {
                x: 27.3,
                y: 249.55
            },
            74: {
                x: 30.05,
                y: 249.8
            },
            75: {
                x: 32.75,
                y: 250.1
            },
            76: {
                x: 35.5,
                y: 250.35
            },
            77: {
                x: 38.25,
                y: 250.65
            },
            78: {
                x: 41,
                y: 250.9
            },
            79: {
                x: 43.75,
                y: 251.2
            },
            80: {
                x: 46.5,
                y: 251.45
            },
            81: {
                x: 49.25,
                y: 251.75
            },
            82: {
                x: 52,
                y: 252
            },
            83: {
                y: 251.4
            },
            84: {
                y: 250.75
            },
            85: {
                y: 250.15
            },
            86: {
                y: 249.5
            },
            87: {
                y: 248.9
            },
            88: {
                y: 248.25
            },
            89: {
                y: 247.65
            },
            90: {
                y: 247
            },
            91: {
                y: 246.4
            },
            92: {
                y: 245.75
            },
            93: {
                y: 245.15
            },
            94: {
                y: 244.5
            },
            95: {
                y: 243.9
            },
            96: {
                y: 243.25
            },
            97: {
                y: 242.65
            },
            98: {
                y: 242
            }
        }).addTimedChild(instance17, 37, 62, {
            37: {
                x: 133,
                y: 930,
                a: 0
            },
            38: {
                y: 929.55
            },
            39: {
                y: 928.25,
                a: .01
            },
            40: {
                y: 926.05,
                a: .03
            },
            41: {
                y: 923.05,
                a: .05
            },
            42: {
                y: 919.25,
                a: .08
            },
            43: {
                y: 914.75,
                a: .11
            },
            44: {
                y: 909.5,
                a: .14
            },
            45: {
                y: 903.65,
                a: .19
            },
            46: {
                y: 897.25,
                a: .23
            },
            47: {
                y: 890.35,
                a: .28
            },
            48: {
                y: 883.1,
                a: .34
            },
            49: {
                y: 875.6,
                a: .39
            },
            50: {
                y: 867.85,
                a: .45
            },
            51: {
                y: 860,
                a: .5
            },
            52: {
                y: 852.15,
                a: .55
            },
            53: {
                y: 844.45,
                a: .61
            },
            54: {
                y: 836.9,
                a: .66
            },
            55: {
                y: 829.65,
                a: .72
            },
            56: {
                y: 822.75,
                a: .77
            },
            57: {
                y: 816.35,
                a: .81
            },
            58: {
                y: 810.5,
                a: .86
            },
            59: {
                y: 805.25,
                a: .89
            },
            60: {
                y: 800.75,
                a: .92
            },
            61: {
                y: 796.95,
                a: .95
            },
            62: {
                y: 793.95,
                a: .97
            },
            63: {
                y: 791.75,
                a: .99
            },
            64: {
                y: 790.45,
                a: 1
            },
            65: {
                y: 790
            },
            66: {
                y: 790.6
            },
            67: {
                y: 791.2
            },
            68: {
                y: 791.8
            },
            69: {
                y: 792.4
            },
            70: {
                y: 793.05
            },
            71: {
                y: 793.65
            },
            72: {
                y: 794.25
            },
            73: {
                y: 794.85
            },
            74: {
                y: 795.45
            },
            75: {
                y: 796.05
            },
            76: {
                y: 796.65
            },
            77: {
                y: 797.25
            },
            78: {
                y: 797.9
            },
            79: {
                y: 798.5
            },
            80: {
                y: 799.1
            },
            81: {
                y: 799.7
            },
            82: {
                y: 800.3
            },
            83: {
                y: 800.9
            },
            84: {
                y: 801.5
            },
            85: {
                y: 802.1
            },
            86: {
                y: 802.75
            },
            87: {
                y: 803.35
            },
            88: {
                y: 803.95
            },
            89: {
                y: 804.55
            },
            90: {
                y: 805.15
            },
            91: {
                y: 805.75
            },
            92: {
                y: 806.35
            },
            93: {
                y: 806.95
            },
            94: {
                y: 807.6
            },
            95: {
                y: 808.2
            },
            96: {
                y: 808.8
            },
            97: {
                y: 809.4
            },
            98: {
                y: 810
            }
        }).addTimedChild(instance16, 32, 67, {
            32: {
                x: 402,
                y: 1e3,
                a: 0
            },
            33: {
                y: 997.75,
                a: .05
            },
            34: {
                y: 995.45,
                a: .09
            },
            35: {
                y: 993.2,
                a: .14
            },
            36: {
                y: 990.9,
                a: .18
            },
            37: {
                y: 988.65,
                a: .23
            },
            38: {
                x: 402.094,
                y: 986.385,
                a: .27
            },
            39: {
                y: 984.135,
                a: .32
            },
            40: {
                y: 981.835,
                a: .36
            },
            41: {
                y: 979.585,
                a: .41
            },
            42: {
                y: 977.285,
                a: .45
            },
            43: {
                x: 402,
                y: 975,
                a: .5
            },
            44: {
                y: 973.1,
                a: .48
            },
            45: {
                x: 401.9,
                y: 971.15,
                a: .46
            },
            46: {
                x: 401.85,
                y: 969.3,
                a: .45
            },
            47: {
                x: 401.75,
                y: 967.4,
                a: .43
            },
            48: {
                x: 401.7,
                y: 965.6,
                a: .41
            },
            49: {
                x: 401.65,
                y: 963.8,
                a: .4
            },
            50: {
                x: 401.6,
                y: 962.1,
                a: .38
            },
            51: {
                x: 401.5,
                y: 960.35,
                a: .37
            },
            52: {
                x: 401.45,
                y: 958.7,
                a: .35
            },
            53: {
                x: 401.4,
                y: 957.05,
                a: .34
            },
            54: {
                x: 401.35,
                y: 955.45,
                a: .32
            },
            55: {
                x: 401.3,
                y: 953.9,
                a: .31
            },
            56: {
                x: 401.2,
                y: 952.35,
                a: .29
            },
            57: {
                x: 401.15,
                y: 950.85,
                a: .28
            },
            58: {
                x: 401.1,
                y: 949.4,
                a: .27
            },
            59: {
                x: 401.05,
                y: 947.95,
                a: .25
            },
            60: {
                x: 401,
                y: 946.55,
                a: .24
            },
            61: {
                x: 400.95,
                y: 945.2,
                a: .23
            },
            62: {
                x: 400.9,
                y: 943.9,
                a: .21
            },
            63: {
                x: 400.85,
                y: 942.6,
                a: .2
            },
            64: {
                x: 400.8,
                y: 941.35
            },
            65: {
                y: 940.15,
                a: .18
            },
            66: {
                x: 400.75,
                y: 938.95,
                a: .17
            },
            67: {
                x: 400.7,
                y: 937.85,
                a: .16
            },
            68: {
                x: 400.65,
                y: 936.7,
                a: .15
            },
            69: {
                x: 400.6,
                y: 935.65,
                a: .14
            },
            70: {
                y: 934.6,
                a: .13
            },
            71: {
                x: 400.55,
                y: 933.6,
                a: .12
            },
            72: {
                x: 400.5,
                y: 932.65,
                a: .11
            },
            73: {
                x: 400.45,
                y: 931.75
            },
            74: {
                y: 930.85,
                a: .1
            },
            75: {
                x: 400.4,
                y: 930,
                a: .09
            },
            76: {
                y: 929.15,
                a: .08
            },
            77: {
                x: 400.35,
                y: 928.35,
                a: .07
            },
            78: {
                x: 400.3,
                y: 927.6
            },
            79: {
                y: 926.9,
                a: .06
            },
            80: {
                x: 400.25,
                y: 926.25,
                a: .05
            },
            81: {
                y: 925.6
            },
            82: {
                y: 925,
                a: .04
            },
            83: {
                x: 400.2,
                y: 924.4
            },
            84: {
                y: 923.85
            },
            85: {
                x: 400.15,
                y: 923.35,
                a: .03
            },
            86: {
                y: 922.9
            },
            87: {
                y: 922.45,
                a: .02
            },
            88: {
                x: 400.1,
                y: 922.1
            },
            89: {
                y: 921.7
            },
            90: {
                y: 921.4,
                a: .01
            },
            91: {
                y: 921.1
            },
            92: {
                y: 920.85
            },
            93: {
                x: 400.05,
                y: 920.65,
                a: 0
            },
            94: {
                y: 920.45
            },
            95: {
                y: 920.3
            },
            96: {
                y: 920.2
            },
            97: {
                y: 920.15
            },
            98: {
                x: 400,
                y: 920
            }
        }).addTimedChild(instance15, 32, 67, {
            32: {
                x: 484,
                y: 1061,
                sx: .7,
                sy: .7,
                ky: 3.142,
                a: 0
            },
            33: {
                x: 485.643,
                y: 1058.384,
                a: .05
            },
            34: {
                x: 487.243,
                y: 1055.734,
                a: .09
            },
            35: {
                x: 488.893,
                y: 1053.134,
                a: .14
            },
            36: {
                x: 490.543,
                y: 1050.484,
                a: .18
            },
            37: {
                x: 492.193,
                y: 1047.834,
                a: .23
            },
            38: {
                x: 493.793,
                y: 1045.184,
                a: .27
            },
            39: {
                x: 495.443,
                y: 1042.534,
                a: .32
            },
            40: {
                x: 497.093,
                y: 1039.884,
                a: .36
            },
            41: {
                x: 498.743,
                y: 1037.284,
                a: .41
            },
            42: {
                x: 500.343,
                y: 1034.634,
                a: .45
            },
            43: {
                x: 502,
                y: 1032,
                a: .5
            },
            44: {
                x: 501.642,
                y: 1027.534,
                a: .48
            },
            45: {
                x: 501.192,
                y: 1023.134,
                a: .46
            },
            46: {
                x: 500.792,
                y: 1018.834,
                a: .45
            },
            47: {
                x: 500.392,
                y: 1014.634,
                a: .43
            },
            48: {
                x: 499.992,
                y: 1010.484,
                a: .41
            },
            49: {
                x: 499.642,
                y: 1006.434,
                a: .4
            },
            50: {
                x: 499.242,
                y: 1002.484,
                a: .38
            },
            51: {
                x: 498.892,
                y: 998.584,
                a: .37
            },
            52: {
                x: 498.492,
                y: 994.784,
                a: .35
            },
            53: {
                x: 498.142,
                y: 991.034,
                a: .34
            },
            54: {
                x: 497.792,
                y: 987.384,
                a: .32
            },
            55: {
                x: 497.492,
                y: 983.834,
                a: .31
            },
            56: {
                x: 497.142,
                y: 980.334,
                a: .29
            },
            57: {
                x: 496.842,
                y: 976.934,
                a: .28
            },
            58: {
                x: 496.492,
                y: 973.584,
                a: .27
            },
            59: {
                x: 496.192,
                y: 970.334,
                a: .25
            },
            60: {
                x: 495.892,
                y: 967.184,
                a: .24
            },
            61: {
                x: 495.592,
                y: 964.084,
                a: .23
            },
            62: {
                x: 495.342,
                y: 961.084,
                a: .21
            },
            63: {
                x: 495.042,
                y: 958.184,
                a: .2
            },
            64: {
                x: 494.792,
                y: 955.334
            },
            65: {
                x: 494.492,
                y: 952.584,
                a: .18
            },
            66: {
                x: 494.242,
                y: 949.884,
                a: .17
            },
            67: {
                x: 493.992,
                y: 947.284,
                a: .16
            },
            68: {
                x: 493.792,
                y: 944.784,
                a: .15
            },
            69: {
                x: 493.542,
                y: 942.384,
                a: .14
            },
            70: {
                x: 493.342,
                y: 939.984,
                a: .13
            },
            71: {
                x: 493.092,
                y: 937.734,
                a: .12
            },
            72: {
                x: 492.892,
                y: 935.534,
                a: .11
            },
            73: {
                x: 492.692,
                y: 933.434
            },
            74: {
                x: 492.492,
                y: 931.384,
                a: .1
            },
            75: {
                x: 492.342,
                y: 929.434,
                a: .09
            },
            76: {
                x: 492.142,
                y: 927.584,
                a: .08
            },
            77: {
                x: 491.992,
                y: 925.784,
                a: .07
            },
            78: {
                x: 491.792,
                y: 924.084
            },
            79: {
                x: 491.642,
                y: 922.484,
                a: .06
            },
            80: {
                x: 491.492,
                y: 920.934,
                a: .05
            },
            81: {
                x: 491.392,
                y: 919.484
            },
            82: {
                x: 491.242,
                y: 918.084,
                a: .04
            },
            83: {
                x: 491.142,
                y: 916.784
            },
            84: {
                x: 490.992,
                y: 915.534
            },
            85: {
                x: 490.892,
                y: 914.434,
                a: .03
            },
            86: {
                x: 490.792,
                y: 913.384
            },
            87: {
                x: 490.692,
                y: 912.384,
                a: .02
            },
            88: {
                x: 490.642,
                y: 911.484
            },
            89: {
                x: 490.542,
                y: 910.684
            },
            90: {
                x: 490.492,
                y: 909.934,
                a: .01
            },
            91: {
                x: 490.392,
                y: 909.284
            },
            92: {
                x: 490.342,
                y: 908.734
            },
            93: {
                x: 490.292,
                y: 908.234,
                a: 0
            },
            94: {
                y: 907.834
            },
            95: {
                x: 490.242,
                y: 907.484
            },
            96: {
                x: 490.192,
                y: 907.234
            },
            97: {
                y: 907.084
            },
            98: {
                x: 490,
                y: 907
            }
        }).addTimedChild(instance14, 32, 67, {
            32: {
                x: 542,
                y: 1068,
                sx: .5,
                sy: .5,
                ky: 3.142,
                a: 0
            },
            33: {
                y: 1059.75,
                a: .05
            },
            34: {
                y: 1051.5,
                a: .09
            },
            35: {
                y: 1043.2,
                a: .14
            },
            36: {
                y: 1034.9,
                a: .18
            },
            37: {
                y: 1026.65,
                a: .23
            },
            38: {
                y: 1018.35,
                a: .27
            },
            39: {
                y: 1010.1,
                a: .32
            },
            40: {
                y: 1001.8,
                a: .36
            },
            41: {
                y: 993.5,
                a: .41
            },
            42: {
                y: 985.25,
                a: .45
            },
            43: {
                y: 977,
                a: .5
            },
            44: {
                y: 970.3,
                a: .48
            },
            45: {
                y: 963.7,
                a: .46
            },
            46: {
                y: 957.2,
                a: .45
            },
            47: {
                y: 950.8,
                a: .43
            },
            48: {
                y: 944.55,
                a: .41
            },
            49: {
                y: 938.45,
                a: .4
            },
            50: {
                y: 932.45,
                a: .38
            },
            51: {
                x: 542.05,
                y: 926.55,
                a: .37
            },
            52: {
                y: 920.8,
                a: .35
            },
            53: {
                y: 915.15,
                a: .34
            },
            54: {
                y: 909.6,
                a: .32
            },
            55: {
                y: 904.2,
                a: .31
            },
            56: {
                y: 898.95,
                a: .29
            },
            57: {
                y: 893.8,
                a: .28
            },
            58: {
                y: 888.75,
                a: .27
            },
            59: {
                y: 883.85,
                a: .25
            },
            60: {
                y: 879.1,
                a: .24
            },
            61: {
                y: 874.4,
                a: .23
            },
            62: {
                y: 869.9,
                a: .21
            },
            63: {
                y: 865.45,
                a: .2
            },
            64: {
                y: 861.15
            },
            65: {
                y: 857,
                a: .18
            },
            66: {
                y: 852.95,
                a: .17
            },
            67: {
                y: 849,
                a: .16
            },
            68: {
                y: 845.2,
                a: .15
            },
            69: {
                y: 841.55,
                a: .14
            },
            70: {
                y: 838,
                a: .13
            },
            71: {
                x: 542.1,
                y: 834.55,
                a: .12
            },
            72: {
                y: 831.25,
                a: .11
            },
            73: {
                y: 828.05
            },
            74: {
                y: 824.95,
                a: .1
            },
            75: {
                y: 822,
                a: .09
            },
            76: {
                y: 819.2,
                a: .08
            },
            77: {
                y: 816.5,
                a: .07
            },
            78: {
                y: 813.9
            },
            79: {
                y: 811.45,
                a: .06
            },
            80: {
                y: 809.15,
                a: .05
            },
            81: {
                y: 806.9
            },
            82: {
                y: 804.85,
                a: .04
            },
            83: {
                y: 802.85
            },
            84: {
                y: 801
            },
            85: {
                y: 799.3,
                a: .03
            },
            86: {
                y: 797.7
            },
            87: {
                y: 796.2,
                a: .02
            },
            88: {
                y: 794.85
            },
            89: {
                y: 793.65
            },
            90: {
                y: 792.5,
                a: .01
            },
            91: {
                y: 791.55
            },
            92: {
                y: 790.65
            },
            93: {
                y: 789.95,
                a: 0
            },
            94: {
                y: 789.3
            },
            95: {
                y: 788.8
            },
            96: {
                y: 788.45
            },
            97: {
                y: 788.2
            },
            98: {
                x: 542,
                y: 788
            }
        }).addTimedChild(instance10, 29, 67, {
            29: {
                x: 763,
                y: 996,
                ky: 3.142,
                a: 0
            },
            30: {
                x: 763.05,
                y: 993.7,
                a: .05
            },
            31: {
                x: 763.1,
                y: 991.4,
                a: .09
            },
            32: {
                x: 763.2,
                y: 989.1,
                a: .14
            },
            33: {
                x: 763.25,
                y: 986.8,
                a: .18
            },
            34: {
                x: 763.3,
                y: 984.5,
                a: .23
            },
            35: {
                x: 763.388,
                y: 982.185,
                a: .27
            },
            36: {
                x: 763.438,
                y: 979.885,
                a: .32
            },
            37: {
                x: 763.488,
                y: 977.585,
                a: .36
            },
            38: {
                x: 763.588,
                y: 975.285,
                a: .41
            },
            39: {
                x: 763.638,
                y: 972.985,
                a: .45
            },
            40: {
                x: 763.7,
                y: 970.65,
                a: .5
            },
            41: {
                x: 763.8,
                y: 968.75,
                a: .48
            },
            42: {
                x: 763.85,
                y: 966.85,
                a: .46
            },
            43: {
                x: 763.9,
                y: 964.95,
                a: .45
            },
            44: {
                x: 763.95,
                y: 963.1,
                a: .43
            },
            45: {
                y: 961.3,
                a: .41
            },
            46: {
                x: 764,
                y: 959.55,
                a: .4
            },
            47: {
                x: 764.05,
                y: 957.8,
                a: .38
            },
            48: {
                x: 764.1,
                y: 956.1,
                a: .37
            },
            49: {
                x: 764.15,
                y: 954.45,
                a: .35
            },
            50: {
                x: 764.2,
                y: 952.8,
                a: .34
            },
            51: {
                y: 951.2,
                a: .32
            },
            52: {
                x: 764.25,
                y: 949.65,
                a: .31
            },
            53: {
                x: 764.3,
                y: 948.15,
                a: .29
            },
            54: {
                y: 946.65,
                a: .28
            },
            55: {
                x: 764.35,
                y: 945.2,
                a: .27
            },
            56: {
                x: 764.4,
                y: 943.8,
                a: .25
            },
            57: {
                y: 942.4,
                a: .24
            },
            58: {
                x: 764.45,
                y: 941.05,
                a: .23
            },
            59: {
                x: 764.5,
                y: 939.75,
                a: .21
            },
            60: {
                y: 938.45,
                a: .2
            },
            61: {
                x: 764.55,
                y: 937.2
            },
            62: {
                x: 764.6,
                y: 936,
                a: .18
            },
            63: {
                y: 934.85,
                a: .17
            },
            64: {
                x: 764.65,
                y: 933.7,
                a: .16
            },
            65: {
                y: 932.6,
                a: .15
            },
            66: {
                x: 764.7,
                y: 931.55,
                a: .14
            },
            67: {
                y: 930.5,
                a: .13
            },
            68: {
                x: 764.75,
                y: 929.55,
                a: .12
            },
            69: {
                y: 928.55,
                a: .11
            },
            70: {
                x: 764.8,
                y: 927.65
            },
            71: {
                y: 926.75,
                a: .1
            },
            72: {
                y: 925.9,
                a: .09
            },
            73: {
                x: 764.85,
                y: 925.1,
                a: .08
            },
            74: {
                y: 924.3,
                a: .07
            },
            75: {
                y: 923.55
            },
            76: {
                x: 764.9,
                y: 922.85,
                a: .06
            },
            77: {
                y: 922.2,
                a: .05
            },
            78: {
                y: 921.55
            },
            79: {
                x: 764.95,
                y: 920.95,
                a: .04
            },
            80: {
                y: 920.4
            },
            81: {
                y: 919.85
            },
            82: {
                y: 919.35,
                a: .03
            },
            83: {
                x: 765,
                y: 918.9
            },
            84: {
                y: 918.45,
                a: .02
            },
            85: {
                y: 918.05
            },
            86: {
                y: 917.7
            },
            87: {
                y: 917.4,
                a: .01
            },
            88: {
                x: 765.05,
                y: 917.1
            },
            89: {
                y: 916.85
            },
            90: {
                y: 916.65,
                a: 0
            },
            91: {
                y: 916.45
            },
            92: {
                y: 916.3
            },
            93: {
                y: 916.2
            },
            94: {
                y: 916.15
            },
            95: {
                x: 765,
                y: 916
            }
        }).addTimedChild(instance9, 29, 67, {
            29: {
                x: 681,
                y: 1057,
                sx: .7,
                sy: .7,
                a: 0
            },
            30: {
                x: 679.34,
                y: 1054.284,
                a: .05
            },
            31: {
                x: 677.69,
                y: 1051.634,
                a: .09
            },
            32: {
                x: 676.04,
                y: 1048.934,
                a: .14
            },
            33: {
                x: 674.39,
                y: 1046.234,
                a: .18
            },
            34: {
                x: 672.74,
                y: 1043.584,
                a: .23
            },
            35: {
                x: 671.09,
                y: 1040.884,
                a: .27
            },
            36: {
                x: 669.44,
                y: 1038.234,
                a: .32
            },
            37: {
                x: 667.79,
                y: 1035.534,
                a: .36
            },
            38: {
                x: 666.14,
                y: 1032.834,
                a: .41
            },
            39: {
                x: 664.49,
                y: 1030.184,
                a: .45
            },
            40: {
                x: 662.85,
                y: 1027.55,
                a: .5
            },
            41: {
                x: 663.34,
                y: 1023.084,
                a: .48
            },
            42: {
                x: 663.79,
                y: 1018.734,
                a: .46
            },
            43: {
                x: 664.24,
                y: 1014.434,
                a: .45
            },
            44: {
                x: 664.69,
                y: 1010.234,
                a: .43
            },
            45: {
                x: 665.14,
                y: 1006.134,
                a: .41
            },
            46: {
                x: 665.54,
                y: 1002.084,
                a: .4
            },
            47: {
                x: 665.94,
                y: 998.134,
                a: .38
            },
            48: {
                x: 666.34,
                y: 994.234,
                a: .37
            },
            49: {
                x: 666.74,
                y: 990.434,
                a: .35
            },
            50: {
                x: 667.14,
                y: 986.734,
                a: .34
            },
            51: {
                x: 667.54,
                y: 983.084,
                a: .32
            },
            52: {
                x: 667.89,
                y: 979.534,
                a: .31
            },
            53: {
                x: 668.24,
                y: 976.084,
                a: .29
            },
            54: {
                x: 668.64,
                y: 972.684,
                a: .28
            },
            55: {
                x: 668.94,
                y: 969.334,
                a: .27
            },
            56: {
                x: 669.29,
                y: 966.134,
                a: .25
            },
            57: {
                x: 669.64,
                y: 962.984,
                a: .24
            },
            58: {
                x: 669.94,
                y: 959.884,
                a: .23
            },
            59: {
                x: 670.24,
                y: 956.884,
                a: .21
            },
            60: {
                x: 670.54,
                y: 953.984,
                a: .2
            },
            61: {
                x: 670.84,
                y: 951.184
            },
            62: {
                x: 671.14,
                y: 948.434,
                a: .18
            },
            63: {
                x: 671.44,
                y: 945.734,
                a: .17
            },
            64: {
                x: 671.69,
                y: 943.184,
                a: .16
            },
            65: {
                x: 671.94,
                y: 940.634,
                a: .15
            },
            66: {
                x: 672.19,
                y: 938.234,
                a: .14
            },
            67: {
                x: 672.44,
                y: 935.884,
                a: .13
            },
            68: {
                x: 672.69,
                y: 933.634,
                a: .12
            },
            69: {
                x: 672.94,
                y: 931.434,
                a: .11
            },
            70: {
                x: 673.14,
                y: 929.334
            },
            71: {
                x: 673.34,
                y: 927.334,
                a: .1
            },
            72: {
                x: 673.54,
                y: 925.384,
                a: .09
            },
            73: {
                x: 673.74,
                y: 923.534,
                a: .08
            },
            74: {
                x: 673.94,
                y: 921.734,
                a: .07
            },
            75: {
                x: 674.09,
                y: 920.034
            },
            76: {
                x: 674.29,
                y: 918.434,
                a: .06
            },
            77: {
                x: 674.44,
                y: 916.884,
                a: .05
            },
            78: {
                x: 674.59,
                y: 915.434
            },
            79: {
                x: 674.74,
                y: 914.034,
                a: .04
            },
            80: {
                x: 674.89,
                y: 912.734
            },
            81: {
                x: 674.99,
                y: 911.534
            },
            82: {
                x: 675.14,
                y: 910.384,
                a: .03
            },
            83: {
                x: 675.24,
                y: 909.334
            },
            84: {
                x: 675.34,
                y: 908.384,
                a: .02
            },
            85: {
                x: 675.44,
                y: 907.484
            },
            86: {
                x: 675.49,
                y: 906.684
            },
            87: {
                x: 675.59,
                y: 905.934,
                a: .01
            },
            88: {
                x: 675.64,
                y: 905.284
            },
            89: {
                x: 675.69,
                y: 904.684
            },
            90: {
                x: 675.74,
                y: 904.234,
                a: 0
            },
            91: {
                x: 675.79,
                y: 903.834
            },
            92: {
                x: 675.84,
                y: 903.484
            },
            93: {
                y: 903.234
            },
            94: {
                x: 675.89,
                y: 903.084
            },
            95: {
                x: 676,
                y: 903
            }
        }).addTimedChild(instance8, 29, 67, {
            29: {
                x: 623,
                y: 1063,
                sx: .5,
                sy: .5,
                a: 0
            },
            30: {
                y: 1054.85,
                a: .05
            },
            31: {
                x: 622.95,
                y: 1046.65,
                a: .09
            },
            32: {
                y: 1038.45,
                a: .14
            },
            33: {
                y: 1030.25,
                a: .18
            },
            34: {
                y: 1022.05,
                a: .23
            },
            35: {
                x: 622.9,
                y: 1013.9,
                a: .27
            },
            36: {
                y: 1005.7,
                a: .32
            },
            37: {
                y: 997.5,
                a: .36
            },
            38: {
                y: 989.3,
                a: .41
            },
            39: {
                x: 622.85,
                y: 981.1,
                a: .45
            },
            40: {
                y: 972.95,
                a: .5
            },
            41: {
                y: 966.25,
                a: .48
            },
            42: {
                y: 959.65,
                a: .46
            },
            43: {
                y: 953.15,
                a: .45
            },
            44: {
                y: 946.75,
                a: .43
            },
            45: {
                y: 940.5,
                a: .41
            },
            46: {
                y: 934.4,
                a: .4
            },
            47: {
                y: 928.4,
                a: .38
            },
            48: {
                y: 922.5,
                a: .37
            },
            49: {
                y: 916.75,
                a: .35
            },
            50: {
                y: 911.1,
                a: .34
            },
            51: {
                y: 905.6,
                a: .32
            },
            52: {
                y: 900.2,
                a: .31
            },
            53: {
                y: 894.9,
                a: .29
            },
            54: {
                y: 889.75,
                a: .28
            },
            55: {
                y: 884.75,
                a: .27
            },
            56: {
                y: 879.85,
                a: .25
            },
            57: {
                x: 622.9,
                y: 875.05,
                a: .24
            },
            58: {
                y: 870.4,
                a: .23
            },
            59: {
                y: 865.85,
                a: .21
            },
            60: {
                y: 861.45,
                a: .2
            },
            61: {
                y: 857.15
            },
            62: {
                y: 853,
                a: .18
            },
            63: {
                y: 848.95,
                a: .17
            },
            64: {
                y: 845,
                a: .16
            },
            65: {
                y: 841.2,
                a: .15
            },
            66: {
                y: 837.5,
                a: .14
            },
            67: {
                y: 833.95,
                a: .13
            },
            68: {
                y: 830.55,
                a: .12
            },
            69: {
                y: 827.2,
                a: .11
            },
            70: {
                y: 824
            },
            71: {
                y: 820.95,
                a: .1
            },
            72: {
                y: 818,
                a: .09
            },
            73: {
                y: 815.2,
                a: .08
            },
            74: {
                y: 812.5,
                a: .07
            },
            75: {
                y: 809.9
            },
            76: {
                y: 807.45,
                a: .06
            },
            77: {
                y: 805.1,
                a: .05
            },
            78: {
                y: 802.9
            },
            79: {
                y: 800.8,
                a: .04
            },
            80: {
                y: 798.85
            },
            81: {
                y: 797
            },
            82: {
                y: 795.3,
                a: .03
            },
            83: {
                y: 793.7
            },
            84: {
                y: 792.2,
                a: .02
            },
            85: {
                y: 790.85
            },
            86: {
                y: 789.65
            },
            87: {
                y: 788.5,
                a: .01
            },
            88: {
                y: 787.55
            },
            89: {
                y: 786.65
            },
            90: {
                y: 785.95,
                a: 0
            },
            91: {
                y: 785.3
            },
            92: {
                y: 784.8
            },
            93: {
                y: 784.45
            },
            94: {
                y: 784.2
            },
            95: {
                x: 623,
                y: 784
            }
        }).addTimedChild(instance13, 31, 67, {
            31: {
                x: 862,
                y: 1e3,
                a: 0
            },
            32: {
                x: 861.95,
                y: 997.7,
                a: .05
            },
            33: {
                x: 861.9,
                y: 995.4,
                a: .09
            },
            34: {
                y: 993.1,
                a: .14
            },
            35: {
                x: 861.85,
                y: 990.8,
                a: .18
            },
            36: {
                x: 861.8,
                y: 988.5,
                a: .23
            },
            37: {
                x: 861.787,
                y: 986.185,
                a: .27
            },
            38: {
                x: 861.737,
                y: 983.885,
                a: .32
            },
            39: {
                x: 861.687,
                y: 981.585,
                a: .36
            },
            40: {
                y: 979.285,
                a: .41
            },
            41: {
                x: 861.637,
                y: 976.985,
                a: .45
            },
            42: {
                x: 861.5,
                y: 974.65,
                a: .5
            },
            43: {
                y: 972.75,
                a: .48
            },
            44: {
                x: 861.45,
                y: 970.85,
                a: .46
            },
            45: {
                x: 861.4,
                y: 968.95,
                a: .45
            },
            46: {
                x: 861.35,
                y: 967.1,
                a: .43
            },
            47: {
                x: 861.3,
                y: 965.3,
                a: .41
            },
            48: {
                x: 861.25,
                y: 963.55,
                a: .4
            },
            49: {
                x: 861.2,
                y: 961.8,
                a: .38
            },
            50: {
                x: 861.15,
                y: 960.1,
                a: .37
            },
            51: {
                x: 861.1,
                y: 958.45,
                a: .35
            },
            52: {
                x: 861.05,
                y: 956.8,
                a: .34
            },
            53: {
                x: 861,
                y: 955.2,
                a: .32
            },
            54: {
                x: 860.95,
                y: 953.65,
                a: .31
            },
            55: {
                y: 952.15,
                a: .29
            },
            56: {
                x: 860.9,
                y: 950.65,
                a: .28
            },
            57: {
                x: 860.85,
                y: 949.2,
                a: .27
            },
            58: {
                x: 860.8,
                y: 947.8,
                a: .25
            },
            59: {
                x: 860.75,
                y: 946.4,
                a: .24
            },
            60: {
                y: 945.05,
                a: .23
            },
            61: {
                x: 860.7,
                y: 943.75,
                a: .21
            },
            62: {
                x: 860.65,
                y: 942.45,
                a: .2
            },
            63: {
                y: 941.2
            },
            64: {
                x: 860.6,
                y: 940,
                a: .18
            },
            65: {
                x: 860.55,
                y: 938.85,
                a: .17
            },
            66: {
                y: 937.7,
                a: .16
            },
            67: {
                x: 860.5,
                y: 936.6,
                a: .15
            },
            68: {
                x: 860.45,
                y: 935.55,
                a: .14
            },
            69: {
                y: 934.5,
                a: .13
            },
            70: {
                x: 860.4,
                y: 933.55,
                a: .12
            },
            71: {
                y: 932.55,
                a: .11
            },
            72: {
                x: 860.35,
                y: 931.65
            },
            73: {
                y: 930.75,
                a: .1
            },
            74: {
                x: 860.3,
                y: 929.9,
                a: .09
            },
            75: {
                y: 929.1,
                a: .08
            },
            76: {
                y: 928.3,
                a: .07
            },
            77: {
                x: 860.25,
                y: 927.55
            },
            78: {
                y: 926.85,
                a: .06
            },
            79: {
                x: 860.2,
                y: 926.2,
                a: .05
            },
            80: {
                y: 925.55
            },
            81: {
                y: 924.95,
                a: .04
            },
            82: {
                x: 860.15,
                y: 924.4
            },
            83: {
                y: 923.85
            },
            84: {
                y: 923.35,
                a: .03
            },
            85: {
                y: 922.9
            },
            86: {
                x: 860.1,
                y: 922.45,
                a: .02
            },
            87: {
                y: 922.05
            },
            88: {
                y: 921.7
            },
            89: {
                y: 921.4,
                a: .01
            },
            90: {
                y: 921.1
            },
            91: {
                x: 860.05,
                y: 920.85
            },
            92: {
                y: 920.65,
                a: 0
            },
            93: {
                y: 920.45
            },
            94: {
                y: 920.3
            },
            95: {
                y: 920.2
            },
            96: {
                y: 920.15
            },
            97: {
                x: 860,
                y: 920
            }
        }).addTimedChild(instance12, 31, 67, {
            31: {
                x: 944,
                y: 1061,
                sx: .7,
                sy: .7,
                ky: 3.142,
                a: 0
            },
            32: {
                x: 945.686,
                y: 1058.334,
                a: .05
            },
            33: {
                x: 947.386,
                y: 1055.684,
                a: .09
            },
            34: {
                x: 949.036,
                y: 1052.984,
                a: .14
            },
            35: {
                x: 950.686,
                y: 1050.284,
                a: .18
            },
            36: {
                x: 952.386,
                y: 1047.634,
                a: .23
            },
            37: {
                x: 954.036,
                y: 1044.934,
                a: .27
            },
            38: {
                x: 955.736,
                y: 1042.284,
                a: .32
            },
            39: {
                x: 957.386,
                y: 1039.584,
                a: .36
            },
            40: {
                x: 959.036,
                y: 1036.884,
                a: .41
            },
            41: {
                x: 960.736,
                y: 1034.234,
                a: .45
            },
            42: {
                x: 962.35,
                y: 1031.55,
                a: .5
            },
            43: {
                x: 961.935,
                y: 1027.134,
                a: .48
            },
            44: {
                x: 961.535,
                y: 1022.784,
                a: .46
            },
            45: {
                x: 961.085,
                y: 1018.484,
                a: .45
            },
            46: {
                x: 960.685,
                y: 1014.284,
                a: .43
            },
            47: {
                x: 960.285,
                y: 1010.184,
                a: .41
            },
            48: {
                x: 959.885,
                y: 1006.134,
                a: .4
            },
            49: {
                x: 959.485,
                y: 1002.184,
                a: .38
            },
            50: {
                x: 959.135,
                y: 998.284,
                a: .37
            },
            51: {
                x: 958.735,
                y: 994.484,
                a: .35
            },
            52: {
                x: 958.385,
                y: 990.784,
                a: .34
            },
            53: {
                x: 958.035,
                y: 987.134,
                a: .32
            },
            54: {
                x: 957.685,
                y: 983.584,
                a: .31
            },
            55: {
                x: 957.335,
                y: 980.134,
                a: .29
            },
            56: {
                x: 957.035,
                y: 976.734,
                a: .28
            },
            57: {
                x: 956.685,
                y: 973.384,
                a: .27
            },
            58: {
                x: 956.385,
                y: 970.184,
                a: .25
            },
            59: {
                x: 956.085,
                y: 967.034,
                a: .24
            },
            60: {
                x: 955.735,
                y: 963.934,
                a: .23
            },
            61: {
                x: 955.485,
                y: 960.934,
                a: .21
            },
            62: {
                x: 955.185,
                y: 958.034,
                a: .2
            },
            63: {
                x: 954.885,
                y: 955.234
            },
            64: {
                x: 954.635,
                y: 952.484,
                a: .18
            },
            65: {
                x: 954.385,
                y: 949.784,
                a: .17
            },
            66: {
                x: 954.135,
                y: 947.234,
                a: .16
            },
            67: {
                x: 953.885,
                y: 944.684,
                a: .15
            },
            68: {
                x: 953.635,
                y: 942.284,
                a: .14
            },
            69: {
                x: 953.385,
                y: 939.934,
                a: .13
            },
            70: {
                x: 953.185,
                y: 937.684,
                a: .12
            },
            71: {
                x: 952.985,
                y: 935.484,
                a: .11
            },
            72: {
                x: 952.785,
                y: 933.384
            },
            73: {
                x: 952.585,
                y: 931.384,
                a: .1
            },
            74: {
                x: 952.385,
                y: 929.434,
                a: .09
            },
            75: {
                x: 952.185,
                y: 927.584,
                a: .08
            },
            76: {
                x: 952.035,
                y: 925.784,
                a: .07
            },
            77: {
                x: 951.835,
                y: 924.084
            },
            78: {
                x: 951.685,
                y: 922.484,
                a: .06
            },
            79: {
                x: 951.535,
                y: 920.934,
                a: .05
            },
            80: {
                x: 951.385,
                y: 919.484
            },
            81: {
                x: 951.285,
                y: 918.084,
                a: .04
            },
            82: {
                x: 951.135,
                y: 916.784
            },
            83: {
                x: 951.035,
                y: 915.584
            },
            84: {
                x: 950.935,
                y: 914.434,
                a: .03
            },
            85: {
                x: 950.785,
                y: 913.384
            },
            86: {
                x: 950.735,
                y: 912.434,
                a: .02
            },
            87: {
                x: 950.635,
                y: 911.534
            },
            88: {
                x: 950.535,
                y: 910.734
            },
            89: {
                x: 950.485,
                y: 909.984,
                a: .01
            },
            90: {
                x: 950.385,
                y: 909.334
            },
            91: {
                x: 950.335,
                y: 908.734
            },
            92: {
                x: 950.285,
                y: 908.284,
                a: 0
            },
            93: {
                y: 907.884
            },
            94: {
                x: 950.235,
                y: 907.534
            },
            95: {
                x: 950.185,
                y: 907.284
            },
            96: {
                y: 907.134
            },
            97: {
                x: 950,
                y: 907
            }
        }).addTimedChild(instance11, 31, 67, {
            31: {
                x: 1002,
                y: 1068,
                sx: .5,
                sy: .5,
                ky: 3.142,
                a: 0
            },
            32: {
                x: 1002.1,
                y: 1059.75,
                a: .05
            },
            33: {
                y: 1051.5,
                a: .09
            },
            34: {
                x: 1002.15,
                y: 1043.2,
                a: .14
            },
            35: {
                x: 1002.2,
                y: 1034.9,
                a: .18
            },
            36: {
                y: 1026.6,
                a: .23
            },
            37: {
                x: 1002.25,
                y: 1018.35,
                a: .27
            },
            38: {
                y: 1010.05,
                a: .32
            },
            39: {
                x: 1002.3,
                y: 1001.75,
                a: .36
            },
            40: {
                x: 1002.35,
                y: 993.45,
                a: .41
            },
            41: {
                y: 985.2,
                a: .45
            },
            42: {
                y: 976.95,
                a: .5
            },
            43: {
                x: 1002.4,
                y: 970.25,
                a: .48
            },
            44: {
                y: 963.65,
                a: .46
            },
            45: {
                x: 1002.35,
                y: 957.15,
                a: .45
            },
            46: {
                y: 950.75,
                a: .43
            },
            47: {
                y: 944.5,
                a: .41
            },
            48: {
                y: 938.4,
                a: .4
            },
            49: {
                y: 932.4,
                a: .38
            },
            50: {
                y: 926.5,
                a: .37
            },
            51: {
                y: 920.75,
                a: .35
            },
            52: {
                x: 1002.3,
                y: 915.1,
                a: .34
            },
            53: {
                y: 909.6,
                a: .32
            },
            54: {
                y: 904.2,
                a: .31
            },
            55: {
                y: 898.9,
                a: .29
            },
            56: {
                y: 893.75,
                a: .28
            },
            57: {
                y: 888.75,
                a: .27
            },
            58: {
                y: 883.85,
                a: .25
            },
            59: {
                x: 1002.25,
                y: 879.05,
                a: .24
            },
            60: {
                y: 874.4,
                a: .23
            },
            61: {
                y: 869.85,
                a: .21
            },
            62: {
                y: 865.45,
                a: .2
            },
            63: {
                y: 861.15
            },
            64: {
                y: 857,
                a: .18
            },
            65: {
                y: 852.95,
                a: .17
            },
            66: {
                y: 849,
                a: .16
            },
            67: {
                y: 845.2,
                a: .15
            },
            68: {
                x: 1002.2,
                y: 841.5,
                a: .14
            },
            69: {
                y: 837.95,
                a: .13
            },
            70: {
                y: 834.55,
                a: .12
            },
            71: {
                y: 831.2,
                a: .11
            },
            72: {
                y: 828
            },
            73: {
                y: 824.95,
                a: .1
            },
            74: {
                y: 822,
                a: .09
            },
            75: {
                y: 819.2,
                a: .08
            },
            76: {
                y: 816.5,
                a: .07
            },
            77: {
                y: 813.9
            },
            78: {
                y: 811.45,
                a: .06
            },
            79: {
                y: 809.1,
                a: .05
            },
            80: {
                y: 806.9
            },
            81: {
                x: 1002.15,
                y: 804.8,
                a: .04
            },
            82: {
                y: 802.85
            },
            83: {
                y: 801
            },
            84: {
                y: 799.3,
                a: .03
            },
            85: {
                y: 797.7
            },
            86: {
                y: 796.2,
                a: .02
            },
            87: {
                y: 794.85
            },
            88: {
                y: 793.65
            },
            89: {
                y: 792.5,
                a: .01
            },
            90: {
                y: 791.55
            },
            91: {
                y: 790.65
            },
            92: {
                y: 789.95,
                a: 0
            },
            93: {
                y: 789.3
            },
            94: {
                y: 788.8
            },
            95: {
                y: 788.45
            },
            96: {
                y: 788.2
            },
            97: {
                x: 1002,
                y: 788
            }
        }).addTimedChild(instance4).addTimedChild(instance3).addTimedChild(instance2).addTimedChild(instance1).addAction(function() {
            this.stop()
        }, 8), this.labels.forEach((label, index) => {
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
        sceneSlotFade: "../../images/en/loader/sceneSlotFade.png",
        sceneSlotDividerSingle: "../../images/en/loader/sceneSlotDividerSingle.png",
        paytable1Text: "../../images/en/loader/paytable1Text.png",
        tile14Fish: "../../images/en/loader/tile14Fish.png",
        tile16Fish: "../../images/en/loader/tile16Fish.png",
        tile10Fish: "../../images/en/loader/tile10Fish.png",
        tile12FishFin: "../../images/en/loader/tile12FishFin.png",
        tile12Fish: "../../images/en/loader/tile12Fish.png",
        paytable1Water: "../../images/en/loader/paytable1Water.png",
        paytable1BoatFront: "../../images/en/loader/paytable1BoatFront.png",
        megaWinChFingersR: "../../images/en/loader/megaWinChFingersR.png",
        megaWinCupBlink: "../../images/en/loader/megaWinCupBlink.png",
        megaWinCup1: "../../images/en/loader/megaWinCup1.png",
        megaWinCup2: "../../images/en/loader/megaWinCup2.png",
        megaWinChBrowR: "../../images/en/loader/megaWinChBrowR.png",
        megaWinChBrowL: "../../images/en/loader/megaWinChBrowL.png",
        megaWinChMustacheL: "../../images/en/loader/megaWinChMustacheL.png",
        megaWinChMustacheR: "../../images/en/loader/megaWinChMustacheR.png",
        megaWinChFace: "../../images/en/loader/megaWinChFace.png",
        megaWinChIrisL: "../../images/en/loader/megaWinChIrisL.png",
        megaWinChIrisR: "../../images/en/loader/megaWinChIrisR.png",
        megaWinChHandR: "../../images/en/loader/megaWinChHandR.png",
        megaWinChEyeR: "../../images/en/loader/megaWinChEyeR.png",
        megaWinChEyeL: "../../images/en/loader/megaWinChEyeL.png",
        paytable1ChHatFront: "../../images/en/loader/paytable1ChHatFront.png",
        paytable1ChHatBack: "../../images/en/loader/paytable1ChHatBack.png",
        megaWinChArmR: "../../images/en/loader/megaWinChArmR.png",
        paytable1ChTorso: "../../images/en/loader/paytable1ChTorso.png",
        megaWinChSleeveR: "../../images/en/loader/megaWinChSleeveR.png",
        paytable1BoatBack: "../../images/en/loader/paytable1BoatBack.png",
        logo: "../../images/en/loader/logo.png",
        paytable1TextBlink: "../../images/en/loader/paytable1TextBlink.png",
        whiteShine1: "../../images/en/loader/whiteShine1.png",
        bigLogoPlate: "../../images/en/loader/bigLogoPlate.png",
        paytable1TitlePlate: "../../images/en/loader/paytable1TitlePlate.png",
        bigWinDropletsSmall: "../../images/en/loader/bigWinDropletsSmall.png",
        tile9ActiveFxParticles: "../../images/en/loader/tile9ActiveFxParticles.png",
        superWinSplashUpRight: "../../images/en/loader/superWinSplashUpRight.png",
        superWinSplashSmall: "../../images/en/loader/superWinSplashSmall.png",
        superWinSplashLeft: "../../images/en/loader/superWinSplashLeft.png",
        slotParticles1new: "../../images/en/loader/slotParticles1new.png",
        paytableGlow: "../../images/en/loader/paytableGlow.png",
        tile14FishBlue: "../../images/en/loader/tile14FishBlue.png",
        tile12FishBlue: "../../images/en/loader/tile12FishBlue.png",
        sceneSpecialHook7: "../../images/en/loader/sceneSpecialHook7.png",
        sceneSpecialHook4: "../../images/en/loader/sceneSpecialHook4.png",
        sceneSpecialHook3: "../../images/en/loader/sceneSpecialHook3.png",
        sceneSpecialHook2: "../../images/en/loader/sceneSpecialHook2.png",
        sceneSpecialHook1: "../../images/en/loader/sceneSpecialHook1.png",
        sceneSpecialHook9: "../../images/en/loader/sceneSpecialHook9.png",
        sceneWaveParticles: "../../images/en/loader/sceneWaveParticles.png",
        sceneSpecialHook8: "../../images/en/loader/sceneSpecialHook8.png",
        sceneSpecialHook6: "../../images/en/loader/sceneSpecialHook6.png",
        sceneSpecialHook5: "../../images/en/loader/sceneSpecialHook5.png",
        sceneSpecialSignText: "../../images/en/loader/sceneSpecialSignText.png",
        sceneWaterSmall: "../../images/en/loader/sceneWaterSmall.png",
        sceneSpecialFlags1: "../../images/en/loader/sceneSpecialFlags1.png",
        sceneSpecialFlags3: "../../images/en/loader/sceneSpecialFlags3.png",
        sceneSpecialFlags2: "../../images/en/loader/sceneSpecialFlags2.png",
        sceneSpecialFlags5: "../../images/en/loader/sceneSpecialFlags5.png",
        sceneSpecialBoat4: "../../images/en/loader/sceneSpecialBoat4.png",
        sceneSpecialBoat3: "../../images/en/loader/sceneSpecialBoat3.png",
        sceneSpecialBoat2: "../../images/en/loader/sceneSpecialBoat2.png",
        sceneSpecial1: "../../images/en/loader/sceneSpecial1.jpg",
        sceneSlotSpecial2: "../../images/en/loader/sceneSlotSpecial2.jpg"
    }
}(com.casino.game.utils || {});