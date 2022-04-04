(function () {
  var now = new Date(),
    hourDeg = (now.getHours() / 12) * 360 + (now.getMinutes() / 60) * 30,
    minuteDeg = (now.getMinutes() / 60) * 360 + (now.getSeconds() / 60) * 6,
    secondDeg = (now.getSeconds() / 60) * 360,
    stylesDeg = [
      "@-webkit-keyframes rotate-hour{from{transform:rotate(" +
        hourDeg +
        "deg);}to{transform:rotate(" +
        (hourDeg + 360) +
        "deg);}}",
      "@-webkit-keyframes rotate-minute{from{transform:rotate(" +
        minuteDeg +
        "deg);}to{transform:rotate(" +
        (minuteDeg + 360) +
        "deg);}}",
      "@-webkit-keyframes rotate-second{from{transform:rotate(" +
        secondDeg +
        "deg);}to{transform:rotate(" +
        (secondDeg + 360) +
        "deg);}}",
      "@-moz-keyframes rotate-hour{from{transform:rotate(" +
        hourDeg +
        "deg);}to{transform:rotate(" +
        (hourDeg + 360) +
        "deg);}}",
      "@-moz-keyframes rotate-minute{from{transform:rotate(" +
        minuteDeg +
        "deg);}to{transform:rotate(" +
        (minuteDeg + 360) +
        "deg);}}",
      "@-moz-keyframes rotate-second{from{transform:rotate(" +
        secondDeg +
        "deg);}to{transform:rotate(" +
        (secondDeg + 360) +
        "deg);}}",
    ].join("")

  document.getElementById("clock-animations").innerHTML = stylesDeg
})()


/* Day of the month */
calendarDay = document.getElementById("calendar-day")

const clock = () => {
	let date = new Date()

	let calDay = date.getDate()
	calendarDay.innerHTML = calDay
}

setInterval(
	clock,
	1000
)

/* toggle switch */
const toggleSwitch = document.querySelector(
	'.theme-switch input[type="checkbox"]'
)
const currentTheme = localStorage.getItem("theme")

if (currentTheme) {
	document.documentElement.setAttribute("data-theme", currentTheme)

	if (currentTheme === "dark") {
		toggleSwitch.checked = true
	}
}

function switchTheme(e) {
	if (e.target.checked) {
		document.documentElement.setAttribute("data-theme", "dark")
		localStorage.setItem("theme", "dark")
	} else {
		document.documentElement.setAttribute("data-theme", "light")
		localStorage.setItem("theme", "light")
	}
}

toggleSwitch.addEventListener("change", switchTheme, false)
