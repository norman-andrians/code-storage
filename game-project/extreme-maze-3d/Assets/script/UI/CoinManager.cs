using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CoinManager : MonoBehaviour
{
    public AudioSource sfx;
    public AudioClip sound;

    [Range(0f, 1f)]
    public float audioVolume = 1f;

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
