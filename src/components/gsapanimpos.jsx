import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { fontsizes } from "../utils/fontsize";

function AnimPos(props) {
    const [mountAnim, setMountAnim] = useState(true)
    const xTo = useRef(null);
    const yTo = useRef(null);
    const app = useRef(null);

    useEffect(() => {
        setMountAnim(false)
    }, [])

    const { contextSafe } =  useGSAP(() => {
    xTo.current = gsap.quickTo(".flair", "x", {duration: 0.8, ease: "power3"}),
    yTo.current = gsap.quickTo(".flair", "y", {duration: 0.8, ease: "power3"});
    },{ scope: app } );

    const moveShape = contextSafe((e) => {
        xTo.current(e.clientX - 30);
        yTo.current(e.clientY - 30);
    });

    const style = {
        fontSize: `clamp(${fontsizes.lg} * 3.5, 8vw, ${fontsizes["3xl"]} * 2)`, 
        fontWeight: 600, 
        color: '#fff', 
        textAlign: 'center', 
        fontFamily: "'Cormorant', serif"
    }

    return (
    <div 
        className="app" 
        ref={app} 
        onMouseMove={(e) => moveShape(e)}
        onMouseLeave={() => setMountAnim(false)}
        onMouseEnter={() => setMountAnim(true)}
    >
        <div className="flair" style={{display: mountAnim ? "block" : "none"}}/>
        <h1 style={style}>{props.text}</h1>
    </div>
    );
}

export default AnimPos
