using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using System.IO;

public class optionsData : MonoBehaviour
{
    public Toggle fullScreenToggle;
    public Toggle fpsToggle;
    public Toggle ctrlToggle;

    public Options options = new Options();

    void OnEnable()
    {
        LoadOptions();
    }

    public void isFullscreen()
    {
        options.setFullscreen = Screen.fullScreen = fullScreenToggle.isOn;
        Debug.Log("Fullscreen is " + options.setFullscreen.ToString());

        SaveOptions();
    }

    public void showFps()
    {
        options.setFPS = fpsToggle.isOn;
        Debug.Log("FPS is " + options.setFullscreen.ToString());

        SaveOptions();
    }

    public void showController()
    {
        options.setController = ctrlToggle.isOn;
        Debug.Log("Controller is " + options.setFullscreen.ToString());

        SaveOptions();
    }

    public void SaveOptions()
    {
        string jsonDat = JsonUtility.ToJson(options, true);
        File.WriteAllText(Application.persistentDataPath + "/options.json", jsonDat);

        if (File.Exists(Application.persistentDataPath + "/options.json"))
        {
            Debug.Log("Saving Options Data File To " + Application.persistentDataPath + "/options.json" + " Succesful");
        }
        else
        {
            Debug.LogError("Unknown Error: Failed to Save Options Data to " + Application.persistentDataPath + "/options.json");
        }
    }
    
    public void LoadOptions()
    {
        options = JsonUtility.FromJson<Options>(File.ReadAllText(Application.persistentDataPath + "/options.json"));

        fullScreenToggle.isOn = options.setFullscreen;
        fpsToggle.isOn = options.setFPS;
        ctrlToggle.isOn = options.setController;

        Debug.Log("Load Options Data File To " + Application.persistentDataPath + "/options.json");
    }
}