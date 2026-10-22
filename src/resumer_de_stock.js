function ResumeStock(props) {

  // Nombre total de produits
  const totalProduits = props.produits.length;

  // Nombre de produits en rupture
  const produitsRupture = props.produits.filter(
    (produit) => produit.quantite === 0
  ).length;

  // Valeur totale du stock
  let valeurStock = 0;

  props.produits.forEach((produit) => {
    valeurStock = valeurStock + produit.prix * produit.quantite;
  });

  return (
    <div className="resume">
      <h2>Résumé du stock</h2>

      <p>Nombre total de produits : {totalProduits}</p>

      <p>Produits en rupture : {produitsRupture}</p>

      <p>Valeur totale du stock : {valeurStock} DH</p>
    </div>
  );
}

export default ResumeStock;