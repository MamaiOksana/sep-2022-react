import React from "react";

export const Marge = () => {
    const url = 'https://upload.wikimedia.org/wikipedia/en/0/0b/Marge_Simpson.png';

    return (
        <div className="Simpson">
            <h3>Marge Simpson</h3>
            <p>Marjorie Jacqueline "Marge" Simpson[1] (née Bouvier) is a character in the American animated sitcom The
                Simpsons and part of the eponymous family. Voiced by Julie Kavner, she first appeared on television in
                The Tracey Ullman Show short "Good Night" on April 19, 1987. Marge was created and designed by
                cartoonist Matt Groening while he was waiting in the lobby of James L. Brooks' office. Groening had been
                called to pitch a series of shorts based on Life in Hell but instead decided to create a new set of
                characters. He based the character on his mother Margaret Groening. After appearing on The Tracey Ullman
                Show for three seasons, the Simpson family received their own series on Fox, which debuted December 17,
                1989.</p>
            <img src={url}/>
        </div>
    )

}