# Arch-message

**Author:** José Carlos Teles

Date: 31/08/2021

## About

### installing dependencies

```tsx
yarn
// or
npm i
```

### api

to use the api and make requests to microservices, use the following command:

```tsx
cd api
yarn dev
```

### request

after the api is running, just go to insominia and make the requests

### list users

type: **get**

path: **http://localhost:3333/user**

![Untitled](Arch-message%20f5fdcbd93eb9489a81ec1e97d9104a21/Untitled.png)

### send message

type: **POST**

path: **http://localhost:3333/message/message_id/user_id/destination_user_id/messge**

![Untitled](Arch-message%20f5fdcbd93eb9489a81ec1e97d9104a21/Untitled%201.png)