using UnityEngine;
using System.IO;
using System.Runtime.Serialization.Formatters.Binary;

public static class optionsSystem
{
    public static void SaveVolumeOptions (sfxVolume sfxv)
    {
        BinaryFormatter formatting = new BinaryFormatter();
        string path = Application.persistentDataPath + "/options.dat";
        FileStream stream = new FileStream(path, FileMode.Create);

        optionsVolumeData volumeDat = new optionsVolumeData(sfxv);

        formatting.Serialize(stream, volumeDat);
        stream.Close();
    }

    public static optionsVolumeData LoadVolumeData ()
    {
        string path = Application.persistentDataPath + "/options.dat";
        if (File.Exists(path))
        {
            BinaryFormatter formating = new BinaryFormatter();
            FileStream stream = new FileStream(path, FileMode.Open);

            optionsVolumeData data = formating.Deserialize(stream) as optionsVolumeData;
            stream.Close();

            return data;
        }
        else
        {
            Debug.LogError("Error, " + path + " Not Found");
            return null;
        }
    }
}
