import * as React from "react";
// import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
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
      <div className={styles.badge}>{category}</div>
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
              <div className={styles.dataColumnOne}>
                {category === "Stock" ? (
                  <>
                    <Typography className={styles.price}>{price}</Typography>
                    <Typography className={styles.priceText}>Price</Typography>
                    <Typography className={styles.marketCap}>
                      {marketCap}
                    </Typography>
                    <Typography className={styles.marketCapText}>
                      Market Cap
                    </Typography>
                  </>
                ) : category === "Crypto" ? (
                  <>
                    <Typography className={styles.price}>{price}</Typography>
                    <Typography className={styles.priceText}>Price</Typography>
                    <Typography className={styles.marketCap}>
                      {marketCap}
                    </Typography>
                    <Typography className={styles.marketCapText}>
                      Market Cap
                    </Typography>
                  </>
                ) : (
                  <>
                    <Typography className={styles.price}>{price}</Typography>
                    <Typography className={styles.priceText}>
                      Floor Price
                    </Typography>
                    <Typography className={styles.marketCap}>
                      {marketCap}
                    </Typography>
                    <Typography className={styles.marketCapText}>
                      Total volume
                    </Typography>
                  </>
                )}
              </div>

              <div className={styles.dataColumnTwo}>
                {category === "Stock" ? (
                  <>
                    <div className={styles.changeContainerStock}>
                      <KeyboardArrowDownIcon className={styles.arrowIconDown} />
                      <Typography className={styles.changeStock}>
                        {change}
                      </Typography>
                    </div>
                    <Typography className={styles.changeText}>
                      Change 24hrs
                    </Typography>
                  </>
                ) : category === "Crypto" ? (
                  <>
                    <div className={styles.changeContainerCrypto}>
                      <KeyboardArrowUpIcon className={styles.arrowIconUp} />
                      <Typography className={styles.changeCrypto}>
                        {change}
                      </Typography>
                    </div>
                    <Typography className={styles.changeText}>
                      Change 24hrs
                    </Typography>
                  </>
                ) : (
                  <div className={styles.changeContainerNFT}>
                    <Typography className={styles.ethereumText}>
                      Ethereum
                    </Typography>
                    <Typography className={styles.ethereumText}>
                      Crypto Chain
                    </Typography>
                  </div>
                )}

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
