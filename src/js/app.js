$(function() {
	var w = $(window);

	function node(type, obj, content) {
		if(!type) return "";
		var node = $("<" + type + "/>", obj);
		if(content) node.append(content);
		return node;
	}
	function buildBox(data) {
		return node("div", {class: "col"})
		.append(
			node("div", {class: "box"})
			.append(
				node("img", {src: data.image, alt: data.title})
			)
			.append(
				node("h2", {}, data.title)
			)
			.append(
				node("p", {}, data.description)
			)
		);
	}
	function renderDom(data, el) {
		$.each( data, function( i, val ) {
			el.append(buildBox(val));
		});
	}
	function addBoxListener() {
		var winScroll, numBoxes = $(".box").length;
		var s = w.on("scroll", function() {
			winScroll = w.scrollTop() + w.height();
			$(".box").not(".animate").each(function() {
				if(winScroll > $(this).position().top + 100) {
					$(this).addClass("animate");
				}
			});
			if($(".box.animate").length === numBoxes) s.off();
		});
	}
	var womenWhatsNewData = [
		{
			title: "The Edit",
			description: "A carefully curated collection of cutting-edge designers like Anine Bing, Preen Line and Ksenia Schnaider.",
			image: "./images/womens/whats-new-the-edit.jpg"
		},
		{
			title: "a buzzworthy bar opening",
			description: "Our chic, sleek cocktail lounge will be your new favorite place to grab a drink.",
			image: "./images/womens/whats-new-buzzworthy-bar.jpg"
		},
		{
			title: "THe one-stop jean shop",
			description: "The most comprehensive denim selection in the city is stocked with more than 20 in-demand designers. ",
			image: "./images/womens/whats-new-one-stop-jeans.jpg"
		},
		{
			title: "Style Advisors",
			description: "Equipped with new mobile carts, our expert stylists can shop the entire store with you and curate racks of styles tailored to your needs.",
			image: "./images/womens/whats-new-style-advisors.jpg"
		},
		{
			title: "ALL THINGS ATHLEISURE",
			description: "Our amped-up selection of athletic wear includes a dedicated Alo Yoga space plus six new labels, including LNDR and Varley.",
			image: "./images/womens/whats-new-athleisure.jpg"
		},
		{
			title: "JUICE BAR",
			description: "Quench your thirst at our newest hydration station featuring fresh-pressed juices, smoothies and more. ",
			image: "http://via.placeholder.com/416x422"
		},
		{
			title: "Style Advisors",
			description: "Equipped with new mobile carts, our expert stylists can shop the entire store with you and curate racks of styles tailored to your needs.",
			image: "./images/womens/whats-new-style-advisors.jpg"
		},
		{
			title: "ALL THINGS ATHLEISURE",
			description: "Our amped-up selection of athletic wear includes a dedicated Alo Yoga space plus six new labels, including LNDR and Varley.",
			image: "./images/womens/whats-new-athleisure.jpg"
		},
		{
			title: "JUICE BAR",
			description: "Quench your thirst at our newest hydration station featuring fresh-pressed juices, smoothies and more. ",
			image: "http://via.placeholder.com/416x422"
		},
		{
			title: "Style Advisors",
			description: "Equipped with new mobile carts, our expert stylists can shop the entire store with you and curate racks of styles tailored to your needs.",
			image: "./images/womens/whats-new-style-advisors.jpg"
		},
		{
			title: "ALL THINGS ATHLEISURE",
			description: "Our amped-up selection of athletic wear includes a dedicated Alo Yoga space plus six new labels, including LNDR and Varley.",
			image: "./images/womens/whats-new-athleisure.jpg"
		},
		{
			title: "JUICE BAR",
			description: "Quench your thirst at our newest hydration station featuring fresh-pressed juices, smoothies and more. ",
			image: "http://via.placeholder.com/416x422"
		},
		{
			title: "JUICE BAR",
			description: "Quench your thirst at our newest hydration station featuring fresh-pressed juices, smoothies and more. ",
			image: "http://via.placeholder.com/416x422"
		},
		{
			title: "Style Advisors",
			description: "Equipped with new mobile carts, our expert stylists can shop the entire store with you and curate racks of styles tailored to your needs.",
			image: "./images/womens/whats-new-style-advisors.jpg"
		},
		{
			title: "ALL THINGS ATHLEISURE",
			description: "Our amped-up selection of athletic wear includes a dedicated Alo Yoga space plus six new labels, including LNDR and Varley.",
			image: "./images/womens/whats-new-athleisure.jpg"
		},
		{
			title: "JUICE BAR",
			description: "Quench your thirst at our newest hydration station featuring fresh-pressed juices, smoothies and more. ",
			image: "http://via.placeholder.com/416x422"
		},
		{
			title: "Style Advisors",
			description: "Equipped with new mobile carts, our expert stylists can shop the entire store with you and curate racks of styles tailored to your needs.",
			image: "./images/womens/whats-new-style-advisors.jpg"
		},
		{
			title: "ALL THINGS ATHLEISURE",
			description: "Our amped-up selection of athletic wear includes a dedicated Alo Yoga space plus six new labels, including LNDR and Varley.",
			image: "./images/womens/whats-new-athleisure.jpg"
		},
		{
			title: "JUICE BAR",
			description: "Quench your thirst at our newest hydration station featuring fresh-pressed juices, smoothies and more. ",
			image: "http://via.placeholder.com/416x422"
		}
	]

	var womenWhatsNewDataAnother = [
		{
			title: "The Edit",
			description: "A carefully curated collection of cutting-edge designers like Anine Bing, Preen Line and Ksenia Schnaider.",
			image: "./images/womens/whats-new-the-edit.jpg"
		},
		{
			title: "a buzzworthy bar opening",
			description: "Our chic, sleek cocktail lounge will be your new favorite place to grab a drink.",
			image: "./images/womens/whats-new-buzzworthy-bar.jpg"
		},
		{
			title: "THe one-stop jean shop",
			description: "The most comprehensive denim selection in the city is stocked with more than 20 in-demand designers. ",
			image: "./images/womens/whats-new-one-stop-jeans.jpg"
		},
		{
			title: "Style Advisors",
			description: "Equipped with new mobile carts, our expert stylists can shop the entire store with you and curate racks of styles tailored to your needs.",
			image: "./images/womens/whats-new-style-advisors.jpg"
		},
		{
			title: "ALL THINGS ATHLEISURE",
			description: "Our amped-up selection of athletic wear includes a dedicated Alo Yoga space plus six new labels, including LNDR and Varley.",
			image: "./images/womens/whats-new-athleisure.jpg"
		},
		{
			title: "JUICE BAR",
			description: "Quench your thirst at our newest hydration station featuring fresh-pressed juices, smoothies and more. ",
			image: "http://via.placeholder.com/416x422"
		},
		{
			title: "Style Advisors",
			description: "Equipped with new mobile carts, our expert stylists can shop the entire store with you and curate racks of styles tailored to your needs.",
			image: "./images/womens/whats-new-style-advisors.jpg"
		},
		{
			title: "ALL THINGS ATHLEISURE",
			description: "Our amped-up selection of athletic wear includes a dedicated Alo Yoga space plus six new labels, including LNDR and Varley.",
			image: "./images/womens/whats-new-athleisure.jpg"
		},
		{
			title: "JUICE BAR",
			description: "Quench your thirst at our newest hydration station featuring fresh-pressed juices, smoothies and more. ",
			image: "http://via.placeholder.com/416x422"
		},
		{
			title: "Style Advisors",
			description: "Equipped with new mobile carts, our expert stylists can shop the entire store with you and curate racks of styles tailored to your needs.",
			image: "./images/womens/whats-new-style-advisors.jpg"
		},
		{
			title: "ALL THINGS ATHLEISURE",
			description: "Our amped-up selection of athletic wear includes a dedicated Alo Yoga space plus six new labels, including LNDR and Varley.",
			image: "./images/womens/whats-new-athleisure.jpg"
		},
		{
			title: "JUICE BAR",
			description: "Quench your thirst at our newest hydration station featuring fresh-pressed juices, smoothies and more. ",
			image: "http://via.placeholder.com/416x422"
		},
		{
			title: "JUICE BAR",
			description: "Quench your thirst at our newest hydration station featuring fresh-pressed juices, smoothies and more. ",
			image: "http://via.placeholder.com/416x422"
		},
		{
			title: "Style Advisors",
			description: "Equipped with new mobile carts, our expert stylists can shop the entire store with you and curate racks of styles tailored to your needs.",
			image: "./images/womens/whats-new-style-advisors.jpg"
		},
		{
			title: "ALL THINGS ATHLEISURE",
			description: "Our amped-up selection of athletic wear includes a dedicated Alo Yoga space plus six new labels, including LNDR and Varley.",
			image: "./images/womens/whats-new-athleisure.jpg"
		},
		{
			title: "JUICE BAR",
			description: "Quench your thirst at our newest hydration station featuring fresh-pressed juices, smoothies and more. ",
			image: "http://via.placeholder.com/416x422"
		},
		{
			title: "Style Advisors",
			description: "Equipped with new mobile carts, our expert stylists can shop the entire store with you and curate racks of styles tailored to your needs.",
			image: "./images/womens/whats-new-style-advisors.jpg"
		},
		{
			title: "ALL THINGS ATHLEISURE",
			description: "Our amped-up selection of athletic wear includes a dedicated Alo Yoga space plus six new labels, including LNDR and Varley.",
			image: "./images/womens/whats-new-athleisure.jpg"
		},
		{
			title: "JUICE BAR",
			description: "Quench your thirst at our newest hydration station featuring fresh-pressed juices, smoothies and more. ",
			image: "http://via.placeholder.com/416x422"
		}
	]
	renderDom(womenWhatsNewData, $("#women-whats-new"));
	renderDom(womenWhatsNewDataAnother, $("#women-whats-new-2"));
	addBoxListener();
});