const realisation = {
  name: "realisation",
  title: "Réalisation",
  type: "document",
  fields: [
    { name: "titre", title: "Titre", type: "string" },
    { name: "ville", title: "Ville", type: "string" },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    },
    { name: "ordre", title: "Ordre d'affichage", type: "number" },
  ],
  orderings: [
    { title: "Ordre", name: "ordreAsc", by: [{ field: "ordre", direction: "asc" }] },
  ],
};

export default realisation;
