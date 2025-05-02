export default {
    name: 'header',
    title: 'Header',
    type: 'document',
    fields: [
      {
        name: 'logo',
        title: 'Logo',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'leftMenu',
        title: 'Left Menu',
        type: 'array',
        of: [{ type: 'menuItem' }],
      },
      {
        name: 'rightMenu',
        title: 'Right Menu',
        type: 'array',
        of: [{ type: 'menuItem' }],
      },
    ],
  };
  