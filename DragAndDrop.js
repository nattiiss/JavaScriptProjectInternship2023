let widgets = document.getElementsByClassName("widget");
let widgetContainer = document.getElementById("widget-container");
let selected = null;

for (widget of widgets) {
  widget.addEventListener("dragstart", function (event) {
    selected = event.target;
  });
}

widgetContainer.addEventListener("dragover", function (event) {
  event.preventDefault();
});

widgetContainer.addEventListener("drop", function (event) {
  if (selected) {
    let newWidgetPosition = event.target.closest(".widget");

    if (newWidgetPosition) {
      let targetIndex = Array.from(widgetContainer.children).indexOf(newWidgetPosition);
      let selectedIndex = Array.from(widgetContainer.children).indexOf(selected);


      if (selectedIndex < targetIndex) {
        widgetContainer.insertBefore(selected, newWidgetPosition.nextSibling);
      } else {
        widgetContainer.insertBefore(selected, newWidgetPosition);
      }
    } else {
      widgetContainer.appendChild(selected);
    }

    selected = null;
  }
});

