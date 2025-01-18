import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import AssetCard from "./Card";
import { Grid } from "@mui/material";

const CardList: React.FC = () => {
  const cards = useSelector((state: RootState) => state.cards);

  return (
    <Grid container spacing={2}>
      {cards.map((card) => (
        <Grid item key={card.id} xs={12} sm={6} md={4}>
          <AssetCard {...card} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CardList;
