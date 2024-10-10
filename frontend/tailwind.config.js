/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Define a more modern, professional palette
        primary: '#1B1F63',    // Dark blue/purple for headers and buttons
        accent: '#4CAF50',     // Subtle green accent for positive actions
        background: '#F4F7FA', // Light gray-blue background for the overall app layout
        secondary: '#FFC107',  // Elegant yellow for key highlights (modern and subtle)
        dark: '#2D3748',       // Deep gray for text (primary)
        mutedText: '#718096',  // Muted gray for secondary text
        lightText: '#A0AEC0',  // Light text for placeholders or disabled items
        danger: '#E53E3E',     // Red for errors or critical actions
        success: '#48BB78',    // Green for success messages
        borderGray: '#E2E8F0', // Light border color for input fields, cards
      },
      fontFamily: {
        sans: ['"Roboto"', 'sans-serif'], // Professional, clean fonts
        display: ['"Poppins"', 'sans-serif'], // Optional font for headers if needed
      },
      boxShadow: {
        card: '0 10px 20px rgba(0, 0, 0, 0.1)', // Soft card shadow for professional depth
        button: '0 5px 10px rgba(0, 0, 0, 0.1)', // Slight shadow for elevated buttons
      },
      borderRadius: {
        large: '12px', // Rounded elements for a modern look
      },
    },
  },
  plugins: [],
};
