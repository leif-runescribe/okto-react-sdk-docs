---
id: app-setup-guide
title: Setting Up Your App with Okto SDK
sidebar_label: App Setup Guide
description: A comprehensive guide to setting up your React app with Okto SDK
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# App Setup Guide

## Introduction

We're about to embark on building an app using Okto and its powerful methods. Before we dive into the exciting features, let's go through some essential setup steps. While these might seem familiar, they're crucial for creating a robust app environment. Our main focus will be on leveraging Okto's features, so let's get started!

:::tip
We have a React Native sample app integrated with Okto SDK that you can use as a starting point. [Check it out here](https://github.com/okto-hq/okto-sdk-react-native-example)
:::

## Install Required Packages

First things first, let's install the necessary packages.

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



## Setup Google and Okto Provider

To utilize the SDK within your application, follow these steps:

```typescript
import React from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App';
 
const root = ReactDOM.createRoot(document.getElementById('root'));
const GOOGLE_CLIENT_ID = ""
 
root.render(
<React.StrictMode>
  <GoogleOAuthProvider clientId = {GOOGLE_CLIENT_ID}>
    <App />
  </GoogleOAuthProvider>
</React.StrictMode>
);
```

Wrap your application with the OktoProvider component, providing the necessary configuration parameters:

```typescript
import React from 'react';
import { OktoProvider, BuildType } from 'okto-sdk-react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
 
const OKTO_CLIENT_API_KEY = "";
 
function App() {
  console.log('App component rendered');
  return (
    <Router>
      <OktoProvider apiKey={OKTO_CLIENT_API_KEY} buildType={BuildType.SANDBOX}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </OktoProvider>
    </Router>
  );
}
export default App;
```

Great! With that, the setup is complete. You can now start building the app with Okto. 🚀

