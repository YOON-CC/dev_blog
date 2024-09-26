"use client"

import Typewriter from "typewriter-effect";

export default function TypingUi() {
    return (
        <Typewriter
            options={{
                strings: [
                    '"창의적으로 만들어가는 것입니다."',
                    '"시각적으로 보여주는 것입니다."',
                    '"지속적으로 학습하는 것입니다."',
                    '"복잡한 문제를 단순화하는 것입니다."',
                ],
                autoStart: true,
                loop: true,
            }}
        />
    );
}
