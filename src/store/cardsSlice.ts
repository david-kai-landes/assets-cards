import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CardData {
  id: number;
  title: string;
  price: string;
  marketCap: string;
  change: string;
  category: "Stock" | "Crypto" | "NFT";
}

const initialState: CardData[] = [
  {
    id: 1,
    title: "Nvidia",
    price: "$137.71",
    marketCap: "$3.31T",
    change: "-2.19%",
    category: "Stock",
  },
  {
    id: 2,
    title: "Bitcoin",
    price: "$96,826.97",
    marketCap: "$2.0T",
    change: "+2.19.%",
    category: "Crypto",
  },
  {
    id: 3,
    title: "Pudgy Penguins",
    price: "23.12 ETH",
    marketCap: "361 ETH",
    change: "+1.12%",
    category: "NFT",
  },
];

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {},
});

export default cardsSlice.reducer;
