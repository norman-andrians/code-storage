using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class fpsDetector : MonoBehaviour
{
    public Text fpsText;
    public GameObject fpsObject;

    DebugSystem debug;
    Options options;

    void Start()
    {
        GameObject gameObject = new GameObject();

        debug = gameObject.AddComponent<DebugSystem>();
        options = gameObject.AddComponent<Options>();

        fpsObject.SetActive(options.setFPS);

        if (options.setFPS)
            Debug.Log(debug.gameDebug + debug.uiDebug + "FPS Displayed");
        else
            Debug.Log(debug.gameDebug + debug.uiDebug + "FPS Hidden");
    }

    // Update is called once per frame
    void Update()
    {
        float fps = 1 / Time.deltaTime;
        fpsText.text = "FPS: " + Mathf.Round(fps);
    }
}
