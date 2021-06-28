using UnityEngine;

public class Options : MonoBehaviour
{
    public bool setFullscreen = true;
    public bool setFPS = true;
    public bool setController = true;

    public void SaveOptions()
    {
        optionsSystem.SaveOptions(this);
    }

    public void LoadOptions()
    {
        optionsData data = optionsSystem.LoadOptionsData();

        setFullscreen = data.fullscreenMode;
        setFPS = data.showFps;
        setController = data.showctrl;
    }
}