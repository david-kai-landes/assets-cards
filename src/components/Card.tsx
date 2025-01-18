import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "../styles/card.module.css";

interface CardsProps {
  id: number;
  title: string;
  price: string;
  marketCap: string;
  change: string;
  category: "Stock" | "Crypto" | "NFT";
}

const AssetCard: React.FC<CardsProps> = ({
  title,
  price,
  marketCap,
  change,
  category,
}) => {
  return (
    <Card className={styles.card}>
      <CardContent>
        <Box className={styles.badge}>{category}</Box>
        <Typography>{title}</Typography>
        <Typography>Price: {price}</Typography>
        <Typography>Market Cap: {marketCap}</Typography>
        <Typography>Change: {change} </Typography>
        <Button variant="contained" className={styles.button}>
          View report
        </Button>
      </CardContent>
    </Card>
  );
};

export default AssetCard;
