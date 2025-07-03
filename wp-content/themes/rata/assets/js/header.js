document.addEventListener('DOMContentLoaded', function () {
	const toggleBtn = document.getElementById('mobileMenuToggle');
	const mobileMenu = document.getElementById('mobileMenu');
	const menuIcon = document.getElementById('menuIcon');
	const closeIcon = document.getElementById('closeIcon');

	toggleBtn.addEventListener('click', function () {
		mobileMenu.classList.toggle('hidden');
		menuIcon.classList.toggle('hidden');
		closeIcon.classList.toggle('hidden');
	});
});
