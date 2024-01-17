// ================================================================= Frilancer jQuery =================================================================
// vareant 3

// $(document).ready(function () {
// 	$('.block__box-title').click(function (event) {
// 		if ($('.block__box-wrap').hasClass('one')) {
// 			$('block__box-title').not($(this)).removeClass('active')
// 			$('block__box-text').not($(this).next()).slideUp(300)
// 		}
// 		$(this).toggleClass('active').next().slideToggle(300)
// 	})
// })

// =================================================================
// variant 5
// v-1
// document.querySelectorAll('.accordion__trigger').forEach(el =>
// 	el.addEventListener('click', () => {
// 		el.parentNode.classList.toggle('active')
// 	})
// )

// v-2
document.querySelectorAll('.accordion__trigger').forEach(el =>
	el.addEventListener('click', () => {
		if (el.classList.contains('active')) {
			el.classList.remove('active')
		} else {
			document
				.querySelectorAll('.accordion__trigger')
				.forEach(title => title.classList.remove('active'))
			el.classList.add('active')
		}
	})
)
// document.querySelectorAll('.accordion__trigger').forEach(el =>
// 	el.addEventListener('click', () => {
// 		let parent = el.parentNode

// 		if (parent.classList.contains('active')) {
// 			parent.classList.remove('active')
// 		} else {
// 			document
// 				.querySelectorAll('.accordion__item')
// 				.forEach(child => child.classList.remove('active'))
// 			parent.classList.add('active')
// 		}
// 	})
// )

// =================================================================
