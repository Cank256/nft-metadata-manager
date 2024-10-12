
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