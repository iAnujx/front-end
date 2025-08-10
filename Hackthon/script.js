const datasetColumns = {
  dataset1: ["Name", "Department", "Salary", "Joining Date"],
  dataset2: ["Order ID", "Customer Name", "Amount", "Date"],
  dataset3: ["Product Name", "Category", "Price", "Stock"]
};

window.addEventListener("DOMContentLoaded", () => {
  const datasetSelect = document.getElementById("datasetSelect");
  const columnSelect = document.getElementById("columnSelect");
  const filterSection = document.getElementById("filterSection");
  const filterValue = document.getElementById("filterValue");
  const applyFilter = document.getElementById("applyFilter");
  const result = document.getElementById("result");

  datasetSelect.addEventListener("change", () => {
    const selectedDataset = datasetSelect.value;
    columnSelect.innerHTML = "";

    if (selectedDataset) {
      filterSection.style.display = "block";
      datasetColumns[selectedDataset].forEach(col => {
        const option = document.createElement("option");
        option.value = col;
        option.textContent = col;
        columnSelect.appendChild(option);
      });
    } else {
      filterSection.style.display = "none";
    }
  });

  applyFilter.addEventListener("click", () => {
    const dataset = datasetSelect.value;
    const column = columnSelect.value;
    const value = filterValue.value;

    result.innerHTML = `
      <strong>Applied Filter:</strong><br>
      Dataset: ${dataset}<br>
      Column: ${column}<br>
      Value: ${value}
    `;
  });
});