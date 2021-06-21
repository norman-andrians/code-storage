using UnityEngine;
using UnityEngine.Audio;

public class CoinManager : MonoBehaviour
{
    public AudioSource sfx;
    public AudioClip sound;

    public float audioVolume = 0.1f;

    private void OnCollisionEnter(Collision collision)
    {
        if(collision.collider.tag == "coin")
        {
            sfx.volume = audioVolume;
            sfx.PlayOneShot(sound);
            CoinText.coins++;
            coinManagement.totalCoin++;
        }
    }
}
