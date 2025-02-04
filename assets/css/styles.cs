/* Improved modern dark theme */
body {
  font-family: 'Inter', sans-serif;
  background-color: #1e1e1e;
  color: #eaeaea;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

/* Centered and modernized container */
.container {
  max-width: 600px;
  padding: 30px;
  background-color: #2a2a2a;
  border-radius: 12px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.3);
  text-align: center;
}

/* Headings */
h1 {
  font-size: 24px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 20px;
}

/* Styled calculator input */
.calculator {
  padding: 20px;
}

label {
  display: block;
  margin: 10px 0;
  font-size: 16px;
  color: #cccccc;
}

/* Modernized input styling */
input {
  width: 100%;
  padding: 8px;
  border: 1px solid #444;
  border-radius: 6px;
  background-color: #3b3b3b;
  color: #ffffff;
  transition: 0.3s ease-in-out;
}

input:focus {
  border-color: #6200ea;
  outline: none;
}

/* Stylish button */
button {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  background: linear-gradient(135deg, #6200ea, #3700b3);
  color: #ffffff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

button:hover {
  background: linear-gradient(135deg, #3700b3, #6200ea);
}

/* Responsive table styling */
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th, td {
  border: 1px solid #555;
  padding: 10px;
  text-align: center;
}

th {
  background-color: #444;
  color: #fff;
}

td {
  background-color: #333;
  color: #ddd;
}
