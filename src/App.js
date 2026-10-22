import Header from "./header";
import Footer from "./footer";
import Produit from "./produit";
import "./resumer_de_stock";
import "./cart";

const produits = [
  {
    id: 1,
    nom: "Clavier mécanique",
    prix: 450,
    quantite: 12,
    categorie: "Périphériques"
  },
  {
    id: 2,
    nom: "Souris sans fil",
    prix: 180,
    quantite: 0,
    categorie: "Périphériques"
  },
  {
    id: 3,
    nom: "Écran 24 pouces",
    prix: 1600,
    quantite: 5,
    categorie: "Écrans"
  },
  {
    id: 4,
    nom: "Casque audio",
    prix: 320,
    quantite: 2,
    categorie: "Audio"
  },
  {
    id: 5,
    nom: "Webcam HD",
    prix: 250,
    quantite: 8,
    categorie: "Périphériques"
  }
];

function App() {
  return (
    <div>
      <Header titre="Gestion de stock" boutique="TechShop" />

      <h2>Nos produits</h2>

      {/* Un seul produit */}
      <Produit
        nom={produits[0].nom}
        prix={produits[0].prix}
        quantite={produits[0].quantite}
        categorie={produits[0].categorie}
      />

      <hr />

      <h2>Tous les produits</h2>

      {produits.map((produit) => (
        <Produit
          key={produit.id}
          nom={produit.nom}
          prix={produit.prix}
          quantite={produit.quantite}
          categorie={produit.categorie}
        />
      ))}

      <Footer annee="2026" />
    </div>
  );
}

export default App;