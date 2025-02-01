import React, { useRef } from "react";

export default function Lottie({ link }) {
    const ref = useRef(null);
    React.useEffect(() => {
        import("@lottiefiles/lottie-player");
    });
    return (
        <lottie-player
            id="firstLottie"
            ref={ref}
            autoplay
            // controls
            loop={true}
            mode="normal"
            src={link}
            style={{ width: "400px", height: "auto" }}
        ></lottie-player>
    );
}