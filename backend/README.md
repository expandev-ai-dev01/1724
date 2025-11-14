# NoteBox Backend API

Backend API for NoteBox - A lightweight application for creating quick notes with search and tag categorization.

## Features

- RESTful API architecture
- TypeScript for type safety
- Express.js framework
- SQL Server database integration
- Multi-tenancy support
- Comprehensive error handling
- API versioning

## Prerequisites

- Node.js 18+ 
- SQL Server 2019+
- npm or yarn

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy `.env.example` to `.env` and configure your environment variables:
   ```bash
   cp .env.example .env
   ```

4. Configure database connection in `.env` file

## Development

Run the development server:
```bash
npm run dev
```

The API will be available at `http://localhost:3000`

## Build

Build for production:
```bash
npm run build
```

## Production

Start the production server:
```bash
npm start
```

## API Documentation

### Base URL
- Development: `http://localhost:3000/api/v1`
- Production: `https://api.yourdomain.com/api/v1`

### Health Check
```
GET /health
```

Returns API health status.

## Project Structure

```
src/
├── api/                    # API controllers
│   └── v1/                 # API version 1
│       ├── external/       # Public endpoints
│       └── internal/       # Authenticated endpoints
├── routes/                 # Route definitions
│   └── v1/                 # Version 1 routes
├── middleware/             # Express middleware
├── services/               # Business logic
├── utils/                  # Utility functions
├── config/                 # Configuration
└── server.ts               # Application entry point
```

## Environment Variables

See `.env.example` for all available configuration options.

## License

ISC
