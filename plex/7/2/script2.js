"use strict";

//////////////////////////////////////////////////////////////////
// Adapted from a CFDG program
// https://www.contextfreeart.org/gallery2/index.html#design/688
// cubies by Guigui, May 7th, 2007
//////////////////////////////////////////////////////////////////
{

    const code = {
        setup() {
            this.render({
                startShape: 'START',
                background: '#000',
                transform: { sat: -0.99, b: 0.1 },
                zoom: 2,
                maxShapesPerFrame: 10
            });
        },
        rules() {
            return {
                START: s => {
                    this.loop(5, s, {}, s => {
                        this.CUBIES(s);
                    });
                },
                CUBIES: [
                    5, s => {
                        this.CUBE(s);
                        this.CUBIES(s, { x: -1, y: .5774, z: -1, s: .99 });
                    },
                    5, s => {
                        this.CUBE(s);
                        this.CUBIET(s, { x: -1, y: .5774, z: -1, s: .99 });
                    },
                    5, s => {
                        this.CUBE(s);
                        this.CUBIES(s, { x: 1, y: .5774, z: -1, s: .99 });
                    },
                    5, s => {
                        this.CUBE(s);
                        //this.CUBIETT(s, { x: 1, z: -1, s: .99 });
                        this.CUBIETT(s, { x: 1, y: .5774, z: -1, s: .99 });
                    },
                    5, s => {
                        this.CUBE(s);
                        //this.CUBIES(s, { x: 1, z: -1, s: .99, b: 0.04 });
                        this.CUBIES(s, { x: 1, y: -.5774, z: -1, s: .99, b: 0.04 });
                    },
                    5, s => {
                        this.CUBE(s);
                        this.CUBIETTT(s, { x: -1, y: -1, z: -1, s: .99 });
                    },
                    0.5, s => {}
                ],
                CUBIET: [
                    5, s => {
                        this.CUBE(s);
                        this.CUBIET(s, { x: -1, y: .5774, z: -1, s: .99, b: 0.04 });
                    },
                    0.5, s => {
                        this.CUBE(s);
                        this.CUBIES(s, { x: -1, y: .5774, z: -1, s: .99 });
                    }
                ],
                CUBIETT: [
                    5, s => {
                        this.CUBE(s);
                        this.CUBIETT(s, { x: 1, y: .5774, z: -1, s: .99, b: 0.04 });
                    },
                    0.5, s => {
                        this.CUBE(s);
                        this.CUBIES(s, { x: 1, y: .5774, z: -1, s: .99 });
                    }
                ],
                CUBIETTT: [
                    5, s => {
                        this.CUBE(s);
                        this.CUBIETTT(s, { y: -1, z: -1, s: .99 });
                    },
                    0.5, s => {
                        this.CUBE(s);
                        this.CUBIES(s, { y: -1, z: -1, s: .99 });
                    }
                ],
                CUBE: [
                    5, s => {},
                    5, s => {
                        this.loop(2, s, { s: [-1, 1] }, s => {
                            this.SIDE(s, {});
                            this.TOP(s, { b: 0.2 });
                        });
                    }
                ],
                /**/
                SIDE: s => {
                    this.FACE(s, { skew: [0, 30] });
                },
                TOP: s => {
                    this.FACE(s, { s: [1.413, 0.816], r: 135 });
                },
                FACE: s => {
                    this.SQUARE(s, { x: .5, y: -.5 });
                    this.SQU(s, { y: -.5, b: 1 });
                    this.SQU(s, { x: 1, y: -.5 });
                    this.SQU(s, { x: .5, r: 90, b: 1 });
                    this.SQU(s, { x: .5, r: 90, y: -1 });
                },
                SQU: [
                    5, s => {
                        this.SQUARE(s, { s: [0, 0], b: -1 });
                    },
                    5, s => {
                        this.SQU(s, { s: [1, 2] });
                    }
                ]
            }
        }
    };
    // import cfdg library
    cfdg.apply(code);
    // run code
    code.setup();
    // Click canvas to generate a new image
    ["click", "touchdown"].forEach(event => {
        document.addEventListener(event, e => code.setup(), false);
    });

}