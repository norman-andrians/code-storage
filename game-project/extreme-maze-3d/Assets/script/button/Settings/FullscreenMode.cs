using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class FullscreenMode : MonoBehaviour
{
    public static bool Fullscreen = true;

    public void setFullscreenMode(bool isFullscreen)
    {
        Fullscreen = isFullscreen;
        Screen.fullScreen = Fullscreen;

    if (Fullscreen)
        Debug.Log(DebugSystem.optionDebug + " Fullscreen Mode is true");
    else
        Debug.Log(DebugSystem.optionDebug + " Fullscreen Mode is false");
    }
}