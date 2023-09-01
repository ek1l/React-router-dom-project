import React from 'react';
import styles from './Produtos.module.css';
import Head from './Head';
import { Link } from 'react-router-dom';
const Produtos = () => {
  const [produtos, setProdutos] = React.useState(null);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto')
      .then((r) => r.json())
      .then((json) => setProdutos(json));
  }, []);
  if (produtos === null) return null;
  return (
    <section className={styles.produtos + ' animeLeft'}>
      <Head title="Ranek | Produtos" description="Nossos Produtos" />
      {produtos.map((produto) => (
        <Link to={`produto/${produto.id}`} key={produto.id}>
          <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
          <h1 className={styles.nome}>{produto.nome}</h1>
        </Link>
      ))}
    </section>
  );
};

export default Produtos;
