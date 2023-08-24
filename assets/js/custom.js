document.addEventListener('DOMContentLoaded', function () 
{
    // GLOBAL 
    const classname          = document.querySelector(".classname");
    const dummyTextInput     = document.getElementById('dummyText');
    const sampleText         = document.getElementById('sampleText');
    const boxLayout          = document.querySelector('.boxLaoyut');
    const imageBackground    = document.getElementById('imageBackground');
    const boldOption         = document.getElementById('boldOption');
    const italicOption       = document.getElementById('italicOption');
    const sampleTextStyle    = sampleText.style;
    const fontFamilySelect   = document.getElementById('fontFamilySelect');
    const googleFontsIcon    = document.getElementById('googleFontsIcon');
    const imageUpload        = document.getElementById('imageUpload');
    //console.log(sampleTextStyle);
    // SIZE 
    const sizeTab            = document.getElementById('sizeTab');
    const fontSizeInput      = document.getElementById('fontSize');
    const fontSizeValue      = document.getElementById('fontSizeValue');
    const letterSpacingInput = document.getElementById('letterSpacing');
    const letterSpacingValue = document.getElementById('letterSpacingValue');
    const sizeOptions        = document.querySelector('.size-options');
    // BACKGROUND
    const backgroundTab      = document.getElementById('backgroundTab');
    const bgOptions          = document.getElementById('bgOptions'); 
    const imageOptions       = document.querySelectorAll('.image-option');
    const bgPositionXInput   = document.getElementById('bgPositionX');
    const bgPositionYInput   = document.getElementById('bgPositionY');
    const bgPositionXValue   = document.getElementById('bgPositionXValue');
    const bgPositionYValue   = document.getElementById('bgPositionYValue');
    // STROKE
    const strokeTab          = document.getElementById('strokeTab');
    const strokeOptions      = document.querySelector('.stroke-options');
    const strokeWidthRange   = document.getElementById('strokeWidthRange');
    const strokeWidthInput   = document.getElementById('strokeWidthInput');
    const strokeColor        = document.getElementById('strokeColor');
    // REFLECT
    const reflectTab            = document.getElementById('reflectTab');
    const reflectOptions        = document.querySelector('.reflect-options');
    const offsetRange           = document.getElementById('offsetRange');
    const offsetInput           = document.getElementById('offsetInput');
    const colorStopRange        = document.getElementById('colorStopRange');
    const colorStopInput        = document.getElementById('colorStopInput');
    const reflectOpacityRange   = document.getElementById('reflectOpacityRange');
    const reflectOpacityInput   = document.getElementById('reflectOpacityInput');
    // Animation Tab
    const animationTab          = document.getElementById('animationTab');
    const animationOptions      = document.querySelector('.animation-options');
    const animationSpeed        = document.getElementById('animationSpeed');
    const movePositionMax       = document.getElementById('movePositionMax');
    const animationDirection    = document.getElementById('animationDirection');


    // GLOBAL ACTIVE TAB
    function activateTab(tabElement) {
        const tabs = document.querySelectorAll('.tab');
        tabs.forEach(tab => {
            tab.classList.remove('active-tab');
        });
        tabElement.classList.add('active-tab');
    }
    // GLOBAL IMAGE UPLOAD
    imageUpload.addEventListener('change', (event) => {
        const uploadedImage = event.target.files[0];
        if (uploadedImage) {
            const imagePath = URL.createObjectURL(uploadedImage);
            changeBackgroundImage(`url('${imagePath}')`);
        }
    });
    // GLOBAL BOLD STYLE
    boldOption.addEventListener('click', () => {
        sampleTextStyle.fontWeight = sampleTextStyle.fontWeight === 'bold' ? 'normal' : 'bold';
        boldOption.classList.toggle('active');
    });
    // GLOBAL ITALIC STYLE
    italicOption.addEventListener('click', () => {
        sampleTextStyle.fontStyle = sampleTextStyle.fontStyle === 'italic' ? 'normal' : 'italic';
        italicOption.classList.toggle('active');
    });
    // GLOBAL FONT FAMILY
    fontFamilySelect.addEventListener('change', () => {
        const selectedFont = fontFamilySelect.value;
        sampleText.style.fontFamily = selectedFont;
    });
    // GLOBAL BACKGROUND COLOR
        imageBackground.addEventListener('click', () => {
        changeBackgroundColor('url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAC1JREFUeNpiPHPmDAM2YGxsjFWciYFEMKqBGMD4//9/rBJnz54dDSX6aQAIMABCtQiAsDRF+wAAAABJRU5ErkJggg==")');
    });

    function changeBackgroundColor(color) {
        boxLayout.style.background = color;
    }
    whiteBox.addEventListener('click', () => {
        changeBackgroundColor('white');
    });

    blackBox.addEventListener('click', () => {
        changeBackgroundColor('black');
    });
    // GLOBAL REPLACE DUMMY CONTENT
    dummyTextInput.addEventListener('input', () => {
        sampleText.textContent = dummyTextInput.value;
    });
    // SIZE TAB
    sizeTab.addEventListener('click', () => {
        activateTab(sizeTab);
        sizeOptions.classList.remove('hidden');
        bgOptions.classList.add('hidden');
        strokeOptions.classList.add('hidden');
        reflectOptions.classList.add('hidden');
        animationOptions.classList.add('hidden');
    });
    fontSizeInput.addEventListener('input', () => {
        const newSize = fontSizeInput.value + 'px';
        sampleText.style.fontSize = newSize;
        fontSizeValue.value = newSize;
    });

    fontSizeValue.addEventListener('input', () => {
        const newSize = fontSizeValue.value;
        sampleText.style.fontSize = newSize;
        fontSizeInput.value = newSize.replace('px', '');
    });

    letterSpacingInput.addEventListener('input', () => {
        const newSpacing = letterSpacingInput.value + 'px';
        sampleText.style.letterSpacing = newSpacing;
        letterSpacingValue.value = newSpacing;
    });

    letterSpacingValue.addEventListener('input', () => {
        const newSpacing = letterSpacingValue.value;
        sampleText.style.letterSpacing = newSpacing;
        letterSpacingInput.value = newSpacing.replace('px', '');
    });

    // BACKGROUND TAB
    backgroundTab.addEventListener('click', () => {
        activateTab(backgroundTab);
        bgOptions.classList.remove('hidden');
        sizeOptions.classList.add('hidden');
        strokeOptions.classList.add('hidden');
        reflectOptions.classList.add('hidden');
        animationOptions.classList.add('hidden');
    });

    imageOptions.forEach(option => {
        option.addEventListener('click', () => {
            const backgroundImage = option.style.backgroundImage;
            changeBackgroundImage(backgroundImage);
        });
    });

    function changeBackgroundImage(backgroundImage) {
        sampleText.style.backgroundImage = backgroundImage;
        sampleText.style.webkitBackgroundClip = 'text';
        sampleText.style.webkitTextFillColor = 'transparent';
    }

    bgPositionXInput.addEventListener('input', () => {
        const newXValue = bgPositionXInput.value + '%';
        bgPositionXValue.value = newXValue;
        updateBackgroundPosition();
    });

    bgPositionYInput.addEventListener('input', () => {
        const newYValue = bgPositionYInput.value + '%';
        bgPositionYValue.value = newYValue;
        updateBackgroundPosition();
    });

    bgPositionXValue.addEventListener('input', () => {
        const newXValue = bgPositionXValue.value;
        bgPositionXInput.value = parseInt(newXValue) || 0;
        updateBackgroundPosition();
    });

    bgPositionYValue.addEventListener('input', () => {
        const newYValue = bgPositionYValue.value;
        bgPositionYInput.value = parseInt(newYValue) || 0;
        updateBackgroundPosition();
    });

    function updateBackgroundPosition() {
        const xPos = bgPositionXInput.value + '%';
        const yPos = bgPositionYInput.value + '%';
        sampleText.style.backgroundPosition = `${xPos} ${yPos}`;
    }

    // STROKE TAB
    strokeTab.addEventListener('click', () => {
        activateTab(strokeTab);
        strokeOptions.classList.remove('hidden');
        sizeOptions.classList.add('hidden');
        bgOptions.classList.add('hidden');
        reflectOptions.classList.add('hidden');
        animationOptions.classList.add('hidden');
    });

    strokeWidthRange.addEventListener('input', () => {
        const strokeWidthValue = strokeWidthRange.value;
        strokeWidthInput.value = strokeWidthValue;
        sampleText.style.webkitTextStrokeWidth = `${strokeWidthValue}px`;
    });

    strokeWidthInput.addEventListener('input', () => {
        const strokeWidthValue = strokeWidthInput.value;
        strokeWidthRange.value = strokeWidthValue;
        sampleText.style.webkitTextStrokeWidth = `${strokeWidthValue}px`;
    });

    strokeColor.addEventListener('input', () => {
        const strokeColorValue = strokeColor.value;
        sampleText.style.webkitTextStrokeColor = strokeColorValue;
    });

    // REFLECT TAB
    reflectTab.addEventListener('click', () => {
        activateTab(reflectTab);
        reflectOptions.classList.remove('hidden');
        sizeOptions.classList.add('hidden');
        bgOptions.classList.add('hidden');
        strokeOptions.classList.add('hidden');
        animationOptions.classList.add('hidden');
        const offsetValue = offsetInput.value;
        offsetRange.value = offsetValue;
        sampleText.style.textShadow = `0px ${offsetValue}px 0px rgba(0, 0, 0, 0.75)`;
        const reflection = `-webkit-box-reflect: below ${offsetValue}px -webkit-gradient(linear, 0% 0%, 0% 100%, from(transparent), from(transparent), to(rgb(255, 255, 255)));`;
        sampleText.style.cssText = reflection;
    });
    
    offsetRange.addEventListener('input', () => {
        const offsetValue = offsetRange.value;
        offsetInput.value = offsetValue;
        sampleText.style.textShadow = `0px ${offsetValue}px 0px rgba(0, 0, 0, 0.75)`;
        const reflection = `-webkit-box-reflect: below ${offsetValue}px -webkit-gradient(linear, 0% 0%, 0% 100%, from(transparent), from(transparent), to(rgb(255, 255, 255)));`;
        sampleText.style.cssText = reflection;
    });

    offsetInput.addEventListener('input', () => {
        const offsetValue = offsetInput.value;
        offsetRange.value = offsetValue;
        sampleText.style.textShadow = `0px ${offsetValue}px 0px rgba(0, 0, 0, 0.75)`;
        const reflection = `-webkit-box-reflect: below ${offsetValue}px -webkit-gradient(linear, 0% 0%, 0% 100%, from(transparent), from(transparent), to(rgb(255, 255, 255)));`;
        sampleText.style.cssText = reflection;
    });
    
    colorStopInput.addEventListener('input', () => {
        const offsetValue = offsetInput.value;
        offsetRange.value = offsetValue;
        sampleText.style.textShadow = `0px ${offsetValue}px 0px rgba(0, 0, 0, 0.75)`;
        const colorStopValue = colorStopInput.value;
        const reflection = `-webkit-box-reflect: below ${offsetValue}px -webkit-gradient(linear, 0% 0%, 0% 100%, from(transparent), from(transparent), color-stop(${colorStopValue}, transparent), to(rgb(255, 255, 255)));`;
        sampleText.style.cssText = reflection;
    });

    colorStopRange.addEventListener('input', () => {
        const colorStopValue = colorStopRange.value;
        colorStopInput.value = colorStopValue;
        const offsetValue = offsetInput.value;
        offsetRange.value = offsetValue;
        sampleText.style.textShadow = `0px ${offsetValue}px 0px rgba(0, 0, 0, 0.75)`;
        const reflection = `-webkit-box-reflect: below ${offsetValue}px -webkit-gradient(linear, 0% 0%, 0% 100%, from(transparent), from(transparent), color-stop(${colorStopValue}, transparent), to(rgb(255, 255, 255)));`;
        sampleText.style.cssText = reflection;
    });

    reflectOpacityRange.addEventListener('input', () => {
        const reflectOpacityValue = reflectOpacityRange.value;
        reflectOpacityInput.value = reflectOpacityValue;
        const offsetValue = offsetInput.value;
        const colorStopValue = colorStopInput.value;
        const reflection = `-webkit-box-reflect: below ${offsetValue}px -webkit-gradient(linear, 0% 0%, 0% 100%, from(transparent), from(transparent), color-stop(${colorStopValue}, transparent), to(rgb(255, 255, 255, ${reflectOpacityValue})));`;
        sampleText.style.cssText = reflection;
    });

    reflectOpacityInput.addEventListener('input', () => {
        const reflectOpacityValue = reflectOpacityInput.value;
        reflectOpacityRange.value = reflectOpacityValue;
        const offsetValue = offsetInput.value;
        const colorStopValue = colorStopInput.value;
        const reflection = `-webkit-box-reflect: below ${offsetValue}px -webkit-gradient(linear, 0% 0%, 0% 100%, from(transparent), from(transparent), color-stop(${colorStopValue}, transparent), to(rgb(255, 255, 255, ${reflectOpacityValue})));`;
        sampleText.style.cssText = reflection;
    });

    // ANIMATION TAB
    animationTab.addEventListener('click', () => {
        activateTab(animationTab);
        animationOptions.classList.remove('hidden');
        sizeOptions.classList.add('hidden');
        bgOptions.classList.add('hidden');
        strokeOptions.classList.add('hidden');
        reflectOptions.classList.add('hidden');
        updateAnimation();
    });

    function updateAnimation() {
        const speed = parseInt(document.getElementById('animationSpeed').value);
        const direction = document.getElementById('animationDirection').value;
        const movePositionMax = parseInt(document.getElementById('movePositionMax').value);
        
        const sampleText = document.getElementById('sampleText');
        sampleText.style.animation = `textAnimation ${speed}s ${direction} infinite`;
        
        const styleSheet = document.styleSheets[0];
        styleSheet.deleteRule(styleSheet.cssRules.length - 1);
        styleSheet.insertRule(`@keyframes textAnimation {
        0% { background-position: 0 0; }
        100% { background-position: ${movePositionMax}px 0; }
        }`, styleSheet.cssRules.length);
    }
    animationSpeed.addEventListener('input', () => {
        updateAnimation();
    });

    movePositionMax.addEventListener('input', () => {
        updateAnimation();
    });

    animationDirection.addEventListener('input', () => {
        updateAnimation();
    });
});   
    
// GENERATE HTML AND CSS
const classInput = document.getElementById('classname');
const generateCodeButton = document.getElementById('generateCodeButton');
const generatedHtmlContainer = document.createElement('div');
generatedHtmlContainer.classList.add('generated-code-container');

generateCodeButton.addEventListener('click', () => {
    clearGeneratedCode();
    const selectedTab = document.querySelector('.active-tab');
    const generatedHtml = generateHtml(selectedTab);
    const generatedCss = generateCss(selectedTab);

    const generatedCodeHtmlContainer = document.createElement('div');  // Create a container for HTML code
    const generatedCodeHtmlHeading = document.createElement('h5');  // Create h5 heading
    generatedCodeHtmlHeading.innerText = 'HTML';  // Set heading text
    generatedCodeHtmlContainer.appendChild(generatedCodeHtmlHeading);  // Append heading to container
    const generatedCodeHtml = document.createElement('pre');  // Create pre block for HTML code
    generatedCodeHtml.innerText = generatedHtml;  // Set HTML code
    generatedCodeHtmlContainer.appendChild(generatedCodeHtml);  // Append pre block to container
    generatedHtmlContainer.appendChild(generatedCodeHtmlContainer);  // Append container to main container

    const generatedCodeCssContainer = document.createElement('div');  // Create a container for CSS code
    const generatedCodeCssHeading = document.createElement('h5');  // Create h5 heading
    generatedCodeCssHeading.innerText = 'CSS';  // Set heading text
    generatedCodeCssContainer.appendChild(generatedCodeCssHeading);  // Append heading to container
    const generatedCodeCss = document.createElement('pre');  // Create pre block for CSS code
    generatedCodeCss.innerText = generatedCss;  // Set CSS code
    generatedCodeCssContainer.appendChild(generatedCodeCss);  // Append pre block to container
    generatedHtmlContainer.appendChild(generatedCodeCssContainer);  // Append container to main container

    const formGenerator = document.querySelector('.form-generator');
    formGenerator.appendChild(generatedHtmlContainer);
});
// Clear and regenerate code container when tabs are clicked
sizeTab.addEventListener('click', () => {
    clearGeneratedCode();
    // Rest of your existing code for handling the tab click
});

backgroundTab.addEventListener('click', () => {
    clearGeneratedCode();
    // Rest of your existing code for handling the tab click
});

reflectTab.addEventListener('click', () => {
    clearGeneratedCode();
    // Rest of your existing code for handling the tab click
});
strokeTab.addEventListener('click', () => {
    clearGeneratedCode();
    // Rest of your existing code for handling the tab click
});
animationTab.addEventListener('click', () => {
    clearGeneratedCode();
    // Rest of your existing code for handling the tab click
});

function clearGeneratedCode() {
    while (generatedHtmlContainer.firstChild) {
        generatedHtmlContainer.removeChild(generatedHtmlContainer.firstChild);
    }
}

function generateHtml(selectedTab) {
    const className = classInput.value;
    
    if (selectedTab.id === 'sizeTab') {
        const textValue = dummyText.value || 'Sample Text';
        return `<div class="${className}">` +
            `${textValue}` +
            '</div>';

    } 
    else if (selectedTab.id === 'backgroundTab') {
        const textValue = dummyText.value || 'Sample Text';
        return `<div class="${className}">` +
            `${textValue}` +
            '</div>';

    } 
    else if (selectedTab.id === 'reflectTab') {
        const textValue = dummyText.value || 'Sample Text';
        return `<div class="${className}">` +
            `${textValue}` +
            '</div>';

    }
    else if (selectedTab.id === 'strokeTab') {
        const textValue = dummyText.value || 'Sample Text';
        return `<div class="${className}">` +
            `${textValue}` +
            '</div>';

    }
    else if (selectedTab.id === 'animationTab') {
        const textValue = dummyText.value || 'Sample Text';
        return `<div class="${className}">` +
            `${textValue}` +
            '</div>';

    }
}

function generateCss(selectedTab) {
    let css        = '';
    const className = classInput.value;
    const hexColor = strokeColor.value;
    const rgbColor = hexToRgb(hexColor);
    if (selectedTab.id === 'sizeTab') {
        css += `.${className} {\n` +
            `    font-size: ${fontSize.value}px;\n` +
            `    letter-spacing: ${letterSpacing.value}px;\n`;

        if (sampleText.style.fontWeight !== '' && sampleText.style.fontWeight !== 'normal') {
            css += `    font-weight: ${sampleText.style.fontWeight};\n`;
        }

        if (sampleText.style.fontStyle === 'italic') {
            css += '    font-style: italic;\n';
        }

        if (sampleText.style.fontFamily) {
            css += `    font-family: ${sampleText.style.fontFamily}, sans-serif;\n`;
        }

        if (sampleText.style.backgroundImage && sampleText.style.backgroundImage !== 'none') {
            css += `    -webkit-background-clip: text;\n` +
                `    -webkit-text-fill-color: transparent;\n` +
                `    background-position: ${bgPositionXValue.value} ${bgPositionYValue.value};\n` +
                `    background-image: ${sampleText.style.backgroundImage};\n`;
        }

        css += '    /* Add other CSS properties here */\n' +
            '}\n';
    }

    else if (selectedTab.id === 'backgroundTab') {
        css += `.${className} {\n` +
            `    font-size: ${fontSize.value}px;\n` +
            `    letter-spacing: ${letterSpacing.value}px;\n`;

        if (sampleText.style.fontWeight !== '' && sampleText.style.fontWeight !== 'normal') {
            css += `    font-weight: ${sampleText.style.fontWeight};\n`;
        }

        if (sampleText.style.fontStyle === 'italic') {
            css += '    font-style: italic;\n';
        }

        if (sampleText.style.fontFamily) {
            css += `    font-family: ${sampleText.style.fontFamily}, sans-serif;\n`;
        }

        if (sampleText.style.backgroundImage && sampleText.style.backgroundImage !== 'none') {
            css += `    -webkit-background-clip: text;\n` +
                `    -webkit-text-fill-color: transparent;\n` +
                `    background-position: ${bgPositionXValue.value} ${bgPositionYValue.value};\n` +
                `    background-image: ${sampleText.style.backgroundImage};\n`;
        }

        css += '    /* Add other CSS properties here */\n' +
            '}\n';
    }
    else if (selectedTab.id === 'reflectTab') {
        css += `.${className} {\n` +
            `    font-size: ${fontSize.value}px;\n` +
            `    letter-spacing: ${letterSpacing.value}px;\n` +
            `    -webkit-box-reflect: below ${offsetInput.value}px -webkit-gradient(linear, 0% 0%, 0% 100%, from(transparent), from(transparent), color-stop(${colorStopInput.value}, transparent), to(rgba(255, 255, 255, ${reflectOpacityInput.value}))) ;\n` +
            '    /* Add other CSS properties here */\n' +
            '}\n';
    }
    else if (selectedTab.id === 'strokeTab') {
        css += `.${className} {\n` +
            `    font-size: ${fontSize.value}px;\n` +
            `    letter-spacing: ${letterSpacing.value}px;\n` +
            `    -webkit-box-reflect: below ${offsetInput.value}px -webkit-gradient(linear, 0% 0%, 0% 100%, from(transparent), from(transparent), color-stop(${colorStopInput.value}, transparent), to(rgba(255, 255, 255, ${reflectOpacityInput.value}))) ;\n` +
            `    -webkit-text-stroke: ${strokeWidthInput.value}px ${rgbColor};\n`;

        if (sampleText.style.backgroundImage && sampleText.style.backgroundImage !== 'none') {
            css += `    -webkit-background-clip: text;\n` +
                `    -webkit-text-fill-color: transparent;\n` +
                `    background-position: ${bgPositionXValue.value} ${bgPositionYValue.value};\n` +
                `    background-image: ${sampleText.style.backgroundImage};\n`;
        }

        css += '    /* Add other CSS properties here */\n' +
            '}\n';
    }
    else if (selectedTab.id === 'animationTab') {
        const speed = parseInt(document.getElementById('animationSpeed').value);
        const direction = document.getElementById('animationDirection').value;
        const movePositionMax = parseInt(document.getElementById('movePositionMax').value);
        css += `.${className} {\n` +
            `    font-size: ${fontSize.value}px;\n` +
            `    letter-spacing: ${letterSpacing.value}px;\n`;
            if (strokeWidthInput.value && rgbColor) {
                css += `    -webkit-text-stroke: ${strokeWidthInput.value}px ${rgbColor};\n`;
            }

            if (sampleText.style.backgroundImage && sampleText.style.backgroundImage !== 'none') {
                css += `    -webkit-background-clip: text;\n` +
                    `    -webkit-text-fill-color: transparent;\n` +
                    `    background-position: ${bgPositionXValue.value} ${bgPositionYValue.value};\n` +
                    `    background-image: ${sampleText.style.backgroundImage};\n`;
            }
            else{
                css += `    background-image: url(assets/images/mask-image1.jpg);\n` +
                `    -webkit-background-clip: text;\n` +
                `    -webkit-text-fill-color: transparent;\n`;
            }

        // Add animation-related properties
        css += `    animation: textAnimation ${speed}s ${direction} infinite;\n` +
            '}\n';

        // Add @keyframes rule
        css += `@keyframes textAnimation {
            0% { background-position: 0 0; }
            100% { background-position: ${movePositionMax}px 0; }
        }\n`;
    }

    return css;
}
// Function to convert hex color to RGB format
function hexToRgb(hex) {
    // Remove '#' if present
    hex = hex.replace('#', '');

    // Parse the hex value to integers
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    // Return the RGB format
    return `rgb(${r}, ${g}, ${b})`;
}