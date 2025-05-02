export default {
  name: "imageContent",
  title: "Image Content",
  type: "document",
  fields: [
    {
      name: "sectionTitle",
      title: "Section Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "sectionDescription",
      title: "Section Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "cards",
      title: "Cards",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Card Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "description",
              title: "Card Description",
              type: "text",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "image",
              title: "Card Image",
              type: "image",
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required(),
            }
          ]
        }
      ]
    }
  ]
};
