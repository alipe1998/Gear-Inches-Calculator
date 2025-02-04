document.addEventListener("DOMContentLoaded", function () {
  updateInputs();
});

function updateInputs() {
  let chainringCount = document.getElementById('chainringCount').value;
  let cassetteCount = document.getElementById('cassetteCount').value;
  let gearInputsDiv = document.getElementById('gearInputs');
  gearInputsDiv.innerHTML = '';

  // Add header for chainring teeth inputs
  gearInputsDiv.innerHTML += '<h3>Enter Chainring Teeth</h3>';
  
  for (let i = 1; i <= chainringCount; i++) {
      gearInputsDiv.innerHTML += `<label for='chainring${i}'>Chainring ${i} Teeth:</label>` +
          `<input type='number' id='chainring${i}' min='1' value='50'><br>`;
  }

  // Add header for cassette teeth inputs
  gearInputsDiv.innerHTML += '<h3>Enter Cassette Teeth</h3>';

  for (let j = 1; j <= cassetteCount; j++) {
      gearInputsDiv.innerHTML += `<label for='cassette${j}'>Cassette ${j} Teeth:</label>` +
          `<input type='number' id='cassette${j}' min='1' value='11'><br>`;
  }
}

function generateGearTable() {
  let chainringCount = document.getElementById('chainringCount').value;
  let cassetteCount = document.getElementById('cassetteCount').value;
  let rim = parseFloat(document.getElementById('rim').value);
  let tire = parseFloat(document.getElementById('tire').value);
  let overallDiameter = rim + (2 * tire);
  let gearValues = [];

  let tableHtml = "<div style='display: flex; gap: 20px;'><div><table border='1'><tr><th>Cassette \\ Chainring</th>";
  let chainrings = [];
  for (let i = 1; i <= chainringCount; i++) {
      let chainringTeeth = parseInt(document.getElementById(`chainring${i}`).value);
      chainrings.push(chainringTeeth);
      tableHtml += `<th>${chainringTeeth}</th>`;
  }
  tableHtml += "</tr>";

  for (let j = 1; j <= cassetteCount; j++) {
      let cassetteTeeth = parseInt(document.getElementById(`cassette${j}`).value);
      tableHtml += `<tr><th>${cassetteTeeth}</th>`;
      for (let i = 0; i < chainrings.length; i++) {
          let gearInches = (chainrings[i] / cassetteTeeth) * overallDiameter;
          gearValues.push({
              label: `${chainrings[i]} x ${cassetteTeeth}`,
              value: gearInches
          });
          tableHtml += `<td>${gearInches.toFixed(2)}</td>`;
      }
      tableHtml += "</tr>";
  }
  tableHtml += "</table></div><div><canvas id='gearChart' width='600' height='400'></canvas></div></div>";
  document.getElementById('result').innerHTML = tableHtml;

  generateGearChart(gearValues);
}

function generateGearChart(gearValues) {
  // Sort values from largest to smallest
  gearValues.sort((a, b) => b.value - a.value);

  let labels = gearValues.map(item => item.label);
  let data = gearValues.map(item => item.value);

  let ctx = document.getElementById('gearChart').getContext('2d');
  new Chart(ctx, {
      type: 'bar',
      data: {
          labels: labels,
          datasets: [{
              label: 'Gear Inches',
              data: data,
              backgroundColor: 'rgba(54, 162, 235, 0.6)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1
          }]
      },
      options: {
          responsive: false,
          maintainAspectRatio: false,
          scales: {
              x: {
                  title: {
                      display: true,
                      text: 'Chainring x Cassette'
                  },
                  ticks: {
                      autoSkip: false,  // Show every x-axis label
                      maxRotation: 45,
                      minRotation: 45
                  }
              },
              y: {
                  beginAtZero: true,
                  title: {
                      display: true,
                      text: 'Gear Inches'
                  }
              }
          },
          plugins: {
              title: {
                  display: true,
                  text: 'Gear Inches by [Chainring x Cassette] Combination',
                  font: {
                      size: 18
                  }
              }
          }
      }
  });
}
