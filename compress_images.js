const compress_images = require("compress-images"),
  fs = require("fs"),
  INPUT_path_to_your_images = "src/images/**/!(*-min).png",
  OUTPUT_path = "src/images/";

compress_images(
  INPUT_path_to_your_images,
  OUTPUT_path,
  { compress_force: true, statistic: false, autoupdate: true },
  false,
  { jpg: { engine: false, command: false } },
  {
    png: {
      engine: "pngquant",
      command: ["--quality=20-50", "--ext=-min.png", "--force", "--strip"],
    },
  },
  { svg: { engine: false, command: false } },
  { gif: { engine: false, command: false } },
  function (err, completed, statistic) {
    if (err === null) {
      fs.unlink(statistic.input, (err) => {
        if (err) throw err;
        console.log("successfully compressed and deleted " + statistic.input);
      });
    }
  }
);
