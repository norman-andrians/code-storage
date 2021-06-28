using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[System.Serializable]
public class optionsData
{
    public bool fullscreenMode;
    public bool showFps;
    public bool showctrl;

    public optionsData (Options options)
    {
        fullscreenMode = options.setFullscreen;
        showFps = options.setFPS;
        showctrl = options.setController;
    }
}