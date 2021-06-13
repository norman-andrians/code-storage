using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ControllerImage : MonoBehaviour
{
    public GameObject image;

    // Start is called before the first frame update
    void Start()
    {
        image.SetActive(ShowController.controllerShow);

        if (ShowController.controllerShow)
            Debug.Log(DebugSystem.gameDebug + DebugSystem.uiDebug + "Controller Displayed");
        else
            Debug.Log(DebugSystem.gameDebug + DebugSystem.uiDebug + "Controller Hidden");
    }
}
