# 🐶 DogFetch

DogFetch is a lightweight and fun React + TypeScript app built with Vite that fetches and displays dog images using the Dog CEO API. Perfect for practicing API integration, component design, and type safety in a modern frontend stack.

## 🧪 Tech Stack

Tech	Description	
React	UI library for building components	
TypeScript	Type-safe JavaScript	
Vite	Fast development and build tooling	
CSS Modules / Bootstrap Styling (customizable)	
Dog CEO API	Free API for random dog images	


## ✨ Features

• 🐾 Fetches dog images on button click
• 📸 Displays images in a responsive grid
• 🔁 Option to reload or fetch new images
• 🧩 Modular components with clean structure
• 💬 Error handling and loading states


## 📁 Project Structure

src/
├── components/       # Reusable UI components (DogCard, Loader, ErrorMessage)
├── api/              # API fetch logic and types
├── types/            # TypeScript interfaces
├── App.tsx           # Main app component
└── main.tsx          # Entry point


## 🚀 Getting Started

# Clone the repository
git clone https://github.com/your-username/dogfetch.git

# Navigate into the project folder
cd dogfetch

# Install dependencies
npm install

# Start the development server
npm run dev


## 🖼️ Demo

This app is not deployed yet, but you can run it locally using the steps above.

## 🔧 API Reference

DogFetch uses the Dog CEO API to retrieve images:

• GET https://dog.ceo/api/breeds/image/random – returns a random dog image
• You can extend it to filter by breed or load multiple images


## 📌 Future Enhancements

• 🐕 Filter by breed
• 💾 Save favorite images
• 🌐 Deploy to Vercel or Netlify
• 🧪 Add unit tests with Vitest or Jest
