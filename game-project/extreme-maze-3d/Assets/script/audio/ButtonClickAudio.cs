using UnityEngine.Audio;
using UnityEngine;

public class ButtonClickAudio : MonoBehaviour
{
    public AudioSource sfx;
    public AudioClip sounds;

	[Range(0f, 1f)]
	public float volumeAudio = 1f;

    public void ClickedSound()
    {
        sfx.volume = volumeAudio;

        sfx.PlayOneShot(sounds);
    }
}
