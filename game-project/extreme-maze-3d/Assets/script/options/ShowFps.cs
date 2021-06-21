using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class ShowFps : MonoBehaviour
{
    public bool fpsShow = true;

    public Toggle fpsSlider;

    string fpsShowValue = "true";

    DebugSystem debug = new DebugSystem();

    public void isFpsShow(bool change)
    {
        fpsShow = fpsSlider.isOn;
        Save();

        if (fpsShow)
            Debug.Log(debug.optionDebug + debug.uiDebug + " fps displayed in game");
        else
            Debug.Log(debug.optionDebug + debug.uiDebug +  " fps hidden in game");
    }

    public void Load()
    {
        fpsShowValue = PlayerPrefs.GetString("ShowFps");
    }

    public void Save()
    {
        PlayerPrefs.SetString("ShowFps", fpsShowValue);
    }
}
