using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class sfxVolume : MonoBehaviour
{
    public static float coinSound = CoinManager.audioVolume * 10;

    public void volumeSfx(float vsfx)
    {
        ButtonClickAudio.volumeAudio = vsfx;
        coinSound = vsfx;

        Debug.Log(DebugSystem.optionDebug + DebugSystem.volumeDebug + " set SFX Volume to " + vsfx.ToString());
    }
}
