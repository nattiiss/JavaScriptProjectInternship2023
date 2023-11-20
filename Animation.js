function changeMode() {
  let body = document.body;
  let widgets = document.querySelectorAll('.widget');

  body.classList.toggle("dark-mode");

  widgets.forEach(widget => {
    widget.classList.toggle("dark-mode-widget");
  });
}

function addNewWidget() {
  let newWidget = document.createElement('div');
  newWidget.className = 'widget new-widget';
  newWidget.textContent = 'New Widget';

  let widgetContainer = document.getElementById('widget-container');
  widgetContainer.appendChild(newWidget);
}

function deleteWidget() {
  let widgetContainer = document.getElementById('widget-container');
  let widgets = widgetContainer.getElementsByClassName('widget');

  if (widgets.length > 0) {
    let lastWidget = widgets[widgets.length - 1];
    widgetContainer.removeChild(lastWidget);
  }
}


