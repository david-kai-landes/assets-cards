# Asset Dashboard Cards

Overview

The Asset Dashboard Cards project is an interactive and visually engaging web component designed to display financial data dynamically. Each card showcases essential information about a financial asset, such as stocks, cryptocurrencies, or NFTs. The cards are designed with a sleek, modern UI and responsive elements to provide users with an immersive experience.

The project leverages React.js, Material-UI (MUI), and CSS modules to ensure reusable, scalable, and visually consistent components. It also incorporates dynamic routing and event handling to enhance interactivity and functionality.
The Asset Dashboard Cards project is an interactive and visually engaging web component designed to display financial data dynamically. Each card showcases essential information about a financial asset, such as stocks, cryptocurrencies, or NFTs. The cards are designed with a sleek, modern UI and responsive elements to provide users with an immersive experience.

The project leverages React.js, Material-UI (MUI), and CSS modules to ensure reusable, scalable, and visually consistent components. It also incorporates dynamic routing and event handling to enhance interactivity and functionality.

## Features

1. Dynamic Asset Cards

- Each card represents a specific financial category: Stock, Crypto, or NFT.
- Information displayed includes:
  - Price: Current price of the asset.
  - Market Cap: Total market capitalization.
  - 24-Hour Change: Shows the percentage of change in value within the last 24 hours.
- Additional customizations for NFTs include "Floor Price" and "Total Volume" instead of "Market Cap."

2. Clickable Elements

- "View Report" Button: Redirects users to an external website dynamically, specific to the asset category (e.g., NVIDIA's site for a Stock card, Bitcoin's page for Crypto, etc.).
- Bookmark Icon: Toggles between active and inactive states when clicked, providing a visual indicator for bookmarked assets.

3. Dynamic Styling

- Each card and its elements dynamically adjust their styles based on the asset category:
  - Stock: Green theme.
  - Crypto: Blue theme.
  - NFT: Pink theme.
- Conditional CSS styling ensures consistency while maintaining unique branding for each category.

4. Responsive Design

- The cards are fully responsive, ensuring seamless display across devices of all screen sizes.
- All UI components adapt dynamically to user interactions.

5. Category Badge

- A circular badge, positioned above each card, displays the asset category with colors corresponding to the category theme.

6. Custom Material-UI Components

- Utilizes Material-UI icons for enhanced visual appeal:
  - Bookmark Icon for favoriting assets.
  - Keyboard Arrow Icons to indicate positive or negative changes.
  - Language Icon for external links.

# How to Use

1. Installation

- Clone the repository.
- Install dependencies:
  - npm install

2. Run the Project

- Start the development server:

  - npm run dev

- The project will be available at http://localhost:5173.

3. Customize

- Modify the AssetCard component's props to include new categories, data, or styles.
- Add URLs for external links dynamically using the url property.
