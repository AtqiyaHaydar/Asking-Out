const saveDataToDatabase = (dataFinal) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://trash-panda.site/api.php", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(xhr.responseText);
        } else {
          reject(new Error("Request failed"));
        }
      }
    };

    const requestBody = JSON.stringify(dataFinal);

    xhr.send(requestBody);
  });
};

export default saveDataToDatabase;