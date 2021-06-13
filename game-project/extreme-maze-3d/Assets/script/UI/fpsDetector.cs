using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class fpsDetector : MonoBehaviour
{
    public Text fpsText;
    public GameObject fpsObject;

    void Start()
    {
        fpsObject.SetActive(ShowFps.fpsShow);

        if (ShowFps.fpsShow)
            Debug.Log(DebugSystem.gameDebug + DebugSystem.uiDebug + "FPS Displayed");
        else
            Debug.Log(DebugSystem.gameDebug + DebugSystem.uiDebug + "FPS Hidden");
    }

    // Update is called once per frame
    void Update()
    {
        float fps = 1 / Time.deltaTime;
        fpsText.text = "FPS: " + Mathf.Round(fps);
    }
}
