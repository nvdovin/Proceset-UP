const current_url = String(document.URL);

// Create a anchor 
function create_an_anchor() {
	let hat = document.getElementsByClassName("css-xg8uvt")[0];
	let hat_child = hat.firstChild;
	
	console.log(hat_child);
	
	let new_div = document.createElement("div");
	new_div.setAttribute("id", "new_anchor");
	
	hat.insertBefore(new_div, hat_child);
	console.log("[log] Anchor was set");
	
	let bottom_part = document.getElementById("root");	
	let first_child = bottom_part.firstChild;
	let up_button_div = document.createElement("div");
	up_button_div.setAttribute("class", "up_button_div");
	
	let up_button_a = document.createElement("a");
	up_button_a.href = "#new_anchor";
	up_button_a.setAttribute("class", "up_button_a");
	up_button_a.textContent = "UP!";
	
	bottom_part.insertBefore(up_button_div, first_child);
	up_button_div.appendChild(up_button_a);

	console.log("[log] Anchor set");
};


if (
	(
		current_url.includes("infomaximum") ||
		current_url.includes("proceset") ||
		current_url.includes("portal")
	) && 
		current_url.includes("publish")
	) {
	setTimeout(() => {
		console.log("[log] Waited");
		create_an_anchor();
	}, 10000);
	
};