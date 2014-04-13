public var Earth_Rotation_Speed : int = 5;

function Update () {

	transform.Rotate(Vector3(0,-1,0) * Time.deltaTime * Earth_Rotation_Speed);
	
}