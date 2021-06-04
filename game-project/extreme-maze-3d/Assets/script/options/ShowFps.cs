using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class ShowFps : MonoBehaviour
{
    public Button buttonTrue;
    public Button buttonFalse;

    public Color buttonColor;
    public Color buttonColorClick;

    public static bool fpsShow = true;

    void Update()
    {
        ColorBlock bct = buttonTrue.colors;
        ColorBlock bcf = buttonFalse.colors;

        if (fpsShow)
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

    public void fpsOn()
    {
        fpsShow = true;
    }

    public void fpsOff()
    {
        fpsShow = false;
    }
}
