module.exports = {
    content: [
		"./*.php",
		"./template-parts/**/*.php",
		"./inc/**/*.php",
		"./assets/js/**/*.js",
		"./woocommerce/**/*.php"
	],
    theme: {
        extend: {
            fontFamily: {
                heading: ['Atleigh', 'serif'],
                body: ['"Proxima Nova"', 'sans-serif'],
            },
            fontSize: {
                base: ['1rem', { lineHeight: '1.75rem' }],        // 16px
                sm: ['0.875rem', { lineHeight: '1.5rem' }],       // 14px
                lg: ['1.125rem', { lineHeight: '2rem' }],         // 18px
                xl: ['1.25rem', { lineHeight: '2.25rem' }],       // 20px
                '2xl': ['1.5rem', { lineHeight: '2.5rem' }],      // 24px
                '3xl': ['1.875rem', { lineHeight: '2.75rem' }],   // 30px
                '4xl': ['2.25rem', { lineHeight: '3rem' }],       // 36px
                '5xl': ['3rem', { lineHeight: '1' }],             // 48px
            },
            colors: {
				'golden-yellow': 'rgb(var(--color-golden-yellow))',
				'cream-white': 'rgb(var(--color-cream-white))',
				'pure-white': 'rgb(var(--color-pure-white))',
				'vivid-pink': 'rgb(var(--color-vivid-pink))',
				'soft-ivory': 'rgb(var(--color-soft-ivory))',
				'warm-beige': 'rgb(var(--color-warm-beige))',
				'charcoal-black': 'rgb(var(--color-charcoal-black))',
				'gray-medium': 'rgb(var(--color-gray-medium))',
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('tailwindcss-animate')
    ],
	safelist: ['bg-cream-white', 'text-charcoal-black'],
}
