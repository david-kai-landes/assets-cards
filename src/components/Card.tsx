import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "../styles/card.module.css";
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
      ll
      <CardMedia
        component="img"
        image={image}
        style={{ height: 256, width: 256 }}
        alt={title}
      />
      <Card className={styles.card}>
        <CardContent>
          <Typography>{title}</Typography>
        </CardContent>
        <CardContent>
          <Typography>{price}</Typography>
          <Typography>Price</Typography>
          <Typography>{change} </Typography>
          <Typography>Change 24hrs</Typography>
          <Typography>{marketCap}</Typography>
          <Typography>Market Cap</Typography>
          <Button variant="contained" className={styles.button}>
            View report
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default AssetCard;
