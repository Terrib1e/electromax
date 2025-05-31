# ElectroMAX

ElectroMAX is a desktop application wrapper for HBO Max, built with Electron. It provides a native desktop experience for accessing HBO Max content.

## Features

- 🎬 Native desktop application for HBO Max
- 🖥️ Cross-platform support (Windows, macOS, Linux)
- 🚀 Fast loading and smooth performance
- 🔒 Secure content access
- 🎨 Clean, modern interface

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Git](https://git-scm.com/)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/electromax.git
cd electromax
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

## Building the Application

To build the application for your platform:

```bash
# For Windows
npm run build:win

# For macOS
npm run build:mac

# For Linux
npm run build:linux
```

The built applications will be available in the `dist` directory.

## Development

### Project Structure
```
electromax/
├── src/              # Source files
├── dist/             # Build output
├── index.html        # Main application window
├── package.json      # Project configuration
└── README.md         # This file
```

### Available Scripts

- `npm start` - Start the application in development mode
- `npm run build` - Build the application for the current platform
- `npm run build:win` - Build for Windows
- `npm run build:mac` - Build for macOS
- `npm run build:linux` - Build for Linux

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Electron](https://www.electronjs.org/) - Framework used
- [HBO Max](https://www.hbomax.com/) - Content provider

## Support

If you encounter any issues or have questions, please [open an issue](https://github.com/yourusername/electromax/issues) on GitHub.