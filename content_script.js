function get_hat() {
	let hat = document.querySelector("div[data-id='main']");
	if (!hat) {
		setTimeout(
			get_hat,
			3000
		);
	} else {
		console.log("[log] Probably, page is loaded at all");

		// Create an anchor in a top part of page
		let first_child = hat.firstChild;

		let anchor_div = document.createElement("div");
		anchor_div.setAttribute("id", "anchor-up");

		hat.insertBefore(anchor_div, first_child);
		console.log("[log] Anchor was set");

		// Create a button fixed in bottom part of page
		let button_up_div = document.createElement("div");
		button_up_div.setAttribute("class", "up_button_div");

		let button_up_a = document.createElement("a");
		button_up_a.setAttribute("class", "up_button_a");
		button_up_a.setAttribute("href", "#anchor-up");
		button_up_a.textContent = "↑↑↑";

		button_up_div.appendChild(button_up_a);
		hat.appendChild(button_up_div);
	};
}

let hat = get_hat();