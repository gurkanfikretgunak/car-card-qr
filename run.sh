#!/bin/bash

# Car Card QR - Project Runner Script
# This script contains necessary commands for project development and deployment

set -e  # Stop script on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚗 Car Card QR Project Manager${NC}"
echo "==============================="

# Functions
show_help() {
    echo -e "${YELLOW}Usage:${NC}"
    echo "  ./run.sh [command]"
    echo ""
    echo -e "${YELLOW}Available commands:${NC}"
    echo "  dev      - Start development server (port 4321)"
    echo "  build    - Build the project"
    echo "  preview  - Preview the built project"
    echo "  install  - Install dependencies"
    echo "  clean    - Clean build folders"
    echo "  help     - Show this help message"
    echo ""
    echo -e "${YELLOW}Examples:${NC}"
    echo "  ./run.sh dev"
    echo "  ./run.sh build"
    echo "  ./run.sh preview"
}

check_node() {
    if ! command -v node &> /dev/null; then
        echo -e "${RED}❌ Node.js is not installed. Please install Node.js.${NC}"
        exit 1
    fi
    
    if ! command -v npm &> /dev/null; then
        echo -e "${RED}❌ npm is not installed. Please install npm.${NC}"
        exit 1
    fi
    
    echo -e "${GREEN}✅ Node.js and npm are available${NC}"
}

install_deps() {
    echo -e "${YELLOW}📦 Installing dependencies...${NC}"
    npm install
    echo -e "${GREEN}✅ Dependencies installed successfully${NC}"
}

dev_server() {
    echo -e "${YELLOW}🚀 Starting development server...${NC}"
    echo -e "${BLUE}📍 Server address: http://localhost:4321${NC}"
    echo -e "${BLUE}💡 Use Ctrl+C to stop the server${NC}"
    echo ""
    npm run dev
}

build_project() {
    echo -e "${YELLOW}🔨 Building project...${NC}"
    npm run build
    echo -e "${GREEN}✅ Build completed successfully${NC}"
    echo -e "${BLUE}📁 Build files are in 'dist' folder${NC}"
}

preview_project() {
    if [ ! -d "dist" ]; then
        echo -e "${RED}❌ Build files not found. Please run build command first.${NC}"
        echo -e "${YELLOW}💡 Run: ./run.sh build${NC}"
        exit 1
    fi
    
    echo -e "${YELLOW}👀 Previewing built project...${NC}"
    echo -e "${BLUE}📍 Preview address: http://localhost:4322${NC}"
    echo -e "${BLUE}💡 Use Ctrl+C to stop the preview${NC}"
    echo ""
    npm run preview
}

clean_project() {
    echo -e "${YELLOW}🧹 Cleaning build folders...${NC}"
    rm -rf dist
    rm -rf .astro
    echo -e "${GREEN}✅ Cleanup completed${NC}"
}

# Node.js and npm check
check_node

# node_modules check
if [ ! -d "node_modules" ]; then
    echo -e "${YELLOW}⚠️  node_modules not found. Installing dependencies...${NC}"
    install_deps
fi

# Command control
case "$1" in
    "dev")
        dev_server
        ;;
    "build")
        build_project
        ;;
    "preview")
        preview_project
        ;;
    "install")
        install_deps
        ;;
    "clean")
        clean_project
        ;;
    "help"|"")
        show_help
        ;;
    *)
        echo -e "${RED}❌ Unknown command: $1${NC}"
        echo ""
        show_help
        exit 1
        ;;
esac
