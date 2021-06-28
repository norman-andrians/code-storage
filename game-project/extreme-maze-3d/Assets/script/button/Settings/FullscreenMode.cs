using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class FullscreenMode : MonoBehaviour
{
    Options options;
    DebugSystem debug;

    void Start()
    {
        GameObject gameObject = new GameObject();

        options = gameObject.AddComponent<Options>();
        debug = gameObject.AddComponent<DebugSystem>();
    }

    public void setFullscreenMode(bool isFullscreen)
    {
        isFullscreen = options.setFullscreen;
        Screen.fullScreen = options.setFullscreen;

        if (isFullscreen)
        {
            options.setFullscreen = true;

            Debug.Log(debug.optionDebug + " Fullscreen Mode is true");
        }
        else
        {
            options.setFullscreen = false;

            Debug.Log(debug.optionDebug + " Fullscreen Mode is false");
        }

        options.SaveOptions();
    }
}