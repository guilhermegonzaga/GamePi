function colidir(elem1,elem2,img1,img2){
	
	if(elem1.x + img1.width >= elem2.x && elem1.y + img1.height >= elem2.y && elem2.x + img2.width >= elem1.x && elem2.y + img2.height >= elem1.y)
		return true;
	else
		return false;

}

function getRandom(min,max){

	return Math.floor(Math.random() * (max - min) + min);

}