const args = process.argv.slice(2);

const beepSound = () => {
  process.stdout.write('\x07');
};


for (let time of args) {
  if (time > 0 && !isNaN(time)) {
    setTimeout(() => {
      beepSound();
    }, time * 1000);
  }
}

