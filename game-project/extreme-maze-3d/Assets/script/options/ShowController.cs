using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ShowController : MonoBehaviour
{
    public static bool controllerShow = true;

    public void showController(bool isControlShow)
    {
        controllerShow = isControlShow;

        if (controllerShow)
            Debug.Log(DebugSystem.optionDebug + DebugSystem.uiDebug + " controller image displayed in game");
        else
            Debug.Log(DebugSystem.optionDebug + DebugSystem.uiDebug + " controller image hidden in game");
    }
}
