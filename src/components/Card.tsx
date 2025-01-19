import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
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
  url: string;
}

const AssetCard: React.FC<CardsProps> = ({
  title,
  price,
  marketCap,
  change,
  category,
  image,
  url,
}) => {
  //
  const renderDataColumnOne = () => (
    <>
      <Typography className={styles.price}>{price}</Typography>
      <Typography className={styles.priceText}>
        {category === "NFT" ? "Floor Price" : "Price"}
      </Typography>
      <Typography className={styles.marketCap}>{marketCap}</Typography>
      <Typography className={styles.marketCapText}>
        {category === "NFT" ? "Total Volume" : "Market Cap"}
      </Typography>
    </>
  );

  const renderDataColumnTwo = () => {
    if (category === "Stock") {
      return (
        <>
          <div className={`${styles.changeContainer} ${styles.stock}`}>
            <KeyboardArrowDownIcon className={styles.arrowIconStock} />
            <Typography className={styles.change}>{change}</Typography>
          </div>
          <Typography className={styles.changeText}>Change 24hrs</Typography>
        </>
      );
    }
    if (category === "Crypto") {
      return (
        <>
          <div className={`${styles.changeContainer} ${styles.crypto}`}>
            <KeyboardArrowUpIcon className={styles.arrowIconCrypto} />
            <Typography className={styles.change}>{change}</Typography>
          </div>
          <Typography className={styles.changeText}>Change 24hrs</Typography>
        </>
      );
    }

    //NFT
    return (
      <div className={`${styles.changeContainernft} ${styles.nft}`}>
        <Typography className={styles.ethereumText}>Ethereum</Typography>
        <Typography className={styles.ethereumText}>Crypto Chain</Typography>
      </div>
    );
  };

  return (
    <>
      {/* <Typography>{title}</Typography> */}
      {/* <div className={styles.badge}>{category}</div> */}
      <div className={styles.cardWrapper}>
        <div className={styles.cardMediaWrapper}>
          <BookmarkBorderOutlinedIcon
            className={`${styles.outLinedIcon} ${
              category === "Stock"
                ? styles.stockOutLinedIcon
                : category === "Crypto"
                ? styles.cryptoOutLinedIcon
                : styles.nftOutLinedIcon
            }`}
          />
          <div
            className={`${styles.cardMediaCategoty} ${
              category === "Stock"
                ? styles.stockCategory
                : category === "Crypto"
                ? styles.cryptoCategory
                : styles.nftCategory
            }`}
          >
            {category}
          </div>
          <CardMedia
            component="img"
            image={image}
            className={`${styles.cardMedia} ${
              category === "Stock"
                ? styles.stockCardMedia
                : category === "Crypto"
                ? styles.cryptoCardMedia
                : styles.nftCardMedia
            }`}
            alt={title}
          />
          <div className={styles.cardMediaTitle}>{title}</div>
        </div>

        <Card
          className={`${styles.card} ${
            category === "Stock"
              ? styles.stockCard
              : category === "Crypto"
              ? styles.cryptoCard
              : styles.nftCard
          }`}
          style={{
            backgroundImage: `url(${paperImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <LanguageOutlinedIcon
            className={`${styles.LanguageOutlinedIcon} ${
              category === "Stock"
                ? styles.stockLanguageOutlinedIcon
                : category === "Crypto"
                ? styles.cryptoLanguageOutlinedIcon
                : styles.nftLanguageOutlinedIcon
            }`}
          />
          <CardContent className={styles.cardContent}>
            <div className={styles.dataSection}>
              <div className={styles.dataColumnOne}>
                {renderDataColumnOne()}
              </div>
              <div
                className={`${styles.dataColumnTwo} ${
                  category === "NFT" ? styles.nftContainer : ""
                }`}
              >
                {renderDataColumnTwo()}
                <Button
                  variant="contained"
                  className={styles.button}
                  style={{ textTransform: "none" }}
                  onClick={() => window.open(url, "_blank")}
                >
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
