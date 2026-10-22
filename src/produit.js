import Badge from "./Badge";

function produit(props) {

  let texte;
  let couleur;

  if (props.quantite === 0) {
    texte = "Rupture de stock";
    couleur = "red";
  }
  else if (props.quantite < 5) {
    texte = "Stock faible";
    couleur = "orange";
  }
  else {
    texte = "En stock";
    couleur = "green";
  }

  return (
    <div className="produit">

      <h3>{props.nom}</h3>

      <p>Catégorie : {props.categorie}</p>

      <p>Prix : {props.prix} DH</p>

      <p>Quantité en stock : {props.quantite}</p>

      <Badge
        texte={texte}
        couleur={couleur}
      />

    </div>
  );
}

export default produit;