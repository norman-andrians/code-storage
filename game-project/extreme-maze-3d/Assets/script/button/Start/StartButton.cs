using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class StartButton : MonoBehaviour
{
	//start the game
    public void StartGame() {
    	SceneManager.LoadScene("Menu");
    }
}
