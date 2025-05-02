export default {
    name: "imageTextSection",
    title: "Image & Text Section",
    type: "document",
    fields: [
        {
            name: "sectionImage",
            title: "Section Image",
            type: "image",
            options: { hotspot: true },
        },
        {
            name: "textFields",
            title: "Text Fields",
            type: "array",
            of: [{ type: "string" }],
            validation: Rule => Rule.min(1).max(10), // Ensures at least 1 and max 10
        },
    ],
};
