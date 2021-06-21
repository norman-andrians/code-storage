using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class FullscreenMode : MonoBehaviour
{
    public static bool Fullscreen = true;

    DebugSystem debug = new DebugSystem();

    public void setFullscreenMode(bool isFullscreen)
    {
        Fullscreen = isFullscreen;
        Screen.fullScreen = Fullscreen;

    if (Fullscreen)
        Debug.Log(debug.optionDebug + " Fullscreen Mode is true");
    else
        Debug.Log(debug.optionDebug + " Fullscreen Mode is false");
    }
}