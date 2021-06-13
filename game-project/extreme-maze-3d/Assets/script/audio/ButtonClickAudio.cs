using UnityEngine.Audio;
using UnityEngine;

public class ButtonClickAudio : MonoBehaviour
{
    public AudioSource sfx;
    public AudioClip sounds;

	public static float volumeAudio = 1f;

    public void ClickedSound()
    {
        sfx.volume = volumeAudio;

        sfx.PlayOneShot(sounds);
    }
}
