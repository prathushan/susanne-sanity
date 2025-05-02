export default {
    name: 'imageTextBlock',
    title: 'Left Image Right Text',
    type: 'document',
    fields: [
      {
        name: 'leftImage1',
        title: 'Left Image 1',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'leftImage2',
        title: 'Left Image 2',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'heading',
        title: 'Heading',
        type: 'string',
      },
      {
        name: 'paragraph',
        title: 'Paragraph',
        type: 'text',
      },
    ],
  }
  