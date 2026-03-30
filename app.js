const appNode = document.getElementById("app");

if (typeof window.renderPricingWithChart === "function") {
	window.renderPricingWithChart(appNode);
} else if (appNode) {
	appNode.innerHTML =
		'<div class="mx-auto max-w-2xl px-4 py-16 text-center text-zinc-300">Unable to load the pricing component. Please refresh the page.</div>';
}
