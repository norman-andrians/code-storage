using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ControllerImage : MonoBehaviour
{
    public GameObject image;

    DebugSystem debug;
    Options options;

    // Start is called before the first frame update
    void Start()
    {
        GameObject gameObject = new GameObject();

        debug = gameObject.AddComponent<DebugSystem>();
        options = gameObject.AddComponent<Options>();

        image.SetActive(options.setController);

        if (options.setController)
            Debug.Log(debug.gameDebug + debug.uiDebug + "Controller Displayed");
        else
            Debug.Log(debug.gameDebug + debug.uiDebug + "Controller Hidden");
    }
}
