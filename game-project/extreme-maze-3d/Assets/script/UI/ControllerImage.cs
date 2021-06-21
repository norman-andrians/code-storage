using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ControllerImage : MonoBehaviour
{
    public GameObject image;

    DebugSystem debug = new DebugSystem();

    // Start is called before the first frame update
    void Start()
    {
        image.SetActive(ShowController.controllerShow);

        if (ShowController.controllerShow)
            Debug.Log(debug.gameDebug + debug.uiDebug + "Controller Displayed");
        else
            Debug.Log(debug.gameDebug + debug.uiDebug + "Controller Hidden");
    }
}
