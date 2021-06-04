using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerController : MonoBehaviour
{
	public float speed = 5;

	private Rigidbody rb;

    // Start is called before the first frame update
    void Start()
    {
        rb = GetComponent<Rigidbody>();
    }

    // Update is called once per frame
    private void FixedUpdate()
    {
        float moveX = Input.GetAxis("Horizontal");
    	float moveY = Input.GetAxis("Vertical");

    	Vector3 movement = new Vector3(-moveY, 0.0f, moveX);

        rb.AddForce(movement * speed);
    }
}
