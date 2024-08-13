

Okto React SDK Overview
The Okto React SDK provides a comprehensive set of functions to manage user authentication, portfolio data, supported networks and tokens, user details, wallet management, order history, NFT order details, transaction statuses, token and NFT transfers, raw transaction executions, and UI theme settings. Below is an overview of the available functions and their respective purposes.

| Category      | Function      | Description       |
|----------------|----------------|----------------|
| Feature                  | Description                                                   | Details                                                                 |
||||
| Authentication           | `isLoggedIn: boolean`                                        | Indicates if the user is currently logged in.                          |
| Transaction Management   | `closeModal(): void`                                        | Closes the modal.                                                       |
| NFT Management           | `getNftOrderDetails(query: Partial<NftOrderDetailsQuery>): Promise<NftOrderDetailsData>` | Fetches the NFT order details based on the query.                        |
