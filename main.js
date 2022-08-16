var btn = document.querySelector('#generateButton');
		btn.addEventListener('click', generateBoxes);

		function generateBoxes() {
			var noOfBoxes = parseInt(document.querySelector('#textBox').value);
			if (isNaN(noOfBoxes)) {
				alert('Please enter a valid input');
			} else {
				var boxes = document.querySelector('#grid');
				
				for (var i = 1; i <=noOfBoxes; i++) {
					var div = document.createElement('div');
					
					(function (index) {
						div.addEventListener('click', function () {
							alert('Box ' + (index + 1) + 'is clicked');
						});
					})
					boxes.appendChild(div);
				}
			}
		} 
grid.innerHTML += i;