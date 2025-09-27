
// Greeting with current time and name prompt
function updateGreeting() {
	const greetingDiv = document.getElementById('greeting');
	if (!greetingDiv) return;
	let name = localStorage.getItem('visitorName') || '';
	if (!name) {
		name = prompt('Welcome! Please enter your name:') || 'Guest';
		localStorage.setItem('visitorName', name);
	}
	const now = new Date();
	const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
	greetingDiv.innerHTML = `Hi <b>${name}</b>, welcome!<br><span style="font-size:1rem;font-weight:400;">Current time: ${timeString}</span>`;
}

// Update greeting every second
setInterval(updateGreeting, 1000);
updateGreeting();

// Form validation and submission
document.addEventListener('DOMContentLoaded', function() {
	const form = document.getElementById('contactForm');
	const formMessage = document.getElementById('formMessage');
	if (!form) return;
	form.addEventListener('submit', function(e) {
		e.preventDefault();
		// Clear previous message
		formMessage.textContent = '';
		// Get values
		const name = form.name.value.trim();
		const email = form.email.value.trim();
		const phone = form.phone.value.trim();
		const message = form.message.value.trim();
		// Validation
		if (!name) {
			formMessage.textContent = 'Please enter your name.';
			form.name.focus();
			return;
		}
		if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
			formMessage.textContent = 'Please enter a valid email address.';
			form.email.focus();
			return;
		}
		if (!phone || !/^\d{10,15}$/.test(phone)) {
			formMessage.textContent = 'Please enter a valid phone number (10-15 digits).';
			form.phone.focus();
			return;
		}
		if (!message) {
			formMessage.textContent = 'Please enter your message.';
			form.message.focus();
			return;
		}
		// Success
		formMessage.style.color = '#0078d4';
		formMessage.textContent = `Thank you, ${name}, for your message!`;
		form.reset();
	});
});
