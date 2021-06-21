using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class sfxVolume : MonoBehaviour
{
    DebugSystem debug = new DebugSystem();
    ButtonClickAudio btnAudio = new ButtonClickAudio();
    CoinManager coinAudio = new CoinManager();

    public Slider volumeSlider;

    void Start()
    {
        optionsVolumeData data = optionsSystem.LoadVolumeData();

        volumeSlider.value = data.volume;
    }

    public void changeVolume()
    {
        btnAudio.volumeAudio = volumeSlider.value;
        coinAudio.audioVolume = volumeSlider.value;

        optionsSystem.SaveVolumeOptions(this);
    }
}
