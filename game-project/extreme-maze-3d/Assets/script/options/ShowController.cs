using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ShowController : MonoBehaviour
{
    public static bool controllerShow = true;

    DebugSystem debug = new DebugSystem();

    public void showController(bool isControlShow)
    {
        controllerShow = isControlShow;

        if (controllerShow)
            Debug.Log(debug.optionDebug + debug.uiDebug + " controller image displayed in game");
        else
            Debug.Log(debug.optionDebug + debug.uiDebug + " controller image hidden in game");
    }
}
