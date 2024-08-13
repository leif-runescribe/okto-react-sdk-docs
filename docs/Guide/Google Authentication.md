# Google Console Setup Guide

This guide will walk you through the steps to set up a project in Google Console, create an OAuth consent screen, and generate web and Android client IDs for Google authentication.

## Creating a Project in Google Console

1. **Go to Google Cloud Console** and sign in with your Google account.
2. Click on the **project selector dropdown** at the top of the page.
3. Click on **"New Project"**.
4. Enter a name for your project and click **"Create"**.
5. Once the project is created, **select it** from the project selector dropdown.

![New Project](https://via.placeholder.com/600x300?text=New+Project) 

## Creating an OAuth Consent Screen

1. In Google Cloud Console, navigate to **"APIs & Services" > "OAuth consent screen"** from the left sidebar.
2. Click on **"Create"** to start setting up your consent screen.
3. Choose the user type for your application (Internal or External) and click **"Create"**.
4. Fill out the required fields on the consent screen configuration form:
   - **Application name:** Enter the name of your application.
   - **User support email:** Enter an email address where users can contact you for support.
   - **Developer contact information:** Provide contact information for the developer of the application.
5. Click **"Save and Continue"**.

![Consent Screen](https://via.placeholder.com/600x300?text=Consent+Screen) 

## Creating an Android Client ID

1. In Google Cloud Console, navigate to the **"Credentials"** page under **"APIs & Services"**.
2. Click on **"Create credentials"** and select **"OAuth client ID"**.
3. Choose **"Android"** as the application type.
4. In the **"Package name"** field, enter the package name of your Android app (e.g., `com.example.myapp`).
5. In the **"SHA-1 certificate fingerprint"** field, enter the SHA-1 fingerprint of your signing certificate. Obtain this fingerprint using `keytool` or Android Studio. Use the following command to get the fingerprint with `keytool`:

    ```bash
    keytool -keystore ./android/app/debug.keystore -list -v
    ```

6. Click **"Create"** to generate your Android client ID.
7. Copy the client ID provided.

![Android Client](https://via.placeholder.com/600x300?text=Android+Client) 

## Creating a Web Client ID

1. Navigate to the **"Credentials"** page under **"APIs & Services"** in Google Cloud Console.
2. Click on **"Create credentials"** and select **"OAuth client ID"**.
3. Choose **"Web application"** as the application type.
4. Click **"Create"** to generate your web client ID.
5. Copy the client ID and client secret provided.

![Web Client](https://via.placeholder.com/600x300?text=Web+Client) 

## Conclusion

You have successfully set up a project in Google Console, created an OAuth consent screen, and generated web and Android client IDs for Google authentication. You can now integrate Google authentication into Android applications using the provided client IDs.

---

For more details, refer to the [Google Cloud documentation](https://cloud.google.com/docs) or reach out to our support team for assistance.

