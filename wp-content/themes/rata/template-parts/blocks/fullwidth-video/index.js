wp.blocks.registerBlockType('rata/fullwidth-video', {
    title: 'Full Width Video',
    category: 'rata',
    icon: 'format-video',
    edit: () => wp.element.createElement('p', null, 'Editor view'),
    save: () => wp.element.createElement('p', null, 'Front-end view')
});
