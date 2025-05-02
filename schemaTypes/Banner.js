  export default {
    name: "banner",
    title: "Banner",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
      },
      {
        name: "description",
        title: "Description",
        type: "string",
      },
      {
        name: "image",
        title: "Banner Image",
        type: "image",
        options: {
          hotspot: true,
        },
      },
    ],
  };
  
  