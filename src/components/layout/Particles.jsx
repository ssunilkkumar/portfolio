import React from 'react'
import Particles from 'react-particles-js'
import { background } from '../../profile'
import ScrollDown from "../scroll-down/scroll-down.component";


const ParticlesBackground = () => {
    return (
        <div className="particle">
            { background.type === 'Snow' && <Particles
            height="100vh"
            width="100%"
                params={{
                "particles": {
                    "number": {
                        "value": 400,
                        "density": {
                            "enable": false
                        }
                    },
                    "color": {
                        "value": "#f0e9e9"
                    },
                    "background": {
                        "value": "#ebe0eb"
                    },
                    "size": {
                        "value": 3,
                        "random": true,
                        "anim": {
                            "speed": 10,
                            "size_min": 0.3
                        }
                    },
                    "move": {
                        "direction": "bottom",
                        "out_mode": "out",
                        "random": true,
                        "speed": 1,
                    },
                    "line_linked": {
                        "enable": false
                    }
                },
                "interactivity": {
                    "events": {
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        },
                        
                    },
                    "modes": {
                        "remove": {
                            "particles_nb": 5
                        },
                        "bubble": {
                            "distance": 2500,
                            "duration": 2,
                            "size": 60,
                            "opacity": 0.4
                        },
                        "push": {
                            "particles_nb": 5
                        }
                    },
                    "retina_detect": true
                }
            }} 
            
            />}
              <ScrollDown />
        </div>
    )
}

export default ParticlesBackground