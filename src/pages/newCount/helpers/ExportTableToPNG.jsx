import html2canvas from 'html2canvas';

export function exportTableToPNG(divID, filename) {
    const table = document.getElementById(divID);
  
    html2canvas(table).then(function (canvas) {
      const imgData = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = imgData;
      link.download = filename + '.png';
      link.click();
    });
  }