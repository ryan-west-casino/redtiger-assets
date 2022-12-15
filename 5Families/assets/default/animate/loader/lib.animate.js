! function(utils) {
    var PIXI = utils.pixiInstance,
        lib = utils.AnimationsCache.LoadingScreen = {},
        MovieClip = PIXI.animate.MovieClip,
        Container = (PIXI.animate.Ease, PIXI.Container),
        Sprite = PIXI.Sprite,
        fromFrame = utils.fromFrame;
    lib.tile18Spark = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("bigWinBlink2")).setTransform(4, 9, 1.7, 1.7);
        this.addChild(instance1)
    }), lib.smoke2 = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("sceneSlotSpecialLighter2"));
        this.addChild(instance1), this.children[0].blendMode = 1
    }), lib.smoke = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("fxSmokeBIgLoop_00000")).setTransform(-22, -25, 1.38, 1.38);
        this.addChild(instance1), this.children[0].blendMode = 1
    }), lib.logoTextAdd = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("logo"));
        this.addChild(instance1), this.children[0].blendMode = 1
    }), lib.winLineGlowTile1 = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("winLineGlowTile1"));
        this.addChild(instance1), this.children[0].blendMode = 1
    }), lib.paytable1PaleteGlow = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("paytable1PaleteGlow1"));
        this.addChild(instance1)
    }), lib.logoPlateShine = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("logoPlateShine"));
        this.addChild(instance1)
    }), lib.paytable1PlateShine1 = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("paytable1PlateShine"));
        this.addChild(instance1)
    }), lib.logoText = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("logo"));
        this.addChild(instance1)
    }), lib.logoPlate = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("logoPlate"));
        this.addChild(instance1)
    }), lib.paytablePaleteGlowUp = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("paytablePaleteGlowUp"));
        this.addChild(instance1), this.children[0].blendMode = 1
    }), lib.paytable1TextAdd = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("paytable1Text"));
        this.addChild(instance1), this.children[0].blendMode = 1
    }), lib.paytable1Text = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("paytable1Text"));
        this.addChild(instance1)
    }), lib.paytable1Plate = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("paytable1Plate"));
        this.addChild(instance1)
    }), lib.bigWinSumShadow = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("bigWinSumShadow"));
        this.addChild(instance1)
    }), lib.tile18Smoke = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("splashSmokeS")).setTransform(-53, -200, 2, 2);
        this.addChild(instance1)
    }), lib.tile18CigarGlow = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("wheelFireGlow")).setTransform(36, 31, .15, .15);
        this.addChild(instance1)
    }), lib.tile18CigarGlowLoop = MovieClip.extend(function() {
        MovieClip.call(this, {
            duration: 68
        });
        var instance1 = new lib.tile18CigarGlow;
        this.addTimedChild(instance1, 0, 68, {
            0: {
                x: -1.1,
                y: .3,
                a: .5
            },
            2: {
                a: .52
            },
            3: {
                a: .54
            },
            4: {
                a: .55
            },
            5: {
                a: .57
            },
            6: {
                a: .59
            },
            7: {
                a: .61
            },
            8: {
                a: .63
            },
            9: {
                a: .65
            },
            14: {
                a: .64
            },
            15: {
                a: .62
            },
            16: {
                a: .61
            },
            17: {
                a: .59
            },
            18: {
                a: .58
            },
            19: {
                a: .57
            },
            20: {
                a: .55
            },
            21: {
                a: .54
            },
            22: {
                a: .53
            },
            23: {
                a: .51
            },
            24: {
                a: .5
            },
            31: {
                a: .51
            },
            32: {
                a: .53
            },
            33: {
                a: .54
            },
            34: {
                a: .55
            },
            35: {
                a: .57
            },
            36: {
                a: .58
            },
            37: {
                a: .59
            },
            38: {
                a: .61
            },
            39: {
                a: .62
            },
            40: {
                a: .64
            },
            41: {
                a: .65
            },
            52: {
                a: .64
            },
            53: {
                a: .62
            },
            54: {
                a: .61
            },
            55: {
                a: .59
            },
            56: {
                a: .58
            },
            57: {
                a: .57
            },
            58: {
                a: .55
            },
            59: {
                a: .54
            },
            60: {
                a: .53
            },
            61: {
                a: .51
            },
            62: {
                a: .5
            }
        }), this.labels.forEach((label, index) => {
            var labelEndPosition = this.labels[index + 1] ? this.labels[index + 1].position - 1 : this._totalFrames - 1;
            this.addAction(() => this.emit("label_end", this.currentLabel), labelEndPosition)
        })
    }), lib.tile18CigarSmoke = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("featureSpecialSmoke"));
        this.addChild(instance1)
    }), lib.tile18SmokeLoop = MovieClip.extend(function() {
        MovieClip.call(this, {
            duration: 110
        });
        var instance2 = new lib.tile18CigarSmoke,
            instance1 = new lib.tile18CigarSmoke;
        this.addTimedChild(instance2, 0, 110, {
            0: {
                x: 46.85,
                y: 3.7,
                sx: .117,
                sy: .117,
                kx: .383,
                ky: 2.759,
                a: .2
            },
            1: {
                x: 47.848,
                y: -.917,
                sx: .125,
                sy: .125,
                a: .22
            },
            2: {
                x: 48.845,
                y: -5.634,
                sx: .132,
                sy: .132,
                a: .23
            },
            3: {
                x: 49.792,
                y: -10.302,
                sx: .14,
                sy: .14,
                a: .25
            },
            4: {
                x: 50.788,
                y: -14.969,
                sx: .147,
                sy: .147,
                a: .27
            },
            5: {
                x: 51.836,
                y: -19.636,
                sx: .154,
                sy: .154,
                a: .29
            },
            6: {
                x: 52.782,
                y: -24.354,
                sx: .162,
                sy: .162,
                a: .31
            },
            7: {
                x: 53.779,
                y: -29.021,
                sx: .169,
                sy: .169,
                a: .33
            },
            8: {
                x: 54.776,
                y: -33.738,
                sx: .176,
                sy: .176,
                a: .34
            },
            9: {
                x: 55.723,
                y: -38.405,
                sx: .184,
                sy: .184,
                a: .36
            },
            10: {
                x: 56.769,
                y: -43.073,
                sx: .191,
                sy: .191,
                a: .38
            },
            11: {
                x: 57.716,
                y: -47.74,
                sx: .199,
                sy: .199,
                a: .4
            },
            12: {
                x: 58.712,
                y: -52.458,
                sx: .206,
                sy: .206,
                a: .42
            },
            13: {
                x: 59.709,
                y: -57.125,
                sx: .213,
                sy: .213,
                a: .44
            },
            14: {
                x: 60.656,
                y: -61.792,
                sx: .221,
                sy: .221,
                a: .45
            },
            15: {
                x: 61.653,
                y: -66.509,
                sx: .228,
                sy: .228,
                a: .47
            },
            16: {
                x: 62.65,
                y: -71.127,
                sx: .236,
                sy: .236,
                a: .49
            },
            17: {
                x: 63.646,
                y: -75.844,
                sx: .243,
                sy: .243,
                a: .51
            },
            18: {
                x: 64.644,
                y: -80.512,
                sx: .25,
                sy: .25,
                a: .53
            },
            19: {
                x: 65.597,
                y: -85.23,
                sx: .258,
                sy: .258,
                a: .55
            },
            20: {
                x: 66.588,
                y: -89.898,
                sx: .265,
                sy: .265,
                a: .56
            },
            21: {
                x: 67.59,
                y: -94.614,
                sx: .273,
                sy: .273,
                a: .58
            },
            22: {
                x: 68.588,
                y: -99.282,
                sx: .28,
                sy: .28,
                a: .6
            },
            23: {
                x: 69.528,
                y: -103.949,
                sx: .287,
                sy: .287,
                a: .62
            },
            24: {
                x: 70.482,
                y: -108.616,
                sx: .295,
                sy: .295,
                a: .64
            },
            25: {
                x: 71.522,
                y: -113.334,
                sx: .302,
                sy: .302,
                a: .65
            },
            26: {
                x: 72.475,
                y: -118.001,
                sx: .309,
                sy: .309,
                a: .67
            },
            27: {
                x: 73.472,
                y: -122.718,
                sx: .317,
                sy: .317,
                a: .69
            },
            28: {
                x: 74.469,
                y: -127.385,
                sx: .324,
                sy: .324,
                a: .71
            },
            29: {
                x: 75.416,
                y: -132.003,
                sx: .332,
                sy: .332,
                a: .73
            },
            30: {
                x: 76.463,
                y: -136.72,
                sx: .339,
                sy: .339,
                a: .75
            },
            31: {
                x: 77.41,
                y: -141.388,
                sx: .346,
                sy: .346,
                a: .76
            },
            32: {
                x: 78.406,
                y: -146.105,
                sx: .354,
                sy: .354,
                a: .78
            },
            33: {
                x: 79.403,
                y: -150.772,
                sx: .361,
                sy: .361,
                a: .8
            },
            34: {
                x: 80.351,
                y: -155.49,
                sx: .369,
                sy: .369,
                a: .82
            },
            35: {
                x: 81.397,
                y: -160.157,
                sx: .376,
                sy: .376,
                a: .84
            },
            36: {
                x: 82.344,
                y: -164.824,
                sx: .383,
                sy: .383,
                a: .86
            },
            37: {
                x: 83.391,
                y: -169.542,
                sx: .391,
                sy: .391,
                a: .87
            },
            38: {
                x: 84.339,
                y: -174.211,
                sx: .398,
                sy: .398,
                ky: 2.758,
                a: .89
            },
            39: {
                x: 85.286,
                y: -178.879,
                sx: .405,
                sy: .405,
                a: .91
            },
            40: {
                x: 86.332,
                y: -183.596,
                sx: .413,
                sy: .413,
                a: .93
            },
            41: {
                x: 87.279,
                y: -188.213,
                sx: .42,
                sy: .42,
                a: .95
            },
            42: {
                x: 88.327,
                y: -192.93,
                sx: .428,
                sy: .428,
                a: .96
            },
            43: {
                x: 89.273,
                y: -197.598,
                sx: .435,
                sy: .435,
                a: .98
            },
            44: {
                x: 90.3,
                y: -202.25,
                sx: .442,
                sy: .442,
                a: 1
            },
            45: {
                x: 92.105,
                y: -207.811,
                sx: .451,
                sy: .451,
                kx: .381,
                ky: 2.76,
                a: .98
            },
            46: {
                x: 93.974,
                y: -213.462,
                sx: .46,
                sy: .46,
                kx: .38,
                ky: 2.762,
                a: .97
            },
            47: {
                x: 95.757,
                y: -219.071,
                sx: .468,
                sy: .468,
                kx: .378,
                ky: 2.764,
                a: .95
            },
            48: {
                x: 97.651,
                y: -224.711,
                sx: .477,
                sy: .477,
                kx: .376,
                ky: 2.765,
                a: .94
            },
            49: {
                x: 99.563,
                y: -230.392,
                sx: .485,
                sy: .485,
                kx: .374,
                ky: 2.767,
                a: .92
            },
            50: {
                x: 101.436,
                y: -235.973,
                sx: .494,
                sy: .494,
                kx: .373,
                ky: 2.769,
                a: .91
            },
            51: {
                x: 103.369,
                y: -241.545,
                sx: .502,
                sy: .502,
                kx: .371,
                ky: 2.771,
                a: .89
            },
            52: {
                x: 105.32,
                y: -247.156,
                sx: .511,
                sy: .511,
                kx: .369,
                ky: 2.772,
                a: .88
            },
            53: {
                x: 107.231,
                y: -252.773,
                sx: .52,
                sy: .52,
                kx: .368,
                ky: 2.774,
                a: .86
            },
            54: {
                x: 109.255,
                y: -258.319,
                sx: .528,
                sy: .528,
                kx: .366,
                ky: 2.776,
                a: .85
            },
            55: {
                x: 111.244,
                y: -263.966,
                sx: .537,
                sy: .537,
                kx: .364,
                ky: 2.777,
                a: .83
            },
            56: {
                x: 113.246,
                y: -269.5,
                sx: .545,
                sy: .545,
                kx: .362,
                ky: 2.779,
                a: .82
            },
            57: {
                x: 115.31,
                y: -275.129,
                sx: .554,
                sy: .554,
                kx: .361,
                ky: 2.781,
                a: .8
            },
            58: {
                x: 117.34,
                y: -280.701,
                sx: .562,
                sy: .562,
                kx: .359,
                ky: 2.783,
                a: .79
            },
            59: {
                x: 119.43,
                y: -286.271,
                sx: .571,
                sy: .571,
                kx: .357,
                ky: 2.784,
                a: .77
            },
            60: {
                x: 121.483,
                y: -291.829,
                sx: .58,
                sy: .58,
                kx: .355,
                ky: 2.786,
                a: .75
            },
            61: {
                x: 123.547,
                y: -297.328,
                sx: .588,
                sy: .588,
                kx: .354,
                ky: 2.788,
                a: .74
            },
            62: {
                x: 125.778,
                y: -302.923,
                sx: .597,
                sy: .597,
                kx: .352,
                ky: 2.79,
                a: .72
            },
            63: {
                x: 127.873,
                y: -308.466,
                sx: .605,
                sy: .605,
                kx: .35,
                ky: 2.791,
                a: .71
            },
            64: {
                x: 130.03,
                y: -313.996,
                sx: .614,
                sy: .614,
                kx: .349,
                ky: 2.793,
                a: .69
            },
            65: {
                x: 132.198,
                y: -319.567,
                sx: .623,
                sy: .623,
                kx: .347,
                ky: 2.795,
                a: .68
            },
            66: {
                x: 134.378,
                y: -325.082,
                sx: .631,
                sy: .631,
                kx: .345,
                ky: 2.796,
                a: .66
            },
            67: {
                x: 136.571,
                y: -330.585,
                sx: .64,
                sy: .64,
                kx: .343,
                ky: 2.798,
                a: .64
            },
            68: {
                x: 138.876,
                y: -336.139,
                sx: .648,
                sy: .648,
                kx: .342,
                ky: 2.8,
                a: .63
            },
            69: {
                x: 141.103,
                y: -341.584,
                sx: .657,
                sy: .657,
                kx: .34,
                ky: 2.802,
                a: .62
            },
            70: {
                x: 143.382,
                y: -347.117,
                sx: .665,
                sy: .665,
                kx: .338,
                ky: 2.803,
                a: .6
            },
            71: {
                x: 145.678,
                y: -352.596,
                sx: .674,
                sy: .674,
                kx: .337,
                ky: 2.805,
                a: .59
            },
            72: {
                x: 147.936,
                y: -358.062,
                sx: .683,
                sy: .683,
                kx: .335,
                ky: 2.807,
                a: .57
            },
            73: {
                x: 150.303,
                y: -363.624,
                sx: .691,
                sy: .691,
                kx: .333,
                ky: 2.809,
                a: .55
            },
            74: {
                x: 152.589,
                y: -369.078,
                sx: .7,
                sy: .7,
                kx: .331,
                ky: 2.81,
                a: .54
            },
            75: {
                x: 154.991,
                y: -374.532,
                sx: .708,
                sy: .708,
                kx: .33,
                ky: 2.812,
                a: .52
            },
            76: {
                x: 157.397,
                y: -380.016,
                sx: .717,
                sy: .717,
                kx: .328,
                ky: 2.814,
                a: .51
            },
            77: {
                x: 159.77,
                y: -385.453,
                sx: .725,
                sy: .725,
                kx: .326,
                ky: 2.815,
                a: .49
            },
            78: {
                x: 162.205,
                y: -390.924,
                sx: .734,
                sy: .734,
                kx: .324,
                ky: 2.817,
                a: .48
            },
            79: {
                x: 164.601,
                y: -396.397,
                sx: .743,
                sy: .743,
                kx: .323,
                ky: 2.819,
                a: .46
            },
            80: {
                x: 167.055,
                y: -401.755,
                sx: .751,
                sy: .751,
                kx: .321,
                ky: 2.821,
                a: .45
            },
            81: {
                x: 169.535,
                y: -407.252,
                sx: .76,
                sy: .76,
                kx: .319,
                ky: 2.822,
                a: .43
            },
            82: {
                x: 172.064,
                y: -412.692,
                sx: .768,
                sy: .768,
                kx: .318,
                ky: 2.824,
                a: .41
            },
            83: {
                x: 174.518,
                y: -418.078,
                sx: .777,
                sy: .777,
                kx: .316,
                ky: 2.826,
                a: .4
            },
            84: {
                x: 177.076,
                y: -423.505,
                sx: .785,
                sy: .785,
                kx: .314,
                ky: 2.828,
                a: .38
            },
            85: {
                x: 179.6,
                y: -428.879,
                sx: .794,
                sy: .794,
                kx: .312,
                ky: 2.829,
                a: .37
            },
            86: {
                x: 182.181,
                y: -434.292,
                sx: .803,
                sy: .803,
                kx: .311,
                ky: 2.831,
                a: .36
            },
            87: {
                x: 184.732,
                y: -439.692,
                sx: .811,
                sy: .811,
                kx: .309,
                ky: 2.833,
                a: .34
            },
            88: {
                x: 187.292,
                y: -445.081,
                sx: .82,
                sy: .82,
                kx: .307,
                ky: 2.834,
                a: .32
            },
            89: {
                x: 190.013,
                y: -450.519,
                sx: .828,
                sy: .828,
                kx: .305,
                ky: 2.836,
                a: .31
            },
            90: {
                x: 192.601,
                y: -455.895,
                sx: .837,
                sy: .837,
                kx: .304,
                ky: 2.838,
                a: .29
            },
            91: {
                x: 195.253,
                y: -461.219,
                sx: .846,
                sy: .846,
                kx: .302,
                ky: 2.84,
                a: .28
            },
            92: {
                x: 197.908,
                y: -466.581,
                sx: .854,
                sy: .854,
                kx: .3,
                ky: 2.841,
                a: .26
            },
            93: {
                x: 200.58,
                y: -471.935,
                sx: .863,
                sy: .863,
                kx: .299,
                ky: 2.843,
                a: .25
            },
            94: {
                x: 203.267,
                y: -477.278,
                sx: .871,
                sy: .871,
                kx: .297,
                ky: 2.845,
                a: .23
            },
            95: {
                x: 206.015,
                y: -482.624,
                sx: .88,
                sy: .88,
                kx: .295,
                ky: 2.847,
                a: .21
            },
            96: {
                x: 208.775,
                y: -487.954,
                sx: .888,
                sy: .888,
                kx: .293,
                ky: 2.848,
                a: .2
            },
            97: {
                x: 211.545,
                y: -493.314,
                sx: .897,
                sy: .897,
                kx: .292,
                ky: 2.85,
                a: .18
            },
            98: {
                x: 214.283,
                y: -498.631,
                sx: .906,
                sy: .906,
                kx: .29,
                ky: 2.852,
                a: .17
            },
            99: {
                x: 217.071,
                y: -503.883,
                sx: .914,
                sy: .914,
                kx: .288,
                ky: 2.853,
                a: .15
            },
            100: {
                x: 219.881,
                y: -509.226,
                sx: .923,
                sy: .923,
                kx: .286,
                ky: 2.855,
                a: .14
            },
            101: {
                x: 222.703,
                y: -514.47,
                sx: .931,
                sy: .931,
                kx: .285,
                ky: 2.857,
                a: .13
            },
            102: {
                x: 225.537,
                y: -519.741,
                sx: .94,
                sy: .94,
                kx: .283,
                ky: 2.859,
                a: .11
            },
            103: {
                x: 228.484,
                y: -525.059,
                sx: .948,
                sy: .948,
                kx: .281,
                ky: 2.86,
                a: .09
            },
            104: {
                x: 231.336,
                y: -530.321,
                sx: .957,
                sy: .957,
                kx: .28,
                ky: 2.862,
                a: .08
            },
            105: {
                x: 234.254,
                y: -535.62,
                sx: .966,
                sy: .966,
                kx: .278,
                ky: 2.864,
                a: .06
            },
            106: {
                x: 237.134,
                y: -540.862,
                sx: .974,
                sy: .974,
                kx: .276,
                ky: 2.865,
                a: .05
            },
            107: {
                x: 240.036,
                y: -546.102,
                sx: .983,
                sy: .983,
                kx: .274,
                ky: 2.867,
                a: .03
            },
            108: {
                x: 243.042,
                y: -551.38,
                sx: .991,
                sy: .991,
                kx: .273,
                ky: 2.869,
                a: .02
            },
            109: {
                x: 245.9,
                y: -556.45,
                sx: 1,
                sy: 1,
                kx: .271,
                ky: 2.871,
                a: 0
            }
        }).addTimedChild(instance1, 0, 110, {
            0: {
                x: -70.35,
                y: -287.3,
                sx: .58,
                sy: .58,
                r: .31,
                a: .75
            },
            1: {
                x: -71.967,
                y: -292.788,
                sx: .588,
                sy: .588,
                r: .309,
                a: .73
            },
            2: {
                x: -73.591,
                y: -298.383,
                sx: .597,
                sy: .597,
                r: .308,
                a: .72
            },
            3: {
                x: -75.333,
                y: -303.879,
                sx: .605,
                sy: .605,
                r: .307,
                a: .7
            },
            4: {
                x: -77.024,
                y: -309.52,
                sx: .614,
                sy: .614,
                r: .306,
                a: .69
            },
            5: {
                x: -78.673,
                y: -315.054,
                sx: .622,
                sy: .622,
                a: .67
            },
            6: {
                x: -80.427,
                y: -320.592,
                sx: .631,
                sy: .631,
                r: .305,
                a: .66
            },
            7: {
                x: -82.134,
                y: -326.12,
                sx: .64,
                sy: .64,
                r: .304,
                a: .64
            },
            8: {
                x: -83.808,
                y: -331.663,
                sx: .648,
                sy: .648,
                r: .303,
                a: .63
            },
            9: {
                x: -85.583,
                y: -337.191,
                sx: .657,
                sy: .657,
                a: .61
            },
            10: {
                x: -87.361,
                y: -342.764,
                sx: .665,
                sy: .665,
                r: .302,
                a: .6
            },
            11: {
                x: -89.052,
                y: -348.298,
                sx: .674,
                sy: .674,
                r: .301,
                a: .58
            },
            12: {
                x: -90.8,
                y: -353.825,
                sx: .683,
                sy: .683,
                r: .3,
                a: .57
            },
            13: {
                x: -92.597,
                y: -359.348,
                sx: .691,
                sy: .691,
                r: .299,
                a: .55
            },
            14: {
                x: -94.311,
                y: -364.866,
                sx: .7,
                sy: .7,
                a: .54
            },
            15: {
                x: -96.172,
                y: -370.386,
                sx: .708,
                sy: .708,
                r: .298,
                a: .52
            },
            16: {
                x: -97.946,
                y: -375.956,
                sx: .717,
                sy: .717,
                r: .297,
                a: .5
            },
            17: {
                x: -99.723,
                y: -381.467,
                sx: .725,
                sy: .725,
                r: .296,
                a: .49
            },
            18: {
                x: -101.555,
                y: -386.982,
                sx: .734,
                sy: .734,
                r: .295,
                a: .47
            },
            19: {
                x: -103.345,
                y: -392.489,
                sx: .743,
                sy: .743,
                a: .46
            },
            20: {
                x: -105.144,
                y: -397.949,
                sx: .751,
                sy: .751,
                r: .294,
                a: .45
            },
            21: {
                x: -106.999,
                y: -403.512,
                sx: .76,
                sy: .76,
                r: .293,
                a: .43
            },
            22: {
                x: -108.861,
                y: -409.015,
                sx: .768,
                sy: .768,
                r: .292,
                a: .41
            },
            23: {
                x: -110.683,
                y: -414.519,
                sx: .777,
                sy: .777,
                r: .291,
                a: .4
            },
            24: {
                x: -112.553,
                y: -420.019,
                sx: .785,
                sy: .785,
                a: .38
            },
            25: {
                x: -114.435,
                y: -425.476,
                sx: .794,
                sy: .794,
                r: .29,
                a: .37
            },
            26: {
                x: -116.377,
                y: -430.971,
                sx: .803,
                sy: .803,
                r: .289,
                a: .35
            },
            27: {
                x: -118.165,
                y: -436.467,
                sx: .811,
                sy: .811,
                r: .288,
                a: .34
            },
            28: {
                x: -120.119,
                y: -441.954,
                sx: .82,
                sy: .82,
                a: .32
            },
            29: {
                x: -121.982,
                y: -447.453,
                sx: .828,
                sy: .828,
                r: .287,
                a: .3
            },
            30: {
                x: -123.886,
                y: -452.891,
                sx: .837,
                sy: .837,
                r: .286,
                a: .29
            },
            31: {
                x: -125.814,
                y: -458.377,
                sx: .846,
                sy: .846,
                r: .285,
                a: .28
            },
            32: {
                x: -127.791,
                y: -463.913,
                sx: .854,
                sy: .854,
                r: .284,
                a: .26
            },
            33: {
                x: -129.672,
                y: -469.344,
                sx: .863,
                sy: .863,
                a: .25
            },
            34: {
                x: -131.619,
                y: -474.884,
                sx: .871,
                sy: .871,
                r: .283,
                a: .23
            },
            35: {
                x: -133.562,
                y: -480.308,
                sx: .88,
                sy: .88,
                r: .282,
                a: .21
            },
            36: {
                x: -135.469,
                y: -485.732,
                sx: .888,
                sy: .888,
                r: .281,
                a: .2
            },
            37: {
                x: -137.426,
                y: -491.206,
                sx: .897,
                sy: .897,
                r: .28,
                a: .18
            },
            38: {
                x: -139.493,
                y: -496.683,
                sx: .906,
                sy: .906,
                a: .17
            },
            39: {
                x: -141.422,
                y: -502.102,
                sx: .914,
                sy: .914,
                r: .279,
                a: .15
            },
            40: {
                x: -143.401,
                y: -507.621,
                sx: .923,
                sy: .923,
                r: .278,
                a: .14
            },
            41: {
                x: -145.443,
                y: -513.036,
                sx: .931,
                sy: .931,
                r: .277,
                a: .12
            },
            42: {
                x: -147.382,
                y: -518.508,
                sx: .94,
                sy: .94,
                r: .276,
                a: .11
            },
            43: {
                x: -149.431,
                y: -523.912,
                sx: .948,
                sy: .948,
                a: .09
            },
            44: {
                x: -151.491,
                y: -529.324,
                sx: .957,
                sy: .957,
                r: .275,
                a: .08
            },
            45: {
                x: -153.499,
                y: -534.781,
                sx: .966,
                sy: .966,
                r: .274,
                a: .06
            },
            46: {
                x: -155.52,
                y: -540.28,
                sx: .974,
                sy: .974,
                r: .273,
                a: .05
            },
            47: {
                x: -157.597,
                y: -545.638,
                sx: .983,
                sy: .983,
                a: .03
            },
            48: {
                x: -159.583,
                y: -551.093,
                sx: .991,
                sy: .991,
                r: .272,
                a: .02
            },
            49: {
                x: -161.8,
                y: -556.45,
                sx: 1,
                sy: 1,
                r: .271,
                a: 0
            },
            50: {
                x: -3.25,
                y: 10.3,
                sx: .117,
                sy: .117,
                r: .121,
                a: .2
            },
            51: {
                x: -5.055,
                y: 5.883,
                sx: .125,
                sy: .125,
                r: .126,
                a: .22
            },
            52: {
                x: -6.865,
                y: 1.412,
                sx: .132,
                sy: .132,
                r: .13,
                a: .23
            },
            53: {
                x: -8.631,
                y: -3.01,
                sx: .14,
                sy: .14,
                r: .135,
                a: .25
            },
            54: {
                x: -10.303,
                y: -7.484,
                sx: .147,
                sy: .147,
                r: .139,
                a: .27
            },
            55: {
                x: -11.981,
                y: -12.011,
                sx: .154,
                sy: .154,
                r: .144,
                a: .29
            },
            56: {
                x: -13.614,
                y: -16.54,
                sx: .162,
                sy: .162,
                r: .149,
                a: .31
            },
            57: {
                x: -15.203,
                y: -21.072,
                sx: .169,
                sy: .169,
                r: .153,
                a: .33
            },
            58: {
                x: -16.798,
                y: -25.655,
                sx: .176,
                sy: .176,
                r: .158,
                a: .34
            },
            59: {
                x: -18.299,
                y: -30.242,
                sx: .184,
                sy: .184,
                r: .162,
                a: .36
            },
            60: {
                x: -19.806,
                y: -34.83,
                sx: .191,
                sy: .191,
                r: .167,
                a: .38
            },
            61: {
                x: -21.168,
                y: -39.421,
                sx: .199,
                sy: .199,
                r: .171,
                a: .4
            },
            62: {
                x: -22.586,
                y: -44.065,
                sx: .206,
                sy: .206,
                r: .176,
                a: .42
            },
            63: {
                x: -23.909,
                y: -48.711,
                sx: .213,
                sy: .213,
                r: .181,
                a: .44
            },
            64: {
                x: -25.238,
                y: -53.36,
                sx: .221,
                sy: .221,
                r: .185,
                a: .45
            },
            65: {
                x: -26.523,
                y: -57.961,
                sx: .228,
                sy: .228,
                r: .19,
                a: .47
            },
            66: {
                x: -27.764,
                y: -62.665,
                sx: .236,
                sy: .236,
                r: .194,
                a: .49
            },
            67: {
                x: -28.96,
                y: -67.372,
                sx: .243,
                sy: .243,
                r: .199,
                a: .51
            },
            68: {
                x: -30.062,
                y: -72.081,
                sx: .25,
                sy: .25,
                r: .203,
                a: .53
            },
            69: {
                x: -31.169,
                y: -76.794,
                sx: .258,
                sy: .258,
                r: .208,
                a: .55
            },
            70: {
                x: -32.231,
                y: -81.509,
                sx: .265,
                sy: .265,
                r: .213,
                a: .56
            },
            71: {
                x: -33.25,
                y: -86.277,
                sx: .272,
                sy: .272,
                r: .217,
                a: .58
            },
            72: {
                x: -34.224,
                y: -91.048,
                sx: .28,
                sy: .28,
                r: .222,
                a: .6
            },
            73: {
                x: -35.203,
                y: -95.872,
                sx: .287,
                sy: .287,
                r: .226,
                a: .62
            },
            74: {
                x: -36.088,
                y: -100.648,
                sx: .295,
                sy: .295,
                r: .231,
                a: .64
            },
            75: {
                x: -36.928,
                y: -105.479,
                sx: .302,
                sy: .302,
                r: .235,
                a: .65
            },
            76: {
                x: -37.724,
                y: -110.211,
                sx: .309,
                sy: .309,
                r: .24,
                a: .67
            },
            77: {
                x: -38.525,
                y: -115.048,
                sx: .317,
                sy: .317,
                r: .245,
                a: .69
            },
            78: {
                x: -39.232,
                y: -119.887,
                sx: .324,
                sy: .324,
                r: .249,
                a: .71
            },
            79: {
                x: -39.893,
                y: -124.729,
                sx: .332,
                sy: .332,
                r: .254,
                a: .73
            },
            80: {
                x: -40.561,
                y: -129.575,
                sx: .339,
                sy: .339,
                r: .258,
                a: .75
            },
            81: {
                x: -41.133,
                y: -134.474,
                sx: .346,
                sy: .346,
                r: .263,
                a: .76
            },
            82: {
                x: -41.661,
                y: -139.326,
                sx: .354,
                sy: .354,
                r: .267,
                a: .78
            },
            83: {
                x: -42.144,
                y: -144.181,
                sx: .361,
                sy: .361,
                r: .272,
                a: .8
            },
            84: {
                x: -42.632,
                y: -149.09,
                sx: .369,
                sy: .369,
                r: .277,
                a: .82
            },
            85: {
                x: -43.076,
                y: -154.002,
                sx: .376,
                sy: .376,
                r: .281,
                a: .84
            },
            86: {
                x: -43.425,
                y: -158.918,
                sx: .383,
                sy: .383,
                r: .286,
                a: .86
            },
            87: {
                x: -43.779,
                y: -163.837,
                sx: .391,
                sy: .391,
                r: .29,
                a: .87
            },
            88: {
                x: -44.088,
                y: -168.71,
                sx: .398,
                sy: .398,
                r: .295,
                a: .89
            },
            89: {
                x: -44.303,
                y: -173.636,
                sx: .405,
                sy: .405,
                r: .299,
                a: .91
            },
            90: {
                x: -44.522,
                y: -178.565,
                sx: .413,
                sy: .413,
                r: .304,
                a: .93
            },
            91: {
                x: -44.647,
                y: -183.499,
                sx: .42,
                sy: .42,
                r: .309,
                a: .95
            },
            92: {
                x: -44.777,
                y: -188.486,
                sx: .428,
                sy: .428,
                r: .313,
                a: .96
            },
            93: {
                x: -44.862,
                y: -193.427,
                sx: .435,
                sy: .435,
                r: .318,
                a: .98
            },
            94: {
                x: -44.95,
                y: -198.1,
                sx: .442,
                sy: .442,
                r: .322,
                a: 1
            },
            95: {
                x: -46.43,
                y: -203.597,
                sx: .451,
                sy: .451,
                a: .98
            },
            96: {
                x: -47.965,
                y: -209.201,
                sx: .46,
                sy: .46,
                r: .321,
                a: .97
            },
            97: {
                x: -49.509,
                y: -214.804,
                sx: .468,
                sy: .468,
                r: .32,
                a: .95
            },
            98: {
                x: -51.055,
                y: -220.403,
                sx: .477,
                sy: .477,
                r: .319,
                a: .94
            },
            99: {
                x: -52.612,
                y: -225.957,
                sx: .485,
                sy: .485,
                r: .318,
                a: .92
            },
            100: {
                x: -54.174,
                y: -231.555,
                sx: .494,
                sy: .494,
                a: .91
            },
            101: {
                x: -55.744,
                y: -237.146,
                sx: .502,
                sy: .502,
                r: .317,
                a: .89
            },
            102: {
                x: -57.319,
                y: -242.692,
                sx: .511,
                sy: .511,
                r: .316,
                a: .88
            },
            103: {
                x: -58.894,
                y: -248.231,
                sx: .52,
                sy: .52,
                r: .315,
                a: .86
            },
            104: {
                x: -60.527,
                y: -253.822,
                sx: .528,
                sy: .528,
                r: .314,
                a: .85
            },
            105: {
                x: -62.074,
                y: -259.419,
                sx: .537,
                sy: .537,
                a: .83
            },
            106: {
                x: -63.722,
                y: -264.957,
                sx: .545,
                sy: .545,
                r: .313,
                a: .82
            },
            107: {
                x: -65.323,
                y: -270.543,
                sx: .554,
                sy: .554,
                r: .312,
                a: .8
            },
            108: {
                x: -66.982,
                y: -276.078,
                sx: .562,
                sy: .562,
                r: .311,
                a: .79
            },
            109: {
                x: -68.6,
                y: -281.65,
                sx: .571,
                sy: .571,
                r: .31,
                a: .77
            }
        }), this.labels.forEach((label, index) => {
            var labelEndPosition = this.labels[index + 1] ? this.labels[index + 1].position - 1 : this._totalFrames - 1;
            this.addAction(() => this.emit("label_end", this.currentLabel), labelEndPosition)
        })
    }), lib.tile18Hand = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile18BigArm")).setTransform(-6);
        this.addChild(instance1)
    }), lib.tile18BigEyebrowR = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile18BigEyebrowR"));
        this.addChild(instance1)
    }), lib.tile18BigEyebrowL = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile18BigEyebrowL"));
        this.addChild(instance1)
    }), lib.tile18BigEyeClosedR = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile18BigEyeClosedR"));
        this.addChild(instance1)
    }), lib.tile18BigEyeClosedL = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile18BigEyeClosedL"));
        this.addChild(instance1)
    }), lib.tile18BigEyeR = Container.extend(function() {
        Container.call(this);
        var instance4 = new Sprite(fromFrame("tile18BigEyeballR")).setTransform(6, 5),
            instance3 = new Sprite(fromFrame("tile18BigIrisR")).setTransform(21, 1),
            instance2 = new Sprite(fromFrame("tile18BigEyeRightLidDown")).setTransform(0, 11),
            instance1 = new Sprite(fromFrame("tile18BigEyeRightLidUp")).setTransform(0, 2);
        this.addChild(instance4, instance3, instance2, instance1)
    }), lib.tile18BigEyeL = Container.extend(function() {
        Container.call(this);
        var instance4 = new Sprite(fromFrame("tile18BigEyeballL")).setTransform(1, 2),
            instance3 = new Sprite(fromFrame("tile18BigIrisL")).setTransform(7, 3),
            instance2 = new Sprite(fromFrame("tile18BigEyeLeftLidDown")).setTransform(1, 6),
            instance1 = new Sprite(fromFrame("tile18BigEyeLeftLidUp"));
        this.addChild(instance4, instance3, instance2, instance1)
    }), lib.tile18BigNose = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile18BigNose"));
        this.addChild(instance1)
    }), lib.tile18BigSmokingMouth = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile18BigSmokingMouth"));
        this.addChild(instance1)
    }), lib.tile18BigSmoking = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile18BigSmokingFace01"));
        this.addChild(instance1)
    }), lib.tile18BigMouth = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile18BigMouth"));
        this.addChild(instance1)
    }), lib.tile18BigFaceNormal = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile18BigFaceNormal")).setTransform(0, -1.1);
        this.addChild(instance1)
    }), lib.tile18BigHead = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile18BigHead"));
        this.addChild(instance1)
    }), lib.tile18Head = MovieClip.extend(function() {
        MovieClip.call(this, {
            duration: 130
        });
        var instance8 = new lib.tile18BigHead,
            instance7 = new lib.tile18BigFaceNormal,
            instance6 = new lib.tile18BigMouth,
            instance10 = new lib.tile18BigSmoking,
            instance9 = new lib.tile18BigSmokingMouth,
            instance16 = new lib.tile18BigFaceNormal,
            instance15 = new lib.tile18BigMouth,
            instance18 = new lib.tile18BigSmoking,
            instance17 = new lib.tile18BigSmokingMouth,
            instance24 = new lib.tile18BigFaceNormal,
            instance23 = new lib.tile18BigMouth,
            instance5 = new lib.tile18BigNose,
            instance4 = new lib.tile18BigEyeL,
            instance3 = new lib.tile18BigEyeR,
            instance12 = new lib.tile18BigEyeClosedL,
            instance11 = new lib.tile18BigEyeClosedR,
            instance14 = new lib.tile18BigEyeL,
            instance13 = new lib.tile18BigEyeR,
            instance20 = new lib.tile18BigEyeClosedL,
            instance19 = new lib.tile18BigEyeClosedR,
            instance22 = new lib.tile18BigEyeL,
            instance21 = new lib.tile18BigEyeR,
            instance2 = new lib.tile18BigEyebrowL,
            instance1 = new lib.tile18BigEyebrowR;
        this.addTimedChild(instance8, 0, 130, {
            0: {
                y: 485
            }
        }).addTimedChild(instance7, 0, 6, {
            0: {
                x: 90,
                y: 650.55,
                sy: .99
            },
            2: {
                y: 649.984,
                sy: 1.001
            },
            3: {
                y: 649.438,
                sy: 1.013
            },
            4: {
                y: 648.883,
                sy: 1.024
            },
            5: {
                y: 648.2,
                sy: 1.036
            }
        }).addTimedChild(instance6, 0, 6, {
            0: {
                x: 158,
                y: 681.1,
                sy: 1,
                kx: 0
            },
            2: {
                x: 158.087,
                y: 681.129,
                sy: 1.009,
                kx: .003
            },
            3: {
                x: 158.086,
                sy: 1.019,
                kx: .006
            },
            4: {
                x: 158.117,
                y: 681.119,
                sy: 1.028,
                kx: .009
            },
            5: {
                x: 158,
                y: 681.1,
                sy: 1.037,
                kx: .012
            }
        }).addTimedChild(instance10, 6, 42, {
            6: {
                x: 91,
                y: 651.15,
                sy: .958
            },
            7: {
                y: 650.16,
                sy: .977
            },
            8: {
                y: 649.443,
                sy: .99
            },
            9: {
                y: 648.989,
                sy: .997
            },
            10: {
                y: 649,
                sy: 1
            },
            11: {
                y: 649.683,
                sy: .987
            },
            12: {
                y: 650.296,
                sy: .975
            },
            13: {
                y: 650.807,
                sy: .966
            },
            14: {
                y: 651.197,
                sy: .958
            },
            15: {
                y: 651.516,
                sy: .952
            },
            16: {
                y: 651.774,
                sy: .947
            },
            17: {
                y: 651.871,
                sy: .945
            },
            18: {
                y: 651.9,
                sy: .944
            },
            41: {
                y: 651.328,
                sy: .956
            },
            42: {
                y: 650.832,
                sy: .965
            },
            43: {
                x: 91.05,
                y: 650.412,
                sy: .973
            },
            44: {
                y: 650.06,
                sy: .98
            },
            45: {
                y: 649.833,
                sy: .984
            },
            46: {
                y: 649.734,
                sy: .987
            },
            47: {
                x: 91,
                y: 649.65,
                sy: .988
            }
        }).addTimedChild(instance9, 6, 42, {
            6: {
                x: 185.6,
                y: 666,
                sy: .959
            },
            7: {
                x: 185.597,
                y: 665.914,
                sy: .969
            },
            8: {
                y: 665.799,
                sy: .979
            },
            9: {
                x: 185.547,
                y: 665.624,
                sy: .99
            },
            10: {
                x: 185.6,
                y: 665.5,
                sy: 1
            },
            11: {
                y: 665.666,
                sy: .989
            },
            12: {
                y: 665.777,
                sy: .979
            },
            13: {
                x: 185.65,
                y: 665.833,
                sy: .971
            },
            14: {
                y: 665.945,
                sy: .964
            },
            15: {
                y: 665.992,
                sy: .959
            },
            16: {
                y: 666.004,
                sy: .955
            },
            17: {
                y: 666.051,
                sy: .953
            },
            18: {
                x: 185.6,
                y: 666.05,
                sy: .952
            },
            41: {
                x: 185.597,
                y: 665.989,
                sy: .966
            },
            42: {
                y: 665.853,
                sy: .978
            },
            43: {
                y: 665.743,
                sy: .988
            },
            44: {
                y: 665.678,
                sy: .995
            },
            45: {
                y: 665.64,
                sy: 1.001
            },
            46: {
                y: 665.616,
                sy: 1.004
            },
            47: {
                x: 185.6,
                y: 665.45,
                sy: 1.005
            }
        }).addTimedChild(instance16, 48, 20, {
            48: {
                x: 90,
                y: 647.7,
                sy: 1.045
            },
            49: {
                y: 647.767
            },
            50: {
                y: 647.897,
                sy: 1.042
            },
            51: {
                y: 648.131,
                sy: 1.037
            },
            52: {
                y: 648.419,
                sy: 1.031
            },
            53: {
                x: 90.05,
                y: 648.87,
                sy: 1.022
            },
            54: {
                y: 649.364,
                sy: 1.012
            },
            55: {
                x: 90,
                y: 650,
                sy: 1
            },
            64: {
                y: 649.709,
                sy: 1.006
            },
            65: {
                x: 90.05,
                y: 649.489,
                sy: 1.012
            },
            66: {
                y: 649.158,
                sy: 1.017
            },
            67: {
                y: 648.8,
                sy: 1.023
            }
        }).addTimedChild(instance15, 48, 20, {
            48: {
                x: 158,
                y: 681.1,
                sy: 1.055,
                kx: 0
            },
            49: {
                y: 681.112,
                sy: 1.054
            },
            50: {
                y: 681.09,
                sy: 1.051
            },
            51: {
                y: 681.103,
                sy: 1.045
            },
            52: {
                y: 681.11,
                sy: 1.037
            },
            53: {
                y: 681.123,
                sy: 1.027
            },
            54: {
                y: 681.121,
                sy: 1.015
            },
            55: {
                y: 681.1,
                sy: 1
            },
            64: {
                x: 158.028,
                y: 681.203,
                sy: 1.009,
                kx: .002
            },
            65: {
                x: 158.077,
                y: 681.327,
                sy: 1.017,
                kx: .004
            },
            66: {
                x: 158.047,
                y: 681.33,
                sy: 1.026,
                kx: .006
            },
            67: {
                x: 158.05,
                y: 681.15,
                sy: 1.035,
                kx: .007
            }
        }).addTimedChild(instance18, 68, 45, {
            68: {
                x: 92.25,
                y: 652.25,
                sy: .937,
                kx: -.024
            },
            69: {
                x: 92.134,
                y: 651.195,
                sy: .956,
                kx: -.022
            },
            70: {
                x: 92.009,
                y: 650.303,
                sy: .972,
                kx: -.02
            },
            71: {
                x: 91.915,
                y: 649.522,
                sy: .984,
                kx: -.019
            },
            72: {
                x: 91.842,
                y: 649.032,
                sy: .993,
                kx: -.018
            },
            73: {
                x: 91.78,
                y: 648.715,
                sy: .998,
                kx: -.017
            },
            74: {
                x: 91.95,
                y: 649,
                sy: 1
            },
            75: {
                x: 91.886,
                y: 649.131,
                sy: .998,
                kx: -.014
            },
            76: {
                x: 91.772,
                y: 649.312,
                sy: .997,
                kx: -.012
            },
            77: {
                x: 91.648,
                y: 649.333,
                sy: .995,
                kx: -.01
            },
            78: {
                x: 91.474,
                y: 649.454,
                sy: .993,
                kx: -.008
            },
            79: {
                x: 91.39,
                y: 649.565,
                sy: .991,
                kx: -.006
            },
            80: {
                x: 91.256,
                y: 649.686,
                sy: .99,
                kx: -.004
            },
            81: {
                x: 91.162,
                y: 649.797,
                sy: .988,
                kx: -.001
            },
            82: {
                x: 91.059,
                y: 649.859,
                sy: .986,
                kx: .001
            },
            83: {
                x: 90.945,
                y: 649.97,
                sy: .984,
                kx: .003
            },
            84: {
                x: 90.801,
                y: 650.081,
                sy: .983,
                kx: .005
            },
            85: {
                x: 90.678,
                y: 650.182,
                sy: .981,
                kx: .007
            },
            86: {
                x: 90.564,
                y: 650.274,
                sy: .979,
                kx: .01
            },
            87: {
                x: 90.441,
                y: 650.375,
                sy: .977,
                kx: .012
            },
            88: {
                x: 90.317,
                y: 650.516,
                sy: .976,
                kx: .014
            },
            89: {
                x: 90.234,
                y: 650.598,
                sy: .974,
                kx: .016
            },
            90: {
                x: 90.05,
                y: 650.679,
                sy: .972,
                kx: .018
            },
            91: {
                x: 89.947,
                y: 650.77,
                sy: .97,
                kx: .021
            },
            92: {
                x: 89.864,
                y: 650.902,
                sy: .969,
                kx: .023
            },
            93: {
                x: 89.75,
                y: 650.75,
                sy: .967,
                kx: .025
            },
            108: {
                x: 89.921,
                y: 651.026,
                sy: .963,
                kx: .022
            },
            109: {
                x: 90.043,
                y: 651.161,
                sy: .96,
                kx: .02
            },
            110: {
                x: 90.175,
                y: 651.427,
                sy: .957,
                kx: .017
            },
            111: {
                x: 90.277,
                y: 651.593,
                sy: .953,
                kx: .015
            },
            112: {
                x: 90.4,
                y: 651.6,
                sy: .95,
                kx: .012
            }
        }).addTimedChild(instance17, 68, 45, {
            68: {
                x: 185.85,
                y: 666.2,
                sy: .939,
                kx: -.021
            },
            69: {
                x: 185.94,
                y: 666.076,
                sy: .959
            },
            70: {
                x: 185.99,
                y: 665.939,
                sy: .976
            },
            71: {
                x: 186.04,
                y: 665.798,
                sy: .989,
                kx: -.02
            },
            72: {
                x: 186.1,
                y: 665.736,
                sy: .998
            },
            73: {
                y: 665.68,
                sy: 1.004
            },
            74: {
                x: 185.9,
                y: 665.45,
                sy: 1.005
            },
            75: {
                x: 185.906,
                y: 665.523,
                sy: 1.004,
                kx: -.017
            },
            76: {
                x: 185.872,
                y: 665.486,
                sy: 1.002,
                kx: -.015
            },
            77: {
                x: 185.868,
                y: 665.559,
                sy: 1,
                kx: -.012
            },
            78: {
                x: 185.813,
                y: 665.511,
                sy: .998,
                kx: -.01
            },
            79: {
                x: 185.789,
                y: 665.584,
                sy: .997,
                kx: -.007
            },
            80: {
                x: 185.784,
                y: 665.577,
                sy: .995,
                kx: -.005
            },
            81: {
                x: 185.75,
                y: 665.629,
                sy: .993,
                kx: -.002
            },
            82: {
                x: 185.715,
                y: 665.661,
                sy: .991,
                kx: 0
            },
            83: {
                x: 185.68,
                y: 665.664,
                sy: .99,
                kx: .003
            },
            84: {
                x: 185.685,
                y: 665.756,
                sy: .988,
                kx: .005
            },
            85: {
                x: 185.69,
                y: 665.729,
                sy: .986,
                kx: .008
            },
            86: {
                x: 185.635,
                y: 665.761,
                sy: .985,
                kx: .011
            },
            87: {
                x: 185.62,
                y: 665.783,
                sy: .983,
                kx: .013
            },
            88: {
                x: 185.615,
                y: 665.795,
                sy: .981,
                kx: .016
            },
            89: {
                x: 185.54,
                y: 665.827,
                sy: .979,
                kx: .018
            },
            90: {
                x: 185.554,
                y: 665.869,
                sy: .978,
                kx: .021
            },
            91: {
                x: 185.529,
                y: 665.841,
                sy: .976,
                kx: .023
            },
            92: {
                x: 185.483,
                y: 665.883,
                sy: .974,
                kx: .026
            },
            93: {
                x: 185.3,
                y: 665.9,
                sy: .972,
                kx: .028
            },
            108: {
                x: 185.364,
                y: 665.961,
                sy: .969,
                kx: .027
            },
            109: {
                x: 185.377,
                y: 666.033,
                sy: .965,
                kx: .025
            },
            110: {
                x: 185.301,
                y: 666.015,
                sy: .962,
                kx: .024
            },
            111: {
                x: 185.325,
                y: 666.076,
                sy: .958,
                kx: .023
            },
            112: {
                x: 185.4,
                y: 666.05,
                sy: .954,
                kx: .021
            }
        }).addTimedChild(instance24, 113, 17, {
            113: {
                x: 89.1,
                y: 648.15,
                sy: 1.037,
                kx: .018
            },
            114: {
                x: 89.34,
                y: 648.718,
                sy: 1.026,
                kx: .012
            },
            115: {
                x: 89.592,
                y: 649.122,
                sy: 1.016,
                kx: .008
            },
            116: {
                x: 89.787,
                y: 649.471,
                sy: 1.009,
                kx: .004
            },
            117: {
                x: 89.864,
                y: 649.677,
                sy: 1.004,
                kx: .002
            },
            118: {
                x: 89.935,
                y: 649.858,
                sy: 1.001,
                kx: 0
            },
            119: {
                x: 90,
                y: 650,
                sy: 1
            }
        }).addTimedChild(instance23, 113, 17, {
            113: {
                x: 158,
                y: 681.1,
                sy: 1.031,
                kx: .012
            },
            114: {
                x: 158.054,
                y: 681.143,
                sy: 1.022,
                kx: .008
            },
            115: {
                x: 158.046,
                y: 681.18,
                sy: 1.014,
                kx: .005
            },
            116: {
                x: 158.016,
                y: 681.19,
                sy: 1.008,
                kx: .003
            },
            117: {
                x: 158.044,
                y: 681.181,
                sy: 1.003,
                kx: .001
            },
            118: {
                x: 158.029,
                y: 681.177,
                sy: 1.001,
                kx: 0
            },
            119: {
                x: 158,
                y: 681.1,
                sy: 1
            }
        }).addTimedChild(instance5, 0, 130, {
            0: {
                x: 200.5,
                y: 636
            }
        }).addTimedChild(instance4, 0, 12, {
            0: {
                x: 241.1,
                y: 646.3,
                sy: 1
            },
            6: {
                y: 646.702,
                sy: .967
            },
            7: {
                y: 647.114,
                sy: .933
            },
            8: {
                y: 647.516,
                sy: .9
            },
            9: {
                y: 647.868,
                sy: .867
            },
            10: {
                y: 648.28,
                sy: .833
            },
            11: {
                y: 648.6,
                sy: .8
            }
        }).addTimedChild(instance3, 0, 12, {
            0: {
                x: 157.9,
                y: 650.3,
                sy: 1
            },
            6: {
                y: 650.769,
                sy: .967
            },
            7: {
                y: 651.187,
                sy: .933
            },
            8: {
                y: 651.666,
                sy: .9
            },
            9: {
                y: 652.085,
                sy: .867
            },
            10: {
                y: 652.503,
                sy: .833
            },
            11: {
                y: 652.9,
                sy: .8
            }
        }).addTimedChild(instance12, 12, 7, {
            12: {
                x: 240.3,
                y: 645.7
            }
        }).addTimedChild(instance11, 12, 7, {
            12: {
                x: 156.3,
                y: 651.3
            }
        }).addTimedChild(instance14, 19, 81, {
            19: {
                x: 241.1,
                y: 648.6,
                sy: .8
            },
            20: {
                y: 648.318,
                sy: .829
            },
            21: {
                y: 647.977,
                sy: .857
            },
            22: {
                y: 647.646,
                sy: .886
            },
            23: {
                y: 647.304,
                sy: .914
            },
            24: {
                y: 646.973,
                sy: .943
            },
            25: {
                y: 646.631,
                sy: .971
            },
            26: {
                y: 646.3,
                sy: 1
            },
            94: {
                y: 646.702,
                sy: .967
            },
            95: {
                y: 647.114,
                sy: .933
            },
            96: {
                y: 647.516,
                sy: .9
            },
            97: {
                y: 647.868,
                sy: .867
            },
            98: {
                y: 648.28,
                sy: .833
            },
            99: {
                y: 648.6,
                sy: .8
            }
        }).addTimedChild(instance13, 19, 81, {
            19: {
                x: 157.9,
                y: 652.9,
                sy: .8
            },
            20: {
                y: 652.512,
                sy: .829
            },
            21: {
                y: 652.134,
                sy: .857
            },
            22: {
                y: 651.806,
                sy: .886
            },
            23: {
                y: 651.379,
                sy: .914
            },
            24: {
                y: 651.041,
                sy: .943
            },
            25: {
                y: 650.663,
                sy: .971
            },
            26: {
                y: 650.3,
                sy: 1
            },
            94: {
                y: 650.769,
                sy: .967
            },
            95: {
                y: 651.187,
                sy: .933
            },
            96: {
                y: 651.666,
                sy: .9
            },
            97: {
                y: 652.085,
                sy: .867
            },
            98: {
                y: 652.503,
                sy: .833
            },
            99: {
                y: 652.9,
                sy: .8
            }
        }).addTimedChild(instance20, 100, 7, {
            100: {
                x: 240.3,
                y: 645.7
            }
        }).addTimedChild(instance19, 100, 7, {
            100: {
                x: 156.3,
                y: 651.3
            }
        }).addTimedChild(instance22, 107, 23, {
            107: {
                x: 241.1,
                y: 648.6,
                sy: .8
            },
            108: {
                y: 648.318,
                sy: .829
            },
            109: {
                y: 647.977,
                sy: .857
            },
            110: {
                y: 647.646,
                sy: .886
            },
            111: {
                y: 647.304,
                sy: .914
            },
            112: {
                y: 646.973,
                sy: .943
            },
            113: {
                y: 646.631,
                sy: .971
            },
            114: {
                y: 646.3,
                sy: 1
            }
        }).addTimedChild(instance21, 107, 23, {
            107: {
                x: 157.9,
                y: 652.9,
                sy: .8
            },
            108: {
                y: 652.512,
                sy: .829
            },
            109: {
                y: 652.134,
                sy: .857
            },
            110: {
                y: 651.806,
                sy: .886
            },
            111: {
                y: 651.379,
                sy: .914
            },
            112: {
                y: 651.041,
                sy: .943
            },
            113: {
                y: 650.663,
                sy: .971
            },
            114: {
                y: 650.3,
                sy: 1
            }
        }).addTimedChild(instance2, 0, 130, {
            0: {
                x: 231,
                y: 616,
                r: 0
            },
            3: {
                x: 230.843,
                y: 616.508,
                r: -.008
            },
            4: {
                x: 230.673,
                y: 617.028,
                r: -.017
            },
            5: {
                x: 230.538,
                y: 617.511,
                r: -.025
            },
            6: {
                x: 230.385,
                y: 617.996,
                r: -.033
            },
            7: {
                x: 230.263,
                y: 618.507,
                r: -.041
            },
            8: {
                x: 230.128,
                y: 619.008,
                r: -.05
            },
            9: {
                x: 229.971,
                y: 619.475,
                r: -.058
            },
            10: {
                x: 229.855,
                y: 619.992,
                r: -.066
            },
            11: {
                x: 229.702,
                y: 620.468,
                r: -.075
            },
            12: {
                x: 229.5,
                y: 620.95,
                r: -.083
            },
            19: {
                x: 229.712,
                y: 620.368,
                r: -.072
            },
            20: {
                x: 229.913,
                y: 619.676,
                r: -.061
            },
            21: {
                x: 230.085,
                y: 619.057,
                r: -.051
            },
            22: {
                x: 230.28,
                y: 618.413,
                r: -.04
            },
            23: {
                x: 230.453,
                y: 617.763,
                r: -.029
            },
            24: {
                x: 230.655,
                y: 617.123,
                r: -.018
            },
            25: {
                x: 230.882,
                y: 616.467,
                r: -.008
            },
            26: {
                x: 231.1,
                y: 615.878,
                r: .003
            },
            27: {
                x: 231.284,
                y: 615.277,
                r: .014
            },
            28: {
                x: 231.512,
                y: 614.652,
                r: .024
            },
            29: {
                x: 231.763,
                y: 614.001,
                r: .035
            },
            30: {
                x: 231.994,
                y: 613.421,
                r: .046
            },
            31: {
                x: 232.252,
                y: 612.775,
                r: .057
            },
            32: {
                x: 232.503,
                y: 612.155,
                r: .067
            },
            33: {
                x: 232.787,
                y: 611.556,
                r: .078
            },
            34: {
                x: 233.051,
                y: 610.928,
                r: .089
            },
            35: {
                x: 233.3,
                y: 610.25,
                r: .1
            },
            69: {
                x: 233.208,
                y: 610.564,
                r: .094
            },
            70: {
                x: 233.066,
                y: 610.878,
                r: .089
            },
            71: {
                x: 232.909,
                y: 611.205,
                r: .083
            },
            72: {
                x: 232.803,
                y: 611.532,
                r: .078
            },
            73: {
                x: 232.673,
                y: 611.825,
                r: .072
            },
            74: {
                x: 232.502,
                y: 612.114,
                r: .067
            },
            75: {
                x: 232.362,
                y: 612.43,
                r: .062
            },
            76: {
                x: 232.267,
                y: 612.786,
                r: .056
            },
            77: {
                x: 232.135,
                y: 613.066,
                r: .051
            },
            78: {
                x: 232.013,
                y: 613.379,
                r: .045
            },
            79: {
                x: 231.857,
                y: 613.725,
                r: .04
            },
            80: {
                x: 231.735,
                y: 614.006,
                r: .034
            },
            81: {
                x: 231.605,
                y: 614.319,
                r: .029
            },
            82: {
                x: 231.505,
                y: 614.658,
                r: .024
            },
            83: {
                x: 231.364,
                y: 614.992,
                r: .018
            },
            84: {
                x: 231.313,
                y: 615.299,
                r: .013
            },
            85: {
                x: 231.205,
                y: 615.588,
                r: .007
            },
            86: {
                x: 231.071,
                y: 615.914,
                r: .002
            },
            87: {
                x: 230.983,
                y: 616.232,
                r: -.004
            },
            88: {
                x: 230.895,
                y: 616.568,
                r: -.009
            },
            89: {
                x: 230.752,
                y: 616.894,
                r: -.014
            },
            90: {
                x: 230.649,
                y: 617.193,
                r: -.02
            },
            91: {
                x: 230.574,
                y: 617.54,
                r: -.025
            },
            92: {
                x: 230.45,
                y: 617.864,
                r: -.031
            },
            93: {
                x: 230.366,
                y: 618.16,
                r: -.036
            },
            94: {
                x: 230.27,
                y: 618.501,
                r: -.042
            },
            95: {
                x: 230.166,
                y: 618.823,
                r: -.047
            },
            96: {
                x: 230.068,
                y: 619.182,
                r: -.052
            },
            97: {
                x: 229.987,
                y: 619.461,
                r: -.058
            },
            98: {
                x: 229.852,
                y: 619.831,
                r: -.063
            },
            99: {
                x: 229.764,
                y: 620.141,
                r: -.069
            },
            100: {
                x: 229.65,
                y: 620.45,
                r: -.074
            },
            107: {
                x: 229.785,
                y: 620.183,
                r: -.07
            },
            108: {
                x: 229.821,
                y: 619.917,
                r: -.065
            },
            109: {
                x: 229.912,
                y: 619.637,
                r: -.061
            },
            110: {
                x: 229.99,
                y: 619.401,
                r: -.057
            },
            111: {
                x: 230.062,
                y: 619.146,
                r: -.052
            },
            112: {
                x: 230.139,
                y: 618.879,
                r: -.048
            },
            113: {
                x: 230.203,
                y: 618.605,
                r: -.044
            },
            114: {
                x: 230.314,
                y: 618.372,
                r: -.039
            },
            115: {
                x: 230.331,
                y: 618.026,
                r: -.035
            },
            116: {
                x: 230.381,
                y: 617.765,
                r: -.031
            },
            117: {
                x: 230.484,
                y: 617.531,
                r: -.026
            },
            118: {
                x: 230.587,
                y: 617.247,
                r: -.022
            },
            119: {
                x: 230.676,
                y: 617.008,
                r: -.017
            },
            120: {
                x: 230.728,
                y: 616.742,
                r: -.013
            },
            121: {
                x: 230.807,
                y: 616.474,
                r: -.009
            },
            122: {
                x: 230.893,
                y: 616.242,
                r: -.004
            },
            123: {
                x: 231,
                y: 616,
                r: 0
            }
        }).addTimedChild(instance1, 0, 130, {
            0: {
                x: 133,
                y: 628,
                r: 0
            },
            3: {
                x: 133.149,
                y: 628.028,
                r: .005
            },
            4: {
                x: 133.335,
                y: 628.04,
                r: .01
            },
            5: {
                x: 133.469,
                y: 628.041,
                r: .016
            },
            6: {
                x: 133.606,
                y: 628.012,
                r: .021
            },
            7: {
                x: 133.734,
                y: 628.035,
                r: .026
            },
            8: {
                x: 133.917,
                y: 628.037,
                r: .031
            },
            9: {
                x: 134.035,
                y: 628.062,
                r: .036
            },
            10: {
                x: 134.21,
                y: 628.075,
                r: .041
            },
            11: {
                x: 134.322,
                y: 628.072,
                r: .047
            },
            12: {
                x: 134.45,
                y: 628,
                r: .052
            },
            19: {
                x: 134.294,
                y: 628.035,
                r: .045
            },
            20: {
                x: 134.12,
                y: 628.034,
                r: .039
            },
            21: {
                x: 133.954,
                y: 628.021,
                r: .033
            },
            22: {
                x: 133.741,
                y: 628.027,
                r: .026
            },
            23: {
                x: 133.61,
                y: 628.047,
                r: .02
            },
            24: {
                x: 133.417,
                y: 628.009,
                r: .014
            },
            25: {
                x: 133.228,
                y: 628.041,
                r: .007
            },
            26: {
                x: 133.033,
                y: 628.044,
                r: .001
            },
            27: {
                x: 132.915,
                y: 628.031,
                r: -.005
            },
            28: {
                x: 132.748,
                y: 628.029,
                r: -.012
            },
            29: {
                x: 132.579,
                y: 628.017,
                r: -.018
            },
            30: {
                x: 132.392,
                y: 628.018,
                r: -.024
            },
            31: {
                x: 132.211,
                y: 628.049,
                r: -.031
            },
            32: {
                x: 132.023,
                y: 628.05,
                r: -.037
            },
            33: {
                x: 131.872,
                y: 628.035,
                r: -.044
            },
            34: {
                x: 131.665,
                y: 628.04,
                r: -.05
            },
            35: {
                x: 131.4,
                y: 628.05,
                r: -.056
            },
            69: {
                x: 131.489,
                y: 628.079,
                r: -.053
            },
            70: {
                x: 131.589,
                y: 628.066,
                r: -.05
            },
            71: {
                x: 131.678,
                y: 628.046,
                r: -.047
            },
            72: {
                x: 131.775,
                y: 628.064,
                r: -.045
            },
            73: {
                x: 131.85,
                y: 628.076,
                r: -.042
            },
            74: {
                x: 131.935,
                y: 628.036,
                r: -.039
            },
            75: {
                x: 132.027,
                y: 628.035,
                r: -.036
            },
            76: {
                x: 132.108,
                y: 628.026,
                r: -.033
            },
            77: {
                x: 132.2,
                y: 628.024,
                r: -.03
            },
            78: {
                x: 132.279,
                y: 628.056,
                r: -.027
            },
            79: {
                x: 132.358,
                y: 628.037,
                r: -.024
            },
            80: {
                x: 132.444,
                y: 628.057,
                r: -.021
            },
            81: {
                x: 132.523,
                y: 628.039,
                r: -.018
            },
            82: {
                x: 132.598,
                y: 628.051,
                r: -.015
            },
            83: {
                x: 132.682,
                y: 628.011,
                r: -.012
            },
            84: {
                x: 132.765,
                y: 628.012,
                r: -.009
            },
            85: {
                x: 132.785,
                y: 628.055,
                r: -.006
            },
            86: {
                x: 132.856,
                y: 628.048,
                r: -.003
            },
            87: {
                x: 132.985,
                y: 628.03,
                r: 0
            },
            88: {
                x: 133.023,
                y: 628.009,
                r: .003
            },
            89: {
                x: 133.139,
                y: 628.033,
                r: .006
            },
            90: {
                x: 133.216,
                y: 628.005,
                r: .009
            },
            91: {
                x: 133.28,
                y: 628.02,
                r: .012
            },
            92: {
                x: 133.357,
                y: 628.042,
                r: .015
            },
            93: {
                x: 133.477,
                y: 628.035,
                r: .018
            },
            94: {
                x: 133.54,
                y: 628.04,
                r: .021
            },
            95: {
                x: 133.618,
                y: 628.021,
                r: .023
            },
            96: {
                x: 133.688,
                y: 628.014,
                r: .026
            },
            97: {
                x: 133.795,
                y: 628.04,
                r: .029
            },
            98: {
                x: 133.871,
                y: 628.063,
                r: .032
            },
            99: {
                x: 133.928,
                y: 628.039,
                r: .035
            },
            100: {
                x: 134.05,
                y: 628,
                r: .038
            },
            107: {
                x: 134.018,
                y: 628.047,
                r: .036
            },
            108: {
                x: 133.925,
                y: 628.037,
                r: .034
            },
            109: {
                x: 133.891,
                y: 628.075,
                r: .032
            },
            110: {
                x: 133.798,
                y: 628.064,
                r: .029
            },
            111: {
                x: 133.764,
                y: 628.052,
                r: .027
            },
            112: {
                x: 133.668,
                y: 628.032,
                r: .025
            },
            113: {
                x: 133.623,
                y: 628.062,
                r: .023
            },
            114: {
                x: 133.585,
                y: 628.031,
                r: .02
            },
            115: {
                x: 133.487,
                y: 628.052,
                r: .018
            },
            116: {
                x: 133.447,
                y: 628.06,
                r: .016
            },
            117: {
                x: 133.35,
                y: 628.031,
                r: .014
            },
            118: {
                x: 133.31,
                y: 628.04,
                r: .011
            },
            119: {
                x: 133.26,
                y: 628.051,
                r: .009
            },
            120: {
                x: 133.168,
                y: 628.05,
                r: .007
            },
            121: {
                x: 133.119,
                y: 628.011,
                r: .005
            },
            122: {
                x: 133.075,
                y: 628.051,
                r: .002
            },
            123: {
                x: 133,
                y: 628,
                r: 0
            }
        }).addAction(function() {
            this.stop()
        }, 129), this.labels.forEach((label, index) => {
            var labelEndPosition = this.labels[index + 1] ? this.labels[index + 1].position - 1 : this._totalFrames - 1;
            this.addAction(() => this.emit("label_end", this.currentLabel), labelEndPosition)
        })
    }), lib.tile18Body = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile18BigBody"));
        this.addChild(instance1)
    }), lib.tile18Big = MovieClip.extend(function() {
        MovieClip.call(this, {
            duration: 165
        });
        var instance3 = new lib.tile18Body,
            instance2 = new lib.tile18Head;
        this[instance2.name = "head"] = instance2;
        var instance1 = new lib.tile18Hand,
            instance5 = new lib.tile18CigarSmoke,
            instance4 = new lib.tile18CigarGlow,
            instance9 = (new lib.tile18SmokeLoop).setTransform(823, 322),
            instance6 = new lib.tile18CigarGlowLoop,
            instance8 = new lib.tile18Smoke,
            instance7 = new lib.tile18Smoke,
            instance10 = new lib.tile18Spark,
            instance11 = new lib.tile18Spark;
        this.addTimedChild(instance3, 0, 165, {
            0: {
                x: 311,
                y: 317,
                r: 0
            },
            15: {
                x: 311.05,
                y: 317.05
            },
            16: {
                x: 311.15,
                y: 317.15
            },
            17: {
                x: 311.35,
                y: 317.35
            },
            18: {
                x: 311.65,
                y: 317.65
            },
            19: {
                x: 312,
                y: 318
            },
            20: {
                x: 312.35,
                y: 318.35
            },
            21: {
                x: 312.65,
                y: 318.65
            },
            22: {
                x: 312.85,
                y: 318.85
            },
            23: {
                x: 312.95,
                y: 318.95
            },
            24: {
                x: 313,
                y: 319
            },
            27: {
                x: 312.979,
                y: 319.062
            },
            28: {
                x: 312.832,
                y: 319.111
            },
            29: {
                x: 312.602,
                y: 319.194,
                r: -.001
            },
            30: {
                x: 312.29,
                y: 319.41,
                r: -.002
            },
            31: {
                x: 311.902,
                y: 319.555,
                r: -.003
            },
            32: {
                x: 311.332,
                y: 319.832,
                r: -.004
            },
            33: {
                x: 310.725,
                y: 320.097,
                r: -.005
            },
            34: {
                x: 309.986,
                y: 320.436,
                r: -.007
            },
            35: {
                x: 309.215,
                y: 320.808,
                r: -.009
            },
            36: {
                x: 308.444,
                y: 321.23,
                r: -.011
            },
            37: {
                x: 307.756,
                y: 321.569,
                r: -.012
            },
            38: {
                x: 307.144,
                y: 321.82,
                r: -.014
            },
            39: {
                x: 306.619,
                y: 322.093,
                r: -.015
            },
            40: {
                x: 306.221,
                y: 322.287,
                r: -.016
            },
            41: {
                x: 305.864,
                y: 322.448
            },
            42: {
                x: 305.63,
                y: 322.576,
                r: -.017
            },
            43: {
                x: 305.482,
                y: 322.626
            },
            44: {
                x: 305.4,
                y: 322.6
            },
            55: {
                x: 305.471,
                y: 322.618
            },
            56: {
                x: 305.582,
                y: 322.552
            },
            57: {
                x: 305.794,
                y: 322.433
            },
            58: {
                x: 305.992,
                y: 322.374,
                r: -.016
            },
            59: {
                x: 306.336,
                y: 322.166,
                r: -.015
            },
            60: {
                x: 306.826,
                y: 322.01,
                r: -.014
            },
            61: {
                x: 307.262,
                y: 321.755,
                r: -.013
            },
            62: {
                x: 307.834,
                y: 321.45,
                r: -.012
            },
            63: {
                x: 308.502,
                y: 321.147,
                r: -.01
            },
            64: {
                x: 309.211,
                y: 320.801,
                r: -.009
            },
            65: {
                x: 309.929,
                y: 320.454,
                r: -.007
            },
            66: {
                x: 310.592,
                y: 320.196,
                r: -.006
            },
            67: {
                x: 311.164,
                y: 319.892,
                r: -.004
            },
            68: {
                x: 311.59,
                y: 319.636,
                r: -.003
            },
            69: {
                x: 312.076,
                y: 319.475,
                r: -.002
            },
            70: {
                x: 312.425,
                y: 319.253,
                r: -.001
            },
            71: {
                x: 312.673,
                y: 319.185
            },
            72: {
                x: 312.831,
                y: 319.07,
                r: 0
            },
            73: {
                x: 312.997,
                y: 319.049
            },
            74: {
                x: 313,
                y: 319
            },
            82: {
                x: 313.05,
                y: 318.95
            },
            86: {
                x: 313.1,
                y: 318.9
            },
            88: {
                x: 313.15
            },
            89: {
                y: 318.85
            },
            91: {
                x: 313.2,
                y: 318.8
            },
            93: {
                x: 313.25,
                y: 318.75
            },
            94: {
                x: 313.3,
                y: 318.7
            },
            96: {
                x: 313.35,
                y: 318.65
            },
            97: {
                x: 313.4,
                y: 318.6
            },
            99: {
                x: 313.45,
                y: 318.55
            },
            100: {
                x: 313.5,
                y: 318.5
            },
            101: {
                x: 313.55,
                y: 318.45
            },
            102: {
                x: 313.6,
                y: 318.4
            },
            104: {
                x: 313.65,
                y: 318.35
            },
            105: {
                x: 313.7,
                y: 318.3
            },
            107: {
                x: 313.75,
                y: 318.25
            },
            108: {
                x: 313.8,
                y: 318.2
            },
            110: {
                x: 313.85,
                y: 318.15
            },
            112: {
                x: 313.9
            },
            113: {
                y: 318.1
            },
            115: {
                x: 313.95,
                y: 318.05
            },
            119: {
                x: 314,
                y: 318
            },
            127: {
                x: 313.95
            },
            128: {
                x: 313.9,
                y: 317.95
            },
            129: {
                x: 313.75,
                y: 317.9
            },
            130: {
                x: 313.55,
                y: 317.85
            },
            131: {
                x: 313.35,
                y: 317.8
            },
            132: {
                x: 313.05,
                y: 317.7
            },
            133: {
                x: 312.7,
                y: 317.55
            },
            134: {
                x: 312.3,
                y: 317.45
            },
            135: {
                x: 311.95,
                y: 317.3
            },
            136: {
                x: 311.65,
                y: 317.2
            },
            137: {
                x: 311.45,
                y: 317.15
            },
            138: {
                x: 311.25,
                y: 317.1
            },
            139: {
                x: 311.1,
                y: 317.05
            },
            140: {
                x: 311.05,
                y: 317
            },
            141: {
                x: 311
            }
        }).addTimedChild(instance2, 0, 165, {
            0: {
                x: 409,
                y: -357,
                r: 0
            },
            5: {
                x: 408.691,
                y: -356.919
            },
            6: {
                x: 407.734,
                y: -356.694,
                r: -.002
            },
            7: {
                x: 406.071,
                y: -356.367,
                r: -.004
            },
            8: {
                x: 403.797,
                y: -355.835,
                r: -.007
            },
            9: {
                x: 400.868,
                y: -355.202,
                r: -.011
            },
            10: {
                x: 397.921,
                y: -354.565,
                r: -.015
            },
            11: {
                x: 395.679,
                y: -354.016,
                r: -.018
            },
            12: {
                x: 394.003,
                y: -353.679,
                r: -.02
            },
            13: {
                x: 393.033,
                y: -353.442,
                r: -.021
            },
            14: {
                x: 392.7,
                y: -353.35
            },
            15: {
                x: 393.977,
                y: -353.559,
                r: -.02
            },
            16: {
                x: 397.656,
                y: -354.263,
                r: -.015
            },
            17: {
                x: 403.872,
                y: -355.468,
                r: -.007
            },
            18: {
                x: 412.57,
                y: -356.949,
                r: .005
            },
            19: {
                x: 423.786,
                y: -358.777,
                r: .02
            },
            20: {
                x: 435.002,
                y: -360.447,
                r: .034
            },
            21: {
                x: 443.77,
                y: -361.605,
                r: .046
            },
            22: {
                x: 450.088,
                y: -362.382,
                r: .054
            },
            23: {
                x: 453.814,
                y: -362.83,
                r: .059
            },
            24: {
                x: 455,
                y: -363,
                r: .061
            },
            27: {
                x: 454.917,
                y: -362.942,
                r: .06
            },
            28: {
                x: 454.612,
                y: -362.974
            },
            29: {
                x: 454.084,
                y: -362.996
            },
            30: {
                x: 453.391,
                y: -363.051,
                r: .059
            },
            31: {
                x: 452.48,
                y: -363.09,
                r: .058
            },
            32: {
                x: 451.348,
                y: -363.169,
                r: .057
            },
            33: {
                x: 449.987,
                y: -363.233,
                r: .056
            },
            34: {
                x: 448.466,
                y: -363.285,
                r: .054
            },
            35: {
                x: 446.722,
                y: -363.366,
                r: .053
            },
            36: {
                x: 444.749,
                y: -363.431,
                r: .051
            },
            37: {
                x: 442.613,
                y: -363.554,
                r: .049
            },
            38: {
                x: 440.368,
                y: -363.622,
                r: .047
            },
            39: {
                x: 438.228,
                y: -363.721,
                r: .045
            },
            40: {
                x: 436.255,
                y: -363.786,
                r: .043
            },
            41: {
                x: 434.499,
                y: -363.818,
                r: .041
            },
            42: {
                x: 433.014,
                y: -363.859,
                r: .04
            },
            43: {
                x: 431.659,
                y: -363.916,
                r: .039
            },
            44: {
                x: 430.562,
                y: -363.984,
                r: .038
            },
            45: {
                x: 429.633,
                y: -364.018,
                r: .037
            },
            46: {
                x: 428.882,
                r: .036
            },
            47: {
                x: 428.411,
                y: -364.084
            },
            48: {
                x: 428.098,
                y: -364.06,
                r: .035
            },
            49: {
                x: 428,
                y: -364
            },
            55: {
                x: 428.189,
                y: -363.954
            },
            56: {
                x: 428.578,
                y: -363.991,
                r: .036
            },
            57: {
                x: 429.254,
                y: -364.011
            },
            58: {
                x: 430.177,
                y: -364.032,
                r: .037
            },
            59: {
                x: 431.438,
                y: -364.049,
                r: .038
            },
            60: {
                x: 432.893,
                y: -364.155,
                r: .04
            },
            61: {
                x: 434.686,
                y: -364.194,
                r: .041
            },
            62: {
                x: 436.674,
                y: -364.322,
                r: .043
            },
            63: {
                x: 438.995,
                y: -364.402,
                r: .045
            },
            64: {
                x: 441.56,
                y: -364.409,
                r: .048
            },
            65: {
                x: 444.069,
                y: -364.523,
                r: .05
            },
            66: {
                x: 446.388,
                y: -364.579,
                r: .052
            },
            67: {
                x: 448.42,
                y: -364.663,
                r: .054
            },
            68: {
                x: 450.207,
                y: -364.697,
                r: .056
            },
            69: {
                x: 451.649,
                y: -364.792,
                r: .057
            },
            70: {
                x: 452.896,
                y: -364.785,
                r: .058
            },
            71: {
                x: 453.812,
                y: -364.801,
                r: .059
            },
            72: {
                x: 454.539,
                y: -364.833,
                r: .06
            },
            73: {
                x: 454.922,
                y: -364.814
            },
            74: {
                x: 455,
                y: -365,
                r: .061
            },
            77: {
                x: 453.821,
                y: -364.735,
                r: .059
            },
            78: {
                x: 452.547,
                y: -364.612,
                r: .057
            },
            79: {
                x: 451.316,
                y: -364.384,
                r: .055
            },
            80: {
                x: 450.085,
                y: -364.256,
                r: .054
            },
            81: {
                x: 448.905,
                y: -364.028,
                r: .052
            },
            82: {
                x: 447.631,
                y: -363.906,
                r: .05
            },
            83: {
                x: 446.388,
                y: -363.679,
                r: .049
            },
            84: {
                x: 445.157,
                y: -363.501,
                r: .047
            },
            85: {
                x: 443.864,
                y: -363.275,
                r: .045
            },
            86: {
                x: 442.683,
                y: -363.147,
                r: .043
            },
            87: {
                x: 441.445,
                y: -362.913,
                r: .042
            },
            88: {
                x: 440.251,
                y: -362.724,
                r: .04
            },
            89: {
                x: 438.963,
                y: -362.54,
                r: .038
            },
            90: {
                x: 437.768,
                y: -362.351,
                r: .037
            },
            91: {
                x: 436.531,
                y: -362.118,
                r: .035
            },
            92: {
                x: 435.286,
                y: -361.929,
                r: .033
            },
            93: {
                x: 434.029,
                y: -361.691,
                r: .031
            },
            94: {
                x: 432.834,
                y: -361.502,
                r: .03
            },
            95: {
                x: 431.633,
                y: -361.257,
                r: .028
            },
            96: {
                x: 430.338,
                y: -361.068,
                r: .026
            },
            97: {
                x: 429.137,
                y: -360.823,
                r: .025
            },
            98: {
                x: 427.923,
                y: -360.63,
                r: .023
            },
            99: {
                x: 426.671,
                y: -360.385,
                r: .021
            },
            100: {
                x: 425.413,
                y: -360.185,
                r: .019
            },
            101: {
                x: 424.211,
                y: -359.94,
                r: .018
            },
            102: {
                x: 422.997,
                y: -359.747,
                r: .016
            },
            103: {
                x: 421.732,
                y: -359.491,
                r: .014
            },
            104: {
                x: 420.516,
                y: -359.285,
                r: .013
            },
            105: {
                x: 419.315,
                y: -359.041,
                r: .011
            },
            106: {
                x: 418.105,
                y: -358.828,
                r: .009
            },
            107: {
                x: 416.834,
                y: -358.529,
                r: .007
            },
            108: {
                x: 415.611,
                y: -358.318,
                r: .006
            },
            109: {
                x: 414.396,
                y: -358.062,
                r: .004
            },
            110: {
                x: 413.181,
                y: -357.856,
                r: .002
            },
            111: {
                x: 411.953,
                y: -357.551,
                r: .001
            },
            112: {
                x: 410.741,
                y: -357.326,
                r: -.001
            },
            113: {
                x: 409.569,
                y: -357.065,
                r: -.003
            },
            114: {
                x: 408.297,
                y: -356.803,
                r: -.005
            },
            115: {
                x: 407.069,
                y: -356.549,
                r: -.006
            },
            116: {
                x: 405.895,
                y: -356.325,
                r: -.008
            },
            117: {
                x: 404.616,
                y: -356.008,
                r: -.01
            },
            118: {
                x: 403.386,
                y: -355.791,
                r: -.011
            },
            119: {
                x: 402.201,
                y: -355.481,
                r: -.013
            },
            120: {
                x: 400.978,
                y: -355.257,
                r: -.015
            },
            121: {
                x: 399.748,
                y: -354.94,
                r: -.017
            },
            122: {
                x: 398.562,
                y: -354.718,
                r: -.018
            },
            123: {
                x: 397.324,
                y: -354.383,
                r: -.02
            },
            124: {
                x: 396.089,
                y: -354.172,
                r: -.022
            },
            125: {
                x: 394.853,
                y: -353.85,
                r: -.023
            },
            126: {
                x: 393.666,
                y: -353.565,
                r: -.025
            },
            127: {
                x: 392.472,
                y: -353.287,
                r: -.027
            },
            128: {
                x: 391.242,
                y: -353.007,
                r: -.029
            },
            129: {
                x: 389.95,
                y: -352.75,
                r: -.03
            },
            130: {
                x: 390.136,
                y: -352.743
            },
            131: {
                x: 390.626,
                y: -352.822,
                r: -.029
            },
            132: {
                x: 391.5,
                y: -353.049,
                r: -.028
            },
            133: {
                x: 392.656,
                y: -353.311,
                r: -.026
            },
            134: {
                x: 394.206,
                y: -353.71,
                r: -.024
            },
            135: {
                x: 396.044,
                y: -354.15,
                r: -.021
            },
            136: {
                x: 398.259,
                y: -354.621,
                r: -.017
            },
            137: {
                x: 400.664,
                y: -355.188,
                r: -.013
            },
            138: {
                x: 402.866,
                y: -355.598,
                r: -.01
            },
            139: {
                x: 404.737,
                y: -356.023,
                r: -.007
            },
            140: {
                x: 406.269,
                y: -356.355,
                r: -.004
            },
            141: {
                x: 407.407,
                y: -356.602,
                r: -.002
            },
            142: {
                x: 408.319,
                y: -356.767,
                r: -.001
            },
            143: {
                x: 408.787,
                y: -356.847,
                r: 0
            },
            144: {
                x: 409,
                y: -357
            }
        }).addTimedChild(instance1, 0, 165, {
            0: {
                x: 691,
                y: 376,
                r: -.43
            },
            5: {
                x: 691.189,
                y: 375.605,
                r: -.429
            },
            6: {
                x: 691.708,
                y: 374.401,
                r: -.426
            },
            7: {
                x: 692.53,
                y: 372.285,
                r: -.421
            },
            8: {
                x: 693.719,
                y: 369.501,
                r: -.414
            },
            9: {
                x: 695.303,
                y: 365.811,
                r: -.404
            },
            10: {
                x: 696.835,
                y: 362.192,
                r: -.395
            },
            11: {
                x: 697.992,
                y: 359.423,
                r: -.388
            },
            12: {
                x: 698.878,
                y: 357.382,
                r: -.382
            },
            13: {
                x: 699.441,
                y: 356.22,
                r: -.379
            },
            14: {
                x: 699.5,
                y: 355.7,
                r: -.378
            },
            15: {
                x: 697.802,
                y: 356.285,
                r: -.384
            },
            16: {
                x: 692.55,
                y: 357.87,
                r: -.402
            },
            17: {
                x: 683.953,
                y: 360.756,
                r: -.431
            },
            18: {
                x: 672.184,
                y: 365.28,
                r: -.472
            },
            19: {
                x: 657.594,
                y: 371.995,
                r: -.525
            },
            20: {
                x: 641.525,
                y: 380.812,
                r: -.587
            },
            21: {
                x: 628.425,
                y: 389.262,
                r: -.64
            },
            22: {
                x: 618.833,
                y: 396.336,
                r: -.681
            },
            23: {
                x: 612.29,
                y: 401.636,
                r: -.71
            },
            24: {
                x: 608.514,
                y: 404.973,
                r: -.728
            },
            25: {
                x: 607,
                y: 406,
                r: -.734
            },
            27: {
                x: 607.025,
                y: 406.073
            },
            28: {
                x: 606.943,
                y: 405.997
            },
            29: {
                x: 606.75,
                y: 405.907,
                r: -.735
            },
            30: {
                x: 606.513,
                y: 405.743
            },
            31: {
                x: 606.223,
                y: 405.606,
                r: -.736
            },
            32: {
                x: 605.819,
                y: 405.389,
                r: -.737
            },
            33: {
                x: 605.374,
                y: 405.114,
                r: -.739
            },
            34: {
                x: 604.875,
                y: 404.865,
                r: -.74
            },
            35: {
                x: 604.234,
                y: 404.509,
                r: -.742
            },
            36: {
                x: 603.581,
                y: 404.123,
                r: -.744
            },
            37: {
                x: 602.899,
                y: 403.76,
                r: -.746
            },
            38: {
                x: 602.056,
                y: 403.323,
                r: -.748
            },
            39: {
                x: 601.365,
                y: 402.954,
                r: -.75
            },
            40: {
                x: 600.702,
                y: 402.562,
                r: -.752
            },
            41: {
                x: 600.115,
                y: 402.231,
                r: -.753
            },
            42: {
                x: 599.591,
                y: 401.979,
                r: -.755
            },
            43: {
                x: 599.152,
                y: 401.695,
                r: -.756
            },
            44: {
                x: 598.767,
                y: 401.484,
                r: -.757
            },
            45: {
                x: 598.468,
                y: 401.341,
                r: -.758
            },
            46: {
                x: 598.237,
                y: 401.218,
                r: -.759
            },
            47: {
                x: 598.067,
                y: 401.109
            },
            48: {
                x: 597.935,
                y: 401.083,
                r: -.76
            },
            49: {
                x: 598,
                y: 401
            },
            55: {
                x: 598.511,
                y: 400.698,
                r: -.758
            },
            56: {
                x: 599.838,
                y: 399.868,
                r: -.752
            },
            57: {
                x: 602.099,
                y: 398.555,
                r: -.743
            },
            58: {
                x: 605.33,
                y: 396.716,
                r: -.73
            },
            59: {
                x: 609.602,
                y: 394.423,
                r: -.713
            },
            60: {
                x: 614.834,
                y: 391.712,
                r: -.692
            },
            61: {
                x: 621.226,
                y: 388.729,
                r: -.667
            },
            62: {
                x: 628.788,
                y: 385.425,
                r: -.639
            },
            63: {
                x: 637.666,
                y: 381.952,
                r: -.607
            },
            64: {
                x: 647.894,
                y: 378.354,
                r: -.571
            },
            65: {
                x: 658.469,
                y: 375.193,
                r: -.536
            },
            66: {
                x: 668.204,
                y: 372.692,
                r: -.504
            },
            67: {
                x: 676.925,
                y: 370.707,
                r: -.475
            },
            68: {
                x: 684.665,
                y: 369.276,
                r: -.451
            },
            69: {
                x: 691.326,
                y: 368.134,
                r: -.43
            },
            70: {
                x: 696.855,
                y: 367.345,
                r: -.413
            },
            71: {
                x: 701.18,
                y: 366.813,
                r: -.4
            },
            72: {
                x: 704.283,
                y: 366.475,
                r: -.391
            },
            73: {
                x: 706.14,
                y: 366.247,
                r: -.385
            },
            74: {
                x: 706.7,
                y: 366.35,
                r: -.383
            },
            115: {
                x: 706.651,
                y: 366.399
            },
            116: {
                x: 706.491,
                y: 366.482,
                r: -.384
            },
            117: {
                x: 706.165,
                y: 366.707,
                r: -.385
            },
            118: {
                x: 705.774,
                y: 366.922,
                r: -.386
            },
            119: {
                x: 705.216,
                y: 367.229,
                r: -.388
            },
            120: {
                x: 704.577,
                y: 367.633,
                r: -.39
            },
            121: {
                x: 703.749,
                y: 368.093,
                r: -.392
            },
            122: {
                x: 702.867,
                y: 368.65,
                r: -.395
            },
            123: {
                x: 701.852,
                y: 369.227,
                r: -.398
            },
            124: {
                x: 700.711,
                y: 369.916,
                r: -.401
            },
            125: {
                x: 699.477,
                y: 370.697,
                r: -.405
            },
            126: {
                x: 698.082,
                y: 371.527,
                r: -.409
            },
            127: {
                x: 696.826,
                y: 372.296,
                r: -.412
            },
            128: {
                x: 695.697,
                y: 373.002,
                r: -.416
            },
            129: {
                x: 694.729,
                y: 373.628,
                r: -.419
            },
            130: {
                x: 693.848,
                y: 374.196,
                r: -.422
            },
            131: {
                x: 693.077,
                y: 374.685,
                r: -.424
            },
            132: {
                x: 692.434,
                y: 375.06,
                r: -.426
            },
            133: {
                x: 691.867,
                y: 375.4,
                r: -.427
            },
            134: {
                x: 691.493,
                y: 375.699,
                r: -.429
            },
            135: {
                x: 691.201,
                y: 375.851,
                r: -.43
            },
            136: {
                x: 691.025,
                y: 375.963
            },
            137: {
                x: 691,
                y: 376
            }
        }).addTimedChild(instance5, 54, 35, {
            54: {
                x: 734.15,
                y: 313.05,
                sx: .1,
                sy: .1,
                r: .398,
                a: .2
            },
            55: {
                x: 737.339,
                y: 304.984,
                sx: .114,
                sy: .114,
                a: .22
            },
            56: {
                x: 740.416,
                y: 296.87,
                sx: .127,
                sy: .127,
                a: .25
            },
            57: {
                x: 743.558,
                y: 288.715,
                sx: .141,
                sy: .141,
                r: .397,
                a: .27
            },
            58: {
                x: 746.628,
                y: 280.616,
                sx: .155,
                sy: .155,
                a: .29
            },
            59: {
                x: 749.752,
                y: 272.521,
                sx: .168,
                sy: .168,
                r: .396,
                a: .32
            },
            60: {
                x: 752.782,
                y: 264.399,
                sx: .182,
                sy: .182,
                a: .34
            },
            61: {
                x: 755.848,
                y: 256.268,
                sx: .196,
                sy: .196,
                r: .395,
                a: .36
            },
            62: {
                x: 758.943,
                y: 248.218,
                sx: .21,
                sy: .21,
                a: .39
            },
            63: {
                x: 761.972,
                y: 240.076,
                sx: .223,
                sy: .223,
                r: .394,
                a: .41
            },
            64: {
                x: 765.017,
                y: 231.943,
                sx: .237,
                sy: .237,
                a: .44
            },
            65: {
                x: 768.109,
                y: 223.806,
                sx: .251,
                sy: .251,
                r: .393,
                a: .46
            },
            66: {
                x: 771.16,
                y: 215.711,
                sx: .264,
                sy: .264,
                a: .48
            },
            67: {
                x: 774.2,
                y: 207.652,
                sx: .278,
                sy: .278,
                a: .51
            },
            68: {
                x: 777.183,
                y: 199.509,
                sx: .292,
                sy: .292,
                r: .392,
                a: .53
            },
            69: {
                x: 780.211,
                y: 191.427,
                sx: .306,
                sy: .306,
                a: .55
            },
            70: {
                x: 783.228,
                y: 183.347,
                sx: .319,
                sy: .319,
                r: .391,
                a: .58
            },
            71: {
                x: 786.18,
                y: 175.224,
                sx: .333,
                sy: .333,
                a: .6
            },
            72: {
                x: 789.223,
                y: 167.123,
                sx: .347,
                sy: .347,
                r: .39,
                a: .63
            },
            73: {
                x: 792.206,
                y: 159.059,
                sx: .36,
                sy: .36,
                a: .65
            },
            74: {
                x: 795.1,
                y: 150.85,
                sx: .374,
                sy: .374,
                r: .389,
                a: .67
            },
            75: {
                x: 793.758,
                y: 142.827,
                sx: .388,
                sy: .388,
                a: .7
            },
            76: {
                x: 792.441,
                y: 134.746,
                sx: .402,
                sy: .402,
                r: .388,
                a: .72
            },
            77: {
                x: 791.063,
                y: 126.6,
                sx: .415,
                sy: .415,
                a: .74
            },
            78: {
                x: 789.637,
                y: 118.542,
                sx: .429,
                sy: .429,
                a: .77
            },
            79: {
                x: 788.269,
                y: 110.448,
                sx: .443,
                sy: .443,
                r: .387,
                a: .79
            },
            80: {
                x: 786.855,
                y: 102.379,
                sx: .456,
                sy: .456,
                a: .81
            },
            81: {
                x: 785.508,
                y: 94.289,
                sx: .47,
                sy: .47,
                r: .386,
                a: .84
            },
            82: {
                x: 784.057,
                y: 86.198,
                sx: .484,
                sy: .484,
                a: .86
            },
            83: {
                x: 782.71,
                y: 78.094,
                sx: .498,
                sy: .498,
                r: .385,
                a: .88
            },
            84: {
                x: 781.279,
                y: 70.019,
                sx: .511,
                sy: .511,
                a: .91
            },
            85: {
                x: 779.802,
                y: 62.019,
                sx: .525,
                sy: .525,
                r: .384,
                a: .93
            },
            86: {
                x: 778.408,
                y: 53.828,
                sx: .539,
                sy: .539,
                a: .95
            },
            87: {
                x: 776.941,
                y: 45.78,
                sx: .553,
                sy: .553,
                a: .98
            },
            88: {
                x: 775.5,
                y: 37.7,
                sx: .566,
                sy: .566,
                r: .383,
                a: 1
            }
        }).addTimedChild(instance4, 26, 52, {
            26: {
                x: 677,
                y: 331.05,
                a: 0
            },
            27: {
                x: 676.65,
                y: 329.1,
                a: .06
            },
            28: {
                x: 676.35,
                y: 327.2,
                a: .12
            },
            29: {
                x: 676,
                y: 325.45,
                a: .17
            },
            30: {
                x: 675.75,
                y: 323.75,
                a: .22
            },
            31: {
                x: 675.45,
                y: 322.15,
                a: .27
            },
            32: {
                x: 675.2,
                y: 320.6,
                a: .32
            },
            33: {
                x: 674.95,
                y: 319.2,
                a: .36
            },
            34: {
                x: 674.7,
                y: 317.85,
                a: .4
            },
            35: {
                x: 674.5,
                y: 316.55,
                a: .44
            },
            36: {
                x: 674.3,
                y: 315.4,
                a: .48
            },
            37: {
                x: 674.1,
                y: 314.3,
                a: .51
            },
            38: {
                x: 673.9,
                y: 313.3,
                a: .54
            },
            39: {
                x: 673.75,
                y: 312.4,
                a: .57
            },
            40: {
                x: 673.6,
                y: 311.55,
                a: .59
            },
            41: {
                x: 673.5,
                y: 310.85,
                a: .61
            },
            42: {
                x: 673.35,
                y: 310.2,
                a: .63
            },
            43: {
                x: 673.25,
                y: 309.6,
                a: .65
            },
            44: {
                x: 673.2,
                y: 309.15,
                a: .67
            },
            45: {
                x: 673.1,
                y: 308.75,
                a: .68
            },
            46: {
                x: 673.05,
                y: 308.45,
                a: .69
            },
            47: {
                y: 308.2,
                a: .7
            },
            48: {
                x: 673,
                y: 308.1
            },
            49: {
                y: 308.05
            },
            50: {
                a: .73
            },
            51: {
                a: .77
            },
            52: {
                a: .8
            },
            55: {
                x: 673.6,
                y: 308.15
            },
            56: {
                x: 675.35,
                y: 308.5,
                a: .79
            },
            57: {
                x: 678.25,
                y: 309.05,
                a: .78
            },
            58: {
                x: 682.3,
                y: 309.8,
                a: .77
            },
            59: {
                x: 687.55,
                y: 310.8,
                a: .75
            },
            60: {
                x: 693.95,
                y: 312.05,
                a: .72
            },
            61: {
                x: 701.5,
                y: 313.5,
                a: .69
            },
            62: {
                x: 710.25,
                y: 315.15,
                a: .66
            },
            63: {
                x: 720.1,
                y: 317.05,
                a: .62
            },
            64: {
                x: 730.9,
                y: 319.1,
                a: .58
            },
            65: {
                x: 740.75,
                y: 320.95,
                a: .54
            },
            66: {
                x: 749.5,
                y: 322.6,
                a: .51
            },
            67: {
                x: 757.05,
                y: 324.05,
                a: .48
            },
            68: {
                x: 763.45,
                y: 325.3,
                a: .45
            },
            69: {
                x: 768.7,
                y: 326.3,
                a: .43
            },
            70: {
                x: 772.75,
                y: 327.05,
                a: .42
            },
            71: {
                x: 775.65,
                y: 327.6,
                a: .41
            },
            72: {
                x: 777.4,
                y: 327.95,
                a: .4
            },
            73: {
                x: 778,
                y: 328.05
            }
        }).addTimedChild(instance9, 89, 76).addTimedChild(instance6, 78, 87, {
            78: {
                x: 778,
                y: 328.05,
                a: .4
            },
            115: {
                x: 777.5,
                y: 328.2
            },
            116: {
                x: 776.95,
                y: 328.4,
                a: .41
            },
            117: {
                x: 776.45,
                y: 328.55
            },
            118: {
                x: 775.9,
                y: 328.75,
                a: .42
            },
            119: {
                x: 775.4,
                y: 328.9
            },
            120: {
                x: 774.85,
                y: 329.1,
                a: .43
            },
            121: {
                x: 774.35,
                y: 329.25
            },
            122: {
                x: 773.85,
                y: 329.4
            },
            123: {
                x: 773.3,
                y: 329.6,
                a: .44
            },
            124: {
                x: 772.8,
                y: 329.75
            },
            125: {
                x: 772.25,
                y: 329.95,
                a: .45
            },
            126: {
                x: 771.75,
                y: 330.1
            },
            127: {
                x: 771.2,
                y: 330.3,
                a: .46
            },
            128: {
                x: 770.7,
                y: 330.45
            },
            129: {
                x: 770.15,
                y: 330.65
            },
            130: {
                x: 769.65,
                y: 330.8,
                a: .47
            },
            131: {
                x: 769.15,
                y: 330.95
            },
            132: {
                x: 768.6,
                y: 331.15,
                a: .48
            },
            133: {
                x: 768.1,
                y: 331.3
            },
            134: {
                x: 767.55,
                y: 331.5,
                a: .49
            },
            135: {
                x: 767.05,
                y: 331.65
            },
            136: {
                x: 766.5,
                y: 331.85,
                a: .5
            },
            137: {
                x: 766,
                y: 332
            }
        }).addTimedChild(instance8, 84, 76, {
            84: {
                x: 677.25,
                y: 349.2,
                sx: .1,
                sy: .1,
                r: .262,
                a: 1
            },
            85: {
                x: 677.9,
                y: 343.039,
                sx: .115,
                sy: .115,
                a: .92
            },
            86: {
                x: 678.529,
                y: 336.841,
                sx: .13,
                sy: .13,
                a: .85
            },
            87: {
                x: 679.16,
                y: 330.596,
                sx: .146,
                sy: .146,
                a: .77
            },
            88: {
                x: 679.833,
                y: 324.408,
                sx: .161,
                sy: .161,
                a: .69
            },
            89: {
                x: 680.464,
                y: 318.163,
                sx: .176,
                sy: .176,
                a: .62
            },
            90: {
                x: 681.096,
                y: 311.918,
                sx: .191,
                sy: .191,
                a: .54
            },
            91: {
                x: 681.714,
                y: 305.664,
                sx: .207,
                sy: .207,
                a: .46
            },
            92: {
                x: 682.33,
                y: 299.474,
                sx: .222,
                sy: .222,
                a: .38
            },
            93: {
                x: 682.95,
                y: 293.2,
                sx: .237,
                sy: .237,
                a: .31
            },
            94: {
                x: 683.618,
                y: 287.046,
                sx: .252,
                sy: .252,
                a: .23
            },
            95: {
                x: 684.244,
                y: 280.812,
                sx: .268,
                sy: .268,
                a: .15
            },
            96: {
                x: 684.862,
                y: 274.608,
                sx: .283,
                sy: .283,
                a: .08
            },
            97: {
                x: 685.55,
                y: 268.4,
                sx: .298,
                sy: .298,
                a: 0
            },
            98: {
                x: 686.254,
                y: 262.224,
                sx: .313,
                sy: .313,
                a: .08
            },
            99: {
                x: 686.828,
                y: 256.006,
                sx: .329,
                sy: .329,
                a: .17
            },
            100: {
                x: 687.463,
                y: 249.792,
                sx: .344,
                sy: .344,
                a: .25
            },
            101: {
                x: 688.096,
                y: 243.558,
                sx: .359,
                sy: .359,
                a: .33
            },
            102: {
                x: 688.771,
                y: 237.39,
                sx: .375,
                sy: .375,
                a: .42
            },
            103: {
                x: 689.345,
                y: 231.172,
                sx: .39,
                sy: .39,
                a: .5
            },
            104: {
                x: 689.909,
                y: 224.95,
                sx: .405,
                sy: .405,
                a: .58
            },
            105: {
                x: 690.584,
                y: 218.732,
                sx: .42,
                sy: .42,
                a: .67
            },
            106: {
                x: 691.219,
                y: 212.518,
                sx: .436,
                sy: .436,
                a: .75
            },
            107: {
                x: 691.802,
                y: 206.284,
                sx: .451,
                sy: .451,
                a: .83
            },
            108: {
                x: 692.477,
                y: 200.116,
                sx: .466,
                sy: .466,
                a: .92
            },
            109: {
                x: 692.95,
                y: 193.9,
                sx: .481,
                sy: .481,
                a: 1
            },
            110: {
                x: 693.803,
                y: 185.619,
                sx: .502,
                sy: .502,
                a: .96
            },
            111: {
                x: 694.635,
                y: 177.429,
                sx: .522,
                sy: .522,
                a: .92
            },
            112: {
                x: 695.444,
                y: 169.414,
                sx: .542,
                sy: .542,
                a: .88
            },
            113: {
                x: 696.231,
                y: 161.54,
                sx: .561,
                sy: .561,
                a: .85
            },
            114: {
                x: 697.016,
                y: 153.847,
                sx: .58,
                sy: .58,
                a: .81
            },
            115: {
                x: 697.787,
                y: 146.332,
                sx: .598,
                sy: .598,
                a: .77
            },
            116: {
                x: 698.477,
                y: 138.954,
                sx: .616,
                sy: .616,
                a: .74
            },
            117: {
                x: 699.275,
                y: 131.761,
                sx: .634,
                sy: .634,
                a: .71
            },
            118: {
                x: 699.946,
                y: 124.804,
                sx: .651,
                sy: .651,
                a: .67
            },
            119: {
                x: 700.651,
                y: 117.916,
                sx: .668,
                sy: .668,
                a: .64
            },
            120: {
                x: 701.299,
                y: 111.23,
                sx: .684,
                sy: .684,
                a: .61
            },
            121: {
                x: 701.996,
                y: 104.765,
                sx: .7,
                sy: .7,
                a: .58
            },
            122: {
                x: 702.615,
                y: 98.377,
                sx: .716,
                sy: .716,
                a: .55
            },
            123: {
                x: 703.207,
                y: 92.225,
                sx: .731,
                sy: .731,
                a: .52
            },
            124: {
                x: 703.765,
                y: 86.32,
                sx: .746,
                sy: .746,
                a: .49
            },
            125: {
                x: 704.386,
                y: 80.479,
                sx: .76,
                sy: .76,
                a: .46
            },
            126: {
                x: 704.939,
                y: 74.838,
                sx: .774,
                sy: .774,
                a: .44
            },
            127: {
                x: 705.515,
                y: 69.312,
                sx: .788,
                sy: .788,
                a: .41
            },
            128: {
                x: 706.015,
                y: 63.973,
                sx: .801,
                sy: .801,
                a: .38
            },
            129: {
                x: 706.552,
                y: 58.837,
                sx: .813,
                sy: .813,
                a: .36
            },
            130: {
                x: 707.067,
                y: 53.866,
                sx: .825,
                sy: .825,
                a: .34
            },
            131: {
                x: 707.533,
                y: 49.016,
                sx: .837,
                sy: .837,
                a: .31
            },
            132: {
                x: 707.972,
                y: 44.377,
                sx: .849,
                sy: .849,
                a: .29
            },
            133: {
                x: 708.461,
                y: 39.909,
                sx: .86,
                sy: .86,
                a: .27
            },
            134: {
                x: 708.877,
                y: 35.617,
                sx: .87,
                sy: .87,
                a: .25
            },
            135: {
                x: 709.324,
                y: 31.504,
                sx: .88,
                sy: .88,
                a: .23
            },
            136: {
                x: 709.702,
                y: 27.541,
                sx: .89,
                sy: .89,
                a: .21
            },
            137: {
                x: 710.091,
                y: 23.701,
                sx: .9,
                sy: .9,
                a: .2
            },
            138: {
                x: 710.452,
                y: 20.039,
                sx: .908,
                sy: .908,
                a: .18
            },
            139: {
                x: 710.832,
                y: 16.572,
                sx: .917,
                sy: .917,
                a: .16
            },
            140: {
                x: 711.174,
                y: 13.28,
                sx: .925,
                sy: .925,
                a: .14
            },
            141: {
                x: 711.426,
                y: 10.161,
                sx: .933,
                sy: .933,
                a: .13
            },
            142: {
                x: 711.762,
                y: 7.257,
                sx: .94,
                sy: .94,
                a: .12
            },
            143: {
                x: 711.996,
                y: 4.408,
                sx: .947,
                sy: .947,
                a: .1
            },
            144: {
                x: 712.297,
                y: 1.797,
                sx: .953,
                sy: .953,
                a: .09
            },
            145: {
                x: 712.571,
                y: -.687,
                sx: .959,
                sy: .959,
                a: .08
            },
            146: {
                x: 712.785,
                y: -2.919,
                sx: .965,
                sy: .965,
                a: .07
            },
            147: {
                x: 712.953,
                y: -5.041,
                sx: .97,
                sy: .97,
                a: .06
            },
            148: {
                x: 713.173,
                y: -6.957,
                sx: .975,
                sy: .975,
                a: .05
            },
            149: {
                x: 713.333,
                y: -8.756,
                sx: .979,
                sy: .979,
                a: .04
            },
            150: {
                x: 713.511,
                y: -10.367,
                sx: .983,
                sy: .983,
                a: .03
            },
            151: {
                x: 713.66,
                y: -11.801,
                sx: .987,
                sy: .987
            },
            152: {
                x: 713.791,
                y: -13.036,
                sx: .99,
                sy: .99,
                a: .02
            },
            153: {
                x: 713.9,
                y: -14.156,
                sx: .993,
                sy: .993
            },
            154: {
                x: 714.002,
                y: -15.094,
                sx: .995,
                sy: .995,
                a: .01
            },
            155: {
                x: 714.074,
                y: -15.885,
                sx: .997,
                sy: .997
            },
            156: {
                x: 714.139,
                y: -16.443,
                sx: .998,
                sy: .998,
                a: 0
            },
            157: {
                x: 714.18,
                y: -16.876,
                sx: .999,
                sy: .999
            },
            158: {
                x: 714.207,
                y: -17.13,
                sx: 1,
                sy: 1
            },
            159: {
                x: 715.25,
                y: -18.05
            }
        }).addTimedChild(instance7, 84, 26, {
            84: {
                x: 660.35,
                y: 432.85,
                sx: .1,
                sy: .1,
                kx: 3.014,
                ky: .128,
                a: 0
            },
            85: {
                x: 658.951,
                y: 439.516,
                sx: .115,
                sy: .115,
                kx: 3.024,
                ky: .118,
                a: .08
            },
            86: {
                x: 657.577,
                y: 446.209,
                sx: .13,
                sy: .13,
                kx: 3.034,
                ky: .108,
                a: .15
            },
            87: {
                x: 656.367,
                y: 452.842,
                sx: .146,
                sy: .146,
                kx: 3.043,
                ky: .098,
                a: .23
            },
            88: {
                x: 655.239,
                y: 459.577,
                sx: .161,
                sy: .161,
                kx: 3.053,
                ky: .088,
                a: .31
            },
            89: {
                x: 654.265,
                y: 466.279,
                sx: .176,
                sy: .176,
                kx: 3.063,
                ky: .079,
                a: .38
            },
            90: {
                x: 653.403,
                y: 473.071,
                sx: .191,
                sy: .191,
                kx: 3.073,
                ky: .069,
                a: .46
            },
            91: {
                x: 652.672,
                y: 479.809,
                sx: .207,
                sy: .207,
                kx: 3.083,
                ky: .059,
                a: .54
            },
            92: {
                x: 652.026,
                y: 486.601,
                sx: .222,
                sy: .222,
                kx: 3.092,
                ky: .049,
                a: .62
            },
            93: {
                x: 651.552,
                y: 493.372,
                sx: .237,
                sy: .237,
                kx: 3.102,
                ky: .039,
                a: .69
            },
            94: {
                x: 651.184,
                y: 500.239,
                sx: .252,
                sy: .252,
                kx: 3.112,
                ky: .029,
                a: .77
            },
            95: {
                x: 650.928,
                y: 507.035,
                sx: .268,
                sy: .268,
                kx: 3.122,
                ky: .02,
                a: .85
            },
            96: {
                x: 650.778,
                y: 513.919,
                sx: .283,
                sy: .283,
                kx: 3.132,
                ky: .01,
                a: .92
            },
            97: {
                x: 650.85,
                y: 520.5,
                sx: .298,
                sy: .298,
                kx: 3.142,
                ky: 0,
                a: 1
            },
            98: {
                x: 649.739,
                y: 527.322,
                sx: .313,
                sy: .313,
                a: .92
            },
            99: {
                x: 648.539,
                y: 534.152,
                sx: .329,
                sy: .329,
                a: .83
            },
            100: {
                x: 647.348,
                y: 540.941,
                sx: .344,
                sy: .344,
                a: .75
            },
            101: {
                x: 646.157,
                y: 547.739,
                sx: .359,
                sy: .359,
                a: .67
            },
            102: {
                x: 645.007,
                y: 554.519,
                sx: .375,
                sy: .375,
                a: .58
            },
            103: {
                x: 643.806,
                y: 561.349,
                sx: .39,
                sy: .39,
                a: .5
            },
            104: {
                x: 642.655,
                y: 568.18,
                sx: .405,
                sy: .405,
                a: .42
            },
            105: {
                x: 641.464,
                y: 574.968,
                sx: .42,
                sy: .42,
                a: .33
            },
            106: {
                x: 640.313,
                y: 581.798,
                sx: .436,
                sy: .436,
                a: .25
            },
            107: {
                x: 639.123,
                y: 588.546,
                sx: .451,
                sy: .451,
                a: .17
            },
            108: {
                x: 637.922,
                y: 595.377,
                sx: .466,
                sy: .466,
                a: .08
            },
            109: {
                x: 636.7,
                y: 602.1,
                sx: .481,
                sy: .481,
                a: 0
            }
        }).addTimedChild(instance10, 109, 25, {
            109: {
                x: 477.1,
                y: 225.1,
                sx: .21,
                sy: .21,
                r: -1.43,
                a: 1
            },
            110: {
                x: 475.038,
                y: 225.491,
                sx: .241,
                sy: .241,
                r: -1.367
            },
            111: {
                x: 472.91,
                y: 225.624,
                sx: .272,
                sy: .272,
                r: -1.303
            },
            112: {
                x: 470.672,
                y: 225.47,
                sx: .302,
                sy: .302,
                r: -1.239
            },
            113: {
                x: 468.423,
                y: 225.132,
                sx: .333,
                sy: .333,
                r: -1.175
            },
            114: {
                x: 466.176,
                y: 224.49,
                sx: .364,
                sy: .364,
                r: -1.111
            },
            115: {
                x: 463.948,
                y: 223.674,
                sx: .395,
                sy: .395,
                r: -1.048
            },
            116: {
                x: 461.743,
                y: 222.502,
                sx: .425,
                sy: .425,
                r: -.984
            },
            117: {
                x: 459.587,
                y: 221.081,
                sx: .456,
                sy: .456,
                r: -.92
            },
            118: {
                x: 457.512,
                y: 219.478,
                sx: .487,
                sy: .487,
                r: -.856
            },
            119: {
                x: 455.593,
                y: 217.571,
                sx: .517,
                sy: .517,
                r: -.792
            },
            120: {
                x: 453.724,
                y: 215.48,
                sx: .548,
                sy: .548,
                r: -.728
            },
            121: {
                x: 452.1,
                y: 213.1,
                sx: .579,
                sy: .579,
                r: -.665
            },
            122: {
                x: 451.756,
                y: 211.026,
                sx: .588,
                sy: .588,
                r: -.609,
                a: .92
            },
            123: {
                x: 451.522,
                y: 208.928,
                sx: .597,
                sy: .597,
                r: -.554,
                a: .83
            },
            124: {
                x: 451.372,
                y: 206.749,
                sx: .607,
                sy: .607,
                r: -.499,
                a: .75
            },
            125: {
                x: 451.352,
                y: 204.538,
                sx: .616,
                sy: .616,
                r: -.443,
                a: .67
            },
            126: {
                x: 451.473,
                y: 202.331,
                sx: .626,
                sy: .626,
                r: -.388,
                a: .58
            },
            127: {
                x: 451.777,
                y: 200.156,
                sx: .635,
                sy: .635,
                r: -.332,
                a: .5
            },
            128: {
                x: 452.085,
                y: 197.891,
                sx: .644,
                sy: .644,
                r: -.277,
                a: .42
            },
            129: {
                x: 452.695,
                y: 195.688,
                sx: .654,
                sy: .654,
                r: -.222,
                a: .33
            },
            130: {
                x: 453.313,
                y: 193.458,
                sx: .663,
                sy: .663,
                r: -.166,
                a: .25
            },
            131: {
                x: 454.073,
                y: 191.291,
                sx: .672,
                sy: .672,
                r: -.111,
                a: .17
            },
            132: {
                x: 455.105,
                y: 189.123,
                sx: .682,
                sy: .682,
                r: -.055,
                a: .08
            },
            133: {
                x: 456.1,
                y: 187.1,
                sx: .691,
                sy: .691,
                r: 0,
                a: 0
            }
        }).addTimedChild(instance11, 139, 25, {
            139: {
                x: 821.2,
                y: 449.65,
                sx: .21,
                sy: .21,
                r: -1.43,
                a: 1
            },
            140: {
                x: 819.511,
                y: 449.937,
                sx: .241,
                sy: .241,
                r: -1.367
            },
            141: {
                x: 817.765,
                y: 449.923,
                sx: .272,
                sy: .272,
                r: -1.303
            },
            142: {
                x: 815.929,
                y: 449.676,
                sx: .302,
                sy: .302,
                r: -1.239
            },
            143: {
                x: 814.055,
                y: 449.132,
                sx: .333,
                sy: .333,
                r: -1.175
            },
            144: {
                x: 812.159,
                y: 448.454,
                sx: .364,
                sy: .364,
                r: -1.111
            },
            145: {
                x: 810.268,
                y: 447.377,
                sx: .395,
                sy: .395,
                r: -1.048
            },
            146: {
                x: 808.459,
                y: 446.182,
                sx: .425,
                sy: .425,
                r: -.984
            },
            147: {
                x: 806.657,
                y: 444.632,
                sx: .456,
                sy: .456,
                r: -.92
            },
            148: {
                x: 805.001,
                y: 442.842,
                sx: .487,
                sy: .487,
                r: -.856
            },
            149: {
                x: 803.419,
                y: 440.906,
                sx: .517,
                sy: .517,
                r: -.792
            },
            150: {
                x: 801.98,
                y: 438.66,
                sx: .548,
                sy: .548,
                r: -.728
            },
            151: {
                x: 800.7,
                y: 436.15,
                sx: .579,
                sy: .579,
                r: -.665
            },
            152: {
                x: 800.594,
                y: 434.178,
                sx: .588,
                sy: .588,
                r: -.609,
                a: .92
            },
            153: {
                x: 800.621,
                y: 432.303,
                sx: .597,
                sy: .597,
                r: -.554,
                a: .83
            },
            154: {
                x: 800.748,
                y: 430.289,
                sx: .607,
                sy: .607,
                r: -.499,
                a: .75
            },
            155: {
                x: 800.981,
                y: 428.247,
                sx: .616,
                sy: .616,
                r: -.443,
                a: .67
            },
            156: {
                x: 801.36,
                y: 426.222,
                sx: .626,
                sy: .626,
                r: -.388,
                a: .58
            },
            157: {
                x: 801.872,
                y: 424.141,
                sx: .635,
                sy: .635,
                r: -.332,
                a: .5
            },
            158: {
                x: 802.483,
                y: 422.029,
                sx: .644,
                sy: .644,
                r: -.277,
                a: .42
            },
            159: {
                x: 803.285,
                y: 420.016,
                sx: .654,
                sy: .654,
                r: -.222,
                a: .33
            },
            160: {
                x: 804.206,
                y: 417.997,
                sx: .663,
                sy: .663,
                r: -.166,
                a: .25
            },
            161: {
                x: 805.221,
                y: 415.975,
                sx: .672,
                sy: .672,
                r: -.111,
                a: .17
            },
            162: {
                x: 806.395,
                y: 413.998,
                sx: .682,
                sy: .682,
                r: -.055,
                a: .08
            },
            163: {
                x: 807.7,
                y: 412.15,
                sx: .691,
                sy: .691,
                r: 0,
                a: 0
            }
        }).addAction(function() {
            this.head.gotoAndStop(0)
        }, 0).addAction(function() {
            this.head.gotoAndPlay(1)
        }, 14).addAction(function() {
            this.stop()
        }, 164), this.labels.forEach((label, index) => {
            var labelEndPosition = this.labels[index + 1] ? this.labels[index + 1].position - 1 : this._totalFrames - 1;
            this.addAction(() => this.emit("label_end", this.currentLabel), labelEndPosition)
        })
    }), lib.tile17BigHandL = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile17BigHandL"));
        this.addChild(instance1)
    }), lib.tile17BigHandR = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile17BigHandR"));
        this.addChild(instance1)
    }), lib.tile17BigEyebrowL = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile17BigEyebrowL"));
        this.addChild(instance1)
    }), lib.tile17BigEyebrowR = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile17BigEyebrowR"));
        this.addChild(instance1)
    }), lib.tile17BigEyeClosedL = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile17BigEyeClosedL"));
        this.addChild(instance1)
    }), lib.tile17BigEyeL = Container.extend(function() {
        Container.call(this);
        var instance5 = new Sprite(fromFrame("tile17BigEyeballL")).setTransform(3, 5),
            instance4 = new Sprite(fromFrame("tile17BigIrisL")).setTransform(10, 9),
            instance3 = new Sprite(fromFrame("tile17BigEyelidLeftDown")).setTransform(0, 11),
            instance2 = new Sprite(fromFrame("tile17BigEyelidLeftUp")).setTransform(0, 1),
            instance1 = new Sprite(fromFrame("tile17BigEyeLightL")).setTransform(5, 10);
        this.addChild(instance5, instance4, instance3, instance2, instance1)
    }), lib.tile17BigEyeL2 = Container.extend(function() {
        Container.call(this);
        var instance5 = new Sprite(fromFrame("tile17BigEyeballL")).setTransform(3, 5),
            instance4 = new Sprite(fromFrame("tile17BigIrisL")).setTransform(18, 4),
            instance3 = new Sprite(fromFrame("tile17BigEyelidLeftDown")).setTransform(0, 11),
            instance2 = new Sprite(fromFrame("tile17BigEyelidLeftUp")).setTransform(0, 1),
            instance1 = new Sprite(fromFrame("tile17BigEyeLightL")).setTransform(11, 6);
        this.addChild(instance5, instance4, instance3, instance2, instance1)
    }), lib.tile17BigEyeClosedR = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile17BigEyeClosedR"));
        this.addChild(instance1)
    }), lib.tile17BigEyeR = Container.extend(function() {
        Container.call(this);
        var instance5 = new Sprite(fromFrame("tile17BigEyeballR")).setTransform(6, 4),
            instance4 = new Sprite(fromFrame("tile17BigIrisR")).setTransform(12, 8),
            instance3 = new Sprite(fromFrame("tile17BigEyelidRightDown")).setTransform(0, 9),
            instance2 = new Sprite(fromFrame("tile17BigEyelidRightUp")).setTransform(1, 1),
            instance1 = new Sprite(fromFrame("tile17BigEyeLightR")).setTransform(24, 10, 1, 1, 0, 0, 3.142);
        this.addChild(instance5, instance4, instance3, instance2, instance1)
    }), lib.tile17BigEyeR2 = Container.extend(function() {
        Container.call(this);
        var instance5 = new Sprite(fromFrame("tile17BigEyeballR")).setTransform(6, 4),
            instance4 = new Sprite(fromFrame("tile17BigIrisR")).setTransform(20, 5),
            instance3 = new Sprite(fromFrame("tile17BigEyelidRightDown")).setTransform(0, 9),
            instance2 = new Sprite(fromFrame("tile17BigEyelidRightUp")).setTransform(1, 1),
            instance1 = new Sprite(fromFrame("tile17BigEyeLightR")).setTransform(15, 8);
        this.addChild(instance5, instance4, instance3, instance2, instance1)
    }), lib.tile17BigNose = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile17BigNose"));
        this.addChild(instance1)
    }), lib.tile17BigMouth = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile17BigMouth")).setTransform(8.6, 38.75);
        this.addChild(instance1)
    }), lib.tile17Hair = Container.extend(function() {
        Container.call(this);
        var instance3 = new Sprite(fromFrame("tile17BigHairRight")).setTransform(0, 19),
            instance2 = new Sprite(fromFrame("tile17BigHairUp")).setTransform(20),
            instance1 = new Sprite(fromFrame("tile17BigHairLeft")).setTransform(130, 28);
        this.addChild(instance3, instance2, instance1)
    }), lib.tile17BigFace = Container.extend(function() {
        Container.call(this);
        var instance2 = new Sprite(fromFrame("tile17BigFace")),
            instance1 = new Sprite(fromFrame("tile17BigChin")).setTransform(26, 115);
        this.addChild(instance2, instance1)
    }), lib.tile17BigEarL = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile17BigEarLeft"));
        this.addChild(instance1)
    }), lib.tile17BigEarR = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile17BigEarRight"));
        this.addChild(instance1)
    }), lib.tile17BigHead = MovieClip.extend(function() {
        MovieClip.call(this, {
            duration: 100
        });
        var instance10 = (new lib.tile17BigEarR).setTransform(0, 92),
            instance9 = (new lib.tile17BigEarL).setTransform(160, 107),
            instance8 = (new lib.tile17BigFace).setTransform(21.5, 17.5),
            instance7 = (new lib.tile17Hair).setTransform(8),
            instance6 = new lib.tile17BigMouth,
            instance5 = new lib.tile17BigNose,
            instance4 = new lib.tile17BigEyeR,
            instance3 = new lib.tile17BigEyeL,
            instance12 = new lib.tile17BigEyeClosedR,
            instance11 = new lib.tile17BigEyeClosedL,
            instance14 = new lib.tile17BigEyeR,
            instance13 = new lib.tile17BigEyeL,
            instance16 = new lib.tile17BigEyeClosedR,
            instance15 = new lib.tile17BigEyeClosedL,
            instance18 = new lib.tile17BigEyeR2,
            instance17 = new lib.tile17BigEyeL2,
            instance2 = new lib.tile17BigEyebrowR,
            instance1 = new lib.tile17BigEyebrowL;
        this.addTimedChild(instance10).addTimedChild(instance9).addTimedChild(instance8).addTimedChild(instance7).addTimedChild(instance6, 0, 100, {
            0: {
                x: 48,
                y: 133,
                sx: 1,
                sy: 1
            },
            19: {
                x: 47.475,
                y: 133.859,
                sx: 1.012,
                sy: .984
            },
            20: {
                x: 46.85,
                y: 134.67,
                sx: 1.024,
                sy: .968
            },
            21: {
                x: 46.274,
                y: 135.429,
                sx: 1.036,
                sy: .952
            },
            22: {
                x: 45.649,
                y: 136.29,
                sx: 1.048,
                sy: .936
            },
            23: {
                x: 45,
                y: 137,
                sx: 1.06,
                sy: .92
            },
            74: {
                x: 45.476,
                y: 136.346,
                sx: 1.05,
                sy: .933
            },
            75: {
                x: 46.002,
                y: 135.645,
                sx: 1.04,
                sy: .946
            },
            76: {
                x: 46.478,
                y: 134.993,
                sx: 1.03,
                sy: .96
            },
            77: {
                x: 46.955,
                y: 134.34,
                sx: 1.02,
                sy: .973
            },
            78: {
                x: 47.481,
                y: 133.638,
                sx: 1.01,
                sy: .987
            },
            79: {
                x: 48,
                y: 133,
                sx: 1,
                sy: 1
            }
        }).addTimedChild(instance5, 0, 100, {
            0: {
                x: 72,
                y: 102
            }
        }).addTimedChild(instance4, 0, 11, {
            0: {
                x: 48,
                y: 101,
                sy: 1,
                r: 0
            },
            7: {
                x: 48.127,
                y: 101.621,
                sy: .955,
                r: .013
            },
            8: {
                x: 48.165,
                y: 102.182,
                sy: .91,
                r: .026
            },
            9: {
                x: 48.162,
                y: 102.776,
                sy: .865,
                r: .039
            },
            10: {
                x: 48,
                y: 103,
                sy: .82,
                r: .053
            }
        }).addTimedChild(instance3, 0, 11, {
            0: {
                x: 117,
                y: 107,
                sy: 1,
                r: 0
            },
            7: {
                x: 116.846,
                y: 107.965,
                sy: .955,
                r: -.013
            },
            8: {
                x: 116.643,
                y: 108.861,
                sy: .91,
                r: -.027
            },
            9: {
                x: 116.439,
                y: 109.845,
                sy: .865,
                r: -.04
            },
            10: {
                x: 116,
                y: 110.5,
                sy: .82,
                r: -.053
            }
        }).addTimedChild(instance12, 11, 7, {
            11: {
                x: 47.55,
                y: 102.1
            }
        }).addTimedChild(instance11, 11, 7, {
            11: {
                x: 116.3,
                y: 107.4
            }
        }).addTimedChild(instance14, 18, 61, {
            18: {
                x: 48,
                y: 103,
                sy: .82,
                r: .053
            },
            19: {
                x: 48.094,
                y: 102.592,
                sy: .856,
                r: .042
            },
            20: {
                x: 48.079,
                y: 102.131,
                sy: .892,
                r: .032
            },
            21: {
                x: 48.051,
                y: 101.658,
                sy: .928,
                r: .021
            },
            22: {
                x: 48.01,
                y: 101.226,
                sy: .964,
                r: .011
            },
            23: {
                x: 48,
                y: 101,
                sy: 1,
                r: 0
            },
            75: {
                x: 48.127,
                y: 101.621,
                sy: .955,
                r: .013
            },
            76: {
                x: 48.165,
                y: 102.182,
                sy: .91,
                r: .026
            },
            77: {
                x: 48.162,
                y: 102.776,
                sy: .865,
                r: .039
            },
            78: {
                x: 48,
                y: 103,
                sy: .82,
                r: .053
            }
        }).addTimedChild(instance13, 18, 61, {
            18: {
                x: 116,
                y: 110.5,
                sy: .82,
                r: -.053
            },
            19: {
                x: 116.189,
                y: 109.794,
                sy: .856,
                r: -.043
            },
            20: {
                x: 116.355,
                y: 109.031,
                sy: .892,
                r: -.032
            },
            21: {
                x: 116.546,
                y: 108.261,
                sy: .928,
                r: -.021
            },
            22: {
                x: 116.717,
                y: 107.526,
                sy: .964,
                r: -.011
            },
            23: {
                x: 117,
                y: 107,
                sy: 1,
                r: 0
            },
            75: {
                x: 116.846,
                y: 107.965,
                sy: .955,
                r: -.013
            },
            76: {
                x: 116.643,
                y: 108.861,
                sy: .91,
                r: -.027
            },
            77: {
                x: 116.439,
                y: 109.845,
                sy: .865,
                r: -.04
            },
            78: {
                x: 116,
                y: 110.5,
                sy: .82,
                r: -.053
            }
        }).addTimedChild(instance16, 79, 7, {
            79: {
                x: 47.55,
                y: 102.1
            }
        }).addTimedChild(instance15, 79, 7, {
            79: {
                x: 116.3,
                y: 107.4
            }
        }).addTimedChild(instance18, 86, 14, {
            86: {
                x: 48,
                y: 103,
                sy: .82,
                r: .053
            },
            87: {
                x: 48.139,
                y: 102.695,
                sy: .85,
                r: .044
            },
            88: {
                x: 48.09,
                y: 102.285,
                sy: .88,
                r: .035
            },
            89: {
                x: 48.106,
                y: 101.921,
                sy: .91,
                r: .026
            },
            90: {
                x: 48.026,
                y: 101.546,
                sy: .94,
                r: .018
            },
            91: {
                x: 48.061,
                y: 101.117,
                sy: .97,
                r: .009
            },
            92: {
                x: 48,
                y: 101,
                sy: 1,
                r: 0
            }
        }).addTimedChild(instance17, 86, 14, {
            86: {
                x: 116,
                y: 110.5,
                sy: .82,
                r: -.053
            },
            87: {
                x: 116.158,
                y: 109.936,
                sy: .85,
                r: -.044
            },
            88: {
                x: 116.329,
                y: 109.268,
                sy: .88,
                r: -.036
            },
            89: {
                x: 116.417,
                y: 108.646,
                sy: .91,
                r: -.027
            },
            90: {
                x: 116.569,
                y: 108.017,
                sy: .94,
                r: -.018
            },
            91: {
                x: 116.734,
                y: 107.375,
                sy: .97,
                r: -.009
            },
            92: {
                x: 117,
                y: 107,
                sy: 1,
                r: 0
            }
        }).addTimedChild(instance2, 0, 100, {
            0: {
                x: 40,
                y: 78,
                r: 0
            },
            7: {
                x: 40.46,
                y: 77.965,
                r: .023
            },
            8: {
                x: 40.949,
                y: 77.938,
                r: .047
            },
            9: {
                x: 41.419,
                y: 77.967,
                r: .07
            },
            10: {
                x: 41.869,
                y: 77.952,
                r: .094
            },
            11: {
                x: 42.3,
                y: 77.85,
                r: .117
            },
            18: {
                x: 41.998,
                y: 77.879,
                r: .1
            },
            19: {
                x: 41.683,
                y: 77.888,
                r: .084
            },
            20: {
                x: 41.355,
                y: 77.876,
                r: .067
            },
            21: {
                x: 41.016,
                y: 77.843,
                r: .05
            },
            22: {
                x: 40.713,
                y: 77.887,
                r: .033
            },
            23: {
                x: 40.346,
                y: 77.912,
                r: .017
            },
            24: {
                x: 40,
                y: 78,
                r: 0
            },
            75: {
                x: 40.46,
                y: 77.965,
                r: .023
            },
            76: {
                x: 40.949,
                y: 77.938,
                r: .047
            },
            77: {
                x: 41.419,
                y: 77.967,
                r: .07
            },
            78: {
                x: 41.869,
                y: 77.952,
                r: .094
            },
            79: {
                x: 42.3,
                y: 77.85,
                r: .117
            },
            86: {
                x: 41.778,
                y: 77.875,
                r: .089
            },
            87: {
                x: 41.222,
                y: 77.889,
                r: .061
            },
            88: {
                x: 40.679,
                y: 77.945,
                r: .033
            },
            89: {
                x: 40.196,
                y: 77.991,
                r: .004
            },
            90: {
                x: 39.623,
                y: 78.029,
                r: -.024
            },
            91: {
                x: 39.058,
                y: 78.162,
                r: -.052
            },
            92: {
                x: 38.55,
                y: 78.238,
                r: -.08
            },
            93: {
                x: 37.95,
                y: 78.4,
                r: -.108
            }
        }).addTimedChild(instance1, 0, 100, {
            0: {
                x: 110,
                y: 87,
                sx: 1,
                kx: 0,
                ky: 0,
                r: 0
            },
            7: {
                x: 109.68,
                y: 88.047,
                r: -.021
            },
            8: {
                x: 109.315,
                y: 89.009,
                r: -.042
            },
            9: {
                x: 109.053,
                y: 90.083,
                r: -.062
            },
            10: {
                x: 108.738,
                y: 91.124,
                r: -.083
            },
            11: {
                x: 108.4,
                y: 92.05,
                r: -.104
            },
            18: {
                x: 108.62,
                y: 91.345,
                r: -.089
            },
            19: {
                x: 108.82,
                y: 90.623,
                r: -.074
            },
            20: {
                x: 109.047,
                y: 89.879,
                r: -.059
            },
            21: {
                x: 109.251,
                y: 89.113,
                r: -.045
            },
            22: {
                x: 109.48,
                y: 88.378,
                r: -.03
            },
            23: {
                x: 109.737,
                y: 87.668,
                r: -.015
            },
            24: {
                x: 110,
                y: 87,
                r: 0
            },
            75: {
                x: 109.68,
                y: 88.047,
                r: -.021
            },
            76: {
                x: 109.315,
                y: 89.009,
                r: -.042
            },
            77: {
                x: 109.053,
                y: 90.083,
                r: -.062
            },
            78: {
                x: 108.738,
                y: 91.124,
                r: -.083
            },
            79: {
                x: 108.4,
                y: 92.05,
                r: -.104
            },
            86: {
                x: 108.587,
                y: 90.609,
                kx: .091,
                ky: -.083,
                r: 0
            },
            87: {
                x: 108.729,
                y: 89.161,
                kx: .078,
                ky: -.062
            },
            88: {
                x: 108.878,
                y: 87.698,
                sx: 1.001,
                kx: .065,
                ky: -.041
            },
            89: {
                x: 109.136,
                y: 86.267,
                kx: .052,
                ky: -.021
            },
            90: {
                x: 109.246,
                y: 84.824,
                kx: .039,
                ky: 0
            },
            91: {
                x: 109.465,
                y: 83.363,
                kx: .026,
                ky: .021
            },
            92: {
                x: 109.791,
                y: 81.937,
                sx: 1.002,
                kx: .013,
                ky: .042
            },
            93: {
                x: 110,
                y: 80.5,
                kx: 0,
                ky: .063
            }
        }).addAction(function() {
            this.stop()
        }, 99), this.labels.forEach((label, index) => {
            var labelEndPosition = this.labels[index + 1] ? this.labels[index + 1].position - 1 : this._totalFrames - 1;
            this.addAction(() => this.emit("label_end", this.currentLabel), labelEndPosition)
        })
    }), lib.tile17BigBody = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile17BigBody"));
        this.addChild(instance1)
    }), lib.tile17Big = MovieClip.extend(function() {
        MovieClip.call(this, {
            duration: 120
        });
        var instance4 = new lib.tile17BigBody,
            instance3 = new lib.tile17BigHead;
        this[instance3.name = "head"] = instance3;
        var instance2 = new lib.tile17BigHandR,
            instance1 = new lib.tile17BigHandL;
        this.addTimedChild(instance4, 0, 120, {
            0: {
                x: -11,
                y: 4,
                r: 0
            },
            5: {
                x: -10.95,
                y: 3.999
            },
            6: {
                x: -10.851,
                y: 3.896
            },
            7: {
                x: -10.703,
                y: 3.792,
                r: .001
            },
            8: {
                x: -10.505,
                y: 3.586
            },
            9: {
                x: -10.258,
                y: 3.277,
                r: .002
            },
            10: {
                x: -9.962,
                y: 2.967,
                r: .003
            },
            11: {
                x: -9.566,
                y: 2.605,
                r: .004
            },
            12: {
                x: -9.121,
                y: 2.192,
                r: .005
            },
            13: {
                x: -8.626,
                y: 1.676,
                r: .007
            },
            14: {
                x: -8.083,
                y: 1.109,
                r: .008
            },
            15: {
                x: -7.489,
                y: .489,
                r: .01
            },
            16: {
                x: -6.797,
                y: -.182,
                r: .012
            },
            17: {
                x: -6.105,
                y: -.854,
                r: .014
            },
            18: {
                x: -5.412,
                y: -1.525,
                r: .016
            },
            19: {
                x: -4.819,
                y: -2.144,
                r: .018
            },
            20: {
                x: -4.275,
                y: -2.662,
                r: .019
            },
            21: {
                x: -3.78,
                y: -3.177,
                r: .021
            },
            22: {
                x: -3.335,
                y: -3.591,
                r: .022
            },
            23: {
                x: -2.939,
                y: -3.953,
                r: .023
            },
            24: {
                x: -2.642,
                y: -4.263,
                r: .024
            },
            25: {
                x: -2.395,
                y: -4.571,
                r: .025
            },
            26: {
                x: -2.147,
                y: -4.778
            },
            27: {
                x: -1.999,
                y: -4.882,
                r: .026
            },
            28: {
                x: -1.9,
                y: -4.985
            },
            29: {
                x: -2,
                y: -5
            },
            30: {
                x: -2.358,
                y: -4.547,
                r: .024
            },
            31: {
                x: -2.766,
                y: -4.093,
                r: .023
            },
            32: {
                x: -3.124,
                y: -3.64,
                r: .021
            },
            33: {
                x: -3.533,
                y: -3.237,
                r: .019
            },
            34: {
                x: -3.891,
                y: -2.784,
                r: .018
            },
            35: {
                x: -4.299,
                y: -2.33,
                r: .016
            },
            36: {
                x: -4.707,
                y: -1.877,
                r: .014
            },
            37: {
                x: -5.115,
                y: -1.423,
                r: .013
            },
            38: {
                x: -5.423,
                y: -.97,
                r: .011
            },
            39: {
                x: -5.831,
                y: -.517,
                r: .01
            },
            40: {
                x: -6.239,
                y: -.113,
                r: .008
            },
            41: {
                x: -6.647,
                y: .34,
                r: .006
            },
            42: {
                x: -7.006,
                y: .794,
                r: .005
            },
            43: {
                x: -7.414,
                y: 1.247,
                r: .003
            },
            44: {
                x: -7.772,
                y: 1.7,
                r: .001
            },
            45: {
                x: -8.13,
                y: 2.154,
                r: 0
            },
            46: {
                x: -8.538,
                y: 2.607,
                r: -.002
            },
            47: {
                x: -8.946,
                y: 3.061,
                r: -.003
            },
            48: {
                x: -9.304,
                y: 3.514,
                r: -.005
            },
            49: {
                x: -9.712,
                y: 3.968,
                r: -.007
            },
            50: {
                x: -10.02,
                y: 4.421,
                r: -.008
            },
            51: {
                x: -10.428,
                y: 4.875,
                r: -.01
            },
            52: {
                x: -10.836,
                y: 5.328,
                r: -.012
            },
            53: {
                x: -11.194,
                y: 5.782,
                r: -.013
            },
            54: {
                x: -11.602,
                y: 6.286,
                r: -.015
            },
            55: {
                x: -11.96,
                y: 6.689,
                r: -.016
            },
            56: {
                x: -12.318,
                y: 7.143,
                r: -.018
            },
            57: {
                x: -12.676,
                y: 7.596,
                r: -.02
            },
            58: {
                x: -13,
                y: 8,
                r: -.021
            },
            68: {
                x: -12.951,
                y: 7.998
            },
            69: {
                x: -12.904,
                y: 7.944
            },
            70: {
                x: -12.859,
                y: 7.836,
                r: -.02
            },
            71: {
                x: -12.765,
                y: 7.675
            },
            72: {
                x: -12.724,
                y: 7.461,
                r: -.018
            },
            73: {
                x: -12.584,
                y: 7.244,
                r: -.017
            },
            74: {
                x: -12.446,
                y: 6.924,
                r: -.016
            },
            75: {
                x: -12.26,
                y: 6.601,
                r: -.014
            },
            76: {
                x: -12.076,
                y: 6.175,
                r: -.012
            },
            77: {
                x: -11.843,
                y: 5.846,
                r: -.01
            },
            78: {
                x: -11.659,
                y: 5.42,
                r: -.008
            },
            79: {
                x: -11.523,
                y: 5.096,
                r: -.006
            },
            80: {
                x: -11.335,
                y: 4.826,
                r: -.004
            },
            81: {
                x: -11.195,
                y: 4.559,
                r: -.003
            },
            82: {
                x: -11.153,
                y: 4.345,
                r: -.002
            },
            83: {
                x: -11.06,
                y: 4.184,
                r: -.001
            },
            84: {
                x: -10.964,
                y: 4.076,
                r: 0
            },
            85: {
                x: -10.967,
                y: 4.022
            },
            86: {
                x: -11,
                y: 4
            }
        }).addTimedChild(instance3, 0, 120, {
            0: {
                x: 115,
                y: -177,
                r: 0
            },
            5: {
                x: 115.073,
                y: -176.982
            },
            6: {
                x: 115.254,
                y: -177.029,
                r: .001
            },
            7: {
                x: 115.439,
                y: -177.141
            },
            8: {
                x: 115.828,
                y: -177.318,
                r: .002
            },
            9: {
                x: 116.321,
                y: -177.51,
                r: .004
            },
            10: {
                x: 116.865,
                y: -177.719,
                r: .005
            },
            11: {
                x: 117.564,
                y: -177.988,
                r: .007
            },
            12: {
                x: 118.313,
                y: -178.321,
                r: .01
            },
            13: {
                x: 119.171,
                y: -178.67,
                r: .012
            },
            14: {
                x: 120.176,
                y: -179.081,
                r: .015
            },
            15: {
                x: 121.283,
                y: -179.503,
                r: .018
            },
            16: {
                x: 122.445,
                y: -179.99,
                r: .022
            },
            17: {
                x: 123.757,
                y: -180.537,
                r: .026
            },
            18: {
                x: 125.169,
                y: -181.044,
                r: .03
            },
            19: {
                x: 126.577,
                y: -181.549,
                r: .034
            },
            20: {
                x: 127.884,
                y: -182.038,
                r: .038
            },
            21: {
                x: 129.087,
                y: -182.512,
                r: .041
            },
            22: {
                x: 130.185,
                y: -182.971,
                r: .044
            },
            23: {
                x: 131.183,
                y: -183.313,
                r: .047
            },
            24: {
                x: 132.075,
                y: -183.645,
                r: .05
            },
            25: {
                x: 132.864,
                y: -183.962,
                r: .052
            },
            26: {
                x: 133.501,
                y: -184.219,
                r: .054
            },
            27: {
                x: 134.086,
                y: -184.407,
                r: .056
            },
            28: {
                x: 134.568,
                y: -184.588,
                r: .057
            },
            29: {
                x: 134.95,
                y: -184.754,
                r: .058
            },
            30: {
                x: 135.18,
                y: -184.858,
                r: .059
            },
            31: {
                x: 135.359,
                y: -184.903
            },
            32: {
                x: 135.3,
                y: -184.9,
                r: .06
            },
            33: {
                x: 134.243,
                y: -184.413,
                r: .056
            },
            34: {
                x: 133.083,
                y: -184.024,
                r: .052
            },
            35: {
                x: 131.918,
                y: -183.588,
                r: .048
            },
            36: {
                x: 130.804,
                y: -183.143,
                r: .044
            },
            37: {
                x: 129.688,
                y: -182.65,
                r: .04
            },
            38: {
                x: 128.572,
                y: -182.252,
                r: .037
            },
            39: {
                x: 127.452,
                y: -181.803,
                r: .033
            },
            40: {
                x: 126.282,
                y: -181.35,
                r: .029
            },
            41: {
                x: 125.157,
                y: -180.945,
                r: .025
            },
            42: {
                x: 124.031,
                y: -180.488,
                r: .021
            },
            43: {
                x: 122.953,
                y: -180.023,
                r: .018
            },
            44: {
                x: 121.772,
                y: -179.56,
                r: .014
            },
            45: {
                x: 120.642,
                y: -179.143,
                r: .01
            },
            46: {
                x: 119.506,
                y: -178.729,
                r: .006
            },
            47: {
                x: 118.372,
                y: -178.206,
                r: .002
            },
            48: {
                x: 117.288,
                y: -177.778,
                r: -.002
            },
            49: {
                x: 116.149,
                y: -177.303,
                r: -.005
            },
            50: {
                x: 115.009,
                y: -176.822,
                r: -.009
            },
            51: {
                x: 113.916,
                y: -176.337,
                r: -.013
            },
            52: {
                x: 112.824,
                y: -175.902,
                r: -.017
            },
            53: {
                x: 111.727,
                y: -175.362,
                r: -.021
            },
            54: {
                x: 110.58,
                y: -174.872,
                r: -.025
            },
            55: {
                x: 109.48,
                y: -174.426,
                r: -.028
            },
            56: {
                x: 108.377,
                y: -173.927,
                r: -.032
            },
            57: {
                x: 107.277,
                y: -173.426,
                r: -.036
            },
            58: {
                x: 106.17,
                y: -172.922,
                r: -.04
            },
            59: {
                x: 105.066,
                y: -172.415,
                r: -.044
            },
            60: {
                x: 104,
                y: -172,
                r: -.048
            },
            67: {
                x: 104.05,
                y: -171.95
            },
            68: {
                x: 104.13,
                y: -171.928,
                r: -.047
            },
            69: {
                x: 104.232,
                y: -171.966
            },
            70: {
                x: 104.503,
                y: -172.113,
                r: -.046
            },
            71: {
                x: 104.789,
                y: -172.22,
                r: -.044
            },
            72: {
                x: 105.189,
                y: -172.435,
                r: -.043
            },
            73: {
                x: 105.66,
                y: -172.657,
                r: -.04
            },
            74: {
                x: 106.247,
                y: -172.939,
                r: -.038
            },
            75: {
                x: 106.948,
                y: -173.275,
                r: -.035
            },
            76: {
                x: 107.72,
                y: -173.622,
                r: -.032
            },
            77: {
                x: 108.602,
                y: -174.022,
                r: -.028
            },
            78: {
                x: 109.551,
                y: -174.477,
                r: -.024
            },
            79: {
                x: 110.452,
                y: -174.931,
                r: -.02
            },
            80: {
                x: 111.33,
                y: -175.323,
                r: -.016
            },
            81: {
                x: 112.093,
                y: -175.657,
                r: -.013
            },
            82: {
                x: 112.787,
                y: -175.979,
                r: -.01
            },
            83: {
                x: 113.366,
                y: -176.248,
                r: -.007
            },
            84: {
                x: 113.88,
                y: -176.46,
                r: -.005
            },
            85: {
                x: 114.325,
                y: -176.61,
                r: -.003
            },
            86: {
                x: 114.605,
                y: -176.756,
                r: -.002
            },
            87: {
                x: 114.868,
                y: -176.847,
                r: -.001
            },
            88: {
                x: 114.965,
                y: -176.931,
                r: 0
            },
            89: {
                x: 115,
                y: -177
            }
        }).addTimedChild(instance2, 0, 120, {
            0: {
                x: -41.55,
                y: -123.8,
                r: -.062
            },
            5: {
                x: -41.599,
                y: -123.798
            },
            6: {
                x: -41.649,
                y: -123.898
            },
            7: {
                x: -41.694,
                y: -124.1
            },
            8: {
                x: -41.786,
                y: -124.401
            },
            9: {
                x: -41.877,
                y: -124.806
            },
            10: {
                x: -42.015,
                y: -125.26,
                r: -.061
            },
            11: {
                x: -42.202,
                y: -125.762
            },
            12: {
                x: -42.337,
                y: -126.419
            },
            13: {
                x: -42.574,
                y: -127.123
            },
            14: {
                x: -42.804,
                y: -127.932
            },
            15: {
                x: -43.033,
                y: -128.789
            },
            16: {
                x: -43.31,
                y: -129.745
            },
            17: {
                x: -43.586,
                y: -130.755,
                r: -.06
            },
            18: {
                x: -43.863,
                y: -131.713
            },
            19: {
                x: -44.092,
                y: -132.568
            },
            20: {
                x: -44.373,
                y: -133.374
            },
            21: {
                x: -44.505,
                y: -134.134
            },
            22: {
                x: -44.69,
                y: -134.789
            },
            23: {
                x: -44.826,
                y: -135.292
            },
            24: {
                x: -45.017,
                y: -135.747,
                r: -.059
            },
            25: {
                x: -45.057,
                y: -136.148
            },
            26: {
                x: -45.15,
                y: -136.451
            },
            27: {
                x: -45.246,
                y: -136.652
            },
            28: {
                x: -45.293,
                y: -136.755
            },
            29: {
                x: -45.3,
                y: -136.9
            },
            30: {
                x: -44.315,
                y: -136.742,
                r: -.057
            },
            31: {
                x: -43.333,
                y: -136.635,
                r: -.055
            },
            32: {
                x: -42.451,
                y: -136.476,
                r: -.053
            },
            33: {
                x: -41.468,
                y: -136.318,
                r: -.051
            },
            34: {
                x: -40.533,
                y: -136.16,
                r: -.049
            },
            35: {
                x: -39.548,
                y: -136.102,
                r: -.047
            },
            36: {
                x: -38.613,
                y: -135.941,
                r: -.045
            },
            37: {
                x: -37.731,
                y: -135.728,
                r: -.043
            },
            38: {
                x: -36.797,
                y: -135.565,
                r: -.041
            },
            39: {
                x: -35.811,
                y: -135.455,
                r: -.039
            },
            40: {
                x: -34.927,
                y: -135.292,
                r: -.037
            },
            41: {
                x: -33.943,
                y: -135.129,
                r: -.034
            },
            42: {
                x: -33.056,
                y: -135.014,
                r: -.032
            },
            43: {
                x: -32.071,
                y: -134.849,
                r: -.03
            },
            44: {
                x: -31.135,
                y: -134.635,
                r: -.028
            },
            45: {
                x: -30.15,
                y: -134.47,
                r: -.026
            },
            46: {
                x: -29.263,
                y: -134.356,
                r: -.024
            },
            47: {
                x: -28.277,
                y: -134.188,
                r: -.022
            },
            48: {
                x: -27.339,
                y: -134.02,
                r: -.02
            },
            49: {
                x: -26.354,
                y: -133.903,
                r: -.018
            },
            50: {
                x: -25.416,
                y: -133.734,
                r: -.016
            },
            51: {
                x: -24.479,
                y: -133.513,
                r: -.014
            },
            52: {
                x: -23.54,
                y: -133.344,
                r: -.012
            },
            53: {
                x: -22.606,
                y: -133.222,
                r: -.01
            },
            54: {
                x: -21.617,
                y: -133.054,
                r: -.008
            },
            55: {
                x: -20.681,
                y: -132.833,
                r: -.005
            },
            56: {
                x: -19.743,
                y: -132.659,
                r: -.003
            },
            57: {
                x: -18.803,
                y: -132.536,
                r: -.001
            },
            58: {
                x: -17.75,
                y: -132.25,
                r: .001
            },
            68: {
                x: -17.649,
                y: -132.246
            },
            69: {
                x: -17.699,
                y: -132.296
            },
            70: {
                x: -17.751,
                y: -132.446
            },
            71: {
                x: -17.806,
                y: -132.595
            },
            72: {
                x: -17.96,
                y: -132.845
            },
            73: {
                x: -18.116,
                y: -133.094
            },
            74: {
                x: -18.224,
                y: -133.445
            },
            75: {
                x: -18.382,
                y: -133.794,
                r: 0
            },
            76: {
                x: -18.64,
                y: -134.243
            },
            77: {
                x: -18.85,
                y: -134.641
            },
            78: {
                x: -19.058,
                y: -135.09
            },
            79: {
                x: -19.266,
                y: -135.439
            },
            80: {
                x: -19.427,
                y: -135.84
            },
            81: {
                x: -19.583,
                y: -136.089
            },
            82: {
                x: -19.687,
                y: -136.338
            },
            83: {
                x: -19.741,
                y: -136.488
            },
            84: {
                x: -19.793,
                y: -136.638
            },
            85: {
                x: -19.845,
                y: -136.687
            },
            86: {
                x: -20,
                y: -137
            }
        }).addTimedChild(instance1, 0, 120, {
            0: {
                x: 83,
                y: 9,
                r: .524
            },
            5: {
                x: 82.998,
                y: 9.043
            },
            6: {
                x: 82.95,
                y: 9.124,
                r: .523
            },
            7: {
                x: 82.904,
                y: 9.243
            },
            8: {
                x: 82.758,
                y: 9.398,
                r: .522
            },
            9: {
                x: 82.615,
                y: 9.64
            },
            10: {
                x: 82.372,
                y: 9.92,
                r: .521
            },
            11: {
                x: 82.131,
                y: 10.237,
                r: .52
            },
            12: {
                x: 81.842,
                y: 10.592,
                r: .519
            },
            13: {
                x: 81.552,
                y: 11.033,
                r: .517
            },
            14: {
                x: 81.213,
                y: 11.562,
                r: .516
            },
            15: {
                x: 80.877,
                y: 12.127,
                r: .514
            },
            16: {
                x: 80.441,
                y: 12.68,
                r: .513
            },
            17: {
                x: 80.006,
                y: 13.32,
                r: .511
            },
            18: {
                x: 79.523,
                y: 13.996,
                r: .508
            },
            19: {
                x: 78.988,
                y: 14.673,
                r: .506
            },
            20: {
                x: 78.553,
                y: 15.314,
                r: .504
            },
            21: {
                x: 78.116,
                y: 15.866,
                r: .503
            },
            22: {
                x: 77.777,
                y: 16.432,
                r: .501
            },
            23: {
                x: 77.436,
                y: 16.91,
                r: .5
            },
            24: {
                x: 77.146,
                y: 17.351,
                r: .498
            },
            25: {
                x: 76.853,
                y: 17.705,
                r: .497
            },
            26: {
                x: 76.661,
                y: 18.072,
                r: .496
            },
            27: {
                x: 76.416,
                y: 18.302,
                r: .495
            },
            28: {
                x: 76.271,
                y: 18.543
            },
            29: {
                x: 76.124,
                y: 18.699,
                r: .494
            },
            30: {
                x: 76.077,
                y: 18.867
            },
            31: {
                x: 76.028,
                y: 18.947,
                r: .493
            },
            32: {
                x: 75.9,
                y: 18.85
            },
            33: {
                x: 76.23,
                y: 18.375,
                r: .494
            },
            34: {
                x: 76.56,
                y: 17.802,
                r: .495
            },
            35: {
                x: 76.891,
                y: 17.228,
                r: .496
            },
            36: {
                x: 77.172,
                y: 16.654,
                r: .497
            },
            37: {
                x: 77.553,
                y: 16.13,
                r: .498
            },
            38: {
                x: 77.883,
                y: 15.505,
                r: .499
            },
            39: {
                x: 78.212,
                y: 14.982,
                r: .5
            },
            40: {
                x: 78.543,
                y: 14.409,
                r: .501
            },
            41: {
                x: 78.874,
                y: 13.835,
                r: .502
            },
            42: {
                x: 79.203,
                y: 13.26,
                r: .503
            },
            43: {
                x: 79.534,
                y: 12.736,
                r: .504
            },
            44: {
                x: 79.863,
                y: 12.164,
                r: .505
            },
            45: {
                x: 80.193,
                y: 11.589,
                r: .506
            },
            46: {
                x: 80.524,
                y: 11.015,
                r: .507
            },
            47: {
                x: 80.853,
                y: 10.491,
                r: .508
            },
            48: {
                x: 81.183,
                y: 9.867,
                r: .509
            },
            49: {
                x: 81.513,
                y: 9.342,
                r: .51
            },
            50: {
                x: 81.843,
                y: 8.768,
                r: .511
            },
            51: {
                x: 82.173,
                y: 8.245,
                r: .512
            },
            52: {
                x: 82.501,
                y: 7.669,
                r: .513
            },
            53: {
                x: 82.832,
                y: 7.095,
                r: .514
            },
            54: {
                x: 83.21,
                y: 6.521,
                r: .515
            },
            55: {
                x: 83.539,
                y: 5.997,
                r: .517
            },
            56: {
                x: 83.87,
                y: 5.374,
                r: .518
            },
            57: {
                x: 84.198,
                y: 4.849,
                r: .519
            },
            58: {
                x: 84.45,
                y: 4.15,
                r: .52
            },
            68: {
                x: 84.497,
                y: 4.2
            },
            69: {
                x: 84.447,
                y: 4.305
            },
            70: {
                y: 4.363
            },
            71: {
                x: 84.346,
                y: 4.57
            },
            72: {
                x: 84.296,
                y: 4.685
            },
            73: {
                x: 84.246,
                y: 4.95
            },
            74: {
                x: 84.145,
                y: 5.22
            },
            75: {
                x: 84.093,
                y: 5.49,
                r: .521
            },
            76: {
                x: 83.992,
                y: 5.865
            },
            77: {
                x: 83.843,
                y: 6.19
            },
            78: {
                x: 83.692,
                y: 6.62,
                r: .522
            },
            79: {
                x: 83.54,
                y: 7
            },
            80: {
                x: 83.44,
                y: 7.428
            },
            81: {
                x: 83.339,
                y: 7.753,
                r: .523
            },
            82: {
                x: 83.238,
                y: 8.023
            },
            83: {
                x: 83.137,
                y: 8.241
            },
            84: {
                x: 83.088,
                y: 8.407
            },
            85: {
                x: 83.037,
                y: 8.568
            },
            86: {
                x: 82.986,
                y: 8.78
            },
            87: {
                x: 82.936,
                y: 8.836,
                r: .524
            },
            88: {
                x: 82.886,
                y: 8.942
            },
            89: {
                x: 83,
                y: 9
            }
        }).addAction(function() {
            this.head.gotoAndStop(1)
        }, 0).addAction(function() {
            this.head.gotoAndPlay(1)
        }, 4).addAction(function() {
            this.stop()
        }, 119), this.labels.forEach((label, index) => {
            var labelEndPosition = this.labels[index + 1] ? this.labels[index + 1].position - 1 : this._totalFrames - 1;
            this.addAction(() => this.emit("label_end", this.currentLabel), labelEndPosition)
        })
    }), lib.tile16CigarSmoke = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile16BigCigarSmoke"));
        this.addChild(instance1)
    }), lib.tile16Hand = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile16BigHand"));
        this.addChild(instance1)
    }), lib.tile16GlasesFront = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile16BigGlassesFront"));
        this.addChild(instance1)
    }), lib.tile16EyebrowR = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile16BigEyebrowL"));
        this.addChild(instance1)
    }), lib.tile16EyebrowL = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile16BigEyebrowR"));
        this.addChild(instance1)
    }), lib.tile16BigEyeClosedL = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile16BigEyeClosedL")).setTransform(5.35, .6, 1, 1, .205);
        this.addChild(instance1)
    }), lib.tile16BigEyeClosedR = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile16BigEyeClosedR")).setTransform(4, -1.25, 1, 1, .174);
        this.addChild(instance1)
    }), lib.tile16BigEyeR = Container.extend(function() {
        Container.call(this);
        var instance5 = new Sprite(fromFrame("tile16BigEyeballR")).setTransform(4.85, 0, 1, 1, .217),
            instance4 = new Sprite(fromFrame("tile16BigIrisR")).setTransform(11.2, 2, 1, 1, .217),
            instance3 = new Sprite(fromFrame("tile16BigEyelidRightDown")).setTransform(1.3, 9, 1, 1, .217),
            instance2 = new Sprite(fromFrame("tile16BigEyelidRightUp")).setTransform(3.8, -1, 1, 1, .217),
            instance1 = new Sprite(fromFrame("tile16BigEyeLightR")).setTransform(6.7, 6, 1, 1, .217);
        this.addChild(instance5, instance4, instance3, instance2, instance1)
    }), lib.tile16BigEyeL = Container.extend(function() {
        Container.call(this);
        var instance5 = new Sprite(fromFrame("tile16BigEyeballL")).setTransform(1.8, 0, 1, 1, .219),
            instance4 = new Sprite(fromFrame("tile16BigIrisL")).setTransform(5.6, 2, 1, 1, .219),
            instance3 = new Sprite(fromFrame("tile16BigEyeLightL")).setTransform(2.95, 5, 1, 1, .219),
            instance2 = new Sprite(fromFrame("tile16BigEyelidLeftDown")).setTransform(3.05, 6, 1, 1, .219),
            instance1 = new Sprite(fromFrame("tile16BigEyelidLeftUp")).setTransform(3.15, -4, 1, 1, .219);
        this.addChild(instance5, instance4, instance3, instance2, instance1)
    }), lib.tile16BigCigar = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile16BigCigar"));
        this.addChild(instance1)
    }), lib.tile16BigCigarShadow = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile16BigCigarShadow"));
        this.addChild(instance1)
    }), lib.tile16HeadFace = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile16BigHead"));
        this.addChild(instance1)
    }), lib.tile16GlasesBack = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile16BigGlassesBack"));
        this.addChild(instance1)
    }), lib.tile16Head = MovieClip.extend(function() {
        MovieClip.call(this, {
            duration: 155
        });
        var instance9 = (new lib.tile16GlasesBack).setTransform(181, 130),
            instance8 = new lib.tile16HeadFace,
            instance7 = new lib.tile16BigCigarShadow,
            instance6 = new lib.tile16BigCigar,
            instance5 = new lib.tile16BigEyeL,
            instance4 = new lib.tile16BigEyeR,
            instance11 = new lib.tile16BigEyeClosedR,
            instance10 = new lib.tile16BigEyeClosedL,
            instance13 = new lib.tile16BigEyeL,
            instance12 = new lib.tile16BigEyeR,
            instance15 = new lib.tile16BigEyeClosedR,
            instance14 = new lib.tile16BigEyeClosedL,
            instance17 = new lib.tile16BigEyeL,
            instance16 = new lib.tile16BigEyeR,
            instance3 = new lib.tile16EyebrowL,
            instance2 = new lib.tile16EyebrowR,
            instance1 = (new lib.tile16GlasesFront).setTransform(46, 115);
        this.addTimedChild(instance9).addTimedChild(instance8).addTimedChild(instance7, 0, 155, {
            0: {
                x: 112.7,
                y: 188.3,
                r: .41
            },
            9: {
                x: 112.746,
                y: 188.405,
                r: .409
            },
            10: {
                x: 112.809,
                y: 188.428,
                r: .407
            },
            11: {
                x: 112.88,
                y: 188.513,
                r: .402
            },
            12: {
                x: 112.951,
                y: 188.602,
                r: .397
            },
            13: {
                x: 113.03,
                y: 188.799,
                r: .389
            },
            14: {
                x: 113.205,
                y: 188.938,
                r: .38
            },
            15: {
                x: 113.369,
                y: 189.169,
                r: .37
            },
            16: {
                x: 113.567,
                y: 189.425,
                r: .357
            },
            17: {
                x: 113.796,
                y: 189.647,
                r: .343
            },
            18: {
                x: 114.046,
                y: 189.982,
                r: .328
            },
            19: {
                x: 114.3,
                y: 190.356,
                r: .311
            },
            20: {
                x: 114.654,
                y: 190.756,
                r: .292
            },
            21: {
                x: 115,
                y: 191,
                r: .271
            },
            27: {
                x: 115.173,
                y: 190.675,
                r: .305
            },
            28: {
                x: 115.25,
                y: 190.341,
                r: .337
            },
            29: {
                x: 115.351,
                y: 190.014,
                r: .368
            },
            30: {
                x: 115.488,
                y: 189.719,
                r: .398
            },
            31: {
                x: 115.629,
                y: 189.43,
                r: .426
            },
            32: {
                x: 115.74,
                y: 189.166,
                r: .453
            },
            33: {
                x: 115.836,
                y: 188.953,
                r: .479
            },
            34: {
                x: 115.977,
                y: 188.709,
                r: .503
            },
            35: {
                x: 116.077,
                y: 188.504,
                r: .526
            },
            36: {
                x: 116.138,
                y: 188.305,
                r: .547
            },
            37: {
                x: 116.226,
                y: 188.133,
                r: .567
            },
            38: {
                x: 116.386,
                y: 188.007,
                r: .586
            },
            39: {
                x: 116.48,
                y: 187.839,
                r: .603
            },
            40: {
                x: 116.512,
                y: 187.749,
                r: .619
            },
            41: {
                x: 116.638,
                y: 187.596,
                r: .634
            },
            42: {
                x: 116.711,
                y: 187.501,
                r: .647
            },
            43: {
                x: 116.727,
                y: 187.418,
                r: .658
            },
            44: {
                x: 116.796,
                y: 187.316,
                r: .669
            },
            45: {
                x: 116.863,
                y: 187.247,
                r: .678
            },
            46: {
                x: 116.938,
                y: 187.215,
                r: .685
            },
            47: {
                x: 116.964,
                y: 187.187,
                r: .691
            },
            48: {
                x: 116.996,
                y: 187.118,
                r: .696
            },
            49: {
                x: 116.979,
                y: 187.103,
                r: .7
            },
            50: {
                x: 117.019,
                y: 187.107,
                r: .702
            },
            51: {
                x: 117,
                y: 187
            },
            62: {
                x: 116.994,
                y: 187.139,
                r: .699
            },
            63: {
                x: 116.825,
                y: 187.153,
                r: .689
            },
            64: {
                x: 116.516,
                y: 187.207,
                r: .671
            },
            65: {
                x: 116.171,
                y: 187.277,
                r: .647
            },
            66: {
                x: 115.677,
                y: 187.375,
                r: .616
            },
            67: {
                x: 115.14,
                y: 187.494,
                r: .578
            },
            68: {
                x: 114.514,
                y: 187.707,
                r: .535
            },
            69: {
                x: 113.983,
                y: 187.901,
                r: .496
            },
            70: {
                x: 113.568,
                y: 188.061,
                r: .465
            },
            71: {
                x: 113.21,
                y: 188.145,
                r: .441
            },
            72: {
                x: 112.94,
                y: 188.232,
                r: .424
            },
            73: {
                x: 112.818,
                y: 188.318,
                r: .413
            },
            74: {
                x: 112.7,
                y: 188.3,
                r: .41
            }
        }).addTimedChild(instance6, 0, 155, {
            0: {
                x: 112,
                y: 185,
                r: .666
            },
            9: {
                x: 111.996,
                y: 185.063,
                r: .664
            },
            10: {
                x: 111.99,
                y: 185.164,
                r: .66
            },
            11: {
                x: 112.03,
                y: 185.243,
                r: .651
            },
            12: {
                x: 111.999,
                y: 185.332,
                r: .64
            },
            13: {
                x: 111.988,
                y: 185.461,
                r: .626
            },
            14: {
                x: 112.032,
                y: 185.658,
                r: .608
            },
            15: {
                x: 112.005,
                y: 185.841,
                r: .587
            },
            16: {
                x: 111.975,
                y: 186.123,
                r: .562
            },
            17: {
                x: 111.973,
                y: 186.415,
                r: .535
            },
            18: {
                x: 111.996,
                y: 186.729,
                r: .504
            },
            19: {
                x: 111.957,
                y: 187.115,
                r: .47
            },
            20: {
                x: 112.004,
                y: 187.527,
                r: .433
            },
            21: {
                x: 112,
                y: 188,
                r: .392
            },
            27: {
                x: 112.503,
                y: 187.732,
                r: .446
            },
            28: {
                x: 112.902,
                y: 187.361,
                r: .498
            },
            29: {
                x: 113.302,
                y: 187.034,
                r: .547
            },
            30: {
                x: 113.705,
                y: 186.805,
                r: .594
            },
            31: {
                x: 114.059,
                y: 186.535,
                r: .639
            },
            32: {
                x: 114.452,
                y: 186.275,
                r: .682
            },
            33: {
                x: 114.812,
                y: 186.078,
                r: .722
            },
            34: {
                x: 115.124,
                y: 185.947,
                r: .76
            },
            35: {
                x: 115.509,
                y: 185.793,
                r: .797
            },
            36: {
                x: 115.78,
                y: 185.652,
                r: .83
            },
            37: {
                x: 116.057,
                y: 185.582,
                r: .862
            },
            38: {
                x: 116.393,
                y: 185.52,
                r: .892
            },
            39: {
                x: 116.602,
                y: 185.418,
                r: .919
            },
            40: {
                x: 116.844,
                y: 185.354,
                r: .944
            },
            41: {
                x: 117.011,
                y: 185.323,
                r: .967
            },
            42: {
                x: 117.262,
                y: 185.256,
                r: .988
            },
            43: {
                x: 117.399,
                y: 185.23,
                r: 1.007
            },
            44: {
                x: 117.568,
                y: 185.222,
                r: 1.023
            },
            45: {
                x: 117.718,
                y: 185.211,
                r: 1.037
            },
            46: {
                x: 117.848,
                y: 185.21,
                r: 1.05
            },
            47: {
                x: 117.907,
                y: 185.143,
                r: 1.059
            },
            48: {
                x: 117.996,
                y: 185.17,
                r: 1.067
            },
            49: {
                x: 118.011,
                y: 185.151,
                r: 1.073
            },
            50: {
                x: 118.047,
                y: 185.148,
                r: 1.076
            },
            51: {
                x: 118,
                y: 185,
                r: 1.077
            },
            62: {
                x: 118.047,
                y: 185.07,
                r: 1.072
            },
            63: {
                x: 117.776,
                y: 185.018,
                r: 1.057
            },
            64: {
                x: 117.428,
                y: 185.007,
                r: 1.033
            },
            65: {
                x: 116.921,
                y: 184.966,
                r: .999
            },
            66: {
                x: 116.256,
                y: 184.871,
                r: .955
            },
            67: {
                x: 115.51,
                y: 184.866,
                r: .902
            },
            68: {
                x: 114.554,
                y: 184.904,
                r: .841
            },
            69: {
                x: 113.771,
                y: 184.94,
                r: .788
            },
            70: {
                x: 113.142,
                y: 184.945,
                r: .744
            },
            71: {
                x: 112.629,
                y: 185.014,
                r: .71
            },
            72: {
                x: 112.295,
                y: 185.079,
                r: .685
            },
            73: {
                x: 112.066,
                y: 185.098,
                r: .671
            },
            74: {
                x: 112,
                y: 185,
                r: .666
            }
        }).addTimedChild(instance5, 0, 21, {
            0: {
                x: 153.35,
                y: 122.45,
                sy: 1
            },
            16: {
                x: 153.3,
                y: 123.201,
                sy: .96
            },
            17: {
                x: 153.25,
                y: 123.954,
                sy: .92
            },
            18: {
                x: 153.15,
                y: 124.705,
                sy: .88
            },
            19: {
                x: 153.1,
                y: 125.458,
                sy: .84
            },
            20: {
                x: 153.05,
                y: 126.2,
                sy: .8
            }
        }).addTimedChild(instance4, 0, 21, {
            0: {
                x: 91.25,
                y: 121.95,
                sy: 1
            },
            16: {
                x: 91.2,
                y: 122.871,
                sy: .96
            },
            17: {
                x: 91.15,
                y: 123.792,
                sy: .92
            },
            18: {
                x: 91.05,
                y: 124.715,
                sy: .88
            },
            19: {
                x: 91,
                y: 125.636,
                sy: .84
            },
            20: {
                x: 90.95,
                y: 126.5,
                sy: .8
            }
        }).addTimedChild(instance11, 21, 8, {
            21: {
                x: 89.35,
                y: 122.5
            }
        }).addTimedChild(instance10, 21, 8, {
            21: {
                x: 151.05,
                y: 117.9
            }
        }).addTimedChild(instance13, 29, 46, {
            29: {
                x: 153.05,
                y: 126.2,
                sy: .8
            },
            30: {
                x: 153.1,
                y: 125.731,
                sy: .83
            },
            31: {
                y: 125.213,
                sy: .86
            },
            32: {
                x: 153.15,
                y: 124.746,
                sy: .89
            },
            33: {
                y: 124.227,
                sy: .92
            },
            34: {
                x: 153.2,
                y: 123.761,
                sy: .95
            },
            35: {
                x: 153.25,
                y: 123.242,
                sy: .98
            },
            36: {
                y: 122.775,
                sy: 1.01
            },
            37: {
                x: 153.3,
                y: 122.208,
                sy: 1.04
            },
            38: {
                y: 121.74,
                sy: 1.07
            },
            39: {
                x: 153.35,
                y: 121.15,
                sy: 1.1
            },
            52: {
                y: 121.296,
                sy: 1.09
            },
            53: {
                y: 121.396,
                sy: 1.08
            },
            54: {
                y: 121.545,
                sy: 1.07
            },
            55: {
                y: 121.643,
                sy: 1.06
            },
            56: {
                y: 121.793,
                sy: 1.05
            },
            57: {
                y: 121.891,
                sy: 1.04
            },
            58: {
                y: 122.041,
                sy: 1.03
            },
            59: {
                y: 122.138,
                sy: 1.02
            },
            60: {
                y: 122.288,
                sy: 1.01
            },
            61: {
                y: 122.45,
                sy: 1
            },
            70: {
                x: 153.3,
                y: 123.201,
                sy: .96
            },
            71: {
                x: 153.25,
                y: 123.954,
                sy: .92
            },
            72: {
                x: 153.15,
                y: 124.705,
                sy: .88
            },
            73: {
                x: 153.1,
                y: 125.458,
                sy: .84
            },
            74: {
                x: 153.05,
                y: 126.2,
                sy: .8
            }
        }).addTimedChild(instance12, 29, 46, {
            29: {
                x: 90.95,
                y: 126.5,
                sy: .8
            },
            30: {
                x: 91,
                y: 125.891,
                sy: .83
            },
            31: {
                y: 125.285,
                sy: .86
            },
            32: {
                x: 91.05,
                y: 124.68,
                sy: .89
            },
            33: {
                y: 124.02,
                sy: .92
            },
            34: {
                x: 91.1,
                y: 123.417,
                sy: .95
            },
            35: {
                x: 91.15,
                y: 122.759,
                sy: .98
            },
            36: {
                y: 122.202,
                sy: 1.01
            },
            37: {
                x: 91.2,
                y: 121.545,
                sy: 1.04
            },
            38: {
                y: 120.939,
                sy: 1.07
            },
            39: {
                x: 91.25,
                y: 120.25,
                sy: 1.1
            },
            52: {
                y: 120.456,
                sy: 1.09
            },
            53: {
                y: 120.613,
                sy: 1.08
            },
            54: {
                y: 120.771,
                sy: 1.07
            },
            55: {
                y: 120.978,
                sy: 1.06
            },
            56: {
                y: 121.136,
                sy: 1.05
            },
            57: {
                y: 121.292,
                sy: 1.04
            },
            58: {
                y: 121.45,
                sy: 1.03
            },
            59: {
                y: 121.607,
                sy: 1.02
            },
            60: {
                y: 121.765,
                sy: 1.01
            },
            61: {
                y: 121.95,
                sy: 1
            },
            70: {
                x: 91.2,
                y: 122.871,
                sy: .96
            },
            71: {
                x: 91.15,
                y: 123.792,
                sy: .92
            },
            72: {
                x: 91.05,
                y: 124.715,
                sy: .88
            },
            73: {
                x: 91,
                y: 125.636,
                sy: .84
            },
            74: {
                x: 90.95,
                y: 126.5,
                sy: .8
            }
        }).addTimedChild(instance15, 75, 8, {
            75: {
                x: 89.4,
                y: 122.25
            }
        }).addTimedChild(instance14, 75, 8, {
            75: {
                x: 150.65,
                y: 117.3
            }
        }).addTimedChild(instance17, 83, 72, {
            83: {
                x: 153.05,
                y: 126.2,
                sy: .8
            },
            84: {
                x: 153.1,
                y: 125.658,
                sy: .829
            },
            85: {
                x: 153.15,
                y: 125.164,
                sy: .857
            },
            86: {
                x: 153.2,
                y: 124.622,
                sy: .886
            },
            87: {
                y: 124.078,
                sy: .914
            },
            88: {
                x: 153.25,
                y: 123.536,
                sy: .943
            },
            89: {
                x: 153.3,
                y: 123.042,
                sy: .971
            },
            90: {
                x: 153.35,
                y: 122.45,
                sy: 1
            }
        }).addTimedChild(instance16, 83, 72, {
            83: {
                x: 90.95,
                y: 126.5,
                sy: .8
            },
            84: {
                x: 91,
                y: 125.817,
                sy: .829
            },
            85: {
                x: 91.05,
                y: 125.235,
                sy: .857
            },
            86: {
                x: 91.1,
                y: 124.554,
                sy: .886
            },
            87: {
                y: 123.923,
                sy: .914
            },
            88: {
                x: 91.15,
                y: 123.24,
                sy: .943
            },
            89: {
                x: 91.2,
                y: 122.608,
                sy: .971
            },
            90: {
                x: 91.25,
                y: 121.95,
                sy: 1
            }
        }).addTimedChild(instance3, 0, 155, {
            0: {
                x: 75.15,
                y: 103.85,
                r: 0
            },
            12: {
                x: 75.423,
                y: 103.858,
                r: .007
            },
            13: {
                x: 75.691,
                y: 103.859,
                r: .015
            },
            14: {
                x: 75.956,
                y: 103.905,
                r: .022
            },
            15: {
                x: 76.214,
                y: 103.897,
                r: .03
            },
            16: {
                x: 76.471,
                y: 103.882,
                r: .037
            },
            17: {
                x: 76.775,
                y: 103.963,
                r: .045
            },
            18: {
                x: 77.074,
                y: 103.984,
                r: .052
            },
            19: {
                x: 77.318,
                y: 104.002,
                r: .06
            },
            20: {
                x: 77.558,
                y: 104.011,
                r: .067
            },
            21: {
                x: 77.845,
                y: 104.015,
                r: .075
            },
            22: {
                x: 78.05,
                y: 104,
                r: .082
            },
            30: {
                x: 77.428,
                y: 103.656,
                r: .062
            },
            31: {
                x: 76.783,
                y: 103.285,
                r: .043
            },
            32: {
                x: 76.222,
                y: 102.998,
                r: .026
            },
            33: {
                x: 75.65,
                y: 102.745,
                r: .01
            },
            34: {
                x: 75.168,
                y: 102.492,
                r: -.005
            },
            35: {
                x: 74.741,
                y: 102.288,
                r: -.018
            },
            36: {
                x: 74.365,
                y: 102.091,
                r: -.03
            },
            37: {
                x: 73.994,
                y: 101.958,
                r: -.04
            },
            38: {
                x: 73.686,
                y: 101.84,
                r: -.049
            },
            39: {
                x: 73.394,
                y: 101.743,
                r: -.057
            },
            40: {
                x: 73.218,
                y: 101.666,
                r: -.063
            },
            41: {
                x: 73.063,
                y: 101.567,
                r: -.068
            },
            42: {
                x: 72.928,
                y: 101.497,
                r: -.071
            },
            43: {
                x: 72.869,
                y: 101.451,
                r: -.073
            },
            44: {
                x: 72.85,
                y: 101.45,
                r: -.074
            },
            55: {
                x: 73.181,
                y: 101.742,
                r: -.063
            },
            56: {
                x: 73.496,
                y: 102.109,
                r: -.053
            },
            57: {
                x: 73.845,
                y: 102.355,
                r: -.044
            },
            58: {
                x: 74.08,
                y: 102.684,
                r: -.036
            },
            59: {
                x: 74.302,
                y: 102.845,
                r: -.028
            },
            60: {
                x: 74.512,
                y: 103.089,
                r: -.021
            },
            61: {
                x: 74.659,
                y: 103.273,
                r: -.016
            },
            62: {
                x: 74.852,
                y: 103.445,
                r: -.011
            },
            63: {
                x: 74.981,
                y: 103.555,
                r: -.007
            },
            64: {
                x: 75.007,
                y: 103.657,
                r: -.004
            },
            65: {
                x: 75.123,
                y: 103.749,
                r: -.002
            },
            66: {
                x: 75.132,
                y: 103.786,
                r: 0
            },
            67: {
                x: 75.15,
                y: 103.85
            },
            68: {
                x: 75.05,
                y: 104.3
            },
            69: {
                x: 74.95,
                y: 104.7
            },
            70: {
                x: 74.9,
                y: 105.05
            },
            71: {
                x: 74.8,
                y: 105.3
            },
            72: {
                x: 74.75,
                y: 105.55
            },
            73: {
                y: 105.7
            },
            74: {
                x: 74.7,
                y: 105.75
            },
            75: {
                y: 105.8
            },
            84: {
                x: 74.8,
                y: 105.4
            },
            85: {
                x: 74.9,
                y: 105.05
            },
            86: {
                x: 74.95,
                y: 104.7
            },
            87: {
                x: 75,
                y: 104.45
            },
            88: {
                x: 75.05,
                y: 104.25
            },
            89: {
                x: 75.1,
                y: 104.05
            },
            90: {
                x: 75.15,
                y: 103.95
            },
            91: {
                y: 103.85
            }
        }).addTimedChild(instance2, 0, 155, {
            0: {
                x: 152,
                y: 97,
                r: 0
            },
            12: {
                x: 151.871,
                y: 97.48,
                r: -.011
            },
            13: {
                x: 151.677,
                y: 97.897,
                r: -.021
            },
            14: {
                x: 151.515,
                y: 98.352,
                r: -.032
            },
            15: {
                x: 151.336,
                y: 98.747,
                r: -.043
            },
            16: {
                x: 151.189,
                y: 99.234,
                r: -.053
            },
            17: {
                x: 151.075,
                y: 99.659,
                r: -.064
            },
            18: {
                x: 150.942,
                y: 100.076,
                r: -.074
            },
            19: {
                x: 150.791,
                y: 100.531,
                r: -.085
            },
            20: {
                x: 150.624,
                y: 100.98,
                r: -.096
            },
            21: {
                x: 150.485,
                y: 101.418,
                r: -.106
            },
            22: {
                x: 150.3,
                y: 101.85,
                r: -.117
            },
            30: {
                x: 150.737,
                y: 100.252,
                r: -.086
            },
            31: {
                x: 151.168,
                y: 98.744,
                r: -.057
            },
            32: {
                x: 151.58,
                y: 97.335,
                r: -.03
            },
            33: {
                x: 152.04,
                y: 96.045,
                r: -.005
            },
            34: {
                x: 152.43,
                y: 94.941,
                r: .018
            },
            35: {
                x: 152.866,
                y: 93.942,
                r: .038
            },
            36: {
                x: 153.171,
                y: 93.006,
                r: .057
            },
            37: {
                x: 153.51,
                y: 92.199,
                r: .073
            },
            38: {
                x: 153.793,
                y: 91.487,
                r: .087
            },
            39: {
                x: 154.087,
                y: 90.882,
                r: .099
            },
            40: {
                x: 154.304,
                y: 90.391,
                r: .109
            },
            41: {
                x: 154.444,
                y: 90.073,
                r: .116
            },
            42: {
                x: 154.569,
                y: 89.783,
                r: .122
            },
            43: {
                x: 154.636,
                y: 89.625,
                r: .125
            },
            44: {
                x: 154.7,
                y: 89.55,
                r: .126
            },
            55: {
                x: 154.29,
                y: 90.701,
                r: .107
            },
            56: {
                x: 153.95,
                y: 91.711,
                r: .09
            },
            57: {
                x: 153.595,
                y: 92.633,
                r: .075
            },
            58: {
                x: 153.232,
                y: 93.47,
                r: .06
            },
            59: {
                x: 153.022,
                y: 94.183,
                r: .048
            },
            60: {
                x: 152.725,
                y: 94.877,
                r: .037
            },
            61: {
                x: 152.547,
                y: 95.453,
                r: .027
            },
            62: {
                x: 152.399,
                y: 95.915,
                r: .019
            },
            63: {
                x: 152.231,
                y: 96.32,
                r: .012
            },
            64: {
                x: 152.151,
                y: 96.613,
                r: .007
            },
            65: {
                x: 152.111,
                y: 96.851,
                r: .003
            },
            66: {
                x: 152.068,
                y: 97.031,
                r: .001
            },
            67: {
                x: 152,
                y: 97,
                r: 0
            },
            68: {
                x: 151.9,
                y: 97.45
            },
            69: {
                x: 151.8,
                y: 97.85
            },
            70: {
                x: 151.75,
                y: 98.2
            },
            71: {
                x: 151.65,
                y: 98.45
            },
            72: {
                x: 151.6,
                y: 98.7
            },
            73: {
                y: 98.85
            },
            74: {
                x: 151.55,
                y: 98.9
            },
            75: {
                y: 98.95
            },
            84: {
                x: 151.65,
                y: 98.55
            },
            85: {
                x: 151.75,
                y: 98.2
            },
            86: {
                x: 151.8,
                y: 97.85
            },
            87: {
                x: 151.85,
                y: 97.6
            },
            88: {
                x: 151.9,
                y: 97.4
            },
            89: {
                x: 151.95,
                y: 97.2
            },
            90: {
                x: 152,
                y: 97.1
            },
            91: {
                y: 97
            }
        }).addTimedChild(instance1).addAction(function() {
            this.stop()
        }, 154), this.labels.forEach((label, index) => {
            var labelEndPosition = this.labels[index + 1] ? this.labels[index + 1].position - 1 : this._totalFrames - 1;
            this.addAction(() => this.emit("label_end", this.currentLabel), labelEndPosition)
        })
    }), lib.tile16Body = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile16BigBody"));
        this.addChild(instance1)
    }), lib.tile16Big = MovieClip.extend(function() {
        MovieClip.call(this, {
            duration: 140
        });
        var instance3 = new lib.tile16Body,
            instance2 = new lib.tile16Head;
        this[instance2.name = "head"] = instance2;
        var instance1 = new lib.tile16Hand,
            instance4 = new lib.tile16CigarSmoke;
        this.addTimedChild(instance3, 0, 140, {
            0: {
                x: -80,
                y: -430,
                r: 0
            },
            10: {
                x: -79.938,
                y: -430.086
            },
            11: {
                x: -80.082,
                y: -430.109
            },
            12: {
                x: -80.262,
                y: -430.267,
                r: -.001
            },
            13: {
                x: -80.484,
                y: -430.407,
                r: -.002
            },
            14: {
                x: -80.797,
                y: -430.58,
                r: -.003
            },
            15: {
                x: -81.152,
                y: -430.836,
                r: -.004
            },
            16: {
                x: -81.649,
                y: -431.075,
                r: -.005
            },
            17: {
                x: -82.188,
                y: -431.297,
                r: -.007
            },
            18: {
                x: -82.818,
                y: -431.695,
                r: -.009
            },
            19: {
                x: -83.439,
                y: -432.076,
                r: -.011
            },
            20: {
                x: -84.066,
                y: -432.449,
                r: -.013
            },
            21: {
                x: -84.696,
                y: -432.797,
                r: -.015
            },
            22: {
                x: -85.233,
                y: -433.113,
                r: -.016
            },
            23: {
                x: -85.678,
                y: -433.338,
                r: -.018
            },
            24: {
                x: -86.032,
                y: -433.588,
                r: -.019
            },
            25: {
                x: -86.344,
                y: -433.754,
                r: -.02
            },
            26: {
                x: -86.564,
                y: -433.888
            },
            27: {
                x: -86.743,
                y: -434.039,
                r: -.021
            },
            28: {
                x: -86.881,
                y: -434.063
            },
            29: {
                x: -87,
                y: -434
            },
            41: {
                x: -86.924,
                y: -434.055
            },
            42: {
                x: -86.901,
                y: -433.97
            },
            43: {
                x: -86.775,
                y: -433.945
            },
            44: {
                x: -86.646,
                y: -433.881,
                r: -.02
            },
            45: {
                x: -86.463,
                y: -433.771
            },
            46: {
                x: -86.286,
                y: -433.633,
                r: -.019
            },
            47: {
                x: -85.997,
                y: -433.494
            },
            48: {
                x: -85.763,
                y: -433.321,
                r: -.018
            },
            49: {
                x: -85.433,
                y: -433.158,
                r: -.017
            },
            50: {
                x: -85.048,
                y: -432.898,
                r: -.016
            },
            51: {
                x: -84.611,
                y: -432.705,
                r: -.014
            },
            52: {
                x: -84.221,
                y: -432.467,
                r: -.013
            },
            53: {
                x: -83.734,
                y: -432.188,
                r: -.011
            },
            54: {
                x: -83.255,
                y: -431.86,
                r: -.01
            },
            55: {
                x: -82.768,
                y: -431.581,
                r: -.008
            },
            56: {
                x: -82.334,
                y: -431.341,
                r: -.007
            },
            57: {
                x: -81.897,
                y: -431.142,
                r: -.006
            },
            58: {
                x: -81.517,
                y: -430.924,
                r: -.005
            },
            59: {
                x: -81.185,
                y: -430.754,
                r: -.004
            },
            60: {
                x: -80.95,
                y: -430.574,
                r: -.003
            },
            61: {
                x: -80.666,
                y: -430.427,
                r: -.002
            },
            62: {
                x: -80.438,
                y: -430.333,
                r: -.001
            },
            63: {
                x: -80.311,
                y: -430.172
            },
            64: {
                x: -80.131,
                y: -430.101
            },
            65: {
                x: -80.056,
                y: -430.076,
                r: 0
            },
            66: {
                x: -79.976,
                y: -429.992
            },
            67: {
                x: -80,
                y: -430
            }
        }).addTimedChild(instance2, 0, 140, {
            0: {
                x: -43,
                y: -568,
                r: -.23
            },
            5: {
                x: -42.98,
                y: -568.09
            },
            6: {
                x: -43.081,
                y: -568.062
            },
            7: {
                x: -43.262,
                y: -568.134,
                r: -.231
            },
            8: {
                x: -43.532,
                y: -568.144,
                r: -.232
            },
            9: {
                x: -43.857,
                y: -568.184,
                r: -.233
            },
            10: {
                x: -44.231,
                y: -568.272,
                r: -.235
            },
            11: {
                x: -44.676,
                y: -568.329,
                r: -.236
            },
            12: {
                x: -45.246,
                y: -568.391,
                r: -.238
            },
            13: {
                x: -45.888,
                y: -568.472,
                r: -.241
            },
            14: {
                x: -46.57,
                y: -568.53,
                r: -.243
            },
            15: {
                x: -47.35,
                y: -568.676,
                r: -.246
            },
            16: {
                x: -48.218,
                y: -568.812,
                r: -.25
            },
            17: {
                x: -49.105,
                y: -568.863,
                r: -.253
            },
            18: {
                x: -50.07,
                y: -569.05,
                r: -.257
            },
            19: {
                x: -51,
                y: -569.1,
                r: -.26
            },
            20: {
                x: -51.943,
                y: -569.24,
                r: -.264
            },
            21: {
                x: -52.901,
                y: -569.347,
                r: -.268
            },
            22: {
                x: -53.762,
                y: -569.454,
                r: -.271
            },
            23: {
                x: -54.624,
                y: -569.565,
                r: -.274
            },
            24: {
                x: -55.423,
                y: -569.65,
                r: -.277
            },
            25: {
                x: -56.046,
                y: -569.742,
                r: -.28
            },
            26: {
                x: -56.697,
                y: -569.758,
                r: -.282
            },
            27: {
                x: -57.132,
                y: -569.821,
                r: -.284
            },
            28: {
                x: -57.654,
                y: -569.925,
                r: -.286
            },
            29: {
                x: -57.968,
                y: -569.926,
                r: -.287
            },
            30: {
                x: -58.326,
                y: -569.999,
                r: -.288
            },
            31: {
                x: -58.546,
                y: -569.985,
                r: -.289
            },
            32: {
                x: -58.744,
                y: -569.991,
                r: -.29
            },
            33: {
                x: -58.821,
                y: -570.057
            },
            34: {
                x: -59,
                y: -570,
                r: -.291
            },
            41: {
                x: -58.876,
                y: -570.095,
                r: -.29
            },
            42: {
                x: -58.719,
                y: -570.096
            },
            43: {
                x: -58.499,
                y: -570.166,
                r: -.289
            },
            44: {
                x: -58.1,
                y: -570.205,
                r: -.287
            },
            45: {
                x: -57.59,
                y: -570.271,
                r: -.285
            },
            46: {
                x: -57.011,
                y: -570.366,
                r: -.282
            },
            47: {
                x: -56.361,
                y: -570.479,
                r: -.279
            },
            48: {
                x: -55.53,
                y: -570.604,
                r: -.276
            },
            49: {
                x: -54.59,
                y: -570.765,
                r: -.272
            },
            50: {
                x: -53.586,
                y: -570.868,
                r: -.267
            },
            51: {
                x: -52.452,
                y: -571.091,
                r: -.262
            },
            52: {
                x: -51.245,
                y: -571.207,
                r: -.257
            },
            53: {
                x: -49.916,
                y: -571.434,
                r: -.251
            },
            54: {
                x: -48.423,
                y: -571.652,
                r: -.244
            },
            55: {
                x: -46.869,
                y: -571.817,
                r: -.238
            },
            56: {
                x: -45.37,
                y: -572.034,
                r: -.231
            },
            57: {
                x: -44.04,
                y: -572.214,
                r: -.225
            },
            58: {
                x: -42.782,
                y: -572.333,
                r: -.22
            },
            59: {
                x: -41.592,
                y: -572.466,
                r: -.215
            },
            60: {
                x: -40.573,
                y: -572.58,
                r: -.21
            },
            61: {
                x: -39.576,
                y: -572.683,
                r: -.206
            },
            62: {
                x: -38.74,
                y: -572.718,
                r: -.203
            },
            63: {
                x: -38.083,
                y: -572.833,
                r: -.2
            },
            64: {
                x: -37.441,
                y: -572.855,
                r: -.197
            },
            65: {
                x: -36.929,
                y: -572.917,
                r: -.195
            },
            66: {
                x: -36.531,
                y: -572.927,
                r: -.193
            },
            67: {
                x: -36.262,
                y: -572.967,
                r: -.192
            },
            68: {
                x: -36.099,
                y: -572.974
            },
            69: {
                x: -36.15,
                y: -572.95,
                r: -.191
            },
            70: {
                x: -36.51,
                y: -572.708,
                r: -.194
            },
            71: {
                x: -36.969,
                y: -572.357,
                r: -.196
            },
            72: {
                x: -37.429,
                y: -572.056,
                r: -.199
            },
            73: {
                x: -37.897,
                y: -571.705,
                r: -.202
            },
            74: {
                x: -38.356,
                y: -571.395,
                r: -.204
            },
            75: {
                x: -38.824,
                y: -571.085,
                r: -.207
            },
            76: {
                x: -39.273,
                y: -570.758,
                r: -.209
            },
            77: {
                x: -39.79,
                y: -570.39,
                r: -.212
            },
            78: {
                x: -40.248,
                y: -570.071,
                r: -.214
            },
            79: {
                x: -40.656,
                y: -569.744,
                r: -.217
            },
            80: {
                x: -41.113,
                y: -569.408,
                r: -.219
            },
            81: {
                x: -41.57,
                y: -569.073,
                r: -.222
            },
            82: {
                x: -42.028,
                y: -568.737,
                r: -.225
            },
            83: {
                x: -42.493,
                y: -568.391,
                r: -.227
            },
            84: {
                x: -43,
                y: -568,
                r: -.23
            }
        }).addTimedChild(instance1, 0, 140, {
            0: {
                x: 290,
                y: -571,
                r: .027
            },
            5: {
                x: 289.904,
                y: -571.089
            },
            6: {
                x: 289.35,
                y: -571.271,
                r: .026
            },
            7: {
                x: 288.446,
                y: -571.556,
                r: .024
            },
            8: {
                x: 287.102,
                y: -571.904,
                r: .021
            },
            9: {
                x: 285.485,
                y: -572.406,
                r: .018
            },
            10: {
                x: 283.437,
                y: -573.015,
                r: .014
            },
            11: {
                x: 281.053,
                y: -573.675,
                r: .009
            },
            12: {
                x: 278.287,
                y: -574.42,
                r: .003
            },
            13: {
                x: 275.19,
                y: -575.252,
                r: -.003
            },
            14: {
                x: 271.69,
                y: -576.22,
                r: -.01
            },
            15: {
                x: 267.79,
                y: -577.189,
                r: -.018
            },
            16: {
                x: 263.641,
                y: -578.282,
                r: -.026
            },
            17: {
                x: 259.035,
                y: -579.359,
                r: -.036
            },
            18: {
                x: 254.12,
                y: -580.52,
                r: -.046
            },
            19: {
                x: 248.834,
                y: -581.76,
                r: -.057
            },
            20: {
                x: 243.522,
                y: -582.876,
                r: -.067
            },
            21: {
                x: 238.631,
                y: -583.895,
                r: -.077
            },
            22: {
                x: 234.105,
                y: -584.765,
                r: -.087
            },
            23: {
                x: 229.969,
                y: -585.55,
                r: -.095
            },
            24: {
                x: 226.109,
                y: -586.219,
                r: -.103
            },
            25: {
                x: 222.74,
                y: -586.868,
                r: -.11
            },
            26: {
                x: 219.657,
                y: -587.369,
                r: -.116
            },
            27: {
                x: 216.973,
                y: -587.817,
                r: -.122
            },
            28: {
                x: 214.629,
                y: -588.175,
                r: -.127
            },
            29: {
                x: 212.639,
                y: -588.491,
                r: -.131
            },
            30: {
                x: 211.052,
                y: -588.742,
                r: -.134
            },
            31: {
                x: 209.764,
                y: -588.941,
                r: -.137
            },
            32: {
                x: 208.871,
                y: -589.052,
                r: -.139
            },
            33: {
                x: 208.332,
                y: -589.171,
                r: -.14
            },
            34: {
                x: 208,
                y: -589
            },
            41: {
                x: 207.927,
                y: -589.023
            },
            42: {
                x: 207.753,
                y: -588.838,
                r: -.141
            },
            43: {
                x: 207.455,
                y: -588.631,
                r: -.142
            },
            44: {
                x: 206.95,
                y: -588.298,
                r: -.143
            },
            45: {
                x: 206.367,
                y: -587.885,
                r: -.145
            },
            46: {
                x: 205.619,
                y: -587.348,
                r: -.147
            },
            47: {
                x: 204.746,
                y: -586.74,
                r: -.149
            },
            48: {
                x: 203.757,
                y: -586.059,
                r: -.152
            },
            49: {
                x: 202.605,
                y: -585.283,
                r: -.155
            },
            50: {
                x: 201.319,
                y: -584.339,
                r: -.159
            },
            51: {
                x: 199.917,
                y: -583.391,
                r: -.163
            },
            52: {
                x: 198.341,
                y: -582.273,
                r: -.167
            },
            53: {
                x: 196.698,
                y: -581.1,
                r: -.171
            },
            54: {
                x: 194.927,
                y: -579.748,
                r: -.176
            },
            55: {
                x: 193.097,
                y: -578.419,
                r: -.181
            },
            56: {
                x: 191.433,
                y: -577.164,
                r: -.186
            },
            57: {
                x: 189.931,
                y: -576.074,
                r: -.19
            },
            58: {
                x: 188.516,
                y: -575.01,
                r: -.194
            },
            59: {
                x: 187.257,
                y: -574.023,
                r: -.198
            },
            60: {
                x: 186.121,
                y: -573.228,
                r: -.201
            },
            61: {
                x: 185.159,
                y: -572.454,
                r: -.204
            },
            62: {
                x: 184.317,
                y: -571.762,
                r: -.206
            },
            63: {
                x: 183.584,
                y: -571.206,
                r: -.208
            },
            64: {
                x: 182.991,
                y: -570.736,
                r: -.21
            },
            65: {
                x: 182.514,
                y: -570.39,
                r: -.211
            },
            66: {
                x: 182.203,
                y: -570.148,
                r: -.212
            },
            67: {
                x: 182.023,
                y: -569.944
            },
            68: {
                x: 182,
                y: -570,
                r: -.213
            }
        }).addTimedChild(instance4, 40, 70, {
            40: {
                x: 91.5,
                y: -419.55,
                sx: .449,
                sy: .449,
                r: 0,
                a: 1
            },
            41: {
                x: 90.987,
                y: -424.818,
                sx: .517,
                sy: .517,
                r: -.005
            },
            42: {
                x: 90.321,
                y: -430.063,
                sx: .584,
                sy: .584,
                r: -.011
            },
            43: {
                x: 89.681,
                y: -435.247,
                sx: .652,
                sy: .652,
                r: -.016
            },
            44: {
                x: 88.953,
                y: -440.509,
                sx: .719,
                sy: .719,
                r: -.022
            },
            45: {
                x: 88.13,
                y: -445.735,
                sx: .787,
                sy: .787,
                r: -.027
            },
            46: {
                x: 87.325,
                y: -450.906,
                sx: .854,
                sy: .854,
                r: -.032
            },
            47: {
                x: 86.442,
                y: -456.071,
                sx: .922,
                sy: .922,
                r: -.038
            },
            48: {
                x: 85.454,
                y: -461.257,
                sx: .99,
                sy: .99,
                r: -.043
            },
            49: {
                x: 84.384,
                y: -466.411,
                sx: 1.057,
                sy: 1.057,
                r: -.048
            },
            50: {
                x: 83.332,
                y: -471.567,
                sx: 1.125,
                sy: 1.125,
                r: -.054
            },
            51: {
                x: 82.158,
                y: -476.766,
                sx: 1.192,
                sy: 1.192,
                r: -.059
            },
            52: {
                x: 81.011,
                y: -481.828,
                sx: 1.26,
                sy: 1.26,
                r: -.065
            },
            53: {
                x: 79.767,
                y: -486.948,
                sx: 1.328,
                sy: 1.328,
                r: -.07
            },
            54: {
                x: 78.452,
                y: -492.034,
                sx: 1.395,
                sy: 1.395,
                r: -.075
            },
            55: {
                x: 77.114,
                y: -497.185,
                sx: 1.463,
                sy: 1.463,
                r: -.081
            },
            56: {
                x: 75.683,
                y: -502.286,
                sx: 1.53,
                sy: 1.53,
                r: -.086
            },
            57: {
                x: 74.22,
                y: -507.328,
                sx: 1.598,
                sy: 1.598,
                r: -.091
            },
            58: {
                x: 72.659,
                y: -512.378,
                sx: 1.665,
                sy: 1.665,
                r: -.097
            },
            59: {
                x: 71.041,
                y: -517.415,
                sx: 1.733,
                sy: 1.733,
                r: -.102
            },
            60: {
                x: 69.427,
                y: -522.423,
                sx: 1.801,
                sy: 1.801,
                r: -.108
            },
            61: {
                x: 67.757,
                y: -527.452,
                sx: 1.868,
                sy: 1.868,
                r: -.113
            },
            62: {
                x: 66.018,
                y: -532.418,
                sx: 1.936,
                sy: 1.936,
                r: -.118
            },
            63: {
                x: 64.219,
                y: -537.359,
                sx: 2.003,
                sy: 2.003,
                r: -.124
            },
            64: {
                x: 62.415,
                y: -542.326,
                sx: 2.071,
                sy: 2.071,
                r: -.129
            },
            65: {
                x: 60.464,
                y: -547.274,
                sx: 2.139,
                sy: 2.139,
                r: -.135
            },
            66: {
                x: 58.529,
                y: -552.163,
                sx: 2.206,
                sy: 2.206,
                r: -.14
            },
            67: {
                x: 56.507,
                y: -557.036,
                sx: 2.274,
                sy: 2.274,
                r: -.145
            },
            68: {
                x: 54.341,
                y: -561.925,
                sx: 2.341,
                sy: 2.341,
                r: -.151
            },
            69: {
                x: 51.6,
                y: -565.95,
                sx: 2.409,
                sy: 2.409,
                r: -.156
            },
            70: {
                x: 50.209,
                y: -572.703,
                sx: 2.494,
                sy: 2.494,
                r: -.152,
                a: .98
            },
            71: {
                x: 48.886,
                y: -579.434,
                sx: 2.58,
                sy: 2.58,
                r: -.148,
                a: .95
            },
            72: {
                x: 47.556,
                y: -586.167,
                sx: 2.665,
                sy: 2.665,
                r: -.144,
                a: .93
            },
            73: {
                x: 46.25,
                y: -592.893,
                sx: 2.751,
                sy: 2.751,
                r: -.141,
                a: .9
            },
            74: {
                x: 45.038,
                y: -599.621,
                sx: 2.837,
                sy: 2.837,
                r: -.137,
                a: .88
            },
            75: {
                x: 43.88,
                y: -606.377,
                sx: 2.922,
                sy: 2.922,
                r: -.133,
                a: .85
            },
            76: {
                x: 42.695,
                y: -613.166,
                sx: 3.008,
                sy: 3.008,
                r: -.129,
                a: .82
            },
            77: {
                x: 41.605,
                y: -619.917,
                sx: 3.093,
                sy: 3.093,
                r: -.125,
                a: .8
            },
            78: {
                x: 40.62,
                y: -626.753,
                sx: 3.179,
                sy: 3.179,
                r: -.121,
                a: .77
            },
            79: {
                x: 39.628,
                y: -633.532,
                sx: 3.264,
                sy: 3.264,
                r: -.117,
                a: .75
            },
            80: {
                x: 38.689,
                y: -640.281,
                sx: 3.35,
                sy: 3.35,
                r: -.113,
                a: .73
            },
            81: {
                x: 37.934,
                y: -647.129,
                sx: 3.436,
                sy: 3.436,
                r: -.109,
                a: .7
            },
            82: {
                x: 37.062,
                y: -653.914,
                sx: 3.521,
                sy: 3.521,
                r: -.105,
                a: .68
            },
            83: {
                x: 36.295,
                y: -660.725,
                sx: 3.607,
                sy: 3.607,
                r: -.101,
                a: .65
            },
            84: {
                x: 35.639,
                y: -667.596,
                sx: 3.692,
                sy: 3.692,
                r: -.098,
                a: .63
            },
            85: {
                x: 34.928,
                y: -674.378,
                sx: 3.778,
                sy: 3.778,
                r: -.094,
                a: .6
            },
            86: {
                x: 34.331,
                y: -681.244,
                sx: 3.863,
                sy: 3.863,
                r: -.09,
                a: .57
            },
            87: {
                x: 33.733,
                y: -688.127,
                sx: 3.949,
                sy: 3.949,
                r: -.086,
                a: .55
            },
            88: {
                x: 33.293,
                y: -694.973,
                sx: 4.035,
                sy: 4.035,
                r: -.082,
                a: .52
            },
            89: {
                x: 32.794,
                y: -701.844,
                sx: 4.12,
                sy: 4.12,
                r: -.078,
                a: .5
            },
            90: {
                x: 32.456,
                y: -708.665,
                sx: 4.206,
                sy: 4.206,
                r: -.074,
                a: .48
            },
            91: {
                x: 32.125,
                y: -715.581,
                sx: 4.291,
                sy: 4.291,
                r: -.07,
                a: .45
            },
            92: {
                x: 31.834,
                y: -722.474,
                sx: 4.377,
                sy: 4.377,
                r: -.066,
                a: .43
            },
            93: {
                x: 31.599,
                y: -729.302,
                sx: 4.462,
                sy: 4.462,
                r: -.062,
                a: .4
            },
            94: {
                x: 31.406,
                y: -736.206,
                sx: 4.548,
                sy: 4.548,
                r: -.059,
                a: .38
            },
            95: {
                x: 31.292,
                y: -743.077,
                sx: 4.633,
                sy: 4.633,
                r: -.055,
                a: .35
            },
            96: {
                x: 31.155,
                y: -749.959,
                sx: 4.719,
                sy: 4.719,
                r: -.051,
                a: .32
            },
            97: {
                x: 31.138,
                y: -756.892,
                sx: 4.805,
                sy: 4.805,
                r: -.047,
                a: .3
            },
            98: {
                x: 31.205,
                y: -763.768,
                sx: 4.89,
                sy: 4.89,
                r: -.043,
                a: .27
            },
            99: {
                x: 31.292,
                y: -770.695,
                sx: 4.976,
                sy: 4.976,
                r: -.039,
                a: .25
            },
            100: {
                x: 31.395,
                y: -777.567,
                sx: 5.061,
                sy: 5.061,
                r: -.035,
                a: .23
            },
            101: {
                x: 31.646,
                y: -784.404,
                sx: 5.147,
                sy: 5.147,
                r: -.031,
                a: .2
            },
            102: {
                x: 31.845,
                y: -791.321,
                sx: 5.232,
                sy: 5.232,
                r: -.027,
                a: .18
            },
            103: {
                x: 32.133,
                y: -798.212,
                sx: 5.318,
                sy: 5.318,
                r: -.023,
                a: .15
            },
            104: {
                x: 32.512,
                y: -805.12,
                sx: 5.404,
                sy: 5.404,
                r: -.02,
                a: .13
            },
            105: {
                x: 32.876,
                y: -812.04,
                sx: 5.489,
                sy: 5.489,
                r: -.016,
                a: .1
            },
            106: {
                x: 33.3,
                y: -818.952,
                sx: 5.575,
                sy: 5.575,
                r: -.012,
                a: .07
            },
            107: {
                x: 33.786,
                y: -825.864,
                sx: 5.66,
                sy: 5.66,
                r: -.008,
                a: .05
            },
            108: {
                x: 34.404,
                y: -832.754,
                sx: 5.746,
                sy: 5.746,
                r: -.004,
                a: .02
            },
            109: {
                x: 33.9,
                y: -839.35,
                sx: 5.832,
                sy: 5.832,
                r: 0,
                a: 0
            }
        }).addAction(function() {
            this.head.gotoAndStop(0)
        }, 0).addAction(function() {
            this.head.gotoAndPlay(1)
        }, 4).addAction(function() {
            this.stop()
        }, 139), this.labels.forEach((label, index) => {
            var labelEndPosition = this.labels[index + 1] ? this.labels[index + 1].position - 1 : this._totalFrames - 1;
            this.addAction(() => this.emit("label_end", this.currentLabel), labelEndPosition)
        })
    }), lib.tile15BigHand = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile15BigHand"));
        this.addChild(instance1)
    }), lib.tile15BigHat = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile15BigHat"));
        this.addChild(instance1)
    }), lib.tile15BigHatShadow = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile15BigHatShadow"));
        this.addChild(instance1)
    }), lib.tile15BigStick = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile15BigStick"));
        this.addChild(instance1)
    }), lib.tile15BigStickShadow = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile15BigStickShadow"));
        this.addChild(instance1)
    }), lib.tile15BigEyeClosedR = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile15BigEyeClosedR"));
        this.addChild(instance1)
    }), lib.tile15BigEyeClosedL = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile15BigEyeClosedL"));
        this.addChild(instance1)
    }), lib.tile15BigFace = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile15BigHead"));
        this.addChild(instance1)
    }), lib.tile15BigHead = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile15BigHead"));
        this.addChild(instance1)
    }), lib.tile15BigBody = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile15BigBody"));
        this.addChild(instance1)
    }), lib.tile15Big = MovieClip.extend(function() {
        MovieClip.call(this, {
            duration: 95
        });
        var instance7 = new lib.tile15BigBody,
            instance6 = new lib.tile15BigHead;
        this[instance6.name = "head"] = instance6;
        var instance8 = new lib.tile15BigFace,
            instance10 = new lib.tile15BigEyeClosedL,
            instance9 = new lib.tile15BigEyeClosedR,
            instance5 = new lib.tile15BigStickShadow,
            instance4 = new lib.tile15BigStick,
            instance3 = new lib.tile15BigHatShadow,
            instance2 = new lib.tile15BigHat;
        this[instance2.name = "head"] = instance2;
        var instance1 = new lib.tile15BigHand;
        this.addTimedChild(instance7, 0, 95, {
            0: {
                x: -87,
                y: 78,
                r: 0
            },
            5: {
                x: -86.989,
                y: 78.059
            },
            6: {
                x: -87.061,
                y: 78.041
            },
            7: {
                x: -87.162,
                y: 78.096,
                r: -.001
            },
            8: {
                x: -87.343,
                y: 78.123,
                r: -.002
            },
            9: {
                x: -87.556,
                y: 78.17,
                r: -.003
            },
            10: {
                x: -87.799,
                y: 78.239,
                r: -.004
            },
            11: {
                x: -88.07,
                y: 78.33,
                r: -.006
            },
            12: {
                x: -88.422,
                y: 78.442,
                r: -.008
            },
            13: {
                x: -88.807,
                y: 78.527,
                r: -.01
            },
            14: {
                x: -89.269,
                y: 78.631,
                r: -.012
            },
            15: {
                x: -89.761,
                y: 78.807,
                r: -.015
            },
            16: {
                x: -90.233,
                y: 78.953,
                r: -.018
            },
            17: {
                x: -90.789,
                y: 79.115,
                r: -.021
            },
            18: {
                x: -91.31,
                y: 79.26,
                r: -.024
            },
            19: {
                x: -91.799,
                y: 79.433,
                r: -.027
            },
            20: {
                x: -92.209,
                y: 79.534,
                r: -.029
            },
            21: {
                x: -92.588,
                y: 79.666,
                r: -.031
            },
            22: {
                x: -92.938,
                y: 79.773,
                r: -.033
            },
            23: {
                x: -93.255,
                y: 79.86,
                r: -.035
            },
            24: {
                x: -93.444,
                y: 79.926,
                r: -.036
            },
            25: {
                x: -93.653,
                y: 79.972,
                r: -.037
            },
            26: {
                x: -93.781,
                y: 79.994,
                r: -.038
            },
            27: {
                x: -93.931,
                y: 80.047,
                r: -.039
            },
            28: {
                x: -94.001,
                y: 80.078
            },
            29: {
                x: -94,
                y: 80
            },
            40: {
                x: -93.916,
                y: 80.034
            },
            41: {
                x: -93.812,
                y: 79.977,
                r: -.038
            },
            42: {
                x: -93.592,
                y: 79.986,
                r: -.037
            },
            43: {
                x: -93.35,
                y: 79.956,
                r: -.036
            },
            44: {
                x: -92.941,
                y: 79.891,
                r: -.034
            },
            45: {
                x: -92.511,
                y: 79.838,
                r: -.032
            },
            46: {
                x: -92.013,
                y: 79.748,
                r: -.029
            },
            47: {
                x: -91.341,
                y: 79.668,
                r: -.027
            },
            48: {
                x: -90.654,
                y: 79.603,
                r: -.023
            },
            49: {
                x: -89.894,
                y: 79.548,
                r: -.02
            },
            50: {
                x: -89.083,
                y: 79.494,
                r: -.016
            },
            51: {
                x: -88.39,
                y: 79.425,
                r: -.013
            },
            52: {
                x: -87.765,
                y: 79.342,
                r: -.01
            },
            53: {
                x: -87.212,
                y: 79.297,
                r: -.007
            },
            54: {
                x: -86.778,
                y: 79.24,
                r: -.005
            },
            55: {
                x: -86.362,
                y: 79.168,
                r: -.003
            },
            56: {
                x: -86.116,
                y: 79.187,
                r: -.002
            },
            57: {
                x: -85.889,
                y: 79.143,
                r: -.001
            },
            58: {
                x: -85.735,
                y: 79.136,
                r: 0
            },
            59: {
                x: -85.8,
                y: 79.2
            },
            61: {
                x: -85.9,
                y: 79.1
            },
            62: {
                x: -86,
                y: 79
            },
            63: {
                x: -86.1,
                y: 78.9
            },
            64: {
                x: -86.3,
                y: 78.7
            },
            65: {
                x: -86.5,
                y: 78.5
            },
            66: {
                x: -86.7,
                y: 78.3
            },
            67: {
                x: -86.8,
                y: 78.2
            },
            68: {
                x: -86.9,
                y: 78.1
            },
            69: {
                x: -87,
                y: 78
            }
        }).addTimedChild(instance6, 0, 75, {
            0: {
                x: 1,
                y: 1,
                r: 0
            },
            5: {
                y: 1.05
            },
            6: {
                x: .901,
                y: 1.049,
                r: -.001
            },
            7: {
                x: .751
            },
            8: {
                x: .503,
                y: 1.047,
                r: -.003
            },
            9: {
                x: .254,
                y: 1.096,
                r: -.004
            },
            10: {
                x: -.094,
                y: 1.094,
                r: -.006
            },
            11: {
                x: -.542,
                y: 1.092,
                r: -.008
            },
            12: {
                x: -.99,
                y: 1.139,
                r: -.01
            },
            13: {
                x: -1.537,
                y: 1.137,
                r: -.013
            },
            14: {
                x: -2.134,
                y: 1.184,
                r: -.016
            },
            15: {
                x: -2.78,
                y: 1.23,
                r: -.02
            },
            16: {
                x: -3.527,
                y: 1.276,
                r: -.024
            },
            17: {
                x: -4.323,
                y: 1.322,
                r: -.028
            },
            18: {
                x: -5.119,
                y: 1.417,
                r: -.032
            },
            19: {
                x: -6.014,
                y: 1.513,
                r: -.037
            },
            20: {
                x: -6.959,
                y: 1.508,
                r: -.042
            },
            21: {
                x: -7.755,
                y: 1.603,
                r: -.046
            },
            22: {
                x: -8.551,
                y: 1.699,
                r: -.05
            },
            23: {
                x: -9.248,
                y: 1.745,
                r: -.054
            },
            24: {
                x: -9.894,
                y: 1.791,
                r: -.057
            },
            25: {
                x: -10.492,
                y: 1.838,
                r: -.06
            },
            26: {
                x: -11.039,
                y: 1.885,
                r: -.063
            },
            27: {
                x: -11.487,
                y: 1.932,
                r: -.066
            },
            28: {
                x: -11.935,
                y: 1.98,
                r: -.068
            },
            29: {
                x: -12.233,
                y: 2.028,
                r: -.069
            },
            30: {
                x: -12.482,
                y: 2.027,
                r: -.071
            },
            31: {
                x: -12.731,
                y: 2.025,
                r: -.072
            },
            32: {
                x: -12.88,
                y: 2.075,
                r: -.073
            },
            33: {
                x: -12.979,
                y: 2.024
            },
            34: {
                x: -13,
                y: 2,
                r: -.074
            },
            40: {
                x: -12.851,
                y: 1.995,
                r: -.073
            },
            41: {
                x: -12.653,
                y: 2.031,
                r: -.072
            },
            42: {
                x: -12.256,
                y: 2.057,
                r: -.07
            },
            43: {
                x: -11.711,
                y: 2.124,
                r: -.068
            },
            44: {
                x: -11.018,
                y: 2.23,
                r: -.064
            },
            45: {
                x: -10.175,
                y: 2.328,
                r: -.06
            },
            46: {
                x: -9.184,
                y: 2.465,
                r: -.056
            },
            47: {
                x: -7.993,
                y: 2.594,
                r: -.05
            },
            48: {
                x: -6.704,
                y: 2.812,
                r: -.044
            },
            49: {
                x: -5.215,
                y: 3.021,
                r: -.037
            },
            50: {
                x: -3.725,
                y: 3.229,
                r: -.03
            },
            51: {
                x: -2.383,
                y: 3.398,
                r: -.024
            },
            52: {
                x: -1.191,
                y: 3.575,
                r: -.018
            },
            53: {
                x: -.197,
                y: 3.763,
                r: -.013
            },
            54: {
                x: .698,
                y: 3.86,
                r: -.009
            },
            55: {
                x: 1.395,
                y: 3.967,
                r: -.006
            },
            56: {
                x: 1.942,
                y: 4.083,
                r: -.003
            },
            57: {
                x: 2.34,
                y: 4.109,
                r: -.001
            },
            58: {
                x: 2.589,
                y: 4.144,
                r: 0
            },
            59: {
                x: 2.6,
                y: 4.2
            },
            60: {
                y: 4.15
            },
            61: {
                x: 2.55,
                y: 4.1
            },
            62: {
                x: 2.45,
                y: 3.95
            },
            63: {
                x: 2.35,
                y: 3.75
            },
            64: {
                x: 2.25,
                y: 3.5
            },
            65: {
                x: 2.1,
                y: 3.2
            },
            66: {
                x: 1.9,
                y: 2.8
            },
            67: {
                x: 1.7,
                y: 2.4
            },
            68: {
                x: 1.5,
                y: 2
            },
            69: {
                x: 1.35,
                y: 1.7
            },
            70: {
                x: 1.25,
                y: 1.45
            },
            71: {
                x: 1.15,
                y: 1.25
            },
            72: {
                x: 1.05,
                y: 1.1
            },
            73: {
                x: 1,
                y: 1.05
            },
            74: {
                y: 1
            }
        }).addTimedChild(instance8, 75, 20, {
            75: {
                x: 1,
                y: 1
            }
        }).addTimedChild(instance10, 81, 7, {
            81: {
                x: 89.8,
                y: 51.15
            }
        }).addTimedChild(instance9, 81, 7, {
            81: {
                x: 31.5,
                y: 51.15
            }
        }).addTimedChild(instance5, 0, 95, {
            0: {
                x: 42,
                y: 117,
                r: 0
            },
            5: {
                x: 42.035,
                y: 117.067,
                r: -.001
            },
            6: {
                x: 41.997,
                y: 117.073,
                r: -.003
            },
            7: {
                x: 41.932,
                y: 117.115,
                r: -.007
            },
            8: {
                x: 41.841,
                y: 117.141,
                r: -.012
            },
            9: {
                x: 41.67,
                y: 117.197,
                r: -.019
            },
            10: {
                x: 41.521,
                y: 117.281,
                r: -.027
            },
            11: {
                x: 41.342,
                y: 117.388,
                r: -.037
            },
            12: {
                x: 41.127,
                y: 117.465,
                r: -.048
            },
            13: {
                x: 40.929,
                y: 117.603,
                r: -.06
            },
            14: {
                x: 40.642,
                y: 117.749,
                r: -.075
            },
            15: {
                x: 40.412,
                y: 117.892,
                r: -.09
            },
            16: {
                x: 40.137,
                y: 118.079,
                r: -.107
            },
            17: {
                x: 39.81,
                y: 118.249,
                r: -.126
            },
            18: {
                x: 39.527,
                y: 118.393,
                r: -.146
            },
            19: {
                x: 39.183,
                y: 118.601,
                r: -.168
            },
            20: {
                x: 38.91,
                y: 118.808,
                r: -.189
            },
            21: {
                x: 38.65,
                y: 119.014,
                r: -.209
            },
            22: {
                x: 38.408,
                y: 119.177,
                r: -.228
            },
            23: {
                x: 38.139,
                y: 119.358,
                r: -.245
            },
            24: {
                x: 37.997,
                y: 119.463,
                r: -.261
            },
            25: {
                x: 37.786,
                y: 119.602,
                r: -.275
            },
            26: {
                x: 37.662,
                y: 119.728,
                r: -.288
            },
            27: {
                x: 37.529,
                y: 119.803,
                r: -.299
            },
            28: {
                x: 37.389,
                y: 119.875,
                r: -.308
            },
            29: {
                x: 37.295,
                y: 119.953,
                r: -.317
            },
            30: {
                x: 37.201,
                y: 119.989,
                r: -.323
            },
            31: {
                x: 37.159,
                y: 120.035,
                r: -.329
            },
            32: {
                x: 37.121,
                y: 120.096,
                r: -.332
            },
            33: {
                x: 37.087,
                y: 120.072,
                r: -.335
            },
            34: {
                x: 37,
                y: 120
            },
            40: {
                x: 37.05,
                y: 120.012,
                r: -.334
            },
            41: {
                x: 37.145,
                y: 119.994,
                r: -.329
            },
            42: {
                x: 37.286,
                y: 120.043,
                r: -.32
            },
            43: {
                x: 37.419,
                y: 120.048,
                r: -.308
            },
            44: {
                x: 37.741,
                y: 120.094,
                r: -.293
            },
            45: {
                x: 37.996,
                y: 120.061,
                r: -.275
            },
            46: {
                x: 38.38,
                y: 120.131,
                r: -.253
            },
            47: {
                x: 38.836,
                y: 120.12,
                r: -.228
            },
            48: {
                x: 39.314,
                y: 120.105,
                r: -.2
            },
            49: {
                x: 39.957,
                y: 120.141,
                r: -.168
            },
            50: {
                x: 40.584,
                y: 120.152,
                r: -.136
            },
            51: {
                x: 41.169,
                y: 120.108,
                r: -.107
            },
            52: {
                x: 41.715,
                y: 120.09,
                r: -.082
            },
            53: {
                x: 42.182,
                y: 120.137,
                r: -.06
            },
            54: {
                x: 42.616,
                y: 120.121,
                r: -.042
            },
            55: {
                x: 42.971,
                y: 120.118,
                r: -.027
            },
            56: {
                x: 43.198,
                y: 120.095,
                r: -.015
            },
            57: {
                x: 43.445,
                y: 120.119,
                r: -.007
            },
            58: {
                x: 43.513,
                y: 120.097,
                r: -.002
            },
            59: {
                x: 43.6,
                y: 120.2,
                r: 0
            },
            60: {
                y: 120.15
            },
            61: {
                x: 43.55,
                y: 120.1
            },
            62: {
                x: 43.45,
                y: 119.95
            },
            63: {
                x: 43.35,
                y: 119.75
            },
            64: {
                x: 43.25,
                y: 119.5
            },
            65: {
                x: 43.1,
                y: 119.2
            },
            66: {
                x: 42.9,
                y: 118.8
            },
            67: {
                x: 42.7,
                y: 118.4
            },
            68: {
                x: 42.5,
                y: 118
            },
            69: {
                x: 42.35,
                y: 117.7
            },
            70: {
                x: 42.25,
                y: 117.45
            },
            71: {
                x: 42.15,
                y: 117.25
            },
            72: {
                x: 42.05,
                y: 117.1
            },
            73: {
                x: 42,
                y: 117.05
            },
            74: {
                y: 117
            }
        }).addTimedChild(instance4, 0, 95, {
            0: {
                x: 32,
                y: 116,
                r: 0
            },
            5: {
                x: 32.034,
                y: 116.075,
                r: -.001
            },
            6: {
                x: 31.995,
                y: 116.103,
                r: -.003
            },
            7: {
                x: 31.876,
                y: 116.182,
                r: -.007
            },
            8: {
                x: 31.78,
                y: 116.31,
                r: -.012
            },
            9: {
                x: 31.654,
                y: 116.433,
                r: -.019
            },
            10: {
                x: 31.498,
                y: 116.6,
                r: -.027
            },
            11: {
                x: 31.312,
                y: 116.804,
                r: -.037
            },
            12: {
                x: 31.091,
                y: 117.042,
                r: -.048
            },
            13: {
                x: 30.837,
                y: 117.358,
                r: -.06
            },
            14: {
                x: 30.545,
                y: 117.596,
                r: -.075
            },
            15: {
                x: 30.263,
                y: 117.997,
                r: -.09
            },
            16: {
                x: 30.038,
                y: 118.356,
                r: -.107
            },
            17: {
                x: 29.714,
                y: 118.763,
                r: -.126
            },
            18: {
                x: 29.388,
                y: 119.158,
                r: -.146
            },
            19: {
                x: 29.006,
                y: 119.634,
                r: -.168
            },
            20: {
                x: 28.751,
                y: 120.057,
                r: -.189
            },
            21: {
                x: 28.46,
                y: 120.514,
                r: -.209
            },
            22: {
                x: 28.241,
                y: 120.913,
                r: -.228
            },
            23: {
                x: 28.045,
                y: 121.265,
                r: -.245
            },
            24: {
                x: 27.877,
                y: 121.625,
                r: -.261
            },
            25: {
                x: 27.69,
                y: 121.855,
                r: -.275
            },
            26: {
                x: 27.54,
                y: 122.156,
                r: -.288
            },
            27: {
                x: 27.427,
                y: 122.39,
                r: -.299
            },
            28: {
                x: 27.307,
                y: 122.558,
                r: -.308
            },
            29: {
                x: 27.231,
                y: 122.717,
                r: -.317
            },
            30: {
                x: 27.202,
                y: 122.819,
                r: -.323
            },
            31: {
                x: 27.172,
                y: 122.966,
                r: -.329
            },
            32: {
                x: 27.092,
                y: 123.063,
                r: -.332
            },
            33: {
                x: 27.063,
                y: 123.061,
                r: -.335
            },
            34: {
                x: 27,
                y: 123
            },
            40: {
                x: 27.045,
                y: 122.995,
                r: -.334
            },
            41: {
                x: 27.125,
                y: 122.927,
                r: -.329
            },
            42: {
                x: 27.242,
                y: 122.842,
                r: -.32
            },
            43: {
                x: 27.393,
                y: 122.729,
                r: -.308
            },
            44: {
                x: 27.624,
                y: 122.572,
                r: -.293
            },
            45: {
                x: 27.933,
                y: 122.353,
                r: -.275
            },
            46: {
                x: 28.267,
                y: 122.1,
                r: -.253
            },
            47: {
                x: 28.723,
                y: 121.832,
                r: -.228
            },
            48: {
                x: 29.2,
                y: 121.473,
                r: -.2
            },
            49: {
                x: 29.846,
                y: 121.131,
                r: -.168
            },
            50: {
                x: 30.438,
                y: 120.761,
                r: -.136
            },
            51: {
                x: 31.05,
                y: 120.37,
                r: -.107
            },
            52: {
                x: 31.633,
                y: 120.14,
                r: -.082
            },
            53: {
                x: 32.093,
                y: 119.859,
                r: -.06
            },
            54: {
                x: 32.576,
                y: 119.601,
                r: -.042
            },
            55: {
                x: 32.932,
                y: 119.44,
                r: -.027
            },
            56: {
                x: 33.212,
                y: 119.295,
                r: -.015
            },
            57: {
                x: 33.462,
                y: 119.181,
                r: -.007
            },
            58: {
                x: 33.532,
                y: 119.107,
                r: -.002
            },
            59: {
                x: 33.6,
                y: 119.2,
                r: 0
            },
            60: {
                y: 119.15
            },
            61: {
                x: 33.55,
                y: 119.1
            },
            62: {
                x: 33.45,
                y: 118.95
            },
            63: {
                x: 33.35,
                y: 118.75
            },
            64: {
                x: 33.25,
                y: 118.5
            },
            65: {
                x: 33.1,
                y: 118.2
            },
            66: {
                x: 32.9,
                y: 117.8
            },
            67: {
                x: 32.7,
                y: 117.4
            },
            68: {
                x: 32.5,
                y: 117
            },
            69: {
                x: 32.35,
                y: 116.7
            },
            70: {
                x: 32.25,
                y: 116.45
            },
            71: {
                x: 32.15,
                y: 116.25
            },
            72: {
                x: 32.05,
                y: 116.1
            },
            73: {
                x: 32,
                y: 116.05
            },
            74: {
                y: 116
            }
        }).addTimedChild(instance3, 0, 95, {
            0: {
                x: 3,
                y: 27,
                r: 0
            },
            5: {
                x: 2.954,
                y: 27.049
            },
            6: {
                x: 2.917,
                y: 27.048,
                r: -.001
            },
            7: {
                x: 2.79,
                y: 27.045
            },
            8: {
                x: 2.57,
                y: 27.092,
                r: -.003
            },
            9: {
                x: 2.31,
                y: 27.087,
                r: -.004
            },
            10: {
                x: 2.009,
                y: 27.132,
                r: -.006
            },
            11: {
                x: 1.666,
                y: 27.125,
                r: -.008
            },
            12: {
                x: 1.282,
                y: 27.167,
                r: -.01
            },
            13: {
                x: .857,
                y: 27.258,
                r: -.013
            },
            14: {
                x: .29,
                y: 27.297,
                r: -.016
            },
            15: {
                x: -.267,
                y: 27.335,
                r: -.02
            },
            16: {
                x: -.916,
                y: 27.372,
                r: -.024
            },
            17: {
                x: -1.556,
                y: 27.457,
                r: -.028
            },
            18: {
                x: -2.287,
                y: 27.49,
                r: -.032
            },
            19: {
                x: -3.06,
                y: 27.572,
                r: -.037
            },
            20: {
                x: -3.882,
                y: 27.652,
                r: -.042
            },
            21: {
                x: -4.614,
                y: 27.734,
                r: -.046
            },
            22: {
                x: -5.204,
                y: 27.767,
                r: -.05
            },
            23: {
                x: -5.854,
                y: 27.8,
                r: -.054
            },
            24: {
                x: -6.412,
                y: 27.884,
                r: -.057
            },
            25: {
                x: -6.929,
                y: 27.92,
                r: -.06
            },
            26: {
                x: -7.354,
                y: 27.957,
                r: -.063
            },
            27: {
                x: -7.739,
                y: 27.995,
                r: -.066
            },
            28: {
                x: -8.082,
                y: 28.035,
                r: -.068
            },
            29: {
                x: -8.384,
                y: 28.077,
                r: -.069
            },
            30: {
                x: -8.645,
                y: 28.069,
                r: -.071
            },
            31: {
                x: -8.814,
                y: 28.114,
                r: -.072
            },
            32: {
                x: -8.992,
                y: 28.11,
                r: -.073
            },
            33: {
                x: -9.029,
                y: 28.107
            },
            34: {
                x: -9,
                y: 28,
                r: -.074
            },
            40: {
                x: -8.911,
                y: 28.046,
                r: -.073
            },
            41: {
                x: -8.641,
                y: 28.086,
                r: -.072
            },
            42: {
                x: -8.343,
                y: 28.12,
                r: -.07
            },
            43: {
                x: -7.864,
                y: 28.196,
                r: -.068
            },
            44: {
                x: -7.257,
                y: 28.265,
                r: -.064
            },
            45: {
                x: -6.519,
                y: 28.428,
                r: -.06
            },
            46: {
                x: -5.653,
                y: 28.533,
                r: -.056
            },
            47: {
                x: -4.606,
                y: 28.73,
                r: -.05
            },
            48: {
                x: -3.43,
                y: 28.919,
                r: -.044
            },
            49: {
                x: -2.173,
                y: 29.1,
                r: -.037
            },
            50: {
                x: -.866,
                y: 29.279,
                r: -.03
            },
            51: {
                x: .312,
                y: 29.465,
                r: -.024
            },
            52: {
                x: 1.36,
                y: 29.607,
                r: -.018
            },
            53: {
                x: 2.229,
                y: 29.756,
                r: -.013
            },
            54: {
                x: 3.018,
                y: 29.913,
                r: -.009
            },
            55: {
                x: 3.628,
                y: 29.977,
                r: -.006
            },
            56: {
                x: 4.107,
                y: 30.049,
                r: -.003
            },
            57: {
                x: 4.457,
                y: 30.079,
                r: -.001
            },
            58: {
                x: 4.678,
                y: 30.117,
                r: 0
            },
            59: {
                x: 4.6,
                y: 30.2
            },
            60: {
                y: 30.15
            },
            61: {
                x: 4.55,
                y: 30.1
            },
            62: {
                x: 4.45,
                y: 29.95
            },
            63: {
                x: 4.35,
                y: 29.75
            },
            64: {
                x: 4.25,
                y: 29.5
            },
            65: {
                x: 4.1,
                y: 29.2
            },
            66: {
                x: 3.9,
                y: 28.8
            },
            67: {
                x: 3.7,
                y: 28.4
            },
            68: {
                x: 3.5,
                y: 28
            },
            69: {
                x: 3.35,
                y: 27.7
            },
            70: {
                x: 3.25,
                y: 27.45
            },
            71: {
                x: 3.15,
                y: 27.25
            },
            72: {
                x: 3.05,
                y: 27.1
            },
            73: {
                x: 3,
                y: 27.05
            },
            74: {
                y: 27
            }
        }).addTimedChild(instance2, 0, 95, {
            0: {
                x: -38,
                y: -70,
                r: 0
            },
            5: {
                x: -38.01,
                y: -69.993
            },
            6: {
                x: -38.144,
                y: -69.975,
                r: -.001
            },
            7: {
                x: -38.352,
                y: -69.943
            },
            8: {
                x: -38.632,
                y: -69.9,
                r: -.003
            },
            9: {
                x: -39.035,
                y: -69.794,
                r: -.004
            },
            10: {
                x: -39.51,
                y: -69.725,
                r: -.006
            },
            11: {
                x: -40.058,
                y: -69.643,
                r: -.008
            },
            12: {
                x: -40.729,
                y: -69.499,
                r: -.01
            },
            13: {
                x: -41.423,
                y: -69.341,
                r: -.013
            },
            14: {
                x: -42.188,
                y: -69.17,
                r: -.016
            },
            15: {
                x: -43.126,
                y: -68.985,
                r: -.02
            },
            16: {
                x: -44.085,
                y: -68.836,
                r: -.024
            },
            17: {
                x: -45.168,
                y: -68.574,
                r: -.028
            },
            18: {
                x: -46.271,
                y: -68.347,
                r: -.032
            },
            19: {
                x: -47.498,
                y: -68.106,
                r: -.037
            },
            20: {
                x: -48.772,
                y: -67.864,
                r: -.042
            },
            21: {
                x: -49.873,
                y: -67.632,
                r: -.046
            },
            22: {
                x: -50.951,
                y: -67.365,
                r: -.05
            },
            23: {
                x: -51.906,
                y: -67.208,
                r: -.054
            },
            24: {
                x: -52.789,
                y: -67.014,
                r: -.057
            },
            25: {
                x: -53.599,
                y: -66.833,
                r: -.06
            },
            26: {
                x: -54.286,
                y: -66.665,
                r: -.063
            },
            27: {
                x: -54.952,
                y: -66.511,
                r: -.066
            },
            28: {
                x: -55.495,
                y: -66.421,
                r: -.068
            },
            29: {
                x: -55.915,
                y: -66.345,
                r: -.069
            },
            30: {
                x: -56.314,
                y: -66.282,
                r: -.071
            },
            31: {
                x: -56.59,
                y: -66.182,
                r: -.072
            },
            32: {
                x: -56.796,
                y: -66.147,
                r: -.073
            },
            33: {
                x: -56.929,
                y: -66.125
            },
            34: {
                x: -57,
                y: -66,
                r: -.074
            },
            40: {
                x: -56.874,
                y: -66.021,
                r: -.073
            },
            41: {
                x: -56.601,
                y: -66.033,
                r: -.072
            },
            42: {
                x: -56.081,
                y: -66.038,
                r: -.07
            },
            43: {
                x: -55.361,
                y: -66.083,
                r: -.068
            },
            44: {
                x: -54.389,
                y: -66.12,
                r: -.064
            },
            45: {
                x: -53.321,
                y: -66.147,
                r: -.06
            },
            46: {
                x: -51.951,
                y: -66.216,
                r: -.056
            },
            47: {
                x: -50.431,
                y: -66.272,
                r: -.05
            },
            48: {
                x: -48.708,
                y: -66.368,
                r: -.044
            },
            49: {
                x: -46.685,
                y: -66.4,
                r: -.037
            },
            50: {
                x: -44.757,
                y: -66.479,
                r: -.03
            },
            51: {
                x: -42.98,
                y: -66.515,
                r: -.024
            },
            52: {
                x: -41.449,
                y: -66.611,
                r: -.018
            },
            53: {
                x: -40.119,
                y: -66.614,
                r: -.013
            },
            54: {
                x: -38.988,
                y: -66.678,
                r: -.009
            },
            55: {
                x: -38.007,
                y: -66.701,
                r: -.006
            },
            56: {
                x: -37.277,
                y: -66.686,
                r: -.003
            },
            57: {
                x: -36.749,
                y: -66.682,
                r: -.001
            },
            58: {
                x: -36.472,
                y: -66.688,
                r: 0
            },
            59: {
                x: -36.4,
                y: -66.8
            },
            60: {
                y: -66.85
            },
            61: {
                x: -36.45,
                y: -66.9
            },
            62: {
                x: -36.55,
                y: -67.05
            },
            63: {
                x: -36.65,
                y: -67.25
            },
            64: {
                x: -36.75,
                y: -67.5
            },
            65: {
                x: -36.9,
                y: -67.8
            },
            66: {
                x: -37.1,
                y: -68.2
            },
            67: {
                x: -37.3,
                y: -68.6
            },
            68: {
                x: -37.5,
                y: -69
            },
            69: {
                x: -37.65,
                y: -69.3
            },
            70: {
                x: -37.75,
                y: -69.55
            },
            71: {
                x: -37.85,
                y: -69.75
            },
            72: {
                x: -37.95,
                y: -69.9
            },
            73: {
                x: -38,
                y: -69.95
            },
            74: {
                y: -70
            }
        }).addTimedChild(instance1, 0, 95, {
            0: {
                x: 120,
                y: 91,
                r: 0
            },
            5: {
                x: 120.044,
                y: 91.004
            },
            6: {
                x: 120.079,
                y: 90.924
            },
            7: {
                x: 120.102,
                y: 90.809,
                r: .001
            },
            8: {
                x: 120.216,
                y: 90.607
            },
            9: {
                x: 120.32,
                y: 90.367
            },
            10: {
                x: 120.415,
                y: 90.09,
                r: .002
            },
            11: {
                x: 120.547,
                y: 89.73,
                r: .003
            },
            12: {
                x: 120.72,
                y: 89.331,
                r: .004
            },
            13: {
                x: 120.933,
                y: 88.846,
                r: .005
            },
            14: {
                x: 121.184,
                y: 88.373,
                r: .006
            },
            15: {
                x: 121.376,
                y: 87.816,
                r: .007
            },
            16: {
                x: 121.656,
                y: 87.17,
                r: .008
            },
            17: {
                x: 121.928,
                y: 86.538,
                r: .01
            },
            18: {
                x: 122.186,
                y: 85.819,
                r: .011
            },
            19: {
                x: 122.585,
                y: 85.063,
                r: .013
            },
            20: {
                x: 122.885,
                y: 84.308,
                r: .014
            },
            21: {
                x: 123.192,
                y: 83.588,
                r: .016
            },
            22: {
                x: 123.463,
                y: 82.905,
                r: .017
            },
            23: {
                x: 123.691,
                y: 82.308,
                r: .019
            },
            24: {
                x: 123.931,
                y: 81.75,
                r: .02
            },
            25: {
                x: 124.13,
                y: 81.275,
                r: .021
            },
            26: {
                x: 124.391,
                y: 80.789,
                r: .022
            },
            27: {
                x: 124.562,
                y: 80.388,
                r: .023
            },
            28: {
                x: 124.694,
                y: 80.025
            },
            29: {
                x: 124.835,
                y: 79.748,
                r: .024
            },
            30: {
                x: 124.938,
                y: 79.557
            },
            31: {
                x: 125,
                y: 79.354,
                r: .025
            },
            32: {
                x: 125.025,
                y: 79.187
            },
            33: {
                x: 125.059,
                y: 79.107
            },
            34: {
                x: 125,
                y: 79
            },
            40: {
                x: 125.007,
                y: 79.135
            },
            41: {
                x: 124.937,
                y: 79.338
            },
            42: {
                x: 124.839,
                y: 79.706,
                r: .024
            },
            43: {
                x: 124.658,
                y: 80.195,
                r: .023
            },
            44: {
                x: 124.447,
                y: 80.851,
                r: .022
            },
            45: {
                x: 124.107,
                y: 81.677,
                r: .021
            },
            46: {
                x: 123.785,
                y: 82.57,
                r: .019
            },
            47: {
                x: 123.436,
                y: 83.632,
                r: .017
            },
            48: {
                x: 123.004,
                y: 84.862,
                r: .015
            },
            49: {
                x: 122.54,
                y: 86.208,
                r: .013
            },
            50: {
                x: 122.027,
                y: 87.604,
                r: .01
            },
            51: {
                x: 121.591,
                y: 88.831,
                r: .008
            },
            52: {
                x: 121.238,
                y: 89.941,
                r: .006
            },
            53: {
                x: 120.914,
                y: 90.832,
                r: .005
            },
            54: {
                x: 120.621,
                y: 91.604,
                r: .003
            },
            55: {
                x: 120.357,
                y: 92.261,
                r: .002
            },
            56: {
                x: 120.223,
                y: 92.748,
                r: .001
            },
            57: {
                x: 120.071,
                y: 93.168
            },
            58: {
                x: 120.001,
                y: 93.371,
                r: 0
            },
            59: {
                x: 120,
                y: 93.45
            },
            60: {
                y: 93.4
            },
            61: {
                y: 93.35
            },
            62: {
                y: 93.2
            },
            63: {
                y: 93
            },
            64: {
                y: 92.75
            },
            65: {
                y: 92.4
            },
            66: {
                y: 92.05
            },
            67: {
                y: 91.75
            },
            68: {
                y: 91.45
            },
            69: {
                y: 91.25
            },
            70: {
                y: 91.1
            },
            71: {
                y: 91.05
            },
            72: {
                y: 91
            }
        }).addAction(function() {
            this.stop()
        }, 94), this.labels.forEach((label, index) => {
            var labelEndPosition = this.labels[index + 1] ? this.labels[index + 1].position - 1 : this._totalFrames - 1;
            this.addAction(() => this.emit("label_end", this.currentLabel), labelEndPosition)
        })
    }), lib.tile14BigHandR = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile14BigHandR"));
        this.addChild(instance1)
    }), lib.tile14BigHandRShadow = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile14BigHandRShadow"));
        this.addChild(instance1)
    }), lib.tile14BigHandL = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile14BigHandL")).setTransform(44, 0, 1, 1, .524);
        this.addChild(instance1)
    }), lib.tile14BigHandLShadow = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile14BigHandLShadow")).setTransform(31, 0, 1, 1, .524);
        this.addChild(instance1)
    }), lib.tile14BigEyebrowR = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile14BigEyebrowR"));
        this.addChild(instance1)
    }), lib.tile14BigEyebrowL = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile14BigEyebrowL"));
        this.addChild(instance1)
    }), lib.tile14BigMouth = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile14BigMouth"));
        this.addChild(instance1)
    }), lib.tile14BigMustache = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile14BigMustache"));
        this.addChild(instance1)
    }), lib.tile14BigEyeClosedR = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile14BigEyeClosedR"));
        this.addChild(instance1)
    }), lib.tile14BigEyeClosedL = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile14BigEyeClosedL"));
        this.addChild(instance1)
    }), lib.tile14BigHead = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile14BigHead"));
        this.addChild(instance1)
    }), lib.tile14BigHeadComp = MovieClip.extend(function() {
        MovieClip.call(this, {
            duration: 150
        });
        var instance5 = new lib.tile14BigHead,
            instance7 = new lib.tile14BigEyeClosedL,
            instance6 = new lib.tile14BigEyeClosedR,
            instance9 = new lib.tile14BigEyeClosedL,
            instance8 = new lib.tile14BigEyeClosedR,
            instance4 = new lib.tile14BigMustache,
            instance3 = new lib.tile14BigMouth,
            instance2 = new lib.tile14BigEyebrowL,
            instance1 = new lib.tile14BigEyebrowR;
        this.addTimedChild(instance5, 0, 150, {
            0: {}
        }).addTimedChild(instance7, 14, 8, {
            14: {
                x: 95,
                y: 108.2
            }
        }).addTimedChild(instance6, 14, 8, {
            14: {
                x: 35.5,
                y: 114.65
            }
        }).addTimedChild(instance9, 133, 8, {
            133: {
                x: 95,
                y: 108.2
            }
        }).addTimedChild(instance8, 133, 8, {
            133: {
                x: 35.5,
                y: 114.65
            }
        }).addTimedChild(instance4, 0, 150, {
            0: {
                x: 61,
                y: 162,
                sx: 1,
                sy: 1,
                kx: 0,
                ky: 0,
                r: 0
            },
            75: {
                x: 60.939,
                y: 162.176,
                sx: 1.004,
                sy: .997,
                r: -.004
            },
            76: {
                x: 60.824,
                y: 162.295,
                sx: 1.009,
                sy: .994,
                kx: .008,
                ky: -.007,
                r: 0
            },
            77: {
                x: 60.655,
                y: 162.463,
                sx: 1.013,
                sy: .991,
                kx: .013,
                ky: -.011
            },
            78: {
                x: 60.531,
                y: 162.575,
                sx: 1.017,
                sy: .988,
                kx: .017,
                ky: -.014
            },
            79: {
                x: 60.401,
                y: 162.684,
                sx: 1.022,
                sy: .984,
                kx: .021,
                ky: -.018
            },
            80: {
                x: 60.22,
                y: 162.835,
                sx: 1.026,
                sy: .981,
                kx: .025,
                ky: -.022
            },
            81: {
                x: 60.132,
                y: 162.931,
                sx: 1.031,
                sy: .978,
                kx: .029,
                ky: -.025
            },
            82: {
                x: 59.986,
                y: 163.027,
                sx: 1.035,
                sy: .975,
                kx: .033,
                ky: -.029
            },
            83: {
                x: 59.887,
                y: 163.215,
                sx: 1.039,
                sy: .972,
                kx: .038,
                ky: -.032
            },
            84: {
                x: 59.731,
                y: 163.3,
                sx: 1.044,
                sy: .969,
                kx: .042,
                ky: -.036
            },
            85: {
                x: 59.573,
                y: 163.43,
                sx: 1.048,
                sy: .966,
                kx: .046,
                ky: -.039
            },
            86: {
                x: 59.458,
                y: 163.606,
                sx: 1.052,
                sy: .963,
                kx: .05,
                ky: -.043
            },
            87: {
                x: 59.335,
                y: 163.677,
                sx: 1.057,
                sy: .96,
                kx: .054,
                ky: -.047
            },
            88: {
                x: 59.211,
                y: 163.843,
                sx: 1.061,
                sy: .957,
                kx: .059,
                ky: -.05
            },
            89: {
                x: 59.079,
                y: 164.009,
                sx: 1.065,
                sy: .953,
                kx: .063,
                ky: -.054
            },
            90: {
                x: 58.996,
                y: 164.116,
                sx: 1.07,
                sy: .95,
                kx: .067,
                ky: -.057
            },
            91: {
                x: 58.903,
                y: 164.27,
                sx: 1.074,
                sy: .947,
                kx: .071,
                ky: -.061
            },
            92: {
                x: 58.757,
                y: 164.421,
                sx: 1.078,
                sy: .944,
                kx: .075,
                ky: -.065
            },
            93: {
                x: 58.605,
                y: 164.516,
                sx: 1.083,
                sy: .941,
                kx: .079,
                ky: -.068
            },
            94: {
                x: 58.3,
                y: 164.55,
                sx: 1.087,
                sy: .938,
                kx: .084,
                ky: -.072
            },
            105: {
                x: 58.487,
                y: 164.469,
                sx: 1.082,
                sy: .941,
                kx: .079,
                ky: -.068
            },
            106: {
                x: 58.664,
                y: 164.331,
                sx: 1.077,
                sy: .945,
                kx: .074,
                ky: -.064
            },
            107: {
                x: 58.783,
                y: 164.09,
                sx: 1.073,
                sy: .948,
                kx: .07,
                ky: -.06
            },
            108: {
                x: 58.899,
                y: 164.001,
                sx: 1.068,
                sy: .952,
                kx: .065,
                ky: -.056
            },
            109: {
                x: 59.052,
                y: 163.798,
                sx: 1.063,
                sy: .955,
                kx: .06,
                ky: -.052
            },
            110: {
                x: 59.207,
                y: 163.645,
                sx: 1.058,
                sy: .959,
                kx: .056,
                ky: -.048
            },
            111: {
                x: 59.345,
                y: 163.535,
                sx: 1.053,
                sy: .962,
                kx: .051,
                ky: -.044
            },
            112: {
                x: 59.482,
                y: 163.372,
                sx: 1.048,
                sy: .965,
                kx: .046,
                ky: -.04
            },
            113: {
                x: 59.664,
                y: 163.251,
                sx: 1.044,
                sy: .969,
                kx: .042,
                ky: -.036
            },
            114: {
                x: 59.785,
                y: 163.08,
                sx: 1.039,
                sy: .972,
                kx: .037,
                ky: -.032
            },
            115: {
                x: 59.906,
                y: 162.903,
                sx: 1.034,
                sy: .976,
                kx: .033,
                ky: -.028
            },
            116: {
                x: 60.014,
                y: 162.816,
                sx: 1.029,
                sy: .979,
                kx: .028,
                ky: -.024
            },
            117: {
                x: 60.167,
                y: 162.63,
                sx: 1.024,
                sy: .983,
                kx: .023,
                ky: -.02
            },
            118: {
                x: 60.317,
                y: 162.481,
                sx: 1.019,
                sy: .986,
                kx: .019,
                ky: -.016
            },
            119: {
                x: 60.508,
                y: 162.38,
                sx: 1.015,
                sy: .99,
                kx: .014,
                ky: -.012
            },
            120: {
                x: 60.692,
                y: 162.229,
                sx: 1.01,
                sy: .993,
                kx: .009,
                ky: -.008
            },
            121: {
                x: 60.819,
                y: 162.118,
                sx: 1.005,
                sy: .997,
                kx: .005,
                ky: -.004
            },
            122: {
                x: 61,
                y: 162,
                sx: 1,
                sy: 1,
                kx: 0,
                ky: 0
            }
        }).addTimedChild(instance3, 0, 150, {
            0: {
                x: 63.3,
                y: 166.8,
                sx: 1,
                sy: 1,
                kx: 0,
                ky: 0,
                r: 0
            },
            75: {
                x: 63.269,
                y: 166.953,
                sx: 1.004,
                sy: .997,
                r: -.004
            },
            76: {
                x: 63.134,
                y: 167.049,
                sx: 1.009,
                sy: .994,
                kx: .008,
                ky: -.007,
                r: 0
            },
            77: {
                x: 63.045,
                y: 167.143,
                sx: 1.013,
                sy: .991,
                kx: .013,
                ky: -.011
            },
            78: {
                x: 62.95,
                y: 167.281,
                sx: 1.017,
                sy: .988,
                kx: .017,
                ky: -.014
            },
            79: {
                x: 62.8,
                y: 167.366,
                sx: 1.022,
                sy: .984,
                kx: .021,
                ky: -.018
            },
            80: {
                x: 62.698,
                y: 167.444,
                sx: 1.026,
                sy: .981,
                kx: .025,
                ky: -.022
            },
            81: {
                x: 62.589,
                y: 167.515,
                sx: 1.031,
                sy: .978,
                kx: .029,
                ky: -.025
            },
            82: {
                x: 62.522,
                y: 167.587,
                sx: 1.035,
                sy: .975,
                kx: .033,
                ky: -.029
            },
            83: {
                x: 62.402,
                y: 167.7,
                sx: 1.039,
                sy: .972,
                kx: .038,
                ky: -.032
            },
            84: {
                x: 62.274,
                y: 167.81,
                sx: 1.044,
                sy: .969,
                kx: .042,
                ky: -.036
            },
            85: {
                x: 62.145,
                y: 167.966,
                sx: 1.048,
                sy: .966,
                kx: .046,
                ky: -.039
            },
            86: {
                x: 62.058,
                y: 168.068,
                sx: 1.052,
                sy: .963,
                kx: .05,
                ky: -.043
            },
            87: {
                x: 62.013,
                y: 168.163,
                sx: 1.057,
                sy: .96,
                kx: .054,
                ky: -.047
            },
            88: {
                x: 61.917,
                y: 168.254,
                sx: 1.061,
                sy: .957,
                kx: .059,
                ky: -.05
            },
            89: {
                x: 61.813,
                y: 168.344,
                sx: 1.065,
                sy: .953,
                kx: .063,
                ky: -.054
            },
            90: {
                x: 61.657,
                y: 168.477,
                sx: 1.07,
                sy: .95,
                kx: .067,
                ky: -.057
            },
            91: {
                x: 61.541,
                y: 168.604,
                sx: 1.074,
                sy: .947,
                kx: .071,
                ky: -.061
            },
            92: {
                x: 61.523,
                y: 168.73,
                sx: 1.078,
                sy: .944,
                kx: .075,
                ky: -.065
            },
            93: {
                x: 61.398,
                y: 168.799,
                sx: 1.083,
                sy: .941,
                kx: .079,
                ky: -.068
            },
            94: {
                x: 61.15,
                y: 168.85,
                sx: 1.087,
                sy: .938,
                kx: .084,
                ky: -.072
            },
            105: {
                x: 61.307,
                y: 168.797,
                sx: 1.082,
                sy: .941,
                kx: .079,
                ky: -.068
            },
            106: {
                x: 61.404,
                y: 168.638,
                sx: 1.077,
                sy: .945,
                kx: .074,
                ky: -.064
            },
            107: {
                x: 61.542,
                y: 168.476,
                sx: 1.073,
                sy: .948,
                kx: .07,
                ky: -.06
            },
            108: {
                x: 61.678,
                y: 168.415,
                sx: 1.068,
                sy: .952,
                kx: .065,
                ky: -.056
            },
            109: {
                x: 61.701,
                y: 168.24,
                sx: 1.063,
                sy: .955,
                kx: .06,
                ky: -.052
            },
            110: {
                x: 61.825,
                y: 168.165,
                sx: 1.058,
                sy: .959,
                kx: .056,
                ky: -.048
            },
            111: {
                x: 61.982,
                y: 168.033,
                sx: 1.053,
                sy: .962,
                kx: .051,
                ky: -.044
            },
            112: {
                x: 62.087,
                y: 167.947,
                sx: 1.048,
                sy: .965,
                kx: .046,
                ky: -.04
            },
            113: {
                x: 62.188,
                y: 167.804,
                sx: 1.044,
                sy: .969,
                kx: .042,
                ky: -.036
            },
            114: {
                x: 62.327,
                y: 167.66,
                sx: 1.039,
                sy: .972,
                kx: .037,
                ky: -.032
            },
            115: {
                x: 62.416,
                y: 167.51,
                sx: 1.034,
                sy: .976,
                kx: .033,
                ky: -.028
            },
            116: {
                x: 62.543,
                y: 167.45,
                sx: 1.029,
                sy: .979,
                kx: .028,
                ky: -.024
            },
            117: {
                x: 62.663,
                y: 167.291,
                sx: 1.024,
                sy: .983,
                kx: .023,
                ky: -.02
            },
            118: {
                x: 62.78,
                y: 167.218,
                sx: 1.019,
                sy: .986,
                kx: .019,
                ky: -.016
            },
            119: {
                x: 62.889,
                y: 167.093,
                sx: 1.015,
                sy: .99,
                kx: .014,
                ky: -.012
            },
            120: {
                x: 63.04,
                y: 167.018,
                sx: 1.01,
                sy: .993,
                kx: .009,
                ky: -.008
            },
            121: {
                x: 63.134,
                y: 166.883,
                sx: 1.005,
                sy: .997,
                kx: .005,
                ky: -.004
            },
            122: {
                x: 63.3,
                y: 166.8,
                sx: 1,
                sy: 1,
                kx: 0,
                ky: 0
            }
        }).addTimedChild(instance2, 0, 150, {
            0: {
                x: 88,
                y: 101,
                r: 0
            },
            9: {
                x: 87.961,
                y: 101.624,
                r: -.012
            },
            10: {
                x: 87.865,
                y: 102.187,
                r: -.023
            },
            11: {
                x: 87.854,
                y: 102.785,
                r: -.035
            },
            12: {
                x: 87.78,
                y: 103.419,
                r: -.046
            },
            13: {
                x: 87.745,
                y: 103.993,
                r: -.058
            },
            14: {
                x: 87.45,
                y: 104.5,
                r: -.069
            },
            22: {
                y: 104.05
            },
            23: {
                x: 87.513,
                y: 103.611,
                r: -.06
            },
            24: {
                x: 87.566,
                y: 103.214,
                r: -.05
            },
            25: {
                x: 87.614,
                y: 102.754,
                r: -.04
            },
            26: {
                x: 87.701,
                y: 102.235,
                r: -.03
            },
            27: {
                x: 87.782,
                y: 101.808,
                r: -.02
            },
            28: {
                x: 87.804,
                y: 101.367,
                r: -.01
            },
            29: {
                x: 88,
                y: 101,
                r: 0
            },
            70: {
                x: 88.061,
                y: 100.83,
                r: .004
            },
            71: {
                x: 88.121,
                y: 100.658,
                r: .009
            },
            72: {
                x: 88.129,
                y: 100.435,
                r: .013
            },
            73: {
                x: 88.184,
                y: 100.261,
                r: .017
            },
            74: {
                x: 88.239,
                y: 100.083,
                r: .022
            },
            75: {
                x: 88.291,
                y: 99.904,
                r: .026
            },
            76: {
                x: 88.343,
                y: 99.673,
                r: .03
            },
            77: {
                y: 99.49,
                r: .035
            },
            78: {
                x: 88.392,
                y: 99.306,
                r: .039
            },
            79: {
                x: 88.438,
                y: 99.119,
                r: .043
            },
            80: {
                x: 88.483,
                y: 98.931,
                r: .048
            },
            81: {
                x: 88.577,
                y: 98.74,
                r: .052
            },
            82: {
                x: 88.618,
                y: 98.547,
                r: .056
            },
            83: {
                x: 88.658,
                y: 98.354,
                r: .061
            },
            84: {
                x: 88.697,
                y: 98.207,
                r: .065
            },
            85: {
                x: 88.735,
                y: 98.008,
                r: .069
            },
            86: {
                x: 88.819,
                y: 97.807,
                r: .074
            },
            87: {
                x: 88.855,
                y: 97.605,
                r: .078
            },
            88: {
                x: 88.936,
                y: 97.451,
                r: .082
            },
            89: {
                x: 88.968,
                y: 97.244,
                r: .087
            },
            90: {
                x: 89.048,
                y: 97.085,
                r: .091
            },
            91: {
                x: 89.076,
                y: 96.873,
                r: .095
            },
            92: {
                x: 89.153,
                y: 96.712,
                r: .1
            },
            93: {
                x: 89.178,
                y: 96.497,
                r: .104
            },
            94: {
                x: 89.25,
                y: 96.25,
                r: .108
            },
            103: {
                x: 89.251,
                y: 96.476,
                r: .104
            },
            104: {
                x: 89.154,
                y: 96.704,
                r: .099
            },
            105: {
                x: 89.101,
                y: 96.926,
                r: .094
            },
            106: {
                x: 89.047,
                y: 97.1,
                r: .09
            },
            107: {
                x: 88.993,
                y: 97.318,
                r: .085
            },
            108: {
                x: 88.935,
                y: 97.487,
                r: .08
            },
            109: {
                x: 88.875,
                y: 97.701,
                r: .075
            },
            110: {
                x: 88.815,
                y: 97.916,
                r: .071
            },
            111: {
                x: 88.751,
                y: 98.126,
                r: .066
            },
            112: {
                x: 88.686,
                y: 98.335,
                r: .061
            },
            113: {
                x: 88.668,
                y: 98.543,
                r: .057
            },
            114: {
                x: 88.598,
                y: 98.747,
                r: .052
            },
            115: {
                x: 88.528,
                y: 98.95,
                r: .047
            },
            116: {
                x: 88.503,
                y: 99.154,
                r: .042
            },
            117: {
                x: 88.427,
                y: 99.351,
                r: .038
            },
            118: {
                x: 88.399,
                y: 99.549,
                r: .033
            },
            119: {
                x: 88.317,
                y: 99.743,
                r: .028
            },
            120: {
                x: 88.287,
                y: 99.986,
                r: .024
            },
            121: {
                x: 88.251,
                y: 100.178,
                r: .019
            },
            122: {
                x: 88.215,
                y: 100.367,
                r: .014
            },
            123: {
                x: 88.175,
                y: 100.605,
                r: .009
            },
            124: {
                x: 88.086,
                y: 100.79,
                r: .005
            },
            125: {
                x: 88,
                y: 101,
                r: 0
            },
            128: {
                x: 87.961,
                y: 101.624,
                r: -.012
            },
            129: {
                x: 87.865,
                y: 102.187,
                r: -.023
            },
            130: {
                x: 87.854,
                y: 102.785,
                r: -.035
            },
            131: {
                x: 87.78,
                y: 103.419,
                r: -.046
            },
            132: {
                x: 87.745,
                y: 103.993,
                r: -.058
            },
            133: {
                x: 87.45,
                y: 104.5,
                r: -.069
            },
            141: {
                y: 104.05
            },
            142: {
                x: 87.54,
                y: 103.556,
                r: -.058
            },
            143: {
                x: 87.566,
                y: 103.044,
                r: -.046
            },
            144: {
                x: 87.633,
                y: 102.521,
                r: -.035
            },
            145: {
                x: 87.74,
                y: 101.984,
                r: -.023
            },
            146: {
                x: 87.783,
                y: 101.432,
                r: -.012
            },
            147: {
                x: 88,
                y: 101,
                r: 0
            }
        }).addTimedChild(instance1, 0, 150, {
            0: {
                x: 32,
                y: 109,
                r: 0
            },
            9: {
                x: 32.166,
                y: 109.141,
                r: .011
            },
            10: {
                x: 32.327,
                y: 109.218,
                r: .022
            },
            11: {
                x: 32.535,
                y: 109.333,
                r: .033
            },
            12: {
                x: 32.69,
                y: 109.436,
                r: .043
            },
            13: {
                x: 32.842,
                y: 109.524,
                r: .054
            },
            14: {
                x: 32.9,
                y: 109.45,
                r: .065
            },
            22: {
                y: 109
            },
            23: {
                x: 32.811,
                y: 109.039,
                r: .056
            },
            24: {
                x: 32.672,
                y: 108.97,
                r: .047
            },
            25: {
                x: 32.529,
                y: 108.939,
                r: .037
            },
            26: {
                x: 32.334,
                y: 108.901,
                r: .028
            },
            27: {
                x: 32.232,
                y: 108.902,
                r: .019
            },
            28: {
                x: 32.081,
                y: 108.844,
                r: .009
            },
            29: {
                x: 32,
                y: 109,
                r: 0
            },
            70: {
                x: 31.977,
                y: 109.044,
                r: -.005
            },
            71: {
                x: 31.904,
                y: 109.033,
                r: -.01
            },
            72: {
                x: 31.832,
                y: 109.023,
                r: -.015
            },
            73: {
                x: 31.758,
                y: 109.008,
                r: -.019
            },
            74: {
                x: 31.681,
                y: 109.041,
                r: -.024
            },
            75: {
                x: 31.606,
                y: 109.023,
                r: -.029
            },
            76: {
                x: 31.53,
                y: 109.051,
                r: -.034
            },
            77: {
                x: 31.502,
                y: 109.026,
                r: -.039
            },
            78: {
                x: 31.424,
                y: 109.049,
                r: -.044
            },
            79: {
                x: 31.344,
                y: 109.019,
                r: -.048
            },
            80: {
                x: 31.265,
                y: 109.038,
                r: -.053
            },
            81: {
                x: 31.234,
                y: 109.055,
                r: -.058
            },
            82: {
                x: 31.152,
                y: 109.116,
                r: -.063
            },
            83: {
                x: 31.069,
                y: 109.128,
                r: -.068
            },
            84: {
                x: 30.985,
                y: 109.135,
                r: -.073
            },
            85: {
                x: 30.951,
                y: 109.141,
                r: -.078
            },
            86: {
                x: 30.866,
                y: 109.144,
                r: -.082
            },
            87: {
                x: 30.78,
                y: 109.145,
                r: -.087
            },
            88: {
                x: 30.742,
                y: 109.144,
                r: -.092
            },
            89: {
                x: 30.653,
                y: 109.14,
                r: -.097
            },
            90: {
                x: 30.614,
                y: 109.132,
                r: -.102
            },
            91: {
                x: 30.524,
                y: 109.172,
                r: -.107
            },
            92: {
                x: 30.482,
                y: 109.16,
                r: -.112
            },
            93: {
                x: 30.389,
                y: 109.146,
                r: -.116
            },
            94: {
                x: 30.3,
                y: 109.1,
                r: -.121
            },
            103: {
                x: 30.425,
                y: 109.106,
                r: -.116
            },
            104: {
                x: 30.499,
                y: 109.111,
                r: -.111
            },
            105: {
                x: 30.571,
                y: 109.114,
                r: -.105
            },
            106: {
                x: 30.644,
                y: 109.112,
                r: -.1
            },
            107: {
                x: 30.716,
                y: 109.108,
                r: -.095
            },
            108: {
                x: 30.785,
                y: 109.103,
                r: -.09
            },
            109: {
                x: 30.856,
                y: 109.093,
                r: -.084
            },
            110: {
                x: 30.975,
                y: 109.079,
                r: -.079
            },
            111: {
                x: 31.043,
                y: 109.062,
                r: -.074
            },
            112: {
                x: 31.111,
                y: 109.043,
                r: -.069
            },
            113: {
                x: 31.177,
                y: 109.069,
                r: -.063
            },
            114: {
                x: 31.243,
                y: 108.994,
                r: -.058
            },
            115: {
                x: 31.309,
                y: 109.016,
                r: -.053
            },
            116: {
                x: 31.375,
                y: 108.986,
                r: -.047
            },
            117: {
                x: 31.488,
                y: 109,
                r: -.042
            },
            118: {
                x: 31.552,
                y: 109.013,
                r: -.037
            },
            119: {
                x: 31.616,
                y: 108.972,
                r: -.032
            },
            120: {
                x: 31.678,
                y: 108.977,
                r: -.026
            },
            121: {
                x: 31.741,
                y: 108.982,
                r: -.021
            },
            122: {
                x: 31.853,
                y: 108.98,
                r: -.016
            },
            123: {
                x: 31.913,
                y: 108.978,
                r: -.011
            },
            124: {
                x: 31.974,
                y: 108.971,
                r: -.005
            },
            125: {
                x: 32,
                y: 109,
                r: 0
            },
            128: {
                x: 32.166,
                y: 109.141,
                r: .011
            },
            129: {
                x: 32.327,
                y: 109.218,
                r: .022
            },
            130: {
                x: 32.535,
                y: 109.333,
                r: .033
            },
            131: {
                x: 32.69,
                y: 109.436,
                r: .043
            },
            132: {
                x: 32.842,
                y: 109.524,
                r: .054
            },
            133: {
                x: 32.9,
                y: 109.45,
                r: .065
            },
            141: {
                y: 109
            },
            142: {
                x: 32.782,
                y: 109.036,
                r: .054
            },
            143: {
                x: 32.608,
                y: 108.961,
                r: .043
            },
            144: {
                x: 32.482,
                y: 108.97,
                r: .033
            },
            145: {
                x: 32.249,
                y: 108.919,
                r: .022
            },
            146: {
                x: 32.115,
                y: 108.906,
                r: .011
            },
            147: {
                x: 32,
                y: 109,
                r: 0
            }
        }).addAction(function() {
            this.stop()
        }, 149), this.labels.forEach((label, index) => {
            var labelEndPosition = this.labels[index + 1] ? this.labels[index + 1].position - 1 : this._totalFrames - 1;
            this.addAction(() => this.emit("label_end", this.currentLabel), labelEndPosition)
        })
    }), lib.tile14BigBody = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("tile14BigBody"));
        this.addChild(instance1)
    }), lib.tile14Big = MovieClip.extend(function() {
        MovieClip.call(this, {
            duration: 155
        });
        var instance6 = new lib.tile14BigBody,
            instance5 = new lib.tile14BigHeadComp;
        this[instance5.name = "head"] = instance5;
        var instance4 = new lib.tile14BigHandLShadow,
            instance3 = new lib.tile14BigHandL,
            instance2 = new lib.tile14BigHandRShadow,
            instance1 = new lib.tile14BigHandR;
        this.addTimedChild(instance6, 0, 155, {
            0: {
                x: -56,
                y: 148,
                r: 0
            },
            9: {
                x: -55.892,
                y: 147.932
            },
            10: {
                x: -55.725,
                y: 147.581,
                r: .001
            },
            11: {
                x: -55.347,
                y: 147.047,
                r: .003
            },
            12: {
                x: -54.858,
                y: 146.329,
                r: .005
            },
            13: {
                x: -54.255,
                y: 145.327,
                r: .007
            },
            14: {
                x: -53.441,
                y: 144.138,
                r: .011
            },
            15: {
                x: -52.543,
                y: 142.874,
                r: .015
            },
            16: {
                x: -51.777,
                y: 141.68,
                r: .018
            },
            17: {
                x: -51.174,
                y: 140.722,
                r: .021
            },
            18: {
                x: -50.631,
                y: 139.998,
                r: .023
            },
            19: {
                x: -50.25,
                y: 139.458,
                r: .024
            },
            20: {
                x: -50.082,
                y: 139.105,
                r: .025
            },
            21: {
                x: -50,
                y: 139
            },
            22: {
                x: -49.989,
                y: 139.054
            },
            23: {
                x: -50.053,
                y: 139.167
            },
            24: {
                x: -50.192,
                y: 139.339
            },
            25: {
                x: -50.307,
                y: 139.569,
                r: .024
            },
            26: {
                x: -50.495,
                y: 139.86,
                r: .023
            },
            27: {
                x: -50.71,
                y: 140.206,
                r: .022
            },
            28: {
                x: -51.001,
                y: 140.563,
                r: .021
            },
            29: {
                x: -51.267,
                y: 141.029,
                r: .02
            },
            30: {
                x: -51.661,
                y: 141.553,
                r: .018
            },
            31: {
                x: -52.077,
                y: 142.185,
                r: .017
            },
            32: {
                x: -52.469,
                y: 142.823,
                r: .015
            },
            33: {
                x: -52.987,
                y: 143.52,
                r: .013
            },
            34: {
                x: -53.454,
                y: 144.267,
                r: .011
            },
            35: {
                x: -53.895,
                y: 144.905,
                r: .009
            },
            36: {
                x: -54.263,
                y: 145.484,
                r: .007
            },
            37: {
                x: -54.653,
                y: 146.055,
                r: .006
            },
            38: {
                x: -54.92,
                y: 146.518,
                r: .004
            },
            39: {
                x: -55.159,
                y: 146.921,
                r: .003
            },
            40: {
                x: -55.422,
                y: 147.266,
                r: .002
            },
            41: {
                x: -55.613,
                y: 147.502,
                r: .001
            },
            42: {
                x: -55.728,
                y: 147.781
            },
            43: {
                x: -55.868,
                y: 147.95,
                r: 0
            },
            44: {
                x: -55.929,
                y: 148.014
            },
            45: {
                x: -56,
                y: 148
            }
        }).addTimedChild(instance5, 0, 155, {
            0: {
                x: 0,
                y: 0,
                r: 0
            },
            6: {
                x: .2,
                y: -.05,
                r: .001
            },
            7: {
                x: .65,
                y: -.35,
                r: .002
            },
            8: {
                x: 1.45,
                y: -.85,
                r: .005
            },
            9: {
                x: 2.55,
                y: -1.5,
                r: .009
            },
            10: {
                x: 3.9,
                y: -2.4,
                r: .014
            },
            11: {
                x: 5.65,
                y: -3.45,
                r: .02
            },
            12: {
                x: 7.65,
                y: -4.7,
                r: .028
            },
            13: {
                x: 10,
                y: -6.1,
                r: .036
            },
            14: {
                x: 12.35,
                y: -7.5,
                r: .045
            },
            15: {
                x: 14.4,
                y: -8.75,
                r: .052
            },
            16: {
                x: 16.15,
                y: -9.7,
                r: .059
            },
            17: {
                x: 17.55,
                y: -10.55,
                r: .064
            },
            18: {
                x: 18.65,
                y: -11.15,
                r: .068
            },
            19: {
                x: 19.45,
                y: -11.6,
                r: .071
            },
            20: {
                x: 19.9,
                y: -11.9,
                r: .072
            },
            21: {
                x: 20,
                y: -12,
                r: .073
            },
            22: {
                x: 19.999,
                y: -11.951
            },
            23: {
                x: 19.897,
                y: -11.905
            },
            24: {
                x: 19.743,
                y: -11.761,
                r: .072
            },
            25: {
                x: 19.538,
                y: -11.669
            },
            26: {
                x: 19.332,
                y: -11.53,
                r: .071
            },
            27: {
                x: 19.073,
                y: -11.293
            },
            28: {
                x: 18.714,
                y: -11.059,
                r: .07
            },
            29: {
                x: 18.303,
                y: -10.727,
                r: .069
            },
            30: {
                x: 17.841,
                y: -10.397,
                r: .068
            },
            31: {
                x: 17.377,
                y: -10.069,
                r: .067
            },
            32: {
                x: 16.812,
                y: -9.695,
                r: .066
            },
            33: {
                x: 16.195,
                y: -9.223,
                r: .064
            },
            34: {
                x: 15.527,
                y: -8.752,
                r: .063
            },
            35: {
                x: 14.857,
                y: -8.234,
                r: .061
            },
            36: {
                x: 14.086,
                y: -7.718,
                r: .059
            },
            37: {
                x: 13.366,
                y: -7.151,
                r: .058
            },
            38: {
                x: 12.747,
                y: -6.731,
                r: .056
            },
            39: {
                x: 12.08,
                y: -6.258,
                r: .055
            },
            40: {
                x: 11.565,
                y: -5.833,
                r: .054
            },
            41: {
                x: 11.05,
                y: -5.506,
                r: .052
            },
            42: {
                x: 10.588,
                y: -5.176,
                r: .051
            },
            43: {
                x: 10.226,
                y: -4.843,
                r: .05
            },
            44: {
                x: 9.867,
                y: -4.609
            },
            45: {
                x: 9.558,
                y: -4.422,
                r: .049
            },
            46: {
                x: 9.352,
                y: -4.233,
                r: .048
            },
            47: {
                x: 9.197,
                y: -4.141
            },
            48: {
                x: 9.043,
                y: -3.997
            },
            49: {
                x: 8.94,
                y: -3.95
            },
            50: {
                x: 9,
                y: -4
            },
            62: {
                y: -3.95,
                r: .047
            },
            63: {
                y: -3.951
            },
            64: {
                x: 8.949
            },
            65: {
                y: -3.952
            },
            66: {
                x: 8.948,
                y: -3.954
            },
            67: {
                x: 8.898,
                y: -3.955
            },
            68: {
                x: 8.847,
                y: -3.906
            },
            69: {
                x: 8.846,
                y: -3.908
            },
            70: {
                x: 8.795,
                y: -3.91,
                r: .046
            },
            71: {
                x: 8.745,
                y: -3.862
            },
            72: {
                x: 8.694,
                y: -3.864
            },
            73: {
                x: 8.642,
                y: -3.817
            },
            74: {
                x: 8.591,
                y: -3.819,
                r: .045
            },
            75: {
                x: 8.54,
                y: -3.772
            },
            76: {
                x: 8.489,
                y: -3.775
            },
            77: {
                x: 8.437,
                y: -3.729,
                r: .044
            },
            78: {
                x: 8.336,
                y: -3.682
            },
            79: {
                x: 8.284,
                y: -3.686
            },
            80: {
                x: 8.182,
                y: -3.639,
                r: .043
            },
            81: {
                x: 8.08,
                y: -3.593
            },
            82: {
                x: 7.978,
                y: -3.548,
                r: .042
            },
            83: {
                x: 7.876,
                y: -3.502
            },
            84: {
                x: 7.774,
                y: -3.457,
                r: .041
            },
            85: {
                x: 7.672,
                y: -3.412
            },
            86: {
                x: 7.62,
                y: -3.367,
                r: .04
            },
            87: {
                x: 7.517,
                y: -3.322
            },
            88: {
                x: 7.365,
                y: -3.277,
                r: .039
            },
            89: {
                x: 7.263,
                y: -3.233,
                r: .038
            },
            90: {
                x: 7.11,
                y: -3.189
            },
            91: {
                x: 7.007,
                y: -3.145,
                r: .037
            },
            92: {
                x: 6.854,
                y: -3.051,
                r: .036
            },
            93: {
                x: 6.751,
                y: -3.007
            },
            94: {
                x: 6.598,
                y: -2.964,
                r: .035
            },
            95: {
                x: 6.445,
                y: -2.871,
                r: .034
            },
            96: {
                x: 6.292,
                y: -2.828,
                r: .033
            },
            97: {
                x: 6.139,
                y: -2.785,
                r: .032
            },
            98: {
                x: 5.985,
                y: -2.692
            },
            99: {
                x: 5.832,
                y: -2.65,
                r: .031
            },
            100: {
                x: 5.678,
                y: -2.558,
                r: .03
            },
            101: {
                x: 5.524,
                y: -2.465,
                r: .029
            },
            102: {
                x: 5.321,
                y: -2.424,
                r: .028
            },
            103: {
                x: 5.117,
                y: -2.332,
                r: .027
            },
            104: {
                x: 4.963,
                y: -2.24,
                r: .026
            },
            105: {
                x: 4.809,
                y: -2.149,
                r: .025
            },
            106: {
                x: 4.604,
                y: -2.108,
                r: .024
            },
            107: {
                x: 4.4,
                y: -2.017,
                r: .023
            },
            108: {
                x: 4.196,
                y: -1.926,
                r: .022
            },
            109: {
                x: 4.042,
                y: -1.835,
                r: .021
            },
            110: {
                x: 3.838,
                y: -1.743,
                r: .02
            },
            111: {
                x: 3.684,
                y: -1.651,
                r: .019
            },
            112: {
                x: 3.48,
                y: -1.61,
                r: .018
            },
            113: {
                x: 3.326,
                y: -1.517
            },
            114: {
                x: 3.122,
                y: -1.425,
                r: .017
            },
            115: {
                x: 3.019,
                y: -1.383,
                r: .016
            },
            116: {
                x: 2.865,
                y: -1.29,
                r: .015
            },
            117: {
                x: 2.712,
                y: -1.247,
                r: .014
            },
            118: {
                x: 2.558,
                y: -1.154,
                r: .013
            },
            119: {
                x: 2.405,
                y: -1.111
            },
            120: {
                x: 2.252,
                y: -1.017,
                r: .012
            },
            121: {
                x: 2.149,
                y: -.974,
                r: .011
            },
            122: {
                x: 1.996,
                y: -.93
            },
            123: {
                x: 1.893,
                y: -.886,
                r: .01
            },
            124: {
                x: 1.74,
                y: -.791,
                r: .009
            },
            125: {
                x: 1.637,
                y: -.747
            },
            126: {
                x: 1.535,
                y: -.702,
                r: .008
            },
            127: {
                x: 1.382,
                y: -.658,
                r: .007
            },
            128: {
                x: 1.33,
                y: -.612
            },
            129: {
                x: 1.227,
                y: -.567,
                r: .006
            },
            130: {
                x: 1.125,
                y: -.522
            },
            131: {
                x: 1.023,
                y: -.476,
                r: .005
            },
            132: {
                x: .921,
                y: -.43
            },
            133: {
                x: .869,
                y: -.384,
                r: .004
            },
            134: {
                x: .767,
                y: -.338
            },
            135: {
                x: .665,
                y: -.292
            },
            136: {
                x: .614,
                y: -.295,
                r: .003
            },
            137: {
                x: .512,
                y: -.248
            },
            138: {
                x: .461,
                y: -.201,
                r: .002
            },
            139: {
                x: .459,
                y: -.204
            },
            140: {
                x: .408,
                y: -.157
            },
            141: {
                x: .357,
                y: -.109
            },
            142: {
                x: .306,
                y: -.111,
                r: .001
            },
            143: {
                x: .255,
                y: -.113
            },
            144: {
                x: .204,
                y: -.065
            },
            145: {
                x: .153,
                y: -.067
            },
            146: {
                x: .152,
                y: -.018
            },
            147: {
                x: .101,
                y: -.019,
                r: 0
            },
            148: {
                y: -.02
            },
            149: {
                x: .05,
                y: -.021
            },
            150: {
                y: -.022
            },
            151: {
                y: -.023
            },
            152: {
                y: .027
            },
            153: {
                x: 0,
                y: 0
            }
        }).addTimedChild(instance4, 0, 155, {
            0: {
                x: 4,
                y: 180,
                r: 0
            },
            3: {
                x: 4.184,
                y: 179.899
            },
            4: {
                x: 4.628,
                y: 179.553,
                r: .002
            },
            5: {
                x: 5.337,
                y: 179.011,
                r: .003
            },
            6: {
                x: 6.359,
                y: 178.219,
                r: .006
            },
            7: {
                x: 7.694,
                y: 177.18,
                r: .009
            },
            8: {
                x: 9.294,
                y: 175.985,
                r: .014
            },
            9: {
                x: 11.207,
                y: 174.541,
                r: .019
            },
            10: {
                x: 13.482,
                y: 172.842,
                r: .024
            },
            11: {
                x: 15.972,
                y: 170.938,
                r: .031
            },
            12: {
                x: 18.71,
                y: 168.924,
                r: .038
            },
            13: {
                x: 21.3,
                y: 167.054,
                r: .044
            },
            14: {
                x: 23.575,
                y: 165.377,
                r: .05
            },
            15: {
                x: 25.539,
                y: 163.95,
                r: .055
            },
            16: {
                x: 27.189,
                y: 162.825,
                r: .059
            },
            17: {
                x: 28.575,
                y: 161.85,
                r: .062
            },
            18: {
                x: 29.647,
                y: 161.078,
                r: .065
            },
            19: {
                x: 30.406,
                y: 160.514,
                r: .067
            },
            20: {
                x: 30.902,
                y: 160.204,
                r: .068
            },
            21: {
                x: 31,
                y: 160
            },
            22: {
                x: 31.012,
                y: 160.095
            },
            23: {
                x: 30.856,
                y: 160.139
            },
            24: {
                x: 30.677,
                y: 160.275
            },
            25: {
                x: 30.424,
                y: 160.454,
                r: .067
            },
            26: {
                x: 29.999,
                y: 160.68,
                r: .066
            },
            27: {
                x: 29.602,
                y: 160.95,
                r: .065
            },
            28: {
                x: 29.036,
                y: 161.265,
                r: .064
            },
            29: {
                x: 28.493,
                y: 161.722,
                r: .063
            },
            30: {
                x: 27.781,
                y: 162.123,
                r: .061
            },
            31: {
                x: 27.05,
                y: 162.621,
                r: .06
            },
            32: {
                x: 26.192,
                y: 163.162,
                r: .058
            },
            33: {
                x: 25.264,
                y: 163.745,
                r: .056
            },
            34: {
                x: 24.262,
                y: 164.372,
                r: .054
            },
            35: {
                x: 23.189,
                y: 165.091,
                r: .051
            },
            36: {
                x: 22.046,
                y: 165.808,
                r: .049
            },
            37: {
                x: 20.778,
                y: 166.614,
                r: .046
            },
            38: {
                x: 19.488,
                y: 167.514,
                r: .043
            },
            39: {
                x: 18.197,
                y: 168.36,
                r: .04
            },
            40: {
                x: 16.929,
                y: 169.164,
                r: .038
            },
            41: {
                x: 15.781,
                y: 169.871,
                r: .035
            },
            42: {
                x: 14.758,
                y: 170.638,
                r: .033
            },
            43: {
                x: 13.754,
                y: 171.255,
                r: .03
            },
            44: {
                x: 12.824,
                y: 171.881,
                r: .028
            },
            45: {
                x: 12.017,
                y: 172.411,
                r: .027
            },
            46: {
                x: 11.281,
                y: 172.898,
                r: .025
            },
            47: {
                x: 10.566,
                y: 173.342,
                r: .023
            },
            48: {
                x: 10.026,
                y: 173.791,
                r: .022
            },
            49: {
                x: 9.505,
                y: 174.096,
                r: .021
            },
            50: {
                x: 9.107,
                y: 174.409,
                r: .02
            },
            51: {
                x: 8.733,
                y: 174.63,
                r: .019
            },
            52: {
                x: 8.43,
                y: 174.806
            },
            53: {
                x: 8.3,
                y: 174.94,
                r: .018
            },
            54: {
                x: 8.139,
                y: 175.03
            },
            55: {
                x: 8,
                y: 175
            },
            61: {
                x: 7.937,
                y: 175.096
            },
            62: {
                x: 7.922,
                y: 175.147,
                r: .017
            },
            63: {
                x: 7.859,
                y: 175.195
            },
            64: {
                x: 7.797,
                y: 175.291
            },
            65: {
                x: 7.784,
                y: 175.339
            },
            66: {
                x: 7.724,
                y: 175.34
            },
            67: {
                x: 7.662,
                y: 175.438,
                r: .016
            },
            68: {
                x: 7.599,
                y: 175.484
            },
            69: {
                x: 7.584,
                y: 175.532
            },
            70: {
                x: 7.521,
                y: 175.63
            },
            71: {
                x: 7.461,
                y: 175.681,
                r: .015
            },
            72: {
                x: 7.398,
                y: 175.727
            },
            73: {
                x: 7.383,
                y: 175.775
            },
            74: {
                x: 7.321,
                y: 175.874
            },
            75: {
                x: 7.258,
                y: 175.922
            },
            76: {
                x: 7.245,
                y: 175.92,
                r: .014
            },
            77: {
                x: 7.183,
                y: 176.018
            },
            78: {
                x: 7.12,
                y: 176.067
            },
            79: {
                x: 7.108,
                y: 176.115
            },
            80: {
                x: 7.045,
                y: 176.211
            },
            81: {
                x: 6.982,
                y: 176.262,
                r: .013
            },
            82: {
                x: 6.92,
                y: 176.31
            },
            83: {
                x: 6.904,
                y: 176.358
            },
            84: {
                x: 6.842,
                y: 176.454
            },
            85: {
                x: 6.779,
                y: 176.502
            },
            86: {
                x: 6.767,
                y: 176.553,
                r: .012
            },
            87: {
                x: 6.704,
                y: 176.601
            },
            88: {
                x: 6.641,
                y: 176.647
            },
            89: {
                x: 6.629,
                y: 176.695
            },
            90: {
                x: 6.566,
                y: 176.794,
                r: .011
            },
            91: {
                x: 6.503,
                y: 176.842
            },
            92: {
                x: 6.441,
                y: 176.89
            },
            93: {
                x: 6.425,
                y: 176.939
            },
            94: {
                x: 6.363,
                y: 177.037
            },
            95: {
                x: 6.3,
                y: 177.085,
                r: .01
            },
            96: {
                x: 6.287,
                y: 177.131
            },
            97: {
                x: 6.225,
                y: 177.179
            },
            98: {
                x: 6.162,
                y: 177.227
            },
            99: {
                x: 6.15,
                y: 177.278
            },
            100: {
                x: 6.087,
                y: 177.374,
                r: .009
            },
            101: {
                x: 5.974,
                y: 177.422
            },
            102: {
                x: 5.912,
                y: 177.471
            },
            103: {
                x: 5.896,
                y: 177.569
            },
            104: {
                x: 5.834,
                y: 177.615,
                r: .008
            },
            105: {
                x: 5.771,
                y: 177.663
            },
            106: {
                x: 5.758,
                y: 177.761
            },
            107: {
                x: 5.696,
                y: 177.809
            },
            108: {
                x: 5.633,
                y: 177.808
            },
            109: {
                x: 5.621,
                y: 177.856,
                r: .007
            },
            110: {
                x: 5.558,
                y: 177.954
            },
            111: {
                x: 5.495,
                y: 178.003
            },
            112: {
                x: 5.433,
                y: 178.048
            },
            113: {
                x: 5.417,
                y: 178.147
            },
            114: {
                x: 5.355,
                y: 178.195,
                r: .006
            },
            115: {
                x: 5.342,
                y: 178.243
            },
            116: {
                x: 5.279,
                y: 178.339
            },
            117: {
                x: 5.217,
                y: 178.387
            },
            118: {
                x: 5.154,
                y: 178.388
            },
            119: {
                x: 5.142,
                y: 178.486,
                r: .005
            },
            120: {
                x: 5.079,
                y: 178.532
            },
            121: {
                x: 5.016,
                y: 178.58
            },
            122: {
                x: 5.004,
                y: 178.679
            },
            123: {
                x: 4.941,
                y: 178.727,
                r: .004
            },
            124: {
                x: 4.876,
                y: 178.773
            },
            125: {
                x: 4.863,
                y: 178.821
            },
            126: {
                x: 4.8,
                y: 178.919
            },
            127: {
                x: 4.738,
                y: 178.968
            },
            128: {
                x: 4.675,
                y: 179.013,
                r: .003
            },
            129: {
                x: 4.663,
                y: 179.061
            },
            130: {
                x: 4.6,
                y: 179.11
            },
            131: {
                x: 4.537,
                y: 179.158
            },
            132: {
                x: 4.525,
                y: 179.254
            },
            133: {
                x: 4.462,
                y: 179.302,
                r: .002
            },
            134: {
                x: 4.397,
                y: 179.35
            },
            135: {
                x: 4.384,
                y: 179.449
            },
            136: {
                x: 4.319,
                y: 179.494
            },
            137: {
                x: 4.256,
                y: 179.543,
                r: .001
            },
            138: {
                x: 4.243,
                y: 179.641
            },
            139: {
                x: 4.181,
                y: 179.639
            },
            140: {
                x: 4.118,
                y: 179.685
            },
            141: {
                x: 4.105,
                y: 179.783
            },
            142: {
                x: 4.043,
                y: 179.831,
                r: 0
            },
            143: {
                x: 3.98,
                y: 179.88
            },
            144: {
                x: 4,
                y: 180
            }
        }).addTimedChild(instance3, 0, 155, {
            0: {
                x: -19,
                y: 165,
                r: 0
            },
            3: {
                x: -18.86,
                y: 164.891
            },
            4: {
                x: -18.599,
                y: 164.469,
                r: .002
            },
            5: {
                x: -18.161,
                y: 163.883,
                r: .003
            },
            6: {
                x: -17.499,
                y: 162.98,
                r: .006
            },
            7: {
                x: -16.713,
                y: 161.762,
                r: .009
            },
            8: {
                x: -15.749,
                y: 160.373,
                r: .014
            },
            9: {
                x: -14.561,
                y: 158.667,
                r: .019
            },
            10: {
                x: -13.147,
                y: 156.789,
                r: .024
            },
            11: {
                x: -11.557,
                y: 154.589,
                r: .031
            },
            12: {
                x: -9.858,
                y: 152.268,
                r: .038
            },
            13: {
                x: -8.265,
                y: 150.103,
                r: .044
            },
            14: {
                x: -6.799,
                y: 148.199,
                r: .05
            },
            15: {
                x: -5.555,
                y: 146.563,
                r: .055
            },
            16: {
                x: -4.538,
                y: 145.196,
                r: .059
            },
            17: {
                x: -3.645,
                y: 144.046,
                r: .062
            },
            18: {
                x: -2.98,
                y: 143.166,
                r: .065
            },
            19: {
                x: -2.49,
                y: 142.609,
                r: .067
            },
            20: {
                x: -2.175,
                y: 142.225,
                r: .068
            },
            21: {
                x: -2,
                y: 142
            },
            22: {
                x: -2.039,
                y: 142.098
            },
            23: {
                x: -2.1,
                y: 142.151
            },
            24: {
                x: -2.237,
                y: 142.302
            },
            25: {
                x: -2.351,
                y: 142.551,
                r: .067
            },
            26: {
                x: -2.59,
                y: 142.752,
                r: .066
            },
            27: {
                x: -2.804,
                y: 143.054,
                r: .065
            },
            28: {
                x: -3.141,
                y: 143.456,
                r: .064
            },
            29: {
                x: -3.507,
                y: 143.857,
                r: .063
            },
            30: {
                x: -3.895,
                y: 144.408,
                r: .061
            },
            31: {
                x: -4.306,
                y: 144.961,
                r: .06
            },
            32: {
                x: -4.796,
                y: 145.513,
                r: .058
            },
            33: {
                x: -5.31,
                y: 146.212,
                r: .056
            },
            34: {
                x: -5.85,
                y: 146.912,
                r: .054
            },
            35: {
                x: -6.514,
                y: 147.71,
                r: .051
            },
            36: {
                x: -7.152,
                y: 148.561,
                r: .049
            },
            37: {
                x: -7.867,
                y: 149.458,
                r: .046
            },
            38: {
                x: -8.607,
                y: 150.455,
                r: .043
            },
            39: {
                x: -9.347,
                y: 151.398,
                r: .04
            },
            40: {
                x: -10.061,
                y: 152.342,
                r: .038
            },
            41: {
                x: -10.701,
                y: 153.185,
                r: .035
            },
            42: {
                x: -11.316,
                y: 153.981,
                r: .033
            },
            43: {
                x: -11.855,
                y: 154.722,
                r: .03
            },
            44: {
                x: -12.369,
                y: 155.415,
                r: .028
            },
            45: {
                x: -12.807,
                y: 156.008,
                r: .027
            },
            46: {
                x: -13.221,
                y: 156.551,
                r: .025
            },
            47: {
                x: -13.61,
                y: 157.095,
                r: .023
            },
            48: {
                x: -13.972,
                y: 157.539,
                r: .022
            },
            49: {
                x: -14.261,
                y: 157.932,
                r: .021
            },
            50: {
                x: -14.475,
                y: 158.228,
                r: .02
            },
            51: {
                x: -14.662,
                y: 158.475,
                r: .019
            },
            52: {
                x: -14.825,
                y: 158.722
            },
            53: {
                x: -14.912,
                y: 158.871,
                r: .018
            },
            54: {
                x: -14.978,
                y: 158.969
            },
            55: {
                x: -15,
                y: 159
            },
            61: {
                x: -15.066,
                y: 159.101
            },
            62: {
                x: -15.084,
                y: 159.156,
                r: .017
            },
            63: {
                x: -15.151,
                y: 159.209
            },
            64: {
                x: -15.216,
                y: 159.31
            },
            65: {
                x: -15.232,
                y: 159.363
            },
            66: {
                x: -15.246,
                y: 159.419
            },
            67: {
                x: -15.312,
                y: 159.522,
                r: .016
            },
            68: {
                x: -15.378,
                y: 159.573
            },
            69: {
                x: -15.397,
                y: 159.676
            },
            70: {
                x: -15.463,
                y: 159.779
            },
            71: {
                x: -15.526,
                y: 159.835,
                r: .015
            },
            72: {
                x: -15.542,
                y: 159.886
            },
            73: {
                x: -15.611,
                y: 159.939
            },
            74: {
                x: -15.677,
                y: 160.042
            },
            75: {
                x: -15.693,
                y: 160.095
            },
            76: {
                x: -15.709,
                y: 160.149,
                r: .014
            },
            77: {
                x: -15.775,
                y: 160.252
            },
            78: {
                x: -15.841,
                y: 160.305
            },
            79: {
                x: -15.857,
                y: 160.358
            },
            80: {
                x: -15.923,
                y: 160.459
            },
            81: {
                x: -15.989,
                y: 160.515,
                r: .013
            },
            82: {
                x: -16.005,
                y: 160.568
            },
            83: {
                x: -16.073,
                y: 160.621
            },
            84: {
                x: -16.139,
                y: 160.722
            },
            85: {
                x: -16.155,
                y: 160.775
            },
            86: {
                x: -16.222,
                y: 160.88,
                r: .012
            },
            87: {
                x: -16.238,
                y: 160.984
            },
            88: {
                x: -16.303,
                y: 161.034
            },
            89: {
                x: -16.319,
                y: 161.088
            },
            90: {
                x: -16.385,
                y: 161.191,
                r: .011
            },
            91: {
                x: -16.451,
                y: 161.244
            },
            92: {
                x: -16.517,
                y: 161.297
            },
            93: {
                x: -16.536,
                y: 161.35
            },
            94: {
                x: -16.602,
                y: 161.453
            },
            95: {
                x: -16.668,
                y: 161.507,
                r: .01
            },
            96: {
                x: -16.684,
                y: 161.557
            },
            97: {
                x: -16.7,
                y: 161.661
            },
            98: {
                x: -16.766,
                y: 161.714
            },
            99: {
                x: -16.782,
                y: 161.769
            },
            100: {
                x: -16.848,
                y: 161.87,
                r: .009
            },
            101: {
                x: -16.914,
                y: 161.923
            },
            102: {
                x: -16.98,
                y: 162.027
            },
            103: {
                x: -16.998,
                y: 162.13
            },
            104: {
                x: -17.064,
                y: 162.18,
                r: .008
            },
            105: {
                x: -17.08,
                y: 162.234
            },
            106: {
                x: -17.146,
                y: 162.337
            },
            107: {
                x: -17.212,
                y: 162.39
            },
            108: {
                x: -17.228,
                y: 162.443
            },
            109: {
                x: -17.244,
                y: 162.496,
                r: .007
            },
            110: {
                x: -17.31,
                y: 162.6
            },
            111: {
                x: -17.377,
                y: 162.653
            },
            112: {
                x: -17.392,
                y: 162.704
            },
            113: {
                x: -17.461,
                y: 162.807
            },
            114: {
                x: -17.527,
                y: 162.86,
                r: .006
            },
            115: {
                x: -17.543,
                y: 162.913
            },
            116: {
                x: -17.609,
                y: 163.014
            },
            117: {
                x: -17.675,
                y: 163.067
            },
            118: {
                x: -17.691,
                y: 163.123
            },
            119: {
                x: -17.707,
                y: 163.276,
                r: .005
            },
            120: {
                x: -17.773,
                y: 163.327
            },
            121: {
                x: -17.839,
                y: 163.38
            },
            122: {
                x: -17.855,
                y: 163.483
            },
            123: {
                x: -17.921,
                y: 163.536,
                r: .004
            },
            124: {
                x: -17.989,
                y: 163.587
            },
            125: {
                x: -18.005,
                y: 163.64
            },
            126: {
                x: -18.071,
                y: 163.743
            },
            127: {
                x: -18.137,
                y: 163.796
            },
            128: {
                x: -18.153,
                y: 163.847,
                r: .003
            },
            129: {
                x: -18.169,
                y: 163.95
            },
            130: {
                x: -18.235,
                y: 164.004
            },
            131: {
                x: -18.301,
                y: 164.057
            },
            132: {
                x: -18.317,
                y: 164.158
            },
            133: {
                x: -18.383,
                y: 164.211,
                r: .002
            },
            134: {
                x: -18.451,
                y: 164.264
            },
            135: {
                x: -18.467,
                y: 164.367
            },
            136: {
                x: -18.536,
                y: 164.467
            },
            137: {
                x: -18.602,
                y: 164.521,
                r: .001
            },
            138: {
                x: -18.618,
                y: 164.624
            },
            139: {
                x: -18.634,
                y: 164.677
            },
            140: {
                x: -18.7,
                y: 164.728
            },
            141: {
                x: -18.716,
                y: 164.831
            },
            142: {
                x: -18.782,
                y: 164.884,
                r: 0
            },
            143: {
                x: -18.848,
                y: 164.937
            },
            144: {
                x: -19,
                y: 165
            }
        }).addTimedChild(instance2, 0, 155, {
            0: {
                x: -15,
                y: 199,
                r: 0
            },
            3: {
                x: -15.14,
                y: 199.005,
                r: -.001
            },
            4: {
                x: -15.756,
                y: 198.88,
                r: -.002
            },
            5: {
                x: -16.751,
                y: 198.672,
                r: -.005
            },
            6: {
                x: -18.073,
                y: 198.375,
                r: -.009
            },
            7: {
                x: -19.873,
                y: 198.038,
                r: -.014
            },
            8: {
                x: -21.951,
                y: 197.709,
                r: -.02
            },
            9: {
                x: -24.503,
                y: 197.184,
                r: -.027
            },
            10: {
                x: -27.435,
                y: 196.658,
                r: -.036
            },
            11: {
                x: -30.694,
                y: 196.074,
                r: -.045
            },
            12: {
                x: -34.283,
                y: 195.473,
                r: -.056
            },
            13: {
                x: -37.589,
                y: 194.952,
                r: -.065
            },
            14: {
                x: -40.519,
                y: 194.462,
                r: -.073
            },
            15: {
                x: -43.021,
                y: 194.108,
                r: -.081
            },
            16: {
                x: -45.146,
                y: 193.8,
                r: -.087
            },
            17: {
                x: -46.893,
                y: 193.534,
                r: -.092
            },
            18: {
                x: -48.214,
                y: 193.37,
                r: -.096
            },
            19: {
                x: -49.207,
                y: 193.21,
                r: -.099
            },
            20: {
                x: -49.773,
                y: 193.151,
                r: -.1
            },
            21: {
                x: -50,
                y: 193,
                r: -.101
            },
            22: {
                x: -49.535,
                y: 193.097,
                r: -.099
            },
            23: {
                x: -48.097,
                y: 193.19,
                r: -.093
            },
            24: {
                x: -45.631,
                y: 193.414,
                r: -.083
            },
            25: {
                x: -42.278,
                y: 193.689,
                r: -.069
            },
            26: {
                x: -37.831,
                y: 194.194,
                r: -.05
            },
            27: {
                x: -32.472,
                y: 194.879,
                r: -.028
            },
            28: {
                x: -26.087,
                y: 195.793,
                r: -.002
            },
            29: {
                x: -18.748,
                y: 197.039,
                r: .028
            },
            30: {
                x: -10.372,
                y: 198.789,
                r: .062
            },
            31: {
                x: -1.077,
                y: 201.027,
                r: .1
            },
            32: {
                x: 9.289,
                y: 203.924,
                r: .142
            },
            33: {
                x: 20.539,
                y: 207.497,
                r: .189
            },
            34: {
                x: 32.464,
                y: 211.913,
                r: .238
            },
            35: {
                x: 43.585,
                y: 216.544,
                r: .284
            },
            36: {
                x: 53.683,
                y: 221.186,
                r: .326
            },
            37: {
                x: 62.708,
                y: 225.78,
                r: .365
            },
            38: {
                x: 70.709,
                y: 230.153,
                r: .399
            },
            39: {
                x: 77.685,
                y: 234.132,
                r: .429
            },
            40: {
                x: 83.689,
                y: 237.806,
                r: .455
            },
            41: {
                x: 88.685,
                y: 241.03,
                r: .477
            },
            42: {
                x: 92.83,
                y: 243.792,
                r: .495
            },
            43: {
                x: 95.941,
                y: 245.922,
                r: .509
            },
            44: {
                x: 98.193,
                y: 247.491,
                r: .519
            },
            45: {
                x: 99.576,
                y: 248.47,
                r: .525
            },
            46: {
                x: 100.15,
                y: 248.65,
                r: .528
            },
            47: {
                x: 100.079,
                y: 248.619,
                r: .527
            },
            48: {
                x: 100.031,
                y: 248.392,
                r: .525
            },
            49: {
                x: 99.806,
                y: 248.065,
                r: .521
            },
            50: {
                x: 99.595,
                y: 247.533,
                r: .516
            },
            51: {
                x: 99.25,
                y: 246.886,
                r: .509
            },
            52: {
                x: 98.861,
                y: 246.072,
                r: .501
            },
            53: {
                x: 98.336,
                y: 245.178,
                r: .491
            },
            54: {
                x: 97.709,
                y: 244.145,
                r: .48
            },
            55: {
                x: 97,
                y: 243,
                r: .467
            },
            57: {
                x: 94.812,
                y: 241.611,
                r: .457
            },
            58: {
                x: 92.5,
                y: 240.215,
                r: .447
            },
            59: {
                x: 90.305,
                y: 238.811,
                r: .438
            },
            60: {
                x: 88.069,
                y: 237.492,
                r: .428
            },
            61: {
                x: 85.853,
                y: 236.21,
                r: .418
            },
            62: {
                x: 83.695,
                y: 234.923,
                r: .409
            },
            63: {
                x: 81.505,
                y: 233.678,
                r: .4
            },
            64: {
                x: 79.329,
                y: 232.421,
                r: .39
            },
            65: {
                x: 77.216,
                y: 231.257,
                r: .381
            },
            66: {
                x: 75.122,
                y: 230.139,
                r: .372
            },
            67: {
                x: 73.044,
                y: 228.962,
                r: .363
            },
            68: {
                x: 70.929,
                y: 227.929,
                r: .354
            },
            69: {
                x: 68.88,
                y: 226.897,
                r: .346
            },
            70: {
                x: 66.843,
                y: 225.854,
                r: .337
            },
            71: {
                x: 64.826,
                y: 224.864,
                r: .329
            },
            72: {
                x: 62.874,
                y: 223.871,
                r: .32
            },
            73: {
                x: 60.886,
                y: 222.925,
                r: .312
            },
            74: {
                x: 58.97,
                y: 222.032,
                r: .304
            },
            75: {
                x: 57.018,
                y: 221.136,
                r: .296
            },
            76: {
                x: 55.135,
                y: 220.289,
                r: .288
            },
            77: {
                x: 53.22,
                y: 219.447,
                r: .28
            },
            78: {
                x: 51.371,
                y: 218.656,
                r: .272
            },
            79: {
                x: 49.587,
                y: 217.865,
                r: .265
            },
            80: {
                x: 47.775,
                y: 217.127,
                r: .257
            },
            81: {
                x: 45.98,
                y: 216.343,
                r: .25
            },
            82: {
                x: 44.208,
                y: 215.667,
                r: .243
            },
            83: {
                x: 42.448,
                y: 214.942,
                r: .235
            },
            84: {
                x: 40.765,
                y: 214.226,
                r: .228
            },
            85: {
                x: 39.045,
                y: 213.613,
                r: .221
            },
            86: {
                x: 37.399,
                y: 212.959,
                r: .214
            },
            87: {
                x: 35.769,
                y: 212.357,
                r: .208
            },
            88: {
                x: 34.162,
                y: 211.765,
                r: .201
            },
            89: {
                x: 32.521,
                y: 211.232,
                r: .195
            },
            90: {
                x: 31.006,
                y: 210.655,
                r: .188
            },
            91: {
                x: 29.462,
                y: 210.14,
                r: .182
            },
            92: {
                x: 27.935,
                y: 209.628,
                r: .176
            },
            93: {
                x: 26.435,
                y: 209.135,
                r: .169
            },
            94: {
                x: 25.002,
                y: 208.646,
                r: .163
            },
            95: {
                x: 23.545,
                y: 208.172,
                r: .158
            },
            96: {
                x: 22.16,
                y: 207.803,
                r: .152
            },
            97: {
                x: 20.796,
                y: 207.347,
                r: .146
            },
            98: {
                x: 19.403,
                y: 206.956,
                r: .141
            },
            99: {
                x: 18.092,
                y: 206.532,
                r: .135
            },
            100: {
                x: 16.797,
                y: 206.162,
                r: .13
            },
            101: {
                x: 15.478,
                y: 205.806,
                r: .124
            },
            102: {
                x: 14.231,
                y: 205.466,
                r: .119
            },
            103: {
                x: 13.014,
                y: 205.088,
                r: .114
            },
            104: {
                x: 11.818,
                y: 204.775,
                r: .109
            },
            105: {
                x: 10.643,
                y: 204.429,
                r: .105
            },
            106: {
                x: 9.452,
                y: 204.143,
                r: .1
            },
            107: {
                x: 8.379,
                y: 203.874,
                r: .095
            },
            108: {
                x: 7.283,
                y: 203.574,
                r: .091
            },
            109: {
                x: 6.216,
                y: 203.285,
                r: .086
            },
            110: {
                x: 5.171,
                y: 203.063,
                r: .082
            },
            111: {
                x: 4.157,
                y: 202.806,
                r: .078
            },
            112: {
                x: 3.166,
                y: 202.569,
                r: .074
            },
            113: {
                x: 2.202,
                y: 202.35,
                r: .07
            },
            114: {
                x: 1.217,
                y: 202.093,
                r: .066
            },
            115: {
                x: .31,
                y: 201.908,
                r: .062
            },
            116: {
                x: -.572,
                y: 201.733,
                r: .059
            },
            117: {
                x: -1.378,
                y: 201.535,
                r: .055
            },
            118: {
                x: -2.201,
                y: 201.348,
                r: .052
            },
            119: {
                x: -3.046,
                y: 201.182,
                r: .049
            },
            120: {
                x: -3.815,
                y: 201.03,
                r: .045
            },
            121: {
                x: -4.607,
                y: 200.905,
                r: .042
            },
            122: {
                x: -5.267,
                y: 200.692,
                r: .039
            },
            123: {
                x: -6.003,
                y: 200.601,
                r: .037
            },
            124: {
                x: -6.707,
                y: 200.476,
                r: .034
            },
            125: {
                x: -7.279,
                y: 200.272,
                r: .031
            },
            126: {
                x: -7.927,
                y: 200.19,
                r: .029
            },
            127: {
                x: -8.54,
                y: 200.073,
                r: .026
            },
            128: {
                x: -9.078,
                y: 199.98,
                r: .024
            },
            129: {
                x: -9.635,
                y: 199.852,
                r: .022
            },
            130: {
                x: -10.159,
                y: 199.798,
                r: .02
            },
            131: {
                x: -10.661,
                y: 199.71,
                r: .018
            },
            132: {
                x: -11.121,
                y: 199.596,
                r: .016
            },
            133: {
                x: -11.562,
                y: 199.5,
                r: .014
            },
            134: {
                x: -11.961,
                y: 199.427,
                r: .012
            },
            135: {
                x: -12.29,
                y: 199.376,
                r: .011
            },
            136: {
                x: -12.685,
                y: 199.339,
                r: .009
            },
            137: {
                x: -12.999,
                y: 199.228,
                r: .008
            },
            138: {
                x: -13.282,
                y: 199.236,
                r: .007
            },
            139: {
                x: -13.632,
                y: 199.165,
                r: .005
            },
            140: {
                x: -13.852,
                y: 199.109,
                r: .004
            },
            141: {
                x: -14.096,
                y: 199.081,
                r: .003
            },
            142: {
                x: -14.252,
                y: 199.024
            },
            143: {
                x: -14.481,
                y: 198.986,
                r: .002
            },
            144: {
                x: -14.631,
                y: 199.019,
                r: .001
            },
            145: {
                x: -14.698,
                y: 198.975
            },
            146: {
                x: -14.783,
                y: 199.002
            },
            147: {
                x: -14.882,
                y: 198.947,
                r: 0
            },
            148: {
                x: -14.906,
                y: 198.915
            },
            149: {
                x: -15,
                y: 199
            }
        }).addTimedChild(instance1, 0, 155, {
            0: {
                x: -56,
                y: 204,
                r: 0
            },
            3: {
                x: -56.137,
                y: 204.028,
                r: -.001
            },
            4: {
                x: -56.595,
                y: 203.922,
                r: -.002
            },
            5: {
                x: -57.225,
                y: 203.828,
                r: -.005
            },
            6: {
                x: -58.176,
                y: 203.691,
                r: -.009
            },
            7: {
                x: -59.399,
                y: 203.459,
                r: -.014
            },
            8: {
                x: -60.792,
                y: 203.281,
                r: -.02
            },
            9: {
                x: -62.551,
                y: 203.003,
                r: -.027
            },
            10: {
                x: -64.53,
                y: 202.719,
                r: -.036
            },
            11: {
                x: -66.826,
                y: 202.422,
                r: -.045
            },
            12: {
                x: -69.292,
                y: 202.14,
                r: -.056
            },
            13: {
                x: -71.527,
                y: 201.906,
                r: -.065
            },
            14: {
                x: -73.492,
                y: 201.655,
                r: -.073
            },
            15: {
                x: -75.235,
                y: 201.495,
                r: -.081
            },
            16: {
                x: -76.658,
                y: 201.385,
                r: -.087
            },
            17: {
                x: -77.862,
                y: 201.272,
                r: -.092
            },
            18: {
                x: -78.797,
                y: 201.215,
                r: -.096
            },
            19: {
                x: -79.416,
                y: 201.167,
                r: -.099
            },
            20: {
                x: -79.818,
                y: 201.126,
                r: -.1
            },
            21: {
                x: -80,
                y: 201,
                r: -.101
            },
            22: {
                x: -79.601,
                y: 200.987,
                r: -.099
            },
            23: {
                x: -78.16,
                y: 200.899,
                r: -.093
            },
            24: {
                x: -75.821,
                y: 200.82,
                r: -.083
            },
            25: {
                x: -72.519,
                y: 200.771,
                r: -.069
            },
            26: {
                x: -68.245,
                y: 200.677,
                r: -.05
            },
            27: {
                x: -62.972,
                y: 200.689,
                r: -.028
            },
            28: {
                x: -56.778,
                y: 200.804,
                r: -.002
            },
            29: {
                x: -49.576,
                y: 201.224,
                r: .028
            },
            30: {
                x: -41.321,
                y: 201.92,
                r: .062
            },
            31: {
                x: -32.119,
                y: 202.976,
                r: .1
            },
            32: {
                x: -21.854,
                y: 204.563,
                r: .142
            },
            33: {
                x: -10.546,
                y: 206.751,
                r: .189
            },
            34: {
                x: 1.411,
                y: 209.69,
                r: .238
            },
            35: {
                x: 12.678,
                y: 212.893,
                r: .284
            },
            36: {
                x: 22.916,
                y: 216.238,
                r: .326
            },
            37: {
                x: 32.16,
                y: 219.666,
                r: .365
            },
            38: {
                x: 40.394,
                y: 223.004,
                r: .399
            },
            39: {
                x: 47.604,
                y: 226.177,
                r: .429
            },
            40: {
                x: 53.835,
                y: 229.072,
                r: .455
            },
            41: {
                x: 59.088,
                y: 231.641,
                r: .477
            },
            42: {
                x: 63.313,
                y: 233.821,
                r: .495
            },
            43: {
                x: 66.621,
                y: 235.589,
                r: .509
            },
            44: {
                x: 68.982,
                y: 236.916,
                r: .519
            },
            45: {
                x: 70.381,
                y: 237.67,
                r: .525
            },
            46: {
                x: 71,
                y: 237.7,
                r: .528
            },
            47: {
                x: 70.822,
                y: 237.741,
                r: .527
            },
            48: {
                x: 70.35,
                y: 237.529,
                r: .525
            },
            49: {
                x: 69.534,
                y: 237.211,
                r: .521
            },
            50: {
                x: 68.468,
                y: 236.781,
                r: .516
            },
            51: {
                x: 66.953,
                y: 236.28,
                r: .509
            },
            52: {
                x: 65.18,
                y: 235.657,
                r: .501
            },
            53: {
                x: 63.058,
                y: 234.897,
                r: .491
            },
            54: {
                x: 60.622,
                y: 234.044,
                r: .48
            },
            55: {
                x: 57.7,
                y: 233.15,
                r: .467
            },
            57: {
                x: 55.368,
                y: 232.104,
                r: .457
            },
            58: {
                x: 53.014,
                y: 230.998,
                r: .447
            },
            59: {
                x: 50.682,
                y: 229.93,
                r: .438
            },
            60: {
                x: 48.314,
                y: 228.844,
                r: .428
            },
            61: {
                x: 46.07,
                y: 227.843,
                r: .418
            },
            62: {
                x: 43.74,
                y: 226.831,
                r: .409
            },
            63: {
                x: 41.48,
                y: 225.858,
                r: .4
            },
            64: {
                x: 39.29,
                y: 224.97,
                r: .39
            },
            65: {
                x: 37.017,
                y: 224.071,
                r: .381
            },
            66: {
                x: 34.866,
                y: 223.214,
                r: .372
            },
            67: {
                x: 32.735,
                y: 222.345,
                r: .363
            },
            68: {
                x: 30.572,
                y: 221.565,
                r: .354
            },
            69: {
                x: 28.477,
                y: 220.782,
                r: .346
            },
            70: {
                x: 26.349,
                y: 220.035,
                r: .337
            },
            71: {
                x: 24.294,
                y: 219.286,
                r: .329
            },
            72: {
                x: 22.257,
                y: 218.631,
                r: .32
            },
            73: {
                x: 20.188,
                y: 217.918,
                r: .312
            },
            74: {
                x: 18.243,
                y: 217.304,
                r: .304
            },
            75: {
                x: 16.265,
                y: 216.633,
                r: .296
            },
            76: {
                x: 14.31,
                y: 216.058,
                r: .288
            },
            77: {
                x: 12.425,
                y: 215.483,
                r: .28
            },
            78: {
                x: 10.509,
                y: 214.903,
                r: .272
            },
            79: {
                x: 8.661,
                y: 214.371,
                r: .265
            },
            80: {
                x: 6.787,
                y: 213.837,
                r: .257
            },
            81: {
                x: 4.932,
                y: 213.353,
                r: .25
            },
            82: {
                x: 3.152,
                y: 212.872,
                r: .243
            },
            83: {
                x: 1.387,
                y: 212.388,
                r: .235
            },
            84: {
                x: -.349,
                y: 211.91,
                r: .228
            },
            85: {
                x: -2.02,
                y: 211.478,
                r: .221
            },
            86: {
                x: -3.715,
                y: 211.103,
                r: .214
            },
            87: {
                x: -5.392,
                y: 210.724,
                r: .208
            },
            88: {
                x: -7.044,
                y: 210.302,
                r: .201
            },
            89: {
                x: -8.679,
                y: 209.983,
                r: .195
            },
            90: {
                x: -10.185,
                y: 209.617,
                r: .188
            },
            91: {
                x: -11.771,
                y: 209.307,
                r: .182
            },
            92: {
                x: -13.286,
                y: 208.998,
                r: .176
            },
            93: {
                x: -14.825,
                y: 208.701,
                r: .169
            },
            94: {
                x: -16.244,
                y: 208.455,
                r: .163
            },
            95: {
                x: -17.737,
                y: 208.168,
                r: .158
            },
            96: {
                x: -19.106,
                y: 207.884,
                r: .152
            },
            97: {
                x: -20.503,
                y: 207.607,
                r: .146
            },
            98: {
                x: -21.927,
                y: 207.391,
                r: .141
            },
            99: {
                x: -23.222,
                y: 207.187,
                r: .135
            },
            100: {
                x: -24.496,
                y: 206.932,
                r: .13
            },
            101: {
                x: -25.795,
                y: 206.738,
                r: .124
            },
            102: {
                x: -27.071,
                y: 206.554,
                r: .119
            },
            103: {
                x: -28.318,
                y: 206.429,
                r: .114
            },
            104: {
                x: -29.492,
                y: 206.215,
                r: .109
            },
            105: {
                x: -30.644,
                y: 206.061,
                r: .105
            },
            106: {
                x: -31.863,
                y: 205.915,
                r: .1
            },
            107: {
                x: -32.962,
                y: 205.781,
                r: .095
            },
            108: {
                x: -34.035,
                y: 205.61,
                r: .091
            },
            109: {
                x: -35.079,
                y: 205.498,
                r: .086
            },
            110: {
                x: -36.1,
                y: 205.396,
                r: .082
            },
            111: {
                x: -37.19,
                y: 205.257,
                r: .078
            },
            112: {
                x: -38.158,
                y: 205.182,
                r: .074
            },
            113: {
                x: -39.098,
                y: 205.07,
                r: .07
            },
            114: {
                x: -40.059,
                y: 205.018,
                r: .066
            },
            115: {
                x: -40.942,
                y: 204.882,
                r: .062
            },
            116: {
                x: -41.85,
                y: 204.802,
                r: .059
            },
            117: {
                x: -42.683,
                y: 204.743,
                r: .055
            },
            118: {
                x: -43.533,
                y: 204.642,
                r: .052
            },
            119: {
                x: -44.306,
                y: 204.558,
                r: .049
            },
            120: {
                x: -45.102,
                y: 204.534,
                r: .045
            },
            121: {
                x: -45.823,
                y: 204.482,
                r: .042
            },
            122: {
                x: -46.511,
                y: 204.437,
                r: .039
            },
            123: {
                x: -47.225,
                y: 204.359,
                r: .037
            },
            124: {
                x: -47.908,
                y: 204.295,
                r: .034
            },
            125: {
                x: -48.511,
                y: 204.296,
                r: .031
            },
            126: {
                x: -49.139,
                y: 204.215,
                r: .029
            },
            127: {
                x: -49.733,
                y: 204.195,
                r: .026
            },
            128: {
                x: -50.302,
                y: 204.193,
                r: .024
            },
            129: {
                x: -50.842,
                y: 204.154,
                r: .022
            },
            130: {
                x: -51.349,
                y: 204.134,
                r: .02
            },
            131: {
                x: -51.834,
                y: 204.075,
                r: .018
            },
            132: {
                x: -52.279,
                y: 204.037,
                r: .016
            },
            133: {
                x: -52.704,
                y: 204.06,
                r: .014
            },
            134: {
                x: -53.14,
                y: 204.005,
                r: .012
            },
            135: {
                x: -53.506,
                y: 203.965,
                r: .011
            },
            136: {
                x: -53.838,
                y: 203.986,
                r: .009
            },
            137: {
                x: -54.191,
                y: 203.978,
                r: .008
            },
            138: {
                x: -54.463,
                y: 203.985,
                r: .007
            },
            139: {
                x: -54.754,
                y: 203.909,
                r: .005
            },
            140: {
                x: -55.014,
                y: 203.945,
                r: .004
            },
            141: {
                x: -55.199,
                y: 203.902,
                r: .003
            },
            142: {
                x: -55.399,
                y: 203.928
            },
            143: {
                x: -55.571,
                y: 203.917,
                r: .002
            },
            144: {
                x: -55.716,
                y: 203.923,
                r: .001
            },
            145: {
                x: -55.829,
                y: 203.899
            },
            146: {
                x: -55.91,
                y: 203.94
            },
            147: {
                x: -56.007,
                y: 203.897,
                r: 0
            },
            148: {
                x: -56.029,
                y: 203.871
            },
            149: {
                x: -56,
                y: 204
            }
        }).addAction(function() {
            this.head.gotoAndStop(0)
        }, 0).addAction(function() {
            this.head.gotoAndPlay(1)
        }, 5).addAction(function() {
            this.stop()
        }, 154), this.labels.forEach((label, index) => {
            var labelEndPosition = this.labels[index + 1] ? this.labels[index + 1].position - 1 : this._totalFrames - 1;
            this.addAction(() => this.emit("label_end", this.currentLabel), labelEndPosition)
        })
    }), lib.bigWinSmokeIn = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("bigWinSmokeS")).setTransform(0, 0, 2, 2);
        this.addChild(instance1)
    }), lib.bigWinSmoke = MovieClip.extend(function() {
        MovieClip.call(this, {
            duration: 120
        });
        var instance2 = new lib.bigWinSmokeIn,
            instance1 = new lib.bigWinSmokeIn;
        this.addTimedChild(instance2, 0, 120, {
            0: {
                x: 0,
                y: 0,
                sx: 1,
                sy: 1,
                a: 0
            },
            1: {
                x: -.35,
                y: -.4,
                sx: 1.001,
                sy: 1.001,
                a: .02
            },
            2: {
                x: -.75,
                y: -.8,
                sx: 1.002,
                sy: 1.002,
                a: .04
            },
            3: {
                x: -1.15,
                y: -1.2,
                a: .05
            },
            4: {
                x: -1.55,
                y: -1.65,
                sx: 1.003,
                sy: 1.003,
                a: .07
            },
            5: {
                x: -1.9,
                y: -2.05,
                sx: 1.004,
                sy: 1.004,
                a: .09
            },
            6: {
                x: -2.3,
                y: -2.45,
                sx: 1.005,
                sy: 1.005,
                a: .1
            },
            7: {
                x: -2.7,
                y: -2.85,
                a: .12
            },
            8: {
                x: -3.05,
                y: -3.3,
                sx: 1.006,
                sy: 1.006,
                a: .14
            },
            9: {
                x: -3.45,
                y: -3.7,
                sx: 1.007,
                sy: 1.007,
                a: .15
            },
            10: {
                x: -3.85,
                y: -4.1,
                sx: 1.008,
                sy: 1.008,
                a: .17
            },
            11: {
                x: -4.25,
                y: -4.55,
                sx: 1.009,
                sy: 1.009,
                a: .19
            },
            12: {
                x: -4.65,
                y: -4.95,
                a: .2
            },
            13: {
                x: -5,
                y: -5.35,
                sx: 1.01,
                sy: 1.01,
                a: .22
            },
            14: {
                x: -5.4,
                y: -5.8,
                sx: 1.011,
                sy: 1.011,
                a: .24
            },
            15: {
                x: -5.8,
                y: -6.2,
                sx: 1.012,
                sy: 1.012,
                a: .25
            },
            16: {
                x: -6.2,
                y: -6.6,
                a: .27
            },
            17: {
                x: -6.6,
                y: -7,
                sx: 1.013,
                sy: 1.013,
                a: .29
            },
            18: {
                x: -6.95,
                y: -7.45,
                sx: 1.014,
                sy: 1.014,
                a: .3
            },
            19: {
                x: -7.35,
                y: -7.85,
                sx: 1.015,
                sy: 1.015,
                a: .32
            },
            20: {
                x: -7.75,
                y: -8.25,
                sx: 1.016,
                sy: 1.016,
                a: .34
            },
            21: {
                x: -8.15,
                y: -8.7,
                a: .36
            },
            22: {
                x: -8.5,
                y: -9.1,
                sx: 1.017,
                sy: 1.017,
                a: .37
            },
            23: {
                x: -8.9,
                y: -9.5,
                sx: 1.018,
                sy: 1.018,
                a: .39
            },
            24: {
                x: -9.3,
                y: -9.9,
                sx: 1.019,
                sy: 1.019,
                a: .41
            },
            25: {
                x: -9.7,
                y: -10.35,
                a: .42
            },
            26: {
                x: -10.05,
                y: -10.75,
                sx: 1.02,
                sy: 1.02,
                a: .44
            },
            27: {
                x: -10.45,
                y: -11.15,
                sx: 1.021,
                sy: 1.021,
                a: .46
            },
            28: {
                x: -10.85,
                y: -11.6,
                sx: 1.022,
                sy: 1.022,
                a: .47
            },
            29: {
                x: -11.25,
                y: -12,
                sx: 1.023,
                sy: 1.023,
                a: .49
            },
            30: {
                x: -11.6,
                y: -12.4,
                a: .51
            },
            31: {
                x: -12,
                y: -12.8,
                sx: 1.024,
                sy: 1.024,
                a: .53
            },
            32: {
                x: -12.4,
                y: -13.25,
                sx: 1.025,
                sy: 1.025,
                a: .54
            },
            33: {
                x: -12.8,
                y: -13.65,
                sx: 1.026,
                sy: 1.026,
                a: .56
            },
            34: {
                x: -13.15,
                y: -14.05,
                a: .58
            },
            35: {
                x: -13.55,
                y: -14.5,
                sx: 1.027,
                sy: 1.027,
                a: .59
            },
            36: {
                x: -13.95,
                y: -14.9,
                sx: 1.028,
                sy: 1.028,
                a: .61
            },
            37: {
                x: -14.35,
                y: -15.3,
                sx: 1.029,
                sy: 1.029,
                a: .63
            },
            38: {
                x: -14.7,
                y: -15.75,
                sx: 1.03,
                sy: 1.03,
                a: .64
            },
            39: {
                x: -15.1,
                y: -16.15,
                a: .66
            },
            40: {
                x: -15.5,
                y: -16.55,
                sx: 1.031,
                sy: 1.031,
                a: .68
            },
            41: {
                x: -15.9,
                y: -16.95,
                sx: 1.032,
                sy: 1.032,
                a: .7
            },
            42: {
                x: -16.25,
                y: -17.4,
                sx: 1.033,
                sy: 1.033,
                a: .71
            },
            43: {
                x: -16.65,
                y: -17.8,
                a: .73
            },
            44: {
                x: -17.05,
                y: -18.2,
                sx: 1.034,
                sy: 1.034,
                a: .75
            },
            45: {
                x: -17.45,
                y: -18.65,
                sx: 1.035,
                sy: 1.035,
                a: .76
            },
            46: {
                x: -17.85,
                y: -19.05,
                sx: 1.036,
                sy: 1.036,
                a: .78
            },
            47: {
                x: -18.2,
                y: -19.45,
                sx: 1.037,
                sy: 1.037,
                a: .8
            },
            48: {
                x: -18.6,
                y: -19.85,
                a: .81
            },
            49: {
                x: -19,
                y: -20.3,
                sx: 1.038,
                sy: 1.038,
                a: .83
            },
            50: {
                x: -19.4,
                y: -20.7,
                sx: 1.039,
                sy: 1.039,
                a: .85
            },
            51: {
                x: -19.8,
                y: -21.1,
                sx: 1.04,
                sy: 1.04,
                a: .86
            },
            52: {
                x: -20.15,
                y: -21.55,
                a: .88
            },
            53: {
                x: -20.55,
                y: -21.95,
                sx: 1.041,
                sy: 1.041,
                a: .9
            },
            54: {
                x: -20.95,
                y: -22.35,
                sx: 1.042,
                sy: 1.042,
                a: .91
            },
            55: {
                x: -21.3,
                y: -22.75,
                sx: 1.043,
                sy: 1.043,
                a: .93
            },
            56: {
                x: -21.7,
                y: -23.2,
                sx: 1.044,
                sy: 1.044,
                a: .95
            },
            57: {
                x: -22.1,
                y: -23.6,
                a: .96
            },
            58: {
                x: -22.5,
                y: -24,
                sx: 1.045,
                sy: 1.045,
                a: .98
            },
            59: {
                x: -22.9,
                y: -24.45,
                sx: 1.046,
                sy: 1.046,
                a: 1
            },
            60: {
                x: -23.266,
                y: -24.818,
                sx: 1.047,
                sy: 1.047,
                a: .98
            },
            61: {
                x: -23.633,
                y: -25.235,
                a: .96
            },
            62: {
                x: -24,
                y: -25.603,
                sx: 1.048,
                sy: 1.048,
                a: .95
            },
            63: {
                x: -24.416,
                y: -26.021,
                sx: 1.049,
                sy: 1.049,
                a: .93
            },
            64: {
                x: -24.783,
                y: -26.439,
                sx: 1.05,
                sy: 1.05,
                a: .92
            },
            65: {
                x: -25.15,
                y: -26.857,
                a: .9
            },
            66: {
                x: -25.566,
                y: -27.274,
                sx: 1.051,
                sy: 1.051,
                a: .88
            },
            67: {
                x: -25.933,
                y: -27.693,
                sx: 1.052,
                sy: 1.052,
                a: .87
            },
            68: {
                x: -26.3,
                y: -28.06,
                sx: 1.053,
                sy: 1.053,
                a: .85
            },
            69: {
                x: -26.717,
                y: -28.478,
                a: .83
            },
            70: {
                x: -27.084,
                y: -28.896,
                sx: 1.054,
                sy: 1.054,
                a: .82
            },
            71: {
                x: -27.45,
                y: -29.314,
                sx: 1.055,
                sy: 1.055,
                a: .8
            },
            72: {
                x: -27.867,
                y: -29.682,
                sx: 1.056,
                sy: 1.056,
                a: .79
            },
            73: {
                x: -28.234,
                y: -30.1,
                sx: 1.057,
                sy: 1.057,
                a: .77
            },
            74: {
                x: -28.601,
                y: -30.517,
                a: .75
            },
            75: {
                x: -29.017,
                y: -30.935,
                sx: 1.058,
                sy: 1.058,
                a: .73
            },
            76: {
                x: -29.384,
                y: -31.353,
                sx: 1.059,
                sy: 1.059,
                a: .71
            },
            77: {
                x: -29.751,
                y: -31.721,
                sx: 1.06,
                sy: 1.06,
                a: .7
            },
            78: {
                x: -30.167,
                y: -32.139,
                a: .68
            },
            79: {
                x: -30.534,
                y: -32.557,
                sx: 1.061,
                sy: 1.061,
                a: .67
            },
            80: {
                x: -30.901,
                y: -32.975,
                sx: 1.062,
                sy: 1.062,
                a: .65
            },
            81: {
                x: -31.318,
                y: -33.392,
                sx: 1.063,
                sy: 1.063,
                a: .63
            },
            82: {
                x: -31.684,
                y: -33.76,
                a: .62
            },
            83: {
                x: -32.051,
                y: -34.178,
                sx: 1.064,
                sy: 1.064,
                a: .6
            },
            84: {
                x: -32.468,
                y: -34.596,
                sx: 1.065,
                sy: 1.065,
                a: .58
            },
            85: {
                x: -32.835,
                y: -35.014,
                sx: 1.066,
                sy: 1.066,
                a: .57
            },
            86: {
                x: -33.201,
                y: -35.432,
                a: .55
            },
            87: {
                x: -33.618,
                y: -35.8,
                sx: 1.067,
                sy: 1.067,
                a: .54
            },
            88: {
                x: -33.985,
                y: -36.217,
                sx: 1.068,
                sy: 1.068,
                a: .52
            },
            89: {
                x: -34.351,
                y: -36.635,
                sx: 1.069,
                sy: 1.069,
                a: .5
            },
            90: {
                x: -34.818,
                y: -37.053,
                sx: 1.07,
                sy: 1.07,
                a: .48
            },
            91: {
                x: -35.185,
                y: -37.471,
                a: .46
            },
            92: {
                x: -35.551,
                y: -37.889,
                sx: 1.071,
                sy: 1.071,
                a: .45
            },
            93: {
                x: -35.968,
                y: -38.307,
                sx: 1.072,
                sy: 1.072,
                a: .43
            },
            94: {
                x: -36.335,
                y: -38.725,
                sx: 1.073,
                sy: 1.073,
                a: .42
            },
            95: {
                x: -36.702,
                y: -39.142,
                a: .4
            },
            96: {
                x: -37.118,
                y: -39.51,
                sx: 1.074,
                sy: 1.074,
                a: .38
            },
            97: {
                x: -37.485,
                y: -39.928,
                sx: 1.075,
                sy: 1.075,
                a: .37
            },
            98: {
                x: -37.852,
                y: -40.346,
                sx: 1.076,
                sy: 1.076,
                a: .35
            },
            99: {
                x: -38.269,
                y: -40.764,
                a: .33
            },
            100: {
                x: -38.636,
                y: -41.182,
                sx: 1.077,
                sy: 1.077,
                a: .32
            },
            101: {
                x: -39.002,
                y: -41.6,
                sx: 1.078,
                sy: 1.078,
                a: .3
            },
            102: {
                x: -39.419,
                y: -41.967,
                sx: 1.079,
                sy: 1.079,
                a: .29
            },
            103: {
                x: -39.786,
                y: -42.385,
                a: .27
            },
            104: {
                x: -40.152,
                y: -42.803,
                sx: 1.08,
                sy: 1.08,
                a: .25
            },
            105: {
                x: -40.569,
                y: -43.221,
                sx: 1.081,
                sy: 1.081,
                a: .23
            },
            106: {
                x: -40.936,
                y: -43.589,
                sx: 1.082,
                sy: 1.082,
                a: .21
            },
            107: {
                x: -41.302,
                y: -44.007,
                a: .2
            },
            108: {
                x: -41.719,
                y: -44.424,
                sx: 1.083,
                sy: 1.083,
                a: .18
            },
            109: {
                x: -42.086,
                y: -44.842,
                sx: 1.084,
                sy: 1.084,
                a: .17
            },
            110: {
                x: -42.453,
                y: -45.26,
                sx: 1.085,
                sy: 1.085,
                a: .15
            },
            111: {
                x: -42.869,
                y: -45.628,
                sx: 1.086,
                sy: 1.086,
                a: .13
            },
            112: {
                x: -43.236,
                y: -46.046,
                a: .12
            },
            113: {
                x: -43.603,
                y: -46.464,
                sx: 1.087,
                sy: 1.087,
                a: .1
            },
            114: {
                x: -44.02,
                y: -46.882,
                sx: 1.088,
                sy: 1.088,
                a: .08
            },
            115: {
                x: -44.386,
                y: -47.3,
                sx: 1.089,
                sy: 1.089,
                a: .07
            },
            116: {
                x: -44.753,
                y: -47.668,
                a: .05
            },
            117: {
                x: -45.17,
                y: -48.086,
                sx: 1.09,
                sy: 1.09,
                a: .04
            },
            118: {
                x: -45.536,
                y: -48.503,
                sx: 1.091,
                sy: 1.091,
                a: .02
            },
            119: {
                x: -45.95,
                y: -48.9,
                sx: 1.092,
                sy: 1.092,
                a: 0
            }
        }).addTimedChild(instance1, 0, 120, {
            0: {
                x: 167.55,
                y: 1345.65,
                sx: 1.047,
                sy: 1.047,
                kx: 3.424,
                ky: -.283,
                a: .98
            },
            1: {
                x: 167.375,
                y: 1346.156,
                a: .96
            },
            2: {
                x: 167.119,
                y: 1346.689,
                sx: 1.048,
                sy: 1.048,
                a: .95
            },
            3: {
                x: 166.821,
                y: 1347.177,
                sx: 1.049,
                sy: 1.049,
                a: .93
            },
            4: {
                x: 166.567,
                y: 1347.631,
                sx: 1.05,
                sy: 1.05,
                a: .91
            },
            5: {
                x: 166.292,
                y: 1348.187,
                a: .89
            },
            6: {
                x: 165.997,
                y: 1348.696,
                sx: 1.051,
                sy: 1.051,
                a: .88
            },
            7: {
                x: 165.792,
                y: 1349.199,
                sx: 1.052,
                sy: 1.052,
                a: .86
            },
            8: {
                x: 165.545,
                y: 1349.737,
                sx: 1.053,
                sy: 1.053,
                a: .84
            },
            9: {
                x: 165.29,
                y: 1350.241,
                sx: 1.054,
                sy: 1.054,
                a: .83
            },
            10: {
                x: 164.993,
                y: 1350.729,
                a: .81
            },
            11: {
                x: 164.788,
                y: 1351.233,
                sx: 1.055,
                sy: 1.055,
                a: .79
            },
            12: {
                x: 164.564,
                y: 1351.739,
                sx: 1.056,
                sy: 1.056,
                a: .78
            },
            13: {
                x: 164.234,
                y: 1352.254,
                sx: 1.057,
                sy: 1.057,
                a: .76
            },
            14: {
                x: 163.938,
                y: 1352.762,
                a: .74
            },
            15: {
                x: 163.714,
                y: 1353.269,
                sx: 1.058,
                sy: 1.058,
                a: .73
            },
            16: {
                x: 163.439,
                y: 1353.775,
                sx: 1.059,
                sy: 1.059,
                a: .71
            },
            17: {
                x: 163.214,
                y: 1354.331,
                sx: 1.06,
                sy: 1.06,
                a: .69
            },
            18: {
                x: 162.987,
                y: 1354.766,
                sx: 1.061,
                sy: 1.061,
                a: .68
            },
            19: {
                x: 162.712,
                y: 1355.273,
                a: .66
            },
            20: {
                x: 162.438,
                y: 1355.829,
                sx: 1.062,
                sy: 1.062,
                a: .64
            },
            21: {
                x: 162.113,
                y: 1356.335,
                sx: 1.063,
                sy: 1.063,
                a: .63
            },
            22: {
                x: 161.888,
                y: 1356.891,
                sx: 1.064,
                sy: 1.064,
                a: .61
            },
            23: {
                x: 161.611,
                y: 1357.326,
                a: .59
            },
            24: {
                x: 161.336,
                y: 1357.833,
                sx: 1.065,
                sy: 1.065,
                a: .57
            },
            25: {
                x: 161.161,
                y: 1358.389,
                sx: 1.066,
                sy: 1.066,
                a: .56
            },
            26: {
                x: 160.884,
                y: 1358.874,
                sx: 1.067,
                sy: 1.067,
                a: .54
            },
            27: {
                x: 160.609,
                y: 1359.38,
                sx: 1.068,
                sy: 1.068,
                a: .52
            },
            28: {
                x: 160.332,
                y: 1359.866,
                a: .51
            },
            29: {
                x: 160.107,
                y: 1360.372,
                sx: 1.069,
                sy: 1.069,
                a: .49
            },
            30: {
                x: 159.78,
                y: 1360.908,
                sx: 1.07,
                sy: 1.07,
                a: .47
            },
            31: {
                x: 159.505,
                y: 1361.414,
                sx: 1.071,
                sy: 1.071,
                a: .46
            },
            32: {
                x: 159.331,
                y: 1361.92,
                a: .44
            },
            33: {
                x: 159.053,
                y: 1362.406,
                sx: 1.072,
                sy: 1.072,
                a: .42
            },
            34: {
                x: 158.779,
                y: 1362.912,
                sx: 1.073,
                sy: 1.073,
                a: .41
            },
            35: {
                x: 158.554,
                y: 1363.468,
                sx: 1.074,
                sy: 1.074,
                a: .39
            },
            36: {
                x: 158.279,
                y: 1363.924,
                sx: 1.075,
                sy: 1.075,
                a: .37
            },
            37: {
                x: 158.054,
                y: 1364.48,
                a: .36
            },
            38: {
                x: 157.727,
                y: 1365.016,
                sx: 1.076,
                sy: 1.076,
                a: .34
            },
            39: {
                x: 157.502,
                y: 1365.472,
                sx: 1.077,
                sy: 1.077,
                a: .32
            },
            40: {
                x: 157.225,
                y: 1366.007,
                sx: 1.078,
                sy: 1.078,
                a: .3
            },
            41: {
                x: 156.95,
                y: 1366.463,
                a: .29
            },
            42: {
                x: 156.726,
                y: 1367.02,
                sx: 1.079,
                sy: 1.079,
                a: .27
            },
            43: {
                x: 156.448,
                y: 1367.505,
                sx: 1.08,
                sy: 1.08,
                a: .25
            },
            44: {
                x: 156.174,
                y: 1368.011,
                sx: 1.081,
                sy: 1.081,
                a: .24
            },
            45: {
                x: 155.949,
                y: 1368.567,
                sx: 1.082,
                sy: 1.082,
                a: .22
            },
            46: {
                x: 155.674,
                y: 1369.073,
                a: .2
            },
            47: {
                x: 155.4,
                y: 1369.579,
                sx: 1.083,
                sy: 1.083,
                a: .19
            },
            48: {
                x: 155.122,
                y: 1370.065,
                sx: 1.084,
                sy: 1.084,
                a: .17
            },
            49: {
                x: 154.895,
                y: 1370.551,
                sx: 1.085,
                sy: 1.085,
                a: .15
            },
            50: {
                x: 154.62,
                y: 1371.107,
                a: .14
            },
            51: {
                x: 154.346,
                y: 1371.613,
                sx: 1.086,
                sy: 1.086,
                a: .12
            },
            52: {
                x: 154.171,
                y: 1372.119,
                sx: 1.087,
                sy: 1.087,
                a: .1
            },
            53: {
                x: 153.893,
                y: 1372.605,
                sx: 1.088,
                sy: 1.088,
                a: .09
            },
            54: {
                x: 153.566,
                y: 1373.09,
                sx: 1.089,
                sy: 1.089,
                a: .07
            },
            55: {
                x: 153.341,
                y: 1373.596,
                a: .05
            },
            56: {
                x: 153.067,
                y: 1374.152,
                sx: 1.09,
                sy: 1.09,
                a: .04
            },
            57: {
                x: 152.842,
                y: 1374.659,
                sx: 1.091,
                sy: 1.091,
                a: .02
            },
            58: {
                x: 152.5,
                y: 1375.15,
                sx: 1.092,
                sy: 1.092,
                a: 0
            },
            59: {
                x: 182.95,
                y: 1315.35,
                sx: 1,
                sy: 1
            },
            60: {
                x: 182.787,
                y: 1315.933,
                sx: 1.001,
                sy: 1.001,
                a: .02
            },
            61: {
                x: 182.526,
                y: 1316.387,
                sx: 1.002,
                sy: 1.002,
                a: .04
            },
            62: {
                x: 182.213,
                y: 1316.92,
                a: .05
            },
            63: {
                x: 182.003,
                y: 1317.374,
                sx: 1.003,
                sy: 1.003,
                a: .07
            },
            64: {
                x: 181.745,
                y: 1317.898,
                sx: 1.004,
                sy: 1.004,
                a: .08
            },
            65: {
                x: 181.485,
                y: 1318.401,
                sx: 1.005,
                sy: 1.005,
                a: .1
            },
            66: {
                x: 181.224,
                y: 1318.855,
                a: .12
            },
            67: {
                x: 181.011,
                y: 1319.338,
                sx: 1.006,
                sy: 1.006,
                a: .13
            },
            68: {
                x: 180.701,
                y: 1319.842,
                sx: 1.007,
                sy: 1.007,
                a: .15
            },
            69: {
                x: 180.443,
                y: 1320.365,
                sx: 1.008,
                sy: 1.008,
                a: .17
            },
            70: {
                x: 180.183,
                y: 1320.819,
                a: .18
            },
            71: {
                x: 179.972,
                y: 1321.322,
                sx: 1.009,
                sy: 1.009,
                a: .2
            },
            72: {
                x: 179.712,
                y: 1321.826,
                sx: 1.01,
                sy: 1.01,
                a: .21
            },
            73: {
                x: 179.401,
                y: 1322.329,
                sx: 1.011,
                sy: 1.011,
                a: .23
            },
            74: {
                x: 179.141,
                y: 1322.883,
                a: .25
            },
            75: {
                x: 178.93,
                y: 1323.336,
                sx: 1.012,
                sy: 1.012,
                a: .27
            },
            76: {
                x: 178.67,
                y: 1323.84,
                sx: 1.013,
                sy: 1.013,
                a: .29
            },
            77: {
                x: 178.46,
                y: 1324.343,
                sx: 1.014,
                sy: 1.014,
                a: .3
            },
            78: {
                x: 178.199,
                y: 1324.847,
                a: .32
            },
            79: {
                x: 177.939,
                y: 1325.35,
                sx: 1.015,
                sy: 1.015,
                a: .33
            },
            80: {
                x: 177.678,
                y: 1325.804,
                sx: 1.016,
                sy: 1.016,
                a: .35
            },
            81: {
                x: 177.418,
                y: 1326.308,
                sx: 1.017,
                sy: 1.017,
                a: .37
            },
            82: {
                x: 177.158,
                y: 1326.811,
                sx: 1.018,
                sy: 1.018,
                a: .38
            },
            83: {
                x: 176.947,
                y: 1327.265,
                a: .4
            },
            84: {
                x: 176.637,
                y: 1327.818,
                sx: 1.019,
                sy: 1.019,
                a: .42
            },
            85: {
                x: 176.376,
                y: 1328.322,
                sx: 1.02,
                sy: 1.02,
                a: .43
            },
            86: {
                x: 176.166,
                y: 1328.825,
                sx: 1.021,
                sy: 1.021,
                a: .45
            },
            87: {
                x: 175.905,
                y: 1329.279,
                a: .46
            },
            88: {
                x: 175.645,
                y: 1329.832,
                sx: 1.022,
                sy: 1.022,
                a: .48
            },
            89: {
                x: 175.387,
                y: 1330.356,
                sx: 1.023,
                sy: 1.023,
                a: .5
            },
            90: {
                x: 175.077,
                y: 1330.809,
                sx: 1.024,
                sy: 1.024,
                a: .52
            },
            91: {
                x: 174.867,
                y: 1331.313,
                a: .54
            },
            92: {
                x: 174.606,
                y: 1331.767,
                sx: 1.025,
                sy: 1.025,
                a: .55
            },
            93: {
                x: 174.346,
                y: 1332.32,
                sx: 1.026,
                sy: 1.026,
                a: .57
            },
            94: {
                x: 174.135,
                y: 1332.774,
                sx: 1.027,
                sy: 1.027,
                a: .58
            },
            95: {
                x: 173.875,
                y: 1333.277,
                a: .6
            },
            96: {
                x: 173.614,
                y: 1333.781,
                sx: 1.028,
                sy: 1.028,
                a: .62
            },
            97: {
                x: 173.354,
                y: 1334.234,
                sx: 1.029,
                sy: 1.029,
                a: .63
            },
            98: {
                x: 173.144,
                y: 1334.738,
                sx: 1.03,
                sy: 1.03,
                a: .65
            },
            99: {
                x: 172.883,
                y: 1335.291,
                sx: 1.031,
                sy: 1.031,
                a: .67
            },
            100: {
                x: 172.573,
                y: 1335.795,
                a: .68
            },
            101: {
                x: 172.312,
                y: 1336.298,
                sx: 1.032,
                sy: 1.032,
                a: .7
            },
            102: {
                x: 172.102,
                y: 1336.752,
                sx: 1.033,
                sy: 1.033,
                a: .71
            },
            103: {
                x: 171.842,
                y: 1337.255,
                sx: 1.034,
                sy: 1.034,
                a: .73
            },
            104: {
                x: 171.581,
                y: 1337.759,
                a: .75
            },
            105: {
                x: 171.321,
                y: 1338.262,
                sx: 1.035,
                sy: 1.035,
                a: .77
            },
            106: {
                x: 171.06,
                y: 1338.716,
                sx: 1.036,
                sy: 1.036,
                a: .79
            },
            107: {
                x: 170.8,
                y: 1339.219,
                sx: 1.037,
                sy: 1.037,
                a: .8
            },
            108: {
                x: 170.539,
                y: 1339.723,
                a: .82
            },
            109: {
                x: 170.279,
                y: 1340.227,
                sx: 1.038,
                sy: 1.038,
                a: .83
            },
            110: {
                x: 170.071,
                y: 1340.75,
                sx: 1.039,
                sy: 1.039,
                a: .85
            },
            111: {
                x: 169.761,
                y: 1341.204,
                sx: 1.04,
                sy: 1.04,
                a: .87
            },
            112: {
                x: 169.501,
                y: 1341.707,
                a: .88
            },
            113: {
                x: 169.29,
                y: 1342.311,
                sx: 1.041,
                sy: 1.041,
                a: .9
            },
            114: {
                x: 169.1,
                y: 1342.761,
                sx: 1.042,
                sy: 1.042,
                a: .92
            },
            115: {
                x: 168.839,
                y: 1343.265,
                sx: 1.043,
                sy: 1.043,
                a: .93
            },
            116: {
                x: 168.579,
                y: 1343.719,
                a: .95
            },
            117: {
                x: 168.268,
                y: 1344.222,
                sx: 1.044,
                sy: 1.044,
                a: .96
            },
            118: {
                x: 168.058,
                y: 1344.676,
                sx: 1.045,
                sy: 1.045,
                a: .98
            },
            119: {
                x: 167.8,
                y: 1345.2,
                sx: 1.046,
                sy: 1.046,
                a: 1
            }
        }), this.labels.forEach((label, index) => {
            var labelEndPosition = this.labels[index + 1] ? this.labels[index + 1].position - 1 : this._totalFrames - 1;
            this.addAction(() => this.emit("label_end", this.currentLabel), labelEndPosition)
        })
    }), lib.smokeLoop = MovieClip.extend(function() {
        MovieClip.call(this, {
            duration: 105
        });
        var instance1 = new Sprite(fromFrame("fxSmokeBIgLoop_00000")),
            instance2 = new Sprite(fromFrame("fxSmokeBIgLoop_00003")),
            instance3 = new Sprite(fromFrame("fxSmokeBIgLoop_00006")),
            instance4 = new Sprite(fromFrame("fxSmokeBIgLoop_00009")),
            instance5 = new Sprite(fromFrame("fxSmokeBIgLoop_00012")),
            instance6 = new Sprite(fromFrame("fxSmokeBIgLoop_00015")),
            instance7 = new Sprite(fromFrame("fxSmokeBIgLoop_00018")),
            instance8 = new Sprite(fromFrame("fxSmokeBIgLoop_00021")),
            instance9 = new Sprite(fromFrame("fxSmokeBIgLoop_00024")),
            instance10 = new Sprite(fromFrame("fxSmokeBIgLoop_00027")),
            instance11 = new Sprite(fromFrame("fxSmokeBIgLoop_00030")),
            instance12 = new Sprite(fromFrame("fxSmokeBIgLoop_00033")),
            instance13 = new Sprite(fromFrame("fxSmokeBIgLoop_00036")),
            instance14 = new Sprite(fromFrame("fxSmokeBIgLoop_00039")),
            instance15 = new Sprite(fromFrame("fxSmokeBIgLoop_00042")),
            instance16 = new Sprite(fromFrame("fxSmokeBIgLoop_00045")),
            instance17 = new Sprite(fromFrame("fxSmokeBIgLoop_00048")),
            instance18 = new Sprite(fromFrame("fxSmokeBIgLoop_00051")),
            instance19 = new Sprite(fromFrame("fxSmokeBIgLoop_00054")),
            instance20 = new Sprite(fromFrame("fxSmokeBIgLoop_00057")),
            instance21 = new Sprite(fromFrame("fxSmokeBIgLoop_00060"));
        this.addTimedChild(instance1, 0, 5, {
            0: {}
        }).addTimedChild(instance2, 5, 5, {
            5: {}
        }).addTimedChild(instance3, 10, 5, {
            10: {}
        }).addTimedChild(instance4, 15, 5, {
            15: {}
        }).addTimedChild(instance5, 20, 5, {
            20: {}
        }).addTimedChild(instance6, 25, 5, {
            25: {}
        }).addTimedChild(instance7, 30, 5, {
            30: {}
        }).addTimedChild(instance8, 35, 5, {
            35: {}
        }).addTimedChild(instance9, 40, 5, {
            40: {}
        }).addTimedChild(instance10, 45, 5, {
            45: {}
        }).addTimedChild(instance11, 50, 5, {
            50: {}
        }).addTimedChild(instance12, 55, 5, {
            55: {}
        }).addTimedChild(instance13, 60, 5, {
            60: {}
        }).addTimedChild(instance14, 65, 5, {
            65: {}
        }).addTimedChild(instance15, 70, 5, {
            70: {}
        }).addTimedChild(instance16, 75, 5, {
            75: {}
        }).addTimedChild(instance17, 80, 5, {
            80: {}
        }).addTimedChild(instance18, 85, 5, {
            85: {}
        }).addTimedChild(instance19, 90, 5, {
            90: {}
        }).addTimedChild(instance20, 95, 5, {
            95: {}
        }).addTimedChild(instance21, 100, 5), this.labels.forEach((label, index) => {
            var labelEndPosition = this.labels[index + 1] ? this.labels[index + 1].position - 1 : this._totalFrames - 1;
            this.addAction(() => this.emit("label_end", this.currentLabel), labelEndPosition)
        })
    }), lib.special = Container.extend(function() {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("sceneSlotSpecial")).setTransform(-735, -785);
        this.addChild(instance1)
    }), lib.loadingScreen = MovieClip.extend(function() {
        MovieClip.call(this, {
            duration: 210,
            labels: {
                init: 0,
                show: 9
            }
        });
        var instance15 = new lib.special;
        this[instance15.name = "special"] = instance15;
        var instance14 = (new lib.smokeLoop).setTransform(768.6, -363.85, 1.939, 1.939, 0, .108, 3.033).setAlpha(.3),
            instance13 = (new lib.smokeLoop).setTransform(429.5, -386.5, 1.999, 1.999).setAlpha(.3),
            instance12 = (new lib.bigWinSmoke).setTransform(268, 494, .66, .66, -1.571).setAlpha(.3),
            instance11 = new lib.tile14Big;
        this[instance11.name = "tile14"] = instance11;
        var instance10 = new lib.tile15Big;
        this[instance10.name = "tile15"] = instance10;
        var instance9 = new lib.bigWinSumShadow,
            instance8 = new lib.tile16Big;
        this[instance8.name = "tile16"] = instance8;
        var instance7 = new lib.tile17Big;
        this[instance7.name = "tile17"] = instance7;
        var instance6 = new lib.bigWinSumShadow,
            instance5 = new lib.tile18Big;
        this[instance5.name = "tile18"] = instance5;
        var instance4 = new lib.bigWinSumShadow,
            instance3 = new lib.paytable1Plate,
            instance51 = new lib.paytable1PlateShine1,
            instance50 = new lib.paytable1PlateShine1,
            instance49 = new lib.paytable1PlateShine1,
            instance48 = new lib.paytable1PlateShine1,
            instance47 = new lib.paytable1PaleteGlow,
            instance46 = new lib.paytable1PaleteGlow,
            instance45 = new lib.paytable1PaleteGlow,
            instance44 = new lib.paytable1PaleteGlow,
            instance39 = new lib.paytable1Text,
            instance38 = new lib.paytable1TextAdd,
            instance41 = new lib.smoke,
            instance37 = new lib.smoke,
            instance35 = new lib.smoke,
            instance36 = new lib.smoke,
            instance40 = new lib.smoke2,
            instance34 = new lib.paytablePaleteGlowUp,
            instance43 = new lib.tile18Spark,
            instance42 = new lib.tile18Spark,
            instance2 = (new lib.logoPlate).setTransform(281, -4),
            instance1 = new lib.logoText,
            instance27 = new lib.paytable1PlateShine1,
            instance26 = new lib.paytable1PlateShine1,
            instance20 = new lib.paytable1PlateShine1,
            instance33 = new lib.paytable1PlateShine1,
            instance25 = new lib.paytable1PaleteGlow,
            instance24 = new lib.paytable1PaleteGlow,
            instance23 = new lib.logoPlateShine,
            instance19 = new lib.paytable1PaleteGlow,
            instance31 = new lib.logoPlateShine,
            instance32 = new lib.paytable1PaleteGlow,
            instance18 = new lib.winLineGlowTile1,
            instance17 = new lib.logoTextAdd,
            instance30 = new lib.tile18Spark,
            instance22 = new lib.smoke,
            instance21 = new lib.smoke,
            instance16 = new lib.smoke2,
            instance29 = new lib.tile18Spark,
            instance28 = new lib.tile18Spark;
        this.addTimedChild(instance15).addTimedChild(instance14).addTimedChild(instance13).addTimedChild(instance12).addTimedChild(instance11, 0, 210, {
            0: {
                x: 328.95,
                y: 190.25,
                sx: .9,
                sy: .9
            },
            25: {
                x: 328.965,
                y: 190.259
            },
            26: {
                x: 328.915,
                y: 190.238
            },
            27: {
                x: 328.801,
                y: 190.137
            },
            28: {
                x: 328.726,
                y: 190.06,
                sx: .901,
                sy: .901
            },
            29: {
                x: 328.582,
                y: 189.9
            },
            30: {
                x: 328.422,
                y: 189.76,
                sx: .902,
                sy: .902
            },
            31: {
                x: 328.193,
                y: 189.588
            },
            32: {
                x: 327.954,
                y: 189.389,
                sx: .903,
                sy: .903
            },
            33: {
                x: 327.645,
                y: 189.107,
                sx: .904,
                sy: .904
            },
            34: {
                x: 327.377,
                y: 188.799,
                sx: .905,
                sy: .905
            },
            35: {
                x: 327.038,
                y: 188.558,
                sx: .906,
                sy: .906
            },
            36: {
                x: 326.64,
                y: 188.24,
                sx: .907,
                sy: .907
            },
            37: {
                x: 326.216,
                y: 187.887,
                sx: .908,
                sy: .908
            },
            38: {
                x: 325.838,
                y: 187.46,
                sx: .909,
                sy: .909
            },
            39: {
                x: 325.39,
                y: 187.05,
                sx: .911,
                sy: .911
            },
            40: {
                x: 324.872,
                y: 186.608,
                sx: .912,
                sy: .912
            },
            41: {
                x: 324.299,
                y: 186.091,
                sx: .914,
                sy: .914
            },
            42: {
                x: 323.752,
                y: 185.59,
                sx: .915,
                sy: .915
            },
            43: {
                x: 323.144,
                y: 185.061,
                sx: .917,
                sy: .917
            },
            44: {
                x: 322.567,
                y: 184.55,
                sx: .919,
                sy: .919
            },
            45: {
                x: 321.874,
                y: 183.91,
                sx: .921,
                sy: .921
            },
            46: {
                x: 321.222,
                y: 183.342,
                sx: .923,
                sy: .923
            },
            47: {
                x: 320.45,
                y: 182.692,
                sx: .925,
                sy: .925
            },
            48: {
                x: 319.713,
                y: 182.012,
                sx: .927,
                sy: .927
            },
            49: {
                x: 318.912,
                y: 181.303,
                sx: .93,
                sy: .93
            },
            50: {
                x: 318.09,
                y: 180.561,
                sx: .932,
                sy: .932
            },
            51: {
                x: 317.214,
                y: 179.845,
                sx: .935,
                sy: .935
            },
            52: {
                x: 316.357,
                y: 178.991,
                sx: .937,
                sy: .937
            },
            53: {
                x: 315.446,
                y: 178.213,
                sx: .94,
                sy: .94
            },
            54: {
                x: 314.465,
                y: 177.352,
                sx: .943,
                sy: .943
            },
            55: {
                x: 313.469,
                y: 176.462,
                sx: .945,
                sy: .945
            },
            56: {
                x: 312.463,
                y: 175.595,
                sx: .948,
                sy: .948
            },
            57: {
                x: 311.478,
                y: 174.639,
                sx: .952,
                sy: .952
            },
            58: {
                x: 310.467,
                y: 173.769,
                sx: .954,
                sy: .954
            },
            59: {
                x: 309.476,
                y: 172.882,
                sx: .957,
                sy: .957
            },
            60: {
                x: 308.5,
                y: 172.024,
                sx: .96,
                sy: .96
            },
            61: {
                x: 307.584,
                y: 171.243,
                sx: .963,
                sy: .963
            },
            62: {
                x: 306.732,
                y: 170.441,
                sx: .965,
                sy: .965
            },
            63: {
                x: 305.851,
                y: 169.673,
                sx: .968,
                sy: .968
            },
            64: {
                x: 305.034,
                y: 168.934,
                sx: .97,
                sy: .97
            },
            65: {
                x: 304.233,
                y: 168.224,
                sx: .973,
                sy: .973
            },
            66: {
                x: 303.496,
                y: 167.544,
                sx: .975,
                sy: .975
            },
            67: {
                x: 302.724,
                y: 166.894,
                sx: .977,
                sy: .977
            },
            68: {
                x: 302.067,
                y: 166.324,
                sx: .979,
                sy: .979
            },
            69: {
                x: 301.379,
                y: 165.686,
                sx: .981,
                sy: .981
            },
            70: {
                x: 300.802,
                y: 165.175,
                sx: .983,
                sy: .983
            },
            71: {
                x: 300.194,
                y: 164.647,
                sx: .985,
                sy: .985
            },
            72: {
                x: 299.647,
                y: 164.145,
                sx: .986,
                sy: .986
            },
            73: {
                x: 299.069,
                y: 163.626,
                sx: .988,
                sy: .988
            },
            74: {
                x: 298.556,
                y: 163.187,
                sx: .989,
                sy: .989
            },
            75: {
                x: 298.158,
                y: 162.777,
                sx: .991,
                sy: .991
            },
            76: {
                x: 297.725,
                y: 162.347,
                sx: .992,
                sy: .992
            },
            77: {
                x: 297.307,
                y: 161.997,
                sx: .993,
                sy: .993
            },
            78: {
                x: 296.908,
                y: 161.679,
                sx: .994,
                sy: .994
            },
            79: {
                x: 296.569,
                y: 161.438,
                sx: .995,
                sy: .995
            },
            80: {
                x: 296.301,
                y: 161.13,
                sx: .996,
                sy: .996
            },
            81: {
                x: 295.987,
                y: 160.845,
                sx: .997,
                sy: .997
            },
            82: {
                x: 295.753,
                y: 160.649,
                sx: .998,
                sy: .998
            },
            83: {
                x: 295.574,
                y: 160.477
            },
            84: {
                x: 295.364,
                y: 160.337,
                sx: .999,
                sy: .999
            },
            85: {
                x: 295.22,
                y: 160.177
            },
            86: {
                x: 295.141,
                y: 160.097,
                sx: 1,
                sy: 1
            },
            87: {
                x: 295.026,
                y: 159.996
            },
            88: {
                x: 294.981,
                y: 159.978
            },
            89: {
                x: 295,
                y: 160
            }
        }).addTimedChild(instance10, 0, 210, {
            0: {
                x: 725.85,
                y: 253.25,
                sx: .9,
                sy: .9
            },
            25: {
                x: 725.833,
                y: 253.262
            },
            26: {
                x: 725.894,
                y: 253.25
            },
            27: {
                x: 725.932,
                y: 253.166
            },
            28: {
                x: 725.959,
                y: 253.113,
                sx: .901,
                sy: .901
            },
            29: {
                x: 725.953,
                y: 252.982
            },
            30: {
                x: 726.023,
                y: 252.879,
                sx: .902,
                sy: .902
            },
            31: {
                x: 726.061,
                y: 252.749
            },
            32: {
                x: 726.187,
                y: 252.55,
                sx: .903,
                sy: .903
            },
            33: {
                x: 726.279,
                y: 252.374,
                sx: .904,
                sy: .904
            },
            34: {
                x: 726.36,
                y: 252.179,
                sx: .905,
                sy: .905
            },
            35: {
                x: 726.457,
                y: 251.958,
                sx: .906,
                sy: .906
            },
            36: {
                x: 726.543,
                y: 251.667,
                sx: .907,
                sy: .907
            },
            37: {
                x: 726.685,
                y: 251.395,
                sx: .908,
                sy: .908
            },
            38: {
                x: 726.776,
                y: 251.108,
                sx: .909,
                sy: .909
            },
            39: {
                x: 726.934,
                y: 250.795,
                sx: .911,
                sy: .911
            },
            40: {
                x: 727.108,
                y: 250.454,
                sx: .912,
                sy: .912
            },
            41: {
                x: 727.231,
                y: 250.099,
                sx: .914,
                sy: .914
            },
            42: {
                x: 727.41,
                y: 249.713,
                sx: .915,
                sy: .915
            },
            43: {
                x: 727.578,
                y: 249.307,
                sx: .917,
                sy: .917
            },
            44: {
                x: 727.762,
                y: 248.875,
                sx: .919,
                sy: .919
            },
            45: {
                x: 727.974,
                y: 248.42,
                sx: .921,
                sy: .921
            },
            46: {
                x: 728.174,
                y: 247.946,
                sx: .923,
                sy: .923
            },
            47: {
                x: 728.391,
                y: 247.445,
                sx: .925,
                sy: .925
            },
            48: {
                x: 728.635,
                y: 246.921,
                sx: .927,
                sy: .927
            },
            49: {
                x: 728.857,
                y: 246.374,
                sx: .93,
                sy: .93
            },
            50: {
                x: 729.095,
                y: 245.8,
                sx: .932,
                sy: .932
            },
            51: {
                x: 729.333,
                y: 245.261,
                sx: .935,
                sy: .935
            },
            52: {
                x: 729.615,
                y: 244.637,
                sx: .937,
                sy: .937
            },
            53: {
                x: 729.897,
                y: 243.999,
                sx: .94,
                sy: .94
            },
            54: {
                x: 730.145,
                y: 243.383,
                sx: .943,
                sy: .943
            },
            55: {
                x: 730.421,
                y: 242.645,
                sx: .945,
                sy: .945
            },
            56: {
                x: 730.736,
                y: 241.937,
                sx: .948,
                sy: .948
            },
            57: {
                x: 731.045,
                y: 241.295,
                sx: .952,
                sy: .952
            },
            58: {
                x: 731.398,
                y: 240.583,
                sx: .954,
                sy: .954
            },
            59: {
                x: 731.635,
                y: 239.899,
                sx: .957,
                sy: .957
            },
            60: {
                x: 731.944,
                y: 239.237,
                sx: .96,
                sy: .96
            },
            61: {
                x: 732.215,
                y: 238.595,
                sx: .963,
                sy: .963
            },
            62: {
                x: 732.458,
                y: 237.975,
                sx: .965,
                sy: .965
            },
            63: {
                x: 732.735,
                y: 237.432,
                sx: .968,
                sy: .968
            },
            64: {
                x: 732.984,
                y: 236.862,
                sx: .97,
                sy: .97
            },
            65: {
                x: 733.206,
                y: 236.315,
                sx: .973,
                sy: .973
            },
            66: {
                x: 733.451,
                y: 235.791,
                sx: .975,
                sy: .975
            },
            67: {
                x: 733.667,
                y: 235.29,
                sx: .977,
                sy: .977
            },
            68: {
                x: 733.856,
                y: 234.812,
                sx: .979,
                sy: .979
            },
            69: {
                x: 734.079,
                y: 234.361,
                sx: .981,
                sy: .981
            },
            70: {
                x: 734.263,
                y: 233.929,
                sx: .983,
                sy: .983
            },
            71: {
                x: 734.431,
                y: 233.573,
                sx: .985,
                sy: .985
            },
            72: {
                x: 734.61,
                y: 233.137,
                sx: .986,
                sy: .986
            },
            73: {
                x: 734.773,
                y: 232.778,
                sx: .988,
                sy: .988
            },
            74: {
                x: 734.908,
                y: 232.491,
                sx: .989,
                sy: .989
            },
            75: {
                x: 735.065,
                y: 232.128,
                sx: .991,
                sy: .991
            },
            76: {
                x: 735.145,
                y: 231.837,
                sx: .992,
                sy: .992
            },
            77: {
                x: 735.298,
                y: 231.569,
                sx: .993,
                sy: .993
            },
            78: {
                x: 735.384,
                y: 231.328,
                sx: .994,
                sy: .994
            },
            79: {
                x: 735.481,
                y: 231.057,
                sx: .995,
                sy: .995
            },
            80: {
                x: 735.562,
                y: 230.862,
                sx: .996,
                sy: .996
            },
            81: {
                x: 735.644,
                y: 230.682,
                sx: .997,
                sy: .997
            },
            82: {
                x: 735.781,
                y: 230.487,
                sx: .998,
                sy: .998
            },
            83: {
                x: 735.818,
                y: 230.357
            },
            84: {
                x: 735.889,
                y: 230.254,
                sx: .999,
                sy: .999
            },
            85: {
                x: 735.882,
                y: 230.123
            },
            86: {
                x: 735.898,
                y: 230.066,
                sx: 1,
                sy: 1
            },
            87: {
                x: 735.936,
                y: 229.982
            },
            88: {
                x: 735.958,
                y: 229.974
            },
            89: {
                x: 736,
                y: 230
            }
        }).addTimedChild(instance9, 0, 210, {
            0: {
                x: 54.5,
                y: 300.05,
                sx: .9,
                sy: .9
            },
            25: {
                x: 54.502,
                y: 300.064
            },
            26: {
                x: 54.411,
                y: 300.009
            },
            27: {
                x: 54.275,
                y: 299.987
            },
            28: {
                x: 54.046,
                y: 299.902,
                sx: .901,
                sy: .901
            },
            29: {
                x: 53.772,
                y: 299.844
            },
            30: {
                x: 53.453,
                y: 299.768,
                sx: .902,
                sy: .902
            },
            31: {
                x: 53.04,
                y: 299.669
            },
            32: {
                x: 52.583,
                y: 299.507,
                sx: .903,
                sy: .903
            },
            33: {
                x: 52.081,
                y: 299.373,
                sx: .904,
                sy: .904
            },
            34: {
                x: 51.486,
                y: 299.175,
                sx: .905,
                sy: .905
            },
            35: {
                x: 50.846,
                y: 299.055,
                sx: .906,
                sy: .906
            },
            36: {
                x: 50.112,
                y: 298.871,
                sx: .907,
                sy: .907
            },
            37: {
                x: 49.383,
                y: 298.61,
                sx: .908,
                sy: .908
            },
            38: {
                x: 48.561,
                y: 298.39,
                sx: .909,
                sy: .909
            },
            39: {
                x: 47.644,
                y: 298.148,
                sx: .911,
                sy: .911
            },
            40: {
                x: 46.733,
                y: 297.884,
                sx: .912,
                sy: .912
            },
            41: {
                x: 45.728,
                y: 297.56,
                sx: .914,
                sy: .914
            },
            42: {
                x: 44.628,
                y: 297.309,
                sx: .915,
                sy: .915
            },
            43: {
                x: 43.535,
                y: 296.996,
                sx: .917,
                sy: .917
            },
            44: {
                x: 42.296,
                y: 296.659,
                sx: .919,
                sy: .919
            },
            45: {
                x: 41.063,
                y: 296.305,
                sx: .921,
                sy: .921
            },
            46: {
                x: 39.737,
                y: 295.937,
                sx: .923,
                sy: .923
            },
            47: {
                x: 38.366,
                y: 295.546,
                sx: .925,
                sy: .925
            },
            48: {
                x: 36.951,
                y: 295.138,
                sx: .927,
                sy: .927
            },
            49: {
                x: 35.441,
                y: 294.712,
                sx: .93,
                sy: .93
            },
            50: {
                x: 33.887,
                y: 294.263,
                sx: .932,
                sy: .932
            },
            51: {
                x: 32.29,
                y: 293.806,
                sx: .935,
                sy: .935
            },
            52: {
                x: 30.596,
                y: 293.366,
                sx: .937,
                sy: .937
            },
            53: {
                x: 28.86,
                y: 292.868,
                sx: .94,
                sy: .94
            },
            54: {
                x: 27.079,
                y: 292.348,
                sx: .943,
                sy: .943
            },
            55: {
                x: 25.203,
                y: 291.859,
                sx: .945,
                sy: .945
            },
            56: {
                x: 23.285,
                y: 291.307,
                sx: .948,
                sy: .948
            },
            57: {
                x: 21.319,
                y: 290.724,
                sx: .952,
                sy: .952
            },
            58: {
                x: 19.4,
                y: 290.217,
                sx: .954,
                sy: .954
            },
            59: {
                x: 17.525,
                y: 289.683,
                sx: .957,
                sy: .957
            },
            60: {
                x: 15.695,
                y: 289.167,
                sx: .96,
                sy: .96
            },
            61: {
                x: 13.958,
                y: 288.664,
                sx: .963,
                sy: .963
            },
            62: {
                x: 12.315,
                y: 288.18,
                sx: .965,
                sy: .965
            },
            63: {
                x: 10.667,
                y: 287.768,
                sx: .968,
                sy: .968
            },
            64: {
                x: 9.114,
                y: 287.323,
                sx: .97,
                sy: .97
            },
            65: {
                x: 7.604,
                y: 286.897,
                sx: .973,
                sy: .973
            },
            66: {
                x: 6.189,
                y: 286.489,
                sx: .975,
                sy: .975
            },
            67: {
                x: 4.818,
                y: 286.099,
                sx: .977,
                sy: .977
            },
            68: {
                x: 3.491,
                y: 285.726,
                sx: .979,
                sy: .979
            },
            69: {
                x: 2.259,
                y: 285.376,
                sx: .981,
                sy: .981
            },
            70: {
                x: 1.07,
                y: 285.04,
                sx: .983,
                sy: .983
            },
            71: {
                x: -.073,
                y: 284.726,
                sx: .985,
                sy: .985
            },
            72: {
                x: -1.123,
                y: 284.475,
                sx: .986,
                sy: .986
            },
            73: {
                x: -2.179,
                y: 284.147,
                sx: .988,
                sy: .988
            },
            74: {
                x: -3.09,
                y: 283.887,
                sx: .989,
                sy: .989
            },
            75: {
                x: -4.006,
                y: 283.645,
                sx: .991,
                sy: .991
            },
            76: {
                x: -4.829,
                y: 283.421,
                sx: .992,
                sy: .992
            },
            77: {
                x: -5.558,
                y: 283.164,
                sx: .993,
                sy: .993
            },
            78: {
                x: -6.291,
                y: 282.981,
                sx: .994,
                sy: .994
            },
            79: {
                x: -6.931,
                y: 282.86,
                sx: .995,
                sy: .995
            },
            80: {
                x: -7.476,
                y: 282.663,
                sx: .996,
                sy: .996
            },
            81: {
                x: -8.029,
                y: 282.473,
                sx: .997,
                sy: .997
            },
            82: {
                x: -8.485,
                y: 282.366,
                sx: .998,
                sy: .998
            },
            83: {
                x: -8.848,
                y: 282.268
            },
            84: {
                x: -9.217,
                y: 282.192,
                sx: .999,
                sy: .999
            },
            85: {
                x: -9.491,
                y: 282.134
            },
            86: {
                x: -9.671,
                y: 282.043,
                sx: 1,
                sy: 1
            },
            87: {
                x: -9.857,
                y: 282.021
            },
            88: {
                x: -9.948,
                y: 281.972
            },
            89: {
                x: -10,
                y: 282
            }
        }).addTimedChild(instance8, 0, 210, {
            0: {
                x: 844.65,
                y: 860.75,
                sx: .9,
                sy: .9
            },
            25: {
                x: 844.652,
                y: 860.803
            },
            26: {
                x: 844.756,
                y: 860.86
            },
            27: {
                x: 844.814,
                y: 860.973
            },
            28: {
                x: 844.925,
                y: 861.191,
                sx: .901,
                sy: .901
            },
            29: {
                x: 844.989,
                y: 861.363
            },
            30: {
                x: 845.169,
                y: 861.704,
                sx: .902,
                sy: .902
            },
            31: {
                x: 845.289,
                y: 861.987,
                sx: .903,
                sy: .903
            },
            32: {
                x: 845.525,
                y: 862.339,
                sx: .904,
                sy: .904
            },
            33: {
                x: 845.765,
                y: 862.795
            },
            34: {
                x: 846.007,
                y: 863.256,
                sx: .906,
                sy: .906
            },
            35: {
                x: 846.202,
                y: 863.773,
                sx: .907,
                sy: .907
            },
            36: {
                x: 846.538,
                y: 864.331,
                sx: .908,
                sy: .908
            },
            37: {
                x: 846.853,
                y: 864.921,
                sx: .909,
                sy: .909
            },
            38: {
                x: 847.22,
                y: 865.615,
                sx: .911,
                sy: .911
            },
            39: {
                x: 847.616,
                y: 866.339,
                sx: .912,
                sy: .912
            },
            40: {
                x: 847.989,
                y: 867.094,
                sx: .914,
                sy: .914
            },
            41: {
                x: 848.404,
                y: 867.841,
                sx: .916,
                sy: .916
            },
            42: {
                x: 848.884,
                y: 868.706,
                sx: .918,
                sy: .918
            },
            43: {
                x: 849.354,
                y: 869.663,
                sx: .92,
                sy: .92
            },
            44: {
                x: 849.84,
                y: 870.638,
                sx: .922,
                sy: .922
            },
            45: {
                x: 850.393,
                y: 871.631,
                sx: .924,
                sy: .924
            },
            46: {
                x: 850.922,
                y: 872.703,
                sx: .927,
                sy: .927
            },
            47: {
                x: 851.518,
                y: 873.794,
                sx: .929,
                sy: .929
            },
            48: {
                x: 852.117,
                y: 874.939,
                sx: .932,
                sy: .932
            },
            49: {
                x: 852.782,
                y: 876.103,
                sx: .935,
                sy: .935
            },
            50: {
                x: 853.437,
                y: 877.408,
                sx: .938,
                sy: .938
            },
            51: {
                x: 854.095,
                y: 878.669,
                sx: .94,
                sy: .94
            },
            52: {
                x: 854.819,
                y: 880.048,
                sx: .944,
                sy: .944
            },
            53: {
                x: 855.533,
                y: 881.419,
                sx: .947,
                sy: .947
            },
            54: {
                x: 856.314,
                y: 882.858,
                sx: .95,
                sy: .95
            },
            55: {
                x: 857.094,
                y: 884.347,
                sx: .953,
                sy: .953
            },
            56: {
                x: 857.808,
                y: 885.668,
                sx: .956,
                sy: .956
            },
            57: {
                x: 858.545,
                y: 887.06,
                sx: .959,
                sy: .959
            },
            58: {
                x: 859.203,
                y: 888.37,
                sx: .962,
                sy: .962
            },
            59: {
                x: 859.858,
                y: 889.626,
                sx: .965,
                sy: .965
            },
            60: {
                x: 860.51,
                y: 890.826,
                sx: .968,
                sy: .968
            },
            61: {
                x: 861.109,
                y: 891.972,
                sx: .971,
                sy: .971
            },
            62: {
                x: 861.718,
                y: 893.075,
                sx: .973,
                sy: .973
            },
            63: {
                x: 862.297,
                y: 894.098,
                sx: .975,
                sy: .975
            },
            64: {
                x: 862.8,
                y: 895.141,
                sx: .978,
                sy: .978
            },
            65: {
                x: 863.273,
                y: 896.103,
                sx: .98,
                sy: .98
            },
            66: {
                x: 863.743,
                y: 897.01,
                sx: .982,
                sy: .982
            },
            67: {
                x: 864.236,
                y: 897.888,
                sx: .984,
                sy: .984
            },
            68: {
                x: 864.701,
                y: 898.685,
                sx: .986,
                sy: .986
            },
            69: {
                x: 865.074,
                y: 899.49,
                sx: .987,
                sy: .987
            },
            70: {
                x: 865.47,
                y: 900.163,
                sx: .989,
                sy: .989
            },
            71: {
                x: 865.787,
                y: 900.808,
                sx: .991,
                sy: .991
            },
            72: {
                x: 866.089,
                y: 901.435,
                sx: .992,
                sy: .992
            },
            73: {
                x: 866.438,
                y: 901.956,
                sx: .993,
                sy: .993
            },
            74: {
                x: 866.633,
                y: 902.473,
                sx: .994,
                sy: .994
            },
            75: {
                x: 866.926,
                y: 902.984,
                sx: .995,
                sy: .995
            },
            76: {
                x: 867.115,
                y: 903.39,
                sx: .996,
                sy: .996
            },
            77: {
                x: 867.338,
                y: 903.778,
                sx: .997,
                sy: .997
            },
            78: {
                x: 867.521,
                y: 904.074,
                sx: .998,
                sy: .998
            },
            79: {
                x: 867.638,
                y: 904.352,
                sx: .999,
                sy: .999
            },
            80: {
                x: 867.765,
                y: 904.538
            },
            81: {
                x: 867.826,
                y: 904.756
            },
            82: {
                x: 867.884,
                y: 904.869,
                sx: 1,
                sy: 1
            },
            83: {
                x: 867.988,
                y: 904.926
            },
            84: {
                x: 868,
                y: 905
            }
        }).addTimedChild(instance7, 0, 210, {
            0: {
                x: 124.65,
                y: 487.25,
                sx: .9,
                sy: .9
            },
            25: {
                x: 124.658,
                y: 487.28
            },
            26: {
                x: 124.53,
                y: 487.269
            },
            27: {
                x: 124.418,
                y: 487.318
            },
            28: {
                x: 124.172,
                y: 487.276,
                sx: .901,
                sy: .901
            },
            29: {
                x: 123.94,
                y: 487.343
            },
            30: {
                x: 123.576,
                y: 487.328,
                sx: .902,
                sy: .902
            },
            31: {
                x: 123.125,
                y: 487.365,
                sx: .903,
                sy: .903
            },
            32: {
                x: 122.691,
                y: 487.368,
                sx: .904,
                sy: .904
            },
            33: {
                x: 122.122,
                y: 487.381
            },
            34: {
                x: 121.518,
                y: 487.454,
                sx: .906,
                sy: .906
            },
            35: {
                x: 120.88,
                y: 487.436,
                sx: .907,
                sy: .907
            },
            36: {
                x: 120.155,
                y: 487.47,
                sx: .908,
                sy: .908
            },
            37: {
                x: 119.349,
                y: 487.528,
                sx: .909,
                sy: .909
            },
            38: {
                x: 118.508,
                y: 487.596,
                sx: .911,
                sy: .911
            },
            39: {
                x: 117.629,
                y: 487.608,
                sx: .912,
                sy: .912
            },
            40: {
                x: 116.619,
                y: 487.695,
                sx: .914,
                sy: .914
            },
            41: {
                x: 115.622,
                y: 487.684,
                sx: .916,
                sy: .916
            },
            42: {
                x: 114.492,
                y: 487.79,
                sx: .918,
                sy: .918
            },
            43: {
                x: 113.275,
                y: 487.847,
                sx: .92,
                sy: .92
            },
            44: {
                x: 112.076,
                y: 487.872,
                sx: .922,
                sy: .922
            },
            45: {
                x: 110.793,
                y: 487.964,
                sx: .924,
                sy: .924
            },
            46: {
                x: 109.472,
                y: 488,
                sx: .927,
                sy: .927
            },
            47: {
                x: 108.018,
                y: 488.103,
                sx: .929,
                sy: .929
            },
            48: {
                x: 106.53,
                y: 488.116,
                sx: .932,
                sy: .932
            },
            49: {
                x: 105.008,
                y: 488.195,
                sx: .935,
                sy: .935
            },
            50: {
                x: 103.4,
                y: 488.277,
                sx: .938,
                sy: .938
            },
            51: {
                x: 101.707,
                y: 488.368,
                sx: .94,
                sy: .94
            },
            52: {
                x: 99.981,
                y: 488.426,
                sx: .944,
                sy: .944
            },
            53: {
                x: 98.219,
                y: 488.486,
                sx: .947,
                sy: .947
            },
            54: {
                x: 96.323,
                y: 488.613,
                sx: .95,
                sy: .95
            },
            55: {
                x: 94.478,
                y: 488.74,
                sx: .953,
                sy: .953
            },
            56: {
                x: 92.665,
                y: 488.8,
                sx: .956,
                sy: .956
            },
            57: {
                x: 90.941,
                y: 488.865,
                sx: .959,
                sy: .959
            },
            58: {
                x: 89.298,
                y: 488.956,
                sx: .962,
                sy: .962
            },
            59: {
                x: 87.69,
                y: 489.038,
                sx: .965,
                sy: .965
            },
            60: {
                x: 86.117,
                y: 489.11,
                sx: .968,
                sy: .968
            },
            61: {
                x: 84.628,
                y: 489.173,
                sx: .971,
                sy: .971
            },
            62: {
                x: 83.226,
                y: 489.233,
                sx: .973,
                sy: .973
            },
            63: {
                x: 81.855,
                y: 489.319,
                sx: .975,
                sy: .975
            },
            64: {
                x: 80.573,
                y: 489.361,
                sx: .978,
                sy: .978
            },
            65: {
                x: 79.372,
                y: 489.428,
                sx: .98,
                sy: .98
            },
            66: {
                x: 78.155,
                y: 489.486,
                sx: .982,
                sy: .982
            },
            67: {
                x: 77.077,
                y: 489.549,
                sx: .984,
                sy: .984
            },
            68: {
                x: 76.08,
                y: 489.538,
                sx: .986,
                sy: .986
            },
            69: {
                x: 75.07,
                y: 489.625,
                sx: .987,
                sy: .987
            },
            70: {
                x: 74.14,
                y: 489.687,
                sx: .989,
                sy: .989
            },
            71: {
                x: 73.299,
                y: 489.705,
                sx: .991,
                sy: .991
            },
            72: {
                x: 72.492,
                y: 489.756,
                sx: .992,
                sy: .992
            },
            73: {
                x: 71.818,
                y: 489.797,
                sx: .993,
                sy: .993
            },
            74: {
                x: 71.13,
                y: 489.779,
                sx: .994,
                sy: .994
            },
            75: {
                x: 70.527,
                y: 489.852,
                sx: .995,
                sy: .995
            },
            76: {
                x: 70.008,
                y: 489.865,
                sx: .996,
                sy: .996
            },
            77: {
                x: 69.522,
                y: 489.861,
                sx: .997,
                sy: .997
            },
            78: {
                x: 69.123,
                y: 489.905,
                sx: .998,
                sy: .998
            },
            79: {
                x: 68.806,
                y: 489.932,
                sx: .999,
                sy: .999
            },
            80: {
                x: 68.477,
                y: 489.957
            },
            81: {
                x: 68.28,
                y: 489.915
            },
            82: {
                x: 68.118,
                y: 489.964,
                sx: 1,
                sy: 1
            },
            83: {
                x: 67.991,
                y: 489.953
            },
            84: {
                x: 68,
                y: 490
            }
        }).addTimedChild(instance6, 0, 210, {
            0: {
                x: 54.5,
                y: 408.05,
                sx: .9,
                sy: .9
            },
            25: {
                x: 54.503,
                y: 408.075
            },
            26: {
                x: 54.363,
                y: 408.05
            },
            27: {
                x: 54.23,
                y: 408.024
            },
            28: {
                x: 53.953,
                y: 408.048,
                sx: .901,
                sy: .901
            },
            29: {
                x: 53.633,
                y: 408.023
            },
            30: {
                x: 53.221,
                y: 407.953,
                sx: .902,
                sy: .902
            },
            31: {
                x: 52.764,
                y: 407.927,
                sx: .903,
                sy: .903
            },
            32: {
                x: 52.265,
                y: 407.856,
                sx: .904,
                sy: .904
            },
            33: {
                x: 51.622,
                y: 407.786
            },
            34: {
                x: 50.936,
                y: 407.715,
                sx: .906,
                sy: .906
            },
            35: {
                x: 50.207,
                y: 407.695,
                sx: .907,
                sy: .907
            },
            36: {
                x: 49.383,
                y: 407.618,
                sx: .908,
                sy: .908
            },
            37: {
                x: 48.468,
                y: 407.503,
                sx: .909,
                sy: .909
            },
            38: {
                x: 47.509,
                y: 407.387,
                sx: .911,
                sy: .911
            },
            39: {
                x: 46.456,
                y: 407.31,
                sx: .912,
                sy: .912
            },
            40: {
                x: 45.361,
                y: 407.194,
                sx: .914,
                sy: .914
            },
            41: {
                x: 44.171,
                y: 407.122,
                sx: .916,
                sy: .916
            },
            42: {
                x: 42.939,
                y: 406.957,
                sx: .918,
                sy: .918
            },
            43: {
                x: 41.613,
                y: 406.834,
                sx: .92,
                sy: .92
            },
            44: {
                x: 40.195,
                y: 406.718,
                sx: .922,
                sy: .922
            },
            45: {
                x: 38.734,
                y: 406.558,
                sx: .924,
                sy: .924
            },
            46: {
                x: 37.177,
                y: 406.385,
                sx: .927,
                sy: .927
            },
            47: {
                x: 35.579,
                y: 406.268,
                sx: .929,
                sy: .929
            },
            48: {
                x: 33.887,
                y: 406.151,
                sx: .932,
                sy: .932
            },
            49: {
                x: 32.152,
                y: 405.99,
                sx: .935,
                sy: .935
            },
            50: {
                x: 30.324,
                y: 405.773,
                sx: .938,
                sy: .938
            },
            51: {
                x: 28.402,
                y: 405.555,
                sx: .94,
                sy: .94
            },
            52: {
                x: 26.437,
                y: 405.394,
                sx: .944,
                sy: .944
            },
            53: {
                x: 24.378,
                y: 405.226,
                sx: .947,
                sy: .947
            },
            54: {
                x: 22.277,
                y: 405.014,
                sx: .95,
                sy: .95
            },
            55: {
                x: 20.176,
                y: 404.802,
                sx: .953,
                sy: .953
            },
            56: {
                x: 18.117,
                y: 404.634,
                sx: .956,
                sy: .956
            },
            57: {
                x: 16.153,
                y: 404.479,
                sx: .959,
                sy: .959
            },
            58: {
                x: 14.231,
                y: 404.261,
                sx: .962,
                sy: .962
            },
            59: {
                x: 12.453,
                y: 404.044,
                sx: .965,
                sy: .965
            },
            60: {
                x: 10.667,
                y: 403.877,
                sx: .968,
                sy: .968
            },
            61: {
                x: 8.975,
                y: 403.76,
                sx: .971,
                sy: .971
            },
            62: {
                x: 7.377,
                y: 403.649,
                sx: .973,
                sy: .973
            },
            63: {
                x: 5.821,
                y: 403.476,
                sx: .975,
                sy: .975
            },
            64: {
                x: 4.36,
                y: 403.316,
                sx: .978,
                sy: .978
            },
            65: {
                x: 2.941,
                y: 403.194,
                sx: .98,
                sy: .98
            },
            66: {
                x: 1.665,
                y: 403.071,
                sx: .982,
                sy: .982
            },
            67: {
                x: .384,
                y: 402.912,
                sx: .984,
                sy: .984
            },
            68: {
                x: -.806,
                y: 402.84,
                sx: .986,
                sy: .986
            },
            69: {
                x: -1.901,
                y: 402.774,
                sx: .987,
                sy: .987
            },
            70: {
                x: -2.955,
                y: 402.647,
                sx: .989,
                sy: .989
            },
            71: {
                x: -3.913,
                y: 402.531,
                sx: .991,
                sy: .991
            },
            72: {
                x: -4.829,
                y: 402.41,
                sx: .992,
                sy: .992
            },
            73: {
                x: -5.652,
                y: 402.339,
                sx: .993,
                sy: .993
            },
            74: {
                x: -6.381,
                y: 402.319,
                sx: .994,
                sy: .994
            },
            75: {
                x: -7.067,
                y: 402.248,
                sx: .995,
                sy: .995
            },
            76: {
                x: -7.66,
                y: 402.178,
                sx: .996,
                sy: .996
            },
            77: {
                x: -8.21,
                y: 402.101,
                sx: .997,
                sy: .997
            },
            78: {
                x: -8.666,
                y: 402.081,
                sx: .998,
                sy: .998
            },
            79: {
                x: -9.079,
                y: 402.005,
                sx: .999,
                sy: .999
            },
            80: {
                x: -9.398,
                y: 401.986
            },
            81: {
                x: -9.625,
                y: 402.01
            },
            82: {
                x: -9.808,
                y: 401.984,
                sx: 1,
                sy: 1
            },
            83: {
                x: -9.948,
                y: 401.959
            },
            84: {
                x: -10,
                y: 402
            }
        }).addTimedChild(instance5, 0, 210, {
            0: {
                x: 68.85,
                y: 121.85,
                sx: .9,
                sy: .9
            },
            25: {
                x: 68.804,
                y: 121.857
            },
            26: {
                x: 68.669,
                y: 121.783
            },
            27: {
                x: 68.495,
                y: 121.68,
                sx: .901,
                sy: .901
            },
            28: {
                x: 68.18,
                y: 121.491
            },
            29: {
                x: 67.775,
                y: 121.321,
                sx: .902,
                sy: .902
            },
            30: {
                x: 67.382,
                y: 120.972
            },
            31: {
                x: 66.847,
                y: 120.687,
                sx: .903,
                sy: .903
            },
            32: {
                x: 66.173,
                y: 120.321,
                sx: .904,
                sy: .904
            },
            33: {
                x: 65.459,
                y: 119.873,
                sx: .905,
                sy: .905
            },
            34: {
                x: 64.704,
                y: 119.392,
                sx: .907,
                sy: .907
            },
            35: {
                x: 63.81,
                y: 118.83,
                sx: .908,
                sy: .908
            },
            36: {
                x: 62.878,
                y: 118.288,
                sx: .91,
                sy: .91
            },
            37: {
                x: 61.804,
                y: 117.662,
                sx: .911,
                sy: .911
            },
            38: {
                x: 60.741,
                y: 117.003,
                sx: .913,
                sy: .913
            },
            39: {
                x: 59.488,
                y: 116.264,
                sx: .915,
                sy: .915
            },
            40: {
                x: 58.243,
                y: 115.489,
                sx: .917,
                sy: .917
            },
            41: {
                x: 56.81,
                y: 114.634,
                sx: .919,
                sy: .919
            },
            42: {
                x: 55.388,
                y: 113.799,
                sx: .921,
                sy: .921
            },
            43: {
                x: 53.875,
                y: 112.88,
                sx: .924,
                sy: .924
            },
            44: {
                x: 52.222,
                y: 111.879,
                sx: .926,
                sy: .926
            },
            45: {
                x: 50.48,
                y: 110.897,
                sx: .929,
                sy: .929
            },
            46: {
                x: 48.747,
                y: 109.78,
                sx: .932,
                sy: .932
            },
            47: {
                x: 46.875,
                y: 108.634,
                sx: .935,
                sy: .935
            },
            48: {
                x: 44.913,
                y: 107.506,
                sx: .938,
                sy: .938
            },
            49: {
                x: 42.86,
                y: 106.243,
                sx: .941,
                sy: .941
            },
            50: {
                x: 40.769,
                y: 105,
                sx: .945,
                sy: .945
            },
            51: {
                x: 38.486,
                y: 103.624,
                sx: .948,
                sy: .948
            },
            52: {
                x: 36.262,
                y: 102.261,
                sx: .952,
                sy: .952
            },
            53: {
                x: 34.031,
                y: 100.937,
                sx: .955,
                sy: .955
            },
            54: {
                x: 31.889,
                y: 99.645,
                sx: .959,
                sy: .959
            },
            55: {
                x: 29.886,
                y: 98.432,
                sx: .962,
                sy: .962
            },
            56: {
                x: 27.924,
                y: 97.254,
                sx: .965,
                sy: .965
            },
            57: {
                x: 26.051,
                y: 96.155,
                sx: .968,
                sy: .968
            },
            58: {
                x: 24.269,
                y: 95.04,
                sx: .971,
                sy: .971
            },
            59: {
                x: 22.577,
                y: 94.058,
                sx: .974,
                sy: .974
            },
            60: {
                x: 20.924,
                y: 93.058,
                sx: .976,
                sy: .976
            },
            61: {
                x: 19.41,
                y: 92.137,
                sx: .979,
                sy: .979
            },
            62: {
                x: 17.988,
                y: 91.251,
                sx: .981,
                sy: .981
            },
            63: {
                x: 16.555,
                y: 90.447,
                sx: .983,
                sy: .983
            },
            64: {
                x: 15.311,
                y: 89.624,
                sx: .985,
                sy: .985
            },
            65: {
                x: 14.058,
                y: 88.934,
                sx: .987,
                sy: .987
            },
            66: {
                x: 12.945,
                y: 88.276,
                sx: .989,
                sy: .989
            },
            67: {
                x: 11.921,
                y: 87.599,
                sx: .99,
                sy: .99
            },
            68: {
                x: 10.988,
                y: 87.055,
                sx: .992,
                sy: .992
            },
            69: {
                x: 10.094,
                y: 86.493,
                sx: .993,
                sy: .993
            },
            70: {
                x: 9.341,
                y: 86.014,
                sx: .995,
                sy: .995
            },
            71: {
                x: 8.577,
                y: 85.617,
                sx: .996,
                sy: .996
            },
            72: {
                x: 7.952,
                y: 85.251,
                sx: .997,
                sy: .997
            },
            73: {
                x: 7.417,
                y: 84.916,
                sx: .998,
                sy: .998
            },
            74: {
                x: 6.974,
                y: 84.666
            },
            75: {
                x: 6.619,
                y: 84.396,
                sx: .999,
                sy: .999
            },
            76: {
                x: 6.304,
                y: 84.207
            },
            77: {
                x: 6.08,
                y: 84.104,
                sx: 1,
                sy: 1
            },
            78: {
                x: 5.945,
                y: 84.03
            },
            79: {
                x: 6,
                y: 84
            }
        }).addTimedChild(instance4, 0, 210, {
            0: {
                x: 141.75,
                y: 512.45,
                sx: .72,
                sy: .72
            },
            25: {
                x: 141.756,
                y: 512.473
            },
            26: {
                x: 141.639,
                y: 512.491
            },
            27: {
                x: 141.491,
                y: 512.528
            },
            28: {
                x: 141.162,
                y: 512.586,
                sx: .721,
                sy: .721
            },
            29: {
                x: 140.86,
                y: 512.588
            },
            30: {
                x: 140.422,
                y: 512.595,
                sx: .722,
                sy: .722
            },
            31: {
                x: 140.008,
                y: 512.638,
                sx: .723,
                sy: .723
            },
            32: {
                x: 139.414,
                y: 512.701
            },
            33: {
                x: 138.841,
                y: 512.792,
                sx: .724,
                sy: .724
            },
            34: {
                x: 138.14,
                y: 512.861,
                sx: .725,
                sy: .725
            },
            35: {
                x: 137.407,
                y: 512.943,
                sx: .726,
                sy: .726
            },
            36: {
                x: 136.547,
                y: 513.011,
                sx: .728,
                sy: .728
            },
            37: {
                x: 135.658,
                y: 513.107,
                sx: .729,
                sy: .729
            },
            38: {
                x: 134.69,
                y: 513.174,
                sx: .73,
                sy: .73
            },
            39: {
                x: 133.59,
                y: 513.311,
                sx: .732,
                sy: .732
            },
            40: {
                x: 132.465,
                y: 513.433,
                sx: .734,
                sy: .734
            },
            41: {
                x: 131.309,
                y: 513.527,
                sx: .735,
                sy: .735
            },
            42: {
                x: 130.022,
                y: 513.64,
                sx: .737,
                sy: .737
            },
            43: {
                x: 128.709,
                y: 513.79,
                sx: .739,
                sy: .739
            },
            44: {
                x: 127.264,
                y: 513.952,
                sx: .741,
                sy: .741
            },
            45: {
                x: 125.792,
                y: 514.101,
                sx: .743,
                sy: .743
            },
            46: {
                x: 124.237,
                y: 514.261,
                sx: .746,
                sy: .746
            },
            47: {
                x: 122.607,
                y: 514.408,
                sx: .748,
                sy: .748
            },
            48: {
                x: 120.898,
                y: 514.583,
                sx: .75,
                sy: .75
            },
            49: {
                x: 119.158,
                y: 514.779,
                sx: .753,
                sy: .753
            },
            50: {
                x: 117.238,
                y: 514.944,
                sx: .756,
                sy: .756
            },
            51: {
                x: 115.34,
                y: 515.138,
                sx: .759,
                sy: .759
            },
            52: {
                x: 113.406,
                y: 515.337,
                sx: .761,
                sy: .761
            },
            53: {
                x: 111.46,
                y: 515.539,
                sx: .764,
                sy: .764
            },
            54: {
                x: 109.592,
                y: 515.712,
                sx: .767,
                sy: .767
            },
            55: {
                x: 107.803,
                y: 515.908,
                sx: .77,
                sy: .77
            },
            56: {
                x: 106.091,
                y: 516.075,
                sx: .772,
                sy: .772
            },
            57: {
                x: 104.461,
                y: 516.221,
                sx: .774,
                sy: .774
            },
            58: {
                x: 102.959,
                y: 516.39,
                sx: .777,
                sy: .777
            },
            59: {
                x: 101.435,
                y: 516.531,
                sx: .779,
                sy: .779
            },
            60: {
                x: 100.039,
                y: 516.693,
                sx: .781,
                sy: .781
            },
            61: {
                x: 98.678,
                y: 516.85,
                sx: .783,
                sy: .783
            },
            62: {
                x: 97.392,
                y: 516.964,
                sx: .785,
                sy: .785
            },
            63: {
                x: 96.234,
                y: 517.049,
                sx: .786,
                sy: .786
            },
            64: {
                x: 95.108,
                y: 517.172,
                sx: .788,
                sy: .788
            },
            65: {
                x: 94.059,
                y: 517.309,
                sx: .79,
                sy: .79
            },
            66: {
                x: 93.04,
                y: 517.376,
                sx: .791,
                sy: .791
            },
            67: {
                x: 92.152,
                y: 517.472,
                sx: .792,
                sy: .792
            },
            68: {
                x: 91.339,
                y: 517.582,
                sx: .794,
                sy: .794
            },
            69: {
                x: 90.558,
                y: 517.622,
                sx: .795,
                sy: .795
            },
            70: {
                x: 89.857,
                y: 517.691,
                sx: .796,
                sy: .796
            },
            71: {
                x: 89.284,
                y: 517.782,
                sx: .797,
                sy: .797
            },
            72: {
                x: 88.74,
                y: 517.845
            },
            73: {
                x: 88.276,
                y: 517.888,
                sx: .798,
                sy: .798
            },
            74: {
                x: 87.841,
                y: 517.902,
                sx: .799,
                sy: .799
            },
            75: {
                x: 87.534,
                y: 517.939
            },
            76: {
                x: 87.257,
                y: 517.954
            },
            77: {
                x: 87.109,
                y: 517.992,
                sx: .8,
                sy: .8
            },
            78: {
                x: 86.99,
                y: 518.002
            },
            79: {
                x: 87,
                y: 518
            }
        }).addTimedChild(instance3, 0, 210, {
            0: {
                x: 69.75,
                y: 662.75,
                sx: .9,
                sy: .9
            },
            25: {
                x: 69.755,
                y: 662.751
            },
            26: {
                x: 69.574,
                y: 662.833
            },
            27: {
                x: 69.304,
                y: 662.916,
                sx: .901,
                sy: .901
            },
            28: {
                x: 68.949,
                y: 663.091
            },
            29: {
                x: 68.504,
                y: 663.216,
                sx: .902,
                sy: .902
            },
            30: {
                x: 67.972,
                y: 663.364,
                sx: .903,
                sy: .903
            },
            31: {
                x: 67.303,
                y: 663.632,
                sx: .904,
                sy: .904
            },
            32: {
                x: 66.597,
                y: 663.922,
                sx: .905,
                sy: .905
            },
            33: {
                x: 65.751,
                y: 664.213,
                sx: .906,
                sy: .906
            },
            34: {
                x: 64.768,
                y: 664.526,
                sx: .908,
                sy: .908
            },
            35: {
                x: 63.699,
                y: 664.919,
                sx: .91,
                sy: .91
            },
            36: {
                x: 62.542,
                y: 665.324,
                sx: .912,
                sy: .912
            },
            37: {
                x: 61.297,
                y: 665.801,
                sx: .914,
                sy: .914
            },
            38: {
                x: 59.964,
                y: 666.239,
                sx: .916,
                sy: .916
            },
            39: {
                x: 58.494,
                y: 666.748,
                sx: .918,
                sy: .918
            },
            40: {
                x: 56.936,
                y: 667.318,
                sx: .92,
                sy: .92
            },
            41: {
                x: 55.241,
                y: 667.92,
                sx: .923,
                sy: .923
            },
            42: {
                x: 53.508,
                y: 668.533,
                sx: .926,
                sy: .926
            },
            43: {
                x: 51.638,
                y: 669.167,
                sx: .929,
                sy: .929
            },
            44: {
                x: 49.679,
                y: 669.853,
                sx: .932,
                sy: .932
            },
            45: {
                x: 47.633,
                y: 670.57,
                sx: .935,
                sy: .935
            },
            46: {
                x: 45.45,
                y: 671.358,
                sx: .939,
                sy: .939
            },
            47: {
                x: 43.179,
                y: 672.157,
                sx: .942,
                sy: .942
            },
            48: {
                x: 40.871,
                y: 672.978,
                sx: .946,
                sy: .946
            },
            49: {
                x: 38.374,
                y: 673.86,
                sx: .95,
                sy: .95
            },
            50: {
                x: 35.878,
                y: 674.753,
                sx: .954,
                sy: .954
            },
            51: {
                x: 33.569,
                y: 675.563,
                sx: .958,
                sy: .958
            },
            52: {
                x: 31.298,
                y: 676.363,
                sx: .961,
                sy: .961
            },
            53: {
                x: 29.116,
                y: 677.161,
                sx: .965,
                sy: .965
            },
            54: {
                x: 27.069,
                y: 677.868,
                sx: .968,
                sy: .968
            },
            55: {
                x: 25.111,
                y: 678.564,
                sx: .971,
                sy: .971
            },
            56: {
                x: 23.241,
                y: 679.198,
                sx: .974,
                sy: .974
            },
            57: {
                x: 21.508,
                y: 679.811,
                sx: .977,
                sy: .977
            },
            58: {
                x: 19.862,
                y: 680.403,
                sx: .98,
                sy: .98
            },
            59: {
                x: 18.254,
                y: 680.973,
                sx: .982,
                sy: .982
            },
            60: {
                x: 16.784,
                y: 681.482,
                sx: .984,
                sy: .984
            },
            61: {
                x: 15.502,
                y: 681.93,
                sx: .986,
                sy: .986
            },
            62: {
                x: 14.207,
                y: 682.407,
                sx: .988,
                sy: .988
            },
            63: {
                x: 13.05,
                y: 682.812,
                sx: .99,
                sy: .99
            },
            64: {
                x: 11.98,
                y: 683.195,
                sx: .992,
                sy: .992
            },
            65: {
                x: 11.047,
                y: 683.508,
                sx: .994,
                sy: .994
            },
            66: {
                x: 10.152,
                y: 683.809,
                sx: .995,
                sy: .995
            },
            67: {
                x: 9.446,
                y: 684.099,
                sx: .996,
                sy: .996
            },
            68: {
                x: 8.777,
                y: 684.367,
                sx: .997,
                sy: .997
            },
            69: {
                x: 8.245,
                y: 684.515,
                sx: .998,
                sy: .998
            },
            70: {
                x: 7.8,
                y: 684.641,
                sx: .999,
                sy: .999
            },
            71: {
                x: 7.444,
                y: 684.805
            },
            72: {
                x: 7.175,
                y: 684.898,
                sx: 1,
                sy: 1
            },
            73: {
                x: 7.044,
                y: 684.98
            },
            74: {
                x: 7,
                y: 685
            }
        }).addTimedChild(instance51, 145, 24, {
            145: {
                x: 19.6,
                y: 685,
                sx: 27.675,
                a: 0
            },
            146: {
                a: .02
            },
            147: {
                a: .08
            },
            148: {
                a: .18
            },
            149: {
                a: .32
            },
            150: {
                a: .5
            },
            151: {
                a: .68
            },
            152: {
                a: .82
            },
            153: {
                a: .92
            },
            154: {
                a: .98
            },
            155: {
                a: 1
            },
            156: {
                a: .99
            },
            157: {
                a: .95
            },
            158: {
                a: .89
            },
            159: {
                a: .81
            },
            160: {
                a: .7
            },
            161: {
                a: .57
            },
            162: {
                a: .43
            },
            163: {
                a: .3
            },
            164: {
                a: .19
            },
            165: {
                a: .11
            },
            166: {
                a: .05
            },
            167: {
                a: .01
            },
            168: {
                a: 0
            }
        }).addTimedChild(instance50, 145, 24, {
            145: {
                x: 19.6,
                y: 830.5,
                sx: 27.675,
                a: 0
            },
            146: {
                a: .02
            },
            147: {
                a: .08
            },
            148: {
                a: .18
            },
            149: {
                a: .32
            },
            150: {
                a: .5
            },
            151: {
                a: .68
            },
            152: {
                a: .82
            },
            153: {
                a: .92
            },
            154: {
                a: .98
            },
            155: {
                a: 1
            },
            156: {
                a: .99
            },
            157: {
                a: .95
            },
            158: {
                a: .89
            },
            159: {
                a: .81
            },
            160: {
                a: .7
            },
            161: {
                a: .57
            },
            162: {
                a: .43
            },
            163: {
                a: .3
            },
            164: {
                a: .19
            },
            165: {
                a: .11
            },
            166: {
                a: .05
            },
            167: {
                a: .01
            },
            168: {
                a: 0
            }
        }).addTimedChild(instance49, 145, 24, {
            145: {
                x: 20.85,
                y: 692.4,
                sx: 3.23,
                r: 1.571,
                a: 0
            },
            146: {
                a: .02
            },
            147: {
                a: .08
            },
            148: {
                a: .18
            },
            149: {
                a: .32
            },
            150: {
                a: .5
            },
            151: {
                a: .68
            },
            152: {
                a: .82
            },
            153: {
                a: .92
            },
            154: {
                a: .98
            },
            155: {
                a: 1
            },
            156: {
                a: .99
            },
            157: {
                a: .95
            },
            158: {
                a: .89
            },
            159: {
                a: .81
            },
            160: {
                a: .7
            },
            161: {
                a: .57
            },
            162: {
                a: .43
            },
            163: {
                a: .3
            },
            164: {
                a: .19
            },
            165: {
                a: .11
            },
            166: {
                a: .05
            },
            167: {
                a: .01
            },
            168: {
                a: 0
            }
        }).addTimedChild(instance48, 145, 24, {
            145: {
                x: 1272.05,
                y: 692.4,
                sx: 3.23,
                r: 1.571,
                a: 0
            },
            146: {
                a: .02
            },
            147: {
                a: .08
            },
            148: {
                a: .18
            },
            149: {
                a: .32
            },
            150: {
                a: .5
            },
            151: {
                a: .68
            },
            152: {
                a: .82
            },
            153: {
                a: .92
            },
            154: {
                a: .98
            },
            155: {
                a: 1
            },
            156: {
                a: .99
            },
            157: {
                a: .95
            },
            158: {
                a: .89
            },
            159: {
                a: .81
            },
            160: {
                a: .7
            },
            161: {
                a: .57
            },
            162: {
                a: .43
            },
            163: {
                a: .3
            },
            164: {
                a: .19
            },
            165: {
                a: .11
            },
            166: {
                a: .05
            },
            167: {
                a: .01
            },
            168: {
                a: 0
            }
        }).addTimedChild(instance47, 145, 24, {
            145: {
                x: .5,
                y: 624,
                sx: 8.659,
                a: 0
            },
            146: {
                a: .02
            },
            147: {
                a: .08
            },
            148: {
                a: .18
            },
            149: {
                a: .32
            },
            150: {
                a: .5
            },
            151: {
                a: .68
            },
            152: {
                a: .82
            },
            153: {
                a: .92
            },
            154: {
                a: .98
            },
            155: {
                a: 1
            },
            156: {
                a: .99
            },
            157: {
                a: .95
            },
            158: {
                a: .89
            },
            159: {
                a: .81
            },
            160: {
                a: .7
            },
            161: {
                a: .57
            },
            162: {
                a: .43
            },
            163: {
                a: .3
            },
            164: {
                a: .19
            },
            165: {
                a: .11
            },
            166: {
                a: .05
            },
            167: {
                a: .01
            },
            168: {
                a: 0
            }
        }).addTimedChild(instance46, 145, 24, {
            145: {
                x: .5,
                y: 764.8,
                sx: 8.659,
                a: 0
            },
            146: {
                a: .02
            },
            147: {
                a: .08
            },
            148: {
                a: .18
            },
            149: {
                a: .32
            },
            150: {
                a: .5
            },
            151: {
                a: .68
            },
            152: {
                a: .82
            },
            153: {
                a: .92
            },
            154: {
                a: .98
            },
            155: {
                a: 1
            },
            156: {
                a: .99
            },
            157: {
                a: .95
            },
            158: {
                a: .89
            },
            159: {
                a: .81
            },
            160: {
                a: .7
            },
            161: {
                a: .57
            },
            162: {
                a: .43
            },
            163: {
                a: .3
            },
            164: {
                a: .19
            },
            165: {
                a: .11
            },
            166: {
                a: .05
            },
            167: {
                a: .01
            },
            168: {
                a: 0
            }
        }).addTimedChild(instance45, 145, 24, {
            145: {
                x: -27.75,
                y: 914.65,
                sx: 2,
                sy: .626,
                r: -1.571,
                a: 0
            },
            146: {
                a: .02
            },
            147: {
                a: .08
            },
            148: {
                a: .18
            },
            149: {
                a: .32
            },
            150: {
                a: .5
            },
            151: {
                a: .68
            },
            152: {
                a: .82
            },
            153: {
                a: .92
            },
            154: {
                a: .98
            },
            155: {
                a: 1
            },
            156: {
                a: .99
            },
            157: {
                a: .95
            },
            158: {
                a: .89
            },
            159: {
                a: .81
            },
            160: {
                a: .7
            },
            161: {
                a: .57
            },
            162: {
                a: .43
            },
            163: {
                a: .3
            },
            164: {
                a: .19
            },
            165: {
                a: .11
            },
            166: {
                a: .05
            },
            167: {
                a: .01
            },
            168: {
                a: 0
            }
        }).addTimedChild(instance44, 145, 24, {
            145: {
                x: 1217.05,
                y: 914.65,
                sx: 2,
                sy: .626,
                r: -1.571,
                a: 0
            },
            146: {
                a: .02
            },
            147: {
                a: .08
            },
            148: {
                a: .18
            },
            149: {
                a: .32
            },
            150: {
                a: .5
            },
            151: {
                a: .68
            },
            152: {
                a: .82
            },
            153: {
                a: .92
            },
            154: {
                a: .98
            },
            155: {
                a: 1
            },
            156: {
                a: .99
            },
            157: {
                a: .95
            },
            158: {
                a: .89
            },
            159: {
                a: .81
            },
            160: {
                a: .7
            },
            161: {
                a: .57
            },
            162: {
                a: .43
            },
            163: {
                a: .3
            },
            164: {
                a: .19
            },
            165: {
                a: .11
            },
            166: {
                a: .05
            },
            167: {
                a: .01
            },
            168: {
                a: 0
            }
        }).addTimedChild(instance39, 134, 76, {
            134: {
                x: 7,
                y: 685,
                a: 0
            },
            135: {
                a: .05
            },
            136: {
                a: .09
            },
            137: {
                a: .14
            },
            138: {
                a: .19
            },
            139: {
                a: .24
            },
            140: {
                a: .29
            },
            141: {
                a: .33
            },
            142: {
                a: .38
            },
            143: {
                a: .43
            },
            144: {
                a: .48
            },
            145: {
                a: .52
            },
            146: {
                a: .57
            },
            147: {
                a: .62
            },
            148: {
                a: .67
            },
            149: {
                a: .71
            },
            150: {
                a: .76
            },
            151: {
                a: .81
            },
            152: {
                a: .86
            },
            153: {
                a: .91
            },
            154: {
                a: .95
            },
            155: {
                a: 1
            }
        }).addTimedChild(instance38, 134, 46, {
            134: {
                x: 7,
                y: 685,
                a: 0
            },
            136: {
                a: .01
            },
            137: {
                a: .02
            },
            138: {
                a: .03
            },
            139: {
                a: .05
            },
            140: {
                a: .07
            },
            141: {
                a: .09
            },
            142: {
                a: .12
            },
            143: {
                a: .14
            },
            144: {
                a: .18
            },
            145: {
                a: .22
            },
            146: {
                a: .25
            },
            147: {
                a: .28
            },
            148: {
                a: .31
            },
            149: {
                a: .33
            },
            150: {
                a: .35
            },
            151: {
                a: .37
            },
            152: {
                a: .38
            },
            153: {
                a: .39
            },
            154: {
                a: .4
            },
            157: {
                a: .39
            },
            159: {
                a: .38
            },
            160: {
                a: .36
            },
            161: {
                a: .35
            },
            162: {
                a: .33
            },
            163: {
                a: .31
            },
            164: {
                a: .29
            },
            165: {
                a: .26
            },
            166: {
                a: .23
            },
            167: {
                a: .2
            },
            168: {
                a: .17
            },
            169: {
                a: .14
            },
            170: {
                a: .11
            },
            171: {
                a: .09
            },
            172: {
                a: .07
            },
            173: {
                a: .05
            },
            174: {
                a: .04
            },
            175: {
                a: .02
            },
            176: {
                a: .01
            },
            177: {
                a: 0
            }
        }).addTimedChild(instance41, 137, 64, {
            137: {
                x: 787.95,
                y: 841.65,
                sx: .369,
                sy: .369,
                kx: 2.858,
                ky: .284,
                a: 0
            },
            138: {
                x: 789.068,
                y: 843.02,
                sx: .371,
                sy: .371,
                kx: 2.862,
                ky: .28,
                a: .02
            },
            139: {
                x: 790.11,
                y: 844.418,
                sx: .374,
                sy: .374,
                kx: 2.866,
                ky: .275,
                a: .05
            },
            140: {
                x: 791.18,
                y: 845.817,
                sx: .376,
                sy: .376,
                kx: 2.87,
                ky: .271,
                a: .08
            },
            141: {
                x: 792.302,
                y: 847.243,
                sx: .379,
                sy: .379,
                kx: 2.874,
                ky: .267,
                a: .11
            },
            142: {
                x: 793.426,
                y: 848.595,
                sx: .381,
                sy: .381,
                kx: 2.879,
                ky: .263,
                a: .15
            },
            143: {
                x: 794.501,
                y: 849.998,
                sx: .384,
                sy: .384,
                kx: 2.883,
                ky: .259,
                a: .18
            },
            144: {
                x: 795.59,
                y: 851.415,
                sx: .386,
                sy: .386,
                kx: 2.887,
                ky: .255,
                a: .22
            },
            145: {
                x: 796.682,
                y: 852.883,
                sx: .389,
                sy: .389,
                kx: 2.891,
                ky: .251,
                a: .26
            },
            146: {
                x: 797.85,
                y: 854.328,
                sx: .391,
                sy: .391,
                kx: 2.895,
                ky: .247,
                a: .3
            },
            147: {
                x: 799.009,
                y: 855.812,
                sx: .394,
                sy: .394,
                kx: 2.899,
                ky: .242,
                a: .35
            },
            148: {
                x: 800.132,
                y: 857.259,
                sx: .396,
                sy: .396,
                kx: 2.903,
                ky: .238,
                a: .4
            },
            149: {
                x: 801.267,
                y: 858.721,
                sx: .399,
                sy: .399,
                kx: 2.907,
                ky: .234,
                a: .45
            },
            150: {
                x: 802.444,
                y: 860.195,
                sx: .401,
                sy: .401,
                kx: 2.912,
                ky: .23,
                a: .5
            },
            151: {
                x: 803.622,
                y: 861.696,
                sx: .404,
                sy: .404,
                kx: 2.916,
                ky: .226,
                a: .55
            },
            152: {
                x: 804.764,
                y: 863.161,
                sx: .407,
                sy: .407,
                kx: 2.92,
                ky: .222,
                a: .61
            },
            153: {
                x: 805.946,
                y: 864.714,
                sx: .409,
                sy: .409,
                kx: 2.924,
                ky: .218,
                a: .67
            },
            154: {
                x: 807.156,
                y: 866.219,
                sx: .412,
                sy: .412,
                kx: 2.928,
                ky: .213,
                a: .73
            },
            155: {
                x: 808.379,
                y: 867.737,
                sx: .414,
                sy: .414,
                kx: 2.932,
                ky: .209,
                a: .8
            },
            156: {
                x: 809.553,
                y: 869.257,
                sx: .417,
                sy: .417,
                kx: 2.936,
                ky: .205,
                a: .86
            },
            157: {
                x: 810.744,
                y: 870.841,
                sx: .419,
                sy: .419,
                kx: 2.94,
                ky: .201,
                a: .93
            },
            158: {
                x: 812.05,
                y: 872.4,
                sx: .422,
                sy: .422,
                kx: 2.945,
                ky: .197,
                a: 1
            },
            159: {
                x: 812.869,
                y: 873.628,
                sx: .423,
                sy: .423,
                kx: 2.948,
                ky: .193,
                a: .99
            },
            160: {
                x: 813.677,
                y: 874.815,
                sx: .424,
                sy: .424,
                kx: 2.952,
                ky: .189,
                a: .98
            },
            161: {
                x: 814.423,
                y: 875.943,
                sx: .426,
                sy: .426,
                kx: 2.956,
                ky: .186,
                a: .96
            },
            162: {
                x: 815.197,
                y: 877.17,
                sx: .427,
                sy: .427,
                kx: 2.96,
                ky: .182,
                a: .95
            },
            163: {
                x: 816.06,
                y: 878.305,
                sx: .428,
                sy: .428,
                kx: 2.964,
                ky: .178,
                a: .93
            },
            164: {
                x: 816.898,
                y: 879.568,
                sx: .429,
                sy: .429,
                kx: 2.968,
                ky: .174,
                a: .92
            },
            165: {
                x: 817.675,
                y: 880.664,
                sx: .431,
                sy: .431,
                kx: 2.971,
                ky: .17,
                a: .9
            },
            166: {
                x: 818.492,
                y: 881.951,
                sx: .432,
                sy: .432,
                kx: 2.975,
                ky: .166,
                a: .89
            },
            167: {
                x: 819.272,
                y: 883.098,
                sx: .433,
                sy: .433,
                kx: 2.979,
                ky: .163,
                a: .87
            },
            168: {
                x: 820.153,
                y: 884.27,
                sx: .435,
                sy: .435,
                kx: 2.983,
                ky: .159,
                a: .85
            },
            169: {
                x: 820.999,
                y: 885.553,
                sx: .436,
                sy: .436,
                kx: 2.987,
                ky: .155,
                a: .84
            },
            170: {
                x: 821.882,
                y: 886.697,
                sx: .437,
                sy: .437,
                kx: 2.99,
                ky: .151,
                a: .82
            },
            171: {
                x: 822.743,
                y: 887.917,
                sx: .439,
                sy: .439,
                kx: 2.994,
                ky: .147,
                a: .8
            },
            172: {
                x: 823.492,
                y: 889.175,
                sx: .44,
                sy: .44,
                kx: 2.998,
                ky: .144,
                a: .78
            },
            173: {
                x: 824.393,
                y: 890.354,
                sx: .441,
                sy: .441,
                kx: 3.002,
                ky: .14,
                a: .76
            },
            174: {
                x: 825.282,
                y: 891.547,
                sx: .442,
                sy: .442,
                kx: 3.006,
                ky: .136,
                a: .74
            },
            175: {
                x: 826.148,
                y: 892.812,
                sx: .444,
                sy: .444,
                kx: 3.009,
                ky: .132,
                a: .71
            },
            176: {
                x: 827.051,
                y: 894.042,
                sx: .445,
                sy: .445,
                kx: 3.013,
                ky: .128,
                a: .7
            },
            177: {
                x: 827.883,
                y: 895.221,
                sx: .446,
                sy: .446,
                kx: 3.017,
                ky: .124,
                a: .67
            },
            178: {
                x: 828.803,
                y: 896.533,
                sx: .448,
                sy: .448,
                kx: 3.021,
                ky: .121,
                a: .65
            },
            179: {
                x: 829.71,
                y: 897.71,
                sx: .449,
                sy: .449,
                kx: 3.025,
                ky: .117,
                a: .63
            },
            180: {
                x: 830.595,
                y: 898.936,
                sx: .45,
                sy: .45,
                kx: 3.029,
                ky: .113,
                a: .6
            },
            181: {
                x: 831.531,
                y: 900.209,
                sx: .451,
                sy: .451,
                kx: 3.032,
                ky: .109,
                a: .58
            },
            182: {
                x: 832.381,
                y: 901.421,
                sx: .453,
                sy: .453,
                kx: 3.036,
                ky: .105,
                a: .55
            },
            183: {
                x: 833.319,
                y: 902.67,
                sx: .454,
                sy: .454,
                kx: 3.04,
                ky: .102,
                a: .52
            },
            184: {
                x: 834.284,
                y: 903.992,
                sx: .455,
                sy: .455,
                kx: 3.044,
                ky: .098,
                a: .5
            },
            185: {
                x: 835.201,
                y: 905.214,
                sx: .457,
                sy: .457,
                kx: 3.048,
                ky: .094,
                a: .47
            },
            186: {
                x: 836.155,
                y: 906.471,
                sx: .458,
                sy: .458,
                kx: 3.051,
                ky: .09,
                a: .45
            },
            187: {
                x: 837.011,
                y: 907.729,
                sx: .459,
                sy: .459,
                kx: 3.055,
                ky: .086,
                a: .42
            },
            188: {
                x: 838.019,
                y: 908.986,
                sx: .46,
                sy: .46,
                kx: 3.059,
                ky: .082,
                a: .39
            },
            189: {
                x: 839.015,
                y: 910.253,
                sx: .462,
                sy: .462,
                kx: 3.063,
                ky: .079,
                a: .36
            },
            190: {
                x: 839.912,
                y: 911.545,
                sx: .463,
                sy: .463,
                kx: 3.067,
                ky: .075,
                a: .33
            },
            191: {
                x: 840.911,
                y: 912.786,
                sx: .464,
                sy: .464,
                kx: 3.071,
                ky: .071,
                a: .3
            },
            192: {
                x: 841.873,
                y: 914.04,
                sx: .466,
                sy: .466,
                kx: 3.074,
                ky: .067,
                a: .27
            },
            193: {
                x: 842.813,
                y: 915.368,
                sx: .467,
                sy: .467,
                kx: 3.078,
                ky: .063,
                a: .23
            },
            194: {
                x: 843.853,
                y: 916.592,
                sx: .468,
                sy: .468,
                kx: 3.082,
                ky: .06,
                a: .2
            },
            195: {
                x: 844.794,
                y: 917.944,
                sx: .469,
                sy: .469,
                kx: 3.086,
                ky: .056,
                a: .17
            },
            196: {
                x: 845.836,
                y: 919.217,
                sx: .471,
                sy: .471,
                kx: 3.09,
                ky: .052,
                a: .14
            },
            197: {
                x: 846.843,
                y: 920.53,
                sx: .472,
                sy: .472,
                kx: 3.093,
                ky: .048,
                a: .11
            },
            198: {
                x: 847.825,
                y: 921.816,
                sx: .473,
                sy: .473,
                kx: 3.097,
                ky: .044,
                a: .07
            },
            199: {
                x: 848.846,
                y: 923.087,
                sx: .475,
                sy: .475,
                kx: 3.101,
                ky: .04,
                a: .04
            },
            200: {
                x: 849.8,
                y: 924.25,
                sx: .476,
                sy: .476,
                kx: 3.105,
                ky: .037,
                a: 0
            }
        }).addTimedChild(instance37, 134, 64, {
            134: {
                x: 679.85,
                y: 693.45,
                sx: .269,
                sy: .269,
                r: -.067,
                a: 0
            },
            135: {
                x: 679.465,
                y: 693.808,
                sx: .271,
                sy: .271,
                r: -.073,
                a: .02
            },
            136: {
                x: 679.092,
                y: 694.225,
                sx: .273,
                sy: .273,
                r: -.079,
                a: .03
            },
            137: {
                x: 678.682,
                y: 694.555,
                sx: .275,
                sy: .275,
                r: -.086,
                a: .05
            },
            138: {
                x: 678.293,
                y: 694.902,
                sx: .277,
                sy: .277,
                r: -.092,
                a: .07
            },
            139: {
                x: 677.868,
                y: 695.337,
                sx: .279,
                sy: .279,
                r: -.098,
                a: .09
            },
            140: {
                x: 677.394,
                y: 695.788,
                sx: .28,
                sy: .28,
                r: -.104,
                a: .11
            },
            141: {
                x: 677.052,
                y: 696.173,
                sx: .282,
                sy: .282,
                r: -.11,
                a: .13
            },
            142: {
                x: 676.553,
                y: 696.618,
                sx: .284,
                sy: .284,
                r: -.117,
                a: .16
            },
            143: {
                x: 676.176,
                y: 697.087,
                sx: .286,
                sy: .286,
                r: -.123,
                a: .18
            },
            144: {
                x: 675.739,
                y: 697.561,
                sx: .288,
                sy: .288,
                r: -.129,
                a: .21
            },
            145: {
                x: 675.347,
                y: 698.034,
                sx: .29,
                sy: .29,
                r: -.135,
                a: .24
            },
            146: {
                x: 674.936,
                y: 698.502,
                sx: .292,
                sy: .292,
                r: -.141,
                a: .27
            },
            147: {
                x: 674.535,
                y: 699.105,
                sx: .293,
                sy: .293,
                r: -.147,
                a: .3
            },
            148: {
                x: 674.098,
                y: 699.588,
                sx: .295,
                sy: .295,
                r: -.154,
                a: .34
            },
            149: {
                x: 673.702,
                y: 700.113,
                sx: .297,
                sy: .297,
                r: -.16,
                a: .37
            },
            150: {
                x: 673.249,
                y: 700.726,
                sx: .299,
                sy: .299,
                r: -.166,
                a: .4
            },
            151: {
                x: 672.828,
                y: 701.245,
                sx: .301,
                sy: .301,
                r: -.172,
                a: .44
            },
            152: {
                x: 672.386,
                y: 701.83,
                sx: .303,
                sy: .303,
                r: -.178,
                a: .48
            },
            153: {
                x: 672.017,
                y: 702.439,
                sx: .304,
                sy: .304,
                r: -.185,
                a: .52
            },
            154: {
                x: 671.561,
                y: 703.078,
                sx: .306,
                sy: .306,
                r: -.191,
                a: .56
            },
            155: {
                x: 671.25,
                y: 703.7,
                sx: .308,
                sy: .308,
                r: -.197,
                a: .6
            },
            156: {
                x: 670.911,
                y: 704.459,
                sx: .309,
                sy: .309,
                r: -.203,
                a: .59
            },
            157: {
                x: 670.432,
                y: 705.204,
                sx: .31,
                sy: .31,
                r: -.209
            },
            158: {
                x: 670.055,
                y: 705.865,
                sx: .311,
                sy: .311,
                r: -.216,
                a: .58
            },
            159: {
                x: 669.638,
                y: 706.645,
                sx: .312,
                sy: .312,
                r: -.222,
                a: .57
            },
            160: {
                x: 669.255,
                y: 707.444,
                sx: .313,
                sy: .313,
                r: -.228,
                a: .56
            },
            161: {
                x: 668.841,
                y: 708.168,
                sx: .314,
                sy: .314,
                r: -.234,
                a: .55
            },
            162: {
                x: 668.539,
                y: 708.941,
                sx: .315,
                sy: .315,
                r: -.241,
                a: .54
            },
            163: {
                x: 668.067,
                y: 709.671,
                sx: .316,
                sy: .316,
                r: -.247
            },
            164: {
                x: 667.736,
                y: 710.478,
                sx: .317,
                sy: .317,
                r: -.253,
                a: .52
            },
            165: {
                x: 667.318,
                y: 711.282,
                sx: .318,
                sy: .318,
                r: -.259,
                a: .51
            },
            166: {
                x: 666.95,
                y: 712.095,
                sx: .319,
                sy: .319,
                r: -.266,
                a: .5
            },
            167: {
                x: 666.572,
                y: 712.854,
                sx: .32,
                sy: .32,
                r: -.272,
                a: .49
            },
            168: {
                x: 666.257,
                y: 713.712,
                r: -.278,
                a: .48
            },
            169: {
                x: 665.821,
                y: 714.527,
                sx: .321,
                sy: .321,
                r: -.284,
                a: .47
            },
            170: {
                x: 665.488,
                y: 715.379,
                sx: .322,
                sy: .322,
                r: -.29,
                a: .46
            },
            171: {
                x: 665.153,
                y: 716.235,
                sx: .323,
                sy: .323,
                r: -.297,
                a: .44
            },
            172: {
                x: 664.822,
                y: 717.032,
                sx: .324,
                sy: .324,
                r: -.303,
                a: .43
            },
            173: {
                x: 664.46,
                y: 717.927,
                sx: .325,
                sy: .325,
                r: -.309,
                a: .42
            },
            174: {
                x: 664.15,
                y: 718.787,
                sx: .326,
                sy: .326,
                r: -.315,
                a: .4
            },
            175: {
                x: 663.781,
                y: 719.665,
                sx: .327,
                sy: .327,
                r: -.322,
                a: .39
            },
            176: {
                x: 663.462,
                y: 720.601,
                sx: .328,
                sy: .328,
                r: -.328,
                a: .38
            },
            177: {
                x: 663.144,
                y: 721.442,
                sx: .329,
                sy: .329,
                r: -.334,
                a: .36
            },
            178: {
                x: 662.807,
                y: 722.352,
                sx: .33,
                sy: .33,
                r: -.34,
                a: .35
            },
            179: {
                x: 662.501,
                y: 723.27,
                sx: .331,
                sy: .331,
                r: -.347,
                a: .33
            },
            180: {
                x: 662.256,
                y: 724.185,
                sx: .332,
                sy: .332,
                r: -.353,
                a: .32
            },
            181: {
                x: 661.921,
                y: 725.086,
                sx: .333,
                sy: .333,
                r: -.359,
                a: .3
            },
            182: {
                x: 661.606,
                y: 726.014,
                sx: .334,
                sy: .334,
                r: -.365,
                a: .29
            },
            183: {
                x: 661.303,
                y: 726.989,
                sx: .335,
                sy: .335,
                r: -.371,
                a: .27
            },
            184: {
                x: 661.071,
                y: 727.943,
                sx: .336,
                sy: .336,
                r: -.378,
                a: .25
            },
            185: {
                x: 660.759,
                y: 728.924,
                r: -.384,
                a: .23
            },
            186: {
                x: 660.528,
                y: 729.812,
                sx: .337,
                sy: .337,
                r: -.39,
                a: .21
            },
            187: {
                x: 660.198,
                y: 730.837,
                sx: .338,
                sy: .338,
                r: -.396,
                a: .2
            },
            188: {
                x: 659.919,
                y: 731.82,
                sx: .339,
                sy: .339,
                r: -.403,
                a: .18
            },
            189: {
                x: 659.708,
                y: 732.846,
                sx: .34,
                sy: .34,
                r: -.409,
                a: .16
            },
            190: {
                x: 659.469,
                y: 733.822,
                sx: .341,
                sy: .341,
                r: -.415,
                a: .14
            },
            191: {
                x: 659.202,
                y: 734.787,
                sx: .342,
                sy: .342,
                r: -.421,
                a: .12
            },
            192: {
                x: 658.994,
                y: 735.808,
                sx: .343,
                sy: .343,
                r: -.428,
                a: .1
            },
            193: {
                x: 658.717,
                y: 736.845,
                sx: .344,
                sy: .344,
                r: -.434,
                a: .08
            },
            194: {
                x: 658.47,
                y: 737.889,
                sx: .345,
                sy: .345,
                r: -.44,
                a: .06
            },
            195: {
                x: 658.282,
                y: 738.92,
                sx: .346,
                sy: .346,
                r: -.446,
                a: .04
            },
            196: {
                x: 658.078,
                y: 739.898,
                sx: .347,
                sy: .347,
                r: -.453,
                a: .02
            },
            197: {
                x: 657.85,
                y: 740.95,
                sx: .348,
                sy: .348,
                r: -.459,
                a: 0
            }
        }).addTimedChild(instance35, 131, 64, {
            131: {
                x: 733.05,
                y: 636,
                sx: .369,
                sy: .369,
                kx: -.058,
                ky: -3.084,
                a: 0
            },
            132: {
                x: 734.228,
                y: 636.254,
                sx: .371,
                sy: .371,
                kx: -.065,
                ky: -3.077,
                a: .02
            },
            133: {
                x: 735.329,
                y: 636.497,
                sx: .374,
                sy: .374,
                kx: -.071,
                ky: -3.07,
                a: .05
            },
            134: {
                x: 736.488,
                y: 636.778,
                sx: .376,
                sy: .376,
                kx: -.078,
                ky: -3.064,
                a: .08
            },
            135: {
                x: 737.593,
                y: 637.066,
                sx: .379,
                sy: .379,
                kx: -.085,
                ky: -3.057,
                a: .11
            },
            136: {
                x: 738.767,
                y: 637.353,
                sx: .381,
                sy: .381,
                kx: -.091,
                ky: -3.05,
                a: .15
            },
            137: {
                x: 739.81,
                y: 637.687,
                sx: .384,
                sy: .384,
                kx: -.098,
                ky: -3.044,
                a: .18
            },
            138: {
                x: 740.978,
                y: 638.029,
                sx: .386,
                sy: .386,
                kx: -.104,
                ky: -3.037,
                a: .22
            },
            139: {
                x: 742.135,
                y: 638.347,
                sx: .389,
                sy: .389,
                kx: -.111,
                ky: -3.031,
                a: .26
            },
            140: {
                x: 743.28,
                y: 638.726,
                sx: .391,
                sy: .391,
                kx: -.118,
                ky: -3.024,
                a: .3
            },
            141: {
                x: 744.394,
                y: 639.131,
                sx: .394,
                sy: .394,
                kx: -.124,
                ky: -3.017,
                a: .35
            },
            142: {
                x: 745.521,
                y: 639.586,
                sx: .396,
                sy: .396,
                kx: -.131,
                ky: -3.011,
                a: .4
            },
            143: {
                x: 746.69,
                y: 640.007,
                sx: .399,
                sy: .399,
                kx: -.137,
                ky: -3.004,
                a: .45
            },
            144: {
                x: 747.765,
                y: 640.496,
                sx: .401,
                sy: .401,
                kx: -.144,
                ky: -2.998,
                a: .5
            },
            145: {
                x: 748.928,
                y: 641.024,
                sx: .404,
                sy: .404,
                kx: -.151,
                ky: -2.991,
                a: .55
            },
            146: {
                x: 750.068,
                y: 641.518,
                sx: .407,
                sy: .407,
                kx: -.157,
                ky: -2.984,
                a: .61
            },
            147: {
                x: 751.205,
                y: 642.019,
                sx: .409,
                sy: .409,
                kx: -.164,
                ky: -2.978,
                a: .67
            },
            148: {
                x: 752.341,
                y: 642.591,
                sx: .412,
                sy: .412,
                kx: -.171,
                ky: -2.971,
                a: .73
            },
            149: {
                x: 753.483,
                y: 643.179,
                sx: .414,
                sy: .414,
                kx: -.177,
                ky: -2.964,
                a: .8
            },
            150: {
                x: 754.62,
                y: 643.754,
                sx: .417,
                sy: .417,
                kx: -.184,
                ky: -2.958,
                a: .86
            },
            151: {
                x: 755.728,
                y: 644.348,
                sx: .419,
                sy: .419,
                kx: -.19,
                ky: -2.951,
                a: .93
            },
            152: {
                x: 756.85,
                y: 645,
                sx: .422,
                sy: .422,
                kx: -.197,
                ky: -2.945,
                a: 1
            },
            153: {
                x: 757.56,
                y: 645.612,
                sx: .423,
                sy: .423,
                kx: -.202,
                ky: -2.94,
                a: .99
            },
            154: {
                x: 758.232,
                y: 646.21,
                sx: .424,
                sy: .424,
                kx: -.206,
                ky: -2.935,
                a: .98
            },
            155: {
                x: 758.958,
                y: 646.75,
                sx: .426,
                sy: .426,
                kx: -.211,
                ky: -2.931,
                a: .96
            },
            156: {
                x: 759.674,
                y: 647.352,
                sx: .427,
                sy: .427,
                kx: -.216,
                ky: -2.926,
                a: .95
            },
            157: {
                x: 760.329,
                y: 647.969,
                sx: .428,
                sy: .428,
                kx: -.22,
                ky: -2.921,
                a: .93
            },
            158: {
                x: 760.96,
                y: 648.578,
                sx: .429,
                sy: .429,
                kx: -.225,
                ky: -2.917,
                a: .92
            },
            159: {
                x: 761.707,
                y: 649.179,
                sx: .431,
                sy: .431,
                kx: -.23,
                ky: -2.912,
                a: .9
            },
            160: {
                x: 762.39,
                y: 649.784,
                sx: .432,
                sy: .432,
                kx: -.234,
                ky: -2.907,
                a: .89
            },
            161: {
                x: 762.992,
                y: 650.403,
                sx: .433,
                sy: .433,
                kx: -.239,
                ky: -2.903,
                a: .87
            },
            162: {
                x: 763.663,
                y: 651.086,
                sx: .435,
                sy: .435,
                kx: -.244,
                ky: -2.898,
                a: .85
            },
            163: {
                x: 764.378,
                y: 651.74,
                sx: .436,
                sy: .436,
                kx: -.248,
                ky: -2.893,
                a: .84
            },
            164: {
                x: 765.056,
                y: 652.326,
                sx: .437,
                sy: .437,
                kx: -.253,
                ky: -2.889,
                a: .82
            },
            165: {
                x: 765.672,
                y: 652.988,
                sx: .439,
                sy: .439,
                kx: -.258,
                ky: -2.884,
                a: .8
            },
            166: {
                x: 766.351,
                y: 653.699,
                sx: .44,
                sy: .44,
                kx: -.262,
                ky: -2.879,
                a: .78
            },
            167: {
                x: 767.002,
                y: 654.416,
                sx: .441,
                sy: .441,
                kx: -.267,
                ky: -2.875,
                a: .76
            },
            168: {
                x: 767.638,
                y: 655.067,
                sx: .442,
                sy: .442,
                kx: -.272,
                ky: -2.87,
                a: .74
            },
            169: {
                x: 768.262,
                y: 655.758,
                sx: .444,
                sy: .444,
                kx: -.276,
                ky: -2.865,
                a: .71
            },
            170: {
                x: 769.004,
                y: 656.462,
                sx: .445,
                sy: .445,
                kx: -.281,
                ky: -2.861,
                a: .7
            },
            171: {
                x: 769.618,
                y: 657.202,
                sx: .446,
                sy: .446,
                kx: -.286,
                ky: -2.856,
                a: .67
            },
            172: {
                x: 770.262,
                y: 657.881,
                sx: .448,
                sy: .448,
                kx: -.29,
                ky: -2.851,
                a: .65
            },
            173: {
                x: 770.889,
                y: 658.627,
                sx: .449,
                sy: .449,
                kx: -.295,
                ky: -2.847,
                a: .63
            },
            174: {
                x: 771.542,
                y: 659.282,
                sx: .45,
                sy: .45,
                kx: -.3,
                ky: -2.842,
                a: .6
            },
            175: {
                x: 772.171,
                y: 660.104,
                sx: .451,
                sy: .451,
                kx: -.304,
                ky: -2.837,
                a: .58
            },
            176: {
                x: 772.74,
                y: 660.837,
                sx: .453,
                sy: .453,
                kx: -.309,
                ky: -2.833,
                a: .55
            },
            177: {
                x: 773.438,
                y: 661.621,
                sx: .454,
                sy: .454,
                kx: -.314,
                ky: -2.828,
                a: .52
            },
            178: {
                x: 774.009,
                y: 662.351,
                sx: .455,
                sy: .455,
                kx: -.318,
                ky: -2.823,
                a: .5
            },
            179: {
                x: 774.683,
                y: 663.153,
                sx: .457,
                sy: .457,
                kx: -.323,
                ky: -2.819,
                a: .47
            },
            180: {
                x: 775.262,
                y: 663.886,
                sx: .458,
                sy: .458,
                kx: -.328,
                ky: -2.814,
                a: .45
            },
            181: {
                x: 775.875,
                y: 664.703,
                sx: .459,
                sy: .459,
                kx: -.332,
                ky: -2.809,
                a: .42
            },
            182: {
                x: 776.47,
                y: 665.565,
                sx: .46,
                sy: .46,
                kx: -.337,
                ky: -2.805,
                a: .39
            },
            183: {
                x: 777.081,
                y: 666.297,
                sx: .462,
                sy: .462,
                kx: -.342,
                ky: -2.8,
                a: .36
            },
            184: {
                x: 777.687,
                y: 667.122,
                sx: .463,
                sy: .463,
                kx: -.346,
                ky: -2.795,
                a: .33
            },
            185: {
                x: 778.285,
                y: 667.931,
                sx: .464,
                sy: .464,
                kx: -.351,
                ky: -2.791,
                a: .3
            },
            186: {
                x: 778.891,
                y: 668.793,
                sx: .466,
                sy: .466,
                kx: -.356,
                ky: -2.786,
                a: .27
            },
            187: {
                x: 779.488,
                y: 669.656,
                sx: .467,
                sy: .467,
                kx: -.36,
                ky: -2.781,
                a: .23
            },
            188: {
                x: 780.078,
                y: 670.452,
                sx: .468,
                sy: .468,
                kx: -.365,
                ky: -2.777,
                a: .2
            },
            189: {
                x: 780.655,
                y: 671.324,
                sx: .47,
                sy: .47,
                kx: -.37,
                ky: -2.772,
                a: .17
            },
            190: {
                x: 781.184,
                y: 672.185,
                sx: .471,
                sy: .471,
                kx: -.374,
                ky: -2.767,
                a: .14
            },
            191: {
                x: 781.828,
                y: 673.049,
                sx: .472,
                sy: .472,
                kx: -.379,
                ky: -2.763,
                a: .11
            },
            192: {
                x: 782.345,
                y: 673.887,
                sx: .473,
                sy: .473,
                kx: -.384,
                ky: -2.758,
                a: .07
            },
            193: {
                x: 782.919,
                y: 674.779,
                sx: .475,
                sy: .475,
                kx: -.388,
                ky: -2.753,
                a: .04
            },
            194: {
                x: 783.45,
                y: 675.7,
                sx: .476,
                sy: .476,
                kx: -.393,
                ky: -2.749,
                a: 0
            }
        }).addTimedChild(instance36, 134, 64, {
            134: {
                x: 534.7,
                y: 692.8,
                sx: .269,
                sy: .269,
                kx: -.062,
                ky: -3.08,
                a: 0
            },
            135: {
                x: 534.312,
                y: 693.203,
                sx: .271,
                sy: .271,
                kx: -.068,
                ky: -3.073,
                a: .02
            },
            136: {
                x: 533.811,
                y: 693.556,
                sx: .273,
                sy: .273,
                kx: -.075,
                ky: -3.067,
                a: .03
            },
            137: {
                x: 533.417,
                y: 693.946,
                sx: .275,
                sy: .275,
                kx: -.081,
                ky: -3.061,
                a: .05
            },
            138: {
                x: 532.984,
                y: 694.404,
                sx: .277,
                sy: .277,
                kx: -.087,
                ky: -3.054,
                a: .07
            },
            139: {
                x: 532.527,
                y: 694.819,
                sx: .279,
                sy: .279,
                kx: -.094,
                ky: -3.048,
                a: .09
            },
            140: {
                x: 532.071,
                y: 695.242,
                sx: .28,
                sy: .28,
                kx: -.1,
                ky: -3.041,
                a: .11
            },
            141: {
                x: 531.667,
                y: 695.741,
                sx: .282,
                sy: .282,
                kx: -.107,
                ky: -3.035,
                a: .13
            },
            142: {
                x: 531.187,
                y: 696.193,
                sx: .284,
                sy: .284,
                kx: -.113,
                ky: -3.028,
                a: .16
            },
            143: {
                x: 530.756,
                y: 696.676,
                sx: .286,
                sy: .286,
                kx: -.12,
                ky: -3.022,
                a: .18
            },
            144: {
                x: 530.359,
                y: 697.16,
                sx: .288,
                sy: .288,
                kx: -.126,
                ky: -3.015,
                a: .21
            },
            145: {
                x: 529.899,
                y: 697.694,
                sx: .29,
                sy: .29,
                kx: -.133,
                ky: -3.009,
                a: .24
            },
            146: {
                x: 529.486,
                y: 698.204,
                sx: .292,
                sy: .292,
                kx: -.139,
                ky: -3.003,
                a: .27
            },
            147: {
                x: 529.078,
                y: 698.721,
                sx: .293,
                sy: .293,
                kx: -.145,
                ky: -2.996,
                a: .3
            },
            148: {
                x: 528.548,
                y: 699.277,
                sx: .295,
                sy: .295,
                kx: -.152,
                ky: -2.99,
                a: .34
            },
            149: {
                x: 528.175,
                y: 699.92,
                sx: .297,
                sy: .297,
                kx: -.158,
                ky: -2.983,
                a: .37
            },
            150: {
                x: 527.747,
                y: 700.46,
                sx: .299,
                sy: .299,
                kx: -.165,
                ky: -2.977,
                a: .4
            },
            151: {
                x: 527.274,
                y: 701.051,
                sx: .301,
                sy: .301,
                kx: -.171,
                ky: -2.97,
                a: .44
            },
            152: {
                x: 526.823,
                y: 701.706,
                sx: .303,
                sy: .303,
                kx: -.178,
                ky: -2.964,
                a: .48
            },
            153: {
                x: 526.455,
                y: 702.362,
                sx: .304,
                sy: .304,
                kx: -.184,
                ky: -2.958,
                a: .52
            },
            154: {
                x: 525.955,
                y: 702.965,
                sx: .306,
                sy: .306,
                kx: -.19,
                ky: -2.951,
                a: .56
            },
            155: {
                x: 525.6,
                y: 703.7,
                sx: .308,
                sy: .308,
                kx: -.197,
                ky: -2.945,
                a: .6
            },
            156: {
                x: 525.436,
                y: 704.059,
                sx: .309,
                sy: .309,
                kx: -.2,
                ky: -2.941,
                a: .59
            },
            157: {
                x: 525.163,
                y: 704.356,
                sx: .31,
                sy: .31,
                kx: -.203,
                ky: -2.938
            },
            158: {
                x: 524.977,
                y: 704.735,
                sx: .311,
                sy: .311,
                kx: -.207,
                ky: -2.935,
                a: .58
            },
            159: {
                x: 524.717,
                y: 705.077,
                sx: .312,
                sy: .312,
                kx: -.21,
                ky: -2.932,
                a: .57
            },
            160: {
                x: 524.522,
                y: 705.413,
                sx: .313,
                sy: .313,
                kx: -.213,
                ky: -2.929,
                a: .56
            },
            161: {
                x: 524.269,
                y: 705.787,
                sx: .314,
                sy: .314,
                kx: -.216,
                ky: -2.925,
                a: .55
            },
            162: {
                x: 524.031,
                y: 706.137,
                sx: .315,
                sy: .315,
                kx: -.219,
                ky: -2.922,
                a: .54
            },
            163: {
                x: 523.83,
                y: 706.514,
                sx: .316,
                sy: .316,
                kx: -.223,
                ky: -2.919
            },
            164: {
                x: 523.605,
                y: 706.909,
                sx: .317,
                sy: .317,
                kx: -.226,
                ky: -2.916,
                a: .52
            },
            165: {
                x: 523.314,
                y: 707.299,
                sx: .318,
                sy: .318,
                kx: -.229,
                ky: -2.912,
                a: .51
            },
            166: {
                x: 523.099,
                y: 707.657,
                sx: .319,
                sy: .319,
                kx: -.232,
                ky: -2.909,
                a: .5
            },
            167: {
                x: 522.82,
                y: 707.992,
                sx: .32,
                sy: .32,
                kx: -.236,
                ky: -2.906,
                a: .49
            },
            168: {
                x: 522.669,
                y: 708.393,
                kx: -.239,
                ky: -2.903,
                a: .48
            },
            169: {
                x: 522.422,
                y: 708.825,
                sx: .321,
                sy: .321,
                kx: -.242,
                ky: -2.9,
                a: .47
            },
            170: {
                x: 522.187,
                y: 709.152,
                sx: .322,
                sy: .322,
                kx: -.245,
                ky: -2.896,
                a: .46
            },
            171: {
                x: 521.898,
                y: 709.552,
                sx: .323,
                sy: .323,
                kx: -.248,
                ky: -2.893,
                a: .44
            },
            172: {
                x: 521.731,
                y: 710.003,
                sx: .324,
                sy: .324,
                kx: -.252,
                ky: -2.89,
                a: .43
            },
            173: {
                x: 521.426,
                y: 710.348,
                sx: .325,
                sy: .325,
                kx: -.255,
                ky: -2.887,
                a: .42
            },
            174: {
                x: 521.271,
                y: 710.794,
                sx: .326,
                sy: .326,
                kx: -.258,
                ky: -2.883,
                a: .4
            },
            175: {
                x: 520.968,
                y: 711.191,
                sx: .327,
                sy: .327,
                kx: -.261,
                ky: -2.88,
                a: .39
            },
            176: {
                x: 520.794,
                y: 711.584,
                sx: .328,
                sy: .328,
                kx: -.265,
                ky: -2.877,
                a: .38
            },
            177: {
                x: 520.53,
                y: 712.044,
                sx: .329,
                sy: .329,
                kx: -.268,
                ky: -2.874,
                a: .36
            },
            178: {
                x: 520.247,
                y: 712.448,
                sx: .33,
                sy: .33,
                kx: -.271,
                ky: -2.871,
                a: .35
            },
            179: {
                x: 520.066,
                y: 712.903,
                sx: .331,
                sy: .331,
                kx: -.274,
                ky: -2.867,
                a: .33
            },
            180: {
                x: 519.785,
                y: 713.309,
                sx: .332,
                sy: .332,
                kx: -.277,
                ky: -2.864,
                a: .32
            },
            181: {
                x: 519.589,
                y: 713.744,
                sx: .333,
                sy: .333,
                kx: -.281,
                ky: -2.861,
                a: .3
            },
            182: {
                x: 519.304,
                y: 714.173,
                sx: .334,
                sy: .334,
                kx: -.284,
                ky: -2.858,
                a: .29
            },
            183: {
                x: 519.088,
                y: 714.625,
                sx: .335,
                sy: .335,
                kx: -.287,
                ky: -2.854,
                a: .27
            },
            184: {
                x: 518.779,
                y: 715.089,
                sx: .336,
                sy: .336,
                kx: -.29,
                ky: -2.851,
                a: .25
            },
            185: {
                x: 518.612,
                y: 715.542,
                kx: -.294,
                ky: -2.848,
                a: .23
            },
            186: {
                x: 518.297,
                y: 715.948,
                sx: .337,
                sy: .337,
                kx: -.297,
                ky: -2.845,
                a: .21
            },
            187: {
                x: 518.133,
                y: 716.403,
                sx: .338,
                sy: .338,
                kx: -.3,
                ky: -2.842,
                a: .2
            },
            188: {
                x: 517.83,
                y: 716.853,
                sx: .339,
                sy: .339,
                kx: -.303,
                ky: -2.838,
                a: .18
            },
            189: {
                x: 517.643,
                y: 717.279,
                sx: .34,
                sy: .34,
                kx: -.306,
                ky: -2.835,
                a: .16
            },
            190: {
                x: 517.322,
                y: 717.727,
                sx: .341,
                sy: .341,
                kx: -.31,
                ky: -2.832,
                a: .14
            },
            191: {
                x: 517.119,
                y: 718.248,
                sx: .342,
                sy: .342,
                kx: -.313,
                ky: -2.829,
                a: .12
            },
            192: {
                x: 516.849,
                y: 718.698,
                sx: .343,
                sy: .343,
                kx: -.316,
                ky: -2.826,
                a: .1
            },
            193: {
                x: 516.65,
                y: 719.154,
                sx: .344,
                sy: .344,
                kx: -.319,
                ky: -2.822,
                a: .08
            },
            194: {
                x: 516.283,
                y: 719.706,
                sx: .345,
                sy: .345,
                kx: -.322,
                ky: -2.819,
                a: .06
            },
            195: {
                x: 516.091,
                y: 720.177,
                sx: .346,
                sy: .346,
                kx: -.326,
                ky: -2.816,
                a: .04
            },
            196: {
                x: 515.833,
                y: 720.642,
                sx: .347,
                sy: .347,
                kx: -.329,
                ky: -2.813,
                a: .02
            },
            197: {
                x: 515.5,
                y: 721.1,
                sx: .348,
                sy: .348,
                kx: -.332,
                ky: -2.809,
                a: 0
            }
        }).addTimedChild(instance40, 137, 64, {
            137: {
                x: 162.15,
                y: 705.5,
                sx: .774,
                sy: .774,
                r: -.144,
                a: 0
            },
            138: {
                x: 159.106,
                y: 704.149,
                sx: .78,
                sy: .78,
                r: -.137,
                a: .02
            },
            139: {
                x: 155.963,
                y: 702.765,
                sx: .785,
                sy: .785,
                r: -.13,
                a: .05
            },
            140: {
                x: 152.925,
                y: 701.379,
                sx: .79,
                sy: .79,
                r: -.123,
                a: .08
            },
            141: {
                x: 149.83,
                y: 699.923,
                sx: .796,
                sy: .796,
                r: -.116,
                a: .11
            },
            142: {
                x: 146.746,
                y: 698.542,
                sx: .801,
                sy: .801,
                r: -.11,
                a: .15
            },
            143: {
                x: 143.667,
                y: 697.098,
                sx: .806,
                sy: .806,
                r: -.103,
                a: .18
            },
            144: {
                x: 140.623,
                y: 695.613,
                sx: .812,
                sy: .812,
                r: -.096,
                a: .22
            },
            145: {
                x: 137.598,
                y: 694.224,
                sx: .817,
                sy: .817,
                r: -.089,
                a: .26
            },
            146: {
                x: 134.56,
                y: 692.704,
                sx: .822,
                sy: .822,
                r: -.082,
                a: .3
            },
            147: {
                x: 131.573,
                y: 691.25,
                sx: .827,
                sy: .827,
                r: -.075,
                a: .35
            },
            148: {
                x: 128.64,
                y: 689.795,
                sx: .833,
                sy: .833,
                r: -.068,
                a: .4
            },
            149: {
                x: 125.637,
                y: 688.327,
                sx: .838,
                sy: .838,
                r: -.062,
                a: .45
            },
            150: {
                x: 122.642,
                y: 686.807,
                sx: .843,
                sy: .843,
                r: -.055,
                a: .5
            },
            151: {
                x: 119.684,
                y: 685.307,
                sx: .849,
                sy: .849,
                r: -.048,
                a: .55
            },
            152: {
                x: 116.801,
                y: 683.778,
                sx: .854,
                sy: .854,
                r: -.041,
                a: .61
            },
            153: {
                x: 113.854,
                y: 682.169,
                sx: .859,
                sy: .859,
                r: -.034,
                a: .67
            },
            154: {
                x: 110.925,
                y: 680.695,
                sx: .865,
                sy: .865,
                r: -.027,
                a: .73
            },
            155: {
                x: 108.04,
                y: 679.076,
                sx: .87,
                sy: .87,
                r: -.021,
                a: .8
            },
            156: {
                x: 105.157,
                y: 677.574,
                sx: .875,
                sy: .875,
                r: -.014,
                a: .86
            },
            157: {
                x: 102.271,
                y: 675.989,
                sx: .881,
                sy: .881,
                r: -.007,
                a: .93
            },
            158: {
                x: 99.4,
                y: 674.45,
                sx: .886,
                sy: .886,
                r: 0,
                a: 1
            },
            159: {
                x: 98.089,
                y: 673.577,
                sx: .889,
                sy: .889,
                r: .004,
                a: .99
            },
            160: {
                x: 96.686,
                y: 672.6,
                sx: .891,
                sy: .891,
                r: .009,
                a: .98
            },
            161: {
                x: 95.369,
                y: 671.654,
                sx: .894,
                sy: .894,
                r: .013,
                a: .96
            },
            162: {
                x: 93.984,
                y: 670.671,
                sx: .897,
                sy: .897,
                r: .017,
                a: .95
            },
            163: {
                x: 92.625,
                y: 669.771,
                sx: .9,
                sy: .9,
                r: .022,
                a: .93
            },
            164: {
                x: 91.253,
                y: 668.812,
                sx: .902,
                sy: .902,
                r: .026,
                a: .92
            },
            165: {
                x: 89.91,
                y: 667.896,
                sx: .905,
                sy: .905,
                r: .03,
                a: .9
            },
            166: {
                x: 88.545,
                y: 666.922,
                sx: .908,
                sy: .908,
                r: .035,
                a: .89
            },
            167: {
                x: 87.265,
                y: 665.969,
                sx: .91,
                sy: .91,
                r: .039,
                a: .87
            },
            168: {
                x: 85.864,
                y: 665.019,
                sx: .913,
                sy: .913,
                r: .043,
                a: .85
            },
            169: {
                x: 84.578,
                y: 664.043,
                sx: .916,
                sy: .916,
                r: .048,
                a: .84
            },
            170: {
                x: 83.292,
                y: 663.067,
                sx: .919,
                sy: .919,
                r: .052,
                a: .82
            },
            171: {
                x: 81.933,
                y: 662.133,
                sx: .921,
                sy: .921,
                r: .056,
                a: .8
            },
            172: {
                x: 80.652,
                y: 661.182,
                sx: .924,
                sy: .924,
                r: .061,
                a: .78
            },
            173: {
                x: 79.308,
                y: 660.172,
                sx: .927,
                sy: .927,
                r: .065,
                a: .76
            },
            174: {
                x: 78.091,
                y: 659.245,
                sx: .929,
                sy: .929,
                r: .069,
                a: .74
            },
            175: {
                x: 76.751,
                y: 658.26,
                sx: .932,
                sy: .932,
                r: .074,
                a: .71
            },
            176: {
                x: 75.438,
                y: 657.258,
                sx: .935,
                sy: .935,
                r: .078,
                a: .7
            },
            177: {
                x: 74.165,
                y: 656.257,
                sx: .938,
                sy: .938,
                r: .082,
                a: .67
            },
            178: {
                x: 72.877,
                y: 655.327,
                sx: .94,
                sy: .94,
                r: .087,
                a: .65
            },
            179: {
                x: 71.618,
                y: 654.3,
                sx: .943,
                sy: .943,
                r: .091,
                a: .63
            },
            180: {
                x: 70.383,
                y: 653.285,
                sx: .946,
                sy: .946,
                r: .095,
                a: .6
            },
            181: {
                x: 69.14,
                y: 652.292,
                sx: .948,
                sy: .948,
                r: .1,
                a: .58
            },
            182: {
                x: 67.861,
                y: 651.362,
                sx: .951,
                sy: .951,
                r: .104,
                a: .55
            },
            183: {
                x: 66.621,
                y: 650.334,
                sx: .954,
                sy: .954,
                r: .108,
                a: .52
            },
            184: {
                x: 65.316,
                y: 649.377,
                sx: .957,
                sy: .957,
                r: .113,
                a: .5
            },
            185: {
                x: 64.148,
                y: 648.35,
                sx: .959,
                sy: .959,
                r: .117,
                a: .47
            },
            186: {
                x: 62.849,
                y: 647.378,
                sx: .962,
                sy: .962,
                r: .121,
                a: .45
            },
            187: {
                x: 61.688,
                y: 646.397,
                sx: .965,
                sy: .965,
                r: .126,
                a: .42
            },
            188: {
                x: 60.414,
                y: 645.398,
                sx: .967,
                sy: .967,
                r: .13,
                a: .39
            },
            189: {
                x: 59.217,
                y: 644.38,
                sx: .97,
                sy: .97,
                r: .134,
                a: .36
            },
            190: {
                x: 58.037,
                y: 643.407,
                sx: .973,
                sy: .973,
                r: .139,
                a: .33
            },
            191: {
                x: 56.804,
                y: 642.413,
                sx: .976,
                sy: .976,
                r: .143,
                a: .3
            },
            192: {
                x: 55.606,
                y: 641.39,
                sx: .978,
                sy: .978,
                r: .147,
                a: .27
            },
            193: {
                x: 54.437,
                y: 640.37,
                sx: .981,
                sy: .981,
                r: .152,
                a: .23
            },
            194: {
                x: 53.245,
                y: 639.383,
                sx: .984,
                sy: .984,
                r: .156,
                a: .2
            },
            195: {
                x: 52.091,
                y: 638.386,
                sx: .986,
                sy: .986,
                r: .16,
                a: .17
            },
            196: {
                x: 50.914,
                y: 637.372,
                sx: .989,
                sy: .989,
                r: .165,
                a: .14
            },
            197: {
                x: 49.674,
                y: 636.35,
                sx: .992,
                sy: .992,
                r: .169,
                a: .11
            },
            198: {
                x: 48.558,
                y: 635.339,
                sx: .995,
                sy: .995,
                r: .173,
                a: .07
            },
            199: {
                x: 47.383,
                y: 634.34,
                sx: .997,
                sy: .997,
                r: .178,
                a: .04
            },
            200: {
                x: 46.2,
                y: 633.35,
                sx: 1,
                sy: 1,
                r: .182,
                a: 0
            }
        }).addTimedChild(instance34, 131, 49, {
            131: {
                x: 431,
                y: 727,
                sx: 3.305,
                sy: .546,
                a: .1
            },
            132: {
                x: 383.916,
                y: 719.719,
                sx: 4.046,
                sy: .668,
                a: .14
            },
            133: {
                x: 336.788,
                y: 712.35,
                sx: 4.787,
                sy: .79,
                a: .19
            },
            134: {
                x: 289.648,
                y: 705.069,
                sx: 5.528,
                sy: .913,
                a: .23
            },
            135: {
                x: 242.57,
                y: 697.699,
                sx: 6.269,
                sy: 1.035,
                a: .28
            },
            136: {
                x: 195.443,
                y: 690.402,
                sx: 7.01,
                sy: 1.157,
                a: .32
            },
            137: {
                x: 148.365,
                y: 683.082,
                sx: 7.751,
                sy: 1.279,
                a: .37
            },
            138: {
                x: 101.225,
                y: 675.741,
                sx: 8.492,
                sy: 1.402,
                a: .41
            },
            139: {
                x: 54.147,
                y: 668.432,
                sx: 9.233,
                sy: 1.524,
                a: .46
            },
            140: {
                x: 7.1,
                y: 661,
                sx: 9.974,
                sy: 1.646,
                a: .5
            },
            141: {
                x: .92,
                y: 656.926,
                sx: 10.073,
                sy: 1.715,
                a: .49
            },
            142: {
                x: -5.459,
                y: 652.822,
                sx: 10.173,
                sy: 1.784,
                a: .47
            },
            143: {
                x: -11.788,
                y: 648.697,
                sx: 10.272,
                sy: 1.853,
                a: .46
            },
            144: {
                x: -18.167,
                y: 644.553,
                sx: 10.372,
                sy: 1.922,
                a: .45
            },
            145: {
                x: -24.446,
                y: 640.429,
                sx: 10.471,
                sy: 1.991,
                a: .44
            },
            146: {
                x: -30.825,
                y: 636.315,
                sx: 10.571,
                sy: 2.059,
                a: .42
            },
            147: {
                x: -37.204,
                y: 632.211,
                sx: 10.671,
                sy: 2.128,
                a: .41
            },
            148: {
                x: -43.533,
                y: 628.096,
                sx: 10.77,
                sy: 2.197,
                a: .4
            },
            149: {
                x: -49.912,
                y: 623.992,
                sx: 10.87,
                sy: 2.266,
                a: .38
            },
            150: {
                x: -56.241,
                y: 619.868,
                sx: 10.97,
                sy: 2.335,
                a: .37
            },
            151: {
                x: -62.571,
                y: 615.724,
                sx: 11.069,
                sy: 2.404,
                a: .36
            },
            152: {
                x: -68.9,
                y: 611.6,
                sx: 11.169,
                sy: 2.472,
                a: .35
            },
            153: {
                x: -75.279,
                y: 607.486,
                sx: 11.268,
                sy: 2.541,
                a: .33
            },
            154: {
                x: -81.608,
                y: 603.332,
                sx: 11.368,
                sy: 2.61,
                a: .32
            },
            155: {
                x: -87.937,
                y: 599.217,
                sx: 11.468,
                sy: 2.679,
                a: .31
            },
            156: {
                x: -94.316,
                y: 595.113,
                sx: 11.567,
                sy: 2.748,
                a: .29
            },
            157: {
                x: -100.645,
                y: 590.989,
                sx: 11.667,
                sy: 2.817,
                a: .28
            },
            158: {
                x: -106.974,
                y: 586.875,
                sx: 11.766,
                sy: 2.886,
                a: .27
            },
            159: {
                x: -113.303,
                y: 582.721,
                sx: 11.866,
                sy: 2.954,
                a: .26
            },
            160: {
                x: -119.682,
                y: 578.656,
                sx: 11.966,
                sy: 3.023,
                a: .24
            },
            161: {
                x: -126.012,
                y: 574.502,
                sx: 12.065,
                sy: 3.092,
                a: .23
            },
            162: {
                x: -132.341,
                y: 570.388,
                sx: 12.165,
                sy: 3.161,
                a: .22
            },
            163: {
                x: -138.67,
                y: 566.264,
                sx: 12.265,
                sy: 3.23,
                a: .21
            },
            164: {
                x: -145.049,
                y: 562.16,
                sx: 12.364,
                sy: 3.299,
                a: .19
            },
            165: {
                x: -151.378,
                y: 558.046,
                sx: 12.464,
                sy: 3.367,
                a: .18
            },
            166: {
                x: -157.707,
                y: 553.891,
                sx: 12.563,
                sy: 3.436,
                a: .17
            },
            167: {
                x: -164.086,
                y: 549.777,
                sx: 12.663,
                sy: 3.505,
                a: .15
            },
            168: {
                x: -170.415,
                y: 545.663,
                sx: 12.762,
                sy: 3.574,
                a: .14
            },
            169: {
                x: -176.744,
                y: 541.509,
                sx: 12.862,
                sy: 3.643,
                a: .13
            },
            170: {
                x: -183.073,
                y: 537.395,
                sx: 12.962,
                sy: 3.712,
                a: .12
            },
            171: {
                x: -189.452,
                y: 533.291,
                sx: 13.061,
                sy: 3.78,
                a: .1
            },
            172: {
                x: -195.782,
                y: 529.166,
                sx: 13.161,
                sy: 3.849,
                a: .09
            },
            173: {
                x: -202.111,
                y: 525.072,
                sx: 13.261,
                sy: 3.918,
                a: .08
            },
            174: {
                x: -208.49,
                y: 520.948,
                sx: 13.36,
                sy: 3.987,
                a: .06
            },
            175: {
                x: -214.819,
                y: 516.834,
                sx: 13.46,
                sy: 4.056,
                a: .05
            },
            176: {
                x: -221.148,
                y: 512.68,
                sx: 13.56,
                sy: 4.125,
                a: .04
            },
            177: {
                x: -227.477,
                y: 508.565,
                sx: 13.659,
                sy: 4.194,
                a: .03
            },
            178: {
                x: -233.856,
                y: 504.461,
                sx: 13.759,
                sy: 4.262,
                a: .01
            },
            179: {
                x: -239.7,
                y: 500.2,
                sx: 13.859,
                sy: 4.331,
                a: 0
            }
        }).addTimedChild(instance43, 145, 23, {
            145: {
                x: 658.35,
                y: 841.05,
                sx: .273,
                sy: .273,
                r: -1.43,
                a: 1
            },
            146: {
                x: 655.892,
                y: 841.407,
                sx: .321,
                sy: .321,
                r: -1.354
            },
            147: {
                x: 653.287,
                y: 841.263,
                sx: .369,
                sy: .369,
                r: -1.277
            },
            148: {
                x: 650.557,
                y: 840.633,
                sx: .417,
                sy: .417,
                r: -1.201
            },
            149: {
                x: 647.921,
                y: 839.645,
                sx: .465,
                sy: .465,
                r: -1.124
            },
            150: {
                x: 645.17,
                y: 838.104,
                sx: .513,
                sy: .513,
                r: -1.048
            },
            151: {
                x: 642.561,
                y: 836.042,
                sx: .561,
                sy: .561,
                r: -.971
            },
            152: {
                x: 640.043,
                y: 833.536,
                sx: .609,
                sy: .609,
                r: -.894
            },
            153: {
                x: 637.668,
                y: 830.604,
                sx: .657,
                sy: .657,
                r: -.818
            },
            154: {
                x: 635.545,
                y: 827.167,
                sx: .704,
                sy: .704,
                r: -.741
            },
            155: {
                x: 633.85,
                y: 823.45,
                sx: .752,
                sy: .752,
                r: -.665
            },
            156: {
                x: 634.435,
                y: 820.89,
                sx: .765,
                sy: .765,
                r: -.609,
                a: .92
            },
            157: {
                x: 635.039,
                y: 818.271,
                sx: .777,
                sy: .777,
                r: -.554,
                a: .83
            },
            158: {
                x: 635.959,
                y: 815.627,
                sx: .789,
                sy: .789,
                r: -.499,
                a: .75
            },
            159: {
                x: 636.928,
                y: 812.955,
                sx: .801,
                sy: .801,
                r: -.443,
                a: .67
            },
            160: {
                x: 638.058,
                y: 810.247,
                sx: .813,
                sy: .813,
                r: -.388,
                a: .58
            },
            161: {
                x: 639.403,
                y: 807.514,
                sx: .825,
                sy: .825,
                r: -.332,
                a: .5
            },
            162: {
                x: 640.926,
                y: 804.79,
                sx: .837,
                sy: .837,
                r: -.277,
                a: .42
            },
            163: {
                x: 642.6,
                y: 802.069,
                sx: .85,
                sy: .85,
                r: -.222,
                a: .33
            },
            164: {
                x: 644.48,
                y: 799.374,
                sx: .862,
                sy: .862,
                r: -.166,
                a: .25
            },
            165: {
                x: 646.511,
                y: 796.691,
                sx: .874,
                sy: .874,
                r: -.111,
                a: .17
            },
            166: {
                x: 648.714,
                y: 794.092,
                sx: .886,
                sy: .886,
                r: -.055,
                a: .08
            },
            167: {
                x: 651.05,
                y: 791.65,
                sx: .898,
                sy: .898,
                r: 0,
                a: 0
            }
        }).addTimedChild(instance42, 145, 23, {
            145: {
                x: 578.35,
                y: 695.25,
                sx: .273,
                sy: .273,
                r: -1.43,
                a: 1
            },
            146: {
                x: 575.905,
                y: 695.62,
                sx: .321,
                sy: .321,
                r: -1.354
            },
            147: {
                x: 573.303,
                y: 695.443,
                sx: .369,
                sy: .369,
                r: -1.277
            },
            148: {
                x: 570.61,
                y: 694.847,
                sx: .417,
                sy: .417,
                r: -1.201
            },
            149: {
                x: 567.907,
                y: 693.826,
                sx: .465,
                sy: .465,
                r: -1.124
            },
            150: {
                x: 565.231,
                y: 692.297,
                sx: .513,
                sy: .513,
                r: -1.048
            },
            151: {
                x: 562.547,
                y: 690.241,
                sx: .561,
                sy: .561,
                r: -.971
            },
            152: {
                x: 560.036,
                y: 687.804,
                sx: .609,
                sy: .609,
                r: -.894
            },
            153: {
                x: 557.712,
                y: 684.816,
                sx: .657,
                sy: .657,
                r: -.818
            },
            154: {
                x: 555.599,
                y: 681.394,
                sx: .704,
                sy: .704,
                r: -.741
            },
            155: {
                x: 553.85,
                y: 677.65,
                sx: .752,
                sy: .752,
                r: -.665
            },
            156: {
                x: 554.467,
                y: 675.117,
                sx: .765,
                sy: .765,
                r: -.609,
                a: .92
            },
            157: {
                x: 555.05,
                y: 672.505,
                sx: .777,
                sy: .777,
                r: -.554,
                a: .83
            },
            158: {
                x: 555.922,
                y: 669.895,
                sx: .789,
                sy: .789,
                r: -.499,
                a: .75
            },
            159: {
                x: 556.898,
                y: 667.214,
                sx: .801,
                sy: .801,
                r: -.443,
                a: .67
            },
            160: {
                x: 558.075,
                y: 664.486,
                sx: .813,
                sy: .813,
                r: -.388,
                a: .58
            },
            161: {
                x: 559.378,
                y: 661.756,
                sx: .825,
                sy: .825,
                r: -.332,
                a: .5
            },
            162: {
                x: 560.896,
                y: 659.03,
                sx: .837,
                sy: .837,
                r: -.277,
                a: .42
            },
            163: {
                x: 562.578,
                y: 656.291,
                sx: .85,
                sy: .85,
                r: -.222,
                a: .33
            },
            164: {
                x: 564.492,
                y: 653.585,
                sx: .862,
                sy: .862,
                r: -.166,
                a: .25
            },
            165: {
                x: 566.461,
                y: 650.88,
                sx: .874,
                sy: .874,
                r: -.111,
                a: .17
            },
            166: {
                x: 568.719,
                y: 648.31,
                sx: .886,
                sy: .886,
                r: -.055,
                a: .08
            },
            167: {
                x: 571.05,
                y: 645.85,
                sx: .898,
                sy: .898,
                r: 0,
                a: 0
            }
        }).addTimedChild(instance2).addTimedChild(instance1, 0, 210, {
            0: {
                x: 287,
                y: -7
            }
        }).addTimedChild(instance27, 75, 41, {
            75: {
                x: 284.5,
                y: -3.2,
                sx: .75,
                sy: .882,
                a: .5
            },
            76: {
                x: 284.589,
                y: -3.15,
                sx: .824
            },
            77: {
                x: 284.719,
                sx: 1.045,
                a: .51
            },
            78: {
                x: 284.9,
                sx: 1.414,
                a: .52
            },
            79: {
                x: 285.152,
                sx: 1.931,
                a: .54
            },
            80: {
                x: 285.494,
                sx: 2.595,
                a: .56
            },
            81: {
                x: 286.001,
                sx: 3.407,
                a: .59
            },
            82: {
                x: 286.511,
                sx: 4.366,
                a: .62
            },
            83: {
                x: 287.078,
                sx: 5.473,
                a: .66
            },
            84: {
                x: 287.743,
                sx: 6.728,
                a: .7
            },
            85: {
                x: 288.466,
                sx: 8.13,
                a: .75
            },
            86: {
                x: 289.256,
                sx: 9.532,
                a: .8
            },
            87: {
                x: 289.921,
                sx: 10.787,
                a: .84
            },
            88: {
                x: 290.493,
                sx: 11.894,
                a: .88
            },
            89: {
                x: 290.998,
                sx: 12.853,
                a: .91
            },
            90: {
                x: 291.497,
                sx: 13.665,
                a: .94
            },
            91: {
                x: 291.842,
                sx: 14.329,
                a: .96
            },
            92: {
                x: 292.099,
                sx: 14.846,
                a: .98
            },
            93: {
                x: 292.28,
                sx: 15.215,
                a: .99
            },
            94: {
                x: 292.418,
                sx: 15.436,
                a: 1
            },
            95: {
                x: 291,
                y: -3.2,
                sx: 15.51
            },
            96: {
                x: 294.542,
                y: -3.15,
                sx: 15.435
            },
            97: {
                x: 304.686,
                sx: 15.214,
                a: .99
            },
            98: {
                x: 321.514,
                sx: 14.845,
                a: .98
            },
            99: {
                x: 345.075,
                sx: 14.328,
                a: .96
            },
            100: {
                x: 375.361,
                sx: 13.664,
                a: .94
            },
            101: {
                x: 412.431,
                sx: 12.852,
                a: .91
            },
            102: {
                x: 456.184,
                sx: 11.893,
                a: .88
            },
            103: {
                x: 506.667,
                sx: 10.786,
                a: .84
            },
            104: {
                x: 563.879,
                sx: 9.532,
                a: .8
            },
            105: {
                x: 627.87,
                sx: 8.129,
                a: .75
            },
            106: {
                x: 691.82,
                sx: 6.727,
                a: .7
            },
            107: {
                x: 749.078,
                sx: 5.473,
                a: .66
            },
            108: {
                x: 799.56,
                sx: 4.366,
                a: .62
            },
            109: {
                x: 843.314,
                sx: 3.407,
                a: .59
            },
            110: {
                x: 880.329,
                sx: 2.595,
                a: .56
            },
            111: {
                x: 910.67,
                sx: 1.93,
                a: .54
            },
            112: {
                x: 934.231,
                sx: 1.414,
                a: .52
            },
            113: {
                x: 951.058,
                sx: 1.045,
                a: .51
            },
            114: {
                x: 961.152,
                sx: .824,
                a: .5
            },
            115: {
                x: 964.5,
                y: -3.2,
                sx: .75
            }
        }).addTimedChild(instance26, 75, 41, {
            75: {
                x: 284.5,
                y: 148.75,
                sx: .75,
                sy: .784,
                a: .5
            },
            76: {
                x: 284.589,
                y: 148.798,
                sx: .824
            },
            77: {
                x: 284.719,
                sx: 1.045,
                a: .51
            },
            78: {
                x: 284.9,
                sx: 1.414,
                a: .52
            },
            79: {
                x: 285.152,
                sx: 1.931,
                a: .54
            },
            80: {
                x: 285.494,
                sx: 2.595,
                a: .56
            },
            81: {
                x: 286.001,
                sx: 3.407,
                a: .59
            },
            82: {
                x: 286.511,
                sx: 4.366,
                a: .62
            },
            83: {
                x: 287.078,
                sx: 5.473,
                a: .66
            },
            84: {
                x: 287.743,
                sx: 6.728,
                a: .7
            },
            85: {
                x: 288.466,
                sx: 8.13,
                a: .75
            },
            86: {
                x: 289.256,
                sx: 9.532,
                a: .8
            },
            87: {
                x: 289.921,
                sx: 10.787,
                a: .84
            },
            88: {
                x: 290.493,
                sx: 11.894,
                a: .88
            },
            89: {
                x: 290.998,
                sx: 12.853,
                a: .91
            },
            90: {
                x: 291.497,
                sx: 13.665,
                a: .94
            },
            91: {
                x: 291.842,
                sx: 14.329,
                a: .96
            },
            92: {
                x: 292.099,
                sx: 14.846,
                a: .98
            },
            93: {
                x: 292.28,
                sx: 15.215,
                a: .99
            },
            94: {
                x: 292.418,
                sx: 15.436,
                a: 1
            },
            95: {
                x: 291,
                y: 148.75,
                sx: 15.51
            },
            96: {
                x: 294.542,
                y: 148.798,
                sx: 15.435
            },
            97: {
                x: 304.636,
                sx: 15.214,
                a: .99
            },
            98: {
                x: 321.464,
                y: 148.748,
                sx: 14.845,
                a: .98
            },
            99: {
                x: 344.975,
                sx: 14.328,
                a: .96
            },
            100: {
                x: 375.211,
                y: 148.698,
                sx: 13.664,
                a: .94
            },
            101: {
                x: 412.231,
                y: 148.648,
                sx: 12.852,
                a: .91
            },
            102: {
                x: 455.934,
                y: 148.598,
                sx: 11.893,
                a: .88
            },
            103: {
                x: 506.367,
                y: 148.548,
                sx: 10.786,
                a: .84
            },
            104: {
                x: 563.479,
                y: 148.498,
                sx: 9.532,
                a: .8
            },
            105: {
                x: 627.37,
                y: 148.448,
                sx: 8.129,
                a: .75
            },
            106: {
                x: 691.22,
                y: 148.348,
                sx: 6.727,
                a: .7
            },
            107: {
                x: 748.378,
                y: 148.298,
                sx: 5.473,
                a: .66
            },
            108: {
                x: 798.81,
                y: 148.248,
                sx: 4.366,
                a: .62
            },
            109: {
                x: 842.514,
                y: 148.198,
                sx: 3.407,
                a: .59
            },
            110: {
                x: 879.479,
                y: 148.148,
                sx: 2.595,
                a: .56
            },
            111: {
                x: 909.77,
                y: 148.098,
                sx: 1.93,
                a: .54
            },
            112: {
                x: 933.281,
                sx: 1.414,
                a: .52
            },
            113: {
                x: 950.058,
                y: 148.048,
                sx: 1.045,
                a: .51
            },
            114: {
                x: 960.152,
                sx: .824,
                a: .5
            },
            115: {
                x: 963.5,
                y: 148,
                sx: .75
            }
        }).addTimedChild(instance20, 66, 19, {
            66: {
                x: 289.65,
                y: 5.75,
                sx: 3.23,
                sy: .584,
                kx: -1.43,
                ky: 1.571,
                a: 0
            },
            67: {
                a: .11
            },
            68: {
                a: .22
            },
            69: {
                a: .33
            },
            70: {
                a: .45
            },
            71: {
                a: .55
            },
            72: {
                a: .67
            },
            73: {
                a: .78
            },
            74: {
                a: .89
            },
            75: {
                a: 1
            },
            76: {
                a: .89
            },
            77: {
                a: .78
            },
            78: {
                a: .67
            },
            79: {
                a: .55
            },
            80: {
                a: .45
            },
            81: {
                a: .33
            },
            82: {
                a: .22
            },
            83: {
                a: .11
            },
            84: {
                a: 0
            }
        }).addTimedChild(instance33, 106, 20, {
            106: {
                x: 1000.55,
                y: 4.9,
                sx: 3.23,
                sy: .661,
                r: 1.571,
                a: 0
            },
            107: {
                x: 1000.585,
                y: 4.579,
                sx: 3.249,
                a: .11
            },
            108: {
                y: 4.158,
                sx: 3.269,
                a: .22
            },
            109: {
                y: 3.787,
                sx: 3.288,
                a: .33
            },
            110: {
                y: 3.367,
                sx: 3.307,
                a: .45
            },
            111: {
                y: 2.946,
                sx: 3.327,
                a: .55
            },
            112: {
                y: 2.575,
                sx: 3.346,
                a: .67
            },
            113: {
                y: 2.204,
                sx: 3.365,
                a: .78
            },
            114: {
                y: 1.733,
                sx: 3.384,
                a: .89
            },
            115: {
                x: 1000.55,
                y: 1.1,
                sx: 3.404,
                a: 1
            },
            116: {
                x: 1000.585,
                y: 1.694,
                sx: 3.386,
                a: .9
            },
            117: {
                y: 2.239,
                sx: 3.369,
                a: .8
            },
            118: {
                y: 2.733,
                sx: 3.351,
                a: .7
            },
            119: {
                y: 3.278,
                sx: 3.334,
                a: .6
            },
            120: {
                y: 3.772,
                sx: 3.317,
                a: .5
            },
            121: {
                y: 4.266,
                sx: 3.299,
                a: .4
            },
            122: {
                y: 4.811,
                sx: 3.282,
                a: .3
            },
            123: {
                y: 5.305,
                sx: 3.265,
                a: .2
            },
            124: {
                y: 5.85,
                sx: 3.248,
                a: .1
            },
            125: {
                x: 1000.55,
                y: 6.4,
                sx: 3.23,
                a: 0
            }
        }).addTimedChild(instance25, 75, 41, {
            75: {
                x: 210.9,
                y: -70,
                sx: 1,
                a: 0
            },
            76: {
                x: 210.611,
                sx: 1.029
            },
            77: {
                x: 209.728,
                sx: 1.114,
                a: .02
            },
            78: {
                x: 208.205,
                sx: 1.257,
                a: .05
            },
            79: {
                x: 206.052,
                sx: 1.457,
                a: .08
            },
            80: {
                x: 203.327,
                sx: 1.714,
                a: .13
            },
            81: {
                x: 200.021,
                sx: 2.028,
                a: .18
            },
            82: {
                x: 196.024,
                sx: 2.399,
                a: .25
            },
            83: {
                x: 191.468,
                sx: 2.828,
                a: .32
            },
            84: {
                x: 186.317,
                sx: 3.313,
                a: .41
            },
            85: {
                x: 180.558,
                sx: 3.856,
                a: .5
            },
            86: {
                x: 174.777,
                sx: 4.398,
                a: .59
            },
            87: {
                x: 169.58,
                sx: 4.884,
                a: .68
            },
            88: {
                x: 165.071,
                sx: 5.312,
                a: .75
            },
            89: {
                x: 161.073,
                sx: 5.684,
                a: .82
            },
            90: {
                x: 157.737,
                sx: 5.998,
                a: .88
            },
            91: {
                x: 155.042,
                sx: 6.255,
                a: .92
            },
            92: {
                x: 152.889,
                sx: 6.455,
                a: .95
            },
            93: {
                x: 151.367,
                sx: 6.598,
                a: .98
            },
            94: {
                x: 150.436,
                sx: 6.683,
                a: 1
            },
            95: {
                x: 150.45,
                sx: 6.712
            },
            96: {
                x: 154.505,
                y: -69.999,
                sx: 6.683
            },
            97: {
                x: 166.136,
                sx: 6.597,
                a: .98
            },
            98: {
                x: 185.583,
                sx: 6.455,
                a: .95
            },
            99: {
                x: 212.752,
                sx: 6.255,
                a: .92
            },
            100: {
                x: 247.74,
                sx: 5.998,
                a: .88
            },
            101: {
                x: 290.499,
                sx: 5.683,
                a: .82
            },
            102: {
                x: 341.027,
                sx: 5.312,
                a: .75
            },
            103: {
                x: 399.324,
                sx: 4.884,
                a: .68
            },
            104: {
                x: 465.393,
                sx: 4.398,
                a: .59
            },
            105: {
                x: 539.178,
                sx: 3.856,
                a: .5
            },
            106: {
                x: 613.018,
                sx: 3.313,
                a: .41
            },
            107: {
                x: 679.084,
                sx: 2.828,
                a: .32
            },
            108: {
                x: 737.383,
                sx: 2.399,
                a: .25
            },
            109: {
                x: 787.911,
                sx: 2.028,
                a: .18
            },
            110: {
                x: 830.668,
                sx: 1.714,
                a: .13
            },
            111: {
                x: 865.656,
                sx: 1.457,
                a: .08
            },
            112: {
                x: 892.827,
                sx: 1.257,
                a: .05
            },
            113: {
                x: 912.225,
                sx: 1.114,
                a: .02
            },
            114: {
                x: 923.906,
                sx: 1.029,
                a: 0
            },
            115: {
                x: 927.7,
                y: -70,
                sx: 1
            }
        }).addTimedChild(instance24, 75, 41, {
            75: {
                x: 210.9,
                y: 76.8,
                sx: 1,
                a: 0
            },
            76: {
                x: 210.611,
                sx: 1.029
            },
            77: {
                x: 209.728,
                sx: 1.114,
                a: .02
            },
            78: {
                x: 208.205,
                sx: 1.257,
                a: .05
            },
            79: {
                x: 206.052,
                sx: 1.457,
                a: .08
            },
            80: {
                x: 203.327,
                sx: 1.714,
                a: .13
            },
            81: {
                x: 200.021,
                sx: 2.028,
                a: .18
            },
            82: {
                x: 196.024,
                sx: 2.399,
                a: .25
            },
            83: {
                x: 191.468,
                sx: 2.828,
                a: .32
            },
            84: {
                x: 186.317,
                sx: 3.313,
                a: .41
            },
            85: {
                x: 180.558,
                sx: 3.856,
                a: .5
            },
            86: {
                x: 174.777,
                sx: 4.398,
                a: .59
            },
            87: {
                x: 169.58,
                sx: 4.884,
                a: .68
            },
            88: {
                x: 165.071,
                sx: 5.312,
                a: .75
            },
            89: {
                x: 161.073,
                sx: 5.684,
                a: .82
            },
            90: {
                x: 157.737,
                sx: 5.998,
                a: .88
            },
            91: {
                x: 155.042,
                sx: 6.255,
                a: .92
            },
            92: {
                x: 152.889,
                sx: 6.455,
                a: .95
            },
            93: {
                x: 151.367,
                sx: 6.598,
                a: .98
            },
            94: {
                x: 150.436,
                sx: 6.683,
                a: 1
            },
            95: {
                x: 150.45,
                sx: 6.712
            },
            96: {
                x: 154.505,
                y: 76.799,
                sx: 6.683
            },
            97: {
                x: 166.136,
                sx: 6.597,
                a: .98
            },
            98: {
                x: 185.583,
                sx: 6.455,
                a: .95
            },
            99: {
                x: 212.752,
                sx: 6.255,
                a: .92
            },
            100: {
                x: 247.74,
                sx: 5.998,
                a: .88
            },
            101: {
                x: 290.499,
                sx: 5.683,
                a: .82
            },
            102: {
                x: 341.027,
                sx: 5.312,
                a: .75
            },
            103: {
                x: 399.324,
                sx: 4.884,
                a: .68
            },
            104: {
                x: 465.393,
                sx: 4.398,
                a: .59
            },
            105: {
                x: 539.178,
                sx: 3.856,
                a: .5
            },
            106: {
                x: 613.018,
                sx: 3.313,
                a: .41
            },
            107: {
                x: 679.084,
                sx: 2.828,
                a: .32
            },
            108: {
                x: 737.383,
                sx: 2.399,
                a: .25
            },
            109: {
                x: 787.911,
                sx: 2.028,
                a: .18
            },
            110: {
                x: 830.668,
                sx: 1.714,
                a: .13
            },
            111: {
                x: 865.656,
                sx: 1.457,
                a: .08
            },
            112: {
                x: 892.827,
                sx: 1.257,
                a: .05
            },
            113: {
                x: 912.225,
                sx: 1.114,
                a: .02
            },
            114: {
                x: 923.906,
                sx: 1.029,
                a: 0
            },
            115: {
                x: 927.7,
                y: 76.8,
                sx: 1
            }
        }).addTimedChild(instance23, 75, 19, {
            75: {
                x: 292,
                y: 11,
                a: 0
            },
            76: {
                a: .11
            },
            77: {
                a: .22
            },
            78: {
                a: .33
            },
            79: {
                a: .45
            },
            80: {
                a: .55
            },
            81: {
                a: .67
            },
            82: {
                a: .78
            },
            83: {
                a: .89
            },
            84: {
                a: 1
            },
            85: {
                a: .89
            },
            86: {
                a: .78
            },
            87: {
                a: .67
            },
            88: {
                a: .55
            },
            89: {
                a: .45
            },
            90: {
                a: .33
            },
            91: {
                a: .22
            },
            92: {
                a: .11
            },
            93: {
                a: 0
            }
        }).addTimedChild(instance19, 66, 19, {
            66: {
                x: 244.2,
                y: 214.05,
                sx: 1.8,
                sy: .626,
                r: -1.571,
                a: 0
            },
            67: {
                a: .02
            },
            68: {
                a: .1
            },
            69: {
                a: .22
            },
            70: {
                a: .39
            },
            71: {
                a: .61
            },
            72: {
                a: .78
            },
            73: {
                a: .9
            },
            74: {
                a: .98
            },
            75: {
                a: 1
            },
            76: {
                a: .98
            },
            77: {
                a: .9
            },
            78: {
                a: .78
            },
            79: {
                a: .61
            },
            80: {
                a: .39
            },
            81: {
                a: .22
            },
            82: {
                a: .1
            },
            83: {
                a: .02
            },
            84: {
                a: 0
            }
        }).addTimedChild(instance31, 97, 19, {
            97: {
                x: 990,
                y: 11,
                sx: .98,
                ky: 3.142,
                a: 0
            },
            98: {
                a: .11
            },
            99: {
                a: .22
            },
            100: {
                a: .33
            },
            101: {
                a: .45
            },
            102: {
                a: .55
            },
            103: {
                a: .67
            },
            104: {
                a: .78
            },
            105: {
                a: .89
            },
            106: {
                a: 1
            },
            107: {
                a: .89
            },
            108: {
                a: .78
            },
            109: {
                a: .67
            },
            110: {
                a: .55
            },
            111: {
                a: .45
            },
            112: {
                a: .33
            },
            113: {
                a: .22
            },
            114: {
                a: .11
            },
            115: {
                a: 0
            }
        }).addTimedChild(instance32, 106, 20, {
            106: {
                x: 949,
                y: 213.95,
                sx: 1.8,
                sy: .626,
                r: -1.571,
                a: 0
            },
            107: {
                a: .02
            },
            108: {
                a: .1
            },
            109: {
                a: .22
            },
            110: {
                a: .39
            },
            111: {
                a: .61
            },
            112: {
                a: .78
            },
            113: {
                a: .9
            },
            114: {
                a: .98
            },
            115: {
                a: 1
            },
            116: {
                a: .98
            },
            117: {
                a: .92
            },
            118: {
                a: .82
            },
            119: {
                a: .68
            },
            120: {
                a: .5
            },
            121: {
                a: .32
            },
            122: {
                a: .18
            },
            123: {
                a: .08
            },
            124: {
                a: .02
            },
            125: {
                a: 0
            }
        }).addTimedChild(instance18, 66, 69, {
            66: {
                x: 256.45,
                y: -76.95,
                sx: 8,
                sy: 2.5,
                a: 0
            },
            67: {
                x: 253.734,
                y: -76.848,
                sx: 7.999,
                a: .02
            },
            68: {
                x: 250.984,
                a: .03
            },
            69: {
                x: 248.184,
                a: .04
            },
            70: {
                x: 245.434,
                a: .05
            },
            71: {
                x: 242.684,
                a: .07
            },
            72: {
                x: 239.934,
                a: .08
            },
            73: {
                x: 237.184,
                a: .1
            },
            74: {
                x: 234.434,
                a: .11
            },
            75: {
                x: 231.634,
                a: .13
            },
            76: {
                x: 228.884,
                a: .14
            },
            77: {
                x: 226.134,
                a: .15
            },
            78: {
                x: 223.384,
                a: .16
            },
            79: {
                x: 220.634,
                a: .18
            },
            80: {
                x: 217.884,
                a: .19
            },
            81: {
                x: 215.084,
                a: .21
            },
            82: {
                x: 212.334,
                a: .22
            },
            83: {
                x: 209.584,
                a: .23
            },
            84: {
                x: 206.834,
                a: .25
            },
            85: {
                x: 204.084,
                a: .26
            },
            86: {
                x: 201.334,
                a: .27
            },
            87: {
                x: 198.534,
                a: .29
            },
            88: {
                x: 195.784,
                a: .3
            },
            89: {
                x: 193.034,
                a: .32
            },
            90: {
                x: 190.284,
                a: .33
            },
            91: {
                x: 187.534,
                a: .34
            },
            92: {
                x: 184.784,
                a: .36
            },
            93: {
                x: 181.984,
                a: .37
            },
            94: {
                x: 179.234,
                a: .38
            },
            95: {
                x: 176.45,
                y: -76.95,
                sx: 8,
                a: .4
            },
            96: {
                x: 173.894,
                y: -77.642,
                sx: 8.04,
                sy: 2.513,
                a: .39
            },
            97: {
                x: 171.299,
                y: -78.387,
                sx: 8.081,
                sy: 2.525,
                a: .38
            },
            98: {
                x: 168.703,
                y: -79.181,
                sx: 8.122,
                sy: 2.538,
                a: .37
            },
            99: {
                x: 166.058,
                y: -79.926,
                sx: 8.163,
                sy: 2.551,
                a: .36
            },
            100: {
                x: 163.462,
                y: -80.72,
                sx: 8.204,
                sy: 2.564,
                a: .35
            },
            101: {
                x: 160.867,
                y: -81.465,
                sx: 8.245,
                sy: 2.577,
                a: .34
            },
            102: {
                x: 158.272,
                y: -82.26,
                sx: 8.286,
                sy: 2.59,
                a: .33
            },
            103: {
                x: 155.626,
                y: -83.005,
                sx: 8.327,
                sy: 2.602,
                a: .32
            },
            104: {
                x: 153.031,
                y: -83.799,
                sx: 8.368,
                sy: 2.615,
                a: .3
            },
            105: {
                x: 150.436,
                y: -84.544,
                sx: 8.409,
                sy: 2.628
            },
            106: {
                x: 147.84,
                y: -85.339,
                sx: 8.45,
                sy: 2.641,
                a: .29
            },
            107: {
                x: 145.245,
                y: -86.083,
                sx: 8.491,
                sy: 2.654,
                a: .28
            },
            108: {
                x: 142.6,
                y: -86.828,
                sx: 8.532,
                sy: 2.666,
                a: .27
            },
            109: {
                x: 140.004,
                y: -87.623,
                sx: 8.573,
                sy: 2.679,
                a: .25
            },
            110: {
                x: 137.409,
                y: -88.368,
                sx: 8.614,
                sy: 2.692
            },
            111: {
                x: 134.814,
                y: -89.162,
                sx: 8.655,
                sy: 2.705,
                a: .23
            },
            112: {
                x: 132.168,
                y: -89.907,
                sx: 8.696,
                sy: 2.718
            },
            113: {
                x: 129.573,
                y: -90.701,
                sx: 8.737,
                sy: 2.731,
                a: .21
            },
            114: {
                x: 126.978,
                y: -91.446,
                sx: 8.778,
                sy: 2.743,
                a: .2
            },
            115: {
                x: 124.382,
                y: -92.19,
                sx: 8.819,
                sy: 2.756
            },
            116: {
                x: 121.79,
                y: -92.935,
                sx: 8.86,
                sy: 2.769,
                a: .18
            },
            117: {
                x: 119.144,
                y: -93.729,
                sx: 8.901,
                sy: 2.782,
                a: .17
            },
            118: {
                x: 116.546,
                y: -94.474,
                sx: 8.942,
                sy: 2.795,
                a: .16
            },
            119: {
                x: 113.954,
                y: -95.268,
                sx: 8.983,
                sy: 2.807,
                a: .15
            },
            120: {
                x: 111.358,
                y: -96.013,
                sx: 9.025,
                sy: 2.82,
                a: .14
            },
            121: {
                x: 108.713,
                y: -96.759,
                sx: 9.066,
                sy: 2.833,
                a: .13
            },
            122: {
                x: 106.117,
                y: -97.553,
                sx: 9.107,
                sy: 2.846,
                a: .12
            },
            123: {
                x: 103.522,
                y: -98.298,
                sx: 9.148,
                sy: 2.859,
                a: .11
            },
            124: {
                x: 100.927,
                y: -99.092,
                sx: 9.189,
                sy: 2.872,
                a: .1
            },
            125: {
                x: 98.331,
                y: -99.837,
                sx: 9.23,
                sy: 2.884,
                a: .09
            },
            126: {
                x: 95.686,
                y: -100.631,
                sx: 9.271,
                sy: 2.897,
                a: .08
            },
            127: {
                x: 93.091,
                y: -101.376,
                sx: 9.312,
                sy: 2.91,
                a: .07
            },
            128: {
                x: 90.495,
                y: -102.171,
                sx: 9.353,
                sy: 2.923,
                a: .06
            },
            129: {
                x: 87.9,
                y: -102.916,
                sx: 9.394,
                sy: 2.936,
                a: .05
            },
            130: {
                x: 85.255,
                y: -103.711,
                sx: 9.435,
                sy: 2.949,
                a: .04
            },
            131: {
                x: 82.659,
                y: -104.455,
                sx: 9.476,
                sy: 2.961,
                a: .03
            },
            132: {
                x: 80.064,
                y: -105.25,
                sx: 9.517,
                sy: 2.974,
                a: .02
            },
            133: {
                x: 77.469,
                y: -105.994,
                sx: 9.558,
                sy: 2.987,
                a: .01
            },
            134: {
                x: 74.75,
                y: -106.85,
                sx: 9.599,
                sy: 3,
                a: 0
            }
        }).addTimedChild(instance17, 66, 50, {
            66: {
                x: 287,
                y: -7,
                a: 0
            },
            68: {
                a: .01
            },
            69: {
                a: .02
            },
            70: {
                a: .03
            },
            71: {
                a: .04
            },
            72: {
                a: .06
            },
            73: {
                a: .08
            },
            74: {
                a: .11
            },
            75: {
                a: .13
            },
            76: {
                a: .17
            },
            77: {
                a: .2
            },
            78: {
                a: .24
            },
            79: {
                a: .28
            },
            80: {
                a: .32
            },
            81: {
                a: .38
            },
            82: {
                a: .42
            },
            83: {
                a: .46
            },
            84: {
                a: .5
            },
            85: {
                a: .53
            },
            86: {
                a: .57
            },
            87: {
                a: .59
            },
            88: {
                a: .62
            },
            89: {
                a: .64
            },
            90: {
                a: .66
            },
            91: {
                a: .67
            },
            92: {
                a: .68
            },
            93: {
                a: .69
            },
            94: {
                a: .7
            },
            97: {
                a: .68
            },
            98: {
                a: .67
            },
            99: {
                a: .64
            },
            100: {
                a: .61
            },
            101: {
                a: .57
            },
            102: {
                a: .53
            },
            103: {
                a: .48
            },
            104: {
                a: .42
            },
            105: {
                a: .35
            },
            106: {
                a: .28
            },
            107: {
                a: .22
            },
            108: {
                a: .17
            },
            109: {
                a: .13
            },
            110: {
                a: .09
            },
            111: {
                a: .05
            },
            112: {
                a: .03
            },
            113: {
                a: .02
            },
            114: {
                a: 0
            }
        }).addTimedChild(instance30, 85, 25, {
            85: {
                x: 433.75,
                y: 104.65,
                sx: .273,
                sy: .273,
                r: -1.43,
                a: 1
            },
            86: {
                x: 431.111,
                y: 105.672,
                sx: .313,
                sy: .313,
                r: -1.367
            },
            87: {
                x: 428.232,
                y: 106.284,
                sx: .353,
                sy: .353,
                r: -1.303
            },
            88: {
                x: 425.381,
                y: 106.62,
                sx: .393,
                sy: .393,
                r: -1.239
            },
            89: {
                x: 422.487,
                y: 106.633,
                sx: .433,
                sy: .433,
                r: -1.175
            },
            90: {
                x: 419.513,
                y: 106.304,
                sx: .473,
                sy: .473,
                r: -1.111
            },
            91: {
                x: 416.614,
                y: 105.674,
                sx: .513,
                sy: .513,
                r: -1.048
            },
            92: {
                x: 413.747,
                y: 104.676,
                sx: .553,
                sy: .553,
                r: -.984
            },
            93: {
                x: 410.93,
                y: 103.366,
                sx: .593,
                sy: .593,
                r: -.92
            },
            94: {
                x: 408.2,
                y: 101.694,
                sx: .633,
                sy: .633,
                r: -.856
            },
            95: {
                x: 405.686,
                y: 99.806,
                sx: .673,
                sy: .673,
                r: -.792
            },
            96: {
                x: 403.319,
                y: 97.533,
                sx: .712,
                sy: .712,
                r: -.728
            },
            97: {
                x: 401.25,
                y: 95.05,
                sx: .752,
                sy: .752,
                r: -.665
            },
            98: {
                x: 401.003,
                y: 93.697,
                sx: .765,
                sy: .765,
                r: -.609,
                a: .92
            },
            99: {
                x: 400.823,
                y: 92.309,
                sx: .777,
                sy: .777,
                r: -.554,
                a: .83
            },
            100: {
                x: 400.864,
                y: 90.816,
                sx: .789,
                sy: .789,
                r: -.499,
                a: .75
            },
            101: {
                x: 400.999,
                y: 89.233,
                sx: .801,
                sy: .801,
                r: -.443,
                a: .67
            },
            102: {
                x: 401.295,
                y: 87.682,
                sx: .813,
                sy: .813,
                r: -.388,
                a: .58
            },
            103: {
                x: 401.839,
                y: 86.2,
                sx: .825,
                sy: .825,
                r: -.332,
                a: .5
            },
            104: {
                x: 402.476,
                y: 84.607,
                sx: .837,
                sy: .837,
                r: -.277,
                a: .42
            },
            105: {
                x: 403.329,
                y: 83.045,
                sx: .85,
                sy: .85,
                r: -.222,
                a: .33
            },
            106: {
                x: 404.367,
                y: 81.507,
                sx: .862,
                sy: .862,
                r: -.166,
                a: .25
            },
            107: {
                x: 405.515,
                y: 80.003,
                sx: .874,
                sy: .874,
                r: -.111,
                a: .17
            },
            108: {
                x: 406.91,
                y: 78.539,
                sx: .886,
                sy: .886,
                r: -.055,
                a: .08
            },
            109: {
                x: 408.45,
                y: 77.25,
                sx: .898,
                sy: .898,
                r: 0,
                a: 0
            }
        }).addTimedChild(instance22, 73, 64, {
            73: {
                x: 912.8,
                y: -30.85,
                sx: .426,
                sy: .426,
                kx: -.225,
                ky: -2.916,
                a: 0
            },
            74: {
                x: 914.565,
                y: -31.778,
                kx: -.22,
                ky: -2.922,
                a: .07
            },
            75: {
                x: 916.278,
                y: -32.648,
                sx: .427,
                sy: .427,
                kx: -.214,
                ky: -2.927,
                a: .13
            },
            76: {
                x: 917.972,
                y: -33.616,
                kx: -.209,
                ky: -2.933,
                a: .2
            },
            77: {
                x: 919.651,
                y: -34.533,
                kx: -.203,
                ky: -2.939,
                a: .26
            },
            78: {
                x: 921.331,
                y: -35.5,
                kx: -.197,
                ky: -2.944,
                a: .32
            },
            79: {
                x: 923.019,
                y: -36.379,
                sx: .428,
                sy: .428,
                kx: -.192,
                ky: -2.95,
                a: .37
            },
            80: {
                x: 924.7,
                y: -37.321,
                kx: -.186,
                ky: -2.956,
                a: .43
            },
            81: {
                x: 926.368,
                y: -38.234,
                kx: -.18,
                ky: -2.961,
                a: .48
            },
            82: {
                x: 928.022,
                y: -39.125,
                kx: -.175,
                ky: -2.967,
                a: .53
            },
            83: {
                x: 929.661,
                y: -40.015,
                sx: .429,
                sy: .429,
                kx: -.169,
                ky: -2.972,
                a: .58
            },
            84: {
                x: 931.345,
                y: -40.968,
                kx: -.164,
                ky: -2.978,
                a: .63
            },
            85: {
                x: 932.973,
                y: -41.854,
                kx: -.158,
                ky: -2.984,
                a: .67
            },
            86: {
                x: 934.55,
                y: -42.805,
                kx: -.152,
                ky: -2.989,
                a: .71
            },
            87: {
                x: 936.2,
                y: -43.704,
                kx: -.147,
                ky: -2.995,
                a: .75
            },
            88: {
                x: 937.822,
                y: -44.666,
                sx: .43,
                sy: .43,
                kx: -.141,
                ky: -3.001,
                a: .79
            },
            89: {
                x: 939.402,
                y: -45.564,
                kx: -.135,
                ky: -3.006,
                a: .83
            },
            90: {
                x: 941.004,
                y: -46.424,
                kx: -.13,
                ky: -3.012,
                a: .86
            },
            91: {
                x: 942.555,
                y: -47.334,
                kx: -.124,
                ky: -3.017,
                a: .89
            },
            92: {
                x: 944.138,
                y: -48.241,
                sx: .431,
                sy: .431,
                kx: -.119,
                ky: -3.023,
                a: .92
            },
            93: {
                x: 945.741,
                y: -49.112,
                kx: -.113,
                ky: -3.029,
                a: .95
            },
            94: {
                x: 947.281,
                y: -50.032,
                kx: -.107,
                ky: -3.034,
                a: .98
            },
            95: {
                x: 948.85,
                y: -50.8,
                kx: -.102,
                ky: -3.04,
                a: 1
            },
            96: {
                x: 949.921,
                y: -51.862,
                sx: .432,
                sy: .432,
                kx: -.097,
                ky: -3.045,
                a: .99
            },
            97: {
                x: 950.912,
                y: -52.936,
                sx: .434,
                sy: .434,
                kx: -.092,
                ky: -3.05,
                a: .97
            },
            98: {
                x: 951.966,
                y: -54.005,
                sx: .435,
                sy: .435,
                kx: -.087,
                ky: -3.055,
                a: .96
            },
            99: {
                x: 952.961,
                y: -55.02,
                sx: .436,
                sy: .436,
                kx: -.082,
                ky: -3.06,
                a: .95
            },
            100: {
                x: 953.912,
                y: -56.112,
                sx: .437,
                sy: .437,
                kx: -.077,
                ky: -3.065,
                a: .93
            },
            101: {
                x: 954.959,
                y: -57.213,
                sx: .438,
                sy: .438,
                kx: -.072,
                ky: -3.07,
                a: .92
            },
            102: {
                x: 955.907,
                y: -58.298,
                sx: .439,
                sy: .439,
                kx: -.067,
                ky: -3.075,
                a: .9
            },
            103: {
                x: 956.896,
                y: -59.36,
                sx: .44,
                sy: .44,
                kx: -.062,
                ky: -3.08,
                a: .88
            },
            104: {
                x: 957.869,
                y: -60.385,
                sx: .441,
                sy: .441,
                kx: -.057,
                ky: -3.085,
                a: .87
            },
            105: {
                x: 958.796,
                y: -61.516,
                sx: .442,
                sy: .442,
                kx: -.052,
                ky: -3.09,
                a: .85
            },
            106: {
                x: 959.788,
                y: -62.547,
                sx: .443,
                sy: .443,
                kx: -.047,
                ky: -3.095,
                a: .83
            },
            107: {
                x: 960.734,
                y: -63.705,
                sx: .444,
                sy: .444,
                kx: -.042,
                ky: -3.1,
                a: .81
            },
            108: {
                x: 961.637,
                y: -64.761,
                sx: .446,
                sy: .446,
                kx: -.037,
                ky: -3.105,
                a: .79
            },
            109: {
                x: 962.574,
                y: -65.795,
                sx: .447,
                sy: .447,
                kx: -.032,
                ky: -3.11,
                a: .77
            },
            110: {
                x: 963.458,
                y: -66.973,
                sx: .448,
                sy: .448,
                kx: -.027,
                ky: -3.115,
                a: .75
            },
            111: {
                x: 964.434,
                y: -68.012,
                sx: .449,
                sy: .449,
                kx: -.022,
                ky: -3.12,
                a: .73
            },
            112: {
                x: 965.331,
                y: -69.149,
                sx: .45,
                sy: .45,
                kx: -.017,
                ky: -3.124,
                a: .71
            },
            113: {
                x: 966.212,
                y: -70.279,
                sx: .451,
                sy: .451,
                kx: -.012,
                ky: -3.129,
                a: .68
            },
            114: {
                x: 967.026,
                y: -71.373,
                sx: .452,
                sy: .452,
                kx: -.007,
                ky: -3.134,
                a: .66
            },
            115: {
                x: 967.932,
                y: -72.492,
                sx: .453,
                sy: .453,
                kx: -.002,
                ky: -3.139,
                a: .64
            },
            116: {
                x: 968.774,
                y: -73.546,
                sx: .454,
                sy: .454,
                kx: .003,
                ky: 3.139,
                a: .61
            },
            117: {
                x: 969.697,
                y: -74.722,
                sx: .455,
                sy: .455,
                kx: .008,
                ky: 3.134,
                a: .59
            },
            118: {
                x: 970.492,
                y: -75.747,
                sx: .456,
                sy: .456,
                kx: .013,
                ky: 3.129,
                a: .56
            },
            119: {
                x: 971.406,
                y: -76.884,
                sx: .458,
                sy: .458,
                kx: .018,
                ky: 3.124,
                a: .54
            },
            120: {
                x: 972.127,
                y: -78.033,
                sx: .459,
                sy: .459,
                kx: .023,
                ky: 3.119,
                a: .51
            },
            121: {
                x: 973.016,
                y: -79.075,
                sx: .46,
                sy: .46,
                kx: .028,
                ky: 3.114,
                a: .48
            },
            122: {
                x: 973.769,
                y: -80.181,
                sx: .461,
                sy: .461,
                kx: .033,
                ky: 3.109,
                a: .45
            },
            123: {
                x: 974.649,
                y: -81.298,
                sx: .462,
                sy: .462,
                kx: .038,
                ky: 3.104,
                a: .43
            },
            124: {
                x: 975.412,
                y: -82.444,
                sx: .463,
                sy: .463,
                kx: .043,
                ky: 3.099,
                a: .39
            },
            125: {
                x: 976.233,
                y: -83.587,
                sx: .464,
                sy: .464,
                kx: .048,
                ky: 3.094,
                a: .37
            },
            126: {
                x: 976.966,
                y: -84.609,
                sx: .465,
                sy: .465,
                kx: .053,
                ky: 3.089,
                a: .34
            },
            127: {
                x: 977.79,
                y: -85.743,
                sx: .466,
                sy: .466,
                kx: .058,
                ky: 3.084,
                a: .3
            },
            128: {
                x: 978.469,
                y: -86.869,
                sx: .467,
                sy: .467,
                kx: .063,
                ky: 3.079,
                a: .27
            },
            129: {
                x: 979.284,
                y: -87.979,
                sx: .468,
                sy: .468,
                kx: .067,
                ky: 3.074,
                a: .24
            },
            130: {
                x: 979.997,
                y: -89.082,
                sx: .469,
                sy: .469,
                kx: .072,
                ky: 3.069,
                a: .21
            },
            131: {
                x: 980.736,
                y: -90.196,
                sx: .471,
                sy: .471,
                kx: .077,
                ky: 3.064,
                a: .18
            },
            132: {
                x: 981.461,
                y: -91.324,
                sx: .472,
                sy: .472,
                kx: .082,
                ky: 3.059,
                a: .14
            },
            133: {
                x: 982.241,
                y: -92.464,
                sx: .473,
                sy: .473,
                kx: .087,
                ky: 3.054,
                a: .11
            },
            134: {
                x: 982.934,
                y: -93.583,
                sx: .474,
                sy: .474,
                kx: .092,
                ky: 3.049,
                a: .07
            },
            135: {
                x: 983.653,
                y: -94.678,
                sx: .475,
                sy: .475,
                kx: .097,
                ky: 3.044,
                a: .04
            },
            136: {
                x: 984.25,
                y: -95.85,
                sx: .476,
                sy: .476,
                kx: .102,
                ky: 3.039,
                a: 0
            }
        }).addTimedChild(instance21, 70, 64, {
            70: {
                x: 681.15,
                y: 22.8,
                sx: .348,
                sy: .348,
                kx: -.355,
                ky: -2.786,
                a: 0
            },
            71: {
                x: 682.817,
                y: 21.14,
                kx: -.343,
                ky: -2.799,
                a: .04
            },
            72: {
                x: 684.401,
                y: 19.416,
                kx: -.33,
                ky: -2.812,
                a: .08
            },
            73: {
                x: 685.921,
                y: 17.689,
                kx: -.317,
                ky: -2.824,
                a: .12
            },
            74: {
                x: 687.477,
                y: 15.918,
                kx: -.304,
                ky: -2.837,
                a: .15
            },
            75: {
                x: 688.967,
                y: 14.244,
                kx: -.292,
                ky: -2.85,
                a: .19
            },
            76: {
                x: 690.443,
                y: 12.586,
                kx: -.279,
                ky: -2.863,
                a: .22
            },
            77: {
                x: 691.866,
                y: 10.915,
                kx: -.266,
                ky: -2.875,
                a: .26
            },
            78: {
                x: 693.283,
                y: 9.261,
                kx: -.253,
                ky: -2.888,
                a: .29
            },
            79: {
                x: 694.636,
                y: 7.563,
                kx: -.241,
                ky: -2.901,
                a: .32
            },
            80: {
                x: 696.035,
                y: 5.933,
                kx: -.228,
                ky: -2.914,
                a: .35
            },
            81: {
                x: 697.308,
                y: 4.299,
                kx: -.215,
                ky: -2.926,
                a: .38
            },
            82: {
                x: 698.628,
                y: 2.621,
                kx: -.203,
                ky: -2.939,
                a: .4
            },
            83: {
                x: 699.852,
                y: 1.022,
                kx: -.19,
                ky: -2.952,
                a: .43
            },
            84: {
                x: 701.152,
                y: -.572,
                kx: -.177,
                ky: -2.964,
                a: .45
            },
            85: {
                x: 702.347,
                y: -2.147,
                kx: -.164,
                ky: -2.977,
                a: .48
            },
            86: {
                x: 703.527,
                y: -3.746,
                kx: -.152,
                ky: -2.99,
                a: .5
            },
            87: {
                x: 704.663,
                y: -5.287,
                kx: -.139,
                ky: -3.003,
                a: .52
            },
            88: {
                x: 705.773,
                y: -6.802,
                kx: -.126,
                ky: -3.015,
                a: .54
            },
            89: {
                x: 706.839,
                y: -8.398,
                kx: -.114,
                ky: -3.028,
                a: .55
            },
            90: {
                x: 707.939,
                y: -9.918,
                kx: -.101,
                ky: -3.041,
                a: .57
            },
            91: {
                x: 708.985,
                y: -11.37,
                kx: -.088,
                ky: -3.054,
                a: .59
            },
            92: {
                x: 710,
                y: -12.9,
                kx: -.075,
                ky: -3.066,
                a: .6
            },
            93: {
                x: 711.624,
                y: -14.323,
                sx: .349,
                sy: .349,
                kx: -.07,
                ky: -3.072,
                a: .59
            },
            94: {
                x: 713.208,
                y: -15.74,
                sx: .351,
                sy: .351,
                kx: -.064,
                ky: -3.078
            },
            95: {
                x: 714.726,
                y: -17.189,
                sx: .353,
                sy: .353,
                kx: -.058,
                ky: -3.083,
                a: .58
            },
            96: {
                x: 716.233,
                y: -18.68,
                sx: .354,
                sy: .354,
                kx: -.053,
                ky: -3.089,
                a: .57
            },
            97: {
                x: 717.849,
                y: -20.154,
                sx: .356,
                sy: .356,
                kx: -.047,
                ky: -3.095,
                a: .56
            },
            98: {
                x: 719.361,
                y: -21.571,
                sx: .358,
                sy: .358,
                kx: -.041,
                ky: -3.1,
                a: .55
            },
            99: {
                x: 720.879,
                y: -23.069,
                sx: .359,
                sy: .359,
                kx: -.035,
                ky: -3.106,
                a: .54
            },
            100: {
                x: 722.418,
                y: -24.572,
                sx: .361,
                sy: .361,
                kx: -.03,
                ky: -3.112,
                a: .53
            },
            101: {
                x: 723.842,
                y: -26.084,
                sx: .363,
                sy: .363,
                kx: -.024,
                ky: -3.118,
                a: .52
            },
            102: {
                x: 725.343,
                y: -27.54,
                sx: .364,
                sy: .364,
                kx: -.018,
                ky: -3.123,
                a: .51
            },
            103: {
                x: 726.793,
                y: -29.049,
                sx: .366,
                sy: .366,
                kx: -.013,
                ky: -3.129,
                a: .5
            },
            104: {
                x: 728.249,
                y: -30.58,
                sx: .368,
                sy: .368,
                kx: -.007,
                ky: -3.135,
                a: .49
            },
            105: {
                x: 729.711,
                y: -32.103,
                sx: .369,
                sy: .369,
                kx: -.001,
                ky: -3.14,
                a: .48
            },
            106: {
                x: 731.184,
                y: -33.598,
                sx: .371,
                sy: .371,
                kx: .004,
                ky: 3.137,
                a: .46
            },
            107: {
                x: 732.552,
                y: -35.135,
                sx: .373,
                sy: .373,
                kx: .01,
                ky: 3.131,
                a: .45
            },
            108: {
                x: 733.975,
                y: -36.654,
                sx: .374,
                sy: .374,
                kx: .016,
                ky: 3.126,
                a: .44
            },
            109: {
                x: 735.419,
                y: -38.138,
                sx: .376,
                sy: .376,
                kx: .022,
                ky: 3.12,
                a: .43
            },
            110: {
                x: 736.788,
                y: -39.671,
                sx: .378,
                sy: .378,
                kx: .027,
                ky: 3.114,
                a: .41
            },
            111: {
                x: 738.184,
                y: -41.258,
                sx: .379,
                sy: .379,
                kx: .033,
                ky: 3.109,
                a: .4
            },
            112: {
                x: 739.529,
                y: -42.788,
                sx: .381,
                sy: .381,
                kx: .039,
                ky: 3.103,
                a: .38
            },
            113: {
                x: 740.819,
                y: -44.338,
                sx: .383,
                sy: .383,
                kx: .044,
                ky: 3.097,
                a: .37
            },
            114: {
                x: 742.22,
                y: -45.883,
                sx: .384,
                sy: .384,
                kx: .05,
                ky: 3.092,
                a: .36
            },
            115: {
                x: 743.533,
                y: -47.447,
                sx: .386,
                sy: .386,
                kx: .056,
                ky: 3.086,
                a: .34
            },
            116: {
                x: 744.885,
                y: -49.005,
                sx: .388,
                sy: .388,
                kx: .061,
                ky: 3.08,
                a: .32
            },
            117: {
                x: 746.214,
                y: -50.544,
                sx: .389,
                sy: .389,
                kx: .067,
                ky: 3.075,
                a: .3
            },
            118: {
                x: 747.5,
                y: -52.126,
                sx: .391,
                sy: .391,
                kx: .073,
                ky: 3.069,
                a: .29
            },
            119: {
                x: 748.702,
                y: -53.829,
                sx: .392,
                sy: .392,
                kx: .078,
                ky: 3.063,
                a: .27
            },
            120: {
                x: 750.043,
                y: -55.376,
                sx: .394,
                sy: .394,
                kx: .084,
                ky: 3.057,
                a: .26
            },
            121: {
                x: 751.29,
                y: -56.954,
                sx: .396,
                sy: .396,
                kx: .09,
                ky: 3.052,
                a: .24
            },
            122: {
                x: 752.532,
                y: -58.553,
                sx: .397,
                sy: .397,
                kx: .096,
                ky: 3.046,
                a: .22
            },
            123: {
                x: 753.745,
                y: -60.156,
                sx: .399,
                sy: .399,
                kx: .101,
                ky: 3.04,
                a: .2
            },
            124: {
                x: 754.971,
                y: -61.669,
                sx: .401,
                sy: .401,
                kx: .107,
                ky: 3.035,
                a: .18
            },
            125: {
                x: 756.175,
                y: -63.335,
                sx: .402,
                sy: .402,
                kx: .113,
                ky: 3.029,
                a: .16
            },
            126: {
                x: 757.367,
                y: -64.923,
                sx: .404,
                sy: .404,
                kx: .118,
                ky: 3.023,
                a: .14
            },
            127: {
                x: 758.555,
                y: -66.553,
                sx: .406,
                sy: .406,
                kx: .124,
                ky: 3.018,
                a: .13
            },
            128: {
                x: 759.749,
                y: -68.093,
                sx: .407,
                sy: .407,
                kx: .13,
                ky: 3.012,
                a: .11
            },
            129: {
                x: 760.942,
                y: -69.727,
                sx: .409,
                sy: .409,
                kx: .135,
                ky: 3.006,
                a: .09
            },
            130: {
                x: 762.069,
                y: -71.341,
                sx: .411,
                sy: .411,
                kx: .141,
                ky: 3,
                a: .06
            },
            131: {
                x: 763.163,
                y: -72.938,
                sx: .412,
                sy: .412,
                kx: .147,
                ky: 2.995,
                a: .04
            },
            132: {
                x: 764.307,
                y: -74.518,
                sx: .414,
                sy: .414,
                kx: .153,
                ky: 2.989,
                a: .02
            },
            133: {
                x: 765.3,
                y: -76,
                sx: .416,
                sy: .416,
                kx: .158,
                ky: 2.983,
                a: 0
            }
        }).addTimedChild(instance16, 66, 64, {
            66: {
                x: 280.5,
                y: -40,
                r: 0,
                a: 0
            },
            67: {
                x: 282.662,
                y: -38.908,
                r: -.006,
                a: .07
            },
            68: {
                x: 284.769,
                y: -37.87,
                r: -.011,
                a: .13
            },
            69: {
                x: 286.968,
                y: -36.776,
                r: -.017,
                a: .2
            },
            70: {
                x: 289.104,
                y: -35.735,
                r: -.023,
                a: .26
            },
            71: {
                x: 291.231,
                y: -34.638,
                r: -.029,
                a: .32
            },
            72: {
                x: 293.405,
                y: -33.641,
                r: -.034,
                a: .37
            },
            73: {
                x: 295.616,
                y: -32.541,
                r: -.04,
                a: .43
            },
            74: {
                x: 297.763,
                y: -31.445,
                r: -.046,
                a: .48
            },
            75: {
                x: 299.956,
                y: -30.393,
                r: -.052,
                a: .53
            },
            76: {
                x: 302.137,
                y: -29.289,
                r: -.057,
                a: .58
            },
            77: {
                x: 304.363,
                y: -28.185,
                r: -.063,
                a: .63
            },
            78: {
                x: 306.527,
                y: -27.125,
                r: -.069,
                a: .67
            },
            79: {
                x: 308.732,
                y: -26.018,
                r: -.075,
                a: .71
            },
            80: {
                x: 310.979,
                y: -24.905,
                r: -.08,
                a: .75
            },
            81: {
                x: 313.163,
                y: -23.791,
                r: -.086,
                a: .79
            },
            82: {
                x: 315.393,
                y: -22.73,
                r: -.092,
                a: .83
            },
            83: {
                x: 317.66,
                y: -21.659,
                r: -.098,
                a: .86
            },
            84: {
                x: 319.869,
                y: -20.541,
                r: -.103,
                a: .89
            },
            85: {
                x: 322.119,
                y: -19.417,
                r: -.109,
                a: .92
            },
            86: {
                x: 324.361,
                y: -18.342,
                r: -.115,
                a: .95
            },
            87: {
                x: 326.595,
                y: -17.216,
                r: -.121,
                a: .98
            },
            88: {
                x: 328.8,
                y: -16.1,
                r: -.126,
                a: 1
            },
            89: {
                x: 329.937,
                y: -15.528,
                r: -.13,
                a: .99
            },
            90: {
                x: 331.034,
                y: -14.912,
                r: -.133,
                a: .97
            },
            91: {
                x: 332.121,
                y: -14.35,
                r: -.136,
                a: .96
            },
            92: {
                x: 333.203,
                y: -13.733,
                r: -.14,
                a: .95
            },
            93: {
                x: 334.329,
                y: -13.166,
                r: -.143,
                a: .93
            },
            94: {
                x: 335.461,
                y: -12.554,
                r: -.146,
                a: .92
            },
            95: {
                x: 336.583,
                y: -11.986,
                r: -.149,
                a: .9
            },
            96: {
                x: 337.655,
                y: -11.369,
                r: -.153,
                a: .88
            },
            97: {
                x: 338.766,
                y: -10.806,
                r: -.156,
                a: .87
            },
            98: {
                x: 339.938,
                y: -10.138,
                r: -.159,
                a: .85
            },
            99: {
                x: 341.045,
                y: -9.575,
                r: -.163,
                a: .83
            },
            100: {
                x: 342.197,
                y: -8.956,
                r: -.166,
                a: .81
            },
            101: {
                x: 343.248,
                y: -8.388,
                r: -.169,
                a: .79
            },
            102: {
                x: 344.395,
                y: -7.774,
                r: -.173,
                a: .77
            },
            103: {
                x: 345.547,
                y: -7.206,
                r: -.176,
                a: .75
            },
            104: {
                x: 346.688,
                y: -6.587,
                r: -.179,
                a: .73
            },
            105: {
                x: 347.825,
                y: -5.967,
                r: -.183,
                a: .71
            },
            106: {
                x: 348.907,
                y: -5.343,
                r: -.186,
                a: .68
            },
            107: {
                x: 350.039,
                y: -4.778,
                r: -.189,
                a: .66
            },
            108: {
                x: 351.216,
                y: -4.154,
                r: -.192,
                a: .64
            },
            109: {
                x: 352.337,
                y: -3.589,
                r: -.196,
                a: .61
            },
            110: {
                x: 353.509,
                y: -2.914,
                r: -.199,
                a: .59
            },
            111: {
                x: 354.671,
                y: -2.343,
                r: -.202,
                a: .56
            },
            112: {
                x: 355.792,
                y: -1.723,
                r: -.206,
                a: .54
            },
            113: {
                x: 356.949,
                y: -1.152,
                r: -.209,
                a: .51
            },
            114: {
                x: 358.106,
                y: -.527,
                r: -.212,
                a: .48
            },
            115: {
                x: 359.257,
                y: .094,
                r: -.216,
                a: .45
            },
            116: {
                x: 360.404,
                y: .721,
                r: -.219,
                a: .43
            },
            117: {
                x: 361.551,
                y: 1.297,
                r: -.222,
                a: .39
            },
            118: {
                x: 362.693,
                y: 1.918,
                r: -.225,
                a: .37
            },
            119: {
                x: 363.879,
                y: 2.495,
                r: -.229,
                a: .34
            },
            120: {
                x: 365.066,
                y: 3.167,
                r: -.232,
                a: .3
            },
            121: {
                x: 366.243,
                y: 3.749,
                r: -.235,
                a: .27
            },
            122: {
                x: 367.375,
                y: 4.321,
                r: -.239,
                a: .24
            },
            123: {
                x: 368.541,
                y: 4.899,
                r: -.242,
                a: .21
            },
            124: {
                x: 369.713,
                y: 5.576,
                r: -.245,
                a: .18
            },
            125: {
                x: 370.88,
                y: 6.154,
                r: -.249,
                a: .14
            },
            126: {
                x: 372.097,
                y: 6.787,
                r: -.252,
                a: .11
            },
            127: {
                x: 373.253,
                y: 7.365,
                r: -.255,
                a: .07
            },
            128: {
                x: 374.41,
                y: 7.998,
                r: -.258,
                a: .04
            },
            129: {
                x: 375.6,
                y: 8.65,
                r: -.262,
                a: 0
            }
        }).addTimedChild(instance29, 85, 25, {
            85: {
                x: 518.35,
                y: 161.05,
                sx: .273,
                sy: .273,
                r: -1.43,
                a: 1
            },
            86: {
                x: 526.493,
                y: 161.604,
                sx: .313,
                sy: .313,
                r: -1.367
            },
            87: {
                x: 534.521,
                y: 161.722,
                sx: .353,
                sy: .353,
                r: -1.303
            },
            88: {
                x: 542.437,
                y: 161.542,
                sx: .393,
                sy: .393,
                r: -1.239
            },
            89: {
                x: 550.353,
                y: 161.017,
                sx: .433,
                sy: .433,
                r: -1.175
            },
            90: {
                x: 558.285,
                y: 160.217,
                sx: .473,
                sy: .473,
                r: -1.111
            },
            91: {
                x: 566.165,
                y: 159.121,
                sx: .513,
                sy: .513,
                r: -1.048
            },
            92: {
                x: 574.123,
                y: 157.632,
                sx: .553,
                sy: .553,
                r: -.984
            },
            93: {
                x: 582.173,
                y: 155.832,
                sx: .593,
                sy: .593,
                r: -.92
            },
            94: {
                x: 590.32,
                y: 153.637,
                sx: .633,
                sy: .633,
                r: -.856
            },
            95: {
                x: 598.563,
                y: 151.19,
                sx: .673,
                sy: .673,
                r: -.792
            },
            96: {
                x: 607.075,
                y: 148.442,
                sx: .712,
                sy: .712,
                r: -.728
            },
            97: {
                x: 615.85,
                y: 145.45,
                sx: .752,
                sy: .752,
                r: -.665
            },
            98: {
                x: 626.196,
                y: 142.748,
                sx: .765,
                sy: .765,
                r: -.609,
                a: .92
            },
            99: {
                x: 636.745,
                y: 140.008,
                sx: .777,
                sy: .777,
                r: -.554,
                a: .83
            },
            100: {
                x: 647.423,
                y: 137.145,
                sx: .789,
                sy: .789,
                r: -.499,
                a: .75
            },
            101: {
                x: 658.29,
                y: 134.33,
                sx: .801,
                sy: .801,
                r: -.443,
                a: .67
            },
            102: {
                x: 669.245,
                y: 131.492,
                sx: .813,
                sy: .813,
                r: -.388,
                a: .58
            },
            103: {
                x: 680.421,
                y: 128.557,
                sx: .825,
                sy: .825,
                r: -.332,
                a: .5
            },
            104: {
                x: 691.755,
                y: 125.655,
                sx: .837,
                sy: .837,
                r: -.277,
                a: .42
            },
            105: {
                x: 703.259,
                y: 122.766,
                sx: .85,
                sy: .85,
                r: -.222,
                a: .33
            },
            106: {
                x: 714.96,
                y: 119.93,
                sx: .862,
                sy: .862,
                r: -.166,
                a: .25
            },
            107: {
                x: 726.822,
                y: 117.108,
                sx: .874,
                sy: .874,
                r: -.111,
                a: .17
            },
            108: {
                x: 738.849,
                y: 114.305,
                sx: .886,
                sy: .886,
                r: -.055,
                a: .08
            },
            109: {
                x: 751.05,
                y: 111.65,
                sx: .898,
                sy: .898,
                r: 0,
                a: 0
            }
        }).addTimedChild(instance28, 80, 25, {
            80: {
                x: 358.35,
                y: 5.25,
                sx: .273,
                sy: .273,
                r: -1.43,
                a: 1
            },
            81: {
                x: 366.492,
                y: 5.735,
                sx: .313,
                sy: .313,
                r: -1.367
            },
            82: {
                x: 374.555,
                y: 5.856,
                sx: .353,
                sy: .353,
                r: -1.303
            },
            83: {
                x: 382.478,
                y: 5.708,
                sx: .393,
                sy: .393,
                r: -1.239
            },
            84: {
                x: 390.421,
                y: 5.168,
                sx: .433,
                sy: .433,
                r: -1.175
            },
            85: {
                x: 398.34,
                y: 4.394,
                sx: .473,
                sy: .473,
                r: -1.111
            },
            86: {
                x: 406.211,
                y: 3.242,
                sx: .513,
                sy: .513,
                r: -1.048
            },
            87: {
                x: 414.159,
                y: 1.734,
                sx: .553,
                sy: .553,
                r: -.984
            },
            88: {
                x: 422.243,
                y: -.048,
                sx: .593,
                sy: .593,
                r: -.92
            },
            89: {
                x: 430.366,
                y: -2.181,
                sx: .633,
                sy: .633,
                r: -.856
            },
            90: {
                x: 438.654,
                y: -4.619,
                sx: .673,
                sy: .673,
                r: -.792
            },
            91: {
                x: 447.083,
                y: -7.42,
                sx: .712,
                sy: .712,
                r: -.728
            },
            92: {
                x: 455.85,
                y: -10.35,
                sx: .752,
                sy: .752,
                r: -.665
            },
            93: {
                x: 466.225,
                y: -13.019,
                sx: .765,
                sy: .765,
                r: -.609,
                a: .92
            },
            94: {
                x: 476.77,
                y: -15.847,
                sx: .777,
                sy: .777,
                r: -.554,
                a: .83
            },
            95: {
                x: 487.449,
                y: -18.65,
                sx: .789,
                sy: .789,
                r: -.499,
                a: .75
            },
            96: {
                x: 498.312,
                y: -21.461,
                sx: .801,
                sy: .801,
                r: -.443,
                a: .67
            },
            97: {
                x: 509.252,
                y: -24.305,
                sx: .813,
                sy: .813,
                r: -.388,
                a: .58
            },
            98: {
                x: 520.423,
                y: -27.249,
                sx: .825,
                sy: .825,
                r: -.332,
                a: .5
            },
            99: {
                x: 531.746,
                y: -30.127,
                sx: .837,
                sy: .837,
                r: -.277,
                a: .42
            },
            100: {
                x: 543.214,
                y: -33.047,
                sx: .85,
                sy: .85,
                r: -.222,
                a: .33
            },
            101: {
                x: 554.965,
                y: -35.879,
                sx: .862,
                sy: .862,
                r: -.166,
                a: .25
            },
            102: {
                x: 566.851,
                y: -38.711,
                sx: .874,
                sy: .874,
                r: -.111,
                a: .17
            },
            103: {
                x: 578.881,
                y: -41.505,
                sx: .886,
                sy: .886,
                r: -.055,
                a: .08
            },
            104: {
                x: 591.05,
                y: -44.15,
                sx: .898,
                sy: .898,
                r: 0,
                a: 0
            }
        }).addAction(function() {
            this.tile14.gotoAndStop(0), this.tile15.gotoAndStop(0), this.tile16.gotoAndStop(0), this.tile17.gotoAndStop(0), this.tile18.gotoAndStop(0)
        }, 0).addAction(function() {
            this.tile18.gotoAndPlay(1)
        }, 34).addAction(function() {
            this.tile16.gotoAndPlay(1), this.tile17.gotoAndPlay(1)
        }, 44).addAction(function() {
            this.tile14.gotoAndPlay(1), this.tile15.gotoAndPlay(1)
        }, 54), this.labels.forEach((label, index) => {
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
        bigWinBlink2: "../../images/en/loader/bigWinBlink2.png",
        sceneSlotSpecialLighter2: "../../images/en/loader/sceneSlotSpecialLighter2.png",
        fxSmokeBIgLoop_00000: "../../images/en/loader/fxSmokeBIgLoop_00000.png",
        logo: "../../images/en/loader/logo.png",
        winLineGlowTile1: "../../images/en/loader/winLineGlowTile1.png",
        paytable1PaleteGlow1: "../../images/en/loader/paytable1PaleteGlow1.png",
        logoPlateShine: "../../images/en/loader/logoPlateShine.png",
        paytable1PlateShine: "../../images/en/loader/paytable1PlateShine.png",
        logoPlate: "../../images/en/loader/logoPlate.jpg",
        paytablePaleteGlowUp: "../../images/en/loader/paytablePaleteGlowUp.png",
        paytable1Text: "../../images/en/loader/paytable1Text.png",
        paytable1Plate: "../../images/en/loader/paytable1Plate.jpg",
        bigWinSumShadow: "../../images/en/loader/bigWinSumShadow.png",
        splashSmokeS: "../../images/en/loader/splashSmokeS.png",
        wheelFireGlow: "../../images/en/loader/wheelFireGlow.png",
        featureSpecialSmoke: "../../images/en/loader/featureSpecialSmoke.png",
        tile18BigArm: "../../images/en/loader/tile18BigArm.png",
        tile18BigEyebrowR: "../../images/en/loader/tile18BigEyebrowR.png",
        tile18BigEyebrowL: "../../images/en/loader/tile18BigEyebrowL.png",
        tile18BigEyeClosedR: "../../images/en/loader/tile18BigEyeClosedR.png",
        tile18BigEyeClosedL: "../../images/en/loader/tile18BigEyeClosedL.png",
        tile18BigEyeRightLidUp: "../../images/en/loader/tile18BigEyeRightLidUp.png",
        tile18BigEyeRightLidDown: "../../images/en/loader/tile18BigEyeRightLidDown.png",
        tile18BigIrisR: "../../images/en/loader/tile18BigIrisR.png",
        tile18BigEyeballR: "../../images/en/loader/tile18BigEyeballR.png",
        tile18BigEyeLeftLidUp: "../../images/en/loader/tile18BigEyeLeftLidUp.png",
        tile18BigEyeLeftLidDown: "../../images/en/loader/tile18BigEyeLeftLidDown.png",
        tile18BigIrisL: "../../images/en/loader/tile18BigIrisL.png",
        tile18BigEyeballL: "../../images/en/loader/tile18BigEyeballL.png",
        tile18BigNose: "../../images/en/loader/tile18BigNose.png",
        tile18BigSmokingMouth: "../../images/en/loader/tile18BigSmokingMouth.png",
        tile18BigSmokingFace01: "../../images/en/loader/tile18BigSmokingFace01.png",
        tile18BigMouth: "../../images/en/loader/tile18BigMouth.png",
        tile18BigFaceNormal: "../../images/en/loader/tile18BigFaceNormal.png",
        tile18BigHead: "../../images/en/loader/tile18BigHead.png",
        tile18BigBody: "../../images/en/loader/tile18BigBody.png",
        tile17BigHandL: "../../images/en/loader/tile17BigHandL.png",
        tile17BigHandR: "../../images/en/loader/tile17BigHandR.png",
        tile17BigEyebrowL: "../../images/en/loader/tile17BigEyebrowL.png",
        tile17BigEyebrowR: "../../images/en/loader/tile17BigEyebrowR.png",
        tile17BigEyeClosedL: "../../images/en/loader/tile17BigEyeClosedL.png",
        tile17BigEyeLightL: "../../images/en/loader/tile17BigEyeLightL.png",
        tile17BigEyelidLeftUp: "../../images/en/loader/tile17BigEyelidLeftUp.png",
        tile17BigEyelidLeftDown: "../../images/en/loader/tile17BigEyelidLeftDown.png",
        tile17BigIrisL: "../../images/en/loader/tile17BigIrisL.png",
        tile17BigEyeballL: "../../images/en/loader/tile17BigEyeballL.png",
        tile17BigEyeClosedR: "../../images/en/loader/tile17BigEyeClosedR.png",
        tile17BigEyeLightR: "../../images/en/loader/tile17BigEyeLightR.png",
        tile17BigEyelidRightUp: "../../images/en/loader/tile17BigEyelidRightUp.png",
        tile17BigEyelidRightDown: "../../images/en/loader/tile17BigEyelidRightDown.png",
        tile17BigIrisR: "../../images/en/loader/tile17BigIrisR.png",
        tile17BigEyeballR: "../../images/en/loader/tile17BigEyeballR.png",
        tile17BigNose: "../../images/en/loader/tile17BigNose.png",
        tile17BigMouth: "../../images/en/loader/tile17BigMouth.png",
        tile17BigHairLeft: "../../images/en/loader/tile17BigHairLeft.png",
        tile17BigHairUp: "../../images/en/loader/tile17BigHairUp.png",
        tile17BigHairRight: "../../images/en/loader/tile17BigHairRight.png",
        tile17BigChin: "../../images/en/loader/tile17BigChin.png",
        tile17BigFace: "../../images/en/loader/tile17BigFace.png",
        tile17BigEarLeft: "../../images/en/loader/tile17BigEarLeft.png",
        tile17BigEarRight: "../../images/en/loader/tile17BigEarRight.png",
        tile17BigBody: "../../images/en/loader/tile17BigBody.png",
        tile16BigCigarSmoke: "../../images/en/loader/tile16BigCigarSmoke.png",
        tile16BigHand: "../../images/en/loader/tile16BigHand.png",
        tile16BigGlassesFront: "../../images/en/loader/tile16BigGlassesFront.png",
        tile16BigEyebrowL: "../../images/en/loader/tile16BigEyebrowL.png",
        tile16BigEyebrowR: "../../images/en/loader/tile16BigEyebrowR.png",
        tile16BigEyeClosedL: "../../images/en/loader/tile16BigEyeClosedL.png",
        tile16BigEyeClosedR: "../../images/en/loader/tile16BigEyeClosedR.png",
        tile16BigEyeLightR: "../../images/en/loader/tile16BigEyeLightR.png",
        tile16BigEyelidRightUp: "../../images/en/loader/tile16BigEyelidRightUp.png",
        tile16BigEyelidRightDown: "../../images/en/loader/tile16BigEyelidRightDown.png",
        tile16BigIrisR: "../../images/en/loader/tile16BigIrisR.png",
        tile16BigEyeballR: "../../images/en/loader/tile16BigEyeballR.png",
        tile16BigEyelidLeftUp: "../../images/en/loader/tile16BigEyelidLeftUp.png",
        tile16BigEyelidLeftDown: "../../images/en/loader/tile16BigEyelidLeftDown.png",
        tile16BigEyeLightL: "../../images/en/loader/tile16BigEyeLightL.png",
        tile16BigIrisL: "../../images/en/loader/tile16BigIrisL.png",
        tile16BigEyeballL: "../../images/en/loader/tile16BigEyeballL.png",
        tile16BigCigar: "../../images/en/loader/tile16BigCigar.png",
        tile16BigCigarShadow: "../../images/en/loader/tile16BigCigarShadow.png",
        tile16BigHead: "../../images/en/loader/tile16BigHead.png",
        tile16BigGlassesBack: "../../images/en/loader/tile16BigGlassesBack.png",
        tile16BigBody: "../../images/en/loader/tile16BigBody.png",
        tile15BigHand: "../../images/en/loader/tile15BigHand.png",
        tile15BigHat: "../../images/en/loader/tile15BigHat.png",
        tile15BigHatShadow: "../../images/en/loader/tile15BigHatShadow.png",
        tile15BigStick: "../../images/en/loader/tile15BigStick.png",
        tile15BigStickShadow: "../../images/en/loader/tile15BigStickShadow.png",
        tile15BigEyeClosedR: "../../images/en/loader/tile15BigEyeClosedR.png",
        tile15BigEyeClosedL: "../../images/en/loader/tile15BigEyeClosedL.png",
        tile15BigHead: "../../images/en/loader/tile15BigHead.png",
        tile15BigBody: "../../images/en/loader/tile15BigBody.png",
        tile14BigHandR: "../../images/en/loader/tile14BigHandR.png",
        tile14BigHandRShadow: "../../images/en/loader/tile14BigHandRShadow.png",
        tile14BigHandL: "../../images/en/loader/tile14BigHandL.png",
        tile14BigHandLShadow: "../../images/en/loader/tile14BigHandLShadow.png",
        tile14BigEyebrowR: "../../images/en/loader/tile14BigEyebrowR.png",
        tile14BigEyebrowL: "../../images/en/loader/tile14BigEyebrowL.png",
        tile14BigMouth: "../../images/en/loader/tile14BigMouth.png",
        tile14BigMustache: "../../images/en/loader/tile14BigMustache.png",
        tile14BigEyeClosedR: "../../images/en/loader/tile14BigEyeClosedR.png",
        tile14BigEyeClosedL: "../../images/en/loader/tile14BigEyeClosedL.png",
        tile14BigHead: "../../images/en/loader/tile14BigHead.png",
        tile14BigBody: "../../images/en/loader/tile14BigBody.png",
        bigWinSmokeS: "../../images/en/loader/bigWinSmokeS.png",
        fxSmokeBIgLoop_00003: "../../images/en/loader/fxSmokeBIgLoop_00003.png",
        fxSmokeBIgLoop_00006: "../../images/en/loader/fxSmokeBIgLoop_00006.png",
        fxSmokeBIgLoop_00009: "../../images/en/loader/fxSmokeBIgLoop_00009.png",
        fxSmokeBIgLoop_00012: "../../images/en/loader/fxSmokeBIgLoop_00012.png",
        fxSmokeBIgLoop_00015: "../../images/en/loader/fxSmokeBIgLoop_00015.png",
        fxSmokeBIgLoop_00018: "../../images/en/loader/fxSmokeBIgLoop_00018.png",
        fxSmokeBIgLoop_00021: "../../images/en/loader/fxSmokeBIgLoop_00021.png",
        fxSmokeBIgLoop_00024: "../../images/en/loader/fxSmokeBIgLoop_00024.png",
        fxSmokeBIgLoop_00027: "../../images/en/loader/fxSmokeBIgLoop_00027.png",
        fxSmokeBIgLoop_00030: "../../images/en/loader/fxSmokeBIgLoop_00030.png",
        fxSmokeBIgLoop_00033: "../../images/en/loader/fxSmokeBIgLoop_00033.png",
        fxSmokeBIgLoop_00036: "../../images/en/loader/fxSmokeBIgLoop_00036.png",
        fxSmokeBIgLoop_00039: "../../images/en/loader/fxSmokeBIgLoop_00039.png",
        fxSmokeBIgLoop_00042: "../../images/en/loader/fxSmokeBIgLoop_00042.png",
        fxSmokeBIgLoop_00045: "../../images/en/loader/fxSmokeBIgLoop_00045.png",
        fxSmokeBIgLoop_00048: "../../images/en/loader/fxSmokeBIgLoop_00048.png",
        fxSmokeBIgLoop_00051: "../../images/en/loader/fxSmokeBIgLoop_00051.png",
        fxSmokeBIgLoop_00054: "../../images/en/loader/fxSmokeBIgLoop_00054.png",
        fxSmokeBIgLoop_00057: "../../images/en/loader/fxSmokeBIgLoop_00057.png",
        fxSmokeBIgLoop_00060: "../../images/en/loader/fxSmokeBIgLoop_00060.png",
        sceneSlotSpecial: "../../images/en/loader/sceneSlotSpecial.jpg"
    }
}(com.casino.game.utils || {});