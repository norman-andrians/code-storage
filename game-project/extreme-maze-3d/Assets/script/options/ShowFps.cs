using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class ShowFps : MonoBehaviour
{
    public static bool fpsShow = true;

    public void isFpsShow(bool showFps)
    {
        fpsShow = showFps;

        if (fpsShow)
            Debug.Log(DebugSystem.optionDebug + DebugSystem.uiDebug + " fps displayed in game");
        else
            Debug.Log(DebugSystem.optionDebug + DebugSystem.uiDebug +  " fps hidden in game");
    }
}
