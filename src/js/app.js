$(function() {
	function buildDiv(obj) {
		return $("<div/>", obj);
	}
	function buildBox(data) {
		return buildDiv({class: "col"})
		.append(
			buildDiv({class: "box"})
				.append(
					$("<img/>", {src: data.image, alt: data.title})
				)
				.append(
					$("<h2/>").append(data.title)
				)
				.append(
					$("<p/>").append(data.description)
				)
			);
	}
	function renderDom(data, el) {
		$.each( data, function( i, val ) {
			el.append(buildBox(val));
		});
		listenForAnimation(el);
	}
	function listenForAnimation(el) {
		var scrollEvent = $(window).on("scroll", function() {
			if(($(window).scrollTop() + $(window).height()) > el.position().top) {
				animateBoxes(el);
				scrollEvent.off();
			}
		});
	}
	function animateBoxes(el) {
		var t = 100;
		el.find(".box").each(function(index) {
			var cBox = $(this);
			setTimeout(function() {
				cBox.addClass("animate");
			}, t);
			t += 100;
		});
	}
	var data = {
		1: {
			title: "The Edit",
			description: "A carefully curated collection of cutting-edge designers like Anine Bing, Preen Line and Ksenia Schnaider.",
			image: "./images/womens/whats-new-the-edit.jpg"
		},
		2: {
			title: "a buzzworthy bar opening",
			description: "Our chic, sleek cocktail lounge will be your new favorite place to grab a drink.",
			image: "./images/womens/whats-new-buzzworthy-bar.jpg"
		},
		3: {
			title: "THe one-stop jean shop",
			description: "The most comprehensive denim selection in the city is stocked with more than 20 in-demand designers. ",
			image: "./images/womens/whats-new-one-stop-jeans.jpg"
		},
		4: {
			title: "Style Advisors",
			description: "Equipped with new mobile carts, our expert stylists can shop the entire store with you and curate racks of styles tailored to your needs.",
			image: "./images/womens/whats-new-style-advisors.jpg"
		},
		5: {
			title: "ALL THINGS ATHLEISURE",
			description: "Our amped-up selection of athletic wear includes a dedicated Alo Yoga space plus six new labels, including LNDR and Varley.",
			image: "./images/womens/whats-new-athleisure.jpg"
		},
		6: {
			title: "JUICE BAR",
			description: "Quench your thirst at our newest hydration station featuring fresh-pressed juices, smoothies and more. ",
			image: "http://via.placeholder.com/416x422"
		},
		7: {
			title: "Style Advisors",
			description: "Equipped with new mobile carts, our expert stylists can shop the entire store with you and curate racks of styles tailored to your needs.",
			image: "./images/womens/whats-new-style-advisors.jpg"
		},
		8: {
			title: "ALL THINGS ATHLEISURE",
			description: "Our amped-up selection of athletic wear includes a dedicated Alo Yoga space plus six new labels, including LNDR and Varley.",
			image: "./images/womens/whats-new-athleisure.jpg"
		},
		9: {
			title: "JUICE BAR",
			description: "Quench your thirst at our newest hydration station featuring fresh-pressed juices, smoothies and more. ",
			image: "http://via.placeholder.com/416x422"
		},
		10: {
			title: "Style Advisors",
			description: "Equipped with new mobile carts, our expert stylists can shop the entire store with you and curate racks of styles tailored to your needs.",
			image: "./images/womens/whats-new-style-advisors.jpg"
		},
		11: {
			title: "ALL THINGS ATHLEISURE",
			description: "Our amped-up selection of athletic wear includes a dedicated Alo Yoga space plus six new labels, including LNDR and Varley.",
			image: "./images/womens/whats-new-athleisure.jpg"
		},
		12: {
			title: "JUICE BAR",
			description: "Quench your thirst at our newest hydration station featuring fresh-pressed juices, smoothies and more. ",
			image: "http://via.placeholder.com/416x422"
		},
	};
	renderDom(data, $(".project-container section"));
});