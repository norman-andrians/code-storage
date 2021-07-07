using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class StartButton : MonoBehaviour
{
    public Animator transition;

    public bool isStart = false;

    public float transitionTime = 1f;

    void Update()
    {
        if (isStart)
        {
            if (Input.anyKey)
            {
                StartCoroutine(StartGame());
            }
        }
    }

	//start the game
    IEnumerator StartGame() {
        transition.SetTrigger("Start");
        yield return new WaitForSeconds(transitionTime);
    	SceneManager.LoadScene("Menu");
    }
}
