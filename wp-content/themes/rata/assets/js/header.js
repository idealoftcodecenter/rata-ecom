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

document.addEventListener('DOMContentLoaded', function () {
	const expandable = document.querySelector('.expandable');
	if (!expandable) return; // Exit early if expandable is not present
	const content = expandable.querySelector('.expandable-content');
	const trigger = expandable.querySelector('.expandable-trigger');
	const text = trigger.querySelector('.text');
	const arrow = trigger.querySelector('.arrow');
	const gradient = content.querySelector('.bg-gradient-to-b');

	let expanded = false;
	const collapsedHeight = 100; // in px

	const getFullHeight = () => {
		const clone = content.cloneNode(true);
		clone.style.height = 'auto';
		clone.style.visibility = 'hidden';
		clone.style.position = 'absolute';
		clone.style.pointerEvents = 'none';
		document.body.appendChild(clone);
		const height = clone.scrollHeight + 60;
		document.body.removeChild(clone);
		return height;
	};

	trigger.addEventListener('click', () => {
		if (!expanded) {
			const fullHeight = getFullHeight();
			content.style.height = collapsedHeight + 'px'; // reset first for transition
			requestAnimationFrame(() => {
				content.style.height = fullHeight + 'px';
			});
			gradient.classList.add('hidden');
			text.textContent = 'Show less';
			arrow.classList.remove('rotate-90');
			arrow.classList.add('-rotate-90');
		} else {
			const currentHeight = content.scrollHeight;
			content.style.height = currentHeight + 'px';
			requestAnimationFrame(() => {
				content.style.height = collapsedHeight + 'px';
			});
			gradient.classList.remove('hidden');
			text.textContent = 'See more';
			arrow.classList.remove('-rotate-90');
			arrow.classList.add('rotate-90');
		}
		expanded = !expanded;
	});
});

document.addEventListener('DOMContentLoaded', () => {
	// Open modals
	document.querySelectorAll('[data-modal]').forEach(button => {
		button.addEventListener('click', () => {
			const modalId = button.getAttribute('data-modal');
			const modal = document.getElementById(modalId);
			if (modal) modal.classList.remove('hidden');
		});
	});

	// Close modals
	document.querySelectorAll('.modal-close').forEach(btn => {
		btn.addEventListener('click', () => {
			btn.closest('.modal-backdrop').classList.add('hidden');
		});
	});

	// Optional: close on backdrop click
	document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
		backdrop.addEventListener('click', e => {
			if (e.target === backdrop) {
			backdrop.classList.add('hidden');
			}
		});
	});

	// Optional: ESC key
	document.addEventListener('keydown', e => {
		if (e.key === 'Escape') {
			document.querySelectorAll('.modal-backdrop').forEach(m => m.classList.add('hidden'));
		}
	});
});
