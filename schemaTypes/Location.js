// schemas/location.js
export default {
    name: 'location',
    title: 'Location',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'phone',
        title: 'Phone Number',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'email',
        title: 'Email Address',
        type: 'string',
        validation: (Rule) => Rule.required().email(),
      },
      {
        name: 'mapEmbedCode',
        title: 'Map Embed Code',
        type: 'text',
        description: 'Paste the embed code for the map here',
        validation: (Rule) => Rule.required(),
      },
    ],
  };
  