## Fetching and Displaying User Details

Now that the user is authenticated and has an Okto wallet, you can fetch the user details from Okto and display them in the app.

### Fetch User Details

In this section, we will show how to fetch user details using the Okto SDK and display them on the Home Page.

#### Code Example

Below is a code example of how to fetch and display user details:

```jsx
import { useOkto } from "okto-sdk-react";
import React, { useState } from 'react';

function HomePage() {
  const [userDetails, setUserDetails] = useState(null);
  const [error, setError] = useState(null);
  const { getUserDetails } = useOkto();

  const fetchUserDetails = async () => {
    try {
      const details = await getUserDetails();
      setUserDetails(details);
    } catch (error) {
      setError(`Failed to fetch user details: ${error.message}`);
    }
  };

  return (
    <div style={containerStyle}>
      <h1>Home Page</h1>
      <button onClick={fetchUserDetails}>View User Details</button>
      {userDetails && (
        <div>
          <h2>User Details:</h2>
          <pre>{JSON.stringify(userDetails, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default HomePage;
```