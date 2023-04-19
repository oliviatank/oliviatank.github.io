function seeMore() {
	let secondParagraph = document.getElementById("about_me_p2");
	let seemoreLink = document.getElementById("see_more_one");
	
	if(secondParagraph.classList.contains("hidden")){
		secondParagraph.classList.remove("hidden");
		seemoreLink.innerHTML="See less...";
	}
	
	else {
		secondParagraph.classList.add("hidden");
		seemoreLink.innerHTML="See more...";
	}
}

function seemoreTwo() {
	let fourthParagraph = document.getElementById("career_p2");
	let seeMore = document.getElementById("see_more_two");
	
	if(fourthParagraph.classList.contains("hidden")){
		fourthParagraph.classList.remove("hidden");
		seeMore.innerHTML="See less...";
	}
	
	else {
		fourthParagraph.classList.add("hidden");
		seeMore.innerHTML="See more...";
	}
}

setInterval(changeSlide, 10000);
function changeSlide() {
	let sunset = document.getElementById("sunset");
	let dance = document.getElementById("dance");
	let grad = document.getElementById("grad");
	let formal = document.getElementById("formal");
	let gameday = document.getElementById("gameday");
	
	if(!sunset.classList.contains("hidden")) {
		dance.classList.remove("hidden");
		sunset.classList.add("hidden");
	}
	
	else if(!dance.classList.contains("hidden")) {
		grad.classList.remove("hidden");
		dance.classList.add("hidden");
	}
	
	else if(!grad.classList.contains("hidden")) {
		formal.classList.remove("hidden");
		grad.classList.add("hidden");
	}
	
	else if(!formal.classList.contains("hidden")) {
		gameday.classList.remove("hidden");
		formal.classList.add("hidden");
	}
	
	else if(!gameday.classList.contains("hidden")) {
		sunset.classList.remove("hidden");
		gameday.classList.add("hidden");
	}
}

function gradeQuiz() {
	let score=0;
	let q1Answer = document.getElementById("question1").value;
	let q2Answer = document.getElementById("question2").value;
	let q3Answer = document.getElementById("question3").value;
	let q4Answer = document.getElementById("question4").value;
	let scoreSection = document.getElementById("score");
	
	if(q1Answer == "Classes are reusable; id's are unique identifiers.") {
		score++;
		scoreSection.innerHTML += "<p>Question 1 - Correct</p>";
	}
	else {
		scoreSection.innerHTML += "<p>Question 1 - Incorrect</p>";
	}

	if(q2Answer== "Semicolons and commas are the same thing.") {
		score++;
		scoreSection.innerHTML+="<p>Question 2 - Correct </p>"
	}
	else {
		scoreSection.innerHTML+="<p>Question 2 - Incorrect</p>";
	}
	
	if(q3Answer=="label") {
		score++;
		scoreSection.innerHTML+="<p>Question 3 - Correct </p>"
	}
	else {
		scoreSection.innerHTML+="<p>Question 3 - Incorrect</p>";
	}
	
	if(q4Answer=="<tc>") {
		score++;
		scoreSection.innerHTML+="<p>Question 4 - Correct </p>"
	}
	else {
		scoreSection.innerHTML+="<p>Question 4 - Incorrect</p>";
	}
	
	scoreSection.innerHTML+="Score: " + score + "/4";
}