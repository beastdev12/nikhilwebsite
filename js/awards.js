function CheckDeviceWidth(width) {
    return window.innerWidth <= 767;
  }
  
  let gridTemplateAreas = '';
  
  function setGridTemplateAreas() {
    const awards = document.querySelector('.awards');
    const items = awards.querySelectorAll('.awards-item');
    
    const columns = CheckDeviceWidth() ? 3 : 6;
    const totalRows = Math.ceil(items.length / columns);
  
    gridTemplateAreas = '';
    for (let i = 0; i < totalRows; i++) {
      let rowTemplate = '';
      for (let j = 0; j < columns; j++) {
        const itemIndex = i * columns + j;
        if (itemIndex < items.length) {
          rowTemplate += `a${itemIndex} `;
        } else {
          rowTemplate += `. `;
        }
      }
      if (i === totalRows - 1) {
        // Center items in the last row if it's not full
        rowTemplate = rowTemplate.trim().split(' ');
        const itemsInLastRow = items.length % columns;
        const emptyCells = columns - itemsInLastRow;
        const halfEmptyCells = Math.floor(emptyCells / 2);
  
        rowTemplate = [
          ...Array(halfEmptyCells).fill('.'),
          ...rowTemplate.slice(0, itemsInLastRow),
          ...Array(emptyCells - halfEmptyCells).fill('.')
        ].join(' ');
      }
      gridTemplateAreas += `"${rowTemplate.trim()}" `;
    }
  
    awards.style.gridTemplateAreas = gridTemplateAreas.trim();
  
    for (let i = 0; i < items.length; i++) {
      if (gridTemplateAreas.includes(`a${i}`)) {
        items[i].style.gridArea = `a${i}`;
      } else {
        items[i].style.gridArea = '';
      }
    }
  }
  
  document.addEventListener('DOMContentLoaded', setGridTemplateAreas);
  window.addEventListener('resize', setGridTemplateAreas);
  