# Gear Inches Calculator

This is a simple web-based Gear Inches Calculator that computes gear inches based on:
- Chainring Teeth
- Sprocket Teeth
- Rim Diameter (in inches)
- Tire Width (in inches)

The overall (effective) wheel diameter is approximated as:

  **Overall Diameter = Rim Diameter + (2 × Tire Width)**

Gear Inches are then calculated by multiplying the gear ratio (Chainring Teeth / Sprocket Teeth) by the overall diameter.

## Project Structure

```
gear-inches-calculator/
├── .github
│    └── workflows
│        └── deploy.yml
├── README.md
├── index.html
├── assets/
│    ├── css/
│    │   └── style.css
│    └── js/
│        └── script.js
├── Dockerfile
└── fly.toml
```


## Installation and Usage

### Requirements
- A modern web browser (Chrome, Firefox, Edge, Safari, etc.)
- (Optional) Python 3 for running a local static web server

### For Windows Users

#### Option 1: Open Directly
1. Download or clone the repository to your local machine.
2. Navigate to the `gear-inches-calculator` folder.
3. Double-click the `index.html` file. It will open in your default web browser.
4. Use the calculator by entering values and clicking the **Calculate** button.

#### Option 2: Serve with a Local Server (Using Python)
1. Ensure Python 3 is installed. Open Command Prompt.
2. Navigate to the project folder:

```
cd path\to\gear-inches-calculator
```

3. Start a simple HTTP server:

```
python -m http.server 8000
```

4. Open your web browser and go to [http://localhost:8000](http://localhost:8000).

### For Linux Users

#### Option 1: Open Directly
1. Download or clone the repository to your local machine.
2. Open your file manager and navigate to the `gear-inches-calculator` folder.
3. Double-click the `index.html` file (or right-click and choose to open with your preferred web browser).

#### Option 2: Serve with a Local Server (Using Python)
1. Ensure Python 3 is installed. Open a terminal.
2. Navigate to the project folder:

```
cd /path/to/gear-inches-calculator
```

3. Start a simple HTTP server:

```
python3 -m http.server 8000
```

4. Open your web browser and visit [http://localhost:8000](http://localhost:8000).

## Files Overview

- **index.html**  
Contains the markup and links to the CSS and JavaScript files.

- **css/style.css**  
Contains styles for the calculator interface.

- **js/script.js**  
Contains the JavaScript function that performs the calculations.

## License

This project is provided under the MIT License. See the LICENSE file for more information.

---

Happy Calculating!
