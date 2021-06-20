﻿using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class UiScript : MonoBehaviour
{
	public Text fpsText;
	public Text posText;

	public Transform playerPos;

    // Update is called once per frame
    void Update()
    {
    	float fps = 1/Time.deltaTime;

        fpsText.text = fps.ToString("F2") + " FPS";
        posText.text = "Location: (("+playerPos.position.x.ToString("F2")+"), ("+playerPos.position.y.ToString("F2")+"), ("+playerPos.position.z.ToString("F2")+"))";
    }
}
