
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Minting NFTs with Server-to-Server API

Imagine this: your user wants to mint an NFT, but they prefer to do it quietly in the background without any direct user involvement. This is where the server-to-server (S2S) API feature comes in handy.

With the S2S API, you can integrate NFT minting into automated processes or workflows without requiring user interaction.

We will explore how to mint an NFT using the Server-to-Server API. For this example, we will use Express and Node.js to create a server, then consume the S2S API to mint an NFT.

### Setup a Server

First, let's initialize a new Node.js project and install the required packages:

<Tabs>
    <TabItem value="pnpm" label="pnpm">
    ```typescript
    pnpm init -y
pnpm install express typescript @types/node @types/express ts-node axios --save
```
    </TabItem>
    <TabItem value="npm" label="npm">
    ```typescript
    npm init -y
npm install express typescript @types/node @types/express ts-node axios --save
```
    </TabItem>
    <TabItem value="yarn" label="yarn">
    ```typescript
    yarn init -y
yarn add express typescript @types/node @types/express ts-node axios
    ```
    </TabItem>
</Tabs>

### Create a Server

```typescript
import express, { Request, Response } from 'express';
 
const app = express();
const port = 3000;
 
app.get('/', (req: Request, res: Response) => {
    res.send('Hello, World!');
});
 
app.listen(port, () => {
    console.log(`⚡ Server is running at http://localhost:${port}`);
});
```


## Add a route to mint NFT
Now lets add a route to mint NFT. We will utilize the Mint NFT API for this. This route will accept the required parameters in the body:

networkName - The network name of the NFT
collectionName - The name of the collection
collectionAddress - The address of the collection
quantity - The quantity of NFTs to mint
metadata - The metadata of the NFT
uri - The image of the NFT
nftName - The name of the NFT
description - The description of the NFT
You will need your S2S API Key obtained from Okto.

```typescript
import express, { Request, Response } from 'express';
import axios from 'axios';
 
...
 
app.post('/mint-nft', async (req: Request, res: Response) => {
    try{
        const apiEndpoint = '${baseUrl}/s2s/api/v1/nft/mint';
         const {
            networkName,
            collectionName,
            collectionAddress,
            quantity,
            metadata,
        } = req.body;
 
        const apiKey = "YOUR_S2S_API_KEY"
        const headers = {
            headers: {
                'x-api-key': apiKey,
            },
        }
 
        const requestBody = {
            operation_type: 'NFT_MINT',
            ercType: 'ERC721',
            network_name: networkName,
            collection_name: collectionName,
            collection_address: collectionAddress,
            quantity: quantity,
            metadata: metadata,
        };
 
        const response = await axios.post(apiEndpoint, requestBody, headers);
        if(response.status === 200){
            const { data: { order_id } }  = response.data;
            res.send('NFT Minted');
        }
    }
    catch(error){
        console.error('Error:', error.message);
        res.status(500).send('Internal Server Error');
    }
 
})
 ```