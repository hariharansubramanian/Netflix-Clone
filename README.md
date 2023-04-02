# Netflix Clone

A Netflix clone built
using [React](https://reactjs.org/), [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/) & [MongoDB](https://www.mongodb.com/).
This is a full-stack application with authentication using [NextAuth](https://next-auth.js.org/).

## Demo

Try it yourself at [https://netflix-clone-neon-seven.vercel.app/](https://netflix-clone-neon-seven.vercel.app/).

> Please note that the website may be auto-detected as unsafe because it has the name "netflix" in its domain, hence
> detected as suspicious of phishing. You can safely ignore it.
>
> ⚠️ Although I am saving new user registrations in the database with a hashed password, I urge you not to use any
> password that you share with your other accounts.


Here's an embedded demo video:

[![Netflix Clone Demo Video](/assets/demo-video-thumbnail.jpg)](https://youtu.be/KgSyoeYeREg)

## Stack

- Frontend: [React](https://reactjs.org/)
- Server: [Next.js](https://nextjs.org/)
- Styling: [Tailwind CSS](https://tailwindcss.com/)
- Authentication: [NextAuth](https://next-auth.js.org/) with Credentials, Github & Google OAuth providers
- Database: NoSQL collections using [MongoDB](https://www.mongodb.com/)

## Configurations

> `.env` file is used to configure the application. It is not included in the repository for security reasons.
> Rename `.env.example` as `.env` file and follow the instructions below to configure the application.

### Setting up the Database

We are using MongoDB collections for this application

- Replace `DATABASE_URL` with your MongoDB connection string
- Generate the database collections by executing `npx prisma db push` command

### Google and Github sign-in

If you want to sign-in using Google or Github, configure your OAuth `client_id` and `client_secret` in `.env` file.

## How to run the application

1. Clone the repository
2. Install dependencies by running `npm install`
3. Create `.env` file and configure it according to the instructions mentioned above
4. Generate the database collections by running `npx prisma db push`
5. Run the application by executing `npm run dev` command

That's it! You can now use the Netflix clone application on your local machine.