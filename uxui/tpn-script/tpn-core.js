/*======================================
 * CopyRight (c) 2021 Norman Andrians

 * Code By Norman Andrians
 * Images By Norman Andrians & Original
 * Designer Norman Andrians

 * please appreciate me :)
=======================================*/

var intelligenceValue = 0;
var heightValue = 0;
var ageValue = 0;

// Emma's Status
var intelligenceEmma = 147;
var heightEmma = 158;
var ageEmma = 13;

// Norman's Status
var intelligenceNorman = 172;
var heightNorman = 171;
var ageNorman = 13;

// Ray's Status
var intelligenceRay = 153;
var heightRay = 168;
var ageRay = 13;

// Progress bar value characters
let intelligenceEmmaBar = intelligenceEmma/200*100;
let heightEmmaBar = heightEmma/200*100;
let ageEmmaBar = ageEmma/100*100;
    
let intelligenceNormanBar = intelligenceNorman/200*100;
let heightNormanBar = heightNorman/200*100;
let ageNormanBar = ageNorman/100*100;
    
let intelligenceRayBar = intelligenceRay/200*100;
let heightRayBar = heightRay/200*100;
let ageRayBar = ageRay/100*100;

window.onload = function() {
    let intelligenceBarWidth = intelligenceEmmaBar;
    let heightBarWidth = heightEmmaBar;
    let ageBarWidth = ageEmmaBar;

    // selecting button elements using DOM
    const emmaThemeButton = document.querySelectorAll(".change-theme")[0].addEventListener('click', SelectEmma);
    const normanThemeButton = document.querySelectorAll(".change-theme")[1].addEventListener('click', SelectNorman);
    const rayThemeButton = document.querySelectorAll(".change-theme")[2].addEventListener('click', SelectRay);
    
    // selecting stats value elements using DOM
    const intelligenceValueElement = document.getElementById("intelligent-value");
    const heightValueElement = document.getElementById("height-value");
    const ageValueElement = document.getElementById("age-value");
    
    // selecting stats bar elements using DOM
    const intelligenceBar = document.getElementById("intelligent-bar");
    const heightBar = document.getElementById("height-bar");
    const ageBar = document.getElementById("age-bar");
    
    // Progress bar Animation (start)
    const intelligenceAnim = setInterval(function() {
        if(intelligenceValue >= intelligenceEmma) {
            clearInterval(intelligenceAnim);
            return intelligenceValue;
        }
        else {
            intelligenceValue++;
            intelligenceValueElement.innerHTML = intelligenceValue;
        }
    }, 5);
    
    const heightAnim = setInterval(function() {
        if(heightValue >= heightEmma) {
            clearInterval(heightAnim);
            return intelligenceValue;
        }
        else {
            heightValue++;
            heightValueElement.innerHTML = heightValue;
        }
    }, 5);
    
    const ageAnim = setInterval(function() {
        if(ageValue >= ageEmma) {
            clearInterval(ageAnim);
            return intelligenceValue;
        }
        else {
            ageValue++;
            ageValueElement.innerHTML = ageValue;
        }
    }, 120);
    
    // progress bar characters css
    intelligenceBar.style.width = intelligenceBarWidth+"%";
    heightBar.style.width = heightBarWidth+"%";
    ageBar.style.width = ageBarWidth+"%";
    
    setInterval(addedDate, 1000);
    bgColorStart();
};

// date and time
function addedDate() {
    // selecting date and time elements using DOM
    const timeElement = document.getElementById("time");
    const dateElement = document.getElementById("date");
    
    // add date and time
    var dateTime = new Date();
    
    // get time
    var hours = dateTime.getHours();
    var minutes = dateTime.getMinutes();
    
    // get date
    var days = dateTime.getDay();
    var month = dateTime.getDate();
    var years = dateTime.getFullYear();
    
    switch(days) {
        case 1: days = "Monday"; break;
        case 2: days = "Tuesday"; break;
        case 3: days = "Wednesday"; break;
        case 4: days = "Thursday"; break;
        case 5: days = "Friday"; break;
        case 6: days = "Saturday"; break;
        case 0: days = "Sunday"; break;
        default: days = "NaN";
    }
    
    
    switch(minutes) {
        case 1: minutes = '0'+minutes; break;
        case 2: minutes = '0'+minutes; break;
        case 3: minutes = '0'+minutes; break;
        case 4: minutes = '0'+minutes; break;
        case 5: minutes = '0'+minutes; break;
        case 6: minutes = '0'+minutes; break;
        case 7: minutes = '0'+minutes; break;
        case 8: minutes = '0'+minutes; break;
        case 9: minutes = '0'+minutes; break;
    }
    
    switch(hours) {
        case 1: hours = '0'+hours; break;
        case 2: hours = '0'+hours; break;
        case 3: hours = '0'+hours; break;
        case 4: hours = '0'+hours; break;
        case 5: hours = '0'+hours; break;
        case 6: hours = '0'+hours; break;
        case 7: hours = '0'+hours; break;
        case 8: hours = '0'+hours; break;
        case 9: hours = '0'+hours; break;
    }
    
    // add date and times to elements
    timeElement.innerHTML = hours+":"+minutes;
    dateElement.innerHTML = days+" "+month+", "+years;

    return dateTime;
}

// Changes to Emma's theme and stats
function SelectEmma() {
    // selecting char & name elements using DOM
    const characterImage = document.getElementById("char-img");
    const characterName = document.getElementById("name");

    // selecting name (kanji) elements using DOM
    const characterNameEmmaKanji = document.getElementById("name-emma-kanji");
    const characterNameNormanKanji = document.getElementById("name-norman-kanji");
    const characterNameRayKanji = document.getElementById("name-ray-kanji");

    // selecting about Emma elements using DOM
    const characterAbout = document.getElementById("about-text");

    // selecting background color elements using DOM
    const colorBackground = document.getElementById("color-background");

    // change name characters to Emma
    characterName.innerHTML = "EMMA";

    // idk if javascript can use kanji or not, because it doesn't work so i hide some elements
    characterNameEmmaKanji.style.display = "inline";
    characterNameNormanKanji.style.display = "none";
    characterNameRayKanji.style.display = "none";

    // about text (source: yakusoku no neverland wiki fandom)
    characterAbout.innerHTML = "<b>Emma</b> was born on August 22, 2034. She was sent to Grace Field House a year later in 2035. Under the parental care of Isabella and the happy times she spent with her fellow foster siblings, <b>Emma</b> had a happy childhood. Due to their close age and probably the fact that they are the top students academically, she was exceptionally close to <b>Norman</b> and <b>Ray</b> out of all the orphans in Grace Field";

    // name and title of character image
    characterImage.alt = "Emma";
    characterImage.title = "'Even if it's impossible, I want to escape with everyone. Let's figure it out! I don't want all of us to die outside. But it isn't an option to leave them behind. I want Conny to be the last. i'll never let everyone end up like that again. If there's no place for humans to live, then let's make one outside. Let's change the world'";

    // character image
    characterImage.src = "assets/image/characters/emma.png";

    // Emma's theme and status function
    EmmaTheme();
    EmmaStatus();
}

// Norman's theme and stats
function SelectNorman() {
    // selecting char & name elements using DOM
    const characterImage = document.getElementById("char-img");
    const characterName = document.getElementById("name");
    
    // selecting name (kanji) elements using DOM
    const characterNameEmmaKanji = document.getElementById("name-emma-kanji");
    const characterNameNormanKanji = document.getElementById("name-norman-kanji");
    const characterNameRayKanji = document.getElementById("name-ray-kanji");
    
    // selecting about Norman elements using DOM
    const characterAbout = document.getElementById("about-text");
    
    // change name characters to Norman
    characterName.innerHTML = "NORMAN";
    
    // idk if javascript can use kanji or not, because it doesn't work so i hide some elements
    characterNameEmmaKanji.style.display = "none";
    characterNameNormanKanji.style.display = "inline";
    characterNameRayKanji.style.display = "none";
    
    // about text (source: yakusoku no neverland wiki fandom)
    characterAbout.innerHTML = "<b>Norman</b> was born on March 21, 2034, and sent to Grace Field House a year later in 2035. When <b>Norman</b> was still a young child, he was known to fall sick easily due to his weak physique and health. Most of the sicknesses he had are colds, which were gotten either during winter or even during downpours";
    
    // name and title of character image
    characterImage.alt = "Norman";
    characterImage.title = "'I want to save them. Emma and the others, Cislo Barbara and everyone else. In order to do so. I will gladly become a God or Evil...'";

    // character image
    characterImage.src = "assets/image/characters/norman.png";
    
    // Norman's theme and status function
    NormanTheme();
    NormanStatus();
}

// Ray's theme and stats
function SelectRay() {
    // selecting char & name elements using DOM
    const characterImage = document.getElementById("char-img");
    const characterName = document.getElementById("name");
    
    // selecting name (kanji) elements using DOM
    const characterNameEmmaKanji = document.getElementById("name-emma-kanji");
    const characterNameNormanKanji = document.getElementById("name-norman-kanji");
    const characterNameRayKanji = document.getElementById("name-ray-kanji");
    
    // selecting about Norman elements using DOM
    const characterAbout = document.getElementById("about-text");
    
    // change name characters to Ray
    characterName.innerHTML = "RAY";

    // idk if javascript can use kanji or not, because it doesn't work so i hide some elements
    characterNameEmmaKanji.style.display = "none";
    characterNameNormanKanji.style.display = "none";
    characterNameRayKanji.style.display = "inline";
    
    // about text (source: yakusoku no neverland wiki fandom)
    characterAbout.innerHTML = "<b>Ray</b> was born on January 15, 2034, to Isabella through artificial insemination. A year after his birth in 2035, <b>Ray</b> was removed from his mother's hands and sent to Grace Field House. <b>Ray</b> did not suffer from childhood amnesia, and such, he remembered his life before he arrived at the orphanage; including being in his mother's womb, having the farm's tracker stapled into his ear, the infants being divided into groups of five, the human adults and demons in different facilities, and when he was sent to Grace Field House";
    
    // name and title of character image as
    characterImage.alt = "Ray";
    characterImage.title = "'Emma. I'll live and protect my family. Everyone in this family, just like. This time, for sure. I vow. No matter what happens, I'll never abandon the again. So you don't have to bear this burden all on your own. We'll create it together.. a world where we can live as a family All of us'";

    // character image
    characterImage.src = "assets/image/characters/ray.png";
    
    // Ray's theme and status function
    RayTheme();
    RayStatus();
}

// background color function paramenter
function bgColorLinear(r1, g1, b1, r2, g2, b2) {
    // selecting background color using DOM
    const colorBackground = document.getElementById("color-background");
    return colorBackground.style.background = "linear-gradient(rgb("+r1+", "+g1+", "+b1+"), rgb("+r2+", "+g2+", "+b2+"))";
}

// color theme booleans
var emmaColorTheme = true;
var normanColorTheme = false;
var rayColorTheme = false;

// Emma's color theme
var colorEmmaRed1 = 255;
var colorEmmaGreen1 = 205;
var colorEmmaBlue1 = 98;

var colorEmmaRed2 = 255;
var colorEmmaGreen2 = 174;
var colorEmmaBlue2 = 1;

var colorEmmaTextRed = 255;
var colorEmmaTextGreen = 201;
var colorEmmaTextBlue = 86;

// color background
let colorBackgroundR1 = colorEmmaRed1;
let colorBackgroundG1 = colorEmmaGreen1;
let colorBackgroundB1 = colorEmmaBlue1;

let colorBackgroundR2 = colorEmmaRed2;
let colorBackgroundG2 = colorEmmaGreen2;
let colorBackgroundB2 = colorEmmaBlue2;

function bgColorStart() {
    // change background color
    return bgColorLinear(colorBackgroundR1, colorBackgroundG1, colorBackgroundB1, colorBackgroundR2, colorBackgroundG2, colorBackgroundB2);
}

// Emma's background theme
function EmmaTheme() {
    // Norman's Background to Emma Transition
    if (normanColorTheme) {
        if (colorBackgroundR1 <= colorEmmaRed1 && colorBackgroundG1 >= colorEmmaGreen1 && colorBackgroundB1 >= colorEmmaBlue1 &&
            colorBackgroundR2 <= colorEmmaRed2 && colorBackgroundG2 >= colorEmmaGreen2 && colorBackgroundB2 >= colorEmmaBlue2) {
            
                // transition time
                var transitionTime = 1;

                // change boolean theme
                emmaColorTheme = true;
                normanColorTheme = false;
                rayColorTheme = false;

                function colorbgLinearAnimUp(colorbgLess, colorbgMore) {
                    if (colorbgLess >= colorbgMore) {
                        clearInterval(colorbgLinearAnimUp);
                        return colorbgLess = colorbgMore;
                    } else {
                        colorbgLess++;
                        bgColorLinear(colorBackgroundR1, colorBackgroundG1, colorBackgroundB1, colorBackgroundR2, colorBackgroundG2, colorBackgroundB2);
                    }
                }

                // transition color 1
                const colorAnimR1 = setInterval(colorbgLinearAnimUp(colorBackgroundR1, colorEmmaRed1), transitionTime);
                const colorAnimG1 = setInterval(function() {
                    if (colorBackgroundG1 <= colorEmmaGreen1) {
                        clearInterval(colorAnimG1);
                        return colorBackgroundG1 = colorEmmaGreen1;
                    } else {
                        colorBackgroundG1--;
                        bgColorLinear(colorBackgroundR1, colorBackgroundG1, colorBackgroundB1, colorBackgroundR2, colorBackgroundG2, colorBackgroundB2);
                    }
                }, transitionTime);
                const colorAnimB1 = setInterval(function() {
                    if (colorBackgroundB1 <= colorEmmaBlue1) {
                        clearInterval(colorAnimB1);
                        return colorBackgroundB1 = colorEmmaBlue1;
                    } else {
                        colorBackgroundB1--;
                        bgColorLinear(colorBackgroundR1, colorBackgroundG1, colorBackgroundB1, colorBackgroundR2, colorBackgroundG2, colorBackgroundB2);
                    }
                }, transitionTime);

                // transition color 2
                const colorAnimR2 = setInterval(function() {
                    if (colorBackgroundR2 >= colorEmmaRed2) {
                        clearInterval(colorAnimR2);
                        return colorBackgroundR2 = colorEmmaRed2;
                    } else {
                        colorBackgroundR2++;
                        bgColorLinear(colorBackgroundR1, colorBackgroundG1, colorBackgroundB1, colorBackgroundR2, colorBackgroundG2, colorBackgroundB2);
                    }
                }, transitionTime);
                const colorAnimG2 = setInterval(function() {
                    if (colorBackgroundG2 <= colorEmmaGreen2) {
                        clearInterval(colorAnimG2);
                        return colorBackgroundG2 = colorEmmaGreen2;
                    } else {
                        colorBackgroundG2--;
                        bgColorLinear(colorBackgroundR1, colorBackgroundG1, colorBackgroundB1, colorBackgroundR2, colorBackgroundG2, colorBackgroundB2);
                    }
                }, transitionTime);
                const colorAnimB2 = setInterval(function() {
                    if (colorBackgroundB2 <= colorEmmaBlue2) {
                        clearInterval(colorAnimB2);
                        return colorBackgroundB2 = colorEmmaBlue2;
                    } else {
                        colorBackgroundB2--;
                        bgColorLinear(colorBackgroundR1, colorBackgroundG1, colorBackgroundB1, colorBackgroundR2, colorBackgroundG2, colorBackgroundB2);
                    }
                }, transitionTime);

                return transitionTime, emmaColorTheme, normanColorTheme, rayColorTheme;
        }
    }
    // Ray's Background to Emma Transition
    else if (rayColorTheme) {
        if (colorBackgroundR1 <= colorEmmaRed1 && colorBackgroundG1 <= colorEmmaGreen1 && colorBackgroundB1 >= colorEmmaBlue1 &&
            colorBackgroundR2 <= colorEmmaRed2 && colorBackgroundG2 <= colorEmmaGreen2 && colorBackgroundB2 >= colorEmmaBlue2) {
            
                // transition time
                var transitionTime = 1;

                // change boolean theme
                emmaColorTheme = true;
                normanColorTheme = false;
                rayColorTheme = false;

                // transition color 1
                // actually I have made a parameter function, but because it doesn't work so I have to copy paste thie code
                const colorAnimR1 = setInterval(function() {
                    if (colorBackgroundR1 >= colorEmmaRed1) {
                        clearInterval(colorAnimR1);
                        return colorBackgroundR1 = colorEmmaRed1;
                    } else {
                        colorBackgroundR1++;
                        bgColorLinear(colorBackgroundR1, colorBackgroundG1, colorBackgroundB1, colorBackgroundR2, colorBackgroundG2, colorBackgroundB2);
                    }
                }, transitionTime);
                const colorAnimG1 = setInterval(function() {
                    if (colorBackgroundG1 >= colorEmmaGreen1) {
                        clearInterval(colorAnimG1);
                        return colorBackgroundG1 = colorEmmaGreen1;
                    } else {
                        colorBackgroundG1++;
                        bgColorLinear(colorBackgroundR1, colorBackgroundG1, colorBackgroundB1, colorBackgroundR2, colorBackgroundG2, colorBackgroundB2);
                    }
                }, transitionTime);
                const colorAnimB1 = setInterval(function() {
                    if (colorBackgroundB1 <= colorEmmaBlue1) {
                        clearInterval(colorAnimB1);
                        return colorBackgroundB1 = colorEmmaBlue1;
                    } else {
                        colorBackgroundB1--;
                        bgColorLinear(colorBackgroundR1, colorBackgroundG1, colorBackgroundB1, colorBackgroundR2, colorBackgroundG2, colorBackgroundB2);
                    }
                }, transitionTime);

                // transition color 2
                const colorAnimR2 = setInterval(function() {
                    if (colorBackgroundR2 >= colorEmmaRed2) {
                        clearInterval(colorAnimR2);
                        return colorBackgroundR2 = colorEmmaRed2;
                    } else {
                        colorBackgroundR2++;
                        bgColorLinear(colorBackgroundR1, colorBackgroundG1, colorBackgroundB1, colorBackgroundR2, colorBackgroundG2, colorBackgroundB2);
                    }
                }, transitionTime);
                const colorAnimG2 = setInterval(function() {
                    if (colorBackgroundG2 >= colorEmmaGreen2) {
                        clearInterval(colorAnimG2);
                        return colorBackgroundG2 = colorEmmaGreen2;
                    } else {
                        colorBackgroundG2++;
                        bgColorLinear(colorBackgroundR1, colorBackgroundG1, colorBackgroundB1, colorBackgroundR2, colorBackgroundG2, colorBackgroundB2);
                    }
                }, transitionTime);
                const colorAnimB2 = setInterval(function() {
                    if (colorBackgroundB2 <= colorEmmaBlue2) {
                        clearInterval(colorAnimB2);
                        return colorBackgroundB2 = colorEmmaBlue2;
                    } else {
                        colorBackgroundB2--;
                        bgColorLinear(colorBackgroundR1, colorBackgroundG1, colorBackgroundB1, colorBackgroundR2, colorBackgroundG2, colorBackgroundB2);
                    }
                }, transitionTime);

                return transitionTime, emmaColorTheme, normanColorTheme, rayColorTheme;
        }
    } else {
        return emmaColorTheme, normanColorTheme, rayColorTheme;
    }
}

// Norman's color theme
var colorNormanRed1 = 0;
var colorNormanGreen1 = 255;
var colorNormanBlue1 = 255;

var colorNormanRed2 = 0;
var colorNormanGreen2 = 200;
var colorNormanBlue2 = 200;

var colorNormanTextRed = 0;
var colorNormanTextGreen = 240;
var colorNormanTextBlue = 240;

// Norman's background theme
function NormanTheme() {
    // Norman's Background to Norman Transition
    if (emmaColorTheme) {
        if (colorBackgroundR1 >= colorNormanRed1 && colorBackgroundG1 <= colorNormanGreen1 && colorBackgroundB1 <= colorNormanBlue1 &&
            colorBackgroundR2 >= colorNormanRed2 && colorBackgroundG2 <= colorNormanGreen2 && colorBackgroundB2 <= colorNormanBlue2) {
            
                // transition time
                var transitionTime = 1;

                // change boolean theme
                emmaColorTheme = false;
                normanColorTheme = true;
                rayColorTheme = false;

                // transition color 1
                // actually I have made a parameter function, but because it doesn't work so I have to copy paste thie code
                const colorAnimR1 = setInterval(function() {
                    if (colorBackgroundR1 <= colorNormanRed1) {
                        clearInterval(colorAnimR1);
                        return colorBackgroundR1 = colorNormanRed1;
                    } else {
                        colorBackgroundR1--;
                        bgColorLinear(colorBackgroundR1, colorBackgroundG1, colorBackgroundB1, colorBackgroundR2, colorBackgroundG2, colorBackgroundB2);
                    }
                }, transitionTime);
                const colorAnimG1 = setInterval(function() {
                    if (colorBackgroundG1 >= colorNormanGreen1) {
                        clearInterval(colorAnimG1);
                        return colorBackgroundG1 = colorNormanGreen1;
                    } else {
                        colorBackgroundG1++;
                        bgColorLinear(colorBackgroundR1, colorBackgroundG1, colorBackgroundB1, colorBackgroundR2, colorBackgroundG2, colorBackgroundB2);
                    }
                }, transitionTime);
                const colorAnimB1 = setInterval(function() {
                    if (colorBackgroundB1 >= colorNormanBlue1) {
                        clearInterval(colorAnimB1);
                        return colorBackgroundB1 = colorNormanBlue1;
                    } else {
                        colorBackgroundB1++;
                        bgColorLinear(colorBackgroundR1, colorBackgroundG1, colorBackgroundB1, colorBackgroundR2, colorBackgroundG2, colorBackgroundB2);
                    }
                }, transitionTime);

                // transition color 2
                const colorAnimR2 = setInterval(function() {
                    if (colorBackgroundR2 <= colorNormanRed2) {
                        clearInterval(colorAnimR2);
                        return colorBackgroundR2 = colorNormanRed2;
                    } else {
                        colorBackgroundR2--;
                        bgColorLinear(colorBackgroundR1, colorBackgroundG1, colorBackgroundB1, colorBackgroundR2, colorBackgroundG2, colorBackgroundB2);
                    }
                }, transitionTime);
                const colorAnimG2 = setInterval(function() {
                    if (colorBackgroundG2 >= colorNormanGreen2) {
                        clearInterval(colorAnimG2);
                        return colorBackgroundG2 = colorNormanGreen2;
                    } else {
                        colorBackgroundG2++;
                        bgColorLinear(colorBackgroundR1, colorBackgroundG1, colorBackgroundB1, colorBackgroundR2, colorBackgroundG2, colorBackgroundB2);
                    }
                }, transitionTime);
                const colorAnimB2 = setInterval(function() {
                    if (colorBackgroundB2 >= colorNormanBlue2) {
                        clearInterval(colorAnimB2);
                        return colorBackgroundB2 = colorNormanBlue2;
                    } else {
                        colorBackgroundB2++;
                        bgColorLinear(colorBackgroundR1, colorBackgroundG1, colorBackgroundB1, colorBackgroundR2, colorBackgroundG2, colorBackgroundB2);
                    }
                }, transitionTime);

                return transitionTime, emmaColorTheme, normanColorTheme, rayColorTheme;
        }
    }
    // Ray's Background to Norman Transition
    else if (rayColorTheme) {
        if (colorBackgroundR1 <= colorEmmaRed1 && colorBackgroundG1 <= colorEmmaGreen1 && colorBackgroundB1 >= colorEmmaBlue1 &&
            colorBackgroundR2 <= colorEmmaRed2 && colorBackgroundG2 <= colorEmmaGreen2 && colorBackgroundB2 >= colorEmmaBlue2) {
            
                // transition time
                var transitionTime = 1;

                // change boolean theme
                emmaColorTheme = false;
                normanColorTheme = true;
                rayColorTheme = false;

                // transition color 1
                // actually I have made a parameter function, but because it doesn't work so I have to copy paste thie code
                const colorAnimR1 = setInterval(function() {
                    if (colorBackgroundR1 >= colorEmmaRed1) {
                        clearInterval(colorAnimR1);
                        return colorBackgroundR1 = colorEmmaRed1;
                    } else {
                        colorBackgroundR1++;
                        bgColorLinear(colorBackgroundR1, colorBackgroundG1, colorBackgroundB1, colorBackgroundR2, colorBackgroundG2, colorBackgroundB2);
                    }
                }, transitionTime);
                const colorAnimG1 = setInterval(function() {
                    if (colorBackgroundG1 >= colorEmmaGreen1) {
                        clearInterval(colorAnimG1);
                        return colorBackgroundG1 = colorEmmaGreen1;
                    } else {
                        colorBackgroundG1++;
                        bgColorLinear(colorBackgroundR1, colorBackgroundG1, colorBackgroundB1, colorBackgroundR2, colorBackgroundG2, colorBackgroundB2);
                    }
                }, transitionTime);
                const colorAnimB1 = setInterval(function() {
                    if (colorBackgroundB1 <= colorEmmaBlue1) {
                        clearInterval(colorAnimB1);
                        return colorBackgroundB1 = colorEmmaBlue1;
                    } else {
                        colorBackgroundB1--;
                        bgColorLinear(colorBackgroundR1, colorBackgroundG1, colorBackgroundB1, colorBackgroundR2, colorBackgroundG2, colorBackgroundB2);
                    }
                }, transitionTime);

                // transition color 2
                const colorAnimR2 = setInterval(function() {
                    if (colorBackgroundR2 >= colorEmmaRed2) {
                        clearInterval(colorAnimR2);
                        return colorBackgroundR2 = colorEmmaRed2;
                    } else {
                        colorBackgroundR2++;
                        bgColorLinear(colorBackgroundR1, colorBackgroundG1, colorBackgroundB1, colorBackgroundR2, colorBackgroundG2, colorBackgroundB2);
                    }
                }, transitionTime);
                const colorAnimG2 = setInterval(function() {
                    if (colorBackgroundG2 >= colorEmmaGreen2) {
                        clearInterval(colorAnimG2);
                        return colorBackgroundG2 = colorEmmaGreen2;
                    } else {
                        colorBackgroundG2++;
                        bgColorLinear(colorBackgroundR1, colorBackgroundG1, colorBackgroundB1, colorBackgroundR2, colorBackgroundG2, colorBackgroundB2);
                    }
                }, transitionTime);
                const colorAnimB2 = setInterval(function() {
                    if (colorBackgroundB2 <= colorEmmaBlue2) {
                        clearInterval(colorAnimB2);
                        return colorBackgroundB2 = colorEmmaBlue2;
                    } else {
                        colorBackgroundB2--;
                        bgColorLinear(colorBackgroundR1, colorBackgroundG1, colorBackgroundB1, colorBackgroundR2, colorBackgroundG2, colorBackgroundB2);
                    }
                }, transitionTime);

                return transitionTime, emmaColorTheme, normanColorTheme, rayColorTheme;
        }
    } else {
        return emmaColorTheme, normanColorTheme, rayColorTheme;
    }
}

// Ray's color theme
var colorRayRed1 = 100;
var colorRayGreen1 = 100;
var colorRayBlue1 = 100;

var colorRayRed2 = 30;
var colorRayGreen2 = 30;
var colorRayBlue2 = 30;

var colorRayTextRed = 85;
var colorRayTextGreen = 85;
var colorRayTextBlue = 85;

// Ray's background theme
function RayTheme() {
    emmaColorTheme = false;
    normanColorTheme = false;
    rayColorTheme = true;

    // change background color
    colorBackgroundR1 = colorRayRed1;
    colorBackgroundG1 = colorRayGreen1;
    colorBackgroundB1 = colorRayBlue1;
    
    colorBackgroundR2 = colorRayRed2;
    colorBackgroundG2 = colorRayGreen2;
    colorBackgroundB2 = colorRayBlue2;

    bgColorLinear(colorBackgroundR1, colorBackgroundG1, colorBackgroundB1, colorBackgroundR2, colorBackgroundG2, colorBackgroundB2);
}

// Emma's Stats
function EmmaStatus() {
    // selecting stats value using DOM
    const intelligenceValueElement = document.getElementById("intelligent-value");
    const heightValueElement = document.getElementById("height-value");
    const ageValueElement = document.getElementById("age-value");
    
    // selecting stats bar using DOM
    const intelligenceBar = document.getElementById("intelligent-bar");
    const heightBar = document.getElementById("height-bar");
    const ageBar = document.getElementById("age-bar");
    
    // intelligence stats value Animation
    const intelligenceAnimValue = setInterval(function() {
        if(intelligenceEmma <= intelligenceValue) {
            if(intelligenceValue === intelligenceEmma) {
                clearInterval(intelligenceAnimValue);
                return intelligenceValue;
            } else {
                intelligenceValue--;
                intelligenceValueElement.innerHTML = intelligenceValue;
            }
        }
        else if(intelligenceEmma >= intelligenceValue) {
            if(intelligenceValue === intelligenceEmma) {
                clearInterval(intelligenceAnimValue);
                return intelligenceValue;
            } else {
                intelligenceValue++;
                intelligenceValueElement.innerHTML = intelligenceValue;
            }
        }
    }, 20);
    
    // height stats value Animation
    const heightAnimValue = setInterval(function() {
        if(heightEmma <= heightValue) {
            if(heightValue === heightEmma) {
                clearInterval(heightAnimValue);
                return heightValue;
            } else {
                heightValue--;
                heightValueElement.innerHTML = heightValue;
            }
        }
        else if(heightEmma >= heightValue) {
            if(heightValue === heightEmma) {
                clearInterval(heightAnimValue);
                return heightValue;
            } else {
                heightValue++;
                heightValueElement.innerHTML = heightValue;
            }
        }
    }, 50);
    
    // age stats value
    ageValueElement.innerHTML = ageValue;

    // change stats bar
    intelligenceBarWidth = intelligenceEmmaBar;
    heightBarWidth = heightEmmaBar;
    ageBarWidth = ageEmmaBar;
    
    // change stats bar width to stylesheet
    intelligenceBar.style.width = intelligenceEmmaBar+"%";
    heightBar.style.width = heightEmmaBar+"%";
    ageBar.style.width = ageEmmaBar+"%";
}

// Norman's Stats
function NormanStatus() {
    // selecting stats value using DOM
    const intelligenceValueElement = document.getElementById("intelligent-value");
    const heightValueElement = document.getElementById("height-value");
    const ageValueElement = document.getElementById("age-value");
    
    // selecting stats bar using DOM
    const intelligenceBar = document.getElementById("intelligent-bar");
    const heightBar = document.getElementById("height-bar");
    const ageBar = document.getElementById("age-bar");
    
    // intelligence stats value Animation
    const intelligenceAnimValue = setInterval(function() {
        if(intelligenceNorman <= intelligenceValue) {
            if(intelligenceValue === intelligenceNorman) {
                clearInterval(intelligenceAnimValue);
                return intelligenceValue;
            } else {
                intelligenceValue--;
                intelligenceValueElement.innerHTML = intelligenceValue;
            }
        }
        else if(intelligenceNorman >= intelligenceValue) {
            if(intelligenceValue === intelligenceNorman) {
                clearInterval(intelligenceAnimValue);
                return intelligenceValue;
            } else {
                intelligenceValue++;
                intelligenceValueElement.innerHTML = intelligenceValue;
            }
        }
    }, 20);
    
    // height stats value Animation
    const heightAnimValue = setInterval(function() {
        if(heightNorman <= heightValue) {
            if(heightValue === heightNorman) {
                clearInterval(heightAnimValue);
                return heightValue;
            } else {
                heightValue--;
                heightValueElement.innerHTML = heightValue;
            }
        }
        else if(heightNorman >= heightValue) {
            if(heightValue === heightNorman) {
                clearInterval(heightAnimValue);
                return heightValue;
            } else {
                heightValue++;
                heightValueElement.innerHTML = heightValue;
            }
        }
    }, 50);
    
    // age stats value
    ageValueElement.innerHTML = ageValue;
    
    // change stats bar
    intelligenceBarWidth = intelligenceNormanBar;
    heightBarWidth = heightNormanBar;
    ageBarWidth = ageNormanBar;
    
    // change stats bar width to stylesheet
    intelligenceBar.style.width = intelligenceBarWidth+"%";
    heightBar.style.width = heightBarWidth+"%";
    ageBar.style.width = ageBarWidth+"%";
}

function RayStatus() {
    // selecting stats value using DOM
    const intelligenceValueElement = document.getElementById("intelligent-value");
    const heightValueElement = document.getElementById("height-value");
    const ageValueElement = document.getElementById("age-value");
    
    // selecting stats bar using DOM
    const intelligenceBar = document.getElementById("intelligent-bar");
    const heightBar = document.getElementById("height-bar");
    const ageBar = document.getElementById("age-bar");
    
    // intelligence stats value Animation
    const intelligenceAnimValue = setInterval(function() {
        if(intelligenceRay <= intelligenceValue) {
            if(intelligenceValue === intelligenceRay) {
                clearInterval(intelligenceAnimValue);
                return intelligenceValue;
            } else {
                intelligenceValue--;
                intelligenceValueElement.innerHTML = intelligenceValue;
            }
        }
        else if(intelligenceRay >= intelligenceValue) {
            if(intelligenceValue === intelligenceRay) {
                clearInterval(intelligenceAnimValue);
                return intelligenceValue;
            } else {
                intelligenceValue++;
                intelligenceValueElement.innerHTML = intelligenceValue;
            }
        }
    }, 20);
    
    // height stats value Animation
    const heightAnimValue = setInterval(function() {
        if(heightRay <= heightValue) {
            if(heightValue === heightRay) {
                clearInterval(heightAnimValue);
                return heightValue;
            } else {
                heightValue--;
                heightValueElement.innerHTML = heightValue;
            }
        }
        else if(heightRay >= heightValue) {
            if(heightValue === heightRay) {
                clearInterval(heightAnimValue);
                return heightValue;
            } else {
                heightValue++;
                heightValueElement.innerHTML = heightValue;
            }
        }
    }, 50);

    // age stats value
    ageValueElement.innerHTML = ageValue;

    // change stats bar
    intelligenceBarWidth = intelligenceRayBar;
    heightBarWidth = heightRayBar;
    ageBarWidth = ageRayBar;
    
    // change stats bar width to stylesheet
    intelligenceBar.style.width = intelligenceRayBar+"%";
    heightBar.style.width = heightRayBar+"%";
    ageBar.style.width = ageRayBar+"%";
}