const avis = {
  name: "avis",
  title: "Avis client",
  type: "document",
  fields: [
    { name: "auteur", title: "Auteur", type: "string" },
    { name: "ville", title: "Ville", type: "string" },
    { name: "note", title: "Note (1-5)", type: "number", validation: (Rule: { min: (n: number) => { max: (n: number) => unknown } }) => Rule.min(1).max(5) },
    { name: "texte", title: "Texte de l'avis", type: "text" },
    { name: "visible", title: "Visible sur le site", type: "boolean", initialValue: true },
  ],
};

export default avis;
