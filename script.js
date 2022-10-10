let taskDone = {
  fetchInfo: function (json) {
    fetch("./json.json")
      .then((response) => response.json())
      .then((data) => this.displayInfo(data));
  },
  displayInfo: function (data) {
    const data_array = data.tasks[0].assets;
    console.log(data_array);
  },
};

task.fetchInfo();
