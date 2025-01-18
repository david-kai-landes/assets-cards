import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "../styles/card.module.css";
import paperImage from "../imgs/paper.png";
import { CardMedia } from "@mui/material";

interface CardsProps {
  id: number;
  title: string;
  price: string;
  marketCap: string;
  change: string;
  category: "Stock" | "Crypto" | "NFT";
  image: string;
}

const AssetCard: React.FC<CardsProps> = ({
  title,
  price,
  marketCap,
  change,
  category,
  image,
}) => {
  return (
    <>
      <Box className={styles.badge}>{category}</Box>
      <div className={styles.cardWrapper}>
        <CardMedia
          component="img"
          image={image}
          className={styles.cardMedia}
          alt={title}
        />

        <Typography>{title}</Typography>

        <Card
          className={styles.card}
          style={{
            backgroundImage: `url(${paperImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <CardContent className={styles.cardContent}>
            <div className={styles.dataSection}>
              <div className={styles.dataColumn}>
                <Typography>{price}</Typography>
                <Typography>Price</Typography>
                <Typography>{change} </Typography>
                <Typography>Change 24hrs</Typography>
              </div>
              <div className={styles.dataColumn}>
                <Typography>{marketCap}</Typography>
                <Typography>Market Cap</Typography>
                <Button variant="contained" className={styles.button}>
                  View report
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default AssetCard;
