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

### For Windows Users

#### Option 1: Open Directly
1. Download or clone the repository to your local machine.
2. Navigate to the `gear-inches-calculator` folder.
3. Double-click the `index.html` file. It will open in your default web browser.
4. Use the calculator by entering values and clicking the **Calculate** button.

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
