import Image from "next/image";
import styles from "@/styles/Card.module.css";
import api from "@/services/api";
import { useEffect, useState } from "react";

const Card = ({ post }) => {
  const [redirectUrl, setRedirectUrl] = useState(null);

  const handleClick = async () => {
    const response = await api.get(`/post/clique/${post.id}`);
    setRedirectUrl(response.data.url);
  };

  useEffect(() => {
    if (redirectUrl) {
      window.location.href = redirectUrl;
      return null;
    }
  }, [redirectUrl]);

  return (
    <div onClick={handleClick} className={styles.card}>
      <div className={styles.image_card}>
        {post.thumbnail && (
          <Image
            src={post?.thumbnail}
            fill
            alt="Imagem da postagem"
            priority
            sizes="(max-width: 768px) 100%, (max-width: 1200px) 100%, 100%"
          />
        )}
      </div>
      <div className={styles.card_main}>
        <div>
          <span className={styles.blog_name}>{post.blog.nome}</span>
          <h1 title={post.titulo} className={styles.post_title}>
            {post.titulo}
          </h1>
        </div>

        <div className={styles.footer_card}>
          <span className={styles.post_at}>{post.dataPublicacao}</span>-
          <div className={styles.footer_card_info}>
            <span>🖱️ {post.cliques}</span>
            <span>💬 {post.comentarios}</span>
            <span>👍 {post.votosPositivos}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
