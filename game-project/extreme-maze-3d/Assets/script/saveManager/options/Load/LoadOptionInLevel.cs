using UnityEngine;
using System.IO;

public class LoadOptionInLevel : MonoBehaviour
{
    public bool isFps;
    public bool isCtrl;

    public Options options = new Options();

    void OnEnable()
    {
        LoadOptionsInGame();
    }

    public void LoadOptionsInGame()
    {
        options = JsonUtility.FromJson<Options>(File.ReadAllText(Application.persistentDataPath + "/options.json"));

        isFps = options.setFPS;
        isCtrl = options.setController;

        if (File.Exists(Application.persistentDataPath + "/options.json"))
            Debug.Log("File On " + Application.persistentDataPath + "/options" + "has been loaded");
        else
            Debug.LogError("File On " + Application.persistentDataPath + "/options" + " failed to loaded");
    }
}
