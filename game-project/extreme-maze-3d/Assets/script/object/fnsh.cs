using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class fnsh : MonoBehaviour
{
    [Header("Animator")]
    public Animator slider;
    public float transitionStart = 1f;

    [Header("Particles")]
    public ParticleSystem finalParticles;

    [Header("Coin")]
    public Text CoinT;
    public float coinTime;

    [Header("Sfx")]
    public AudioSource sfx;
    public AudioClip clip;

    [Range(0f, 1f)]
    public float audioVolume = 1f;

    private void OnCollisionEnter(Collision collision)
    {
        if(collision.collider.name == "Player")
        {
            Instantiate(finalParticles, transform.position, Quaternion.Euler(-90, 0, 0));
            CoinT.text = coinManagement.totalCoin.ToString();
            sfx.volume = audioVolume;
            level.easy++;

            sfx.PlayOneShot(clip);

            StartCoroutine(finshAnim());
        }
    }

    IEnumerator finshAnim()
    {
        slider.SetTrigger("move");
        yield return new WaitForSeconds(transitionStart);
        Time.timeScale = 0;
    }
}
