using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ControllerImage : MonoBehaviour
{
    public GameObject image;

    // Start is called before the first frame update
    void Start()
    {
        image.SetActive(ShowController.controllerShow);
    }
}
