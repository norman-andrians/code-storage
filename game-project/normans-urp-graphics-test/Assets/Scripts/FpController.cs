/*====================================
* Basic Player Controller
* By Norman Andrians
*
* Lu Boleh Edit Ini :3
====================================*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class FpController : MonoBehaviour
{
	[Header("Player Speed")] // Kecepatan Player
	public float speed = 1f;
	public float rotateSpeed = 2f;
	public float jumpSpeed = 1f;

	[Header("Camera")] // Kamera
	public GameObject targetCamera;
	public float rotateSpeedCamera = 1f;
	public float zoomDistance = 2f;

	[Header("Change Perspective Camera")] // Ganti Perspektif Kamera
	public bool isFirstPerson = true;
	public Vector3 thirdPersonPos;

	[Header("Quaternion Euler Camera Third Person")] // Ubah Rotasi Gitu Intinya
	public float rotationTime = 1f;

	[Header("Pause")] // Ubah Pause Object
	public GameObject pause;
	public bool isPaused = false;

	[Header("Trigger")]
	public string triggerTag;

	[Header("Sounds")]
	public AudioClip audioCollision1;
	public AudioClip audioCollision2;
	public AudioClip audioCollision3;
	public AudioClip audioCollision4;

	public AudioSource audioSource;

	[Header("Audio Range")]
	public float audioVolumeMin = .6f;
	public float audioVolumeMax = 1f;

	public float audioPitchMin = .5f;
	public float audioPitchMax = 3f;


	private bool playerIsTheGround = true;

	private Quaternion defaultRotate = Quaternion.Euler(0f, 0f, 0f); // Rotasi Awal
	private Quaternion tpRotate = Quaternion.Euler(25f, 0f, 0f); // Rotasi Third Person

	private Camera mainCamera; // komponen Camera
	private Transform mainCameraTransform; // komponen Lokasi Transform

	private Rigidbody rb; // komponen Rigidbody

	void Start()
	{
		//komponen pada player
		rb = GetComponent<Rigidbody>();

		// komponen pada kamera
		mainCamera = targetCamera.GetComponent<Camera>();
		mainCameraTransform = targetCamera.GetComponent<Transform>();
	}

    // Update is called once per frame
    void Update()
    {
    	// Input Axis Horizontal dan Vertical
        float directHorizontal = Input.GetAxis("Horizontal");
        float directVertical = Input.GetAxis("Vertical");

        // Input Axis Scroll Mouse
        float directVerticalScroll = Input.GetAxis("Mouse ScrollWheel");

        Vector3 move = new Vector3(0f, 0f, directVertical); // Vector3 kontrol pindah player
        Vector3 putar = new Vector3(0f, directHorizontal * rotateSpeed, 0f); // Vector3 kontrol rotasi player secara horizontal
        Vector3 putarKamera = new Vector3(-directVerticalScroll * rotateSpeedCamera, 0f, 0f); // Vector3 kontrol rotasi player secara vertical
        move.Normalize();

        transform.Translate(move * speed * Time.deltaTime); // kontrol pindah player
        transform.Rotate(putar); // kontrol rotasi player secara horizontal

        mainCameraTransform.Rotate(putarKamera); //kontrol rotasi player secara vertikal

        OnPlayInput();
    }

    // ulang kembali scene dalam game
    public void RestartScene()
    {
    	SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex);
    }

    // ulang kembali posisi rotasi pada player
    public void RestartPosition()
    {
    	// ulang kembali posisi pada player
    	Vector3 restartPos = new Vector3(transform.position.x, 0.5f, transform.position.z);

    	transform.position = restartPos;
    	transform.rotation = Quaternion.Euler(0f, transform.rotation.y, 0f); // ulang kembali rotasi pada player

    	Debug.Log("Reset Player Position");
    }

    private void OnTriggerEnter(Collider other)
    {
    	playerIsTheGround = true;
    }

    private void OnCollisionEnter(Collision collision)
    {
    	CollisionAudio();
    }

    public void CollisionAudio()
    {
    	int audioRange = Random.Range(1, 4);

    	float audioVolume = Random.Range(audioVolumeMin, audioVolumeMax);
    	float audioPitch = Random.Range(audioPitchMin, audioPitchMax);

    	audioSource.volume = audioVolume;
    	audioSource.pitch = audioPitch;

    	switch (audioRange)
    	{
    		case 1:
    			audioSource.PlayOneShot(audioCollision1);
    			break;
    		case 2:
    			audioSource.PlayOneShot(audioCollision2);
    			break;
    		case 3:
    			audioSource.PlayOneShot(audioCollision3);
    			break;
    		case 4:
    			audioSource.PlayOneShot(audioCollision4);
    			break;
    		default:
    			Debug.Log("Error, Collision Audio Can't be played, audio range shouldn't greater than 4 and smaller than 1");
    			break;
    	}
    }

    // fungsi key Input
    public void OnPlayInput()
    {
    	if (Input.GetKeyDown(KeyCode.Space) && playerIsTheGround)
    	{
    		rb.AddForce(Vector3.up * jumpSpeed);
    		playerIsTheGround = false;
    	}

        // input untuk ulang kembali posisi pada player
        if (Input.GetKey(KeyCode.P))
        	RestartPosition();

        // input untuk ulang kembali scene
        if (Input.GetKey(KeyCode.R))
        	RestartScene();

        // input untuk mengganti perspektif kamera (dalam pengembangan dan masih bug)
        if (Input.GetKey(KeyCode.F11))
        {
        	if (isFirstPerson)
        		onFirstPerson(); // perspektif ketiga diaktifkan
        	else
        		nonFirstPerson(); // perspektif ketiga dinonaktifkan
        }

        // input untuk mengganti Field Of View
        if (Input.GetKey(KeyCode.Z))
        {
        	mainCamera.fieldOfView = zoomDistance;
        	Debug.Log("Zoom In");
        }
        else
        	mainCamera.fieldOfView = 60f;

        // input untuk pause
        if (Input.GetKeyDown(KeyCode.Escape))
        {
        	ChangePaused(isPaused);

        	if (isPaused)
        	{
        		isPaused = false;
        		Time.timeScale = 0;
        	}
        	else
        	{
        		isPaused = true;
        		Time.timeScale = 1;
        	}
        }
    }

    public void ChangePaused(bool OnPaused)
    {
    	pause.SetActive(OnPaused);
    }

    public void onFirstPerson()
    {
    	mainCameraTransform.position = thirdPersonPos;
    	mainCameraTransform.rotation = Quaternion.Slerp(transform.rotation, tpRotate, Time.deltaTime * rotateSpeed);

    	isFirstPerson = false;
    }

    public void nonFirstPerson()
    {
    	Vector3 defaultPos = new Vector3(0f, 0f, 0f);
    	mainCameraTransform.position = defaultPos;
    	mainCameraTransform.rotation = Quaternion.Slerp(transform.rotation, defaultRotate, Time.deltaTime * rotateSpeed);

    	isFirstPerson = true;
    }
}
