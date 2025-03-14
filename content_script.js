let url = String(document.URL);
const timeOut = 1000;

// Create a anchor 
function create_an_anchor() {
	// Creating of anchor in top part of page

	let hat = document.getElementsByTagName("main")[0];
	let hats_first_child = hat.firstChild;
	let new_anchor = document.createElement("div");
	new_anchor.setAttribute("id", "new_anchor");
	hats_first_child.appendChild(new_anchor);
	// console.log("[log] I've been set the anchor");

	// Create a button
	let bottom_part = document.getElementById("root");	
	let first_child = bottom_part.firstChild;
	let up_button_div = document.createElement("div");
	up_button_div.setAttribute("class", "up_button_div");

	let img = document.createElement("img");
	img.setAttribute("src", "https://github.com/nvdovin/JavaScript-Tetris/blob/main/array_white.png?raw=true");
	img.setAttribute("class", "img_class");
	img.setAttribute("style", "width: 40px; heigth: 40px");
	
	let up_button_a = document.createElement("a");
	up_button_a.href = "#new_anchor";
	up_button_a.setAttribute("class", "up_button_a");
	up_button_a.textContent = "";
	up_button_a.appendChild(img);
	
	bottom_part.insertBefore(up_button_div, first_child);
	up_button_div.appendChild(up_button_a);

	// console.log("[log] Anchor set");
};


function run_changer() {
	if (
		(
			url.includes("infomaximum") ||
			url.includes("proceset")
		) && 
			url.includes("publish")
		) {
		setTimeout(() => {
			// console.log("[log] Waited");
			create_an_anchor();
		}, timeOut);
		
	} else {
		clear_up_button();
	};
};


function clear_up_button() {
	console.log("[log] Trying to delete the button!");
	let up_button_div = document.querySelector("div[class='up_button_div']");
	let up_button_a = up_button_div.firstChild;
	let img = up_button_a.firstChild;
	let root = up_button_div.parentElement;

	up_button_a.removeChild(img);
	up_button_div.removeChild(up_button_a);
	root.removeChild(up_button_div);

	if (up_button_div) {
		clear_up_button()
	} else {
		return;
	};
};

function is_URL_changed() {
	let current_url = String(document.URL);
	if (current_url === url) {
		setTimeout(() => {
			// console.log("[log] URL isn't change yet");
			is_URL_changed()
		},
		timeOut
		);
	} else {
		url = current_url;

		setTimeout(() => {
			console.log("[log] URL was changed");
		run_changer();
		},
		timeOut);

		setTimeout(() => {
			is_URL_changed();
		},
			timeOut
		);
	};
};

is_URL_changed();