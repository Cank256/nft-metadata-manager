
# NFT Metadata Manager

## Overview

**NFT Metadata Manager** is a tool designed for NFT creators to simplify the process of uploading images and generating metadata for their NFT collections. This application utilizes [Pinata](https://pinata.cloud/) to store images and metadata on [IPFS](https://ipfs.io/), providing a decentralized and secure way to manage NFT assets. 

With this tool, users can:
- Upload artwork files (images) for NFTs.
- Add descriptions and properties to the NFTs.
- Generate metadata in JSON format, following standards like ERC-721 and ERC-1155.
- Preview how the NFT will look with the provided data.
- Obtain a direct link to the JSON metadata hosted on IPFS.

## Features

- **File Upload**: Upload images for NFTs securely to IPFS via the Pinata API.
- **Metadata Generation**: Create JSON metadata for NFTs, including properties like name, description, and image URLs.
- **Preview**: Visualize the NFT metadata and images before finalizing.
- **User Authentication**: Allow users to create accounts and manage their uploads using Supabase.
- **Database Integration**: Store user data, file references, and generated metadata in MongoDB.
- **Easy Deployment**: Frontend is deployed using Vercel for fast and scalable performance.

## Technologies Used

- **Frontend**: [Next.js](https://nextjs.org/), [shadcn/ui](https://shadcn.dev/)
- **Backend**: [Node.js](https://nodejs.org/) with [Express.js](https://expressjs.com/)
- **File Storage**: [Pinata API](https://pinata.cloud/) for storing images and metadata on IPFS
- **Database**: [MongoDB](https://www.mongodb.com/)
- **Authentication**: [Supabase](https://supabase.com/) or JWT-based auth for user management
- **Deployment**: [Vercel](https://vercel.com/) for frontend, backend can be hosted on [Heroku](https://heroku.com/) or [Railway](https://railway.app/)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v20+)
- NEXT.js (v14+)
- MongoDB instance (local or cloud, e.g., [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- Supabase project for authentication or Firebase
- Pinata account with API Key and Secret
- Vercel (or Netlify or Docker) for frontend deployment
- Heroku (or Railway or Docker) for backend deployment
- Shadcn/ui library for building user interfaces

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Cank256/nft-metadata-manager.git
   cd nft-metadata-manager
   ```

2. **Install Frontend Dependencies**:
   ```bash
   cd frontend
   npm install
   ```

3. **Install Backend Dependencies**:
   ```bash
   cd ../backend
   npm install
   ```

4. **Environment Variables**:
   Create a `.env` file in the `frontend` directory with the following content:
   ```env
   PORT=3000
   SUPABASE_URL=your_supabase_url
   SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

   Create a `.env` file in the `backend` directory with the following content:
   ```env
   PORT=5000
   MONGO_URI=your_mongo_connection_string
   PINATA_API_KEY=your_pinata_api_key
   PINATA_API_SECRET=your_pinata_api_secret
   ```

5. **Start the Development Server**:
   - **Frontend**: In the `frontend` directory:
     ```bash
     npm run dev
     ```
   - **Backend**: In the `backend` directory:
     ```bash
     npm run start
     ```

6. **Access the Application**:
   Open your browser and navigate to `http://localhost:3000` to view the app.

## Usage

1. **User Registration/Login**:
   - Register an account using your email and password.
   - Login to access the file upload and metadata generation features.

2. **Upload Image**:
   - Navigate to the upload page and select an image file.
   - Add a description and other properties for the NFT.

3. **Generate Metadata**:
   - The metadata will be automatically generated in JSON format.
   - The JSON file will be stored on IPFS using Pinata.

4. **Preview and Share**:
   - Preview how the NFT will look with the uploaded data.
   - Copy the IPFS link to share or use the JSON metadata for minting NFTs.

## Contributing

We welcome contributions! Please read the [contributing guidelines](CONTRIBUTING.md) for more details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, please reach out to me at [nkunzecaleb@gmail.com](mailto:nkunzecaleb@gmail.com).