using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class FullscreenMode : MonoBehaviour
{
    public Button buttonTrue;
    public Button buttonFalse;

    public Color buttonColor;
    public Color buttonColorClick;

    public static bool isFullscreen = true;

    void Update()
    {
        ColorBlock bct = buttonTrue.colors;
        ColorBlock bcf = buttonFalse.colors;

        if (isFullscreen)
        {
            bct.normalColor = buttonColorClick;
            bct.selectedColor = buttonColorClick;
            bct.highlightedColor = buttonColorClick;
            bct.pressedColor = buttonColorClick;
            bct.disabledColor = buttonColorClick;

            bcf.normalColor = buttonColor;
            bcf.selectedColor = buttonColor;
            bcf.highlightedColor = buttonColor;
            bcf.pressedColor = buttonColor;
            bcf.pressedColor = buttonColor;

            buttonTrue.colors = bct;
            buttonFalse.colors = bcf;
        }
        else
        {
            bct.normalColor = buttonColor;
            bct.selectedColor = buttonColor;
            bct.highlightedColor = buttonColor;
            bct.pressedColor = buttonColor;
            bct.pressedColor = buttonColor;

            bcf.normalColor = buttonColorClick;
            bcf.selectedColor = buttonColorClick;
            bcf.highlightedColor = buttonColorClick;
            bcf.pressedColor = buttonColorClick;
            bcf.disabledColor = buttonColorClick;

            buttonTrue.colors = bct;
            buttonFalse.colors = bcf;
        }
    }

    public void FullscreenOn() {
        isFullscreen = true;
        Screen.fullScreen = isFullscreen;
    }

    public void FullscreenOff() {
        isFullscreen = false;
        Screen.fullScreen = isFullscreen;
    }
}