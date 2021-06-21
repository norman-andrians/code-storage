using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[System.Serializable]
public class optionsVolumeData
{
    public float volume;

    public optionsVolumeData (sfxVolume sfxv)
    {
        volume = sfxv.volumeSlider.value;
    }
}