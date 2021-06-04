using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class EasyLevelEvent : MonoBehaviour
{
    public void Level1() {
    	SceneManager.LoadScene("easy-level-1");
    }
}
