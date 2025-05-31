# ElectroMAX

ElectroMAX is a powerful desktop application wrapper for HBO Max, built with Electron. It provides a seamless native desktop experience for accessing HBO Max content with enhanced features and performance.

## ✨ Features

- 🎬 Native desktop application for HBO Max
- 🖥️ Cross-platform support (Windows, macOS, Linux)
- 🚀 Fast loading and smooth performance
- 🔒 Secure content access with built-in security features
- 🎨 Clean, modern interface with customizable themes
- 📺 Picture-in-Picture mode for multitasking
- ⌨️ Keyboard shortcuts for quick navigation
- 🔔 Notifications for new content and updates
- 💾 Offline content management
- 🎮 Game controller support for gaming content

## 🛠️ System Requirements

### Windows
- Windows 10 or later
- 4GB RAM minimum (8GB recommended)
- 500MB free disk space
- DirectX 11 compatible graphics card

### macOS
- macOS 10.13 or later
- 4GB RAM minimum (8GB recommended)
- 500MB free disk space
- Metal-compatible graphics card

### Linux
- Ubuntu 18.04 or later
- 4GB RAM minimum (8GB recommended)
- 500MB free disk space
- OpenGL 3.0 compatible graphics card

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Git](https://git-scm.com/)
- [Visual Studio Build Tools](https://visualstudio.microsoft.com/visual-cpp-build-tools/) (Windows only)

## 🚀 Installation

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

## 🏗️ Building the Application

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

## 💻 Development

### Project Structure
```
electromax/
├── src/              # Source files
│   ├── main/        # Main process files
│   ├── renderer/    # Renderer process files
│   └── shared/      # Shared utilities
├── dist/            # Build output
├── assets/          # Static assets
├── tests/           # Test files
├── index.html       # Main application window
├── package.json     # Project configuration
└── README.md        # This file
```

### Available Scripts

- `npm start` - Start the application in development mode
- `npm run build` - Build the application for the current platform
- `npm run build:win` - Build for Windows
- `npm run build:mac` - Build for macOS
- `npm run build:linux` - Build for Linux
- `npm test` - Run test suite
- `npm run lint` - Run linter
- `npm run format` - Format code using Prettier

## 🔧 Troubleshooting

### Common Issues

1. **Application won't start**
   - Ensure all dependencies are installed
   - Check system requirements
   - Clear application cache

2. **Build fails**
   - Verify Node.js version
   - Check for system-specific build tools
   - Clear npm cache

3. **Performance issues**
   - Update graphics drivers
   - Close unnecessary background applications
   - Check system resource usage

## 📝 Changelog

### Version 1.0.0
- Initial release
- Basic HBO Max integration
- Cross-platform support

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please read our [Contributing Guidelines](CONTRIBUTING.md) for more details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Electron](https://www.electronjs.org/) - Framework used
- [HBO Max](https://www.hbomax.com/) - Content provider
- [Electron Builder](https://www.electron.build/) - Application packaging
- [Electron Store](https://github.com/sindresorhus/electron-store) - Data persistence

## 💬 Support

If you encounter any issues or have questions, you can:

- [Open an issue](https://github.com/yourusername/electromax/issues) on GitHub
- Join our [Discord community](https://discord.gg/electromax)
- Check our [FAQ](docs/FAQ.md)
- Email us at support@electromax.app

## 📞 Contact

- Website: [electromax.app](https://electromax.app)
- Twitter: [@ElectroMAXapp](https://twitter.com/ElectroMAXapp)
- Email: contact@electromax.app