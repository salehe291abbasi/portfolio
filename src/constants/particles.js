
export const hexagone = {
  
        particles: {
          color: {
            value: "#FF0000",
            animation: {
              enable: true,
              speed: 10
            }
          },
          move: {
            attract: {
              enable: false,
              distance: 100,
              rotate: {
                x: 2000,
                y: 2000
              }
            },
            direction: "none",
            enable: true,
            outModes: {
              default: "destroy"
            },
            path: {
              clamp: false,
              enable: true,
              delay: {
                value: 0
              },
              generator: "polygonPathGenerator",
              options: {
                sides: 6,
                turnSteps: 30,
                angle: 30
              }
            },
            random: false,
            speed: 3,
            straight: false,
            trail: {
              fillColor: "#000",
              length: 20,
              enable: true
            }
          },
          number: {
            density: {
              enable: true,
              area: 800
            },
            value: 0
          },
          opacity: {
            value: 1
          },
          shape: {
            type: "circle"
          },
          size: {
            value: 2
          }
        },
        background: {
          color: "#000"
        },
        fullScreen: {
          zIndex: -1
        },
        emitters: {
          direction: "none",
          rate: {
            quantity: 1,
            delay: 0.25
          },
          size: {
            width: 0,
            height: 0
          },
          position: {
            x: 50,
            y: 50
          }
        }
      }
    
export const links = {
                
    fpsLimit: 120,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "push",
            },
            onHover: {
                enable: true,
                mode: "repulse",
            },
            resize: true,
        },
        modes: {
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: "#f48fb1",
        },
        links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        collisions: {
            enable: true,
        },
        move: {
            directions: "none",
            enable: true,
            outModes: {
                default: "bounce",
            },
            random: false,
            speed: 2,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 80,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: 1, max: 5 },
        },
    },
    detectRetina: true,
}
export const absorber = {
    "fullScreen": {
        "enable": true,
        "zIndex": 1
    },
    "particles": {
        "number": {
            "value": 80
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle"
        },
        "opacity": {
            "value": { "min": 0.1, "max": 0.5 },
            "animation": {
                "enable": true,
                "speed": 3,
                "sync": false
            }
        },
        "size": {
            "value": { "min": 1, "max": 50 }
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": false,
            "straight": false,
            "outModes": "out"
        }
    },
    "interactivity": {
        "events": {
            "onHover": {
                "enable": true,
                "mode": "repulse"
            },
            "onClick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "repulse": {
                "distance": 200
            },
            "push": {
                "quantity": 4
            }
        }
    },
    "absorbers": {
        "size": {
            "value": { "min": 5, "max": 10 },
            "limit": 100
        },
        "position": {
            "x": 40,
            "y": 40
        }
    },
    
}
export const amongus = {
    "fullScreen": {
        "enable": true
    },
    "fpsLimit": 120,
    "particles": {
        "groups": {
            "z5000": {
                "number": {
                    "value": 70
                },
                "zIndex": {
                    "value": 50
                }
            },
            "z7500": {
                "number": {
                    "value": 30
                },
                "zIndex": {
                    "value": 75
                }
            },
            "z2500": {
                "number": {
                    "value": 50
                },
                "zIndex": {
                    "value": 25
                }
            },
            "z1000": {
                "number": {
                    "value": 40
                },
                "zIndex": {
                    "value": 10
                }
            }
        },
        "number": {
            "value": 200
        },
        "color": {
            "value": "#fff"
        },
        "shape": {
            "type": "circle"
        },
        "opacity": {
            "value": 1
        },
        "size": {
            "value": 3
        },
        "move": {
            "angle": {
                "value": 10,
                "offset": 0
            },
            "enable": true,
            "speed": 5,
            "direction": "right",
            "outModes": "out"
        },
        "zIndex": {
            "value": 5,
            "opacityRate": 0.5
        }
    },
    "interactivity": {
        "events": {
            "onClick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "push": {
                "quantity": 4,
                "groups": ["z5000", "z7500", "z2500", "z1000"]
            }
        }
    },
    
    "emitters": {
        "position": {
            "y": -5,
            "x": 55
        },
        "rate": {
            "delay": 7,
            "quantity": 1
        },
        "size": {
            "width": 0,
            "height": 0
        },
        
    }
}
export const polygonmask = {
    "fullScreen": {
        "enable": true,
        "zIndex": 1
    },
    "detectRetina": false,
    "fpsLimit": 120,
    "interactivity": {
        "events": {
            "onClick": {
                "enable": false,
                "mode": "push"
            },
            "onDiv": {
                "elementId": "repulse-div",
                "enable": false,
                "mode": "repulse"
            },
            "onHover": {
                "enable": true,
                "mode": "bubble",
                "parallax": {
                    "enable": false,
                    "force": 2,
                    "smooth": 10
                }
            },
            "resize": true
        },
        "modes": {
            "bubble": {
                "distance": 40,
                "duration": 2,
                "opacity": 8,
                "size": 12,
                "speed": 3
            },
            "connect": {
                "distance": 80,
                "lineLinked": {
                    "opacity": 0.5
                },
                "radius": 60
            },
            "grab": {
                "distance": 200,
                "lineLinked": {
                    "opacity": 1
                }
            },
            "push": {
                "quantity": 4
            },
            "remove": {
                "quantity": 2
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "slow": {
                "active": false,
                "radius": 0,
                "factor": 1
            }
        }
    },
    "particles": {
        "color": {
            "value": ["#4285f4", "#34A853", "#FBBC05", "#EA4335"]
        },
        "lineLinked": {
            "blink": false,
            "color": "random",
            "consent": false,
            "distance": 80,
            "enable": true,
            "opacity": 1,
            "width": 1
        },
        "move": {
            "attract": {
                "enable": false,
                "rotate": {
                    "x": 600,
                    "y": 1200
                }
            },
            "bounce": false,
            "direction": "none",
            "enable": true,
            "outMode": "bounce",
            "random": false,
            "speed": 1,
            "straight": false
        },
        "number": {
            "limit": 0,
            "value": 200
        },
        "opacity": {
            "animation": {
                "enable": true,
                "minimumValue": 0.05,
                "speed": 2,
                "sync": false
            },
            "random": false,
            "value": 0.4
        },
        "shape": {
            "type": "circle"
        },
        "size": {
            "animation": {
                "enable": false,
                "minimumValue": 0.1,
                "speed": 40,
                "sync": false
            },
            "random": true,
            "value": 1
        }
    },
    "polygon": {
        "draw": {
            "enable": false,
            "lineColor": "rgba(255,255,255,0.2)",
            "lineWidth": 0.5
        },
        "enable": true,
        "move": {
            "radius": 10
        },
        "position": {
            "x": 30,
            "y": 10
        },
        "inline": {
            "arrangement": "equidistant"
        },
        "scale": 1,
        "type": "inline",
        "url": "https://particles.js.org/images/google.svg"
    },
    "background": {
        "image": "",
        "position": "50% 50%",
        "repeat": "no-repeat",
        "size": "cover"
    }
}
export const presets = {
    "fullScreen": {
        "enable": true,
        "zIndex": 1
    },
    "preset": "links",
    "background": {
        "color": "#0d47a1",
        "image": "",
        "position": "50% 50%",
        "repeat": "no-repeat",
        "size": "cover"
    }
}
export const bg = {
    "fullScreen": {
        "enable": true,
        "zIndex": 1
    },
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle"
        },
        "opacity": {
            "value": 1,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 30,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "events": {
            "onHover": {
                "enable": true,
                "mode": "bubble",
                "parallax": {
                    "enable": false,
                    "force": 60,
                    "smooth": 10
                }
            },
            "onClick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "lineLinked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 100,
                "duration": 2,
                "opacity": 1,
                "speed": 3
            },
            "repulse": {
                "distance": 200
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "backgroundMask": {
        "enable": true,
        "cover": {
            "value": {
                "r": 255,
                "g": 255,
                "b": 255
            }
        }
    },
    "retina_detect": true,
    "background": {
        "color": "#ffffff",
        "image": "url('https://particles.js.org/images/background3.jpg')",
        "position": "50% 50%",
        "repeat": "no-repeat",
        "size": "cover"
    }
}


export const firefly = {
    fpsLimit: 60,
    particles: {
        move: {
            bounce: false,
            direction: "none",
            enable: true,
            outModes: "out",
            random: false,
            speed: 2,
            straight: false,
        },
    },
    number: { density: { enable: true, area: 800 }, value: 80 },
    opacity: {
        value: 0.5,
    },
    shape: {
        type: "circle",
    },
    size: {
        value: { min: 1, max: 5 },
    },
    themes: [
        {
            name: "light",
            default: {
                value: true,
                mode: "light",
            },
            options: {
                background: {
                    color: "#fff",
                },
                particles: {
                    color: {
                        value: "#000",
                    },
                },
            },
        },
        {
            name: "dark",
            default: {
                value: true,
                mode: "dark",
            },
            options: {
                particles: {
                    color: {
                        // value: "#75075E"
                        value: "#FD4495",
                    },
                },
            },
        },
    ],
};

export const links2 = {
    fps_limit: 60,
    interactivity: {
        detect_on: "canvas",
        events: {
            onclick: { enable: true, mode: "push" },
            onhover: {
                enable: true,
                mode: "attract",
                parallax: { enable: false, force: 60, smooth: 10 },
            },
            resize: true,
        },
        modes: {
            push: { quantity: 4 },
            attract: { distance: 200, duration: 0.4, factor: 5 },
        },
    },
    particles: {
        color: { value: "#ffffff" },
        line_linked: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.4,
            width: 1,
        },
        move: {
            attract: { enable: false, rotateX: 600, rotateY: 1200 },
            bounce: false,
            direction: "none",
            enable: true,
            out_mode: "out",
            random: false,
            speed: 2,
            straight: false,
        },
        number: { density: { enable: true, value_area: 800 }, value: 80 },
        opacity: {
            anim: { enable: false, opacity_min: 0.1, speed: 1, sync: false },
            random: false,
            value: 0.5,
        },
        shape: {
            character: {
                fill: false,
                font: "Verdana",
                style: "",
                value: "*",
                weight: "400",
            },
            image: {
                height: 100,
                replace_color: true,
                src: "images/github.svg",
                width: 100,
            },
            polygon: { nb_sides: 5 },
            stroke: { color: "#000000", width: 0 },
            type: "circle",
        },
        size: {
            anim: { enable: false, size_min: 0.1, speed: 40, sync: false },
            random: true,
            value: 5,
        },
    },
    polygon: {
        draw: { enable: false, lineColor: "#ffffff", lineWidth: 0.5 },
        move: { radius: 10 },
        scale: 1,
        type: "none",
        url: "",
    },
    retina_detect: true,
};
